import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { HiOutlinePlayCircle } from "react-icons/hi2";

import heroImg from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50 p-4">
      {/* Background blur circle */}
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-pink-300 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto py-20 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-7">
          {/* Badge */}
          <div className="bg-purple-100 shadow-sm border rounded-full px-5 py-2 flex items-center gap-2 text-sm w-fit transform transition-all duration-300 hover:-translate-y-1">
            <FaRegDotCircle className="text-purple-500" />
            <span className="text-purple-600 font-medium bg">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight transform transition-all duration-300 hover:-translate-y-2">
            Supercharge Your <br />
            <span className="bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Digital Workflow
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-md transform transition-all duration-300 hover:-translate-y-2">
            Access premium AI tools, templates, and productivity software—
            everything you need to build faster and smarter.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-7 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
              Explore Products
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-linear-to-l from-purple-600 shadow-sm transition">
              <HiOutlinePlayCircle className="text-xl text-purple-500" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-end relative transform transition-all duration-300 hover:-translate-x-2">
          <div className="absolute w-[350px] h-[350px] bg-purple-200 rounded-full blur-3xl opacity-40 "></div>

          <img
            src={heroImg}
            alt="hero"
            className="relative w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
