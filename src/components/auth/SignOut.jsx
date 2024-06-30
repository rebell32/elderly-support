import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'

const SignOut = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        Cookies.remove("_user");// removes cookies
        setAuthUser(null);//clear authUser state
        Navigate("/signin");
      })
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button className ="text-white bg-gray-900 hover:bg-gray-700 p-2 border border-gray-300 rounded left-4" onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default SignOut;