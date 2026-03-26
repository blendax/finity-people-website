import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Finity People's privacy policy and cookie information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-4 text-white/70">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-8 text-neutral-mid leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
              <p>
                Finity People AB (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your
                privacy. This policy explains how we collect, use, and safeguard your personal
                data in accordance with the General Data Protection Regulation (GDPR) and
                Swedish data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Data We Collect</h2>
              <p>We may collect the following personal data:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and role</li>
                <li>Information you provide through our contact form</li>
                <li>Technical data (IP address, browser type, pages visited) through privacy-friendly analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Data</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries and provide our services</li>
                <li>Send relevant communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Legal Basis</h2>
              <p>
                We process your data based on: your consent, our legitimate business interests,
                contractual necessity, or legal obligations, as applicable under GDPR Article 6.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share it with trusted service providers
                (e.g., hosting, email) who process data on our behalf under appropriate data
                processing agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-2">Contact us at privacy@finitypeople.se to exercise your rights.</p>
            </div>

            <div id="cookies">
              <h2 className="text-xl font-bold text-foreground mb-3">7. Cookies</h2>
              <p>
                We use only essential cookies required for the website to function properly.
                We use privacy-friendly analytics (no personal data tracking) to understand
                how our website is used. No third-party advertising cookies are used.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
              <p>
                For questions about this policy or your personal data, contact our Data
                Protection Officer at privacy@finitypeople.se or write to:
              </p>
              <p className="mt-2">
                Finity People AB<br />
                Kungsgatan 44<br />
                111 35 Stockholm<br />
                Sweden
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
