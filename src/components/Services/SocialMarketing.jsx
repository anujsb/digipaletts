import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SocialMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="f-full bg-[#DAB34A] h-full">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 pt-20">
            
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Social Media Marketing{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Social Media increases trust by connecting the audience to brands.
            </p>
            <Link
              to="/Payment"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-white rounded-md hover:bg-slate-100 focus:bg-slate-200 relative group"
              role="button"
            >
              Buy service
            </Link>
          </div>

          <div>
            <img
              className="w-full"
              src="src\assets\smm.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center  ">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">digipalettes</p> */}
            {/* <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Digital Marketing </h1> */}
            <h2 className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Why should you go for Social Media Marketing ?</h2>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Because social media is where consumers and buyers interact,
              social media marketing is more crucial than ever. In essence,
              individuals are contacting one another for direction, counsel,
              knowledge, materials, and a lot more. Individuals who deliver all
              of that first establish themselves as authorities on the issue and
              prominent thinkers. Their viewpoints influence choices.
            </p>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              As a marketing leader, you want those who are connected to your
              brand—such as customer and staff advocates—to spearhead these
              discussions. Getting brand champions to create and lead these
              social media networks is your aim.
            </p>
            <h1 className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Some Important Facts about it?</h1>
            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong></strong>It is projected that 4.89 billion people would
                use social media globally in 2023.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>Every month, the average person switches
                between seven different social media platforms.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> Social media usage among internet users is at
                an all-time high of 151 minutes per day.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> More than half of all social media users use the platform to research products before purchasing them. (Source: Global Web Index). 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMarketing;
