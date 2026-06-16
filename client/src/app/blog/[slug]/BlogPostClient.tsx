'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Share2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

export default function BlogPostClient({
  post,
  prevPost,
  nextPost,
}: {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <div className="relative pt-28 pb-12">
        <div className="container-custom max-w-4xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              All Posts
            </Link>
          </motion.div>

          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Category & Featured badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs bg-accent-primary/10 text-accent-primary font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500 font-medium">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-xs font-bold">
                  JG
                </div>
                <span>J. Ganesh Kumar Reddy</span>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors"
              >
                <Share2 size={14} />
                Share
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-white/5 text-slate-400 border border-white/5"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="divider-gradient" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container-custom max-w-4xl pb-16"
      >
        <div className="prose-custom">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </motion.article>

      {/* Post Navigation */}
      <div className="container-custom max-w-4xl pb-20">
        <div className="divider-gradient mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="glass-card p-5 group hover:border-accent-primary/30 transition-all"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <ChevronLeft size={14} />
                Previous Post
              </div>
              <div className="font-medium text-white group-hover:text-accent-primary transition-colors line-clamp-1">
                {prevPost.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="glass-card p-5 group hover:border-accent-primary/30 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-slate-500 mb-2">
                Next Post
                <ChevronRight size={14} />
              </div>
              <div className="font-medium text-white group-hover:text-accent-primary transition-colors line-clamp-1">
                {nextPost.title}
              </div>
            </Link>
          )}
        </div>

        {/* Back to all posts */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <BookOpen size={18} />
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
