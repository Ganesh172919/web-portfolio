import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Ganesh Kumar Reddy Blog',
    default: 'Blog | J. Ganesh Kumar Reddy',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
