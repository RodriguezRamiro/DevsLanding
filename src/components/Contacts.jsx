/* Contacts.jsx */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <section className="contacts-container" id="contact">
      <h2 className="contacts-title">Get in Touch</h2>
      <div className="contacts-info">
        <p>
          I’m always open to new opportunities, collaborations, or just connecting with fellow developers.
          Reach out through any of the platforms below:
        </p>

        {/* Contact Links */}
        <div className="contacts-links">
          <a
            href="https://github.com/RodriguezRamiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramiro-rodriguez-3a287a328"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/software.map"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="contact-link"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        {/* Email */}
        <p className="email">
          Or drop me an email at <a href="mailto:rodriguezcodesolutions@gmail.com">rodriguezcodesolutions@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contacts;
