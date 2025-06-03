import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/LogoRAW_noBG.png" alt="Incomatic" className="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/join" className="nav-link">Join</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/earn" className="nav-link">Earn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;