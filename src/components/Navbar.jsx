import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { ReactComponent as DevIcon } from '../assets/programmer-software-engineer-coder-software-developer-svgrepo-com.svg';
import '../styles/Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleNav = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
  <span className="logo-symbol"><DevIcon className="dev-svg" /></span>
  {/* Reserve width container */}
  <span className="animated-title-wrapper">
    <span className="animated-title">DevsLanding</span>
  </span>
</h1>

{/* 🍔 Hamburger button */}
<button
        className="hamburger"
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
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
