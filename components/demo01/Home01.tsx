'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';

interface ClientTrialItem {
  id: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  aspectClass: string;
  spanClass: string;
}

const clientTrialWorks: ClientTrialItem[] = [
  {
    id: 'trial-05',
    number: '01',
    title: 'BORIVALI STATION CIVIC PLAZA',
    category: 'TRANSIT INFRASTRUCTURE / PUBLIC REALM',
    location: 'BORIVALI, MUMBAI',
    year: '2026',
    image: '/client-trial/client-05-borivali-station.jpg',
    description:
      'Arrival forecourt and pedestrian promenade featuring continuous embedded curvilinear ground illumination ribbons, rhythmic palm colonnades, and modular stone paving.',
    aspectClass: 'aspect-wide',
    spanClass: 'span-12',
  },
  {
    id: 'trial-01',
    number: '02',
    title: 'URBAN SWING / SPATIAL PAUSE',
    category: 'MICRO-HABITAT / STREET FURNITURE',
    location: 'SOUTH MUMBAI',
    year: '2025',
    image: '/client-trial/client-01-urban-swing.png',
    description:
      'Minimalist kinetic steel canopy structure framing human respite, contemplation, and spontaneous interaction along dense urban vehicular transit corridors.',
    aspectClass: 'aspect-landscape',
    spanClass: 'span-7',
  },
  {
    id: 'trial-02',
    number: '03',
    title: 'CIVIC COURTYARD & MODULAR SETTEES',
    category: 'LANDSCAPE COMMONS / PUBLIC SEATING',
    location: 'MUMBAI METROPOLITAN',
    year: '2025',
    image: '/client-trial/client-02-civic-plaza.png',
    description:
      'Curvilinear cast stone seating landscape nestled beneath preserved canopy trees, cultivating community pause and unprogrammed social gathering.',
    aspectClass: 'aspect-square',
    spanClass: 'span-5',
  },
  {
    id: 'trial-04',
    number: '04',
    title: 'RECREATIONAL PARK CONCOURSE',
    category: 'PUBLIC WELLNESS / URBAN GREEN SPINE',
    location: 'SUBURBAN MUMBAI',
    year: '2025',
    image: '/client-trial/client-04-public-track.png',
    description:
      'Continuous curved athletic promenade and jogging circuit interwoven through public park vegetation, balancing community physical wellness with quiet landscape vistas.',
    aspectClass: 'aspect-landscape',
    spanClass: 'span-6',
  },
  {
    id: 'trial-03',
    number: '05',
    title: 'CIVIC MEMORIAL & BOTANICAL PLINTH',
    category: 'CIVIC INSTALLATION / MONUMENT COMMONS',
    location: 'MAHARASHTRA',
    year: '2024',
    image: '/client-trial/client-03-memorial-plinth.jpg',
    description:
      'Elevated ceremonial pavilion and concentric botanical landscape plinth with calibrated night illumination highlighting historical civic installation.',
    aspectClass: 'aspect-landscape',
    spanClass: 'span-6',
  },
];

export default function Home01() {
  const featuredProjects = projects.slice(0, 4);
  const [selectedTrialItem, setSelectedTrialItem] = useState<ClientTrialItem | null>(null);

  return (
    <div className="demo01-container">
      {/* Hero Section */}
      <section className="hero-section" aria-label="Studio Overview">
        <div className="container">
          <div className="hero-media-wrapper">
            <Image
              src="/client-trial/client-05-borivali-station.jpg"
              alt="Studio De.PTH Realized Architecture — Borivali Station Civic Plaza"
              fill
              priority
              sizes="100vw"
              className="hero-image"
            />
          </div>

          <div className="hero-caption-bar">
            <div>
              <div className="hero-caption-title">
                STUDIO <span>DE.</span>PTH
              </div>
              <div
                className="typewriter-label typewriter-accent"
                style={{ fontSize: '0.72rem', marginTop: '6px' }}
              >
                ● CLIENT TRIAL PHOTOGRAPHY · BORIVALI STATION CIVIC PLAZA
              </div>
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
                Studio De.PTH explores architecture, spatial design, and transformative habitats
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

      {/* 02 / Client Trial In-Situ Photography Showcase */}
      <section
        className="section-padding client-trial-section"
        aria-label="Client Trial Photography In Situ"
      >
        <div className="container">
          <div className="client-trial-header">
            <div>
              <SectionLabel number="02" title="CLIENT TRIAL ARCHIVE" />
              <h2 className="client-trial-heading">
                REALIZED HABITATS <br />
                <span>IN SITU (MUMBAI)</span>
              </h2>
            </div>
            <div className="client-trial-meta-box">
              <div className="typewriter-label typewriter-accent">
                ● 05 CLIENT TRIAL PHOTOGRAPHS
              </div>
              <p
                className="typewriter-label"
                style={{ marginTop: '8px', color: 'var(--muted)', lineHeight: '1.7' }}
              >
                Field documentation from Studio De.PTH commissions exploring human pause,
                civic concourses, and curvilinear public illumination across Mumbai.
              </p>
            </div>
          </div>

          <div className="client-trial-grid">
            {clientTrialWorks.map((item) => (
              <article
                key={item.id}
                className={`client-trial-card ${item.spanClass}`}
                onClick={() => setSelectedTrialItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTrialItem(item);
                  }
                }}
                aria-label={`View enlarged photograph of ${item.title}`}
              >
                <div className="client-trial-badge">
                  <span>
                    <span className="active-marker">■ </span>
                    {item.number} / {item.category}
                  </span>
                  <span>{item.year}</span>
                </div>

                <div className={`client-trial-img-box ${item.aspectClass}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="client-trial-img"
                  />
                </div>

                <div className="client-trial-info">
                  <div className="client-trial-title">
                    <span>{item.title}</span>
                    <span
                      className="typewriter-label"
                      style={{ fontSize: '0.75rem', color: 'var(--muted)' }}
                    >
                      {item.location}
                    </span>
                  </div>
                  <p className="client-trial-desc">{item.description}</p>
                  <div className="client-trial-expand-tag">
                    [+] CLICK TO EXPAND HIGH-RES PHOTOGRAPH ↗
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / Selected Architectural Projects Section */}
      <section className="section-padding" aria-label="Featured Projects">
        <div className="container">
          <div
            style={{
              marginBottom: '48px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <SectionLabel number="03" title="SELECTED PROJECTS" />
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

      {/* Lightbox Modal for Enlarged Client Trial Photography */}
      {selectedTrialItem && (
        <div
          className="client-trial-modal-overlay"
          onClick={() => setSelectedTrialItem(null)}
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
              onClick={() => setSelectedTrialItem(null)}
              aria-label="Close enlarged view"
            >
              [✕ CLOSE]
            </button>

            <div>
              <div className="typewriter-label typewriter-accent" style={{ marginBottom: '4px' }}>
                CLIENT TRIAL PHOTOGRAPH #{selectedTrialItem.number} · {selectedTrialItem.year}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.2rem',
                  letterSpacing: '0.06em',
                }}
              >
                {selectedTrialItem.title}
              </h3>
              <div className="typewriter-label" style={{ color: 'var(--muted)', marginTop: '4px' }}>
                {selectedTrialItem.category} · {selectedTrialItem.location}
              </div>
            </div>

            <div className="client-trial-modal-media">
              <Image
                src={selectedTrialItem.image}
                alt={selectedTrialItem.title}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--foreground)' }}>
              {selectedTrialItem.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
