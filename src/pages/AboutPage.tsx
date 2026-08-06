import React from 'react';
import { motion } from 'motion/react';
import { PROPERTY_INFO } from '../data/propertyData';
import { PropertyIntro } from '../components/PropertyIntro';
import { SleepingArrangements } from '../components/SleepingArrangements';
import { AmenitiesGrid } from '../components/AmenitiesGrid';
import { LocationSection } from '../components/LocationSection';
import { ShieldCheck, Heart, Award, MapPin, Users, Bed, Bath, Sparkles, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onOpenAirbnb: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAirbnb }) => {
  return (
    <div className="pt-24 pb-16 bg-[#091726] text-slate-100 min-h-screen space-y-16">
      {/* Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-[#0d2238] to-[#091726] border-b border-white/10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs uppercase tracking-widest mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            About Cliff House at Canyon Lake
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl text-white font-normal mb-6"
          >
            A Texas Hill Country <span className="italic text-amber-200">Waterfront Haven</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            Perched atop limestone bluffs overlooking turquoise waters, Cliff House was designed specifically to give guests an unmatched front-row experience of Canyon Lake.
          </motion.p>
        </div>
      </section>

      {/* Meet the Host Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl aspect-square relative">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg"
                alt="Cliff House at Canyon Lake waterfront property"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs mb-2">
                  <Award className="w-3.5 h-3.5" /> Superhost
                </div>
                <h3 className="font-serif-heading text-2xl font-bold">Hosted by Richard</h3>
                <p className="text-xs text-amber-200">98 Verified Reviews • 100% Response Rate</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4" /> Hospitality First
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
              Dedicated to Crafting Unforgettable Hill Country Memories
            </h2>
            <p className="text-slate-300 leading-relaxed font-light">
              "Welcome to Cliff House! My goal from day one has been to create a tranquil, luxurious, and completely stress-free sanctuary for families, friends, and couples looking to escape the busyness of life. Whether you're sipping morning coffee on the upper deck as the fog lifts over Canyon Lake or soaking in the hot tub under a blanket of stars, I've curated every detail for your comfort."
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="block font-serif text-2xl font-bold text-amber-300">4.95 ★</span>
                <span className="text-xs text-slate-400">Average Rating</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="block font-serif text-2xl font-bold text-amber-300">10 Guests</span>
                <span className="text-xs text-slate-400">Max Capacity</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="block font-serif text-xl font-bold text-amber-300">Permit #L1891</span>
                <span className="text-xs text-slate-400">Comal County W.O.R.D.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAirbnb}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl transition-all cursor-pointer"
              >
                <span>Book Direct via Airbnb</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Architectural Overview */}
      <PropertyIntro />

      {/* Detailed Sleeping Layout */}
      <SleepingArrangements />

      {/* Categorized Amenities */}
      <AmenitiesGrid />

      {/* Location & Local Attractions */}
      <LocationSection />
    </div>
  );
};
