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
      className="
      rounded-full size-14 border-green-dark border-4 text-green-dark text-xl focus-within:outline-2 flex items-center justify-center 
      hover:bg-green-dark hover:text-white select-none focus-visible:border-orange focus-visible:outline-0 focus-visible:text-orange"
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

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function GestureSlideshow() {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // imageObjects[0][0] = A, imageObjects[0][1] = image path
  const imageObjects = Object.entries(getImageByCharacter);

  const handlePrevImg = () => {
    setImgIndex(
      (prev) => (prev - 1 + imageObjects.length) % imageObjects.length
    );
    setDirection(-1);
  };

  const handleNextImg = () => {
    setImgIndex((prev) => (prev + 1) % imageObjects.length);
    setDirection(1);
  };

  return (
    <section className="relative md:px-20 overflow-hidden">
      <div className="overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={imageObjects[imgIndex][1]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleNextImg();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrevImg();
              }
            }}
            className="relative w-full h-full z-10 overflow-hidden"
          >
            <motion.h2
              key={imageObjects[imgIndex][0]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "keyframes", duration: 0.2 },
                opacity: { duration: 0.2 },
              }}
              className="text-6xl sm:text-8xl absolute z-10 top-2 left-5 sm:top-5 sm:left-10 text-green-dark select-none"
            >
              {imageObjects[imgIndex][0]}
            </motion.h2>
            <Image
              key={imageObjects[imgIndex][1]}
              src={imageObjects[imgIndex][1]}
              alt="gesture"
              width={900}
              height={675}
              sizes="(max-width: 640px) 25vw, (min-width: 641px) 50vw, (min-width: 1024px) 450px, 600px"
              priority
              draggable={false}
              className="md:w-[450px] md:h-[377.5px] lg:w-[600px] lg:h-[450px] object-cover border-8 border-foreground"
            />
          </motion.div>
        </AnimatePresence>
      </div>
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
    </section>
  );
}

export default GestureSlideshow;
