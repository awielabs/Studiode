'use client';

import { useDemo } from '@/context/DemoContext';

export default function DemoSwitcher() {
  const { activeDemo, setActiveDemo, isTransitioning } = useDemo();

  return (
    <aside
      className="demo-switcher-panel"
      aria-label="Studio De.PTH Design Concept Switcher"
    >
      <span className="demo-switcher-tag">CONCEPT</span>
      <div className="demo-switcher-options">
        <button
          type="button"
          onClick={() => setActiveDemo(1)}
          className={`demo-switcher-btn ${activeDemo === 1 ? 'active' : ''}`}
          disabled={isTransitioning}
          title="Demo 01: Contemporary Architecture Editorial"
        >
          01
        </button>
        <span className="demo-switcher-divider">/</span>
        <button
          type="button"
          onClick={() => setActiveDemo(2)}
          className={`demo-switcher-btn ${activeDemo === 2 ? 'active' : ''}`}
          disabled={isTransitioning}
          title="Demo 02: Architectural Grid / Exhibition Catalogue"
        >
          02
        </button>
        <span className="demo-switcher-divider">/</span>
        <button
          type="button"
          onClick={() => setActiveDemo(3)}
          className={`demo-switcher-btn ${activeDemo === 3 ? 'active' : ''}`}
          disabled={isTransitioning}
          title="Demo 03: Ultra-Minimal Swiss / Brutalist Architecture Archive"
        >
          03
        </button>
        <span className="demo-switcher-divider">/</span>
        <button
          type="button"
          onClick={() => setActiveDemo(4)}
          className={`demo-switcher-btn ${activeDemo === 4 ? 'active' : ''}`}
          disabled={isTransitioning}
          title="Demo 04: Architectural Journal / Full-Screen Story"
        >
          04
        </button>
      </div>
    </aside>
  );
}
