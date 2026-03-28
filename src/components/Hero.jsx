import React from "react";
import heroImg from "../assets/hero.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className="text-center bg-gray-50 px-3 mx-auto pt-14 lg:pt-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
          We Build <br /> <span className="text-blue-600">Productive</span> Apps
        </h1>
        <p className="pt-3 md:pt-5 text-gray-500">
          This is hero applicaition , we craft innovative apps designed to make
          everyday life <br /> simpler, smarter, and more exciting. Our goal is
          to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center space-x-2 mt-3">
        <button className="px-4 py-1 items-center flex justify-center bg-blue-400 cursor-pointer rounded-md text-white">
          <IoLogoGooglePlaystore />
          Google Play
        </button>
        <button className="px-4 py-2 flex justify-center items-center bg-blue-400 cursor-pointer rounded-md text-white">
          <FaAppStore />
          App Store
        </button>
      </div>

      <img className="w-auto mx-auto mt-5 md:mt-8" src={heroImg} alt="" />
    </div>
  );
};

export default Hero;
