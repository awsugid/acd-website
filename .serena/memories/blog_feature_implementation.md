# Blog Feature Implementation (2025-11-20)

## Overview
Implemented a blog feature using Astro's Content Collections and MDX.

## Changes
1. **Configuration**:
   - Installed `@astrojs/mdx` and `@tailwindcss/typography`.
   - Configured `astro.config.mjs` with `mdx()` integration.
   - Configured `tailwind.config.mjs` with `typography` plugin.

2. **Content**:
   - Defined `blog` collection schema in `src/content/config.ts`.
   - Added sample post: `src/content/blog/welcome-to-aws-community.mdx`.

3. **Pages**:
   - `src/pages/blog/index.astro`: Blog listing page.
   - `src/pages/blog/[...slug].astro`: Dynamic blog post page.

4. **Navigation**:
   - Added "Blog" link to `PortalLayout.astro`.

## Usage
Add new MDX files to `src/content/blog/` with required frontmatter (title, pubDate, description, author, tags).

## Example Content
- **Guide**: `src/content/blog/how-to-contribute.mdx` explains how to write posts.
- **Interactive Component**: `src/components/blog/DemoCounter.tsx` demonstrates React in MDX.