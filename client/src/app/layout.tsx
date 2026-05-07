import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J. Ganesh Kumar Reddy | Generative AI Engineer & Full-Stack Developer',
  description: 'Aspiring Generative AI Engineer specializing in LLM fine-tuning (LoRA/QLoRA), RAG pipelines, agentic AI workflows (LangChain, LangGraph), and scalable Python RESTful APIs. Active open-source contributor.',
  keywords: [
    'Generative AI Engineer',
    'LLM Fine-Tuning',
    'RAG Pipelines',
    'LangChain',
    'LangGraph',
    'AI Agents',
    'Python Developer',
    'FastAPI',
    'Full Stack Developer',
    'LoRA QLoRA PEFT',
    'Open Source'
  ],
  authors: [{ name: 'J. Ganesh Kumar Reddy' }],
  openGraph: {
    title: 'J. Ganesh Kumar Reddy | Generative AI Engineer',
    description: 'Integrating AI/LLMs into production products. Building scalable Python APIs and AI infrastructure.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J. Ganesh Kumar Reddy | Generative AI Engineer',
    description: 'Integrating AI/LLMs into production products. Building scalable Python APIs and AI infrastructure.',
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
