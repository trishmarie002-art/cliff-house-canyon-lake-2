import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AvailabilityCalendar } from '../components/AvailabilityCalendar';
import { Calendar as CalendarIcon, ShieldCheck, DollarSign, Calculator, Clock, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface CalendarPageProps {
  onOpenAirbnb: () => void;
}

export const CalendarPage: React.FC<CalendarPageProps> = ({ onOpenAirbnb }) => {
  const [guestCount, setGuestCount] = useState(4);
  const [estimatedNights, setEstimatedNights] = useState(3);

  // Estimator rates
  const nightlyBaseRate = 425;
  const cleaningFee = 210;
  const subtotal = nightlyBaseRate * estimatedNights;
  const taxesAndFees = Math.round(subtotal * 0.12);
  const totalEstimate = subtotal + cleaningFee + taxesAndFees;

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
            <CalendarIcon className="w-4 h-4 text-amber-400" /> Real-time Availability & Rates
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl text-white font-normal mb-6"
          >
            Calendar & <span className="italic text-amber-200">Rate Calculator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Check available dates for your Canyon Lake vacation, calculate an instant stay estimate, and reserve directly on Airbnb.
          </motion.p>
        </div>

        {/* Instant Rate Calculator Tool Card */}
        <div className="glass-panel rounded-3xl p-8 border border-white/15 mb-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Instant Stay Price Estimator
            </div>
            <h2 className="font-serif-heading text-2xl text-white">Estimate Your Trip Cost</h2>

            {/* Controls */}
            <div className="space-y-4 text-sm">
              <div>
                <div className="flex justify-between mb-1 text-slate-300 font-medium text-xs">
                  <span>Number of Nights:</span>
                  <strong className="text-amber-300">{estimatedNights} Nights</strong>
                </div>
                <input
                  type="range"
                  min="2"
                  max="14"
                  value={estimatedNights}
                  onChange={(e) => setEstimatedNights(parseInt(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1 text-slate-300 font-medium text-xs">
                  <span>Number of Guests:</span>
                  <strong className="text-amber-300">{guestCount} Guests (Max 10)</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 rounded-lg cursor-pointer h-2"
                />
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>Check-in: <strong>4:00 PM</strong> • Check-out: <strong>11:00 AM</strong></span>
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>W.O.R.D. Permit #L1891 • Keyless Smart Lock Access</span>
              </p>
            </div>
          </div>

          {/* Estimate Breakdown Card */}
          <div className="md:col-span-6 bg-[#0d2238] p-6 rounded-2xl border border-amber-400/30 space-y-4">
            <div className="pb-3 border-b border-white/10 flex justify-between items-center">
              <span className="text-xs text-slate-300">Est. Average Nightly</span>
              <span className="font-serif text-2xl font-bold text-amber-300">${nightlyBaseRate} <span className="text-xs text-slate-400 font-sans font-normal">/ night</span></span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>${nightlyBaseRate} × {estimatedNights} nights</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning & Linen Fee</span>
                <span>${cleaningFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Taxes & Service Fees</span>
                <span>${taxesAndFees}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-white">
              <span className="font-bold text-sm">Estimated Total</span>
              <span className="font-serif text-2xl font-bold text-amber-300">${totalEstimate}</span>
            </div>

            <button
              onClick={onOpenAirbnb}
              className="w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Lock In Exact Rates on Airbnb</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embed Calendar Component */}
        <div className="bg-[#f8f6f0] rounded-3xl p-4 sm:p-8 text-[#0d2238]">
          <AvailabilityCalendar onOpenAirbnb={onOpenAirbnb} />
        </div>
      </div>
    </div>
  );
};
