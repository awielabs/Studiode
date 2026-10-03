'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home04() {
  const featured = projects.slice(0, 3);

  return (
    <div className="demo04-story-canvas">
      {/* Side Chapter Story Index Spine */}
      <aside className="demo04-story-spine" aria-label="Journal Story Progression">
        <span className="spine-tag">VOL. 04</span>
        <div className="spine-dots">
          <a href="#chapter-01" className="spine-link" title="Chapter 01: Prologue">01</a>
          <span className="spine-sep">·</span>
          <a href="#chapter-02" className="spine-link" title="Chapter 02: Manifesto">02</a>
          <span className="spine-sep">·</span>
          <a href="#chapter-03" className="spine-link" title="Chapter 03: Feature">03</a>
          <span className="spine-sep">·</span>
          <a href="#chapter-04" className="spine-link" title="Chapter 04: Archive">04</a>
        </div>
      </aside>

      {/* CHAPTER 01: Full-Screen Visual Prologue */}
      <section id="chapter-01" className="demo04-chapter demo04-fullscreen-hero">
        <div className="demo04-hero-bg-frame">
          <Image
            src="/hero.jpg"
            alt="Studio De.PTH Architectural Monograph"
            fill
            priority
            sizes="100vw"
            className="demo04-hero-img"
          />
          <div className="demo04-hero-overlay" />
        </div>

        <div className="demo04-chapter-overlay-content">
          <div className="container">
            <div className="demo04-chapter-header-bar">
              <span className="demo04-issue-stamp">JOURNAL ISSUE 2026 / CHAPTER 01</span>
              <span className="demo04-issue-loc">MUMBAI · RESEARCH ATELIER</span>
            </div>

            <div className="demo04-hero-story-titles">
              <span className="demo04-kicker">STUDIO DE.PTH · SPECIAL MONOGRAPH</span>
              <h1 className="demo04-hero-headline">
                DESIGN FOR PEOPLE +
                <br />
                TRANSFORMATIVE
                <br />
                HABITATS.
              </h1>
              <p className="demo04-hero-subtitle">
                A visual publication investigating light, tectonic permanence, and human-centric shelter.
              </p>
            </div>

            <div className="demo04-chapter-footer-bar">
              <div className="demo04-meta-note">
                <span>COVER FEATURE</span>
                <strong>PLATE 001 — REFLECTION PAVILION</strong>
              </div>
              <a href="#chapter-02" className="demo04-scroll-prompt">
                <span>SCROLL STORY</span>
                <span className="prompt-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 02: Full-Screen Typographic Manifesto */}
      <section id="chapter-02" className="demo04-chapter demo04-manifesto-chapter">
        <div className="container">
          <div className="demo04-chapter-badge">
            <span className="badge-red">■</span>
            <span>CHAPTER 02 / EDITORIAL MANIFESTO</span>
          </div>

          <div className="demo04-manifesto-layout">
            <div className="demo04-quote-col">
              <blockquote className="demo04-editorial-quote">
                &ldquo;Architecture is not a decorative backdrop on the skyline.
                It is the quiet, daily calibration of space, shadow, and human ritual.&rdquo;
              </blockquote>
              <div className="demo04-author-strip">
                <span>STUDIO DE.PTH PRACTICE PHILOSOPHY</span>
                <span>ISSUE MONOGRAPH</span>
              </div>
            </div>

            <div className="demo04-essay-col">
              <p className="demo04-essay-p">
                We believe in the dignity of everyday habitats. Our work eschews fleeting aesthetic
                posturing in favor of deep climatic listening, contextual materiality, and proportional
                restraint. Every threshold, aperture, and courtyard is carved to heighten sensory awareness.
              </p>
              <p className="demo04-essay-p">
                From monolithic concrete to hand-fired terracotta, materials are chosen not for novelty,
                but for how gracefully they age under regional monsoon rains and relentless sun.
              </p>
              <div className="demo04-story-cta">
                <Link href="/about" className="demo04-text-btn">
                  READ THE FULL ATELIER DOSSIER →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 03: Split Monograph Feature Spread */}
      <section id="chapter-03" className="demo04-chapter demo04-feature-chapter">
        <div className="container">
          <div className="demo04-chapter-badge" style={{ marginBottom: '32px' }}>
            <span className="badge-red">■</span>
            <span>CHAPTER 03 / BUILT MONOGRAPH INVESTIGATION</span>
          </div>

          <div className="demo04-spread-grid">
            {/* Left Story Image Plate */}
            <div className="demo04-spread-visual">
              <div className="demo04-spread-image-wrapper">
                <Image
                  src={featured[0].coverImage}
                  alt={featured[0].title}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="demo04-spread-img"
                />
              </div>
              <div className="demo04-plate-legend">
                <span>FIGURE 01 — {featured[0].title.toUpperCase()}</span>
                <span>{featured[0].location.toUpperCase()} / {featured[0].year}</span>
              </div>
            </div>

            {/* Right Story Text Column */}
            <div className="demo04-spread-narrative">
              <div className="demo04-num-label">{featured[0].number} / ARTICLE</div>
              <h2 className="demo04-spread-title">{featured[0].title}</h2>
              {featured[0].subtitle && (
                <p className="demo04-spread-kicker">{featured[0].subtitle}</p>
              )}
              <div className="demo04-spec-strip">
                <div><span>PROGRAM</span> {featured[0].topology}</div>
                <div><span>LOCATION</span> {featured[0].location}</div>
                <div><span>CHRONOLOGY</span> {featured[0].year}</div>
              </div>
              <p className="demo04-spread-body">
                {featured[0].description}
              </p>
              <div style={{ marginTop: '36px' }}>
                <Link
                  href={`/projects/${featured[0].slug}`}
                  className="demo04-read-monograph-btn"
                >
                  VIEW ARTICLE DOSSIER ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 04: Editorial Archive Sequence */}
      <section id="chapter-04" className="demo04-chapter demo04-archive-chapter">
        <div className="container">
          <div className="demo04-chapter-badge" style={{ marginBottom: '40px' }}>
            <span className="badge-red">■</span>
            <span>CHAPTER 04 / CHRONOLOGICAL INDEX</span>
          </div>

          <div className="demo04-archive-banner">
            <div>
              <h2 className="demo04-archive-heading">RECENT ESSAYS & BUILT COMMISSIONS</h2>
              <p className="demo04-archive-sub">A curated chronological sequence of realized habitats.</p>
            </div>
            <Link href="/projects" className="demo04-view-all-link">
              VIEW COMPLETE ARCHIVE [4] →
            </Link>
          </div>

          <div className="demo04-stories-stream">
            {projects.slice(1, 4).map((project, idx) => (
              <article key={project.slug} className="demo04-stream-item">
                <Link href={`/projects/${project.slug}`} className="demo04-stream-link">
                  <div className="demo04-stream-image-box">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 40vw"
                      className="demo04-stream-img"
                    />
                  </div>

                  <div className="demo04-stream-info">
                    <div className="stream-header-meta">
                      <span className="stream-vol">VOL. {String(idx + 2).padStart(2, '0')}</span>
                      <span className="stream-spec">{project.topology} · {project.year}</span>
                    </div>
                    <h3 className="stream-title">{project.title}</h3>
                    <p className="stream-sub">{project.subtitle || project.location}</p>
                    <p className="stream-desc">{project.description.slice(0, 150)}...</p>
                    <span className="stream-read">READ ARTICLE →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
