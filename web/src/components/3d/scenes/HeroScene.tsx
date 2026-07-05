"use client";
/* src/components/3d/scenes/HeroScene.tsx */
import React, { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Torus, Box, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingPanel({ position, rotation, opacity = 0.15 }: {
  position: [number, number, number];
  rotation: [number, number, number];
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} castShadow>
      <boxGeometry args={[1.8, 1.1, 0.05]} />
      <meshPhysicalMaterial
        color="#2563eb"
        transparent
        opacity={opacity}
        roughness={0}
        metalness={0.1}
        transmission={0.5}
        thickness={0.5}
      />
    </mesh>
  );
}

function NetworkNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 0.5;
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2.5,
          Math.sin(angle) * radius - 1.5,
        ] as [number, number, number],
        scale: 0.06 + Math.random() * 0.04,
      };
    });
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.scale, 12, 12]} />
          <meshPhysicalMaterial
            color={i % 2 === 0 ? "#2563eb" : "#06b6d4"}
            emissive={i % 2 === 0 ? "#1d4ed8" : "#0891b2"}
            emissiveIntensity={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
    // Subtle mouse parallax
    meshRef.current.rotation.x += mouse.y * 0.0005;
    meshRef.current.rotation.y += mouse.x * 0.0005;
  });

  return (
    <mesh ref={meshRef} position={[0.8, 0, 0]}>
      <torusGeometry args={[1.2, 0.04, 16, 80]} />
      <meshPhysicalMaterial
        color="#06b6d4"
        emissive="#0891b2"
        emissiveIntensity={1.5}
        roughness={0}
        metalness={1}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
    }
    return pos;
  }, []);

  const geoRef = useRef<THREE.BufferGeometry>(null);

  useFrame((state) => {
    if (!geoRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = geoRef.current.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] = positions[i * 3 + 1] + Math.sin(time * 0.3 + i * 0.5) * 0.12;
    }
    geoRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.025}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <>
      {/* Lighting setup */}
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={50} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={35} color="#06b6d4" decay={2} />
      <pointLight position={[0, 3, -2]} intensity={20} color="#ffffff" decay={2} />

      {/* Floating glass panels */}
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <FloatingPanel position={[1.5, 0.8, -1]} rotation={[0.1, -0.3, 0.05]} opacity={0.18} />
      </Float>
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.4}>
        <FloatingPanel position={[0.2, -0.7, -0.5]} rotation={[-0.05, 0.4, 0.02]} opacity={0.12} />
      </Float>
      <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.5}>
        <FloatingPanel position={[2.5, -0.3, -2]} rotation={[0.05, -0.2, 0.08]} opacity={0.10} />
      </Float>

      {/* Central orbit ring */}
      <CentralCore />

      {/* Outer network nodes */}
      <NetworkNodes />

      {/* Background particle field */}
      <ParticleField />
    </>
  );
}
export default HeroScene;
