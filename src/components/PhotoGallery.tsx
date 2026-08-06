import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useSiteContent } from '../context/SiteContentContext';
import { GalleryCategory, GalleryImage } from '../types';
import { Lightbox } from './Lightbox';
import { Camera, Maximize2, Sparkles, Filter } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const { galleryImages } = useSiteContent();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'All Property Photos' },
    { key: 'views', label: 'Exterior & Decks' },
    { key: 'interior', label: 'Living & Kitchen' },
    { key: 'bedrooms', label: 'Bedrooms & Baths' },
    { key: 'outdoor', label: 'Hot Tub & Firepit' },
  ];

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === 'all' || img.category === activeCategory
  );

  const openLightboxAtIndex = (imgId: string) => {
    const idx = filteredImages.findIndex((img) => img.id === imgId);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#091726] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase mb-4">
            <Camera className="w-4 h-4 text-amber-400" /> Interactive Photo Tour
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-white mb-6">
            Explore <span className="italic text-amber-200">Cliff House</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Take a visual walkthrough of our waterfront home, scenic decks, private cliffside hot tub, and modern guest suites.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => openLightboxAtIndex(image.id)}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 cursor-pointer shadow-xl aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#091726]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest block">
                      Click to Expand
                    </span>
                    <h3 className="font-serif-heading text-lg font-normal text-white">
                      {image.title}
                    </h3>
                  </div>
                  <div className="p-2.5 rounded-full bg-amber-500 text-slate-950">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
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
    </section>
  );
};
