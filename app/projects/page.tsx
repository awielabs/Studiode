'use client';

import { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import SectionLabel from '@/components/SectionLabel';

export default function ProjectsPage() {
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
    <div className="section-padding">
      <div className="container">
        {/* Page Title Header */}
        <div style={{ marginBottom: '40px' }}>
          <SectionLabel number="01" title="ARCHIVE" />
          <h1 className="about-page-title">PROJECTS</h1>
          <p className="typewriter-label">
            Selected Built Works & Architectural Investigations
          </p>
        </div>

        {/* Filter Bar */}
        <ProjectFilter
          activeMode={activeMode}
          onModeChange={handleModeChange}
          selectedTopology={selectedTopology}
          onTopologySelect={setSelectedTopology}
          selectedLocation={selectedLocation}
          onLocationSelect={setSelectedLocation}
          availableTopologies={availableTopologies}
          availableLocations={availableLocations}
        />

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div style={{ padding: '60px 0', textAlign: 'center' }}>
            <p className="typewriter-label">No projects found for selected criteria.</p>
          </div>
        ) : (
          <div className="projects-editorial-grid">
            {filteredProjects.map((project, idx) => {
              let spanClass = 'span-6';
              let aspectClass = 'aspect-landscape';

              // Varied editorial rhythm
              if (idx % 3 === 0) {
                spanClass = 'span-7';
                aspectClass = 'aspect-landscape';
              } else if (idx % 3 === 1) {
                spanClass = 'span-5';
                aspectClass = 'aspect-square';
              } else {
                spanClass = 'span-12';
                aspectClass = 'aspect-wide';
              }

              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={idx}
                  spanClass={spanClass}
                  aspectClass={aspectClass}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
