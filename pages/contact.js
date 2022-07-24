import React from 'react';
import contactStyle from '../styles/pages/contact.module.css'
import { FaAddressCard ,FaFacebookF} from "react-icons/fa";
import { AiOutlinePhone ,AiOutlineTwitter } from "react-icons/ai";
import { MdEmail} from "react-icons/md";
const contact = () => {
    return (
     <section>
        <div className={contactStyle.contactBannerBackground}>
          <div className="container mx-auto">
                <h1 className='text-[#34437A]  text-5xl font-bold'> contact us</h1>
           </div>
        </div>
        <div className="container mx-auto">
          <div className='grid grid-cols-2 my-28'>
          <div className="flex justify-center">
          <div className={contactStyle.contactInfo}>
            <h1 className='text-white pl-6 text-2xl font-bold pt-11'>contact information</h1>
            <h1 className='text-[#7E96EF] px-6 py-5 font-bold mb-16'>Fill up the form our team will get back to you within 24 hours</h1>
            <h1 className='flex'>
                <span className='text-[#7E96EF] mt-1 mr-9 ml-11 mb-11' ><AiOutlinePhone/></span>
                <span className='text-white'>94358340954257029358</span>
            </h1>
            <h1 className='flex'>
                <span className='text-[#7E96EF] mt-1 mr-9 ml-11 mb-11' ><MdEmail/></span>
                <span className='text-white'>xxxxx@gmail.com</span>
            </h1>
            <h1 className='flex'>
                <span className='text-[#7E96EF] mt-1 mr-9 ml-11 mb-11' ><MdEmail/></span>
                <span className='text-white'>location</span>
            </h1>
            <h1 className={`flex mt-20 ml-11 ${contactStyle.icon}`}>
                <p className='text-[#7E96EF] ' ><FaFacebookF/></p>
                <p className='text-[#7E96EF] ' ><AiOutlineTwitter/></p>
                <p className='text-[#7E96EF] ' ><FaFacebookF/></p>
        
            </h1>

         </div>
          </div>

         <div className={contactStyle.contactForm }>
         <h2 className=" text-[#34437A] text-4xl font-bold mt-20 mb-11">Contact Us</h2>
         <form className="">
                   <div className="mt-3">
                        <label className="">
                            <span className="font-bold ">Name</span>
                        </label>
                        <input className='' type="email" name="email" placeholder='Enter your name' />
                    </div>
                   <div className="mt-6">
                        <label className="">
                            <span className=" font-bold ">Email</span>
                        </label>
                        <input className='' type="email" name="password" placeholder='Enter your email' />
                    </div>
                   <div className="mt-6">
                        <label className="">
                            <span className="font-bold ">Phone</span>
                        </label>
                        <input className='' type="password" name="password" placeholder='Enter your phone number' />
                    </div>
                   <div className="mt-6">
                        <label className="">
                            <span className=" font-bold ">Message</span>
                        </label>
                        <textarea className='' type="password" name="password" placeholder='write message' />
                    </div>
                    <button className='font-bold  mt-11'>
                       Send
                    </button>
                   
                </form>
         </div>
          
          </div>
        </div>
     </section>
    );
};

export default contact;