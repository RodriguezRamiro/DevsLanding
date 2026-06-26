/* Projects.jsx */

import React from 'react';
import projects from '../data/desings';
import '../styles/Projects.css';
import LanguageStats from './LanguageStats';

function Projects() {
  return (
    <section
      className="projects-container"
      id="projects"
    >

      {/* Header */}
      <div className="projects-header">

        <span className="projects-eyebrow">
          Creative Engineering Studio
        </span>

        <h2 className="projects-title">
          Selected Works
        </h2>

        <h3 className="projects-subtitle">
          Digital products, interactive systems,
          and experimental architecture crafted
          through strategy, aesthetics,
          and modern fullstack engineering.
        </h3>

      </div>

      {/* Projects Grid */}
      <div className="projects-grid">

        {projects.map((project) => (

          <a
            className="project-tile glass-card"
            href={project.demo || project.github}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
          >


            {/* Decorative Glow */}
            <div className="project-glow"></div>

            {/* Top */}
            <div className="project-top">

              <span className="project-category">
                {project.category || 'Digital Product'}
              </span>

              <h4 className="project-name">
                {project.title}
              </h4>

            </div>

            {/* Description */}
            {project.description && (
              <p className="project-description">
                {project.description}
              </p>
            )}

            {/* Footer */}
            <div className="project-footer">

              <div className="project-tags">

                {project.tags.map((tag, idx) => (

                  <span
                    key={idx}
                    className="tag"
                  >
                    {tag}
                  </span>

                ))}

              </div>

              <div className="project-actions">
                {project.forSale && (
                  <button
                  className="project-buy-link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    window.open(
                      project.gumroad,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Available for Licensing ↗
                </button>

                )}

              <span className="project-link">
                View System →
              </span>



              </div>


            </div>

          </a>

        ))}

      </div>

      {/* Stats Section */}
      <div className="projects-stats">

        <LanguageStats />

      </div>

    </section>
  );
}

export default Projects;