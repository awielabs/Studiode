'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type DemoConcept = 1 | 2 | 3;

interface DemoContextType {
  activeDemo: DemoConcept;
  setActiveDemo: (demo: DemoConcept) => void;
  isTransitioning: boolean;
}

const DemoContext = createContext<DemoContextType>({
  activeDemo: 1,
  setActiveDemo: () => {},
  isTransitioning: false,
});

export function DemoProvider({ children }: { children: ReactNode }) {
  const [activeDemo, setActiveDemoState] = useState<DemoConcept>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    // Check URL search params or localStorage
    const params = new URLSearchParams(window.location.search);
    const demoParam = params.get('demo');
    if (demoParam === '1' || demoParam === '2' || demoParam === '3') {
      setActiveDemoState(Number(demoParam) as DemoConcept);
      return;
    }

    const saved = localStorage.getItem('studio_depth_demo_concept');
    if (saved === '1' || saved === '2' || saved === '3') {
      setActiveDemoState(Number(saved) as DemoConcept);
    }
  }, []);

  const setActiveDemo = (demo: DemoConcept) => {
    if (demo === activeDemo) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveDemoState(demo);
      localStorage.setItem('studio_depth_demo_concept', String(demo));
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  return (
    <DemoContext.Provider value={{ activeDemo, setActiveDemo, isTransitioning }}>
      <div
        className={`demo-concept-wrapper demo-concept-${activeDemo} ${isTransitioning ? 'demo-transitioning' : ''}`}
        data-concept={activeDemo}
      >
        {children}
      </div>
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}
