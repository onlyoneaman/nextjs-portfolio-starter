import Image from "next/image";
import MarkdownWrapper from "@/components/MarkdownWrapper";
import Link from "next/link";
import {Button} from "@/components/ui/button.tsx";
import {getStyles} from "@/helpers/styleFunctions.ts";
import React, { useState } from "react";
import Lightbox from "@/components/Lightbox";
import {readingTime} from 'reading-time-estimator'
import {Blog} from "@/types/blog.ts";
import { siteConfig } from "@/config/site.config";

type BlogPostProps = {
  post: Blog;
};

const BlogPost = ({post}: BlogPostProps) => {
  const readingResult = readingTime(post.content);
  const [coverOpen, setCoverOpen] = useState(false);

  return (
    <div className="mx-auto space-y-5">
      <div className="space-y-1">
        <h1 className="text-primary text-3xl font-bold">
          {post.title}
        </h1>

        <h2 className="text-md text-slate">
          {post.highlight}
        </h2>

        <h3 className="md:text-lg text-zinc-500">
          {post.description}
        </h3>

        <div
          className="space-x-2"
        >
          <span className="text-zinc-400">By {siteConfig.name}</span>
          <span>•</span>
          <span className="text-zinc-400">{post.date}</span>
          <span>
            •
          </span>
          <span className="text-zinc-500 text-md">{readingResult.text}</span>
        </div>
      </div>

      {
        post.image && (
          <div>
            <Image
              className="rounded-md cursor-zoom-in transition hover:opacity-90 max-h-[70vh] w-auto"
              src={post.image}
              alt={post.title}
              width={768}
              height={96}
              onClick={() => setCoverOpen(true)}
            />
            {coverOpen && (
              <Lightbox
                images={[post.image]}
                index={0}
                alt={post.title}
                onClose={() => setCoverOpen(false)}
                onNavigate={() => {}}
              />
            )}
          </div>
        )
      }

      <MarkdownWrapper className="prose prose-invert prose-lg py-5" content={post.content} />

      <div>
        {
          post.link && (
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={getStyles('primary')}
              >
                {post.label ?? "Visit"}
              </Button>
            </Link>
          )
        }
      </div>
    </div>
  )
};

export default BlogPost;
