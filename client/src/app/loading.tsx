/**
 * Root Loading State
 *
 * PURPOSE: Displays a branded loading screen while the root layout or page
 * is being server-rendered or hydrated.
 *
 * WHY: Without this file, users see a blank white screen during initial load.
 * A loading state provides immediate visual feedback that the site is working,
 * reducing perceived latency and improving the first-paint experience.
 *
 * DESIGN: Uses the same gradient background and glassmorphism style as the site.
 * The animated logo/pulse effect communicates "loading" without being distracting.
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="text-center">
        {/* Animated pulse circle */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-accent-primary/20 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-accent-primary/40 animate-pulse" />
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
            <span className="text-white font-bold text-lg">JG</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
