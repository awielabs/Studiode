'use client';

import RealMap from '@/components/RealMap';

export default function Contact04() {
  return (
    <div className="demo04-story-canvas section-padding">
      <div className="container">
        {/* Masthead */}
        <div className="demo04-journal-header">
          <div className="journal-issue-tag">
            <span className="badge-red">■</span> DISPATCH & DIALOGUE · ISSUE 04
          </div>
          <h1 className="journal-main-title">COMMISSIONS & ENQUIRIES</h1>
          <p className="journal-main-subtitle">
            Direct channels for architectural commissions, monograph discourse, and practice consultations.
          </p>
        </div>

        {/* 2-Column Journal Dispatch Layout */}
        <div className="demo04-contact-spread-grid">
          {/* Left Column: Direct Communication */}
          <div className="contact-spread-left">
            <div className="contact-spread-card">
              <span className="aside-stamp">DIRECT INQUIRY CHANNEL</span>
              <h2 className="contact-spread-heading">LET&apos;S TALK ARCHITECTURE.</h2>
              <p className="contact-spread-prose">
                We accept a limited number of spatial and architectural commissions each year to ensure
                rigorous design investigation and meticulous construction detailing.
              </p>
              <div style={{ marginTop: '28px', marginBottom: '36px' }}>
                <a
                  href="mailto:hello@studiodepth.com"
                  className="contact-spread-email-link"
                >
                  hello@studiodepth.com
                </a>
              </div>

              <div className="contact-dispatch-spec">
                <div className="dispatch-row">
                  <span className="d-key">ATELIER SITE</span>
                  <span className="d-val">Mumbai Metropolitan Region, India</span>
                </div>
                <div className="dispatch-row">
                  <span className="d-key">CONSULTATIONS</span>
                  <span className="d-val">Arranged exclusively by advance appointment</span>
                </div>
                <div className="dispatch-row">
                  <span className="d-key">DISCOURSE</span>
                  <span className="d-val">Academic, residential, cultural, and environmental inquiries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Interactive Map with Journal Framing */}
          <div className="contact-spread-right">
            <div className="contact-spread-map-box">
              <span className="aside-stamp" style={{ marginBottom: '14px', display: 'block' }}>
                ATELIER CARTOGRAPHIC DISPATCH
              </span>
              <RealMap variant="catalogue" height="420px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
