import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import packageJson from "../../package.json";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = packageJson.version;

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-left">
      <h3 className="footer-logo">RodriguezTech Studios&trade;</h3>
      <p>RodriguezTech.&reg; All rights reserved {currentYear} </p>
      </div>

      <div className="footer-center">
        <span className="version">
          Built with <span className="tech">React + Node</span> — v{version}
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
