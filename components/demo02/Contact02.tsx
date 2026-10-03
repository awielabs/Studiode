'use client';

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

          {/* Right Column: Architectural Site Cartography */}
          <div className="demo02-contact-panel">
            <div className="demo02-panel-head">
              <span className="demo02-red-mark">■</span>
              <span>SITE CARTOGRAPHY & COORDINATES</span>
            </div>

            <div className="demo02-panel-content">
              <div className="demo02-map-box">
                <div className="demo02-map-blueprint">
                  <div className="blueprint-crosshair" style={{ top: '30%', left: '40%' }} />
                  <div className="blueprint-crosshair" style={{ top: '65%', left: '75%' }} />
                  
                  {/* Studio Pin */}
                  <div className="blueprint-pin" style={{ top: '48%', left: '50%' }}>
                    <div className="pin-pulse" />
                    <div className="pin-text">■ STUDIO DE.PTH [ATELIER]</div>
                  </div>

                  {/* Corner Coordinates */}
                  <div className="coord-nw">LAT 18°58&apos;42&quot;N</div>
                  <div className="coord-se">LON 72°49&apos;33&quot;E</div>
                </div>

                <div className="demo02-map-footer">
                  <span>LOCATION: MUMBAI METROPOLITAN REGION</span>
                  <span>[PRECISE PHYSICAL ADDRESS NOT CONFIRMED]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
