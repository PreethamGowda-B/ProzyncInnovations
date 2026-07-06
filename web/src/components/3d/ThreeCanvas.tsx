"use client";
/* src/components/3d/ThreeCanvas.tsx */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "../../lib/cn";

interface ThreeCanvasProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  shadows?: boolean;
  frameloop?: "always" | "demand" | "never";
}

export function ThreeCanvas({
  children,
  className,
  fallback,
  camera = { position: [0, 0, 5], fov: 60 },
  shadows = false,
  frameloop = "always",
}: ThreeCanvasProps) {
  return (
    /* Wrapper: transparent background, no border, no rounded corners
     * so the canvas blends seamlessly into whatever section it's in.
     * The "box flash" was caused by the old WebGLFallback having a
     * bg-gradient — now we use null as the Suspense fallback. */
    <div
      className={cn("w-full h-full", className)}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={fallback ?? null}>
        <Canvas
          camera={{ position: camera.position, fov: camera.fov }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 1]}
          shadows={shadows}
          frameloop={frameloop}
          style={{ background: "transparent" }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default ThreeCanvas;
