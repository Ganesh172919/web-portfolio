'use client';

import { motion } from 'framer-motion';
import { Brain, Server, Shield, Lightbulb, GraduationCap, Award, FlaskConical, Zap, Wrench } from 'lucide-react';
import { personalInfo, education } from '@/data/resume';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Core identity highlights
  const coreHighlights = [
    {
      icon: FlaskConical,
      title: 'Researcher',
      description: 'Research-first approach with hands-on experiments in LLM fine-tuning, hallucination mitigation, and large context window optimization. Deep understanding of transformer architectures.',
      color: '#8b5cf6',
    },
    {
      icon: Zap,
      title: 'Efficient Learner',
      description: '9.33 CGPA in GenAI Minor covering AI/ML/DL, LLMs, and AI Agents. Self-taught LangChain, LangGraph, and advanced prompting. 500+ competitive programming problems solved.',
      color: '#f59e0b',
    },
    {
      icon: Wrench,
      title: 'Builder',
      description: 'Shipped 4+ production-ready AI projects—from multi-agent financial systems to offline LLM deployments. 40% performance optimization. Focus on clean architecture and scalability.',
      color: '#10b981',
    },
  ];

  const philosophyItems = [
    {
      icon: Brain,
      title: 'AI-First Thinking',
      description: 'Building systems where AI is the core intelligence, not just an add-on. Focused on autonomous agents that reason, plan, and execute.',
    },
    {
      icon: Server,
      title: 'Backend-First Architecture',
      description: 'Strong foundations in system design, API architecture, and scalable infrastructure. The backend powers everything.',
    },
    {
      icon: Shield,
      title: 'Privacy-Preserving AI',
      description: 'Committed to building AI that respects user privacy. Offline LLMs, local inference, and data sovereignty.',
    },
    {
      icon: Lightbulb,
      title: 'Research-Driven Engineering',
      description: 'Every project starts with understanding the latest research. Building bridges between papers and production.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="label text-accent-primary mb-3 block">About Me</span>
          <h2 className="heading-lg mb-4">
            How I Think About <span className="text-gradient">AI Systems</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            I approach AI engineering with a systems mindset—understanding how components 
            interact, fail, and scale to build robust, production-ready solutions.
          </p>
        </motion.div>

        {/* Core Identity - Researcher, Learner, Builder */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {coreHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 text-center group relative overflow-hidden"
              style={{ borderColor: `${item.color}30` }}
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }}
              />
              
              <div 
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon size={32} style={{ color: item.color }} />
              </div>
              
              <h3 className="heading-sm text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="glass-card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary group-hover:bg-accent-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-accent-primary" size={28} />
            <h3 className="heading-md">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-accent-primary shadow-glow-sm" />
                  
                  <div className="glass-card p-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-slate-400 text-sm">{edu.institution}</p>
                        <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                        {'courses' in edu && edu.courses && (
                          <p className="text-accent-primary/80 text-xs mt-2 italic">
                            {edu.courses}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {edu.highlight && <Award size={16} className="text-yellow-500" />}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.highlight 
                            ? 'bg-accent-primary/20 text-accent-primary' 
                            : 'bg-white/5 text-slate-300'
                        }`}>
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Summary Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed">
            "{personalInfo.summary}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
