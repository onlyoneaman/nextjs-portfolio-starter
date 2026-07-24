import AboutPage from "@/components/AboutPage";
import SEO from "@/components/SEO.tsx";
import { siteConfig } from "@/config/site.config";

const About = () => {

  return (
    <>
      <SEO
        title={"About"}
        description={`About ${siteConfig.name}: ${siteConfig.role}.`}
        keywords={`About ${siteConfig.name}, ${siteConfig.role}, bio`}
        canonicalPath="/about"
      />
      <AboutPage/>
    </>
  )
};

export default About;
