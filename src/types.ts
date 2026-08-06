export type PageTab = 'home' | 'about' | 'gallery' | 'reviews' | 'calendar' | 'faq' | 'admin';

export interface PropertyInfo {
  name: string;
  tagline: string;
  location: string;
  subLocation: string;
  guestsMax: number;
  bedroomsCount: number;
  bedsCount: number;
  bathroomsCount: number;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostStatus: string;
  permitNumber: string;
  airbnbUrl: string;
}

export type GalleryCategory = 'all' | 'views' | 'interior' | 'bedrooms' | 'outdoor';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  featured?: boolean;
}

export interface BedroomLayout {
  id: string;
  name: string;
  subtitle: string;
  beds: string[];
  capacity: number;
  image: string;
  features: string[];
}

export interface AmenityCategory {
  id: string;
  title: string;
  items: { name: string; description: string; icon: string; highlight?: boolean }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  avatar?: string;
  stayDate?: string;
  tags?: string[];
}

export interface AreaAttraction {
  id: string;
  name: string;
  category: 'water' | 'dining' | 'nature' | 'entertainment';
  distance: string;
  description: string;
  image: string;
}

export interface CalendarRange {
  start: string;
  end: string;
}

export interface IcalSyncStatus {
  configured: boolean;
  message?: string;
  blockedRanges: CalendarRange[];
  lastUpdated?: string;
}
