/* Profile.jsx */
import React from 'react';
import '../styles/Profile.css';
import profilePic from '../assets/Screenshot 2024-11-17 at 6.03.50 PM.png';
import Bio from './Bio';

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

          {/* Bio Section - Now a Separate Component */}
          <Bio />
        </div>
      </div>
    </section>
  );
}

export default Profile;
