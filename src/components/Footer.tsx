import React from 'react';
import { ExternalLink, MapPin, Shield, Star, Heart } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';
import { PageTab } from '../types';

interface FooterProps {
  onOpenAirbnb: () => void;
  onNavigate?: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAirbnb, onNavigate }) => {
  const handleNav = (tab: PageTab) => {
    if (onNavigate) {
      onNavigate(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06101a] text-slate-400 py-16 border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 font-serif font-bold text-lg">
                CH
              </div>
              <div>
                <span className="font-serif-heading text-xl font-bold text-white block">
                  Cliff House at Canyon Lake
                </span>
                <span className="text-amber-300 text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Canyon Lake, Texas Waterfront Retreat
                </span>
              </div>
            </div>

            <p className="text-slate-400 font-light leading-relaxed max-w-md">
              A private waterfront Texas Hill Country sanctuary featuring 180-degree lake views, two scenic decks, private stargazing hot tub, and direct water access.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Water Orientated Recreation District Permit <strong className="text-amber-200">#L1891</strong></span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-heading text-white text-sm font-semibold">Explore Pages</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  About Us & The House
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Guest Reviews (4.95 ★)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calendar')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Availability Calendar
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  FAQ & House Rules
                </button>
              </li>
            </ul>
          </div>

          {/* Airbnb Booking Direct Note */}
          <div className="md:col-span-4 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
              <Star className="w-4 h-4 fill-amber-300" />
              <span>Official Airbnb Listing</span>
            </div>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              For guest safety and trust, all availability, reservation dates, payment processing, cancellation policies, and guest communications are handled exclusively through Airbnb.
            </p>
            <button
              onClick={onOpenAirbnb}
              className="w-full py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <span>Open Airbnb Listing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Cliff House at Canyon Lake. All rights reserved. • W.O.R.D. Permit #L1891
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('faq')} className="hover:text-slate-300 cursor-pointer">
              Guest Policies & FAQ
            </button>
            <span>•</span>
            <button onClick={onOpenAirbnb} className="hover:text-amber-300 flex items-center gap-1 cursor-pointer">
              Book on Airbnb <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
