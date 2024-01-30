import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:mt-[12rem] lg:border lg:bg-gradient-to-r from-[#00A3BA] to-blue-500 lg:pr-[2rem] lg:pl-[2rem] lg:pt-[2rem] lg:pb-[1rem] lg:text-center lg:font-[0.9rem] md:mt-[63rem] md:border md:bg-[#4db5ff] md:pr-[2rem] md:pl-[2rem] md:pt-[2rem] md:pb-[1rem] md:text-center md:font-[0.9rem] sm:mt-[70rem] sm:border sm:bg-[#4db5ff] sm:pr-[2rem] sm:pl-[2rem] sm:pt-[2rem] lg:pb-[1rem] sm:text-center sm:font-[0.9rem]">
      <a href="#" className="lg:font-bold md:font-bold sm:font-bold lg:text-4xl lg:text-[#1f1f38] sm:text-3xl">
        TIMELINE
      </a>

      <ul className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:ml-[0rem] lg:mr-auto lg:mt-[1rem] lg:mb-[1rem] md:flex-none md:flex-wrap md:justify-center md:gap-4 md:ml-[0rem] md:mr-auto md:mt-[1rem] md:mb-[1rem] sm:flex-none sm:ml-[0rem] sm:mr-auto sm:mt-[1rem] sm:mb-[1rem]">
        <li className="lg:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
          <a href="#" className="lg:text-[#1f1f38]">Home</a>
        </li>
        <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
          <a href="#about" className="lg:text-[#1f1f38]">About</a>
        </li>
        <li className="sm:mt-[0.5rem] sm:text-[1.2rem lg:text-[1rem]]">
          <a href="#team" className="lg:text-[#1f1f38]">Team</a>
        </li>
        <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
          <a href="#services" className="lg:text-[#1f1f38]">Services</a>
        </li>
        <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
          <a href="#contact" className="lg:text-[#1f1f38]">Contact</a>
        </li>
      </ul>
      
      <div className="lg:flex lg:justify-center lg:gap-3 lg:mb-[2rem] sm:flex sm:justify-center sm:gap-3 sm:mb-[2rem] md:flex md:justify-center md:gap-3 md:mb-[2rem]">
        <a
          className="lg:text-[#fff] lg:bg-[#1f1f38] lg:p-[0.8rem] lg:rounded-[0.7rem] lg:flex lg:hover:text-[#00A3BA] md:text-[#fff] md:bg-[#1f1f38] md:p-[0.8rem] md:rounded-[0.7rem] md:flex md:hover:text-[#00A3BA] sm:text-[#fff] sm:bg-[#1f1f38] sm:p-[1rem] sm:rounded-[0.7rem] sm:flex sm:hover:text-[#00A3BA]"
          href="_blank"
        >
          <FaSnapchat />
        </a>
        <a
          className="lg:text-[#fff] lg:bg-[#1f1f38] lg:p-[0.8rem] lg:rounded-[0.7rem] lg:flex lg:hover:text-[#00A3BA] md:text-[#fff] md:bg-[#1f1f38] md:p-[0.8rem] md:rounded-[0.7rem] md:flex md:hover:text-[#00A3BA] sm:text-[#fff] sm:bg-[#1f1f38] sm:p-[1rem] sm:rounded-[0.7rem] sm:flex sm:hover:text-[#00A3BA]"
          href="https://www.instagram.com/simplevhick_"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          className="lg:text-[#fff] lg:bg-[#1f1f38] lg:p-[0.8rem] lg:rounded-[0.7rem] lg:flex lg:hover:text-[#00A3BA] md:text-[#fff] md:bg-[#1f1f38] md:p-[0.8rem] md:rounded-[0.7rem] md:flex md:hover:text-[#00A3BA] sm:text-[#fff] sm:bg-[#1f1f38] sm:p-[1rem] sm:rounded-[0.7rem] sm:flex sm:hover:text-[#00A3BA]"
          href="https://twitter.com/simplevhick"
          target="_blank"
        > 
          <FaTwitter />
        </a>
      </div>

      <div className="text-[1.2rem]">
        <small>&copy; <span className="font-bold">Timeline.</span> All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

 