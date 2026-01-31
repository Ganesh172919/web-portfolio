'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Bot, 
  Server, 
  Layout, 
  Database,
  Wrench,
  Sparkles
} from 'lucide-react';
import { skills } from '@/data/resume';

type SkillCategory = keyof typeof skills;

const categoryIcons: Record<SkillCategory, typeof Code2> = {
  programming: Code2,
  aiml: Brain,
  aiAreas: Bot,
  backend: Server,
  frontend: Layout,
  databases: Database,
  tools: Wrench,
};

const categoryColors: Record<SkillCategory, string> = {
  programming: '#6366f1',
  aiml: '#8b5cf6',
  aiAreas: '#ec4899',
  backend: '#10b981',
  frontend: '#f59e0b',
  databases: '#06b6d4',
  tools: '#64748b',
};

// Animated progress bar with glow
function AnimatedProgressBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay * 50);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
          boxShadow: `0 0 15px ${color}50`,
          width: `${width}%`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      {/* Shine effect */}
      <motion.div
        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-100%', '400%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('aiAreas');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${categoryColors[activeCategory]}10, transparent 70%)`,
          transition: 'background 0.5s ease',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${categoryColors[activeCategory]}30, ${categoryColors[activeCategory]}10)` }}
          >
            <Sparkles size={28} style={{ color: categoryColors[activeCategory] }} />
          </motion.div>
          <span className="label text-accent-primary mb-3 block">Technical Expertise</span>
          <h2 className="heading-lg mb-4">
            Skills & <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            A deep technical foundation across AI/ML, backend systems, and full-stack development.
          </p>
        </motion.div>

        {/* Category Tabs - Pill Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12 p-2 rounded-2xl max-w-3xl mx-auto"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            const isActive = activeCategory === category;
            
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[category]}30, ${categoryColors[category]}10)`,
                      border: `1px solid ${categoryColors[category]}40`,
                      boxShadow: `0 0 30px ${categoryColors[category]}20`,
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon 
                  size={16} 
                  className="relative z-10 transition-colors" 
                  style={{ color: isActive ? categoryColors[category] : '#94a3b8' }} 
                />
                <span className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                  {skills[category].title}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills[activeCategory].items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative p-5 rounded-xl group cursor-default overflow-hidden"
                  style={{
                    background: hoveredSkill === skill.name 
                      ? `linear-gradient(135deg, ${categoryColors[activeCategory]}15, ${categoryColors[activeCategory]}05)`
                      : 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                    border: hoveredSkill === skill.name 
                      ? `1px solid ${categoryColors[activeCategory]}40`
                      : '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Glow effect on hover */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        background: `radial-gradient(circle at center, ${categoryColors[activeCategory]}20, transparent 70%)`,
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {skill.featured && (
                          <motion.div 
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: categoryColors[activeCategory] }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                      </div>
                      <motion.span 
                        className="text-lg font-bold"
                        style={{ color: categoryColors[activeCategory] }}
                        animate={hoveredSkill === skill.name ? { scale: 1.1 } : { scale: 1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <AnimatedProgressBar 
                      level={skill.level} 
                      color={categoryColors[activeCategory]} 
                      delay={index}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Featured Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Core Focus', value: 'AI Agents', icon: Bot, color: '#ec4899' },
            { label: 'Primary Language', value: 'Python', icon: Code2, color: '#6366f1' },
            { label: 'Framework', value: 'LangChain', icon: Brain, color: '#8b5cf6' },
            { label: 'Backend', value: 'Node.js', icon: Server, color: '#10b981' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl text-center overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: `${item.color}50`,
                boxShadow: `0 20px 40px ${item.color}20`
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${item.color}20, transparent 70%)`,
                }}
              />

              <motion.div
                className="relative z-10"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${item.color}20` }}
                >
                  <item.icon size={28} style={{ color: item.color }} />
                </div>
                <div 
                  className="text-xl font-bold mb-1"
                  style={{
                    background: `linear-gradient(135deg, #fff, ${item.color})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {item.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
