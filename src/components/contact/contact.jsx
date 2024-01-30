import Img from "./bg.PNG"
import { IoCallOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";


const Contact = () => {
  return (
    <div id="contact" className="lg:text-black lg:mt-[19rem] lg:bg-auto lg:bg-cover lg:bg-contain lg:bg-no-repeat md:bg-auto md:bg-cover md:bg-contain md:bg-no-repeat md:h-[28rem] md:mt-[22rem] md:w-[48rem] sm:bg-auto sm:bg-cover sm:bg-contain sm:bg-no-repeat sm:h-[20rem] sm:w-[40rem] sm:mt-[15rem] xl:bg-auto xl:bg-cover xl:bg-contain xl:bg-no-repeat xl:h-[60rem] xl:w-[80rem] z-10 " style={{
         backgroundImage: `url(${Img})`
     }}>
        <div className="lg:flex lg:ml-[9rem] sm:flex">
            <div className="lg:border lg:w-[26rem] lg:mt-[33rem] lg:h-[30rem] lg:bg-[#ffffff] md:border-none md:w-[34rem] md:mt-[50rem] md:h-[34rem] sm:border-none sm:w-[29rem] sm:mt-[42rem] sm:h-[30rem] sm:ml-[4rem] sm:bg-[#ffffff]">
                <div className="lg:ml-[2.6rem] lg:mt-[4rem] md:ml-[3.2rem] md:mt-[4rem] sm:ml-[2.6rem] sm:mt-[4rem]">
                    <div className="lg:flex lg:items-center md:flex md:items-center">
                        <IoCallOutline className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.5rem] sm:h-[2.5rem] sm:text-[#f65e0a] md:w-[2.5rem] md:h-[2.5rem] md:text-[#f65e0a]"/>
                        <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] sm:font-bold sm:mt-[10px] sm:text-[25px] sm:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">CALL US</p>
                    </div> 
                      <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px] sm:text-[23px] sm:mt-[18px] sm:ml-[10px]">1 (234) 567-891, 1 (234) 987-654</p>
                </div>
                <div className="lg:ml-[2.6rem] lg:mt-[3rem] sm:ml-[2.6rem] sm:mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
                    <div className="lg:flex md:flex ">
                        <MdLocationOn className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#00A3BA] sm:w-[2.5rem] sm:h-[2.5rem] sm:text-[#f65e0a] md:w-[2.5rem] md:h-[2.5rem] md:text-[#f65e0a]"/>
                        <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] sm:font-bold sm:mt-[10px] sm:text-[25px] sm:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px]">LOCATION</p>
                    </div> 
                      <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] sm:text-[23px] sm:mt-[18px] sm:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">121 Rock Sreet, 21 Avenue, New York, NY</p>
                      <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] sm:text-[23px] sm:mt-[5px] sm:ml-[10px] md:text-[22px] md:mt-[5px] md:ml-[10px]">92103-9000</p>
                </div>
                <div className="lg:ml-[2.6rem] lg:mt-[3rem] sm:ml-[2.6rem] sm:mt-[3rem] md:ml-[3.2rem] md:mt-[3rem]">
                    <div className="lg:flex md:flex">
                        <LuClock3 className="lg:w-[1.5rem] lg:h-[1.5rem] lg:text-[#abd9d9] sm:w-[2.5rem] sm:h-[2.5rem] sm:text-[#f65e0a] md:w-[2.5rem] md:h-[2.5rem] md:text-[#f65e0a]"/>
                        <p className="lg:font-bold lg:text-[17px] lg:ml-[10px] md:font-bold md:text-[24px] md:ml-[20px] sm:font-bold sm:mt-[10px] sm:text-[23px] sm:ml-[10px]">BUSINESS HOURS</p>
                    </div> 
                      <p className="lg:text-[17px] lg:mt-[18px] lg:ml-[10px] sm:text-[23px] sm:mt-[18px] sm:ml-[10px] md:text-[24px] md:mt-[18px] md:ml-[10px]">Mon-Fri …… 10 am-8 pm, Sat, Sun ....…</p>
                      <p className="lg:text-[17px] lg:mt-[5px] lg:ml-[10px] sm:text-[23px] sm:mt-[5px] sm:ml-[10px] md:text-[24px] md:mt-[5px] md:ml-[10px]">Closed</p> 
                </div>
            </div>

            <div>
                <div className="lg:border lg:ml-[0.2px] lg:w-[29rem] lg:mt-[33rem] lg:bg-[#e5e5e5] lg:h-[30rem] sm:border sm:w-[29rem] sm:mt-[12rem] sm:ml-[-27.5rem] sm:bg-[#e5e5e5] sm:h-[30rem] md:border md:w-[34rem] md:ml-[-31rem] md:mt-[15rem] md:bg-[#e5e5e5] md:h-[33rem]">
                    <div>
                        <p className="lg:font-bold lg:text-[28px] lg:p-[31px] lg:ml-[7rem] sm:font-bold sm:text-[32px] sm:p-[31px] sm:ml-[6rem] md:font-bold md:text-[42px] md:p-[31px] md:ml-[7rem]">CONTACT US</p>
                    </div>
                    <div className="lg:ml-[2.9rem] md:ml-[2.9rem] sm:ml-[2.9rem]">
                        <input type="text" placeholder="Enter Your Name" checked className="lg:w-[23rem] lg:p-[14px] lg:border text-sm sm:w-[23rem] sm:p-[14px] sm:border sm:text-sm md:w-[28rem] md:p-[14px] md:border md:text-sm"/>
                        <br />
                        <input type="text" placeholder="Enter a Valid Email" checked className="lg:mt-[26px] lg:w-[23rem] lg:p-[14px] lg:border lg:text-sm md:mt-[26px] md:w-[28rem] md:p-[14px] md:border md:text-sm sm:mt-[26px] sm:w-[23rem] sm:p-[14px] sm:border sm:text-sm"/>
                        <br />
                        <textarea name="my_textarea" className="lg:w-[23rem] lg:p-[29px] lg:border text-sm lg:mt-[26px] md:w-[28rem] md:p-[29px] md:border md:text-sm md:mt-[26px] sm:w-[23rem] sm:p-[29px] sm:border sm:text-sm sm:mt-[26px]"></textarea>
                        <input type='button' value="SUBMIT" className='lg:mt-[20px] lg:w-[23rem] lg:font-bold lg:ml-[4px] lg:bg-[#00A3BA] lg:border-none lg:pl-[10px] lg:pt-[10px] lg:pb-[10px] lg:pr-[10px] lg:text-[16px] cursor-pointer lg:rounded-[27px] lg:hover:bg-[#00A3BA] lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[4px] sm:bg-[#00A3BA] sm:border-none sm:pl-[9.5rem] sm:mt-[20px] sm:text-[#fff] sm:pt-[10px] sm:pb-[10px] sm:pr-[9.5rem] sm:text-[16px] sm:rounded-[14px] sm:hover:bg-[#00A3BA] sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:mt-[25px] md:ml-[15px] md:bg-[#00A3BA] md:border-2 md:pl-[11rem] md:pt-[10px] md:pb-[10px] md:text-[#fff] md:pr-[11rem] md:text-[18px] md:rounded-[7px] md:hover:bg-[#00A3BA] md:hover:text-[#000000] md:transition md:ease-out md:duration-500'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
