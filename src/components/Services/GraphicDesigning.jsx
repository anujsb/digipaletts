import React, { useEffect } from "react";

const GraphicDesigning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" bg-stone-400 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 pt-20">
            
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Graphic Designing{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Make Your brand speak through colours, fonts and images
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
            <h2 className="text-xl mb-6">
              How can graphic design influence the customer’s decision-making
              process?
            </h2>
            <p className="text-lg mb-6">
              Graphic design is a vital part of digital marketing because it
              helps to create a unique and consistent visual identity for a
              brand, communicate its message and values effectively, and
              influence the customer’s decision-making process. Graphic design
              can also enhance the user experience, increase conversions, and
              differentiate a brand from its competitors. Some of the benefits
              of graphic design in digital marketing are:
            </p>

            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong></strong>It can attract and retain the attention of the
                target audience with appealing and relevant visuals.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>It can convey complex or abstract information
                in a simple and digestible way, using images, icons, charts,
                graphs, etc.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> It can evoke emotions, associations, and
                preferences among the customers, using colors, shapes, fonts,
                and styles.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> It can reinforce the brand identity and
                recognition, using consistent and distinctive logos, slogans,
                and themes.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>It can create a positive impression and
                reputation for the brand, using professional and high-quality
                designs.
              </li>
            </ul>
            <h2>
            Graphic design is not just a decorative element, but a strategic tool that can enhance the effectiveness and efficiency of digital marketing campaigns 
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesigning;
