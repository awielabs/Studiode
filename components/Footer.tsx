'use client';

import Link from 'next/link';
import { useDemo } from '@/context/DemoContext';

export default function Footer() {
  const { activeDemo } = useDemo();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Concept Final has no footer on any page per user specification
  if (activeDemo === 'final') {
    return null;
  }

  if (activeDemo === 5) {
    return (
      <footer
        style={{
          borderTop: '1px solid #ebebeb',
          backgroundColor: '#fafafa',
          padding: '4.5rem 0 2.5rem 0',
          marginTop: 'auto',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '3rem',
              marginBottom: '3.5rem',
            }}
          >
            {/* Col 1: Brand & Ideology */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#111111',
                  }}
                >
                  STUDIO <span style={{ color: '#941B1B' }}>De.PTH</span>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.84rem',
                  color: '#666666',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                Architectural practice engaged in volumetric depth, material tectonics, and environmental permanence across South Asia.
              </p>
              <div
                style={{
                  fontSize: '0.74rem',
                  letterSpacing: '0.1em',
                  color: '#888888',
                  textTransform: 'uppercase',
                }}
              >
                Mumbai · Pune · Goa · Alibaug · Bengaluru
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#941B1B',
                  fontWeight: 700,
                  marginBottom: '1.2rem',
                }}
              >
                [ Navigation ]
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  fontSize: '0.85rem',
                }}
              >
                <li>
                  <Link
                    href="/"
                    style={{ color: '#333333' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    style={{ color: '#333333' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    style={{ color: '#333333' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    style={{ color: '#333333' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#333333')}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Inquiries */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#941B1B',
                  fontWeight: 700,
                  marginBottom: '1.2rem',
                }}
              >
                [ Direct Inquiries ]
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#888888', textTransform: 'uppercase' }}>
                    Commissions & General:
                  </span>
                  <a
                    href="mailto:connect@studiodepth.com"
                    style={{ color: '#111111', textDecoration: 'underline' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
                  >
                    connect@studiodepth.com
                  </a>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#888888', textTransform: 'uppercase' }}>
                    Press & Media:
                  </span>
                  <a
                    href="mailto:press@studiodepth.com"
                    style={{ color: '#111111', textDecoration: 'underline' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
                  >
                    press@studiodepth.com
                  </a>
                </div>

                <div>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: '#888888', textTransform: 'uppercase' }}>
                    Careers & Portfolios:
                  </span>
                  <a
                    href="mailto:careers@studiodepth.com"
                    style={{ color: '#111111', textDecoration: 'underline' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
                  >
                    careers@studiodepth.com
                  </a>
                </div>
              </div>
            </div>

            {/* Col 4: Studio Coordinates */}
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#941B1B',
                  fontWeight: 700,
                  marginBottom: '1.2rem',
                }}
              >
                [ Studio Coordinates ]
              </div>
              <p style={{ fontSize: '0.82rem', color: '#555555', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                4th Floor, Old Fort Heritage Chambers,<br />
                Kala Ghoda Arts Precinct,<br />
                Mumbai, MH 400001
              </p>
              <p style={{ fontSize: '0.72rem', color: '#888888', fontStyle: 'italic', marginBottom: '1.2rem' }}>
                *Address representative, awaiting final client confirmation.
              </p>
              <button
                onClick={scrollToTop}
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#111111',
                  border: '1px solid #111111',
                  padding: '6px 14px',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#941B1B';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#941B1B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#111111';
                  e.currentTarget.style.borderColor = '#111111';
                }}
              >
                ↑ Top of Page
              </button>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div
            style={{
              borderTop: '1px solid #eeeeee',
              paddingTop: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              fontSize: '0.75rem',
              color: '#888888',
              letterSpacing: '0.06em',
            }}
          >
            <div>
              © {new Date().getFullYear()} Studio De.PTH. All Rights Reserved. (Concept 05)
            </div>
            <div>
              Design for People + Transformative Habitats
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-title">
              STUDIO <span>DE.</span>PTH
            </div>
            <p className="footer-tagline">
              Design for People + Transformative Habitats
            </p>
            <div style={{ marginTop: '12px' }}>
              <a
                href="mailto:hello@studiodepth.com"
                className="typewriter-label typewriter-accent"
                style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                hello@studiodepth.com
              </a>
            </div>
            <p className="typewriter-label" style={{ marginTop: '8px', fontSize: '0.7rem', color: 'var(--muted)' }}>
              Mumbai, India *(Atelier address subject to client confirmation)*
            </p>
          </div>

          <div className="footer-nav-col">
            <Link href="/" className="footer-nav-link">Home</Link>
            <Link href="/about" className="footer-nav-link">About Us</Link>
            <Link href="/projects" className="footer-nav-link">Projects</Link>
            <Link href="/contact" className="footer-nav-link">Contact Us</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Studio De.PTH. All rights reserved. Minimal Architecture Archive.
          </div>
          <div className="footer-location-tag">
            Architecture + Spatial Research · Mumbai
          </div>
        </div>
      </div>
    </footer>
  );
}
