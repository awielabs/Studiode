import Link from 'next/link';

export default function Footer() {
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
            <Link href="/client-sell" className="footer-nav-link">
              Client Sell <span style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>(In Future)</span>
            </Link>
            <Link href="/resignation" className="footer-nav-link">
              Resignation <span style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>(In Future)</span>
            </Link>
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
