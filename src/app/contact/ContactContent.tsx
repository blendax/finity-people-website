"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "Data Strategy & Advisory",
  "Data Engineering & Architecture",
  "AI & Machine Learning",
  "Analytics & Business Intelligence",
  "Data Governance & Quality",
  "AI Transformation & Training",
  "Other",
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-2xl">
              Whether you have a specific challenge or just want to explore possibilities,
              we&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              {submitted ? (
                <div className="rounded-2xl border border-success/30 bg-success/5 p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message sent!</h3>
                  <p className="text-neutral-mid">
                    Thank you for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-background text-foreground placeholder:text-neutral-mid focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-background text-foreground placeholder:text-neutral-mid focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-background text-foreground placeholder:text-neutral-mid focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-background text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select a service area</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-border bg-background text-foreground placeholder:text-neutral-mid focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent to-secondary rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Get in touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-neutral-mid">hello@finitypeople.se</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <p className="text-sm text-neutral-mid">+46 (0)8 123 45 67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-foreground">Office</p>
                        <p className="text-sm text-neutral-mid">Kungsgatan 44, 111 35 Stockholm, Sweden</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Follow us</h3>
                  <div className="flex gap-3">
                    {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                      <span
                        key={social}
                        className="px-4 py-2 text-sm rounded-full border border-neutral-border text-neutral-mid hover:border-accent hover:text-accent transition-colors cursor-pointer"
                      >
                        {social}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl bg-neutral-light border border-neutral-border h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-neutral-mid mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-sm text-neutral-mid">Stockholm, Sweden</p>
                    <p className="text-xs text-neutral-mid/60 mt-1">Map integration placeholder</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
