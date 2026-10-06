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
profile.jpg  — About section photo (700x700, compressed)
badges/      — AWS certification badge PNGs, used in Certifications section
```

No `resume.pdf` in the repo — removed 2026-10-06 at the owner's request. Contact paths are
LinkedIn, GitHub, and email only (see `#contact`). It still exists in git history (pre-removal
commits) but is no longer served at its old URL.

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

**Alternating section bands:** `#skills`, `#certifications`, and `#contact` carry a `section-alt` class (full-bleed `--bg-light` grey, via the `width:100vw` negative-margin trick) with their content wrapped in a `.section-inner` div to restore the centered `max-width`. `#about` and `#competencies` sit on plain white. Cards use `background: var(--card-bg, var(--bg-light))` — `.section-alt` sets `--card-bg: #ffffff` so tiles always contrast against their section (white tiles on grey bands, grey tiles on white sections).

**No numbering:** section titles are plain text (no `<span class="num">`), nav links have no `01./02.` counters — dropped as part of the Apple-inspired direction. Buttons are pill-shaped (`border-radius: 980px`).

## Sections (in order)
1. **Nav** — sticky, blurs on scroll (light translucent + blur), hamburger on mobile, plain text links (no numbering). Links: About / Skills / Certifications / Contact. Logo reads "Anees Shaik" (plain text, no "AS." mark). No Resume button (removed 2026-10-06, see `TODO.md`).
2. **Hero** (`#hero`) — headline "I make the secure way the easy way." + one-sentence subline + CTA buttons ("About Me" → `#about`, "Let's talk" → `#contact`) + a 4-stat proof strip (automation coverage — shown as "~99%" since 2026-10-06, was "350/412 servers migrated" — cost reduction, patch cycle, vuln reduction). The 350/412 servers-migrated figure still appears in the About chapters and meta description, just not the hero strip.
3. **About** (`#about`, white) — replaces the old Story/Skills/Experience/Leadership split (renamed from "Story" 2026-10-06). Small intro (photo + one line), then a short career-range paragraph (services firm → NGO → SaaS product co → federal consulting, mapped to REAN Cloud → IFPRI → Gannett → CSSI), then four chronological `.chapter` cards (Ch.1 Gannett 2017–2020 → Ch.4 Principal DevSecOps Architect 2024–present), each with a role/dates line, a one-line headline, and a Challenge → What I did → What changed block. Each of the three C/W/W steps is its own labeled `.chapter-step` (uppercase `.step-label` + `.step-text`, accent left border) rather than one inline-bold paragraph — ~60 words total, one hero visual per chapter. Chapter 1 has a static `.pipeline-compare` illustration (replaced the animated shift-left diagram 2026-10-06) — two rows (Traditional vs. Shift left) of pipeline-stage pills showing testing moving from last to first, plus three benefit badges (Bugs caught earlier / Lower cost to fix / Faster, safer releases); no animation, no scroll trigger. Chapter 2 has an animated 48h→6h patch-cycle bar (`.patch-bar`); Chapter 3 has an animated on-prem-footprint bar (also `.patch-bar` — replaced the server dot grid 2026-10-06) showing 100%→~15% (i.e. ~85% smaller), confirmed against the 350-of-412 figure; Chapter 4 has an animated $570K→$463K AWS-spend bar (`.patch-bar`) — its illustrative policy-as-code snippet was removed 2026-10-06. The `.patch-bar` animations share one `IntersectionObserver` (`inViewObserver` in `script.js`, threshold 0.4, adds `.in-view`) and respect `prefers-reduced-motion` (CSS `transition: none`, final state shown immediately). Below the chapters: a short "How I Lead" paragraph and a one-line "Earlier" mention (IFPRI, REAN Cloud) — no resume link.
4. **Technical Skills** (`#skills`, grey band) — `.skills-grid` of `.skill-category` cards (Cloud & Infrastructure / CI/CD & Automation / Security & Compliance / Platform & Observability / QA & Test Automation), each a pill-tag list (`.skill-tags`). Originally sourced from résumé content (résumé since removed from the repo, see `TODO.md`) — this is the only place tool/tech-chip lists live on the site.
5. **Core Competencies** (`#competencies`, white) — `.competencies-grid` of `.competency-card` cards (Engineering Leadership / Compliance as Code / Migration Strategy / Stakeholder Alignment / AI Governance), each a short bullet list (`.competency-list`) summarizing leadership/strategy strengths already stated elsewhere on the site.
6. **Certifications** (`#certifications`, grey band) — 3 featured badges (AWS Solutions Architect Pro, Microsoft AZ-400, AWS Developer Associate) in `.certs-grid`, each linking out to its Credly verification page. Everything else (Cloud/AI Practitioner, 5 Coursera courses) collapses into one quiet `.certs-also` line with inline links.
7. **Contact** (`#contact`, grey band) — specific hiring ask + email CTA + social row. LinkedIn, GitHub, and email are the only contact paths (no resume download).
8. **Side bars** — floating GitHub / LinkedIn / email (hidden < 1100px)

No "Decisions I'd Defend" section — the hidden skeleton was removed entirely 2026-10-06 (owner's call) rather than left pending.

No separate Experience or Leadership sections, no tech-chip lists outside `#skills`, and no résumé anywhere on the site — that content lives inside the About chapters' prose or the dedicated Technical Skills/Core Competencies sections (see `TODO.md` for stats that were only ever on the now-removed résumé).

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
- [x] Replaced the Ch.1 nightly-tests counter with a "shift-left" pipeline diagram (testing moving from release-time to build-time), adapted from a reference screenshot; benefit badges (Lower costs / Faster delivery / Greater coverage) owner-confirmed as accurate (updated 2026-10-06)
- [x] Confirmed 412 was the on-prem estate total and 350 were migrated; replaced the Ch.3 counter with a `.dot-grid` animation (350 of 412 dots shifting to "AWS") and propagated "350 of 412" to the hero proof strip, meta description, chapter copy, and the Migration Strategy competency card for consistency (updated 2026-10-06)
- [x] Removed the résumé entirely — nav button (desktop + mobile), "View Full Resume" link, and `resume.pdf` itself deleted from the repo (still recoverable from git history). Contact paths are now LinkedIn, GitHub, and email only (updated 2026-10-06)
- [x] Replaced the Ch.1 shift-left animation with a static `.pipeline-compare` illustration (owner reviewed 3 mockups, picked the two-row Traditional-vs-Shift-Left timeline); replaced the Ch.3 dot grid with a `.patch-bar` footprint animation (owner reviewed 3 mockups, picked the shrinking-bar option reusing the existing component). Confirmed the ~85% figure (350/412, not ~84%) and that 412 is the correct on-prem total before building (updated 2026-10-06)
- [x] Removed the hidden "Decisions I'd Defend" section entirely (owner's call — not just left pending); added a **QA & Test Automation** category to Technical Skills (Selenium, Postman, NightwatchJS, Appium, Espresso, Model-Based Testing (Simulato), all owner-confirmed); added "reclaiming 500+ hours a year for QA" to Ch.1's "What changed" step (updated 2026-10-06)
- [x] Hero proof strip's first stat changed from "350/412 servers migrated to AWS" to "~99% automation coverage" (owner-confirmed: covers compliance/deployments/testing/patching collectively, approximate); hero CTA button renamed "See the story" → "About Me"; removed Ch.4's illustrative policy-as-code snippet (`.policy-snippet`) and the now-unused `--font-mono` token. The 350/412 figure is untouched everywhere else (About chapters, meta description) per instruction (updated 2026-10-06)

## Common Tasks
- **Add a chapter to About:** duplicate an `<article class="chapter">` block in `index.html` inside `#about .chapters`; keep the three labeled `.chapter-step` blocks (Challenge / What I did / What changed, via `.step-label` + `.step-text`) and one hero visual per chapter — reuse `.patch-bar` (before/after bar) if it should animate on scroll (hook it into the shared `inViewObserver` in `script.js`, which already selects `.patch-bar`), or build a static illustration like `.pipeline-compare` if animation isn't wanted
- **Add a technical skill:** append a `<li>` to the right `.skill-tags` list inside `#skills .skills-grid`, using only a tool you've actually used — there's no longer a canonical source file (résumé was removed, see `TODO.md`), so check with the owner if unsure
- **Add a core competency:** duplicate a `<div class="competency-card">` block inside `#competencies .competencies-grid`, with a `.competency-title` and 2–3 `.competency-list` bullets
- **Add a featured certification:** drop the badge PNG in `badges/`, duplicate an `<a class="cert-card cert-card-link">` block (pointing `href` at the Credly verification URL) in `#certifications .certs-grid`
- **Add a minor certification:** append it to the `.certs-also` line in `#certifications`, as a plain inline link
- **Change accent color:** update `--accent` (and `--accent-strong` for its hover/contrast-safe shade) in `:root` inside `style.css`
- **Add a new section:** add a `<section id="x" class="section">` in `index.html` (append `section-alt` + wrap contents in `.section-inner` for a grey band, alternating with neighboring sections), add nav link, update the `sectionObserver`/`activeLinkObserver` selectors in `script.js`
- **Deploy:** `git add . && git commit -m "..." && git push` — live in ~60 seconds
