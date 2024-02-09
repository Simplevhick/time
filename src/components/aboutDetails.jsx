import { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "./logo.png";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const AboutDetails = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    const content = (
        <>
          <div className="lg:hidden block absolute top-14 w-full left-0 right-0 bg-slate-900 transition z-20 ">
            <ul className="text-center text-xl p-20">
              <Link spy={true} smooth={true} to="/">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Team
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </>
      );
      return (
        <div>
        <section>
          <div className="z-30 flex justify-between px-10 py-3 text-white h-10vh items-center bg-[#010127]">
            <div className="flex items-center flex-1">
              <span className="text-2xl font-bold">
                <img
                  className="w-[6rem] lg:ml-[10px] hover:w-[6.5rem] transition ease-out duration-900"
                  src={Img1}
                  alt="pix"
                />
              </span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-7 text-[15.5px] font-semibold">
                  <Link to="/">
                    <li className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer">
                      Home
                    </li>
                  </Link>

                  <Link to="/">
                  <li className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer">
                    <a href="#about">About </a>
                  </li>
                  </Link>
                  <Link to="/">
                  <li
                    className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer"
                    href="#team"
                  >
                    <a href="#team">Team </a>
                  </li>
                  </Link>
                  <Link to="/">
                  <li
                    className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer"
                    href="#services"
                  >
                    <a href="#services">Services </a>
                  </li>
                  </Link>
                  <Link to="/">
                  <li className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer">
                    <a href="#contact">Contact </a>
                  </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
    
            <button className="block md:hidden transition" onClick={handleClick}>
              {click ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
          </section>
      
    <div>
      <div>
        <div className="lg:ml-[17.5em] lg:text-[30px] lg:mt-[50px] md:ml-[16em] md:text-[20px] md:mt-[50px] sm:ml-[7em] sm:text-[20px] sm:mt-[50px]">
          <h1 className="font-bold">Who Are We ?</h1>
        </div>
        <div className="">
          <p className="lg:w-[49rem] lg:text-[17px] lg:mt-[10px] lg:ml-[15rem] sm:w-[24rem] sm:text-[13px] sm:mt-[10px] sm:ml-[1rem] md:w-[49rem] md:text-[15px] md:mt-[10px] md:ml-[2.7rem] ">
            Timeline Entertainment is a leading provider of innovative and
            engaging entertainment experiences.
          </p>
          <p className="lg:w-[49rem] lg:text-[17px] lg:mt-[2px] lg:ml-[18rem] sm:w-[24rem] sm:text-[13px] sm:mt-[2px] sm:ml-[1rem] md:w-[49rem] md:text-[15px] md:mt-[2px] md:ml-[4.7rem]">
            {" "}
            We are commited to pushing the boundaries of whats possible in
            entertainment and our work,{" "}
          </p>
          <p className="lg:w-[49rem] lg:text-[17px lg:mt-[2px] lg:ml-[23rem] sm:w-[20rem] sm:text-[13px] sm:mt-[2px] sm:ml-[1rem] md:w-[49rem] md:text-[15px] md:mt-[4px] md:ml-[9.5rem]">
            {" "}
            has been recognized with numerous awards and accolades.{" "}
          </p>
        </div>
      </div>

      <div>
        <div className="lg:ml-[17.5em] lg:text-[30px] lg:mt-[50px] sm:ml-[7em] sm:text-[20px] sm:mt-[50px] md:ml-[16em] md:text-[20px] md:mt-[50px]">
          <h1 className="font-bold">What We Do ?</h1>
        </div>
        <div>
          <div className="lg:flex lg:max-w-5xl lg:ml-[5rem] lg:mt-[2rem] lg:gap-8 group sm:max-w-5xl sm:ml-[4.5rem] sm:mt-[2rem] sm:gap-8 sm:group md:max-w-5xl md:ml-[5rem] md:grid md:grid-cols-2 md:mt-[4rem] md:gap-8 group">
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 sm:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[14px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[36px] md:uppercase md:mt-[10px] md:text-xl md:font-bold md:ml-[34px]">
                Audio/Visual
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[18px] md:uppercase md:text-xl md:font-bold md:ml-[38px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[38px]">
                Production.
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We deliver state of the arts audio-visual production from short
                films, music videos, skits and television shows, e.t.c.
                <p> Our work has been featured in a variety of media, including television, and online platforms.We are passionate</p>
              </p>            
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 sm:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[49px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[60px] md:uppercase md:text-xl md:mt-[10px] md:font-bold md:ml-[60px]">
                Record
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[53px] md:uppercase md:text-xl md:font-bold md:ml-[61px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[61.5px]">
                Labels
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                Timeline Records is a leading independent record label, dedicated to promoting innovative and diverse music.
                The label is also committed to nurturing talent and supporting its artist, providing them with the resources and opportunities they need to succeed.
              </p>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 lg:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[34px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[43px] md:uppercase md:text-xl md:mt-[10px] md:font-bold md:ml-[40px]">
                Off-Stage
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[22px] md:uppercase md:text-xl md:font-bold md:ml-[28px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[38px]">
                Commentary
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We are sure of giving you the most granded voice over solutions for your business.
                We are able to provide commentary on wide range of topics. We provide a unique perspective on the events we cover. Our goal is to provide the most up-to-date and accurate information.
              </p>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 lg:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[54px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[63px] md:uppercase md:text-xl md:mt-[10px]  md:font-bold md:ml-[54px]">
                Media IT
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[41px] md:uppercase md:text-xl md:font-bold md:ml-[45px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[48px]">
                Solutions
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We offer a full-service media solutions provider, specializing in the creation and delievery of engaging and immersive content for a variety of platforms. We work with businessess of all sizes
                We also design and develop high end websites for clients and
                comfort demands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="lg:mt-[12rem] lg:border lg:bg-gradient-to-r from-[#00A3BA] to-blue-500 lg:pr-[2rem] lg:pl-[2rem] lg:pt-[2rem] lg:pb-[1rem] lg:text-center lg:font-[0.9rem] md:mt-[10rem] md:border md:bg-[#4db5ff] md:pr-[2rem] md:pl-[2rem] md:pt-[2rem] md:pb-[1rem] md:text-center md:font-[0.9rem] sm:mt-[13rem] sm:border sm:bg-[#4db5ff] sm:pr-[2rem] sm:pl-[2rem] sm:pt-[2rem] lg:pb-[1rem] sm:text-center sm:font-[0.9rem]">
        <a
          href="#"
          className="lg:font-bold md:font-bold sm:font-bold lg:text-4xl lg:text-[#1f1f38] sm:text-3xl"
        >
          TIMELINE
        </a>

        <ul className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:ml-[0rem] lg:mr-auto lg:mt-[1rem] lg:mb-[0.5rem] md:flex-none md:flex-wrap md:justify-center md:gap-4 md:ml-[0rem] md:mr-auto md:mt-[1rem] md:mb-[1rem] sm:flex-none sm:ml-[0rem] sm:mr-auto sm:mt-[1rem] sm:mb-[1rem]">
          <Link to="/">
          <li className="lg:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#" className="lg:text-[#1f1f38]">
              Home
            </a>
          </li>
          </Link>

          <Link to="/">
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#about" className="lg:text-[#1f1f38]">
              About
            </a>
          </li>
          </Link>

          <Link to="/">
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem lg:text-[1rem]]">
            <a href="#team" className="lg:text-[#1f1f38]">
              Team
            </a>
          </li>
          </Link>
          <Link to="/">
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#services" className="lg:text-[#1f1f38]">
              Services
            </a>
          </li>
          </Link>

          <Link to="/">
              <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#contact" className="lg:text-[#1f1f38]">
              Contact
            </a>
          </li>
          </Link>

        </ul>

        <div className="lg:flex lg:justify-center lg:gap-3 lg:mb-[0.5rem] sm:flex sm:justify-center sm:gap-3 sm:mb-[2rem] md:flex md:justify-center md:gap-3 md:mb-[2rem]">
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
          <small>
            &copy; <span className="font-bold">Timeline.</span> All rights
            reserved.
          </small>
        </div>
      </footer>
    </div>
    </div>
      );
};

export default AboutDetails;
