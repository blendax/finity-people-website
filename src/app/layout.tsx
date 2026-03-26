import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Finity People | Data & AI Consultancy",
    template: "%s | Finity People",
  },
  description:
    "Boutique Data & AI Consultancy based in Sweden. We turn data into decisions with senior consultants who deliver end-to-end.",
  keywords: [
    "data consultancy",
    "AI consulting",
    "machine learning",
    "data engineering",
    "Sweden",
    "analytics",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finitypeople.se",
    siteName: "Finity People",
    title: "Finity People | Data & AI Consultancy",
    description:
      "Boutique Data & AI Consultancy based in Sweden. We turn data into decisions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finity People | Data & AI Consultancy",
    description:
      "Boutique Data & AI Consultancy based in Sweden. We turn data into decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finity People",
  url: "https://finitypeople.se",
  logo: "https://finitypeople.se/logo.png",
  description:
    "Boutique Data & AI Consultancy based in Sweden. We turn data into decisions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kungsgatan 44",
    addressLocality: "Stockholm",
    postalCode: "111 35",
    addressCountry: "SE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+46-8-123-45-67",
    contactType: "sales",
    email: "hello@finitypeople.se",
  },
  sameAs: [
    "https://linkedin.com/company/finitypeople",
    "https://twitter.com/finitypeople",
    "https://github.com/finitypeople",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
