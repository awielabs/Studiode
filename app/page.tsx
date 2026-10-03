import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" aria-label="Studio Overview">
        <div className="container">
          <div className="hero-media-wrapper">
            <Image
              src="/hero.jpg"
              alt="Studio De.PTH Architecture Work"
              fill
              priority
              sizes="100vw"
              className="hero-image"
            />
          </div>

          <div className="hero-caption-bar">
            <div className="hero-caption-title">
              STUDIO <span>DE.</span>PTH
            </div>
            <div className="hero-caption-tagline">
              Design for People + Transformative Habitats
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding intro-section" aria-label="Studio Introduction">
        <div className="container">
          <div className="intro-grid">
            <SectionLabel number="01" title="STUDIO" />
            <div className="intro-content">
              <h1 className="intro-heading">
                Designing spaces
                <br />
                with purpose.
              </h1>
              <p className="intro-body">
                Studio De.PTH explores architecture, spatial design and transformative habitats
                through a people-focused approach. Rooted in contextual materiality, climate
                responsiveness, and architectural restraint, our work cultivates quiet spaces
                that enrich everyday life.
              </p>
              <div style={{ marginTop: '36px' }}>
                <Link
                  href="/about"
                  className="typewriter-label"
                  style={{
                    color: 'var(--foreground)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                  }}
                >
                  Read Studio Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding" aria-label="Featured Projects">
        <div className="container">
          <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <SectionLabel number="02" title="SELECTED PROJECTS" />
            <Link
              href="/projects"
              className="typewriter-label"
              style={{ color: 'var(--accent)' }}
            >
              View All Projects →
            </Link>
          </div>

          <div className="projects-editorial-grid">
            {featuredProjects.map((project, idx) => {
              // Asymmetric editorial rhythm
              let spanClass = 'span-6';
              let aspectClass = 'aspect-landscape';

              if (idx === 0) {
                spanClass = 'span-7';
                aspectClass = 'aspect-landscape';
              } else if (idx === 1) {
                spanClass = 'span-5';
                aspectClass = 'aspect-square';
              } else if (idx === 2) {
                spanClass = 'span-12';
                aspectClass = 'aspect-wide';
              } else if (idx === 3) {
                spanClass = 'span-6';
                aspectClass = 'aspect-landscape';
              }

              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={idx}
                  spanClass={spanClass}
                  aspectClass={aspectClass}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Statement Section */}
      <section className="section-padding statement-section" aria-label="Studio Statement">
        <div className="container">
          <div className="statement-content">
            <div className="typewriter-label typewriter-accent" style={{ marginBottom: '24px' }}>
              PHILOSOPHY
            </div>
            <h2 className="statement-heading">
              Design for people.
              <br />
              <span>Spaces for change.</span>
            </h2>
            <p className="statement-sub">
              Contemporary Architecture · Spatial Research · Transformative Habitats
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
