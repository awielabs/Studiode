'use client';

import SectionLabel from '@/components/SectionLabel';
import RealMap from '@/components/RealMap';

export default function Contact01() {
  return (
    <div className="section-padding demo01-container">
      <div className="container">
        <header className="contact-header">
          <SectionLabel number="01" title="COMMISSIONS & INQUIRIES" />
          <h1 className="about-page-title">CONTACT</h1>
          <p className="typewriter-label">
            Dialogue on Transformative Habitats
          </p>
        </header>

        <div className="contact-layout-grid">
          {/* Left Column: Direct inquiries only (No interactive form) */}
          <div className="contact-info-panel">
            <div>
              <div className="typewriter-label typewriter-accent" style={{ marginBottom: '16px' }}>
                DIRECT INQUIRIES
              </div>
              <p style={{ marginBottom: '14px', fontSize: '1.05rem', color: '#555' }}>
                For project proposals, academic discourse, or general inquiries:
              </p>
              <div>
                <a
                  href="mailto:hello@studiodepth.com"
                  className="contact-email-link"
                >
                  hello@studiodepth.com
                </a>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '32px' }}>
              <div className="typewriter-label" style={{ marginBottom: '12px' }}>
                STUDIO PRESENCE
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                Studio De.PTH operates between physical sites and spatial research habitats.
                Physical atelier visits are organized by prior appointment.
              </p>
            </div>
          </div>

          {/* Right Column: Real Interactive Map */}
          <div>
            <div className="typewriter-label" style={{ marginBottom: '16px' }}>
              MAP LOCATION
            </div>
            <RealMap variant="minimal" height="400px" />
          </div>
        </div>
      </div>
    </div>
  );
}
