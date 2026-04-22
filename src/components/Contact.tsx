import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: 'sahinarif051@gmail.com',
    href: 'mailto:sahinarif051@gmail.com',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Türkiye',
  },
];

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/arif-sahin', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/arif-sahin/', label: 'LinkedIn' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 text-sm mb-14 max-w-md mx-auto"
        >
          Have a question or want to work together? Drop me a message.
        </motion.p>

        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-purple-600">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-600">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-purple-600 hover:border-purple-300 transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                id="contact-name"
                placeholder="Name"
                className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 outline-none transition-all"
              />
              <input
                type="email"
                id="contact-email"
                placeholder="Email"
                className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 outline-none transition-all"
              />
            </div>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500/20 focus:border-purple-400 outline-none transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Send Message
              <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
