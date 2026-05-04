import { portfolioData } from '../data/portfolioData';

const Collaborations = () => {
  const { collaborations, volunteering } = portfolioData;

  return (
    <section id="collaborations" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Collaborations */}
        <div className="mb-20">
          <div className="section-label">
            <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Network</span>
          </div>
          <h3 className="text-4xl font-display font-bold text-white mb-14">Collaborations</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="card group flex flex-col items-center justify-center py-8 animate-fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-full h-20 flex items-center justify-center mb-4">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <p className="font-mono text-xs text-slate-600 uppercase tracking-widest text-center">{collab.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div>
          <div className="section-label">
            <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Community</span>
          </div>
          <h3 className="text-4xl font-display font-bold text-white mb-14">Volunteering</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {volunteering.map((item, index) => (
              <div
                key={index}
                className="card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display font-bold text-white text-lg">{item.role}</h4>
                  <span className="font-mono text-xs text-primary-400 border border-primary-900 px-2 py-1 rounded whitespace-nowrap ml-3">
                    {item.cause}
                  </span>
                </div>
                <p className="font-mono text-xs text-primary-400 mb-1">{item.organization}</p>
                {item.duration && <p className="font-mono text-xs text-slate-600 mb-3">{item.duration}</p>}
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
