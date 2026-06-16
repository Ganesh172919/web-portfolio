/**
 * Blog Loading State
 *
 * PURPOSE: Shows a skeleton UI while blog pages are being server-rendered.
 *
 * WHY: Blog pages fetch markdown from the filesystem and parse frontmatter.
 * This can take a moment, especially with many posts. A skeleton loading state
 * that mirrors the blog layout (header, cards grid) provides immediate visual
 * feedback and prevents layout shift when content loads.
 */

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-bg-primary pt-28 pb-20">
      <div className="container-custom max-w-6xl">
        {/* Header skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-4 bg-white/5 rounded w-32 mx-auto mb-4" />
          <div className="h-10 bg-white/5 rounded w-80 mx-auto mb-4" />
          <div className="h-4 bg-white/5 rounded w-96 mx-auto" />
        </div>

        {/* Search skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-12 bg-white/5 rounded-xl max-w-md mx-auto" />
        </div>

        {/* Category filter skeleton */}
        <div className="flex justify-center gap-3 mb-12 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 bg-white/5 rounded-full w-24" />
          ))}
        </div>

        {/* Cards grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-6 bg-white/5 rounded-full w-20" />
                <div className="h-6 bg-white/5 rounded-full w-16" />
              </div>
              <div className="h-6 bg-white/5 rounded w-3/4 mb-3" />
              <div className="h-4 bg-white/5 rounded w-full mb-2" />
              <div className="h-4 bg-white/5 rounded w-2/3 mb-4" />
              <div className="flex items-center gap-4">
                <div className="h-3 bg-white/5 rounded w-20" />
                <div className="h-3 bg-white/5 rounded w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
