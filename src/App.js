// app.js
import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Carousel from './components/Carousel';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className='app-container'>
      <Navbar />

      {/* ...sections */}
      <section id="about">
        <Profile />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section className="carousel-section w-full py-20 bg-black flex justify-center items-center">
        <Carousel />
      </section>

      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
