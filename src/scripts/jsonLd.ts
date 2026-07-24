import siteNavigation from "@/data/siteNavigation";
import { siteConfig } from "@/config/site.config";

const SITE_URL = siteConfig.siteUrl;
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const toAbsoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

const sameAs = [
  siteConfig.social.twitter,
  siteConfig.social.linkedin,
  siteConfig.social.github,
  siteConfig.social.medium,
  siteConfig.social.instagram,
].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      "name": siteConfig.name,
      "jobTitle": siteConfig.role,
      "description": siteConfig.bio,
      "url": SITE_URL,
      "image": `${SITE_URL}${siteConfig.avatar}`,
      "email": siteConfig.email,
      "sameAs": sameAs
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      "url": SITE_URL,
      "name": siteConfig.name,
      "description": siteConfig.seo.defaultDescription,
      "publisher": {
        "@id": PERSON_ID
      },
      "inLanguage": "en-US"
    },
    ...siteNavigation.map((item, index) => ({
      "@type": "SiteNavigationElement",
      "@id": `${SITE_URL}/#site-navigation-${index + 1}`,
      "name": item.name,
      "description": item.description,
      "url": toAbsoluteUrl(item.path)
    }))
  ]
};

export default jsonLd;
