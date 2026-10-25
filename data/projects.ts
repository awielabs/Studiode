export interface Project {
  slug: string;
  number: string;
  numberShort: string;
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
    number: "001",
    numberShort: "01",
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
    number: "002",
    numberShort: "02",
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
    number: "003",
    numberShort: "03",
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
    number: "004",
    numberShort: "04",
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

import { PROJECTS as SHIVAM_PROJECTS, Project as ShivamProject } from './shivamProjects';

function mapShivamToProject(sp: ShivamProject, index: number): Project {
  return {
    slug: sp.slug,
    number: String(index + 5).padStart(3, '0'),
    numberShort: String(index + 5).padStart(2, '0'),
    title: sp.title,
    subtitle: sp.summary,
    location: `${sp.location}, India`,
    topology: sp.typology,
    year: sp.year,
    coverImage: sp.mainImage,
    description: sp.description.join(' '),
    images: sp.gallery && sp.gallery.length > 0 ? sp.gallery : [sp.mainImage],
    details: {
      topology: sp.typology,
      location: `${sp.location}, India`,
      year: sp.year,
      scale: sp.area,
      status: sp.status,
    },
  };
}

export interface ClientTrialWork {
  id: string;
  number: string;
  numberShort: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  aspectClass: string;
  spanClass: string;
}

export const clientTrialWorks: ClientTrialWork[] = [
  {
    id: 'trial-05',
    number: '001',
    numberShort: '01',
    title: 'BORIVALI STATION CIVIC PLAZA',
    subtitle: 'Transit Concourse & Curvilinear Illumination',
    category: 'TRANSIT INFRASTRUCTURE / PUBLIC REALM',
    location: 'BORIVALI, MUMBAI',
    year: '2026',
    image: '/client-trial/client-05-borivali-station.jpg',
    description:
      'Arrival forecourt and pedestrian promenade featuring continuous embedded curvilinear ground illumination ribbons, rhythmic palm colonnades, and modular stone paving.',
    aspectClass: 'aspect-wide',
    spanClass: 'span-12',
  },
  {
    id: 'trial-01',
    number: '002',
    numberShort: '02',
    title: 'URBAN SWING / SPATIAL PAUSE',
    subtitle: 'Micro-Habitat & Kinetic Street Furniture',
    category: 'MICRO-HABITAT / STREET FURNITURE',
    location: 'SOUTH MUMBAI',
    year: '2025',
    image: '/client-trial/client-01-urban-swing.png',
    description:
      'Minimalist kinetic steel canopy structure framing human respite, contemplation, and spontaneous interaction along dense urban vehicular transit corridors.',
    aspectClass: 'aspect-landscape',
    spanClass: 'span-7',
  },
  {
    id: 'trial-02',
    number: '003',
    numberShort: '03',
    title: 'CIVIC COURTYARD & MODULAR SETTEES',
    subtitle: 'Curvilinear Cast Stone Seating Commons',
    category: 'LANDSCAPE COMMONS / PUBLIC SEATING',
    location: 'MUMBAI METROPOLITAN',
    year: '2025',
    image: '/client-trial/client-02-civic-plaza.png',
    description:
      'Curvilinear cast stone seating landscape nestled beneath preserved canopy trees, cultivating community pause and unprogrammed social gathering.',
    aspectClass: 'aspect-square',
    spanClass: 'span-5',
  },
  {
    id: 'trial-04',
    number: '004',
    numberShort: '04',
    title: 'RECREATIONAL PARK CONCOURSE',
    subtitle: 'Public Wellness & Athletic Green Spine',
    category: 'PUBLIC WELLNESS / URBAN GREEN SPINE',
    location: 'SUBURBAN MUMBAI',
    year: '2025',
    image: '/client-trial/client-04-public-track.png',
    description:
      'Continuous curved athletic promenade and jogging circuit interwoven through public park vegetation, balancing community physical wellness with quiet landscape vistas.',
    aspectClass: 'aspect-landscape',
    spanClass: 'span-6',
  },
  {
    id: 'trial-03',
    number: '005',
    numberShort: '05',
    title: 'CIVIC MEMORIAL & BOTANICAL PLINTH',
    subtitle: 'Ceremonial Pavilion & Concentric Plinth',
    category: 'CIVIC INSTALLATION / MONUMENT COMMONS',
    location: 'MAHARASHTRA',
    year: '2024',
    image: '/client-trial/client-03-memorial-plinth.jpg',
    description:
      'Elevated ceremonial pavilion and concentric botanical landscape plinth with calibrated night illumination highlighting historical civic installation.',
    aspectClass: 'aspect-landscape',
    spanClass: 'span-6',
  },
];
export function getProjectBySlug(slug: string): Project | undefined {
  const direct = projects.find((p) => p.slug === slug);
  if (direct) return direct;

  const shivamIndex = SHIVAM_PROJECTS.findIndex((p) => p.slug === slug || p.id === slug);
  if (shivamIndex !== -1) {
    return mapShivamToProject(SHIVAM_PROJECTS[shivamIndex], shivamIndex);
  }

  return undefined;
}

export function getAllProjectSlugs(): string[] {
  const studioSlugs = projects.map((p) => p.slug);
  const shivamSlugs = SHIVAM_PROJECTS.map((p) => p.slug);
  return Array.from(new Set([...studioSlugs, ...shivamSlugs]));
}

