'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PROJECTS, Project as ShivamProject } from '@/data/shivamProjects';
import ProjectCard05 from '@/components/demo05/ProjectCard05';
import ProjectFilter05 from '@/components/demo05/ProjectFilter05';
import ProjectDetail05 from '@/components/demo05/ProjectDetail05';

function Projects05Content() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filters: Typology and Location ONLY
  const [selectedTypology, setSelectedTypology] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  // Selected Project for isolated single-project view (hides all other projects)
  const [activeProject, setActiveProject] = useState<ShivamProject | null>(null);

  // Check URL parameter for direct deep linking (e.g. ?id=monolith-pavilion)
  useEffect(() => {
    const idParam = searchParams.get('id');
    if (idParam) {
      const match = PROJECTS.find((p) => p.id === idParam || p.slug === idParam);
      if (match) {
        setActiveProject(match);
      }
    } else {
      setActiveProject(null);
    }
  }, [searchParams]);

  // Handle selecting a project to isolate view
  const handleSelectProject = (project: ShivamProject) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/projects?id=${project.id}`, { scroll: false });
  };

  // Handle returning back to the full projects grid
  const handleBackToGrid = () => {
    setActiveProject(null);
    router.push('/projects', { scroll: false });
  };

  // Filter logic
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesTypology =
      selectedTypology === 'All' || project.typology === selectedTypology;
    const matchesLocation =
      selectedLocation === 'All' || project.location === selectedLocation;
    return matchesTypology && matchesLocation;
  });

  const handleResetFilters = () => {
    setSelectedTypology('All');
    setSelectedLocation('All');
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* Display ONLY the title 'Projects' (no subtitles or paragraphs) */}
      {!activeProject && (
        <section
          style={{
            borderBottom: '1px solid #ebebeb',
            padding: '3rem 0 2.5rem 0',
            backgroundColor: '#ffffff',
            marginBottom: '2.5rem',
          }}
        >
          <div className="container">
            <h1
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
                fontWeight: 700,
                color: '#111111',
                margin: 0,
                letterSpacing: '0.01em',
              }}
            >
              Projects
            </h1>
          </div>
        </section>
      )}

      <div className="container" style={{ paddingTop: activeProject ? '3rem' : 0 }}>
        {/* ISOLATED SINGLE PROJECT VIEW (Hides all other projects) */}
        {activeProject ? (
          <ProjectDetail05
            project={activeProject}
            onBack={handleBackToGrid}
            onSelectProject={handleSelectProject}
          />
        ) : (
          /* ALL PROJECTS GRID VIEW */
          <div>
            {/* Filter Bar with Typology & Location */}
            <ProjectFilter05
              selectedTypology={selectedTypology}
              selectedLocation={selectedLocation}
              onSelectTypology={setSelectedTypology}
              onSelectLocation={setSelectedLocation}
              onReset={handleResetFilters}
              totalProjects={PROJECTS.length}
              filteredCount={filteredProjects.length}
            />

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '2.5rem',
                }}
              >
                {filteredProjects.map((project) => (
                  <ProjectCard05
                    key={project.id}
                    project={project}
                    onSelect={handleSelectProject}
                  />
                ))}
              </div>
            ) : (
              <div
                style={{
                  padding: '5rem 2rem',
                  textAlign: 'center',
                  backgroundColor: '#fafafa',
                  border: '1px dashed #d5d5d5',
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '0.75rem',
                  }}
                >
                  No projects match the selected filters.
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '1.5rem' }}>
                  Try resetting the typology ({selectedTypology}) or location ({selectedLocation}).
                </p>
                <button
                  onClick={handleResetFilters}
                  style={{
                    fontSize: '0.82rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    backgroundColor: '#941B1B',
                    padding: '8px 20px',
                    border: '1px solid #941B1B',
                    cursor: 'pointer',
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects05() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            padding: '6rem 0',
            textAlign: 'center',
            fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
            color: '#888888',
          }}
        >
          Loading Projects...
        </div>
      }
    >
      <Projects05Content />
    </Suspense>
  );
}
