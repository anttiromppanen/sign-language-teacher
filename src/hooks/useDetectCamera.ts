import { useEffect, useState } from "react";

function useDetectCamera() {
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
  }, []);

  return  { isCameraDetected };
}

export default useDetectCamera;