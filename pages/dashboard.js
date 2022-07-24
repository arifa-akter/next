import React from 'react';
import DashSideMenu from '../components/dashComponent/DashSideMenu';

const dashboard = () => {
    return (
   <section>
       <div className='grid grid-cols-1'>
        <div className='static'>
           <DashSideMenu></DashSideMenu>
        </div>       
       </div>
   </section>
    );
};

export default dashboard ;