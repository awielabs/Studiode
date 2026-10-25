'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectDetailFinalProps {
  project?: Project;
  onBack?: () => void;
}

export default function ProjectDetailFinal({ project, onBack }: ProjectDetailFinalProps) {
  if (!project) {
    return (
      <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <p>Project not found.</p>
        <Link href="/projects" className="typewriter-label">
          ← Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <article
      className="demo04-story-canvas"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '80vh',
        paddingTop: '2rem',
        paddingBottom: '5rem',
      }}
    >
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Back Navigation Bar */}
        <div style={{ marginBottom: '1.75rem' }}>
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                color: '#666666',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: 0,
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666666')}
            >
              ← Back to Projects
            </button>
          ) : (
            <Link
              href="/projects"
              style={{
                fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                color: '#666666',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#666666')}
            >
              ← Back to Projects
            </Link>
          )}
        </div>

        {/* Compact Header (Made smaller per user requirement) */}
        <header
          style={{
            marginBottom: '2rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid #eeeeee',
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#941B1B',
              fontWeight: 700,
              marginBottom: '6px',
            }}
          >
            {project.topology} {project.year ? `· ${project.year}` : ''}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', // Made smaller
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '0.01em',
              lineHeight: 1.25,
              margin: '0 0 0.5rem 0',
            }}
          >
            {project.title}
          </h1>

          {project.subtitle && (
            <p
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: '0.92rem',
                color: '#666666',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {project.subtitle}
            </p>
          )}

          {/* Project Details Spec Row */}
          <div
            style={{
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid #eeeeee',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  color: '#888888',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                LOCATION
              </div>
              <div
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '0.95rem',
                  color: '#111111',
                  fontWeight: 600,
                }}
              >
                {project.details?.location || project.location || 'Mumbai, India'}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  color: '#888888',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                PROGRAM
              </div>
              <div
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '0.95rem',
                  color: '#111111',
                  fontWeight: 600,
                }}
              >
                {project.details?.topology || project.topology
                  ? (project.details?.topology || project.topology).includes('Habitat')
                    ? (project.details?.topology || project.topology)
                    : `${project.details?.topology || project.topology} Habitat`
                  : 'Residential Habitat'}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  color: '#888888',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                CHRONOLOGY
              </div>
              <div
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '0.95rem',
                  color: '#111111',
                  fontWeight: 600,
                }}
              >
                {project.details?.year || project.year || '2026'}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.72rem',
                  letterSpacing: '0.14em',
                  color: '#888888',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                SCALE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: '0.95rem',
                  color: '#111111',
                  fontWeight: 600,
                }}
              >
                {project.details?.scale || '680 sqm'}
              </div>
            </div>
          </div>
        </header>

        {/* Small Image Viewable on One Scroll */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '820px', // Small image
            height: 'clamp(280px, 40vh, 420px)', // Viewable in one single scroll
            margin: '0 auto 2rem auto',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ebebeb',
            overflow: 'hidden',
          }}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 820px"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Project Description (No additional cluttered details needed) */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            fontSize: '1rem',
            fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
            color: '#333333',
            lineHeight: 1.75,
          }}
        >
          <p>{project.description}</p>
        </div>
      </div>
    </article>
  );
}
