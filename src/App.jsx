import Hero from './components/Hero';
import About from './components/About';
import Collaborations from './components/Collaborations';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Education />
        <Collaborations />
        <Contact />
      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500">
          <p>© 2026 Sanjay Suthraye. Built with React + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
