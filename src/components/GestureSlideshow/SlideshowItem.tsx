import { AnimatePresence, motion } from "framer-motion";
import { GestureImageAnimated } from "../GestureImage";

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
        <GestureImageAnimated
          imgIndex={imgIndex}
          direction={direction}
          imageObjects={imageObjects}
          animationVariants={variants}
          transition={{
            x: { type: "keyframes", duration: 0.2 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default SlideshowItem;
