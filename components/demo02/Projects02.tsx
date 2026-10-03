'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects02() {
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
    <div className="demo02-canvas section-padding">
      <div className="container">
        {/* Exhibition Sheet Top Strip */}
        <div className="demo02-sheet-header">
          <div className="demo02-meta-badge">
            <span className="demo02-red-mark">■</span>
            <span>EXHIBITION CATALOGUE / SECTION 03</span>
          </div>
          <div className="demo02-meta-badge">
            <span>INDEX: ARCHITECTURAL BUILT WORKS</span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginBottom: '36px' }}>
          <h1 className="demo02-catalogue-title">PROJECTS ARCHIVE</h1>
          <p className="demo02-sub-label">
            CATALOGUE OF BUILT INTERVENTIONS & TECTONIC INVESTIGATIONS
          </p>
        </div>

        {/* Filter Bar (Only Topology and Location per strict requirements) */}
        <div className="demo02-filter-bar">
          <div className="demo02-filter-modes">
            <span className="demo02-filter-label">CLASSIFICATION:</span>
            <button
              type="button"
              className={`demo02-filter-tab ${activeMode === 'all' ? 'active' : ''}`}
              onClick={() => handleModeChange('all')}
            >
              [ ALL ]
            </button>
            <button
              type="button"
              className={`demo02-filter-tab ${activeMode === 'topology' ? 'active' : ''}`}
              onClick={() => handleModeChange('topology')}
            >
              [ TOPOLOGY ]
            </button>
            <button
              type="button"
              className={`demo02-filter-tab ${activeMode === 'location' ? 'active' : ''}`}
              onClick={() => handleModeChange('location')}
            >
              [ LOCATION ]
            </button>
          </div>

          {activeMode === 'topology' && (
            <div className="demo02-subfilter-row">
              <button
                type="button"
                className={`demo02-subfilter-btn ${selectedTopology === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTopology('all')}
              >
                All Topologies
              </button>
              {availableTopologies.map((top) => (
                <button
                  key={top}
                  type="button"
                  className={`demo02-subfilter-btn ${selectedTopology === top ? 'active' : ''}`}
                  onClick={() => setSelectedTopology(top)}
                >
                  {top}
                </button>
              ))}
            </div>
          )}

          {activeMode === 'location' && (
            <div className="demo02-subfilter-row">
              <button
                type="button"
                className={`demo02-subfilter-btn ${selectedLocation === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedLocation('all')}
              >
                All Locations
              </button>
              {availableLocations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  className={`demo02-subfilter-btn ${selectedLocation === loc ? 'active' : ''}`}
                  onClick={() => setSelectedLocation(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Asymmetric Exhibition Grid */}
        {filteredProjects.length === 0 ? (
          <div style={{ padding: '60px 0', textAlign: 'center' }}>
            <p className="demo02-sub-label">NO ARCHIVE RECORDS MATCHING SELECTION.</p>
          </div>
        ) : (
          <div className="demo02-archive-flow">
            {filteredProjects.map((project, idx) => {
              // Asymmetric variations across exhibition catalogue sheets
              const isLarge = idx % 3 === 0;
              const isOffset = idx % 3 === 1;

              return (
                <article
                  key={project.slug}
                  className={`demo02-plate-card ${isLarge ? 'plate-large' : isOffset ? 'plate-offset' : 'plate-standard'}`}
                >
                  <div className="demo02-plate-topline">
                    <span className="plate-index">
                      <span className="demo02-red-mark">■ </span>
                      PLATE {project.number}
                    </span>
                    <span className="plate-tech-spec">
                      {project.topology.toUpperCase()} / {project.year}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`} className="demo02-plate-link">
                    <div className="demo02-plate-imgbox">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 860px) 100vw, 70vw"
                        className="demo02-plate-cover-img"
                      />
                    </div>

                    <div className="demo02-plate-info">
                      <div>
                        <h2 className="demo02-plate-name">{project.title}</h2>
                        {project.subtitle && (
                          <p className="demo02-plate-sub">{project.subtitle}</p>
                        )}
                      </div>
                      <div className="demo02-plate-loc">
                        <span>{project.location}</span>
                        <span className="demo02-plate-view">VIEW DOSSIER ↗</span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
