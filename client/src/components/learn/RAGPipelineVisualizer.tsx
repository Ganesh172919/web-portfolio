'use client';

/**
 * RAGPipelineVisualizer — Interactive RAG Pipeline Explainer
 *
 * PURPOSE: Step-by-step animated visualization of a Retrieval-Augmented Generation
 * pipeline, showing how documents flow from ingestion through retrieval to generation.
 *
 * WHY: RAG is the most important pattern in production AI systems, yet it's often
 * explained abstractly. This visualizer:
 * 1. Shows the complete pipeline as a visual flow
 * 2. Animates data moving between stages
 * 3. Lets users click each stage for detailed explanations
 * 4. Ties directly to Ganesh's Medical LLM project (real-world context)
 *
 * DESIGN: Uses Framer Motion (not Three.js) for 2D animation — better for
 * educational content where clarity > spectacle. Canvas-based particle effects
 * for the data flow between stages.
 *
 * LEARNING VALUE:
 * - Beginner: See the big picture of how RAG works
 * - Intermediate: Understand each stage's purpose and implementation
 * - Advanced: Learn about tradeoffs (chunk size, embedding models, retrieval strategies)
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Scissors,
  Database,
  Search,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  X,
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

interface PipelineStage {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  description: string;
  /** Technical details for deeper learning */
  details: {
    what: string;
    why: string;
    how: string;
    tradeoffs: string[];
    tools: string[];
    /** Connection to Ganesh's projects */
    projectExample?: string;
  };
}

// ============================================================================
// PIPELINE DATA
// ============================================================================

const STAGES: PipelineStage[] = [
  {
    id: 'ingest',
    label: 'Document Ingestion',
    icon: FileText,
    color: '#3b82f6',
    description: 'Raw documents (PDFs, web pages, databases) are loaded and preprocessed into a normalized format.',
    details: {
      what: 'Document ingestion is the process of loading raw documents from various sources and converting them into a standardized format for further processing.',
      why: 'Real-world data comes in many formats (PDF, HTML, DOCX, plain text). A unified ingestion layer ensures all downstream components work with consistent input.',
      how: 'Use document loaders (LangChain has 100+ loaders) to read files. Clean the text (remove headers/footers, normalize whitespace, handle encoding). Extract metadata (source, date, author).',
      tradeoffs: [
        'Full document vs. section-based ingestion',
        'Preserving document structure vs. flat text extraction',
        'Handling tables, images, and code blocks',
        'Batch vs. streaming ingestion for large corpora',
      ],
      tools: ['LangChain Document Loaders', 'Unstructured.io', 'LlamaParse', 'Apache Tika'],
      projectExample: 'In the Medical LLM, medical textbooks and research papers were ingested, cleaned, and structured for the knowledge base.',
    },
  },
  {
    id: 'chunk',
    label: 'Text Chunking',
    icon: Scissors,
    color: '#8b5cf6',
    description: 'Documents are split into smaller, overlapping chunks that fit within LLM context windows and improve retrieval precision.',
    details: {
      what: 'Chunking splits long documents into smaller pieces (typically 256-1024 tokens) with optional overlap to maintain context across boundaries.',
      why: 'LLMs have limited context windows. Smaller chunks enable more precise retrieval — you get the relevant paragraph, not the entire document. Overlap prevents losing information at chunk boundaries.',
      how: 'Common strategies: fixed-size with overlap, recursive character splitting, semantic chunking (split at topic boundaries), and document-aware splitting (respect headings, paragraphs).',
      tradeoffs: [
        'Small chunks = better precision, worse context',
        'Large chunks = better context, worse precision',
        'Overlap increases storage but preserves boundary info',
        'Semantic chunking is better but slower than fixed-size',
      ],
      tools: ['LangChain Text Splitters', 'Semantic Chunker', 'LlamaIndex Node Parsers'],
      projectExample: 'Medical LLM used recursive character splitting with 512-token chunks and 50-token overlap to preserve medical context across boundaries.',
    },
  },
  {
    id: 'embed',
    label: 'Embedding Generation',
    icon: Database,
    color: '#a855f7',
    description: 'Each chunk is converted into a high-dimensional vector (embedding) that captures its semantic meaning.',
    details: {
      what: 'Embeddings are dense vector representations of text where semantically similar texts are close together in vector space. A chunk about "heart disease" will be near chunks about "cardiovascular health".',
      why: 'Vector representations enable semantic search — finding relevant content based on meaning, not just keyword matching. This is the core innovation that makes RAG powerful.',
      how: 'Pass each chunk through an embedding model (e.g., OpenAI text-embedding-3-small, sentence-transformers). The model outputs a vector (typically 384-3072 dimensions). Store these vectors in a vector database.',
      tradeoffs: [
        'Larger models = better quality, higher cost and latency',
        'Dimension count: 384 (fast) vs. 1536 (accurate) vs. 3072 (best)',
        'Domain-specific fine-tuned embeddings vs. general-purpose',
        'Batch embedding (cheaper) vs. real-time (more flexible)',
      ],
      tools: ['OpenAI Embeddings', 'HuggingFace sentence-transformers', 'Cohere Embed', 'Jina Embeddings'],
      projectExample: 'Medical LLM used HuggingFace sentence-transformers to generate 384-dim embeddings, optimized for medical domain text.',
    },
  },
  {
    id: 'store',
    label: 'Vector Storage',
    icon: Database,
    color: '#22d3ee',
    description: 'Embeddings are stored in a vector database that supports fast similarity search across millions of vectors.',
    details: {
      what: 'A vector database is a specialized database optimized for storing and querying high-dimensional vectors using approximate nearest neighbor (ANN) algorithms.',
      why: 'Traditional databases can\'t efficiently search millions of high-dimensional vectors. Vector databases use indexing techniques (HNSW, IVF) to find similar vectors in milliseconds.',
      how: 'Store chunk embeddings with metadata (source, page, category) in a vector DB. Create indexes for fast retrieval. Use metadata filtering to narrow search scope before similarity matching.',
      tradeoffs: [
        'Managed (Pinecone, Weaviate Cloud) vs. self-hosted (ChromaDB, Milvus)',
        'In-memory (fast, limited) vs. disk-based (scalable, slower)',
        'HNSW index (fast queries, more memory) vs. IVF (less memory, slower)',
        'Cosine similarity vs. dot product vs. L2 distance',
      ],
      tools: ['ChromaDB', 'Pinecone', 'Weaviate', 'Milvus', 'Qdrant', 'FAISS'],
      projectExample: 'Medical LLM used ChromaDB for local vector storage with HNSW indexing, storing 10K+ medical document chunks.',
    },
  },
  {
    id: 'retrieve',
    label: 'Semantic Retrieval',
    icon: Search,
    color: '#10b981',
    description: 'When a user asks a question, it\'s embedded and used to find the most relevant chunks from the vector database.',
    details: {
      what: 'Retrieval converts the user\'s query into an embedding, then searches the vector database for the K most similar chunks (K is typically 3-10).',
      why: 'This is where RAG shines — instead of relying on the LLM\'s training data (which may be outdated or incomplete), we retrieve relevant, up-to-date information from our knowledge base.',
      how: 'Embed the query → search vector DB for top-K similar chunks → optionally re-rank results → return chunks with metadata. Advanced: hybrid search (vector + keyword), multi-query retrieval, parent-document retrieval.',
      tradeoffs: [
        'Top-K value: too few = miss context, too many = noise + cost',
        'Similarity threshold filtering vs. fixed K',
        'Single query vs. multi-query (decompose complex questions)',
        'Dense retrieval (semantic) vs. sparse (keyword BM25) vs. hybrid',
      ],
      tools: ['LangChain Retriever', 'LlamaIndex Retriever', 'Cohere Rerank', 'BM25 (rank_bm25)'],
      projectExample: 'Medical LLM used top-5 retrieval with similarity threshold 0.7, filtering out low-confidence matches to reduce hallucination.',
    },
  },
  {
    id: 'generate',
    label: 'Answer Generation',
    icon: Sparkles,
    color: '#f59e0b',
    description: 'The retrieved chunks are injected into the LLM prompt along with the user\'s question to generate an accurate, grounded answer.',
    details: {
      what: 'Generation combines the user\'s question with retrieved context in a carefully crafted prompt, then sends it to an LLM to produce a final answer.',
      why: 'The LLM now has access to relevant, specific information it wasn\'t trained on. This reduces hallucination and enables answers about recent or domain-specific topics.',
      how: 'Construct a prompt template: "Context: {retrieved_chunks}\n\nQuestion: {user_query}\n\nAnswer based only on the context above." Send to LLM (GPT-4, Gemini, Claude). Parse and return the response.',
      tradeoffs: [
        'Prompt engineering: how to phrase instructions for best results',
        'Context window usage: more chunks = more context = higher cost',
        'Citation generation: show sources vs. just answer',
        'Streaming vs. batch response for UX',
      ],
      tools: ['OpenAI GPT-4', 'Google Gemini', 'Anthropic Claude', 'LangChain', 'Vercel AI SDK'],
      projectExample: 'Medical LLM used Google Gemini with a strict system prompt: "Only answer from provided context. If unsure, say you don\'t know." This reduced hallucination by 60%.',
    },
  },
];

// ============================================================================
// STAGE CARD
// ============================================================================

function StageCard({
  stage,
  index,
  isActive,
  onClick,
}: {
  stage: PipelineStage;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = stage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`
        relative glass-card p-4 cursor-pointer transition-all duration-300
        ${isActive ? 'border-2' : 'border border-white/5 hover:border-white/10'}
      `}
      style={{
        borderColor: isActive ? `${stage.color}60` : undefined,
        boxShadow: isActive ? `0 0 20px ${stage.color}20` : undefined,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Step number */}
      <div
        className="absolute -top-3 -left-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
        style={{ backgroundColor: stage.color }}
      >
        {index + 1}
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: `${stage.color}15` }}
      >
        <span style={{ color: stage.color }}><Icon size={20} /></span>
      </div>

      {/* Label */}
      <h3 className="text-sm font-semibold text-white mb-1">{stage.label}</h3>

      {/* Description */}
      <p className="text-xs text-slate-400 line-clamp-2">{stage.description}</p>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeStageIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
          style={{ backgroundColor: stage.color }}
        />
      )}
    </motion.div>
  );
}

// ============================================================================
// DETAIL PANEL
// ============================================================================

function DetailPanel({
  stage,
  onClose,
}: {
  stage: PipelineStage | null;
  onClose: () => void;
}) {
  if (!stage) return null;

  const Icon = stage.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage.label}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="glass-card p-6 mt-6"
        style={{ borderColor: `${stage.color}30` }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${stage.color}15` }}
            >
              <span style={{ color: stage.color }}><Icon size={20} /></span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stage.label}</h3>
              <span className="text-xs text-slate-500">Stage {STAGES.indexOf(stage) + 1} of {STAGES.length}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Close details"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-4">
          {/* What */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-1">What is it?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{stage.details.what}</p>
          </div>

          {/* Why */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-1">Why does it matter?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{stage.details.why}</p>
          </div>

          {/* How */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-1">How does it work?</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{stage.details.how}</p>
          </div>

          {/* Tradeoffs */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Tradeoffs</h4>
            <ul className="space-y-1">
              {stage.details.tradeoffs.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span style={{ color: stage.color }} className="shrink-0 mt-0.5"><ChevronRight size={14} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Common Tools</h4>
            <div className="flex flex-wrap gap-2">
              {stage.details.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 rounded text-xs bg-white/5 text-slate-400 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Project Example */}
          {stage.details.projectExample && (
            <div
              className="p-3 rounded-lg text-sm"
              style={{ backgroundColor: `${stage.color}10`, border: `1px solid ${stage.color}20` }}
            >
              <h4 className="font-semibold text-slate-300 mb-1 flex items-center gap-2">
                <span style={{ color: stage.color }}><MessageSquare size={14} /></span>
                From My Project
              </h4>
              <p className="text-slate-400 leading-relaxed">{stage.details.projectExample}</p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function RAGPipelineVisualizer() {
  const [activeStage, setActiveStage] = useState<PipelineStage | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Auto-cycle animation phase for the data flow particles
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % STAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleStageClick = useCallback((stage: PipelineStage) => {
    setActiveStage((prev) => (prev?.id === stage.id ? null : stage));
  }, []);

  return (
    <div className="space-y-6">
      {/* Pipeline visualization */}
      <div className="relative">
        {/* Connection arrows between stages */}
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 px-12">
          {STAGES.slice(0, -1).map((_, i) => (
            <div key={i} className="flex-1 flex items-center justify-center">
              <ArrowRight
                size={20}
                className={`transition-colors duration-500 ${
                  animationPhase === i ? 'text-accent-primary' : 'text-white/10'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Stage cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
          {STAGES.map((stage, index) => (
            <StageCard
              key={stage.id}
              stage={stage}
              index={index}
              isActive={activeStage?.id === stage.id}
              onClick={() => handleStageClick(stage)}
            />
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {activeStage && (
          <DetailPanel
            key={activeStage.id}
            stage={activeStage}
            onClose={() => setActiveStage(null)}
          />
        )}
      </AnimatePresence>

      {/* Prompt example */}
      <div className="glass-card p-4">
        <h4 className="text-sm font-semibold text-slate-300 mb-2">Example RAG Prompt</h4>
        <pre className="text-xs text-slate-400 font-mono bg-black/30 p-3 rounded-lg overflow-x-auto">
{`Context:
{${activeStage?.id === 'retrieve' ? '← Retrieved chunks from vector DB' : 'retrieved_chunks'}}

Question: ${activeStage?.id === 'generate' ? 'How does aspirin affect blood clotting?' : 'user_query'}

Instructions: Answer based ONLY on the context above.
If the context doesn't contain the answer, say "I don't have enough information."
Cite your sources.`}
        </pre>
      </div>
    </div>
  );
}
