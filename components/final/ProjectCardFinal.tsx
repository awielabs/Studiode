'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project as ShivamProject } from '@/data/shivamProjects';

interface ProjectCardFinalProps {
  project: ShivamProject;
  onSelect: (project: ShivamProject) => void;
}

export default function ProjectCardFinal({ project, onSelect }: ProjectCardFinalProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
        backgroundColor: '#ffffff',
        border: '1px solid',
        borderColor: isHovered ? '#111111' : '#e5e5e5', // Darker border on hover
        opacity: 1,
        transform: isHovered
          ? 'translate3d(0, -8px, 0) scale(1.018)'
          : 'translate3d(0, 0, 0) scale(1)', // Kept current animation
        boxShadow: isHovered
          ? '0 20px 40px -12px rgba(0, 0, 0, 0.08)'
          : '0 2px 6px rgba(0, 0, 0, 0.015)',
        transition:
          'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease',
        willChange: 'transform, box-shadow',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Visual Image Container (NO header / typology overlay badge) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          backgroundColor: '#f7f7f7',
        }}
      >
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.045)' : 'scale(1)',
            transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform',
          }}
          priority={false}
        />

        {/* Hover Button: Changes to "View Project →" when hovered */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: isHovered ? '#111111' : 'rgba(255, 255, 255, 0.94)',
            color: isHovered ? '#ffffff' : '#111111',
            fontSize: '0.72rem',
            fontFamily: "var(--font-mono, 'Space Mono', monospace)",
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            border: isHovered ? '1px solid #111111' : '1px solid #ebebeb',
            transform: isHovered ? 'translateY(0)' : 'translateY(2px)',
          }}
        >
          {isHovered ? 'View Project →' : 'Detail'}
        </div>
      </div>

      {/* Project Meta Information (NO location, font style consistent) */}
      <div
        style={{
          padding: '1.4rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: isHovered ? '#941B1B' : '#111111',
              transition: 'color 0.25s ease',
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: '0.76rem',
              color: '#888888',
              letterSpacing: '0.08em',
              flexShrink: 0,
            }}
          >
            {project.year}
          </span>
        </div>

        <div
          style={{
            fontSize: '0.76rem',
            fontFamily: "var(--font-mono, 'Space Mono', monospace)",
            color: '#888888',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {project.typology} {project.area ? `· ${project.area}` : ''}
        </div>
      </div>
    </article>
  );
}
