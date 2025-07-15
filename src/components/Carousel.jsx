import React, { useState } from 'react';
import '../styles/Carousel.css';
import experiments from '../data/experiments';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  return (
    <section id="experiments" className="carousel-root">
    <div className="carousel-root">
      <h2 className="carousel-title">Experiments</h2>
      <p className="carousel-subtitle">Creative UI & Mini-Projects</p>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% + 310px))`,
          }}
        >
          {experiments.map((exp, i) => (
            <div className="carousel-card" key={i}>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <div className="tags">
                {exp.tags.map((tag, j) => (
                  <span className="tag" key={j}>{tag}</span>
                ))}
              </div>
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {experiments.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Carousel;
