# Project Documentation — Herbal Power

This file documents the project purpose, structure, local preview steps, and deployment instructions. It complements the `README.md` and is intended as an operational runbook for the site.

## Project Overview

- Title: Herbal Power
- Purpose: A blog about the true power of herbal medicines — bridging traditional knowledge with modern research and safe, practical guidance for everyday use.
- Hosting: Deployed on Vercel (user-provided).
- Tech stack: Static HTML, CSS, and vanilla JavaScript. No build tools required for the current codebase.

## Project structure

Root files and folders (important ones):

- `index.html` — Home / hero / featured posts
- `about.html` — About and target audience
- `blog.html` — Blog listing
- `posts/` — Individual blog posts (`herbal-allies.html`, `adaptogens.html`)
- `contact.html` — Contact form (demo validation client-side)
- `css/style.css` — Main stylesheet
- `js/main.js` — Small interactive behaviors (menu toggle, form validation)
- `images/` — SVG icons and assets
- `PROJECT_DOCUMENTATION.md` — This file

## Local preview (PowerShell)

Two lightweight options are provided below. Run the commands from the project root (where `index.html` is).

1) Using Python (built-in on many systems):

```powershell
# Start a simple static server on port 8000
python -m http.server 8000

# Open in your browser: http://localhost:8000
```

2) Using Node (if you have Node.js installed):

```powershell
# Serve the folder with http-server (install once)
npx http-server -p 8000

# Or use Vercel CLI to preview (see below)
```

Note: If you use VS Code, the Live Server extension is an easy alternative for local previews.

## Deployment — Vercel (recommended for this project)

You mentioned the site is hosted on Vercel. The project is a static site so deployment is straightforward.

Two common ways to deploy on Vercel:

1) Deploy via Git integration (recommended)

- Push your repository to GitHub, GitLab, or Bitbucket.
- In the Vercel dashboard, click **Import Project** → select the repository.
- Set the project root to `/` and the framework preset to **Other / Static** (no build step).
- Leave build & output settings empty; Vercel will serve static files from the repository root.
- Complete the import and Vercel will create a preview deployment on each push and a production deployment when you promote or push to your production branch.

2) Deploy using the Vercel CLI

```powershell
# Install (optional global install)
npm i -g vercel

# Or run via npx for a one-time deploy
npx vercel

# For a production deploy after preview
npx vercel --prod
```

The `vercel` command will guide you through linking or creating a project the first time you run it.

### Notes about contact form

The current contact form uses client-side validation only and displays a demo success message. If you want live submissions use one of:

- Vercel Serverless Functions to accept POSTs and forward to email or a service
- Form providers like Formspree, Getform, or Netlify Forms (requires small configuration)

## Content & contribution guidelines

- Keep article content evidence-informed. Add references at the end of posts where appropriate.
- Use semantic HTML: `article`, `header`, `main`, `nav`, `footer`.
- Image assets: place under `images/` and reference via relative paths.
- File naming: use lowercase and dashes, e.g., `posts/herbal-allies.html`.

## Accessibility & SEO (suggested)

- Add `alt` attributes to all images (already present for SVGs added).
- Add page `meta` tags (`description`, `viewport`, `og:` tags) to key pages.
- Consider adding JSON-LD for blog posts for richer search results.

## Next steps (optional)

- Add frontmatter + static generator if you want many posts (e.g., Eleventy, Hugo).
- Add automated previews via GitHub Actions to run HTML/CSS linters on PRs.
- Add unit of work: implement server-side contact handling or integrate a third-party form service.

## Who to contact

If you want me to continue, I can:

- Add Vercel deployment from this machine using the CLI (I will need access to your Vercel account or to run `npx vercel` locally).
- Add SEO metadata and JSON-LD for the sample posts.
- Implement serverless form submission with Vercel functions.

Tell me which of these you'd like next and I will proceed.
