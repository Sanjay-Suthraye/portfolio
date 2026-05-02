import { portfolioData } from '../data/portfolioData';
import { FiBriefcase, FiDownload, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const { experience } = portfolioData;

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sanjay_DS_AI_7YOE_GE.pdf';
    link.download = 'Sanjay_Suthraye_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="section-container bg-white dark:bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-center">
          Work Experience
        </h3>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-8">
          7+ years of building AI/ML solutions in enterprise environments
        </p>

        <div className="flex justify-center mb-12">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <FiDownload size={20} />
            Download Full Resume
          </button>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex-shrink-0">
                  <FiBriefcase className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h4>
                      {job.domain && <p className="text-sm text-slate-500 dark:text-slate-400">{job.domain}</p>}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 flex-shrink-0">
                      <FiMapPin size={13} />{job.location}
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    {job.roles ? (
                      job.roles.map((role, rIndex) => (
                        <div key={rIndex} className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-primary-600 dark:text-primary-400 text-sm">{role.position}</span>
                          <span className="text-slate-400 dark:text-slate-500">·</span>
                          <span className="text-sm text-slate-500 dark:text-slate-400">{role.duration}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-primary-600 dark:text-primary-400 text-sm">{job.position}</span>
                        <span className="text-slate-400 dark:text-slate-500">·</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{job.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-200 mb-4 leading-relaxed pl-16">{job.description}</p>

              <ul className="space-y-2 pl-16">
                {job.achievements.map((achievement, aIndex) => (
                  <li key={aIndex} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 flex-shrink-0"></div>
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
