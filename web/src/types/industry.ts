/* src/types/industry.ts */
export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  moduleName: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
  challenges: IndustryChallenge[];
  solutions: IndustrySolution[];
  modules: string[]; // Related module ids (e.g., ['inventory', 'sales'])
  visualType: "production-flow" | "healthcare-nodes" | "retail-dashboard" | "construction-mesh" | "logistics-map" | "default";
  status: "active" | "coming-soon" | "planned";
}
