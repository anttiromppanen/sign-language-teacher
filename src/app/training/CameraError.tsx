import { VideoCameraSlashIcon } from "@heroicons/react/20/solid";

function CameraError() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-y-4 -translate-y-1/2 max-w-xl p-10 text-red-500 -bg--secondary-pink rounded-xl text-2xl">
      <VideoCameraSlashIcon className="size-20 text-foreground" />
      <h2>
        Error: No camera detected. Please connect a camera and refresh the page.
      </h2>
    </div>
  );
}

export default CameraError;
