import MarkdownWrapper from "@/components/MarkdownWrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button.tsx";
import {getStyles} from "@/helpers/styleFunctions.ts";
import React from "react";
import {Badge} from "@/components/ui/badge.tsx";
import {Project} from "@/types/project.ts";
import { siteConfig } from "@/config/site.config";

type ProjectsPostProps = {
  post: Project
}

const ProjectsPost = ({post}: ProjectsPostProps) => {

  return (
    <div className="mx-auto space-y-3">
      <h1 className="text-primary text-3xl font-bold">
        {post.title}
      </h1>

      <h2 className="text-xl text-slate">
        {post.highlight}
      </h2>

      <h3 className="text-lg text-zinc-500">
        {post.description}
      </h3>
      <p className="text-zinc-400">
        By {siteConfig.name}{post.date ? ` • ${post.date}` : ""}
      </p>

      <div
        className="flex flex-wrap gap-1"
      >
        {post.techStack?.map((tag, index) => (
          <Badge
            key={tag}
            variant={"outline"}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {
        post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="min-w-full h-48 sm:h-64 md:h-96 object-cover rounded-md"
          />
        )
      }

      <MarkdownWrapper className="prose prose-invert prose-lg py-5" content={post.content} />

      <div
        className="flex gap-1"
      >
        {post.tags?.map((tag) => (
          <span
            className="text-xs bg-zinc-800 text-white px-2 py-0.5 rounded-2xl"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="flex space-x-4"
      >
        {
          post.link && post.label && (
            <Link
              href={post.link}
              target={"_blank"}
            >
              <Button
                className={getStyles("primary")}
              >
                {post.label || "Link"}
              </Button>
            </Link>
          )
        }

        {
          post.secondaryLink && post.secondaryLabel && (
            <Link
              href={post.secondaryLink}
              target={"_blank"}
            >
              <Button
                className={getStyles("secondary")}
              >
                {post.secondaryLabel}
              </Button>
            </Link>
          )
        }
      </div>

    </div>
  )
};

export default ProjectsPost;
