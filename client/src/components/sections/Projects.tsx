'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  ChevronRight, 
  Bot, 
  Layers, 
  Zap,
  Filter
} from 'lucide-react';
import { projects } from '@/data/resume';

const categories = ['All', 'AI Agents', 'Full-Stack', 'Performance'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Agents': return Bot;
      case 'Full-Stack': return Layers;
      case 'Performance': return Zap;
      default: return Layers;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="label text-accent-primary mb-3 block">Featured Work</span>
          <h2 className="heading-lg mb-4">
            Production-Grade <span className="text-gradient">AI Projects</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto mb-8">
            Real systems built with real constraints. Each project represents a deep dive 
            into solving complex problems with AI-first architectures.
          </p>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter size={18} className="text-slate-400 mr-2" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent-primary text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`glass-card overflow-hidden group ${
                    project.featured ? 'border-accent-primary/30' : ''
                  }`}
                >
                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                          <CategoryIcon size={20} />
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h3 className="font-semibold text-white group-hover:text-accent-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      {project.featured && (
                        <span className="px-2 py-1 rounded-full text-xs bg-accent-primary/20 text-accent-primary">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md text-xs bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md text-xs text-slate-500">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Highlights Preview */}
                    <div className="space-y-1 mb-4">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                          <ChevronRight size={12} className="text-accent-primary" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-slate-500">{project.period}</div>
                  </div>

                  {/* Project Footer */}
                  <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-black/20">
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    </div>
                    
                    <motion.a
                      href={`#project-${project.id}`}
                      className="flex items-center gap-1.5 text-sm text-accent-primary hover:text-accent-secondary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Deep Dive
                      <ChevronRight size={16} />
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <p className="text-slate-300 mb-4">
              These are just a few highlights. I'm a <span className="text-accent-primary font-semibold">passionate developer</span> who 
              loves building and experimenting with new technologies. Check out my GitHub for more projects, 
              experiments, and contributions!
            </p>
            <motion.a
              href="https://github.com/Ganesh172919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              Explore More on GitHub
              <ChevronRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
