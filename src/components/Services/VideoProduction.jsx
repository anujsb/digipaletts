import React, { useEffect } from "react";

const VideoProduction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-red-400 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8">
            
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Video Marketing Services{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              We Digi Palettes, a team of Creative and innovative people, offer
              you Best way to present your Brand, Products or Services to
              prospectus through Video Marketing Services.
            </p>
          </div>

          <div>
            <img
              className="w-full"
              src="https://i.postimg.cc/VN6kKY9T/Whats-App-Image-2024-01-14-at-12-58-42-1e407447.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            <h2 className="text-xl mb-6">What to do ?</h2>
            <h2 className="text-xl mb-6">What should I do ? </h2>
            <h2 className="text-xl mb-6">How to do Video Marketing?</h2>
            <p className="text-lg mb-6">
              We will not only help you to grow but also we will be with you on
              every step of your journey to succeed you to deliver best way
              advertising via Video Marketing Services.
            </p>

            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong></strong>Video Marketing is the best way to picturise
                your Service/Product in customer's mind which remains and recall
                for a longer time. Which ultimately closes the deal and
                increases your customers.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>Create appealing and shareable content to
                promote your brand, products, or services.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> On platforms Youtube, Facebook, Instagram
                offer multiple opportunities for reaching your target audience
                through video.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>Video marketing provides a dynamic channel to
                showcase your offerings. Crafting content that resonates with
                your audience helps build brand recognition and can lead to
                increased customer engagement and conversions. It's essential to
                adapt your approach to each platform's unique audience and
                features for maximum impact.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>It can create a positive impression and
                reputation for the brand, using professional and high-quality
                designs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProduction;
