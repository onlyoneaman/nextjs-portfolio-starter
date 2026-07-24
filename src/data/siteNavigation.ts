import { siteConfig } from "@/config/site.config";

export type SiteNavigationItem = {
  name: string;
  path: string;
  description: string;
};

const siteNavigation: SiteNavigationItem[] = [...siteConfig.nav];

export default siteNavigation;
