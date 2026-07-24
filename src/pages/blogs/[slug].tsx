import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import {getPostData, getSortedPostsData} from '@/lib/blogs';
import BlogPostList from "@/components/Blogs/BlogPostList";
import BlogPost from "@/components/Blogs/BlogPost";
import {Blog} from "@/types/blog";
import SEO from "@/components/SEO.tsx";
import { siteConfig } from "@/config/site.config";

type BlogsPageProps = {
  posts?: Blog[];
  post?: Blog;
};

type FaqItem = { question: string; answer: string };

// Parse an H3-based FAQ block sitting under a "Common questions" / "FAQ" H2
// into Question/Answer pairs for FAQPage structured data. Strips basic
// markdown (links, emphasis) from answers so the schema carries plain text.
const stripMarkdown = (text: string): string =>
  text
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1') // links -> label
    .replace(/[*_`]/g, '') // emphasis / code marks
    .replace(/\s+/g, ' ')
    .trim();

const extractFaqItems = (content?: string): FaqItem[] => {
  if (!content) return [];

  const lines = content.split('\n');
  const items: FaqItem[] = [];

  let inFaqSection = false;
  let currentQuestion: string | null = null;
  let answerLines: string[] = [];

  const flush = () => {
    if (currentQuestion) {
      const answer = stripMarkdown(answerLines.join(' '));
      if (answer) items.push({question: stripMarkdown(currentQuestion), answer});
    }
    currentQuestion = null;
    answerLines = [];
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      // A new H2 ends any FAQ section we were in.
      flush();
      inFaqSection = /common questions|faq|frequently asked/i.test(h2[1]);
      continue;
    }

    if (!inFaqSection) continue;

    const h3 = line.match(/^###\s+(.*)$/);
    if (h3) {
      flush();
      currentQuestion = h3[1];
      continue;
    }

    if (currentQuestion) {
      if (line.trim() === '---') continue; // section divider
      answerLines.push(line);
    }
  }

  flush();
  return items;
};

const BlogPage = ({posts, post}: BlogsPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

  const postCanonicalUrl = post?.canonical || (post ? `${siteConfig.siteUrl}/blogs/${post.slug}` : undefined);

  const faqItems = post ? extractFaqItems(post.content) : [];

  const blogPostingNode = post && {
    '@type': 'BlogPosting',
    '@id': `${postCanonicalUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: postCanonicalUrl,
    image: post.image ? `${siteConfig.siteUrl}${post.image}` : undefined,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.siteUrl}/#person`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.siteUrl}/#website`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postCanonicalUrl,
    },
    keywords: post.tags?.join(', '),
  };

  const faqPageNode = faqItems.length > 0 && {
    '@type': 'FAQPage',
    '@id': `${postCanonicalUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const structuredData = post && {
    '@context': 'https://schema.org',
    '@graph': [blogPostingNode, faqPageNode].filter(Boolean),
  };

  return (
    <>
      {post && (
        <Head>
          <meta property="og:type" content="article" />
          <meta property="og:url" content={postCanonicalUrl!} />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content={siteConfig.name} />
          {/* JSON-LD structured data for SEO */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </Head>
      )}

      <SEO
        title={post ? `${post.title} | Blog` : "Blogs"}
        description={post?.description || "A collection of blog posts about web development, programming, and more."}
        keywords={post?.tags?.join(',')}
        image={post?.cardImage || post?.image}
        canonicalPath={post ? (post.canonical || `/blogs/${post.slug}`) : "/blogs"}
        type={post ? "article" : "website"}
      />

      <div className="container px-2 md:px-4 py-5 max-w-2xl mx-auto">
        <Link
          className="hover:tracking-wide hover:underline transition-colors mb-4 inline-block"
          href="/blogs"
        >
          ← All Articles
        </Link>
        {post ? (
          <BlogPost post={post}/>
        ) : (
          <>
            <p className="text-gray-200 mb-8">
              A collection of blog posts about web development, programming, and more.
            </p>
            <BlogPostList posts={posts!} minimized/>
          </>
        )}
      </div>
    </>
  );
};


export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: {slug: post.slug},
  }));

  return {paths, fallback: false};
}

export async function getStaticProps({params}: any) {
  if (params?.slug) {
    const post = getPostData(params.slug);
    return {props: {post}};
  }

  const posts = getSortedPostsData();
  return {props: {posts}};
}

export default BlogPage;
