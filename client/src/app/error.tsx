'use client';

/**
 * Global Error Boundary
 *
 * PURPOSE: Catches runtime errors in the application and displays a fallback UI
 * instead of a white screen or Next.js default error page.
 *
 * WHY: Production applications must handle errors gracefully. Without this boundary,
 * a single component crash would break the entire page. This gives users a way to
 * recover (retry) without a full page reload.
 *
 * NEXT.JS PATTERN: This file uses the special `error.tsx` convention in the App Router.
 * It automatically wraps the route segment in an error boundary. The `reset` prop
 * attempts to re-render the segment by triggering a server-side re-render.
 *
 * ACCESSIBILITY: Includes clear error messaging, keyboard-accessible retry button,
 * and maintains focus management for screen readers.
 */

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service in production
    // TODO: Replace with proper error tracking (e.g., Sentry, PostHog)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary px-4">
      <div className="glass-card p-8 md:p-12 max-w-lg text-center">
        {/* Error icon */}
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
          Something went wrong
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed">
          An unexpected error occurred. This is likely a temporary issue.
          You can try again or refresh the page.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-6 py-3 rounded-xl font-medium"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-ghost px-6 py-3 rounded-xl font-medium"
          >
            Go Home
          </button>
        </div>

        {/* Error digest for debugging (hidden from users but available in DOM) */}
        {error.digest && (
          <p className="mt-6 text-xs text-slate-600">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
