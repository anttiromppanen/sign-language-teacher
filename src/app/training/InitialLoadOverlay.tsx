"use client";

import {
	CameraIcon,
	CheckBadgeIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import type { GestureRecognizer } from "@mediapipe/tasks-vision";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
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
			className={`flex flex-col relative rounded-lg border-low-contrast bg-[#0A041A]/50 p-10 border-2 ${active && "animate-pulse"} ${!active && "opacity-20"} ${success === false && "animate-none"}`}
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
	);
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
		<div className="w-full h-full max-w-[1500px] mx-auto">
			<div className="mt-10 flex flex-col gap-y-10">
				<h1 className="text-5xl text-text-primary text-center">
					Before we get started
				</h1>
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
				<button
					type="button"
					className="rounded-md bg-highlight py-4 px-8 text-white text-4xl col-span-2 hover:brightness-110 disabled:brightness-50"
					disabled={!isCameraDetected || activeStep !== "finished"}
					onClick={handleClick}
				>
					Start learning now!
				</button>
			</div>
		</div>
	);
}

export default InitialLoadOverlay;
