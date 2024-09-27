import React, { useRef } from "react";
import Webcam from "react-webcam";

function Training() {
  const cameraRef = useRef<Webcam | null>(null);

  return (
    <div>
      <Webcam
        ref={cameraRef}
        audio={false}
        mirrored
        videoConstraints={{
          facingMode: "user",
        }}
        className="h-screen"
      />
    </div>
  );
}

export default Training;
