import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    // Ensuring the body has no margin and overflow is hidden
    document.body.style.margin = '0';
    document.body.style.overflowX = 'hidden';
  }, []);


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setError('');
        const cookie = Cookies.set("_user", JSON.stringify({ uid: userCredential.user.uid, isLoggedIn: true }));
        console.log(cookie)
        if(cookie)
          navigate("/");
      })
      .catch((error) => {
        setError('Wrong user Credentials entered');
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen "> 
    <div 
        className="fixed inset-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1533444273691-ebf51af8fd9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      ></div>
      <div className="bg-yellow-300 p-8 rounded shadow-xl w-80 ">
        <form onSubmit={signIn} className="flex flex-col items-center">
          <h1 className="text-black mb-4 text-xl font-bold ">Log In </h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-48 "
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-48"
          ></input>

          <button type="submit" className="text-white bg-gray-900 hover:bg-gray-700 p-2 border border-gray-300 rounded w-full">Log In</button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;




// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState, useEffect } from "react";
// import { auth } from "../../firebase";
// import Cookies from 'js-cookie';
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Ensuring the body has no margin and overflow is hidden
//     document.body.style.margin = '0';
//     document.body.style.overflowX = 'hidden';
//   }, []);

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//         setError('');
//         Cookies.set("_user", JSON.stringify({ uid: userCredential.user.uid, isLoggedIn: true }));
//         navigate("/signin");
//       })
//       .catch((error) => {
//         setError('Wrong user credentials entered');
//         console.log(error);
//       });
//   };

//   // Check if the user is already logged in and redirect to home
//   useEffect(() => {
//     const userCookie = Cookies.get("_user");
//     if (userCookie && JSON.parse(userCookie).isLoggedIn) {
//       navigate("/");
//     }
//   }, [navigate]);

//   return (
//     <div className="flex items-center justify-center min-h-screen"> 
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
//       <div className="bg-yellow-300 bg-opacity-80 p-8 rounded shadow-xl w-80">
//         <form onSubmit={signIn} className="flex flex-col items-center">
//           <h1 className="text-black mb-4 text-xl font-bold">Log In </h1>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mb-2 p-2 border border-gray-300 rounded w-48"
//           ></input>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mb-2 p-2 border border-gray-300 rounded w-48"
//           ></input>

//           <button type="submit" className="text-white bg-gray-900 hover:bg-gray-700 p-2 border border-gray-300 rounded w-full">Log In</button>
//           {error && <p className="text-red-500 mt-2">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
