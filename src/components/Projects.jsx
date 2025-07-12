import React, { useState } from 'react';
import '../styles/Projects.css';


// Main Projects
const projects = [
  {
    id: 1,
    title: "Spotify Mock Clone",
    description: "A Spotify-inspired music streaming app built with React and Spotify API.",
    image: "/images/spotify-clone.png",
    github: "https://github.com/yourusername/spotify-clone",
    demo: "https://spotify-clone-demo.vercel.app",  //Live Demo Link
    tags: ['React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Fullstack Blackjack',
    description:'Fullstack Blackjack on React and Flask. Funtional multiplayer and real-time chat using Flask-SocketIO.',
    image: "/images/spotify-clone.png",
    github: "https://github.com/RodriguezRamiro/fullstack_blackjack",
    demo: "https://fullstack-blackjack.vercel.app/",  //Live Demo Link
    tags: ['JavaScript', 'React', 'Flask', 'WebSockets', 'CSS', 'Render'],
  },
  {

    id: 3,
    title: 'Bogetta',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    link: '#'

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

// Experiments / Small Ideas & UI Effects

const experiments = [
  {
    title: "Particle Cursor Trail",
    description: "Interactive mouse trail using canvas and physics.",
    image: '/images/xxxxxxxxx.png', // Add an image if available
    link: "https://codepen.io/yourusername/pen/abc123",
    tags: ["JavaScript", "Canvas"],
  },
  {
    title: "Book Flip Animation",
    description: "Opening book animation using HTML, CSS, and JS.",
    link: "https://codepen.io/yourusername/pen/xyz456",
    tags: ["HTML", "CSS"],
  },
  // Room for more:
];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    adaptiveHeight: true,
  };

function Projects() {

  const [angle, setAngle] = useState(0);
  const cardsCount = experiments.length;
  const rotateStep = 360 / cardsCount;

  const rotate = (direction) => {
    setAngle((prev) => prev + (direction === 'next' ? -rotateStep : rotateStep));
  };

  return (
    <>
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
      </section>

      <section className="projects-container">
  <h2 className="projects-title">Experiments</h2>
  <h3 className="projects-subtitle">Small ideas & UI effects</h3>

  <div className="carousel-wrapper">
    <div className="carousel-track" style={{ transform: `translateZ(-400px) rotateY(${angle}deg)` }}>
      {experiments.map((exp, idx) => (
        <div
          key={idx}
          className="carousel-card"
          style={{ transform: `rotateY(${idx * rotateStep}deg) translateZ(400px)` }}
        >
          <h4>{exp.title}</h4>
          <p>{exp.description}</p>
          <div className="experiments-tags">
            {exp.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="visit-link">
            View
          </a>
        </div>
      ))}
    </div>
  </div>
</section>



    </>
  );
}

export default Projects;
