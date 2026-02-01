import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J. Ganesh Kumar Reddy | AI Architect & GenAI Engineer',
  description: 'AI Architect specializing in Generative AI, AI Agents, LangChain, and production-grade AI systems. Building research-driven, privacy-first AI solutions.',
  keywords: [
    'AI Architect',
    'GenAI Engineer',
    'LangChain',
    'LangGraph',
    'AI Agents',
    'Machine Learning',
    'Full Stack Developer',
    'Python',
    'React',
    'LLM Fine-Tuning'
  ],
  authors: [{ name: 'J. Ganesh Kumar Reddy' }],
  openGraph: {
    title: 'J. Ganesh Kumar Reddy | AI Architect & GenAI Engineer',
    description: 'Building production-grade AI systems with research-driven engineering',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J. Ganesh Kumar Reddy | AI Architect',
    description: 'Building production-grade AI systems with research-driven engineering',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-white antialiased">
        {/* Background gradient orbs */}
        <div className="neural-bg" aria-hidden="true">
          <div className="gradient-orb gradient-orb-1" />
          <div className="gradient-orb gradient-orb-2" />
          <div className="gradient-orb gradient-orb-3" />
        </div>
        
        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
