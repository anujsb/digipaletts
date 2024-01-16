// import React from "react";
import "./Services.css";

const servicesData = [
  { title: "Digital Marketing", images: ["previous.webp", "next.webp"] },
  { title: "Social Media Marketing", images: ["previous.webp", "next.webp"] },
  { title: "Paid Advertising", images: ["previous.webp", "next.webp"] },
  { title: "Search Engine Optimisation", images: ["previous.webp", "next.webp"] },
  { title: "Website and App Development", images: ["previous.webp", "next.webp"] },
  { title: "Branding", images: ["previous.webp", "next.webp"] },
  { title: "Graphic Designing", images: ["previous.webp", "next.webp"] },
  { title: "Video Production", images: ["previous.webp", "next.webp"] },  
];

const ServiceCard = ({ title, images }) => (
  <div className="md:w-72 sm:w-96 h-44  my-8 mx-5 rounded-2xl text-black hover:text-white service-card">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute justify-center tri-${index === 0 ? "right" : "left"}`}
        // style={{ content: `url(https://www.srvmedia.com/wp-content/uploads/2023/08/${image})` }}
      ></div>
    ))}
    <h3 className="text-xl">{title}</h3>

    <div>
    </div>
  </div>
);

const Services = () => (
  <div className="w-full h-auto bg-[#FEFDFA] rounded-3xl text-center ">
    <div>
      <h1 className="text-black">Services</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto  ">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
