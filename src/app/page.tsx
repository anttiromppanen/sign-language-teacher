"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import personIllustration from "../../public/img/Uploading-amico.svg";

function FirstSection() {
  const imgTargetRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress: imgScrollYProgress, scrollY } = useScroll({
    target: imgTargetRef,
    offset: ["start end", "end start"],
  });

  const changeOpacity = useTransform(imgScrollYProgress, [0.5, 1], [1, -1]);

  const yButton = useTransform(scrollY, [0, 300], [0, -300]);
  const opacityButton = useTransform(scrollY, [0, 300], [1, -0.8]);

  const yParagraph = useTransform(scrollY, [0, 300], [0, -100]);
  const xParagraph = useTransform(scrollY, [0, 300], [0, 100]);
  const opacityParagraph = useTransform(scrollY, [0, 500], [1, -0.01]);

  const scaleHeader = useTransform(scrollY, [0, 300, 800], [1, 1.1, 0.95]);
  const opacityHeader = useTransform(scrollY, [1500, 100], [0.1, 1]);

  return (
    <div className="w-full grid grid-cols-2 items-center h-[calc(100vh-64px)] gap-x-4 px-8 max-w-[1560px] mx-auto">
      <div className="flex flex-col justify-center gap-y-8 h-full">
        <motion.h1
          style={{ scale: scaleHeader, opacity: opacityHeader }}
          className="text-9xl font-alice sticky top-0"
        >
          Hands-On AI Learning
        </motion.h1>
        <motion.p
          style={{ x: xParagraph, y: yParagraph, opacity: opacityParagraph }}
          className="font-playfair-display text-xl text-black/50"
        >
          Turn your camera into a personal sign language tutor. Our AI-powered
          model recognizes your gestures in real time, giving instant feedback
          to help you learn faster and more accurately. Whether you&lsquo;re a
          beginner or looking to sharpen your skills, practice anywhere,
          anytime.
        </motion.p>
        <motion.div
          style={{ y: yButton, opacity: opacityButton }}
          className="mt-4"
        >
          <Link
            href="/training"
            className="font-playfair-display py-4 px-6 rounded-xl -bg--secondary-blue"
          >
            Start training
          </Link>
        </motion.div>
      </div>
      <motion.div
        ref={imgTargetRef}
        style={{ opacity: changeOpacity }}
        className="h-full w-full relative"
      >
        <Image src={personIllustration} fill={true} alt="" priority />
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <FirstSection />
      <div className="-bg--secondary-yellow h-screen w-full"></div>
    </div>
  );
}
