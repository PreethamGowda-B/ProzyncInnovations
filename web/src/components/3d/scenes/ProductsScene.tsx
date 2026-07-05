"use client";
/* src/components/3d/scenes/ProductsScene.tsx */
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function OrbitingModule({ position, color, speed, delay }: {
  position: [number, number, number];
  color: string;
  speed: number;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * speed + delay;
    const radius = Math.sqrt(position[0] * position[0] + position[2] * position[2]);
    meshRef.current.position.x = Math.cos(time) * radius;
    meshRef.current.position.z = Math.sin(time) * radius;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1.0}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function CenterCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <mesh ref={coreRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />
      <meshPhysicalMaterial
        color="#06b6d4"
        transparent
        opacity={0.3}
        roughness={0.05}
        metalness={0.2}
        transmission={0.8}
        thickness={1}
      />
    </mesh>
  );
}

export function ProductsScene() {
  const modules = useMemo(() => [
    { pos: [1.6, 0.4, 0] as [number, number, number], color: "#2563eb", speed: 0.4, delay: 0 },
    { pos: [-1.4, -0.3, 1] as [number, number, number], color: "#06b6d4", speed: 0.5, delay: 1.5 },
    { pos: [1.2, -0.6, -1.2] as [number, number, number], color: "#3b82f6", speed: 0.3, delay: 3 },
    { pos: [-1.8, 0.2, -0.8] as [number, number, number], color: "#10b981", speed: 0.6, delay: 4.5 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={50} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={35} color="#06b6d4" decay={2} />
      <pointLight position={[0, 3, -3]} intensity={20} color="#ffffff" decay={2} />

      <CenterCore />

      {modules.map((mod, i) => (
        <OrbitingModule
          key={i}
          position={mod.pos}
          color={mod.color}
          speed={mod.speed}
          delay={mod.delay}
        />
      ))}

      {/* Orbit paths */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[1.39, 1.41, 64]} />
        <meshBasicMaterial color="#3b82f6" opacity={0.15} transparent side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[1.59, 1.61, 64]} />
        <meshBasicMaterial color="#06b6d4" opacity={0.15} transparent side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
export default ProductsScene;
