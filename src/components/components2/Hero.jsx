import React from 'react'

const Hero = () => {
    return(
        <div className='w-full h-screen relative'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="firstpic.jpeg" alt="/"/>
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white '>
                <div className='absolute md:left-[10%] max-w-[1100px] m-auto p-4'>
                    <h3 className='justify-center'>All Inclusive</h3>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Senior Simplicity</h1>
                    <h2 className='text-3xl md:text-4xl drop-shadow-1xl'>Facilities Catered to Elderly</h2>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Aut vel quibusdam maiores.</p>
                    <a href ='/signin' className='bg-white text-black border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Log In </a>
                    <a href ='/signup' className='bg-black text-white border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Sign Up </a>
                    <a href='/signout' className='bg-white text-black border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Sign Out </a>                </div>
            </div>

        </div>
    );
};

export default Hero;