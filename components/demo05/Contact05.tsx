'use client';

import React from 'react';
import { STUDIO_DATA } from '@/data/shivamStudio';

export default function Contact05() {
  const { contact } = STUDIO_DATA;

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* 1. Header Section */}
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
            [ Practice Inquiries · Direct Communication Desk ]
          </div>

          <h1
            style={{
              fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 700,
              color: '#111111',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: '#555555',
              maxWidth: '750px',
              lineHeight: 1.6,
            }}
          >
            We engage with prospective patrons, collaborators, and researchers seeking spatial depth, contextual materiality, and climate-responsive architecture.
          </p>
        </div>
      </section>

      {/* 2. Main Inquiries & Cartography Grid */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4.5rem',
            }}
          >
            {/* Left Column: Direct Emails & Representative Studio Address */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#941B1B',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                [ Direct Electronic Inquiries ]
              </div>

              {/* Direct Clickable Emails */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  marginBottom: '3.5rem',
                }}
              >
                {contact.emails.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderBottom: '1px solid #eeeeee',
                      paddingBottom: '1.5rem',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#777777',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ marginBottom: '0.4rem' }}>
                      <a
                        href={`mailto:${item.email}`}
                        style={{
                          fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#111111',
                          textDecoration: 'underline',
                          textUnderlineOffset: '4px',
                          textDecorationColor: '#941B1B',
                          transition: 'color 0.2s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#941B1B')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#111111')}
                      >
                        {item.email}
                      </a>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#666666', lineHeight: 1.5 }}>
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>

              {/* Physical Studio Address Block with Unconfirmed Client Note */}
              <div
                style={{
                  backgroundColor: '#fafafa',
                  border: '1px solid #e8e8e8',
                  padding: '2rem',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#941B1B',
                    fontWeight: 700,
                    marginBottom: '1rem',
                  }}
                >
                  [ Studio Office & Coordinates ]
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: '0.92rem',
                    color: '#222222',
                    lineHeight: 1.7,
                    marginBottom: '1.25rem',
                  }}
                >
                  <strong>{contact.address.line1}</strong>
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.city}, {contact.address.state} — {contact.address.pin}
                  <br />
                  {contact.address.country}
                </div>

                {/* Explicit Client Notice */}
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    fontSize: '0.75rem',
                    color: '#888888',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  * {contact.address.note}
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #ebebeb',
                    fontSize: '0.8rem',
                    color: '#555555',
                  }}
                >
                  <div>
                    <strong>Studio Hours:</strong> {contact.hours}
                  </div>
                  <div style={{ marginTop: '0.25rem' }}>
                    <strong>Direct Lines:</strong> {contact.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Map */}
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#941B1B',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                [ Geographic Cartography ]
              </div>

              <div
                style={{
                  border: '1px solid #111111',
                  backgroundColor: '#f5f5f5',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Minimalist Map Header Bar */}
                <div
                  style={{
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    padding: '8px 16px',
                    fontSize: '0.72rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Kala Ghoda Arts & Architecture Precinct, Mumbai</span>
                  <span style={{ color: '#941B1B' }}>18°55&apos;38&quot;N 72°49&apos;45&quot;E</span>
                </div>

                {/* Embedded Responsive Map */}
                <div style={{ width: '100%', height: '520px', position: 'relative' }}>
                  <iframe
                    src={contact.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(80%) contrast(105%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio De.PTH Geographic Location"
                  />
                </div>

                {/* Map Footer Bar */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #ebebeb',
                    padding: '12px 18px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    fontSize: '0.75rem',
                    color: '#666666',
                  }}
                >
                  <span>Regional Focus: Maharashtra · Goa · Karnataka</span>
                  <a
                    href="https://maps.google.com/?q=Kala+Ghoda+Fort+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#941B1B',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      textDecoration: 'none',
                    }}
                  >
                    Open in Full Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
