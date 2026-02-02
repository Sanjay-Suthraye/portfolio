import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const About = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="about" className="bg-white dark:bg-dark-800 py-20 px-6 border-t border-slate-100 dark:border-dark-700">
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 uppercase tracking-widest text-center">
          About Me
        </h3>
        
        <div className="space-y-6 text-center md:text-left">
          <p className="text-slate-600 dark:text-gray-300 leading-loose text-lg">
            I have spent the last 7 years designing AI/ML solutions for global enterprises like <strong>AstraZeneca</strong> and <strong>Tesco</strong>. 
            My expertise lies in bridging the gap between complex data and actionable insights using <strong>Python</strong>, <strong>Generative AI</strong>, and <strong>RAG architectures</strong>.
          </p>
          
          <p className="text-slate-600 dark:text-gray-300 leading-loose text-lg">
            I specialize in building intelligent agents, predictive models, and deploying scalable ML systems in production environments. 
            My work has delivered measurable impact including 30% cost reductions, 99% reliability in patient journey analysis, and 40% improvements in analysis efficiency.
          </p>
          
          <p className="text-slate-600 dark:text-gray-300 leading-loose text-lg">
            I am passionate about leveraging cutting-edge AI technologies to solve real-world problems and am <strong>{personal.status}</strong> for new opportunities worldwide.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center gap-8">
          <a 
            href={socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl text-slate-400 hover:text-black dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href={socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a 
            href={socials.email}
            className="text-4xl text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
