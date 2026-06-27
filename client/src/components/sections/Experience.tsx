'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Brain,
  Server,
  ChevronRight,
  Sparkles,
  GitBranch,
  ExternalLink
} from 'lucide-react';
import { technicalExperience, openSourceContributions } from '@/data/resume';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const experienceIcons = [Brain, Server];
  const experienceColors = ['#8b5cf6', '#10b981'];

  return (
    <section id="experience" className="section bg-bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Briefcase size={16} className="text-accent-primary" />
            <span className="text-sm text-slate-300">Work & Contributions</span>
          </div>
          <h2 className="heading-lg mb-4">
            Technical <span className="text-gradient">Experience</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            AI/ML engineer and startup founder — deploying real-world production systems,
            building RAG pipelines, fine-tuning LLMs, and fixing complex bugs in distributed architectures.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />

          <div className="space-y-8">
            {technicalExperience.map((exp, index) => {
              const Icon = experienceIcons[index] || Brain;
              const color = experienceColors[index] || '#6366f1';

              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2 md:left-6 top-2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}80)`,
                      boxShadow: `0 0 20px ${color}50`,
                    }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>

                  <div className="glass-card p-6 group hover:border-accent-primary/30 transition-all">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2.5 rounded-xl"
                          style={{ background: `${color}15` }}
                        >
                          <Icon size={22} style={{ color }} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg group-hover:text-accent-primary transition-colors">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-slate-500">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.technologies.slice(0, 8).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-xs bg-white/5 text-slate-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 8 && (
                        <span className="px-2 py-0.5 rounded-md text-xs text-slate-500">
                          +{exp.technologies.length - 8} more
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight
                            size={14}
                            className="text-accent-primary shrink-0 mt-1"
                          />
                          <span className="text-slate-400 text-sm leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Open Source Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <GitBranch size={22} className="text-emerald-500" />
            </div>
            <h3 className="heading-sm">Open Source Contributions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openSourceContributions.map((contrib, index) => (
              <motion.a
                key={contrib.name}
                href={contrib.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-emerald-500/30 transition-all"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Sparkles size={18} className="text-emerald-500" />
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-slate-500 group-hover:text-emerald-500 transition-colors"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {contrib.name}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {contrib.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
