import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar ">
      <div className="navbar-brand ">Beemar</div>
      <ul className="navbar-nav">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
