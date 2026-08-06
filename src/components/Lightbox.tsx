import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react';
import { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
  onSelectImage,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-300">
      {/* Lightbox Header Bar */}
      <div className="p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10 z-10">
        <div>
          <span className="font-serif-heading text-lg font-normal text-amber-200">Cliff House Gallery</span>
          <span className="text-xs text-slate-400 block font-sans">
            Photo {currentIndex + 1} of {images.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 z-20 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 z-20 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="max-w-6xl max-h-[75vh] relative flex flex-col items-center">
          <img
            key={current.id}
            src={current.src}
            alt={current.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="mt-4 text-center">
            <h4 className="font-serif-heading text-xl text-white font-normal">{current.title}</h4>
            <p className="text-xs text-slate-300 font-light mt-1 max-w-xl mx-auto">{current.alt}</p>
          </div>
        </div>
      </div>

      {/* Lightbox Bottom Thumbnail Strip */}
      <div className="p-4 bg-black/80 border-t border-white/10 overflow-x-auto select-none">
        <div className="flex items-center justify-center gap-3 min-w-max mx-auto px-4">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => onSelectImage(idx)}
              className={`relative rounded-lg overflow-hidden w-16 h-12 transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'ring-2 ring-amber-400 scale-105 opacity-100'
                  : 'opacity-40 hover:opacity-80'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
