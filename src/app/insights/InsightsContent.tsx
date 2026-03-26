"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["All", "AI Trends", "Data Engineering", "Case Studies", "Company News"];

const articles = [
  {
    title: "The Rise of the Lakehouse: Why Your Data Architecture Needs an Update",
    excerpt: "The traditional data warehouse vs. data lake debate is over. Here's why the lakehouse architecture is winning — and how to get started.",
    author: "Marcus Johansson",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Data Engineering",
  },
  {
    title: "Practical RAG: Building AI Assistants That Actually Work",
    excerpt: "Retrieval-Augmented Generation promises a lot, but production deployments are tricky. We share lessons from real implementations.",
    author: "Frida Karlsson",
    date: "2026-03-08",
    readTime: "12 min read",
    category: "AI Trends",
  },
  {
    title: "Data Governance in the Age of AI: A Practical Framework",
    excerpt: "With the EU AI Act on the horizon, data governance is more critical than ever. Here's our framework for getting it right.",
    author: "Sofia Nilsson",
    date: "2026-02-28",
    readTime: "10 min read",
    category: "AI Trends",
  },
  {
    title: "How We Helped a Retailer Process 10M Events Daily",
    excerpt: "A deep dive into the architecture decisions behind our real-time retail data platform project.",
    author: "Lars Henriksson",
    date: "2026-02-15",
    readTime: "15 min read",
    category: "Case Studies",
  },
  {
    title: "dbt Best Practices: Lessons from 20+ Enterprise Projects",
    excerpt: "After deploying dbt across numerous enterprises, here are the patterns that work — and the anti-patterns to avoid.",
    author: "Marcus Johansson",
    date: "2026-02-01",
    readTime: "11 min read",
    category: "Data Engineering",
  },
  {
    title: "Finity People Expands into Norwegian Market",
    excerpt: "We're excited to announce our expansion into Norway, bringing our data & AI expertise to new clients.",
    author: "Erik Lindqvist",
    date: "2026-01-20",
    readTime: "3 min read",
    category: "Company News",
  },
];

export default function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Insights</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">
              Thoughts on data, AI, and the future
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Articles, whitepapers, and thought leadership from our team of experts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === c
                    ? "bg-accent text-white"
                    : "bg-neutral-light text-neutral-mid hover:bg-accent/10 hover:text-accent border border-neutral-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <AnimatedSection key={article.title} delay={i * 0.1}>
                <article className="group rounded-2xl border border-neutral-border bg-background overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary to-[#111D32] flex items-center justify-center p-6">
                    <h3 className="text-white text-lg font-bold text-center group-hover:text-accent transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full self-start mb-3">
                      {article.category}
                    </span>
                    <p className="text-sm text-neutral-mid leading-relaxed mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-neutral-mid pt-4 border-t border-neutral-border">
                      <span>{article.author}</span>
                      <div className="flex items-center gap-3">
                        <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Newsletter CTA */}
          <AnimatedSection>
            <div className="mt-20 rounded-2xl bg-gradient-to-br from-primary to-[#111D32] p-8 sm:p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Stay in the loop</h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Get our latest insights on data, AI, and analytics delivered to your inbox monthly.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accent to-secondary rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
