import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, PROPERTY_INFO } from '../data/propertyData';
import { HelpCircle, ChevronDown, Search, ShieldCheck, Clock, Car, Flame, Waves, AlertCircle, MessageSquare, Send, CheckCircle2, ExternalLink } from 'lucide-react';

interface FaqPageProps {
  onOpenAirbnb: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenAirbnb }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [questionText, setQuestionText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const expandedFaqs = [
    ...FAQS,
    {
      q: "Are pets allowed at Cliff House?",
      a: "Due to cliffside safety and allergy considerations for future guests, we have a strict no-pet policy. Service animals must be registered prior to check-in."
    },
    {
      q: "What is the parking capacity?",
      a: "Our private paved driveway easily accommodates up to 4 full-sized vehicles or a vehicle with a boat trailer. Street parking is strictly prohibited per Comal County regulations."
    },
    {
      q: "What are the quiet hours and house rules?",
      a: "Quiet hours are observed from 10:00 PM to 8:00 AM to respect our scenic residential neighborhood. No amplified outdoor noise or parties are permitted. Maximum occupancy is strictly capped at 10 guests."
    },
    {
      q: "Is coffee and kitchen essentials provided?",
      a: "Yes! The gourmet kitchen includes a dedicated coffee bar with both a Keurig and drip coffee maker, complimentary pods, tea, sugar, creamer, cooking oils, salt & pepper, and full cookware."
    },
    {
      q: "How close is Whitewater Amphitheater and Guadalupe River Tubing?",
      a: "Whitewater Amphitheater is just a 12-minute drive (6.8 miles), and popular Guadalupe River tube outfitters are 10 minutes away."
    }
  ];

  const filteredFaqs = expandedFaqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (questionText && userEmail) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setQuestionText('');
        setUserEmail('');
      }, 4000);
    }
  };

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
              <span className="font-bold text-white block">4 Vehicles Max</span>
              <span className="text-slate-400">On-site Driveway</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
            <Flame className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <span className="font-bold text-white block">10 PM Quiet Hours</span>
              <span className="text-slate-400">No Outdoor Parties</span>
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

        {/* Contact Host Form */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" /> Direct Host Inquiry
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl text-white font-normal">
              Have a Specific Question?
            </h3>
            <p className="text-slate-300 text-xs font-light">
              Send a quick message to Superhost Richard. You will receive a prompt response!
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-white">Message Sent to Host Richard</h4>
              <p className="text-xs text-slate-300">
                We'll respond to <strong>{userEmail}</strong> shortly! You can also view live messaging on Airbnb.
              </p>
            </div>
          ) : (
            <form onSubmit={handleQuestionSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Question or Inquiry</label>
                <textarea
                  required
                  rows={3}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Ask about dates, dock access, amenities, or special requests..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Send Question to Host</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="pt-4 text-center border-t border-white/10">
            <button
              onClick={onOpenAirbnb}
              className="text-xs text-amber-300 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Or view official messaging on Airbnb</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
