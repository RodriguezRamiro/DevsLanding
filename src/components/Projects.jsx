import React from 'react';
import projects from '../data/projects';
import '../styles/Projects.css';
import LanguageStats from './LanguageStats';

function Projects() {
  return (
    <section className="projects-container">
      <h2 className="projects-title">Collaborations</h2>
      <h3 className="projects-subtitle">Worked On</h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.demo || project.github || '#'}
            className="project-tile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>{project.title}</h4>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Language stats inserted here */}
      <LanguageStats />

    </section>
  );
}

export default Projects;
