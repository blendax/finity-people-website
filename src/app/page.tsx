"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import CountUp from "@/components/CountUp";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Data Strategy & Advisory",
    description: "Define your data roadmap and unlock strategic value from your organization's data assets.",
    href: "/services#strategy",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Data Engineering",
    description: "Build modern data platforms with cloud-native architecture, lakehouses, and robust pipelines.",
    href: "/services#engineering",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI & Machine Learning",
    description: "Custom ML models, NLP, computer vision, and generative AI solutions tailored to your needs.",
    href: "/services#ai",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    title: "Analytics & BI",
    description: "Self-service dashboards and data democratization that drive informed decision-making.",
    href: "/services#analytics",
  },
];

const differentiators = [
  {
    title: "Senior Consultants Only",
    description: "No junior benchwarmers. Every consultant brings deep expertise and a track record of delivery.",
  },
  {
    title: "End-to-End Delivery",
    description: "From strategy to production. We own the outcome, not just the advice.",
  },
  {
    title: "Nordic & Global Reach",
    description: "Swedish quality with international perspective. We work across industries and borders.",
  },
];

const clients = [
  "TechCorp", "DataFlow", "NordBank", "ScandAI",
  "CloudWorks", "FinServ", "MediData", "RetailIQ",
];

const testimonials = [
  {
    quote: "Finity People transformed our data infrastructure. Their senior consultants delivered in weeks what our team estimated would take months.",
    author: "CTO, Nordic FinTech",
  },
  {
    quote: "The depth of expertise is remarkable. They didn't just build our ML pipeline — they taught our team how to own it.",
    author: "VP Data, E-commerce Platform",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Boutique Data & AI Consultancy
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
              We turn{" "}
              <span className="gradient-text">data into decisions</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Senior consultants who deliver end-to-end — from strategy to production.
              Nordic quality, global perspective.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent to-secondary rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">What We Do</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                End-to-end data & AI services
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group block p-6 rounded-2xl border border-neutral-border bg-background hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-mid leading-relaxed">{service.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Finity People */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Why Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Small enough to care, experienced enough to deliver
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-neutral-mid leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
              { value: 15, suffix: "+", label: "Senior Consultants" },
              { value: 8, suffix: "+", label: "Years Average Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-background border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-center text-sm text-neutral-mid uppercase tracking-wider mb-10">
              Trusted by innovative companies
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {clients.map((client, i) => (
              <AnimatedSection key={client} delay={i * 0.05}>
                <div className="w-32 h-12 rounded-lg bg-neutral-light flex items-center justify-center text-neutral-mid font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity">
                  {client}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-3xl bg-gradient-to-br from-primary to-[#111D32] p-8 sm:p-12 lg:p-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Featured Case Study</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Real-time data platform for Nordic retail leader
              </h2>
              <p className="text-white/70 max-w-2xl mb-8 leading-relaxed">
                We designed and built a cloud-native data platform processing 10M+ events daily,
                enabling real-time inventory optimization and personalized customer experiences.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { metric: "40%", label: "Reduction in processing time" },
                  { metric: "10M+", label: "Events processed daily" },
                  { metric: "3x", label: "Faster time to insight" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-5">
                    <div className="text-2xl font-bold text-success mb-1">{item.metric}</div>
                    <p className="text-white/60 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium"
              >
                Read full case study
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What our clients say</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-neutral-border">
                  <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-semibold text-accent">{t.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-[#0F1D32] to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to unlock your data potential?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you turn data into your competitive advantage.
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
