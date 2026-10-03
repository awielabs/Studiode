'use client';

import Image from 'next/image';

export default function About04() {
  return (
    <div className="demo04-story-canvas section-padding">
      <div className="container">
        {/* Editorial Masthead */}
        <div className="demo04-journal-header">
          <div className="journal-issue-tag">
            <span className="badge-red">■</span> ATELIER MANIFESTO · DOSSIER ISSUE 04
          </div>
          <h1 className="journal-main-title">PRACTICE MANIFESTO</h1>
          <p className="journal-main-subtitle">
            An editorial inquiry into human proportions, silence, and tectonic permanence.
          </p>
        </div>

        {/* Section 01: Bold Overlapping Manifesto Headline */}
        <section className="demo04-about-hero-spread">
          <div className="about-manifesto-quote-wrap">
            <span className="quote-number">01</span>
            <h2 className="about-manifesto-bigtext">
              DESIGN FOR PEOPLE.
              <br />
              <span className="accent-color">TRANSFORMATIVE</span>
              <br />
              HABITATS.
            </h2>
          </div>

          <div className="about-manifesto-prose-grid">
            <div className="manifesto-left-tag">
              <span className="aside-stamp">THE ATELIER</span>
              <span className="aside-sub">EST. 2024 / MUMBAI</span>
            </div>
            <div className="manifesto-right-text">
              <p className="manifesto-p-lead">
                Studio De.PTH was founded as an architectural laboratory committed to human-centric spaces.
                We believe that the built environment should not scream for attention, but should provide
                a quiet, enduring canvas that elevates daily human existence.
              </p>
              <p className="manifesto-p-sub">
                Our approach investigates the interplay between regional microclimates, raw tactile materials,
                and disciplined spatial geometry. Each commission is treated as a bespoke monograph in light,
                shadow, and atmospheric silence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: Founders Editorial Feature Spread */}
        <section className="demo04-about-founders-spread">
          <div className="founders-spread-head">
            <span className="quote-number">02</span>
            <div>
              <h3 className="founders-spread-title">PRINCIPAL PARTNERS</h3>
              <p className="journal-main-subtitle">Architectural leadership and spatial research direction.</p>
            </div>
          </div>

          <div className="founders-two-spread-grid">
            {/* Founder 1 */}
            <article className="founder-spread-column">
              <div className="founder-portrait-frame">
                <Image
                  src="/founders/founder-01.jpg"
                  alt="Founder / Principal Architect"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="founder-portrait-img"
                />
              </div>
              <div className="founder-caption-box">
                <span className="founder-badge">PARTNER 01</span>
                <h4 className="founder-title">FOUNDER NAME</h4>
                <span className="founder-designation">Founder / Principal Architect</span>
                <p className="founder-bio-text">
                  Directing conceptual research, volumetric proportion, and tectonic construction.
                  (Information placeholder to be provided by client).
                </p>
              </div>
            </article>

            {/* Founder 2 */}
            <article className="founder-spread-column">
              <div className="founder-portrait-frame">
                <Image
                  src="/founders/founder-02.jpg"
                  alt="Founder / Principal Architect"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="founder-portrait-img"
                />
              </div>
              <div className="founder-caption-box">
                <span className="founder-badge">PARTNER 02</span>
                <h4 className="founder-title">FOUNDER NAME</h4>
                <span className="founder-designation">Founder / Principal Architect</span>
                <p className="founder-bio-text">
                  Leading environmental integration, climatic response, and material research.
                  (Information placeholder to be provided by client).
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Section 03: Architectural Monograph Chronology */}
        <section className="demo04-about-chronology">
          <div className="founders-spread-head">
            <span className="quote-number">03</span>
            <div>
              <h3 className="founders-spread-title">PRACTICE TRAJECTORY</h3>
              <p className="journal-main-subtitle">Milestones in spatial investigation and realized works.</p>
            </div>
          </div>

          <div className="chronology-stream-list">
            <div className="chronology-row-entry">
              <div className="chron-col-year">2024</div>
              <div className="chron-col-body">
                <h4 className="chron-heading">STUDIO FOUNDATION & RESEARCH CHARTER</h4>
                <p className="chron-text">Inception of Studio De.PTH in Mumbai with an explicit charter toward human-centered habitats and material authenticity.</p>
              </div>
            </div>

            <div className="chronology-row-entry">
              <div className="chron-col-year">2025</div>
              <div className="chron-col-body">
                <h4 className="chron-heading">INCEPTION OF COMMISSIONS & CULTURAL RESEARCH</h4>
                <p className="chron-text">Completion of residential enclosures and regional cultural monographs exploring climate-responsive concrete and terracotta.</p>
              </div>
            </div>

            <div className="chronology-row-entry">
              <div className="chron-col-year">2026</div>
              <div className="chron-col-body">
                <h4 className="chron-heading">PRACTICE EXPANSION & MONOGRAPH ARCHIVE</h4>
                <p className="chron-text">Broadening interdisciplinary practice, territorial habitat investigations, and published spatial monographs.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
