import React, { useEffect } from "react";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-green-400 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              digipalettes
            </p> */}
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Branding{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Branding is not just a logo, it’s a story. Your brand is your
              voice, make it heard.
            </p>
          </div>

          <div>
            <img
              className="w-full"
              src="https://i.postimg.cc/05Bm1BXh/Whats-App-Image-2024-01-14-at-12-58-41-aa2f15d0.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            <h2 className="text-xl mb-6">
              Why Branding Matters?
            </h2>
            <p className="text-lg mb-6">We at DigiPalettes take care of your business and help you to
              establish your own brand. </p>
            <h2>
              A brand is more than just a name or a logo. It is the identity and
              reputation of a business, and it can influence how customers
              perceive and interact with it. A brand can make a great impact for
              several reasons, such as:
            </h2>
            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong></strong>It can help a business stand
                out from the competition and attract more attention.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>It can build trust and
                loyalty among customers, who may prefer a familiar and reliable
                brand over others.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> It can communicate the
                values, vision, and mission of a business, and inspire customers
                to support its goals.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> It can create a consistent
                and memorable experience for customers, who may associate the
                brand with certain emotions, benefits, or qualities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
