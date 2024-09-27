"use client";

import { getImageByCharacter } from "@/utils/getImageByCharacter";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      className="rounded-full size-14 border-green-dark border-4 text-green-dark text-xl focus-within:outline-2 flex items-center justify-center focus-within:outline-foreground focus-within:outline hover:bg-green-dark hover:text-white"
    >
      {children}
    </button>
  );
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

function GestureSlideshow() {
  const [imgIndex, setImgIndex] = useState(2);
  const [direction, setDirection] = useState(1);

  // imageObjects[0][0] = A, imageObjects[0][1] = image path
  const imageObjects = Object.entries(getImageByCharacter);

  const handlePrevImg = () =>
    setImgIndex(
      (prev) => (prev - 1 + imageObjects.length) % imageObjects.length
    );

  const handleNextImg = () =>
    setImgIndex((prev) => (prev + 1) % imageObjects.length);

  return (
    <section className="relative px-20 overflow-hidden">
      <div
        aria-label="buttons for previous and next image"
        className="flex justify-between w-full absolute left-0 top-1/2 -translate-y-1/2"
      >
        <SlideshowButton handleClick={handlePrevImg}>
          <ChevronLeftIcon className="size-8" />
        </SlideshowButton>
        <SlideshowButton handleClick={handleNextImg}>
          <ChevronRightIcon className="size-8" />
        </SlideshowButton>
      </div>
      <h2 className="text-8xl absolute top-5 left-28 text-green-dark">
        {imageObjects[imgIndex][0]}
      </h2>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={imageObjects[imgIndex][1]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full"
        >
          <Image
            src={imageObjects[imgIndex][1]}
            alt="gesture"
            width={900}
            height={675}
            sizes="(max-width: 640px) 25vw, (min-width: 641px) 50vw, (min-width: 1024px) 450px, 600px"
            priority
            className="md:w-[450px] left-0 top-0 md:h-[377.5px] lg:w-[600px] lg:h-[450px] object-cover border-8 border-foreground"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default GestureSlideshow;
