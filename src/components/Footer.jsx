/* //devslanding/src/components/Footer.jsx */

import React from "react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import packageJson from "../../package.json";

import "../styles/Footer.css";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  const { version } = packageJson;

  return (

    <footer className="footer" aria-label="Footer">

      <div className="footer-inner">

        {/* Left */}
        <div className="footer-left">

          <span className="footer-kicker">
            RodriguezTech Studios
          </span>

          <h3 className="footer-logo">
            {/*Pending Logo */}
          </h3>

          <p className="footer-copy">
            © {currentYear} RamTech LLC ·
            Crafted with Creative Engineering
          </p>

        </div>

        {/* Right */}
        <div className="footer-right">

          <a
            href="https://github.com/RodriguezRamiro/DevsLanding"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/ramiro-rodriguez-3a287a328"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        <span className="footer-version">
          Version {version}
        </span>
      </div>

    </footer>
  );
};

export default Footer;