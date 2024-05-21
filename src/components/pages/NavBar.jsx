import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-sky-300 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold">Elderly Support Website</div>
                <div className="space-x-4">
                    <Link to="/signin" className="text-black hover:text-black-600">Sign In</Link>
                    <Link to="/signup" className="text-black hover:text-black-600">Sign Up</Link>
                    <Link to="/" className="text-black hover:text-black-600">Home</Link>
                    <Link to="/adminsignin" className="text-black hover:text-gray-400">Admin Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
