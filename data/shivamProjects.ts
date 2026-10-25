export interface Project {
  id: string;
  title: string;
  slug: string;
  typology: 'Residential' | 'Commercial' | 'Hospitality' | 'Cultural' | 'Institutional' | 'Interior';
  location: 'Mumbai' | 'Pune' | 'Goa' | 'Alibaug' | 'Bengaluru';
  year: string;
  area: string;
  status: 'Completed' | 'In Progress' | 'Under Construction' | 'Design Phase';
  client: string;
  leadArchitects: string[];
  summary: string;
  description: string[];
  features: string[];
  mainImage: string;
  gallery: string[];
  drawings?: {
    type: string;
    caption: string;
  }[];
}

export const TYPOLOGIES = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Cultural',
  'Institutional',
  'Interior',
] as const;

export const LOCATIONS = [
  'Mumbai',
  'Pune',
  'Goa',
  'Alibaug',
  'Bengaluru',
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'monolith-pavilion',
    title: 'The Monolith Pavilion',
    slug: 'the-monolith-pavilion',
    typology: 'Cultural',
    location: 'Mumbai',
    year: '2024',
    area: '3,400 sq.m',
    status: 'Completed',
    client: 'Heritage Arts Trust',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'A cast-in-place board-formed concrete pavilion engaging with natural daylight, shadow pergolas, and a reflective water surface.',
    description: [
      'The Monolith Pavilion emerges from an inquiry into deep shadows, geometric clarity, and material permanence in an urban maritime climate. Cast entirely with board-formed concrete, the structure celebrates texture and the tactile trace of wooden formwork.',
      'A series of deep cantilevered pergolas cast dynamic, ever-changing lattice shadows across the expansive glass facade and serene reflecting pool. The spatial sequence is conceived as a calibrated transition from bright open courtyards to contemplative, acoustically muted gallery chambers.',
      'Passive environmental design strategies dictate the volumetric distribution: deep overhangs shield interior exhibition rooms from intense solar gain, while the perimeter shallow pool facilitates evaporative pre-cooling of incoming sea breezes.'
    ],
    features: [
      'Board-formed monolithic concrete structural envelope',
      'Solar-responsive geometric shading trellis',
      'Continuous linear reflection pool for passive microclimate cooling',
      'Acoustically isolated subterranean gallery spaces'
    ],
    mainImage: '/projects/project-borivali-station.jpg',
    gallery: [
      '/projects/project-borivali-station.jpg',
      '/projects/project-public-plaza.jpg',
      '/projects/project-swing-pavilion.jpg'
    ],
    drawings: [
      { type: 'Ground Level Plan (1:200)', caption: 'Calibrated circulation spine connecting outdoor reflecting pools to gallery volumes' },
      { type: 'Longitudinal Section A-A', caption: 'Sun angle analysis showing 45-degree shadow pergolas preventing direct glare' },
      { type: 'Axonometric Structural Diagram', caption: 'Interlocking concrete portal frames and cantilevered roof slab' }
    ]
  },
  {
    id: 'alibaug-glass-basalt-residence',
    title: 'Alibaug Glass & Basalt Residence',
    slug: 'alibaug-glass-basalt-residence',
    typology: 'Residential',
    location: 'Alibaug',
    year: '2023',
    area: '850 sq.m',
    status: 'Completed',
    client: 'Private Commission',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'A private coastal sanctuary nestled between tropical coconut groves, featuring cantilevered blackened steel and dry-stacked limestone.',
    description: [
      'Situated on a gentle coastal parcel in Alibaug, this private residence mediates between manicured private courtyards and wild maritime vegetation. The architectural language balances heavy, grounded masonry walls with slender, cantilevered blackened steel canopies.',
      'Floor-to-ceiling sliding glass portals dissolve physical barriers, allowing living zones to operate as shaded open-air verandas throughout dry seasons. Local stone masonry anchors the bedrooms and private quarters, providing thermal mass against coastal heat.',
      'Rainwater harvesting channels integrated seamlessly into the perimeter landscape feed a central reflecting pool, restoring local aquifer tables and framing contemplative garden views.'
    ],
    features: [
      'Hand-dressed local limestone load-bearing spines',
      'Structural steel cantilevers providing 4.5m shaded threshold',
      'Integrated natural pool bio-filtration system',
      'Cross-ventilation layout designed for monsoon resilience'
    ],
    mainImage: '/projects/project-running-track.jpg',
    gallery: [
      '/projects/project-running-track.jpg',
      '/projects/project-swing-pavilion.jpg',
      '/projects/project-public-plaza.jpg'
    ],
    drawings: [
      { type: 'Site & Master Layout Plan', caption: 'Preservation of 100% existing mature coconut palms through micro-sited pavillion modules' },
      { type: 'Environmental Section B-B', caption: 'Cross-ventilation pathways utilizing natural coastal pressure differentials' }
    ]
  },
  {
    id: 'laterite-shoreline-retreat',
    title: 'Laterite Shoreline Retreat',
    slug: 'laterite-shoreline-retreat',
    typology: 'Hospitality',
    location: 'Goa',
    year: '2024',
    area: '5,200 sq.m',
    status: 'Completed',
    client: 'Azure Hospitality Group',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'An eco-conscious coastal enclave carved from indigenous laterite stone, teak timber brise-soleil, and restorative courtyards.',
    description: [
      'Drawing inspiration from traditional Konkan architectural typologies, Laterite Shoreline Retreat reinterprets porous vernacular elements through contemporary geometric precision. Deep terracotta-hued laterite masonry quarried within a 15km radius forms the primary tectonic identity.',
      'Lattice timber screens craft intimate private loggias that filter sea breezes and dappled sunlight. Water is treated as an architectural material: a 40-meter central canal mimics natural riverine contours, reflecting the rich red textures of the stone masonry.',
      'The architecture intentionally submerges into dense tropical landscape, celebrating the quiet transitions between shaded internal sanctums and lush foliage.'
    ],
    features: [
      'Zero-kilowatt cooling via porous laterite courtyards',
      'Reclaimed teak wood lattice brise-soleil and fenestrations',
      '40m linear reflection pool serving as visual and microclimatic spine',
      'Passive shading reducing active mechanical air cooling requirements by 42%'
    ],
    mainImage: '/projects/project-public-plaza.jpg',
    gallery: [
      '/projects/project-public-plaza.jpg',
      '/projects/project-borivali-station.jpg',
      '/projects/project-monument-canopy.jpg'
    ],
    drawings: [
      { type: 'Resort Master Plan', caption: 'Low-density cluster morphology harmonized with native coconut groves and water channels' },
      { type: 'Detail Elevation of Laterite Façade', caption: 'Mortarless interlocking joint details and teak timber frame connections' }
    ]
  },
  {
    id: 'sculpted-volumes-art-center',
    title: 'Sculpted Volumes Art Center',
    slug: 'sculpted-volumes-art-center',
    typology: 'Cultural',
    location: 'Pune',
    year: '2023',
    area: '2,800 sq.m',
    status: 'Completed',
    client: 'Pune Contemporary Arts Foundation',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'Intersecting pristine white volumes oriented around passive solar orientation and shaded public breezeways.',
    description: [
      'The Sculpted Volumes Art Center operates as both a public civic anchor and an introspective gallery sanctuary. Conceived as a series of shifting white monoliths, the massing creates deep recessed pocket courtyards that invite the community inward.',
      'Internal exhibition spaces benefit from indirect northern illumination admitted through high-level clerestory light monitors. The exterior finish uses a reflective lime-based mineral plaster that drastically reduces urban heat island absorption.',
      'Pedestrian walkways gently ascend through stepped terraces, offering framing viewpoints towards the surrounding plateau landscape.'
    ],
    features: [
      'Sculptural pure white massing creating natural microclimatic breezeways',
      'North-facing diffused daylight monitors eliminating art-damaging UV light',
      'Permeable stone paving for zero-runoff stormwater management',
      'Public open-air amphitheater integrated into the entrance court'
    ],
    mainImage: '/projects/project-monument-canopy.jpg',
    gallery: [
      '/projects/project-monument-canopy.jpg',
      '/projects/project-public-plaza.jpg',
      '/projects/project-running-track.jpg'
    ],
    drawings: [
      { type: 'Roof & Daylight Capture Plan', caption: 'Calculated geometric roof scoops directing 100% diffuse natural light into galleries' },
      { type: 'Transverse Section C-C', caption: 'Three-tiered cascading public forum connecting entry terrace to sculpture court' }
    ]
  },
  {
    id: 'deccan-research-institute',
    title: 'Deccan Research & Educational Institute',
    slug: 'deccan-research-educational-institute',
    typology: 'Institutional',
    location: 'Pune',
    year: '2022',
    area: '6,100 sq.m',
    status: 'Completed',
    client: 'Deccan Science & Design Foundation',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'An academic laboratory and spatial forum utilizing perforated masonry, thermal mass cooling, and stepped learning amphitheaters.',
    description: [
      'Designed as a benchmark for contemporary institutional design in western India, this campus merges laboratory rigor with communal interdisciplinary gathering spaces.',
      'A climate-responsive double-skin facade composed of custom clay jali blocks buffers instructional rooms against severe solar radiation while sustaining continuous passive air exchange.',
      'A soaring central atrium acts as a solar chimney, exhausting warm air through automated thermal dampers at the apex while drawing cool ground-level air through landscaped sunken courts.'
    ],
    features: [
      'Solar chimney atrium mechanism driving passive stack ventilation',
      'Custom dry-pressed clay jali shading envelope',
      'Interdisciplinary collaboration hubs between lecture zones',
      'GRIHA 5-Star and IGBC Platinum sustainability ratings'
    ],
    mainImage: '/projects/project-swing-pavilion.jpg',
    gallery: [
      '/projects/project-swing-pavilion.jpg',
      '/projects/project-borivali-station.jpg',
      '/projects/project-running-track.jpg'
    ],
    drawings: [
      { type: 'Comprehensive Campus Plan', caption: 'Zoned acoustic clustering separating lab research wings from public auditorium' },
      { type: 'Atrium Thermal CFD Simulation', caption: 'Stack ventilation diagram showing 6.2 air changes per hour under zero HVAC load' }
    ]
  },
  {
    id: 'cuboid-commercial-headquarters',
    title: 'Cuboid Commercial Headquarters',
    slug: 'cuboid-commercial-headquarters',
    typology: 'Commercial',
    location: 'Bengaluru',
    year: '2024',
    area: '4,500 sq.m',
    status: 'In Progress',
    client: 'Synthetix Dynamics',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'An urban creative technology headquarters characterized by recessed courtyards, modular structural bays, and exposed structural concrete.',
    description: [
      'Rethinking the standard glass corporate box, Cuboid Headquarters reintroduces thermal mass, open terraces, and bio-philic vertical micro-gardens to Bengaluru’s tech corridor.',
      'The facade is articulated through modular precast concrete fins that self-shade the recessed low-e glazing units, cutting peak afternoon cooling loads by 38%.',
      'Every floor opens directly onto landscaped sky terraces, fostering informal collaboration in the fresh open air.'
    ],
    features: [
      'Modular precast self-shading façade fins',
      'Alternating dual-height sky gardens on every working tier',
      'Exposed post-tensioned slab construction maximizing column-free spatial flexibility',
      'Net-positive rooftop solar photovoltaic array'
    ],
    mainImage: '/projects/project-borivali-station.jpg',
    gallery: [
      '/projects/project-borivali-station.jpg',
      '/projects/project-monument-canopy.jpg',
      '/projects/project-public-plaza.jpg'
    ],
    drawings: [
      { type: 'Typical Floor Column Grid', caption: '12m x 12m structural bay allowing fluid open workspace reorganization' },
      { type: 'Façade Detail Section', caption: 'Integrated planter box and greywater drip irrigation details' }
    ]
  },
  {
    id: 'verdant-courtyard-villa',
    title: 'Verdant Courtyard Villa',
    slug: 'verdant-courtyard-villa',
    typology: 'Residential',
    location: 'Pune',
    year: '2024',
    area: '720 sq.m',
    status: 'Completed',
    client: 'Private Client',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'A multi-generational home oriented around a central rain garden, combining natural basalt stone with expansive frameless glazing.',
    description: [
      'The Verdant Courtyard Villa is arranged as an introverted sanctuary that shields its inhabitants from bustling suburban street noise while cultivating an open dialogue with nature.',
      'Four residential wings frame an open-to-sky central courtyard planted with native frangipani and moss-covered basalt boulders. Rainwater falling into the courtyard is channeled along geometric stone runnels to a sunken retention chamber.',
      'Rich timber ceilings and polished concrete floors provide a quiet, tactile backdrop for daily rituals.'
    ],
    features: [
      'Introverted four-quadrant courtyard topology',
      'Local black basalt stone masonry sourced from foundation excavation',
      'Deep verandas creating transitional indoor-outdoor living rooms',
      'Geothermal earth-tube cooling for ground level suites'
    ],
    mainImage: '/projects/project-running-track.jpg',
    gallery: [
      '/projects/project-running-track.jpg',
      '/projects/project-swing-pavilion.jpg',
      '/projects/project-borivali-station.jpg'
    ],
    drawings: [
      { type: 'Courtyard Plan View', caption: 'Axial view lines connecting entry foyer through central water court to private garden' },
      { type: 'Detail of Basalt Dry Stone Wall', caption: 'Zero-mortar seismic tie-back detailing and hidden flashing' }
    ]
  },
  {
    id: 'gallery-atrium-penthouse',
    title: 'Gallery Atrium Penthouse',
    slug: 'gallery-atrium-penthouse',
    typology: 'Interior',
    location: 'Mumbai',
    year: '2023',
    area: '420 sq.m',
    status: 'Completed',
    client: 'Art Connoisseur Collection',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'An austere interior spatial composition exploring raw plaster, bespoke steel joinery, and controlled spatial compression.',
    description: [
      'Designed to house a prominent collection of contemporary South Asian sculpture and paintings, this dual-level residence was stripped down to its raw structural concrete frame.',
      'Partitions were replaced with floating blackened-steel portals and monolithic pigmented plaster planes that curate sightlines and celebrate spatial depth.',
      'A continuous custom floor of seamless aggregate terrazzo unifies the sequence, punctuated by recessed warm-light troughs that wash art walls with museum-grade illumination.'
    ],
    features: [
      'Seamless micro-terrazzo floor poured in continuous uninterrupted bays',
      'Bespoke hand-waxed blackened steel partition screens',
      'Museum-grade 98 CRI concealed architectural lighting system',
      'Custom acoustic plaster ceiling absorbing reverberant sound'
    ],
    mainImage: '/projects/project-public-plaza.jpg',
    gallery: [
      '/projects/project-public-plaza.jpg',
      '/projects/project-monument-canopy.jpg',
      '/projects/project-swing-pavilion.jpg'
    ],
    drawings: [
      { type: 'Interior Furniture & Lighting Layout', caption: 'Precision art hanging alignment and recessed fixture schedule' },
      { type: 'Joinery Detail: Steel Sliding Screens', caption: 'Floor-recessed bearing track and magnetic soft-close concealed mechanism' }
    ]
  },
  {
    id: 'boutique-canopy-lodges',
    title: 'Boutique Canopy Lodges',
    slug: 'boutique-canopy-lodges',
    typology: 'Hospitality',
    location: 'Bengaluru',
    year: '2025',
    area: '2,100 sq.m',
    status: 'Under Construction',
    client: 'EcoStay Wilderness Ltd.',
    leadArchitects: ['Ar. Devendra Patil', 'Ar. Priya Thapar'],
    summary: 'Sensitive canopy-level pavilions suspended above native flora with minimal ground footprint and locally sourced timber.',
    description: [
      'Set within an intact deciduous woodland outside Bengaluru, these canopy lodges explore lightweight architectural touchdown. Light steel tripod foundations leave tree root zones completely undisturbed.',
      'The pavilions are clad in sustainably harvested eucalyptus timber slats that will weather naturally into a silvery gray hue, blending seamlessly with the surrounding tree bark.',
      'Each lodge features an open-air panoramic deck with deep overhangs that protect against torrential monsoon downpours while framing sweeping forest vistas.'
    ],
    features: [
      'Zero root-disturbance tripod pin-foundation system',
      'Prefabricated timber modules erected without heavy site machinery',
      '100% off-grid solar and micro-hydro generation',
      'Natural reed-bed sewage phytoremediation system'
    ],
    mainImage: '/projects/project-swing-pavilion.jpg',
    gallery: [
      '/projects/project-swing-pavilion.jpg',
      '/projects/project-running-track.jpg',
      '/projects/project-borivali-station.jpg'
    ],
    drawings: [
      { type: 'Tree Canopy Elevation', caption: 'Individual lodge heights modulated to clear mature banyan and teak canopies' },
      { type: 'Pin Foundation Joint Detail', caption: 'Articulated universal ball-joint connecting steel stilt to helical ground anchor' }
    ]
  }
];
