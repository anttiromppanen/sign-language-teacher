"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

function FirstSection() {
	const [showTyped, setShowTyped] = useState(false);

	useEffect(() => {
		// Show typed effect after hydration
		setShowTyped(true);
	}, []);

	return (
		<div className="w-full items-center justify-center flex h-[calc(100vh-64px)] gap-x-4 px-8 max-w-[1560px] mx-auto">
			<div className="flex flex-col justify-center md:items-center gap-y-8 md:text-center rounded-xl">
				<h1 className="text-7xl md:text-9xl font-oxanium sticky top-0 text-white rounded-lg font-semibold">
					{!showTyped && <span className="block">Hands-On AI Learning</span>}
					{showTyped && (
						<ReactTyped
							strings={["Hands-On AI Learning"]}
							typeSpeed={90}
							startDelay={0}
						/>
					)}
				</h1>
				<div className="text-left md:max-w-[600px] xl:max-w-[1000px]">
					<motion.p className="font-source_sans text-lg sm:text-xl text-text-primary md:text-2xl">
						Turn your camera into a personal sign language tutor. Our AI-powered
						model recognizes your gestures in real time, giving instant feedback
						to help you learn faster and more accurately. Whether you&lsquo;re a
						beginner or looking to sharpen your skills, practice anywhere,
						anytime.
					</motion.p>
				</div>
				<div className="py-4 px-6">
					<Link
						href="/training"
						className="font-source_sans py-4 px-6 rounded-xl bg-highlight text-xl text-white"
					>
						Start training
					</Link>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div>
			<div className="">
				<motion.video
					initial={{ filter: "blur(5px)", scale: 1.1 }}
					animate={{ filter: "blur(0px)", scale: 1 }}
					transition={{ delay: 3.5, duration: 0.3 }}
					autoPlay
					loop
					muted
					playsInline
					className="fixed top-0 left-0 w-full h-full object-cover -z-20"
				>
					<source src="/img/hand_ai_mobile.mp4" media="(max-width: 640px)" />
					<source src="/img/hand_ai_tablet.mp4" media="(max-width: 1024px)" />
					<source src="/img/hand_ai.mp4" type="video/mp4" />
					{/* Optional fallback image */}
					Your browser does not support the video tag.
				</motion.video>
				<div className="w-full h-full bg-background opacity-80 bg-radial-gradient absolute top-0 left-0 -z-10" />
			</div>
			<FirstSection />
		</div>
	);
}
