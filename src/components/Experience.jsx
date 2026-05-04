import { portfolioData } from '../data/portfolioData';
import { FiDownload } from 'react-icons/fi';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)', backgroundColor: 'var(--color-surface-800)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="section-label">
              <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Experience</span>
            </div>
            <h3 className="text-4xl font-display font-bold text-white">Work History</h3>
          </div>
          <a
            href="/Sanjay_DS_AI_7YOE_GE.pdf"
            download="Sanjay_Suthraye_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary-600 text-primary-400 text-xs font-bold tracking-widest uppercase rounded hover:bg-primary-600 hover:text-white transition-colors self-end"
          >
            <FiDownload size={14} />
            Download Resume
          </a>
        </div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="card animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-1">{job.company}</h4>
                  {job.domain && <p className="font-mono text-xs text-slate-600 uppercase tracking-widest">{job.domain}</p>}
                </div>
                <div className="space-y-1 sm:text-right">
                  {job.roles ? (
                    job.roles.map((role, rIdx) => (
                      <div key={rIdx}>
                        <span className="font-mono text-xs text-primary-400">{role.position}</span>
                        <span className="font-mono text-xs text-slate-600 ml-2">· {role.duration}</span>
                      </div>
                    ))
                  ) : (
                    <div>
                      <span className="font-mono text-xs text-primary-400">{job.position}</span>
                      <span className="font-mono text-xs text-slate-600 ml-2">· {job.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5">
                {job.achievements.map((achievement, aIndex) => (
                  <li key={aIndex} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-500)' }}></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
