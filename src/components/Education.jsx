import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)', backgroundColor: 'var(--color-surface-800)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Education</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-14">Academic Background</h3>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">{edu.degree}</h4>
                  <p className="font-mono text-xs text-primary-400 uppercase tracking-widest">{edu.institution}</p>
                </div>
                <span className="font-mono text-xs text-slate-600 border px-4 py-2 rounded whitespace-nowrap self-start md:self-center" style={{ borderColor: 'var(--color-surface-500)' }}>
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
