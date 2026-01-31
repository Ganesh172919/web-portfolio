'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

// Lazy load sections below the fold for better initial load performance
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <SectionLoader />,
});
const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <SectionLoader />,
});
const Research = dynamic(() => import('@/components/sections/Research'), {
  loading: () => <SectionLoader />,
});
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <SectionLoader />,
});
const Achievements = dynamic(() => import('@/components/sections/Achievements'), {
  loading: () => <SectionLoader />,
});
const Blog = dynamic(() => import('@/components/sections/Blog'), {
  loading: () => <SectionLoader />,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <SectionLoader />,
});
const CommandPalette = dynamic(() => import('@/components/interactive/CommandPalette'), {
  ssr: false,
});

// Dynamically import NeuralBackground with no SSR
const NeuralBackground = dynamic(
  () => import('@/components/interactive/NeuralBackground'),
  { ssr: false }
);

// Loading placeholder for sections
function SectionLoader() {
  return (
    <div className="section">
      <div className="container-custom">
        <div className="animate-pulse">
          <div className="h-8 bg-white/5 rounded w-48 mx-auto mb-4" />
          <div className="h-4 bg-white/5 rounded w-96 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 bg-white/5 rounded-xl" />
            <div className="h-48 bg-white/5 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Neural Network Background Animation */}
      <NeuralBackground />
      
      {/* Command Palette (Ctrl+K) */}
      <CommandPalette />
      
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero / Landing Section */}
        <Hero />
        
        {/* About / Philosophy Section */}
        <About />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Research & Experiments Section */}
        <Research />
        
        {/* Skills Visualization Section */}
        <Skills />
        
        {/* Achievements & Recognition Section */}
        <Achievements />
        
        {/* Blog / Knowledge Section */}
        <Blog />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
