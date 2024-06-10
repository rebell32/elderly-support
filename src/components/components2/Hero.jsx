import React from 'react'

const Hero = () => {
    return(
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full h-screen object-cover' src="firstpic.jpeg" alt="/"/>
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Facilities Catered to Elderly</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Aut vel quibusdam maiores excepturi. 
                        Et neque unde iure esse dolorum aut.</p>
                    <a href ='/signin' className='bg-white text-black border-black mr-4 hover:shadow-xl p-2 rounded-lg'> Log In </a>
                    <a href ='/signup' className='bg-black text-white border-black hover:shadow-xl p-2 rounded-lg'> Sign Up </a>
                </div>
            </div>

        </div>
    );
};

export default Hero;