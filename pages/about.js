import React from 'react';
import Image from 'next/image'
import About from '../styles/pages/about.module.css'
import ab from '../public/images/ab.jpg'
const about = () => {
    return (
   <section>
        <div className={About.aboutBannerBackground}>
         <div className="container mx-auto">
         <h1 className='text-[#34437A]  text-5xl font-bold'> About us</h1>
         </div>
       </div>
       <div className='container mx-auto'>
       <div className="grid grid-cols-2 my-28">
           
             <div  className='flex justify-center' style={{width:'100%'}}>
              <Image src={ab} alt='' ></Image>
              </div>
              <div>
              <h1 className='text-[#34437A] mb-5 text-2xl font-bold'> About us</h1>
              <h1 className="text-[#7E96EF] font-bold text-5xl mb-5">welcome to our rice mil industry</h1>
              <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Incidunt dolorum, minima exercitationem beatae aliquam nesciunt
                 nihil non facere omnis similique, aspernatur qui earum cumque 
                 soluta repellat vitae commodi quas tempore.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Incidunt dolorum, minima exercitationem beatae aliquam nesciunt
                 nihil non facere omnis similique, aspernatur qui earum cumque 
                 soluta repellat vitae commodi quas tempore.</p>
              </div>
            </div>
       </div>
   </section>
    );
};

export default about;