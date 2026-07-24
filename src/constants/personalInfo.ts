// Personal information constants for reuse across the site.
// Derived from the single source of truth in src/config/site.config.ts.

import { siteConfig } from "@/config/site.config";

export const personalInfo = {
  social: siteConfig.social,
  // Add project links here (e.g. { myapp: "https://myapp.com" }).
  projects: {} as Record<string, string>,
};

// You can add more personal info here as needed
// e.g., name, email, etc.
