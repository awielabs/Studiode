import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import IndividualProjectClient from '@/components/IndividualProjectClient';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project Not Found — Studio De.PTH',
    };
  }

  return {
    title: `${project.title} — Studio De.PTH`,
    description: project.description,
  };
}

export default function IndividualProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <IndividualProjectClient project={project} />;
}
