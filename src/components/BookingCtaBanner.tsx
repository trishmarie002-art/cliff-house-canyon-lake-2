import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Star, Shield, Heart, MapPin, Sparkles } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface BookingCtaBannerProps {
  onOpenAirbnb: () => void;
}

export const BookingCtaBanner: React.FC<BookingCtaBannerProps> = ({ onOpenAirbnb }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#091726] relative overflow-hidden text-white border-t border-white/10">
      {/* Background glowing ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase shadow-xl"
        >
          <Sparkles className="w-4 h-4 text-amber-300" /> Reserve Your Canyon Lake Escape
        </motion.div>

        <h2 className="font-serif-heading text-4xl sm:text-6xl font-normal tracking-tight leading-tight text-white">
          Ready for Your Front-Row Seat <br className="hidden sm:inline" />
          <span className="italic text-amber-200">to Unforgettable Sunsets?</span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-xl font-light leading-relaxed">
          Experience 180° panoramic lake views, private hot tub, two scenic decks, and direct water access. Lock in your dates securely on Airbnb.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAirbnb}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-lg shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Book Your Stay on Airbnb</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>

        {/* Badges footer info */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>4.95 Rating (98 Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Hosted by Richard (Superhost)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Canyon Lake, Texas</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{PROPERTY_INFO.permitNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
