import { LargeButton } from "@/components/Buttons";
import { GestureImageStatic } from "@/components/GestureImage";

function ShowImageOverlay({
	imageObject,
	handleClick,
}: {
	imageObject: [string, string];
	handleClick: () => void;
}) {
	const [letter, imgUrl] = imageObject;

	return (
		<div className="flex flex-col mt-4 gap-y-8 justify-center items-center w-full h-full">
			<h2 className="text-7xl">
				Letter <span className="font-bold text-8xl ml-4 italic">{letter}</span>
			</h2>
			<GestureImageStatic imgLetter={letter} imgUrl={imgUrl} />
			<LargeButton
				text="
				I&lsquo;m ready!
				"
				disabled={false}
				handleClick={handleClick}
			/>
		</div>
	);
}

export default ShowImageOverlay;
