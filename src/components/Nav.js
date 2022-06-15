import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <h1 id="logoHeader">Math Magicians</h1>
    <nav>
      <Link to="/" className="navLink">Home</Link>
      <Link to="/calculator" className="navLink">Calculator</Link>
      <Link to="/quote" className="navLink">Quote</Link>
    </nav>
  </header>
);

export default NavBar;
