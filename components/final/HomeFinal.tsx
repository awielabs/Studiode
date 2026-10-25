'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
              alignItems: 'center',
              paddingTop: '20px',
              paddingBottom: '24px',
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
    </div>
  );
}
