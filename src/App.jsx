import { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Collaborations />
        <Contact />
      </main>

      <footer className="bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Sanjay Suthraye. Built with React + Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
