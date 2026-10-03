'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects04() {
  const [activeMode, setActiveMode] = useState<'all' | 'topology' | 'location'>('all');
  const [selectedTopology, setSelectedTopology] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const availableTopologies = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.topology)));
  }, []);

  const availableLocations = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.location.split(',')[0].trim())));
  }, []);

  const handleModeChange = (mode: 'all' | 'topology' | 'location') => {
    setActiveMode(mode);
    if (mode === 'all') {
      setSelectedTopology('all');
      setSelectedLocation('all');
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeMode === 'topology' && selectedTopology !== 'all') {
      return projects.filter((p) => p.topology === selectedTopology);
    }
    if (activeMode === 'location' && selectedLocation !== 'all') {
      return projects.filter((p) => p.location.includes(selectedLocation));
    }
    return projects;
  }, [activeMode, selectedTopology, selectedLocation]);

  return (
    <div className="demo04-story-canvas section-padding">
      <div className="container">
        {/* Magazine Cover Header */}
        <div className="demo04-journal-header">
          <div className="journal-issue-tag">
            <span className="badge-red">■</span> JOURNAL ARCHIVE · INDEX OF MONOGRAPHS
          </div>
          <h1 className="journal-main-title">PROJECTS CHRONICLE</h1>
          <p className="journal-main-subtitle">
            A vertical editorial sequence of realized habitations and spatial investigations.
          </p>
        </div>

        {/* Minimal Magazine Filter Bar */}
        <div className="demo04-journal-filter">
          <div className="filter-headline">
            <span className="filter-index-label">SORT ESSAYS BY:</span>
            <div className="filter-pills-row">
              <button
                type="button"
                className={`journal-filter-btn ${activeMode === 'all' ? 'active' : ''}`}
                onClick={() => handleModeChange('all')}
              >
                ALL COMMISSIONS
              </button>
              <button
                type="button"
                className={`journal-filter-btn ${activeMode === 'topology' ? 'active' : ''}`}
                onClick={() => handleModeChange('topology')}
              >
                TOPOLOGY
              </button>
              <button
                type="button"
                className={`journal-filter-btn ${activeMode === 'location' ? 'active' : ''}`}
                onClick={() => handleModeChange('location')}
              >
                LOCATION
              </button>
            </div>
          </div>

          {activeMode === 'topology' && (
            <div className="journal-subfilter-list">
              <button
                type="button"
                className={`subfilter-item ${selectedTopology === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTopology('all')}
              >
                All Topologies
              </button>
              {availableTopologies.map((top) => (
                <button
                  key={top}
                  type="button"
                  className={`subfilter-item ${selectedTopology === top ? 'active' : ''}`}
                  onClick={() => setSelectedTopology(top)}
                >
                  {top}
                </button>
              ))}
            </div>
          )}

          {activeMode === 'location' && (
            <div className="journal-subfilter-list">
              <button
                type="button"
                className={`subfilter-item ${selectedLocation === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedLocation('all')}
              >
                All Locations
              </button>
              {availableLocations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  className={`subfilter-item ${selectedLocation === loc ? 'active' : ''}`}
                  onClick={() => setSelectedLocation(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vertical Editorial Sequence (Not a card grid) */}
        {filteredProjects.length === 0 ? (
          <div style={{ padding: '80px 0', textAlign: 'center' }}>
            <p className="journal-main-subtitle">NO ESSAYS FOUND FOR SELECTED CLASSIFICATION.</p>
          </div>
        ) : (
          <div className="demo04-vertical-sequence">
            {filteredProjects.map((project, idx) => (
              <article key={project.slug} className="demo04-sequence-chapter">
                <Link href={`/projects/${project.slug}`} className="demo04-chapter-link">
                  <div className="chapter-meta-line">
                    <div className="chapter-num-col">
                      <span className="chapter-num">{project.numberShort}</span>
                      <span className="chapter-folio">ARTICLE {idx + 1} OF {filteredProjects.length}</span>
                    </div>

                    <div className="chapter-title-col">
                      <h2 className="chapter-project-title">
                        <span className="hover-red-square">■ </span>
                        {project.title}
                      </h2>
                      <div className="chapter-tags">
                        <span>{project.topology}</span>
                        <span>·</span>
                        <span>{project.location}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="chapter-action-col">
                      <span className="chapter-read-action">READ MONOGRAPH ↗</span>
                    </div>
                  </div>

                  {/* Immense Editorial Photographic Spread */}
                  <div className="chapter-immense-frame">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="100vw"
                      className="chapter-immense-img"
                    />
                    <div className="chapter-overlay-caption">
                      <span>FIGURE {idx + 1}.0 — {project.title.toUpperCase()}</span>
                      <span>STUDIO DE.PTH JOURNAL</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
