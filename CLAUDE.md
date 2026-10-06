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

**Alternating section bands:** `#skills`, `#certifications`, and `#contact` carry a `section-alt` class (full-bleed `--bg-light` grey, via the `width:100vw` negative-margin trick) with their content wrapped in a `.section-inner` div to restore the centered `max-width`. `#about`, `#competencies`, and `#decisions` sit on plain white. Cards use `background: var(--card-bg, var(--bg-light))` — `.section-alt` sets `--card-bg: #ffffff` so tiles always contrast against their section (white tiles on grey bands, grey tiles on white sections).

**No numbering:** section titles are plain text (no `<span class="num">`), nav links have no `01./02.` counters — dropped as part of the Apple-inspired direction. Buttons are pill-shaped (`border-radius: 980px`).

## Sections (in order)
1. **Nav** — sticky, blurs on scroll (light translucent + blur), hamburger on mobile, plain text links (no numbering). Links: About / Skills / Certifications / Contact. Logo reads "Anees Shaik" (plain text, no "AS." mark).
2. **Hero** (`#hero`) — headline "I make the secure way the easy way." + one-sentence subline + CTA buttons ("See the story" → `#about`, "Let's talk" → `#contact`) + a 4-stat proof strip (servers migrated, cost reduction, patch cycle, vuln reduction)
3. **About** (`#about`, white) — replaces the old Story/Skills/Experience/Leadership split (renamed from "Story" 2026-10-06). Small intro (photo + one line), then a short career-range paragraph (services firm → NGO → SaaS product co → federal consulting, mapped to REAN Cloud → IFPRI → Gannett → CSSI), then four chronological `.chapter` cards (Ch.1 Gannett 2017–2020 → Ch.4 Principal DevSecOps Architect 2024–present), each with a role/dates line, a one-line headline, and a Challenge → What I did → What changed block. Each of the three C/W/W steps is its own labeled `.chapter-step` (uppercase `.step-label` + `.step-text`, accent left border) rather than one inline-bold paragraph — ~60 words total, one hero number per chapter. Chapter 1 has an animated count-up to ~1,000 nightly tests (`.stat-counter`); Chapter 2 has an animated 48h→6h patch-cycle bar (`.patch-bar`); Chapter 3 has an animated count-up to 350 servers migrated (`.stat-counter`); Chapter 4 has an animated $570K→$463K AWS-spend bar (`.patch-bar`) plus a labeled illustrative policy-as-code snippet (`.policy-snippet`). All animations respect `prefers-reduced-motion` and trigger via `IntersectionObserver`. Below the chapters: a short "How I Lead" paragraph, a one-line "Earlier" mention (IFPRI, REAN Cloud), and a link to `resume.pdf`.
4. **Technical Skills** (`#skills`, grey band) — `.skills-grid` of `.skill-category` cards (Cloud & Infrastructure / CI/CD & Automation / Security & Compliance / Platform & Observability), each a pill-tag list (`.skill-tags`) sourced from the "Key Skills" block in `resume.pdf` — this is the only place tool/tech-chip lists live on the site.
5. **Core Competencies** (`#competencies`, white) — `.competencies-grid` of `.competency-card` cards (Engineering Leadership / Compliance as Code / Migration Strategy / Stakeholder Alignment / AI Governance), each a short bullet list (`.competency-list`) summarizing leadership/strategy strengths already stated elsewhere on the site or resume.
6. **Decisions I'd Defend** (`#decisions`, white) — hidden via the `hidden` attribute until real content exists. Skeleton only: `.decisions-grid` with three empty `.decision-card` divs (tradeoff / mistake-and-lesson / principle). To publish: write the three cards and remove `hidden`.
7. **Certifications** (`#certifications`, grey band) — 3 featured badges (AWS Solutions Architect Pro, Microsoft AZ-400, AWS Developer Associate) in `.certs-grid`, each linking out to its Credly verification page. Everything else (Cloud/AI Practitioner, 5 Coursera courses) collapses into one quiet `.certs-also` line with inline links.
8. **Contact** (`#contact`, grey band) — specific hiring ask + email CTA + social row
9. **Side bars** — floating GitHub / LinkedIn / email (hidden < 1100px)

No separate Experience or Leadership sections, and no tech-chip lists outside `#skills` — that content lives inside the About chapters' prose, the dedicated Technical Skills/Core Competencies sections, or `resume.pdf` for numbers that didn't fit the word budget (see `TODO.md`).

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
- [x] Renamed "Story" → "About" everywhere (nav, heading, `#story`→`#about`, internal links); nav logo changed from "AS." to "Anees Shaik"; removed "I set myself" from the Ch.3 closing line (updated 2026-10-06)
- [x] Added a career-range paragraph to the top of `#about` (services firm → NGO → SaaS product co → federal consulting) — see `TODO.md` to confirm the per-environment lesson mapping (updated 2026-10-06)
- [x] Restyled each chapter's Challenge/What I did/What changed into labeled `.chapter-step` blocks (adapted from a reference screenshot's labeled-step card pattern) instead of one inline-bold paragraph (updated 2026-10-06)
- [x] Added scroll-triggered animations to Ch.1 (~1,000 nightly-tests count-up) and Ch.3 (350-servers count-up), plus Ch.4 ($570K→$463K AWS-spend bar reusing the `.patch-bar` component) — all `prefers-reduced-motion`-safe (updated 2026-10-06)
- [x] Added **Technical Skills** (`#skills`) and **Core Competencies** (`#competencies`) sections between About and Certifications, sourced from `resume.pdf`'s Key Skills block and existing site content; added a Skills nav link (updated 2026-10-06)

## Common Tasks
- **Add a chapter to About:** duplicate an `<article class="chapter">` block in `index.html` inside `#about .chapters`; keep the three labeled `.chapter-step` blocks (Challenge / What I did / What changed, via `.step-label` + `.step-text`) and one hero number per chapter — add a `.stat-counter` or `.patch-bar` if the hero number should animate on scroll
- **Add a technical skill:** append a `<li>` to the right `.skill-tags` list inside `#skills .skills-grid`, using the tool's exact name as it appears in `resume.pdf`'s Key Skills block — don't add tools that aren't already listed there
- **Add a core competency:** duplicate a `<div class="competency-card">` block inside `#competencies .competencies-grid`, with a `.competency-title` and 2–3 `.competency-list` bullets
- **Add a featured certification:** drop the badge PNG in `badges/`, duplicate an `<a class="cert-card cert-card-link">` block (pointing `href` at the Credly verification URL) in `#certifications .certs-grid`
- **Add a minor certification:** append it to the `.certs-also` line in `#certifications`, as a plain inline link
- **Publish "Decisions I'd Defend":** write the three `.decision-card` divs inside `#decisions` in `index.html`, then remove the `hidden` attribute on the `<section id="decisions">` tag
- **Change accent color:** update `--accent` (and `--accent-strong` for its hover/contrast-safe shade) in `:root` inside `style.css`
- **Add a new section:** add a `<section id="x" class="section">` in `index.html` (append `section-alt` + wrap contents in `.section-inner` for a grey band, alternating with neighboring sections), add nav link, update the `sectionObserver`/`activeLinkObserver` selectors in `script.js`
- **Deploy:** `git add . && git commit -m "..." && git push` — live in ~60 seconds
