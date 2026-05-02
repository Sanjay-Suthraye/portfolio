import { portfolioData } from '../data/portfolioData';

const Collaborations = () => {
  const { collaborations, volunteering } = portfolioData;

  return (
    <section id="collaborations" className="section-container bg-white dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Collaborations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-center">
            Collaborations
          </h3>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-12">
            Academic and professional partnerships
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
            {collaborations.map((collab, index) => (
              <div key={index}
                className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-full h-24 flex items-center justify-center mb-3">
                  <img src={collab.logo} alt={collab.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-300 font-medium mt-2">{collab.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-center">
            Volunteering
          </h3>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-12">
            Giving back to communities and the next generation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {volunteering.map((item, index) => (
              <div key={index}
                className="p-6 bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h4>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {item.cause}
                  </span>
                </div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{item.organization}</p>
                {item.duration && <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{item.duration}</p>}
                <p className="text-sm text-slate-700 dark:text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
