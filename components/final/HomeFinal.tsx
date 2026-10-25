'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import SectionLabel from '@/components/SectionLabel';

export default function HomeFinal() {
  const featuredSlides = [
    {
      title: 'The Monolith Pavilion',
      location: 'Mumbai, India',
      category: 'Cultural Monograph',
      image: '/hero.jpg',
      slug: 'the-monolith-pavilion',
    },
    {
      title: 'House of Porous Terraces',
      location: 'Alibaug, Coastal Maharashtra',
      category: 'Residential Villa',
      image: '/images/residential-villa-alibaug.jpg',
      slug: 'house-of-porous-terraces',
    },
    {
      title: 'Courtyard of Five Wells',
      location: 'Goa, India',
      category: 'Hospitality Resort',
      image: '/images/hospitality-resort-goa.jpg',
      slug: 'courtyard-of-five-wells',
    },
    {
      title: 'The Ochre Pavilion',
      location: 'Pune, Maharashtra',
      category: 'Cultural Centre',
      image: '/images/cultural-arts-pune.jpg',
      slug: 'the-ochre-pavilion',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll / auto-advance slideshow similar to Concept 5
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, featuredSlides.length]);

  const activeSlide = featuredSlides[currentSlide];
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="final-home-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Hero Section with Compact Framed Auto-Carousel */}
      <section className="hero-section" aria-label="Studio Overview" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Framed Small Image Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1040px',
              margin: '0 auto',
              height: 'clamp(320px, 46vh, 480px)',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ebebeb',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {featuredSlides.map((slide, idx) => (
              <div
                key={slide.title}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: idx === currentSlide ? 1 : 0,
                  transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: idx === currentSlide ? 2 : 1,
                  pointerEvents: idx === currentSlide ? 'auto' : 'none',
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1200px) 100vw, 1040px"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: idx === currentSlide ? 'scale(1)' : 'scale(1.03)',
                    transition: 'transform 6s ease-out',
                  }}
                />
              </div>
            ))}

            {/* Slide Navigation Controls */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '18px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                backdropFilter: 'blur(6px)',
                padding: '4px 10px',
                borderRadius: '2px',
              }}
            >
              {featuredSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentSlide ? '22px' : '7px',
                    height: '5px',
                    borderRadius: '1px',
                    backgroundColor: idx === currentSlide ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right below the images: Left lines and Right lines */}
          <div
            style={{
              maxWidth: '1040px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingTop: '20px',
              paddingBottom: '24px',
              borderBottom: '1px solid #eeeeee',
              gap: '1.25rem',
            }}
          >
            {/* Left side info */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#111111',
                  textTransform: 'uppercase',
                }}
              >
                [ 0{currentSlide + 1} / 0{featuredSlides.length} ] {activeSlide.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  color: '#777777',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                }}
              >
                {activeSlide.location} · {activeSlide.category}
              </div>
            </div>

            {/* Right side lines strictly as specified */}
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#111111',
                }}
              >
                STUDIO <span style={{ color: '#941B1B' }}>De.PTH</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                  color: '#666666',
                  marginTop: '3px',
                }}
              >
                Design for People + Transformative Habitats
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section (Concept 1 Design) */}
      <section className="section-padding intro-section" aria-label="Studio Introduction" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="intro-grid">
            <SectionLabel number="01" title="STUDIO" />
            <div className="intro-content">
              <h1 className="intro-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2 }}>
                Designing spaces
                <br />
                with purpose.
              </h1>
              <p className="intro-body" style={{ fontSize: '1.05rem', color: '#555555', lineHeight: 1.7, maxWidth: '640px' }}>
                Studio De.PTH explores architecture, spatial design and transformative habitats
                through a people-focused approach. Rooted in contextual materiality, climate
                responsiveness, and architectural restraint, our work cultivates quiet spaces
                that enrich everyday life.
              </p>
              <div style={{ marginTop: '32px' }}>
                <Link
                  href="/about"
                  className="typewriter-label"
                  style={{
                    color: '#111111',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  Read Studio Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Selected Projects Section (Concept 1 Editorial Layout) */}
      <section className="section-padding" aria-label="Featured Projects" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <SectionLabel number="02" title="SELECTED PROJECTS" />
            <Link
              href="/projects"
              className="typewriter-label"
              style={{ color: '#941B1B', fontWeight: 700, letterSpacing: '0.08em' }}
            >
              View All Projects →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                style={{
                  border: '1px solid #eeeeee',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <Link href={`/projects/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        color: '#941B1B',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        marginBottom: '6px',
                      }}
                    >
                      {project.topology}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#111111',
                        marginBottom: '8px',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.86rem', color: '#666666', lineHeight: 1.5, margin: 0 }}>
                      {project.subtitle || project.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
