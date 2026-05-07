import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogListClient from './BlogListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | J. Ganesh Kumar Reddy',
  description: 'Technical deep-dives, learnings from building AI systems, and thoughts on AI engineering philosophy.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return <BlogListClient posts={posts} categories={categories} />;
}
