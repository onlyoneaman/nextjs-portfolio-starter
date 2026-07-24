import Head from 'next/head';
import React from "react";
import { useRouter } from "next/router";
import { siteConfig } from "@/config/site.config";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonicalPath?: string;
  type?: "website" | "article";
  noindex?: boolean;
  nofollow?: boolean;
}

const SITE_URL = siteConfig.siteUrl;
const SITE_NAME = siteConfig.name;
const DEFAULT_TITLE = siteConfig.seo.defaultTitle;
const DEFAULT_DESCRIPTION = siteConfig.seo.defaultDescription;
const DEFAULT_IMAGE = `${SITE_URL}${siteConfig.avatar}`;
const defaultKeywords = siteConfig.seo.keywords;

const toAbsoluteUrl = (url?: string) => {
  if (!url) {
    return undefined;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const sanitizePath = (path: string) => {
  const noHash = path.split("#")[0];
  const noQuery = noHash.split("?")[0];

  if (!noQuery || noQuery.includes("[")) {
    return "/";
  }

  if (noQuery !== "/" && noQuery.endsWith("/")) {
    return noQuery.slice(0, -1);
  }

  return noQuery;
};

const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const router = useRouter();

  const {
    title,
    description = DEFAULT_DESCRIPTION,
    keywords,
    image,
    canonicalPath,
    type = "website",
    noindex = false,
    nofollow = false,
  } = props;

  const resolvedTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : DEFAULT_TITLE;
  const resolvedKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const resolvedImage = toAbsoluteUrl(image) || DEFAULT_IMAGE;
  const currentPath = canonicalPath || sanitizePath(router.asPath || "/");
  const canonicalUrl = toAbsoluteUrl(currentPath) || SITE_URL;
  const robotsContent = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`;
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    name: resolvedTitle,
    description,
    url: canonicalUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
    },
  };

  return (
    <Head>
      <title key="title">{resolvedTitle}</title>
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={resolvedKeywords} />
      <meta key="robots" name="robots" content={robotsContent} />
      <link key="canonical" rel="canonical" href={canonicalUrl} />

      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:locale" property="og:locale" content="en_US" />
      <meta key="og:title" property="og:title" content={resolvedTitle} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:image" property="og:image" content={resolvedImage} />
      <meta key="og:image:alt" property="og:image:alt" content={resolvedTitle} />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:creator" name="twitter:creator" content={siteConfig.seo.twitterHandle} />
      <meta key="twitter:site" name="twitter:site" content={siteConfig.seo.twitterHandle} />
      <meta key="twitter:title" name="twitter:title" content={resolvedTitle} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={resolvedImage} />

      <script
        key="webpage-jsonld"
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
    </Head>
  );
};

export default SEO;
