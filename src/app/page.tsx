"use client";

import useGestureDetectionLoop from "@/hooks/useGestureDetectionLoop";
import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const cameraRef = useRef<Webcam | null>(null);

  const [handRecognizerState, setHandRecognizerState] =
    useState<GestureRecognizer | null>(null);

  useGestureDetectionLoop({
    handRecognizerState,
    cameraRef,
  });

  async function initializeHandLandmarker() {
    const vision = await FilesetResolver.forVisionTasks(
      // path/to/wasm/root
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    const handRecognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: "models/gesture_recognizer.tflite",
        delegate: "GPU",
      },
      numHands: 1,
      runningMode: "VIDEO",
    });
    return handRecognizer;
  }

  useEffect(() => {
    if (!handRecognizerState) {
      (async () => {
        const handRecognizer = await initializeHandLandmarker();
        setHandRecognizerState(handRecognizer);
      })();
    }
  }, [handRecognizerState]);

  return (
    <div>
      <div className="relative bg-red-500 mx-auto w-fit">
        <Webcam
          ref={cameraRef}
          audio={false}
          mirrored
          videoConstraints={{
            // width: 640,
            // height: 480,
            facingMode: "user",
          }}
          className="h-screen"
        />
      </div>
    </div>
  );
}
