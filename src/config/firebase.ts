// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6tOL9hdmshuXt-cm99wafptbB1aCHi1Y",
  authDomain: "react-app-1-85880.firebaseapp.com",
  projectId: "react-app-1-85880",
  storageBucket: "react-app-1-85880.appspot.com",
  messagingSenderId: "503312902791",
  appId: "1:503312902791:web:705c72e6f8b92fb163a622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();