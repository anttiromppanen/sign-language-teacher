"use client";

import GestureSlideshow from "@/components/GestureSlideshow";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-14 justify-center items-center h-screen w-full">
        <h1 className="text-6xl text-foreground">Sign Language Alphabet</h1>
        <GestureSlideshow />
      </div>
    </div>
  );
}
