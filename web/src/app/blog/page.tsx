"use client";
/* src/app/blog/page.tsx */
import React, { useState } from "react";
import { BookOpen, Search, Clock, ArrowRight, User, MailCheck } from "lucide-react";
import Link from "next/link";
import { Container } from "../../components/layout/Container";
import { Section } from "../../components/layout/Section";
import { FadeUp } from "../../components/animations/FadeUp";
import { StaggerContainer } from "../../components/animations/StaggerContainer";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { useToast } from "../../providers/ToastProvider";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "../../constants/blog";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ThreeCanvas } from "../../components/3d/ThreeCanvas";

// Lazy-load BlogScene
const BlogScene = dynamic(() => import("../../components/3d/scenes/BlogScene").then(m => m.BlogScene), {
  ssr: false,
});

const seq = [0.1, 0.3, 0.45, 0.6];

export default function BlogListingPage() {
  const { toast } = useToast();
  const [selectedCat, setSelectedCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    const matchesCat = selectedCat === "all" || art.category === selectedCat;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.includes("@")) {
      toast("error", "Invalid Email", "Please enter a valid email address.");
      return;
    }
    setNewsletterLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      });
      const result = await res.json();
      if (result.success) {
        setNewsletterSuccess(true);
        toast("success", "Subscribed", "You have joined our newsletter.");
      } else {
        toast("error", "Error", result.message || "Subscription failed.");
      }
    } catch (err) {
      toast("error", "Error", "Connection error. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <div className="bg-bg-primary text-text-primary">
      {/* Hero */}
      <Section className="relative overflow-hidden min-h-[60vh] flex items-center border-b border-border-subtle py-12 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary" />
        <Container className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[0], duration: 0.4 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-2 rounded-full">
                Resources
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="heading-page text-text-primary leading-tight"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ delay: seq[1], duration: 0.6, ease: "easeOut" }}
              >
                Insights, Guides & <span className="text-gradient">Product Knowledge</span>
              </motion.h1>
            </div>

            <motion.p
              className="text-text-muted text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: seq[2], duration: 0.5 }}
            >
              Review design tutorials, database planning methodologies, and modular ERP installation guides.
            </motion.p>
          </div>

          {/* Right 3D Visual Column */}
          <motion.div
            className="relative w-full h-[320px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: seq[3], duration: 0.7 }}
          >
            <ThreeCanvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
              <BlogScene />
            </ThreeCanvas>
          </motion.div>

        </Container>
      </Section>

      {/* Main Listing Section */}
      <Section className="border-b border-border-subtle">
        <Container>
          {/* Controls: Search + Categories */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-border-glass">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    selectedCat === cat.id
                      ? "bg-accent-primary/10 border-accent-primary/30 text-accent-cyan"
                      : "border-border-glass bg-surface-glass text-text-muted hover:text-text-primary"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search bar */}
            <div className="relative max-w-xs w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-disabled">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 bg-transparent border border-border-glass rounded-lg text-xs text-text-secondary focus:outline-none focus:border-accent-primary"
              />
            </div>
          </div>

          {/* Grid list */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 glass-panel rounded-2xl border border-border-glass text-xs text-text-muted uppercase tracking-wider font-bold">
              No Articles Found matching query
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <div
                  key={art.slug}
                  className="glass-card p-6 flex flex-col gap-4 border border-border-glass hover:-translate-y-1 transition-transform"
                >
                  <div className="flex justify-between items-center gap-3">
                    <Badge variant="cyan">{art.category.toUpperCase()}</Badge>
                    <span className="text-[10px] text-text-disabled flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {art.readTime}
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col gap-2">
                    <h3 className="text-sm font-bold text-text-primary line-clamp-2 hover:text-white leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-6 h-6 rounded-full bg-surface-02 border border-border-glass flex items-center justify-center text-text-muted">
                        <User className="w-3 h-3" />
                      </div>
                      <div>
                        <p className="font-bold text-text-secondary">{art.author.name}</p>
                        <p className="text-[10px] text-text-disabled">{art.date}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${art.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-accent-cyan font-bold hover:underline"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </StaggerContainer>
          )}
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-bg-secondary/15">
        <Container className="max-w-xl text-center flex flex-col items-center gap-6">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-cyan">Newsletter</span>
          <h2 className="heading-sub">Subscribe to Tech Updates</h2>
          <p className="text-xs text-text-muted leading-relaxed">
            Receive modular code snippets, security patch alerts, and SmartERP roadmap announcements straight to your business inbox.
          </p>

          {newsletterSuccess ? (
            <FadeUp className="glass-panel p-6 rounded-2xl border border-success/30 bg-success/5 w-full flex items-center justify-center gap-3">
              <MailCheck className="w-5 h-5 text-success" />
              <span className="text-xs font-bold text-text-secondary">Subscribed Successfully</span>
            </FadeUp>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="yourname@company.com"
                className="flex-grow glass-panel px-4 py-3 rounded-lg border border-border-glass text-xs bg-transparent focus:outline-none focus:border-accent-primary"
              />
              <Button variant="gradient" type="submit" loading={newsletterLoading}>
                Subscribe
              </Button>
            </form>
          )}
        </Container>
      </Section>
    </div>
  );
}
