import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import successGif from "../../../public/img/success.gif";

const parentVariants = {
  initial: {
    height: 0,
    width: "100vw",
  },
  animate: {
    height: "100vh",
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    height: 0,
    transition: {
      delay: 2,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 1.9, scale: 0 },
  },
};

function CorrectGestureOverlay({
  setCorrectGestureOverlay,
}: {
  setCorrectGestureOverlay: (value: boolean) => void;
}) {
  const [showChild, setShowChild] = useState(false);

  return (
    <motion.div
      key="gestureOverlay"
      variants={parentVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => setShowChild(true)}
      className="
      absolute z-10 bg-white opacity-70 flex flex-col justify-center items-center left-0 top-0"
    >
      {showChild && (
        <motion.div
          variants={childVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={() => setCorrectGestureOverlay(false)}
          className="flex flex-col justify-center items-center gap-y-8 p-20 h-[500px] w-[500px]"
        >
          <h1 className="text-foreground text-9xl font-alice">Success!</h1>
          <Image src={successGif} alt="Success" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default CorrectGestureOverlay;
