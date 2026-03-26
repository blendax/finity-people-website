"use client";

import AnimatedSection from "@/components/AnimatedSection";

const values = [
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards. Every deliverable reflects our commitment to quality and precision.",
  },
  {
    title: "Transparency",
    description: "No hidden agendas, no unnecessary complexity. We communicate openly and honestly with our clients and each other.",
  },
  {
    title: "Ownership",
    description: "We don't just advise — we deliver. We take responsibility for outcomes, not just outputs.",
  },
  {
    title: "Collaboration",
    description: "The best solutions come from working together. We integrate seamlessly with our clients' teams.",
  },
  {
    title: "Continuous Learning",
    description: "The data and AI landscape evolves rapidly. We invest in staying at the frontier so our clients benefit from the latest thinking.",
  },
];

const team = [
  {
    name: "Erik Lindqvist",
    role: "Founder & CEO",
    bio: "15+ years in data & AI. Previously led data practices at two of the Big Four.",
    initials: "EL",
  },
  {
    name: "Anna Bergström",
    role: "Head of AI",
    bio: "PhD in Machine Learning from KTH. Built ML platforms serving 100M+ users.",
    initials: "AB",
  },
  {
    name: "Marcus Johansson",
    role: "Head of Data Engineering",
    bio: "Cloud architecture specialist. Azure & AWS certified. Loves building at scale.",
    initials: "MJ",
  },
  {
    name: "Sofia Nilsson",
    role: "Lead Data Strategist",
    bio: "Former CDO advisor. Specializes in data governance and organizational change.",
    initials: "SN",
  },
  {
    name: "Lars Henriksson",
    role: "Senior Data Engineer",
    bio: "Databricks Champion. Open-source contributor. Real-time systems enthusiast.",
    initials: "LH",
  },
  {
    name: "Frida Karlsson",
    role: "ML Engineer",
    bio: "NLP specialist. Built production GenAI systems for Fortune 500 companies.",
    initials: "FK",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">
              Nordic roots, global ambitions
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              We&apos;re a team of senior data and AI professionals who believe every organization
              deserves access to world-class expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-mid leading-relaxed">
                <p>
                  Finity People was founded with a simple observation: organizations need senior
                  data expertise, but the big consultancies send junior teams. We decided to build
                  something different.
                </p>
                <p>
                  Based in Sweden, we&apos;ve assembled a team of experienced data professionals
                  who have built and led data practices at organizations ranging from startups to
                  Fortune 500 companies. Every consultant we deploy has a proven track record of delivery.
                </p>
                <p>
                  Our mission is to democratize access to world-class data and AI expertise.
                  We believe that with the right partner, any organization can unlock the
                  transformative potential of their data.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Our Values</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What drives us</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-neutral-border h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 text-lg font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-neutral-mid text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Our Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Senior people, exceptional results
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <div className="group rounded-2xl border border-neutral-border bg-background p-6 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-mid text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <p className="text-accent font-medium tracking-wider uppercase text-sm mb-2">Culture</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What it&apos;s like to work here
              </h2>
              <div className="text-neutral-mid leading-relaxed space-y-4 text-left">
                <p>
                  At Finity People, we believe the best work happens when talented people are given
                  autonomy, trust, and interesting challenges. We don&apos;t micromanage — we hire
                  experienced professionals and let them do what they do best.
                </p>
                <p>
                  We offer flexible work arrangements, continuous learning budgets, conference
                  attendance, and the chance to work on some of the most interesting data and AI
                  challenges in the Nordics. Our consultants shape their own careers.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
