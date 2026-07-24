<div align="center">

# Next.js Portfolio Starter

**A portfolio you set up by editing one config file. Write posts in markdown, then deploy.**

[![Stars](https://img.shields.io/github/stars/onlyoneaman/nextjs-portfolio-starter?style=social)](https://github.com/onlyoneaman/nextjs-portfolio-starter/stargazers)
[![Follow @onlyoneaman](https://img.shields.io/badge/Follow-%40onlyoneaman-000?logo=x&logoColor=white)](https://x.com/onlyoneaman)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

[**Use this template**](https://github.com/onlyoneaman/nextjs-portfolio-starter/generate) · [Live demo](https://template.amankumar.ai) · [Report a bug](https://github.com/onlyoneaman/nextjs-portfolio-starter/issues)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/onlyoneaman/nextjs-portfolio-starter)

![Screenshot of the portfolio template homepage](./.github/assets/screenshot.png)

If this saves you some time, a star or a [follow on X](https://x.com/onlyoneaman) means a lot.

</div>

Built with Next.js 14, Tailwind CSS, and shadcn/ui. Your blog and projects are plain markdown files. Your name, links, SEO, and navigation all live in one `site.config.ts`. Adapted from [amankumar.ai](https://amankumar.ai).

## What you get

- One config file for everything personal (`src/config/site.config.ts`)
- Blog and projects written as markdown (frontmatter via gray-matter)
- SEO tags, JSON-LD, sitemap, and RSS generated for you
- Dark mode, responsive layout, shadcn/ui components
- Optional Google Analytics and PostHog, plus Cal.com booking on the contact page
- An `AGENTS.md` so an AI assistant can set the whole thing up for you

## Quick start

Click the green **Use this template** button at the top of the repo. That gives you your own copy with a clean history. Then:

```bash
git clone https://github.com/<you>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

1. **Your details.** Edit every field in `src/config/site.config.ts` (name, role, bio, email, socials, SEO, nav, `calLink`, `githubUsername`). Leave a field as `""` to hide the thing it controls.
2. **Assets.** Swap `public/images/avatar.png` and `public/resume.pdf`, then update `public/site.webmanifest` and the favicons in `public/`.
3. **Experience.** Edit `src/data/experiencesData.ts` (it shows on the About page) and drop your company logos in `public/images/companies/`.
4. **Content.** Delete the sample files in `content/blogs/` and `content/projects/` and add your own. The filename becomes the URL slug. Put post images under `public/content/...`.
5. **llms.txt.** Update `public/llms.txt` with your name and pages.

Rather have an AI do it? Open the repo in any assistant that reads `AGENTS.md` (Claude Code, Codex, Cursor, Copilot, Gemini CLI) and ask it to set the site up for you. The playbook in `AGENTS.md` walks it through each step.

## Environment variables

All optional. See `.env.example`, then copy it to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Base URL for sitemap and RSS |
| `NEXT_PUBLIC_MEASUREMENT_ID` | Google Analytics (blank turns it off) |
| `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` | PostHog (blank turns it off) |

## Deploy

`npm run build` also builds the sitemap and RSS feed in the `postbuild` step.

### Cloudflare Pages (Git integration)

The whole site is prerendered to static files (`output: "export"` in `next.config.mjs`), so it deploys as a plain static export. No adapter, no worker, no compatibility flags.

1. Push your repo to GitHub (the Use this template button does this).
2. In the Cloudflare dashboard go to **Workers & Pages**, then **Create**, then **Pages**, then **Connect to Git**, and pick your repo.
3. Build settings:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
   - **Root directory:** leave blank
4. Under **Settings → Environment variables**, add `SITE_URL` (your deployed URL) and any analytics keys from the table above.
5. Hit **Save and Deploy**. After that, every push to your default branch redeploys.

The included `.npmrc` (`legacy-peer-deps=true`) is what lets the install go through on Cloudflare's build image, so keep it. Node version comes from `.nvmrc`. If the build picks the wrong one, set a `NODE_VERSION` environment variable to match. The `/feed` redirect is handled by `public/_redirects`.

### Vercel

One click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/onlyoneaman/nextjs-portfolio-starter)

Or import the repo at [vercel.com/new](https://vercel.com/new), then set `SITE_URL` in the project's environment variables.

## Feedback

Have an idea or found something broken? [Open an issue or a PR](https://github.com/onlyoneaman/nextjs-portfolio-starter/issues). I read them.

## License

MIT, see [LICENSE](./LICENSE). The code is free to use. Please put your own content and branding in before you ship it, and don't pass off someone else's writing as yours.

Built by [Aman](https://amankumar.ai) · [@onlyoneaman](https://x.com/onlyoneaman)
