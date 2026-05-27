/* //devslanding/src/components/Profile.jsx */

import React from 'react';
import '../styles/Profile.css';
import profilePic from '../assets/profilePhoto05_2026.jpg';


function Profile() {
  return (
    <section
      className="hero-section"
      id="about"
    >

      {/* Background Accent */}
      <div className="hero-background-glow"></div>

      <div className="hero-layout">

        {/* LEFT SIDE */}
        <div className="hero-content">

          {/* Eyebrow */}
          <div className="hero-eyebrow">
            FULL STACK ENGINEERING • DIGITAL SYSTEMS • CREATIVE DEVELOPMENT
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Ramiro Rodriguez
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            Full Stack Developer
            & Digital Systems Designer
          </h2>

          {/* Decorative Line */}
          <div className="hero-divider"></div>

          {/* Main Statement */}
          <p className="hero-description">
            Building modern digital experiences
            through elegant engineering,
            immersive interfaces,
            and scalable full-stack systems.
          </p>

          {/* Supporting Copy */}

          <p className="hero-supporting-text">
            I combine software engineering,
            creative problem-solving,
            and business strategy to craft
            digital products that feel intentional,
            refined, and memorable.
          </p>

          {/* Skill Tags */}
          <div className="hero-tags">

            <span className="hero-tag">
              React
            </span>

            <span className="hero-tag">
              Flask
            </span>

            <span className="hero-tag">
              Real-Time Systems
            </span>

            <span className="hero-tag">
              UI Architecture
            </span>

            <span className="hero-tag">
              Interactive Design
            </span>

          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">

            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">

          {/* Background Shape */}
          <div className="hero-image-accent"></div>

          {/* Portrait */}
          <div className="hero-image-wrapper">

            <img
              src={profilePic}
              alt="Ramiro Rodriguez"
              className="hero-image"
            />

          </div>

          {/* Floating Card */}
          <div className="hero-floating-card glass-card">

            <span className="floating-label">
              OPEN TO WORK
            </span>

            <h3>
              Designing thoughtful
              digital systems with
              precision and creativity.
            </h3>

          </div>

        </div>

      </div>
    </section>

  );
}

export default Profile;