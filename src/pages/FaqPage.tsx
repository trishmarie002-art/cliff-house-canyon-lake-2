import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/propertyData';
import { HelpCircle, ChevronDown, Search, ShieldCheck, Clock, Car, Flame, MessageSquare, ExternalLink } from 'lucide-react';

interface FaqPageProps {
  onOpenAirbnb: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenAirbnb }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const expandedFaqs = FAQS;

  const filteredFaqs = expandedFaqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-[#091726] text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase mb-4"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" /> Frequently Asked Questions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl text-white font-normal mb-6"
          >
            Cliff House <span className="italic text-amber-200">FAQ & Policies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Everything you need to know about check-in, guest capacity, shoreline access, amenities, and house rules.
          </motion.p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-amber-300" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. check-in, parking, hot tub, pets)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 backdrop-blur-md"
          />
        </div>

        {/* House Rules Quick Reference Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <Clock className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <span className="font-bold text-white block">4 PM Check-in</span>
              <span className="text-slate-400">11 AM Check-out</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">Max 10 Guests</span>
              <span className="text-slate-400">Comal Permit #L1891</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <Car className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <span className="font-bold text-white block">Free Parking</span>
              <span className="text-slate-400">On the Premises</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <Flame className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <span className="font-bold text-white block">Right on the Lake</span>
              <span className="text-slate-400">Canyon Lake Waterfront</span>
            </div>
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/15 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left font-serif-heading text-lg font-medium text-white flex items-center justify-between gap-4 cursor-pointer hover:text-amber-200 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-amber-300 font-sans text-xs font-bold w-6 h-6 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-slate-300 font-light leading-relaxed border-t border-white/10 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 glass-panel rounded-3xl border border-white/10 text-slate-300">
              <p>No questions matched "{searchQuery}". Ask Superhost Richard directly below!</p>
            </div>
          )}
        </div>

        {/* Contact Host CTA */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" /> Direct Host Inquiry
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl text-white font-normal">
              Have a Specific Question?
            </h3>
            <p className="text-slate-300 text-xs font-light">
              Questions about dates, policies, or special requests are handled securely through the official Airbnb listing.
            </p>
          </div>

          <button
            onClick={onOpenAirbnb}
            className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Open Airbnb to Message the Host</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
