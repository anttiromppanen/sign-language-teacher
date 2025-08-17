import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { type ReactNode, useCallback, useEffect } from "react";

function SlideshowButton({
	handleClick,
	children,
}: {
	handleClick: () => void;
	children: ReactNode;
}) {
	return (
		<button
			type="button"
			onClick={handleClick}
			className="
      size-12 bg-low-contrast text-text-secondary text-xl focus-within:outline-2 flex items-center justify-center 
      hover:bg-background hover:border-text-primary hover:text-text-primary select-none focus-visible:-border--secondary-purple focus-visible:outline-0
			rounded-full md:!size-20
			"
		>
			{children}
		</button>
	);
}

interface ButtonsProps {
	handlePrevImg: () => void;
	handleNextImg: () => void;
}

function Buttons({ handlePrevImg, handleNextImg }: ButtonsProps) {
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrevImg();
			if (e.key === "ArrowRight") handleNextImg();
		},
		[handlePrevImg, handleNextImg],
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	return (
		<div className="flex justify-between z-10 px-4 w-full absolute left-0 top-1/2 -translate-y-1/2 md:px-0">
			<SlideshowButton handleClick={handlePrevImg}>
				<ChevronLeftIcon className="size-8" />
			</SlideshowButton>
			<SlideshowButton handleClick={handleNextImg}>
				<ChevronRightIcon className="size-8" />
			</SlideshowButton>
		</div>
	);
}

export default Buttons;
