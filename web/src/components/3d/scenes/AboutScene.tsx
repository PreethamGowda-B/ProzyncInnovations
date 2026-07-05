"use client";
/* src/components/3d/scenes/AboutScene.tsx */
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function StructureNode({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

function GlassBlock({ position, size, rotation }: {
  position: [number, number, number];
  size: [number, number, number];
  rotation: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color="#3b82f6"
        transparent
        opacity={0.15}
        roughness={0.05}
        metalness={0.1}
        transmission={0.6}
        thickness={0.8}
      />
    </mesh>
  );
}

export function AboutScene() {
  const nodes = useMemo(() => [
    { pos: [-1.2, 0.6, 0.5] as [number, number, number], color: "#06b6d4" },
    { pos: [1.2, -0.6, -0.5] as [number, number, number], color: "#2563eb" },
    { pos: [-0.5, -0.8, 0.8] as [number, number, number], color: "#06b6d4" },
    { pos: [0.8, 0.8, -0.8] as [number, number, number], color: "#2563eb" },
    { pos: [0, 0, 0] as [number, number, number], color: "#3b82f6" },
  ], []);

  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={45} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={30} color="#06b6d4" decay={2} />
      <pointLight position={[0, -3, -3]} intensity={15} color="#ffffff" decay={2} />

      <group ref={groupRef}>
        {/* Connection structure lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  -1.2, 0.6, 0.5, 0, 0, 0,
                  1.2, -0.6, -0.5, 0, 0, 0,
                  -0.5, -0.8, 0.8, 0, 0, 0,
                  0.8, 0.8, -0.8, 0, 0, 0,
                  -1.2, 0.6, 0.5, -0.5, -0.8, 0.8,
                  1.2, -0.6, -0.5, 0.8, 0.8, -0.8,
                ]),
                3,
              ]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3b82f6" opacity={0.35} transparent linewidth={1.5} />
        </lineSegments>

        {nodes.map((node, i) => (
          <StructureNode key={i} position={node.pos} color={node.color} />
        ))}
      </group>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
        <GlassBlock position={[-1, 0, -1]} size={[1.4, 0.8, 0.1]} rotation={[0.1, -0.2, 0.05]} />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <GlassBlock position={[1, 0.5, 0.5]} size={[1.1, 0.6, 0.15]} rotation={[-0.1, 0.3, 0.02]} />
      </Float>
    </>
  );
}
export default AboutScene;
