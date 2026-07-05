/* src/types/team.ts */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}
