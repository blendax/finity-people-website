# Finity People - New Modern Website Specification

## 1. Project Overview

**Company:** Finity People (finitypeople.se)
**Industry:** Boutique Data & AI Consulting (Sweden)
**Goal:** Design and build a modern, high-converting website that positions Finity People as a premium niche data and AI consultancy, on par with the best boutique firms globally.

---

## 2. Inspiration & Benchmark Companies

The new site should draw inspiration from leading small/niche data and AI consulting companies known for exceptional web presence:

| Company | What to learn from them |
|---------|------------------------|
| **Dataiku** | Clean product storytelling, strong use of illustrations and animations |
| **Syntio** | Minimal Nordic aesthetic, clear service breakdown, strong case studies |
| **Caserta** | Bold hero sections, data-focused imagery, client logos grid |
| **Advancing Analytics** | Video content integration, approachable tone for technical topics |
| **Quantumblack (McKinsey)** | Dark premium aesthetic, motion graphics, deep-dive articles |
| **Faculty AI** | Clean typography, strong CTA placement, trust signals |
| **Aigent** | Scandinavian design sensibility, concise messaging |
| **Normative** | Swedish tech aesthetic, sustainability-forward, modern stack |

### Design Principles (borrowed from the best)
- **Minimal & clean** - Scandinavian design ethos, generous whitespace
- **Dark mode option** - Premium feel common among top AI firms
- **Micro-interactions** - Subtle animations on scroll, hover states, page transitions
- **Data visualization as art** - Use abstract data-inspired visuals instead of stock photos
- **Mobile-first** - Flawless responsive experience

---

## 3. Site Structure & Pages

### 3.1 Home / Landing Page
- **Hero section:** Bold headline + animated abstract data visualization background (particles, neural network, flowing data streams). Clear value proposition in 1-2 sentences. Primary CTA: "Let's Talk" / "Book a Discovery Call"
- **What We Do:** 3-4 service pillars with icons and short descriptions (links to Services page)
- **Why Finity People:** Key differentiators (3 columns) - e.g., "Senior Consultants Only", "End-to-End Delivery", "Nordic & Global Reach"
- **Client logos / Trust bar:** Scrolling or grid of client/partner logos
- **Featured case study:** One highlighted success story with metrics
- **Testimonial:** Rotating quotes from clients
- **CTA section:** "Ready to unlock your data potential?" with contact button

### 3.2 Services
Individual sections or cards for each service area:
- **Data Strategy & Advisory** - Helping organizations define their data roadmap
- **Data Engineering & Architecture** - Building modern data platforms (cloud, lakehouse, pipelines)
- **AI & Machine Learning** - Custom ML models, NLP, computer vision, generative AI
- **Analytics & Business Intelligence** - Dashboards, self-service analytics, data democratization
- **Data Governance & Quality** - Ensuring trusted, compliant data assets
- **AI Transformation & Training** - Upskilling teams, change management for AI adoption

Each service card should include:
- Icon or illustration
- Brief description (2-3 sentences)
- Key technologies/tools used
- Link to related case studies

### 3.3 Case Studies / Work
- Grid layout with filterable tags (by industry, service type, technology)
- Each case study page includes:
  - Client overview (anonymized if needed)
  - Challenge
  - Approach / Solution
  - Results with concrete metrics (e.g., "40% reduction in processing time")
  - Technologies used (as tags/badges)

### 3.4 About Us
- **Our Story:** Company founding narrative, mission, vision
- **Values:** 3-5 core values with brief descriptions
- **Team:** Grid of team members with photos, roles, LinkedIn links. Hover reveals a short bio or fun fact
- **Culture:** What it's like to work at Finity People (recruitment angle)

### 3.5 Insights / Blog
- Grid of articles, whitepapers, and thought leadership pieces
- Categories: AI Trends, Data Engineering, Case Studies, Company News
- Each post has: title, excerpt, author, date, reading time, category tag
- Newsletter signup CTA embedded in the page

### 3.6 Careers
- Open positions with descriptions
- "Why join us" section with benefits and culture highlights
- Application form or link to external job board

### 3.7 Contact
- Clean contact form (Name, Email, Company, Message, Service Interest dropdown)
- Office location with embedded map
- Direct email and phone
- Social media links
- Calendar booking integration (e.g., Calendly embed)

---

## 4. Design System

### 4.1 Color Palette
- **Primary:** Deep navy or dark blue (#0A1628 or similar) - authority, trust, tech
- **Accent:** Electric blue or teal (#00D4FF or #0EA5E9) - innovation, AI
- **Secondary accent:** Warm gradient (subtle purple-to-blue) for CTAs and highlights
- **Neutrals:** White (#FFFFFF), light gray (#F8FAFC), medium gray (#94A3B8)
- **Success/Data green:** (#10B981) for metrics and positive stats

*Note: Final palette should be validated against the existing Finity People brand. If they have established brand colors, those take priority.*

### 4.2 Typography
- **Headings:** Modern geometric sans-serif (e.g., Inter, Space Grotesk, or Satoshi)
- **Body:** Clean readable sans-serif (e.g., Inter, DM Sans)
- **Code/Data:** Monospace for any data/code snippets (e.g., JetBrains Mono)
- Large font sizes for headings (48-72px hero, 36-48px sections)
- Generous line height (1.6-1.8 for body text)

### 4.3 Imagery & Graphics
- **No generic stock photos** - Use abstract data visualizations, geometric patterns, gradient meshes
- Custom illustrations for service areas
- Team photos should be professional but approachable (not overly corporate)
- Animated SVGs and Lottie animations for micro-interactions
- Optional: 3D elements (subtle, not overwhelming)

### 4.4 Layout
- Max content width: 1280px
- 12-column grid system
- Generous padding and whitespace
- Card-based UI for services, case studies, team members
- Sticky navigation header with blur/transparency effect

---

## 5. Technical Requirements

### 5.1 Stack (Recommended)
- **Framework:** Next.js 14+ (App Router) or Astro for static-first performance
- **Styling:** Tailwind CSS + custom design tokens
- **Animations:** Framer Motion or GSAP for scroll animations and page transitions
- **CMS:** Headless CMS (Sanity, Contentful, or Storyblok) for blog/case studies
- **Deployment:** Vercel or Netlify
- **Analytics:** Plausible or PostHog (privacy-friendly, GDPR compliant)
- **Forms:** Formspree or custom API route

### 5.2 Performance Targets
- Lighthouse score: 95+ across all categories
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Core Web Vitals: all green

### 5.3 SEO
- Semantic HTML5 structure
- Open Graph and Twitter Card meta tags
- Structured data (JSON-LD) for organization, articles, FAQ
- XML sitemap and robots.txt
- Swedish + English language support (i18n)
- Alt text on all images

### 5.4 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable
- Screen reader compatible
- Sufficient color contrast ratios
- Focus indicators on all interactive elements

### 5.5 GDPR & Privacy
- Cookie consent banner (compliant with Swedish/EU regulations)
- Privacy policy page
- No unnecessary third-party trackers
- Data processing transparency

---

## 6. Key Interactions & Animations

- **Hero:** Animated particle/data flow background (WebGL or CSS), text fade-in on load
- **Scroll animations:** Elements fade/slide in as they enter viewport
- **Service cards:** Hover lift effect with subtle shadow transition
- **Navigation:** Smooth scroll between sections, transparent-to-solid header on scroll
- **Page transitions:** Subtle fade or slide transitions between pages
- **Cursor:** Optional custom cursor effect on desktop (subtle, not distracting)
- **Numbers/stats:** Count-up animation when metrics scroll into view
- **Dark/light toggle:** Smooth theme transition

---

## 7. Content Strategy

### Tone of Voice
- **Expert but approachable** - Not academic, not salesy
- **Confident** - "We deliver" not "We try to"
- **Concise** - Short paragraphs, bullet points, clear headers
- **Nordic directness** - Straightforward, honest, no fluff
- **Bilingual** - Primary in English (international positioning), Swedish version available

### Key Messages
1. "We turn data into decisions" (or similar concise value prop)
2. Senior consultants, not junior benchwarmers
3. End-to-end: from strategy to production
4. Nordic quality, global perspective
5. Small enough to care, experienced enough to deliver

---

## 8. Success Metrics

- Increase inbound leads by 50%+ vs current site
- Average session duration > 2 minutes
- Bounce rate < 40%
- Contact form submissions as primary conversion goal
- Blog/insights driving organic search traffic growth
- Positive feedback from clients and recruits on brand perception

---

## 9. Project Phases

### Phase 1: Foundation
- Design system and component library
- Home page implementation
- Navigation and layout shell
- Responsive framework

### Phase 2: Core Pages
- Services page
- About page with team section
- Contact page with form

### Phase 3: Content & Dynamic
- Blog/Insights with CMS integration
- Case studies section
- Careers page

### Phase 4: Polish & Launch
- Animations and micro-interactions
- SEO optimization
- Performance tuning
- Accessibility audit
- GDPR compliance
- Browser/device testing
- Launch and monitoring setup

---

## 10. Open Questions

- [ ] Confirm existing brand guidelines (logo, colors, fonts) - adapt or rebrand?
- [ ] Content: Who writes case studies and blog posts? Need a content pipeline
- [ ] Photography: New team photos needed?
- [ ] CMS preference: Does the team have experience with any headless CMS?
- [ ] Hosting/domain: Keep current domain and hosting provider?
- [ ] Budget for licensed fonts, illustrations, or animation libraries?
- [ ] Integration needs: CRM, email marketing, calendar booking tools?
- [ ] Languages: English-only or Swedish + English from day one?
