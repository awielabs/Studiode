'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';

interface ProjectDetail02Props {
  project: Project;
}

export default function ProjectDetail02({ project }: ProjectDetail02Props) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="demo02-canvas section-padding">
      <div className="container">
        {/* Exhibition Sheet Top */}
        <div className="demo02-sheet-header">
          <Link href="/projects" className="demo02-back-link">
            ← ARCHIVE INDEX
          </Link>
          <div className="demo02-meta-badge">
            <span className="demo02-red-mark">■</span>
            <span>EXHIBITION DOSSIER / {project.number}</span>
          </div>
          <div className="demo02-meta-badge">
            <span>STATUS: {project.details?.status || 'SELECTED'}</span>
          </div>
        </div>

        {/* Title Block */}
        <header className="demo02-detail-header">
          <div className="demo02-detail-num-tag">
            PLATE {project.number} — {project.topology.toUpperCase()}
          </div>
          <h1 className="demo02-detail-title">{project.title}</h1>
          {project.subtitle && (
            <p className="demo02-detail-subtitle">{project.subtitle}</p>
          )}
        </header>

        {/* Hero Architectural Plate Frame */}
        <div className="demo02-hero-plate-frame">
          <div className="demo02-hero-plate-inner">
            <Image
              src={project.coverImage}
              alt={`${project.title} Primary View`}
              width={1400}
              height={820}
              priority
              className="demo02-hero-img"
            />
          </div>
          <div className="demo02-plate-caption">
            <span>FIGURE 1.0 — PRIMARY MONOGRAPHIC ELEVATION</span>
            <span>SCALE RATIO: 1:1 REALIZED</span>
          </div>
        </div>

        {/* Technical Data Specification Sheet */}
        <div className="demo02-spec-sheet">
          <div className="demo02-spec-col">
            <span className="spec-label">PROGRAM</span>
            <span className="spec-value">{project.topology} Enclosure</span>
          </div>
          <div className="demo02-spec-col">
            <span className="spec-label">LOCATION</span>
            <span className="spec-value">{project.location}</span>
          </div>
          <div className="demo02-spec-col">
            <span className="spec-label">CHRONOLOGY</span>
            <span className="spec-value">{project.year}</span>
          </div>
          {project.details?.scale && (
            <div className="demo02-spec-col">
              <span className="spec-label">TOTAL SCALE</span>
              <span className="spec-value">{project.details.scale}</span>
            </div>
          )}
        </div>

        {/* Narrative Section */}
        <div className="demo02-narrative-grid">
          <div className="demo02-narrative-label">
            <span className="demo02-red-mark">■</span> ARCHITECTURAL INTENT
          </div>
          <div className="demo02-narrative-content">
            <p className="demo02-narrative-p">{project.description}</p>
          </div>
        </div>

        {/* Gallery Image Pair */}
        {project.images && project.images.length >= 2 && (
          <div className="demo02-gallery-row">
            <div className="demo02-gallery-cell">
              <div className="cell-imgbox">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} Spatial Detail 01`}
                  width={750}
                  height={550}
                  className="demo02-gallery-img"
                />
              </div>
              <div className="demo02-plate-caption">
                <span>FIGURE 2.1 — MATERIAL INTERSECTION</span>
              </div>
            </div>

            <div className="demo02-gallery-cell">
              <div className="cell-imgbox">
                <Image
                  src={project.images[1]}
                  alt={`${project.title} Spatial Detail 02`}
                  width={750}
                  height={550}
                  className="demo02-gallery-img"
                />
              </div>
              <div className="demo02-plate-caption">
                <span>FIGURE 2.2 — DAYLIGHT STUDY & SHADOW RECESS</span>
              </div>
            </div>
          </div>
        )}

        {/* Atmosphere Image */}
        {project.images && project.images.length >= 3 && (
          <div className="demo02-hero-plate-frame" style={{ marginTop: '48px' }}>
            <div className="demo02-hero-plate-inner">
              <Image
                src={project.images[2]}
                alt={`${project.title} Atmosphere`}
                width={1400}
                height={780}
                className="demo02-hero-img"
              />
            </div>
            <div className="demo02-plate-caption">
              <span>FIGURE 3.0 — HABITAT INTEGRATION PERSPECTIVE</span>
            </div>
          </div>
        )}

        {/* Next Project Footer Link */}
        <div className="demo02-next-bar">
          <Link href={`/projects/${nextProject.slug}`} className="demo02-next-link">
            <span>NEXT ARCHIVE RECORD: {nextProject.number} — {nextProject.title}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
