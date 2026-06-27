'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Filter,
  Sparkles,
  BookOpen,
  Brain,
  FileText,
  Layers,
  Lightbulb,
  Tag,
  Network,
} from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

const categoryIcons: Record<string, typeof Brain> = {
  'AI Philosophy': Brain,
  'Learning': FileText,
  'AI Engineering': Layers,
  'Industry Insights': Lightbulb,
  'System Design': Network,
};

export default function BlogListClient({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <div className="relative pt-28 pb-16">
        <div className="container-custom">
          {/* Back to home */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Home
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-accent-primary/10">
                <BookOpen size={28} className="text-accent-primary" />
              </div>
              <div>
                <h1 className="heading-lg">
                  Blog & <span className="text-gradient">Insights</span>
                </h1>
              </div>
            </div>
            <p className="body-md max-w-2xl">
              Technical deep-dives, learnings from building AI systems, and
              honest reflections on what actually works in AI engineering.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-slate-500" />
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === 'All'
                    ? 'bg-accent-primary text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-accent-primary text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Posts Count */}
          <p className="text-sm text-slate-500 mb-2">
            {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}{' '}
            {activeCategory !== 'All' && `in ${activeCategory}`}
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="container-custom pb-20">
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => {
              const IconComponent =
                categoryIcons[post.category] || Sparkles;
              return (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block glass-card p-6 group hover:border-accent-primary/30 transition-all h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary shrink-0">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full text-xs bg-accent-primary/10 text-accent-primary">
                            {post.category}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                              Featured
                            </span>
                          )}
                        </div>

                        <h2 className="font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs bg-white/5 text-slate-400"
                            >
                              <Tag size={10} />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(post.date).toLocaleDateString(
                                'en-US',
                                {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                }
                              )}
                            </span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search size={48} className="mx-auto mb-4 text-slate-600" />
            <h3 className="heading-sm mb-2 text-slate-400">No posts found</h3>
            <p className="text-slate-500">
              Try adjusting your search or filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
