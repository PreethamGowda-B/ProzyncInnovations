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
}

function WebGLFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center",
        "bg-gradient-to-br from-surface-01 to-bg-secondary rounded-2xl",
        className
      )}
    >
      <div className="w-24 h-24 border border-border-active rounded-full opacity-30 animate-pulse-slow" />
    </div>
  );
}

export function ThreeCanvas({
  children,
  className,
  fallback,
  camera = { position: [0, 0, 5], fov: 60 },
}: ThreeCanvasProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <Suspense fallback={fallback || <WebGLFallback />}>
        <Canvas
          camera={{ position: camera.position, fov: camera.fov }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
          style={{ background: "transparent" }}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
export default ThreeCanvas;
