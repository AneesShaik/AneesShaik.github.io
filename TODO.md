# TODO — Portfolio redesign (updated 2026-10-06)

Open items from the content/story overhaul (2026-10-05), the About/
Skills/Competencies round (2026-10-06 AM), the resume-removal/animation
round (2026-10-06 PM), and this round (2026-10-06 night: Ch.1 and Ch.3
visuals replaced with owner-approved mockups). Nothing below has been
pushed to GitHub Pages yet — all work is on the `portfolio-story-redesign`
branch pending your review.

## This round's changes (Ch.1 and Ch.3 visuals)

You reviewed 3 mockups for each chapter at `/tmp/portfolio-ideas/`
(untracked, outside the repo) and picked:

- **Ch.1 (Gannett):** the animated shift-left diagram is gone, replaced
  with a static `.pipeline-compare` illustration — two rows (Traditional
  vs. Shift left) of pipeline stages showing testing moving from last to
  first. No animation, no scroll trigger. Benefit badges: "Bugs caught
  earlier," "Lower cost to fix," "Faster, safer releases." Real facts
  cited in the caption: ~1,000 nightly regression tests, the model-based
  regression framework.
- **Ch.3 (Senior Engineering Manager):** the server dot grid is gone,
  replaced with a before/after bar — the exact same `.patch-bar`
  component already used in Ch.2 and Ch.4 — showing the on-prem
  footprint shrinking from 100% to ~15% (i.e. ~85% smaller), captioned
  "~85% smaller on-prem footprint."

**Data check, resolved:** 350 of 412 = 84.95% → you confirmed ~85% (not
~84%) is correct, and confirmed 412 is the right on-prem total for this
migration (distinct from the 412-of-553 OS-upgrade stat from the earlier
Senior DevOps Engineer role — different effort, same number by
coincidence).

**Every place a related number appears, for consistency:**
| Location | Text |
|---|---|
| Meta description | "350 of 412 on-prem servers migrated to AWS" |
| Hero proof strip | "350/412 — servers migrated to AWS" |
| Ch.3 headline | "Moved 350 of 412 on-prem servers to AWS…" |
| Ch.3 "What changed" step | "350 of 412 on-prem servers moved to AWS — an ~85% smaller on-prem footprint — with zero unplanned downtime…" *(updated this round to add the ~85% framing)* |
| Ch.3 footprint bar (new) | "100%" → "~15%", captioned "~85% smaller on-prem footprint" *(new this round)* |
| Core Competencies → Migration Strategy | "Pitched and led the migration of 350 of 412 on-prem servers to AWS" |

I left the raw 350/412 counts as the primary framing everywhere except
the new bar (which is inherently percentage-based) and the "What
changed" step (where I wove both framings together). Say the word if
you'd rather see "~85%" called out in more places, e.g. the hero proof
strip or headline.

**Removed as dead code:** `.shift-left*` CSS (the animated Ch.1
component) and `.dot-grid*` CSS/JS including `buildDotGrid()` (the Ch.3
server-dot animation) — nothing references them anymore.

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

4. **Pipeline stage labels (Ch.1).** The new illustration's stage labels
   (Code / Build / Deploy / Test) are generic illustrative SDLC terms,
   not your actual Gannett pipeline's real stage names. Say the word if
   you'd rather use your real stage names.

5. **Technical Skills / Core Competencies sourcing.** These were
   originally built from `resume.pdf`'s "Key Skills" block (deleted last
   round) plus existing site content. Nothing changed in those two
   sections this round. Skipped QA-automation tooling (Appium, Testim,
   etc.) since none of that appears anywhere on the site — flag if you
   want a category added, since there's no longer a source file to check
   against (see Common Tasks in `CLAUDE.md`).

6. **Social share image.** OG/Twitter tags reuse `profile.jpg` (a square
   700×700 headshot) since there's no dedicated social card. A proper
   1200×630 landscape image would render more reliably (Twitter's
   `summary_large_image` card tends to crop square images awkwardly).
   Happy to help put one together if you want it.

## Resume removed (prior round, 2026-10-06 PM)

7. **`resume.pdf` deleted from the repo**, along with every link to it.
   Contact paths are LinkedIn, GitHub, and email only. **It still exists
   in git history** and may still be cached by search engines or
   third-party crawlers that fetched it from the old URL before removal.
   Fully purging it requires rewriting git history — a separate, more
   disruptive step — let me know if you want that done.

8. **Numbers that only ever lived in resume.pdf** — now only recoverable
   from git history, not from a file in the repo:
   - 20K users served at peak
   - 4 AWS + 2 Azure accounts
   - 10+ on-prem applications (separate from the 412-servers figure)
   - 553 servers pre-upgrade / 75% upgraded (Windows Server 2019→2022,
     RHEL 8→9) — the different OS-upgrade stat mentioned above
   - Disaster-recovery failover: 3 hours → under 15 minutes
   - Release cycle: 1 month → 2 weeks
   - Gannett: 16-person team, 8+ Jenkins pipelines, 20 min → under 8 min
     provisioning

   Say the word if any of these need to go back on the page somewhere.

## Carried over from before

9. Earlier Experience entries (Data Migration Engineer @ IFPRI, DevOps
   Engineer @ REAN Cloud) are still just a one-line mention — intentional
   per the "single small line" instruction, but flagging in case you
   want more detail restored.

## Verification notes

10. **Mobile 375px check, link check, console check:** see the summary
    message for this round for what was checked and the results.

11. **Lighthouse:** last run was 2026-10-05, before the About/Skills/
    Competencies round and the two animation/resume rounds since.
    (Performance 97, Accessibility 100, Best Practices 100, SEO 100 on a
    local `python3 -m http.server`.) Worth re-running before or right
    after this goes live — this round actually removes DOM work (no more
    412-node dot grid generated at runtime), so Performance should be at
    least as good.

## Not done yet

12. **Nothing has been pushed to `origin/main`.** Everything above is on
    the `portfolio-story-redesign` branch only. Let me know when you want
    it live.
