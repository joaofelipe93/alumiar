# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Alumiar Agência** — institutional / lead-gen site for a digital marketing agency. Visual reference: https://www.pedepromarketing.com/. Brand voice/identity centers on the verb *alumiar* ("to illuminate") — copy and visuals lean into light/illumination metaphors.

Content language is **Portuguese (pt-BR)**.

## Stack

- **Vite 8** + **React 19** + **TypeScript 6** (scaffolded from `create-vite` `react-ts` template)
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — config lives in CSS)
- **React Router v7** (`react-router-dom`) for client-side routing
- **@fontsource/poppins** for the Poppins font (self-hosted, weights 300–800)

## Commands

```bash
npm run dev       # Vite dev server (default http://localhost:5173)
npm run build     # tsc -b && vite build → outputs to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint .
```

There is currently **no test runner configured**.

## Architecture

### Entry & routing
- [src/main.tsx](src/main.tsx) mounts `<App />` inside `<BrowserRouter>` and imports `index.css`.
- [src/App.tsx](src/App.tsx) is the layout shell: `<Header />` + `<Routes>` + `<Footer />`. All page routes live here.
- Routes use Portuguese paths: `/`, `/servicos`, `/sobre`, `/contato`. Keep new routes consistent (pt-BR slugs).

### Folder layout
```
src/
  components/   reusable layout pieces (Header, Footer)
  sections/     homepage sections — also re-used inside dedicated pages
                (Hero, Mandate, Services, GrowthAlgorithm, Impact, Contact, CtaBanner)
  pages/        route components (Home, Services, About, Contact)
```

The **same section components are reused on the homepage and on their dedicated pages** (e.g. `sections/Services.tsx` is rendered both inside `pages/Home.tsx` and `pages/Services.tsx`). Edit the section once; both surfaces update. Pages typically add a small heading banner card above the shared section, and most pages end with `<CtaBanner />` before the footer.

### Styling

Tailwind v4 is configured **entirely in CSS** at [src/index.css](src/index.css) using the `@theme` directive — there is no JS config file. Custom design tokens defined there:

- `--font-sans: "Poppins", …` — Poppins is the default sans (applied via `body { font-family: var(--font-sans) }`).
- Brand color scale: `--color-brand-50` … `--color-brand-900` (vivid orange — `brand-500` is the primary accent).
- Background tones: `--color-cream` (the page-level peach background, set on `body`), `--color-cream-soft` (used inside white cards as a subtle inner panel).
- Neutrals: `--color-ink` (near-black, used for primary buttons and headings), `--color-ink-soft`, `--color-muted`, `--color-line` (border-only).

**Visual system / "card on cream" pattern:** the body background is `bg-cream` (peach). Each section is wrapped in a white card (`bg-white p-8 md:p-12` inside `mx-auto max-w-6xl px-6` with `py-12`). Headings use `font-extrabold uppercase tracking-tight` with one or two words highlighted in `text-brand-500`. Buttons are sharp-cornered (no rounding) — black (`bg-ink`) for primary, `bg-brand-500` for accent CTAs. Reference design Claude is matching: Leisoly-style agency site (provided by user as image reference).

When adding new design tokens, add them inside the existing `@theme { … }` block in `src/index.css` so Tailwind picks them up as utilities.

Poppins is loaded via `@fontsource/poppins/{300,400,500,600,700,800}.css` imports at the top of `src/index.css` — adding a new weight requires a new `@import` line there.

### Conventions
- Components use **named exports** (`export function Header()` …); the only default export is `App`.
- Page components are suffixed `Page` (e.g. `ServicesPage`) to avoid collision with the same-named section component when both are imported together.
- Tailwind is used for all styling — no CSS Modules, no styled-components, no `App.css`.
