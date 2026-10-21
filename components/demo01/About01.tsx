'use client';

import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';

export default function About01() {
  return (
    <div className="section-padding demo01-container">
      <div className="container">
        {/* Intro */}
        <div className="about-hero-grid" style={{ marginBottom: '48px' }}>
          <div>
            <div className="typewriter-label typewriter-accent">STUDIO PROFILE</div>
          </div>
          <div>
            <h1 className="about-page-title">ABOUT US</h1>
            <div className="about-page-subtitle">
              STUDIO <span>DE.</span>PTH
            </div>
          </div>
        </div>

        {/* 01 / About The Start Up */}
        <section className="two-col-layout" aria-label="About the Start Up">
          <div>
            <SectionLabel number="01" title="ABOUT THE STARTUP" />
          </div>
          <div className="two-col-body">
            <p>
              Studio De.PTH is an emerging contemporary architectural studio and spatial research
              practice founded with the vision to engineer human-centered, transformative habitats.
              We question standard volumetric conventions, focusing on proportion, ambient daylight,
              and material honesty.
            </p>
            <p>
              Operating at the intersection of climate responsiveness and minimalist permanence,
              our work aims to enrich the daily rhythms of the people who inhabit our built spaces.
            </p>
          </div>
        </section>

        {/* 02 / The Two Founders */}
        <section className="two-col-layout" aria-label="The Two Founders">
          <div>
            <SectionLabel number="02" title="THE TWO FOUNDERS" />
          </div>
          <div className="two-col-body">
            <div className="founders-grid">
              {/* Founder 1 */}
              <div className="founder-card">
                <div className="founder-image-wrapper">
                  <Image
                    src="/founders/founder-01.jpg"
                    alt="Founder 01 — Principal Architect"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="founder-image"
                  />
                </div>
                <div className="founder-name">FOUNDER 01</div>
                <div className="founder-role">Co-Founder / Principal Architect</div>
                <p className="founder-bio">
                  Leads spatial design, habitational concepts, and construction craft.
                  <br />
                  <span className="typewriter-accent" style={{ fontSize: '0.75rem', display: 'block', marginTop: '6px' }}>
                    *(Detailed biographical info to be shared by client)*
                  </span>
                </p>
              </div>

              {/* Founder 2 */}
              <div className="founder-card">
                <div className="founder-image-wrapper">
                  <Image
                    src="/founders/founder-02.jpg"
                    alt="Founder 02 — Principal Architect"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="founder-image"
                  />
                </div>
                <div className="founder-name">FOUNDER 02</div>
                <div className="founder-role">Co-Founder / Principal Architect</div>
                <p className="founder-bio">
                  Directs technical research, materiality, environmental integration, and structural systems.
                  <br />
                  <span className="typewriter-accent" style={{ fontSize: '0.75rem', display: 'block', marginTop: '6px' }}>
                    *(Detailed biographical info to be shared by client)*
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / History of the Startup */}
        <section className="two-col-layout" aria-label="History of the Startup">
          <div>
            <SectionLabel number="03" title="HISTORY OF THE STARTUP" />
          </div>
          <div className="two-col-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-node" />
                <div className="timeline-year">2024</div>
                <div className="timeline-title">Foundation of Studio De.PTH</div>
                <p className="timeline-desc">
                  Inception of the practice by the two founders in Mumbai, established to research
                  transformative spatial design and material honesty.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-node" />
                <div className="timeline-year">2025</div>
                <div className="timeline-title">Initial Commissions & Research</div>
                <p className="timeline-desc">
                  Execution of key residential dwellings, experimental landscape pavilions, and sustainable material studies.
                </p>
              </div>

              <div className="timeline-item">
                <div className="timeline-node" />
                <div className="timeline-year">2026</div>
                <div className="timeline-title">Practice Expansion</div>
                <p className="timeline-desc">
                  Expanding portfolio across topologies in Western India, cultural exhibitions, and institutional collaborations.
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
              Reflecting the architectural ethos of Sanjay Puri Architects and Architecture BRIO,
              our studio works without excessive ornament or unnecessary digital effects.
              Architecture is experienced through light, proportion, texture, and silence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
