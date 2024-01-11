import React from 'react';
import {motion} from "framer-motion";

const Services = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 bg-ser">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Make every step user-centric</h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* Service Item 1: Support */}
          <motion.div className="md:p-8 lg:p-14 " 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
                <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Support</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
          </motion.div>

          {/* Service Item 2: Sales */}
          <motion.div className="md:p-8 lg:p-14 md:border-l md:border-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          >
          <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 27H19V45H27V27Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 17L15 7L23 15L37 1" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 1H37V10" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Sales</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
          </motion.div>

          {/* Service Item 3: Onboarding */}
          <motion.div whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            {/* Onboarding SVG */}
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Onboarding</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
          </motion.div>

          {/* Service Item 4: Product */}
          <motion.div className="md:p-8 lg:p-14 md:border-t md:border-gray-200" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
            {/* Product SVG */}
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Product</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
          </motion.div>

          {/* Service Item 5: Quality */}
          <motion.div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
            {/* Quality SVG */}
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Quality</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
          </motion.div>

          {/* Service Item 6: Result */}
          <motion.div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t" whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
            {/* Result SVG */}
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Result</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;



// https://www.landingfolio.com/library/feature/react?id=61b555829264fc4a988a211d&tab=code