"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-2 items-center h-[calc(100vh-64px)] px-8">
      <div className="text-center flex flex-col gap-y-4">
        <h1 className="text-8xl font-alice">Hands-On AI Learning</h1>
        <p className="font-playfair-display text-2xl">
          Turn your webcam into a personal sign language tutor. Our AI-powered
          model recognizes your gestures in real time, giving instant feedback
          to help you learn faster and more accurately. Whether you&lsquo;re a
          beginner or looking to sharpen your skills, practice anywhere, anytime
          — no extra equipment needed.
        </p>
      </div>
      <div className="h-full w-full relative">
        <Image src="/img/Uploading-amico.svg" fill={true} alt="" priority />
      </div>
    </div>
  );
}
