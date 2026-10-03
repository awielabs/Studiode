'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';

interface ProjectDetail03Props {
  project: Project;
}

export default function ProjectDetail03({ project }: ProjectDetail03Props) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="demo03-canvas section-padding">
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '32px' }}>
          <Link href="/projects" className="demo03-back-btn">
            ← ARCHIVE INDEX
          </Link>
        </div>

        {/* Oversized Header */}
        <header className="demo03-detail-head">
          <div className="demo03-detail-massive-num">{project.numberShort}</div>
          <div className="demo03-detail-meta-group">
            <h1 className="demo03-detail-name">{project.title}</h1>
            <div className="demo03-detail-props">
              <span>PROGRAM: {project.topology.toUpperCase()}</span>
              <span>LOCATION: {project.location.toUpperCase()}</span>
              <span>CHRONOLOGY: {project.year}</span>
              {project.details?.scale && (
                <span>SCALE: {project.details.scale.toUpperCase()}</span>
              )}
            </div>
          </div>
        </header>

        {/* Full-width Image */}
        <div className="demo03-fullwidth-image-frame">
          <Image
            src={project.coverImage}
            alt={`${project.title} Primary View`}
            width={1400}
            height={800}
            priority
            className="demo03-full-img"
          />
        </div>

        {/* Strict Typographic Description */}
        <div className="demo03-desc-layout">
          <div className="demo03-desc-col-left">
            <span className="demo03-label-tag">MONOGRAPH SPECIFICATION</span>
            <span className="demo03-swiss-lead">TACTILE TECTONICS & VOLUMETRIC HARMONY</span>
          </div>
          <div className="demo03-desc-col-right">
            <p className="demo03-desc-paragraph">{project.description}</p>
          </div>
        </div>

        {/* 2-Column Gallery Pair */}
        {project.images && project.images.length >= 2 && (
          <div className="demo03-gallery-pair-grid">
            <div className="demo03-pair-cell">
              <Image
                src={project.images[0]}
                alt={`${project.title} Detail 01`}
                width={700}
                height={500}
                className="demo03-pair-img"
              />
              <span className="demo03-caption">PLATE {project.numberShort}.1 / DETAIL ELEVATION</span>
            </div>
            <div className="demo03-pair-cell">
              <Image
                src={project.images[1]}
                alt={`${project.title} Detail 02`}
                width={700}
                height={500}
                className="demo03-pair-img"
              />
              <span className="demo03-caption">PLATE {project.numberShort}.2 / LIGHT RECESS STUDY</span>
            </div>
          </div>
        )}

        {/* Final Full-width Image */}
        {project.images && project.images.length >= 3 && (
          <div className="demo03-fullwidth-image-frame" style={{ marginTop: '48px' }}>
            <Image
              src={project.images[2]}
              alt={`${project.title} Atmosphere`}
              width={1400}
              height={780}
              className="demo03-full-img"
            />
            <span className="demo03-caption" style={{ display: 'block', marginTop: '12px' }}>
              PLATE {project.numberShort}.3 / PANORAMIC HABITAT CONTEXT
            </span>
          </div>
        )}

        {/* Next Project Bar */}
        <div className="demo03-next-bar">
          <Link href={`/projects/${nextProject.slug}`} className="demo03-next-link">
            <span>NEXT: {nextProject.numberShort} — {nextProject.title}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
