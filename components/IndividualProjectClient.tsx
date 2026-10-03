'use client';

import { useDemo } from '@/context/DemoContext';
import { Project } from '@/data/projects';
import ProjectDetail01 from '@/components/demo01/ProjectDetail01';
import ProjectDetail02 from '@/components/demo02/ProjectDetail02';
import ProjectDetail03 from '@/components/demo03/ProjectDetail03';

export default function IndividualProjectClient({ project }: { project: Project }) {
  const { activeDemo } = useDemo();

  if (activeDemo === 2) return <ProjectDetail02 project={project} />;
  if (activeDemo === 3) return <ProjectDetail03 project={project} />;
  return <ProjectDetail01 project={project} />;
}
