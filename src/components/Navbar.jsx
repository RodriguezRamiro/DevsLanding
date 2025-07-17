import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <span className="logo-symbol">🧠</span> DevsLanding
      </h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experiments">Experiments</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* 🌗 Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}

export default Navbar;
