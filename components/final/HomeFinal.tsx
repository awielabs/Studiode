'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomeFinal() {
  const featuredSlides = [
    {
      title: 'Borivali Transit Concourse',
      location: 'Mumbai, Maharashtra',
      category: 'Civic Infrastructure',
      image: '/projects/project-borivali-station.jpg',
      slug: 'borivali-transit-concourse',
    },
    {
      title: 'Athletic Track & Sports Pavilion',
      location: 'Mumbai, Maharashtra',
      category: 'Civic & Recreation',
      image: '/projects/project-running-track.jpg',
      slug: 'athletic-track-pavilion',
    },
    {
      title: 'Urban Civic Plaza & Seating Grove',
      location: 'Mumbai, Maharashtra',
      category: 'Public Realm',
      image: '/projects/project-public-plaza.jpg',
      slug: 'urban-civic-plaza',
    },
    {
      title: 'Commemorative Installation & Elevated Canopy',
      location: 'Mumbai, Maharashtra',
      category: 'Cultural Installation',
      image: '/projects/project-monument-canopy.jpg',
      slug: 'commemorative-canopy',
    },
    {
      title: 'Community Steel Swing Pavilion',
      location: 'Mumbai, Maharashtra',
      category: 'Public Micro-Habitat',
      image: '/projects/project-swing-pavilion.jpg',
      slug: 'community-swing-pavilion',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance hero slides every 5 seconds per client specification
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, featuredSlides.length]);

  return (
    <div className="final-home-container" style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section Covering the Screen with Monolithic Typography */}
      <section className="hero-section" aria-label="Studio Overview" style={{ paddingTop: 0, width: '100%', flex: '1 0 auto' }}>
        {/* Full-Width Image Banner covering the screen */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'calc(100vh - 145px)',
            minHeight: '580px',
            backgroundColor: '#0c0e12',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background Slides */}
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
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: idx === currentSlide ? 'scale(1)' : 'scale(1.04)',
                  transition: 'transform 5s ease-out, opacity 0.9s ease-in-out',
                }}
              />
            </div>
          ))}

          {/* Dark Atmospheric Gradient Overlay (adapted from reference concept) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3,
              background:
                'linear-gradient(90deg, rgba(8, 10, 14, 0.94) 0%, rgba(8, 10, 14, 0.84) 40%, rgba(8, 10, 14, 0.45) 70%, rgba(8, 10, 14, 0.15) 100%), linear-gradient(0deg, rgba(8, 10, 14, 0.65) 0%, transparent 40%)',
              pointerEvents: 'none',
            }}
          />

          {/* Monolithic Typography Overlay (adapted from reference concept, without search bar) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(2.5rem, 6vw, 6rem)',
              maxWidth: '840px',
              pointerEvents: 'none',
            }}
          >
            {/* 3-Line Headline Statement */}
            <h1
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: 'clamp(2.2rem, 4.8vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: 0,
                marginBottom: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
              }}
            >
              <span style={{ whiteSpace: 'nowrap' }}>DESIGN FOR PEOPLE +</span>
              <span>TRANSFORMATIVE</span>
              <span style={{ color: '#c92a2a' }}>HABITATS.</span>
            </h1>

            {/* Subtitle adapting 2-line description */}
            <p
              style={{
                fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                fontSize: 'clamp(0.88rem, 1.35vw, 1.05rem)',
                color: 'rgba(255, 255, 255, 0.78)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '520px',
                letterSpacing: '0.02em',
              }}
            >
              Spatial research, architectural restraint, and human-centered environments.
              A curated monograph of transformative built forms and civic public pauses.
            </p>
          </div>

          {/* Slide Navigation Controls & Counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '28px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.62)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                fontSize: '0.74rem',
                color: 'rgba(255, 255, 255, 0.8)',
                letterSpacing: '0.06em',
                marginRight: '2px',
              }}
            >
              0{currentSlide + 1} / 0{featuredSlides.length}
            </span>
            {featuredSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                style={{
                  width: idx === currentSlide ? '22px' : '7px',
                  height: '5px',
                  borderRadius: '2px',
                  backgroundColor: idx === currentSlide ? '#ffffff' : 'rgba(255, 255, 255, 0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right below the images: Left lines and Right lines (Preserved from Image 2) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px clamp(1.5rem, 4vw, 4rem)',
            borderBottom: '1px solid #eeeeee',
            gap: '1.25rem',
          }}
        >
          {/* Left side: Copyright info with logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: '1.5px solid #111111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#111111',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                C
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    color: '#111111',
                    textTransform: 'uppercase',
                  }}
                >
                  COPYRIGHT
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                    fontSize: '0.74rem',
                    letterSpacing: '0.04em',
                    color: '#666666',
                  }}
                >
                  All Rights Reserved
                </div>
              </div>
            </div>

            {/* Right side: Studio De.PTH first statement */}
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
                STUDIO <span style={{ color: '#941B1B' }}>D<span className="brand-e">e</span>.</span>PTH
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
        </section>
      </div>
  );
}
