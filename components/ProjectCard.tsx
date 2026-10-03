import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  spanClass?: string;
  aspectClass?: string;
}

export default function ProjectCard({
  project,
  index,
  spanClass = 'span-6',
  aspectClass = 'aspect-landscape',
}: ProjectCardProps) {
  const indexFormatted = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-item ${spanClass}`}
      id={`project-card-${project.slug}`}
    >
      <div className="project-index">{indexFormatted}</div>
      <div className={`project-image-box ${aspectClass}`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="project-img"
        />
      </div>

      <div className="project-meta">
        <div>
          <div className="project-title">{project.title}</div>
          <div className="project-location">{project.topology}</div>
        </div>
        <div className="project-location">
          {project.location} / {project.year}
        </div>
      </div>
    </Link>
  );
}
