import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const { personal, socials } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:${personal.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-container bg-white dark:bg-dark-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-widest text-center">
          Get In Touch
        </h3>
        <p className="text-center text-slate-600 dark:text-gray-400 mb-16">
          Let's discuss how I can contribute to your team
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <FiMail className="text-xl text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-400">Email</p>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-slate-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <FiMapPin className="text-xl text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-gray-400">Location</p>
                    <p className="text-slate-700 dark:text-gray-200">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-2xl text-slate-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="text-2xl text-slate-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-primary-700 dark:text-primary-300 font-medium">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm mb-2">
                  {personal.status}
                </span>
              </p>
              <p className="text-slate-600 dark:text-gray-400 mt-2">
                I'm currently available for new opportunities. Feel free to reach out!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-slate-900 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-slate-900 dark:text-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-slate-900 dark:text-white transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded shadow-lg uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
