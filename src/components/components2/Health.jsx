import React from 'react';

const Health = () => {
    return (
        <div className='max-w-[1200px] m-auto pt-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[100vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="health long.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="nursing_home.jpeg" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="hospice2.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="health long2.jpg" alt="/" />
            </div>

            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'> Healthcare Facilities </h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, deserunt.</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officiis, eius, quis nostrum molestias magnam amet modi ea odio enim eos consequuntur, earum laborum sequi corporis. Tempore a officiis omnis.</p>
            </div>
        </div>
    );
};

export default Health;