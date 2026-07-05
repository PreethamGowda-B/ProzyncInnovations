"use client";
/* src/app/blog/[slug]/page.tsx */
import React from "react";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import { Container } from "../../../components/layout/Container";
import { Section } from "../../../components/layout/Section";
import { FadeUp } from "../../../components/animations/FadeUp";
import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { BLOG_ARTICLES } from "../../../constants/blog";
import { useToast } from "../../../providers/ToastProvider";

export default function BlogArticlePage() {
  const { toast } = useToast();
  const params = useParams();
  const slug = params.slug as string;

  const article = BLOG_ARTICLES.find((art) => art.slug === slug);

  if (!article) {
    notFound();
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast("success", "Link Copied", "Article link copied to clipboard.");
    }
  };

  const related = BLOG_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="bg-bg-primary text-text-primary">
      {/* breadcrumb */}
      <div className="bg-bg-secondary/40 border-b border-border-subtle py-4">
        <Container className="flex items-center justify-between text-xs text-text-muted">
          <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-accent-cyan transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-text-primary font-semibold truncate max-w-[140px] sm:max-w-none">{article.title}</span>
          </div>
        </Container>
      </div>

      {/* Article Header */}
      <Section className="border-b border-border-subtle bg-bg-secondary/15 py-16">
        <Container className="max-w-3xl">
          <FadeUp className="flex flex-col gap-5">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <Badge variant="cyan">{article.category.toUpperCase()}</Badge>
              <div className="flex items-center gap-3 text-xs text-text-disabled">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </div>

            <h1 className="heading-page text-text-primary leading-tight font-bold">{article.title}</h1>

            <div className="flex items-center justify-between border-t border-border-glass pt-5 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-02 border border-border-glass flex items-center justify-center text-text-muted">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-secondary">{article.author.name}</p>
                  <p className="text-[10px] text-text-disabled">{article.author.role}</p>
                </div>
              </div>

              <Button variant="outline" size="sm" icon={<Share2 className="w-3.5 h-3.5" />} onClick={handleShare}>
                Share Link
              </Button>
            </div>
          </FadeUp>
        </Container>
      </Section>

      {/* Content Body */}
      <Section className="border-b border-border-subtle py-16">
        <Container className="max-w-3xl">
          <FadeUp className="prose prose-invert max-w-none text-xs sm:text-sm text-text-secondary leading-relaxed flex flex-col gap-6">
            <p className="text-sm font-semibold text-text-primary leading-relaxed border-l-2 border-accent-cyan pl-4">
              {article.summary}
            </p>
            <p>
              In enterprise systems engineering, organizing custom modules under clean relational schemas is critical to scaling databases dynamically. In accordance with our coding standards, we define Zod validation payloads, separate content folders cleanly from rendering loops, and enforce database parameters to prevent record bottlenecks.
            </p>
            <h3 className="text-sm font-bold text-text-primary mt-2">1. Coordinated Table Layouts</h3>
            <p>
              Database tables must isolate user logins from transactional items. For instance, in SmartERP, employee registers feed clock-in timestamps directly to payroll calculation formulas. Indexing batch numbers is similarly utilized to run warehouse operations smoothly.
            </p>
            <h3 className="text-sm font-bold text-text-primary mt-2">2. Security Enforcements</h3>
            <p>
              In alignment with secure cookies and server validations, no database credentials should appear in the browser client bundle. Encrypting data transit envelopes ensures compliance with regulatory bodies while preventing external database leaks.
            </p>
            <p>
              Detailed documentation files and code structures are updated regularly inside the Prozync Knowledge Center.
            </p>
          </FadeUp>
        </Container>
      </Section>

      {/* Related Posts */}
      <Section className="bg-bg-secondary/15">
        <Container>
          <FadeUp className="text-center mb-10">
            <h3 className="text-base font-bold text-text-primary uppercase tracking-wider">Related Articles</h3>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {related.map(art => (
              <div key={art.slug} className="glass-panel p-5 rounded-xl border border-border-glass flex flex-col gap-3">
                <Badge variant="default" className="w-fit">{art.category.toUpperCase()}</Badge>
                <h4 className="text-xs font-bold text-text-secondary line-clamp-2 hover:text-white transition-colors">
                  {art.title}
                </h4>
                <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">
                  {art.summary}
                </p>
                <Link href={`/blog/${art.slug}`} className="text-[11px] text-accent-cyan font-bold hover:underline inline-flex items-center gap-1 mt-1">
                  Read Article →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
