"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-2 items-center h-[calc(100vh-64px)] gap-x-4 px-8 max-w-[1560px] mx-auto">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-9xl font-alice">Hands-On AI Learning</h1>
        <p className="font-playfair-display text-xl">
          Turn your camera into a personal sign language tutor. Our AI-powered
          model recognizes your gestures in real time, giving instant feedback
          to help you learn faster and more accurately. Whether you&lsquo;re a
          beginner or looking to sharpen your skills, practice anywhere,
          anytime.
        </p>
        <div className="mt-4">
          <Link
            href="/training"
            className="font-playfair-display py-4 px-6 rounded-xl -bg--secondary-blue"
          >
            Start training
          </Link>
        </div>
      </div>
      <div className="h-full w-full relative">
        <Image src="/img/Uploading-amico.svg" fill={true} alt="" priority />
      </div>
    </div>
  );
}
