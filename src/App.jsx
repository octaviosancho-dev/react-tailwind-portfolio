import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className='text-text font-normal text-lg'>
      <Particles/>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
