import React from 'react';
import { motion } from 'motion/react';
import { AvailabilityCalendar } from '../components/AvailabilityCalendar';
import { Calendar as CalendarIcon } from 'lucide-react';

interface CalendarPageProps {
  onOpenAirbnb: () => void;
}

export const CalendarPage: React.FC<CalendarPageProps> = ({ onOpenAirbnb }) => {
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
            <CalendarIcon className="w-4 h-4 text-amber-400" /> Availability
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl text-white font-normal mb-6"
          >
            Stay <span className="italic text-amber-200">Availability</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            View availability for your Canyon Lake vacation, then visit Airbnb for current dates, exact pricing, and secure booking.
          </motion.p>
        </div>

        {/* Availability Calendar */}
        <div className="bg-[#f8f6f0] rounded-3xl p-4 sm:p-8 text-[#0d2238]">
          <AvailabilityCalendar onOpenAirbnb={onOpenAirbnb} />
        </div>
      </div>
    </div>
  );
};
