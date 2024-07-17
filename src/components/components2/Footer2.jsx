import React from 'react'

const Footer2 = () => {
    return (
    <div classname='w-full mt-24 text-gray-300 py-2 px-2 bg-yellow-900'>
        <div className='w-full mx-auto grid grid-cols-2 md:grid-cols-3 border-b-2 border-fray-600 py-8 px-4 bg-yellow-700'>
            <div classname="justify-center">
                <h6 className='font-bold uppercase pt-2'>Facilities</h6>
                <ul className='flex flex-col space-y-3 col-span-2 md:col-span-1 md:text-center'>
                    <li>
                    <a href="/hospitals" className="p-8 flex-column py-1  hover:text-blue-600" >Hospitals</a>
                    </li>
                    <li>
                    <a href="/hospices" className="p-8 flex-column py-1  hover:text-blue-600" >Hospices</a>
                    </li>
                    <li>
                    <a href="/nursinghomes" className="p-8 flex-column py-1  hover:text-blue-600">Nursing Homes</a>
                    </li>
                    <li>
                    <a href="/companions" className="p-8 flex-column py-1  hover:text-blue-600">Companions</a>
                    </li>
                    <li>
                    <a href="/pharmacies" className="p-8 flex-column py-1  hover:text-blue-600">Pharmacies</a>
                    </li>
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
            <div className='col-span-2 md:col-span-1 md:text-centre ml:auto'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>Latest Updates about the Site and various Support sent to your inbox.</p>
                <p className='py-1'>Email us on</p>
                <p className='hover:text-blue-700'>AgeWiseAid@gmail.com</p>
            </div>
        </div>

        <div className='flex flex-col max-w-[1200px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py4'>2024 Age Wise Aid, LLC. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer2;

// import React from 'react';

// const Footer2 = () => {
//     return (
//         <div className='w-full mt-24 text-gray-300 py-2 px-2 bg-yellow-900'>
//             <div className='w-full mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-600 py-8 px-4 bg-yellow-700'>
//                 <div className='justify-center col-span-2 md:col-span-1 md:text-center'>
//                     <h6 className='font-bold uppercase pt-2'>Facilities</h6>
//                     <ul className='flex flex-col space-y-3'>
//                         <li>
//                             <a href="/hospitals" className="p-8 flex-column py-1 hover:text-blue-600">Hospitals</a>
//                         </li>
//                         <li>
//                             <a href="/hospices" className="p-8 flex-column py-1 hover:text-blue-600">Hospices</a>
//                         </li>
//                         <li>
//                             <a href="/nursinghomes" className="p-8 flex-column py-1 hover:text-blue-600">Nursing Homes</a>
//                         </li>
//                         <li>
//                             <a href="/companions" className="p-8 flex-column py-1 hover:text-blue-600">Companions</a>
//                         </li>
//                         <li>
//                             <a href="/pharmacies" className="p-8 flex-column py-1 hover:text-blue-600">Pharmacies</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='justify-center col-span-2 md:col-span-1 md:text-center'>
//                     <h6 className='font-bold uppercase pt-2'>Helplines</h6>
//                     <ul>
//                         <li className='py-1'>Ambulance Services - 108/102</li>
//                         <li className='py-1'>Elderly Abuse - 1090</li>
//                         <li className='py-1'>National Helpline - 14567</li>
//                         <li className='py-1'>Legal Helpline - 15100</li>
//                     </ul> 
//                 </div>
//                 {/* <div className='col-span-2 md:pt-2 md:text-center'>
//                     <p className='font-bold uppercase'>Subscribe to our newsletter</p>
//                     <p className='py-4'>Latest Updates about the Site and various Support sent to your inbox.</p>
//                     <form className='flex flex-col sm:flex-row justify-center'> 
//                         <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email...' />
//                         <button className='p-2 mb-4 rounded-md bg-black text-white'>Subscribe</button>
//                     </form>
//                 </div> */}
//             </div>

//             <div className='flex flex-col max-w-[1200px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
//                 <p className='py-4'>2024 Age Wise Aid, LLC. All rights reserved</p>
//             </div>
//         </div>
//     );
// }

// export default Footer2;
