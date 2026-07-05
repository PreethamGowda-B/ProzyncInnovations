"use client";
/* src/components/3d/scenes/BlogScene.tsx */
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function CoreKnowledgeShape() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
  });

  return (
    <mesh ref={ref}>
      <dodecahedronGeometry args={[0.9, 0]} />
      <meshPhysicalMaterial
        color="#3b82f6"
        emissive="#1d4ed8"
        emissiveIntensity={0.8}
        roughness={0.05}
        metalness={0.9}
        transparent
        opacity={0.7}
        transmission={0.6}
        thickness={1}
      />
    </mesh>
  );
}

export function BlogScene() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.4 + Math.random() * 0.8;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  const geoRef = useRef<THREE.BufferGeometry>(null);

  useFrame((state) => {
    if (!geoRef.current) return;
    const time = state.clock.elapsedTime;
    const pos = geoRef.current.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(time * 0.8 + i) * 0.003;
    }
    geoRef.current.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={50} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={35} color="#06b6d4" decay={2} />
      <pointLight position={[0, -3, -3]} intensity={15} color="#ffffff" decay={2} />

      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
        <CoreKnowledgeShape />
      </Float>

      <points>
        <bufferGeometry ref={geoRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#06b6d4"
          size={0.06}
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>
    </>
  );
}
export default BlogScene;
