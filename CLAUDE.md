# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Matthew Buchman's personal portfolio site: a single static HTML file (`index.html`) with inline CSS and inline JavaScript, plus an `assets/` folder of images. There is no build tool, package manager, framework, bundler, linter, or test suite — the entire site is one file, deployed by pushing to `main` on GitHub (`mbuchman123/matthew-portfolio`).

## Working in this repo

- **Preview**: open `index.html` directly in a browser, or serve the folder with any static file server. There is no dev server, no `npm run` scripts, and no `package.json` — don't add one unless asked.
- **Deploy**: pushing to `main` is the entire release process. There is no CI/build step. Commit and push directly.
- **Verify changes visually before pushing**: this is a design-heavy, layout-sensitive site (3D transforms, CSS Grid collapse animations, absolute positioning). Static review of the CSS is not enough to catch overlap/clipping/z-index bugs — actually render the page. The established pattern for this: set up Playwright in a scratch temp directory (`npm init -y && npm install playwright && npx playwright install chromium`), load `index.html` via a `file://` URL, screenshot the relevant state, and read the screenshot back. Several real bugs in this project's history were only caught this way (see Known gotchas below), not by reading the diff.

## Architecture

Everything lives in `index.html` in three parts, in this order:
1. `<style>` in `<head>` — organized into commented sections (`/* HERO */`, `/* EXPERIENCE CAROUSEL */`, `/* LEADERSHIP — TIMELINE */`, `/* CONTENT */`, `/* SKILLS */`, `/* CONTACT */`, `/* BUTTONS */`, etc.). CSS custom properties in `:root` define the brand palette (`--blue`, `--orange`, `--blue-bright`, `--bg`, `--surface`, `--muted`, `--border`). No CSS framework.
2. Markup in `<body>`, one `<!-- SECTION -->` comment block per page section, in the same order as the CSS sections and matching `id`s (`#hero`, `#experience`, `#leadership`, `#content`, `#skills`, `#contact`).
3. `<script>` at the end of `<body>` — also organized by commented sections, matching the markup sections.

### Page sections and their interactive systems

- **Hero**: logo + nav links overlaid directly on the hero image (no separate nav bar). Background is a two-layer haze: `.site-haze` (`position:fixed`, spans every section, no fade) plus `.hero-haze` (more vivid, scoped to the hero, fades out via a CSS mask by the hero's own bottom edge). "Personal"/"Portfolio" headline text is split left/right to wrap around the portrait photo's head.
- **Work Experience**: a 3D coverflow carousel (`#exp-track` holds `.exp-card` elements; `layoutCarousel()` computes each card's `translateX/translateZ/rotateY/scale` based on distance from the active index). Navigation: `goToCard(i)` / `carPrev()` / `carNext()`, prev/next buttons, dot indicators, and a synced vertical toggle list (`.exp-toggle-item`, left of the carousel) that all drive the same `expIdx` state. Clicking "See details" (`tx(id, btn)`) toggles a card's `.open` class, which expands the card **horizontally** (width grows, a second column of bullets reveals to the right) — not vertically. `layoutCarousel()` also force-closes any card that stops being the active one, so non-active cards stay a uniform collapsed width.
- **Leadership & Development**: a horizontal timeline (`#lead-timeline`, `.lt-item` alternating above/below a center line via `.lt-top`/`.lt-bottom`). Clicking a photo (`ltToggle(item)`) toggles `.active`, which grows a `.lt-expand` detail card directly out of that photo (scale from ~0 to 1), rather than opening a separate panel elsewhere.
- **Content**: tabbed video grid (`switchTab(id, btn)` swaps `.tab-panel.active`).
- **Skills & Interests**: skill chips open a detail panel (`tskill`/`cskill`); interests are an accordion (`ti(row)`) with a "paste a link" mini-form (`addLink(key)`).
- **Global**: a single `document`-level click listener closes any open experience card or active leadership timeline item — clicking anywhere (inside the box or outside it) closes it, except the `.xbtn`/upload buttons, which call `event.stopPropagation()` so they don't fight this listener.

### Image handling

Every photo slot (`.banner-photo`, `.lt-photo img`, `.ps`/`.int-slot` grids) has a hidden `<input type="file">` wired to `lb()`, `lp()`, or `lip()`. These are **client-side-only FileReader previews** — they swap the `<img src>` to a data URL in the visitor's own browser session and do not persist anywhere. To actually change a photo for all visitors, add the image file to `assets/` and update the `src` in `index.html` directly.

## Known gotchas (from this project's history)

- **`assets/` must stay lowercase.** The folder was once accidentally tracked in git as `Assets` (capital A). Windows is case-insensitive so this was invisible locally, but GitHub Pages hosting is case-sensitive — every image reference (`assets/...`) would 404 in production. If you ever rename/recreate the assets folder, verify with `git ls-files | grep -i assets` that it's tracked lowercase.
- **`@keyframes` names are global.** Two different sections once both defined `@keyframes fadeUp` with different bodies; the later declaration in the file silently won for *every* element using `animation: fadeUp`, including ones that needed a different transform. Give new keyframes unique, section-specific names rather than a generic shared one.
- **CSS Grid `0fr`→`1fr` collapse animations don't zero out height for children with an explicit fixed width.** A child like `width: 290px` inside a collapsing grid track still reports its full natural height even at zero visible width, inflating the parent row. Fix: explicitly toggle `height: 0; overflow: hidden` → `height: auto; overflow: visible` on that child alongside the width transition, don't rely on the grid track collapse alone.
- **`setPointerCapture` on a drag handler can hijack unrelated clicks.** Capturing the pointer on `pointerdown` anywhere inside a container redirects that pointer's `mouseup`/`click` to the capturing element regardless of where the cursor is, breaking normal `onclick` handlers on descendants. Only capture if you're actually tracking `pointermove`; a simple drag-distance check on `pointerdown`/`pointerup` doesn't need it.
- **A `position:absolute`/`fixed` element with an explicit (even `0`/negative) `z-index` can still paint above plain static siblings**, because CSS stacking-context paint order puts non-positioned in-flow content *before* positioned descendants at the same level. If a fixed/absolute background layer is supposed to sit behind normal page content, give it a **negative** `z-index`, not `0`.
- **Uploaded images often arrive duplicated.** The user's chat client doesn't give this tool direct file access to pasted images — the user saves them to disk (sometimes to the repo root instead of `assets/`, sometimes *also* uploading the same file directly via GitHub's web UI). Expect `git push` to occasionally be rejected because of a remote-only "Add files via upload" commit; `git fetch`, diff/checksum-compare the files, and merge rather than force-pushing.
