import { GestureImageStatic } from "@/components/GestureImage";

function InitialLoadOverlay({
  imageObject,
}: {
  imageObject: [string, string];
}) {
  const [letter, imgUrl] = imageObject;

  return (
    <div className="absolute -z-10 flex justify-center items-center left-0 top-0 w-screen h-screen">
      <GestureImageStatic imgLetter={letter} imgUrl={imgUrl} />
    </div>
  );
}

export default InitialLoadOverlay;
