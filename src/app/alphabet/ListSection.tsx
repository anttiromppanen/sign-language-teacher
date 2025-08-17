function ListSection() {
	return (
		<section className="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:[&>article]:pr-10">
			<article className="flex flex-col gap-y-4">
				<h2 className="text-2xl font-semibold lg:text-3xl">
					Why Learn the ASL Alphabet?
				</h2>
				<ul className="space-y-2 lg:text-lg">
					<li>It’s the foundation of learning American Sign Language.</li>
					<li>
						It helps you spell names, places, and words without dedicated signs.
					</li>
					<li>
						Fingerspelling is used daily by ASL speakers and is understood by
						all levels of learners.
					</li>
				</ul>
			</article>

			<article className="flex flex-col gap-y-4">
				<h2 className="text-2xl font-semibold lg:text-3xl">
					Tips for Practicing Fingerspelling
				</h2>
				<ul className="space-y-2 lg:text-lg">
					<li>Practice one letter at a time until you’re comfortable.</li>
					<li>Use a mirror or your camera to check your hand shapes.</li>
					<li>
						Try our{" "}
						<a
							href="/training"
							className="text-blue-600 underline hover:text-blue-800"
						>
							interactive training mode
						</a>{" "}
						for real-time AI feedback.
					</li>
				</ul>
			</article>
		</section>
	);
}

export default ListSection;
