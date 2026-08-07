import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Award, Heart, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, PROPERTY_INFO } from '../data/propertyData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#f8f6f0] text-[#0d2238] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0d2238] text-white shadow-2xl mb-16 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Rating Number Column */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-semibold text-xs tracking-widest uppercase">
                <Award className="w-3.5 h-3.5" /> Airbnb Guest Favorite
              </div>

              <div className="flex items-baseline justify-center lg:justify-start gap-3">
                <span className="font-serif-heading text-6xl sm:text-7xl font-bold text-white">
                  4.95
                </span>
                <span className="text-xl text-slate-300 font-light">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-slate-300 font-light">
                Based on <strong className="text-white font-semibold">98 verified guest reviews</strong> on Airbnb
              </p>
            </div>

            {/* Host Superhost Card */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 font-serif font-bold text-2xl flex items-center justify-center shrink-0 shadow-inner">
                R
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 font-semibold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Hosted by Richard • Airbnb Superhost</span>
                </div>
                <p className="text-xs text-slate-200 font-light leading-relaxed">
                  Superhosts are experienced, highly rated hosts committed to providing outstanding stays for guests. Airbnb says Richard responds within an hour.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-[#0d2238] mb-4">
            Loved by <span className="italic text-amber-700">Families & Friends</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-light">
            Read what previous guests had to say about their stay at Cliff House at Canyon Lake.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:border-amber-300 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.stayDate}</span>
                </div>

                <Quote className="w-8 h-8 text-amber-500/20" />

                <p className="text-slate-800 text-base font-light italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-900 text-sm block">{rev.author}</span>
                  <span className="text-xs text-slate-500 font-light">{rev.location}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {rev.tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          {REVIEWS_DATA.length === 0 && (
            <div className="md:col-span-2 rounded-3xl bg-white border border-slate-200 p-8 text-center shadow-lg">
              <p className="text-slate-700">Individual guest reviews are kept on the official Airbnb listing so visitors always see the current, verified versions.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
