"use client";

import type { GestureRecognizer } from "@mediapipe/tasks-vision";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Webcam from "react-webcam";
import Container from "@/components/Container";
import useGestureDetectionLoop from "@/hooks/useGestureDetectionLoop";
import { getImageByCharacterArray } from "@/utils/getImageByCharacter";
import CameraError from "./CameraError";
import CorrectGestureOverlay from "./CorrectGestureOverlay";
import InitialLoadOverlay from "./InitialLoadOverlay";
import ShowImageOverlay from "./ShowImageOverlay";
import SuccessOverlay from "./SuccessOverlay";

function Training() {
	const [imgIndex, setImgIndex] = useState(0); // current image to show
	const [correctGesture, setCorrectGesture] = useState(false); // tracks if gesture is correct
	const [isCameraError, setIsCameraError] = useState(false);

	const imageObjects = getImageByCharacterArray;

	// overlay states
	const [initialLoadOverlay, setInitialLoadOverlay] = useState(true); // screen overlay for initial load
	const [gestureImageOverlay, setGestureImageOverlay] = useState(false); // tracks the gesture learning image
	const [successOverlay, setSuccessOverlay] = useState(false); // overlay if gesture is successful
	const [correctGestureOverlay, setCorrectGestureOverlay] = useState(false); // short overlay to let user know gesture was correct

	// webcam ref, hand gesture recognizer
	const cameraRef = useRef<Webcam | null>(null);
	const [handRecognizerState, setHandRecognizerState] =
		useState<GestureRecognizer | null>(null);

	const { currentGesture } = useGestureDetectionLoop({
		handRecognizerState,
		cameraRef,
	});

	const handleShowImage = () => {
		setInitialLoadOverlay(false);
		setGestureImageOverlay(true);
	};

	const handleStartTraining = () => {
		setInitialLoadOverlay(false);
		setGestureImageOverlay(false);
		setSuccessOverlay(false);
	};

	const handleCorrectGesture = () => {
		setCorrectGestureOverlay(true);
		setImgIndex((prev) => (prev + 1) % imageObjects.length);
	};

	const handleLeaveSuccessOverlay = () => setSuccessOverlay(false);

	useEffect(() => {
		if (
			currentGesture &&
			currentGesture.categoryName === imageObjects[imgIndex][0]
		) {
			setCorrectGesture(true);
		} else {
			setCorrectGesture(false);
		}
	}, [currentGesture, imgIndex, imageObjects]);

	return (
		<Container>
			{isCameraError && <CameraError />}
			{initialLoadOverlay && (
				<InitialLoadOverlay
					handleClick={handleShowImage}
					setHandRecognizerState={setHandRecognizerState}
				/>
			)}
			{gestureImageOverlay && (
				<ShowImageOverlay
					imageObject={imageObjects[imgIndex]}
					handleClick={handleStartTraining}
				/>
			)}
			{successOverlay && (
				<SuccessOverlay
					imageObject={imageObjects[imgIndex]}
					handleClick={handleLeaveSuccessOverlay}
				/>
			)}
			{!initialLoadOverlay &&
				!gestureImageOverlay &&
				!successOverlay &&
				!isCameraError && (
					<motion.div
						key="animateWebcam"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
						className="absolute left-0 top-0 -z-10 overflow-hidden"
					>
						<div className="bg-white/20 backdrop-blur-sm absolute left-10 bottom-10 z-10 text-7xl px-4 py-2 rounded-xl opacity-90 font-oxanium font-bold">
							{imageObjects[imgIndex][0]}
						</div>
						{correctGesture && (
							<div className="absolute text-9xl text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-50 md:scale-100">
								<CountdownCircleTimer
									isPlaying={correctGesture}
									duration={3}
									colors="#68a67d"
									size={500}
									strokeWidth={40}
									onComplete={handleCorrectGesture}
								>
									{({ remainingTime }) => remainingTime}
								</CountdownCircleTimer>
							</div>
						)}
						<AnimatePresence
							mode="wait"
							onExitComplete={() => setSuccessOverlay(true)}
						>
							{correctGestureOverlay && (
								<CorrectGestureOverlay
									setCorrectGestureOverlay={setCorrectGestureOverlay}
								/>
							)}
						</AnimatePresence>
						<Webcam
							ref={cameraRef}
							audio={false}
							mirrored
							videoConstraints={{
								facingMode: "user",
							}}
							onUserMediaError={() => setIsCameraError(true)}
							className="h-screen w-screen object-cover"
						/>
					</motion.div>
				)}
		</Container>
	);
}

export default Training;
