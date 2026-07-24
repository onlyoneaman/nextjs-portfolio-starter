# AGENTS.md

A Next.js 14 (pages router) portfolio template. This file tells coding agents how to
work in and personalize this repo. If a human pointed you here to "set up my
portfolio," follow the **Personalize this template** playbook below.

## Commands

- Install: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build` — must pass before you commit
- Lint: `npm run lint`

Node version is pinned in `.nvmrc`. This repo uses `legacy-peer-deps=true` (`.npmrc`).

## Layout

- `src/config/site.config.ts` — ALL identity, links, SEO, and nav. The single edit
  surface. Nothing personal should be hardcoded anywhere else.
- `src/pages/` — routes: `/`, `/about`, `/contact`, `/blogs`, `/blogs/[slug]`,
  `/projects`, `/projects/[slug]`.
- `src/components/` — UI (layout, common widgets, blog/project renderers).
- `src/lib/` — markdown loading (gray-matter) for blogs and projects.
- `content/blogs/*.md`, `content/projects/*.md` — the posts. Filename = URL slug.
- `public/` — static assets. Post images live under `public/content/...`.

## Conventions

- Never hardcode personal data (name, email, socials, handles) in components — read
  it from `siteConfig`. A blank config field should hide its UI, not render empty.
- Keep the build green. Match the existing Tailwind + shadcn/ui patterns.
- Markdown is rendered with `react-markdown`; frontmatter is parsed with `gray-matter`.

## Personalize this template (playbook)

1. Edit every field in `src/config/site.config.ts`: `name`, `role`, `tagline`, `bio`,
   `email`, `phone`, `siteUrl`, `githubUsername`, `social`, `seo`, `calLink`, `nav`.
   Leave a field `""` to hide the thing it drives (e.g. empty `calLink` hides the
   contact booking button).
2. Replace `public/images/avatar.png` and `public/resume.pdf` with your own.
3. Update `public/site.webmanifest` (name/short_name/description) and, if you like,
   the favicons in `public/`.
4. Edit `src/data/experiencesData.ts` with your work history (used by the About page),
   and update the company logos in `public/images/companies/`.
5. Delete the sample posts in `content/blogs/` and `content/projects/` and add your
   own markdown with the same frontmatter shape. Put images in `public/content/...`.
6. Update `public/llms.txt` with your name and pages.
7. Set `SITE_URL` (see `.env.example`), run `npm run build`, then deploy. The site is
   fully static (SSG) — it works on Cloudflare Pages (Git integration, Next.js preset,
   `nodejs_compat` flag) or Vercel. See the README "Deploy" section for exact steps.

## Verify before you're done

- `npm run build` passes.
- `rg -i "your name|old placeholder"` finds nothing stale.
- The dev server renders `/`, `/about`, `/contact`, `/blogs`, `/projects`.

## Credit

Template by Aman ([@onlyoneaman](https://x.com/onlyoneaman), [amankumar.ai](https://amankumar.ai)).
It's MIT-licensed and free to use — a GitHub star or a follow is appreciated.
