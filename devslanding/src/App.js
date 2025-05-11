import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile'; 
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Navbar />

      <section id="about">
        <Profile />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
