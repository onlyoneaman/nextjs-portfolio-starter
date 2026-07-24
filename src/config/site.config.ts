// Edit this file to make the template yours. Everything about your identity,
// links, SEO, and navigation lives here. Leave a field blank ("") to hide the UI
// that depends on it. For example, an empty `phone` hides the call button.

export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  tagline: "I turn ideas into products.",
  bio: "This is your short bio. Edit it in src/config/site.config.ts, along with everything else about this site.",

  email: "you@example.com",
  phone: "", // used by the contact call button; blank hides it
  siteUrl: "https://template.amankumar.ai",

  avatar: "/images/avatar.png",
  resume: "/resume.pdf",
  calLink: "", // your Cal.com handle (e.g. "yourname/30min"); blank hides the booking embed

  githubUsername: "onlyoneaman", // used for the GitHub contributions graph

  social: {
    twitter: "https://x.com/onlyoneaman",
    linkedin: "https://linkedin.com/in/onlyoneaman",
    github: "https://github.com/onlyoneaman",
    instagram: "https://instagram.com/_a_gryffindor",
    medium: "https://onlyoneaman.medium.com",
  },

  seo: {
    defaultTitle: "Your Name",
    defaultDescription: "Personal portfolio, blog, and projects.",
    twitterHandle: "@onlyoneaman",
    keywords: "portfolio, blog, projects, developer",
  },

  nav: [
    { name: "Projects", path: "/projects", description: "Things I've built." },
    { name: "Experience", path: "/experience", description: "Where I've worked." },
    { name: "Blogs", path: "/blogs", description: "Notes and writing." },
    { name: "About", path: "/about", description: "About me." },
    { name: "Contact", path: "/contact", description: "Get in touch." },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
