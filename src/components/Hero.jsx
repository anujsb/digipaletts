import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Hero() {
  const slides = [
    {
      url: 'https://i.postimg.cc/yNxtPXR5/Whats-App-Image-2024-01-28-at-22-47-50-47521fcf.jpg',
      text: 'We are dedicated to your growth and Progress.',
    },
    {
      url: 'https://i.postimg.cc/4Ncg9Jcm/Whats-App-Image-2024-01-17-at-16-34-05-656c8949.jpg',
      text: 'More than digital marketers , we are growth hackers.',
    },
    {
      url: 'https://i.postimg.cc/xTB1wxvb/Whats-App-Image-2024-01-17-at-16-34-04-aeea2161.jpg',
      text: 'Hand over your marketing needs to us, and watch your business grow',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-screen w-full m-auto  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-1000 relative'
      >
        <div className="absolute inset-0 flex items-center justify-center text-black text-4xl  font-bold md:m-32 lg:m-32 sm:m-2 text-center duration-1000">
          {slides[currentIndex].text}
        </div>
        
      </div>
      
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-black' : 'text-gray-500'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;


// https://chat.openai.com/share/6e277503-c9ee-4c78-8fdf-f5e3c9a11160