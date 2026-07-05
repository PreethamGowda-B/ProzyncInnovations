/* src/constants/technologies.ts */
import { Technology } from "../types";

export const TECHNOLOGIES: Technology[] = [
  { id: "nextjs", name: "Next.js", logoUrl: "nextjs", category: "frontend" },
  { id: "react", name: "React", logoUrl: "react", category: "frontend" },
  { id: "typescript", name: "TypeScript", logoUrl: "typescript", category: "frontend" },
  { id: "tailwind", name: "Tailwind CSS", logoUrl: "tailwind", category: "frontend" },
  
  { id: "nodejs", name: "Node.js", logoUrl: "nodejs", category: "backend" },
  { id: "express", name: "Express", logoUrl: "express", category: "backend" },
  { id: "restapi", name: "REST APIs", logoUrl: "api", category: "backend" },
  
  { id: "postgresql", name: "PostgreSQL", logoUrl: "postgresql", category: "database" },
  { id: "sqlite", name: "SQLite", logoUrl: "sqlite", category: "database" },
  
  { id: "aws", name: "AWS", logoUrl: "aws", category: "cloud-devops" },
  { id: "docker", name: "Docker", logoUrl: "docker", category: "cloud-devops" },
  { id: "vercel", name: "Vercel", logoUrl: "vercel", category: "cloud-devops" },
  
  { id: "framermotion", name: "Framer Motion", logoUrl: "motion", category: "animation-3d" },
  { id: "gsap", name: "GSAP", logoUrl: "gsap", category: "animation-3d" },
  { id: "threejs", name: "Three.js", logoUrl: "three", category: "animation-3d" },
  { id: "r3f", name: "React Three Fiber", logoUrl: "r3f", category: "animation-3d" }
];
