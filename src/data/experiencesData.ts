import {Experience} from "@/types";

const experiencesData: Experience[] = [
  {
    date: 'Jan 2022 - Present',
    title: 'Software Engineer at Example Corp',
    role: "Software Engineer",
    companyName: "Example Corp",
    description: 'Building and shipping web products end to end.',
    website: 'https://example.com',
    fullLogo: '/images/companies/example.webp',
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    points: [
      'Placeholder highlight — describe a key project or responsibility here.',
      'Placeholder highlight — mention an impact or outcome you delivered.',
      'Placeholder highlight — add another accomplishment worth showcasing.',
    ],
  },
  {
    date: 'Jun 2020 - Dec 2021',
    title: 'Frontend Developer at Acme Inc',
    role: "Frontend Developer",
    companyName: "Acme Inc",
    description: 'Developed responsive user interfaces and design systems.',
    website: 'https://example.com',
    fullLogo: '/images/companies/acme.webp',
    techStack: ["React", "JavaScript", "CSS"],
    points: [
      'Placeholder highlight — describe your work on the frontend here.',
      'Placeholder highlight — mention a feature or improvement you shipped.',
    ],
  },
];

export default experiencesData;
