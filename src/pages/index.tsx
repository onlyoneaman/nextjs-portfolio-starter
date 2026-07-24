import HomePage from "@/components/HomePage";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { getPostData, getSortedPostsData } from '@/lib/blogs';
import { Blog } from "@/types/blog.ts";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/site.config";

export async function getStaticProps() {
  const [latestPost] = getSortedPostsData();
  const featuredPost = latestPost ? getPostData(latestPost.slug) as Blog : null;

  return {
    props: {
      featuredContent: featuredPost || null
    }
  };
}

type HomeProps = {
  featuredContent: Blog | null;
}

export default function Home({ featuredContent }: HomeProps) {
  return (
    <>
      <SEO
        title={siteConfig.seo.defaultTitle}
        description={siteConfig.seo.defaultDescription}
        keywords={siteConfig.seo.keywords}
        canonicalPath="/"
      />
      <BackgroundBeamsWithCollision
        className="min-h-full"
      >
        <HomePage featuredContent={featuredContent} />
      </BackgroundBeamsWithCollision>
    </>
  )
}
