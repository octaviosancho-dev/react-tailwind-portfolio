import React from 'react'

import Particles from './components/helpers/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className='text-text font-normal text-lg'>
        <Particles />
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
