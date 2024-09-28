import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      transition: { duration: 0.2 },
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface SlideshowItemProps {
  imgIndex: number;
  direction: number;
  imageObjects: [string, string][];
  handlePrevImg: () => void;
  handleNextImg: () => void;
}

function SlideshowItem({
  imgIndex,
  direction,
  imageObjects,
  handlePrevImg,
  handleNextImg,
}: SlideshowItemProps) {
  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={imageObjects[imgIndex][1]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          duration: 0.2,
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
        className="relative w-full h-full overflow-hidden z-10"
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
  );
}

export default SlideshowItem;