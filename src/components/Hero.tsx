import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white to-blue-50/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-purple-600 tracking-widest uppercase mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Arif Şahin
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 font-medium mb-6"
          >
            Junior Software Engineer
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-10"
          >
            Software Engineering student at Karadeniz Technical University with a
            solid foundation in algorithms, data structures, and software design
            principles. Passionate about backend systems, blockchain, and mobile
            development.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
            >
              <FileText size={16} />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
