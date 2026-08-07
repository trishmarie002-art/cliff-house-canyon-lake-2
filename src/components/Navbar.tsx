import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Star } from 'lucide-react';
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
          ? 'bg-white shadow-xl py-2 border-b border-slate-200'
          : 'bg-white shadow-lg py-2 border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo & Permit Badge */}
        <button
          onClick={() => handleTabClick('home')}
          className="group flex items-center text-left cursor-pointer"
        >
          <img
            src="https://pub-a35884625cfe400d9088764a7f0e49e0.r2.dev/Cliffhouse/cliffhouselogo.png"
            alt="Cliff House at Canyon Lake"
            className="h-[72px] sm:h-20 w-auto max-w-[230px] sm:max-w-[280px] object-contain"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 text-sm font-medium text-slate-700">
          {pages.map((p) => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleTabClick(p.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'text-slate-700 hover:text-amber-700 hover:bg-slate-100'
                }`}
              >
                {p.label}
              </button>
            );
          })}
        </nav>

        {/* Airbnb CTA */}
        <div className="hidden sm:flex items-center space-x-3">
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
            className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="flex items-center pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{PROPERTY_INFO.rating} ({PROPERTY_INFO.reviewCount} Reviews) • Superhost</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTabClick(p.id)}
                className={`px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === p.id
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
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
