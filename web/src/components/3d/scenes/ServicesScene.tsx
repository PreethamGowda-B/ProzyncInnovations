"use client";
/* src/components/3d/scenes/ServicesScene.tsx */
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingTorus({ args, color, rotSpeed, pos }: {
  args: [number, number, number, number];
  color: string;
  rotSpeed: [number, number, number];
  pos: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += rotSpeed[0];
    ref.current.rotation.y += rotSpeed[1];
    ref.current.rotation.z += rotSpeed[2];
  });

  return (
    <mesh ref={ref} position={pos}>
      <torusGeometry args={args} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        roughness={0}
        metalness={0.9}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export function ServicesScene() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={40} color="#06b6d4" decay={2} />
      <pointLight position={[0, -4, -3]} intensity={25} color="#ffffff" decay={2} />

      {/* Stacked interactive rings representing service workflows */}
      <RotatingTorus args={[1.5, 0.04, 16, 100]} color="#2563eb" rotSpeed={[0.005, 0.01, 0.002]} pos={[0, 0, 0]} />
      <RotatingTorus args={[1.2, 0.03, 16, 80]} color="#06b6d4" rotSpeed={[0.008, -0.006, 0.004]} pos={[0, 0, 0]} />
      <RotatingTorus args={[0.9, 0.02, 16, 60]} color="#3b82f6" rotSpeed={[-0.004, 0.008, 0.006]} pos={[0, 0, 0]} />

      {/* Floating abstract node at the core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </>
  );
}
export default ServicesScene;
