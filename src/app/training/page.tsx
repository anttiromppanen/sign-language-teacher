"use client";

// import useGestureDetectionLoop from "@/hooks/useGestureDetectionLoop";
// import useInitializeGestureRecognizer from "@/hooks/useInitializeGestureRecognizer";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import InitialLoadOverlay from "./InitialLoadOverlay";
import { getImageByCharacterArray } from "@/utils/getImageByCharacter";
import ShowImageOverlay from "./ShowImageOverlay";

function Training() {
  // const [round, setRound] = useState(0); // tracks number of rounds
  const [imgIndex, setImgIndex] = useState(0); // current image to show

  const imageObjects = getImageByCharacterArray;

  // overlay states
  const [initialLoadOverlay, setInitialLoadOverlay] = useState(true); // screen overlay for initial load
  const [gestureImageOverlay, setGestureImageOverlay] = useState(false); // tracks the gesture learning image
  const [successOverlay, setSuccessOverlay] = useState(false); // overlay if gesture is successful

  const cameraRef = useRef<Webcam | null>(null);
  // const handGestureRecognizer = useInitializeGestureRecognizer();
  // const { currentGesture } = useGestureDetectionLoop({
  //   handRecognizerState: handGestureRecognizer,
  //   cameraRef,
  // });

  const handleShowImage = () => {
    setInitialLoadOverlay(false);
    setGestureImageOverlay(true);
  };

  const handleStartTraining = () => {
    setInitialLoadOverlay(false);
    setGestureImageOverlay(false);
    setSuccessOverlay(false);
  };

  return (
    <div>
      {initialLoadOverlay && (
        <InitialLoadOverlay
          imageObject={imageObjects[imgIndex]}
          handleClick={handleShowImage}
        />
      )}
      {gestureImageOverlay && (
        <ShowImageOverlay
          imageObject={imageObjects[imgIndex]}
          handleClick={handleStartTraining}
        />
      )}
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
