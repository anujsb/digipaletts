// Hero.jsx

// import React from 'react';
import { useEffect } from 'react';


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
    <div className="bg-black min-h-screen h-auto w-full">
      <div className="container mx-auto flex items-center justify-center h-full">
        <div id="slide" className="max-w-max-content mt-10">
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://i.postimg.cc/Kc3QkSJB/pexels-ksenia-chernaya-3965520.jpg)' }}>
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
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border-2 border-gray-700 transition duration-500 hover:bg-green-500">
            <i className="fas fa-angle-left"></i>
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border-2 border-gray-700 transition duration-500 hover:bg-green-500">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
