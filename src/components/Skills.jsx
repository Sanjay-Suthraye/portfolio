import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)', backgroundColor: 'var(--color-surface-800)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Expertise</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-14">Skills & Tools</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="card animate-slide-up" style={{ animationDelay: `${index * 60}ms` }}>
              <p className="font-mono text-xs text-primary-400 uppercase tracking-widest mb-5 pb-3 border-b" style={{ borderColor: 'var(--color-surface-500)' }}>
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-xs font-mono text-slate-400 rounded border transition-colors hover:text-white hover:border-slate-500 cursor-default" style={{ borderColor: 'var(--color-surface-500)' }}>
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
