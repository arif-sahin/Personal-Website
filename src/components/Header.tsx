import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/arif-sahin', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/arif-sahin/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:sahinarif051@gmail.com', icon: Mail, label: 'Email' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          arif<span className="text-purple-600">.</span>şahin
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Social */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.href}
              whileHover={{ y: -2 }}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 text-gray-400 hover:text-purple-600 transition-colors duration-200"
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-3 border-t border-gray-100">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
