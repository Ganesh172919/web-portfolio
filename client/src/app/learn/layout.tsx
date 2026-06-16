/**
 * Learn Section Layout
 *
 * PURPOSE: Provides layout and metadata for the /learn route and its children.
 *
 * WHY: The learning platform is a distinct section of the portfolio with its own
 * navigation context and metadata. A dedicated layout allows:
 * - Consistent metadata for SEO
 * - Shared navigation back to main portfolio
 * - Future expansion with sidebar navigation for modules
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn — Interactive AI Engineering',
  description:
    'Interactive visualizations and simulations for understanding AI systems, RAG pipelines, multi-agent architectures, and more.',
  openGraph: {
    title: 'Learn — Interactive AI Engineering | Ganesh Kumar Reddy',
    description:
      'Interactive visualizations and simulations for understanding AI systems.',
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
