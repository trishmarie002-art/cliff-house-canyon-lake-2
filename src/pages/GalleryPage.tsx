import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data/propertyData';
import { GalleryCategory } from '../types';
import { Lightbox } from '../components/Lightbox';
import { Camera, Maximize2, Sparkles, Filter, Shield, Heart, ExternalLink } from 'lucide-react';

interface GalleryPageProps {
  onOpenAirbnb: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenAirbnb }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories: { key: GalleryCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Property Photos', count: GALLERY_IMAGES.length },
    { key: 'views', label: 'Views & Decks', count: GALLERY_IMAGES.filter((i) => i.category === 'views').length },
    { key: 'interior', label: 'Living & Kitchen', count: GALLERY_IMAGES.filter((i) => i.category === 'interior').length },
    { key: 'bedrooms', label: 'Bedrooms & Baths', count: GALLERY_IMAGES.filter((i) => i.category === 'bedrooms').length },
    { key: 'outdoor', label: 'Hot Tub & Firepit', count: GALLERY_IMAGES.filter((i) => i.category === 'outdoor').length },
  ];

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeCategory === 'all' || img.category === activeCategory
  );

  const openLightboxAtIndex = (imgId: string) => {
    const idx = filteredImages.findIndex((img) => img.id === imgId);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#091726] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase mb-4"
          >
            <Camera className="w-4 h-4 text-amber-400" /> Full HD Photo Tour
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl text-white font-normal mb-6"
          >
            Cliff House <span className="italic text-amber-200">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Browse high-resolution photographs of our cliffside waterfront location, multi-tiered sunset decks, private hot tub spa, open-concept living spaces, and luxury guest bedrooms.
          </motion.p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.key
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat.key ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-amber-300'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => openLightboxAtIndex(image.id)}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 cursor-pointer shadow-xl aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Top Feature Tag */}
              {image.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" /> Featured View
                  </span>
                </div>
              )}

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#091726]/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
                      Click to View Fullscreen
                    </span>
                    <h3 className="font-serif-heading text-lg font-medium text-white">
                      {image.title}
                    </h3>
                  </div>
                  <div className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-16 text-center glass-panel rounded-3xl p-8 border border-white/15 max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif-heading text-2xl text-white font-normal">
            Ready to Experience Cliff House in Person?
          </h3>
          <p className="text-slate-300 text-sm font-light">
            Book your dates on Airbnb to secure your waterfront getaway on Canyon Lake.
          </p>
          <button
            onClick={onOpenAirbnb}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl transition-all cursor-pointer"
          >
            <span>Check Live Availability on Airbnb</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Lightbox Component */}
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredImages.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)}
          onSelectImage={(index) => setLightboxIndex(index)}
        />
      </div>
    </div>
  );
};
