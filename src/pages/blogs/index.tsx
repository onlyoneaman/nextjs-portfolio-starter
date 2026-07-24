import React from 'react';
import BlogPostList from "@/components/Blogs/BlogPostList";

import {getSortedPostsData} from '@/lib/blogs';
import SEO from "@/components/SEO.tsx";

import {Blog} from "@/types/blog.ts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type BlogsListProps = {
  allPostsData: Blog[];
};

const BlogsList = ({allPostsData}: BlogsListProps) => {

  return (
    <>
      <SEO
        title="Blogs"
        description="Notes, articles, and writing on building software and shipping products."
        keywords="blog, articles, writing, notes, engineering"
        canonicalPath="/blogs"
      />
      <BlogPostList posts={allPostsData}/>
    </>
  )
};

export default BlogsList;
