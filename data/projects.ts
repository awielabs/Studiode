export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  topology: string;
  year: string;
  coverImage: string;
  description: string;
  aspectRatio?: string;
  gridSpan?: 'full' | 'half' | 'third';
  images: string[];
  details?: {
    topology: string;
    location: string;
    year: string;
    scale?: string;
    status?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    subtitle: "Aura Residence & Reflection Pavilion",
    location: "Mumbai, India",
    topology: "Residential",
    year: "2026",
    coverImage: "/projects/project-01/cover.jpg",
    description: "An exploration in monolithic concrete, tactile board-formed finishes, and water as an architectural mediator. Designed around people and daily rituals, the pavilion dissolves boundaries between the sheltered interior and the surrounding natural habitat.",
    gridSpan: "half",
    images: [
      "/projects/project-01/01.jpg",
      "/projects/project-01/02.jpg",
      "/projects/project-01/03.jpg",
    ],
    details: {
      topology: "Residential",
      location: "Mumbai, India",
      year: "2026",
      scale: "680 sqm",
      status: "Under Construction",
    },
  },
  {
    slug: "project-two",
    title: "Project Two",
    subtitle: "Terracotta Monolith Cultural Center",
    location: "Ahmedabad, India",
    topology: "Cultural",
    year: "2025",
    coverImage: "/projects/project-02/cover.jpg",
    description: "Rooted in deep architectural geometry and the thermodynamic qualities of baked terracotta and raw concrete. The center offers shaded microclimates and community gathering chambers shaped by regional daylight and airflow.",
    gridSpan: "half",
    images: [
      "/projects/project-02/01.jpg",
      "/projects/project-02/02.jpg",
      "/projects/project-02/03.jpg",
    ],
    details: {
      topology: "Cultural",
      location: "Ahmedabad, India",
      year: "2025",
      scale: "1,450 sqm",
      status: "Completed",
    },
  },
  {
    slug: "project-three",
    title: "Project Three",
    subtitle: "Courtyard & Limestone Enclosure",
    location: "Pune, India",
    topology: "Residential",
    year: "2026",
    coverImage: "/projects/project-03/cover.jpg",
    description: "Centering around an austere reflecting pool carved from hand-chiseled yellow limestone, this residence reimagines traditional domestic courtyards into quiet, contemplative enclosures suited to local climate.",
    gridSpan: "full",
    images: [
      "/projects/project-03/01.jpg",
      "/projects/project-03/02.jpg",
      "/projects/project-03/03.jpg",
    ],
    details: {
      topology: "Residential",
      location: "Pune, India",
      year: "2026",
      scale: "520 sqm",
      status: "Concept Design",
    },
  },
  {
    slug: "project-four",
    title: "Project Four",
    subtitle: "Habitats 04 Ecological Studio",
    location: "Bengaluru, India",
    topology: "Commercial",
    year: "2024",
    coverImage: "/projects/project-04/cover.jpg",
    description: "A permeable studio structure framed in blackened steel and sustainably harvested timber. Built on stilts above a living wetland bioswale, fostering low-impact collaborative research and daylight-driven work environments.",
    gridSpan: "half",
    images: [
      "/projects/project-04/01.jpg",
      "/projects/project-04/02.jpg",
      "/projects/project-04/03.jpg",
    ],
    details: {
      topology: "Commercial",
      location: "Bengaluru, India",
      year: "2024",
      scale: "890 sqm",
      status: "Completed",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
