"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useId, useState } from "react";
import { ReactTyped } from "react-typed";
import Container from "@/components/Container";

function FirstSection() {
	const [showTyped, setShowTyped] = useState(false);

	useEffect(() => {
		// Show typed effect after hydration
		setShowTyped(true);
	}, []);

	return (
		<Container>
			<div className="w-full items-center justify-center flex h-[calc(100vh-64px)] gap-x-4">
				<div className="flex flex-col justify-center md:items-center gap-y-8 rounded-xl text-center">
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-oxanium sticky top-0 text-white rounded-lg font-semibold">
						{!showTyped && "Learn American Sign Language (ASL) Online for Free"}
						{showTyped && (
							<ReactTyped
								strings={["Learn American Sign Language (ASL) Online for Free"]}
								typeSpeed={100}
								startDelay={0}
							/>
						)}
					</h1>
					<div className="text-center md:text-left md:max-w-[600px] xl:max-w-[1000px]">
						<motion.p className="font-source_sans sm:text-xl text-text-primary md:text-2xl">
							Learn the American Sign Language (ASL) alphabet and basics online
							for free with our interactive tool. Our AI-powered sign language
							teacher recognizes your hand gestures in real time, providing
							instant feedback to help you improve accuracy and confidence.
							Whether you’re a complete beginner or practicing to sharpen your
							skills, you can start learning ASL anytime, anywhere — all you
							need is your device’s camera.
						</motion.p>
					</div>
					<div className="py-4 px-6">
						<Link
							href="/training"
							className="font-source_sans py-4 px-6 rounded-xl bg-highlight text-xl text-white"
						>
							Start ASL training
						</Link>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default function Home() {
	return (
		<div className="min-h-[calc(100vh-64px)]">
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

			{/* JSON-LD structured data */}
			<Script
				id={`software-schema-${useId()}`}
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: skip
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Signer - AI Sign Language Teacher",
						applicationCategory: "EducationalApplication",
						operatingSystem: "Web", // since it's browser-based
						description:
							"Free AI-powered web application to learn American Sign Language (ASL). Practice the ASL alphabet with real-time gesture recognition and instant feedback.",
						offers: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "EUR",
							availability: "https://schema.org/InStock",
							url: "https://sign-language-teacher.vercel.app/",
						},
						url: "https://sign-language-teacher.vercel.app/",
						author: {
							"@type": "Organization",
							name: "Signer - AI Sign Language Teacher",
							url: "https://sign-language-teacher.vercel.app/",
						},
					}),
				}}
			/>
		</div>
	);
}
