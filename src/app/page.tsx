"use client";

import { useRef } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const cameraRef = useRef<Webcam | null>(null);

  return (
    <div>
      <Webcam
        ref={cameraRef}
        audio={false}
        mirrored
        videoConstraints={{
          width: 640,
          height: 480,
          facingMode: "user",
        }}
        className="w-full h-full"
      />
    </div>
  );
}
