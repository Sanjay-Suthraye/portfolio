import { portfolioData } from '../data/portfolioData';
import { FiBriefcase, FiDownload } from 'react-icons/fi';

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
    <section id="experience" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-widest text-center">
          Work Experience
        </h3>
        <p className="text-center text-slate-500 mb-8">
          7+ years of building AI/ML solutions in enterprise environments
        </p>

        <div className="flex justify-center mb-12">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-lg shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <FiDownload size={20} />
            Download Full Resume
          </button>
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-lg flex-shrink-0">
                  <FiBriefcase className="text-2xl text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{job.company}</h4>
                      {job.domain && <p className="text-sm text-slate-500">{job.domain}</p>}
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    {job.roles ? (
                      job.roles.map((role, rIndex) => (
                        <div key={rIndex} className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-primary-600 text-sm">{role.position}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-sm text-slate-500">{role.duration}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-primary-600 text-sm">{job.position}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-sm text-slate-500">{job.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 pl-16">
                {job.achievements.map((achievement, aIndex) => (
                  <li key={aIndex} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0"></div>
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
