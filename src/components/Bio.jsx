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
          Hi, I am Ramiro — a <strong>full-stack developer</strong> with a background in Business Information Systems.
          My skill set is reinforced by hands-on training through the USF Software Engineering Career Track, where I built production-style full-stack applications and strengthened modern development practices. I am passionate about crafting modern, user-first digital experiences that connect with the user through technology.
        </p>

        <p>
        What began as a self-taught curiosity evolved into a disciplined craft — one I continue refining through real-world projects and continuous study. I thrive on exploring web animations, real-time interactivity, and scalable fullstack architecture, bringing in that "wow effect".
        </p>

        <p>
          Beyond coding, an entrepreneur at heart. I focus on continued learning while managing a small bussiness, 3D printing miniatures, turning pencil sketches into oil canvas, a bit of concept desings, and staying physically active.
        </p>

        <p>
          <em><strong>My mission:</strong></em> To create polished, performant, and purposeful digital products that connect and inspire.
        </p>

        <p>
        <div className="document-links">
          <a href="/Resume2026.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            Review My Resume
          </a>
          <a href="/USFCertificate.png" target="_blank" rel="noopener noreferrer" className="certificate-link">
            View USF Certificate
          </a>
          </div>
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
