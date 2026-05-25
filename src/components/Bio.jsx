/* //devslanding/src/components/Bio.jsx */

import React from 'react';
import '../styles/Bio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub,
faInstagram,
faLinkedin,
} from '@fortawesome/free-brands-svg-icons';


function Bio() {

  return (

    <section className="bio-container">

      {/* Decorative Glow */}
      <div className="bio-glow"></div>

      <div classNmae="bio-wraper glass-card">

        {/* Section Header */}
        <div className="bio-header">

          <span className="bio-kicker">
            Philosophy & Direction
          </span>

          <h2 className="bio-title">
            Building thoughtful digital systems
            with creative percision.
          </h2>

          <p className="bio-intro">
            Full-stack developer witha foundation in business systems, interactive design,
            and scalable architecture - focused on crafting immersive digital experiences
            that balance visual identity,
            usability, and performance.
          </p>

        </div>

        {/* Content Grid */}
        <div className="bio-grid">

          {/* Left Narrative */}
          <div className="bio-column">

            <div className="bio-block">

              <h3>
                Technical Foundation
              </h3>
              <p>
                My background in Business Inforamtion Systems
                allows me to approach software development
                beyond code alone - understanding both operational
                demand and the customer experience behind digital products.
              </p>

              <p>
                Through hands-on full-stack training and independent study,
                I've focused on building production-ready applications,
                scalable frontend systems,
                real-time interactivity and immersive user interfaces.
              </p>

            </div>

            <div className="bio-block quote-block">

            <p>
              "What began as a self-tought curiosity evolved
              into disciplined craft - refined trhough experimentation,
              iteration, and continues learning."
            </p>

          </div>

        </div>

        {/* Right Narrative */}
        <div className="bio-column">
          <div className="bio-block">

            <h3>
              Creative Direction
            </h3>

            <p>
              I'm deeply invested in the intersection between architecture,
              motion, interaction, and digital storytelling.
              My work often blends cinematic layouts,
              refined visual systems, and modern frontend engineering.
            </p>

            <p>
              Beyond the scope of software, I enjoy studying visual
              composition, painting, printing miniatures and translating
              creative concepts into polished interactive experiences.
              A strong visual compostion makes the difference between a chaotic
              image and an impactful one.
            </p>

          </div>

          <div className="bio-block">

            <h3>
              Mission
            </h3>

            <p>
              To build modern digital products that feel
              intentional, performant, visually memorable,
              and strategically exceptional.
            </p>

          </div>

        </div>

      </div>

      {/* Credentials */}
      <div className="bio-credentials">

        <a
        href="/Resume2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="credential-card"
        >
          <span className="credential-label">
            Resume
          </span>

          <span className="credential-title">
            Professional Experience
          </span>
        </a>

        <a
        href="/USFCertificate.png"
        target="_blank"
        rel="noopener noreferrer"
        className="credential-card"
        >
          <span className="credential-label">
            Certification
          </span>

          <span className="credential-title">
            USF Software Engineering
          </span>
        </a>

      </div>

      {/* Footer CTA */}
      <div className="bio-footer">

        <p className="bio-footer-text">
          Open to ambitious projects,
          creative collaborations,
          and modern software architecturing
          through any of these platforms.
        </p>

        <div classNmae="bio-socials">

            <a
              href="https://github.com/RodriguezRamiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bio-social-link"
            >
              <FontAwesomeIcon
                icon={faGithub}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ramiro-rodriguez-3a287a328"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bio-social-link"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
              />
            </a>

            <a
              href="https://www.instagram.com/software.map"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bio-social-link"
            >
              <FontAwesomeIcon
                icon={faInstagram}
              />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Bio;