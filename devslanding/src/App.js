import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile'; // Example of your Profile component
import Projects from './components/Projects'; // Example of Projects component
import Contacts from './components/Contacts'; // Example of Contacts component

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
