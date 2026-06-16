'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Brain,
  FileText,
  Layers,
  Lightbulb,
} from 'lucide-react';
import { blogPreview } from '@/data/resume';

/**
 * Map category names to their representative icons.
 * WHY: Each blog category gets a distinct visual identity through icons,
 * making it easier to scan and identify post types at a glance.
 */
const categoryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  'AI Philosophy': Brain,
  'Learning': FileText,
  'AI Engineering': Layers,
  'Industry Insights': Lightbulb,
};

/**
 * Blog preview section for the homepage.
 *
 * PURPOSE: Shows a curated selection of blog posts to drive traffic to the full blog.
 * DATA SOURCE: Imports from resume.ts (single source of truth) instead of hardcoding.
 *
 * DESIGN DECISION: We map over blogPreview and resolve icons dynamically by category
 * rather than storing React components in the data layer. This keeps resume.ts
 * as a pure data file (serializable, no React dependency).
 */
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
            Technical deep-dives, learnings from building AI systems, and thoughts on
            AI engineering philosophy. Honest reflections on what actually works.
          </p>
        </motion.div>

        {/* Featured Insight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-12 text-center border-accent-primary/30"
        >
          <Sparkles className="mx-auto mb-3 text-accent-primary" size={32} />
          <h3 className="heading-sm mb-2">Thoughts on AI Engineering</h3>
          <p className="text-slate-400 max-w-lg mx-auto">
            Sharing honest insights about building AI systems, reading research papers,
            and navigating the rapidly evolving AI landscape as an engineer.
          </p>
        </motion.div>

        {/* Blog Posts Preview — data sourced from resume.ts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {blogPreview.map((post, index) => {
            const Icon = categoryIcons[post.category] ?? FileText;
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block glass-card p-6 group hover:border-accent-primary/30 transition-all cursor-pointer opacity-80 hover:opacity-100 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary shrink-0">
                      <Icon size={24} />
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
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <BookOpen size={18} />
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
