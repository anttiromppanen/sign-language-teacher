"use client";

import GestureSlideshow from "@/components/GestureSlideshow";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-14 items-center h-screen w-full text-center px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-10 text-foreground">
          Learn Sign Language Effortlessly Anytime, Anywhere
        </h1>
        <h2>
          Master American Sign Language (ASL) alphabet with interactive learning
          tool using your device&apos;s camera and AI
        </h2>
        <GestureSlideshow />
      </div>
    </div>
  );
}
