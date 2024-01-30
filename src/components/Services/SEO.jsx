import React, { useEffect } from "react";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" bg-purple-400 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8">
            
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
          </div>

          <div>
            <img
              className="w-full"
              src="https://i.postimg.cc/zXV8gdjw/Whats-App-Image-2024-01-14-at-12-58-41-2da0a01c.jpg"
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
