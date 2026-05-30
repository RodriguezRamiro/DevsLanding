/* devslanding/src/components/Recommendations.jsx */


import React, { useState } from "react";
import "../styles/Recommendations.css";

const recommendations = [
  {
    name: "Jane Doe",
    title: "Software Engineer",
    text: "Rodriguez demonstrates strong technical skills, attention to detail, and excellent communication throughout every project."
  },
  {
    name: "John Smith",
    title: "Small Business Owner",
    text: "Professional, responsive, and able to turn ideas into practical solutions with ease."
  },
  {
    name: "Alex Johnson",
    title: "Creative Director",
    text: "A developer who genuinely cares about both functionality and design. Great experience working together."
  }
];

function Recommendations() {

    const [showForm, setShowForm] = useState(false);

  return (
    <section className="recommendations-section">
      <div className="recommendations-container">

        <div className="recommendations-header">
          <h2 className="recommendations-title">
            Professional Recommendations
          </h2>

          <p className="recommendations-subtitle">
            Feedback from collaborators, colleagues, and professionals who have
            worked alongside me.
          </p>
        </div>

        <div className="recommendations-grid">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="recommendation-card glass-card"
            >
              <p className="recommendation-text">
                "{item.text}"
              </p>

              <div className="recommendation-author">
                <h4>{item.name}</h4>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="recommendations-action">
          <button
          className="btn-primary"
          onClick={() => setShowForm(true)}
          >
            Leave Feedback
          </button>
        </div>

        {showForm && (
          <div className="glass-card">
            Feedback Form Coming Soon
          </div>
        )}

      </div>
    </section>
  );
}

export default Recommendations;