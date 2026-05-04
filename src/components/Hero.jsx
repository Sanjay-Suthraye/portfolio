import { portfolioData } from '../data/portfolioData';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center animate-fade-in">

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            {personal.name.split(' ')[0]}<br />
            {personal.name.split(' ')[1]}
          </h1>

          <h2 className="text-lg md:text-xl text-slate-500 font-light tracking-widest uppercase">
            {personal.title.split('/')[0].trim()}
          </h2>

          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
            {personal.status}
          </div>

          <p className="text-slate-600 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
            I'm a Data Scientist with 7 years of experience specialising in Generative AI, LLMs, and Predictive Analytics. Available immediately for exciting opportunities.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold rounded shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              View Portfolio
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white text-xs font-bold rounded uppercase tracking-widest transition-all duration-300"
            >
              Get In Touch
            </a>

            <a
              href="/Sanjay_DS_AI_7YOE_GE.pdf"
              download="Sanjay_Suthraye_Resume.pdf"
              className="px-8 py-4 border-2 border-slate-300 text-slate-500 hover:bg-slate-600 hover:border-slate-600 hover:text-white text-xs font-bold rounded uppercase tracking-widest transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <FiDownload size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 animate-slide-in-right">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-primary-500 to-primary-700">
            <img
              src={personal.image}
              alt={personal.name}
              className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
