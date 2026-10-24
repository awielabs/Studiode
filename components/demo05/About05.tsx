'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STUDIO_DATA } from '@/data/shivamStudio';

export default function About05() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* 1. HEADER SECTION */}
      <section
        style={{
          borderBottom: '1px solid #ebebeb',
          padding: '4rem 0 3.5rem 0',
          backgroundColor: '#fafafa',
        }}
      >
        <div className="container">
          <div
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#941B1B',
              fontWeight: 700,
              marginBottom: '0.75rem',
            }}
          >
            [ Practice Profile · Tectonic Laboratory ]
          </div>

          <h1
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 700,
              color: '#111111',
              marginBottom: '1.25rem',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
            }}
          >
            About Us
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              marginTop: '2rem',
            }}
          >
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.7,
                color: '#222222',
                fontWeight: 500,
              }}
            >
              {STUDIO_DATA.aboutShort}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#555555',
              }}
            >
              {STUDIO_DATA.aboutFull.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY & PILLARS */}
      <section style={{ padding: '5.5rem 0 4rem 0', borderBottom: '1px solid #f0f0f0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: '#111111',
                marginBottom: '1rem',
              }}
            >
              Core Architectural Tenets
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#666666', lineHeight: 1.6 }}>
              Three fundamental axioms guiding our inquiry into materiality, human proportion, and ecological permanence.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {STUDIO_DATA.philosophy.map((item) => (
              <div
                key={item.number}
                style={{
                  border: '1px solid #e8e8e8',
                  padding: '2.25rem 2rem',
                  backgroundColor: '#ffffff',
                  position: 'relative',
                  transition: 'border-color 0.25s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: '#941B1B',
                    marginBottom: '1rem',
                  }}
                >
                  Pillar {item.number}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#555555' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE TWO FOUNDERS SECTION */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
            <div
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#941B1B',
                fontWeight: 700,
                marginBottom: '0.75rem',
              }}
            >
              [ Studio Leadership & Spatial Direction ]
            </div>
            <h2
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: 700,
                color: '#111111',
                marginBottom: '1rem',
              }}
            >
              The Two Founders
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.6 }}>
              Principal architects leading the studio&apos;s conceptual research, tectonic experiments, and built commissions across western India.
            </p>
          </div>

          {/* Founders Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
            }}
          >
            {STUDIO_DATA.founders.map((founder, idx) => (
              <div
                key={founder.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                  backgroundColor: '#ffffff',
                  padding: '2.5rem',
                  border: '1px solid #e5e5e5',
                }}
              >
                {/* Founder Image */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4/5',
                    maxHeight: '440px',
                    backgroundColor: '#e0e0e0',
                    border: '1px solid #e0e0e0',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    style={{
                      objectFit: 'cover',
                      filter: 'grayscale(100%) contrast(105%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: '#ffffff',
                      padding: '3px 8px',
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#941B1B',
                      fontWeight: 700,
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    Founder 0{idx + 1}
                  </div>
                </div>

                {/* Founder Info */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#111111',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {founder.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#941B1B',
                      fontWeight: 700,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {founder.role}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#777777',
                      fontStyle: 'italic',
                      marginBottom: '1rem',
                    }}
                  >
                    {founder.credentials}
                  </div>

                  {/* Quote block */}
                  <blockquote
                    style={{
                      borderLeft: '2px solid #941B1B',
                      paddingLeft: '1rem',
                      margin: '1.25rem 0',
                      fontSize: '0.85rem',
                      fontStyle: 'italic',
                      color: '#333333',
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;{founder.quote}&rdquo;
                  </blockquote>

                  {/* Biography Paragraphs */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                      fontSize: '0.88rem',
                      lineHeight: 1.7,
                      color: '#444444',
                      marginTop: '1.25rem',
                    }}
                  >
                    {founder.bio.map((b, bIdx) => (
                      <p key={bIdx}>{b}</p>
                    ))}
                  </div>

                  {/* Specialization tag */}
                  <div
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid #f0f0f0',
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      color: '#666666',
                    }}
                  >
                    <strong style={{ color: '#111111', textTransform: 'uppercase' }}>Focus:</strong>{' '}
                    {founder.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HISTORY OF THE STARTUP */}
      <section style={{ padding: '6rem 0 3rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: '#111111',
                marginBottom: '1rem',
              }}
            >
              History of the StartUp
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.6 }}>
              A chronology tracing the practice&apos;s formation from an experimental Mumbai design atelier to a recognized regional studio executing multi-scale architectural commissions.
            </p>
          </div>

          {/* Timeline List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              borderLeft: '1.5px solid #111111',
              paddingLeft: '2.5rem',
              marginLeft: '0.5rem',
            }}
          >
            {STUDIO_DATA.history.map((milestone) => (
              <div
                key={milestone.year}
                style={{
                  position: 'relative',
                }}
              >
                {/* Timeline node */}
                <span
                  style={{
                    position: 'absolute',
                    left: '-2.95rem',
                    top: '0.2rem',
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#ffffff',
                    border: '2px solid #941B1B',
                    borderRadius: '50%',
                  }}
                />

                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#941B1B',
                    letterSpacing: '0.1em',
                    marginBottom: '0.25rem',
                  }}
                >
                  {milestone.year}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '0.5rem',
                  }}
                >
                  {milestone.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: '#444444',
                    maxWidth: '750px',
                  }}
                >
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Link to Portfolio */}
          <div
            style={{
              marginTop: '5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid #eeeeee',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: '#666666' }}>
              Explore how our philosophy and founder investigations manifest in built works.
            </div>
            <Link
              href="/projects"
              style={{
                fontSize: '0.82rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#ffffff',
                backgroundColor: '#111111',
                padding: '10px 24px',
                border: '1px solid #111111',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#941B1B';
                e.currentTarget.style.borderColor = '#941B1B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#111111';
                e.currentTarget.style.borderColor = '#111111';
              }}
            >
              Browse Built Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
