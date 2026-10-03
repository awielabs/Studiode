'use client';

export default function Contact03() {
  return (
    <div className="demo03-canvas section-padding">
      <div className="container">
        {/* Top Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="demo03-label-tag">04 / CONTACT</span>
          <h1 className="demo03-archive-h1">COMMISSIONS & ENQUIRIES</h1>
          <p className="demo03-label-tag" style={{ marginTop: '8px' }}>
            DIRECT COMMUNICATION DISPATCH
          </p>
        </div>

        {/* 2-Column Swiss Contact Grid */}
        <div className="demo03-contact-grid">
          {/* Left: Email & Inquiries */}
          <div className="demo03-contact-left">
            <div className="demo03-contact-block">
              <span className="demo03-label-tag">PRIMARY DISPATCH</span>
              <div style={{ marginTop: '16px', marginBottom: '24px' }}>
                <a
                  href="mailto:hello@studiodepth.com"
                  className="demo03-email-headline"
                >
                  hello@studiodepth.com
                </a>
              </div>
              <p className="demo03-doc-text" style={{ fontSize: '0.95rem' }}>
                For new project commissions, academic symposiums, and spatial research inquiries.
                Direct communication preferred.
              </p>
            </div>

            <div className="demo03-contact-block" style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <span className="demo03-label-tag">PRACTICE ATELIER</span>
              <p className="demo03-doc-text" style={{ marginTop: '12px', fontSize: '0.95rem' }}>
                MUMBAI / REGIONAL SITES<br />
                Atelier consultations by scheduled appointment only.
              </p>
            </div>
          </div>

          {/* Right: Strict Rectangular Map Placeholder */}
          <div className="demo03-contact-right">
            <span className="demo03-label-tag">CARTOGRAPHIC LOCATOR</span>
            <div className="demo03-swiss-map-box">
              <div className="swiss-map-inner">
                <div className="swiss-crosshair" style={{ top: '50%', left: '50%' }} />
                <div className="swiss-map-pin">
                  <span className="swiss-pin-dot">■</span>
                  <span className="swiss-pin-text">STUDIO DE.PTH / MUMBAI</span>
                </div>
                <div className="swiss-coord-nw">18°58&apos;N / 72°49&apos;E</div>
                <div className="swiss-coord-se">SCALE 1:5000 METRIC</div>
              </div>
              <div className="swiss-map-caption">
                <span>LOCATION: MUMBAI / MAHARASHTRA / INDIA</span>
                <span>[ADDRESS NOT YET FORMALIZED]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
