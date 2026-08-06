import React, { useState, useEffect } from 'react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, 
  eachDayOfInterval, isSameMonth, isSameDay, isWithinInterval, parseISO, isBefore, startOfToday 
} from 'date-fns';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ExternalLink, RefreshCw, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';
import { CalendarRange, IcalSyncStatus } from '../types';

interface AvailabilityCalendarProps {
  onOpenAirbnb: () => void;
}

export const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ onOpenAirbnb }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [syncStatus, setSyncStatus] = useState<IcalSyncStatus>({
    configured: false,
    message: "Live availability is coming soon. View current dates on Airbnb.",
    blockedRanges: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  
  // Date range picker state
  const [selectedStart, setSelectedStart] = useState<Date | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<Date | null>(null);

  const fetchIcal = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ical');
      if (res.ok) {
        const data: IcalSyncStatus = await res.json();
        setSyncStatus(data);
      } else {
        setSyncStatus({
          configured: false,
          message: "Live availability is coming soon. View current dates on Airbnb.",
          blockedRanges: [],
        });
      }
    } catch (e) {
      setSyncStatus({
        configured: false,
        message: "Live availability is coming soon. View current dates on Airbnb.",
        blockedRanges: [],
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIcal();
    // Periodic refresh every 5 minutes
    const interval = setInterval(fetchIcal, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const today = startOfToday();

  // Helper to check if a specific day is blocked by iCal
  const isDateBlocked = (day: Date) => {
    if (!syncStatus.configured || syncStatus.blockedRanges.length === 0) {
      return false;
    }
    const dayStr = format(day, 'yyyy-MM-dd');
    return syncStatus.blockedRanges.some((range) => {
      try {
        const start = parseISO(range.start);
        const end = parseISO(range.end);
        return isWithinInterval(day, { start, end });
      } catch {
        return false;
      }
    });
  };

  const handleDateClick = (day: Date) => {
    if (isBefore(day, today) || isDateBlocked(day)) return;

    if (!selectedStart || (selectedStart && selectedEnd)) {
      setSelectedStart(day);
      setSelectedEnd(null);
    } else if (selectedStart && !selectedEnd) {
      if (isBefore(day, selectedStart)) {
        setSelectedStart(day);
        setSelectedEnd(null);
      } else {
        setSelectedEnd(day);
      }
    }
  };

  // Generate days for two consecutive month views
  const renderMonth = (monthDate: Date) => {
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
        {/* Month Header */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
          <h4 className="font-serif-heading text-xl font-normal text-[#0d2238]">
            {format(monthDate, 'MMMM yyyy')}
          </h4>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400 mb-2">
          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day, idx) => {
            const isCurrentMonth = isSameMonth(day, monthDate);
            const isPast = isBefore(day, today);
            const isBlocked = isDateBlocked(day);
            const isStart = selectedStart && isSameDay(day, selectedStart);
            const isEnd = selectedEnd && isSameDay(day, selectedEnd);
            const isInRange =
              selectedStart &&
              selectedEnd &&
              isWithinInterval(day, { start: selectedStart, end: selectedEnd });

            let bgClass = "bg-[#f8f6f0] text-slate-800 hover:bg-amber-100";
            if (!isCurrentMonth) {
              bgClass = "text-slate-300 bg-transparent";
            } else if (isPast) {
              bgClass = "bg-slate-100 text-slate-300 cursor-not-allowed line-through";
            } else if (isBlocked) {
              bgClass = "bg-rose-100 text-rose-800 font-semibold cursor-not-allowed border border-rose-200";
            } else if (isStart || isEnd) {
              bgClass = "bg-[#0d2238] text-amber-300 font-bold shadow-md scale-105 z-10 rounded-lg";
            } else if (isInRange) {
              bgClass = "bg-amber-100 text-amber-900 font-medium";
            }

            return (
              <button
                key={idx}
                disabled={!isCurrentMonth || isPast || isBlocked}
                onClick={() => handleDateClick(day)}
                className={`h-10 w-full rounded-md text-xs font-medium flex items-center justify-center transition-all cursor-pointer ${bgClass}`}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const calculateNights = () => {
    if (!selectedStart || !selectedEnd) return 0;
    const diffTime = Math.abs(selectedEnd.getTime() - selectedStart.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nightsCount = calculateNights();

  return (
    <section id="calendar" className="py-20 sm:py-28 bg-[#f8f6f0] text-[#0d2238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d2238]/10 text-[#0d2238] font-semibold text-xs tracking-widest uppercase mb-4">
            <CalendarIcon className="w-4 h-4 text-amber-600" /> Availability & Reservation Dates
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-[#0d2238] mb-6">
            Plan Your Stay at <span className="italic text-amber-700">Cliff House</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
            Select your desired dates to check stay duration. All final reservations, live pricing, payment processing, and calendar locks are completed securely through Airbnb.
          </p>
        </div>

        {/* Sync Status Banner */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            {syncStatus.configured ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            )}
            <div>
              <span className="font-bold text-slate-900 block">
                {syncStatus.configured ? "Calendar Synchronized with Airbnb" : "Ready to Connect"}
              </span>
              <span className="text-slate-600 font-light">{syncStatus.message}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={fetchIcal}
              disabled={loading}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              title="Refresh calendar"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onOpenAirbnb}
              className="px-4 py-2 rounded-full bg-[#0d2238] text-white font-semibold flex items-center gap-1.5 hover:bg-slate-800 transition-all cursor-pointer"
            >
              <span>View Airbnb Calendar</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Month Switching Controls */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="px-4 py-2 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1 shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Month
          </button>
          <span className="text-sm font-semibold text-[#0d2238]">
            Showing {format(currentMonth, 'MMMM yyyy')} & {format(addMonths(currentMonth, 1), 'MMMM yyyy')}
          </span>
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="px-4 py-2 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-xs font-semibold text-slate-800 flex items-center gap-1 shadow-sm cursor-pointer"
          >
            Next Month <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Calendar Dual Months */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {renderMonth(currentMonth)}
          {renderMonth(addMonths(currentMonth, 1))}
        </div>

        {/* Date Selection Bar */}
        <div className="max-w-4xl mx-auto p-6 rounded-3xl bg-[#0d2238] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Selected Stay Interval</span>
            <div className="text-lg font-serif-heading">
              {selectedStart ? format(selectedStart, 'MMM d, yyyy') : 'Select Check-In'}
              {' — '}
              {selectedEnd ? format(selectedEnd, 'MMM d, yyyy') : 'Select Check-Out'}
            </div>
            {nightsCount > 0 && (
              <span className="text-xs text-slate-300 block font-light">
                Total Duration: <strong className="text-amber-300">{nightsCount} Night{nightsCount > 1 ? 's' : ''}</strong>
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {(selectedStart || selectedEnd) && (
              <button
                onClick={() => {
                  setSelectedStart(null);
                  setSelectedEnd(null);
                }}
                className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
              >
                Clear Dates
              </button>
            )}

            <button
              onClick={onOpenAirbnb}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue Booking on Airbnb</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Booking Disclaimer Note */}
        <div className="max-w-3xl mx-auto mt-8 text-center text-xs text-slate-500 font-light space-y-1">
          <p>
            * Note: Availability, exact nightly rates, house rules, and secure checkout are managed strictly through Airbnb.
          </p>
          <p>
            No payments or reservations are processed directly on this website.
          </p>
        </div>
      </div>
    </section>
  );
};
