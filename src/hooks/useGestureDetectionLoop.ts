import {
  GestureRecognizer,
  GestureRecognizerResult,
} from "@mediapipe/tasks-vision";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

interface useGestureDetectionLoopProps {
  handRecognizerState: GestureRecognizer | null;
  cameraRef: MutableRefObject<Webcam | null>;
}

function useGestureDetectionLoop({
  handRecognizerState,
  cameraRef,
}: useGestureDetectionLoopProps) {
  const lastTime = useRef<number>(-1);

  const [currentGesture, setCurrentGesture] = useState<
    GestureRecognizerResult["gestures"][0][0] | null
  >(null);

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
          setCurrentGesture(
            gesturePredictions.gestures.length
              ? gesturePredictions.gestures[0][0]
              : null
          );
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [handRecognizerState, cameraRef, setCurrentGesture]);

  return {
    currentGesture,
  };
}

export default useGestureDetectionLoop;
