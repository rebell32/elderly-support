import React from 'react'

const Companion2 = () => {
    return(
        <div className='max-w-[1200px] h-[650px] m-auto bg-yellow-100 my-10 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                <h3 className='text-5xl md:text-6xl font-bold'>Companions for your Aid</h3>
                <p className='pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Culpa quis sit voluptatum ratione maiores iusto.
                </p>
            </div>

            <div className='grid grid-cols-2 grid-rows-4 col-span-2 h-[100vh]'>
                <img className='row-span-2 object-cover w-full h-[80%] p-2' src="co3.jpg" alt="/" />
                <img className='row-span-4 object-cover w-full h-[65%] p-2' src="companion-long.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-[60%] p-2' src="co2.jpg" alt="/" />
            </div>
        </div>

    )
}

export default Companion2;