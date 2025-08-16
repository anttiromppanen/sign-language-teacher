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
		<div className="absolute flex-col gap-y-6 left-0 top-0 w-full h-screen flex items-center justify-center text-7xl">
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
