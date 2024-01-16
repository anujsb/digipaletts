import React from "react";


const Info = () =>{

    return(
      <div className="bg-info">
      <section className=" bg-opacity-30 py-10 sm:py-0 lg:py-24 sm:p-0">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
              <div className="items-center ">
                  <div className="md:mx-20 md:my-10 sm:mx-20 sm:my-10 sm:p-0">
                      {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">About Us</p> */}
                      <p className="text-5xl font-bold text-black mt-4 md:px-10 sm:p-0 sm:my-5  lg:mt-8">Welcome To Digi Palettes</p>
                      <p className="text-black text text-xl subpixel-antialiased font-medium tracking-wide mt-4 md:p-10 sm:p-0 sm:my-5  lg:mt-8 sm:text-xl ">Join Us On A Journey Where Passion Meets Expertise, And Let Digi Palettes Be The Brushstroke That Paints Your Business Success Story.</p>
                      <p className="text-black subpixel-antialiased tracking-wide sm:text-xl lg:mt-8 md:mt-4 sm:px-0 md:px-10  sm:mt-10 text-base  ">A Team Of Passionate Entrepreneurs, Digital Marketers, Artists, And Web Developers. In A Landscape Crowded With Digital Marketing Agencies, We Stand Out As A Rare Breed, Offering Genuine And Authentic Consultation.
                         Navigating The Intricacies Of Digital Marketing Can Be A Challenge, And Even Professionals May Find Themselves Unaware Of The Technicalities Involved. At Digi Palettes, We Are Committed To Not Only Guiding You Through The Process But Also Dedicated To Nurturing Your Business From Its Nascent Stages To A Fully Established Presence.</p>
  
                      <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        Learn More About Us
                          <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </a>
  
                      {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                  </div>
  
                  {/* <div>
                      <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                  </div> */}
              </div>
          </div>
      </section>
  </div>
  
    )
}

export default Info;