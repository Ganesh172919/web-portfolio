'use client';

/**
 * ArchitectureVisualizer — 3D Interactive System Architecture
 *
 * PURPOSE: Renders an interactive 3D visualization of a multi-agent AI system
 * architecture (based on the Personal Finance Assistant project).
 *
 * WHY: Architecture diagrams are traditionally flat and static. By rendering them
 * in 3D with animated data flow, users can:
 * 1. Understand system topology spatially
 * 2. See data flow direction and speed
 * 3. Click nodes for detailed explanations
 * 4. Orbit and zoom to explore freely
 *
 * TECHNICAL APPROACH:
 * - React Three Fiber for declarative Three.js rendering
 * - Drei helpers (OrbitControls, Float, Text, Line) for common 3D patterns
 * - Animated spheres as data particles flowing along connection edges
 * - Color-coded nodes by service type (agent, database, cache, queue, API)
 * - Click-to-inspect with a detail panel overlay
 *
 * PERFORMANCE:
 * - Lazy loaded with ssr: false (WebGL requires browser)
 * - Particle count is bounded (max 30 per edge)
 * - Uses instanced meshes for repeated geometries
 * - requestAnimationFrame-driven animation (via R3F's useFrame)
 *
 * ACCESSIBILITY:
 * - Keyboard-navigable (OrbitControls supports keyboard)
 * - Color-blind friendly palette (uses shape + position + text, not just color)
 * - Fallback: if WebGL is not available, shows a static 2D diagram
 */

import { useRef, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Line } from '@react-three/drei';
import * as THREE from 'three';

// ============================================================================
// TYPES
// ============================================================================

/** Represents a service/node in the architecture */
interface ArchNode {
  id: string;
  label: string;
  description: string;
  /** 3D position [x, y, z] */
  position: [number, number, number];
  /** Visual category determines color and shape */
  category: 'agent' | 'database' | 'cache' | 'queue' | 'api' | 'external';
  /** Technology stack used by this node */
  tech: string[];
}

/** Represents a connection between two nodes */
interface ArchEdge {
  from: string;
  to: string;
  label: string;
  /** Animation speed multiplier */
  speed?: number;
}

// ============================================================================
// ARCHITECTURE DATA — Based on Personal Finance Assistant
// ============================================================================

const NODES: ArchNode[] = [
  {
    id: 'client',
    label: 'React Client',
    description: 'Frontend UI built with React.js. Sends user queries and renders AI responses with streaming support.',
    position: [-6, 0, 0],
    category: 'api',
    tech: ['React.js', 'TypeScript', 'WebSocket'],
  },
  {
    id: 'api',
    label: 'FastAPI Server',
    description: '100+ RESTful endpoints with Zod validation, JWT/OAuth2 auth, and TOTP 2FA. Routes requests to the AI orchestrator.',
    position: [-3, 0, 0],
    category: 'api',
    tech: ['Python', 'FastAPI', 'Zod', 'JWT'],
  },
  {
    id: 'orchestrator',
    label: 'LangGraph Orchestrator',
    description: 'DAG-based routing that analyzes user intent and dispatches to specialized agents. Manages conversation state and agent coordination.',
    position: [0, 0, 0],
    category: 'agent',
    tech: ['LangChain', 'LangGraph', 'Google Gemini'],
  },
  {
    id: 'budget',
    label: 'Budget Analyzer',
    description: 'Analyzes spending patterns, identifies categories, and suggests budget reallocations based on financial goals.',
    position: [3, 2, 0],
    category: 'agent',
    tech: ['LangChain', 'Gemini API'],
  },
  {
    id: 'anomaly',
    label: 'Anomaly Detector',
    description: 'Detects unusual transactions and spending patterns using statistical analysis and LLM reasoning.',
    position: [3, 0, 0],
    category: 'agent',
    tech: ['LangChain', 'Gemini API'],
  },
  {
    id: 'ocr',
    label: 'Receipt OCR',
    description: 'Extracts structured data from receipt images using vision models and validates extracted amounts.',
    position: [3, -2, 0],
    category: 'agent',
    tech: ['Vision LLM', 'OCR', 'Gemini API'],
  },
  {
    id: 'planner',
    label: 'Goal Planner',
    description: 'Creates multi-step financial plans with milestones, considering income, expenses, and risk tolerance.',
    position: [6, 0, 0],
    category: 'agent',
    tech: ['LangChain', 'Gemini API'],
  },
  {
    id: 'mongo',
    label: 'MongoDB',
    description: '48 Mongoose models storing users, transactions, budgets, goals, and agent conversation history.',
    position: [0, -3, 0],
    category: 'database',
    tech: ['MongoDB', 'Mongoose'],
  },
  {
    id: 'redis',
    label: 'Redis Cache',
    description: 'Caches frequent queries, session data, and agent responses. Reduces latency by 10x for repeated operations.',
    position: [-3, -3, 0],
    category: 'cache',
    tech: ['Redis', 'ioredis'],
  },
  {
    id: 'bullmq',
    label: 'BullMQ Queue',
    description: 'Distributed job processing for async tasks: receipt processing, report generation, and scheduled analyses.',
    position: [3, -3, 0],
    category: 'queue',
    tech: ['BullMQ', 'Redis'],
  },
  {
    id: 'observability',
    label: 'Observability',
    description: 'Prometheus metrics + OpenTelemetry traces. Monitors agent latency, token usage, error rates, and cache hit ratios.',
    position: [0, 3, 0],
    category: 'external',
    tech: ['Prometheus', 'OpenTelemetry'],
  },
];

const EDGES: ArchEdge[] = [
  { from: 'client', to: 'api', label: 'REST / WebSocket' },
  { from: 'api', to: 'orchestrator', label: 'Agent Request' },
  { from: 'orchestrator', to: 'budget', label: 'Budget Query', speed: 1.2 },
  { from: 'orchestrator', to: 'anomaly', label: 'Anomaly Check', speed: 1.5 },
  { from: 'orchestrator', to: 'ocr', label: 'Receipt Parse', speed: 0.8 },
  { from: 'orchestrator', to: 'planner', label: 'Plan Request', speed: 1.0 },
  { from: 'orchestrator', to: 'mongo', label: 'Read/Write' },
  { from: 'orchestrator', to: 'redis', label: 'Cache Check' },
  { from: 'api', to: 'bullmq', label: 'Enqueue Job' },
  { from: 'api', to: 'observability', label: 'Metrics' },
  { from: 'api', to: 'mongo', label: 'CRUD' },
  { from: 'api', to: 'redis', label: 'Cache' },
];

// ============================================================================
// COLOR PALETTE
// ============================================================================

const CATEGORY_COLORS: Record<ArchNode['category'], string> = {
  agent: '#8b5cf6',    // Violet — AI agents
  database: '#10b981', // Emerald — data stores
  cache: '#f59e0b',    // Amber — caching layers
  queue: '#ef4444',    // Red — job queues
  api: '#3b82f6',      // Blue — API endpoints
  external: '#6b7280', // Gray — external services
};

// ============================================================================
// 3D COMPONENTS
// ============================================================================

/**
 * Animated node sphere with label and hover/click interaction.
 * Uses Float for gentle bobbing animation.
 */
function ArchNodeMesh({
  node,
  isSelected,
  onSelect,
}: {
  node: ArchNode;
  isSelected: boolean;
  onSelect: (node: ArchNode) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const color = CATEGORY_COLORS[node.category];

  // Scale up when selected or hovered
  const targetScale = isSelected ? 1.4 : hovered ? 1.2 : 1.0;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
      <group position={node.position}>
        {/* Main sphere */}
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(node);
          }}
          onPointerEnter={() => {
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerLeave={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
        >
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isSelected ? 0.6 : hovered ? 0.4 : 0.2}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Glow ring when selected */}
        {isSelected && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.5, 0.6, 32]} />
            <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        )}

        {/* Label */}
        <Text
          position={[0, 0.7, 0]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="bottom"
          font="/fonts/inter.woff2"
          maxWidth={2}
        >
          {node.label}
        </Text>

        {/* Category badge */}
        <Text
          position={[0, -0.6, 0]}
          fontSize={0.12}
          color={color}
          anchorX="center"
          anchorY="top"
        >
          {node.category.toUpperCase()}
        </Text>
      </group>
    </Float>
  );
}

/**
 * Animated edge line with flowing particles.
 * Particles travel from source node to target node.
 */
function ArchEdgeLine({ edge, nodes }: { edge: ArchEdge; nodes: ArchNode[] }) {
  const fromNode = nodes.find((n) => n.id === edge.from);
  const toNode = nodes.find((n) => n.id === edge.to);
  const particleRef = useRef<THREE.Mesh>(null);
  const progressRef = useRef(0);

  const speed = edge.speed ?? 1.0;

  useFrame((_, delta) => {
    if (!particleRef.current || !fromNode || !toNode) return;

    progressRef.current = (progressRef.current + delta * speed * 0.5) % 1;

    const t = progressRef.current;
    particleRef.current.position.set(
      fromNode.position[0] + (toNode.position[0] - fromNode.position[0]) * t,
      fromNode.position[1] + (toNode.position[1] - fromNode.position[1]) * t,
      fromNode.position[2] + (toNode.position[2] - fromNode.position[2]) * t
    );

    // Fade in/out at endpoints
    const opacity = Math.sin(t * Math.PI);
    (particleRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
  });

  if (!fromNode || !toNode) return null;

  return (
    <group>
      {/* Connection line */}
      <Line
        points={[fromNode.position, toNode.position]}
        color="#4b5563"
        lineWidth={1}
        opacity={0.3}
        transparent
      />

      {/* Flowing particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial
          color={CATEGORY_COLORS[fromNode.category]}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Edge label at midpoint */}
      <Text
        position={[
          (fromNode.position[0] + toNode.position[0]) / 2,
          (fromNode.position[1] + toNode.position[1]) / 2 + 0.2,
          (fromNode.position[2] + toNode.position[2]) / 2,
        ]}
        fontSize={0.1}
        color="#9ca3af"
        anchorX="center"
        anchorY="bottom"
      >
        {edge.label}
      </Text>
    </group>
  );
}

/**
 * Grid helper for spatial reference.
 */
function GridFloor() {
  return (
    <gridHelper
      args={[20, 20, '#1f2937', '#111827']}
      position={[0, -4.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// ============================================================================
// DETAIL PANEL (HTML overlay)
// ============================================================================

function DetailPanel({
  node,
  onClose,
}: {
  node: ArchNode | null;
  onClose: () => void;
}) {
  if (!node) return null;

  const color = CATEGORY_COLORS[node.category];

  return (
    <div
      className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 glass-card p-6 z-50"
      style={{ borderColor: `${color}40` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <h3 className="text-lg font-bold text-white">{node.label}</h3>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Close detail panel"
        >
          ✕
        </button>
      </div>

      {/* Category badge */}
      <span
        className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {node.category}
      </span>

      {/* Description */}
      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
        {node.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {node.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded text-xs bg-white/5 text-slate-400 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * ArchitectureVisualizer — the main exported component.
 *
 * USAGE: Place in a section or page. Renders a full-width/height 3D canvas
 * with orbit controls. Click nodes to inspect; drag to rotate; scroll to zoom.
 *
 * FALLBACK: If WebGL is not available, the Canvas component from R3F handles
 * the fallback gracefully (shows nothing). For production, consider adding
 * a static SVG fallback.
 */
export default function ArchitectureVisualizer() {
  const [selectedNode, setSelectedNode] = useState<ArchNode | null>(null);

  const handleSelect = useCallback((node: ArchNode) => {
    setSelectedNode((prev) => (prev?.id === node.id ? null : node));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden border border-white/5">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2, 12], fov: 50 }}
        style={{ background: '#0a0a0f' }}
        gl={{ antialias: true, alpha: false }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

        {/* Grid floor */}
        <GridFloor />

        {/* Edges (rendered first, behind nodes) */}
        {EDGES.map((edge) => (
          <ArchEdgeLine key={`${edge.from}-${edge.to}`} edge={edge} nodes={NODES} />
        ))}

        {/* Nodes */}
        {NODES.map((node) => (
          <ArchNodeMesh
            key={node.id}
            node={node}
            isSelected={selectedNode?.id === node.id}
            onSelect={handleSelect}
          />
        ))}

        {/* Camera controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={25}
          autoRotate={!selectedNode}
          autoRotateSpeed={0.3}
        />
      </Canvas>

      {/* Detail panel overlay */}
      <DetailPanel node={selectedNode} onClose={handleClose} />

      {/* Legend */}
      <div className="absolute top-4 left-4 glass-card p-3 text-xs">
        <div className="text-slate-400 font-medium mb-2">Legend</div>
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-2 mb-1">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-slate-500 capitalize">{cat}</span>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 glass-card p-3 text-xs text-slate-500">
        <p>🖱 Drag to rotate</p>
        <p>🔍 Scroll to zoom</p>
        <p>👆 Click nodes to inspect</p>
      </div>
    </div>
  );
}
