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

const iconStyles = "size-10";

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
			className={`flex flex-col relative rounded-xl border-[#1e1a29]/70 shadow-[#0a041a]/50 bg-[#8a4fff]/20 card-bg-radial backdrop-blur-xl p-10 ${active && "*:animate-pulse"} ${!active && "opacity-20"} ${success === false && "animate-none"}`}
		>
			<CameraIcon className="size-20 text-highlight mb-4" />
			<p className="font-oxanium absolute right-4 top-4 text-4xl text-text-secondary">
				{success === null ? <span>{index}.</span> : icon}
			</p>
			<div className="">
				<h2 className={`text-2xl text-text-primary`}>
					{success === null && heading}
					{success && successHeading}
					{success === false && failHeading}
				</h2>
				<p className="text-text-secondary">{text}</p>
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
		<div className="w-full h-[calc(100vh-64px)] max-w-[1500px] mx-auto grid grid-cols-[600px_1fr] items-center gap-x-10">
			<div className="">
				<h2 className="text-highlight text-3xl">Training Mode</h2>
				<h1 className="text-text-primary text-7xl">
					Learn The Sign Language Alphabet In Real Time
				</h1>
				<p className="text-xl text-text-secondary">
					Use your device's camera to practice signing each letter of the
					alphabet while our AI detects your hand gestures, gives instant
					feedback, and helps you improve with every move.
				</p>
			</div>
			<div className="flex items-center justify-center rounded-xl w-full">
				<div className="p-14 flex flex-col gap-y-10 max-w-[800px] backdrop-blur-3xl bg-black/10 rounded-xl">
					<h2 className="text-3xl text-text-primary">Before we get started</h2>
					<p></p>
					<ol className="grid grid-cols-2 gap-10">
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
