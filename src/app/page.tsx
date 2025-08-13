"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";

function FirstSection() {
  return (
    <div className="w-full items-center h-[calc(100vh-64px)] gap-x-4 px-8 max-w-[1560px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-y-8 h-full text-center">
        <motion.h1
          className="text-9xl font-oxanium sticky top-0 text-white"
        >

          <ReactTyped 
            strings={["Hands-On AI Learning"]}
            typeSpeed={90}
          />
        </motion.h1>
        <motion.p
          className="font-source_sans text-xl text-white/80 max-w-[1000px]"
        >
          Turn your camera into a personal sign language tutor. Our AI-powered
          model recognizes your gestures in real time, giving instant feedback
          to help you learn faster and more accurately. Whether you&lsquo;re a
          beginner or looking to sharpen your skills, practice anywhere,
          anytime.
        </motion.p>
        <motion.div
          className="mt-4"
        >
          <Link
            href="/training"
            className="font-source_sans py-4 px-6 rounded-xl -bg--secondary-blue"
          >
            Start training
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src="/img/hand_ai.mp4" type="video/mp4" />
        {/* Optional fallback image */}
        Your browser does not support the video tag.
        </video>
        <motion.div 
          initial={{ opacity: 0.2, filter: "blur(0px)" }}
          animate={{ opacity: 0.8, filter: "blur(100px)" }}
          transition={{ duration: 4, type: "spring" }}
          className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10" 
        />
      </div>
      <FirstSection />
    </div>
  );
}
