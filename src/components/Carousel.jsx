import React, { useState, useRef, useEffect } from 'react';
import '../styles/Carousel.css';
import experiments from '../data/experiments';

const Carousel = () => {
const length = experiments.length;
const visibleCount = 3;

  // Create clones: last visibleCount slides at front + first visibleCount slides at end
  const extendedExperiments = [
    ...experiments.slice(length - visibleCount),
    ...experiments,
    ...experiments.slice(0, visibleCount),
  ];
// start at visibleCount index to show first real slide
  const [currentIndex, setCurrentIndex]= useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoplayRef = useRef(null);

  // Swipe handlers

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > minSwipeDistance) {
        // Swipe left -> next slide
        nextSlide();
      } else if (distance < -minSwipeDistance) {
        // Swipe right -> prev slide
        prevSlide();
      }
    }
    // reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Move to next slide
  const nextSlide = () => {
    if (currentIndex < length + visibleCount) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Move to prev slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Handle transition end for infitite loop reset
  const handleTransitionEnd = () => {
    // Jump instantly without anumation when at cloned slide
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(length);
    } else if (currentIndex === length + visibleCount) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCount);
    }
  };


  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      // Next tick re-enable transition
      const timer = setTimeout(() => setIsTransitioning(true), 20); // slight delay to prevent visual jump
    return () => clearTimeout(timer);
  }
}, [isTransitioning]);

    //Autoplay logic

    // Calculate width percent per slide (for transform)
    const slideWidthPercent = 100 / visibleCount;

    // Calculate translateX style
    const translateX = -currentIndex * slideWidthPercent;

    const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (!isPaused) {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(autoplayRef.current);
  }
}, [currentIndex, isPaused]);

// Pause autoplay when switching tab or widnow, resume smothily on return

useEffect(() => {
  const handleVisibilityChange = () => {
    setIsPaused(document.hidden);
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, []);


  return (
    <section id="experiments" className="carousel-root">
    <div className="carousel-root">
      <h2 className="carousel-title">Experiments</h2>
      <p className="carousel-subtitle">Creative UI & Mini-Projects</p>

      <div className="carousel-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        >
        <div
            className="carousel-track"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: isTransitioning
                ? 'transform 0.4s ease-in-out'
                : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
          {extendedExperiments.map((exp, i) => (
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
          {/* Dots map only over real slides */}
          {experiments.map((_, i) => (
          <span
            key={i}
            className={`dot ${
              i === (currentIndex - visibleCount + length) % length ? 'active' : ''
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(i + visibleCount);
            }}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Carousel;
