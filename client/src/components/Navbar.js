import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Industriell Revolution</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Hem</Link>
          </li>
          <li className="nav-item">
            <Link to="/examples" className="nav-link">Exempel</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Om</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;