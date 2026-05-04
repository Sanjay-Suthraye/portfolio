import { portfolioData } from '../data/portfolioData';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone, FiCalendar } from 'react-icons/fi';

const Contact = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="contact" className="section-container border-t" style={{ borderColor: 'var(--color-surface-500)', backgroundColor: 'var(--color-surface-800)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span className="font-mono text-xs tracking-widest uppercase text-primary-400">Contact</span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white mb-4">Let's Talk</h3>
        <p className="text-slate-500 font-mono text-sm mb-14">
          Available for new opportunities — let's find a time to connect.
        </p>

        <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
          {/* Left - info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border rounded text-slate-600" style={{ borderColor: 'var(--color-surface-500)' }}>
                <FiMail size={16} />
              </div>
              <div>
                <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-0.5">Email</p>
                <a href={`mailto:${personal.email}`} className="text-slate-300 hover:text-white text-sm transition-colors">{personal.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border rounded text-slate-600" style={{ borderColor: 'var(--color-surface-500)' }}>
                <FiPhone size={16} />
              </div>
              <div>
                <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-0.5">Phone</p>
                <a href={`tel:${personal.phone}`} className="text-slate-300 hover:text-white text-sm transition-colors">{personal.phone}</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center border rounded text-slate-600" style={{ borderColor: 'var(--color-surface-500)' }}>
                <FiMapPin size={16} />
              </div>
              <div>
                <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-0.5">Location</p>
                <p className="text-slate-300 text-sm">{personal.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center border rounded text-slate-600 hover:border-slate-500 hover:text-white transition-colors" style={{ borderColor: 'var(--color-surface-500)' }}>
                <FiGithub size={16} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border rounded text-slate-600 hover:border-slate-500 hover:text-white transition-colors" style={{ borderColor: 'var(--color-surface-500)' }}>
                <FiLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Right - Calendly */}
          <div className="flex flex-col justify-center gap-4">
            <p className="font-mono text-xs text-slate-600 uppercase tracking-widest">Schedule a Meeting</p>
            <a
              href={socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-primary-700 text-primary-400 font-bold text-xs tracking-widest uppercase rounded hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300"
            >
              <FiCalendar size={16} />
              Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
