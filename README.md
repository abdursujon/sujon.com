# Sujon.com (My Personal Portfolio)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Functions-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![oxlint](https://img.shields.io/badge/oxlint-1.81-CC9900?logo=eslint&logoColor=white)](https://oxc.rs/docs/guide/usage/linter.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

A personal portfolio site showcasing my projects, skills, experience, and artwork, built from scratch with React, TypeScript, and Tailwind CSS.

**Live site → [sujons.com](https://sujons.com)**

## Features

- 🧩 **Data-driven sections:** Every section reads from a typed file in [`src/data`](./src/data) — add a project or a job by editing one array, not the
markup.
- 📊 **Live GitHub contributions:** A [Netlify Function](./netlify/functions/fetch-github-contributions.mts) queries the GitHub GraphQL API and renders a
two-year contribution calendar.
- 🌗 **Light & dark mode:** Theme resolved from `localStorage` with a system-preference fallback via the [`useTheme`](./src/hooks/useTheme.ts) hook.
- 🎨 **Art galleries:** Separate drawing and digital-art sections with a reusable gallery and card components.
- 📄 **Legal dialogs:** Terms and privacy content served from dlog component.
- 📱 **Responsive design:** Mobile-first layout that scales cleanly to desktop.
- ♻️ **Reusable UI kit:** Shared `Card`, `Button`, `ProjectCard`, `ExperienceRow`, and `SectionLabel` components in [`src/components/ui`](./src/components/ui).

**Built with:**

- ⚡ **Vite 8** for fast dev server and optimised production builds
- 🔥 **TypeScript** in strict mode with per-section type definitypes)
- 💎 **Tailwind CSS 4** via the official Vite plugin, with scoped CSS for bespoke pieces
- ⚛️ **React 19** function components and hooks
- 🎯 **Phosphor Icons** for consistent iconography
- 📏 **oxlint** for fast Rust-based linting
- 🚀 **Netlify** for hosting, serverless functions, and continuous deployment

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/abdursujon/sujon.com.git
cd sujon.com
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```bash
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-github-personal-access-token
```

The token needs the `read:user` scope so the contributions funcphQL API.

### 3. Run the dev server

```bash
npm run dev            # Vite only, at http://localhost:5173
netlify dev            # Vite plus Netlify Functions, for the GitHub section
```

Use `netlify dev` when working on the contribution graph; the serverless function is not available under plain `npm run dev`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check with `tsc -b` and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the codebase with oxlint |

## Project Structure

```
src/
├── assets/        Images and static media
├── components/
│   ├── layout/    Navbar and Footer
│   └── ui/        Reusable presentational components
├── data/          Typed content for every section
├── hooks/         Custom hooks (theme handling)
├── sections/      One component per page section
├── style/         Scoped CSS for nav, hero, and cards
└── types/         Shared TypeScript definitions
netlify/
└── functions/     Serverless GitHub contributions endpoint
```

## Customising the Content

All page content lives in [`src/data`](./src/data), typed again:

- `projectData.ts` — portfolio projects
- `experience.ts` / `education.ts` — work and study history
- `skills.ts` / `interests.ts` / `values.ts` — about-me section
- `drawings.ts` / `digitalArt.ts` / `artwork.ts` — art galleries
- `socialLinks.ts` / `footerLinks.ts` / `sectionLinks.ts` — navigation and social links
- `legalDocuments.ts` — terms and privacy content

## Deployment

The site deploys to Netlify from `netlify.toml`: `npm run buildtions in `netlify/functions` deploy alongside it. Set`GITHUB_USERNAME` and `GITHUB_TOKEN` in the Netlify site environment variables.

## License

Released under the [MIT License](./LICENSE).