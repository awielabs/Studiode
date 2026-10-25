'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, clientTrialWorks, ClientTrialWork } from '@/data/projects';

export default function Home04() {
  const featured = projects.slice(0, 3);
  const [selectedTrial, setSelectedTrial] = useState<ClientTrialWork | null>(null);

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
          <span className="spine-sep">·</span>
          <a href="#chapter-05" className="spine-link" title="Chapter 05: In-Situ Dispatches">05</a>
        </div>
      </aside>

      {/* CHAPTER 01: Full-Screen Visual Prologue — Featuring Client Work */}
      <section id="chapter-01" className="demo04-chapter demo04-fullscreen-hero">
        <div className="demo04-hero-bg-frame">
          <Image
            src="/client-trial/client-05-borivali-station.jpg"
            alt="Studio De.PTH Architectural Monograph — Borivali Station Civic Plaza"
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
              <span className="demo04-issue-loc">BORIVALI, MUMBAI · IN SITU DOCUMENTATION</span>
            </div>

            <div className="demo04-hero-story-titles">
              <span className="demo04-kicker">STUDIO DE.PTH · BUILT HABITATS IN SITU</span>
              <h1 className="demo04-hero-headline">
                DESIGN FOR PEOPLE +
                <br />
                TRANSFORMATIVE
                <br />
                HABITATS.
              </h1>
              <p className="demo04-hero-subtitle">
                A visual publication investigating pedestrian concourses, public pauses, and human-scale civic lighting.
              </p>
            </div>

            <div className="demo04-chapter-footer-bar">
              <div className="demo04-meta-note">
                <span>COVER FEATURE</span>
                <strong>BORIVALI STATION CIVIC PLAZA & CURVILINEAR GROUND LIGHTING</strong>
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
                restraint. Every threshold, public concourse, and communal bench is carved to heighten somatic awareness.
              </p>
              <p className="demo04-essay-p">
                From monolithic concrete to embedded ground lighting ribbons, interventions are calibrated
                not for novelty, but for how people interact, gather, and pause amidst the kinetic speed of Mumbai.
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

      {/* CHAPTER 03: Split Monograph Feature Spread — Featuring Client Work */}
      <section id="chapter-03" className="demo04-chapter demo04-feature-chapter">
        <div className="container">
          <div className="demo04-chapter-badge" style={{ marginBottom: '32px' }}>
            <span className="badge-red">■</span>
            <span>CHAPTER 03 / MICRO-HABITAT INVESTIGATION</span>
          </div>

          <div className="demo04-spread-grid">
            {/* Left Story Image Plate */}
            <div className="demo04-spread-visual">
              <div className="demo04-spread-image-wrapper">
                <Image
                  src="/client-trial/client-01-urban-swing.png"
                  alt="Urban Swing / Spatial Pause"
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className="demo04-spread-img"
                />
              </div>
              <div className="demo04-plate-legend">
                <span>FIGURE 01 — URBAN SWING / MICRO-HABITAT</span>
                <span>SOUTH MUMBAI / 2025</span>
              </div>
            </div>

            {/* Right Story Text Column */}
            <div className="demo04-spread-narrative">
              <div className="demo04-num-label">01 / ARTICLE FEATURE</div>
              <h2 className="demo04-spread-title">URBAN SWING & SPATIAL PAUSE</h2>
              <p className="demo04-spread-kicker">Kinetic Street Furniture Canopy · South Mumbai</p>
              <div className="demo04-spec-strip">
                <div><span>PROGRAM</span> Micro-Infrastructure</div>
                <div><span>LOCATION</span> South Mumbai</div>
                <div><span>CHRONOLOGY</span> 2025</div>
              </div>
              <p className="demo04-spread-body">
                Positioned directly adjacent to dense vehicular traffic, this kinetic swing structure
                creates an unexpected pocket of play and contemplative pause. Built with industrial steel
                framing and suspended seating, the installation reframes the commuter&apos;s perception of urban speed.
              </p>
              <div style={{ marginTop: '36px' }}>
                <a
                  href="#chapter-05"
                  className="demo04-read-monograph-btn"
                >
                  VIEW ALL 05 IN-SITU DISPATCHES ↓
                </a>
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

          <div className="demo04-archive-stream">
            {featured.map((p, idx) => (
              <article key={p.slug} className="demo04-stream-item">
                <div className="demo04-stream-meta">
                  <span className="demo04-stream-num">{p.number}</span>
                  <div className="demo04-stream-title-group">
                    <h3 className="demo04-stream-name">{p.title}</h3>
                    <p className="demo04-stream-tag">{p.topology} · {p.location} · {p.year}</p>
                  </div>
                </div>

                <div className="demo04-stream-media">
                  <Link href={`/projects/${p.slug}`} className="demo04-stream-link">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 75vw"
                      className="demo04-stream-img"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 05: In-Situ Field Dispatches (05 Client Trial Photographs) */}
      <section id="chapter-05" className="demo04-chapter demo04-dispatches-chapter">
        <div className="container">
          <div className="demo04-chapter-badge">
            <span className="badge-red">■</span>
            <span>CHAPTER 05 / IN-SITU FIELD DISPATCHES (05 CLIENT TRIAL PHOTOGRAPHS)</span>
          </div>

          <div style={{ marginTop: '24px', maxWidth: '780px' }}>
            <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              BUILT HABITATS IN SITU: <br />
              <span style={{ color: 'var(--accent)' }}>05 REALIZED COMMISSIONS</span>
            </h2>
            <p className="typewriter-label" style={{ color: 'var(--muted)', marginTop: '12px', lineHeight: '1.7' }}>
              Full-screen visual story plates documenting Studio De.PTH public realm interventions,
              civic concourses, and community seating across the Mumbai metropolitan region.
            </p>
          </div>

          <div className="demo04-dispatches-grid">
            {clientTrialWorks.map((work) => (
              <article
                key={work.id}
                className={`demo04-dispatch-card ${work.spanClass}`}
                onClick={() => setSelectedTrial(work)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTrial(work);
                  }
                }}
                aria-label={`View journal dispatch plate for ${work.title}`}
              >
                <div className="typewriter-label" style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', color: 'var(--muted)', fontSize: '0.7rem' }}>
                  <span>VOL. 04 / DISPATCH #{work.numberShort}</span>
                  <span>{work.year}</span>
                </div>

                <div className={`demo04-dispatch-frame ${work.aspectClass}`}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="client-trial-img"
                  />
                </div>

                <div className="demo04-dispatch-meta">
                  <div className="demo04-dispatch-headline">
                    <span>{work.title}</span>
                    <span className="typewriter-label" style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                      {work.location}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#555', marginTop: '6px', lineHeight: '1.6' }}>
                    {work.description}
                  </p>
                  <div className="typewriter-label" style={{ fontSize: '0.68rem', color: 'var(--accent)', marginTop: '8px' }}>
                    [+] VIEW FULL MAGAZINE PLATE ↗
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedTrial && (
        <div
          className="client-trial-modal-overlay"
          onClick={() => setSelectedTrial(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="client-trial-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="client-trial-modal-close-btn"
              onClick={() => setSelectedTrial(null)}
              aria-label="Close magazine plate"
            >
              [✕ CLOSE]
            </button>

            <div>
              <div className="typewriter-label typewriter-accent" style={{ marginBottom: '4px' }}>
                JOURNAL VOL. 04 · DISPATCH #{selectedTrial.numberShort} · {selectedTrial.year}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  letterSpacing: '0.06em',
                }}
              >
                {selectedTrial.title}
              </h3>
              <div className="typewriter-label" style={{ color: 'var(--muted)', marginTop: '4px' }}>
                {selectedTrial.category} · {selectedTrial.location}
              </div>
            </div>

            <div className="client-trial-modal-media">
              <Image
                src={selectedTrial.image}
                alt={selectedTrial.title}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--foreground)' }}>
              {selectedTrial.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
