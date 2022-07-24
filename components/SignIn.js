import React from 'react';

const SignIn = () => {
    return (
        <section className="my-28">
        <div className="container mx-auto">
          <div className='flex justify-center'>
          <div className='w-[500px] flex justify-center shadow-2xl'>
           <div className="w-[400px] my-11">
                <h2 className=" text-center text-[#34437A] text-3xl font-bold mb-11">SignIn</h2>
                <form >
                   <div className="mt-6">
                        <label className="">
                            <span className="text-[#34437A] font-bold ">Email</span>
                        </label>
                        <input className=' w-full border  mt-3 p-1' type="email" name="email" placeholder='enter your email' />
                    </div>
                   <div className="mt-6">
                        <label className="">
                            <span className="text-[#34437A] font-bold ">Password</span>
                        </label>
                        <input className=' w-full border   mt-3 p-1' type="password" name="password" placeholder='password' />
                    </div>
                    <input  className='btn w-full text-[white] pt-2 pb-2 bg-[#34437A] font-bold  mt-11' type="submit" value="SignIn" />
                </form>
            </div>
           </div>
          </div>
        </div>
      
    </section>
    );
};

export default SignIn;