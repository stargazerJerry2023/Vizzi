import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="brand-name">Vizzi</h1>
      <ul>
        
        <li><Link to="/Login">Login/Signup</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
