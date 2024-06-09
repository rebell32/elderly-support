import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // await setDoc(doc(firestore, 'users', user.uid), { email: user.email, role: 'user' });
      window.location.href = "/"
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0"
    style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1533444273691-ebf51af8fd9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex:-1
          }}>
      </div>
      <div className="bg-yellow-300 p-8 rounded shadow-md w-80 ">
      <form onSubmit={signUp} className="flex flex-col items-center">
        <h1 className="text-black mb-4 text-2xl font-bold">Create your account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-48"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-48"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-48"
        />
        <button type="submit" className=" bg-gray-900 hover:bg-gray-700 text-white p-2 rounded w-full shadow-lg shadow-gray-500/50">
          Sign Up
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default SignUp;


// import React, { useState, useEffect } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, firestore } from '../../firebase';
// import { doc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Ensuring the body has no margin and overflow is hidden
//     document.body.style.margin = '0';
//     document.body.style.overflowX = 'hidden';
//   }, []);

//   const signUp = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // await setDoc(doc(firestore, 'users', user.uid), { email: user.email, role: 'user' });
//       window.location.href = "/";
//     } catch (error) {
//       console.error('Error signing up:', error);
//       setError('Failed to sign up. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen ">
//       <div 
//         className="fixed inset-0"
//         style={{ 
//           backgroundImage: "url('https://images.unsplash.com/photo-1533444273691-ebf51af8fd9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')", 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           zIndex: -1
//         }}
//       ></div>
//       <div className="flex items-center justify-center min-h-screen w-screen">
//         <div className="bg-yellow-300 bg-opacity-80 p-8 rounded shadow-md w-80">
//           <form onSubmit={signUp} className="flex flex-col items-center">
//             <h1 className="text-black mb-4 text-2xl font-bold">Create your account</h1>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mb-2 p-2 border border-gray-300 rounded w-48"
//             />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mb-2 p-2 border border-gray-300 rounded w-48"
//             />
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="mb-2 p-2 border border-gray-300 rounded w-48"
//             />
//             <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white p-2 rounded w-full shadow-lg shadow-gray-500/50">
//               Sign Up
//             </button>
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

