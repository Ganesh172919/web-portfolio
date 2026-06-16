/**
 * Dynamic Sitemap Generation
 *
 * PURPOSE: Generates a sitemap.xml for search engine crawlers.
 *
 * WHY: A sitemap helps search engines discover and index all pages on the site,
 * including dynamically generated blog posts. Without it, crawlers may miss
 * pages that aren't linked from the homepage.
 *
 * PATTERN: Next.js App Router convention — exporting a default function from
 * `sitemap.ts` automatically serves it at /sitemap.xml.
 *
 * PERFORMANCE: Blog posts are read from the filesystem at build time (SSG),
 * so this sitemap is generated statically and served instantly.
 */

import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://ganesh-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic blog post pages
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
