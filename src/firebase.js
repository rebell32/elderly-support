// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4lOkYBPbZteYYAZATv2_M3cu7QUZ3C90",
  authDomain: "log-in-log-out-af6df.firebaseapp.com",
  projectId: "log-in-log-out-af6df",
  storageBucket: "log-in-log-out-af6df.appspot.com",
  messagingSenderId: "757984287697",
  appId: "1:757984287697:web:1a60f898f95e2acb045ef0",
  measurementId: "G-XYJK2CPK73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };