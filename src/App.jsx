import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='text-text font-normal text-lg'>
        <Particles/>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
