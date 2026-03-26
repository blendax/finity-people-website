"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    id: "strategy",
    title: "Data Strategy & Advisory",
    description: "Helping organizations define their data roadmap and unlock strategic value. We assess your current data maturity, identify opportunities, and create actionable plans that align data initiatives with business goals.",
    details: "We work closely with leadership to ensure data investments drive measurable outcomes. Our strategic frameworks are proven across industries and scales.",
    technologies: ["Data Maturity Assessment", "Roadmap Planning", "Business Case Development", "Data Mesh Architecture", "Operating Model Design"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: "engineering",
    title: "Data Engineering & Architecture",
    description: "Building modern data platforms with cloud-native architecture. From data lakes to lakehouses, we design and implement scalable pipelines that ensure reliable, high-quality data flows.",
    details: "Our engineers bring deep expertise in both batch and real-time processing, infrastructure-as-code, and cloud platform optimization.",
    technologies: ["Azure / AWS / GCP", "Databricks", "Snowflake", "Apache Spark", "Terraform", "dbt", "Kafka", "Airflow"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Custom ML models, NLP, computer vision, and generative AI solutions. We build production-ready AI systems that solve real business problems, not science projects.",
    details: "From prototyping to MLOps, we ensure your AI investments translate into tangible business value with proper governance and monitoring.",
    technologies: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face", "MLflow", "Azure ML"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    id: "analytics",
    title: "Analytics & Business Intelligence",
    description: "Dashboards, self-service analytics, and data democratization. We help organizations make data accessible and actionable for everyone, not just data teams.",
    details: "We design analytics solutions that scale — from executive dashboards to embedded analytics in customer-facing products.",
    technologies: ["Power BI", "Tableau", "Looker", "dbt", "SQL", "Semantic Layers", "Data Modeling"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    id: "governance",
    title: "Data Governance & Quality",
    description: "Ensuring trusted, compliant data assets. We establish frameworks for data quality, lineage, cataloging, and compliance that scale with your organization.",
    details: "In an era of increasing regulation (GDPR, AI Act), proper data governance isn't optional — it's a competitive advantage.",
    technologies: ["Data Catalogs", "Data Quality Frameworks", "GDPR Compliance", "Data Lineage", "Master Data Management", "Purview"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "transformation",
    title: "AI Transformation & Training",
    description: "Upskilling teams and managing change for AI adoption. We help organizations build internal capabilities so they can own and evolve their AI investments.",
    details: "Technology is only half the equation. We focus on people, processes, and culture to ensure lasting transformation.",
    technologies: ["Training Programs", "Change Management", "AI Literacy Workshops", "Center of Excellence Design", "Use Case Identification"],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">
              End-to-end data & AI capabilities
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              From strategy to production, we deliver the full spectrum of data and AI services
              with senior consultants who own the outcome.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={service.id}>
              <div
                id={service.id}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-neutral-mid leading-relaxed mb-4">{service.description}</p>
                  <p className="text-neutral-mid leading-relaxed mb-6">{service.details}</p>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-medium text-sm"
                  >
                    View related case studies
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-2xl bg-neutral-light border border-neutral-border p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-mid mb-4">
                      Key Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm rounded-full bg-background border border-neutral-border text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Not sure where to start?
            </h2>
            <p className="text-neutral-mid text-lg mb-10 max-w-2xl mx-auto">
              Book a free discovery call and we&apos;ll help you identify the highest-impact
              opportunities for your data and AI journey.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-accent to-secondary rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Discovery Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
