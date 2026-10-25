'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavItem {
  id: string;
  num: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'the-founders', num: '01', label: 'THE FOUNDERS' },
  { id: 'philosophy', num: '02', label: 'PHILOSOPHY' },
  { id: 'history', num: '03', label: 'HISTORY' },
];

export default function AboutFinal() {
  const [activeSection, setActiveSection] = useState<string>('the-founders');

  useEffect(() => {
    const sectionIds = ['the-founders', 'philosophy', 'history'];

    const handleScroll = () => {
      // Bottom of page check - guarantee history is selected
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('history');
        return;
      }

      const scrollPos = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="demo02-canvas" style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '2.5rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="about-final-layout">
          {/* Left Sticky Navbar */}
          <aside className="about-final-sidebar" aria-label="About Page Sections">
            <div className="about-final-sidebar-header">
              <span>INDEX // <span className="index-accent">ABOUT</span></span>
              <span>03 SEC</span>
            </div>

            <ul className="about-final-sidebar-list">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`about-final-nav-btn ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span className="about-final-nav-num">{item.num}</span>
                      <span className="about-final-nav-label">{item.label}</span>
                      {isActive && <span className="about-final-nav-arrow">→</span>}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="about-final-sidebar-footer">
              <div style={{ fontWeight: 700, color: '#111111', marginBottom: '4px' }}>STUDIO De.PTH</div>
              <div>PRACTICE DOSSIER</div>
              <div style={{ color: '#941B1B', marginTop: '6px', fontSize: '0.64rem' }}>
                TRANSFORMATIVE HABITATS
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="about-final-content">
            {/* 1. THE FOUNDERS */}
            <section
              id="the-founders"
              className="demo02-dossier-row"
              style={{ borderTop: 'none', paddingTop: 0, marginTop: 0, scrollMarginTop: '110px' }}
            >
              <div className="demo02-dossier-left">
                <span className="demo02-dossier-num" style={{ color: '#941B1B' }}>01</span>
                <span className="demo02-dossier-tag">THE FOUNDERS</span>
              </div>
              <div className="demo02-dossier-right">
                <div className="demo02-founders-stack">
                  {/* Founder 1 */}
                  <div className="demo02-founder-entry">
                    <div className="demo02-founder-portrait-box" style={{ border: '1px solid #ebebeb' }}>
                      <Image
                        src="/images/founder-1.jpg"
                        alt="Founder / Architect"
                        width={400}
                        height={500}
                        className="demo02-founder-img"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="demo02-plate-caption">
                        <span>FIGURE 1.1 — PRINCIPAL ARCHITECT</span>
                      </div>
                    </div>
                    <div className="demo02-founder-info">
                      <div className="founder-id-tag">PARTNER 01</div>
                      <h3 className="founder-title-text">FOUNDER NAME</h3>
                      <div className="founder-role-sub">Architect / Founding Principal</div>
                      <p className="demo02-dossier-p" style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.65 }}>
                        Overseeing architectural research, spatial articulation, and structural craftsmanship.
                        Dedicated to contextual materiality and people-focused transformative habitats.
                      </p>
                    </div>
                  </div>

                  {/* Founder 2 */}
                  <div className="demo02-founder-entry">
                    <div className="demo02-founder-portrait-box" style={{ border: '1px solid #ebebeb' }}>
                      <Image
                        src="/founders/founder-02.jpg"
                        alt="Founder / Architect"
                        width={400}
                        height={500}
                        className="demo02-founder-img"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="demo02-plate-caption">
                        <span>FIGURE 1.2 — PRINCIPAL ARCHITECT</span>
                      </div>
                    </div>
                    <div className="demo02-founder-info">
                      <div className="founder-id-tag">PARTNER 02</div>
                      <h3 className="founder-title-text">FOUNDER NAME</h3>
                      <div className="founder-role-sub">Architect / Founding Principal</div>
                      <p className="demo02-dossier-p" style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.65 }}>
                        Directing ecological habitat integration, material tectonics, and environmental geometry
                        across diverse landscapes and vernacular craft traditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. PHILOSOPHY */}
            <section
              id="philosophy"
              className="demo02-dossier-row"
              style={{ borderTop: '1px solid #eeeeee', paddingTop: '3.5rem', scrollMarginTop: '110px' }}
            >
              <div className="demo02-dossier-left">
                <span className="demo02-dossier-num" style={{ color: '#941B1B' }}>02</span>
                <span className="demo02-dossier-tag">PHILOSOPHY</span>
              </div>
              <div className="demo02-dossier-right">
                <p className="demo02-dossier-p" style={{ fontSize: '1.08rem', color: '#222222', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Studio De.PTH is a contemporary architecture and spatial design practice dedicated
                  to people-focused transformative habitats. We examine how proportional clarity,
                  unadorned materiality, and natural daylight generate timeless environments.
                </p>
                <p className="demo02-dossier-p" style={{ fontSize: '0.96rem', color: '#666666', lineHeight: 1.7 }}>
                  Every project begins through deep environmental listening, regional climate responses,
                  and structural discipline. We privilege quiet permanence over fleeting architectural trends,
                  treating each built habitat as a resilient container for human ritual and ecological harmony.
                </p>
              </div>
            </section>

            {/* 3. HISTORY */}
            <section
              id="history"
              className="demo02-dossier-row"
              style={{ borderTop: '1px solid #eeeeee', paddingTop: '3.5rem', scrollMarginTop: '110px' }}
            >
              <div className="demo02-dossier-left">
                <span className="demo02-dossier-num" style={{ color: '#941B1B' }}>03</span>
                <span className="demo02-dossier-tag">HISTORY</span>
              </div>
              <div className="demo02-dossier-right">
                <div className="demo02-timeline-lines">
                  <div className="demo02-timeline-row">
                    <span className="timeline-yr" style={{ color: '#941B1B', fontWeight: 700 }}>2024</span>
                    <div className="timeline-detail">
                      <span className="timeline-headline">FOUNDATION OF PRACTICE</span>
                      <p className="timeline-subtext">Establishment of Studio De.PTH dedicated to research on human-centered transformative habitats.</p>
                    </div>
                  </div>

                  <div className="demo02-timeline-row">
                    <span className="timeline-yr" style={{ color: '#941B1B', fontWeight: 700 }}>2025</span>
                    <div className="timeline-detail">
                      <span className="timeline-headline">FIRST COMMISSIONS & PAVILIONS</span>
                      <p className="timeline-subtext">Realization of initial residential enclosures, pavilions, and regional cultural monographs.</p>
                    </div>
                  </div>

                  <div className="demo02-timeline-row">
                    <span className="timeline-yr" style={{ color: '#941B1B', fontWeight: 700 }}>2026</span>
                    <div className="timeline-detail">
                      <span className="timeline-headline">TERRITORIAL EXPANSION</span>
                      <p className="timeline-subtext">Expanding multi-scale spatial research, cross-disciplinary collaborations, and permanent habitat archives.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
