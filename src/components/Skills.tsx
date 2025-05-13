import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Github as Git, Brain, Coffee } from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: <Code2 className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Java', level: 60, description: 'Maven' },
      { name: 'Rust', level: 50, description: 'Systems programming, CLI tools' },
      { name: 'TypeScript', level: 50, description: 'React, Node.js development' },
      { name: 'Python', level: 50, description: 'Data analysis, Automation' }
    ]
  },
  {
    name: 'Backend Technologies',
    icon: <Server className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Node.js', level: 50, description: 'Express, REST APIs' },
    ]
  },
  {
    name: 'Databases',
    icon: <Database className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'MSSQL', level: 45, description: 'RDBMS, Query optimization' },
      { name: 'MongoDB', level: 40, description: 'NoSQL, Document databases' }
    ]
  },
  {
    name: 'Version Control & Tools',
    icon: <Git className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Git', level: 65, description: 'Version control, Collaboration' },      
    ]
  },
  {
    name: 'Soft Skills',
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Problem Solving', level: 75, description: 'Analytical thinking, Debug skills' },
      { name: 'Team Collaboration', level: 70, description: 'Agile methodologies' }
    ]
  },
  {
    name: 'Development Practices',
    icon: <Coffee className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Clean Code', level: 65, description: 'SOLID principles, Design patterns' },
    ]
  }
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
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{skill.name}</span>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
