"use client";

import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";
import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function Home() {
  const [handRecognizerState, setHandRecognizerState] =
    useState<GestureRecognizer | null>(null);
  const [currentGesture, setCurrentGesture] = useState<{
    name: string;
    probability: number;
  } | null>(null);
  const cameraRef = useRef<Webcam | null>(null);
  const lastTime = useRef<number>(-1);

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

  useEffect(() => {
    const interval = setInterval(async () => {
      if (
        !handRecognizerState ||
        !cameraRef.current ||
        !cameraRef.current.video
      )
        return;

      const video = cameraRef.current.video;
      const videoHeight = video.videoHeight;
      const videoWidth = video.videoWidth;

      if (videoHeight && videoWidth && video.readyState >= 2) {
        const startTimeMs = performance.now();

        if (lastTime.current !== video.currentTime) {
          lastTime.current = video.currentTime;
          const gesturePredictions = handRecognizerState.recognizeForVideo(
            video,
            startTimeMs
          );

          if (gesturePredictions.gestures.length) {
            setCurrentGesture({
              name: gesturePredictions.gestures[0][0].categoryName,
              probability: gesturePredictions.gestures[0][0].score,
            });
          } else {
            setCurrentGesture(null);
          }
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [handRecognizerState, currentGesture]);

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
        <div className="absolute top-5 right-5 bg-black p-4 text-5xl bg-opacity-50 size-32 rounded-2xl">
          {currentGesture?.name &&
            currentGesture?.probability &&
            currentGesture?.probability >= 0.5 && (
              <>
                <p>{currentGesture?.name}</p>
                <p>{Math.floor(Number(currentGesture?.probability) * 100)}%</p>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
