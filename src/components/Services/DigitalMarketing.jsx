import React, { useEffect } from "react";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="f-full bg-yellow-300 h-full">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8">
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              digipalettes
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Digital Marketing{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Everyone is going digital, so should your business, because your
              clients are searching for you online.
            </p>
          </div>

          <div>
            <img
              className="w-full"
              src="https://i.postimg.cc/85fHHgxT/dm.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center bg-yellow-300 ">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">digipalettes</p> */}
            {/* <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Digital Marketing </h1> */}
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Whether you run a small business or a big company, we're here to
              help your online presence grow. We've got the skills and tools to
              make sure you succeed online. Our team can boost your visibility
              using strategies like digital marketing, SEO, and social media. We
              don't just get you noticed but we help you stand out from the
              competition and build strong connections with your customers. Let
              us be your partner in navigating the online world and achieving
              success in a simple and effective way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
