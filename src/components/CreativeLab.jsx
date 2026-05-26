/* //devslanding/src/components/CreativeLab.jsx */

import React, {
  useState,
  useRef,
  useEffect,
  useCallback
} from 'react';

import '../styles/CreativeLab.css';
import experiments from '../data/collaborations';

const CreativeLab = () => {

  const length = experiments.length;
  const visibleCount = 3;

  /* Infinite Loop Clone */
  const extendedExperiments = [
    ...experiments.slice(length - visibleCount),
    ...experiments,
    ...experiments.slice(0, visibleCount),
  ];

  /* States */
  const [currentIndex, setCurrentIndex] =
    useState(visibleCount);

  const [isTransitioning, setIsTransitioning] =
    useState(true);

  const [isPaused, setIsPaused] =
    useState(false);

  /* Touch Controls */
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  /* Autoplay Ref */
  const nextSlideRef = useRef(null);

  /* Next Slide */
  const nextSlide = useCallback(() => {

    if (currentIndex < length + visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    }

  }, [currentIndex, length, visibleCount]);

  /* Previous Slide */
  const prevSlide = useCallback(() => {

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

  }, [currentIndex]);

  /* Keep Latest nextSlide */
  useEffect(() => {
    nextSlideRef.current = nextSlide;
  }, [nextSlide]);

  /* Autoplay */
  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlideRef.current();
    }, 3500);

    return () => clearInterval(interval);

  }, [isPaused]);

  /* Pause On Tab Change */
  useEffect(() => {

    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      );
    };

  }, []);

  /* Swipe Handlers */
  const handleTouchStart = (e) => {
    touchStartX.current =
      e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current =
      e.touches[0].clientX;
  };

  const handleTouchEnd = () => {

    const minSwipeDistance = 50;

    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {

      const distance =
        touchStartX.current -
        touchEndX.current;

      if (distance > minSwipeDistance) {
        nextSlide();
      }

      else if (distance < -minSwipeDistance) {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* Infinite Loop Reset */
  const handleTransitionEnd = () => {

    if (currentIndex === 0) {

      setIsTransitioning(false);
      setCurrentIndex(length);

    }

    else if (
      currentIndex ===
      length + visibleCount
    ) {

      setIsTransitioning(false);
      setCurrentIndex(visibleCount);

    }
  };

  /* Re-enable Transition */
  useEffect(() => {

    if (!isTransitioning) {

      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);

      return () => clearTimeout(timer);
    }

  }, [isTransitioning]);

  /* Slide Width */
  const slideWidthPercent =
    100 / visibleCount;

  const translateX =
    -currentIndex * slideWidthPercent;

  return (

    <section
      id="experiments"
      className="creative-lab-root"
    >

      {/* Section Header */}
      <div className="creative-lab-header">

        <h2 className="creative-lab-title">
          Creative Lab
        </h2>

        <p className="creative-lab-subtitle">
          Experimental Interfaces,
          Motion Concepts,
          Interactive Systems,
          and Visual Explorations
        </p>

      </div>

      {/* Main Slider */}
      <div
        className="creative-lab-viewport"

        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}

        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >

        <div
          className="creative-lab-track"

          style={{
            transform:
              `translateX(${translateX}%)`,

            transition:
              isTransitioning
                ? 'transform 0.45s ease-in-out'
                : 'none',
          }}

          onTransitionEnd={
            handleTransitionEnd
          }
        >

          {extendedExperiments.map(
            (exp, i) => (

              <div
                className="creative-lab-card"
                key={i}
              >

                <div className="creative-card-content">

                  <h3>
                    {exp.title}
                  </h3>

                  <p>
                    {exp.description}
                  </p>

                </div>

                <div className="creative-card-footer">

                  <div className="creative-lab-tags">

                    {exp.tags.map(
                      (tag, j) => (

                        <span
                          className="tag"
                          key={j}
                        >
                          {tag}
                        </span>

                      )
                    )}

                  </div>

                  {exp.link && (

                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="creative-lab-button"
                    >
                      Explore
                    </a>

                  )}

                </div>

              </div>

            )
          )}

        </div>
      </div>

      {/* Navigation Dots */}
      <div className="creative-lab-dots">

        {experiments.map((_, i) => (

          <span
            key={i}

            className={`creative-dot ${
              (
                i ===
                (
                  currentIndex -
                  visibleCount +
                  length
                ) % length
              )
                ? 'active'
                : ''
            }`}

            onClick={() => {

              setIsTransitioning(true);

              setCurrentIndex(
                i + visibleCount
              );

            }}
          />

        ))}

      </div>

    </section>
  );
};

export default CreativeLab;