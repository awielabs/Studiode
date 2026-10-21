'use client';

import SectionLabel from '@/components/SectionLabel';
import RealMap from '@/components/RealMap';

export default function Contact01() {
  return (
    <div className="section-padding demo01-container">
      <div className="container">
        <header className="contact-header" style={{ marginBottom: '40px' }}>
          <SectionLabel number="01" title="COMMISSIONS & INQUIRIES" />
          <h1 className="about-page-title">CONTACT US</h1>
          <p className="typewriter-label">
            Dialogue on Transformative Habitats · Direct Inquiries Only
          </p>
        </header>

        <div className="contact-layout-grid">
          {/* Left Column: Direct inquiries (Strictly NO interactive form) */}
          <div className="contact-info-panel">
            <div>
              <div className="typewriter-label typewriter-accent" style={{ marginBottom: '16px' }}>
                DIRECT INQUIRIES (CLICKABLE EMAIL)
              </div>
              <p style={{ marginBottom: '16px', fontSize: '1rem', color: 'var(--foreground)' }}>
                For project commissions, collaboration proposals, or press dialogue:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href="mailto:hello@studiodepth.com"
                  className="contact-email-link"
                >
                  hello@studiodepth.com →
                </a>
                <a
                  href="mailto:contact@studiodepth.com"
                  className="contact-email-link"
                  style={{ fontSize: '1.05rem', color: 'var(--muted)' }}
                >
                  contact@studiodepth.com →
                </a>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '28px' }}>
              <div className="typewriter-label" style={{ marginBottom: '12px' }}>
                ATELIER LOCATION (PROVISIONAL)
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--foreground)', lineHeight: '1.7', marginBottom: '8px' }}>
                Studio De.PTH<br />
                South Mumbai Practice Atelier<br />
                Mumbai, Maharashtra, India
              </p>
              <p className="typewriter-label" style={{ color: 'var(--accent)', fontSize: '0.72rem' }}>
                *(Address subject to client confirmation)*
              </p>
            </div>
          </div>

          {/* Right Column: Real Interactive Map */}
          <div>
            <div className="typewriter-label" style={{ marginBottom: '16px' }}>
              STUDIO MAP (MUMBAI)
            </div>
            <RealMap variant="minimal" height="420px" />
          </div>
        </div>
      </div>
    </div>
  );
}
