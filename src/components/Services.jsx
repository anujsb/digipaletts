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
  <div className="w-56 h-80 m-8 rounded-2xl text-black hover:text-white service-card">
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute justify-center tri-${index === 0 ? "right" : "left"}`}
        style={{ content: `url(https://www.srvmedia.com/wp-content/uploads/2023/08/${image})` }}
      ></div>
    ))}
    <h3>{title}</h3>

    <div>
    </div>
  </div>
);

const Services = () => (
  <div className="w-full h-auto bg-white rounded-3xl text-center">
    <div>
      <h1 className="text-black">Services</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  </div>
);

export default Services;
