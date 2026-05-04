import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Portfolio</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-4">Featured Projects</h3>
        <p className="font-mono text-sm text-slate-600 mb-14 uppercase tracking-widest">
          AI/ML · LLMs · Data Science
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-5">
                <FiGithub className="text-slate-600 group-hover:text-primary-400 transition-colors" size={20} />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="text-slate-700 hover:text-primary-400 transition-colors"
                >
                  <FiExternalLink size={16} />
                </a>
              </div>

              <h4 className="font-display font-bold text-white text-lg mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h4>

              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out">
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-3">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-mono text-slate-500 rounded border" style={{ borderColor: 'var(--color-surface-500)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-400 text-xs font-bold rounded uppercase tracking-widest hover:border-slate-500 hover:text-white transition-colors"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
