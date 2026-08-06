import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Compass, Waves, Sun, Flame, FlameKindling } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

export const PropertyIntro: React.FC = () => {
  return (
    <section id="overview" className="py-20 sm:py-28 bg-[#091726] text-white relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" /> Sanctuary on Canyon Lake
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal leading-tight text-white">
              Where Hill Country Tranquility Meets <span className="italic text-amber-200">Waterfront Luxury</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Cliff House is a custom, multi-level waterfront sanctuary perched directly over the turquoise waters of Canyon Lake, Texas. Designed to capture 180-degree panoramic lake vistas from every floor, this architectural home offers the ultimate blend of privacy, relaxation, and high-end outdoor entertaining.
            </p>

            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Whether you're sipping morning coffee on the upper deck, splashing in the crystal-clear water, soaking in the cliffside hot tub under starry night skies, or roasting marshmallows by the waterfront firepit, Cliff House creates memories that last a lifetime.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Canyon Lake, Texas</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>W.O.R.D. Permit #L1891</span>
              </div>
            </div>
          </motion.div>

          {/* Intro Featured Multi-Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 aspect-[16/10]">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczNlEWpJDnDAft8suKPW24x5sOAq3rWJK5J4R6oYKs1LBQ3J2TdjywSmNH2heupJftiFvcUl6nuE90PjPpXRE5xQGzMJFeYjM9KuwSZxg5cDgtz44mo=w1600"
                alt="Cliff House at Canyon Lake exterior and deck view"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091726]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">180° Lake Vistas</span>
                  <p className="text-white font-serif-heading text-lg">Two scenic decks overlooking turquoise lake waters</p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs shrink-0">
                  Entire Home • 10 Guests
                </div>
              </div>
            </div>

            {/* Floating Overlapping Small Image */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl z-10">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczPyxq_KEYCUIMnT4ho-rJZ6Mm9oiHAieb-Qm0YbF5yFAMVwH9G50mibQUMUB-iT9KvwG4tN8d1aMVK9-GQ_-T3FZxyzKRbawFBXtkxk9AMvSb2Fc8s=w1600"
                alt="Cliff House outdoor hot tub view"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Property Quick Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all">
            <Waves className="w-8 h-8 text-amber-300 mb-3" />
            <h3 className="font-serif-heading text-xl text-white mb-1">Direct Water Access</h3>
            <p className="text-xs text-slate-300 font-light">Walk directly down to the shoreline for swimming, kayaking & water fun.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all">
            <Sun className="w-8 h-8 text-amber-300 mb-3" />
            <h3 className="font-serif-heading text-xl text-white mb-1">Two Scenic Decks</h3>
            <p className="text-xs text-slate-300 font-light">Upper balcony dining & lower lounge deck with endless sunset views.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all">
            <Sparkles className="w-8 h-8 text-amber-300 mb-3" />
            <h3 className="font-serif-heading text-xl text-white mb-1">Private Cliff Spa</h3>
            <p className="text-xs text-slate-300 font-light">Relaxing 6-person hot tub perched over the water with night lighting.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all">
            <Flame className="w-8 h-8 text-amber-300 mb-3" />
            <h3 className="font-serif-heading text-xl text-white mb-1">Firepit & Grill Station</h3>
            <p className="text-xs text-slate-300 font-light">Lakeside firepit seating and outdoor barbecue station for evening cookouts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
