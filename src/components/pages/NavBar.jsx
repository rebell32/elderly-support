import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };

    return (
        <nav className="bg-yellow-300 p-4 fixed top-0 w-full z-20">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold">AgeWiseAid</div>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <a href="/signout" className="text-black font-semibold hover:text-gray-400">Sign Out</a>
                    <a href="/signup" className="text-black font-semibold hover:text-gray-400">Sign Up</a>
                    <a href="/" className="text-black font-semibold hover:text-gray-400">Home</a>
                    <a href="/volunteers" className='text-black font-semibold hover:text-gray-400'>Volunteer Signup</a>
                    <a href="/volunteer-list" className='text-black font-semibold hover:text-gray-400'>Volunteer List</a>
                    <a href="/chart.html" className='text-black font-semibold hover:text-gray-400'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/chart.html';
                        }}>Statistics</a>
                </div>
                {/* Hamburger Menu Icon */}
                <div className="md:hidden flex items-center space-x-4">
                    <HiMenuAlt3 onClick={handleNav} className="text-black cursor-pointer" size={25} />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={nav
                ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
                <ul className="flex flex-col items-center justify-center h-full">
                    <a href="/" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Home</a>
                    <a href="/hospitals" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Hospitals</a>
                    <a href="/hospices" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Hospices</a>
                    <a href="/nursinghomes" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Nursing Homes</a>
                    <a href="/companions" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Companions</a>
                    <a href="/pharmacies" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Pharmacies</a>
                    <a href="/volunteers" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Volunteer Signup</a>
                    <a href="/volunteer-list" className="font-bold text-2xl p-8" onClick={() => setNav(false)}>Volunteer List</a>
                    <a href="/chart.html" className="font-bold text-2xl p-8"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/chart.html';
                        }}>Statistics</a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


