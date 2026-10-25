'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PROJECTS, Project as ShivamProject } from '@/data/shivamProjects';
import ProjectCardFinal from '@/components/final/ProjectCardFinal';
import ProjectDetailFinal from '@/components/final/ProjectDetailFinal';

function ProjectsFinalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedTypology, setSelectedTypology] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ShivamProject | null>(null);

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

  const handleSelectProject = (project: ShivamProject) => {
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/projects?id=${project.id}`, { scroll: false });
  };

  const handleBackToGrid = () => {
    setActiveProject(null);
    router.push('/projects', { scroll: false });
  };

  const typologies = ['All', 'Cultural', 'Residential', 'Hospitality', 'Installation'];

  const filteredProjects = PROJECTS.filter((project) => {
    return selectedTypology === 'All' || project.typology === selectedTypology;
  });

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '80vh', paddingBottom: '6rem' }}>
      {/* Page Title: "Projects" */}
      {!activeProject && (
        <section
          style={{
            borderBottom: '1px solid #ebebeb',
            padding: '3rem 0 2rem 0',
            backgroundColor: '#ffffff',
            marginBottom: '2rem',
          }}
        >
          <div className="container">
            <h1
              style={{
                fontFamily: "var(--font-typewriter, 'Courier Prime', monospace)",
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
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

      <div className="container">
        {/* Isolated Project Detail View or Grid */}
        {activeProject ? (
          <div style={{ paddingTop: '1.5rem' }}>
            <ProjectDetailFinal
              project={{
                slug: activeProject.slug,
                number: activeProject.id,
                numberShort: activeProject.id,
                title: activeProject.title,
                subtitle: activeProject.summary,
                topology: activeProject.typology,
                location: activeProject.location,
                year: activeProject.year,
                description: Array.isArray(activeProject.description)
                  ? activeProject.description.join(' ')
                  : String(activeProject.description),
                coverImage: activeProject.mainImage,
                images: activeProject.gallery,
              }}
              onBack={handleBackToGrid}
            />
          </div>
        ) : (
          <div>
            {/* Filter Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #f2f2f2',
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888888',
                  marginRight: '0.5rem',
                }}
              >
                TYPOLOGY:
              </span>
              {typologies.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTypology(t)}
                  style={{
                    backgroundColor: selectedTypology === t ? '#111111' : 'transparent',
                    color: selectedTypology === t ? '#ffffff' : '#444444',
                    border: selectedTypology === t ? '1px solid #111111' : '1px solid #e5e5e5',
                    fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '5px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Projects Grid with Concept 5 layout & Final Card refinements */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {filteredProjects.map((project) => (
                <ProjectCardFinal
                  key={project.id}
                  project={project}
                  onSelect={handleSelectProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsFinal() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '4rem 0' }}>Loading projects archive...</div>}>
      <ProjectsFinalContent />
    </Suspense>
  );
}
