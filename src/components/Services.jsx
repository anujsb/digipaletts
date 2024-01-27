// import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import DigitalMarketing from "./Services/DigitalMarketing";

const servicesData = [
  {
    title: "Digital Marketing",
    link: "/DigitalMarketing",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Social Media Marketing",
    link: "/SocialMarketing",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Paid Advertising",
    link: "/PaidAdvertising",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Search Engine Optimisation",
    link: "/SEO",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Website and App Development",
    link: "/Website",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Branding",
    link: "/Branding",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Graphic Designing",
    link: "/GraphicDesigning",
    images: ["previous.webp", "next.webp"],
  },
  {
    title: "Video Production",
    link: "/DigitalMarketing",
    images: ["previous.webp", "next.webp"],
  },
];

const ServiceCard = ({ title,link, images }) => (
  <Link
    to={link}
    className="md:w-72 sm:w-96 h-44  my-8 mx-5 rounded-2xl text-black hover:text-white service-card "
    role="button"
  >
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute justify-center tri-${
          index === 0 ? "right" : "left"
        }`}
        // style={{ content: `url(https://www.srxvmedia.com/wp-content/uploads/2023/08/${image})` }}
      ></div>
    ))}
    <h3 className="text-3xl">{title}</h3>

    <div></div>
  </Link>
);

const Services = () => (
  <div className="w-full h-auto rounded-3xl text-center bg-info">
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
