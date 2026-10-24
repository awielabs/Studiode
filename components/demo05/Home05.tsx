'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/data/shivamProjects';

export default function Home05() {
  const featuredProjects = PROJECTS.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance hero slides gently every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const activeProject = featuredProjects[currentSlide];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: 'calc(100vh - 80px)', overflow: 'hidden' }}>
      {/* FULLSCREEN HERO SLIDER */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: 'calc(100vh - 80px)',
          minHeight: '620px',
          backgroundColor: '#111111',
          overflow: 'hidden',
        }}
        aria-label="Studio De.PTH Monograph Project Slider"
      >
        {/* Slide Image */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src={activeProject.mainImage}
            alt={activeProject.title}
            fill
            priority
            style={{
              objectFit: 'cover',
              transition: 'opacity 0.8s ease-in-out',
            }}
          />

          {/* Vignette / bottom gradient for typewriter contrast */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '58%',
              background:
                'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Bottom Overlay: Project Meta & Editorial Typography */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '2.5rem 0',
            zIndex: 10,
            color: '#ffffff',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: '#941B1B',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      padding: '2px 8px',
                      fontWeight: 700,
                    }}
                  >
                    {activeProject.typology}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#cccccc',
                    }}
                  >
                    {activeProject.location} · {activeProject.year}
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    lineHeight: 1.15,
                    marginBottom: '0.6rem',
                    color: '#ffffff',
                  }}
                >
                  {activeProject.title}
                </h1>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#dddddd',
                    maxWidth: '650px',
                    lineHeight: 1.5,
                  }}
                >
                  {activeProject.summary}
                </p>
              </div>

              {/* Slider Controls & Link */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '1.25rem',
                }}
              >
                <Link
                  href={`/projects?id=${activeProject.id}`}
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: '0.8rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 18px',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#941B1B';
                    e.currentTarget.style.borderColor = '#941B1B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  Explore Project Details →
                </Link>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: '#ffffff',
                  }}
                >
                  {/* Previous Button */}
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        prev === 0 ? featuredProjects.length - 1 : prev - 1
                      )
                    }
                    aria-label="Previous Slide"
                    style={{
                      border: '1px solid rgba(255,255,255,0.4)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      fontSize: '0.8rem',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#941B1B';
                      e.currentTarget.style.backgroundColor = '#941B1B';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    ←
                  </button>

                  {/* Slide Counter */}
                  <span
                    style={{
                      fontSize: '0.8rem',
                      letterSpacing: '0.15em',
                      color: '#cccccc',
                    }}
                  >
                    <strong style={{ color: '#ffffff' }}>0{currentSlide + 1}</strong> / 0
                    {featuredProjects.length}
                  </span>

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
                    }
                    aria-label="Next Slide"
                    style={{
                      border: '1px solid rgba(255,255,255,0.4)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      fontSize: '0.8rem',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#941B1B';
                      e.currentTarget.style.backgroundColor = '#941B1B';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
