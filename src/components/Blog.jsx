// import React from 'react';

import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="text-center mx-32 my-20">
      <div className="">
        <div className="  text-black">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-6xl ">
            Read our blog
          </h2>
          <p className="mt-5 text-lg">
            We have great team of researchers , who are always crawling around
            the web.
          </p>
          <p className="mt-5 text-lg">
            Our fantastic research team is constantly scouring the internet and
            cutting edge technologies to deliver you the best instructional
            information possible.{" "}
          </p>
        </div>

        <div className="grid max-w-3xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 gap-y-8 gap-x-8 lg:gap-x-20">
          <Link to="/About" className="relative group " role="button">
            <div className="overflow-hidden  rounded-lg aspect-w-16 aspect-h-9">
              <img
                className=" border-2 object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src="https://i.postimg.cc/htX62zx5/IMG-20240114-WA0011.jpg"
                alt=""
              />
            </div>
            <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
              January 5, 2024
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
              Why It's So Necessary to Have a Website
            </p>
            <a href="#" title="">
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </Link>

          <div className="relative group">
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src="https://i.postimg.cc/htX62zx5/IMG-20240114-WA0011.jpg"
                alt=""
              />
            </div>
            <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
              January 5, 2024
            </p>
            <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
              Blog 2
            </p>
            <a href="#" title="">
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
