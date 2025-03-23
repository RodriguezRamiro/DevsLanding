import React from 'react';
import '../styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the Instagram icon
import profilePic from '../assets/Screenshot 2024-11-17 at 6.03.50 PM.png';

function Profile() {
  return (
    <section className="profile-container">
      <div className="profile-content">
        {/* Left Side - Profile Image */}
        <div className="profile-image-container">
          <img src={profilePic} alt="Ramiro - Frontend Developer" className="profile-image" />
        </div>

        {/* Right Side - Bio & Decorative Lines */}
        <div className="profile-text">
          {/* Top Decorative Lines */}
          <div className="decorative-lines top"></div>

          {/* Profile Title & Subtitle */}
          <h1 className="profile-title">Ramiro's Tech</h1>
          <h2 className="profile-subtitle">Frontend Developer</h2>

          {/* Bottom Decorative Lines */}
          <div className="decorative-lines bottom"></div>

          {/* Bio Section */}
          <div className="profile-bio">
            <h3>About <span className="highlight">Me</span></h3>
            <p>
              Hi, I'm Ramiro! I'm a <strong>self-taught frontend developer</strong> with a passion for building digital experiences.
              My journey into coding started as a hobby, but it quickly grew into something I love.
            </p>
            <p>
              What keeps me motivated? The **endless learning** and the thrill of tackling **new challenges**.
              Beyond coding, I enjoy working on <strong>3D printing projects</strong>, sketching, and reading.
              When I’m not coding, you'll find me spending time with family or working out.
            </p>
            <p>
              Follow my journey on
              <button onClick={() => window.open('https://instagram.com', '_blank')} className="link-style">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </button>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
