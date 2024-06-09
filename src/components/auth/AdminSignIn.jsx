import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Predefined admin credentials
  const predefinedAdmin = {
    email: "admin@example.com",
    password: "admin123",
    uid:"admin001"
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log('Sign In Attempted');
    if (email === predefinedAdmin.email && password === predefinedAdmin.password) {
      setError('');
      console.log('Admin credentials are correct. Navigating to dashboard.');
      Cookies.set("_user", JSON.stringify({ uid: predefinedAdmin.uid, isLoggedIn: true }));
        navigate('/admindashboard');
    } else {
      setError('Invalid admin credentials');
      console.log('Invalid admin credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-sky-300 p-8 rounded shadow-md w-80">
        <form onSubmit={signIn} className="flex flex-col items-center">
          <h1 className="text-black text-xl mb-4 text-2x1 font-bold">Admin Log In</h1>
          <input
            type="email"
            placeholder="Enter your admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-48"
          />
          <input
            type="password"
            placeholder="Enter your admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-48"
          />
          <button type="submit" className="bg-black text-white p-2 rounded w-full">
            Log In
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
