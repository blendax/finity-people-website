"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const filters = ["All", "Data Engineering", "AI & ML", "Analytics", "Strategy"];

const caseStudies = [
  {
    title: "Real-time data platform for Nordic retail leader",
    client: "Leading Nordic Retailer",
    challenge: "Legacy batch processing couldn't support real-time inventory management across 200+ stores, causing stockouts and overstock issues.",
    solution: "Designed and built a cloud-native streaming platform on Azure with Databricks, processing 10M+ events daily with sub-second latency.",
    results: [
      { metric: "40%", label: "Reduction in processing time" },
      { metric: "10M+", label: "Events processed daily" },
      { metric: "3x", label: "Faster time to insight" },
    ],
    tags: ["Data Engineering", "Azure", "Databricks", "Kafka"],
    category: "Data Engineering",
    industry: "Retail",
  },
  {
    title: "ML-powered fraud detection for financial services",
    client: "Nordic Financial Institution",
    challenge: "Manual fraud review processes were slow, expensive, and missed sophisticated fraud patterns affecting thousands of transactions.",
    solution: "Built a real-time ML fraud detection system using ensemble models, reducing false positives by 60% while catching 25% more actual fraud cases.",
    results: [
      { metric: "60%", label: "Fewer false positives" },
      { metric: "25%", label: "More fraud detected" },
      { metric: "€2M+", label: "Annual savings" },
    ],
    tags: ["AI & ML", "Python", "MLflow", "Azure ML"],
    category: "AI & ML",
    industry: "Finance",
  },
  {
    title: "Self-service analytics platform for healthcare provider",
    client: "Regional Healthcare Organization",
    challenge: "Data was siloed across 15+ systems. Clinical and operational teams had no way to access insights without going through IT.",
    solution: "Built a unified data warehouse with semantic layer and Power BI dashboards, enabling 500+ users to create their own reports.",
    results: [
      { metric: "500+", label: "Self-service users" },
      { metric: "80%", label: "Reduction in ad-hoc requests" },
      { metric: "15", label: "Systems consolidated" },
    ],
    tags: ["Analytics", "Power BI", "Snowflake", "dbt"],
    category: "Analytics",
    industry: "Healthcare",
  },
  {
    title: "Data strategy & governance for energy company",
    client: "Scandinavian Energy Provider",
    challenge: "Rapid growth through acquisitions left the organization with inconsistent data practices, quality issues, and compliance gaps.",
    solution: "Defined a comprehensive data strategy with governance framework, data catalog, and quality monitoring that scaled across the merged organization.",
    results: [
      { metric: "95%", label: "Data quality score achieved" },
      { metric: "100%", label: "GDPR compliance" },
      { metric: "6mo", label: "Time to full rollout" },
    ],
    tags: ["Strategy", "Governance", "Purview", "Data Quality"],
    category: "Strategy",
    industry: "Energy",
  },
  {
    title: "Generative AI assistant for customer support",
    client: "SaaS Platform Company",
    challenge: "Support team overwhelmed with 5000+ tickets/month. First response times averaging 8 hours were causing customer churn.",
    solution: "Built a RAG-based AI assistant using company knowledge base, handling 40% of tickets automatically and providing agents with context-rich suggestions.",
    results: [
      { metric: "40%", label: "Tickets auto-resolved" },
      { metric: "70%", label: "Faster first response" },
      { metric: "15pt", label: "NPS improvement" },
    ],
    tags: ["AI & ML", "LangChain", "OpenAI", "Python"],
    category: "AI & ML",
    industry: "Technology",
  },
  {
    title: "Cloud data migration for manufacturing giant",
    client: "European Manufacturing Company",
    challenge: "On-premise data warehouse approaching end-of-life. 10+ years of business-critical data needed migration with zero downtime.",
    solution: "Executed phased migration to Azure Synapse with parallel running period, automated testing, and comprehensive validation at each stage.",
    results: [
      { metric: "0", label: "Minutes of downtime" },
      { metric: "50%", label: "Cost reduction" },
      { metric: "10TB+", label: "Data migrated" },
    ],
    tags: ["Data Engineering", "Azure", "Synapse", "Terraform"],
    category: "Data Engineering",
    industry: "Manufacturing",
  },
];

export default function CaseStudiesContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">
              Real results for real businesses
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Explore how we&apos;ve helped organizations across industries transform with data and AI.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeFilter === f
                    ? "bg-accent text-white"
                    : "bg-neutral-light text-neutral-mid hover:bg-accent/10 hover:text-accent border border-neutral-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Case study grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-neutral-border bg-background overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1">
                  {/* Gradient header */}
                  <div className="h-2 bg-gradient-to-r from-accent to-secondary" />
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-medium text-neutral-mid bg-neutral-light px-2.5 py-1 rounded-full">
                        {cs.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{cs.title}</h3>
                    <p className="text-sm text-neutral-mid mb-1"><strong>Client:</strong> {cs.client}</p>
                    <p className="text-sm text-neutral-mid mb-4 leading-relaxed"><strong>Challenge:</strong> {cs.challenge}</p>
                    <p className="text-sm text-neutral-mid mb-6 leading-relaxed"><strong>Solution:</strong> {cs.solution}</p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {cs.results.map((r) => (
                        <div key={r.label} className="bg-neutral-light rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-success">{r.metric}</div>
                          <p className="text-xs text-neutral-mid mt-0.5">{r.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-neutral-light border border-neutral-border text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
