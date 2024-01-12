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
    const intervalId = setInterval(handleNext, 4000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="bg-black min-h-screen h-auto w-full">
      <div className="container mx-auto flex items-center justify-center h-full">
        <div id="slide" className="max-w-max-content mt-10">
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80)' }}>
            <div className="content">
              <div className="name text-4xl font-bold ">title</div>
              <div className="des ">
                details
              </div>
              <button className="px-4 py-2 ">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80)' }}>
            <div className="content">
              <div className="name text-4xl font-bold ">title</div>
              <div className="des ">
                details
              </div>
              <button className="px-4 py-2 ">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80)' }}>
            <div className="content">
              <div className="name text-4xl font-bold">title</div>
              <div className="des">
                details
              </div>
              <button className="px-4 py-2">See more</button>
            </div>
          </div>
          <div className="item bg-cover bg-center w-72 h-96" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80)' }}>
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
