"use client";

import GestureSlideshow from "@/components/GestureSlideshow";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-14 items-center h-screen w-full text-center px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-10 text-foreground">
          Sign Language Alphabet
        </h1>
        <GestureSlideshow />
      </div>
    </div>
  );
}
