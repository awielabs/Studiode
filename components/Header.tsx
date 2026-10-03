'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useDemo } from '@/context/DemoContext';

export default function Header() {
  const pathname = usePathname();
  const { activeDemo } = useDemo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { num: '01', label: 'HOME', href: '/' },
    { num: '02', label: 'ABOUT', href: '/about' },
    { num: '03', label: 'PROJECTS', href: '/projects' },
    { num: '04', label: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header header-demo-${activeDemo}`}>
      <div className="container header-inner">
        <Link href="/" className="brand-link" onClick={closeMenu}>
          <Image
            src="/logo/studio-depth-logo-trimmed.png"
            alt="Studio De.PTH"
            width={44}
            height={36}
            priority
            className="brand-logo-img"
          />
          <span className="brand-title">
            STUDIO <span className="brand-title-accent">DE.</span>PTH
          </span>
          {activeDemo === 4 && (
            <span className="header-journal-stamp">JOURNAL VOL. 04</span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const displayLabel =
                activeDemo === 1 || activeDemo === 4
                  ? link.label
                  : `${link.num} ${link.label}`;

              return (
                <li key={link.href} className="nav-item">
                  <Link
                    href={link.href}
                    className={`nav-link ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {activeDemo === 2 && active && <span className="nav-index-dot">■ </span>}
                    {activeDemo === 4 && active && <span className="nav-journal-dot">· </span>}
                    {displayLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`mobile-nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav aria-label="Mobile Navigation">
          <ul className="mobile-drawer-list">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const displayLabel =
                activeDemo === 1 || activeDemo === 4
                  ? link.label
                  : `${link.num} ${link.label}`;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`mobile-drawer-link ${active ? 'active' : ''}`}
                    onClick={closeMenu}
                    aria-current={active ? 'page' : undefined}
                  >
                    {activeDemo === 2 && active && <span style={{ color: 'var(--accent)' }}>■ </span>}
                    {activeDemo === 4 && active && <span style={{ color: 'var(--accent)' }}>· </span>}
                    {displayLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
