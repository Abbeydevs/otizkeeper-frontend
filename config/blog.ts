export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  href: string;
  content: string;
  summaryPoints: string[];
}

export const INSIGHTS_CATEGORIES: string[] = [
  "All",
  "Corporate HR",
  "Career Strategy",
  "Intelligence",
  "Domestic Staffing",
];

export const ALL_POSTS: Post[] = [
  {
    slug: "architecture-of-performance",
    href: "/insights/architecture-of-performance",
    title: "The Architecture of Performance: Why Structure Wins Over Urgency",
    category: "Corporate HR",
    excerpt:
      "In the rush to scale, many businesses prioritize hiring over design. We explore why defining the role's infrastructure is the only way to ensure long-term ROI.",
    date: "April 12, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    featured: true,
    content: `
      <p>In the modern business landscape, the pressure to scale often leads to a "hiring-first" mentality...</p>
      <h3>The Structural Gap</h3>
      <p>At OtizKeeper, we define the "Structural Gap" as the distance between an individual's potential and the clarity of the role they inhabit...</p>
    `,
    summaryPoints: [
      "Talent cannot override poor organizational design.",
      "Roles must be architected before they are recruited.",
      "Accountability is the byproduct of structural clarity.",
    ],
  },
  {
    slug: "professionalizing-domestic-staffing",
    href: "/insights/professionalizing-domestic-staffing",
    title: "Professionalizing the Private Household",
    category: "Domestic Staffing",
    excerpt:
      "Bringing corporate-level accountability to domestic workforce management through structured SLAs and verification.",
    date: "April 08, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1556911220-e150213467f6?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    content: `<p>The domestic staffing sector in Nigeria has long operated in an informal capacity...</p>`,
    summaryPoints: [
      "Formalizing informal workforce sectors.",
      "Implementing corporate-grade verification.",
      "Ensuring household safety through structure.",
    ],
  },
  {
    slug: "ai-scoring-future",
    href: "/insights/ai-scoring-future",
    title: "The Future of O’Connect™: AI-Driven Talent Scoring",
    category: "Intelligence",
    excerpt:
      "How we are removing human bias from the matching process using proprietary performance intelligence metrics.",
    date: "April 01, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    content: `<p>Bias in recruitment is an architectural flaw...</p>`,
    summaryPoints: [
      "Eliminating recruitment bias via data.",
      "Moving beyond the standard CV.",
      "Predicting performance through intelligence.",
    ],
  },
  {
    slug: "strategic-career-positioning",
    href: "/insights/strategic-career-positioning",
    title: "Strategic Career Positioning for the 2026 Market",
    category: "Career Strategy",
    excerpt:
      "Treating your professional journey like a business. A guide to strategic positioning and global mobility.",
    date: "March 25, 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    featured: false,
    content: `<p>Your career is your most valuable asset...</p>`,
    summaryPoints: [
      "Career as a business entity.",
      "Global mobility strategies.",
      "Architecting a resilient professional brand.",
    ],
  },
];

export const RECENT_POSTS = ALL_POSTS.slice(0, 4);
