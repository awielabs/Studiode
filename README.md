# STUDIO DE.PTH

> **Design for People + Transformative Habitats**  
> Contemporary Architecture · Spatial Research · Built Monograph Archive

A premium minimalist architecture studio website demo featuring an interactive **Four-Design Concept Review System** built for client presentation and review.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat&logo=react)](https://react.dev/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

---

## Overview

This repository hosts the frontend demonstration for **Studio De.PTH**. It integrates **four distinct visual design directions** into a single cohesive web application. Clients can switch between all four directions in real time using a discreet switcher widget (`CONCEPT: 01 / 02 / 03 / 04`) pinned at the bottom-right corner of the viewport.

All four concepts share the identical project portfolio, content, responsive framework, and strict client requirements—allowing direct aesthetic comparison during design presentations.

For the comprehensive client design document, see [DESIGN_PROPOSAL.md](./DESIGN_PROPOSAL.md).

---

## The Four Design Directions

```
┌────────────────────────────────────────────────────────────────────────┐
│  01: CONTEMPORARY EDITORIAL                                            │
│  Large photography · Editorial rhythm · Asymmetric cards · Whitespace  │
├────────────────────────────────────────────────────────────────────────┤
│  02: ARCHITECTURAL CATALOGUE                                           │
│  Drawing sheets · Project Index + hover image preview · Plate figures  │
├────────────────────────────────────────────────────────────────────────┤
│  03: SWISS / BRUTALIST ARCHIVE                                         │
│  Massive oversized numbers · Strict 12-col grid · Poster compositions  │
├────────────────────────────────────────────────────────────────────────┤
│  04: ARCHITECTURAL JOURNAL / FULL-SCREEN STORY                         │
│  Full-screen chapters · Vertical project sequence · Magazine monograph │
└────────────────────────────────────────────────────────────────────────┘
```

### 01 — Contemporary Architecture Editorial
* **Core Focus**: Photography, atmospheric whitespace, and quiet elegance.
* **Layout**: Narrative flow: Hero $\rightarrow$ Studio Introduction $\rightarrow$ Selected Projects $\rightarrow$ Philosophy Statement.
* **Project Cards**: Editorial asymmetric grid with subtle 450ms opacity transition and micro-scale pop (`scale(1.025)`).
* **Reference**: Clean architectural monographs (*Sanjay Puri Architects*, *Architecture BRIO*).

### 02 — Architectural Grid / Exhibition Catalogue
* **Core Focus**: Grid drawing sheets, technical annotations, and archival curation.
* **Interactive Project Index**: A tabular index of projects (`001`, `002`, `003`, `004`). Hovering over any row highlights it with a red indicator (`■`) and **smoothly reveals that project's architecture photograph in the adjacent exhibition preview frame**.
* **Projects Archive**: Numbered exhibition sheets (`PLATE 001`, `PLATE 002`) with technical figure captions.
* **Contact Canvas**: Architectural blueprint grid with crosshairs and coordinate markers.

### 03 — Ultra-Minimal Swiss / Brutalist Archive
* **Core Focus**: Bold typography, oversized project numerals, and strict 12-column alignment.
* **Hero**: Monolithic typographic statement paired with an architectural image strictly occupying 45%–55% of the visual column.
* **Projects Flow**: Led by commanding oversized numbers (`01`, `02`, `03`, `04`). Hovering triggers a subtle title color shift and an architectural red square indicator (`■`).
* **Manifesto Bar**: Three-column discipline breakdown (`01.1 DISCIPLINE`, `01.2 HUMAN SCALE`, `01.3 PERMANENCE`).

### 04 — Architectural Journal / Full-Screen Story
* **Core Focus**: Editorial publication, visual chapters, narrative-driven pacing, and full-screen viewports.
* **Full-Screen Visual Story**: Viewport-height chapter sequence (Prologue $\rightarrow$ Typographic Statement $\rightarrow$ Split Editorial Feature $\rightarrow$ Full-Screen Monograph) with a persistent vertical **Story Spine Indicator** (`01 · 02 · 03 · 04`).
* **Vertical Editorial Sequence**: Projects are displayed not in a grid, but as continuous, full-width architectural monograph plates with subtle title offset on hover.
* **Magazine Monograph Detail**: Project pages read like long-form journal articles with hero photographic plates, editorial narrative essays, technical specification tables, and multi-image spreads.

---

## Core Brand & Architectural Guidelines

* **Color Palette**:
  * Canvas: Pure White (`#FFFFFF`)
  * Primary Text: Rich Charcoal / Black (`#111111`)
  * Accent: Muted Architectural Red (`#B94F4F`)
  * Neutral Surfaces & Borders: (`#E5E5E5` / `#777777` / `#F7F7F7`)
* **Typography**:
  * Labels, coordinates, and metadata: Typewriter / monospace (`Space Mono`, `Courier Prime`)
  * Body copy: Refined readable sans-serif (`Inter`)
* **Strict Project Filters**: Restricted solely to **`TOPOLOGY`** and **`LOCATION`** (no extraneous filter categories).
* **Zero Form Architecture**: Strictly **no interactive form inputs**; contact is direct and accessible via clickable email (`hello@studiodepth.com`) alongside a real interactive map.
* **Real Interactive Map**: Embedded Google Maps centered on the Mumbai metropolitan region styled with an architectural grayscale filter.
* **Loading Screen**: Pure white background with centered Studio De.PTH logo displaying for 2 seconds on initial visit and page transitions.

---

## Directory Structure

```bash
studio-depth/
├── app/
│   ├── layout.tsx            # Global RootLayout (wraps DemoProvider & Header)
│   ├── page.tsx              # Home router (switches between Home01, 02, 03, 04)
│   ├── globals.css           # Architectural design tokens, responsive styles, & Demo 04 system
│   ├── about/
│   │   └── page.tsx          # About page router (About01, 02, 03, 04)
│   ├── projects/
│   │   ├── page.tsx          # Projects Archive router (Projects01, 02, 03, 04)
│   │   └── [slug]/
│   │       └── page.tsx      # Static SSG route for individual project dossiers
│   └── contact/
│       └── page.tsx          # Contact router (Contact01, 02, 03, 04)
├── components/
│   ├── Header.tsx            # Sticky architectural navigation header
│   ├── Footer.tsx            # Minimalist studio footer
│   ├── LoadingScreen.tsx     # 2-second logo loading overlay
│   ├── DemoSwitcher.tsx      # Fixed bottom-right concept switcher (01 / 02 / 03 / 04)
│   ├── RealMap.tsx           # Embedded interactive Google Maps component
│   ├── ProjectCard.tsx       # Reusable project card
│   ├── ProjectFilter.tsx     # Category filter buttons (Topology / Location)
│   ├── SectionLabel.tsx      # Serialized section index labels
│   ├── IndividualProjectClient.tsx # Multi-demo project detail router
│   ├── demo01/               # Contemporary Editorial components
│   ├── demo02/               # Architectural Exhibition Catalogue components
│   ├── demo03/               # Swiss Brutalist Archive components
│   └── demo04/               # Architectural Journal / Full-Screen Story components
├── context/
│   └── DemoContext.tsx       # Active concept state management (1 | 2 | 3 | 4)
├── data/
│   └── projects.ts           # Centralized portfolio dataset
├── public/
│   ├── hero.jpg              # Monograph hero photography
│   ├── logo/                 # Studio De.PTH brand assets
│   ├── founders/             # Principal partner portraits
│   └── projects/             # High-resolution architectural photography
├── DESIGN_PROPOSAL.md        # Client-facing design presentation document (4 concepts)
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

* Node.js 18.17+ or 20+
* npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/awielabs/Studiode.git

# Enter project directory
cd Studiode

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Use the `CONCEPT: 01 / 02 / 03 / 04` switcher at the bottom-right corner to test each design system.

### Production Build

```bash
npm run build
npm run start
```

Build verifies complete TypeScript compliance and prerenders all static routes.

---

## Deployment to Vercel

This repository is optimized for deployment on [Vercel](https://vercel.com):

1. Go to your Vercel Dashboard and click **New Project**.
2. Import **`awielabs/Studiode`**.
3. Framework Preset: **Next.js** (detected automatically).
4. Click **Deploy**.

---

## License

Proprietary © 2026 Studio De.PTH. All rights reserved.
