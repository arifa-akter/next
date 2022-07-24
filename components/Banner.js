import React from 'react';
import banner from '../styles/components/banner.module.css'
const Banner = () => {
    return (
      <section className={banner.bannerBackground}>
        <div className="container mx-auto">
          <div className={banner.banner}>
          <h1 className='text-[#34437A]  text-5xl font-bold'> Rice Mill Website</h1>
        <p className='font-bold'> Lorem ipsum dolor sit 
        amet consectetur adipisicing elit. Expedita quia dolores similique 
        ab aut explicabo, illo quos magni necessitatibus quidem fugiat 
        aspernatur obcaecati excepturi 
        unde accusantium! Reiciendis mollitia nobis atque!</p>

        <button>Explore more</button>
          </div>
        </div>
      </section>
    );
};

export default Banner;