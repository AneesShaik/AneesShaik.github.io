# TODO — Portfolio redesign (updated 2026-10-06)

Open items from the content/story overhaul (2026-10-05) and this round's
redesign (2026-10-06: About rename, career-range paragraph, chapter
restyle + animations, Technical Skills / Core Competencies sections).
Nothing below has been pushed to GitHub Pages yet — all work is on the
`portfolio-story-redesign` branch pending your review.

## Needs your input

1. **Career-range paragraph (new, `#about`).** Added the four-worlds
   paragraph (services firm → NGO → SaaS product co → federal consulting)
   you gave me, lightly tightened. I mapped the four "worlds" to REAN
   Cloud (services firm), IFPRI (NGO), Gannett (SaaS/product-speed), and
   CSSI (federal consulting) based on role descriptions already on the
   site/resume — confirm that mapping is what you meant, and confirm the
   specific lesson attached to each one ("every client meant a new
   problem," "resourcefulness," "shipping speed," "security/compliance
   non-negotiable") is accurate to how you'd describe each job.

2. **"Decisions I'd Defend" section is built but hidden.**
   `#decisions` in `index.html` has a `hidden` attribute and three empty
   `.decision-card` divs (no placeholder copy — per instructions, nothing
   renders until it's real). Write the three cards — a tradeoff, a mistake
   and what you learned, a principle — then remove the `hidden` attribute
   to publish.

3. **FAA proposal wording.** Per your earlier instruction to keep this
   vague, the "How I Lead" paragraph in `#about` still says "a winning
   multi-million-dollar federal modernization proposal" — no "$3M," no
   "FAA." (Reused the same phrasing for the new Core Competencies →
   Stakeholder Alignment card.) Confirm that's still how you want it
   handled.

4. **Animation number sourcing.** Per your answers this round: Ch.1
   animates a count-up to ~1,000 nightly tests, Ch.3 to 350 servers
   migrated, Ch.4 to the $570K→$463K AWS-spend bar — all shown as exact
   figures per your choice. The Ch.1 "20 min → under 8 min provisioning"
   and Ch.3 "350-dot grid" alternatives you didn't pick are still only in
   `resume.pdf`, not on the page. Say the word if you'd rather swap either.

5. **Technical Skills / Core Competencies — new sections.** Built from
   `resume.pdf`'s "Key Skills" block (tools, verbatim) and existing
   site/resume content (competencies). Skipped `Appium, Testim, Web Page
   Test`-style QA-automation tooling and anything else not already in
   your Key Skills list or site copy, since none of that currently
   appears anywhere on the site or resume — flag if you want a category
   added. Added a "Skills" nav link pointing at `#skills`; `#competencies`
   has no nav link since it's directly adjacent.

6. **Social share image.** OG/Twitter tags reuse `profile.jpg` (a square
   700×700 headshot) since there's no dedicated social card. It'll work,
   but a proper 1200×630 landscape image would render more reliably across
   platforms (Twitter's `summary_large_image` card in particular tends to
   crop square images awkwardly). Happy to help put one together if you
   want it.

7. **Numbers still only in resume.pdf.** To hit the ~60-word
   per-chapter budget, these stats aren't on the page itself (the "View
   Full Resume" link is the only place they'd be visible):
   - 20K users served at peak
   - 4 AWS + 2 Azure accounts
   - 10+ on-prem applications (separate figure from the 350-servers count)
   - 412 of 553 servers (75%) upgraded, Windows Server 2019→2022 / RHEL 8→9
   - Disaster-recovery failover: 3 hours → under 15 minutes
   - Release cycle: 1 month → 2 weeks
   - Gannett: 16-person team, 8+ Jenkins pipelines, 20 min → under 8 min provisioning

   Say the word if any of these need to come back onto the page itself.

## Resolved this round

- **Compliance-reporting time figure** — `resume.pdf`'s Key Skills/
  Principal bullet confirms "3–5 hours to 30 minutes per employee each
  sprint," so the vague "hours to 30 minutes" wording in `#about` → How I
  Lead now reads "3–5 hours to 30 minutes."
- **Nav wording** — now **About / Skills / Certifications / Contact**
  (was Story / Certifications / Contact before this round).

## Carried over from before

8. Earlier Experience entries (Data Migration Engineer @ IFPRI, DevOps
   Engineer @ REAN Cloud) are still just a one-line mention — intentional
   per the "single small line" instruction, but flagging in case you want
   more detail restored.

## Verification notes

9. **Mobile 375px check:** see latest verification pass before the review
   message in this session for what was checked and how.

10. **Lighthouse:** last run was 2026-10-05 (before this round's changes —
    Performance 97, Accessibility 100, Best Practices 100, SEO 100 on a
    local `python3 -m http.server`). Not re-run yet for this round's
    additions (new sections, animations); worth doing before or right
    after this goes live.

## Not done yet

11. **Nothing has been pushed to `origin/main`.** Everything above is on
    the `portfolio-story-redesign` branch only. Let me know when you want
    it live.
