'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project as ShivamProject, PROJECTS } from '@/data/shivamProjects';
import { Project as StudioProject } from '@/data/projects';

type FlexibleProject = ShivamProject | StudioProject;

interface ProjectDetail05Props {
  project: FlexibleProject;
  onBack?: () => void;
  onSelectProject?: (project: ShivamProject) => void;
}

export default function ProjectDetail05({
  project,
  onBack,
  onSelectProject,
}: ProjectDetail05Props) {
  // Normalize fields between StudioProject and ShivamProject
  const isShivam = 'mainImage' in project;

  const title = project.title;
  const typology = isShivam ? (project as ShivamProject).typology : (project as StudioProject).topology;
  const location = project.location;
  const year = project.year;
  const area = isShivam ? (project as ShivamProject).area : (project as StudioProject).details?.scale || 'Bespoke Scale';
  const status = isShivam ? (project as ShivamProject).status : (project as StudioProject).details?.status || 'Active Practice';
  const client = isShivam ? (project as ShivamProject).client : 'Private Commission';
  const leadArchitects = isShivam
    ? (project as ShivamProject).leadArchitects
    : ['Ar. Devendra Patil', 'Ar. Priya Thapar'];
  const summary = isShivam
    ? (project as ShivamProject).summary
    : (project as StudioProject).description;
  const descriptions = isShivam
    ? (project as ShivamProject).description
    : [(project as StudioProject).description];
  const features = isShivam
    ? (project as ShivamProject).features
    : [
        'Volumetric spatial depth and tactile material honesty',
        'Microclimatic daylight pergolas and reflection surfaces',
        'Passive environmental energy reduction architecture',
        'Contextual regional masonry and bespoke timber joinery',
      ];
  const mainImage = isShivam
    ? (project as ShivamProject).mainImage
    : (project as StudioProject).coverImage;
  const gallery = isShivam
    ? (project as ShivamProject).gallery
    : (project as StudioProject).images.length > 0
    ? (project as StudioProject).images
    : [mainImage];
  const drawings = isShivam ? (project as ShivamProject).drawings : undefined;

  const renderBackButton = (text: string = '← Back to All Projects') => {
    if (onBack) {
      return (
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
            fontSize: '0.82rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#111111',
            border: '1px solid #111111',
            padding: '8px 18px',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#941B1B';
            e.currentTarget.style.borderColor = '#941B1B';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.borderColor = '#111111';
            e.currentTarget.style.color = '#111111';
          }}
        >
          {text}
        </button>
      );
    }

    return (
      <Link
        href="/projects"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
          fontSize: '0.82rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#111111',
          border: '1px solid #111111',
          padding: '8px 18px',
          backgroundColor: '#ffffff',
          transition: 'all 0.2s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#941B1B';
          e.currentTarget.style.borderColor = '#941B1B';
          e.currentTarget.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.borderColor = '#111111';
          e.currentTarget.style.color = '#111111';
        }}
      >
        {text}
      </Link>
    );
  };

  return (
    <div style={{ animation: 'fadeIn 0.35s ease-in-out' }}>
      {/* Top Navigation Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          borderBottom: '1px solid #e5e5e5',
          paddingBottom: '1rem',
        }}
      >
        {renderBackButton('← Back to All Projects')}

        <div
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
          }}
        >
          <strong style={{ color: '#941B1B' }}>Concept 05</strong> · Isolated Project View
        </div>
      </div>

      {/* Hero Presentation */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          maxHeight: '620px',
          backgroundColor: '#111111',
          overflow: 'hidden',
          marginBottom: '2.5rem',
        }}
      >
        <Image
          src={mainImage}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            backgroundColor: '#941B1B',
            color: '#ffffff',
            padding: '4px 12px',
            fontSize: '0.75rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          {typology} Architecture
        </div>
      </div>

      {/* Main Content: Two Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          marginBottom: '4rem',
        }}
      >
        {/* Left Column: Narrative & Features */}
        <div>
          <div
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#941B1B',
              marginBottom: '0.5rem',
              fontWeight: 700,
            }}
          >
            {location} · {year}
          </div>

          <h1
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)',
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: '#444444',
              lineHeight: 1.65,
              marginBottom: '2rem',
              fontWeight: 500,
            }}
          >
            {summary}
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: '#555555',
              borderTop: '1px solid #f0f0f0',
              paddingTop: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {descriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>

          {/* Key Features List */}
          <div
            style={{
              backgroundColor: '#fafafa',
              border: '1px solid #e8e8e8',
              padding: '1.75rem',
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#111111',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
              }}
            >
              Key Architectural Features:
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.85rem',
                    color: '#444444',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.65rem',
                  }}
                >
                  <span style={{ color: '#941B1B', fontWeight: 700 }}>■</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Architectural Metadata Specification Sheet */}
        <div>
          <div
            style={{
              backgroundColor: '#fafafa',
              border: '1px solid #111111',
              padding: '2rem',
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: '0.85rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#941B1B',
                fontWeight: 700,
                borderBottom: '1px solid #111111',
                paddingBottom: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              [ Technical Project Data ]
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                fontSize: '0.85rem',
              }}
            >
              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Typology:
                </span>
                <strong style={{ color: '#111111' }}>{typology} Architecture</strong>
              </div>

              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Location:
                </span>
                <strong style={{ color: '#111111' }}>{location}</strong>
              </div>

              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Gross Built Area:
                </span>
                <strong style={{ color: '#111111' }}>{area}</strong>
              </div>

              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Completion Year:
                </span>
                <strong style={{ color: '#111111' }}>{year}</strong>
              </div>

              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Commission Status:
                </span>
                <strong style={{ color: '#941B1B' }}>{status}</strong>
              </div>

              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Client / Patron:
                </span>
                <strong style={{ color: '#111111' }}>{client}</strong>
              </div>

              <div>
                <span style={{ color: '#888888', display: 'block', textTransform: 'uppercase', fontSize: '0.7rem' }}>
                  Lead Architects:
                </span>
                <strong style={{ color: '#111111' }}>{leadArchitects.join(' & ')}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Drawings & Plans Section */}
      {drawings && drawings.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '0.9rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#941B1B',
              marginBottom: '1.5rem',
              fontWeight: 700,
            }}
          >
            [ Architectural Drawings & Analytical Sections ]
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {drawings.map((drawing, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e5e5e5',
                  backgroundColor: '#fafafa',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                {/* Architectural Vector Simulation */}
                <div
                  style={{
                    height: '160px',
                    border: '1px dashed #d0d0d0',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    position: 'relative',
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="20" y="20" width="160" height="60" stroke="#444444" strokeWidth="1" />
                    <line x1="20" y1="50" x2="180" y2="50" stroke="#941B1B" strokeWidth="1" strokeDasharray="4 2" />
                    <line x1="60" y1="20" x2="60" y2="80" stroke="#666666" strokeWidth="1" />
                    <line x1="120" y1="20" x2="120" y2="80" stroke="#666666" strokeWidth="1" />
                    <circle cx="90" cy="50" r="15" stroke="#941B1B" strokeWidth="1" />
                    <text x="30" y="35" fontSize="6" fill="#888888" fontFamily="monospace">
                      CL +0.00
                    </text>
                  </svg>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#111111',
                  }}
                >
                  {drawing.type}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#666666', lineHeight: 1.5 }}>
                  {drawing.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontSize: '0.9rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#941B1B',
            marginBottom: '1.5rem',
            fontWeight: 700,
          }}
        >
          [ Photographic Documentation ]
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                aspectRatio: '16/10',
                backgroundColor: '#f2f2f2',
                border: '1px solid #ebebeb',
                overflow: 'hidden',
              }}
            >
              <Image
                src={imgUrl}
                alt={`${title} view ${idx + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Back Button */}
      <div
        style={{
          borderTop: '1px solid #e5e5e5',
          paddingTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {renderBackButton('← Back to All Projects')}
      </div>
    </div>
  );
}
