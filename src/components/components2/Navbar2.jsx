import React, {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar2 = () =>{
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if(!nav){
            document.body.style.overflow = 'hidden'  
        }
        else {
            document.body.style.overflow = 'scroll'
        }
    };

    return(
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-4xl z-20'>Menu</h1> 
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25}/>

            <div className={nav 
                ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>

                <ul className='flex flex-col fixed w-full h-full items-center justify center'>
                    <a href='/' className='font-bold text-2xl p-8'>Home</a>
                    <a href="/hospitals" className='font-bold text-2xl p-8'>Hospitals</a>
                    <a href="/hospices" className='font-bold text-2xl p-8'>Hospices</a>
                    <a href="/nursinghomes" className='font-bold text-2xl p-8'>Nursing Homes</a>
                    <a href="/companions" className='font-bold text-2xl p-8'>Companions</a>
                    <a href="/pharmacies" className='font-bold text-2xl p-8'>Pharmacies</a>
                    <a href="/volunteers" className='font-bold text-2xl p-8'>Volunteer Signup</a>
                    
                </ul> 
            </div>   
        </div>
    );
};

export default Navbar2;