import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', level: 60 },
  { name: 'Rust', level: 50 },
  { name: 'TypeScript', level: 50 },
  { name: 'Node.js', level: 50 },
  { name: 'Python', level: 50 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
