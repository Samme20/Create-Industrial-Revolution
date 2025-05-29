import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Sidan hittades inte</h2>
      <p>Sidan du letar efter finns inte eller har flyttats.</p>
      <Link to="/" className="btn btn-primary">Gå till startsidan</Link>
    </div>
  );
};

export default NotFound;