import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
        >
          AŞ
        </motion.div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-purple-600 transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-purple-600 transition-colors"
          >
            Projects
          </a>
          <a href="#skills" className="hover:text-purple-600 transition-colors">
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-purple-600 transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com"
            target="_blank"
            rel="https://github.com/arif-sahin"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://linkedin.com"
            target="_blank"
            rel="https://www.linkedin.com/in/arif-sahin/"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            href="mailto:shnarf001@gmail.com"
            className="text-gray-600 hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
