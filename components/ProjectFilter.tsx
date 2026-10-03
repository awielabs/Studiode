'use client';

interface ProjectFilterProps {
  activeMode: 'all' | 'topology' | 'location';
  onModeChange: (mode: 'all' | 'topology' | 'location') => void;
  selectedTopology: string;
  onTopologySelect: (topology: string) => void;
  selectedLocation: string;
  onLocationSelect: (location: string) => void;
  availableTopologies: string[];
  availableLocations: string[];
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
}: ProjectFilterProps) {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar-row">
        <span className="filter-category-label">FILTER:</span>
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

      {/* Sub-filter options when Topology is active */}
      {activeMode === 'topology' && (
        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
        <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
  );
}
