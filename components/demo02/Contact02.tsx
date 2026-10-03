'use client';

import RealMap from '@/components/RealMap';

export default function Contact02() {
  return (
    <div className="demo02-canvas section-padding">
      <div className="container">
        {/* Exhibition Sheet Top */}
        <div className="demo02-sheet-header">
          <div className="demo02-meta-badge">
            <span className="demo02-red-mark">■</span>
            <span>EXHIBITION SPECIFICATION / SECTION 04</span>
          </div>
          <div className="demo02-meta-badge">
            <span>COMMISSIONS & ENQUIRIES</span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: '48px' }}>
          <h1 className="demo02-catalogue-title">COMMISSIONS & CONTACT</h1>
          <p className="demo02-sub-label">
            DIRECT INQUIRIES FOR ARCHITECTURAL RESEARCH, COMMISSIONS & MONOGRAPHS
          </p>
        </div>

        {/* Technical Specification Grid */}
        <div className="demo02-contact-grid">
          {/* Left Column: Direct Inquiries */}
          <div className="demo02-contact-panel">
            <div className="demo02-panel-head">
              <span className="demo02-red-mark">■</span>
              <span>COMMUNICATION CHANNEL [EMAIL]</span>
            </div>

            <div className="demo02-panel-content">
              <p className="demo02-dossier-p" style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
                We welcome discussions regarding architectural commissions, spatial masterplans,
                and academic inquiries:
              </p>
              <div style={{ marginBottom: '32px' }}>
                <a
                  href="mailto:hello@studiodepth.com"
                  className="demo02-contact-email"
                >
                  hello@studiodepth.com
                </a>
              </div>

              <div className="demo02-tech-notes">
                <div className="tech-note-row">
                  <span className="tech-key">COMMISSION TYPES</span>
                  <span className="tech-val">Residential, Cultural, Pavilion, Spatial Research</span>
                </div>
                <div className="tech-note-row">
                  <span className="tech-key">LOCATION</span>
                  <span className="tech-val">Mumbai Atelier (Visits by prior schedule)</span>
                </div>
                <div className="tech-note-row">
                  <span className="tech-key">RESPONSE TIME</span>
                  <span className="tech-val">Within 48 hours for verified inquiries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Interactive Map */}
          <div className="demo02-contact-panel">
            <div className="demo02-panel-head">
              <span className="demo02-red-mark">■</span>
              <span>CARTOGRAPHY & SATELLITE LOCATOR</span>
            </div>

            <div className="demo02-panel-content">
              <RealMap variant="catalogue" height="380px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
