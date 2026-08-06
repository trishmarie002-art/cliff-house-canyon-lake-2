import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, ExternalLink, Anchor, Music, Trees, Wine } from 'lucide-react';
import { AREA_ATTRACTIONS, PROPERTY_INFO } from '../data/propertyData';
import { useSiteContent } from '../context/SiteContentContext';

export const LocationSection: React.FC = () => {
  const { imageFor } = useSiteContent();
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#091726] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase mb-4">
            <MapPin className="w-4 h-4 text-amber-400" /> Texas Hill Country Location
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-white mb-6">
            Explore <span className="italic text-amber-200">Canyon Lake & Surroundings</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Nestled between San Antonio and Austin, Canyon Lake is celebrated as "The Jewel of the Texas Hill Country." Cliff House puts you right on the water while keeping you close to world-class attractions.
          </p>
        </div>

        {/* Location Map Interactive Card */}
        <div className="p-8 rounded-3xl glass-panel border border-white/15 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Navigation className="w-4 h-4" /> Prime Lakefront Address
            </div>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-normal text-white">
              Canyon Lake, Texas
            </h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Situated on a quiet peninsula overlooking the main body of Canyon Lake. Convenient drive times from major Texas hubs:
            </p>

            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span>San Antonio (SAT Airport)</span>
                <strong className="text-amber-300">~45 mins drive</strong>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span>Austin (AUS Airport / Downtown)</span>
                <strong className="text-amber-300">~60 mins drive</strong>
              </div>
              <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span>Gruene Historic District & New Braunfels</span>
                <strong className="text-amber-300">~25 mins drive</strong>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Canyon+Lake+Texas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Map Preview Frame */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 h-80 relative shadow-inner">
            <iframe
              title="Canyon Lake Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.88373322197!2d-98.28318858273648!3d29.87327315182962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9fef209d6bb5%3A0xbc2ffb7ddbf63dd9!2sCanyon%20Lake%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>

        {/* Nearby Local Attractions */}
        <h3 className="font-serif-heading text-2xl font-normal text-white mb-8 text-center">
          Nearby Hill Country Experiences
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {AREA_ATTRACTIONS.map((spot) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-amber-400/40 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={imageFor(`location-${spot.id}`, spot.image)}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091726] via-transparent to-transparent opacity-70" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-300">
                  {spot.distance}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-white text-sm leading-snug">{spot.name}</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">{spot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
