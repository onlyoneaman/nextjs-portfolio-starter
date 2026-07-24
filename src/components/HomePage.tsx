import XConnectCard from "@/components/Common/XConnectCard.tsx";
import FeaturedTile from "@/components/Common/FeaturedTile.tsx";
import GithubContributions from "@/components/Common/GithubContributions.tsx";
import Link from "next/link";
import { PointerHighlight } from "./ui/pointer-highlight";
import { Blog } from "@/types/blog.ts";
import { Project } from "@/types/project.ts";
import { siteConfig } from "@/config/site.config";

type HomePageProps = {
  featuredContent?: Blog | Project | null;
};

const HomePage = ({ featuredContent }: HomePageProps) => {
  return (
    <>
      <div className="sm:p-0 pb-2 break-all max-w-[100vw] mx-auto space-y-5 md:space-y-8">
        <div className="space-y-2">
          <h1 className={"text-2xl md:text-5xl font-medium text-primary"}>
            <PointerHighlight
              containerClassName="inline-block"
              pointerClassName="text-yellow-500"
              rectangleClassName="bg-neutral-200 border-neutral-300"
            >
              <span className="relative z-10 px-1">{`Hey, I'm ${siteConfig.name}`}</span>
            </PointerHighlight>
          </h1>
          <h2 className="text-xl md:text-4xl font-medium text-gray-500">{siteConfig.role}</h2>
        </div>

        <XConnectCard />

        <div className="text-sm sm:text-lg tracking-wider font-light space-y-2 md:space-y-4">
          <p className="space-x-1">
            <span className="text-md sm:text-lg">
              {siteConfig.tagline}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            {siteConfig.bio}
          </p>

          <div className="space-x-1">
            <span>You can talk to me about</span>
            <span className="text-primary font-medium">work, new ideas, life, or anything else.</span>
            <br />
            {siteConfig.social.twitter && (
              <div className="">
                <span>Say Hi on</span>
                <Link
                  className="underline font-bold"
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </Link>
              </div>
            )}
          </div>
        </div>

        <GithubContributions />

        {featuredContent && (
          <FeaturedTile content={featuredContent} type={"status" in featuredContent ? "project" : "blog"} />
        )}
      </div>
    </>
  );
};

export default HomePage;
