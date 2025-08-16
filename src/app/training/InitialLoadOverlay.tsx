"use client";

import {
	CameraIcon,
	CheckBadgeIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import type { GestureRecognizer } from "@mediapipe/tasks-vision";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { LargeButton } from "@/components/Buttons";
import useDetectCamera from "@/hooks/useDetectCamera";
import fetchGestureRecognizer from "@/utils/fetchGestureRecognizer";

interface LoadingComponentProps {
	heading: string;
	successHeading: string;
	failHeading: string;
	text: string;
	index: number;
	active: boolean;
	success: boolean | null;
}

const iconStyles = "size-6 lg:size-8";

function LoadingComponent({
	heading,
	successHeading,
	failHeading,
	text,
	index,
	active,
	success,
}: LoadingComponentProps) {
	const icon = success ? (
		<CheckBadgeIcon className={`${iconStyles} text-success`} />
	) : (
		<ExclamationTriangleIcon className={`${iconStyles} text-warning`} />
	);

	return (
		<li
			className={`
				grid grid-cols-[26px_1fr] relative rounded-md xl:rounded-xl border-[#1e1a29]/70 bg-[#8a4fff]/20 backdrop-blur-xl p-2 gap-x-4
				md:p-4
				xl:block xl:p-4
				${active && "*:animate-pulse"} ${!active && "brightness-50 opacity-50"} ${success === false && "animate-none"}
			`}
		>
			<div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
				<CameraIcon
					className={`size-6 hidden md:size-10 text-highlight lg:block xl:mb-4 `}
				/>
				<p className="font-oxanium text-xl lg:text-4xl text-text-secondary">
					{success === null ? <span>{index}.</span> : icon}
				</p>
			</div>
			<div className="">
				<h2 className={`text-base sm:text-lg md:text-xl text-text-primary`}>
					{success === null && heading}
					{success && successHeading}
					{success === false && failHeading}
				</h2>
				<p className="text-text-secondary hidden text-sm sm:block md:text-base">
					{text}
				</p>
			</div>
		</li>
	);
}

type StepsType = Record<"camera" | "model", boolean | null>;

function InitialLoadOverlay({
	handleClick,
	setHandRecognizerState,
}: {
	handleClick: () => void;
	setHandRecognizerState: Dispatch<SetStateAction<GestureRecognizer | null>>;
}) {
	const { isCameraDetected } = useDetectCamera();
	const [activeStep, setActiveStep] = useState<"camera" | "model" | "finished">(
		"camera",
	); // should be camera in the beginning
	const [steps, setSteps] = useState<StepsType>({
		camera: null,
		model: null,
	});

	// Check for camera
	useEffect(() => {
		if (isCameraDetected) {
			setSteps((state) => ({ ...state, camera: true }));
			setActiveStep("model");
		} else {
			setSteps((state) => ({ ...state, camera: false }));
		}
	}, [isCameraDetected]);

	// Load hand gesture model if camera found
	useEffect(() => {
		if (activeStep === "model") {
			let gestureModel = null;
			(async () => {
				try {
					gestureModel = await fetchGestureRecognizer();
				} catch (error) {
					console.error(error);
					setSteps((state) => ({ ...state, model: false }));
				}

				setHandRecognizerState(gestureModel);
				setActiveStep("finished");
				setSteps((state) => ({ ...state, model: true }));
			})();
		}
	}, [activeStep, setHandRecognizerState]);

	return (
		<div className="flex flex-col justify-between pt-8 pb-2 w-full min-h-[calc(100vh-64px)] max-w-[1500px] mx-auto xl:grid xl:grid-cols-[600px_1fr] items-center gap-x-10 px-4 md:px-8 xl:gap-y-0">
			{/* FIRST COLUMN */}
			<div className="">
				<h2 className="text-highlight text-xl md:text-3xl">Training Mode</h2>
				<h1 className="text-text-primary text-4xl md:text-7xl lg:text-8xl xl:text-7xl">
					Learn The Sign Language Alphabet In Real Time
				</h1>
				<p className="text-base md:text-2xl xl:text-xl text-text-secondary">
					Use your device's camera to practice signing each letter of the
					alphabet while our AI detects your hand gestures, gives instant
					feedback, and helps you improve with every move.
				</p>
			</div>
			{/* SECOND COLUMN */}
			<div className="flex items-center justify-center rounded-xl w-full">
				<div className="p-2 md:p-8 flex flex-col gap-y-3 w-full backdrop-blur-3xl bg-black/10 rounded-xl xl:gap-y-10 xl:p-10 xl:max-w-[800px]">
					<h2 className="text-2xl md:text-3xl text-center text-text-primary xl:-mb-10">
						Before we get started
					</h2>
					<p></p>
					<ol className="grid grid-rows-2 gap-y-4 xl:gap-10 xl:grid-cols-2 xl:grid-rows-1">
						<LoadingComponent
							heading="Detecting camera..."
							text="Make sure your device has a camera (i.e. Webcam or front-facing camera on a phone)."
							successHeading="Camera detected"
							failHeading="No camera detected"
							index={1}
							active={activeStep === "camera"}
							success={steps.camera}
						/>

						<LoadingComponent
							heading="Load model"
							text="Wait for machine learning model to load."
							successHeading="Model loaded"
							failHeading="Failed to load model"
							index={2}
							active={activeStep === "model"}
							success={steps.model}
						/>
					</ol>
					<LargeButton
						text="Start learning now!"
						disabled={!isCameraDetected || activeStep !== "finished"}
						handleClick={handleClick}
					/>
				</div>
			</div>
		</div>
	);
}

export default InitialLoadOverlay;
