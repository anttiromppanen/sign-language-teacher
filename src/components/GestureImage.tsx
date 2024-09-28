import { motion, Transition, Variants } from "framer-motion";
import Image from "next/image";

interface GestureImageAnimatedProps {
  imgIndex: number;
  direction: number;
  imageObjects: [string, string][];
  animationVariants: Variants;
  transition: Transition | undefined;
}

interface GestureImageStaticProps {
  imgLetter: string;
  imgUrl: string;
}

const styles = {
  letter:
    "text-6xl sm:text-8xl absolute z-10 top-2 left-5 sm:top-5 sm:left-10 text-green-dark select-none",
  image:
    "md:w-[450px] md:h-[377.5px] lg:w-[600px] lg:h-[450px] object-cover border-8 border-foreground",
  imageSizes:
    "(max-width: 640px) 25vw, (min-width: 641px) 50vw, (min-width: 1024px) 450px, 600px",
};

export function GestureImageAnimated({
  imgIndex,
  direction,
  imageObjects,
  animationVariants,
  transition,
}: GestureImageAnimatedProps) {
  return (
    <div className="relative">
      <motion.h2
        key={imageObjects[imgIndex][0]}
        custom={direction}
        variants={animationVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={transition}
        className={styles.letter}
      >
        {imageObjects[imgIndex][0]}
      </motion.h2>
      <Image
        key={imageObjects[imgIndex][1]}
        src={imageObjects[imgIndex][1]}
        alt="gesture"
        width={900}
        height={675}
        sizes={styles.imageSizes}
        priority
        draggable={false}
        className={styles.image}
      />
    </div>
  );
}

export function GestureImageStatic({
  imgLetter,
  imgUrl,
}: GestureImageStaticProps) {
  return (
    <div className="relative">
      <h2 className={styles.letter}>{imgLetter}</h2>
      <Image
        src={imgUrl}
        alt="gesture"
        width={900}
        height={675}
        sizes={styles.imageSizes}
        priority
        draggable={false}
        className={styles.image}
      />
    </div>
  );
}
