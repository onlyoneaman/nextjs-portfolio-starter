import React from 'react';
import BlogCard from "@/components/Blogs/BlogCard";
import ContainerTitle from "@/components/Common/ContainerTitle";

import {Blog} from "@/types/blog.ts";

type BlogPostListProps = {
  posts: Blog[];
  minimized?: boolean;
};

const BlogPostList = (
  {
    posts,
    minimized = false
  }: BlogPostListProps
) => {
  if (!posts || posts.length === 0) {
    return <p>No blog posts found.</p>;
  }

  if(minimized) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Blog) => (
          <BlogCard key={post.slug} post={post}/>
        ))}
      </div>
    )
  }

  return (
    <div
      className="mx-auto space-y-2 sm:space-y-3 md:space-y-5"
    >
      <ContainerTitle
        title="Pensieve"
      />
      <p className="text-sm sm:text-md">
        A collection of thoughts, ideas, and musings.
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 min-w-full gap-4 md:gap-6"
      >
        {posts.map((post: Blog) => {
          if (post.hidden) return null;
          return (
            <BlogCard key={post.slug} post={post}/>
          )
        })}
      </div>
    </div>
  );
};

export default BlogPostList;
