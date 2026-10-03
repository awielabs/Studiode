'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home03() {
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
                Constructing quiet habitats defined by human proportion and natural daylight.
              </p>
            </div>

            {/* Right Architectural Image Frame (45-55% area) */}
            <div className="demo03-hero-media">
              <div className="demo03-poster-image-frame">
                <Image
                  src="/hero.jpg"
                  alt="Studio De.PTH Architecture"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="demo03-hero-img"
                />
              </div>
              <div className="demo03-swiss-caption">
                FIGURE 01 — ARCHITECTURAL RESEARCH MONOGRAPH / 2026
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
            <p className="demo03-swiss-text">Designing from the internal somatic experience of occupants toward exterior envelope.</p>
          </div>
          <div className="demo03-manifesto-col">
            <span className="demo03-swiss-num">01.3</span>
            <span className="demo03-swiss-heading">PERMANENCE</span>
            <p className="demo03-swiss-text">Buildings configured to mature with time, local climate weathering, and generational use.</p>
          </div>
        </section>

        {/* Oversized Numbered Projects Section */}
        <section className="demo03-projects-section" aria-label="Selected Projects">
          <div className="demo03-section-head">
            <span className="demo03-label-tag">02 / ARCHIVE</span>
            <h2 className="demo03-section-title">SELECTED WORKS</h2>
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
    </div>
  );
}
