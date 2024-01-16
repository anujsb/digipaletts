// import GoogleMap from 'react-google-maps';

const Contact = () => {

  // const [center, setCenter] = React.useState({
  //   lat: 37.7833,
  //   lng: -122.4167,
  // });
    return (
      <>
        {/* <Menu /> */}
        <section id="contact-us" className="bg-gray-50 dark:bg-white mt-40 lg:my-32 ">
          <div className="flex flex-row flex-wrap m-8 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div data-aos="zoom-out" className=" flex flex-row justify-center  w-1/2 h-full  rounded-lg flex-wrap">
              <img
                src={'https://res.cloudinary.com/dt3lzix8e/image/upload/v1702808965/contact_pdfoh6.jpg'}
                alt="team"
                width=""
                className="object-contain scale-[1.75]  overflow-hidden w-1/2 "
              />
              {/* <GoogleMap center={center} zoom={13}/> */}
            </div>
            <div
              data-aos="zoom-out"
              className=" w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0  text-black dark:border-gray-700"
            >
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                  Get in touch with us
                </h1>
                <form className="space-y-4 md:space-y-6" action="https://formspree.io/f/meqyjaln" method="POST">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium ">
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
                    <label htmlFor="compname" className="block mb-2 text-sm font-medium ">
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
                    <label htmlFor="email" className="block mb-2 text-sm font-medium ">
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
                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 ">
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
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">
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
                  <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Submit</button>



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
        </section>
      </>
    );
  };
  
  export default Contact;