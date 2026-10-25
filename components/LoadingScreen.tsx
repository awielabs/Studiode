'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { useDemo } from '@/context/DemoContext';

export default function LoadingScreen() {
  const pathname = usePathname();
  const { activeDemo } = useDemo();
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const exitTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startLoader = useCallback(() => {
    // Clear any pending timers
    if (timerRef.current) clearTimeout(timerRef.current);
    if (exitTimerRef.current) clearTimeout(exitTimerRef.current);

    setVisible(true);
    setFadingOut(false);

    // Keep visible for 2 to 3 seconds (2200ms), then smoothly fade out
    timerRef.current = setTimeout(() => {
      setFadingOut(true);
      exitTimerRef.current = setTimeout(() => {
        setVisible(false);
        setFadingOut(false);
      }, 400);
    }, 2200);
  }, []);

  // Trigger loading screen on initial mount and on every page/route change
  useEffect(() => {
    startLoader();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, [pathname, startLoader]);

  // Intercept internal link clicks to trigger loading screen immediately
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      // Verify internal route navigation (starts with /, not anchor, not current pathname)
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !href.startsWith('/#') &&
        !href.includes('#') &&
        href !== pathname
      ) {
        startLoader();
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, [pathname, startLoader]);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen-backdrop ${fadingOut ? 'fading-out' : ''}`}
      aria-hidden="true"
    >
      <div className="loading-logo-box">
        {activeDemo === 'final' ? (
          <>
            <Image
              src="/logo/studio-depth-logo-trimmed.png"
              alt="Studio De.PTH"
              width={260}
              height={208}
              priority
              className="loading-logo-img loading-logo-img-final"
              style={{
                width: '260px',
                height: 'auto',
                maxWidth: '85vw',
                filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.06))',
              }}
            />
            <div
              className="loading-title"
              style={{
                fontSize: '1.4rem',
                letterSpacing: '0.14em',
                marginTop: '1.2rem',
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontWeight: 700,
              }}
            >
              Studio <span style={{ color: '#941B1B' }}>De.</span>PTH
            </div>
            {/* Bottom text removed for final concept to make more space for logo */}
          </>
        ) : (
          <>
            <Image
              src="/logo/studio-depth-logo-trimmed.png"
              alt="Studio De.PTH"
              width={150}
              height={120}
              priority
              className="loading-logo-img"
            />
            <div className="loading-title">
              Studio <span>De.</span>PTH
            </div>
            <div className="loading-tagline">
              Design for People + Transformative Habitats
            </div>
          </>
        )}
      </div>
    </div>
  );
}
