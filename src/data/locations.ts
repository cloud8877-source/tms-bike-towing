/**
 * Location data for SEO-driven landing pages
 * Each route and city generates a page in all 4 locales
 */

export type RouteData = {
  slug: string;
  type: 'route';
  origin: string;
  destination: string;
  originCountry: 'thailand' | 'malaysia' | 'singapore';
  destinationCountry: 'thailand' | 'malaysia' | 'singapore';
  distance?: string;
  estimatedTime?: string;
  highlights: string[];
  relatedSlugs: string[];
};

export type CityData = {
  slug: string;
  type: 'city';
  name: string;
  country: 'thailand' | 'malaysia' | 'singapore';
  isBase?: boolean;
  isBorder?: boolean;
  highlights: string[];
  relatedSlugs: string[];
};

export type LocationData = RouteData | CityData;

export const routes: RouteData[] = [
  {
    slug: 'thailand-to-malaysia',
    type: 'route',
    origin: 'Thailand',
    destination: 'Malaysia',
    originCountry: 'thailand',
    destinationCountry: 'malaysia',
    distance: '~100-800 km',
    estimatedTime: '3-12 hours',
    highlights: [
      'Cross-border documentation assistance',
      'Licensed for Thailand-Malaysia border crossing',
      '24/7 emergency service'
    ],
    relatedSlugs: ['sadao', 'hat-yai', 'johor-bahru', 'malaysia-to-thailand']
  },
  {
    slug: 'malaysia-to-thailand',
    type: 'route',
    origin: 'Malaysia',
    destination: 'Thailand',
    originCountry: 'malaysia',
    destinationCountry: 'thailand',
    distance: '~100-800 km',
    estimatedTime: '3-12 hours',
    highlights: [
      'Cross-border documentation assistance',
      'Licensed for Malaysia-Thailand border crossing',
      '24/7 emergency service'
    ],
    relatedSlugs: ['johor-bahru', 'kuala-lumpur', 'hat-yai', 'thailand-to-malaysia']
  },
  {
    slug: 'singapore-to-thailand',
    type: 'route',
    origin: 'Singapore',
    destination: 'Thailand',
    originCountry: 'singapore',
    destinationCountry: 'thailand',
    distance: '~950-1200 km',
    estimatedTime: '12-18 hours',
    highlights: [
      'Multi-border crossing (Singapore-Malaysia-Thailand)',
      'Full documentation support',
      'Door-to-door service'
    ],
    relatedSlugs: ['singapore', 'johor-bahru', 'hat-yai', 'malaysia-to-singapore']
  },
  {
    slug: 'malaysia-to-singapore',
    type: 'route',
    origin: 'Malaysia',
    destination: 'Singapore',
    originCountry: 'malaysia',
    destinationCountry: 'singapore',
    distance: '~10-400 km',
    estimatedTime: '1-6 hours',
    highlights: [
      'Causeway and Second Link crossing options',
      'Singapore vehicle import documentation',
      'Express service available'
    ],
    relatedSlugs: ['johor-bahru', 'singapore', 'kuala-lumpur']
  },
  {
    slug: 'johor-bahru-to-singapore',
    type: 'route',
    origin: 'Johor Bahru',
    destination: 'Singapore',
    originCountry: 'malaysia',
    destinationCountry: 'singapore',
    distance: '~30 km',
    estimatedTime: '1-2 hours',
    highlights: [
      'Fastest cross-border route',
      'Both Causeway and Second Link options',
      'Same-day delivery available'
    ],
    relatedSlugs: ['johor-bahru', 'singapore', 'malaysia-to-singapore']
  },
  {
    slug: 'hat-yai-to-penang',
    type: 'route',
    origin: 'Hat Yai',
    destination: 'Penang',
    originCountry: 'thailand',
    destinationCountry: 'malaysia',
    distance: '~150 km',
    estimatedTime: '3-4 hours',
    highlights: [
      'Popular route for Thai motorcyclists',
      'Sadao border crossing',
      'Direct service from our base'
    ],
    relatedSlugs: ['hat-yai', 'penang', 'sadao', 'thailand-to-malaysia']
  }
];

export const cities: CityData[] = [
  {
    slug: 'johor-bahru',
    type: 'city',
    name: 'Johor Bahru',
    country: 'malaysia',
    isBorder: true,
    highlights: [
      'Gateway to Singapore',
      'Major towing hub',
      'Cross-border specialists'
    ],
    relatedSlugs: ['singapore', 'kuala-lumpur', 'johor-bahru-to-singapore', 'malaysia-to-singapore']
  },
  {
    slug: 'hat-yai',
    type: 'city',
    name: 'Hat Yai',
    country: 'thailand',
    highlights: [
      'Southern Thailand hub',
      'Close to Malaysian border',
      'Popular tourist destination'
    ],
    relatedSlugs: ['sadao', 'penang', 'hat-yai-to-penang', 'thailand-to-malaysia']
  },
  {
    slug: 'sadao',
    type: 'city',
    name: 'Sadao',
    country: 'thailand',
    isBase: true,
    isBorder: true,
    highlights: [
      'TMS home base',
      'Thai-Malaysian border town',
      'Fastest response times'
    ],
    relatedSlugs: ['hat-yai', 'johor-bahru', 'thailand-to-malaysia', 'malaysia-to-thailand']
  },
  {
    slug: 'singapore',
    type: 'city',
    name: 'Singapore',
    country: 'singapore',
    highlights: [
      'Island nation coverage',
      'Premium towing service',
      'Import/export specialists'
    ],
    relatedSlugs: ['johor-bahru', 'johor-bahru-to-singapore', 'malaysia-to-singapore', 'singapore-to-thailand']
  },
  {
    slug: 'kuala-lumpur',
    type: 'city',
    name: 'Kuala Lumpur',
    country: 'malaysia',
    highlights: [
      'Capital city coverage',
      'Central Malaysia hub',
      'Long-distance towing'
    ],
    relatedSlugs: ['johor-bahru', 'penang', 'ipoh', 'malaysia-to-thailand']
  },
  {
    slug: 'penang',
    type: 'city',
    name: 'Penang',
    country: 'malaysia',
    highlights: [
      'Northern Malaysia coverage',
      'Island and mainland service',
      'Tourist destination support'
    ],
    relatedSlugs: ['ipoh', 'hat-yai', 'hat-yai-to-penang', 'kuala-lumpur']
  },
  {
    slug: 'ipoh',
    type: 'city',
    name: 'Ipoh',
    country: 'malaysia',
    highlights: [
      'Central corridor coverage',
      'Perak state hub',
      'Route between KL and Penang'
    ],
    relatedSlugs: ['kuala-lumpur', 'penang', 'malaysia-to-thailand']
  },
  {
    slug: 'hatyai-border',
    type: 'city',
    name: 'Hat Yai Border Crossing',
    country: 'thailand',
    isBorder: true,
    highlights: [
      'Main Thailand-Malaysia crossing point',
      'Customs documentation support',
      '24/7 border crossing assistance'
    ],
    relatedSlugs: ['hat-yai', 'sadao', 'thailand-to-malaysia', 'malaysia-to-thailand']
  }
];

// Combined locations for easy iteration
export const allLocations: LocationData[] = [...routes, ...cities];

// Helper to get location by slug
export function getLocationBySlug(slug: string): LocationData | undefined {
  return allLocations.find(loc => loc.slug === slug);
}

// Helper to get related locations
export function getRelatedLocations(location: LocationData): LocationData[] {
  return location.relatedSlugs
    .map(slug => getLocationBySlug(slug))
    .filter((loc): loc is LocationData => loc !== undefined);
}

// Country display names for i18n
export const countryKeys = {
  thailand: 'Thailand',
  malaysia: 'Malaysia',
  singapore: 'Singapore'
} as const;
