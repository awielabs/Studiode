'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project, projects } from '@/data/projects';

interface ProjectDetail04Props {
  project: Project;
}

export default function ProjectDetail04({ project }: ProjectDetail04Props) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="demo04-story-canvas section-padding">
      <div className="container">
        {/* Magazine Masthead Breadcrumb */}
        <div className="demo04-article-masthead">
          <Link href="/projects" className="demo04-article-back">
            ← RETURN TO JOURNAL CHRONICLE
          </Link>
          <span className="demo04-article-vol">MONOGRAPH DOSSIER / NO. {project.numberShort}</span>
        </div>

        {/* Article Headline Header */}
        <header className="demo04-article-header">
          <div className="demo04-article-num">{project.number}</div>
          <h1 className="demo04-article-title">{project.title}</h1>
          {project.subtitle && (
            <p className="demo04-article-kicker">{project.subtitle}</p>
          )}

          <div className="demo04-article-meta-line">
            <div className="meta-cell">
              <span className="meta-k">LOCATION</span>
              <span className="meta-v">{project.location}</span>
            </div>
            <div className="meta-cell">
              <span className="meta-k">PROGRAM</span>
              <span className="meta-v">{project.topology} Habitat</span>
            </div>
            <div className="meta-cell">
              <span className="meta-k">CHRONOLOGY</span>
              <span className="meta-v">{project.year}</span>
            </div>
            {project.details?.scale && (
              <div className="meta-cell">
                <span className="meta-k">SCALE</span>
                <span className="meta-v">{project.details.scale}</span>
              </div>
            )}
          </div>
        </header>

        {/* Hero Article Image */}
        <div className="demo04-article-hero-frame">
          <Image
            src={project.coverImage}
            alt={`${project.title} Primary View`}
            width={1400}
            height={840}
            priority
            className="demo04-article-hero-img"
          />
          <div className="demo04-article-caption">
            <span>PLATE 01.0 — PRIMARY MONOGRAPHIC APERTURE VIEW</span>
            <span>PHOTOGRAPHY / ARCHITECTURAL ARCHIVE</span>
          </div>
        </div>

        {/* Editorial Narrative & Lead Essay */}
        <div className="demo04-article-body-layout">
          <div className="article-aside-col">
            <span className="aside-stamp">ARCHITECTURAL ESSAY</span>
            <span className="aside-lead">INTENTIONAL MATERIALITY</span>
          </div>
          <div className="article-main-text">
            <p className="article-p-lead">
              {project.description}
            </p>
          </div>
        </div>

        {/* Secondary Full-Width Photographic Spread */}
        {project.images && project.images.length >= 1 && (
          <div className="demo04-article-hero-frame" style={{ margin: '60px 0' }}>
            <Image
              src={project.images[0]}
              alt={`${project.title} Spatial Study`}
              width={1400}
              height={800}
              className="demo04-article-hero-img"
            />
            <div className="demo04-article-caption">
              <span>PLATE 02.0 — INTERNAL HABITAT PERSPECTIVE</span>
            </div>
          </div>
        )}

        {/* Technical Data Specification Sheet */}
        <div className="demo04-article-spec-sheet">
          <div className="article-spec-item">
            <span className="spec-label">TYPOLOGY</span>
            <span className="spec-value">{project.topology} Enclosure</span>
          </div>
          <div className="article-spec-item">
            <span className="spec-label">REGIONAL CONTEXT</span>
            <span className="spec-value">{project.location}</span>
          </div>
          <div className="article-spec-item">
            <span className="spec-label">CHRONOLOGY</span>
            <span className="spec-value">{project.year}</span>
          </div>
          <div className="article-spec-item">
            <span className="spec-label">PRACTICE LEAD</span>
            <span className="spec-value">Studio De.PTH Practice Lab</span>
          </div>
        </div>

        {/* Image Pair Spread */}
        {project.images && project.images.length >= 3 && (
          <div className="demo04-article-pair-spread">
            <div className="article-pair-cell">
              <Image
                src={project.images[1]}
                alt={`${project.title} Detail Plate A`}
                width={700}
                height={500}
                className="article-pair-img"
              />
              <span className="demo04-article-caption">PLATE 03.1 / TECTONIC JOINT STUDY</span>
            </div>
            <div className="article-pair-cell">
              <Image
                src={project.images[2]}
                alt={`${project.title} Detail Plate B`}
                width={700}
                height={500}
                className="article-pair-img"
              />
              <span className="demo04-article-caption">PLATE 03.2 / DAYLIGHT & SHADOW MODULATION</span>
            </div>
          </div>
        )}

        {/* Next Article Footer Navigation */}
        <div className="demo04-next-article-bar">
          <Link href={`/projects/${nextProject.slug}`} className="demo04-next-article-link">
            <div>
              <span className="next-tag">NEXT ARTICLE IN JOURNAL</span>
              <span className="next-title">{nextProject.numberShort} — {nextProject.title}</span>
            </div>
            <span className="next-arrow">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
