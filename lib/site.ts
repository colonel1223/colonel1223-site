export const SITE = {
  name: "Spencer K. Cottrell",
  tagline: "AI Safety · Systems Inquiry · Applied Research",
  location: "San José State University · Economics",
  links: {
    github: "https://github.com/colonel1223",
    linkedin: "https://www.linkedin.com/in/spencercottrell/",
    x: "https://x.com/colonel_1223",
    email: "mailto:spencerkitarocottrell@gmail.com"
  },
  focus: [
    "Alignment & governance under capability acceleration",
    "Systems-level modeling of risk, incentives, and deployment",
    "Interactive research artifacts (simulations, visualizations, tools)"
  ],
  selected: [
    {
      title: "Modern Alchemy — AI Research Archive",
      desc: "A curated research program spanning systems risk, probabilistic modeling, and interactive artifacts.",
      href: "/research"
    },
    {
      title: "Transmutation Research (Interactive)",
      desc: "Public-facing interactive visualizations and writeups designed for clarity and impact.",
      href: "https://colonel1223.github.io/transmutation-research/"
    },
    {
      title: "Flagship Projects",
      desc: "Case studies: problem → method → artifact → takeaway.",
      href: "/projects"
    }
  ],
  publications: [
    {
      year: "2026",
      title: "Magnum Opus — Probabilistic Models (Paper + Interactive)",
      venue: "Working paper / interactive artifact",
      links: [
        { label: "Repo", href: "https://github.com/colonel1223" }
      ]
    }
  ],
  projects: [
    {
      title: "AI Safety — Modern Alchemy",
      outcome: "Research hub + artifacts",
      stack: "Next.js · GitHub Pages · Tailwind",
      href: "/research"
    },
    {
      title: "Transmutation Research",
      outcome: "Interactive visualizations and writeups",
      stack: "Static web · GitHub Pages",
      href: "https://colonel1223.github.io/transmutation-research/"
    }
  ]
} as const;
