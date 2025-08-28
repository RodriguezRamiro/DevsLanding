import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-left">
        © 2025 Ramiro Rodriguez Alvarez
      </div>

      <div className="footer-center">
        <span className="version">
          Built with <span className="tech">React + Node</span> — v1.0.0
        </span>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/RodriguezRamiro/DevsLanding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://linkedin.com/in/ramiro-rodriguez-3a287a328"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
