"use client";

// import useGestureDetectionLoop from "@/hooks/useGestureDetectionLoop";
// import useInitializeGestureRecognizer from "@/hooks/useInitializeGestureRecognizer";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import InitialLoadOverlay from "./InitialLoadOverlay";

function Training() {
  // const [round, setRound] = useState(0); // tracks number of rounds

  // overlay states
  const [initialLoadOverlay] = useState(true); // screen overlay for initial load
  const [gestureImageOverlay] = useState(false); // tracks the gesture learning image
  const [successOverlay] = useState(false); // overlay if gesture is successful

  const cameraRef = useRef<Webcam | null>(null);
  // const handGestureRecognizer = useInitializeGestureRecognizer();
  // const { currentGesture } = useGestureDetectionLoop({
  //   handRecognizerState: handGestureRecognizer,
  //   cameraRef,
  // });

  return (
    <div>
      {initialLoadOverlay && <InitialLoadOverlay />}
      {!initialLoadOverlay && !gestureImageOverlay && !successOverlay && (
        <Webcam
          ref={cameraRef}
          audio={false}
          mirrored
          videoConstraints={{
            facingMode: "user",
          }}
          className="h-screen w-screen object-cover"
        />
      )}
    </div>
  );
}

export default Training;
