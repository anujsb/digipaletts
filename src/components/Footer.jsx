import React from "react";
import { logo } from "../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-5 gap-y-16 gap-x-12 "> */}
        <div className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 text-center ">
          {/* <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 text-black content-center"> */}
          <div className="lg:pr-8 text-black content-center">
            {/* <img src={logo} alt="logo" className="logo bg-black bg-opacity-50 border-stone-500 rounded-lg" /> */}
            <p className="text-sm font-semibold tracking-widest text-yellow-500 uppercase">
              Contact Info
            </p>
            <ul className="mt-6 space-y-4 ">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600 "
                >
                  {" "}
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 px-1"
                  >
                    <path
                      d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  087882 29595{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  <svg
                    viewBox="0 0 192 192"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6 px-1"
                  >
                    <path
                      stroke="#000000"
                      stroke-linejoin="round"
                      stroke-width="12"
                      d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
                    />
                  </svg>
                  digipalettes07@gmail.com{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex  justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  {/* <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M18 9H14M18 12H14M12 15.5C11.7164 14.3589 10.481 13.5 9 13.5C7.519 13.5 6.28364 14.3589 6 15.5M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19ZM10 9.5C10 10.0523 9.55228 10.5 9 10.5C8.44772 10.5 8 10.0523 8 9.5C8 8.94772 8.44772 8.5 9 8.5C9.55228 8.5 10 8.94772 10 9.5Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg> */}
                  Office No. 212 2nd Floor Kakade Plaza Karve Nagar Karve Nagar,
                  Road, opposite Kakade City, Warje, Pune, Maharashtra 411052{" "}
                </a>
              </li>

              {/* <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  Career{" "}
                </a>
              </li> */}
            </ul>

            <ul className="flex  justify-center  items-center space-x-3 m-9">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex  items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-yellow-600 focus:bg-yellow-600"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-yellow-600 focus:bg-yellow-600"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-yellow-600 focus:bg-yellow-600"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-yellow-600 focus:bg-yellow-600"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div> */}

          <div className="">
            <p className="text-sm font-semibold tracking-widest text-yellow-500 uppercase ">
              Services.
            </p>

            <ul className="mt-6 space-y-4 ">
              <li>
                {/* <a
                  href="#"
                  title=""
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                >
                  {" "}
                  Digital Marketing{" "}
                </a> */}
                <Link
                  to="/DigitalMarketing"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Digital Marketing
                </Link>
              </li>

              <li>
                <Link
                  to="/SocialMarketing"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Social Media Marketing
                </Link>
              </li>

              <li>
                <Link
                  to="/PaidAdvertising"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Paid Advertising
                </Link>
              </li>

              <li>
                <Link
                  to="/SEO"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Search Engine Optimisation
                </Link>
              </li>
              <li>
                <Link
                  to="/Website"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Website and App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/Branding"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  to="/GraphicDesigning"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link
                  to="/VideoProduction"
                  className="flex justify-center text-base text-black transition-all duration-200 hover:text-yellow-600 focus:text-yellow-600"
                  role="button"
                >
                  Video Production
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8"> */}
          <div className=" lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-yellow-500 uppercase">
              Let's talk
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-yellow-600 caret-yellow-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-yellow-400 rounded-md hover:bg-yellow-500 focus:bg-yellow-600"
              >
                Submit
              </button>
              <div className="m-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.88017777569!2d73.7872241185826!3d18.489998636223515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe0a7394bbd%3A0xe33deeba66f35c6!2sMusic%20Galaxy%20India!5e0!3m2!1sen!2sin!4v1706268265228!5m2!1sen!2sin"
                  // width="600"
                  // height="450"
                  className="rounded-2xl border-black w-full  "
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-xs text-center text-gray-600 ">
          © Copyright 2024, All Rights Reserved by DigiPalettes
        </p>
        {/* <p className="text-sm text-center text-gray-600">Website by :)</p> */}
      </div>
    </section>
  );
};

export default Footer;
