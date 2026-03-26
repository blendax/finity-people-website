"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  { title: "Flexible Work", description: "Work from wherever you're most productive. Office, home, or a mix." },
  { title: "Learning Budget", description: "Annual personal development budget for courses, certifications, and conferences." },
  { title: "Latest Tech", description: "Work with cutting-edge tools and technologies. MacBook Pro, cloud credits, and more." },
  { title: "Health & Wellness", description: "Comprehensive health insurance, wellness allowance, and mental health support." },
  { title: "Team Events", description: "Regular team activities, hackathons, knowledge-sharing sessions, and offsites." },
  { title: "Competitive Pay", description: "Market-leading compensation with transparent salary bands and equity options." },
];

const openings = [
  {
    title: "Senior Data Engineer",
    location: "Stockholm / Remote",
    type: "Full-time",
    description: "Design and build data platforms for our clients using modern cloud-native technologies. 5+ years experience required.",
    tags: ["Azure", "Databricks", "Python", "Terraform"],
  },
  {
    title: "ML Engineer",
    location: "Stockholm / Remote",
    type: "Full-time",
    description: "Build production ML systems from prototype to deployment. Strong Python skills and MLOps experience needed.",
    tags: ["Python", "PyTorch", "MLflow", "Docker"],
  },
  {
    title: "Data Strategy Consultant",
    location: "Stockholm / Gothenburg",
    type: "Full-time",
    description: "Help organizations define and execute their data strategy. 7+ years experience with C-level stakeholder management.",
    tags: ["Strategy", "Governance", "Change Management"],
  },
  {
    title: "Analytics Engineer",
    location: "Stockholm / Remote",
    type: "Full-time",
    description: "Bridge the gap between data engineering and analytics. Build semantic layers and self-service analytics platforms.",
    tags: ["dbt", "SQL", "Power BI", "Snowflake"],
  },
];

export default function CareersContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Careers</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">
              Build the future of data with us
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Join a team of senior professionals solving the most interesting data and AI
              challenges in the Nordics.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Why Join Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                More than a job — a career you shape
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-neutral-border bg-background p-6 h-full hover:border-accent/30 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Open Positions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Find your next role
              </h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-neutral-border bg-background p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-mid">
                      <span className="bg-neutral-light px-2.5 py-1 rounded-full">{job.location}</span>
                      <span className="bg-neutral-light px-2.5 py-1 rounded-full">{job.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-mid leading-relaxed mb-4">{job.description}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-accent hover:text-accent-dark transition-colors inline-flex items-center gap-1"
                    >
                      Apply
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <p className="text-neutral-mid mb-4">
                Don&apos;t see the right role? We&apos;re always looking for exceptional people.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accent to-secondary rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Send an Open Application
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
