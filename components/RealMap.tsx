'use client';

interface RealMapProps {
  variant?: 'minimal' | 'catalogue' | 'swiss';
  height?: string;
}

export default function RealMap({ variant = 'minimal', height = '420px' }: RealMapProps) {
  return (
    <div className={`real-map-wrapper real-map-${variant}`}>
      <div className="real-map-frame" style={{ height }}>
        <iframe
          title="Studio De.PTH Practice Location — Mumbai, India"
          src="https://maps.google.com/maps?q=Mumbai,+Maharashtra,+India&t=m&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="real-map-iframe"
        />
      </div>

      <div className="real-map-meta-strip">
        <div className="map-meta-left">
          <span className="map-badge">
            <span className="map-red-dot">●</span> STUDIO DE.PTH / MUMBAI
          </span>
          <span className="map-coords">18°58&apos;42&quot;N 72°49&apos;33&quot;E</span>
        </div>
        <a
          href="https://www.google.com/maps?q=Mumbai,+Maharashtra,+India"
          target="_blank"
          rel="noopener noreferrer"
          className="map-external-link"
        >
          OPEN IN GOOGLE MAPS ↗
        </a>
      </div>
    </div>
  );
}
