import { portfolioData } from '../data/portfolioData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-container bg-white dark:bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-center">
          Featured Projects
        </h3>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-16">
          Showcasing my work in AI/ML, LLMs, and Data Science
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-all duration-300 animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <FiGithub className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors" aria-label="View on GitHub">
                  <FiExternalLink className="text-xl text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400" />
                </a>
              </div>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h4>

              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300 ease-in-out">
                <p className="text-slate-700 dark:text-slate-200 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-slate-700 dark:text-slate-200 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <FiGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
