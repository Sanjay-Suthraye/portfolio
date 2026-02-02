import { portfolioData } from '../data/portfolioData';
import { FiBriefcase, FiDownload } from 'react-icons/fi';

const Experience = () => {
  const { experience } = portfolioData;

  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/Sanjay_DS_AI_7YOE_GE.pdf'; // You'll need to add this file to public folder
    link.download = 'Sanjay_Suthraye_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-center">
          Work Experience
        </h3>
        <p className="text-center text-slate-600 dark:text-gray-400 mb-8">
          7+ years of building AI/ML solutions in enterprise environments
        </p>
        
        {/* Download Resume Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <FiDownload size={20} />
            Download Full Resume
          </button>
        </div>
        
        {/* Experience Timeline - Simplified */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className="card hover:scale-105 transition-transform duration-300">
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                      {job.position}
                    </h4>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      <FiBriefcase size={18} />
                      {job.company}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-gray-400">
                      {job.duration}
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>
                </div>
                
                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
