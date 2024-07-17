import React from 'react'

const Hero = () => {
    return(
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="firstpic.jpeg" alt="/"/>
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-start text-left text-white p-4 md:p-10'>
                <div className='max-w-[1100px] w-full'>
                    <h3 className='mb-2'>All Inclusive</h3>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl mb-4'>Age Wise Aid</h1>
                    <h2 className='text-3xl md:text-4xl drop-shadow-1xl mb-3'>Facilities Catered to Elderly</h2>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl mb-4'>Your Guide to Health by Your Side</p>
                    <a href='/signin' className='bg-white text-black border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Log In </a>
                    <a href='/signup' className='bg-black text-white border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Sign Up </a>
                    <a href='/signout' className='bg-white text-black border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Sign Out </a>
                </div>
            </div>
        </div>
    );
};
export default Hero;