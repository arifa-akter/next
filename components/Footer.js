import React from 'react';
import Image from 'next/image'
import { FaAddressCard ,FaFacebookF} from "react-icons/fa";
import { AiOutlinePhone ,AiOutlineTwitter } from "react-icons/ai";
import { MdEmail} from "react-icons/md";

import rice from '../public/images/rice.jpg'
import footer from '../styles/components/footer.module.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    
    // bg-[#090e1dec] 

    return (
       <section className="py-11  bg-[#34437A]">
           <div className="container mx-auto">
              <div className = "grid lg:grid-cols-4 md:grid-cols-1 gap-4 mb-11">
                <div className={footer.logoBorder} >
                    <h1 className="text-white text-3xl font-bold"><i>B</i>E</h1>
                    <h2 className="text-[13px] pb-5 text-amber-400">Barik Enterprice</h2>
                    <p className="text-white  pb-5">
                        Lorem ipsum dolor sitamet consectetur adipisicing elit. 
                        Illo ratione optio, cumque error vero voluptates fugit 
                        necessitatibus accusantium voluptatum earum neque eaque 
                    </p>
                </div>
                <div className={footer.footerBorder}>
                  <div>
                  <h1 className="text-white text-2xl font-medium pb-5">Explore</h1>
                    <h1 className="text-white font-medium pb-5">About us</h1>
                    <h1 className="text-white font-medium pb-5">Meet our Time</h1>
                    <h1 className="text-white font-medium pb-5">Contact us</h1>
                    <h1 className="text-white font-medium pb-5">Service</h1>
                    <h1 className="text-white font-medium pb-5">Service</h1>
                  </div>
                </div>
                <div>
                <h1 className="text-white text-2xl font-medium pb-5">Recent post</h1>
                <div className = "grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center" style={{width:'120px' , height:'100px'}}>
                        <Image src={rice} className=" rounded-tl-lg" style={{width:'100%'}} alt=""></Image>
                    </div>
                    <div>
                        <p className="text-white">Lorem ipsum dolor
                        Lorem ipsum dolor
                        Lorem ipsum dolor
                        </p>
                        <h1 className="text-amber-400">3 january 2022</h1>
                    </div>
                </div>
                <div className = "grid grid-cols-2 gap-3">
                    <div className="flex items-center" style={{width:'120px' , height:'100px'}}  >
                        <Image src={rice} className=" rounded-tl-lg" style={{width:'100px'}} alt=""></Image>
                    </div>
                    <div>
                        <p className="text-white">Lorem ipsum dolor
                        Lorem ipsum dolor
                        Lorem ipsum dolor
                        </p>
                        <h1 className="text-amber-400">3 january 2022</h1>
                    </div>
                </div>
                <div>
                    
                </div>
                </div>
                <div className={footer.footerContact}>
                <h1 className="text-white text-2xl font-medium pb-5">Contact Info</h1>
                <div className='mb-3 flex'>
               <span className={`text-[19px] text-white ${footer.icon}`}> <FaAddressCard/></span>
                 <span>
                 <span className='font-bold text-[19px] text-white'> Address:</span>
                 <span className="ml-2 text-white">address 123/ mohamondpur dhaka -1207 </span>
                 </span>
                </div>
                <div className='mb-3 flex '>
                <span className={`text-[19px] text-white ${footer.icon}`}> <MdEmail/></span>
                <span>
                <span className='font-bold text-[19px] text-white'>Email:</span>
                <span className="ml-2 text-white">xxxx@gmail.com </span>
                </span>
                </div>
                <div className='mb-3 flex'>
                <span className={` text-[19px] text-white ${footer.icon}`}> <AiOutlinePhone/></span>
              <span>
              <span className='font-bold text-[19px] text-white'>Phone:</span>
                <span className="ml-2 text-white">01905430957546 </span>
              </span>
                </div>

                <div className={footer.iconStyle}>
                    <span><FaAddressCard/></span>
                    <span><AiOutlineTwitter/></span>
                    <span><AiOutlinePhone/></span>
                  
                </div>
                </div>
             
              </div>
              <hr></hr>
              <div>
                <h1 className='text-center pt-6 text-white'>&copy;<span className="text-amber-400"> copyright</span> mill project /<span className="text-amber-400"> {year}</span></h1>
              </div>
           </div>
           
       </section>
    );
};

export default Footer;