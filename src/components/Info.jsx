import React from "react";
import About from "./Pages/About";
// import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { Link } from "react-router-dom";
const Info = () => {
  // const history = useHistory()

  return (
    <div className="bg-info w-full lg:w-full md:w-full">
      <section className=" bg-opacity-30 py-10 sm:py-0 lg:py-24 sm:p-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="items-center ">
            <div className="md:mx-20 md:my-10 sm:mx-20 sm:my-10 sm:p-0">
              {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">About Us</p> */}
              <p className="text-5xl font-bold text-black  mt-4 md:px-10 sm:p-0 sm:my-5  lg:mt-8">
                Welcome To Digi Palettes
              </p>
              <h2 className="text-2xl font-bold m-4 text-black">
                Join Us On A Journey Where Passion Meets Expertise, And Let Digi
                Palettes Be The Brushstroke That Paints Your Business Success
                Story.
              </h2>
              <ul className="text-lg m-6 text-black">
                <li className="text-lg mb-6">
                  <strong>Passionate Multidisciplinary Team:</strong>Amidst the
                  saturation of digital marketing agencies, Digi Palettes shines
                  as a rare breed, offering authentic and genuine consultation
                  services.
                </li>
                <li className="text-lg mb-6">
                  <strong>Unparalleled Differentiation:</strong> Compared to
                  traditional methods, digital marketing is often more
                  cost-effective.
                </li>
                <li className="text-lg mb-6">
                  <strong>Expert Navigation of Digital Complexities:</strong>{" "}
                  Navigating the intricate landscape of digital marketing can be
                  challenging. At Digi Palettes, our professionals excel in
                  understanding and addressing these technicalities.
                </li>
              </ul>

              <Link
                // href="#"
                to="/About"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Learn More About Us
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

              {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
            </div>

            {/* <div>
                      <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                  </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
