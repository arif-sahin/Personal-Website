import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work' as const,
    title: 'Board Member',
    org: 'Software Club — Karadeniz Technical University',
    period: '2023 – 2025',
    description:
      'Organized and led technology summits, seminars, webinars, and 101 training sessions for 100+ student members.',
  },
];

const education = [
  {
    title: 'Bachelor of Science: Software Engineering',
    org: 'Karadeniz Technical University',
    period: '2022 – Present',
    detail: 'GPA: 3.39',
  },
  {
    title: 'Bachelor of Art: Computer Science — Erasmus+',
    org: 'University of Lodz',
    period: 'March 2025 – July 2025',
    detail: 'Exchange Program',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-16"
        >
          Experience & Education
        </motion.h2>

        <div className="max-w-3xl mx-auto grid gap-12 md:grid-cols-2">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={18} className="text-purple-600" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experiences.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6 border-l-2 border-purple-100"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-purple-600" />
                  <p className="text-xs font-medium text-purple-600 mb-1">{item.period}</p>
                  <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{item.org}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={18} className="text-purple-600" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6 border-l-2 border-purple-100"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-purple-600" />
                  <p className="text-xs font-medium text-purple-600 mb-1">{item.period}</p>
                  <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500 mb-1">{item.org}</p>
                  <p className="text-sm text-gray-400">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
