'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, Sparkles, MessageSquare, ArrowRight, Rocket, Brain, Code2, Zap } from 'lucide-react';
import { personalInfo } from '@/data/resume';
import { useEffect, useState } from 'react';

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <>{count}{suffix}</>;
}

// Floating icon component
function FloatingIcon({ icon: Icon, delay, x, y }: { icon: any; delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute text-accent-primary/20"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon size={32} />
    </motion.div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: 500, suffix: '+', label: 'Problems Solved', icon: Code2, color: '#6366f1' },
    { value: 4, suffix: '+', label: 'AI Projects', icon: Brain, color: '#8b5cf6' },
    { value: 9.33, suffix: '', label: 'GenAI CGPA', icon: Zap, color: '#a855f7' },
    { value: 2025, suffix: '', label: 'SIH Participant', icon: Rocket, color: '#ec4899' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background gradient that follows mouse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      
      {/* Floating decorative icons */}
      <FloatingIcon icon={Brain} delay={0} x="10%" y="20%" />
      <FloatingIcon icon={Code2} delay={1} x="85%" y="25%" />
      <FloatingIcon icon={Zap} delay={2} x="15%" y="70%" />
      <FloatingIcon icon={Rocket} delay={1.5} x="80%" y="65%" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated badge */}
          <motion.div
            variants={floatVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 relative group cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
              }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-slate-200 font-medium">Available for opportunities</span>
            <Sparkles size={14} className="text-accent-primary" />
          </motion.div>

          {/* Main heading with dramatic animation */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span 
              className="block text-xl md:text-2xl text-slate-400 mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.span>
            <h1 className="heading-xl relative inline-block">
              <motion.span
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, #6366f1 25%, #8b5cf6 50%, #a855f7 75%, #ec4899 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                {personalInfo.name}
              </motion.span>
              {/* Glow effect behind name */}
              <motion.div
                className="absolute -inset-4 rounded-2xl -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3), transparent 70%)',
                  filter: 'blur(20px)',
                }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h1>
          </motion.div>

          {/* Roles with typing effect style */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {personalInfo.roles.map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.15 }}
                className="px-4 py-2 rounded-lg text-base md:text-lg font-medium"
                style={{
                  background: `linear-gradient(135deg, rgba(99, 102, 241, ${0.15 - index * 0.03}), rgba(139, 92, 246, ${0.15 - index * 0.03}))`,
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'rgba(99, 102, 241, 0.5)',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                }}
              >
                <span className="text-slate-200">{role}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* Description with highlighted keywords */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building{' '}
            <span className="text-white font-semibold relative inline-block group">
              production-grade AI systems
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>{' '}
            with a research-driven approach. Specializing in{' '}
            <motion.span 
              className="text-accent-primary font-medium"
              whileHover={{ scale: 1.05 }}
            >AI Agents</motion.span>,{' '}
            <motion.span 
              className="text-accent-secondary font-medium"
              whileHover={{ scale: 1.05 }}
            >LLM fine-tuning</motion.span>, and{' '}
            <motion.span 
              className="text-pink-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >privacy-first solutions</motion.span>.
          </motion.p>

          {/* CTA Buttons with enhanced effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-2">
                <Sparkles size={18} />
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.a
              href="#research"
              className="px-8 py-4 rounded-xl font-semibold border-2 border-white/20 text-white hover:border-accent-primary hover:bg-accent-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Research & Experiments
            </motion.a>

            <motion.a
              href="/J_Ganesh_Resume_jan26.pdf"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              Resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={18} />
              Contact
            </motion.button>
          </motion.div>

          {/* Stats with animated counters and icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="group relative p-6 rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: `${stat.color}50`,
                  boxShadow: `0 10px 30px ${stat.color}20`
                }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)`,
                  }}
                />
                
                <div className="relative">
                  <stat.icon size={24} style={{ color: stat.color }} className="mx-auto mb-3 opacity-80" />
                  <div 
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{
                      background: `linear-gradient(135deg, #fff, ${stat.color})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.label === 'SIH Participant' ? 'SIH' : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
