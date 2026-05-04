import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About',      href: '#about' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Contact',    href: '#contact' },
  ];

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b' : ''
      }`}
      style={isScrolled ? {
        backgroundColor: 'rgba(11,13,24,0.92)',
        borderColor: 'var(--color-surface-500)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="font-display font-bold text-white text-xl hover:text-primary-400 transition-colors"
        >
          Sanjay Suthraye
        </button>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold tracking-widest uppercase text-slate-400 border rounded transition-colors hover:text-white hover:border-slate-500"
            style={{ borderColor: 'var(--color-surface-500)' }}
          >
            GitHub
          </a>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-5 py-2 text-xs font-bold tracking-widest uppercase text-primary-400 border border-primary-600 rounded hover:bg-primary-600 hover:text-white transition-colors"
          >
            Let's Talk →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden px-8 pb-6 space-y-4 border-t animate-fade-in"
          style={{ borderColor: 'var(--color-surface-500)', backgroundColor: 'var(--color-surface-900)' }}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase text-primary-400"
          >
            Let's Talk →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
