import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "./nav.css"
import Img from "./new.jpeg";
import Img1 from "./logo.png";
import Img6 from "./bg.PNG";
import Img4 from "./pass 3.jpeg"
import Img5 from "./pass 7.jpeg"
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

    emailjs
      .sendForm(
        "service_ydaxe79",
        "template_ie3cd28",
        form.current,
        "kWG-FqtA7uTl12qe2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              <a href="#about">About </a>
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
      {/* lg:w-full lg:bg-cover lg:bg-no-repeat lg:h-[60rem] md:w-full md:bg-contain md:bg-no-repeat md:h-[46rem] w-full bg-contain bg-no-repeat h-[27rem] */}
      <div
        className="lg:w-full lg:bg-contain lg:bg-no-repeat lg:h-[60rem] w-full bg-contain bg-no-repeat h-[43rem]"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="body_p">
          <div>
            <h1>
              We redefine entertainment.
            </h1>
            <p>
              Timeline Entertainment Limited was established by a team of
              professionals in music, audio-visuals, software managers, and
              media strategists in 2007.
            </p>
            <Link to="/aboutDetails">
              <input
                type="button"
                value="READ MORE"
                className=""
              />
            </Link>
          </div>

          {/* <section id="about" className="z-10 lg:w-[75rem] lg:mt-[4rem] lg:p-[6rem] p-[5px] w-[34rem] ml-[13px] mt-[8rem] md:w-[15rem] md:mt-[15rem] xl:w-[75rem] xl:mt-[15rem] xl:p-[6rem] 2xl:w-[75rem] 2xl:mt-[13rem] 2xl:p-[6rem] 2xl:ml-[10.5rem]">
            <div className="">
              <div className="lg:flex">
                <div className="lg:text-[2.8rem] lg:text-xl lg:font-bold lg:ml-[3rem] md:text-[2.6rem] md:text-xl md:font-bold md:ml-[1.5rem] text-[2.4rem] text-xl font-bold ml-[0.23rem] xl:text-[2.8rem] xl:text-xl xl:font-bold xl:ml-[3rem] 2xl:text-[2.8rem] 2xl:text-xl 2xl:font-bold 2xl:ml-[6rem]">
                  <h1 className="lg:text-[#00A3BA] text-[#00A3BA] md:text-[#00A3BA] xl:text-[#00A3BA]">ABOUT US</h1>
                </div>

                <div className="lg:ml-[6rem] xl:ml-[6rem]">
                  <p className="lg:font-medium lg:text-[1.1rem] lg:w-[42rem] lg:p-[20px] lg:text-[#B2BEB5] md:font-medium md:text-[1.1rem] md:w-[42rem] md:p-[20px] md:text-[#B2BEB5] font-medium text-[1rem] w-[34rem] mt-[10px] text-[#B2BEB5] xl:font-medium xl:text-[1.1rem] xl:w-[42rem] xl:p-[20px] xl:text-[#B2BEB5] 2xl:font-medium 2xl:text-[1.5rem] 2xl:w-[42rem] 2xl:p-[20px] 2xl:text-[#B2BEB5]">
                    Hello, and welcome to TIMELINE ENTERTAINMENT! We,re a small,
                    passionate team of creatives who dedicated to bringing joy
                    and excitement to people's lives through our work. Our
                    Company was founded in 2007. We started out small, but our
                    passion and hard work has helped us grow into the company we
                    are today. We're proud to say that we've been able to bring
                    smiles to the faces of people all over the world with our
                    unique brand of entertainment.
                  </p>
                  <p className="lg:font-medium lg:text-[1.1rem] lg:w-[42rem] lg:p-[20px] lg:text-[#B2BEB5] font-medium text-[1rem] mt-[15px] w-[34rem] text-[#B2BEB5] md:font-medium md:text-[1.1rem] md:text-[#B2BEB5] xl:font-medium xl:text-[1.1rem] xl:w-[42rem] xl:p-[20px] xl:text-[#B2BEB5] 2xl:font-medium 2xl:text-[1.5rem] 2xl:w-[42rem] 2xl:p-[20px] 2xl:text-[#B2BEB5]">
                    Timeline Entertainment is a leading provider of innovative
                    and engaging entertainment experiences. We are commited to
                    pushing the boundaries of whats possible in entertainment
                    and our work has been recognized with numerous awards and
                    accolades.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

           {/* <section id="team">
            <div className="mt-[7rem] border-2 w-[38rem] h-[215rem] lg:h-[80rem] lg:w-[82rem] lg:ml-[-4rem] lg:mt-[8rem] md:h-[78rem] md:ml-[-2rem] md:w-[48.4rem] md:mt-[12rem] lg:border-2 lg: bg-[#29A59D] border-2 bg-[#29A59D] md:border-2 md:bg-[#29A59D] 2xl:h-[80rem] 2xl:w-[108rem] 2xl:ml-[-4rem] 2xl:mt-[12rem]">
              <div className="Poppins ptSerif lg:text-5xl lg:text-[#fff] lg:mt-[6rem] lg:ml-[27rem] md:text-5xl md:text-[#fff] md:mt-[4rem] md:ml-[11rem] text-5xl text-[#fff] mt-[3rem] ml-[6rem] 2xl:text-5xl 2xl:text-[#fff] 2xl:mt-[6rem] 2xl:ml-[43rem]">
                Our Amazing Team
              </div>

              <div className="lg:grid lg:grid-cols-3 lg:border lg:relative lg:h-[60rem] lg:mt-[5rem] lg:w-[70rem] lg:ml-[7rem] lg:bg-white md:grid md:grid-cols-2 md:border md:relative md:mt-[3rem] md:h-[64rem] md:w-[38rem] md:ml-[5.3rem] md:bg-white grid grid-cols-1 border relative mt-[3rem] w-[29.6rem] h-[199rem] ml-[4rem] bg-white 2xl:border 2xl:relative 2xl:h-[60rem] 2xl:mt-[5rem] 2xl:w-[70rem] 2xl:ml-[19rem] 2xl:bg-white">
                <div className="">
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[70px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] w-[21rem] h-[26rem] ml-[67px] mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[6.4rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[14.5rem] md:left-[5.1rem] md:bg-white absolute w-[13.5rem] p-[10px] top-[24rem] left-[8rem] bg-white">
                    <p className="lg:text-[22px] lg:ml-[13px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold text-[22px] ml-[25px] font-bold tracking-wide">
                      MR MICHEAL
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] text-[17px] ml-[10.5px] mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[9.4rem] flex mt-[15px] ml-[11.5rem] md:flex md:mt-[30px] md:ml-[7rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[55px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] w-[21rem] h-[26rem] ml-[67px] mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[29rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[14.3rem] md:left-[22.5rem] md:bg-white absolute w-[13.5rem] p-[10px] top-[56.7rem] left-[8.2rem] bg-white">
                    <p className="lg:text-[22px] lg:ml-[21px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold text-[22px] ml-[31px] font-bold tracking-wide">
                      CHINONSO
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] text-[17px] ml-[12px] mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.7rem] flex mt-[15px] ml-[11.9rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <Link>
                              <FaFacebookF />
                      </Link>
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div className="mt-[1.4rem]">
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[50px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] w-[21rem] h-[26rem] ml-[67px] mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[51.6rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[35.8rem] md:left-[5.1rem] md:bg-white absolute w-[13.5rem] p-[10px] top-[90.7rem] left-[8.2rem] bg-white">
                    <p className="lg:text-[22px] lg:ml-[22px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold text-[22px] ml-[31px] font-bold tracking-wide">
                      YHEMOLEE
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] text-[17px] ml-[10px] mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8rem] flex mt-[17px] ml-[12rem] md:flex md:mt-[30px] md:ml-[6.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[73px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] w-[21rem] h-[26rem] ml-[67px] mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[6.7rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[35.8rem] md:left-[22.4rem] md:bg-white absolute w-[13.5rem] p-[10px] top-[124rem] left-[8.2rem] bg-white">
                    <p className="lg:text-[22px] lg:ml-[19px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold text-[22px] ml-[27px] font-bold tracking-wide">
                      MR CAPTAIN
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] text-[17px] ml-[10px] mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[10rem] flex mt-[15px] ml-[12rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[56px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] w-[21rem] h-[26rem] ml-[67px] mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[28.9rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[57rem] md:left-[5rem] md:bg-white absolute w-[13.5rem] p-[10px] top-[157.4rem] left-[8.2rem] bg-white">
                    <p className="lg:text-[22px] lg:ml-[22px] lg:font-bold md:text-[19px] md:ml-[11px] md:font-bold text-[22px] ml-[30px] font-bold tracking-wide">
                      MR DAVIDO
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] text-[17px] ml-[10px] mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.6rem] flex mt-[21px] ml-[12rem] md:flex md:mt-[3px] md:ml-[6.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[55.7px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] w-[21rem] h-[26rem] ml-[67px] mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[52.3rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[57rem] md:left-[22.5rem] md:bg-white absolute w-[13.5rem] p-[10px] top-[190.3rem] left-[8.1rem] bg-white">
                    <p className="lg:text-[22px] lg:ml-[29px] lg:font-bold md:text-[19px] md:ml-[18px] md:font-bold text-[22px] ml-[42px] font-bold tracking-wide">
                      MR AJAYI
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] text-[17px] ml-[12px] mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.6rem] flex mt-[15px] ml-[12rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <FaFacebookF />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>

      {/* <section id="services" className="">
        <div className="lg:mt-[153rem] mt-[246rem] md:mt-[132rem] 2xl:ml-[15rem] 2xl:mt-[170rem]">
          <div className="Poppins ptSerif lg:ml-[32rem] lg:text-4xl ml-[12.5rem] text-4xl md:ml-[17rem] md:text-4xl">
            <h1>What We Do</h1>
          </div>
          <div>
            <p className="lg:ml-[26rem] lg:text-[20px] ml-[7.9rem] mt-[6px] text-[17.5px] md:ml-[12rem] md:text-[18px]">
              We offer swift and beautiful responses to us.
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:ml-[31rem] lg:mt-[3rem] lg:text-[20px] lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-cyan-500 flex items-center ml-[10rem] mt-[1.8rem] text-[24px] transition ease-in-and-out duration-500 font-bold hover:text-cyan-500 md:flex md:items-center md:ml-[16rem] md:mt-[3rem] md:text-[20px] md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-cyan-500">
            <p className="">More About Our Services</p>
            <p className="">
              {" "}
              <MdOutlineNextPlan className="ml-[1px]"/>{" "}
            </p>
          </div>
          <div className="lg:flex lg:max-w-5xl lg:ml-[5rem] lg:mt-[4rem] lg:gap-8 group max-w-5xl ml-[11rem] mt-[2rem] gap-8 group md:max-w-5xl md:ml-[5rem] md:grid md:grid-cols-2 md:mt-[4rem] md:gap-8 group">
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl bg-[#abd9d9] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 mt-[1rem] w-[17rem] cursor-pointer p-8 rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <LiaFileAudio className="lg:h-20 lg:mx-auto lg:w-[9rem] h-[7rem] ml-[3.7rem] w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[14px] uppercase text-[17px] font-bold ml-[36px] md:uppercase md:mt-[10px] md:text-xl md:font-bold md:ml-[34px]">
                Audio/Visual
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[18px] md:uppercase md:text-xl md:font-bold md:ml-[38px] uppercase text-[17px] font-bold ml-[38px]">
                Production.
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 text-sm leading-7 my-3 w-[12rem] font-light opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We deliver state of the arts audio-visual production from short
                films, music videos.
              </p>
              <Link to="/aboutDetails">
                <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:bg-[#00A3BA] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] bg-[#00A3BA] text-[#fff] py-2 px-6 cursor-pointer rounded-full transition  ease-in-and-out duration-500 font-bold hover:text-[#000000] ml-[40px]">
                  More Info
                </button>
              </Link>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl bg-[#abd9d9] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 mt-[1rem] w-[17rem] cursor-pointer p-8 rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <PiVinylRecordFill className="lg:h-20 lg:mx-auto lg:w-[9rem] h-[7rem] ml-[3.7rem] w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[49px] uppercase text-[17px] font-bold ml-[60px] md:uppercase md:text-xl md:mt-[10px] md:font-bold md:ml-[60px]">
                Record
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[53px] md:uppercase md:text-xl md:font-bold md:ml-[61px] uppercase text-[17px] font-bold ml-[61.5px]">
                Labels
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 text-sm leading-7 my-3 w-[12rem] font-light opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We help our client make a stand via our international relations
                network.
              </p>
              <Link to="/aboutDetails">
              <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:bg-[#00A3BA] text-[#fff] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] bg-[#00A3BA] text-[#fff] py-2 px-6 cursor-pointer rounded-full transition ease-in-and-out duration-500 font-bold hover:text-[#000000] ml-[40px]">
                More Info
              </button>
              </Link>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl bg-[#abd9d9] duration-500 group-hover:blur-sm hover:!blur-none  group-hover:scale-[0.85] hover:!scale-100 mt-[1rem] w-[17rem] sm:cursor-pointer p-8 lg:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <MdOutlineRecordVoiceOver className="lg:h-20 lg:mx-auto lg:w-[9rem] h-[7rem] ml-[3.7rem] w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[34px] uppercase text-[17px] font-bold ml-[43px] md:uppercase md:text-xl md:mt-[10px] md:font-bold md:ml-[40px]">
                Off-Stage
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[22px] md:uppercase md:text-xl md:font-bold md:ml-[28px] uppercase text-[17px] font-bold ml-[38px]">
                Commentary
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 text-sm leading-7 my-3 w-[12rem] font-light opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We are sure of giving you the most granded voice over solutions
                for your business.
              </p>
              <Link to="/aboutDetails">
              <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:bg-[#00A3BA] text-[#fff] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] bg-[#00A3BA] text-[#fff] py-2 px-6 cursor-pointer rounded-full transition ease-in-and-out duration-500 font-bold hover:text-[#000000] ml-[40px]">
                More Info
              </button>
              </Link>
            </div>
            <div className="lg:bg-[#abd9d9] lg:duration-500 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:cursor-pointer lg:p-8 lg:rounded-xl bg-[#abd9d9] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 mt-[1rem] w-[17rem] cursor-pointer p-8 lg:rounded-xl md:bg-[#abd9d9] md:duration-500 md:group-hover:blur-sm md:hover:!blur-none md:group-hover:scale-[0.85] md:hover:!scale-100 md:cursor-pointer md:p-8 md:rounded-xl">
              <p>
                <SiMediamarkt className="lg:h-20 lg:mx-auto lg:w-[9rem] h-[7rem] ml-[3.7rem] w-[5rem] md:h-20 md:mx-auto md:w-[9rem]" />
              </p>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[54px] uppercase text-[17px] font-bold ml-[63px] md:uppercase md:text-xl md:mt-[10px]  md:font-bold md:ml-[54px]">
                Media IT
              </h4>
              <h4 className="lg:uppercase lg:text-xl lg:font-bold lg:ml-[41px] md:uppercase md:text-xl md:font-bold md:ml-[45px] uppercase text-[17px] font-bold ml-[48px]">
                Solutions
              </h4>
              <p className="lg:text-sm lg:leading-7 lg:my-3 lg:font-light lg:opacity-50 text-sm leading-7 my-3 w-[12rem] font-light opacity-50 md:text-sm md:leading-7 md:my-3 md:font-light md:opacity-50">
                We also design and develop high end websites for clients and
                comfort demands.
              </p>
              <Link to="/aboutDetails">
              <button className="lg:bg-[#00A3BA] lg:text-[#fff] lg:py-2 lg:px-6 lg:cursor-pointer lg:rounded-full lg:transition lg:ease-in-and-out lg:duration-500 lg:font-bold lg:hover:text-[#000000] lg:ml-[35px] md:font-bold md:bg-[#00A3BA] text-[#fff] md:py-2 md:px-6 md:cursor-pointer md:rounded-full md:transition md:ease-in-and-out md:duration-500 md:font-bold md:hover:text-[#000000] md:ml-[40px] bg-[#00A3BA] text-[#fff] py-2 px-6 cursor-pointer rounded-full transition ease-in-and-out duration-500 font-bold hover:text-[#000000] ml-[40px]">
                More Info
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* <div
        id="contact"
        className="lg:w-full lg:bg-cover lg:bg-no-repeat lg:h-[60rem] lg:mt-[13rem] md:w-full md:bg-contain md:bg-no-repeat md:mt-[17rem] md:h-[46rem] w-full bg-contain bg-no-repeat mt-[10rem] h-[43rem]"
        style={{
          backgroundImage: `url(${Img6})`,
        }}
      >
        <div className="lg:flex lg:ml-[12rem] ml-[55px] flex 2xl:ml-[23rem]">
          <div className="lg:border lg:w-[26rem] lg:mt-[33rem] lg:h-[30rem] lg:bg-[#ffffff] md:border-none md:w-[34rem] md:mt-[50rem] md:h-[34rem] border-none w-[29rem] mt-[42rem] h-[30rem] bg-[#ffffff]">
            <div className="lg:ml-[2.6rem] lg:mt-[4rem] md:ml-[3.2rem] md:mt-[4rem] ml-[1rem] mt-[4rem]">
              <div className="lg:flex lg:items-center md:flex md:items-center">
                <IoCallOutline className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] w-[2.2rem] h-[2.5rem] text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
                <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] font-bold mt-[10px] text-[21px] ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">
                  CALL US
                </p>
              </div>
              <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px] text-[21px] mt-[18px] ml-[10px]">
                1 (234) 567-891, 1 (234) 987-654
              </p>
            </div>
            <div className="lg:ml-[2.6rem] lg:mt-[3rem] ml-[1rem] mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
              <div className="lg:flex md:flex ">
                <MdLocationOn className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] w-[2.2rem] h-[2.5rem] text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
                <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] font-bold mt-[10px] text-[21px] ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">
                  LOCATION
                </p>
              </div>
              <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] text-[21px] mt-[18px] ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">
                3, Ogunshina Street, Anthony, Lagos state.
              </p>
              <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] text-[21px] mt-[5px] ml-[10px] md:text-[22px] md:mt-[5px] md:ml-[10px]">
                92103-9000
              </p>
            </div>
            <div className="lg:ml-[2.6rem] lg:mt-[3rem] ml-[1rem] mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
              <div className="lg:flex md:flex">
                <LuClock3 className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] w-[2.2rem] h-[2.5rem] text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
                <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px] font-bold mt-[10px] text-[21px] ml-[10px]">
                  BUSINESS HOURS
                </p>
              </div>
              <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] text-[21px] mt-[18px] ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">
                Mon-Fri …… 9 am-5 pm, Sat, Sun ....…
              </p>
              <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] text-[21px] mt-[5px] ml-[10px] md:text-[24px] md:mt-[5px] md:ml-[10px]">
                Closed
              </p>
            </div>
          </div>

           <div>
            <div className="lg:border lg:ml-[-0.2px] lg:w-[29rem] lg:mt-[33rem] lg:bg-[#e5e5e5] lg:h-[30rem] sm:border w-[29rem] mt-[12rem] ml-[-27.3rem] bg-[#e5e5e5] h-[30rem] md:border md:w-[34rem] md:ml-[-31rem] md:mt-[15rem] md:bg-[#e5e5e5] md:h-[33rem]">
              <div>
                <p className="lg:font-bold lg:text-[28px] lg:p-[31px] lg:ml-[7rem] font-bold text-[32px] p-[31px] ml-[5.5rem] md:font-bold md:text-[42px] md:p-[31px] md:ml-[7rem]">
                  CONTACT US
                </p>
              </div>
              <div className="lg:ml-[20px] md:ml-[50px] ml-[20px]">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    className="lg:w-[23rem] lg:p-[14px] outline-none lg:border text-sm w-[22.3rem] ml-[2rem] p-[14px] border text-sm md:w-[28rem] md:p-[14px] md:border md:text-sm"
                    name="to_name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="email"
                    className="lg:mt-[26px] lg:w-[23rem] outline-none lg:p-[14px] lg:border lg:text-sm md:mt-[26px] md:w-[28rem] md:p-[14px] md:border md:text-sm w-[22.3rem] ml-[2rem] mt-[22px] p-[14px] border text-sm"
                    name="from_name"
                    placeholder="Enter Your Email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />

                  <textarea
                    name="message"
                    className="lg:w-[23rem] lg:p-[29px] outline-none lg:border text-sm lg:mt-[26px] md:w-[28rem] md:p-[29px] md:border md:text-sm md:mt-[26px] w-[22.3rem] ml-[2rem] p-[17px] border text-sm mt-[26px]"
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="SUBMIT"
                    className="lg:mt-[20px] lg:w-[23rem] outline-none lg:font-bold lg:ml-[34px] lg:bg-[#00A3BA] lg:border-none lg:pl-[10px] lg:pt-[10px] lg:pb-[10px] lg:pr-[10px] lg:text-[16px] cursor-pointer lg:rounded-[27px] lg:hover:bg-[#00A3BA] lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 ml-[3.5rem] bg-[#00A3BA] border-none pl-[8rem] mt-[20px] text-[#fff] pt-[10px] pb-[10px] pr-[8rem] text-[16px] rounded-[14px] hover:bg-[#00A3BA] hover:text-[#000000] transition ease-out duration-500 md:mt-[25px] md:ml-[15px] md:bg-[#00A3BA] md:border-2 md:pl-[11rem] md:pt-[10px] md:pb-[10px] md:text-[#fff] md:pr-[11rem] md:text-[18px] md:rounded-[7px] md:hover:bg-[#00A3BA] md:hover:text-[#000000] md:transition md:ease-out md:duration-500"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      {/* <footer className="lg:mt-[12rem] lg:border lg:bg-[#00A3BA] lg:pr-[2rem] lg:pl-[2rem] lg:pt-[2rem] lg:pb-[1rem] lg:text-center lg:font-[0.9rem] md:mt-[48rem] md:border md:bg-[#00A3BA] md:pr-[2rem] md:pl-[2rem] md:pt-[2rem] md:pb-[1rem] md:text-center md:font-[0.9rem] mt-[46rem] border bg-[#00A3BA] pr-[2rem] pl-[2rem] pt-[2rem] lg:pb-[1rem] text-center font-[0.9rem]">
        <Link
          to="#"
          className="lg:font-bold md:font-bold font-bold lg:text-4xl lg:text-[#1f1f38] text-3xl"
        >
          TIMELINE
        </Link>

        <ul className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:ml-[0rem] lg:mr-auto lg:mt-[1rem] lg:mb-[1rem] md:flex-none md:flex-wrap md:justify-center md:gap-4 md:ml-[0rem] md:mr-auto md:mt-[1rem] md:mb-[1rem] flex-none ml-[0rem] mr-auto mt-[1rem] mb-[1rem]">
          <li className="lg:mt-[0.5rem] text-[1.2rem] lg:text-[1rem]">
            <Link to="#" className="lg:text-[#1f1f38]">
              Home
            </Link>
          </li>
          <li className="mt-[0.5rem] text-[1.2rem] lg:text-[1rem]">
            <a href="#about" className="lg:text-[#1f1f38]">
              About
            </a>
          </li>
          <li className="mt-[0.5rem] text-[1.2rem lg:text-[1rem]]">
            <a href="#team" className="lg:text-[#1f1f38]">
              Team
            </a>
          </li>
          <li className="mt-[0.5rem] text-[1.2rem] lg:text-[1rem]">
            <a href="#services" className="lg:text-[#1f1f38]">
              Services
            </a>
          </li>
          <li className="mt-[0.5rem] text-[1.2rem] lg:text-[1rem]">
            <a href="#contact" className="lg:text-[#1f1f38]">
              Contact
            </a>
          </li>
        </ul>

        <div className="lg:flex lg:justify-center lg:gap-3 lg:mb-[0.5rem] flex justify-center gap-3 mb-[2rem] md:flex md:justify-center md:gap-3 md:mb-[2rem]">
          <Link
            className="lg:text-[#fff] lg:bg-[#1f1f38] lg:p-[0.8rem] lg:rounded-[0.7rem] lg:flex lg:hover:text-[#00A3BA] md:text-[#fff] md:bg-[#1f1f38] md:p-[0.8rem] md:rounded-[0.7rem] md:flex md:hover:text-[#00A3BA] text-[#fff] bg-[#1f1f38] p-[1rem] rounded-[0.7rem] flex hover:text-[#00A3BA]"
          >
            <FaSnapchat />
          </Link>
          <Link
            className="lg:text-[#fff] lg:bg-[#1f1f38] lg:p-[0.8rem] lg:rounded-[0.7rem] lg:flex lg:hover:text-[#00A3BA] md:text-[#fff] md:bg-[#1f1f38] md:p-[0.8rem] md:rounded-[0.7rem] md:flex md:hover:text-[#00A3BA] text-[#fff] bg-[#1f1f38] p-[1rem] rounded-[0.7rem] flex hover:text-[#00A3BA]"
            to="https://www.instagram.com/simplevhick_"
          >
            <FaInstagram />
          </Link>
          <Link
            className="lg:text-[#fff] lg:bg-[#1f1f38] lg:p-[0.8rem] lg:rounded-[0.7rem] lg:flex lg:hover:text-[#00A3BA] md:text-[#fff] md:bg-[#1f1f38] md:p-[0.8rem] md:rounded-[0.7rem] md:flex md:hover:text-[#00A3BA] text-[#fff] bg-[#1f1f38] p-[1rem] rounded-[0.7rem] flex hover:text-[#00A3BA]"
            to="https://twitter.com/simplevhick"
          >
            <FaTwitter />
          </Link>
        </div>

        <div className="text-[1.2rem]">
          <small>
            &copy; <span className="font-bold">Timeline.</span> All rights
            reserved.
          </small>
        </div>
      </footer> */}
    </nav>
  );
};

export default Nav;


/* <section id="about" className="z-10 lg:w-[75rem] lg:mt-[4rem] lg:p-[6rem] sm:p-[5px] sm:w-[34rem] sm:ml-[13px] sm:mt-[8rem] md:w-[15rem] md:mt-[15rem] xl:w-[75rem] xl:mt-[15rem] xl:p-[6rem] 2xl:w-[75rem] 2xl:mt-[13rem] 2xl:p-[6rem] 2xl:ml-[10.5rem]">
<div className="">
  <div className="lg:flex">
    <div className="lg:text-[2.8rem] lg:text-xl lg:font-bold lg:ml-[3rem] md:text-[2.6rem] md:text-xl md:font-bold md:ml-[1.5rem] sm:text-[2.4rem] sm:text-xl sm:font-bold sm:ml-[0.23rem] xl:text-[2.8rem] xl:text-xl xl:font-bold xl:ml-[3rem] 2xl:text-[2.8rem] 2xl:text-xl 2xl:font-bold 2xl:ml-[6rem]">
      <h1 className="lg:text-[#00A3BA] sm:text-[#00A3BA] md:text-[#00A3BA] xl:text-[#00A3BA]">ABOUT US</h1>
    </div>

    <div className="lg:ml-[6rem] xl:ml-[6rem]">
      <p className="lg:font-medium lg:text-[1.1rem] lg:w-[42rem] lg:p-[20px] lg:text-[#B2BEB5] md:font-medium md:text-[1.1rem] md:w-[42rem] md:p-[20px] md:text-[#B2BEB5] sm:font-medium sm:text-[1rem] sm:w-[34rem] sm:mt-[10px] sm:text-[#B2BEB5] xl:font-medium xl:text-[1.1rem] xl:w-[42rem] xl:p-[20px] xl:text-[#B2BEB5] 2xl:font-medium 2xl:text-[1.5rem] 2xl:w-[42rem] 2xl:p-[20px] 2xl:text-[#B2BEB5]">
        Hello, and welcome to TIMELINE ENTERTAINMENT! We,re a small,
        passionate team of creatives who dedicated to bringing joy
        and excitement to people's lives through our work. Our
        Company was founded in 2007. We started out small, but our
        passion and hard work has helped us grow into the company we
        are today. We're proud to say that we've been able to bring
        smiles to the faces of people all over the world with our
        unique brand of entertainment.
      </p>
      <p className="lg:font-medium lg:text-[1.1rem] lg:w-[42rem] lg:p-[20px] lg:text-[#B2BEB5] sm:font-medium sm:text-[1rem] sm:mt-[15px] sm:w-[34rem] sm:text-[#B2BEB5] md:font-medium md:text-[1.1rem] md:text-[#B2BEB5] xl:font-medium xl:text-[1.1rem] xl:w-[42rem] xl:p-[20px] xl:text-[#B2BEB5] 2xl:font-medium 2xl:text-[1.5rem] 2xl:w-[42rem] 2xl:p-[20px] 2xl:text-[#B2BEB5]">
        Timeline Entertainment is a leading provider of innovative
        and engaging entertainment experiences. We are commited to
        pushing the boundaries of whats possible in entertainment
        and our work has been recognized with numerous awards and
        accolades.
      </p>
    </div>
  </div>
</div>
</section> */








/* <div
        className="lg:w-full lg:bg-cover lg:bg-no-repeat lg:h-[60rem] md:w-full md:bg-contain md:bg-no-repeat md:h-[46rem] sm:w-full sm:bg-contain sm:bg-no-repeat sm:h-[43rem]"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="lg:h-[25rem] lg:w-[31rem] lg:bg-black lg:bg-opacity-20 lg:border-none lg:border-2 lg:absolute lg:top-[39rem] lg:left-[2rem] sm:h-[11.5rem] sm:w-[15rem] sm:bg-black sm:bg-opacity-15 sm-border-none sm:absolute sm:top-[19rem] sm:left-[1rem] md:h-[17.5rem] md:w-[16.5rem] md:bg-black md:bg-opacity-20 md:border-none md:absolute md:top-[18rem] md:left-[1.6rem]">
          <div>
            <h1 className="lg:text-6xl lg:ml-[21px] lg:mt-[25px] Poppins lg:text-[#00A3BA] sm:text-[28px] sm:mt-[10px] sm:ml-[14px] sm:leading-[23px] sm:text-[#00A3BA] md:text-[28px] md:leading-[29px] md:ml-[21px] md:mt-[19px] md:text-[#00A3BA]">
              We redefine entertainment.
            </h1>
            <p className="lg:mt-[1.3rem] lg:text-2xl lg:ml-[25px] lg:w-[29rem] lg:text-white sm:mt-[8px] sm:text-sm sm:ml-[14px] sm:w-[14rem] sm:leading-[17px] sm:text-white md:mt-[10px] md:leading-[28px] md:text-base md:ml-[19px] md:w-[15.6rem] md:text-white">
              Timeline Entertainment Limited was established by a team of
              professionals in music, audio-visuals, software managers, and
              media strategists in 2007.
            </p>
            <Link to="/aboutDetails">
              <input
                type="button"
                value="READ MORE"
                className="lg:mt-[30px] lg:ml-[28px] lg:bg-[#00A3BA] lg:text-[#fff] lg:border-none lg:pl-[12px] lg:pt-[12px] lg:pb-[12px] lg:pr-[12px] lg:text-[16px] cursor-pointer lg:rounded-[7px] lg:hover:bg-[#00A3BA] lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[16px] sm:mt-[9px] sm:text-[#fff] sm:bg-[#00A3BA] sm:border-none sm:pl-[5px] sm:pt-[5px] sm:pb-[5px] sm:pr-[5px] sm:text-[10px] sm:rounded-[3px] sm:hover:bg-[#00A3BA] sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:mt-[12px] md:text-[#fff] lg:ml-[30px] md:bg-[#00A3BA] md:border-2 md:pl-[9px] md:pt-[9px] md:pb-[9px] md:pr-[9px] md:text-[12px] md:rounded-[7px] md:hover:bg-[#00A3BA] md:hover:text-[#000000] md:transition md:ease-out md:duration-500"
              />
            </Link>
          </div> */





          // <section id="about" className="z-10 lg:w-[75rem] lg:mt-[4rem] lg:p-[6rem] sm:p-[5px] sm:w-[34rem] sm:ml-[13px] sm:mt-[8rem] md:w-[15rem] md:mt-[15rem] xl:w-[75rem] xl:mt-[15rem] xl:p-[6rem] 2xl:w-[75rem] 2xl:mt-[13rem] 2xl:p-[6rem] 2xl:ml-[10.5rem]">
          //   <div className="">
          //     <div className="lg:flex">
          //       <div className="lg:text-[2.8rem] lg:text-xl lg:font-bold lg:ml-[3rem] md:text-[2.6rem] md:text-xl md:font-bold md:ml-[1.5rem] sm:text-[2.4rem] sm:text-xl sm:font-bold sm:ml-[0.23rem] xl:text-[2.8rem] xl:text-xl xl:font-bold xl:ml-[3rem] 2xl:text-[2.8rem] 2xl:text-xl 2xl:font-bold 2xl:ml-[6rem]">
          //         <h1 className="lg:text-[#00A3BA] sm:text-[#00A3BA] md:text-[#00A3BA] xl:text-[#00A3BA]">ABOUT US</h1>
          //       </div>

          //       <div className="lg:ml-[6rem] xl:ml-[6rem]">
          //         <p className="lg:font-medium lg:text-[1.1rem] lg:w-[42rem] lg:p-[20px] lg:text-[#B2BEB5] md:font-medium md:text-[1.1rem] md:w-[42rem] md:p-[20px] md:text-[#B2BEB5] sm:font-medium sm:text-[1rem] sm:w-[34rem] sm:mt-[10px] sm:text-[#B2BEB5] xl:font-medium xl:text-[1.1rem] xl:w-[42rem] xl:p-[20px] xl:text-[#B2BEB5] 2xl:font-medium 2xl:text-[1.5rem] 2xl:w-[42rem] 2xl:p-[20px] 2xl:text-[#B2BEB5]">
          //           Hello, and welcome to TIMELINE ENTERTAINMENT! We,re a small,
          //           passionate team of creatives who dedicated to bringing joy
          //           and excitement to people's lives through our work. Our
          //           Company was founded in 2007. We started out small, but our
          //           passion and hard work has helped us grow into the company we
          //           are today. We're proud to say that we've been able to bring
          //           smiles to the faces of people all over the world with our
          //           unique brand of entertainment.
          //         </p>
          //         <p className="lg:font-medium lg:text-[1.1rem] lg:w-[42rem] lg:p-[20px] lg:text-[#B2BEB5] sm:font-medium sm:text-[1rem] sm:mt-[15px] sm:w-[34rem] sm:text-[#B2BEB5] md:font-medium md:text-[1.1rem] md:text-[#B2BEB5] xl:font-medium xl:text-[1.1rem] xl:w-[42rem] xl:p-[20px] xl:text-[#B2BEB5] 2xl:font-medium 2xl:text-[1.5rem] 2xl:w-[42rem] 2xl:p-[20px] 2xl:text-[#B2BEB5]">
          //           Timeline Entertainment is a leading provider of innovative
          //           and engaging entertainment experiences. We are commited to
          //           pushing the boundaries of whats possible in entertainment
          //           and our work has been recognized with numerous awards and
          //           accolades.
          //         </p>
          //       </div>
          //     </div>
          //   </div>
          // </section>




/* <section id="team">
            <div className="sm:mt-[7rem] sm:border-2 sm:w-[38rem] sm:h-[215rem] lg:h-[80rem] lg:w-[82rem] lg:ml-[-4rem] lg:mt-[8rem] md:h-[78rem] md:ml-[-2rem] md:w-[48.4rem] md:mt-[12rem] lg:border-2 lg: bg-[#29A59D] sm:border-2 sm:bg-[#29A59D] md:border-2 md:bg-[#29A59D] 2xl:h-[80rem] 2xl:w-[108rem] 2xl:ml-[-4rem] 2xl:mt-[12rem]">
              <div className="Poppins ptSerif lg:text-5xl lg:text-[#fff] lg:mt-[6rem] lg:ml-[27rem] md:text-5xl md:text-[#fff] md:mt-[4rem] md:ml-[11rem] sm:text-5xl sm:text-[#fff] sm:mt-[3rem] sm:ml-[6rem] 2xl:text-5xl 2xl:text-[#fff] 2xl:mt-[6rem] 2xl:ml-[43rem]">
                Our Amazing Team
              </div>

              <div className="lg:grid lg:grid-cols-3 lg:border lg:relative lg:h-[60rem] lg:mt-[5rem] lg:w-[70rem] lg:ml-[7rem] lg:bg-white md:grid md:grid-cols-2 md:border md:relative md:mt-[3rem] md:h-[64rem] md:w-[38rem] md:ml-[5.3rem] md:bg-white sm:grid sm:grid-cols-1 sm:border sm:relative sm:mt-[3rem] sm:w-[29.6rem] sm:h-[199rem] sm:ml-[4rem] sm:bg-white 2xl:border 2xl:relative 2xl:h-[60rem] 2xl:mt-[5rem] 2xl:w-[70rem] 2xl:ml-[19rem] 2xl:bg-white">
                <div className="">
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[70px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] sm:w-[21rem] sm:h-[26rem] sm:ml-[67px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[6.4rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[14.5rem] md:left-[5.1rem] md:bg-white sm:absolute sm:w-[13.5rem] sm:p-[10px] sm:top-[24rem] sm:left-[8rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[13px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[22px] sm:ml-[25px] sm:font-bold tracking-wide">
                      MR MICHEAL
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] sm:text-[17px] sm:ml-[10.5px] sm:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[9.4rem] sm:flex sm:mt-[15px] sm:ml-[11.5rem] md:flex md:mt-[30px] md:ml-[7rem]">
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
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[55px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] sm:w-[21rem] sm:h-[26rem] sm:ml-[67px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[29rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[14.3rem] md:left-[22.5rem] md:bg-white sm:absolute sm:w-[13.5rem] sm:p-[10px] sm:top-[56.7rem] sm:left-[8.2rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[21px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[22px] sm:ml-[31px] sm:font-bold tracking-wide">
                      CHINONSO
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] sm:text-[17px] sm:ml-[12px] sm:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.7rem] sm:flex sm:mt-[15px] sm:ml-[11.9rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
                    <p className="cursor-pointer">
                      <Link>
                              <FaFacebookF />
                      </Link>
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <FaTwitter />
                    </p>
                    <p className="lg:ml-[17px] md:ml-[17px] sm:ml-[17px] cursor-pointer">
                      <BsInstagram />
                    </p>
                  </div>
                </div>
                <div className="sm:mt-[1.4rem]">
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[50px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] sm:w-[21rem] sm:h-[26rem] sm:ml-[67px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[20rem] lg:left-[51.6rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[35.8rem] md:left-[5.1rem] md:bg-white sm:absolute sm:w-[13.5rem] sm:p-[10px] sm:top-[90.7rem] sm:left-[8.2rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[22px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[22px] sm:ml-[31px] sm:font-bold tracking-wide">
                      YHEMOLEE
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[17px] sm:ml-[10px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8rem] sm:flex sm:mt-[17px] sm:ml-[12rem] md:flex md:mt-[30px] md:ml-[6.9rem]">
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
                <div className="sm:mt-[10px]">
                  <div>
                    <img
                      src={Img5}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[73px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] sm:w-[21rem] sm:h-[26rem] sm:ml-[67px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[6.7rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[35.8rem] md:left-[22.4rem] md:bg-white sm:absolute sm:w-[13.5rem] sm:p-[10px] sm:top-[124rem] sm:left-[8.2rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[19px] lg:font-bold md:text-[19px] md:ml-[9px] md:font-bold sm:text-[22px] sm:ml-[27px] sm:font-bold tracking-wide">
                      MR CAPTAIN
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[17px] sm:ml-[10px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[10rem] sm:flex sm:mt-[15px] sm:ml-[12rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
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
                <div className="sm:mt-[10px]">
                  <div>
                    <img
                      src={Img4}
                      alt="pix"
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[56px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[65px] md:mt-[2rem] sm:w-[21rem] sm:h-[26rem] sm:ml-[67px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[28.9rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[57rem] md:left-[5rem] md:bg-white sm:absolute sm:w-[13.5rem] sm:p-[10px] sm:top-[157.4rem] sm:left-[8.2rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[22px] lg:font-bold md:text-[19px] md:ml-[11px] md:font-bold sm:text-[22px] sm:ml-[30px] sm:font-bold tracking-wide">
                      MR DAVIDO
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[17px] sm:ml-[10px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.6rem] sm:flex sm:mt-[21px] sm:ml-[12rem] md:flex md:mt-[30px] md:ml-[6.9rem]">
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
                      className="lg:w-[16rem] lg:h-[20rem] lg:ml-[55.7px] lg:mt-[3rem] md:w-[12rem] md:h-[15rem] md:ml-[40px] md:mt-[2rem] sm:w-[21rem] sm:h-[26rem] sm:ml-[67px] sm:mt-[3rem]"
                    />
                  </div>
                  <div className="lg:absolute lg:w-[12rem] lg:p-[10px] lg:top-[49.9rem] lg:left-[52.3rem] lg:bg-white md:absolute md:w-[10rem] md:p-[10px] md:top-[57rem] md:left-[22.5rem] md:bg-white sm:absolute sm:w-[13.5rem] sm:p-[10px] sm:top-[190.3rem] sm:left-[8.1rem] sm:bg-white">
                    <p className="lg:text-[22px] lg:ml-[29px] lg:font-bold md:text-[19px] md:ml-[18px] md:font-bold sm:text-[22px] sm:ml-[42px] sm:font-bold tracking-wide">
                      MR AJAYI
                    </p>
                    <p className="tracking-widest lg:text-[16px] lg:ml-[3px] lg:mt-[2px] md:text-[13px] md:ml-[3px] md:mt-[2px] sm:text-[17px] sm:ml-[12px] sm:mt-[2px]">
                      Worldwide Partner
                    </p>
                  </div>
                  <div className="lg:flex lg:mt-[32px] lg:ml-[8.6rem] sm:flex sm:mt-[15px] sm:ml-[12rem] md:flex md:mt-[30px] md:ml-[5.9rem]">
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
          </section> */


      //     <div
      //   id="contact"
      //   className="lg:w-full lg:bg-cover lg:bg-no-repeat lg:h-[60rem] lg:mt-[13rem] md:w-full md:bg-contain md:bg-no-repeat md:mt-[17rem] md:h-[46rem] sm:w-full sm:bg-contain sm:bg-no-repeat sm:mt-[10rem] sm:h-[43rem]"
      //   style={{
      //     backgroundImage: `url(${Img6})`,
      //   }}
      // ></div>


      // <div className="lg:flex lg:ml-[12rem] sm:ml-[55px] sm:flex 2xl:ml-[23rem]">
      // <div className="lg:border lg:w-[26rem] lg:mt-[33rem] lg:h-[30rem] lg:bg-[#ffffff] md:border-none md:w-[34rem] md:mt-[50rem] md:h-[34rem] sm:border-none sm:w-[29rem] sm:mt-[42rem] sm:h-[30rem] sm:bg-[#ffffff]">
      //   <div className="lg:ml-[2.6rem] lg:mt-[4rem] md:ml-[3.2rem] md:mt-[4rem] sm:ml-[1rem] sm:mt-[4rem]">
      //     <div className="lg:flex lg:items-center md:flex md:items-center">
      //       <IoCallOutline className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.2rem] sm:h-[2.5rem] sm:text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
      //       <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] sm:font-bold sm:mt-[10px] sm:text-[21px] sm:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">
      //         CALL US
      //       </p>
      //     </div>
      //     <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px] sm:text-[21px] sm:mt-[18px] sm:ml-[10px]">
      //       1 (234) 567-891, 1 (234) 987-654
      //     </p>
      //   </div>
      //   <div className="lg:ml-[2.6rem] lg:mt-[3rem] sm:ml-[1rem] sm:mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
      //     <div className="lg:flex md:flex ">
      //       <MdLocationOn className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.2rem] sm:h-[2.5rem] sm:text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
      //       <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] sm:font-bold sm:mt-[10px] sm:text-[21px] sm:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">
      //         LOCATION
      //       </p>
      //     </div>
      //     <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] sm:text-[21px] sm:mt-[18px] sm:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">
      //       3, Ogunshina Street, Anthony, Lagos state.
      //     </p>
      //     <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] sm:text-[21px] sm:mt-[5px] sm:ml-[10px] md:text-[22px] md:mt-[5px] md:ml-[10px]">
      //       92103-9000
      //     </p>
      //   </div>
      //   <div className="lg:ml-[2.6rem] lg:mt-[3rem] sm:ml-[1rem] sm:mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
      //     <div className="lg:flex md:flex">
      //       <LuClock3 className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.2rem] sm:h-[2.5rem] sm:text-[#00A3BA] md:w-[2.5rem] md:h-[2.5rem] md:text-[#00A3BA]" />
      //       <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px] sm:font-bold sm:mt-[10px] sm:text-[21px] sm:ml-[10px]">
      //         BUSINESS HOURS
      //       </p>
      //     </div>
      //     <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] sm:text-[21px] sm:mt-[18px] sm:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">
      //       Mon-Fri …… 9 am-5 pm, Sat, Sun ....…
      //     </p>
      //     <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] sm:text-[21px] sm:mt-[5px] sm:ml-[10px] md:text-[24px] md:mt-[5px] md:ml-[10px]">
      //       Closed
      //     </p>
      //   </div>
      // </div>


    //   <div>
    //   <div className="lg:border lg:ml-[-0.2px] lg:w-[29rem] lg:mt-[33rem] lg:bg-[#e5e5e5] lg:h-[30rem] sm:border sm:w-[29rem] sm:mt-[12rem] sm:ml-[-27.3rem] sm:bg-[#e5e5e5] sm:h-[30rem] md:border md:w-[34rem] md:ml-[-31rem] md:mt-[15rem] md:bg-[#e5e5e5] md:h-[33rem]">
    //     <div>
    //       <p className="lg:font-bold lg:text-[28px] lg:p-[31px] lg:ml-[7rem] sm:font-bold sm:text-[32px] sm:p-[31px] sm:ml-[5.5rem] md:font-bold md:text-[42px] md:p-[31px] md:ml-[7rem]">
    //         CONTACT US
    //       </p>
    //     </div>
    //     <div className="lg:ml-[20px] md:ml-[50px] sm:ml-[20px]">
    //       <form ref={form} onSubmit={sendEmail}>
    //         <input
    //           type="text"
    //           className="lg:w-[23rem] lg:p-[14px] outline-none lg:border text-sm sm:w-[22.3rem] sm:ml-[2rem] sm:p-[14px] sm:border sm:text-sm md:w-[28rem] md:p-[14px] md:border md:text-sm"
    //           name="to_name"
    //           placeholder="Enter Your Name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />

    //         <input
    //           type="email"
    //           className="lg:mt-[26px] lg:w-[23rem] outline-none lg:p-[14px] lg:border lg:text-sm md:mt-[26px] md:w-[28rem] md:p-[14px] md:border md:text-sm sm:w-[22.3rem] sm:ml-[2rem] sm:mt-[22px] sm:p-[14px] sm:border sm:text-sm"
    //           name="from_name"
    //           placeholder="Enter Your Email"
    //           value={mail}
    //           onChange={(e) => setMail(e.target.value)}
    //         />

    //         <textarea
    //           name="message"
    //           className="lg:w-[23rem] lg:p-[29px] outline-none lg:border text-sm lg:mt-[26px] md:w-[28rem] md:p-[29px] md:border md:text-sm md:mt-[26px] sm:w-[22.3rem] sm:ml-[2rem] sm:p-[17px] sm:border sm:text-sm sm:mt-[26px]"
    //           placeholder="Enter Your Message"
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //         />
    //         <input
    //           type="submit"
    //           value="SUBMIT"
    //           className="lg:mt-[20px] lg:w-[23rem] outline-none lg:font-bold lg:ml-[34px] lg:bg-[#00A3BA] lg:border-none lg:pl-[10px] lg:pt-[10px] lg:pb-[10px] lg:pr-[10px] lg:text-[16px] cursor-pointer lg:rounded-[27px] lg:hover:bg-[#00A3BA] lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[3.5rem] sm:bg-[#00A3BA] sm:border-none sm:pl-[8rem] sm:mt-[20px] sm:text-[#fff] sm:pt-[10px] sm:pb-[10px] sm:pr-[8rem] sm:text-[16px] sm:rounded-[14px] sm:hover:bg-[#00A3BA] sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:mt-[25px] md:ml-[15px] md:bg-[#00A3BA] md:border-2 md:pl-[11rem] md:pt-[10px] md:pb-[10px] md:text-[#fff] md:pr-[11rem] md:text-[18px] md:rounded-[7px] md:hover:bg-[#00A3BA] md:hover:text-[#000000] md:transition md:ease-out md:duration-500"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // </div>