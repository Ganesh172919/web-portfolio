/**
 * Custom 404 Page
 *
 * PURPOSE: Displays a branded, helpful 404 page when users navigate to a non-existent route.
 *
 * WHY: The default Next.js 404 is functional but generic. A custom 404 that matches
 * the site's design language and provides navigation options reduces bounce rate
 * and helps users find what they were looking for.
 *
 * DESIGN: Uses the same glassmorphism design system as the rest of the site.
 * Provides three recovery paths: go home, view projects, or visit the blog.
 */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-4">
      <div className="glass-card p-8 md:p-12 max-w-lg text-center">
        {/* Large 404 number */}
        <div className="text-8xl font-bold text-gradient mb-4">404</div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-primary px-6 py-3 rounded-xl font-medium text-center"
          >
            Go Home
          </Link>
          <Link
            href="/#projects"
            className="btn-ghost px-6 py-3 rounded-xl font-medium text-center"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="btn-ghost px-6 py-3 rounded-xl font-medium text-center"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
