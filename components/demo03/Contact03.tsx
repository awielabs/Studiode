'use client';

import RealMap from '@/components/RealMap';

export default function Contact03() {
  return (
    <div className="demo03-canvas section-padding">
      <div className="container">
        {/* Top Header */}
        <div style={{ marginBottom: '48px' }}>
          <span className="demo03-label-tag">04 / CONTACT</span>
          <h1 className="demo03-archive-h1">COMMISSIONS & ENQUIRIES</h1>
          <p className="demo03-label-tag" style={{ marginTop: '8px' }}>
            DIRECT COMMUNICATION DISPATCH
          </p>
        </div>

        {/* 2-Column Swiss Contact Grid */}
        <div className="demo03-contact-grid">
          {/* Left: Email & Inquiries */}
          <div className="demo03-contact-left">
            <div className="demo03-contact-block">
              <span className="demo03-label-tag">PRIMARY DISPATCH</span>
              <div style={{ marginTop: '16px', marginBottom: '24px' }}>
                <a
                  href="mailto:hello@studiodepth.com"
                  className="demo03-email-headline"
                >
                  hello@studiodepth.com
                </a>
              </div>
              <p className="demo03-doc-text" style={{ fontSize: '0.95rem' }}>
                For new project commissions, academic symposiums, and spatial research inquiries.
                Direct communication preferred.
              </p>
            </div>

            <div className="demo03-contact-block" style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <span className="demo03-label-tag">PRACTICE ATELIER</span>
              <p className="demo03-doc-text" style={{ marginTop: '12px', fontSize: '0.95rem' }}>
                MUMBAI / REGIONAL SITES<br />
                Atelier consultations by scheduled appointment only.
              </p>
            </div>
          </div>

          {/* Right: Real Interactive Map */}
          <div className="demo03-contact-right">
            <span className="demo03-label-tag" style={{ marginBottom: '14px' }}>CARTOGRAPHIC LOCATOR</span>
            <RealMap variant="swiss" height="380px" />
          </div>
        </div>
      </div>
    </div>
  );
}
