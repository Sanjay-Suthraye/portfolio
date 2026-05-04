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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-surface-900)' }}>
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

      <footer className="border-t py-8" style={{ borderColor: 'var(--color-surface-500)' }}>
        <div className="max-w-7xl mx-auto px-8 text-center text-slate-600 text-sm font-mono tracking-widest">
          <p>© 2026 Sanjay Suthraye</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
