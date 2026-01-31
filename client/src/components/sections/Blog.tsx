'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight,
  Sparkles,
  FileText,
  Brain,
  Layers
} from 'lucide-react';

// Placeholder blog posts structure
const blogPosts = [
  {
    id: 1,
    title: 'Building Multi-Agent Systems with LangGraph',
    excerpt: 'A deep dive into orchestrating multiple AI agents for complex reasoning tasks. Exploring state management and agent communication patterns.',
    category: 'AI Agents',
    readTime: '8 min read',
    date: 'Coming Soon',
    featured: true,
    icon: Brain,
  },
  {
    id: 2,
    title: 'System Design for AI Applications',
    excerpt: 'How to architect scalable AI systems that handle real-world constraints like latency, cost, and reliability.',
    category: 'System Design',
    readTime: '12 min read',
    date: 'Coming Soon',
    featured: true,
    icon: Layers,
  },
  {
    id: 3,
    title: 'Privacy-First AI: Running LLMs Locally',
    excerpt: 'Exploring offline LLM deployment with Mistral-7B. Trade-offs, optimizations, and real-world applications.',
    category: 'GenAI',
    readTime: '10 min read',
    date: 'Coming Soon',
    featured: false,
    icon: FileText,
  },
  {
    id: 4,
    title: 'LLM Fine-Tuning: A Practical Guide',
    excerpt: 'From data preparation to deployment—a comprehensive guide to fine-tuning large language models for domain-specific tasks.',
    category: 'GenAI',
    readTime: '15 min read',
    date: 'Coming Soon',
    featured: false,
    icon: Sparkles,
  },
];

const categories = ['All', 'AI Agents', 'System Design', 'GenAI'];

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="label text-accent-primary mb-3 block">Knowledge Sharing</span>
          <h2 className="heading-lg mb-4">
            Blog & <span className="text-gradient">Insights</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Technical deep-dives, learnings from building AI systems, and thoughts on the 
            future of AI engineering. Coming soon.
          </p>
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-12 text-center border-accent-primary/30"
        >
          <Sparkles className="mx-auto mb-3 text-accent-primary" size={32} />
          <h3 className="heading-sm mb-2">Blog Launching Soon</h3>
          <p className="text-slate-400 max-w-lg mx-auto">
            I'm currently working on detailed write-ups about AI system design, agent architectures, 
            and lessons learned from building production AI systems.
          </p>
        </motion.div>

        {/* Blog Posts Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-accent-primary/30 transition-all cursor-pointer opacity-80 hover:opacity-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary shrink-0">
                  <post.icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-full text-xs bg-accent-primary/10 text-accent-primary">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">
            Want to be notified when new articles are published?
          </p>
          <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
            />
            <motion.button
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={18} />
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
