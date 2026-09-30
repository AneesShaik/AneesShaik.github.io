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
| Token            | Value       | Usage                        |
|------------------|-------------|------------------------------|
| `--bg`           | `#0a192f`   | page background              |
| `--bg-light`     | `#112240`   | cards, navbar                |
| `--accent`       | `#64ffda`   | highlights, hover, numbers   |
| `--text`         | `#ccd6f6`   | headings                     |
| `--text-muted`   | `#8892b0`   | body copy                    |
| `--font-mono`    | Fira Code   | nav, badges, code-like text  |
| `--font-sans`    | Inter       | body                         |

## Sections (in order)
1. **Nav** — sticky, blurs on scroll, hamburger on mobile
2. **Hero** — name + tagline + CTA buttons + scroll hint
3. **About** — bio + photo (`profile.jpg`) + tech list
4. **Skills** — 4 cards (DevSecOps & Security, Cloud Architecture, CI/CD & Automation, Leadership & Strategy)
5. **Experience** — 4 cards (1 featured full-width) + link to `resume.pdf`
6. **Certifications** — Cloud (AWS badge grid, `badges/*.png`) + AI & Productivity (Coursera/Google, icon cards linking to verification pages)
7. **Contact** — email CTA + social row
8. **Side bars** — floating GitHub / LinkedIn / email (hidden < 1100px)

## What Still Needs Real Content
- [x] Replace placeholder content with real experience (from resume, added 2026-09-29)
- [x] Add a real photo — `profile.jpg` added (2026-09-29)
- [x] Update About bio and tech list to match actual background
- [x] Add `resume.pdf` to repo root
- [x] Verify LinkedIn slug — confirmed as `/in/aneesshaik` (updated 2026-09-29)

## Common Tasks
- **Add a role:** duplicate an `<article class="project-card">` block in `index.html` inside `#experience`
- **Add a cloud certification:** drop the badge PNG in `badges/`, duplicate a `<div class="cert-card">` block under the "Cloud" subheading in `#certifications`
- **Add a course/specialization certification:** duplicate an `<a class="cert-card cert-card-link">` block under the "AI & Productivity" subheading, pointing `href` at the verification URL
- **Change accent color:** update `--accent` in `:root` inside `style.css`
- **Add a new section:** add a `<section id="x" class="section">` in `index.html`, add nav link, update `script.js` section list
- **Deploy:** `git add . && git commit -m "..." && git push` — live in ~60 seconds
