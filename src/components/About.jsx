import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const About = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="about" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="font-mono text-xs tracking-widest uppercase text-primary-400">About</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-12">Who I Am</h3>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-slate-300 leading-loose text-lg">
              Full Stack Data Scientist and AI Engineer with <strong className="text-white">7 years of expertise</strong> integrating
              Statistical Modelling and Generative AI. Specialist in developing comprehensive intelligence systems,
              encompassing the design of <strong className="text-white">Agentic Frameworks (LangGraph, MCP)</strong> and <strong className="text-white">RAG solutions</strong>,
              as well as the implementation of robust <strong className="text-white">Predictive Models</strong> and <strong className="text-white">Time-Series Forecasts</strong>.
            </p>

            <p className="text-slate-400 leading-loose">
              At <strong className="text-slate-300">AstraZeneca</strong>, built agentic AI platforms and forecasting systems that cut operational costs
              by 30% and reduced data access latency by 30%. At <strong className="text-slate-300">Tesco</strong>, churn prediction models improved
              household retention by 38%.
            </p>

            <p className="text-slate-400 leading-loose">
              My broader aim is to build AI systems that are technically robust and <strong className="text-slate-300">ethically grounded</strong> —
              bridging cutting-edge research with production-grade deployment. I also invest in mentoring the next
              generation of data scientists.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs text-primary-400 uppercase tracking-widest mb-4">Connect</p>
              <div className="flex gap-4">
                <a href={socials.github} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-700 rounded text-slate-500 hover:border-slate-500 hover:text-white transition-colors" aria-label="GitHub">
                  <FiGithub size={18} />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-slate-700 rounded text-slate-500 hover:border-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                  <FiLinkedin size={18} />
                </a>
                <a href={socials.email}
                  className="w-12 h-12 flex items-center justify-center border border-slate-700 rounded text-slate-500 hover:border-slate-500 hover:text-white transition-colors" aria-label="Email">
                  <FiMail size={18} />
                </a>
              </div>
            </div>

            <div>
              <p className="font-mono text-xs text-primary-400 uppercase tracking-widest mb-4">Languages</p>
              <div className="space-y-2">
                {personal.languages.map((lang, i) => (
                  <p key={i} className="text-slate-400 text-sm">{lang}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
