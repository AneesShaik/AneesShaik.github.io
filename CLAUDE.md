# AneesShaik.github.io — Portfolio Site

Personal developer portfolio hosted on GitHub Pages at https://AneesShaik.github.io.

## Owner
- **Name:** Anees Shaik
- **GitHub:** AneesShaik
- **Email:** anees.shaik9@gmail.com

## Stack
Plain HTML / CSS / JS — no build step, no framework. Push to `main` and GitHub Pages deploys automatically.

## Narrative thread
"I make the secure way the easy way." Every section exists to serve this idea — the site reads as a story (four chronological chapters), not a restated resume. New content should reinforce this thread rather than reverting to resume-shaped bullet lists.

## File Structure
```
index.html   — full single-page layout (all sections)
style.css    — all styles (CSS custom properties, responsive grid)
script.js    — scroll effects, mobile burger menu, intersection observers
resume.pdf   — full résumé, linked from nav + Experience section
profile.jpg  — About section photo (700x700, compressed)
badges/      — AWS certification badge PNGs, used in Certifications section
```

## Design System
Apple-inspired: light neutrals, one restrained accent blue, system font (renders as San Francisco on Apple devices), pill buttons, no monospace or numbered-nav convention. Adopted 2026-10-05, replacing the original dark-navy/mint "dev portfolio" look.

| Token             | Value                          | Usage                                   |
|-------------------|---------------------------------|------------------------------------------|
| `--bg`            | `#ffffff`                      | page background                         |
| `--bg-light`      | `#f5f5f7`                      | card fill on white sections, mobile menu|
| `--accent`        | `#0071e3`                      | CTA buttons, links — used sparingly     |
| `--accent-strong` | `#0058a6`                      | accent hover state                      |
| `--text`          | `#1d1d1f`                      | headings / ink                          |
| `--text-muted`    | `#6e6e73`                      | body copy                               |
| `--font-sans`      | `-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif` | all text — no webfont loaded, renders as native SF Pro on Mac/iOS |

No Google Fonts are loaded anymore — removed the Inter/Fira Code `<link>` tags from `index.html` `<head>` in favor of the system stack.

**Alternating section bands:** `#skills`, `#certifications`, and `#contact` carry a `section-alt` class (full-bleed `--bg-light` grey, via the `width:100vw` negative-margin trick) with their content wrapped in a `.section-inner` div to restore the centered `max-width`. `#about`, `#experience`, and `#leadership` sit on plain white. Cards use `background: var(--card-bg, var(--bg-light))` — `.section-alt` sets `--card-bg: #ffffff` so tiles always contrast against their section (white tiles on grey bands, grey tiles on white sections).

**No numbering:** section titles are plain text (no `<span class="num">`), nav links have no `01./02.` counters — dropped as part of the Apple-inspired direction. Buttons are pill-shaped (`border-radius: 980px`).

## Sections (in order)
1. **Nav** — sticky, blurs on scroll (light translucent + blur), hamburger on mobile, plain text links (no numbering). Links: Story / Certifications / Contact.
2. **Hero** (`#hero`) — headline "I make the secure way the easy way." + one-sentence subline + CTA buttons ("See the story" → `#story`, "Let's talk" → `#contact`) + a 4-stat proof strip (servers migrated, cost reduction, patch cycle, vuln reduction)
3. **Story** (`#story`, white) — replaces the old About/Skills/Experience/Leadership split. Small intro (photo + one line), then four chronological `.chapter` cards (Ch.1 Gannett 2017–2020 → Ch.4 Principal DevSecOps Architect 2024–present), each with a role/dates line, a one-line headline, and a Challenge → What I did → What changed paragraph (~60 words, one hero number). Chapter 2 includes an animated 48h→6h patch-cycle bar (`.patch-bar`, respects `prefers-reduced-motion`); Chapter 4 includes a labeled illustrative policy-as-code snippet (`.policy-snippet`). Below the chapters: a short "How I Lead" paragraph, a one-line "Earlier" mention (IFPRI, REAN Cloud), and a link to `resume.pdf`.
4. **Decisions I'd Defend** (`#decisions`, white) — hidden via the `hidden` attribute until real content exists. Skeleton only: `.decisions-grid` with three empty `.decision-card` divs (tradeoff / mistake-and-lesson / principle). To publish: write the three cards and remove `hidden`.
5. **Certifications** (`#certifications`, grey band) — 3 featured badges (AWS Solutions Architect Pro, Microsoft AZ-400, AWS Developer Associate) in `.certs-grid`, each linking out to its Credly verification page. Everything else (Cloud/AI Practitioner, 5 Coursera courses) collapses into one quiet `.certs-also` line with inline links.
6. **Contact** (`#contact`, grey band) — specific hiring ask + email CTA + social row
7. **Side bars** — floating GitHub / LinkedIn / email (hidden < 1100px)

No separate Skills, Experience, or Leadership sections, and no tech-chip lists anywhere — that content now lives inside the Story chapters' prose, or in `resume.pdf` for numbers that didn't fit the word budget (see `TODO.md`).

## What Still Needs Real Content
- [x] Replace placeholder content with real experience (from resume, added 2026-09-29)
- [x] Add a real photo — `profile.jpg` added (2026-09-29)
- [x] Update About bio and tech list to match actual background
- [x] Add `resume.pdf` to repo root
- [x] Verify LinkedIn slug — confirmed as `/in/aneesshaik` (updated 2026-09-29)
- [x] Sync site content to `Anees_Shaik_Resume_2Page_v24.pdf` — Experience, Skills, About, Certifications (added Microsoft AZ-400) (updated 2026-10-05)
- [x] Replaced Education section with a Leadership section (4 cards, modeled after gsypolt.github.io/leadership) (updated 2026-10-05)
- [ ] Earlier Experience entries (Data Migration Engineer @ IFPRI, DevOps Engineer @ REAN Cloud) currently show title/company/dates only in `#experience` — user to provide real bullet descriptions
- [x] Microsoft AZ-400 cert card now uses a real badge image (`badges/microsoft-certified-devops-engineer-expert.png`), still links out to Credly (updated 2026-10-05)
- [x] All 4 AWS cert cards now link out to their Credly verification pages, matching the AZ-400/Coursera cards (updated 2026-10-05)
- [x] Full visual redesign to an Apple-inspired light theme — new palette, system font, pill buttons, alternating section bands, numbering removed (updated 2026-10-05)
- [x] Content/storytelling overhaul around "I make the secure way the easy way" — Hero/About/Skills/Experience/Leadership replaced with a 4-chapter Story section, Certifications simplified to 3 featured badges + an Also: line, SEO meta/OG/JSON-LD added (updated 2026-10-05, see `TODO.md` for open items: FAA proposal wording, a compliance-reporting-time figure to confirm, numbers now resume-only, and the hidden "Decisions I'd Defend" section awaiting real content)

## Common Tasks
- **Add a chapter to the Story:** duplicate an `<article class="chapter">` block in `index.html` inside `#story .chapters`; keep the Challenge → What I did → What changed structure and one hero number per chapter
- **Add a featured certification:** drop the badge PNG in `badges/`, duplicate an `<a class="cert-card cert-card-link">` block (pointing `href` at the Credly verification URL) in `#certifications .certs-grid`
- **Add a minor certification:** append it to the `.certs-also` line in `#certifications`, as a plain inline link
- **Publish "Decisions I'd Defend":** write the three `.decision-card` divs inside `#decisions` in `index.html`, then remove the `hidden` attribute on the `<section id="decisions">` tag
- **Change accent color:** update `--accent` (and `--accent-strong` for its hover/contrast-safe shade) in `:root` inside `style.css`
- **Add a new section:** add a `<section id="x" class="section">` in `index.html` (append `section-alt` + wrap contents in `.section-inner` for a grey band, alternating with neighboring sections), add nav link, update the `sectionObserver`/`activeLinkObserver` selectors in `script.js`
- **Deploy:** `git add . && git commit -m "..." && git push` — live in ~60 seconds
