'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects03() {
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
    <div className="demo03-canvas section-padding">
      <div className="container">
        {/* Top Header */}
        <div className="demo03-section-head" style={{ marginBottom: '32px' }}>
          <div>
            <span className="demo03-label-tag">03 / ARCHIVE</span>
            <h1 className="demo03-archive-h1">PROJECT INDEX</h1>
          </div>
        </div>

        {/* Swiss Minimal Filter */}
        <div className="demo03-filter-strip">
          <span className="demo03-filter-tag">FILTER:</span>
          <div className="demo03-filter-actions">
            <button
              type="button"
              className={`demo03-filter-btn ${activeMode === 'all' ? 'active' : ''}`}
              onClick={() => handleModeChange('all')}
            >
              ALL
            </button>
            <button
              type="button"
              className={`demo03-filter-btn ${activeMode === 'topology' ? 'active' : ''}`}
              onClick={() => handleModeChange('topology')}
            >
              TOPOLOGY
            </button>
            <button
              type="button"
              className={`demo03-filter-btn ${activeMode === 'location' ? 'active' : ''}`}
              onClick={() => handleModeChange('location')}
            >
              LOCATION
            </button>
          </div>
        </div>

        {/* Subfilter options */}
        {activeMode === 'topology' && (
          <div className="demo03-subfilter-box">
            <button
              type="button"
              className={`demo03-sub-btn ${selectedTopology === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedTopology('all')}
            >
              All Topologies
            </button>
            {availableTopologies.map((top) => (
              <button
                key={top}
                type="button"
                className={`demo03-sub-btn ${selectedTopology === top ? 'active' : ''}`}
                onClick={() => setSelectedTopology(top)}
              >
                {top}
              </button>
            ))}
          </div>
        )}

        {activeMode === 'location' && (
          <div className="demo03-subfilter-box">
            <button
              type="button"
              className={`demo03-sub-btn ${selectedLocation === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('all')}
            >
              All Locations
            </button>
            {availableLocations.map((loc) => (
              <button
                key={loc}
                type="button"
                className={`demo03-sub-btn ${selectedLocation === loc ? 'active' : ''}`}
                onClick={() => setSelectedLocation(loc)}
              >
                {loc}
              </button>
            ))}
          </div>
        )}

        {/* Strict Grid Project Archive */}
        {filteredProjects.length === 0 ? (
          <div style={{ padding: '60px 0' }}>
            <p className="demo03-label-tag">NO ARCHIVE RECORDS FOUND.</p>
          </div>
        ) : (
          <div className="demo03-archive-grid">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="demo03-archive-card">
                <Link href={`/projects/${project.slug}`} className="demo03-card-link">
                  <div className="demo03-card-header">
                    <span className="demo03-card-big-num">{project.numberShort}</span>
                    <div>
                      <h2 className="demo03-card-title">
                        <span className="demo03-hover-square">■ </span>
                        {project.title}
                      </h2>
                      <div className="demo03-card-meta">
                        <span>{project.topology}</span>
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="demo03-card-imgbox">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="demo03-card-img"
                    />
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
