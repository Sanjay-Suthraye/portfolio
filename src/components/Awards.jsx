import { portfolioData } from '../data/portfolioData';
import { FiAward } from 'react-icons/fi';

const Awards = () => {
  const { awards } = portfolioData;

  return (
    <section id="awards" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Recognition</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-14">Awards</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="card animate-slide-up hover:scale-[1.02] transition-transform duration-300" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded border mt-0.5" style={{ borderColor: 'var(--color-surface-500)' }}>
                  <FiAward className="text-yellow-500" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg mb-1">{award.title}</h4>
                  <p className="font-mono text-xs text-primary-400 mb-1">{award.issuer}</p>
                  <p className="font-mono text-xs text-slate-600 mb-3">{award.date}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{award.description}</p>
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
