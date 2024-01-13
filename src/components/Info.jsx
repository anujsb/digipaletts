import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const Info = () => {
    const typedRef = useRef(null);

    useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          'Goals.',
          'Inspiration.',
          'Footer.',
        ],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 50, // backspacing speed in milliseconds
        loop: true, // loop the animation
      };
      const typed = new Typed(typedRef.current, options);

      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);


  return (
    <div className=" w-full h-screen bg-info">
        <div className='p-20'>
            <div >
                <h1 className='m-10'>About Us</h1>
            </div>
            <div>
                <h2 className='m-10 text-4xl'>What made us decide to become 360-degree marketers?</h2>
            </div>
            <p className='m-10 text-2xl'>
            Our  <span ref={typedRef}></span>
          </p>

        </div>
    </div>
  );
};

export default Info;
