"use client";
/* src/components/3d/scenes/CareersScene.tsx */
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function HelicalNode({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={[scale, scale, scale]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.0}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export function CareersScene() {
  const helixNodes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const angle = (i / 15) * Math.PI * 4; // Two complete turns
      const height = (i / 15) * 2.5 - 1.25; // Height spread from -1.25 to 1.25
      const radius = 0.8;
      const isCyan = i % 2 === 0;
      return {
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        scale: 0.12 + (i / 15) * 0.08, // Growing scale
        color: isCyan ? "#06b6d4" : "#2563eb",
      };
    });
  }, []);

  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={50} color="#2563eb" decay={2} />
      <pointLight position={[-5, -3, 2]} intensity={35} color="#06b6d4" decay={2} />
      <pointLight position={[0, -3, -3]} intensity={15} color="#ffffff" decay={2} />

      <group ref={groupRef}>
        {/* Helical helix nodes representing ascending careers / growth */}
        {helixNodes.map((node, i) => (
          <HelicalNode
            key={i}
            position={node.position}
            scale={node.scale}
            color={node.color}
          />
        ))}

        {/* Center ascending support structure */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 2.6, 12]} />
          <meshPhysicalMaterial
            color="#3b82f6"
            transparent
            opacity={0.3}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      </group>
    </>
  );
}
export default CareersScene;
