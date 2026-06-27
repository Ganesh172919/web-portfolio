'use client';

/**
 * AgentCommunicationVisualizer — Multi-Agent DAG Routing Animation
 *
 * PURPOSE: Visualizes how a LangGraph-based multi-agent system routes user queries
 * through a DAG (Directed Acyclic Graph) of specialized agents.
 *
 * WHY: Multi-agent architectures are the frontier of AI engineering, but they're
 * hard to understand from code alone. This visualizer:
 * 1. Shows the orchestrator dispatching to specialized agents
 * 2. Animates message passing between agents
 * 3. Demonstrates parallel vs. sequential agent execution
 * 4. Ties directly to the Personal Finance Assistant project
 *
 * LEARNING VALUE:
 * - Understand agent orchestration patterns
 * - See how LangGraph DAG routing works
 * - Learn about agent specialization and coordination
 * - Understand the tradeoffs of multi-agent vs. single-agent systems
 *
 * DESIGN: 2D canvas-based visualization with animated nodes and message particles.
 * Uses Framer Motion for UI, Canvas API for particle effects.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  DollarSign,
  AlertTriangle,
  Camera,
  Target,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  X,
  Zap,
} from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

interface Agent {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  description: string;
  /** What triggers this agent */
  trigger: string;
  /** What tools/APIs the agent uses */
  tools: string[];
  /** Example input/output */
  example: { input: string; output: string };
  /** Position in the visualization [x%, y%] */
  position: [number, number];
}

// ============================================================================
// AGENT DATA — Based on Personal Finance Assistant
// ============================================================================

const AGENTS: Agent[] = [
  {
    id: 'orchestrator',
    label: 'Orchestrator',
    icon: Brain,
    color: '#8b5cf6',
    description: 'The central coordinator that receives user queries, analyzes intent, and routes to the appropriate specialized agent(s). Manages conversation state and synthesizes final responses.',
    trigger: 'Any user query enters here first',
    tools: ['LangGraph', 'Google Gemini', 'Intent Classifier'],
    example: {
      input: '"Show me my spending trends and check for any unusual transactions"',
      output: 'Routes to Budget Analyzer (spending trends) AND Anomaly Detector (unusual transactions) in parallel',
    },
    position: [50, 20],
  },
  {
    id: 'budget',
    label: 'Budget Analyzer',
    icon: DollarSign,
    color: '#10b981',
    description: 'Analyzes spending patterns across categories, identifies trends, and suggests budget reallocations based on financial goals and historical data.',
    trigger: 'Budget queries, spending analysis, category breakdowns',
    tools: ['Transaction DB', 'Statistical Analysis', 'Gemini API'],
    example: {
      input: '"How much did I spend on food last month?"',
      output: '"You spent $487 on food in May, which is 23% of your income — 3% higher than your 20% target. Consider reducing dining out by 2 meals/week."',
    },
    position: [20, 50],
  },
  {
    id: 'anomaly',
    label: 'Anomaly Detector',
    icon: AlertTriangle,
    color: '#ef4444',
    description: 'Detects unusual transactions and spending patterns using statistical methods (Z-score, IQR) combined with LLM reasoning for context-aware anomaly detection.',
    trigger: 'Fraud detection, unusual activity alerts, transaction verification',
    tools: ['Transaction History', 'Statistical Models', 'Gemini API'],
    example: {
      input: '"Are there any suspicious transactions?"',
      output: '"I found 2 anomalies: A $890 charge at an electronics store (3x your typical purchase) and a $200 ATM withdrawal in a city you haven\'t visited."',
    },
    position: [80, 50],
  },
  {
    id: 'ocr',
    label: 'Receipt OCR',
    icon: Camera,
    color: '#f59e0b',
    description: 'Processes receipt images using vision models to extract merchant, items, amounts, and dates. Validates extracted data and categorizes expenses automatically.',
    trigger: 'Receipt uploads, expense tracking from photos',
    tools: ['Vision LLM', 'OCR Engine', 'Gemini Vision API'],
    example: {
      input: '[Receipt image from grocery store]',
      output: '"Extracted: Whole Foods Market, $67.43, 12 items, categorized as Groceries. Added to your May spending."',
    },
    position: [35, 75],
  },
  {
    id: 'planner',
    label: 'Goal Planner',
    icon: Target,
    color: '#3b82f6',
    description: 'Creates multi-step financial plans with milestones. Considers income, expenses, risk tolerance, and timeline to generate actionable savings and investment strategies.',
    trigger: 'Goal setting, savings plans, investment planning',
    tools: ['Financial Models', 'Gemini API', 'Goal Database'],
    example: {
      input: '"I want to save $10,000 for a vacation in 8 months"',
      output: '"Plan: Save $1,250/month. Cut dining by $200, redirect $300 from subscriptions, allocate $750 from monthly surplus. Milestone: $2,500 by Month 2."',
    },
    position: [65, 75],
  },
];

/** Message flow scenarios — each shows a different routing pattern */
const SCENARIOS = [
  {
    name: 'Simple Query',
    description: 'Single agent handles the request',
    messages: [
      { from: 'orchestrator', to: 'budget', label: 'Budget query', color: '#10b981' },
    ],
  },
  {
    name: 'Parallel Analysis',
    description: 'Multiple agents work simultaneously',
    messages: [
      { from: 'orchestrator', to: 'budget', label: 'Analyze spending', color: '#10b981' },
      { from: 'orchestrator', to: 'anomaly', label: 'Check anomalies', color: '#ef4444' },
    ],
  },
  {
    name: 'Sequential Pipeline',
    description: 'Output of one agent feeds into another',
    messages: [
      { from: 'orchestrator', to: 'ocr', label: 'Process receipt', color: '#f59e0b' },
      { from: 'ocr', to: 'budget', label: 'Update budget', color: '#10b981' },
      { from: 'budget', to: 'planner', label: 'Adjust plan', color: '#3b82f6' },
    ],
  },
  {
    name: 'Full Orchestration',
    description: 'Complex multi-agent coordination',
    messages: [
      { from: 'orchestrator', to: 'budget', label: 'Spending trends', color: '#10b981' },
      { from: 'orchestrator', to: 'anomaly', label: 'Fraud check', color: '#ef4444' },
      { from: 'orchestrator', to: 'ocr', label: 'New receipt', color: '#f59e0b' },
      { from: 'ocr', to: 'budget', label: 'Update totals', color: '#10b981' },
      { from: 'anomaly', to: 'orchestrator', label: 'Alert: 2 anomalies', color: '#ef4444' },
      { from: 'budget', to: 'orchestrator', label: 'Trends ready', color: '#10b981' },
      { from: 'orchestrator', to: 'planner', label: 'Adjust goals', color: '#3b82f6' },
    ],
  },
];

// ============================================================================
// ANIMATED MESSAGE PARTICLE
// ============================================================================

function MessageParticle({
  from,
  to,
  label,
  color,
  progress,
}: {
  from: [number, number];
  to: [number, number];
  label: string;
  color: string;
  progress: number;
}) {
  const x = from[0] + (to[0] - from[0]) * progress;
  const y = from[1] + (to[1] - from[1]) * progress;

  // Fade in at start, fade out at end
  const opacity = Math.sin(progress * Math.PI);

  return (
    <g>
      {/* Particle */}
      <circle
        cx={`${x}%`}
        cy={`${y}%`}
        r="6"
        fill={color}
        opacity={opacity}
        filter={`drop-shadow(0 0 4px ${color})`}
      />
      {/* Label near particle */}
      {progress > 0.2 && progress < 0.8 && (
        <text
          x={`${x}%`}
          y={`${y - 4}%`}
          textAnchor="middle"
          fill={color}
          fontSize="10"
          opacity={opacity * 0.8}
        >
          {label}
        </text>
      )}
    </g>
  );
}

// ============================================================================
// AGENT NODE
// ============================================================================

function AgentNode({
  agent,
  isActive,
  isSending,
  isReceiving,
  onClick,
}: {
  agent: Agent;
  isActive: boolean;
  isSending: boolean;
  isReceiving: boolean;
  onClick: () => void;
}) {
  const Icon = agent.icon;
  const [x, y] = agent.position;

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow ring when active */}
      {(isActive || isSending || isReceiving) && (
        <motion.div
          className="absolute inset-0 -m-3 rounded-full"
          style={{ backgroundColor: `${agent.color}20`, border: `2px solid ${agent.color}40` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {/* Node circle */}
      <div
        className={`
          relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
          transition-all duration-300
          ${isActive ? 'ring-2' : ''}
        `}
        style={{
          backgroundColor: `${agent.color}15`,
          border: `2px solid ${agent.color}${isActive ? 'ff' : '40'}`,
          boxShadow: isActive ? `0 0 20px ${agent.color}30, 0 0 0 2px ${agent.color}40` : undefined,
        }}
      >
        <span style={{ color: agent.color }}><Icon size={24} /></span>
      </div>

      {/* Label */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span className="text-xs font-medium text-slate-300">{agent.label}</span>
      </div>

      {/* Sending indicator */}
      {isSending && (
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
          style={{ backgroundColor: agent.color }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}

// ============================================================================
// DETAIL PANEL
// ============================================================================

function AgentDetailPanel({
  agent,
  onClose,
}: {
  agent: Agent | null;
  onClose: () => void;
}) {
  if (!agent) return null;

  const Icon = agent.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={agent.label}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="glass-card p-5"
        style={{ borderColor: `${agent.color}30` }}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${agent.color}15` }}
            >
              <span style={{ color: agent.color }}><Icon size={20} /></span>
            </div>
            <h3 className="text-base font-bold text-white">{agent.label}</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1" aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <p className="text-sm text-slate-400 mb-4 leading-relaxed">{agent.description}</p>

        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-slate-300 mb-1">Trigger</h4>
            <p className="text-xs text-slate-400">{agent.trigger}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-300 mb-1">Tools</h4>
            <div className="flex flex-wrap gap-1">
              {agent.tools.map((tool) => (
                <span key={tool} className="px-2 py-0.5 text-xs rounded bg-white/5 text-slate-400 border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-300 mb-1">Example</h4>
            <div className="text-xs space-y-1">
              <div className="p-2 rounded bg-black/30">
                <span className="text-slate-500">Input: </span>
                <span className="text-slate-300">{agent.example.input}</span>
              </div>
              <div className="p-2 rounded" style={{ backgroundColor: `${agent.color}10` }}>
                <span className="text-slate-500">Output: </span>
                <span className="text-slate-300">{agent.example.output}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function AgentCommunicationVisualizer() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeScenario, setActiveScenario] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [messageProgress, setMessageProgress] = useState<number[]>([]);
  const [activeAgents, setActiveAgents] = useState<Set<string>>(new Set());
  const animRef = useRef<number | null>(null);

  const scenario = SCENARIOS[activeScenario];

  // Reset animation
  const resetAnimation = useCallback(() => {
    setIsPlaying(false);
    setMessageProgress(scenario.messages.map(() => 0));
    setActiveAgents(new Set());
    if (animRef.current) cancelAnimationFrame(animRef.current);
  }, [scenario]);

  // Start/pause animation
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const duration = 4000; // 4 seconds per scenario

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const totalProgress = Math.min(elapsed / duration, 1);

      const newProgress = scenario.messages.map((_, i) => {
        const offset = i * 0.15; // Stagger messages
        return Math.max(0, Math.min(1, (totalProgress - offset) / (1 - offset)));
      });

      setMessageProgress(newProgress);

      // Determine which agents are active
      const newActive = new Set<string>();
      scenario.messages.forEach((msg, i) => {
        if (newProgress[i] > 0 && newProgress[i] < 1) {
          newActive.add(msg.from);
          newActive.add(msg.to);
        }
      });
      setActiveAgents(newActive);

      if (totalProgress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying, scenario]);

  // Initialize progress on scenario change
  useEffect(() => {
    resetAnimation();
  }, [activeScenario, resetAnimation]);

  // Get agent position as percentage
  const getAgentPos = (id: string): [number, number] => {
    const agent = AGENTS.find((a) => a.id === id);
    return agent ? agent.position : [50, 50];
  };

  // Determine which agents are sending/receiving
  const sendingAgents = new Set(
    scenario.messages.filter((_, i) => messageProgress[i] > 0 && messageProgress[i] < 1).map((m) => m.from)
  );
  const receivingAgents = new Set(
    scenario.messages.filter((_, i) => messageProgress[i] > 0 && messageProgress[i] < 1).map((m) => m.to)
  );

  return (
    <div className="space-y-4">
      {/* Scenario selector */}
      <div className="flex flex-wrap gap-2">
        {SCENARIOS.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setActiveScenario(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeScenario === i
                ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30'
                : 'bg-white/5 text-slate-400 border border-white/5 hover:border-white/10'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Scenario description */}
      <p className="text-sm text-slate-400">{scenario.description}</p>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-accent-primary/20 text-accent-primary border border-accent-primary/30"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={resetAnimation}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-slate-400 border border-white/5"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      {/* Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Canvas area */}
        <div className="lg:col-span-2 relative h-[400px] md:h-[500px] glass-card rounded-xl overflow-hidden">
          {/* Connection lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {/* Static connection lines */}
            {scenario.messages.map((msg, i) => {
              const from = getAgentPos(msg.from);
              const to = getAgentPos(msg.to);
              return (
                <line
                  key={`line-${i}`}
                  x1={`${from[0]}%`}
                  y1={`${from[1]}%`}
                  x2={`${to[0]}%`}
                  y2={`${to[1]}%`}
                  stroke={msg.color}
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity={messageProgress[i] > 0 ? 0.3 : 0.1}
                />
              );
            })}

            {/* Animated particles */}
            {scenario.messages.map((msg, i) => {
              if (messageProgress[i] <= 0 || messageProgress[i] >= 1) return null;
              const from = getAgentPos(msg.from);
              const to = getAgentPos(msg.to);
              return (
                <MessageParticle
                  key={`particle-${i}`}
                  from={from}
                  to={to}
                  label={msg.label}
                  color={msg.color}
                  progress={messageProgress[i]}
                />
              );
            })}
          </svg>

          {/* Agent nodes */}
          {AGENTS.map((agent) => (
            <AgentNode
              key={agent.id}
              agent={agent}
              isActive={activeAgents.has(agent.id)}
              isSending={sendingAgents.has(agent.id)}
              isReceiving={receivingAgents.has(agent.id)}
              onClick={() => setSelectedAgent((prev) => (prev?.id === agent.id ? null : agent))}
            />
          ))}
        </div>

        {/* Detail panel */}
        <div>
          <AgentDetailPanel
            agent={selectedAgent}
            onClose={() => setSelectedAgent(null)}
          />
        </div>
      </div>

      {/* Message log */}
      <div className="glass-card p-4">
        <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
          <Zap size={14} className="text-accent-primary" />
          Message Flow
        </h4>
        <div className="space-y-1">
          {scenario.messages.map((msg, i) => {
            const fromAgent = AGENTS.find((a) => a.id === msg.from);
            const toAgent = AGENTS.find((a) => a.id === msg.to);
            const isComplete = messageProgress[i] >= 1;
            const isActive = messageProgress[i] > 0 && messageProgress[i] < 1;

            return (
              <div
                key={i}
                className={`flex items-center gap-2 text-xs transition-opacity ${
                  isComplete ? 'opacity-100' : isActive ? 'opacity-80' : 'opacity-30'
                }`}
              >
                <span style={{ color: fromAgent?.color }}>{fromAgent?.label}</span>
                <ArrowRight size={12} className="text-slate-600" />
                <span style={{ color: toAgent?.color }}>{toAgent?.label}</span>
                <span className="text-slate-500">— {msg.label}</span>
                {isComplete && <span className="text-green-500">✓</span>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
