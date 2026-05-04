import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const About = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="about" className="bg-slate-50 py-20 px-6 border-t border-slate-100">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h3 className="text-3xl font-bold text-slate-900 mb-12 uppercase tracking-widest text-center">
          About Me
        </h3>

        <div className="space-y-6 text-center md:text-left">
          <p className="text-slate-700 leading-loose text-lg">
            Full Stack Data Scientist and AI Engineer with <strong>7 years of expertise</strong> integrating <strong>Statistical Modelling and Generative AI</strong>.
            Specialist in developing comprehensive intelligence systems, encompassing the design of <strong>Agentic Frameworks (LangGraph, MCP)</strong> and <strong>RAG solutions</strong>,
            as well as the implementation of robust <strong>Predictive Models (XGBoost, Random Forest)</strong> and <strong>Time-Series Forecasts</strong>.
          </p>

          <p className="text-slate-700 leading-loose text-lg">
            At <strong>AstraZeneca</strong>, built agentic AI platforms and time-series forecasting systems that cut operational costs by 30% and reduced data access latency by 30% through scalable <strong>containerised microservices (Docker, FastAPI)</strong>. At <strong>Tesco</strong>, churn prediction models improved household retention by 38%.
          </p>

          <p className="text-slate-700 leading-loose text-lg">
            My broader aim is to build AI systems that are not only technically robust but also <strong>ethically grounded</strong> — bridging the gap between cutting-edge research and production-grade deployment. I care deeply about responsible AI, model interpretability, and making complex intelligence genuinely accessible to the people who rely on it. Beyond the work itself, I invest in mentoring the next generation of data scientists, having served as an industry mentor at Christ University.
          </p>

          <p className="text-slate-700 leading-loose text-lg">
            Looking for new opportunities to drive innovation through AI and data science. Let's connect!
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          <a href={socials.github} target="_blank" rel="noopener noreferrer"
            className="text-4xl text-slate-400 hover:text-slate-900 transition-colors duration-300" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-4xl text-slate-400 hover:text-primary-600 transition-colors duration-300" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={socials.email}
            className="text-4xl text-slate-400 hover:text-red-500 transition-colors duration-300" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
