'use client';

import React from 'react';
import RealMap from '@/components/RealMap';

export default function ContactFinal() {
  return (
    <div
      className="demo04-story-canvas section-padding"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '85vh',
        paddingTop: '3rem',
        paddingBottom: '6rem',
      }}
    >
      <div className="container">
        {/* Header: Let’s Talk Design (with clean, modern typography) */}
        <div
          style={{
            marginBottom: '3rem',
            paddingBottom: '1.75rem',
            borderBottom: '1px solid #ebebeb',
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: 700,
              color: '#111111',
              letterSpacing: '0.01em',
              margin: '0 0 0.5rem 0',
            }}
          >
            Let’s Talk Design
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: '0.85rem',
              color: '#666666',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Direct communication for commissions, consultations and spatial research
          </p>
        </div>

        {/* 2-Column Clean Layout from Concept 4 (removed excess badges/stamps) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Inquiries */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: '1.05rem',
                color: '#444444',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              We accept a limited number of spatial and architectural commissions each year to ensure
              rigorous design investigation, environmental responsiveness, and meticulous detailing.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#941B1B',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                EMAIL INQUIRY:
              </div>
              <a
                href="mailto:hello@studiodepth.com"
                style={{
                  fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                  fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                  color: '#111111',
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
              >
                hello@studiodepth.com
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map */}
          <div>
            <div
              style={{
                border: '1px solid #ebebeb',
                backgroundColor: '#ffffff',
                padding: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              }}
            >
              <RealMap variant="catalogue" height="420px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
