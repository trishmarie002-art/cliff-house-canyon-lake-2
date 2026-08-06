import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ExternalLink, Star, Users, Bed, Bath, Sparkles, Shield, Anchor, Heart } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface HeroProps {
  onOpenAirbnb: () => void;
  ambiance: 'day' | 'sunset';
}

export const Hero: React.FC<HeroProps> = ({ onOpenAirbnb, ambiance }) => {
  const bgImage = ambiance === 'sunset'
    ? 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/de20e643-2eab-4685-b377-39519e624764.jpeg'
    : 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MDY1NjkwNTgzNzk3OTgzOA%3D%3D/original/a73c509d-2758-4898-914c-65fa01cf3459.jpeg';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with subtle scale/movement */}
      <div className="absolute inset-0 z-0">
        <motion.img
          key={bgImage}
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src={bgImage}
          alt="Cliff House at Canyon Lake waterfront deck view"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark gradients for editorial depth and visual legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091726] via-[#0d2238]/60 to-black/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#091726]/40 to-[#091726]/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-wide text-amber-200 mb-6 shadow-xl"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          <span>Airbnb Guest Favorite • Rated 4.95 (98 Reviews)</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md"
        >
          Your Private Front-Row Seat <br className="hidden sm:inline" />
          <span className="italic text-amber-200/95 font-light">to Canyon Lake</span>
        </motion.h1>

        {/* Emotional Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-light leading-relaxed mb-10 text-shadow-sm"
        >
          Unforgettable sunsets, relaxing lake days, and room for everyone—welcome to your waterfront Texas Hill Country escape perched directly over crystal turquoise waters.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#calendar"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md font-semibold text-base transition-all flex items-center justify-center gap-2 hover:border-amber-300/60"
          >
            <Calendar className="w-5 h-5 text-amber-300" />
            <span>View Availability</span>
          </a>

          <button
            onClick={onOpenAirbnb}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-base shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Book on Airbnb</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Floating Property Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="max-w-4xl mx-auto glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/15 text-left"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Spec 1 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="p-3 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/20">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-serif-heading">Up to 10</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider">Guests</span>
              </div>
            </div>

            {/* Spec 2 */}
            <div className="flex items-center gap-3.5 p-2 pt-4 md:pt-2">
              <div className="p-3 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/20">
                <Bed className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-serif-heading">3 Bed / 7 Beds</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider">Bedrooms</span>
              </div>
            </div>

            {/* Spec 3 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="p-3 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/20">
                <Bath className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-serif-heading">2.5 Baths</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider">Bathrooms</span>
              </div>
            </div>

            {/* Spec 4 */}
            <div className="flex items-center gap-3.5 p-2">
              <div className="p-3 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-400/20">
                <Anchor className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-serif-heading">Waterfront</span>
                <span className="text-xs text-amber-300 font-medium">Direct Lake Access</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Host: <strong className="text-white">Richard (Superhost)</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{PROPERTY_INFO.permitNumber}</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-200">
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Guest Favorite Top 5% of Homes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
