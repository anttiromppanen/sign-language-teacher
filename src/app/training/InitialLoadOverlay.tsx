"use client";

import { useEffect, useState } from "react";

function InitialLoadOverlay({
  handleClick,
}: {
  handleClick: () => void;
}) {
  const [isCameraDetected, setIsCameraDetected] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    async function checkCamera() {
      try {
        if (!navigator.mediaDevices?.enumerateDevices) {
          setIsCameraDetected(false);
          return;
        }

        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter(device => device.kind === "videoinput");
        setIsCameraDetected(videoInputs.length > 0);
      } catch (err) {
        console.error("Error checking camera:", err);
      }
    }

    checkCamera();
  }, [])

  return (
    <div className="w-full h-full max-w-[1500px] mx-auto">
      <div className="mt-10 flex flex-col gap-y-10">
        <h1 className="text-5xl">
          Before we get started
        </h1>
        <ol className="flex pl-6 flex-col gap-y-2">
          <li className={`flex gap-x-2 ${isCameraDetected === false && "opacity-50"}`}>
            <span className="font-oxanium text-xl">1.</span>
            <div className="">
              <h2 className="text-xl">
                {isCameraDetected === undefined ? "Device with a camera" : "No camera detected"}
              </h2>
              <p className="text-white/60">
                Make sure your device has a camera (i.e. Webcam or front-facing camera on a phone).
              </p>
            </div>
          </li>

          <li className="flex gap-x-2">
            <span className="font-oxanium text-xl">2.</span>
            <div className="">
              <h2 className="text-xl">Load model</h2>
              <p className="text-white/60">Wait for machine learning model to load.</p>
            </div>
          </li>
        </ol>
        <button
          type="button"
          className="rounded-md -bg--secondary-pink py-4 px-8 text-white text-4xl col-span-2 hover:brightness-110"
          onClick={handleClick}
        >
          Start learning now!
        </button>
      </div>
    </div>
  );
}

export default InitialLoadOverlay;
