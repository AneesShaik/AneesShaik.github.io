# TODO — Portfolio redesign (updated 2026-10-06)

Open items from the content/story overhaul (2026-10-05), the About/
Skills/Competencies round (2026-10-06 AM), and this round (2026-10-06 PM:
Ch.1 shift-left animation, Ch.3 on-prem dot-grid animation, resume
removal). Nothing below has been pushed to GitHub Pages yet — all work
is on the `portfolio-story-redesign` branch pending your review.

## Needs your input

1. **Career-range paragraph (`#about`).** Mapped the four "worlds" to
   REAN Cloud (services firm), IFPRI (NGO), Gannett (SaaS/product-speed),
   and CSSI (federal consulting). Confirm that mapping and the specific
   lesson attached to each one is accurate to how you'd describe each job.

2. **"Decisions I'd Defend" section is built but hidden.**
   `#decisions` in `index.html` has a `hidden` attribute and three empty
   `.decision-card` divs (no placeholder copy). Write the three cards —
   a tradeoff, a mistake and what you learned, a principle — then remove
   the `hidden` attribute to publish.

3. **FAA proposal wording.** Per your earlier instruction to keep this
   vague, the "How I Lead" paragraph and the Core Competencies →
   Stakeholder Alignment card both say "a winning multi-million-dollar
   federal modernization proposal" — no "$3M," no "FAA." Confirm that's
   still how you want it handled.

4. **Shift-left benefit badges (Ch.1, new).** Per your confirmation this
   round, the new `.shift-left` diagram shows all three badges from the
   reference screenshot — "Lower costs," "Faster delivery," "Greater
   coverage" — as general shift-left-testing claims, not tied to a
   specific number. The pipeline stage labels (Code / Build / Deploy /
   Release) are generic illustrative SDLC terms, not your actual Gannett
   pipeline's real stage names — flagged with the same "Illustrative"
   caption style used on Ch.4's policy snippet. Say the word if you'd
   rather use your real stage names or drop the illustrative framing.

5. **412-on-prem / 350-migrated figure (Ch.3).** Per your confirmation
   this round, 412 is now shown on-site as the total on-prem server
   count for the migration, with 350 migrated to AWS. I propagated
   "350 of 412" to: the hero proof strip, the meta description, the
   Ch.3 headline + "What changed" step, the new `.dot-grid` animation,
   and the Core Competencies → Migration Strategy card. The dot grid
   itself never shows a "62 remaining" or other derived number — only
   the two confirmed figures. Double check I didn't miss a spot.

6. **Technical Skills / Core Competencies sourcing.** These were
   originally built from `resume.pdf`'s "Key Skills" block (now deleted,
   see #8 below) plus existing site content. Nothing has changed in
   those two sections this round. Skipped QA-automation tooling
   (Appium, Testim, etc.) since none of that appears anywhere on the
   site — flag if you want a category added, since there's no longer a
   source file to check against (see Common Tasks in `CLAUDE.md`).

7. **Social share image.** OG/Twitter tags reuse `profile.jpg` (a square
   700×700 headshot) since there's no dedicated social card. A proper
   1200×630 landscape image would render more reliably (Twitter's
   `summary_large_image` card tends to crop square images awkwardly).
   Happy to help put one together if you want it.

## Resume removed this round

8. **`resume.pdf` deleted from the repo**, along with every link to it
   (nav button — desktop + mobile, the "View Full Resume →" CTA in
   About). Contact paths are now LinkedIn, GitHub, and email only.
   **It still exists in git history** (every commit before this round's
   removal commit) and may still be cached by search engines or
   third-party crawlers that fetched it from the old URL before removal.
   If you need it fully gone, that requires rewriting git history
   (`git filter-repo` or similar) and is a separate, more disruptive
   step — let me know if you want that done.

9. **Numbers that only ever lived in resume.pdf** — now only recoverable
   from git history (pre-removal commits), not from a file in the repo:
   - 20K users served at peak
   - 4 AWS + 2 Azure accounts
   - 10+ on-prem applications (separate from the 412-servers figure)
   - 553 servers pre-upgrade / 75% upgraded (Windows Server 2019→2022,
     RHEL 8→9) — a different stat from the 412-on-prem/350-migrated
     figure now shown on-site (see #5)
   - Disaster-recovery failover: 3 hours → under 15 minutes
   - Release cycle: 1 month → 2 weeks
   - Gannett: 16-person team, 8+ Jenkins pipelines, 20 min → under 8 min
     provisioning (the provisioning-time alternative to the shift-left
     animation you didn't pick)

   Say the word if any of these need to go back on the page somewhere.

## Resolved this round

- **Compliance-reporting time figure** — now reads "3–5 hours to 30
  minutes," confirmed against resume content before it was removed.
- **Ch.1 animation** — replaced the ~1,000-nightly-tests counter with a
  shift-left pipeline diagram (see #4).
- **Ch.3 animation** — replaced the 350-counter with a `.dot-grid`
  showing 350 of 412 on-prem servers migrating to AWS (see #5).
- **Resume removed** — see #8.

## Carried over from before

10. Earlier Experience entries (Data Migration Engineer @ IFPRI, DevOps
    Engineer @ REAN Cloud) are still just a one-line mention — intentional
    per the "single small line" instruction, but flagging in case you
    want more detail restored.

## Verification notes

11. **Mobile 375px check, link check, console check:** see the summary
    message for this round for what was checked and the results.

12. **Lighthouse:** last run was 2026-10-05, before the About/Skills/
    Competencies round and this round's animation + resume-removal
    changes (Performance 97, Accessibility 100, Best Practices 100,
    SEO 100 on a local `python3 -m http.server`). Not re-run since;
    worth doing before or right after this goes live — the new
    `buildDotGrid()` function creates 412 DOM nodes per page load,
    which is cheap but worth confirming doesn't move the Performance
    score.

## Not done yet

13. **Nothing has been pushed to `origin/main`.** Everything above is on
    the `portfolio-story-redesign` branch only. Let me know when you want
    it live.
