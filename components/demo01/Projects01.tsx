'use client';

import { useState, useMemo } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter, { HoverAnimationType } from '@/components/ProjectFilter';
import SectionLabel from '@/components/SectionLabel';
import ProjectDetail01 from '@/components/demo01/ProjectDetail01';

export default function Projects01() {
  const [activeMode, setActiveMode] = useState<'all' | 'topology' | 'location'>('all');
  const [selectedTopology, setSelectedTopology] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [hoverAnimation, setHoverAnimation] = useState<HoverAnimationType>('both');
  const [isolatedProject, setIsolatedProject] = useState<Project | null>(null);

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

  // If a project was clicked, isolate and display ONLY that project's details, hiding all other projects
  if (isolatedProject) {
    return (
      <div className="section-padding demo01-container">
        <div className="container">
          <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              type="button"
              onClick={() => setIsolatedProject(null)}
              className="typewriter-label"
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                backgroundColor: 'transparent',
              }}
            >
              ← BACK TO ALL PROJECTS (RESTORE GRID)
            </button>
            <span className="typewriter-label" style={{ color: 'var(--muted)' }}>
              VIEWING INDIVIDUAL DOSSIER (OTHER PROJECTS HIDDEN)
            </span>
          </div>

          <ProjectDetail01 project={isolatedProject} />
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding demo01-container">
      <div className="container">
        {/* Page Title Header */}
        <div style={{ marginBottom: '40px' }}>
          <SectionLabel number="01" title="ARCHIVE" />
          <h1 className="about-page-title">PROJECTS</h1>
          <p className="typewriter-label">
            Selected Built Works & Architectural Investigations
          </p>
        </div>

        {/* Filter Bar with Herzog de Meuron toggle button & Bhosale category buttons */}
        <ProjectFilter
          activeMode={activeMode}
          onModeChange={handleModeChange}
          selectedTopology={selectedTopology}
          onTopologySelect={setSelectedTopology}
          selectedLocation={selectedLocation}
          onLocationSelect={setSelectedLocation}
          availableTopologies={availableTopologies}
          availableLocations={availableLocations}
          hoverAnimation={hoverAnimation}
          onHoverAnimationChange={setHoverAnimation}
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
                  hoverAnimation={hoverAnimation}
                  onSelectProject={(p) => setIsolatedProject(p)}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
