import Link from 'next/link';
import Image from 'next/image';

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
          </div>

          <div className="footer-nav-col">
            <Link href="/" className="footer-nav-link">Home</Link>
            <Link href="/about" className="footer-nav-link">About Us</Link>
            <Link href="/projects" className="footer-nav-link">Projects</Link>
            <Link href="/contact" className="footer-nav-link">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2026 Studio De.PTH. All rights reserved.
          </div>
          <div className="footer-location-tag">
            Architecture + Spatial Research
          </div>
        </div>
      </div>
    </footer>
  );
}
