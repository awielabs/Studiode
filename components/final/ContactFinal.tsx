'use client';

import React from 'react';
import RealMap from '@/components/RealMap';

export default function ContactFinal() {
  return (
    <div
      className="demo02-canvas section-padding"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '85vh',
        paddingTop: '2.5rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container">
        {/* Title from Final Concept */}
        <div style={{ marginBottom: '40px' }}>
          <h1
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '0.01em',
              margin: '0 0 0.5rem 0',
            }}
          >
            Let’s Talk Design
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: '0.82rem',
              color: '#666666',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Direct communication for commissions, consultations and spatial research
          </p>
        </div>

        {/* Concept 2 Square Grid Panels */}
        <div className="demo02-contact-grid">
          {/* Left Column: Direct Inquiries Square Panel */}
          <div className="demo02-contact-panel">
            <div className="demo02-panel-head">
              <span className="demo02-red-mark">■</span>
              <span>EMAIL</span>
            </div>

            <div className="demo02-panel-content">
              <p
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '0.98rem',
                  color: '#444444',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                We accept a limited number of spatial and architectural commissions each year to ensure
                rigorous design investigation, environmental responsiveness, and meticulous detailing.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#941B1B',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    GENERAL INQUIRIES:
                  </div>
                  <a
                    href="mailto:hello@studiodepth.com"
                    className="demo02-contact-email"
                    style={{
                      fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                      fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                      fontWeight: 700,
                    }}
                  >
                    hello@studiodepth.com
                  </a>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#941B1B',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    CAREERS & INTERNSHIPS:
                  </div>
                  <a
                    href="mailto:careers@studiodepth.com"
                    className="demo02-contact-email"
                    style={{
                      fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                      fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                      fontWeight: 700,
                    }}
                  >
                    careers@studiodepth.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Square Map Panel */}
          <div className="demo02-contact-panel">
            <div className="demo02-panel-head">
              <span className="demo02-red-mark">■</span>
              <span>LOCATION</span>
            </div>

            <div className="demo02-panel-content" style={{ padding: '16px' }}>
              <RealMap variant="catalogue" height="380px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
