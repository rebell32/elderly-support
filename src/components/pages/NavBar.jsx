import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-yellow-300 p-4 fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold">SeniorSimplicity</div>
                <div className="space-x-4">
                    <Link to="/signout" className="text-black hover:text-black-600">Sign Out</Link>
                    <Link to="/signup" className="text-black hover:text-black-600">Sign Up</Link>
                    <Link to="/" className="text-black hover:text-black-600">Home</Link>
                    <Link to="/statistics" className="text-black hover:text-gray-400">Statistics</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
