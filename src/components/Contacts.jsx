/* Contacts.jsx */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contacts.css';

const Contacts = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        'https://formspree.io/f/xdabpana',
        {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }

    setLoading(false);
  };



  return (
    <section
      className="contacts-container"
      id="contact"
    >


      {/* Heading */}
      <div className="contacts-header">

        <h2 className="contacts-title">
          Get In Touch
        </h2>

        <p className="contacts-subtitle">
          Let’s build something thoughtful,
          modern, and memorable together.
        </p>

      </div>

      {/* Decorative Accent Element */}
      <div className="contacts-glow"></div>

      {/* Main Layout */}
      <div className="contacts-content">

        {/* LEFT SIDE */}
        <div className="contacts-left">

          <p className="contacts-description">
            Actively open to new opportunities,
            collaborations, freelance work,
            and creative technical projects.
          </p>

          <div className="contacts-links">

            <a
              href="https://github.com/RodriguezRamiro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="contact-link"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/ramiro-rodriguez-3a287a328"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="contact-link"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
              />
            </a>

            <a
              href="https://www.instagram.com/software.map"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="contact-link"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
              />
            </a>

          </div>

          <div className="contact-meta">

            <p className="email">
              rodriguezcodesolutions@gmail.com
            </p>

            <div className="availability-badge">
              Available For Hire
            </div>

            <p className="availability">
              Freelance,
              business collaborations,
              and full-stack development work.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-wrapper glass-card">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              className="hidden-field"
            />

            {/* Name */}
            <div className="floating-group">

              <input
                type="text"
                name="name"
                required
                placeholder=" "
              />

              <label>
                Full Name
              </label>

            </div>

            {/* Email */}
            <div className="floating-group">

              <input
                type="email"
                name="email"
                required
                placeholder=" "
              />

              <label>
                Email Address
              </label>

            </div>

            {/* Business */}
            <div className="floating-group">

              <input
                type="text"
                name="business"
                placeholder=" "
              />

              <label>
                Business / Organization
              </label>

            </div>

            {/* Message */}
            <div className="floating-group">

              <textarea
                name="message"
                rows="6"
                required
                placeholder=" "
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height =
                    `${e.target.scrollHeight}px`;
                }}
              />

              <label>
                Offers & File Requests
              </label>

            </div>

            <button
              type="submit"
              className="contact-submit btn-primary"
              disabled={loading}
            >
              {loading
                ? 'Sending...'
                : 'Send Inquiry'}
            </button>

            {status === 'SUCCESS' && (
              <div className="form-success">
                ✓ Message sent successfully
              </div>
            )}

            {status === 'ERROR' && (
              <div className="form-error">
                Something went wrong.
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contacts;
