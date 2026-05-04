import { portfolioData } from '../data/portfolioData';
import { FiAward } from 'react-icons/fi';

const Awards = () => {
  const { awards } = portfolioData;

  return (
    <section id="awards" className="section-container bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-widest text-center">
          Awards & Recognition
        </h3>
        <p className="text-center text-slate-500 mb-16">
          Recognition for excellence in AI/ML and Data Science
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="card hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <FiAward className="text-2xl text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h4>
                  <p className="text-primary-600 font-medium mb-2">{award.issuer}</p>
                  <p className="text-sm text-slate-500 mb-3">{award.date}</p>
                  <p className="text-slate-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
