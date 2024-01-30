import React from 'react'
import Img from "./hmm2.jpg"
import Img1 from "./pix.jpeg"

const About = () => {
  return (

    <section id="about" className='lg:relative sm:relative z-10'>
            <div className='lg:h-[30rem] z-30 relative lg:w-[26rem] lg:mt-[11rem] sm:h-[10rem] z-30 relative sm:w-[16rem] sm:ml-[1rem] sm:mt-[4.5rem] md:h-[80rem] z-30 relative md:w-[18rem] md:ml-[1rem] md:mt-[8rem]'>
            <div className='lg:h-[30rem] z-30 relative lg:w-[26rem] lg:ml-[17.5rem] lg:mt-[6.2rem] sm:h-[10rem] z-30 relative sm:w-[16rem] sm:ml-[11rem] sm:mt-[4.5rem] md:h-[80rem] z-30 relative md:w-[18rem] md:ml-[15.5rem] md:mt-[8rem]'>
                <img src={Img} className=' lg:h-[33rem] lg:w-[35rem] lg:rounded-[0.5rem] sm:h-[21rem] sm:w-[30rem] sm:rounded-[0.5rem] md:h-[23rem] md:w-[30rem] md:rounded-[0.5rem]' alt="pix" />
            </div> 
             <div className='lg:h-[31.5rem] lg:text-[#fff] lg:z-20 lg:w-[33rem] lg:bg-[#483C32] lg:absolute lg:left-[38.5rem] lg:top-[5rem] sm:h-[38.8rem] sm:z-20 sm:w-[22rem] sm:text-[#fff] sm:bg-[#483C32] sm:absolute sm:left-[8rem] sm:top-[33rem] md:h-[38.8rem] md:text-[#fff] md:z-20 md:w-[22rem] md:bg-[#483C32] md:absolute md:left-[13.2rem] md:top-[37.5rem]'>
                <div className='Poppins ptSerif lg:ml-[11rem] text-[#00A3BA] lg:mt-[3rem] lg:text-5xl sm:ml-[7rem] sm:mt-[1.5rem] sm:text-3xl md:ml-[7rem] md:mt-[1.5rem] md:text-3xl'>About Us</div>
                <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[14px] ptSerif sm:text-[17px] md:ml-[2.5rem] md:w-[16rem] md:m-[14px] ptSerif md:text-[17px]'>Hello, and welcome to <span className='lg:bg-gradient-to-r from-[#00A3BA] to-blue-500'>TIMELINE ENTERTAINMENT!</span> We,re a small, passionate team of creatives who dedicated to bringing joy and excitement to people's lives through our work.</p>
                <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[20px] ptSerif sm:text-[16px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[16px]'>Our Company was founded in 2007. We started out small, but our passion and hard work has helped us grow into the company we are today. We're proud to say that we've been able to bring smiles to the faces of people all over the world with our unique brand of entertainment.</p>
                <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[20px] ptSerif sm:text-[14px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[14px]'> Our team is made up of individuals with a wide range of backgrounds and talents.</p>
                <input type='button' value="LEARN MORE" className=' lg:ml-[7rem] lg:bg-[#00A3BA] lg:border-none lg:pl-[11px] lg:pt-[11px] lg:pb-[11px] lg:pr-[11px] lg:text-[14px] cursor-pointer lg:rounded-[7px] lg:hover:bg-cyan-500 lg:hover:text-[#000000] lg:transition lg:ease-out lg:duration-500 sm:ml-[7rem] sm:bg-[#00A3BA] sm:border-none sm:pl-[11px] sm:pt-[11px] sm:pb-[11px] sm:pr-[11px] sm:text-[14px] cursor-pointer sm:rounded-[7px] sm:hover:bg-cyan-500 sm:hover:text-[#000000] sm:transition sm:ease-out sm:duration-500 md:ml-[7rem] md:bg-[#00A3BA] to-blue-500 md:border-2 md:pl-[9px] md:pt-[9px] md:pb-[9px] md:pr-[9px] md:text-[14px] cursor-pointer md:rounded-[7px] md:hover:bg-cyan-500 md:hover:text-white md:transition md:ease-out md:duration-500'/>
            </div> 
             <div>
              <div className='lg:ml-[0.5rem] lg:text-[#000907] lg:absolute lg:top-[0.5rem] lg:left-[64rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[2rem] sm:absolute sm:top-[30rem] sm:left-[24rem] sm:h-[110px] sm:w-[110px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:lg:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:ml-[2rem] md:absolute md:top-[34rem] md:left-[29rem] md:h-[140px] md:w-[140px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500'></div>
            </div> 
            <div> 
                <div className='lg:h-[21rem] lg:w-[16rem] lg:border-[0.7rem] lg:absolute lg:top-[16.3rem] lg:left-[7.5rem] lg:z-30 sm:h-[13rem] sm:w-[11rem] sm:border-[0.7rem] sm:absolute sm:top-[14.5rem] sm:left-[8.5rem] sm:z-30 md:h-[16rem] md:w-[11rem] md:border-[0.7rem] md:absolute md:top-[14.5rem] md:left-[13rem] md:z-30'>
                    <img src={Img1} alt="pix" className='lg:h-[19.7rem] lg:w-[15rem] sm:h-[11.7rem] sm:w-[11rem] md:h-[14.6rem] md:w-[11rem]'/>
                </div>
            </div> 
             <div>
              <div className='lg:absolute lg:top-[31rem] lg:left-[2rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[1rem] sm:absolute sm:top-[23rem] sm:left-[5rem] sm:h-[110px] sm:w-[110px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:absolute md:top-[26rem] md:left-[8rem] md:h-[140px] md:w-[140px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500'>
                  
              </div>
             </div> 
            </div>
        
    </section>
  )
}

export default About

// className=' lg:h-[33rem] lg:w-[35rem] lg:rounded-[0.5rem] sm:h-[21rem] sm:w-[30rem] sm:rounded-[0.5rem] md:h-[23rem] md:w-[30rem] md:rounded-[0.5rem]' alt="pix"

// div one [section div]
//


// div two
// className='lg:h-[30rem] z-30 relative lg:w-[26rem] lg:ml-[19rem] lg:mt-[6.2rem] sm:h-[10rem] z-30 relative sm:w-[16rem] sm:ml-[11rem] sm:mt-[4.5rem] md:h-[80rem] z-30 relative md:w-[18rem] md:ml-[15.5rem] md:mt-[8rem]'>


/* <div className='lg:h-[30rem] z-30 relative lg:w-[26rem] lg:ml-[19rem] lg:mt-[6.2rem] sm:h-[10rem] z-30 relative sm:w-[16rem] sm:ml-[11rem] sm:mt-[4.5rem] md:h-[80rem] z-30 relative md:w-[18rem] md:ml-[15.5rem] md:mt-[8rem]'>
                <img src={Img} className=' lg:h-[33rem] lg:w-[35rem] lg:rounded-[0.5rem] sm:h-[21rem] sm:w-[30rem] sm:rounded-[0.5rem] md:h-[23rem] md:w-[30rem] md:rounded-[0.5rem]' alt="pix" />
            </div> */
            /* <div className='lg:h-[31.5rem] lg:z-20 lg:w-[32rem] lg:bg-gradient-to-r from-[#00A3BA] to-blue-500 lg:absolute lg:left-[40rem] lg:top-[5rem] sm:h-[38.8rem] sm:z-20 sm:w-[22rem] sm:bg-gradient-to-r from-[#00A3BA] to-blue-500 sm:absolute sm:left-[8rem] sm:top-[35rem] md:h-[38.8rem] md:z-20 md:w-[22rem] md:bg-gradient-to-r from-[#00A3BA] to-blue-500 md:absolute md:left-[13.2rem] md:top-[37.5rem]'>
                <div className='Poppins ptSerif lg:ml-[11rem] lg:mt-[3rem] lg:text-5xl sm:ml-[7rem] sm:mt-[1.5rem] sm:text-3xl md:ml-[7rem] md:mt-[1.5rem] md:text-3xl'>About Us</div>
                <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[14px] ptSerif sm:text-[17px] md:ml-[2.5rem] md:w-[16rem] md:m-[14px] ptSerif md:text-[17px]'>Hello, and welcome to <span className='lg:bg-gradient-to-r from-[#00A3BA] to-blue-500'>TIMELINE ENTERTAINMENT!</span> We,re a small,passionate team of creatives who dedicated to bringing joy and excitement to people's lives through our work.</p>
                <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[20px] ptSerif sm:text-[16px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[16px]'>Our Company was founded in 2007. We started out small, but our passion and hard work has helped us grow into the company we are today. We're proud to say that we've been able to bring smiles to the faces of people all over the world with our unique brand of entertainment.</p>
                <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[16rem] sm:m-[20px] ptSerif sm:text-[14px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[14px]'> Our team is made up of individuals with a wide range of backgrounds and talents.</p>
                <input type='button' value="LEARN MORE" className=' lg:ml-[7rem] lg:bg-gradient-to-r from-[#00A3BA] to-blue-500 lg:border-2 lg:pl-[9px] lg:pt-[9px] lg:pb-[9px] lg:pr-[9px] lg:text-[14px] cursor-pointer lg:rounded-[7px] lg:hover:bg-cyan-500 lg:hover:text-white lg:transition lg:ease-out lg:duration-500 sm:ml-[7rem] sm:bg-gradient-to-r from-[#00A3BA] to-blue-500 sm:border-2 sm:pl-[9px] sm:pt-[9px] sm:pb-[9px] sm:pr-[9px] sm:text-[14px] cursor-pointer sm:rounded-[7px] sm:hover:bg-cyan-500 sm:hover:text-white sm:transition sm:ease-out sm:duration-500 md:ml-[7rem] md:bg-gradient-to-r from-[#00A3BA] to-blue-500 md:border-2 md:pl-[9px] md:pt-[9px] md:pb-[9px] md:pr-[9px] md:text-[14px] cursor-pointer md:rounded-[7px] md:hover:bg-cyan-500 md:hover:text-white md:transition md:ease-out md:duration-500'/>
            </div> */
            /* <div>
              <div className='lg:ml-[0.5rem] lg:absolute lg:top-[1.5rem] lg:left-[65rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[2rem] sm:absolute sm:top-[32rem] sm:left-[24rem] sm:h-[110px] sm:w-[110px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:lg:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:ml-[2rem] md:absolute md:top-[34rem] md:left-[29rem] md:h-[140px] md:w-[140px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500'></div>
            </div> */
            /* <div> 
                <div className='lg:h-[21rem] lg:w-[16rem] lg:border-[0.7rem] lg:absolute lg:top-[16.3rem] lg:left-[9rem] lg:z-30 sm:h-[13rem] sm:w-[11rem] sm:border-[0.7rem] sm:absolute sm:top-[14.5rem] sm:left-[8.5rem] sm:z-30 md:h-[16rem] md:w-[11rem] md:border-[0.7rem] md:absolute md:top-[14.5rem] md:left-[13rem] md:z-30'>
                    <img src={Img1} alt="pix" className='lg:h-[19.7rem] lg:w-[15rem] sm:h-[11.7rem] sm:w-[11rem] md:h-[14.6rem] md:w-[11rem]'/>
                </div>
            </div> */
            /* <div>
              <div className='lg:absolute lg:top-[31rem] lg:left-[3.5rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[1rem] sm:absolute sm:top-[23rem] sm:left-[5rem] sm:h-[110px] sm:w-[110px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:absolute md:top-[26rem] md:left-[8rem] md:h-[140px] md:w-[140px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500'>
                  
              </div>
            // </div> */




            // <div className=''>
            //     <div className='relative lg:mt-[12rem] md:mt-[8rem] sm:mt-[8rem]'>
            //         <div className='lg:relative lg:z-30 md:relative md:z-30 sm:relative sm:z-30'>
            //           <img src={Img} className='lg:h-[34rem] lg:w-[24rem] lg:ml-[15rem] lg:mt-[6.2rem] lg:rounded-[0.5rem] sm:h-[28rem] sm:w-[19rem] sm:ml-[3rem] sm:mt-[3rem] sm:rounded-[0.5rem] md:h-[30rem] md:w-[23rem] md:ml-[4rem] md:rounded-[0.5rem]'  alt="pix" />
            //         </div>
            //           <div className='lg:h-[31.5rem] lg:z-20 lg:w-[32.3rem] lg:bg-gradient-to-r from-[#00A3BA] to-blue-500 lg:absolute lg:left-[34rem] lg:top-[5rem] sm:h-[34rem] sm:z-20 sm:w-[16rem] sm:bg-gradient-to-r from-[#00A3BA] to-blue-500 sm:absolute sm:left-[20rem] sm:top-[5rem] md:h-[39.4rem] md:z-20 md:w-[19.4rem] md:bg-gradient-to-r from-[#00A3BA] to-blue-500 md:absolute md:left-[25rem] md:top-[5rem]'> 
            //               <div className='Poppins ptSerif lg:ml-[9.5rem] lg:mt-[3rem] lg:text-5xl sm:ml-[4.5rem] sm:mt-[1.5rem] sm:text-3xl md:ml-[5.5rem] md:mt-[1.5rem] md:text-3xl'>About Us</div>
            //                   <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[13rem] sm:m-[7px] ptSerif sm:text-[14px] md:ml-[2.5rem] md:w-[16rem] md:m-[14px] ptSerif md:text-[17px]'>Hello, and welcome to <span className='lg:bg-gradient-to-r from-[#00A3BA] to-blue-500'>TIMELINE ENTERTAINMENT!</span> We,re a small,passionate team of creatives who dedicated to bringing joy and excitement to people's lives through our work.</p>
            //                   <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[13rem] sm:m-[7px] ptSerif sm:text-[14px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[16px]'>Our Company was founded in 2007. We started out small, but our passion and hard work has helped us grow into the company we are today. We're proud to say that we've been able to bring smiles to the faces of people all over the world with our unique brand of entertainment.</p>
            //                   <p className='lg:ml-[5.5rem] lg:w-[26rem] lg:m-[20px] ptSerif lg:text-[16px] sm:ml-[2.5rem] sm:w-[13rem] sm:m-[7px] ptSerif sm:text-[13px] md:ml-[2.5rem] md:w-[16rem] md:m-[20px] ptSerif md:text-[16px]'> Our team is made up of individuals with a wide range of backgrounds and talents.</p>
            //                   <input type='button' value="LEARN MORE" className=' lg:ml-[7rem] lg:bg-gradient-to-r from-[#00A3BA] to-blue-500 lg:border-2 lg:pl-[9px] lg:pt-[9px] lg:pb-[9px] lg:pr-[9px] lg:text-[14px] cursor-pointer lg:rounded-[7px] lg:hover:bg-cyan-500 lg:hover:text-white lg:transition lg:ease-out lg:duration-500 sm:ml-[3rem] sm:bg-gradient-to-r from-[#00A3BA] to-blue-500 sm:border-2 sm:pl-[8px] sm:pt-[8px] sm:pb-[8px] sm:pr-[8px] sm:text-[13px] cursor-pointer sm:rounded-[7px] sm:hover:bg-cyan-500 sm:hover:text-white sm:transition sm:ease-out sm:duration-500 md:ml-[4rem] md:bg-gradient-to-r from-[#00A3BA] to-blue-500 md:border-2 md:pl-[9px] md:pt-[9px] md:pb-[9px] md:pr-[9px] md:text-[14px] cursor-pointer md:rounded-[7px] md:hover:bg-cyan-500 md:hover:text-white md:transition md:ease-out md:duration-500'/>
            //           </div>
            //               <div className='lg:ml-[0.5rem] lg:absolute lg:top-[1.5rem] lg:left-[60rem] lg:h-[150px] lg:w-[150px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[2rem] sm:absolute sm:top-[2.5rem] sm:left-[30.4rem] sm:h-[100px] sm:w-[100px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:lg:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:ml-[2rem] md:absolute md:top-[2rem] md:left-[36rem] md:h-[130px] md:w-[130px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500'></div>

            //               <div> 
            //                   <div className='lg:h-[24.3rem] lg:w-[16rem] lg:border-[0.7rem] lg:absolute lg:top-[15rem] lg:left-[9rem] lg:z-30 sm:h-[13.5rem] sm:w-[11rem] sm:border-[0.7rem] sm:absolute sm:top-[17.5rem] sm:left-[3rem] sm:z-30 md:h-[19.3rem] md:w-[11rem] md:border-[0.7rem] md:absolute md:top-[22rem] md:left-[4.3rem] md:z-30'>
            //                     <img src={Img1} alt="pix" className='lg:h-[23rem] lg:w-[15rem] sm:h-[12.3rem] sm:w-[11rem] md:h-[18rem] md:w-[11rem]'/>
            //                   </div>
            //               </div>                  
                      
            //               <div className='lg:absolute lg:top-[31rem] lg:left-[3.5rem] lg:h-[170px] lg:w-[170px] lg:bg-[#ce905e] lg:rounded-[50%] lg:transition lg:ease-out lg:duration-500 lg:hover:bg-cyan-500 sm:ml-[0.5rem] sm:absolute sm:top-[27rem] sm:h-[100px] sm:w-[100px] sm:bg-[#ce905e] sm:rounded-[50%] sm:transition sm:ease-out sm:duration-500 sm:hover:bg-cyan-500 md:absolute md:top-[36rem] md:left-[1.3rem] md:h-[130px] md:w-[130px] md:bg-[#ce905e] md:rounded-[50%] md:transition md:ease-out md:duration-500 md:hover:bg-cyan-500'>
                  
            //           </div>
            //      </div>
              
            // </div> 