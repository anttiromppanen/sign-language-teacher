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
		<div className="flex flex-col gap-y-8 h-[calc(100vh-64px)] justify-center md:justify-center xl:justify-around items-center w-full xl:flex-row">
			<div className="flex flex-col">
				<h1 className="text-4xl md:text-7xl text-text-primary">
					Training mode
				</h1>
				<h2 className="text-text-secondary text-xl lg:mb-8 max-w-[500px]">
					Memorize the gesture from the image below, and press I'm ready when
					you are ready to start the virtual training!
				</h2>
				<div className="hidden xl:block">
					<LargeButton
						text="I&lsquo;m ready!"
						disabled={false}
						handleClick={handleClick}
					/>
				</div>
			</div>
			<GestureImageStatic imgLetter={letter} imgUrl={imgUrl} />
			<div className="xl:hidden w-full max-w-[600px]">
				<LargeButton
					text="I&lsquo;m ready!"
					disabled={false}
					fullWidth
					handleClick={handleClick}
				/>
			</div>
		</div>
	);
}

export default ShowImageOverlay;
