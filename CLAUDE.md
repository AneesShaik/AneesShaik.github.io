# AneesShaik.github.io — Portfolio Site

Personal developer portfolio hosted on GitHub Pages at https://AneesShaik.github.io.

## Owner
- **Name:** Anees Shaik
- **GitHub:** AneesShaik
- **Email:** anees.shaik9@gmail.com

## Stack
Plain HTML / CSS / JS — no build step, no framework. Push to `main` and GitHub Pages deploys automatically.

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
1. **Nav** — sticky, blurs on scroll (light translucent + blur), hamburger on mobile, plain text links (no numbering)
2. **Hero** — centered: name + tagline + CTA buttons (one solid pill, one grey pill) + scroll hint
3. **About** (white) — bio + photo (`profile.jpg`, plain rounded corners, no accent frame) + tech list
4. **Skills** (grey band) — 4 cards (DevSecOps & Security, Cloud Architecture, CI/CD & Automation, Leadership & Strategy)
5. **Experience** (white) — 4 cards (1 featured, subtle accent-tinted gradient) + link to `resume.pdf`
6. **Certifications** (grey band) — Cloud (AWS + Microsoft AZ-400 badge grid, `badges/*.png`, every card links out to its Credly verification page) + AI & Productivity (Coursera/Google, icon cards linking to verification pages)
7. **Leadership** (white) — 4 cards (Engineering Leader, Transformation Leader, Compliance & Risk Leader, Strategic Influence), styled like Skills cards but with narrative paragraphs instead of bullet lists
8. **Contact** (grey band) — email CTA + social row
9. **Side bars** — floating GitHub / LinkedIn / email (hidden < 1100px)

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

## Common Tasks
- **Add a role:** duplicate an `<article class="project-card">` block in `index.html` inside `#experience`
- **Add a cloud certification:** drop the badge PNG in `badges/`, duplicate an `<a class="cert-card cert-card-link">` block (pointing `href` at the Credly verification URL) under the "Cloud" subheading in `#certifications`
- **Add a course/specialization certification:** duplicate an `<a class="cert-card cert-card-link">` block under the "AI & Productivity" subheading, pointing `href` at the verification URL
- **Add a leadership pillar:** duplicate a `<div class="leadership-card">` block in `index.html` inside `#leadership`
- **Change accent color:** update `--accent` (and `--accent-strong` for its hover shade) in `:root` inside `style.css`
- **Add a new section:** add a `<section id="x" class="section">` in `index.html` (append `section-alt` + wrap contents in `.section-inner` for a grey band, alternating with neighboring sections), add nav link, update `script.js` section list
- **Deploy:** `git add . && git commit -m "..." && git push` — live in ~60 seconds
