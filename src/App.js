// app.js
import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Bio from './components/Bio.jsx';
import Projects from './components/Projects';
import ExperimentsShowcase from './components/InteractiveDesings.jsx';
import Contacts from './components/Contacts';
import Recommendations from "./components/Recommendations";
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
    <div className='app-container'>
      <Navbar />
      {/* ...sections */}
      <section id="about">
        <Profile />
      </section>

      <section id="bio">
        <Bio />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section className="carousel-section w-full py-20 bg-black flex justify-center items-center">
        {/* <InteractiveDesigns /> */}
        <ExperimentsShowcase />
      </section>

      <section id="contact">
        <Contacts />
      </section>

      <section id="recommendations">
        <Recommendations />
      </section>

      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
