"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const variants: Record<string, Variants> = {
  h1: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  },
  span: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  h2: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 1.7 } },
  },
  link: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 2.5 } },
  },
};

export default function Home() {
  return (
    <div className="w-full grid grid-cols-2 items-center h-[calc(100vh-64px)] px-8">
      <div className="flex flex-col gap-y-14 justify-center w-full px-8 max-w-4xl mx-auto">
        <motion.h1
          variants={variants.h1}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-8xl mt-10 text-foreground"
        >
          Learn Sign Language Effortlessly{" "}
          <motion.span
            variants={variants.span}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="italic text-foreground tracking-tighter border-on-top-green"
          >
            Anytime,
          </motion.span>{" "}
          <motion.span
            variants={variants.span}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
            className="italic border-on-top-purple"
          >
            Anywhere
          </motion.span>
        </motion.h1>
        <motion.h2
          variants={variants.h2}
          initial="hidden"
          animate="visible"
          className="font-playfair-display text-4xl"
        >
          Master <i>American Sign Language</i> (<i>ASL</i>) alphabet with
          interactive learning tool using your device&apos;s camera and AI
        </motion.h2>
        <motion.div variants={variants.link} initial="hidden" animate="visible">
          <Link
            href="/training"
            className="p-6 rounded-xl -bg--secondary-pink w-full text-white text-center text-3xl"
          >
            Start learning now!
          </Link>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute -z-10 left-0 top-0 rounded-full size-96 -bg--secondary-pink" />
        <div className="absolute -z-10 right-0 bottom-20 rounded-full size-72 -bg--secondary-purple" />
        <div className="absolute -z-10 right-20 top-20 rounded-full size-52 -bg--secondary-blue" />
        <div className="absolute -z-10 left-0 bottom-20 rounded-full size-52 -bg--secondary-yellow" />
        <Image
          src="/img/sign_laptop.png"
          width={1690}
          height={1170}
          alt="Sign language learning"
          sizes="(max-width: 640px) 25vw, (min-width: 641px) 50vw, (min-width: 1024px) 100vw"
          priority
        />
      </div>
    </div>
  );
}
