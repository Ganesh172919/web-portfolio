/**
 * Learn Hub Page
 *
 * PURPOSE: Landing page for the interactive learning platform.
 * Showcases available learning modules with previews and descriptions.
 *
 * WHY: A dedicated learning hub:
 * 1. Establishes Ganesh as an educator, not just a developer
 * 2. Demonstrates deep understanding of AI concepts
 * 3. Provides interactive, visual explanations of complex topics
 * 4. Creates a unique differentiator for the portfolio
 *
 * DESIGN: Each module card shows a preview, description, difficulty level,
 * and estimated time. Cards link to dedicated module pages or expand inline.
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Network,
  Layers,
  Sparkles,
  Clock,
  BarChart3,
} from 'lucide-react';
import RAGPipelineVisualizer from '@/components/learn/RAGPipelineVisualizer';
import AgentCommunicationVisualizer from '@/components/learn/AgentCommunicationVisualizer';

// ============================================================================
// MODULE DATA
// ============================================================================

interface LearningModule {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  /** Whether to show the interactive demo inline */
  inlineDemo?: 'rag' | 'agents';
}

const MODULES: LearningModule[] = [
  {
    id: 'rag-pipeline',
    title: 'RAG Pipeline Deep Dive',
    description:
      'Understand how Retrieval-Augmented Generation works from document ingestion to answer generation. See each stage animated with real-world examples from production systems.',
    icon: Layers,
    color: '#8b5cf6',
    difficulty: 'Intermediate',
    duration: '15 min',
    topics: ['Document Chunking', 'Embeddings', 'Vector Search', 'Prompt Engineering'],
    inlineDemo: 'rag',
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Communication',
    description:
      'Visualize how LangGraph orchestrates multiple specialized agents. See parallel execution, sequential pipelines, and complex coordination patterns in action.',
    icon: Network,
    color: '#3b82f6',
    difficulty: 'Advanced',
    duration: '20 min',
    topics: ['Agent Orchestration', 'DAG Routing', 'Parallel Execution', 'State Management'],
    inlineDemo: 'agents',
  },
  {
    id: 'transformer-attention',
    title: 'Transformer & Attention Mechanisms',
    description:
      'Interactive visualization of how self-attention works in transformer models. See queries, keys, and values flow through the attention mechanism.',
    icon: Brain,
    color: '#f59e0b',
    difficulty: 'Advanced',
    duration: '25 min',
    topics: ['Self-Attention', 'Multi-Head Attention', 'Positional Encoding', 'Layer Normalization'],
  },
  {
    id: 'vector-databases',
    title: 'Vector Database Internals',
    description:
      'Explore how vector databases like ChromaDB and Pinecone store and retrieve high-dimensional embeddings using ANN algorithms.',
    icon: BarChart3,
    color: '#10b981',
    difficulty: 'Intermediate',
    duration: '15 min',
    topics: ['HNSW Indexing', 'IVF', 'Similarity Metrics', 'Metadata Filtering'],
  },
];

// ============================================================================
// MODULE CARD
// ============================================================================

function ModuleCard({
  module,
  index,
}: {
  module: LearningModule;
  index: number;
}) {
  const Icon = module.icon;

  const difficultyColors = {
    Beginner: 'text-green-400 bg-green-500/10',
    Intermediate: 'text-yellow-400 bg-yellow-500/10',
    Advanced: 'text-red-400 bg-red-500/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 hover:border-accent-primary/20 transition-all"
      style={{ borderColor: `${module.color}10` }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${module.color}15` }}
        >
          <span style={{ color: module.color }}><Icon size={24} /></span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{module.title}</h3>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${difficultyColors[module.difficulty]}`}>
              {module.difficulty}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock size={12} />
              {module.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 mb-4 leading-relaxed">{module.description}</p>

      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {module.topics.map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 rounded text-xs bg-white/5 text-slate-400 border border-white/5"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Inline demo or explore link */}
      {module.inlineDemo ? (
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-slate-500 mb-3">Interactive demo below ↓</p>
        </div>
      ) : (
        <div className="mt-4 pt-4 border-t border-white/5">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Sparkles size={12} className="text-accent-primary" />
            Coming soon — interactive visualization
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <div className="pt-28 pb-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-6"
            >
              ← Back to Portfolio
            </Link>

            <span className="label text-accent-primary mb-3 block">Interactive Learning</span>
            <h1 className="heading-lg mb-4">
              Learn <span className="text-gradient">AI Engineering</span>
            </h1>
            <p className="body-md max-w-2xl mx-auto">
              Interactive visualizations that explain complex AI systems through animation
              and exploration. Built from real production experience — not theory.
            </p>
          </motion.div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {MODULES.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* RAG Pipeline Interactive Demo */}
      <section className="container-custom pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/15 flex items-center justify-center">
              <Layers size={16} className="text-[#8b5cf6]" />
            </div>
            <h2 className="heading-md">RAG Pipeline</h2>
          </div>
          <p className="text-sm text-slate-400 max-w-2xl">
            Click each stage to learn how documents become answers. See the tradeoffs
            and tools used at each step.
          </p>
        </motion.div>

        <RAGPipelineVisualizer />
      </section>

      {/* Agent Communication Interactive Demo */}
      <section className="container-custom pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/15 flex items-center justify-center">
              <Network size={16} className="text-[#3b82f6]" />
            </div>
            <h2 className="heading-md">Multi-Agent Communication</h2>
          </div>
          <p className="text-sm text-slate-400 max-w-2xl">
            Watch how an orchestrator routes queries to specialized agents.
            Select different scenarios to see parallel, sequential, and complex patterns.
          </p>
        </motion.div>

        <AgentCommunicationVisualizer />
      </section>
    </div>
  );
}
