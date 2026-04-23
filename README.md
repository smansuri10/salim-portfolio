# Salim Mansuri — Portfolio

Personal portfolio site for Salim Mansuri, Full-Stack Web Developer.

**Live site:** https://salim-portfolio-zeta.vercel.app

---

## Tech Stack
- HTML5, CSS3, JavaScript — no frameworks
- Deployed on Vercel via GitHub auto-deploy
- Font: DM Sans (Google Fonts)

## Folder Structure
salim-portfolio/
├── index.html          — single page, all sections
├── css/
│   └── style.css       — all styles
├── js/
│   └── main.js         — all behavior
└── assets/
├── images/         — project screenshots
└── resume/         — resume PDF

---

## Deployment

Every push to `main` auto-deploys to Vercel.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Color Reference

| Token                    | Hex       | Usage                             |
| ------------------------ | --------- | --------------------------------- |
| `--color-navy`           | `#0C447C` | Primary CTAs, buttons             |
| `--color-navy-deep`      | `#1F3864` | Hover states, headings            |
| `--color-navy-mid`       | `#185FA5` | Links, skill labels, tagline      |
| `--color-navy-light`     | `#378ADD` | Dashed borders                    |
| `--color-navy-tint`      | `#E6F1FB` | Badge backgrounds, subtle fills   |
| `--color-text-primary`   | `#0F1923` | Headings, card titles             |
| `--color-text-secondary` | `#4A5568` | Body copy                         |
| `--color-text-tertiary`  | `#8A96A3` | Meta, captions, placeholders      |
| `--color-bg`             | `#FFFFFF` | Page background                   |
| `--color-bg-subtle`      | `#F7F9FC` | Card image areas, contact section |
| `--color-border`         | `#E2E8F0` | Card borders, dividers            |
| `--color-border-light`   | `#EEF2F7` | Nav border, subtle dividers       |

---

## Spacing Scale

| Token         | Value  |
| ------------- | ------ |
| `--space-xs`  | `4px`  |
| `--space-sm`  | `8px`  |
| `--space-md`  | `16px` |
| `--space-lg`  | `24px` |
| `--space-xl`  | `40px` |
| `--space-2xl` | `64px` |

---

## Border Radius

| Token         | Value  | Usage                  |
| ------------- | ------ | ---------------------- |
| `--radius-sm` | `4px`  | Buttons, status badges |
| `--radius-md` | `8px`  | Inputs, small cards    |
| `--radius-lg` | `12px` | Project cards          |

---

## Component Cheat Sheet

### Buttons

```html
<!-- Primary filled button -->
<a href="#" class="btn-filled">See My Work</a>

<!-- Ghost outlined button -->
<a href="#" class="btn-ghost">Download Resume</a>
```

---

### Project Card — Standard (In Development)

```html
<div class="proj-card">
  <div class="proj-img">
    <!-- Replace SVG with <img> when screenshot is ready -->
  </div>
  <div class="proj-body">
    <div class="proj-header">
      <span class="proj-title">Project Name</span>
      <span class="proj-status">IN DEVELOPMENT</span>
    </div>
    <p class="proj-desc">Project description.</p>
    <p class="proj-stack">Tech, Stack, Here</p>
    <div class="proj-btns">
      <a href="https://github.com/..." target="_blank" class="proj-btn-ghost">GitHub</a>
      <a href="https://..." target="_blank" class="proj-btn-filled">Live Demo</a>
    </div>
  </div>
</div>
```

---

### Project Card — Live

```html
<div class="proj-card">
  <div class="proj-img">
    <img src="assets/images/your-screenshot.png" alt="Project name">
  </div>
  <div class="proj-body">
    <div class="proj-header">
      <span class="proj-title">Project Name</span>
      <span class="proj-status status-live">LIVE</span>
    </div>
    <p class="proj-desc">Project description.</p>
    <p class="proj-stack">Tech, Stack, Here</p>
    <div class="proj-btns">
      <a href="https://github.com/..." target="_blank" class="proj-btn-ghost">GitHub</a>
      <a href="https://..." target="_blank" class="proj-btn-filled">Live Demo</a>
    </div>
  </div>
</div>
```

---

### Project Card — In Progress (dashed)

```html
<div class="proj-card proj-card-dashed">
  <div class="proj-img proj-img-dashed">
    <!-- Screenshot or SVG placeholder -->
  </div>
  <div class="proj-body">
    <div class="proj-header">
      <span class="proj-title">Project Name</span>
      <span class="proj-status status-progress">IN PROGRESS</span>
    </div>
    <p class="proj-desc">Description.</p>
    <p class="proj-stack proj-stack-tbd">Stack TBD</p>
    <div class="proj-btns">
      <span class="proj-btn-ghost btn-disabled">GitHub</span>
      <span class="proj-btn-ghost btn-disabled">Live Demo</span>
    </div>
  </div>
</div>
```

---

### Contact Section
- Email link uses `mailto:` — clicking opens the user's mail app directly
- To update email: find `href="mailto:..."` in the contact section and change the address
- To update LinkedIn URL: find `href="https://www.linkedin.com/in/..."` and update
- To update GitHub URL: find `href="https://github.com/..."` and update

### Footer
- To update copyright year: find `© 2026` in the footer and change the year

### Nav Links
- To remove a link: delete the `<a>` line from the nav-links block
- To add a link: add `<a href="#section-id">Label</a>` and make sure the section has a matching `id`

---

## Status Badge Reference

| Status         | Class                                 | Appearance                     |
| -------------- | ------------------------------------- | ------------------------------ |
| In Development | `class="proj-status"`                 | Plain gray text, no background |
| Live           | `class="proj-status status-live"`     | Green badge                    |
| In Progress    | `class="proj-status status-progress"` | Navy badge                     |
| Coursework     | `class="proj-status"`                 | Plain gray text, no background |

---

## How to Update a Card Over Time

### When a project goes from In Progress → In Development:
1. Change `class="proj-card proj-card-dashed"` → `class="proj-card"`
2. Change `class="proj-img proj-img-dashed"` → `class="proj-img"`
3. Change status to `class="proj-status"` and text to `IN DEVELOPMENT`
4. Replace disabled `<span>` buttons with real `<a>` links
5. Add real GitHub URL

### When a project goes from In Development → Live:
1. Change status to `class="proj-status status-live"` and text to `LIVE`
2. Add real Live Demo URL to the existing button
3. Replace SVG placeholder with screenshot:
```html
<img src="assets/images/your-screenshot.png" alt="Project name">
```

### When a project goes from In Progress → Live (skipping In Development):
1. Change `class="proj-card proj-card-dashed"` → `class="proj-card"`
2. Change `class="proj-img proj-img-dashed"` → `class="proj-img"`
3. Change status to `class="proj-status status-live"` and text to `LIVE`
4. Replace disabled `<span>` buttons with real `<a>` links
5. Add real GitHub and Live Demo URLs
6. Replace SVG with screenshot image

---

## How to Swap Content

### Adding your real photo:
1. Name your photo file `salim-mansuri-headshot.jpg`
2. Drop it into `assets/images/`
3. Find the `.hero-photo` div in `index.html` and replace:
```html
<div class="hero-photo">
  <span>Professional Photo</span>
</div>
```
With:
```html
<div class="hero-photo">
  <img src="assets/images/salim-mansuri-headshot.jpg" alt="Salim Mansuri" />
</div>
```
4. Add this to your CSS to make the image fill the circle:
```css
.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

### Updating your resume:
1. Export resume as PDF
2. Name it exactly `salim-mansuri-resume.pdf`
3. Drop it into `assets/resume/`
4. Push — the Download Resume button links there automatically

### Adding a project screenshot:
1. Take a screenshot of your project
2. Name it clearly e.g. `run-it-screenshot.png`
3. Drop it into `assets/images/`
4. Find the `proj-img` div in the card and replace the SVG with:
```html
<div class="proj-img">
  <img src="assets/images/run-it-screenshot.png" alt="Run It app screenshot" style="width:100%; height:100%; object-fit:cover;">
</div>
```

---

## Design Decision Log

| Decision                                                          | Rationale                                                                     |


| DM Sans as body font                                              | Warmer than Inter, still professional. Avoids generic dev-portfolio look.     |
| CSS custom properties for design system                           | Single source of truth. Change one value, updates everywhere.                 |
| Navy `#0C447C` / `#1F3864` as primary                             | Professional without being corporate. Differentiates from black/gray palette. |
| Frosted glass nav (`rgba` + `backdrop-filter`)                    | More polished than solid white. Content scrolling behind looks intentional.   |
| `scroll-padding-top: var(--nav-height)`                           | Prevents fixed nav from covering section titles on anchor link click.         |
| Animated underline on nav links via `::after`                     | Refined hover affordance without being heavy-handed.                          |
| Mobile menu slides in from top                                    | Feels like a panel dropping rather than binary appear/disappear.              |
| `aria-expanded` drives hamburger animation                        | Accessibility and animation in one attribute — no extra JS class needed.      |
| Spacing variables (`--space-xs` through `--space-2xl`)            | Consistent scale across all sections.                                         |
| Hero uses CSS Grid (`grid-template-columns: 1fr 1fr`)             | More stable than flexbox for two-column layouts with large image.             |
| Hero content top-third positioned                                 | Name hits immediately. Empty space below invites scrolling.                   |
| Name `72px`, `font-weight: 700`                                   | Large name creates immediate visual anchor for recruiters.                    |
| Tagline in navy `#1F3864`, `24px`, `font-weight: 500`             | Navy tagline creates hierarchy between name and body copy.                    |
| Removed eyebrow label — tagline IS the identifier                 | Cleaner. Tagline carries both role and background context in one line.        |
| Body copy as three separate `<p>` tags                            | Short punchy lines read better than a paragraph block.                        |
| Photo circle `320px`                                              | Balances the heavy left column text.                                          |
| `max-width: 1280px` centered container                            | Prevents content stretching too wide on large screens.                        |
| `border-radius: var(--radius-sm)` on buttons                      | Tighter corners match wireframe. Consistent with card styling.                |
| About + Skills uses CSS Grid                                      | Same two-column pattern as hero. Consistent layout language.                  |
| Skill labels uppercase, navy, `letter-spacing`                    | Creates clear visual hierarchy between category and value.                    |
| Dashed border on Art Portfolio card                               | Signals in-progress without a banner or overlay. Wireframe decision.          |
| Status badges (green LIVE, navy IN PROGRESS, gray IN DEVELOPMENT) | Color-coded at a glance. Green = shipped, navy = in flight, gray = building.  |
| Card hover: `translateY(-2px)` + shadow                           | Subtle lift signals the card is clickable.                                    |
| Disabled buttons use `pointer-events: none`                       | Prevents clicking placeholder links on in-progress cards.                     |
| Removed Skills from nav                                           | Skills live inside About section. Three clean links reads as intentional.     |
| Contact section light gray background                             | Visual contrast separates it from Projects without a heavy divider.           |
| mailto: link for email                                            | Opens user's mail app directly — no contact form needed for a portfolio.      |