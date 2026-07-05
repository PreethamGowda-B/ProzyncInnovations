"use client";
/* src/components/3d/scenes/ContactScene.tsx */
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function CrystalCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.45;
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.9, 0]} />
      <meshPhysicalMaterial
        color="#06b6d4"
        emissive="#0891b2"
        emissiveIntensity={1.5}
        roughness={0.05}
        metalness={0.9}
        transparent
        opacity={0.85}
        transmission={0.5}
        thickness={1}
      />
    </mesh>
  );
}

export function ContactScene() {
  const orbitRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!orbitRef.current) return;
    orbitRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    orbitRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <pointLight position={[5, 5, 5]} intensity={50} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={35} color="#06b6d4" decay={2} />
      <pointLight position={[0, -3, -3]} intensity={15} color="#ffffff" decay={2} />

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <CrystalCore />
      </Float>

      {/* Orbiting data beacon particles */}
      <group ref={orbitRef}>
        <mesh position={[1.8, 0, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshPhysicalMaterial
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <mesh position={[-1.8, 0, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshPhysicalMaterial
            color="#10b981"
            emissive="#047857"
            emissiveIntensity={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Ring trail */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.78, 1.82, 64]} />
          <meshBasicMaterial color="#3b82f6" opacity={0.2} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}
export default ContactScene;
