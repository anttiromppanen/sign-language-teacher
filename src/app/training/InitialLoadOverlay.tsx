"use client";

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
	success: boolean | undefined;
}

function LoadingComponent({
	heading,
	successHeading,
	failHeading,
	text,
	index,
	active,
	success,
}: LoadingComponentProps) {
	const icon = success ? "✔️" : "❌";

	return (
		<li
			className={`flex relative gap-x-2 ${active && "animate-pulse"} ${!active && "opacity-20"} ${success === false && "animate-none"}`}
		>
			<p className="font-oxanium absolute -left-6 top-0 text-xl">
				{success === undefined ? (
					<span>{index}.</span>
				) : (
					<span className="-ml-2 text-lg">{icon}</span>
				)}
			</p>
			<div className="">
				<h2 className={`text-xl`}>
					{success === undefined && <span>{heading}</span>}
					{success && <span>{successHeading}</span>}
					{success === false && <span>{failHeading}</span>}
				</h2>
				<p className="text-white/60">{text}</p>
			</div>
		</li>
	);
}

function InitialLoadOverlay({
	handleClick,
	setHandRecognizerState,
}: {
	handleClick: () => void;
	setHandRecognizerState: Dispatch<SetStateAction<GestureRecognizer | null>>;
}) {
	const { isCameraDetected } = useDetectCamera();
	const [activeStep] = useState<"camera" | "model">("camera");

	useEffect(() => {
		if (activeStep === "model") {
			(async () => {
				const gestureModel = await fetchGestureRecognizer();
				setHandRecognizerState(gestureModel);
			})();
		}
	}, [activeStep, setHandRecognizerState]);

	return (
		<div className="w-full h-full max-w-[1500px] mx-auto">
			<div className="mt-10 flex flex-col gap-y-10">
				<h1 className="text-5xl">Before we get started</h1>
				<ol className="grid grid-cols-2 pl-8 gap-y-2">
					<LoadingComponent
						heading="Detecting camera..."
						text="Make sure your device has a camera (i.e. Webcam or front-facing camera on a phone)."
						successHeading="Camera detected"
						failHeading="No camera detected"
						index={1}
						active={activeStep === "camera"}
						success={isCameraDetected}
					/>

					<LoadingComponent
						heading="Load model"
						text="Wait for machine learning model to load."
						successHeading="Model loaded"
						failHeading="Failed to load model"
						index={2}
						active={activeStep === "model"}
						success={undefined}
					/>
				</ol>
				<button
					type="button"
					className="rounded-md -bg--secondary-pink py-4 px-8 text-white text-4xl col-span-2 hover:brightness-110"
					onClick={handleClick}
				>
					Start learning now!
				</button>
			</div>
		</div>
	);
}

export default InitialLoadOverlay;
