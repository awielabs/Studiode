# STUDIO DE.PTH
## WEBSITE DESIGN DIRECTIONS

**Four Visual Design Concepts for Client Review**  
*Document Reference: SDP-DES-2026-V2*  
*Practice: Studio De.PTH — Design for People + Transformative Habitats*

---

### INTRODUCTION

We have explored four distinct visual directions for the Studio De.PTH website. All four concepts follow the same core requirements, brand identity, and website structure. The difference lies in how the visual language, layout, typography, project presentation, and interactions are utilized.

The purpose of this document is to allow the client to review and compare these four architectural design approaches before selecting the final visual direction for development and content integration.

---

### IMPORTANT NOTE: CORE CONSISTENCY

All four concepts strictly preserve the studio's foundational requirements:

* **Studio De.PTH Branding & Identity**: Authentically incorporates the supplied Studio De.PTH logo and primary tagline (*"Design for People + Transformative Habitats"*).
* **Website Structure & Pages**: Home, About Us, Projects Archive, Dedicated Individual Project Pages, and Contact.
* **Shared Project Data**: All concepts utilize the identical portfolio records and project information.
* **Strict Filter Functionality**: Project filtering is strictly limited to **`TOPOLOGY`** and **`LOCATION`**.
* **Zero Form Integrity**: The Contact page contains **no interactive forms**; inquiries are routed directly via clickable email (`hello@studiodepth.com`) alongside a cartographic map.
* **Palette Restraint**: Crisp white background (`#FFFFFF`), primary black typography (`#111111`), muted architectural red accent (`#B94F4F`), and subtle neutral greys (`#E5E5E5` / `#777777`).
* **Minimal Interaction Philosophy**: Restrained, calm interactions without heavy 3D, parallax, cursor-following graphics, or generic SaaS aesthetics.

**The key distinction is the DESIGN LANGUAGE, STRUCTURAL RHYTHM, and PRESENTATION.**

---

```
================================================================================
01 — CONTEMPORARY ARCHITECTURE EDITORIAL
================================================================================
```

> *"This direction presents Studio De.PTH as a refined contemporary architecture studio through a clean editorial portfolio."*

#### Visual Character
* **Tone**: Clean, premium, elegant, spacious, photography-led, contemporary.
* **Atmosphere**: Evokes the tactile restraint and photographic gravitas of monographs like *Sanjay Puri Architects* and *Architecture BRIO*.

#### Layout & Composition
* Familiar, sophisticated architecture-studio narrative hierarchy:
  $$\text{Large Hero} \longrightarrow \text{Studio Introduction} \longrightarrow \text{Selected Projects} \longrightarrow \text{Studio Statement} \longrightarrow \text{Footer}$$
* Asymmetric editorial grid rhythm (varied landscape, square, and wide-span viewports).

#### Project Presentation
* Projects are introduced through expansive, full-bleed architectural photography accompanied by minimal typographic annotations.
* **Hover Interaction**: Normal state shows calm image; hovering induces a subtle 450ms opacity transition and micro-scale pop (`scale(1.025)`), drawing focus to the work without aggressive motion.

#### Typography & Palette
* **Display**: Clean editorial headings with generous letter-spacing.
* **Metadata & Annotations**: Typewriter / monospace styling (`Space Mono`) for coordinates, scale, and dates.
* **Colors**: Pure white canvas, rich black text, muted brick red accent applied to active states and navigation underlines.

#### Best Suited For
A studio that seeks an instantly recognizable, prestigious, and timeless architecture portfolio emphasizing built space and atmospheric photography.

**Keywords**: *Editorial · Elegant · Clean · Photography · Contemporary*

---

```
================================================================================
02 — ARCHITECTURAL GRID / EXHIBITION CATALOGUE
================================================================================
```

> *"This direction treats the website like a digital architecture exhibition or design catalogue."*

#### Visual Character
* **Tone**: Structured, architectural, editorial, precise, experimental, grid-based.
* **Atmosphere**: Translates the tactile precision of a physical museum exhibition sheet, blueprint drawing, and biennial catalogue into an interactive medium.

#### Layout & Composition
* Subtle vertical grid guidelines and sheet borders (`EXHIBITION SHEET / NO. 01`, `PLATE 001`).
* Asymmetric compositions where typography occupies distinct architectural drawing zones alongside framed photographic plates.

#### Project Presentation & Main Interaction
* Replaces standard card grids with an **Architectural Project Index**:
  ```
  PROJECT INDEX
  ■ 001   PROJECT ONE — AURA RESIDENCE           RESIDENTIAL / MUMBAI      2026 ↗
    002   PROJECT TWO — TERRACOTTA MONOLITH      CULTURAL / AHMEDABAD      2025 ↗
    003   PROJECT THREE — COURTYARD ENCLOSURE    RESIDENTIAL / PUNE        2026 ↗
    004   PROJECT FOUR — HABITATS STUDIO         COMMERCIAL / BENGALURU    2024 ↗
  ```
* **Interactive Hover Reveal**: Hovering over any project row highlights the entry with a tiny red architectural square (`■`) and **smoothly reveals that project's photograph in the adjacent exhibition preview frame**.
* The Projects Archive organizes works into numbered exhibition sheets (`PLATE 001`, `PLATE 002`) with architectural figure citations.

#### Typography & Palette
* Strong focus on three-digit project serials (`001`, `002`), classification tags (`PROGRAM`, `LOCATION`, `STATUS`), and Typewriter-inspired tabular metadata.
* Red acts as a deliberate drafting annotation or active index marker.

#### Best Suited For
A practice that wants its digital presence to read like an architectural research atelier, monograph publication, or curated design archive.

**Keywords**: *Grid · Archive · Catalogue · Architecture · Structured*

---

```
================================================================================
03 — ULTRA-MINIMAL SWISS / BRUTALIST ARCHIVE
================================================================================
```

> *"This direction takes a more distinctive and restrained approach, combining Swiss graphic design principles with the visual language of architectural archives."*

#### Visual Character
* **Tone**: Bold, minimal, precise, strong typography, high contrast, structured, distinctive.
* **Atmosphere**: Influenced by modern Swiss graphic design, brutalist material honesty, and international typographic style.

#### Layout & Composition
* Poster-like hero composition:
  * Bold, monolithic typography dominates the left column:
    $$\textbf{STUDIO DE.PTH / 01} \quad \longrightarrow \quad \textbf{DESIGN FOR PEOPLE + TRANSFORMATIVE HABITATS}$$
  * Architecture imagery strictly anchors the complementary 45%–55% visual column behind crisp black structural rules.
* Three-part architectural manifesto bar: `01.1 DISCIPLINE`, `01.2 HUMAN SCALE`, `01.3 PERMANENCE`.

#### Project Presentation & Oversized Numbering
* Projects are framed as individual architectural presentation sheets led by bold, oversized numbers:
  ```
  01
  RESIDENCE 01
  Residential · Mumbai · 2026
  [ FULL-WIDTH RECTILINEAR PHOTOGRAPHY ]
  ```
* **Hover Interaction**: Hovering reveals an architectural red indicator square `■` beside the project title; the image undergoes a subtle opacity shift while the number remains commanding black.

#### Typography & Palette
* The most typographically assertive concept. Oversized numerals (`01`, `02`, `03`) define the layout architecture, counterbalanced by crisp Typewriter labels.
* Muted red is used with extreme restraint—reserved strictly for micro-indicators and selected active states.

#### Best Suited For
A studio that wants an iconic, art-directed, design-forward identity that stands boldly apart from conventional competitor portfolios.

**Keywords**: *Swiss · Brutalist · Typography · Minimal · Bold*

---

```
================================================================================
04 — ARCHITECTURAL JOURNAL / FULL-SCREEN STORY
================================================================================
```

> *"This direction designs the website as a digital architecture magazine and visual story, where the user moves through an editorial publication rather than browsing a conventional portfolio."*

#### Visual Character
* **Tone**: Immersive, editorial publication, cinematographic, narrative-driven, full-bleed.
* **Atmosphere**: Translates the experience of slowly turning the pages of an oversized architectural periodical (*El Croquis*, *A+U*, *Detail Magazine*).

#### Layout & Composition
* Completely abandons typical landing page and card structures in favor of **Full-Screen Viewport Chapters** (`min-height: 85vh`–`95vh`):
  * **CHAPTER 01**: Full-screen prologue plate with vertical story spine indicator (`01 · 02 · 03 · 04`).
  * **CHAPTER 02**: Full-screen typographic manifesto statement (*"DESIGN FOR PEOPLE + TRANSFORMATIVE HABITATS"*).
  * **CHAPTER 03**: Split feature spread pairing architectural rationale with high-definition photography.
  * **CHAPTER 04**: Monographic full-screen project feature with direct article reading link.
* **Story Spine Indicator**: A discreet vertical progress axis (`01`, `02`, `03`, `04`) affixed to the margin, tracking the visitor's reading position through the visual chapters.

#### Project Presentation: Vertical Editorial Sequence
* Does not use a conventional card grid. Projects are presented as an uninterrupted **Vertical Editorial Sequence**:
  ```
  01
  AURA RESIDENCE
  MUMBAI · 2026 · RESIDENTIAL
  [ IMMENSE FULL-WIDTH PHOTOGRAPHY FRAME ]

  02
  TERRACOTTA MONOLITH
  AHMEDABAD · 2025 · CULTURAL
  [ IMMENSE FULL-WIDTH PHOTOGRAPHY FRAME ]
  ```
* Each project occupies a substantial portion of the viewport, with calm scroll-based transitions.
* **Hover Interaction**: Minimalist and calm—subtle image opacity change (`opacity: 0.96`), title micro-shift (+4px), and appearance of a tiny muted-red square marker (`■`).

#### About Page as an Editorial Manifesto
* Replaces standard bio paragraphs with an architectural manifesto spread:
  * Giant typographic headings: **DESIGN FOR PEOPLE** + **TRANSFORMATIVE HABITATS** with overlapping image and text compositions.
  * Practice Trajectory chronology (`2019 FOUNDATION`, `2022 FIRST MONOGRAPH`, `2024 REGIONAL MERIT`, `2026 HABITAT INITIATIVE`).
  * Asymmetric, large-format partner portraits.

#### Project Detail as a Magazine Monograph
* Structured like turning to an individual article in an architecture journal:
  * Chapter number & article header (`VOL. 04 / ARTICLE 01`).
  * Hero photographic plate.
  * Editorial narrative essay.
  * Monograph specification table (`PROGRAM`, `SCALE`, `MATERIALS`, `STATUS`).
  * Multi-image architectural spreads and drawing plates.
  * "NEXT ARTICLE →" footer transition.

#### Best Suited For
A practice that wants its digital presence to feel like a published physical monograph, elevating each commission into a cinematic, deeply considered spatial story.

**Keywords**: *Journal · Visual Story · Full-Screen · Magazine · Narrative*

---

### SIDE-BY-SIDE COMPARISON OF ALL 4 DIRECTIONS

| Dimension | Option 01: Contemporary Editorial | Option 02: Exhibition Catalogue | Option 03: Swiss / Brutalist Archive | Option 04: Architectural Journal |
| :--- | :--- | :--- | :--- | :--- |
| **Overall Feel** | Refined & Editorial | Structured & Curatorial | Bold & Typographic | Immersive & Narrative |
| **Main Focus** | Photography & Whitespace | Grid & Drawing Sheet | Typography & Scale | Full-Screen Story & Chapters |
| **Layout Rhythm** | Classical Portfolio Flow | Sheet Borders & Project Index | Architectural Sheet Layout | Full-Screen Viewport Chapters |
| **Project Display** | Asymmetric Visual Cards | Interactive Table + Preview | Oversized Numbered Plates | Vertical Editorial Sequence |
| **Story Progression** | Continuous Page Scroll | Indexed Curatorial Sheets | Strict Column Alignment | Chapter Spine Indicator (`01–04`) |
| **Typography** | Elegant Sans + Mono labels | Monospace / Serialized | Bold Swiss + Monospace details | Editorial Display + Magazine Body |
| **Primary Interaction**| Card Hover Fade & Scale | Hover Index Image Reveal | Micro-indicator Square Reveal | Calm Title Shift & Red Marker |
| **Visual Personality** | Polished & Prestigious | Intellectual & Archival | Conceptual & Commanding | Cinematographic & Monographic |

---

### WHAT REMAINS CONSISTENT ACROSS ALL OPTIONS

Selecting any of the four visual directions **will not alter** the underlying features or structural integrity:

1. **Pages**: Home, About, Projects, Individual Project Dossiers, Contact.
2. **Sticky Navigation**: Studio De.PTH logo pinned on the left, index navigation on the right.
3. **Filtering Engine**: Instant filtering by **`TOPOLOGY`** and **`LOCATION`** only.
4. **Dedicated Project Views**: Clicking any project isolates its narrative, drawings, specification table, and gallery—hiding all other projects.
5. **Real Map Integration**: Embedded interactive Google Map centered on Mumbai with architectural grayscale styling.
6. **No Contact Forms**: Communication remains direct and accessible via `<a href="mailto:hello@studiodepth.com">`.
7. **Performance & Standards**: Fast page loads, Next.js static optimization, accessible markup, and zero external backend overhead.

---

### WHAT CHANGES

The choice is purely an aesthetic, structural, and brand positioning decision:
* **Visual Hierarchy**: Whether photography (01), drawing grid (02), typography (03), or narrative chapters (04) leads the first impression.
* **Project Discovery**: Whether visitors browse via editorial cards (01), a catalogue index (02), oversized exhibition sheets (03), or a vertical editorial sequence (04).
* **Brand Persona**: Polished contemporary practice (01) vs. Academic research atelier (02) vs. Avant-garde design voice (03) vs. Digital architectural journal (04).

---

### CLIENT REVIEW & FEEDBACK

Which visual direction feels most aligned with the vision for Studio De.PTH?

```
[   ]  OPTION 01: Contemporary Architecture Editorial
       (Photography-led · Refined · Spacious · Editorial)

[   ]  OPTION 02: Architectural Grid / Exhibition Catalogue
       (Grid-based · Interactive Project Index · Archive feeling)

[   ]  OPTION 03: Ultra-Minimal Swiss / Brutalist Archive
       (Typography-led · Oversized Numbers · Bold · Structured)

[   ]  OPTION 04: Architectural Journal / Full-Screen Story
       (Full-Screen Chapters · Vertical Sequence · Editorial Publication)
```

#### Client Notes & Observations:

```
__________________________________________________________________________________________

__________________________________________________________________________________________

__________________________________________________________________________________________

__________________________________________________________________________________________
```

---

### NEXT STEPS

Once the preferred visual direction is chosen, we will:
1. Integrate the studio's finalized copy, mission statement, and philosophy.
2. Incorporate actual high-resolution project photography and floor plans.
3. Replace founder placeholders with biographical portraits and credentials.
4. Confirm exact atelier coordinates and communication channels.

*Studio De.PTH — Design for People + Transformative Habitats*
