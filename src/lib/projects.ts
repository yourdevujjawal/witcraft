export type ProjectStatus = "In development" | "Open source" | "Concept";

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  year: string;
  number: string;
  stack: string[];
  accent: "lime" | "blue" | "orange";
  role: string;
  challenge: string;
  approach: string[];
  notes: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "truerdp",
    name: "TrueRDP",
    eyebrow: "Infrastructure · Product",
    summary: "Making remote computing easier to access and manage.",
    description:
      "A product exploration in remote desktop and infrastructure services, with an emphasis on clear workflows and a dependable customer experience.",
    status: "In development",
    year: "2026",
    number: "01",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    accent: "lime",
    role: "Product engineering and frontend architecture",
    challenge:
      "Infrastructure products can expose users to technical complexity before they reach the task they came to complete.",
    approach: [
      "Organise product information around the user's next decision.",
      "Treat operational states and edge cases as first-class interface elements.",
      "Keep the application architecture modular as product capabilities evolve.",
    ],
    notes: [
      "This case study describes work in progress; it does not claim production metrics or customer outcomes.",
      "Only public, non-confidential product details are included.",
    ],
  },
  {
    slug: "devkit-forge",
    name: "DevKit Forge",
    eyebrow: "Developer tooling · Open source",
    summary: "A TypeScript toolkit for predictable data imports.",
    description:
      "A framework-independent data import toolkit focused on normalising columns, validating records and reporting useful row-level errors.",
    status: "Open source",
    year: "2026",
    number: "02",
    stack: ["TypeScript", "Node.js", "Vitest"],
    accent: "blue",
    role: "Sole developer and technical architect",
    challenge:
      "Importing tabular data often mixes parsing, validation and UI concerns, making it difficult to reuse the same reliable rules across applications.",
    approach: [
      "Keep the core import engine independent of any UI framework.",
      "Model validation and row-level errors as explicit data.",
      "Design integration points so React applications can adopt the engine without inheriting a UI library.",
    ],
    notes: [
      "The project is evolving; the repository is the source of truth for current implementation status.",
    ],
    links: [
      { label: "View source on GitHub", href: "https://github.com/truerdp/devkit-forge" },
    ],
  },
  {
    slug: "finsight",
    name: "Finsight",
    eyebrow: "Personal finance · Product concept",
    summary: "A clearer way to understand everyday money.",
    description:
      "A personal finance tracker concept exploring how thoughtful information design can make spending patterns and everyday financial decisions easier to understand.",
    status: "Concept",
    year: "2026",
    number: "03",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    accent: "orange",
    role: "Product design exploration and application architecture",
    challenge:
      "Financial dashboards can become dense collections of charts without helping people understand what changed or what deserves attention.",
    approach: [
      "Prioritise clear summaries before detailed breakdowns.",
      "Use consistent categories and readable transaction histories.",
      "Keep the interface calm and useful rather than turning every metric into a chart.",
    ],
    notes: [
      "This is presented as a concept and development project, not as a live financial service.",
    ],
  },
];

export const featuredProjects = projects;
