import { GestureImageStatic } from "@/components/GestureImage";

function SuccessOverlay({
	imageObject,
	handleClick,
}: {
	imageObject: [string, string];
	handleClick: () => void;
}) {
	return (
		<div className="absolute flex-col gap-y-6 left-0 top-0 w-full h-screen flex items-center justify-center text-7xl -z-10">
			<h2 className="font-alice">Good job!</h2>
			<GestureImageStatic imgLetter={imageObject[0]} imgUrl={imageObject[1]} />
			<button
				type="button"
				className="rounded-md -bg--secondary-blue py-4 px-8 text-background text-4xl col-span-2 hover:brightness-110 font-playfair-display"
				onClick={handleClick}
			>
				Ready for the next one!
			</button>
		</div>
	);
}

export default SuccessOverlay;
