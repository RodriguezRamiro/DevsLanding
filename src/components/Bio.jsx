import React from 'react';
import '../styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Bio() {
  return (
    <section className="bio-container">
      {/* Profile Bio */}
      <div className="profile-bio">
        <h3>About <span className="highlight">Me</span></h3>

        <p>
          Hi, I'm Ramiro — a <strong>full-stack developer</strong> with a background in Business Information Systems and hands-on training through the USF Software Engineering Career Track program. I’m passionate about crafting modern, user-first digital experiences.
        </p>

        <p>
          What began as a hobby quickly became a craft I love: solving real-world problems through thoughtful code and creative design.
        </p>

        <p>
          I thrive on <strong>continuous learning</strong>, exploring new technologies in web animations, real-time interactivity, and fullstack architecture.
          Outside of coding, I enjoy <strong>3D printing custom tools</strong>, sketching and designing concepts, and staying physically active.
        </p>

        <p>
          <em><strong>My mission:</strong></em> To create polished, performant, and purposeful digital products that connect and inspire.
        </p>

        <p>
          <a href="/Resume2025.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            View My Resume
          </a>
        </p>

        {/* Call-to-Action & Social Links */}
        <div className="bio-cta">
          <p>
            🚀 Looking to collaborate or need a developer with vision and grit? <strong><a href="#contact">Let’s connect.</a></strong>
          </p>
          <div className="social-section">
            <span className="bio-text">Follow my journey on</span>
            <div className="social-icons">
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
                href="https://www.instagram.com/software.map"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="contact-link"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
