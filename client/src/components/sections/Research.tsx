'use client';

import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Sparkles, 
  Brain, 
  Shield, 
  ArrowRight,
  Microscope,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { research } from '@/data/resume';

export default function Research() {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'text-emerald-400 bg-emerald-400/10';
      case 'Research': return 'text-blue-400 bg-blue-400/10';
      case 'Ongoing': return 'text-amber-400 bg-amber-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <section id="research" className="section bg-bg-secondary/50">
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
            <FlaskConical size={16} className="text-accent-primary" />
            <span className="text-sm text-slate-300">Research Lab</span>
          </div>
          <h2 className="heading-lg mb-4">
            Experiments & <span className="text-gradient">Exploration</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Continuous learning through hands-on experimentation. Bridging the gap between 
            cutting-edge research and practical implementation.
          </p>
        </motion.div>

        {/* Current Research */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Microscope className="text-accent-primary" size={24} />
            <h3 className="heading-sm">Current Experiments</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {research.current.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="glass-card p-6 group hover:border-accent-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                    <Brain size={20} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                <h4 className="font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs bg-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Future Research */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Rocket className="text-accent-secondary" size={24} />
            <h3 className="heading-sm">Future Research Roadmap</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {research.future.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="glass-card p-6 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="p-2 rounded-lg bg-accent-secondary/10 text-accent-secondary w-fit mb-4">
                  <Lightbulb size={20} />
                </div>

                <h4 className="font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Research Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 text-center max-w-3xl mx-auto"
        >
          <Sparkles className="text-accent-primary mx-auto mb-4" size={32} />
          <h4 className="heading-sm mb-4">Research Philosophy</h4>
          <p className="text-slate-400 leading-relaxed">
            I believe in learning by building. Every experiment is an opportunity to understand 
            the nuances of AI systems—what works, what doesn't, and why. The goal is not just 
            to replicate papers, but to internalize concepts deeply enough to apply them creatively.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
