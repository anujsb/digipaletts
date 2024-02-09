import React, { useEffect } from "react";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-green-400 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 pt-20">
            
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Paid Advertising{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Paid advertising provides immediate results. It is possibly the
              quickest method of increasing website visitors.
            </p>
          </div>

          <div>
            <img
              className="w-full"
              src="https://i.postimg.cc/HxqjhfBg/Whats-App-Image-2024-01-14-at-12-58-42-a22e42f4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">digipalettes</p> */}
            {/* <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Digital Marketing </h1> */}
            <h2 className="text-lg mb-4">How does Paid advertising Work?</h2>
            <p className="text-lg mb-4">
              Paid search advertising places sponsored ads at the top and side
              of search results pages, giving them more visibility and
              prominence than organic results. For example, if you search for a
              product or service online, you may see ads from companies that
              match your search terms.Search marketing reaches consumers at the
              optimal time: when they are open to fresh information. Unlike the
              majority of digital advertising, PPC advertising is not invasive
              and does not interfere with users' tasks.
            </p>
            <h2 className="text-lg mb-4">Why Paid Advertising is So Important ?</h2>
            <p className="text-lg mb-4">
              Paid advertising (also known as Search Engine Marketing) has
              emerged as a key online marketing tactic for expanding a
              business's reach as more and more customers conduct product
              research and purchase online. As a matter of fact, most new
              visitors to a website discover it through a search engine query.
              Search engine marketing is an effective approach for a business to
              spend its marketing budget because marketers only pay for
              impressions that lead to visitors. Additionally, every visitor
              helps the website rank higher in natural search results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
