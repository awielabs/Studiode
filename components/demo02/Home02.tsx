'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, clientTrialWorks, ClientTrialWork } from '@/data/projects';

export default function Home02() {
  const [hoveredSlug, setHoveredSlug] = useState<string>(projects[0].slug);
  const [selectedTrial, setSelectedTrial] = useState<ClientTrialWork | null>(null);
  const activeProject = projects.find((p) => p.slug === hoveredSlug) || projects[0];

  return (
    <div className="demo02-canvas">
      {/* Blueprint Grid Lines (Selective) */}
      <div className="demo02-grid-bg" aria-hidden="true">
        <div className="container demo02-grid-columns">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Exhibition Header Strip */}
        <div className="demo02-sheet-header">
          <div className="demo02-meta-badge">
            <span className="demo02-red-mark">■</span>
            <span>EXHIBITION SHEET / NO. 01</span>
          </div>
          <div className="demo02-meta-badge">
            <span>REF: STUDIO DE.PTH PRACTICE</span>
          </div>
          <div className="demo02-meta-badge">
            <span>ANNUAL ARCHIVE 2024–2026</span>
          </div>
        </div>

        {/* Hero Asymmetric Composition */}
        <section className="demo02-hero-section">
          <div className="demo02-hero-grid">
            {/* Left Typography Block */}
            <div className="demo02-hero-left">
              <div className="demo02-section-tag">01 / OVERVIEW</div>
              <h1 className="demo02-hero-title">
                DESIGN FOR
                <br />
                PEOPLE +
                <br />
                <span className="demo02-accent-text">TRANSFORMATIVE</span>
                <br />
                HABITATS.
              </h1>
              <p className="demo02-hero-body">
                Spatial research, architectural restraint, and human-centered environments.
                A digital exhibition catalogue of transformative built forms, public pauses,
                and quiet materiality across Mumbai.
              </p>
              <div className="demo02-hero-coords">
                <div><span>SCALE</span> 1:1 IN SITU INTERVENTIONS</div>
                <div><span>LOC</span> MUMBAI METROPOLITAN / MAHARASHTRA</div>
                <div><span>STATUS</span> CLIENT TRIAL DOCUMENTATION</div>
              </div>
            </div>

            {/* Right Large Plate Image — Featuring Real Client Work */}
            <div className="demo02-hero-right">
              <div className="demo02-plate-frame">
                <div className="demo02-plate-inner">
                  <Image
                    src="/client-trial/client-05-borivali-station.jpg"
                    alt="Studio De.PTH Architecture Work — Borivali Station Civic Plaza"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 55vw"
                    className="demo02-plate-image"
                  />
                </div>
                <div className="demo02-plate-caption">
                  <span>PLATE 01 / BORIVALI STATION CIVIC PLAZA</span>
                  <span>CLIENT TRIAL ARCHIVE 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Philosophy Line */}
        <section className="demo02-statement-strip">
          <div className="demo02-strip-number">02</div>
          <div className="demo02-strip-text">
            <span>&ldquo;Architecture is not merely forms on the horizon, but the quiet resonance of spaces people inhabit.&rdquo;</span>
          </div>
        </section>

        {/* Exhibition Sheet 02: 05 Client Trial Works */}
        <section className="demo02-trial-sheet" aria-label="Client Trial Exhibition Plates">
          <div className="demo02-sheet-header">
            <div className="demo02-meta-badge">
              <span className="demo02-red-mark">■</span>
              <span>EXHIBITION SHEET / NO. 02</span>
            </div>
            <div className="demo02-meta-badge">
              <span>CLIENT TRIAL IN SITU · 05 URBAN HABITATS</span>
            </div>
            <div className="demo02-meta-badge">
              <span>MUMBAI URBAN STUDIES</span>
            </div>
          </div>

          <div className="demo02-trial-grid">
            {clientTrialWorks.map((work) => (
              <div
                key={work.id}
                className={`demo02-trial-card ${work.spanClass}`}
                onClick={() => setSelectedTrial(work)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTrial(work);
                  }
                }}
                aria-label={`View exhibition plate for ${work.title}`}
              >
                <div className="demo02-trial-meta" style={{ marginBottom: '8px' }}>
                  <span>
                    <span className="demo02-red-mark">■</span>
                    PLATE {work.number} / {work.category}
                  </span>
                  <span>{work.year}</span>
                </div>

                <div className={`demo02-trial-frame ${work.aspectClass}`}>
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="demo02-plate-image"
                  />
                </div>

                <div className="demo02-trial-meta">
                  <span className="trial-title">{work.title}</span>
                  <span className="trial-loc">{work.location}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#555', marginTop: '6px', lineHeight: '1.5' }}>
                  {work.description}
                </p>
                <div className="typewriter-label" style={{ fontSize: '0.68rem', color: 'var(--accent)', marginTop: '8px' }}>
                  [+] INSPECT EXHIBITION PLATE ↗
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main Interaction: Architectural Project Index */}
        <section className="demo02-index-section" aria-label="Project Index">
          <div className="demo02-index-header">
            <div>
              <span className="demo02-red-mark">■</span>
              <span className="demo02-section-tag">03 / PROJECT ARCHIVE INDEX</span>
            </div>
            <Link href="/projects" className="demo02-view-archive-link">
              EXPLORE FULL ARCHIVE [4] →
            </Link>
          </div>

          <div className="demo02-index-layout">
            {/* Rows List */}
            <div className="demo02-index-list">
              {projects.map((project) => {
                const isHovered = hoveredSlug === project.slug;

                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`demo02-index-row ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSlug(project.slug)}
                    onFocus={() => setHoveredSlug(project.slug)}
                  >
                    <div className="demo02-row-number">
                      <span className="row-bullet">{isHovered ? '■' : '·'}</span>
                      <span>{project.number}</span>
                    </div>
                    <div className="demo02-row-title">
                      {project.title}
                      {project.subtitle && (
                        <span className="demo02-row-sub"> — {project.subtitle}</span>
                      )}
                    </div>
                    <div className="demo02-row-meta">
                      <span className="demo02-tag-topology">{project.topology}</span>
                      <span className="demo02-tag-location">{project.location}</span>
                      <span className="demo02-tag-year">{project.year}</span>
                    </div>
                    <div className="demo02-row-arrow">↗</div>
                  </Link>
                );
              })}
            </div>

            {/* Hover Image Preview Frame Beside Rows */}
            <div className="demo02-preview-frame" aria-hidden="true">
              <div className="demo02-preview-inner">
                <Image
                  key={activeProject.slug}
                  src={activeProject.coverImage}
                  alt={activeProject.title}
                  fill
                  sizes="400px"
                  className="demo02-preview-image"
                />
              </div>
              <div className="demo02-preview-footer">
                <span className="preview-label">PREVIEW: {activeProject.number}</span>
                <span className="preview-topology">{activeProject.topology}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal for Exhibition Plate */}
      {selectedTrial && (
        <div
          className="client-trial-modal-overlay"
          onClick={() => setSelectedTrial(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="client-trial-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="client-trial-modal-close-btn"
              onClick={() => setSelectedTrial(null)}
              aria-label="Close exhibition plate"
            >
              [✕ CLOSE]
            </button>

            <div>
              <div className="typewriter-label typewriter-accent" style={{ marginBottom: '4px' }}>
                EXHIBITION PLATE #{selectedTrial.number} · {selectedTrial.year}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.2rem',
                  letterSpacing: '0.06em',
                }}
              >
                {selectedTrial.title}
              </h3>
              <div className="typewriter-label" style={{ color: 'var(--muted)', marginTop: '4px' }}>
                {selectedTrial.category} · {selectedTrial.location}
              </div>
            </div>

            <div className="client-trial-modal-media">
              <Image
                src={selectedTrial.image}
                alt={selectedTrial.title}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--foreground)' }}>
              {selectedTrial.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
