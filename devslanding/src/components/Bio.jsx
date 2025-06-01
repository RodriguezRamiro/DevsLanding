import React from 'react';
import '../styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Bio() {
  return (
    <section className="bio-container">
      {/* Bio Section */}
      <div className="profile-bio">
        <h3>About <span className="highlight">Me</span></h3>
        <p>
          Hi, I'm Ramiro! I'm a <strong>self-taught fullstack developer</strong> with a passion for building digital experiences.
          My journey into coding started as a hobby, but it quickly grew into something I love and enjoy doing.
        </p>
        <p>
          What keeps me motivated? The <strong>endless learning</strong> and the thrill of tackling <strong>new challenges</strong>.
          Beyond coding, I enjoy working on <strong>3D printing projects</strong>, sketching, and reading.
          When I’m not coding, you'll find me spending time with family or at a gym.
        </p>
        <p>
          <span className='bio-text'>Follow my journey on</span>
          <a href="https://github.com/RodriguezRamiro" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/software.map" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Bio;
