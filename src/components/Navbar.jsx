import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
    <span className="logo-symbol">🧠</span> DevsLanding
    </h1>
      <ul>
        {/*<li><a href="#home">Home</a></li>*/}
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experiments">Experiments</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
