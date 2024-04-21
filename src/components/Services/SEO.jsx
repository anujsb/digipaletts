import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" bg-yellow-300 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 pt-20">
            
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              SEO Services{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              In today's era what comes top or in your front view increases your
              business visibility to maximum search base clients for your
              business. So here we believe and ensure you and your business to
              give ethical and standard SEO (Search Engine Optimization)
              Services
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
              src="src\assets\seooo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong></strong>Crucial for enhancing your online visibility.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>Optimize your website's content, structure, and meta tags to improve search engine rankings. Keyword research, backlink building
              </li>
              <li className="text-lg mb-6">
                <strong></strong> Regular content updates are key components of effective SEO strategies
              </li>
              <li className="text-lg mb-6">
                <strong></strong> We tailor a plan that aligns with your business goals and ensures a strong online presence.

              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
