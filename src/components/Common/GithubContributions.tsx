import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site.config";

// Client-only: the widget fetches contribution data on mount, so there is
// nothing useful to render on the server.
const GitHubContributionGraph = dynamic(
  () => import("github-contrib-graph/react").then((m) => m.GitHubContributionGraph),
  {
    ssr: false,
    loading: () => <div className="h-[150px] w-full animate-pulse rounded-lg bg-neutral-200/70" />,
  },
);

type GithubContributionsProps = {
  username?: string;
  className?: string;
};

const GithubContributions = ({ username = siteConfig.githubUsername, className }: GithubContributionsProps) => {
  return (
    <div className={`overflow-x-auto rounded-lg ${className ?? ""}`}>
      <GitHubContributionGraph
        username={username}
        theme="glacier"
        showHeader
        showFooter={false}
        showThumbnail={false}
      />
    </div>
  );
};

export default GithubContributions;
