import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

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
      rounded-full size-14 border-green-dark border-4 text-green-dark text-xl focus-within:outline-2 flex items-center justify-center 
      hover:bg-green-dark hover:text-white select-none focus-visible:border-orange focus-visible:outline-0 focus-visible:text-orange"
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
