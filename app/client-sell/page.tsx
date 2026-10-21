import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';

export const metadata: Metadata = {
  title: 'Client Sell (In Future) — Studio De.PTH',
  description: 'Upcoming client portal for property monographs and acquisition archives.',
};

export default function ClientSellPage() {
  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '860px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <SectionLabel number="05" title="FUTURE MODULE" />
        <h1 className="about-page-title" style={{ marginTop: '16px', marginBottom: '8px' }}>
          CLIENT SELL
        </h1>
        <div className="typewriter-label typewriter-accent" style={{ marginBottom: '32px' }}>
          [STATUS: IN FUTURE / PLANNED RELEASE]
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '40px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)', marginBottom: '20px' }}>
            The <strong>Client Sell</strong> portal is an upcoming module planned for future implementation.
            Once active, this interface will allow verified studio clients and patrons to view confidential
            property monographs, manage commissions, and review built asset valuations.
          </p>
          <p className="typewriter-label" style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
            This page is reserved per client project specifications. Information and access protocols will be
            shared by Studio De.PTH upon client confirmation.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@studiodepth.com?subject=Client%20Sell%20Inquiry"
            className="typewriter-label"
            style={{
              padding: '12px 24px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              display: 'inline-block',
            }}
          >
            Inquire via Email: hello@studiodepth.com →
          </a>
          <Link
            href="/"
            className="typewriter-label"
            style={{ color: 'var(--foreground)', textDecoration: 'underline', textUnderlineOffset: '6px' }}
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
