import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'Full-Stack ChatBot',
    description:
      'Built a full-stack AI chatbot with a React frontend and Python backend, integrated with Cohere API. Deployed on Railway using worker, server, and Redis services.',
    tech: ['React.js', 'Python', 'Cohere API', 'Redis', 'Railway', 'FastAPI'],
    github: 'https://github.com/arif-sahin',
    live: 'https://chat.arifsahin.com.tr',
  },
  {
    title: 'Private-Messaging System',
    description:
      'Designed and implemented a secure client-server messaging system using hybrid AES and RSA encryption. Clients can digitally sign their messages to prove identity.',
    tech: ['Python', 'AES', 'RSA', 'Cryptography'],
    github: 'https://github.com/arif-sahin/kriptolojiProje',
  },
  {
    title: 'Gezgir App',
    description:
      'A mobile application where users can share posts about places they have visited and pin their locations on a map. Integrated Firebase Realtime-Database, Authentication, and Google Maps API.',
    tech: ['Android Studio', 'Firebase', 'Google Maps API', 'Java'],
    github: 'https://github.com/arif-sahin',
  },
  {
    title: 'Avacabus — APR/APY Calculator',
    description:
      'Web tool calculating real-time APR/APY for Avalanche DeFi protocols with a serverless API backend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Hono', 'Serverless API'],
    live: 'https://avax-apr-calculations.vercel.app',
  },
  {
    title: 'Store Database Model',
    description:
      'Designed a normalized relational database schema for a store system using SQL Developer Data Modeler. Implemented stored procedures, triggers, and views with Oracle PL/SQL.',
    tech: ['SQL', 'Oracle PL/SQL'],
    github: 'https://github.com/arif-sahin/Store/tree/main',
  },
  {
    title: 'Statistical Calculations',
    description:
      'Developed programs for various probability and statistics calculations using Rust for a university course.',
    tech: ['Rust'],
    github: 'https://github.com/arif-sahin/istatistik-hesaplamalar-',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 text-sm mb-14 max-w-md mx-auto"
        >
          A selection of projects I've built during my studies and personal exploration.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-100/40"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-50">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-500 hover:text-purple-700 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
