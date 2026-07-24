export const profile = {
  name: "Arnab Biswas",
  role: "Software Engineer",
  roles: [
    "Software Engineer",
    "API Architect",
    "Systems Thinker",
    "Problem Solver",
  ],
  lede: "I care about clean architecture, fast APIs, and systems that don't wake you up at 3am. I turn messy requirements into reliable services.",
  about: {
    name: "Arnab Biswas",
    role: "Software Engineer",
    focus: ["APIs", "distributed systems", "databases"],
    philosophy: "make it work, make it right, make it fast",
    currently: "building things that scale",
    open_to: "interesting problems & collaboration",
  },
};

export const skills = [
  { icon: "⚙️", title: "Languages", tags: ["Python", "Go", "Node.js", "SQL"] },
  { icon: "🗄️", title: "Databases", tags: ["PostgreSQL", "Redis", "MySQL"] },
  { icon: "🚀", title: "Backend & APIs", tags: ["REST", "GraphQL", "gRPC", "Express"] },
  { icon: "☁️", title: "Infra & DevOps", tags: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"] },
  { icon: "📊", title: "Messaging & Queues", tags: ["Kafka"] },
  { icon: "🛠️", title: "Tools", tags: ["Git", "Nginx", "Grafana", "Prometheus"] },
];

export const projects = [
  {
    num: "01",
    name: "Obol",
    desc: "A money-safe, double-entry ledger-as-a-service API in Go — the accounting backbone a fintech builds for itself. Integer minor-unit money, an immutable append-only journal, SERIALIZABLE Postgres with automatic retry, and idempotency keys on every write.",
    stack: ["Go", "PostgreSQL", "Redis", "gRPC"],
    source: "https://github.com/arnabb1swas/obol",
  },
  {
    num: "02",
    name: "FShare",
    desc: "A full-stack file-sharing service — upload any file, get a clean expiring link (or have it emailed). Files stream to Backblaze B2, metadata lives in Postgres, and an hourly job purges expired links and their objects. React front end over an Express API.",
    stack: ["React", "Express", "PostgreSQL", "Backblaze B2"],
    live: "https://fshare-8kxi.onrender.com",
    source: "https://github.com/arnabb1swas/FShare",
  },
  {
    num: "03",
    name: "Shortify",
    desc: "A URL shortener API — turn long links into short, shareable slugs. Built on Express with Postgres (Knex), JWT-authenticated accounts, and nanoid for collision-safe short codes.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    source: "https://github.com/arnabb1swas/shortify",
  },
  {
    num: "04",
    name: "Password Manager",
    desc: "A password manager for storing and retrieving credentials securely. Work in progress.",
    stack: [],
    source: "https://github.com/arnabb1swas/Password-Manager",
  },
  {
    num: "05",
    name: "Task Manager — GraphQL",
    desc: "A full-stack task manager — a schema-first GraphQL API (Apollo Server v5 over Postgres via Knex) behind a polished React SPA. JWT auth with USER/ADMIN roles, a drag-and-drop Kanban board with optimistic UI, nested sub-tasks, debounced search with cursor pagination, and an admin user directory.",
    stack: ["React", "GraphQL", "Apollo", "PostgreSQL"],
    live: "https://task-manager-web-ygmg.onrender.com/login",
    source: "https://github.com/arnabb1swas/Task-Manager-GraphQL",
  },
];

export const contacts = [
  { icon: "✉️", label: "email", value: "arnabb.dev@gmail.com", href: "mailto:arnabb.dev@gmail.com" },
  { icon: "🐙", label: "github", value: "@arnabb1swas", href: "https://github.com/arnabb1swas" },
  { icon: "💼", label: "linkedin", value: "/in/arnabb1swas", href: "https://www.linkedin.com/in/arnabb1swas/" },
  { icon: "🐦", label: "twitter / x", value: "@arnabbiswas_", href: "https://x.com/arnabbiswas_" },
  { icon: "🌳", label: "linktree", value: "/arnabbiswas", href: "https://linktr.ee/arnabbiswas" },
];

export const nav = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
