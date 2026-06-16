'use client';

/**
 * Blog Error Boundary
 *
 * PURPOSE: Catches errors specific to blog routes (/blog, /blog/[slug])
 * and provides blog-specific recovery options.
 *
 * WHY: Blog pages have different failure modes than the main site
 * (e.g., markdown parsing errors, missing posts). A dedicated error boundary
 * provides contextually appropriate recovery actions (go back to blog list
 * rather than going to the homepage).
 */

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-4">
      <div className="glass-card p-8 md:p-12 max-w-lg text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Failed to load blog
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed">
          Something went wrong while loading this blog post.
          This might be a temporary issue — try again or browse other posts.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-6 py-3 rounded-xl font-medium"
          >
            Try Again
          </button>
          <Link
            href="/blog"
            className="btn-ghost px-6 py-3 rounded-xl font-medium text-center"
          >
            All Posts
          </Link>
          <Link
            href="/"
            className="btn-ghost px-6 py-3 rounded-xl font-medium text-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
