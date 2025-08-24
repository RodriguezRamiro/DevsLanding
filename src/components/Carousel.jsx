import React, { useState, useRef, useEffect } from 'react';
import '../styles/Carousel.css';
import experiments from '../data/experiments';

const Carousel = () => {
  const length = experiments.length;
  const visibleCount = 3;

  // Create clones for infinite looping
  const extendedExperiments = [
    ...experiments.slice(length - visibleCount),
    ...experiments,
    ...experiments.slice(0, visibleCount),
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const nextSlideRef = useRef(null);

  // Move to next slide
  const nextSlide = () => {
    if (currentIndex < length + visibleCount) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Move to previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Update ref to always point to latest nextSlide function
  useEffect(() => {
    nextSlideRef.current = nextSlide;
  }, [nextSlide]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlideRef.current();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Pause autoplay when switching tabs
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Swipe handlers
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > minSwipeDistance) nextSlide();
      else if (distance < -minSwipeDistance) prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle transition end for infinite loop reset
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(length);
    } else if (currentIndex === length + visibleCount) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCount);
    }
  };

  // Re-enable transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Slide width and transform
  const slideWidthPercent = 100 / visibleCount;
  const translateX = -currentIndex * slideWidthPercent;

  return (
    <section id="experiments" className="carousel-root">
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
            transition: isTransitioning ? 'transform 0.4s ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedExperiments.map((exp, i) => (
            <div className="carousel-card" key={i}>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <div className="tags">
                {exp.tags.map((tag, j) => <span className="tag" key={j}>{tag}</span>)}
              </div>
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer">View</a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots">
        {experiments.map((_, i) => (
          <span
            key={i}
            className={`dot ${(i === (currentIndex - visibleCount + length) % length) ? 'active' : ''}`}
            onClick={() => { setIsTransitioning(true); setCurrentIndex(i + visibleCount); }}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
