import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import SectionLabel from '@/components/SectionLabel';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found — Studio De.PTH',
    };
  }

  return {
    title: `${project.title} — Studio De.PTH`,
    description: project.description,
  };
}

export default function IndividualProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Find index and next project
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="section-padding">
      <div className="container">
        {/* Back Link */}
        <Link href="/projects" className="back-link">
          ← Back to Projects
        </Link>

        {/* Project Header Info */}
        <header className="project-header-meta">
          <SectionLabel number={String(currentIndex + 1).padStart(2, '0')} title={project.topology.toUpperCase()} />
          <h1 className="project-title-large">{project.title}</h1>
          {project.subtitle && (
            <p className="typewriter-label" style={{ marginBottom: '24px', color: 'var(--muted)' }}>
              {project.subtitle}
            </p>
          )}

          <div className="project-meta-strip">
            <div className="meta-column-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">{project.location}</span>
            </div>
            <div className="meta-column-item">
              <span className="meta-label">Topology</span>
              <span className="meta-value">{project.topology}</span>
            </div>
            <div className="meta-column-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">{project.year}</span>
            </div>
            {project.details?.scale && (
              <div className="meta-column-item">
                <span className="meta-label">Scale</span>
                <span className="meta-value">{project.details.scale}</span>
              </div>
            )}
            {project.details?.status && (
              <div className="meta-column-item">
                <span className="meta-label">Status</span>
                <span className="meta-value">{project.details.status}</span>
              </div>
            )}
          </div>
        </header>

        {/* Hero Image */}
        <div className="project-hero-frame">
          <Image
            src={project.coverImage}
            alt={`${project.title} Hero View`}
            width={1400}
            height={788}
            priority
            className="project-hero-img"
          />
        </div>

        {/* Editorial Description */}
        <div className="project-editorial-narrative">
          <div>
            <span className="typewriter-label typewriter-accent">INTENT</span>
          </div>
          <div className="project-narrative-text">
            {project.description}
          </div>
        </div>

        {/* 2-Column Gallery Pair */}
        {project.images && project.images.length >= 2 && (
          <div className="project-gallery-pair">
            <div className="gallery-item">
              <Image
                src={project.images[0]}
                alt={`${project.title} Detail 01`}
                width={800}
                height={600}
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <Image
                src={project.images[1]}
                alt={`${project.title} Detail 02`}
                width={800}
                height={600}
                className="gallery-img"
              />
            </div>
          </div>
        )}

        {/* Project Details Specification Table */}
        <div className="project-spec-table">
          <div className="project-spec-row">
            <span className="meta-label">Program</span>
            <span className="meta-value">{project.topology} Enclosure</span>
          </div>
          <div className="project-spec-row">
            <span className="meta-label">Location</span>
            <span className="meta-value">{project.location}</span>
          </div>
          <div className="project-spec-row">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">{project.year}</span>
          </div>
          <div className="project-spec-row">
            <span className="meta-label">Principal Team</span>
            <span className="meta-value">Studio De.PTH Practice Lab</span>
          </div>
        </div>

        {/* Final Full-width Image */}
        {project.images && project.images.length >= 3 && (
          <div className="project-hero-frame" style={{ marginBottom: '70px' }}>
            <Image
              src={project.images[2]}
              alt={`${project.title} Atmosphere`}
              width={1400}
              height={788}
              className="project-hero-img"
            />
          </div>
        )}

        {/* Next Project Bar */}
        <div className="next-project-bar">
          <Link href={`/projects/${nextProject.slug}`} className="next-project-link">
            <span>Next Project: {nextProject.title}</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
