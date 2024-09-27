"use client";

import { getImageByCharacter } from "@/utils/getImageByCharacter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 justify-center items-center h-screen w-full">
        <h1 className="text-6xl">Sign Language Teacher</h1>
        <Image
          src={getImageByCharacter.A}
          width={420}
          height={420}
          alt="Letter A"
        />
      </div>
    </div>
  );
}
