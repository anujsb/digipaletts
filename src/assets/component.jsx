import React, { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? slides.length - 1 : prevCurrent - 1));
  };

  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`slide-${index}`} />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          >
          </div>
          
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
