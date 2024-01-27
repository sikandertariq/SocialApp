// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const signOutWithGoogle = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="navbar">
        <button onClick={signOutWithGoogle}>Sign out</button>
        <div className="navbar-brand">Beemar</div>
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
        </ul>
        <div className="  navbar-link">
        {user && (
        <>
          {user?.displayName}

          
          <img src={user?.photoURL || ""} alt="" className="ml-6 max-h-10" />
        </>
        )}
      </div>
      </div>
      
    </>
  );
};

export default Navbar;
