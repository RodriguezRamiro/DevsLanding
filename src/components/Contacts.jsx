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
    setStatus('');;

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
    <section className="contacts-container" id="contact">
      <h2 className="contacts-title">
        Get in Touch
      </h2>

      <div className="contacts-info">
        <p>
          I’m always open to new opportunities,
          collaborations, or connecting with
          fellow developers and businesses.
        </p>

        {/* Contact Form */}
        <div className="contact-form-container">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
              type="email"
              id="email"
              name="email"
              placeholder="you@email.com"
              required
              />
            </div>

            {/* Business */}
            <div className="form-group">
              <label htmlFor="business">
                Business / Organization
              </label>

              <input
              type="text"
              id="business"
              name="business"
              placeholder="Business Name"
              />

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">
                  Project Goals
                </label>

                <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your idea; paint the picture, what vision are we buidling..."
                required
                ></textarea>

                <p className="form-note">
                  No pressure - no idea is too small.<br>
                  </br>I'll follow up with next steps.
                </p>
              </div>

              {/* Submit */}
              <button
              type="submit"
              className="btn-primary contact-submit"
              disabled={loading}
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {/* Status Messages */}
              {status === "SUCCESS" && (
                <p className="form-success">
                  Message sent Successfully!
                </p>
              )}

              {status === "ERROR" && (
                <p className="form-error">
                  Something went wrong. Please try again.
                  </p>
              )}
          </form>
        </div>

        {/* Social Links */}
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
