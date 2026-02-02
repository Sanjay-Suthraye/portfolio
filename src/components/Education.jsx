import { portfolioData } from '../data/portfolioData';
import { FiBook } from 'react-icons/fi';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-container bg-white dark:bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-center">
          Education
        </h3>
        <p className="text-center text-slate-600 dark:text-gray-400 mb-16">
          Academic foundation in AI and Engineering
        </p>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="card hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                  <FiBook className="text-2xl text-primary-600 dark:text-primary-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-gray-400 mt-2">
                    GPA: <span className="font-semibold">{edu.gpa}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
