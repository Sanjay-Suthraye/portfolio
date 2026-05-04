import { portfolioData } from '../data/portfolioData';
import { FiBook } from 'react-icons/fi';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-widest text-center">
          Education
        </h3>
        <p className="text-center text-slate-500 mb-16">
          Academic foundation in AI and Engineering
        </p>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-50 rounded-lg">
                  <FiBook className="text-2xl text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h4>
                      <p className="text-primary-600 font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
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
