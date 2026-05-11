# Karibean AI

Karibean AI is a curated AI products marketplace dashboard focused on surfacing the tools that are actually winning across key categories.

## MVP Scope

- Hero section with product positioning
- Trending section with 4 daily-highlighted AI tools
- Curated categories with a maximum of 4 products each
- Every category includes a pricing mix with at least one free product and one paid product
- Each product card includes:
  - name
  - logo
  - URL
  - tagline
  - pricing badge
  - best-for summary

## Categories in this MVP

- Trending
- Presentation AI
- AI IDEs
- Image Generators
- Video Generators
- Marketing AI
- Automation & Agents

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Future roadmap

- Search products
- Search categories
- Save favorites
- Product detail modal
- Submit a tool flow
- Automated daily trending refresh at 6:00 AM America/Santo_Domingo

## Suggested Git workflow

- `main` protected
- all changes via pull request
- no direct pushes to main
- one PR for docs/data
- one PR for feature/UI

## Notes

This MVP uses static curated data in `src/data/marketplace.ts` so the repo is easy to clone, inspect, and iterate on.
