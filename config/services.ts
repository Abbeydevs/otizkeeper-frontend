import { Building2, Target, GraduationCap, Home } from "lucide-react";

export const SERVICE_PILLARS = [
  {
    title: "Corporate HR & Performance Solutions",
    description: "Structured HR systems for growing organizations.",
    icon: Building2,
    cta: "Explore Corporate HR",
    href: "/services/corporate",
  },
  {
    title: "Career Services",
    description:
      "Managing careers like businesses—strategy, positioning, and mobility.",
    icon: Target,
    cta: "Start Your Career Strategy",
    href: "/services/career",
  },
  {
    title: "Corporate Learning & Performance Academy",
    description: "Training built around performance outcomes, not attendance.",
    icon: GraduationCap,
    cta: "Explore Training Options",
    href: "/services/academy",
  },
  {
    title: "Domestic Staffing Services",
    description:
      "Professional household workforce management with oversight and structure.",
    icon: Home,
    cta: "Request Domestic Staff",
    href: "/services/domestic",
  },
];

export const SERVICES_CONTENT = {
  hero: {
    badge: "Our Ecosystem",
    headline: "Systemic Solutions for Human Capital.",
    description:
      "We don't just offer services; we architect performance-driven infrastructure across four strategic pillars.",
  },
  pillars: [
    {
      id: "corporate",
      title: "Corporate HR & Performance",
      icon: Building2,
      description: "Structured HR systems for growing organizations.",
      details: [
        "Organizational Design & Structuring",
        "Performance Management Systems",
        "Policy Development & Implementation",
        "Strategic Workforce Planning",
      ],
      color: "bg-otiz-black",
      textColor: "text-white",
    },
    {
      id: "career",
      title: "Career Services",
      icon: Target,
      description: "Managing careers like businesses—strategy and positioning.",
      details: [
        "Executive Career Coaching",
        "Strategic Personal Branding",
        "Global Mobility Support",
        "Transition & Pivot Strategy",
      ],
      color: "bg-otiz-purple",
      textColor: "text-white",
    },
    {
      id: "learning",
      title: "Learning & Academy",
      icon: GraduationCap,
      description: "Training built around outcomes, not attendance.",
      details: [
        "Corporate Training Programs",
        "Skill-Gap Assessment",
        "Leadership Development",
        "Performance-Based Workshops",
      ],
      color: "bg-otiz-gray",
      textColor: "text-otiz-black",
    },
    {
      id: "domestic",
      title: "Domestic Staffing",
      icon: Home,
      description: "Professional household workforce management.",
      details: [
        "Background Checks & Verification",
        "Service Level Agreements (SLAs)",
        "Onboarding & Training",
        "Ongoing Performance Oversight",
      ],
      color: "bg-otiz-black",
      textColor: "text-white",
    },
  ],
};

export const METHODOLOGY = [
  {
    number: "01",
    title: "Structural Audit",
    description:
      "We analyze your current workforce infrastructure to identify gaps in accountability, role definition, and performance metrics.",
  },
  {
    number: "02",
    title: "System Architecture",
    description:
      "We design the blueprints: defining precise roles, setting Service Level Agreements (SLAs), and building the performance framework.",
  },
  {
    number: "03",
    title: "Talent Integration",
    description:
      "Using O’Connect™, we match performance-profiled professionals to your newly designed structure.",
  },
  {
    number: "04",
    title: "Continuous Oversight",
    description:
      "Our job doesn't end at hiring. We provide ongoing monitoring to ensure the system maintains peak performance.",
  },
];
