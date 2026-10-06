# TODO — Portfolio redesign (updated 2026-10-06)

Status: **the full redesign is live** at https://aneesshaik.github.io/
(squash-merged to `main` as `c598ebf`, confirmed deployed). The feature
branch `portfolio-story-redesign` is kept around per your instruction.
This file now tracks only what's still open.

## Resolved this round (decisions you made)

- **Career-range paragraph mapping** — confirmed correct as-is (REAN
  Cloud = services firm, IFPRI = NGO, Gannett = SaaS/product-speed,
  CSSI = federal consulting). No change.
- **FAA proposal wording** — confirmed keep vague ("a winning
  multi-million-dollar federal modernization proposal," no "$3M," no
  "FAA"). No change.
- **Ch.1 pipeline stage labels** — confirmed keep generic (Code / Build
  / Deploy / Test), already marked illustrative. No change.
- **"Decisions I'd Defend" section** — removed entirely: the hidden
  `#decisions` section, its `.decisions-grid`/`.decision-card` CSS, and
  its `sectionObserver` wiring are all gone from `index.html`,
  `style.css`, and `script.js`. Not revisiting this as a "someday"
  section anymore.
- **QA & Test Automation category** — added to Technical Skills
  (`#skills`): Selenium, Postman, NightwatchJS, Appium, Espresso,
  Model-Based Testing (Simulato) — all tools you confirmed you've used.
- **Gannett "What changed" step** — added "reclaiming 500+ hours a
  year for QA" (your figure, not previously on the site).
- **Earlier Experience entries (IFPRI/REAN Cloud)** — confirmed keep
  minimal, single line. No change.
- **resume.pdf and git history** — you asked me to purge it from history
  entirely; I rewrote history locally with `git filter-repo`, then you
  decided to leave it in history after all. I reverted the local repo
  back to match `origin` exactly (nothing was ever pushed, so no
  cleanup was needed on GitHub's side). **Final state: `resume.pdf` is
  recoverable from git history** (commits `baca60b`, `716e98f`,
  `193e82a`, `c598ebf`), it's just not in the working tree or linked
  from the live site.

## Still open

1. **Social share image.** OG/Twitter tags reuse `profile.jpg` (a square
   700×700 headshot). You said "not now" — a proper 1200×630 landscape
   image would render more reliably when the link is shared, but this
   is low priority. Revisit whenever.

2. **Other resume-only numbers not brought back.** You picked one
   (the 500+ hours/year QA figure, added above). These are still only
   recoverable from git history, not on the live page:
   - 20K users served at peak
   - 4 AWS + 2 Azure accounts
   - 10+ on-prem applications (separate from the 412-servers figure)
   - 553 servers pre-upgrade / 75% upgraded (Windows Server 2019→2022,
     RHEL 8→9)
   - Disaster-recovery failover: 3 hours → under 15 minutes
   - Release cycle: 1 month → 2 weeks
   - Gannett: 16-person team, 8+ Jenkins pipelines, 20 min → under 8 min
     provisioning

   Say the word if any of these should go back on the page.

## Verification notes

3. **Mobile 375px / console / link checks** for this round's new
   content (QA skills category, updated Gannett step text) haven't been
   re-verified yet — these are small, low-risk text/markup additions
   (no new components), but flagging since I haven't re-run the full
   check pass after them.

4. **Lighthouse** — last run 2026-10-05, before several rounds of
   changes since. Worth a fresh run against the live URL.
