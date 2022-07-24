 import React from 'react';
 import Link from 'next/link'
 import dashboard from '../../styles/components/dashBoard.module.css'
const DashSideMenu = () => {
     return (
      <div className='absolute top-0 left-0 z-50 w-[200px] h-screen bg-[#34437A]' >
      <div className='mx-5 '>
      <div className={dashboard.logoBorder}>     
       <p>
      <Link href='/'>
      <h1 className="text-xl font-bold text-[white]"><i>B</i>E
           <span>Barik Enterprice</span>
        </h1>
      </Link>
      </p>
      </div>
    

      <div className={dashboard.logoBorder}>
        <ul><Link href='/buyer'><li>buyer-list</li></Link>  
            <Link href='/buyer/new'><li>new </li></Link>  
            
        </ul>

      </div>
      </div>
      </div>
     );
 }
 export default DashSideMenu;