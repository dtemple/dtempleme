# dtemple.me — personal portfolio site

A personal portfolio site for David Temple. Replaces the existing site at dtemple.me. Deployed on Vercel. Mostly static; grows incrementally as David ships projects and writing.

The wireframe lives in this repo as a reference for the visual character and IA. Treat it as design intent, not as production code (the tweaks-panel script in it is a design-iteration tool and won't ship).

## About David (the minimum)

Former VP of Product Management at Pinterest (2017–2026, most recently running incubation), now an independent solo founder building small AI-leveraged products. Earlier: founded Hello Scout (travel, 2014–2017), Director of Product at Klout and LiveIntent. Middlebury grad. Based in Mill Valley, CA (Pacific time). Dad of two.

David maintains a private wiki for ideas, sources, and decision logs. Don't reach for it when working on this site — the curation gap between "things David is thinking about" and "things David wants on his public site" matters. Anything that goes here is something he chose to show.

## Site philosophy

- Editorial, not techbro. Closer to a literary magazine or NYT op-ed page than a SaaS landing page.
- An open notebook of things being built. Projects show their stage honestly: investigate / prototype / market experiment / launched.
- Newest first, low ceremony. Anything that reads as a marketing layer is wrong.
- Static where possible. Pages should be easy to edit by hand and easy to read in raw HTML.

## Design system

These are pulled from the wireframe. They're load-bearing — David spent real time on the visual character. Don't drift without checking in.

### Type

Newsreader (Google Fonts) for body and headings, weights 300/400/500/600 plus italic 400. Default body is serif, weight 300, 17px, line-height 1.55. JetBrains Mono is used only for metadata: dates, small-caps labels, footer notes, pill text. Never use mono for body copy.

### Color tokens

```css
--ink:    #1a1a1a;   /* primary text */
--ink-2:  #4a4a4a;   /* secondary text */
--ink-3:  #8a8a8a;   /* tertiary, mono labels */
--ink-4:  #c8c5bd;   /* underline tint, subdued borders */
--paper:  #fdfcf9;   /* background */
--rule:   #e5e2d8;   /* hairline rules and card borders */
```

Cream paper background, near-black ink, warm neutrals. Do not introduce saturated color without checking first.

### Layout

980px max width. Two columns on desktop: 180px sticky sidebar + 1fr content with a 72px gap. 72px top padding, 36px sides. Collapses to a single column under 760px. Generous vertical whitespace between sections. 1px rules separate role rows and project items.

### UI patterns

- **Section labels:** mono, 10px, 1.5px letter-spacing, uppercase, color `--ink-3`.
- **Stage pills:** mono caps, 10px, 1px letter-spacing, outlined with a small dot prefix. Stages: `investigate`, `prototype`, `experiment` (display label "market experiment"), `launched`.
- **Role logos:** 40px square, 1px ink border, serif initial centered. Filled variant available (white initial on ink background) — controlled by a body class.
- **Underlines:** color `--ink-4`, 3px offset, 1px thickness. Light, not loud. Hover deepens to `--ink`.
- **Emphasis:** italics in body copy. Avoid bold for emphasis in prose; bold is reserved for the lead-in of a callout or a list item's term.

## Content guidelines

These rules apply to any copy you write for the site — about page, project descriptions, project notes, any future writing pages. The whole point is that the site sounds like David, not like a model.

- **Must not read as AI-generated.** Load-bearing constraint, not a nice-to-have.
- **No sycophancy.** No "great question," no "excellent point," none of that family.
- **Avoid the "That's not X. That's genuine Y." rhetorical pattern.** David has flagged this one specifically.
- **Follow the humanizer guidelines** at https://github.com/blader/humanizer. Short version: avoid inflated symbolism, promotional language, vague attributions, the rule of three, AI vocabulary, passive voice, negative parallelisms, and filler phrases.
- Project descriptions run 2–4 sentences: what it does, who it's for, the bet being made. Screenshots carry the rest.
- Stage pills are lowercase. Project titles are title case.
- The "currently exploring" callout is optional and toggles via a body class. Use it when David is between projects or in active opportunity exploration; hide it once a primary project is shipping.

## What this site is NOT

- Not a comprehensive list of every idea David is exploring. Project entries are curated.
- Not a CV. The roles list is intentionally short; depth lives on LinkedIn.
- Not a writing portfolio yet — the Writing, Coding, and Quick-Guide to Product nav links are placeholders for future content.

## Tech & deploy

- **Hosting:** Vercel.
- **Stack:** Starts as a single static HTML file. Add framework weight only when there's a reason. If JS frameworks are introduced later, prefer something that produces static HTML at build time (Astro, Eleventy) over runtime SPAs.
- **Domain:** dtemple.me. Live site will cut over from the previous version at launch.
- **Fonts:** Loaded from Google Fonts via `<link>`. Preconnect is already in the wireframe head.

## Working notes

- David prefers context with answers, not just conclusions. If you recommend a change, say why.
- Longer and more detailed is fine when detail adds value; bullets where structure helps.
- He's in Pacific time with school-run constraints around morning and afternoon. Async work that lands well during the day is appreciated.
- When in doubt about voice or visual choices, propose two options with trade-offs rather than picking unilaterally.
