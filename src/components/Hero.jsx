// Hero.jsx

// import React from 'react';
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";

const Hero = () => {
  const handleNext = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };

  const handlePrev = () => {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white min-h-screen h-auto w-full ">
      <div className="container mx-auto flex items-center justify-center h-full ">
        <div id="slide" className="max-w-max-content mt-10 ">
          <div
            className="item bg-cover bg-center h-screen w-full"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/P5VHyGb2/IMG-20240114-WA0009.jpg)",
            }}
          >
            {" "}
            {/* 3.1*/}
            <div className="content ">
              <div className="name text-4xl font-bold text-black bg-black bg-opacity-10 rounded-lg p-5 backdrop-blur-md">
                We are dedicated to your growth and Progress.
              </div>
              <div className="des text-black"></div>
              <button className="px-4 py-2 text-black bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-400 from-yellow-100 to-yellow-50">
                See more
              </button>
            </div>
          </div>
          <div
            className="item bg-cover bg-center w-72 h-96"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/4Ncg9Jcm/Whats-App-Image-2024-01-17-at-16-34-05-656c8949.jpg)",
            }}
          >
            {" "}
            {/* 1.0*/}
            <div className="content">
              <div className="name text-4xl font-bold text-black bg-black bg-opacity-10 rounded-lg p-5 backdrop-blur-md">
                More than digital marketers , we are growth hackers.
              </div>
              <div className="des text-black ">
                Is Not Just A Slogan; It's A Philosophy.
              </div>
              <button className="px-4 py-2 text-black  bg-gradient-to-r from-yellow-100 to-yellow-50 hover:from-yellow-100 hover:to-yellow-400 ">
                See more
              </button>
            </div>
          </div>
          <div
            className="item bg-cover bg-center w-72 h-96"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/xTB1wxvb/Whats-App-Image-2024-01-17-at-16-34-04-aeea2161.jpg)",
            }}
          >
            {" "}
            {/* 2.0*/}
            <div className="content">
              <div className="name text-4xl font-bold text-black bg-black bg-opacity-10 rounded-lg p-5 backdrop-blur-md">
                Hand over your marketing needs to us, and watch your business
                grow
              </div>
              <div className="des text-black"></div>
              <button className="px-4 py-2 text-black bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-400 from-yellow-100 to-yellow-50">
                See more
              </button>
            </div>
          </div>
          <div
            className="item bg-cover bg-center w-72 h-96 "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/P5VHyGb2/IMG-20240114-WA0009.jpg)",
            }}
          >
            {" "}
            {/* 3.0*/}
            <div className="content">
              <div className="name text-4xl font-bold text-black bg-black bg-opacity-10 rounded-lg p-5 backdrop-blur-md">
                We are dedicated to your growth and Progress.
              </div>
              <div className="des text-black"></div>
              <button className="px-4 py-2 text-black bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-400 from-yellow-100 to-yellow-50">
                See more
              </button>
            </div>
          </div>
          <div
            className="item bg-cover bg-center w-72 h-96"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/4Ncg9Jcm/Whats-App-Image-2024-01-17-at-16-34-05-656c8949.jpg)",
            }}
          >
            {" "}
            {/* 1.1*/}
            <div className="content">
              <div className="name text-4xl font-bold text-black bg-black bg-opacity-10 rounded-lg p-5 backdrop-blur-md">
                More than digital marketers , we are growth hackers.
              </div>
              <div className="des text-black">
                Is Not Just A Slogan; It's A Philosophy.
              </div>
              <button className="px-4 py-2 text-black bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-400 from-yellow-100 to-yellow-50">
                See more
              </button>
            </div>
          </div>
          <div
            className="item bg-cover bg-center w-72 h-96"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/xTB1wxvb/Whats-App-Image-2024-01-17-at-16-34-04-aeea2161.jpg)",
            }}
          >
            {" "}
            {/* 2.1*/}
            <div className="content">
              <div className="name text-4xl font-bold text-black bg-black bg-opacity-10 rounded-lg p-5 backdrop-blur-md">
                Hand over your marketing needs to us, and watch your business
                grow
              </div>
              <div className="des text-black"></div>
              <button className="px-4 py-2 text-black bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-400 from-yellow-100 to-yellow-50">
                See more
              </button>
            </div>
          </div>
        </div>
        <div className="buttons absolute bottom-10 z-20 text-center w-full">
          <button
            onClick={handlePrev}
            className="w-15 h-15 rounded-full border-1 border-gray-700 transition duration-500 hover:backdrop-blur-lg text-stone-700 m-2"
          >
            {/* <button onClick={handlePrev} className="w-20 h-20   transition duration-500 "> */}
            {/* <i className=" fa-angle-left"></i> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-angle-left" /> */}
            <FaArrowLeft style={{ fontSize: "30px" }} />
          </button>
          <button
            onClick={handleNext}
            className="w-15 h-15 rounded-full border-1 border-gray-700 transition duration-500 hover:backdrop-blur-lg text-stone-700"
          >
            {/* <i className="fas fa-angle-right"></i> */}
            <FaArrowRight style={{ fontSize: "30px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
