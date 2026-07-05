/* src/types/blog.ts */
export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  icon?: string;
  description?: string;
  articleCount?: number;
}

export interface BlogTocItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogArticle {
  slug: string;
  title: string;
  summary: string;
  content: string; // Markdown content
  author: BlogAuthor;
  date: string;
  readTime: string;
  category: string; // Category ID
  coverImageUrl: string;
  toc?: BlogTocItem[];
  relatedSlugs?: string[];
}
