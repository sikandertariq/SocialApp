// Login.tsx

import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import "../css/login.css"; // Import the CSS file

export const Login = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="items-center justify-center m-12 flex">
      <h1 className="">Login Page</h1>
      <button
        className="m-12 "
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
};
