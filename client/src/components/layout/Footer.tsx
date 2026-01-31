'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code } from 'lucide-react';
import { personalInfo, navigation } from '@/data/resume';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center font-bold text-xl">
                JG
              </div>
              <div>
                <div className="font-semibold text-lg">{personalInfo.name}</div>
                <div className="text-sm text-slate-400">AI Architect & GenAI Engineer</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building production-grade AI systems with a research-driven approach. 
              Specializing in AI Agents, LLMs, and privacy-first solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navigation.slice(0, 6).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-white text-sm transition-colors py-1"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Code size={16} />
                <span>500+ Problems Solved</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <motion.a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg glass-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name}. Built with
              <Heart size={14} className="text-red-500 mx-1" />
              and lots of coffee.
            </p>
            <span className="student-crafted">
              <Code size={14} />
              Designed & Developed by a Student
            </span>
          </div>
          
          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-white glass-button text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
