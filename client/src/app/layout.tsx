import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J. Ganesh Kumar Reddy | AI/ML Engineer & Startup Founder',
  description: 'Passionate AI/ML engineer specializing in LLM fine-tuning, RAG systems, generative AI, and deep learning. A curious builder with deep thinking and systems thinking — deploying real-world production systems.',
  keywords: [
    'LLM Fine-Tuning',
    'RAG Systems',
    'Generative AI',
    'Deep Learning',
    'Machine Learning',
    'Small Language Models',
    'LoRA QLoRA PEFT',
    'LangChain',
    'LangGraph',
    'AI Agents',
    'Multi-Agent Systems',
    'Startup Founder',
    'Full Stack Developer',
    'Systems Thinking',
    'Production ML'
  ],
  authors: [{ name: 'J. Ganesh Kumar Reddy' }],
  openGraph: {
    title: 'J. Ganesh Kumar Reddy | AI/ML Engineer & Startup Founder',
    description: 'Passionate AI/ML engineer — LLM fine-tuning, RAG systems, generative AI, production ML deployments. A curious builder who thinks in systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J. Ganesh Kumar Reddy | AI/ML Engineer & Startup Founder',
    description: 'Passionate AI/ML engineer — LLM fine-tuning, RAG systems, generative AI, production ML deployments.',
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
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'J. Ganesh Kumar Reddy',
              url: 'https://ganesh-portfolio.vercel.app',
              jobTitle: 'AI/ML Engineer & Startup Founder',
              description: 'Passionate AI/ML engineer specializing in LLM fine-tuning, RAG systems, generative AI, and deep learning.',
              sameAs: [
                'https://github.com/Ganesh172919',
                'https://www.linkedin.com/in/j-ganesh-kumar-reddy-b65693274',
                'https://leetcode.com/u/ganeshrgk1/',
                'https://www.codechef.com/users/ganesh_352004',
                'https://codeforces.com/profile/Ganesh_iiit'
              ],
              knowsAbout: [
                'LLM Fine-Tuning',
                'RAG Systems',
                'Generative AI',
                'Deep Learning',
                'Machine Learning',
                'Multi-Agent Systems',
                'LangChain',
                'PyTorch',
                'Production ML Systems'
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'IIIT Dharwad'
              }
            })
          }}
        />
      </head>
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
