/**
 * Dynamic Robots.txt Generation
 *
 * PURPOSE: Generates a robots.txt file that tells search engine crawlers
 * which pages they can and cannot access.
 *
 * WHY: Proper robots.txt configuration ensures crawlers index the right pages
 * and don't waste crawl budget on unnecessary paths (API routes, internal paths).
 *
 * PATTERN: Next.js App Router convention — exporting a default function from
 * `robots.ts` automatically serves it at /robots.txt.
 */

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://ganesh-portfolio.vercel.app/sitemap.xml',
  };
}
