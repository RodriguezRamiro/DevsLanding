import React, { useState } from 'react';

// Carousel component
const Carousel = () => {
  // Dummy data for projects/experiments
  const experiments = [
    { title: 'Interactive Globe', description: 'A 3D globe visualization with clickable regions.', tags: ['Three.js', 'WebGL', 'DataViz'], link: '#' },
    { title: 'Generative Art', description: 'Algorithmically generated abstract art pieces.', tags: ['Canvas', 'JavaScript', 'P5.js'], link: '#' },
    { title: 'Physics Simulation', description: 'A simple 2D physics engine with collision detection.', tags: ['Matter.js', 'Physics', 'Simulation'], link: '#' },
    { title: 'Weather Dashboard', description: 'Real-time weather data fetched from an API.', tags: ['React', 'API', 'Tailwind CSS'], link: '#' },
    { title: 'To-Do App', description: 'A classic to-do list with drag-and-drop reordering.', tags: ['React', 'Drag-and-Drop', 'State Management'], link: '#' },
    { title: 'Calculator', description: 'A functional calculator with basic arithmetic operations.', tags: ['JavaScript', 'CSS Grid', 'UI/UX'], link: '#' },
    { title: 'Memory Game', description: 'Flip cards to find matching pairs.', tags: ['JavaScript', 'DOM', 'Game'], link: '#' },
    { title: 'Image Gallery', description: 'A responsive image gallery with light-box functionality.', tags: ['HTML', 'CSS', 'JavaScript'], link: '#' },
  ];

  // State for the carousel's rotation angle
  const [angle, setAngle] = useState(0);
  // Define the radius for the 3D circle. This determines how far cards are from the center.
  // A value of 400px works well with 280px wide cards to prevent excessive overlap.
  const radius = 400;
  // Calculate the step for each card's rotation based on the number of cards
  const rotateStep = 360 / experiments.length;

  // Function to rotate the carousel
  const rotateCarousel = (direction) => {
    // If direction is 'next', decrease angle (clockwise rotation from user's perspective)
    // If direction is 'prev', increase angle (counter-clockwise rotation)
    setAngle(prevAngle => prevAngle + (direction === 'next' ? -rotateStep : rotateStep));
  };

  return (
    // Removed min-h-screen from here. The parent App.js should manage overall page height.
    // Added w-full to ensure it takes the full width of its parent section.
    <div className="bg-gray-900 text-white font-inter flex flex-col items-center justify-center py-10 w-full">
      <section className="w-full max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Experiments</h2>
        <h3 className="text-xl md:text-2xl text-center text-gray-400 mb-12">Small ideas & UI effects</h3>

        <div className="carousel-container relative w-full flex justify-center items-center overflow-hidden py-10">
          {/* carousel-wrapper acts as the perspective container and defines the space for the carousel */}
          {/* Changed height from h-[400px] to h-[300px] to reduce the overall height of the carousel section */}
          <div className="carousel-wrapper relative w-full h-[300px] flex justify-center items-center" style={{ perspective: '1000px' }}>
            {/* carousel-track is the element that rotates, containing all the cards */}
            <div
              className="carousel-track absolute inset-0 flex justify-center items-center" // Centered within its parent
              style={{
                transform: `translateZ(-${radius}px) rotateY(${angle}deg)`, // Initial Z-translation and current rotation
                transformStyle: 'preserve-3d', // Essential for 3D transformations of children
                transition: 'transform 0.8s ease-in-out', // Smooth rotation animation
              }}
            >
              {experiments.map((exp, idx) => (
                <div
                  key={idx}
                  className="carousel-card absolute flex flex-col justify-center items-center p-5 rounded-xl shadow-lg text-center transform-gpu
                             bg-gradient-to-br from-purple-700 to-pink-500 text-white cursor-pointer
                             hover:scale-105 hover:shadow-xl hover:border-white hover:border-2 transition-all duration-300 ease-in-out" // Tailwind hover effects
                  style={{
                    transform: `rotateY(${idx * rotateStep}deg) translateZ(${radius}px)`, // Position and rotate each card
                    width: '30px',
                    height: '0px',
                    backfaceVisibility: 'hidden', // Prevents flickering on some browsers
                  }}
                >
                  <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                  <p className="text-sm text-gray-200 mb-3 flex-grow">{exp.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black bg-opacity-30 text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-50 transition duration-300"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 flex space-x-4 mb-4">
            <button
              onClick={() => rotateCarousel('prev')}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
              aria-label="Previous card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => rotateCarousel('next')}
              className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
              aria-label="Next card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
