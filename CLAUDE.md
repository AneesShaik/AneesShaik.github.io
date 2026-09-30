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
resume.pdf   — (not yet added — drop in repo root when ready)
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
3. **About** — bio + photo placeholder + tech list
4. **Skills** — 4 cards (DevSecOps & Security, Cloud Architecture, CI/CD & Automation, Leadership & Strategy)
5. **Experience** — 4 cards (1 featured full-width) + link to `resume.pdf`
6. **Contact** — email CTA + social row
7. **Side bars** — floating GitHub / LinkedIn / email (hidden < 1100px)

## What Still Needs Real Content
- [x] Replace placeholder content with real experience (from resume, added 2026-09-29)
- [ ] Add a real photo (swap out `.photo-placeholder` div in `index.html`)
- [x] Update About bio and tech list to match actual background
- [x] Add `resume.pdf` to repo root
- [x] Verify LinkedIn slug — confirmed as `/in/aneesshaik` (updated 2026-09-29)

## Common Tasks
- **Add a role:** duplicate an `<article class="project-card">` block in `index.html` inside `#experience`
- **Change accent color:** update `--accent` in `:root` inside `style.css`
- **Add a new section:** add a `<section id="x" class="section">` in `index.html`, add nav link, update `script.js` section list
- **Deploy:** `git add . && git commit -m "..." && git push` — live in ~60 seconds
