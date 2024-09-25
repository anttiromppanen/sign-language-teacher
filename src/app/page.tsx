"use client";

import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handdetection from "@tensorflow-models/hand-pose-detection";
import { Hands } from "@mediapipe/hands";
import Webcam from "react-webcam";

export default function Home() {
  const [handDetector, setHandDetector] = useState(null);
  const cameraRef = useRef<Webcam | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      if (!cameraRef.current) return;

      const model = await tf.loadGraphModel("/models/model.json");
      const hands = new Hands();

      hands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      const detector = await handdetection.createDetector(
        handdetection.SupportedModels.MediaPipeHands,
        {
          runtime: "tfjs",
        }
      );
      console.log(detector);
    };
    loadModel();
  }, []);

  return (
    <div>
      <Webcam
        ref={cameraRef}
        audio={false}
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
