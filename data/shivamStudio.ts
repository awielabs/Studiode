export interface Founder {
  name: string;
  role: string;
  credentials: string;
  image: string;
  bio: string[];
  quote: string;
  specialization: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  aboutShort: string;
  aboutFull: string[];
  history: {
    year: string;
    title: string;
    description: string;
  }[];
  philosophy: {
    number: string;
    title: string;
    text: string;
  }[];
  founders: Founder[];
  contact: {
    emails: {
      label: string;
      email: string;
      purpose: string;
    }[];
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      country: string;
      pin: string;
      note: string;
    };
    phone: string;
    hours: string;
    mapEmbedUrl: string;
  };
}

export const STUDIO_DATA: StudioInfo = {
  name: 'Studio De.PTH',
  tagline: 'Spatial Depth • Contextual Rigor • Material Tectonics',
  aboutShort: 'Studio De.PTH is a contemporary architecture and spatial design practice interrogating light, volumetric depth, and tectonic honesty across residential, cultural, and landscape typologies.',
  aboutFull: [
    'Founded as a collaborative laboratory of architectural inquiry, Studio De.PTH explores the intersection between primordial materials and contemporary structural logic. We believe that architecture must transcend mere surface ornament to craft authentic spatial depth — spaces that breathe, weather gracefully, and frame human experience with profound dignity.',
    'Our methodology is deliberately rooted in the climatic realities, craftsmanship, and ecological specificities of South Asia. Rather than imposing predetermined aesthetic idioms, each commission begins with an empirical excavation of site, topography, solar geometry, and local craft traditions.',
    'From private coastal sanctuaries along the Arabian Sea to public cultural centers and educational campuses, Studio De.PTH approaches every scale with forensic precision, pursuing an architecture of stillness, permanence, and restrained poetic weight.'
  ],
  history: [
    {
      year: '2019',
      title: 'Founding of Studio De.PTH',
      description: 'Established by Ar. Devendra Patil and Ar. Priya Thapar as a boutique spatial research laboratory in Mumbai, focusing on climate-responsive residential prototypes.'
    },
    {
      year: '2021',
      title: 'First Monograph & Coastal Practice Expansion',
      description: 'Completed the acclaimed Alibaug basalt pavilions, pioneering low-embodied carbon construction techniques using localized quarrystone and passive water microclimates.'
    },
    {
      year: '2023',
      title: 'Cultural & Institutional Horizon',
      description: 'Awarded the commission for the Pune Contemporary Arts Pavilion and Deccan Research Institute, expanding the practice’s footprint into transformative public civic architecture.'
    },
    {
      year: 'Present',
      title: 'Tectonic Material Ecology & Future Ventures',
      description: 'Actively designing and building across Mumbai, Pune, Goa, Alibaug, and Bengaluru, maintaining an uncompromising ethos of tectonic depth and bespoke materiality.'
    }
  ],
  philosophy: [
    {
      number: '01',
      title: 'Spatial Depth Over Surface',
      text: 'We reject superficial façade styling in favor of volumetric layering, deep shadowed thresholds, light wells, and spatial compression that evoke visceral emotional responses.'
    },
    {
      number: '02',
      title: 'Climatic & Tectonic Honesty',
      text: 'Every material — whether board-formed concrete, hand-dressed laterite, or reclaimed teak — is expressed true to its structural nature and permitted to record the patina of time.'
    },
    {
      number: '03',
      title: 'Ecological Microclimates',
      text: 'Through internal courtyards, thermal massing, stack-effect atriums, and water cooling spines, our buildings reduce mechanical energy reliance while enhancing biological comfort.'
    }
  ],
  founders: [
    {
      name: 'Ar. Devendra Patil',
      role: 'Co-Founder & Principal Architect',
      credentials: 'B.Arch (Sir J.J. College of Architecture), M.Arch (CEPT University)',
      image: '/images/founder-1.jpg',
      bio: [
        'Devendra leads the conceptual design and spatial research frameworks at Studio De.PTH. With over 14 years of rigorous architectural practice, his work investigates the tectonic dialogue between raw concrete structures, daylight choreography, and tropical microclimatic response.',
        'Prior to co-founding Studio De.PTH, Devendra worked on major civic and cultural masterplans across India and Southeast Asia. His design philosophy draws deep inspiration from brutalist masters and the monumental stone craft of western India.',
        'He lectures frequently at architecture schools and serves as a mentor for young spatial practitioners in sustainable vernacular tectonics.'
      ],
      quote: 'Architecture attains meaning only when light touches raw matter and carves out a sanctuary for thought.',
      specialization: 'Spatial Morphology, Cultural Typologies & Concrete Tectonics'
    },
    {
      name: 'Ar. Priya Thapar',
      role: 'Co-Founder & Principal Architect',
      credentials: 'B.Arch (Kamla Raheja Vidyanidhi), M.Sc Urbanism (TU Delft)',
      image: '/images/founder-1.jpg', // Using curated monochrome architectural portrait
      bio: [
        'Priya directs design development, material research, and regional ecology at Studio De.PTH. Her research centers on indigenous masonry technologies, low-carbon laterite systems, and the preservation of natural hydrology within dense architectural envelopes.',
        'Educated in Mumbai and the Netherlands, Priya combines European urban analytical methods with a sensory understanding of Indian vernacular craft traditions.',
        'Her projects emphasize tactile detailing — exploring how timber lattice joinery, lime plasters, and natural stone interact with human touch and the humid monsoon atmosphere.'
      ],
      quote: 'To build with depth is to build with silence, honoring the ground beneath and the sky above.',
      specialization: 'Material Ecology, Coastal Typologies & Vernacular Detailing'
    }
  ],
  contact: {
    emails: [
      {
        label: 'General Inquiries & Commissions',
        email: 'connect@studiodepth.com',
        purpose: 'Direct communication for new projects, architectural commissions, and client collaborations.'
      },
      {
        label: 'Press & Media Relations',
        email: 'press@studiodepth.com',
        purpose: 'Publications, editorial monograph features, high-resolution photo requests, and lecture inquiries.'
      },
      {
        label: 'Careers & Academic Internships',
        email: 'careers@studiodepth.com',
        purpose: 'Portfolios (PDF under 10MB) for architect, interior designer, and apprentice positions.'
      }
    ],
    address: {
      line1: 'Studio De.PTH Architects & Spatial Planners',
      line2: '4th Floor, Old Fort Heritage Chambers, Kala Ghoda Arts Precinct',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      pin: '400001',
      note: 'Note: Physical studio address is representative and subject to final client confirmation.'
    },
    phone: '+91 22 2284 9400 / +91 98200 45890',
    hours: 'Monday – Friday: 09:30 – 18:30 IST | Saturday by prior appointment',
    // Embed map centered on Mumbai Art & Heritage district (Architecture Brio style minimal map)
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.844359902641!2d72.82914107593649!3d18.927236582247385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e7c53d1007%3A0xe9f0e137b252dfa2!2sKala%20Ghoda%2C%20Fort%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  }
};
