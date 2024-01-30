import { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "./logo.png";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    const content = (
        <>
          <div className="lg:hidden block absolute top-14 w-full left-0 right-0 bg-slate-900 transition z-20 lg:fixed">
            <ul className="text-center text-xl p-20">
              <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Team
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </>
      );
      return (
        
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
                  <Link spy={true} smooth={true} to="Home">
                    <li className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <li className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer">
                    <a href="#about">About </a>
                  </li>
                  <li
                    className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer"
                    href="#team"
                  >
                    <a href="#team">Team </a>
                  </li>
                  <li
                    className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer"
                    href="#services"
                  >
                    <a href="#services">Services </a>
                  </li>
                  <li className="hover:text-[#00A3BA] transition border-b-2 border-slate-900 hover:border-[#00A3BA] cursor-pointer">
                    <a href="#contact">Contact </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
    
            <button className="block md:hidden transition" onClick={handleClick}>
              {click ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
          </section>
      
      )   
}

export default Header