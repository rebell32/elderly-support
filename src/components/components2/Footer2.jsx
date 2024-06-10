import React from 'react'

const Footer2 = () => {
    return (
    <div classname='w-full mt-24 text-gray-300 py-2 px-2 bg-yellow-900'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-3 md:grid-cols-5 border-b-2 border-fray-600 py-8 px-4 bg-yellow-700'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Facilities</h6>
                <ul>
                    <li className='py-1'>Hospitals</li>
                    <li className='py-1'>Hospices</li>
                    <li className='py-1'>Nursing Homes</li>
                    <li className='py-1'>Companions</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Helplines</h6>
                <ul>
                    <li className='py-1'>Ambulance Services - 108/102</li>
                    <li className='py-1'>Elderly Abuse - 1090</li>
                    <li className='py-1'>National Helpline - 14567</li>
                    <li className='py-1'>Legal Helpline - 15100</li>
                </ul> 
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>Latest Updates about the Site and various Support sent to your inbox.</p>
                <form className='flex flex-col sm:flex-row'> 
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email...' />
                    <button className='p-2 mb-4 rounded-md bg-black text-white'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1200px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py4'>2024 AgeWiseAid, LLC. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer2;