import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" bg-yellow-300 h-full text-black">
      <div className=" mx-auto max-w-7xl ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 pt-20">
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Website Design and Development{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Website acts as your virtual store in the Digital World. Not
              having a website will hurt your Business growth.
            </p>
            <Link
              to="/Payment"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-white rounded-md hover:bg-slate-100 focus:bg-slate-200 relative group"
              role="button"
            >
              Buy service
            </Link>
          </div>

          <div>
            <img className="w-full" src="src\assets\web.jpg" alt="" />
          </div>
        </div>
        <div className="grid items-center">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            <h2 className="text-xl mb-6">
              Do You Need a Website for Your Business?
            </h2>
            <p className="text-lg mb-6">
              Oh come on , it’s as crucial as having an email id , phone number
              or a physical store. Without a website you are working against
              your business objective. Imagine , How can you make a business if
              your store is not visible to your target customers Having a
              Website looks professional rather than just being the ‘corner
              shop’ down the street, having a website gives the impression that
              you are serious and ready to do business with all kinds of
              customers, without a website it’s much harder for people to take
              your business seriously .
            </p>
            <h2>Website Types</h2>
            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong>Business Website</strong>A business website is an online
                platform that promotes a company or organisation on the
                internet. It functions as a digital shop, allowing prospective
                customers to learn about the company, browse items or services,
                and make purchases. A business website's objective is to tell
                potential customers about the company's products or services, as
                well as its values. It also allows clients to contact the
                company, make inquiries, and place orders. In addition to its
                primary role as a marketing and sales tool, a business website
                can be used to communicate with stakeholders such as employees,
                partners, and investors.
              </li>
              <li className="text-lg mb-6">
                <strong>E-commerce Website</strong>This website is an online
                shopping platform where people can purchase and sell products.
                Amazon, Flipkart, and Olx are some instances of e-commerce
                sites. E-commerce has a lot of potential to grow because
                individuals nowadays prefer to shop online due to their hectic
                lifestyles.
              </li>
              <li className="text-lg mb-6">
                <strong>Portfolio Websites</strong> These websites allow you to
                present your greatest work to a professional. It is a more
                personal website where creative individuals contribute their
                talents to represent their profession. A portfolio website is a
                highly imaginative one. For example, I am a writer seeking a
                position in digital content authoring. Then I may create a
                portfolio website that would highlight my many writing styles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
