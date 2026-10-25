'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project as ShivamProject } from '@/data/shivamProjects';

interface ProjectCard05Props {
  project: ShivamProject;
  onSelect: (project: ShivamProject) => void;
}

export default function ProjectCard05({ project, onSelect }: ProjectCard05Props) {
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
        borderColor: isHovered ? '#111111' : '#e5e5e5',
        transform: isHovered
          ? 'translate3d(0, -8px, 0) scale(1.018)'
          : 'translate3d(0, 0, 0) scale(1)',
        boxShadow: isHovered
          ? '0 20px 40px -12px rgba(0, 0, 0, 0.09)'
          : '0 2px 8px rgba(0, 0, 0, 0.02)',
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
      {/* Visual Image Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          backgroundColor: '#f2f2f2',
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
            filter: isHovered ? 'contrast(104%)' : 'contrast(100%)',
            transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
          priority={false}
        />

        {/* Minimal Typology Tag Overlay */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: '#ffffff',
            padding: '4px 10px',
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: isHovered ? '#941B1B' : '#111111',
            border: '1px solid #e0e0e0',
            transition: 'color 0.3s ease',
          }}
        >
          {project.typology}
        </div>

        {/* Pop-In View Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: isHovered ? '#941B1B' : 'rgba(255, 255, 255, 0.92)',
            color: isHovered ? '#ffffff' : '#111111',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
            opacity: isHovered ? 1 : 0.85,
            border: isHovered ? '1px solid #941B1B' : '1px solid #e5e5e5',
            transform: isHovered ? 'translateY(0)' : 'translateY(2px)',
          }}
        >
          {isHovered ? 'View Project →' : 'Detail'}
        </div>
      </div>

      {/* Project Meta Information */}
      <div
        style={{
          padding: '1.4rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
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
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: isHovered ? '#941B1B' : '#111111',
              transition: 'color 0.25s ease',
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontSize: '0.75rem',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#666666',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderTop: '1px solid #f2f2f2',
            paddingTop: '0.65rem',
          }}
        >
          <span>
            Location:{' '}
            <strong style={{ color: isHovered ? '#941B1B' : '#222222', fontWeight: 600 }}>
              {project.location}
            </strong>
          </span>
          <span style={{ color: '#999999' }}>{project.area}</span>
        </div>
      </div>
    </article>
  );
}
