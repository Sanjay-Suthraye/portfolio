import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-container bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-center">
          Skills & Expertise
        </h3>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-16">
          Comprehensive technical toolkit for AI/ML and Data Science
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-primary-600 dark:border-primary-400 inline-block">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-dark-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
