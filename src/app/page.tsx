"use client";

import { FilesetResolver, HandLandmarker } from "@mediapipe/tasks-vision";
import { useEffect, useRef } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const cameraRef = useRef<Webcam | null>(null);

  async function initializeHandLandmarker() {
    const vision = await FilesetResolver.forVisionTasks(
      // path/to/wasm/root
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    const handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: "/models/gesture_recognizer.tflite",
        delegate: "GPU",
      },
      numHands: 1,
      runningMode: "VIDEO",
    });
    return handLandmarker;
  }

  useEffect(() => {
    (async () => {
      const handLandmarker = await initializeHandLandmarker();
      console.log("HandLandmarker initialized", handLandmarker);
    })();
  }, []);

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
