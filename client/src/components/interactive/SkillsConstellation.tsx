'use client';

/**
 * SkillsConstellation — 3D Star-Field Skills Visualization
 *
 * PURPOSE: Renders skills as glowing stars in 3D space, clustered by category.
 * Each star's size represents proficiency level, and its color represents category.
 *
 * WHY: Traditional progress bars are functional but forgettable. A 3D constellation:
 * 1. Creates a memorable visual impression
 * 2. Shows skill relationships through spatial clustering
 * 3. Allows interactive exploration (orbit, zoom, click)
 * 4. Reflects the "AI engineer exploring the skill universe" brand
 *
 * TECHNICAL APPROACH:
 * - Each skill is a point light + sphere in 3D space
 * - Skills are clustered by category using predefined anchor positions
 * - Star size = proficiency level (scaled 0.3–1.0)
 * - Particle connections within clusters create "constellation" effect
 * - OrbitControls for free exploration
 * - Click to see skill details
 *
 * PERFORMANCE:
 * - Uses instanced rendering where possible
 * - Bounded particle count (max ~50 skills)
 * - requestAnimationFrame-driven (via R3F useFrame)
 */

import { useRef, useState, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '@/data/resume';

// ============================================================================
// TYPES
// ============================================================================

interface SkillPoint {
  name: string;
  level: number;
  featured: boolean;
  category: string;
  position: [number, number, number];
  color: string;
}

// ============================================================================
// CATEGORY CONFIGURATION
// ============================================================================

/** Category colors and 3D anchor positions (cluster centers) */
const CATEGORY_CONFIG: Record<string, { color: string; anchor: [number, number, number] }> = {
  programming: { color: '#6366f1', anchor: [-4, 2, 0] },    // Indigo
  aiml: { color: '#8b5cf6', anchor: [0, 3, -2] },           // Violet
  aiAreas: { color: '#a855f7', anchor: [4, 2, 0] },         // Purple
  backend: { color: '#3b82f6', anchor: [-3, -1, 2] },       // Blue
  infrastructure: { color: '#22d3ee', anchor: [3, -1, 2] }, // Cyan
  databases: { color: '#10b981', anchor: [0, -2, -2] },     // Emerald
  tools: { color: '#f59e0b', anchor: [0, 0, 3] },           // Amber
};

// ============================================================================
// GENERATE SKILL POSITIONS
// ============================================================================

/**
 * Distributes skills around their category anchor with jitter.
 * Higher proficiency skills are placed closer to the center.
 */
function generateSkillPoints(): SkillPoint[] {
  const points: SkillPoint[] = [];

  Object.entries(skills).forEach(([categoryKey, category]) => {
    const config = CATEGORY_CONFIG[categoryKey];
    if (!config) return;

    category.items.forEach((skill, i) => {
      const angle = (i / category.items.length) * Math.PI * 2;
      const radius = 1.5 + (100 - skill.level) * 0.02; // Higher level = closer to center

      points.push({
        name: skill.name,
        level: skill.level,
        featured: skill.featured ?? false,
        category: category.title,
        position: [
          config.anchor[0] + Math.cos(angle) * radius,
          config.anchor[1] + Math.sin(angle) * radius * 0.6,
          config.anchor[2] + Math.sin(angle + i) * 0.8,
        ],
        color: config.color,
      });
    });
  });

  return points;
}

// ============================================================================
// 3D COMPONENTS
// ============================================================================

/**
 * Individual skill star — a glowing sphere with label.
 */
function SkillStar({
  skill,
  isSelected,
  onSelect,
}: {
  skill: SkillPoint;
  isSelected: boolean;
  onSelect: (skill: SkillPoint) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Scale based on proficiency (0.3 for low, 1.0 for high)
  const baseScale = 0.3 + (skill.level / 100) * 0.7;
  const targetScale = isSelected ? baseScale * 1.8 : hovered ? baseScale * 1.4 : baseScale;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.2}>
      <group position={skill.position}>
        {/* Star sphere */}
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skill);
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
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={
              isSelected ? 1.2 : hovered ? 0.8 : skill.featured ? 0.5 : 0.3
            }
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Point light for glow effect */}
        <pointLight
          color={skill.color}
          intensity={isSelected ? 2 : hovered ? 1 : 0.3}
          distance={2}
          decay={2}
        />

        {/* Featured indicator ring */}
        {skill.featured && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.2, 0.25, 16]} />
            <meshBasicMaterial
              color={skill.color}
              transparent
              opacity={0.4}
              side={THREE.DoubleSide}
            />
          </mesh>
        )}

        {/* Label (always faces camera via Billboard) */}
        {(hovered || isSelected) && (
          <Billboard>
            <Text
              position={[0, 0.4, 0]}
              fontSize={0.15}
              color="white"
              anchorX="center"
              anchorY="bottom"
              outlineWidth={0.01}
              outlineColor="#000000"
            >
              {skill.name}
            </Text>
            <Text
              position={[0, -0.25, 0]}
              fontSize={0.1}
              color={skill.color}
              anchorX="center"
              anchorY="top"
            >
              {skill.level}%
            </Text>
          </Billboard>
        )}
      </group>
    </Float>
  );
}

/**
 * Constellation lines connecting skills within the same category.
 */
function ConstellationLines({ points }: { points: SkillPoint[] }) {
  const lines = useMemo(() => {
    const result: { from: [number, number, number]; to: [number, number, number]; color: string }[] = [];

    // Group by category
    const grouped = new Map<string, SkillPoint[]>();
    points.forEach((p) => {
      const arr = grouped.get(p.category) ?? [];
      arr.push(p);
      grouped.set(p.category, arr);
    });

    // Connect consecutive skills within each category
    grouped.forEach((skills) => {
      for (let i = 0; i < skills.length - 1; i++) {
        result.push({
          from: skills[i].position,
          to: skills[i + 1].position,
          color: skills[i].color,
        });
      }
      // Close the loop
      if (skills.length > 2) {
        result.push({
          from: skills[skills.length - 1].position,
          to: skills[0].position,
          color: skills[0].color,
        });
      }
    });

    return result;
  }, [points]);

  return (
    <>
      {lines.map((line, i) => {
        const points3D = [
          new THREE.Vector3(...line.from),
          new THREE.Vector3(...line.to),
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points3D);

        return (
          <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: line.color, transparent: true, opacity: 0.15 }))} />
        );
      })}
    </>
  );
}

/**
 * Category label in 3D space.
 */
function CategoryLabel({
  label,
  position,
  color,
}: {
  label: string;
  position: [number, number, number];
  color: string;
}) {
  return (
    <Billboard position={position}>
      <Text
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.015}
        outlineColor="#000000"
      >
        {label}
      </Text>
    </Billboard>
  );
}

// ============================================================================
// DETAIL PANEL
// ============================================================================

function SkillDetailPanel({
  skill,
  onClose,
}: {
  skill: SkillPoint | null;
  onClose: () => void;
}) {
  if (!skill) return null;

  return (
    <div
      className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-72 glass-card p-4 z-50"
      style={{ borderColor: `${skill.color}40` }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-bold text-white">{skill.name}</h3>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span
          className="px-2 py-0.5 rounded text-xs font-medium"
          style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
        >
          {skill.category}
        </span>
        {skill.featured && (
          <span className="px-2 py-0.5 rounded text-xs bg-yellow-500/10 text-yellow-500">
            ★ Featured
          </span>
        )}
      </div>

      {/* Proficiency bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${skill.level}%`,
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function SkillsConstellation() {
  const [selectedSkill, setSelectedSkill] = useState<SkillPoint | null>(null);
  const points = useMemo(() => generateSkillPoints(), []);

  const handleSelect = useCallback((skill: SkillPoint) => {
    setSelectedSkill((prev) => (prev?.name === skill.name ? null : skill));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  // Category labels positioned above their clusters
  const categoryLabels = useMemo(() => {
    return Object.entries(CATEGORY_CONFIG).map(([key, config]) => {
      const categoryData = skills[key as keyof typeof skills];
      return {
        label: categoryData?.title ?? key,
        position: [config.anchor[0], config.anchor[1] + 2, config.anchor[2]] as [number, number, number],
        color: config.color,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/5">
      <Canvas
        camera={{ position: [0, 1, 14], fov: 50 }}
        style={{ background: '#0a0a0f' }}
        gl={{ antialias: true, alpha: false }}
      >
        {/* Starfield background */}
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 5, 5]} intensity={0.5} />

        {/* Constellation lines */}
        <ConstellationLines points={points} />

        {/* Category labels */}
        {categoryLabels.map((label) => (
          <CategoryLabel key={label.label} {...label} />
        ))}

        {/* Skill stars */}
        {points.map((skill) => (
          <SkillStar
            key={skill.name}
            skill={skill}
            isSelected={selectedSkill?.name === skill.name}
            onSelect={handleSelect}
          />
        ))}

        {/* Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={30}
          autoRotate={!selectedSkill}
          autoRotateSpeed={0.2}
        />
      </Canvas>

      {/* Detail panel */}
      <SkillDetailPanel skill={selectedSkill} onClose={handleClose} />

      {/* Instructions */}
      <div className="absolute top-4 right-4 glass-card p-3 text-xs text-slate-500">
        <p>🖱 Drag to orbit</p>
        <p>🔍 Scroll to zoom</p>
        <p>👆 Click stars for details</p>
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 glass-card p-3 text-xs">
        <div className="text-slate-400 font-medium mb-2">Categories</div>
        {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
          <div key={key} className="flex items-center gap-2 mb-1">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: config.color }}
            />
            <span className="text-slate-500">{skills[key as keyof typeof skills]?.title ?? key}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
