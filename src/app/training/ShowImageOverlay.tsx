import { GestureImageStatic } from "@/components/GestureImage";

function ShowImageOverlay({
  imageObject,
  handleClick,
}: {
  imageObject: [string, string];
  handleClick: () => void;
}) {
  const [letter, imgUrl] = imageObject;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-7xl my-8">
        Letter <span className="font-bold text-8xl ml-4 italic">{letter}</span>
      </h2>
      <GestureImageStatic imgLetter={letter} imgUrl={imgUrl} />
      <button
        type="button"
        className="mt-8 rounded-md -bg--secondary-pink py-4 px-8 text-background text-4xl col-span-2 hover:brightness-110"
        onClick={handleClick}
      >
        I&lsquo;m ready!
      </button>
    </div>
  );
}

export default ShowImageOverlay;
