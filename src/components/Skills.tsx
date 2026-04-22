import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { type ReactNode } from 'react';

interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: <Code2 size={18} className="text-purple-600" />,
    skills: ['Java', 'Rust', 'JavaScript', 'Python', 'C/C++', 'SQL'],
  },
  {
    name: 'Frameworks & Tools',
    icon: <Server size={18} className="text-purple-600" />,
    skills: ['FastAPI', 'React.js', 'Android Studio', 'Redis', 'Railway'],
  },
  {
    name: 'Databases',
    icon: <Database size={18} className="text-purple-600" />,
    skills: ['Oracle PL/SQL', 'SQL', 'Redis', 'Firebase'],
  },
  {
    name: 'Other',
    icon: <Wrench size={18} className="text-purple-600" />,
    skills: ['Algorithms', 'Git', 'REST APIs', 'Data Structures'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-4"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-400 text-sm mb-14 max-w-md mx-auto"
        >
          Technologies and tools I work with.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-gray-50/60 rounded-2xl p-6 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-5">
                {category.icon}
                <h3 className="text-sm font-semibold text-gray-900">
                  {category.name}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-white text-gray-600 text-xs font-medium rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
