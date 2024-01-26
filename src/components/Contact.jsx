const Contact = () => {
  return (
    <>
      {/* <Menu /> */}
      <section id="contact-us" className="bg-gray-50 dark:bg-white  ">
        <div className=" m-8 px-6 py-8 mx-auto grid grid-flow-row  sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2">
          <div
            data-aos="zoom-out"
            className=" flex  justify-center rounded-lg flex-wrap "
          >
            <img
              src={
                "https://res.cloudinary.com/dt3lzix8e/image/upload/v1702808965/contact_pdfoh6.jpg"
              }
              alt="team"
              width=""
              className="object-contain overflow-hidden item-center content-center"
            />
            {/* <GoogleMap center={center} zoom={13}/> */}
          </div>
          <div
            data-aos="zoom-out"
            className=" bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0  text-black dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                Get in touch with us
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="https://formspree.io/f/meqyjaln"
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5    dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Charles Coventry"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="compname"
                    className="block mb-2 text-sm font-medium "
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="compname"
                    id="compname"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ABC Pvt Ltd "
                    required={false}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Contact No.
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91 1234567890"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address
                  </label>
                  <textarea
                    // type=""
                    rows={2}
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pune"
                    required={true}
                  />
                </div>
                <div className="flex items-start">
                  {/* <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div> */}
                  {/* <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                        I accept the
                        <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                          Terms and Conditions
                        </a>
                      </label>
                    </div> */}
                </div>

                {/* buttoooon */}
                {/* <Button type="submit" className="" fullWidth={true}>
                    Get Started
                  </Button> */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Submit
                </button>

                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?
                    <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      &nbsp;Login here
                    </Link>
                  </p> */}
              </form>
            </div>
          </div>
        </div>
        <div className=" m-8 px-6 py-8 mx-auto grid grid-flow-row  sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2">
          <div>
            <h1 className="text-black text-lg">Office No. 212, 2nd Floor, Kakade Plaza, Warje Jakat Naka, Karve Nagar, Pune, Maharashtra 411052</h1>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30270.88017777569!2d73.7872241185826!3d18.489998636223515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe0a7394bbd%3A0xe33deeba66f35c6!2sMusic%20Galaxy%20India!5e0!3m2!1sen!2sin!4v1706268265228!5m2!1sen!2sin"
              // width="600"
              // height="450"
              className="rounded-2xl border-black w-full  "
              style={{border:"0"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
