import React from 'react';
import { Hero } from '../components/Hero';
import { PropertyIntro } from '../components/PropertyIntro';
import { StoryHighlights } from '../components/StoryHighlights';
import { SleepingArrangements } from '../components/SleepingArrangements';
import { AmenitiesGrid } from '../components/AmenitiesGrid';
import { ReviewsSection } from '../components/ReviewsSection';
import { LocationSection } from '../components/LocationSection';
import { AvailabilityCalendar } from '../components/AvailabilityCalendar';
import { BookingCtaBanner } from '../components/BookingCtaBanner';
import { PageTab } from '../types';
import { ArrowRight, Camera, Star, HelpCircle, Calendar, ShieldCheck, MapPin } from 'lucide-react';

interface HomePageProps {
  onOpenAirbnb: () => void;
  ambiance: 'day' | 'sunset';
  onNavigate: (page: PageTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAirbnb, ambiance, onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero onOpenAirbnb={onOpenAirbnb} ambiance={ambiance} />

      {/* Quick Navigation Quick-Links Strip */}
      <section className="bg-[#0b1d2e] border-y border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-amber-300 font-serif text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>W.O.R.D. Permit #L1891 • Superhost Managed Waterfront</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> About The House <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onNavigate('gallery')}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Camera className="w-3.5 h-3.5 text-amber-400" /> Photo Gallery <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onNavigate('reviews')}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Star className="w-3.5 h-3.5 text-amber-400" /> 98 Guest Reviews <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={() => onNavigate('faq')}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> FAQ & Rules <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Property Introduction & Architectural Overview */}
      <PropertyIntro />

      {/* Waterfront, Hot Tub, Decks & Firepit Story Highlights */}
      <StoryHighlights />

      {/* Sleeping Arrangements & Capacity */}
      <SleepingArrangements />

      {/* Amenities Preview */}
      <AmenitiesGrid />

      {/* Reviews Preview Banner */}
      <div className="bg-[#0b1d2e] py-8 text-center border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => onNavigate('reviews')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-sm font-semibold hover:bg-amber-400/25 transition-all cursor-pointer"
          >
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Read All 98 Verified Superhost Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Guest Reviews Section */}
      <ReviewsSection />

      {/* Location Section */}
      <LocationSection />

      {/* Availability Calendar & Estimator */}
      <AvailabilityCalendar onOpenAirbnb={onOpenAirbnb} />

      {/* Final Booking CTA Banner */}
      <BookingCtaBanner onOpenAirbnb={onOpenAirbnb} />
    </div>
  );
};
