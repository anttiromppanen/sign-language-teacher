import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";
import { useEffect, useState } from "react";

function useInitializeGestureRecognizer() {
  const [handRecognizerState, setHandRecognizerState] =
    useState<GestureRecognizer | null>(null);

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

  return handRecognizerState;
}

export default useInitializeGestureRecognizer;
