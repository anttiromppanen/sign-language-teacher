import type { Metadata } from "next";
import Script from "next/script";
import { useId } from "react";
import Container from "@/components/Container";
import GestureSlideshow from "@/components/GestureSlideshow";
import FaqSection from "./FaqSection";
import ListSection from "./ListSection";

export const metadata: Metadata = {
	title: "The American Sign Language (ASL) Alphabet - Signer",
	description:
		"Learn the American Sign Language (ASL) alphabet online with our interactive AI tool. Practice signing letters in real time using your camera and get instant feedback to improve your hand gestures.",
};

function Alphabet() {
	return (
		<Container>
			<main className="flex flex-col gap-y-16 justify-center py-10 text-text-secondary lg:gap-y-36">
				<section className="lg:px-8 flex flex-col justify-center w-full md:text-center lg:gap-y-4 lg:mt-10">
					<h1 className="text-4xl text-foreground mb-2 font-alice md:text-6xl">
						The American Sign Language (ASL) alphabet
					</h1>
					<p className="lg:text-xl max-w-[800px] mx-auto">
						The American Sign Language (ASL) alphabet, also known as the
						fingerspelling alphabet, is a set of hand signs that represent each
						letter of the English alphabet. Learning these signs is one of the
						first steps in mastering ASL and allows you to spell out names,
						places, and words without a dedicated sign.
					</p>
				</section>

				{/* Slideshow of A–Z with descriptive alt text */}
				<section className="flex flex-col gap-y-8 xl:grid xl:grid-cols-[1fr_700px] 2xl:grid-cols-[1fr_840px] md:items-center">
					<div className="flex flex-col gap-y-2 md:text-center xl:text-left lg:gap-y-8 lg:pr-20">
						<h2 className="text-2xl font-semibold lg:text-3xl">
							ASL Alphabet Hand Gesture Examples
						</h2>
						<p className="mb-2 lg:text-lg">
							Explore the A–Z slideshow to see how each letter in the ASL
							alphabet is signed. Practice slowly, focusing on the shape and
							position of your hand.
						</p>
					</div>
					<GestureSlideshow />
				</section>

				{/* List part */}
				<ListSection />

				<FaqSection />

				{/* Structured Metadata for FAQ */}
				<Script
					id={`faq-schema-${useId()}`}
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: false positive
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: [
								{
									"@type": "Question",
									name: "What is the difference between International Sign language and American Sign Language?",
									acceptedAnswer: {
										"@type": "Answer",
										text: `
											International Sign (IS) is a simplified sign language used at
											international events to help deaf people from different countries
											communicate. It isn’t a full language, but more of a pidgin that
											combines widely understood signs and gestures. American Sign
											Language (ASL), on the other hand, is a complete natural language
											with its own grammar and vocabulary, used primarily in the United
											States and parts of Canada.
										`,
									},
								},
								{
									"@type": "Question",
									name: "What is the ASL alphabet used for?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "The ASL alphabet is used for fingerspelling names, places, and words that don’t have their own sign.",
									},
								},
								{
									"@type": "Question",
									name: "Is the ASL alphabet the same as the English alphabet?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes. Each letter in the English alphabet has a corresponding ASL hand sign.",
									},
								},
								{
									"@type": "Question",
									name: "How long does it take to learn the ASL alphabet?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "With consistent practice, most learners can memorize the ASL alphabet in a few days to a week.",
									},
								},
								{
									"@type": "Question",
									name: "Can I practice the ASL alphabet online?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes! You can start with an ASL alphabet chart or slideshow and then move on to interactive practice with AI-powered feedback.",
									},
								},
							],
						}),
					}}
				/>
			</main>
		</Container>
	);
}

export default Alphabet;
