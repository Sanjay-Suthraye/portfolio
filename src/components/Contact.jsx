import { portfolioData } from '../data/portfolioData';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiPhone, FiCalendar } from 'react-icons/fi';

const Contact = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="contact" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-4 uppercase tracking-widest text-center">
          Get In Touch
        </h3>
        <p className="text-center text-slate-500 mb-12">
          Let's schedule a time to connect and discuss opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {/* Left */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FiMail className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href={`mailto:${personal.email}`} className="text-slate-700 hover:text-primary-600 transition-colors">{personal.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FiPhone className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <a href={`tel:${personal.phone}`} className="text-slate-700 hover:text-primary-600 transition-colors">{personal.phone}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <FiMapPin className="text-xl text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-700">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href={socials.github} target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-slate-100 rounded-lg hover:bg-primary-50 transition-colors group" aria-label="GitHub">
                  <FiGithub className="text-2xl text-slate-600 group-hover:text-primary-600 transition-colors" />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-slate-100 rounded-lg hover:bg-primary-50 transition-colors group" aria-label="LinkedIn">
                  <FiLinkedin className="text-2xl text-slate-600 group-hover:text-primary-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="animate-slide-up flex flex-col justify-center items-center gap-6">
            <h4 className="text-xl font-bold text-slate-900 self-start">Schedule a Meeting</h4>
            <a href={socials.calendly} target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <FiCalendar />
              Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
