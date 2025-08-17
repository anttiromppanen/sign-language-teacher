function FaqSection() {
	return (
		<section className="lg:[&>article>h3]:text-xl lg:[&>article>p]:text-lg">
			<h2 className="text-2xl font-semibold lg:text-6xl lg:mb-4">FAQ</h2>
			<div className="flex flex-col gap-y-2 lg:grid lg:grid-cols-2 lg:gap-10 lg:[&>article]:pr-10 lg:[&>article>h3]:text-xl lg:[&>article>p]:text-lg">
				<article>
					<h3 className="font-semibold mt-2">
						What is the ASL alphabet used for?
					</h3>
					<p>
						The ASL alphabet is mainly used for fingerspelling names, places,
						and words that don’t have their own sign.
					</p>
				</article>

				<article>
					<h3 className="font-semibold">
						Is the ASL alphabet the same as the English alphabet?
					</h3>
					<p>
						Yes. Each letter in the English alphabet has a corresponding ASL
						hand sign, making it easy to spell English words.
					</p>
				</article>

				<article>
					<h3 className="font-semibold">
						How long does it take to learn the ASL alphabet?
					</h3>
					<p>
						With consistent practice, most learners can memorize the ASL
						alphabet in a few days to a week.
					</p>
				</article>

				<article>
					<h3 className="font-semibold">
						Can I practice the ASL alphabet online?
					</h3>
					<p>
						Absolutely! You can start with our ASL alphabet slideshow and then
						move on to{" "}
						<a
							href="/training"
							className="text-blue-600 underline hover:text-blue-800"
						>
							interactive practice
						</a>{" "}
						with instant feedback.
					</p>
				</article>
			</div>
		</section>
	);
}

export default FaqSection;
