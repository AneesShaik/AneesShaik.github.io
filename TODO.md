# TODO — Portfolio redesign (updated 2026-10-06)

Status: **the full redesign is live** at https://aneesshaik.github.io/.
This round's changes (hero stat swap, button rename, policy-snippet
removal) are on branch `portfolio-content-updates`, not yet merged.
This file tracks only what's still open.

## This round's changes

- **Hero proof strip:** first stat changed from "350/412 servers
  migrated to AWS" to "~99% automation coverage." You confirmed: covers
  compliance checks, deployments, testing, and patching collectively
  ("includes everything"), shown as approximate (~99%), no qualifier in
  the label. The 350/412 figure is untouched everywhere else (About
  chapters, meta description, Migration Strategy card).
- **Hero button:** "See the story" renamed to "About Me," still links
  to `#about`.
- **Ch.4 policy-as-code snippet removed:** the illustrative OPA/Rego
  code block and its caption are gone from the Principal DevSecOps
  Architect chapter. Removed the now-unused `.policy-snippet`/
  `.policy-snippet-wrap` CSS and the `--font-mono` token (nothing else
  used it). The chapter's AWS-spend bar (`.patch-bar`) is untouched.
- **Resume comparison (step 2 of the original request) was explicitly
  skipped this round at your instruction** — not done, not forgotten.
  The repo's `resume.pdf` was removed earlier and isn't tracked
  in-repo anymore, so the site hasn't been checked against your latest
  resume for discrepancies. Revisit whenever you want that pass done.

## Still open from before

1. **Social share image.** OG/Twitter tags reuse `profile.jpg` (a square
   700×700 headshot). Low priority, deferred.

2. **Resume-only numbers not on the page** (recoverable from git history
   only — `resume.pdf` was removed but its content still exists in
   earlier commits):
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

3. Local preview, 375px mobile, link check, and console check for this
   round — see the summary message for results.
4. **Lighthouse** — last run 2026-10-05, several rounds of changes ago.
   Worth a fresh run against the live URL sometime.
