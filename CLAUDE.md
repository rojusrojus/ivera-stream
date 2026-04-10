# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

From the project root:

```bash
npm start        # Dev server at http://localhost:4200
npm run build    # Production build (output: dist/ivera-stream/)
npm test         # Unit tests via Karma + Jasmine
npm run watch    # Build in watch mode (development config)

# Generate a new component
ng generate component components/component-name
```

## Architecture

**Single-page marketing website** for Ivera Stream (wedding/funeral videography). No routing — `AppComponent` composes all sections in order as a single scrollable page.

**Stack:** Angular 17, standalone components, SCSS, `@emailjs/browser` and `@supabase/supabase-js` are installed but not yet integrated (booking form currently uses a stub timeout).

**Component sections** (rendered top-to-bottom in `app.component.ts`):
- `navbar` — fixed top navigation
- `hero` — crossfading video background (5 videos, 7s interval, mixkit CDN)
- `services` — service offerings
- `how-it-works` — step-by-step process
- `tech-setup` — equipment/tech showcase (MEVO/Rode gear)
- `packages` — wedding vs. funeral pricing tiers (Essential/Premium/Elite)
- `why-us` — differentiators
- `testimonials` — client reviews
- `booking` — contact/enquiry form (event type toggle switches package pricing)
- `footer`

**Styling conventions** defined in `src/styles.scss`:
- CSS custom properties for all design tokens: colors (`--color-dark`, `--color-gold`, `--color-cream`), fonts (`--font-heading: Playfair Display`, `--font-body: Inter`), spacing (`--section-padding`, `--max-width: 1200px`)
- Component styles use `.scss` files scoped per component
- Video backgrounds use crossfade via `activeIndex` binding and CSS opacity transitions

**Smooth scrolling** is implemented manually via `scrollTo(id)` in `HeroComponent` (no Angular Router scroll behavior).
