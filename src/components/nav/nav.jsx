import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Img from "./new.jpeg";
import Img1 from "./logo.png";
import Img2 from "./hmm2.jpg";
import Img3 from "./pix.jpeg";
import Img4 from "./pass 3.jpeg";
import Img5 from "./pass 7.jpeg";
import Img6 from "./bg.PNG";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineNextPlan } from "react-icons/md";
import { LiaFileAudio } from "react-icons/lia";
import { PiVinylRecordFill } from "react-icons/pi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { SiMediamarkt } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";


const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [message, setMessage] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setMail("");
    setMessage("");

    emailjs.sendForm('service_ydaxe79', 'template_ie3cd28', form.current, 'kWG-FqtA7uTl12qe2')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

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
    
    <nav>
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
      {/* lg:w-screen lg:h-screen lg:bg-cover lg:bg-no-repeat */}
      <div
         className="lg:w-full lg:bg-cover lg:bg-no-repeat lg:h-[46rem] md:w-full md:bg-contain md:bg-no-repeat md:h-[46rem] sm:w-full sm:bg-contain sm:bg-no-repeat sm:h-[43rem]"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="lg:h-[25rem] lg:w-[31rem] lg:bg-black lg:bg-opacity-20 lg:border-none lg:border-2 lg:absolute lg:top-[25rem] lg:left-[2rem] sm:h-[12rem] sm:w-[16.5rem] sm:bg-black sm:bg-opacity-15 sm-border-none sm:absolute sm:top-[16.8rem] sm:left-[1rem] md:h-[18.7rem] md:w-[26.7rem] md:bg-black md:bg-opacity-20 md:border-none md:absolute md:top-[17rem] md:left-[1.6rem]">
          <div>
            <h1 className="lg:text-6xl lg:ml-[21px] lg:mt-[25px] Poppins lg:text-[#00A3BA] sm:text-[28px] sm:mt-[5px] sm:ml-[14px] sm:leading-[25px] sm:text-[#00A3BA] md:text-[2.8rem] md:leading-[43px] md:ml-[21px] md:mt-[19px] md:text-[#00A3BA]">
              We redefine entertainment.
            </h1>
            <p className="lg:mt-[1.3rem] lg:text-2xl lg:ml-[25px] lg:w-[29rem] lg:text-white sm:mt-[7px] sm:text-sm sm:ml-[14px] sm:w-[15.6rem] sm:leading-[18px] sm:text-white md:mt-[10px] md:leading-[30px] md:text-[1.3rem] md:ml-[19px] md:w-[25rem] md:text-white">
              Timeline Entertainment Limited was established by a team of
              professionals in music, audio-visuals, software managers, and
              media strategists in 2007.
            </p>
            <Link to="/aboutDetails">
              <input
                type="button"
                value="READ MORE"
                className="lg:mt-[30px] lg:ml-[28px] lg:bg-[#00A3BA] lg:text-[#fff] lg:border-none lg:pl-[12px] lg:pt-[12px] lg:pb-[12px] lg:pr-[12px] lg:text-[16px] cursor-pointer lg:rounded-[7px] lg:hover:bg-[#00A3BA] lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[16px] sm:mt-[8.5px] sm:text-[#fff] sm:bg-[#00A3BA] sm:border-none sm:pl-[7px] sm:pt-[7px] sm:pb-[7px] sm:pr-[7px] sm:text-[12px] sm:rounded-[3px] sm:hover:bg-[#00A3BA] sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:mt-[12px] md:text-[#fff] lg:ml-[30px] md:bg-[#00A3BA] md:border-2 md:pl-[10px] md:pt-[10px] md:pb-[10px] md:pr-[10px] md:text-[18px] md:rounded-[7px] md:hover:bg-[#00A3BA] md:hover:text-[#000000] md:transition md:ease-out md:duration-500"
              />
            </Link>
          </div>
          <section id="about" className="lg:relative sm:relative z-10 ">
            <div className="lg:h-[30rem] z-30 lg:ml-[-45px] relative lg:w-[26rem] lg:mt-[14rem] sm:h-[10rem] z-30 relative sm:w-[100%] sm:ml-[-2.2rem] sm:mt-[8rem] md:h-[80rem] z-30 relative md:w-[18rem] md:ml-[-2.5rem] md:mt-[11rem]">
              <div className="lg:h-[30rem] z-30 relative lg:w-[26rem] lg:ml-[17.5rem] lg:mt-[6.2rem] sm:h-[10rem] z-30 relative sm:w-[16rem] sm:ml-[11rem] sm:mt-[4.5rem] md:h-[80rem] z-30 relative md:w-[18rem] md:ml-[15.5rem] md:mt-[8rem]">
                <img
                  src={Img2}
                  className=" lg:h-[33rem] lg:w-[35rem] lg:rounded-[0.5rem] sm:h-[21rem] sm:w-[30rem] sm:rounded-[0.5rem] md:h-[23rem] md:w-[30rem] md:rounded-[0.5rem]"
                  alt="pix"
                />
              </div>
              <div className="lg:h-[31.5rem] lg:text-[#fff] lg:z-20 lg:w-[33rem] lg:bg-[#483C32] lg:absolute lg:left-[38.5rem] lg:top-[5rem] sm:h-[38.8rem] sm:z-20 sm:w-[22rem] sm:text-[#fff] sm:bg-[#483C32] sm:absolute sm:left-[8rem] sm:top-[33rem] md:h-[38.8rem] md:text-[#fff] md:z-20 md:w-[22rem] md:bg-[#483C32] md:absolute md:left-[13.2rem] md:top-[37.5rem]">
                <div className="Poppins ptSerif lg:ml-[11rem] text-[#00A3BA] lg:mt-[3rem] lg:text-5xl sm:ml-[7rem] sm:mt-[1.5rem] sm:text-3xl md:ml-[7rem] md:mt-[1.5rem] md:text-3xl">
                  About Us
                </div>
                <p className="lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[14px] ptSerif sm:text-[17px] md:ml-[2.5rem] md:w-[16rem] md:m-[14px] ptSerif md:text-[17px]">
                  Hello, and welcome to{" "}
                  <span className="lg:bg-gradient-to-r from-[#00A3BA] to-blue-500">
                    TIMELINE ENTERTAINMENT!
                  </span>{" "}
                  We,re a small, passionate team of creatives who dedicated to
                  bringing joy and excitement to people's lives through our
                  work.
                </p>
                <p className="lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[20px] ptSerif sm:text-[16px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[16px]">
                  Our Company was founded in 2007. We started out small, but our
                  passion and hard work has helped us grow into the company we
                  are today. We're proud to say that we've been able to bring
                  smiles to the faces of people all over the world with our
                  unique brand of entertainment.
                </p>
                <p className="lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[20px] ptSerif sm:text-[14px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[14px]">
                  {" "}
                  Our team is made up of individuals with a wide range of
                  backgrounds and talents.
                </p>
                <Link to="/aboutDetails">
                  <input
                    type="button"
                    value="LEARN MORE"
                    className=" lg:ml-[7rem] lg:bg-[#00A3BA] lg:border-none lg:pl-[11px] lg:pt-[11px] lg:pb-[11px] lg:pr-[11px] lg:text-[14px] cursor-pointer lg:rounded-[7px] lg:hover:bg-cyan-500 lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[7rem] sm:bg-[#00A3BA] sm:border-none sm:pl-[11px] sm:pt-[11px] sm:pb-[11px] sm:pr-[11px] sm:text-[14px] cursor-pointer sm:rounded-[7px] sm:hover:bg-cyan-500 sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:ml-[7rem] md:bg-[#00A3BA] md:border-none md:pl-[9px] md:pt-[9px] md:pb-[9px] md:pr-[9px] md:text-[14px] cursor-pointer md:rounded-[7px] md:hover:bg-cyan-500 md:hover:text-[#000000] md:transition md:ease-out md:duration-500"
                  />
                </Link>
              </div>
              <div>
                <div className="lg:ml-[0.5rem] lg:text-[#000907] lg:absolute lg:top-[0.5rem] lg:left-[64rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[2rem] sm:absolute sm:top-[30rem] sm:left-[24rem] sm:h-[110px] sm:w-[110px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:lg:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:ml-[2rem] md:absolute md:top-[34rem] md:left-[29rem] md:h-[140px] md:w-[140px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500"></div>
              </div>
              <div>
                <div className="lg:h-[21rem] lg:w-[16rem] lg:border-[0.7rem] lg:absolute lg:top-[16.3rem] lg:left-[7.5rem] lg:z-30 sm:h-[13rem] sm:w-[11rem] sm:border-[0.7rem] sm:absolute sm:top-[14.5rem] sm:left-[8.5rem] sm:z-30 md:h-[16rem] md:w-[11rem] md:border-[0.7rem] md:absolute md:top-[14.5rem] md:left-[13rem] md:z-30">
                  <img
                    src={Img3}
                    alt="pix"
                    className="lg:h-[19.7rem] lg:w-[15rem] sm:h-[11.7rem] sm:w-[11rem] md:h-[14.6rem] md:w-[11rem]"
                  />
                </div>
              </div>
              <div>
                <div className="lg:absolute lg:top-[31rem] lg:left-[2rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[1rem] sm:absolute sm:top-[23rem] sm:left-[5rem] sm:h-[110px] sm:w-[110px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:absolute md:top-[26rem] md:left-[8rem] md:h-[140px] md:w-[140px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500"></div>
              </div>
            </div>
          </section>

          <section id="team">
            <div className="sm:mt-[70rem] sm:w-[37.5rem] sm:h-[193rem] lg:h-[80rem] lg:w-[80rem] lg:ml-[-4rem] lg:mt-[22rem] md:h-[78rem] md:ml-[-2rem] md:w-[100%] md:mt-[7rem] lg:border-2 lg: bg-[#29A59D] sm:ml-[-1rem] sm:border-2 sm:bg-[#29A59D] md:border-2 md:bg-[#29A59D]">
              <div className="Poppins ptSerif lg:text-5xl lg:text-[#fff] lg:mt-[6rem] lg:ml-[25rem] md:text-5xl md:text-[#fff] md:mt-[4rem] md:ml-[11rem] sm:text-5xl sm:text-[#fff] sm:mt-[4rem] sm:ml-[5rem]">
                Our Amazing Team
              </div>

              <div className="lg:grid lg:grid-cols-3 lg:border lg:relative lg:h-[60rem] lg:mt-[5rem] lg:w-[70rem] lg:ml-[5rem] lg:bg-white md:grid md:grid-cols-2 md:border md:relative md:mt-[3rem] md:h-[64rem] md:w-[38rem] md:ml-[5.3rem] md:bg-white sm:grid sm:grid-cols-1 sm:border sm:relative sm:mt-[3rem] sm:w-[26rem] sm:h-[175rem] sm:ml-[5.5rem] sm:bg-white ">
                <div>
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[70px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] sm:w-[16rem] sm:h-[20rem] sm:ml-[80px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[6.4rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[14.5rem] md:left-[5.1rem] md:bg-white sm:absolute sm:w-[12rem] sm:p-[10px] sm:top-[19rem] sm:left-[7rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[13px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[19px] sm:ml-[25px] sm:font-bold tracking-wide">
                      MR MICHEAL
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] sm:text-[16px] sm:ml-[3px] sm:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[9.4rem] sm:flex sm:mt-[15px] sm:ml-[9.7rem] md:flex md:mt-[30px] md:ml-[7rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[55px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] sm:w-[16rem] sm:h-[20rem] sm:ml-[80px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[29rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[14.3rem] md:left-[22.5rem] md:bg-white sm:absolute sm:w-[12rem] sm:p-[10px] sm:top-[48rem] sm:left-[7rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[21px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[19px] sm:ml-[31px] sm:font-bold tracking-wide">
                      CHINONSO
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] sm:text-[16px] sm:ml-[3px] sm:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.7rem] sm:flex sm:mt-[26px] sm:ml-[10rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[50px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] sm:w-[16rem] sm:h-[20rem] sm:ml-[80px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[51.6rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[35.8rem] md:left-[5.1rem] md:bg-white sm:absolute sm:w-[12rem] sm:p-[10px] sm:top-[78rem] sm:left-[7rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[22px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[19px] sm:ml-[28px] sm:font-bold tracking-wide">
                      YHEMOLEE
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[16px] sm:ml-[3px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8rem] sm:flex sm:mt-[53px] sm:ml-[10.1rem] md:flex md:mt-[30px] md:ml-[6.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[73px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] sm:w-[16rem] sm:h-[20rem] sm:ml-[80px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[6.7rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[35.8rem] md:left-[22.4rem] md:bg-white sm:absolute sm:w-[12rem] sm:p-[10px] sm:top-[107rem] sm:left-[7rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[19px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[19px] sm:ml-[21px] sm:font-bold tracking-wide">
                      MR CAPTAIN
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[16px] sm:ml-[3px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[10rem] sm:flex sm:mt-[30px] sm:ml-[10rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[56px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] sm:w-[16rem] sm:h-[20rem] sm:ml-[80px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[28.9rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[57rem] md:left-[5rem] md:bg-white sm:absolute sm:w-[12rem] sm:p-[10px] sm:top-[136rem] sm:left-[7rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[22px] lg:font-bold md:text-[19px] md:ml-[11px] md:font-bold sm:text-[19px] sm:ml-[30px] sm:font-bold tracking-wide">
                      MR DAVIDO
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[16px] sm:ml-[3px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.6rem] sm:flex sm:mt-[30px] sm:ml-[10rem] md:flex md:mt-[30px] md:ml-[6.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[55.7px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] sm:w-[16rem] sm:h-[20rem] sm:ml-[80px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[52.3rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[57rem] md:left-[22.5rem] md:bg-white sm:absolute sm:w-[12rem] sm:p-[10px] sm:top-[165rem] sm:left-[7rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[29px] lg:font-bold md:text-[19px] md:ml-[18px] md:font-bold sm:text-[22px] sm:ml-[33px] sm:font-bold tracking-wide">
                      MR AJAYI
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[16px] sm:ml-[5px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.6rem] sm:flex sm:mt-[40px] sm:ml-[10rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section id="services" className="">
        <div className="lg:mt-[155rem] sm:mt-[304rem] md:mt-[185rem]">
          <div className="Poppins ptSerif lg:ml-[32rem] lg:text-4xl sm:ml-[13rem] sm:text-4xl md:ml-[17rem] md:text-4xl">
            <h1>What We Do</h1>
          </div>
          <div>
            <p className="lg:ml-[16rem] lg:mt-[10px] lg:text-[20px] sm:ml-[1.7rem] sm:mt-[10px] sm:text-[14px] md:ml-[2rem] md:mt-[10px] md:text-[18px]">
              Timeline Entertainment Company specializes in taking entertainment
              to the next level.
            </p>
            <p className="lg:ml-[26rem] lg:text-[20px] sm:ml-[10rem] sm:mt-[3px] sm:text-[14px] md:ml-[12rem] md:text-[18px]">
              We offer swift and beautiful responses to us.
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:ml-[31rem] lg:mt-[3rem] lg:text-[20px] lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-cyan-500 sm:flex sm:items-center sm:ml-[11rem] sm:mt-[3rem] sm:text-[20px] sm:transition sm:ease-in-and-out sm:duration-500 sm:font-bold sm:hover:text-cyan-500 md:flex md:items-center md:ml-[16rem] md:mt-[3rem] md:text-[20px] md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-cyan-500">
            <p className="">More About Our Services</p>
            <p className="">
              {" "}
              <MdOutlineNextPlan />{" "}
            </p>
          </div>
          <div className="lg:flex lg:max-w-5xl lg:ml-[5rem] lg:mt-[4rem] lg:gap-8 group sm:max-w-5xl sm:ml-[10rem] sm:mt-[4rem] sm:gap-8 sm:group md:max-w-5xl md:ml-[5rem] md:grid md:grid-cols-2 md:mt-[4rem] md:gap-8 group">
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 sm:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <LiaFileAudio className="lg:h-20 lg:mx-auto lg:w-[9rem] sm:h-[7rem] sm:ml-[3.7rem] sm:w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[14px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[36px] md:uppercase md:mt-[10px] md:text-xl md:font-bold md:ml-[34px]">
                Audio/Visual
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[18px] md:uppercase md:text-xl md:font-bold md:ml-[38px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[38px]">
                Production.
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We deliver state of the arts audio-visual production from short
                films, music videos.
              </p>
              <Link to="/aboutDetails">
                <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:bg-[#00A3BA] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] sm:bg-[#00A3BA] sm:text-[#fff] sm:py-2 sm:px-6 sm:cursor-pointer sm:rounded-full sm:transition sm:ease-in-and-out sm:duration-500 sm:font-bold sm:hover:text-[#000000] sm:ml-[40px]">
                  More Info
                </button>
              </Link>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 sm:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <PiVinylRecordFill className="lg:h-20 lg:mx-auto lg:w-[9rem] sm:h-[7rem] sm:ml-[3.7rem] sm:w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[49px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[60px] md:uppercase md:text-xl md:mt-[10px] md:font-bold md:ml-[60px]">
                Record
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[53px] md:uppercase md:text-xl md:font-bold md:ml-[61px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[61.5px]">
                Labels
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We help our client make a stand via our international relations
                network.
              </p>
              <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:bg-[#00A3BA] sm:text-[#fff] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] sm:bg-[#00A3BA] sm:text-[#fff] sm:py-2 sm:px-6 sm:cursor-pointer sm:rounded-full sm:transition sm:ease-in-and-out sm:duration-500 sm:font-bold sm:hover:text-[#000000] sm:ml-[40px]">
                More Info
              </button>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 lg:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <MdOutlineRecordVoiceOver className="lg:h-20 lg:mx-auto lg:w-[9rem] sm:h-[7rem] sm:ml-[3.7rem] sm:w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[34px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[43px] md:uppercase md:text-xl md:mt-[10px] md:font-bold md:ml-[40px]">
                Off-Stage
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[22px] md:uppercase md:text-xl md:font-bold md:ml-[28px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[38px]">
                Commentary
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We are sure of giving you the most granded voice over solutions
                for your business.
              </p>
              <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:bg-[#00A3BA] sm:text-[#fff] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] sm:bg-[#00A3BA] sm:text-[#fff] sm:py-2 sm:px-6 sm:cursor-pointer sm:rounded-full sm:transition sm:ease-in-and-out sm:duration-500 sm:font-bold sm:hover:text-[#000000] sm:ml-[40px]">
                More Info
              </button>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl sm:bg-[#abd9d9] sm:duration-500 sm:group-hover:blur-sm sm:hover:!blur-none sm:group-hover:scale-[0.85] sm:hover:!scale-100 sm:mt-[1rem] sm:w-[17rem] sm:cursor-pointer sm:p-8 lg:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <SiMediamarkt className="lg:h-20 lg:mx-auto lg:w-[9rem] sm:h-[7rem] sm:ml-[3.7rem] sm:w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[54px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[63px] md:uppercase md:text-xl md:mt-[10px]  md:font-bold md:ml-[54px]">
                Media IT
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[41px] md:uppercase md:text-xl md:font-bold md:ml-[45px] sm:uppercase sm:text-[17px] sm:font-bold sm:ml-[48px]">
                Solutions
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 sm:text-sm sm:leading-7 sm:my-3 sm:w-[12rem] sm:font-light sm:opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We also design and develop high end websites for clients and
                comfort demands.
              </p>
              <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:font-bold md:bg-[#00A3BA] sm:text-[#fff] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] sm:bg-[#00A3BA] sm:text-[#fff] sm:py-2 sm:px-6 sm:cursor-pointer sm:rounded-full sm:transition sm:ease-in-and-out sm:duration-500 sm:font-bold sm:hover:text-[#000000] sm:ml-[40px]">
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        id="contact"
        className="lg:text-black lg:mt-[16rem] lg:bg-auto lg:bg-cover lg:bg-contain lg:bg-no-repeat md:bg-auto md:bg-cover md:bg-contain md:bg-no-repeat md:h-[28rem] md:mt-[16rem] md:w-[100%] sm:bg-auto sm:bg-cover sm:bg-contain sm:bg-no-repeat sm:h-[20rem] sm:w-[100%] sm:mt-[12rem] xl:bg-auto xl:bg-cover xl:bg-contain xl:bg-no-repeat xl:h-[60rem] xl:w-[80rem] z-10 "
        style={{
          backgroundImage: `url(${Img6})`,
        }}
      >
        <div className="lg:flex lg:ml-[9rem] sm:flex">
          <div className="lg:border lg:w-[26rem] lg:mt-[33rem] lg:h-[30rem] lg:bg-[#ffffff] md:border-none md:w-[34rem] md:mt-[50rem] md:h-[34rem] sm:border-none sm:w-[29rem] sm:mt-[42rem] sm:h-[30rem] sm:ml-[4rem] sm:bg-[#ffffff]">
            <div className="lg:ml-[2.6rem] lg:mt-[4rem] md:ml-[3.2rem] md:mt-[4rem] sm:ml-[2.6rem] sm:mt-[4rem]">
              <div className="lg:flex lg:items-center md:flex md:items-center">
                <IoCallOutline className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.5rem] sm:h-[2.5rem] sm:text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
                <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] sm:font-bold sm:mt-[10px] sm:text-[25px] sm:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">
                  CALL US
                </p>
              </div>
              <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px] sm:text-[23px] sm:mt-[18px] sm:ml-[10px]">
                1 (234) 567-891, 1 (234) 987-654
              </p>
            </div>
            <div className="lg:ml-[2.6rem] lg:mt-[3rem] sm:ml-[2.6rem] sm:mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
              <div className="lg:flex md:flex ">
                <MdLocationOn className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.5rem] sm:h-[2.5rem] sm:text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
                <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] sm:font-bold sm:mt-[10px] sm:text-[25px] sm:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">
                  LOCATION
                </p>
              </div>
              <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] sm:text-[23px] sm:mt-[18px] sm:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">
                3, Ogunshina Street, Anthony, Lagos state.
              </p>
              <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] sm:text-[23px] sm:mt-[5px] sm:ml-[10px] md:text-[22px] md:mt-[5px] md:ml-[10px]">
                92103-9000
              </p>
            </div>
            <div className="lg:ml-[2.6rem] lg:mt-[3rem] sm:ml-[2.6rem] sm:mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
              <div className="lg:flex md:flex">
                <LuClock3 className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.5rem] sm:h-[2.5rem] sm:text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
                <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px] sm:font-bold sm:mt-[10px] sm:text-[23px] sm:ml-[10px]">
                  BUSINESS HOURS
                </p>
              </div>
              <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] sm:text-[23px] sm:mt-[18px] sm:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">
                Mon-Fri …… 9 am-5 pm, Sat, Sun ....…
              </p>
              <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] sm:text-[23px] sm:mt-[5px] sm:ml-[10px] md:text-[24px] md:mt-[5px] md:ml-[10px]">
                Closed
              </p>
            </div>
          </div>

          <div>
            <div className="lg:border lg:ml-[0.2px] lg:w-[29rem] lg:mt-[33rem] lg:bg-[#e5e5e5] lg:h-[30rem] sm:border sm:w-[29rem] sm:mt-[12rem] sm:ml-[-28.8rem] sm:bg-[#e5e5e5] sm:h-[30rem] md:border md:w-[34rem] md:ml-[-31rem] md:mt-[15rem] md:bg-[#e5e5e5] md:h-[33rem]">
              <div>
                <p className="lg:font-bold lg:text-[28px] lg:p-[31px] lg:ml-[7rem] sm:font-bold sm:text-[32px] sm:p-[31px] sm:ml-[6rem] md:font-bold md:text-[42px] md:p-[31px] md:ml-[7rem]">
                  CONTACT US
                </p>
              </div>
              <div className="lg:ml-[50px] md:ml-[50px] sm:ml-[45px]">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" className="lg:w-[23rem] lg:p-[14px] lg:border text-sm sm:w-[23rem] sm:p-[14px] sm:border sm:text-sm md:w-[28rem] md:p-[14px] md:border md:text-sm" name="to_name" value={name} onChange={(e) => setName(e.target.value) }/>
                
                <input type="email" className="lg:mt-[26px] lg:w-[23rem] lg:p-[14px] lg:border lg:text-sm md:mt-[26px] md:w-[28rem] md:p-[14px] md:border md:text-sm sm:mt-[26px] sm:w-[23rem] sm:p-[14px] sm:border sm:text-sm" name="from_name" value={mail} onChange={(e) => setMail(e.target.value) }/>
                
                <textarea  name="message" className="lg:w-[23rem] lg:p-[29px] lg:border text-sm lg:mt-[26px] md:w-[28rem] md:p-[29px] md:border md:text-sm md:mt-[26px] sm:w-[23rem] sm:p-[29px] sm:border sm:text-sm sm:mt-[26px]" value={message} onChange={(e) => setMessage(e.target.value) }/>
                <input type="submit" value="SUBMIT" className='lg:mt-[20px] lg:w-[23rem] lg:font-bold lg:ml-[4px] lg:bg-[#00A3BA] lg:border-none lg:pl-[10px] lg:pt-[10px] lg:pb-[10px] lg:pr-[10px] lg:text-[16px] cursor-pointer lg:rounded-[27px] lg:hover:bg-[#00A3BA] lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[4px] sm:bg-[#00A3BA] sm:border-none sm:pl-[9.5rem] sm:mt-[20px] sm:text-[#fff] sm:pt-[10px] sm:pb-[10px] sm:pr-[9.5rem] sm:text-[16px] sm:rounded-[14px] sm:hover:bg-[#00A3BA] sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:mt-[25px] md:ml-[15px] md:bg-[#00A3BA] md:border-2 md:pl-[11rem] md:pt-[10px] md:pb-[10px] md:text-[#fff] md:pr-[11rem] md:text-[18px] md:rounded-[7px] md:hover:bg-[#00A3BA] md:hover:text-[#000000] md:transition md:ease-out md:duration-500'/>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="lg:mt-[12rem] lg:border lg:bg-[#00A3BA] lg:pr-[2rem] lg:pl-[2rem] lg:pt-[2rem] lg:pb-[1rem] lg:text-center lg:font-[0.9rem] md:mt-[63rem] md:border md:bg-[#00A3BA] md:pr-[2rem] md:pl-[2rem] md:pt-[2rem] md:pb-[1rem] md:text-center md:font-[0.9rem] sm:mt-[70rem] sm:border sm:bg-[#00A3BA] sm:pr-[2rem] sm:pl-[2rem] sm:pt-[2rem] lg:pb-[1rem] sm:text-center sm:font-[0.9rem]">
        <a
          href="#"
          className="lg:font-bold md:font-bold sm:font-bold lg:text-4xl lg:text-[#1f1f38] sm:text-3xl"
        >
          TIMELINE
        </a>

        <ul className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:ml-[0rem] lg:mr-auto lg:mt-[1rem] lg:mb-[1rem] md:flex-none md:flex-wrap md:justify-center md:gap-4 md:ml-[0rem] md:mr-auto md:mt-[1rem] md:mb-[1rem] sm:flex-none sm:ml-[0rem] sm:mr-auto sm:mt-[1rem] sm:mb-[1rem]">
          <li className="lg:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#" className="lg:text-[#1f1f38]">
              Home
            </a>
          </li>
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#about" className="lg:text-[#1f1f38]">
              About
            </a>
          </li>
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem lg:text-[1rem]]">
            <a href="#team" className="lg:text-[#1f1f38]">
              Team
            </a>
          </li>
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#services" className="lg:text-[#1f1f38]">
              Services
            </a>
          </li>
          <li className="sm:mt-[0.5rem] sm:text-[1.2rem] lg:text-[1rem]">
            <a href="#contact" className="lg:text-[#1f1f38]">
              Contact
            </a>
          </li>
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
    </nav>
  );
};

export default Nav;


// className="lg:text-black  lg:relative lg:bg-auto lg:bg-cover lg:bg-contain lg:bg-no-repeat lg:h-[40rem] lg:w-[100%] md:bg-auto md:bg-cover md:bg-contain md:w-[100%] md:bg-no-repeat md:h-[40rem] sm:bg-auto sm:bg-cover sm:mx-auto sm:bg-contain sm:bg-no-repeat sm:h-[23rem] sm:w-[100%] xl:bg-auto xl:bg-cover xl:bg-contain xl:bg-no-repeat xl:h-[60rem] xl:w-[80rem] z-10 "