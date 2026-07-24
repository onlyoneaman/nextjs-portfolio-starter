---
title: "Writing With Markdown"
description: "A quick tour of the frontmatter fields and formatting this template supports."
date: "2026-01-15"
type: "post"
tags: [markdown, guide]
image: "/content/blogs/sample-cover.png"
---

This second sample shows how a blog list renders with more than one post.

## Frontmatter fields

- `title` shows in the list and on the post page
- `description` is used for the preview and SEO
- `date` controls ordering, newest first
- `type` is a free-form label (for example `post` or `thought`)
- `tags` is an array of tags
- `image` is the cover image path under `public/`

## Tips

Keep filenames short and lowercase with dashes. The filename becomes the URL slug,
so this post is served at `/blogs/writing-with-markdown`.
