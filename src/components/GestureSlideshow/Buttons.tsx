import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { ReactNode, useCallback, useEffect } from "react";

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
      rounded-full size-14 border-foreground border-4 text-foreground text-xl focus-within:outline-2 flex items-center justify-center 
      hover:bg-foreground hover:text-white select-none focus-visible:-border--secondary-purple focus-visible:outline-0"
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
    [handlePrevImg, handleNextImg]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div
      aria-label="buttons for previous and next image"
      className="flex justify-around md:justify-between w-full md:absolute mt-2 md:mt-0 md:left-0 md:top-1/2 md:-translate-y-1/2"
    >
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
