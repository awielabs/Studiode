'use client';

import Image from 'next/image';

export default function About03() {
  return (
    <div className="demo03-canvas section-padding">
      <div className="container">
        {/* Top Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="demo03-label-tag">02 / ABOUT</span>
          <h1 className="demo03-archive-h1">STUDIO DE.PTH</h1>
          <p className="demo03-label-tag" style={{ marginTop: '8px' }}>
            ARCHITECTURAL PRACTICE & SPATIAL RESEARCH DOSSIER
          </p>
        </div>

        {/* Section 01: The Studio */}
        <section className="demo03-doc-section">
          <div className="demo03-doc-col-left">
            <span className="demo03-doc-num">01</span>
            <span className="demo03-doc-title">THE STUDIO</span>
          </div>
          <div className="demo03-doc-col-right">
            <h2 className="demo03-manifesto-heading">
              DESIGN FOR PEOPLE.
              <br />
              TRANSFORMATIVE HABITATS.
            </h2>
            <p className="demo03-doc-text">
              Studio De.PTH was founded as a collaborative spatial practice dedicated to the
              investigation of human proportion, natural material permanence, and low-impact
              enclosures. We design spaces that nurture daily contemplation and communal harmony.
            </p>
            <p className="demo03-doc-text">
              Our research approaches each site as an organic continuum of climate, light, and
              geological memory. We reject ornament for tectonic truth.
            </p>
          </div>
        </section>

        {/* Section 02: Founders */}
        <section className="demo03-doc-section">
          <div className="demo03-doc-col-left">
            <span className="demo03-doc-num">02</span>
            <span className="demo03-doc-title">FOUNDING PARTNERS</span>
          </div>
          <div className="demo03-doc-col-right">
            <div className="demo03-founders-grid">
              {/* Founder 1 */}
              <div className="demo03-founder-box">
                <div className="demo03-founder-imgwrap">
                  <Image
                    src="/founders/founder-01.jpg"
                    alt="Founder / Architect"
                    fill
                    sizes="400px"
                    className="demo03-founder-portrait"
                  />
                </div>
                <div className="demo03-founder-label">
                  <span className="f-num">01</span>
                  <div>
                    <div className="f-name">FOUNDER NAME</div>
                    <div className="f-role">Founder / Principal Architect</div>
                  </div>
                </div>
                <p className="demo03-doc-text" style={{ fontSize: '0.9rem' }}>
                  Leading architectural conceptualization, spatial volumetrics, and construction
                  craftsmanship. (Information placeholder to be provided by client).
                </p>
              </div>

              {/* Founder 2 */}
              <div className="demo03-founder-box">
                <div className="demo03-founder-imgwrap">
                  <Image
                    src="/founders/founder-02.jpg"
                    alt="Founder / Architect"
                    fill
                    sizes="400px"
                    className="demo03-founder-portrait"
                  />
                </div>
                <div className="demo03-founder-label">
                  <span className="f-num">02</span>
                  <div>
                    <div className="f-name">FOUNDER NAME</div>
                    <div className="f-role">Founder / Principal Architect</div>
                  </div>
                </div>
                <p className="demo03-doc-text" style={{ fontSize: '0.9rem' }}>
                  Directing environmental research, material sustainability, and regional microclimates.
                  (Information placeholder to be provided by client).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: History */}
        <section className="demo03-doc-section">
          <div className="demo03-doc-col-left">
            <span className="demo03-doc-num">03</span>
            <span className="demo03-doc-title">CHRONOLOGY</span>
          </div>
          <div className="demo03-doc-col-right">
            <div className="demo03-chronology-stack">
              <div className="demo03-chron-item">
                <span className="chron-yr">2024</span>
                <span className="chron-event">FOUNDATION & RESEARCH MANIFESTO</span>
                <p className="chron-desc">Founding of Studio De.PTH practice in Mumbai, centering on transformative human environments.</p>
              </div>

              <div className="demo03-chron-item">
                <span className="chron-yr">2025</span>
                <span className="chron-event">INITIAL COMMISSIONS & HABITAT STUDIES</span>
                <p className="chron-desc">Completion of inaugural residential pavilions and regional cultural centre investigations.</p>
              </div>

              <div className="demo03-chron-item">
                <span className="chron-yr">2026</span>
                <span className="chron-event">REGIONAL MONOGRAPHS & EXPANSION</span>
                <p className="chron-desc">Broadening multi-scale commissions across India, international research dialogues, and practice studio development.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
