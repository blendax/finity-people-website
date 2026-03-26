import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services#strategy", label: "Data Strategy" },
    { href: "/services#engineering", label: "Data Engineering" },
    { href: "/services#ai", label: "AI & Machine Learning" },
    { href: "/services#analytics", label: "Analytics & BI" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/insights", label: "Insights" },
  ],
  Connect: [
    { href: "/contact", label: "Contact Us" },
    { href: "https://linkedin.com/company/finitypeople", label: "LinkedIn" },
    { href: "https://twitter.com/finitypeople", label: "Twitter" },
    { href: "https://github.com/finitypeople", label: "GitHub" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">FP</span>
              </div>
              <span className="text-xl font-bold">
                Finity<span className="text-accent">People</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Boutique Data & AI Consultancy based in Sweden. We turn data into decisions.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Finity People AB. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy#cookies" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
