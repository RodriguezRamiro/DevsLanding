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
          I am Ramiro Rodriguez — a <strong>Full-stack Developer</strong> with a background in Business Information Systems.
          My technical skillset is reinforced by hands-on training through the USF Software Engineering Career Track, where we completed production-grade full-stack applications and strengthened modern development practices.
          My business background enables me to identify customer pain points, translate them into technical solutions, and help deliver products that create measurable value.
          I bring a strategic, customer-focused mindset to software development. I specialize in crafting modern, user-first, digital experiences that not only function effectively but also align with real business objectives.
        </p>

        <p>
        What began as a self-taught curiosity evolved into a disciplined craft — one I continue refining through real-world projects and continuous study. I thrive on exploring web animations, real-time interactivity, and scalable fullstack architecture desing, bringing in that "wow effect".
        </p>

        <p>
          Beyond coding, an entrepreneur at heart. I focus on continued learning. Enjoy 3D printing miniatures, turning pencil sketches into oil canvases, and staying physically active.
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
