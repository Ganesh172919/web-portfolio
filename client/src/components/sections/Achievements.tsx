'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Code, 
  Award, 
  GraduationCap,
  Medal,
  Target,
  Flame
} from 'lucide-react';
import { achievements } from '@/data/resume';

export default function Achievements() {
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

  return (
    <section id="achievements" className="section bg-bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="label text-accent-primary mb-3 block">Track Record</span>
          <h2 className="heading-lg mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Competitive programming, hackathons, and academic excellence—proof of consistent 
            dedication and problem-solving ability.
          </p>
        </motion.div>

        {/* Coding Profiles */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Code className="text-accent-primary" size={24} />
            <h3 className="heading-sm">Competitive Programming</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {achievements.coding.map((item) => (
              <motion.div
                key={item.platform}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 text-center group"
                style={{
                  borderColor: `${item.color}20`,
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Target size={32} style={{ color: item.color }} />
                </div>
                <h4 className="font-semibold text-white text-lg mb-1">{item.platform}</h4>
                <div className="text-2xl font-bold text-gradient mb-1">{item.stats}</div>
                <div className="text-sm text-slate-400">{item.rating}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hackathons */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Trophy className="text-yellow-500" size={24} />
            <h3 className="heading-sm">Hackathons</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {achievements.hackathons.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="glass-card p-6 group hover:border-yellow-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Flame size={20} style={{ color: item.color }} />
                  </div>
                  <span className="text-xs text-slate-500">{item.year}</span>
                </div>
                <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                <div 
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <Medal size={14} />
                  {item.achievement}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Academic Excellence */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap className="text-emerald-500" size={24} />
            <h3 className="heading-sm">Academic Excellence</h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {achievements.academic.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-5 text-center group"
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center bg-emerald-500/10">
                  <Award size={24} className="text-emerald-500" />
                </div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Problems Solved', icon: Code },
            { value: '1510', label: 'LeetCode Rating', icon: Target },
            { value: 'Top 5%', label: 'JEE Mains', icon: Trophy },
            { value: 'Participant', label: 'SIH 2025', icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon size={24} className="mx-auto mb-2 text-accent-primary" />
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
