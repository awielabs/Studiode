'use client';

import Image from 'next/image';

export default function About02() {
  return (
    <div className="demo02-canvas section-padding">
      <div className="container">
        {/* Exhibition Sheet Top */}
        <div className="demo02-sheet-header">
          <div className="demo02-meta-badge">
            <span className="demo02-red-mark">■</span>
            <span>EXHIBITION DOSSIER / SECTION 02</span>
          </div>
          <div className="demo02-meta-badge">
            <span>PRACTICE PROFILE: STUDIO DE.PTH</span>
          </div>
        </div>

        {/* Large Dossier Title */}
        <div style={{ marginBottom: '60px' }}>
          <h1 className="demo02-catalogue-title">STUDIO DOSSIER</h1>
          <p className="demo02-sub-label">
            PRACTICE ORIGINS, LEADERSHIP & ARCHITECTURAL MANIFESTO
          </p>
        </div>

        {/* 01 / The Studio */}
        <section className="demo02-dossier-row">
          <div className="demo02-dossier-left">
            <span className="demo02-dossier-num">01</span>
            <span className="demo02-dossier-tag">THE STUDIO</span>
          </div>
          <div className="demo02-dossier-right">
            <p className="demo02-dossier-p">
              Studio De.PTH is a contemporary architecture and spatial design practice dedicated
              to people-focused transformative habitats. We examine how proportional clarity,
              unadorned materiality, and natural daylight generate timeless environments.
            </p>
            <p className="demo02-dossier-p">
              Every project begins through deep environmental listening, regional climate responses,
              and structural discipline. We privilege quiet permanence over fleeting architectural trends.
            </p>
          </div>
        </section>

        {/* 02 / The Founders */}
        <section className="demo02-dossier-row">
          <div className="demo02-dossier-left">
            <span className="demo02-dossier-num">02</span>
            <span className="demo02-dossier-tag">THE FOUNDERS</span>
          </div>
          <div className="demo02-dossier-right">
            <div className="demo02-founders-stack">
              {/* Founder 1 */}
              <div className="demo02-founder-entry">
                <div className="demo02-founder-portrait-box">
                  <Image
                    src="/founders/founder-01.jpg"
                    alt="Founder / Architect"
                    width={400}
                    height={500}
                    className="demo02-founder-img"
                  />
                  <div className="demo02-plate-caption">
                    <span>FIGURE 4.1 — PRINCIPAL ARCHITECT</span>
                  </div>
                </div>
                <div className="demo02-founder-info">
                  <div className="founder-id-tag">PARTNER 01</div>
                  <h3 className="founder-title-text">FOUNDER NAME</h3>
                  <div className="founder-role-sub">Architect / Founding Principal</div>
                  <p className="demo02-dossier-p" style={{ fontSize: '0.95rem' }}>
                    Overseeing architectural research, spatial articulation, and structural craftsmanship.
                    (Information placeholder to be provided by client).
                  </p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="demo02-founder-entry">
                <div className="demo02-founder-portrait-box">
                  <Image
                    src="/founders/founder-02.jpg"
                    alt="Founder / Architect"
                    width={400}
                    height={500}
                    className="demo02-founder-img"
                  />
                  <div className="demo02-plate-caption">
                    <span>FIGURE 4.2 — PRINCIPAL ARCHITECT</span>
                  </div>
                </div>
                <div className="demo02-founder-info">
                  <div className="founder-id-tag">PARTNER 02</div>
                  <h3 className="founder-title-text">FOUNDER NAME</h3>
                  <div className="founder-role-sub">Architect / Founding Principal</div>
                  <p className="demo02-dossier-p" style={{ fontSize: '0.95rem' }}>
                    Directing ecological habitat integration, material tectonics, and environmental geometry.
                    (Information placeholder to be provided by client).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / The Story & Chronology */}
        <section className="demo02-dossier-row">
          <div className="demo02-dossier-left">
            <span className="demo02-dossier-num">03</span>
            <span className="demo02-dossier-tag">CHRONOLOGY</span>
          </div>
          <div className="demo02-dossier-right">
            <div className="demo02-timeline-lines">
              <div className="demo02-timeline-row">
                <span className="timeline-yr">2024</span>
                <div className="timeline-detail">
                  <span className="timeline-headline">FOUNDATION OF PRACTICE</span>
                  <p className="timeline-subtext">Establishment of Studio De.PTH dedicated to research on human-centered habitats.</p>
                </div>
              </div>

              <div className="demo02-timeline-row">
                <span className="timeline-yr">2025</span>
                <div className="timeline-detail">
                  <span className="timeline-headline">FIRST COMMISSIONS & PAVILIONS</span>
                  <p className="timeline-subtext">Realization of initial residential enclosures and regional cultural monographs.</p>
                </div>
              </div>

              <div className="demo02-timeline-row">
                <span className="timeline-yr">2026</span>
                <div className="timeline-detail">
                  <span className="timeline-headline">TERRITORIAL EXPANSION</span>
                  <p className="timeline-subtext">Expanding multi-scale spatial research, cross-disciplinary collaborations, and publications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / Philosophy */}
        <section className="demo02-dossier-row" style={{ borderBottom: 'none' }}>
          <div className="demo02-dossier-left">
            <span className="demo02-dossier-num">04</span>
            <span className="demo02-dossier-tag">PHILOSOPHY</span>
          </div>
          <div className="demo02-dossier-right">
            <p className="demo02-dossier-p" style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
              &ldquo;Space, daylight, and silence remain our primary construction materials.
              We believe a well-considered habitat elevates everyday life through proportion,
              shadow, and honest textures.&rdquo;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
