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
    subtitle: "Borivali Transit Concourse",
    location: "Mumbai, India",
    topology: "Civic Infrastructure",
    year: "2026",
    coverImage: "/projects/project-borivali-station.jpg",
    description: "An exploration in monolithic public infrastructure, tactile lighting gestures, and permeable urban circulation. Designed around transit rituals, the concourse dissolves boundaries between arrival and city realm.",
    gridSpan: "half",
    images: [
      "/projects/project-borivali-station.jpg",
      "/projects/project-public-plaza.jpg",
      "/projects/project-swing-pavilion.jpg",
    ],
    details: {
      topology: "Civic Infrastructure",
      location: "Mumbai, India",
      year: "2026",
      scale: "680 sqm",
      status: "Completed",
    },
  },
  {
    slug: "project-two",
    number: "002",
    numberShort: "02",
    title: "Project Two",
    subtitle: "Athletic Track & Sports Pavilion",
    location: "Mumbai, India",
    topology: "Civic & Recreation",
    year: "2025",
    coverImage: "/projects/project-running-track.jpg",
    description: "Rooted in civic landscape articulation and sports infrastructure. The park offers running tracks, framed open recreation zones, and tree-lined green buffers shaped by natural daylight and regional ecology.",
    gridSpan: "half",
    images: [
      "/projects/project-running-track.jpg",
      "/projects/project-swing-pavilion.jpg",
      "/projects/project-public-plaza.jpg",
    ],
    details: {
      topology: "Civic & Recreation",
      location: "Mumbai, India",
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
    subtitle: "Urban Civic Plaza & Seating Grove",
    location: "Mumbai, India",
    topology: "Public Realm",
    year: "2026",
    coverImage: "/projects/project-public-plaza.jpg",
    description: "Centering around curved public seating benches and leafy shaded gathering nodes, this public plaza reimagines suburban street edges into contemplative, community-focused civic enclosures.",
    gridSpan: "full",
    images: [
      "/projects/project-public-plaza.jpg",
      "/projects/project-borivali-station.jpg",
      "/projects/project-monument-canopy.jpg",
    ],
    details: {
      topology: "Public Realm",
      location: "Mumbai, India",
      year: "2026",
      scale: "520 sqm",
      status: "Completed",
    },
  },
  {
    slug: "project-four",
    number: "004",
    numberShort: "04",
    title: "Project Four",
    subtitle: "Commemorative Installation & Canopy",
    location: "Mumbai, India",
    topology: "Cultural Installation",
    year: "2024",
    coverImage: "/projects/project-monument-canopy.jpg",
    description: "An elevated commemorative canopy structure framed by floral garlands, illumination fixtures, and landscape mounds. Fostering ceremonial gathering and night illumination identity.",
    gridSpan: "half",
    images: [
      "/projects/project-monument-canopy.jpg",
      "/projects/project-swing-pavilion.jpg",
      "/projects/project-running-track.jpg",
    ],
    details: {
      topology: "Cultural Installation",
      location: "Mumbai, India",
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

