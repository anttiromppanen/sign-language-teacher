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
		<div className="flex flex-col gap-y-8 px-8 h-[calc(100vh-64px)] justify-center items-center w-full">
			<div>
				<h1 className="text-4xl md:text-7xl text-text-primary">
					Training mode
				</h1>
				<p className="text-text-secondary text-xl">
					Memorize the gesture from the image below, and press I'm ready when
					you are ready to start the virtual training!
				</p>
			</div>
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
