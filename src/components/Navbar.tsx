import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Star, MapPin, Compass } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';
import { PageTab } from '../types';

interface NavbarProps {
  onOpenAirbnb: () => void;
  ambiance: 'day' | 'sunset';
  setAmbiance: (a: 'day' | 'sunset') => void;
  activeTab: PageTab;
  onNavigate: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAirbnb,
  ambiance,
  setAmbiance,
  activeTab,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleTabClick = (pageId: PageTab) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || activeTab !== 'home'
          ? 'bg-[#0d2238]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10'
          : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo & Permit Badge */}
        <button
          onClick={() => handleTabClick('home')}
          className="group flex items-center gap-3 text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 font-serif font-bold text-lg group-hover:border-amber-400 transition-colors">
            CH
          </div>
          <div>
            <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight text-white block">
              Cliff House
            </span>
            <span className="text-xs text-amber-300/80 tracking-widest uppercase flex items-center gap-1 font-sans">
              <MapPin className="w-3 h-3 text-amber-400" /> Canyon Lake, Texas
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-slate-200">
          {pages.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleTabClick(p.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'text-slate-200 hover:text-amber-300 hover:bg-white/10'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </nav>

        {/* Ambiance Toggle & Airbnb CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => setAmbiance(ambiance === 'day' ? 'sunset' : 'day')}
            title="Toggle Atmosphere View"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-slate-200 transition-all cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>{ambiance === 'day' ? 'Daylight' : 'Sunset Glow'}</span>
          </button>

          <button
            onClick={onOpenAirbnb}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Book on Airbnb</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAirbnb}
            className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            Book <ExternalLink className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d2238]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>{PROPERTY_INFO.rating} ({PROPERTY_INFO.reviewCount} Reviews) • Superhost</span>
            </div>
            <button
              onClick={() => setAmbiance(ambiance === 'day' ? 'sunset' : 'day')}
              className="text-xs px-2.5 py-1 rounded bg-white/10 text-slate-200 cursor-pointer"
            >
              {ambiance === 'day' ? '☀️ Day' : '🌅 Sunset'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTabClick(p.id)}
                className={`px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === p.id
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-200 hover:bg-white/10'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAirbnb();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Book on Airbnb</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
