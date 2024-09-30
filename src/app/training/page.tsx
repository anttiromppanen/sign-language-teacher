"use client";

import useGestureDetectionLoop from "@/hooks/useGestureDetectionLoop";
import useInitializeGestureRecognizer from "@/hooks/useInitializeGestureRecognizer";
import { getImageByCharacterArray } from "@/utils/getImageByCharacter";
import { useEffect, useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Webcam from "react-webcam";
import InitialLoadOverlay from "./InitialLoadOverlay";
import ShowImageOverlay from "./ShowImageOverlay";
import SuccessOverlay from "./SuccessOverlay";
import CameraError from "./CameraError";

function Training() {
  // const [round, setRound] = useState(0); // tracks number of rounds
  const [imgIndex, setImgIndex] = useState(0); // current image to show
  const [correctGesture, setCorrectGesture] = useState(false); // tracks if gesture is correct
  const [isCameraError, setIsCameraError] = useState(false);

  const imageObjects = getImageByCharacterArray;

  // overlay states
  const [initialLoadOverlay, setInitialLoadOverlay] = useState(true); // screen overlay for initial load
  const [gestureImageOverlay, setGestureImageOverlay] = useState(false); // tracks the gesture learning image
  const [successOverlay, setSuccessOverlay] = useState(false); // overlay if gesture is successful

  // webcam ref, hand gesture recognizer
  const cameraRef = useRef<Webcam | null>(null);
  const handGestureRecognizer = useInitializeGestureRecognizer();
  const { currentGesture } = useGestureDetectionLoop({
    handRecognizerState: handGestureRecognizer,
    cameraRef,
  });

  const handleShowImage = () => {
    setInitialLoadOverlay(false);
    setGestureImageOverlay(true);
  };

  const handleStartTraining = () => {
    setInitialLoadOverlay(false);
    setGestureImageOverlay(false);
    setSuccessOverlay(false);
  };

  const handleCorrectGesture = () => {
    setSuccessOverlay(true);
    setImgIndex((prev) => (prev + 1) % imageObjects.length);
  };

  const handleLeaveSuccessOverlay = () => setSuccessOverlay(false);

  useEffect(() => {
    if (
      currentGesture &&
      currentGesture.categoryName === imageObjects[imgIndex][0]
    ) {
      setCorrectGesture(true);
    } else {
      setCorrectGesture(false);
    }
  }, [currentGesture, imgIndex, imageObjects]);

  return (
    <div className="">
      {isCameraError && <CameraError />}
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
      {successOverlay && (
        <SuccessOverlay
          imageObject={imageObjects[imgIndex]}
          handleClick={handleLeaveSuccessOverlay}
        />
      )}
      {!initialLoadOverlay &&
        !gestureImageOverlay &&
        !successOverlay &&
        !isCameraError && (
          <div className="relative">
            <div className="bg-foreground text-background absolute left-10 top-10 z-10 text-7xl px-2">
              {imageObjects[imgIndex][0]}
            </div>
            {correctGesture && (
              <div className="absolute text-9xl text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <CountdownCircleTimer
                  isPlaying={correctGesture}
                  duration={3}
                  colors="#68a67d"
                  size={500}
                  strokeWidth={40}
                  onComplete={handleCorrectGesture}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>
            )}
            <Webcam
              ref={cameraRef}
              audio={false}
              mirrored
              videoConstraints={{
                facingMode: "user",
              }}
              onUserMediaError={() => setIsCameraError(true)}
              className="h-screen w-screen object-cover"
            />
          </div>
        )}
    </div>
  );
}

export default Training;
