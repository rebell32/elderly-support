import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setError('');
      })
      .catch((error) => {
        setError('Wrong user Credentials entered');
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-sky-300 p-8 rounded shadow-md w-80">
      <form onSubmit={signIn} className="flex flex-col items-center">
        <h1 className="text-black mb-4 text-xl font-bold">Log In </h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-48"
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-48"
        ></input>
        
        <button type="submit" className="text-white bg-black p-2 border border-gray-300 rounded w-full">Log In</button>
        {error && <p className="text-red-500 mt-2>">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default SignIn;