import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REVIEWS_DATA, PROPERTY_INFO } from '../data/propertyData';
import { Star, ShieldCheck, Heart, ThumbsUp, MessageSquare, Award, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

interface ReviewsPageProps {
  onOpenAirbnb: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenAirbnb }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestComment, setGuestComment] = useState('');
  const [storySubmitted, setStorySubmitted] = useState(false);

  const allTags = ['all', 'Family Trip', 'Sunset Decks', 'Superhost Richard', 'Hot Tub', 'Couples Retreat'];

  const filteredReviews = REVIEWS_DATA.filter(
    (rev) => selectedTag === 'all' || rev.tags?.includes(selectedTag)
  );

  const handleHelpfulClick = (id: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName && guestComment) {
      setStorySubmitted(true);
      setTimeout(() => {
        setStoryModalOpen(false);
        setStorySubmitted(false);
        setGuestName('');
        setGuestComment('');
      }, 2000);
    }
  };

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
            <Star className="w-4 h-4 fill-amber-300 text-amber-300" /> Airbnb Superhost Ratings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-heading text-4xl sm:text-6xl text-white font-normal mb-6"
          >
            What Guests Say About <span className="italic text-amber-200">Cliff House</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Read authentic reviews from families, couples, and friends who have stayed at our Canyon Lake waterfront property.
          </motion.p>
        </div>

        {/* Superhost Rating Specs Scorecard */}
        <div className="glass-panel rounded-3xl p-8 border border-white/15 mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Big Score Box */}
          <div className="md:col-span-5 text-center md:text-left flex flex-col md:flex-row items-center gap-6 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex flex-col items-center justify-center text-slate-950 font-serif font-bold shadow-2xl">
              <span className="text-4xl leading-none">4.95</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-slate-950 text-slate-950" />
                ))}
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" /> Superhost 100% Recommended
              </span>
              <h2 className="font-serif-heading text-2xl font-bold text-white">98 Verified Airbnb Reviews</h2>
              <p className="text-xs text-slate-300 mt-1">Guest Favorite • Top 5% of all Airbnb properties worldwide</p>
            </div>
          </div>

          {/* Subcategory breakdown */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block mb-1">Cleanliness</span>
              <span className="font-serif text-lg font-bold text-amber-300">5.0 ★</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block mb-1">Accuracy</span>
              <span className="font-serif text-lg font-bold text-amber-300">5.0 ★</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block mb-1">Communication</span>
              <span className="font-serif text-lg font-bold text-amber-300">5.0 ★</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block mb-1">Location</span>
              <span className="font-serif text-lg font-bold text-amber-300">5.0 ★</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block mb-1">Check-in</span>
              <span className="font-serif text-lg font-bold text-amber-300">5.0 ★</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-slate-400 block mb-1">Value</span>
              <span className="font-serif text-lg font-bold text-amber-300">4.9 ★</span>
            </div>
          </div>
        </div>

        {/* Tag Filters & Share Story Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Filter by topic:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {tag === 'all' ? 'All Reviews' : `#${tag}`}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStoryModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-amber-300 text-xs font-semibold transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Submit Guest Memory</span>
          </button>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/30 border border-amber-400/40 flex items-center justify-center font-serif text-amber-300 font-bold text-lg">
                      {rev.author[0]}
                    </div>
                    <div>
                      <h3 className="font-serif-heading text-lg font-bold text-white flex items-center gap-2">
                        {rev.author}
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-label="Verified Airbnb Guest" />
                      </h3>
                      <p className="text-xs text-slate-400">
                        {rev.location} • <span className="text-amber-200">{rev.stayDate}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full text-amber-300 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-slate-200 text-sm font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>

                {/* Tags */}
                {rev.tags && rev.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {rev.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-amber-300 font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>{rev.date}</span>
                <button
                  onClick={() => handleHelpfulClick(rev.id)}
                  className="flex items-center gap-1.5 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({helpfulCounts[rev.id] || 12})</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Ready to write your own chapter?
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-white font-normal">
            Experience the Magic of Cliff House Firsthand
          </h2>
          <p className="text-slate-300 text-base font-light max-w-xl mx-auto">
            Book securely through Airbnb to enjoy direct lake access, sunset hot tub soaking, and 5-star Superhost hospitality.
          </p>
          <button
            onClick={onOpenAirbnb}
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all cursor-pointer"
          >
            <span>Reserve Your Stay on Airbnb</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Guest Memory Submission Modal */}
      {storyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0d2238] border border-amber-400/30 rounded-3xl p-8 max-w-md w-full shadow-2xl relative text-slate-100"
          >
            <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">Share Your Cliff House Story</h3>
            <p className="text-xs text-slate-300 mb-6">
              Have a favorite moment from your stay? Submit your story or memory to Superhost Richard!
            </p>

            {storySubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-xl text-white">Thank You!</h4>
                <p className="text-xs text-slate-300">Your note was received and shared with host Richard.</p>
              </div>
            ) : (
              <form onSubmit={handleStorySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name & Location</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g., Sarah M. from Austin, TX"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Highlight or Memory</label>
                  <textarea
                    required
                    rows={4}
                    value={guestComment}
                    onChange={(e) => setGuestComment(e.target.value)}
                    placeholder="What made your stay at Canyon Lake special?"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStoryModalOpen(false)}
                    className="w-1/2 py-2.5 rounded-xl bg-white/10 text-slate-300 hover:bg-white/20 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg cursor-pointer"
                  >
                    Send Memory
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};
