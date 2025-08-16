import { LargeButton } from "@/components/Buttons";
import { GestureImageStatic } from "@/components/GestureImage";

function SuccessOverlay({
	imageObject,
	handleClick,
}: {
	imageObject: [string, string];
	handleClick: () => void;
}) {
	return (
		<div className="flex-col gap-y-6 w-full h-[calc(100vh-64px)] flex items-center justify-center text-4xl md:text-7xl px-8">
			<h2 className="font-alice">Good job!</h2>
			<GestureImageStatic imgLetter={imageObject[0]} imgUrl={imageObject[1]} />
			<LargeButton
				text="Ready for the next one!"
				disabled={false}
				handleClick={handleClick}
			/>
		</div>
	);
}

export default SuccessOverlay;
