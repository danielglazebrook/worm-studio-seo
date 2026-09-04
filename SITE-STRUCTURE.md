# Worm Studio — Site Structure & What Changed

## Site map

```
/                    Homepage — Hero, Work, Approach, Process, Pricing, Blog preview
/blog                Blog index (pulls from src/content/blog/*.md)
/blog/[slug]         Individual posts, with Article schema for GEO/AEO citation
/contact-us          Contact page
```

Pages worth adding once you have content, not built yet:
- `/about` — bio/credibility page (Shopify Partner status, your background)
- Individual case study pages once you have 2–3 real ones (`/work/[slug]`, same pattern as blog)

## What happened to each original template file

Your uploaded template was a personal portfolio (Speaking, Education, Projects sections, EV-startup placeholder content) — repurposed into an agency site:

| Original | Now | Why |
|---|---|---|
| `Intro.astro` | `sections/Hero.astro` | Same content, added actual CTA buttons (the live site was missing a visible hero CTA) |
| `Approach.astro` | `sections/Approach.astro` | Unchanged — you'd already written this correctly |
| `Education.astro` | `sections/Process.astro` | Same row-list pattern, repurposed for "How We Work" (Audit → Strategy → Implementation → Monitor) |
| `Speaking.astro` | `sections/BlogPreview.astro` | Same pattern, now pulls real posts from a content collection instead of hardcoded talks |
| `Work.astro` | `sections/CaseStudies.astro` | Same pattern, but **shipped empty** — see note below |
| `Projects.astro` | Dropped | Exact duplicate of Work.astro's pattern, redundant |
| `Seo.astro` | Rewritten | Was hardcoded placeholder text ("Your Page Title") on every page — now takes real title/description/canonical props per page |
| `Meta.astro` | Cleaned up | Had duplicate robots/googlebot tags |
| — | `StructuredData.astro` (new) | JSON-LD Organization schema — the technical layer that helps AI models correctly parse who you are |
| — | `content/blog/` (new) | Astro content collection for real blog posts with a proper schema |

## Important: CaseStudies.astro ships empty on purpose

You don't have real case studies yet (confirmed earlier). I built the component to support them once you do, but shipped it with an honest "coming soon" state rather than fabricated results — filling it with fake numbers would be the exact "100+ projects" placeholder-stats problem you already caught and fixed on the homepage. Add real entries to the array at the top of the file once you have them.

## Known issues (already fixed in this package)

**`@astrojs/sitemap` crashes on build** — versions 3.7.1+ have a confirmed bug (`Cannot read properties of undefined (reading 'reduce')`) on Astro 4.16+. `package.json` pins it to `3.6.0`, the last known-good version. Don't let `npm update` bump this past 3.6.0 until upstream ships a fix.

**"The collection 'blog' does not exist or is empty" warning** — Astro silently excludes any file or folder starting with `_` from content collections. The template post is named `template-delete-me.md` (not `_template.md`) specifically so it counts as a real entry — it's still excluded from actual output via `draft: true`, not the filename. If you see this warning again, check for stray underscore-prefixed files in `src/content/blog/`.

## Pre-launch checklist

1. **Run `npm install`, then `npm run dev`** — package.json, tsconfig.json (for the `@/` import alias), and tailwind.config.mjs are all included now
2. **The `base-*`/`accent-*` color scale is a placeholder** in `tailwind.config.mjs` — a warm-neutral gray plus a muted gold accent, matching the near-black look already live. Swap in your real brand colors if you have them
3. **Fill in real contact details** in `StructuredData.astro` (phone, email, social `sameAs` links) — currently commented out
4. **Add a real `og-default.jpg`** (1200×630) to `/public` — referenced by `Seo.astro` as the fallback social share image
5. **Write your first real blog post** in `src/content/blog/`, matching `template-delete-me.md`'s frontmatter shape, then delete that file
6. **Confirm `site:` in `astro.config.mjs`** matches your actual domain before deploying — this is what makes the sitemap generate correctly at all
7. **Double-check the Pricing figures** — they're starting suggestions based on market research, not numbers you've committed to
