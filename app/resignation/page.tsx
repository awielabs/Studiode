import type { Metadata } from 'next';
import Link from 'next/link';
import SectionLabel from '@/components/SectionLabel';

export const metadata: Metadata = {
  title: 'Resignation (In Future) — Studio De.PTH',
  description: 'Upcoming internal career transition and resignation records portal.',
};

export default function ResignationPage() {
  return (
    <div className="section-padding">
      <div className="container" style={{ maxWidth: '860px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <SectionLabel number="06" title="FUTURE MODULE" />
        <h1 className="about-page-title" style={{ marginTop: '16px', marginBottom: '8px' }}>
          RESIGNATION
        </h1>
        <div className="typewriter-label typewriter-accent" style={{ marginBottom: '32px' }}>
          [STATUS: IN FUTURE / PLANNED RELEASE]
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', marginBottom: '40px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)', marginBottom: '20px' }}>
            The <strong>Resignation</strong> portal is reserved for future implementation as part of
            Studio De.PTH&apos;s administrative and team infrastructure.
          </p>
          <p className="typewriter-label" style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
            Upon launch, this portal will facilitate official resignation notices, career departure attestations,
            and alumni monograph records for practitioners and researchers leaving the atelier.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:hello@studiodepth.com?subject=Resignation%20or%20Personnel%20Inquiry"
            className="typewriter-label"
            style={{
              padding: '12px 24px',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              display: 'inline-block',
            }}
          >
            Direct Communications: hello@studiodepth.com →
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
