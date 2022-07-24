import React, { useState }  from 'react';
import Link from  'next/link'
import Image from 'next/image'
// import { FaSortDown } from "react-icons/fa";
import navbar from '../styles/components/navbar.module.css'
import profile from '../public/images/profile.png'

const Navbar = () => {
    const[open ,setOpen]=useState(false)

    const [dashboard ,setDashboard]=useState(false)
    const [home , setHome]= useState(false)
    // if(dashboard === true){
    //    setHome(false)
    // }
    console.log(dashboard)
    return (
        <section className={navbar.navbarFixed}> 
       
        <section className='z-90 bg-[#ffffff]'>          
           <div className='first-header'>
           <div className='container mx-auto flex justify-between items-center  '>
        
       <div className={navbar.logoBorder}>
       
        <p>

       <Link href='/'>
       <h1 className="text-xl font-bold text-[#34437A]"><i>B</i>E
            <span>Barik Enterprice</span>
         </h1>
       </Link>
         
       </p>
     
       </div>

       <div className="">
            <div onClick={()=>setOpen(!open)} className='md:hidden pr-2'>
               {open?<i className="fa fa-times text-[] text-2xl" aria-hidden="true"></i>
               :<i className="fa fa-bars text-[green] text-2xl" aria-hidden="true"></i>}
            </div>
            <ul className={`md:flex font-sans font-medium duration-500 
            ease-in md:static w-full absolute ${open?'top-[72px] right-0 ':'top-[-300px] right-0 '}`}>
                {dashboard?<>
                </>:<>
                <Link href="/">
                <a ><li className='md:mr-5  text-center md:py-0 p-2 text-[#34437A] border-y-2 md:border-y-0'>Home</li></a>
                </Link>
                <Link href="/about">
                <a ><li className='md:mr-5  text-center md:py-0 p-2 text-[#34437A] border-y-2 md:border-y-0'>About</li></a>
                </Link>
                <Link href="/contact">
                <a ><li className='md:mr-5  text-center md:py-0 p-2 text-[#34437A] border-y-2 md:border-y-0'>Contact us</li></a>
                </Link>
                <Link href="/dashboard">
                <a><li onClick={()=>setDashboard(!dashboard)} className='md:mr-5  text-center md:py-0 p-2 text-[#34437A] border-y-2 md:border-y-0'>Dashboard</li></a>
                </Link>
                
                </>}   
                {/* <li className='flex ' >
                <div className={navbar.profileLogo}style={{ width:'30px' , height:'30px'}}>
                <Image src={profile} style={{ width:'30px' , height:'30px'}}></Image>
                </div>
                <span className='text-white pt-1 pl-2'>jahir </span>
                <span className='text-white pt-2 pl-2'><FaSortDown/></span>
                </li> */}
                <li className='flex ' >
                <div className={navbar.profileLogo}style={{ width:'30px' , height:'30px'}}>
                <Image src={profile} style={{ width:'30px' , height:'30px'}} alt=''></Image>
                </div>
                <Link href='/signin'><a className='text-[#34437A] pt-1 pl-2'>Signin</a></Link>
                </li>
            </ul>  
        </div>
    </div>
 </div>
 </section>
</section>
    );
};

export default Navbar;