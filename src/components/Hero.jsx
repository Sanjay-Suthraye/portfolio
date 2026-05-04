import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const { personal, socials } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex pt-24"
      style={{ backgroundColor: 'var(--color-surface-900)' }}
    >
      <div className="max-w-7xl w-full mx-auto px-8 flex gap-12">

        {/* Left — text, vertically centered */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Status line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--color-primary-500)' }}></div>
            <span className="font-mono text-xs tracking-widest uppercase text-primary-400">
              Based in Berlin · Available for New Opportunities
            </span>
          </div>

          {/* Name */}
          <div className="mb-6">
            <h1 className="font-display font-bold tracking-tight leading-none">
              <span className="block text-3xl md:text-4xl text-white mb-1">
                {personal.name.split(' ')[0]}
              </span>
              <span className="block text-5xl md:text-6xl text-violet-400 italic leading-[0.9]">
                {personal.name.split(' ')[1]}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-mono text-xs text-primary-400 tracking-widest mb-6 uppercase">
            {personal.title}
          </p>

          {/* Description */}
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-10">
            7 years of expertise integrating Statistical Modelling and Generative AI —
            building agentic frameworks, RAG solutions, and production-grade predictive
            systems that bridge cutting-edge research with real-world impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-white rounded transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--color-primary-600)' }}
            >
              View My Work →
            </button>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-slate-300 border border-slate-700 rounded hover:border-slate-500 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </button>

            <a
              href="/Sanjay_DS_AI_7YOE_GE.pdf"
              download="Sanjay_Suthraye_Resume.pdf"
              className="px-7 py-3.5 text-xs font-bold tracking-widest uppercase text-slate-300 border border-slate-700 rounded hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FiDownload size={14} />
              Download Resume
            </a>

            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center border border-slate-700 rounded text-slate-500 hover:border-slate-500 hover:text-white transition-colors">
              <FiLinkedin size={16} />
            </a>

            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center border border-slate-700 rounded text-slate-500 hover:border-slate-500 hover:text-white transition-colors">
              <FiGithub size={16} />
            </a>
          </div>
        </div>

        {/* Right — large circular portrait */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-80 xl:w-96">
          <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-violet-400/30 flex-shrink-0">
            <img
              src={personal.image}
              alt={personal.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
