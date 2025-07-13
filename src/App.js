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

      <section id='carousel'>
      <Carousel />
      </section>

      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
