/* src/types/technology.ts */
export interface Technology {
  id: string;
  name: string;
  logoUrl: string; // SVG icon path
  category: "frontend" | "backend" | "database" | "cloud-devops" | "animation-3d";
  href?: string;
}
