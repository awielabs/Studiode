'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, clientTrialWorks, ClientTrialWork } from '@/data/projects';

export default function Home03() {
  const [selectedTrial, setSelectedTrial] = useState<ClientTrialWork | null>(null);

  return (
    <div className="demo03-canvas">
      <div className="container">
        {/* Poster Hero Composition */}
        <section className="demo03-hero-poster">
          <div className="demo03-hero-grid">
            {/* Left Typography Block (45-55% visual area) */}
            <div className="demo03-hero-typography">
              <div className="demo03-label-tag">STUDIO DE.PTH / 01</div>
              <div className="demo03-massive-num">01</div>
              <h1 className="demo03-massive-title">
                DESIGN FOR
                <br />
                PEOPLE +
                <br />
                TRANSFORMATIVE
                <br />
                HABITATS
              </h1>
              <p className="demo03-hero-desc">
                Contemporary architecture, spatial research, and environmental tectonics.
                Constructing quiet habitats defined by human proportion, public life, and natural daylight.
              </p>
            </div>

            {/* Right Architectural Image Frame (45-55% area) — Featuring Client Work */}
            <div className="demo03-hero-media">
              <div className="demo03-poster-image-frame">
                <Image
                  src="/client-trial/client-05-borivali-station.jpg"
                  alt="Studio De.PTH Architecture — Borivali Station Civic Plaza"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="demo03-hero-img"
                />
              </div>
              <div className="demo03-swiss-caption">
                FIGURE 01 — BORIVALI STATION CIVIC PLAZA / IN SITU FIELD TRIAL 2026
              </div>
            </div>
          </div>
        </section>

        {/* Studio Manifesto Bar */}
        <section className="demo03-manifesto-bar">
          <div className="demo03-manifesto-col">
            <span className="demo03-swiss-num">01.1</span>
            <span className="demo03-swiss-heading">DISCIPLINE</span>
            <p className="demo03-swiss-text">Uncompromising structural clarity, regional materials, and acoustic stillness.</p>
          </div>
          <div className="demo03-manifesto-col">
            <span className="demo03-swiss-num">01.2</span>
            <span className="demo03-swiss-heading">HUMAN SCALE</span>
            <p className="demo03-swiss-text">Designing from the somatic experience of occupants toward the urban envelope.</p>
          </div>
          <div className="demo03-manifesto-col">
            <span className="demo03-swiss-num">01.3</span>
            <span className="demo03-swiss-heading">PERMANENCE</span>
            <p className="demo03-swiss-text">Environments configured to mature with time, local climate weathering, and daily community rituals.</p>
          </div>
        </section>

        {/* 02 / In-Situ Field Archive: 05 Client Trial Works */}
        <section className="demo03-trial-section" aria-label="Client Trial Field Archive">
          <div className="demo03-section-head">
            <div>
              <span className="demo03-label-tag">02 / FIELD ARCHIVE</span>
              <h2 className="demo03-section-title">CLIENT TRIAL HABITATS (IN SITU)</h2>
            </div>
            <span className="typewriter-label typewriter-accent" style={{ fontSize: '0.78rem' }}>
              [05 BUILT MONOGRAPHS]
            </span>
          </div>

          <div className="demo03-trial-flow">
            {clientTrialWorks.map((work) => (
              <article
                key={work.id}
                className="demo03-project-entry"
                onClick={() => setSelectedTrial(work)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTrial(work);
                  }
                }}
                style={{ cursor: 'pointer' }}
                aria-label={`View ${work.title}`}
              >
                <div className="demo03-entry-top">
                  {/* Oversized Swiss Number */}
                  <div className="demo03-entry-num">{work.numberShort}</div>

                  <div className="demo03-entry-meta">
                    <h3 className="demo03-entry-title">
                      <span className="demo03-hover-square">■ </span>
                      {work.title}
                    </h3>
                    <div className="demo03-entry-details">
                      <span>{work.category}</span>
                      <span>{work.location}</span>
                      <span>{work.year}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '10px', lineHeight: '1.6' }}>
                      {work.description}
                    </p>
                    <div className="typewriter-label" style={{ fontSize: '0.7rem', color: 'var(--accent)', marginTop: '8px' }}>
                      [+] EXPAND FIELD PHOTOGRAPH ↗
                    </div>
                  </div>
                </div>

                <div className="demo03-entry-imgbox">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 80vw"
                    className="demo03-entry-img"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03 / Selected Architectural Archive Works */}
        <section className="demo03-projects-section" aria-label="Selected Projects" style={{ marginTop: '90px' }}>
          <div className="demo03-section-head">
            <div>
              <span className="demo03-label-tag">03 / ARCHIVE</span>
              <h2 className="demo03-section-title">SELECTED COMMISSIONS</h2>
            </div>
            <Link href="/projects" className="demo03-archive-link">
              ARCHIVE INDEX →
            </Link>
          </div>

          <div className="demo03-projects-flow">
            {projects.map((project) => (
              <article key={project.slug} className="demo03-project-entry">
                <Link href={`/projects/${project.slug}`} className="demo03-entry-link">
                  <div className="demo03-entry-top">
                    {/* Oversized Number */}
                    <div className="demo03-entry-num">{project.numberShort}</div>

                    <div className="demo03-entry-meta">
                      <h3 className="demo03-entry-title">
                        <span className="demo03-hover-square">■ </span>
                        {project.title}
                      </h3>
                      <div className="demo03-entry-details">
                        <span>{project.topology}</span>
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="demo03-entry-imgbox">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 80vw"
                      className="demo03-entry-img"
                    />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
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
              aria-label="Close photograph view"
            >
              [✕ CLOSE]
            </button>

            <div>
              <div className="typewriter-label typewriter-accent" style={{ marginBottom: '4px' }}>
                SWISS ARCHIVE #{selectedTrial.numberShort} · {selectedTrial.year}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
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
