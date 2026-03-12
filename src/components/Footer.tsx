import React from "react";
import Particles from "./Robobg";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Loop from "./scrolllogo/Loop";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-6 lg:px-20 pt- pb-6 relative overflow-hidden">
      <hr className="border-gray-700 pb-6"/>
      {/* Top Section */}
      <div className="grid lg:grid-cols-3 gap-12">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-semibold leading-snug">
            Begin Your Dream Project <br /> with Us Today
          </h2>

          <div className="flex gap-4 mt-6">
         <a href="#" className="" > <FaInstagram size={22} className=" text-white  hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-300" /> </a>
            <a href="#" className=" hover:bg-blue-400 rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-300">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className=" hover:bg-blue-600 rounded-md w-6 h-6 flex items-center justify-center transition-colors duration-300">
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">Services</li>
              <li className="hover:text-white transition">Works</li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-0">
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">About us</li>
              <li className="hover:text-white transition">Contact us</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-medium ">Contact Us</h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1" />
              <p>
                Slam edu tech, Muppathadam junction, opposite surya
                opticals Edayar, Aluva, Kochi, Kerala 683110
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <FiMail />
              <p>slamedutech@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Big SLAMS Text */}
<div className="relative mt-2 mb-4">

  {/* Outline Text */}
  {/* <h1
    className="
      flex items-center justify-center
      font-bold tracking-widest
      text-transparent stroke-text
      select-none relative z-20
      leading-none
      text-[clamp(60px,15vw,420px)]
    "
  >
    SLAMS
  </h1> */}

  {/* Animated Layer Clipped To Text */}
  {/* <div
    className="
      absolute inset-0
      flex items-center justify-center
      pointer-events-none
      z-10
    "
  >
    <div
      className="
        relative
        font-bold tracking-widest
        leading-none
        text-[clamp(60px,15vw,420px)]
        text-transparent
        bg-clip-text
      "
    >
     

      SLAMS
    </div>
  </div> */}
  <div className="p-4">
<Loop/>
</div>
</div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800  pt-4 flex flex-col lg:flex-row justify-between text-sm text-gray-500">
        <p>© 2026 slam. All rights reserved</p>

        <div className="flex gap-6 mt-3 lg:mt-0">
          <span className="hover:text-white transition">Privacy policy</span>
          <span className="hover:text-white transition">Terms & condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;