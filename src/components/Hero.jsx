// Hero.jsx

// import React from 'react';
import { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";



const Hero = () => {
  const handleNext = () => {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  };

  const handlePrev = () => {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 6000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="bg-black min-h-screen h-auto w-full bg-info">
      <div className="container mx-auto flex items-center justify-center h-full">
        <div id="slide" className="max-w-max-content mt-10">
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/P5VHyGb2/IMG-20240114-WA0009.jpg)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/FRBWthGs/pexels-shvets-production-7195232.jpg)' }}>
            <div className="content">
              <div className="name text-4xl font-bold ">title</div>
              <div className="des ">
                details
              </div>
              <button className="px-4 py-2 ">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/Jnk6W9FN/pexels-jonathan-borba-14891568.jpg)' }}>
            <div className="content">
              <div className="name text-4xl font-bold ">title</div>
              <div className="des ">
                details
              </div>
              <button className="px-4 py-2 ">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/65jdYMjt/pexels-alena-shekhovtcova-8068004.jpg)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/yd1xqHx5/pexels-sound-on-3756879.jpg)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/dtrhTnb5/pexels-mikael-blomkvist-6476799.jpg)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
        </div>
        <div className="buttons absolute bottom-10 z-20 text-center w-full">
          <button onClick={handlePrev} className="w-15 h-15 rounded-full border-1 border-gray-700 transition duration-500 hover:backdrop-blur-lg text-stone-700">
          {/* <button onClick={handlePrev} className="w-20 h-20   transition duration-500 "> */}
            {/* <i className=" fa-angle-left"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-angle-left" /> */}
            <FaArrowLeft style={{ fontSize: '30px' }}/>

            
          </button>
          <button onClick={handleNext} className="w-15 h-15 rounded-full border-1 border-gray-700 transition duration-500 hover:backdrop-blur-lg text-stone-700">
            {/* <i className="fas fa-angle-right"></i> */}
            <FaArrowRight style={{ fontSize: '30px' }}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
