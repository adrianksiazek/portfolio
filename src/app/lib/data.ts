export const links = [
  {
    name: "home",
    hash: "#hero",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "skills",
    hash: "#skills",
  },
] as const;

export const services = ["Web Development", "Web Design", "UI/UX Design", "Marketing"] as const;

export const technologies = [
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Figma",
  "Gsap",
  "TailwindsCSS",
  "React",
  "Next",
] as const;

export const projects = [
  {
    name: "Drag and drop app",
    description: "Drag and drop App developed using React, Typescript, Vite, Tailwind, Dnd-kit, and AutoAnimate.",
    technologies: ["React", "Vite", "Tailwind", "Dnd-kit", "Auto-animate"],
  },
  {
    name: "Google-docs-app",
    description:
      "Google docs app developed using Next.js, CSS framework - Tailwindcss , database - Firebase and Draft.js",
    technologies: ["Next", "Tailwind", "Firebase", "Draft.js"],
  },
  {
    name: "Archispace",
    description:
      "Archispace is a BIM platform - a public space where producers can publish their BIM assets for architectural and design purposes for designers and show their products catalogs. Beyond that, the platform is supposed to deliver many additional features like messaging between producers and designers, containers and products liking and observing and extensive reporting. Implemented features: homepage for authenicated and unauthenticated user, contact form, partners form, producer reports, integration with external CRM system",
    technologies: ["Next", "Typescript", "React Query", "Tailwind", "Laravel", "Cypress", "MySQL", "Figma"],
  },
  {
    name: "Erepair Forms",
    description:
      "An application that allows customers to register power tools and request the repair of a power tool for warranty.",
    technologies: ["Typescript", "React", "Inertia", "Laravel", "Laravel Nova", "MySQL"],
  },
  {
    name: "Marketing automation",
    description:
      "A project focused on standardizing and optimizing marketing processes by implementing various automation solutions. The goal was to establish harmonized operating procedures that enable more efficient content management, personalized communication with customers and increase customer engagement. Part of the project was also rewriting currently working application into newer technologies to facilitate further development.",
    technologies: ["React", "Next", "Typescript", "Tailwind", "Cypress", "Sentry", "Directus"],
  },
];
