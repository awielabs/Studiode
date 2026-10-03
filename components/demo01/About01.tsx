'use client';

import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';

export default function About01() {
  return (
    <div className="section-padding demo01-container">
      <div className="container">
        {/* Intro */}
        <div className="about-hero-grid">
          <div>
            <div className="typewriter-label typewriter-accent">OVERVIEW</div>
          </div>
          <div>
            <h1 className="about-page-title">ABOUT</h1>
            <div className="about-page-subtitle">
              STUDIO <span>DE.</span>PTH
            </div>
          </div>
        </div>

        {/* 01 / Studio Story */}
        <section className="two-col-layout" aria-label="Studio Story">
          <div>
            <SectionLabel number="01" title="THE STUDIO" />
          </div>
          <div className="two-col-body">
            <p>
              Studio De.PTH was established as an architecture and spatial research practice
              committed to human-centered environments. We investigate how thoughtful
              spatial proportion, unadorned materials, and natural light foster transformative
              daily habitats.
            </p>
            <p>
              Our design ethos privileges quiet permanence over fleeting trends. Every
              commission is approached through deep listening, local climate conditions,
              and tactile craftsmanship.
            </p>
          </div>
        </section>

        {/* 02 / Founders */}
        <section className="two-col-layout" aria-label="Founders">
          <div>
            <SectionLabel number="02" title="FOUNDERS" />
          </div>
          <div className="two-col-body">
            <div className="founders-grid">
              {/* Founder 1 */}
              <div className="founder-card">
                <div className="founder-image-wrapper">
                  <Image
                    src="/founders/founder-01.jpg"
                    alt="Founder / Architect"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="founder-image"
                  />
                </div>
                <div className="founder-name">FOUNDER NAME</div>
                <div className="founder-role">Founder / Principal Architect</div>
                <p className="founder-bio">
                  Architectural lead directing conceptual research, spatial planning, and construction
                  craftsmanship. (Information placeholder to be provided by client).
                </p>
              </div>

              {/* Founder 2 */}
              <div className="founder-card">
                <div className="founder-image-wrapper">
                  <Image
                    src="/founders/founder-02.jpg"
                    alt="Founder / Architect"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="founder-image"
                  />
                </div>
                <div className="founder-name">FOUNDER NAME</div>
                <div className="founder-role">Founder / Principal Architect</div>
                <p className="founder-bio">
                  Architectural lead focusing on environmental integration, materials research,
                  and tectonic systems. (Information placeholder to be provided by client).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / History */}
        <section className="two-col-layout" aria-label="Studio History">
          <div>
            <SectionLabel number="03" title="HISTORY" />
          </div>
          <div className="two-col-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-node" />
                <div className="timeline-year">2024</div>
                <div className="timeline-title">Studio Founded</div>
                <p className="timeline-desc">
                  Inception of Studio De.PTH with a focus on people-centric habitat research.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-node" />
                <div className="timeline-year">2025</div>
                <div className="timeline-title">First Commissions</div>
                <p className="timeline-desc">
                  Realization of initial residential enclosures and cultural pavilion studies.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-node" />
                <div className="timeline-year">2026</div>
                <div className="timeline-title">Studio Expansion</div>
                <p className="timeline-desc">
                  Broadening spatial research, regional projects, and collaborative monographs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / Philosophy */}
        <section className="two-col-layout" aria-label="Philosophy" style={{ borderBottom: '1px solid var(--border-light)' }}>
          <div>
            <SectionLabel number="04" title="PHILOSOPHY" />
          </div>
          <div className="two-col-body">
            <p>
              We believe architecture is not merely about forms on the skyline, but about
              the tactile, sensory resonance of spaces that people inhabit every day.
              Space, light, and silence remain our primary materials.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
