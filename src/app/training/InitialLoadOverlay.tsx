import { GestureImageStatic } from "@/components/GestureImage";

function InitialLoadOverlay({
  imageObject,
  handleClick,
}: {
  imageObject: [string, string];
  handleClick: () => void;
}) {
  const [letter, imgUrl] = imageObject;

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="max-w-5xl md:grid md:mt-10 items-center gap-x-6 px-4 py-12 grid-cols-2">
        <h2 className="text-6xl mb-8 md:hidden">
          Sign language gesture training
        </h2>
        <GestureImageStatic imgLetter={letter} imgUrl={imgUrl} />
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl lg:text-7xl hidden md:block">
            Sign language gesture training
          </h2>
          <h3 className="text-2xl mt-8 md:mt-4">
            Learn by doing, you are shown images of sign language alphabet
            characters, and then you can learn by doing with on device camera
            and the power of AI.
          </h3>
        </div>
        <button
          type="button"
          className="mt-8 rounded-md -bg--secondary-pink py-4 px-8 text-white text-4xl col-span-2 hover:brightness-110"
          onClick={handleClick}
        >
          Start learning now!
        </button>
      </div>
    </div>
  );
}

export default InitialLoadOverlay;
