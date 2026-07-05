"use client";
/* src/components/3d/scenes/IndustriesScene.tsx */
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function BuildingBlock({ position, args, color }: {
  position: [number, number, number];
  args: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={args} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.7}
        clearcoat={1.0}
        transmission={0.4}
        opacity={0.7}
        transparent
      />
    </mesh>
  );
}

export function IndustriesScene() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    gridRef.current.position.y = -1.2 + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={50} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={35} color="#06b6d4" decay={2} />
      <pointLight position={[0, 4, -3]} intensity={20} color="#ffffff" decay={2} />

      {/* Dynamic Grid Floor */}
      <gridHelper ref={gridRef} args={[10, 10, "#3b82f6", "#0f172a"]} position={[0, -1.2, 0]} />

      {/* Floating industry modules of varying configurations */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
        <BuildingBlock position={[-1.2, 0.4, -0.5]} args={[0.6, 0.8, 0.6]} color="#2563eb" />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <BuildingBlock position={[1.2, -0.2, 0.5]} args={[0.5, 1.2, 0.5]} color="#06b6d4" />
      </Float>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
        <BuildingBlock position={[0, 0.6, -1.2]} args={[0.7, 0.5, 0.7]} color="#10b981" />
      </Float>
    </>
  );
}
export default IndustriesScene;
