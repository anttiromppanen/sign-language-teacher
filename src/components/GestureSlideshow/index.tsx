"use client";

import { getImageByCharacter } from "@/utils/getImageByCharacter";
import { useState } from "react";
import Buttons from "./Buttons";
import SlideshowItem from "./SlideshowItem";

function GestureSlideshow() {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // imageObjects[0][0] = A, imageObjects[0][1] = image path
  const imageObjects = Object.entries(getImageByCharacter);

  const handlePrevImg = () => {
    setImgIndex(
      (prev) => (prev - 1 + imageObjects.length) % imageObjects.length
    );
    setDirection(-1);
  };

  const handleNextImg = () => {
    setImgIndex((prev) => (prev + 1) % imageObjects.length);
    setDirection(1);
  };

  return (
    <section className="relative md:px-20 overflow-hidden">
      <div className="overflow-hidden">
        <SlideshowItem
          imgIndex={imgIndex}
          direction={direction}
          imageObjects={imageObjects}
          handlePrevImg={handlePrevImg}
          handleNextImg={handleNextImg}
        />
      </div>
      <Buttons handlePrevImg={handlePrevImg} handleNextImg={handleNextImg} />
    </section>
  );
}

export default GestureSlideshow;
