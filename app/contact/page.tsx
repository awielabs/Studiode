import type { Metadata } from 'next';
import SectionLabel from '@/components/SectionLabel';

export const metadata: Metadata = {
  title: 'Contact — Studio De.PTH',
  description:
    'Contact Studio De.PTH for architectural commissions, spatial design inquiries, and collaborations.',
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <header className="contact-header">
          <SectionLabel number="01" title="COMMISSIONS & INQUIRIES" />
          <h1 className="about-page-title">CONTACT</h1>
          <p className="typewriter-label">
            Dialogue on Transformative Habitats
          </p>
        </header>

        <div className="contact-layout-grid">
          {/* Left Column: Email only as requested (No form) */}
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

          {/* Right Column: Architectural Map Representation */}
          <div>
            <div className="typewriter-label" style={{ marginBottom: '16px' }}>
              MAP LOCATION
            </div>
            <div className="map-container" aria-label="Studio Location Map">
              <div className="map-graphic-canvas">
                <div className="map-grid-pattern" />

                {/* Minimalist Cartographic Coordinate Markings */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                  }}
                >
                  18°58&apos;N 72°49&apos;E
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--muted)',
                  }}
                >
                  SCALE 1:2500
                </div>

                {/* Studio Pin */}
                <div className="map-studio-pin">
                  <div className="pin-dot" />
                  <div className="pin-label">● STUDIO DE.PTH</div>
                </div>
              </div>

              <div className="map-footer-note">
                <span className="typewriter-label">MUMBAI / INDIA</span>
                <span className="typewriter-label" style={{ color: 'var(--muted-light)' }}>
                  [LOCATION NOT CONFIRMED]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
