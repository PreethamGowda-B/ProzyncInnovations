"use client";
/* src/components/3d/scenes/GlassCubeScene.tsx
 * Glass look: semi-transparent filled faces (opacity 0.45, FrontSide)
 * + EdgesGeometry crystal outlines
 * + 2-layer 3D arrangement matching reference image
 */
import React, { useRef, useState, useMemo, useCallback } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/* ── 2-layer 3D arrangement — matches reference image ─────────
 * Back layer  (z = -0.55) : 9 cubes in 3×3 grid
 * Front layer (z = +0.55) : 7 cubes (partial — creates depth/staircase look)
 * Satellites               : 4 floating cubes
 */
const CUBE_DATA: { pos: [number, number, number]; s: number; color: string }[] = [
  // ── Back layer (z = -0.55) ─────────────────────────────────
  { pos: [-1.10,  1.10, -0.55], s: 1.00, color: "#7c3aed" },
  { pos: [ 0.00,  1.10, -0.55], s: 1.00, color: "#6366f1" },
  { pos: [ 1.10,  1.10, -0.55], s: 1.00, color: "#8b5cf6" },
  { pos: [-1.10,  0.00, -0.55], s: 1.00, color: "#2563eb" },
  { pos: [ 0.00,  0.00, -0.55], s: 1.00, color: "#7c3aed" },
  { pos: [ 1.10,  0.00, -0.55], s: 1.00, color: "#4f46e5" },
  { pos: [-1.10, -1.10, -0.55], s: 0.95, color: "#6366f1" },
  { pos: [ 0.00, -1.10, -0.55], s: 0.95, color: "#2563eb" },
  { pos: [ 1.10, -1.10, -0.55], s: 0.95, color: "#7c3aed" },
  // ── Front layer (z = +0.55) — partial for staircase depth ──
  { pos: [-1.10,  1.10,  0.55], s: 0.95, color: "#9333ea" },
  { pos: [ 0.00,  1.10,  0.55], s: 0.95, color: "#8b5cf6" },
  { pos: [ 1.10,  1.10,  0.55], s: 0.95, color: "#6366f1" },
  { pos: [ 0.00,  0.00,  0.55], s: 0.92, color: "#7c3aed" },
  { pos: [ 1.10,  0.00,  0.55], s: 0.92, color: "#3b82f6" },
  { pos: [-1.10,  0.00,  0.55], s: 0.90, color: "#4f46e5" },
  { pos: [ 1.10, -1.10,  0.55], s: 0.88, color: "#6366f1" },
  // ── Satellites ─────────────────────────────────────────────
  { pos: [-2.80,  0.40,  0.00], s: 0.52, color: "#a78bfa" },
  { pos: [ 2.60,  1.20,  0.00], s: 0.48, color: "#60a5fa" },
  { pos: [ 0.30, -2.70,  0.30], s: 0.44, color: "#8b5cf6" },
  { pos: [ 2.60, -0.50, -0.50], s: 0.46, color: "#7c3aed" },
];

const EXPLODE_SCALE = 2.4;
const ANIM_SPEED    = 0.07;

/* ── Lightweight particle field (55 pts, every 2nd frame) ─────── */
function ParticleField() {
  const count   = 55;
  const geoRef  = useRef<THREE.BufferGeometry>(null);
  const basePos = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3]     = (Math.random() - 0.5) * 16;
      p[i * 3 + 1] = (Math.random() - 0.5) * 16;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return p;
  }, []);

  const tick = useRef(0);
  useFrame((state) => {
    tick.current++;
    if (tick.current % 2 !== 0 || !geoRef.current) return;
    const t   = state.clock.elapsedTime;
    const pos = geoRef.current.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] = basePos[i * 3 + 1] + Math.sin(t * 0.2 + i * 0.6) * 0.22;
    }
    geoRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute attach="attributes-position" args={[basePos, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c4b5fd" size={0.030} transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

/* ── Orbit rings ──────────────────────────────────────────────── */
function OrbitRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (r1.current) { r1.current.rotation.x = t * 0.14; r1.current.rotation.y = t * 0.09; }
    if (r2.current) { r2.current.rotation.z = t * 0.10; r2.current.rotation.x = t * 0.07; }
  });

  return (
    <group>
      <mesh ref={r1}>
        <torusGeometry args={[3.3, 0.013, 6, 64]} />
        <meshStandardMaterial color="#7c3aed" transparent opacity={0.28}
          roughness={0} metalness={1} emissive="#7c3aed" emissiveIntensity={0.7} />
      </mesh>
      <mesh ref={r2} rotation={[Math.PI / 2.8, 0.4, 0]}>
        <torusGeometry args={[3.8, 0.010, 6, 64]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.20}
          roughness={0} metalness={1} emissive="#06b6d4" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

/* ── Glass cube: filled face (FrontSide, opacity 0.45) + crystal edges ─
 *
 * KEY DIFFERENCE from previous version:
 *  - opacity 0.45 (was 0.22) — faces clearly visible like reference
 *  - FrontSide (was DoubleSide) — proper face shading per face:
 *    top face catches directional light → appears bright
 *    side/bottom faces appear darker → classic 3D cube depth look
 *  - Edges still visible as the bright crystal outline
 */
interface CubeProps {
  index: number;
  assembledPos: THREE.Vector3;
  explodedPos:  THREE.Vector3;
  cubeScale:    number;
  exploded:     boolean;
  color:        string;
}

function GlassCube({ assembledPos, explodedPos, cubeScale, exploded, color }: CubeProps) {
  const groupRef   = useRef<THREE.Group>(null);
  const currentPos = useRef(assembledPos.clone());
  const size = 0.84 * cubeScale;

  const edgeGeo = useMemo(() => {
    const box   = new THREE.BoxGeometry(size, size, size);
    const edges = new THREE.EdgesGeometry(box);
    box.dispose();
    return edges;
  }, [size]);

  useFrame(() => {
    if (!groupRef.current) return;
    currentPos.current.lerp(exploded ? explodedPos : assembledPos, ANIM_SPEED);
    groupRef.current.position.copy(currentPos.current);
  });

  return (
    <group ref={groupRef} position={assembledPos.clone()}>
      {/* Glass face fill — FrontSide for proper per-face shading like reference */}
      <mesh>
        <boxGeometry args={[size, size, size]} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.45}
          roughness={0.06}
          metalness={0.08}
          clearcoat={0.9}
          clearcoatRoughness={0.05}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>
      {/* Crystal edge outlines */}
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color={color} transparent opacity={0.82} />
      </lineSegments>
    </group>
  );
}

/* ── Sculpture group ──────────────────────────────────────────── */
function CubeSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const bobRef   = useRef(0);
  const [exploded, setExploded] = useState(false);
  const { gl } = useThree();

  const { assembled, explodedPositions } = useMemo(() => {
    const ass: THREE.Vector3[] = [];
    const exp: THREE.Vector3[] = [];
    for (const c of CUBE_DATA) {
      const v = new THREE.Vector3(...c.pos);
      ass.push(v.clone());
      exp.push(v.clone().multiplyScalar(EXPLODE_SCALE));
    }
    return { assembled: ass, explodedPositions: exp };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.20;
    groupRef.current.rotation.x += delta * 0.035;
    bobRef.current += delta * 0.5;
    groupRef.current.position.y = Math.sin(bobRef.current) * 0.07;
  });

  const handleClick       = useCallback(() => setExploded((p) => !p), []);
  const handlePointerOver = useCallback(() => { gl.domElement.style.cursor = "pointer"; }, [gl]);
  const handlePointerOut  = useCallback(() => { gl.domElement.style.cursor = "auto"; }, [gl]);

  return (
    <group
      ref={groupRef}
      rotation={[-0.20, 0.50, 0]}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {CUBE_DATA.map((c, i) => (
        <GlassCube
          key={i}
          index={i}
          assembledPos={assembled[i]}
          explodedPos={explodedPositions[i]}
          cubeScale={c.s}
          exploded={exploded}
          color={c.color}
        />
      ))}
    </group>
  );
}

/* ── Scene ────────────────────────────────────────────────────── */
export function GlassCubeScene() {
  return (
    <>
      {/* Strong directional light from top-right — makes top faces bright,
          sides darker → exactly the face shading in the reference image */}
      <ambientLight intensity={1.4} color="#f0ecff" />
      <directionalLight position={[4, 8, 5]}  intensity={3.0} color="#ffffff" />
      <directionalLight position={[-3, 2, -4]} intensity={0.6} color="#ede9fe" />
      <pointLight position={[-5,  5,  3]} intensity={75} color="#7c3aed" decay={2} />
      <pointLight position={[ 5, -2,  4]} intensity={60} color="#2563eb" decay={2} />
      <pointLight position={[ 0, -4, -3]} intensity={30} color="#06b6d4" decay={2} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.45}
        makeDefault
      />

      <CubeSculpture />
      <OrbitRings />
      <ParticleField />
    </>
  );
}

export default GlassCubeScene;
