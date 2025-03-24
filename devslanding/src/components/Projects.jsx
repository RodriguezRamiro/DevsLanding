import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Spotify Clone",
    description: "A Spotify-inspired music streaming app built with React and Spotify API.",
    image: "/images/spotify-clone.png",
    github: "https://github.com/yourusername/spotify-clone",
    demo: "https://spotify-clone-demo.vercel.app",
    tags: ['Zustand', 'React', 'TypeScript'],
  },
  {
    title: 'Bogetta',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    link: '#'
  },
  {
    title: 'Bitcoin Game',
    tags: ['E2E', 'React', 'TypeScript', 'Firebase'],
    link: '#'
  },
  {
    title: 'Chat App',
    tags: ['React', 'TypeScript', 'Firebase'],
    link: '#'
  },
  {
    title: 'Netflix Clone',
    tags: ['React', 'TypeScript', 'Firebase'],
    link: '#'
  },
  {
    title: 'Instagram Clone',
    tags: ['React', 'TypeScript', 'CSS', 'Firebase'],
    link: '#'
  }
];

function Projects() {
  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <h3 className="projects-subtitle">Worked On</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-tile">
            <h4>{project.title}</h4>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;