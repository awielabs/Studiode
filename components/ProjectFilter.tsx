'use client';

import { useState } from 'react';

export type HoverAnimationType = 'both' | 'fade' | 'pop';

interface ProjectFilterProps {
  activeMode: 'all' | 'topology' | 'location';
  onModeChange: (mode: 'all' | 'topology' | 'location') => void;
  selectedTopology: string;
  onTopologySelect: (topology: string) => void;
  selectedLocation: string;
  onLocationSelect: (location: string) => void;
  availableTopologies: string[];
  availableLocations: string[];
  hoverAnimation?: HoverAnimationType;
  onHoverAnimationChange?: (anim: HoverAnimationType) => void;
}

export default function ProjectFilter({
  activeMode,
  onModeChange,
  selectedTopology,
  onTopologySelect,
  selectedLocation,
  onLocationSelect,
  availableTopologies,
  availableLocations,
  hoverAnimation = 'both',
  onHoverAnimationChange,
}: ProjectFilterProps) {
  // Herzog & de Meuron style toggle
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(true);

  return (
    <div className="filter-bar-container">
      {/* Top Controls Bar: Herzog & de Meuron Filter Button + Shivam Bhosale Category Buttons */}
      <div className="filter-bar-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {/* Herzog & de Meuron style Filter Toggle Button */}
          <button
            type="button"
            className="filter-toggle-master-btn"
            onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
            aria-expanded={filterDrawerOpen}
            aria-label="Toggle Project Filters"
          >
            {filterDrawerOpen ? '[−] CLOSE FILTERS' : '[+] FILTER'}
          </button>

          {/* Category Selector Buttons (Shivam Bhosale style) */}
          <div className="filter-buttons-group">
            <button
              type="button"
              className={`filter-btn ${activeMode === 'all' ? 'active' : ''}`}
              onClick={() => onModeChange('all')}
            >
              ALL
            </button>
            <button
              type="button"
              className={`filter-btn ${activeMode === 'topology' ? 'active' : ''}`}
              onClick={() => onModeChange('topology')}
            >
              TOPOLOGY
            </button>
            <button
              type="button"
              className={`filter-btn ${activeMode === 'location' ? 'active' : ''}`}
              onClick={() => onModeChange('location')}
            >
              LOCATION
            </button>
          </div>
        </div>

        {/* Hover Animation Selector (Testing Brio Fade vs Bhosale Pop) */}
        {onHoverAnimationChange && (
          <div className="hover-anim-control" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="typewriter-label" style={{ fontSize: '0.68rem', color: 'var(--muted)' }}>
              HOVER EFFECT:
            </span>
            <div className="filter-buttons-group">
              <button
                type="button"
                className={`filter-btn-sm ${hoverAnimation === 'fade' ? 'active' : ''}`}
                onClick={() => onHoverAnimationChange('fade')}
                title="Fade In & Out (Architecture BRIO)"
              >
                FADE
              </button>
              <button
                type="button"
                className={`filter-btn-sm ${hoverAnimation === 'pop' ? 'active' : ''}`}
                onClick={() => onHoverAnimationChange('pop')}
                title="Pop In & Out (Shivam Bhosale)"
              >
                POP
              </button>
              <button
                type="button"
                className={`filter-btn-sm ${hoverAnimation === 'both' ? 'active' : ''}`}
                onClick={() => onHoverAnimationChange('both')}
                title="Combined Pop & Fade"
              >
                BOTH
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sub-filters (Topology / Location only) */}
      {filterDrawerOpen && (
        <div className="filter-drawer-body" style={{ marginTop: '16px' }}>
          {/* Sub-filter options when Topology is active */}
          {activeMode === 'topology' && (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="typewriter-label" style={{ marginRight: '6px' }}>TOPOLOGY:</span>
              <button
                type="button"
                className={`filter-btn ${selectedTopology === 'all' ? 'active' : ''}`}
                onClick={() => onTopologySelect('all')}
              >
                All Topologies
              </button>
              {availableTopologies.map((top) => (
                <button
                  key={top}
                  type="button"
                  className={`filter-btn ${selectedTopology === top ? 'active' : ''}`}
                  onClick={() => onTopologySelect(top)}
                >
                  {top}
                </button>
              ))}
            </div>
          )}

          {/* Sub-filter options when Location is active */}
          {activeMode === 'location' && (
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="typewriter-label" style={{ marginRight: '6px' }}>LOCATION:</span>
              <button
                type="button"
                className={`filter-btn ${selectedLocation === 'all' ? 'active' : ''}`}
                onClick={() => onLocationSelect('all')}
              >
                All Locations
              </button>
              {availableLocations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  className={`filter-btn ${selectedLocation === loc ? 'active' : ''}`}
                  onClick={() => onLocationSelect(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
