# TODO — Portfolio content overhaul (2026-10-05)

Open items from the narrative/content overhaul. Nothing below has been
pushed to GitHub Pages yet — all work is committed locally on `main`.

## Needs your input

1. **"Decisions I'd Defend" section is built but hidden.**
   `#decisions` in `index.html` has a `hidden` attribute and three empty
   `.decision-card` divs (no placeholder copy — per instructions, nothing
   renders until it's real). Write the three cards — a tradeoff, a mistake
   and what you learned, a principle — then remove the `hidden` attribute
   to publish. You'll probably also want a nav link once it's live (I left
   it out of `#story`/`#certifications`/`#contact` nav for now since the
   section doesn't exist yet from a reader's perspective).

2. **FAA proposal wording.** Per your instruction to keep this vague, the
   "How I Lead" paragraph in `#story` now says "a winning multi-million-
   dollar federal modernization proposal" — no "$3M," no "FAA." Confirm
   that phrasing is OK, or tell me how you'd rather handle it.

3. **Compliance-reporting time figure.** The old About section said
   "3–5 hours to 30 minutes per employee each sprint"; the old Principal
   role bullet said "3–5 hours to 30 minutes per sprint" (dropped "per
   employee"). I used neutral wording per your instruction — "cut manual
   compliance reporting from hours to 30 minutes each sprint" — and
   dropped the "3–5" range since I wasn't sure which version is accurate.
   Confirm the real number if you want it precise again.

4. **Numbers now living only in resume.pdf.** To hit the ~60-word
   per-chapter budget, these stats from the old About/Experience/
   Leadership sections aren't on the page anymore (the "View Full Resume"
   link is the only place they'd be visible now):
   - 20K users served at peak
   - 4 AWS + 2 Azure accounts
   - 10+ on-prem applications (separate figure from the 350-servers count)
   - 412 of 553 servers (75%) upgraded, Windows Server 2019→2022 / RHEL 8→9
   - Disaster-recovery failover: 3 hours → under 15 minutes
   - Release cycle: 1 month → 2 weeks
   - Gannett: 16-person team, 8+ Jenkins pipelines
   - Gannett: provisioning 20 min → under 8 (I used the ~1,000 nightly
     tests stat instead, per your "pick one" instruction for Chapter 1)

   Say the word if any of these need to come back onto the page itself.

5. **Social share image.** OG/Twitter tags reuse `profile.jpg` (a square
   700×700 headshot) since there's no dedicated social card. It'll work,
   but a proper 1200×630 landscape image would render more reliably across
   platforms (Twitter's `summary_large_image` card in particular tends to
   crop square images awkwardly). Happy to help put one together if you
   want it.

6. **Simplified nav.** Nav collapsed from About/Skills/Experience/
   Certifications/Leadership/Contact down to **Story / Certifications /
   Contact**, since Skills, Experience, and Leadership are now folded into
   the Story section. Confirm you're happy with that, or want anchor
   links to individual chapters.

## Carried over from before

7. Earlier Experience entries (Data Migration Engineer @ IFPRI, DevOps
   Engineer @ REAN Cloud) are still just a one-line mention — this is now
   intentional per the "single small line" instruction, but flagging in
   case you want more detail restored.

## Verification notes

8. **Mobile 375px check:** the browser-automation tool in this environment
   wouldn't actually shrink below ~1440px viewport width (a tool/display
   limitation, not a site issue), so I verified the 375px layout by
   reviewing the CSS rather than a live screenshot — every new component
   (`story-intro-grid`, `.chapter`, `.proof-strip`, `.patch-bar`,
   `.certs-also`) has explicit mobile rules and nothing uses a fixed width
   that would overflow a 375px viewport. Worth a quick manual check in
   your own browser's device toolbar before calling this fully verified.

9. **Lighthouse (local, `python3 -m http.server`):**

   | Category        | Before (716e98f) | After |
   |------------------|:---:|:---:|
   | Performance      | 93  | 97  |
   | Accessibility    | 95  | 100 |
   | Best Practices   | 96  | 100 |
   | SEO              | 91  | 100 |

   Fixed along the way: a contrast failure on `.chapter-number` (accent
   blue on the grey card background was 4.31:1, under the 4.5:1 AA
   minimum — switched to `--accent-strong`), a contrast failure on the
   footer copyright line (`opacity: 0.7` dropped `--text-muted` to
   2.8:1 — removed the opacity), and a console 404 from the browser's
   automatic `/favicon.ico` request (added an inline SVG favicon).
   Remaining performance deductions are mostly image-delivery/caching
   advice specific to `python3 -m http.server` having no cache headers —
   GitHub Pages sets real caching headers, so the live score should be
   close to or at 100 as well; worth re-running Lighthouse against the
   live URL after deploy to confirm.

## Not done yet

10. **Nothing has been pushed to `origin/main`.** Everything above is
    committed locally only. Let me know when you want it live.
