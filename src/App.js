// import React, { useState, useEffect } from 'react';
// import { auth, firestore } from './firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import AdminDeletion from './components/pages/AdminDeletion';
// import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';

// const App = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUserData = async (user) => {
//       try {
//         const userDoc = await getDoc(doc(firestore, 'users', user.uid));
//         setCurrentUser({ uid: user.uid, email: user.email, role: userDoc.data().role });
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Failed to fetch user data. Please check your network connection.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         await fetchUserData(user);
//       } else {
//         setCurrentUser(null);
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Router>
//       <nav className="bg-gray-800 p-4">
//         <ul className="flex space-x-4">
//           <li>
//             <Link to="/" className="text-white">Home</Link>
//           </li>
//           <li>
//             <Link to="/signup" className="text-white">Sign Up</Link>
//           </li>
//           <li>
//             <Link to="/signin" className="text-white">Sign In</Link>
//           </li>
//           {currentUser && currentUser.role === 'admin' && (
//             <li>
//               <Link to="../pages/AdminDeletion" className="text-white">Delete Admin</Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="../pages/AdminDeletion" element={currentUser && currentUser.role === 'admin' ? <AdminDeletion currentUser={currentUser} /> : <p className="text-red-500 mt-2">Access Denied</p>} />
//         <Route path="/" element={<h1 className="text-center mt-10">Welcome to the Home Page</h1>} />
//       </Routes>
//       {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//     </Router>
//   );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignIn from './components/auth/SignIn';
// import SignUp from './components/auth/SignUp';
// import HomePage from './components/pages/Homepage';
// import AdminDashboard from './components/pages/AdminDashboard';
// import Navbar from './components/pages/NavBar';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <div className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="../pages/AdminDashboard" element={<AdminDashboard />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }


import './App.css';
import SignIn from './components/auth/SignIn';
import AuthDetails from './components/AuthDetails';
import SignUp from './components/auth/SignUp';
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/NavBar';
import AdminSignIn from './components/auth/AdminSignIn';
import AdminDashboard from './components/pages/AdminDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
      <Routes>
             <Route path="/" element={<Homepage />} />
             <Route path="/signin" element={<SignIn />} />
             <Route path="/adminsignin" element={<AdminSignIn />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/admindashboard" element={<AdminDashboard/>} /> 
             <Route path="/authdetails" element={<AuthDetails />} />     
             </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;


