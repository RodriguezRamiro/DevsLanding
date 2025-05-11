import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Spotify Clone",
    description: "A Spotify-inspired music streaming app built with React and Spotify API.",
    image: "/images/spotify-clone.png",
    github: "https://github.com/yourusername/spotify-clone",
    demo: "https://spotify-clone-demo.vercel.app",  //Live Demo Link
    tags: ['React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Bogetta',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    link: '#'
  },
  {
    id: 3,
    title: 'Fullstack Blackjack',
    description:'Fullstack Blackjack on React and Flask. Funtional multiplayer and real-time chat using Flask-SocketIO.',
    image: "/images/spotify-clone.png",
    github: "https://github.com/RodriguezRamiro/fullstack_blackjack",
    demo: "https://vercel.com/rodriguezramiros-projects/fullstack-blackjack",  //Live Demo Link
    tags: ['JavaScript', 'React', 'Python', 'Flask', 'WebSockets', 'CSS',],

  },
  {
    id: 4,
    title: 'React Calculator',
    description: 'Ract calculator featuring scientific fuctions, and arithmetic buttons.',
    image: '/images/chatbot.png', // Add an image if available
    github: 'https://github.com/RodriguezRamiro/react-calculator',
    demo: 'https://react-calculator-six-black.vercel.app/', //Live Demo Link
    tags: ['HTML', 'CSS', 'React JS'],
  },
  {
    id: 5,
    title: 'Chatbot App',
    description: 'A simple chat box application with auto-replies and timestamps.',
    image: '/images/chatbot.png', // Add an image if available
    github: 'https://github.com/RodriguezRamiro/chatbot',
    demo: 'https://chatbot-peach-nine-17.vercel.app/', //Live Demo Link
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 7,
    title: 'Weather App',
    description: 'Themed weather application with api integration',
    image: '/images/chatbot.png', // Add an image if available
    github: 'https://github.com/RodriguezRamiro/chatbot',
    demo: 'https://weatherapp-ashy-five.vercel.app/', //Live Demo Link
    tags: ['HTML', 'CSS', 'JavaScript', 'API',],
  },
];

function Projects() {
  return (
    <section className="projects-container">
      <h2 className="projects-title">Projects</h2>
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

            {project.description && <p className="project-description">{project.description}</p>}

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
