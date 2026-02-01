'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  User, 
  Briefcase, 
  FlaskConical,
  Code2,
  Trophy,
  BookOpen,
  Mail,
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  X
} from 'lucide-react';
import { projects, personalInfo } from '@/data/resume';

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: typeof Home;
  action: () => void;
  category: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setSearch('');
  };

  const commands: CommandItem[] = [
    // Navigation
    { id: 'home', title: 'Home', subtitle: 'Go to landing section', icon: Home, action: () => scrollToSection('home'), category: 'Navigation' },
    { id: 'about', title: 'About', subtitle: 'Learn about me', icon: User, action: () => scrollToSection('about'), category: 'Navigation' },
    { id: 'projects', title: 'Projects', subtitle: 'View my work', icon: Briefcase, action: () => scrollToSection('projects'), category: 'Navigation' },
    { id: 'research', title: 'Research', subtitle: 'Experiments & exploration', icon: FlaskConical, action: () => scrollToSection('research'), category: 'Navigation' },
    { id: 'skills', title: 'Skills', subtitle: 'Technical expertise', icon: Code2, action: () => scrollToSection('skills'), category: 'Navigation' },
    { id: 'achievements', title: 'Achievements', subtitle: 'Track record', icon: Trophy, action: () => scrollToSection('achievements'), category: 'Navigation' },
    { id: 'blog', title: 'Blog', subtitle: 'Knowledge sharing', icon: BookOpen, action: () => scrollToSection('blog'), category: 'Navigation' },
    { id: 'contact', title: 'Contact', subtitle: 'Get in touch', icon: Mail, action: () => scrollToSection('contact'), category: 'Navigation' },
    
    // Projects
    ...projects.map(p => ({
      id: `project-${p.id}`,
      title: p.title,
      subtitle: p.category,
      icon: Briefcase,
      action: () => scrollToSection('projects'),
      category: 'Projects',
    })),
    
    // External Links
    { id: 'github', title: 'GitHub Profile', subtitle: personalInfo.github, icon: Github, action: () => window.open(personalInfo.githubUrl, '_blank'), category: 'Links' },
    { id: 'linkedin', title: 'LinkedIn Profile', subtitle: personalInfo.linkedin, icon: Linkedin, action: () => window.open(personalInfo.linkedinUrl, '_blank'), category: 'Links' },
    { id: 'resume', title: 'Download Resume', subtitle: 'PDF format', icon: FileText, action: () => window.open('/J_Ganesh_Resume_jan26.pdf', '_blank'), category: 'Links' },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.subtitle?.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle command selection with Enter
  const handleKeyDownInSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filteredCommands.length > 0) {
      filteredCommands[0].action();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsOpen(false); setSearch(''); }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Command Palette Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50"
            >
              <div className="mx-4 glass-card overflow-hidden border-accent-primary/20">
                {/* Search Header */}
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                  <Search size={20} className="text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDownInSearch}
                    placeholder="Search commands, projects, or navigate..."
                    className="flex-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
                    autoFocus
                  />
                  <div className="flex items-center gap-1 px-2 py-1 rounded bg-white/5 text-xs text-slate-400">
                    ESC
                  </div>
                  <button
                    onClick={() => { setIsOpen(false); setSearch(''); }}
                    className="p-1 rounded hover:bg-white/10 transition-colors"
                  >
                    <X size={16} className="text-slate-400" />
                  </button>
                </div>

                {/* Commands List */}
                <div className="max-h-80 overflow-y-auto p-2">
                  {Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category} className="mb-4 last:mb-0">
                      <div className="px-3 py-2 text-xs text-slate-500 uppercase tracking-wider">
                        {category}
                      </div>
                      {items.map((cmd) => (
                        <motion.button
                          key={cmd.id}
                          onClick={cmd.action}
                          whileHover={{ x: 4 }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-white/5 transition-colors group"
                        >
                          <div className="p-1.5 rounded-md bg-accent-primary/10 text-accent-primary">
                            <cmd.icon size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white group-hover:text-accent-primary transition-colors">
                              {cmd.title}
                            </div>
                            {cmd.subtitle && (
                              <div className="text-xs text-slate-500">
                                {cmd.subtitle}
                              </div>
                            )}
                          </div>
                          <ArrowRight size={14} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                      ))}
                    </div>
                  ))}

                  {filteredCommands.length === 0 && (
                    <div className="py-8 text-center text-slate-500">
                      No results found for &quot;{search}&quot;
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/5">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 rounded bg-white/5">↵</kbd>
                      Select
                    </span>
                  </div>
                  <span className="text-accent-primary">
                    {filteredCommands.length} results
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
