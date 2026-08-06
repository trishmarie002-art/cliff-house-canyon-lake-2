import { AREA_ATTRACTIONS, BEDROOMS_DATA, GALLERY_IMAGES } from './propertyData';

export interface SiteImageSlot {
  id: string;
  title: string;
  section: string;
  fallback: string;
  alt: string;
}

const gallery = (id: string) => GALLERY_IMAGES.find((image) => image.id === id)!;

export const SITE_IMAGE_SLOTS: SiteImageSlot[] = [
  { id: 'hero-sunset', title: 'Hero — Sunset version', section: 'Homepage hero', fallback: gallery('hero-view').src, alt: 'Cliff House waterfront sunset hero' },
  { id: 'hero-day', title: 'Hero — Daytime version', section: 'Homepage hero', fallback: gallery('master-bedroom').src, alt: 'Cliff House waterfront daytime hero' },
  { id: 'intro-main', title: 'Property introduction — Main image', section: 'Homepage introduction', fallback: gallery('bedroom-bunks').src, alt: 'Cliff House property introduction' },
  { id: 'intro-accent', title: 'Property introduction — Small overlapping image', section: 'Homepage introduction', fallback: gallery('outdoor-dining').src, alt: 'Cliff House outdoor living detail' },
  { id: 'experience-waterfront', title: 'Direct lake access', section: 'Experience sections', fallback: gallery('sunset-deck').src, alt: 'Direct lake access at Canyon Lake' },
  { id: 'experience-decks', title: 'Two scenic decks', section: 'Experience sections', fallback: gallery('master-bedroom').src, alt: 'Upper deck overlooking Canyon Lake' },
  { id: 'experience-hot-tub', title: 'Private hot tub', section: 'Experience sections', fallback: gallery('bedroom-bunks').src, alt: 'Private hot tub with lake view' },
  { id: 'experience-firepit', title: 'Firepit and grill station', section: 'Experience sections', fallback: gallery('outdoor-dining').src, alt: 'Waterfront firepit and grill area' },
  ...BEDROOMS_DATA.map((room, index) => ({ id: `bedroom-${index + 1}`, title: room.name, section: 'Sleeping arrangements', fallback: room.image, alt: room.name })),
  { id: 'about-feature', title: 'About Cliff House — Featured image', section: 'About page', fallback: gallery('bathroom-master').src, alt: 'About Cliff House' },
  ...AREA_ATTRACTIONS.map((spot) => ({ id: `location-${spot.id}`, title: spot.name, section: 'Location section', fallback: spot.image, alt: spot.name })),
];
