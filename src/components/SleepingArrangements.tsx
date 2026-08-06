import React from 'react';
import { motion } from 'motion/react';
import { Bed, Users, ShieldCheck, Sparkles, CheckCircle2, Bath } from 'lucide-react';
import { BEDROOMS_DATA, PROPERTY_INFO } from '../data/propertyData';
import { useSiteContent } from '../context/SiteContentContext';

export const SleepingArrangements: React.FC = () => {
  const { imageFor } = useSiteContent();
  return (
    <section id="sleeping" className="py-20 sm:py-28 bg-[#0d2238] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase mb-4">
            <Bed className="w-4 h-4 text-amber-400" /> Comfort & Capacity
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-white mb-6">
            Restful Sanctuary for <span className="italic text-amber-200">Up to 10 Guests</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Thoughtfully configured across 3 spacious bedrooms, 7 comfortable beds with luxury linens, and 2.5 bathrooms, ensuring everyone in your group sleeps peacefully.
          </p>
        </div>

        {/* Bedroom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BEDROOMS_DATA.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl overflow-hidden border border-white/15 flex flex-col group hover:border-amber-400/40 transition-all shadow-2xl"
            >
              {/* Room Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={imageFor(`bedroom-${idx + 1}`, room.image)}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2238] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-semibold text-xs flex items-center gap-1.5 border border-white/10">
                  <Users className="w-3.5 h-3.5" /> Sleep {room.capacity}
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-200 uppercase tracking-widest">
                  {room.subtitle}
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif-heading text-xl font-normal text-white mb-2">
                    {room.name}
                  </h3>

                  {/* Bed Breakdown List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.beds.map((bed, bIdx) => (
                      <span key={bIdx} className="px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-400/20 text-amber-300 font-medium text-xs flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-amber-300" />
                        {bed}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {room.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bathroom & Capacity Summary Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/15 text-amber-300 border border-amber-400/20 shrink-0">
              <Bath className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif-heading text-xl text-white">2.5 Bathrooms Equipped with Amenities</h4>
              <p className="text-slate-300 text-sm font-light">Features en-suite master bath with walk-in shower, full guest bathroom, half bath, clean towels, organic shampoo, body wash & hairdryer.</p>
            </div>
          </div>
          <div className="shrink-0 text-center md:text-right">
            <span className="text-2xl font-serif-heading font-bold text-amber-200 block">Total 7 Beds</span>
            <span className="text-xs text-slate-400 uppercase tracking-widest">Ideal for 10 Guests</span>
          </div>
        </div>
      </div>
    </section>
  );
};
