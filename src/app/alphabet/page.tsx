import GestureSlideshow from "@/components/GestureSlideshow";

function Alphabet() {
	return (
		<main className="flex flex-col items-center justify-center px-8 max-w-[1500px] mx-auto py-10 text-center">
			<h1 className="text-4xl text-foreground mb-10 font-alice md:text-7xl">
				The American Sign Language (ASL) alphabet
			</h1>
			<GestureSlideshow />
		</main>
	);
}

export default Alphabet;
