import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-yellow-300 p-4 fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold">SeniorSimplicity</div>
                <div className="space-x-4">
                    <a href="/signout" className="text-black font-semibold hover:text-gray-400">Sign Out</a>
                    <a href="/signup" className="text-black font-semibold hover:text-gray-400">Sign Up</a>
                    <a href="/" className="text-black font-semibold hover:text-gray-400">Home</a>
                    <a href="/statistics" className="text-black font-semibold hover:text-gray-400">Statistics</a>
                    <a href="/volunteer-list" className='text-black font-semibold hover:text-gray-400'>Volunteer List</a>
                    <a href="/volunteers" className='text-black font-semibold hover:text-gray-400'>Volunteer Signup</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
