'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function LoadingScreen() {
  const pathname = usePathname();
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

    // Keep visible for exactly 2 seconds (2000ms), then smoothly fade out
    timerRef.current = setTimeout(() => {
      setFadingOut(true);
      exitTimerRef.current = setTimeout(() => {
        setVisible(false);
        setFadingOut(false);
      }, 500);
    }, 2000);
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
      </div>
    </div>
  );
}
