import React from 'react';
import { motion } from 'motion/react';
import { Waves, Sparkles, Flame, Sun, Utensils, Shield, Heart, Compass, Star } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

export const StoryHighlights: React.FC = () => {
  const { imageFor } = useSiteContent();
  const stories = [
    {
      id: "waterfront-access",
      badge: "Direct Lake Access",
      icon: Waves,
      title: "Crystal Blue Canyon Lake at Your Shoreline",
      subtitle: "Dip your toes into Texas Hill Country's premier reservoir",
      description: "Step out onto the cliffside grounds and follow the gentle steps down to the shoreline. Canyon Lake is renowned across Texas for its exceptionally clear turquoise water, limestone cliffs, and ideal swimming conditions. Bring paddleboards, floaties, or fishing rods for effortless days by the water.",
      bullets: [
        "Direct water access right behind the home",
        "Gentle limestone shoreline for swimming & floating",
        "Minutes from Canyon Lake Marina & boat launching ramps",
        "Paddleboards and water floats available for guests"
      ],
      image: "https://lh3.googleusercontent.com/pw/AP1GczNRQIPR_AUH5tZY1tKBIufjvA9MtUmPeDi5UGs4Opr26eMhgIguYPgV0BiI358Q85Lf6FtGPDAYFQkrZ9ED2OQBxPJAfbPRlYCJx44cbKWx_2DBX2Y=w1600",
      imageAlt: "Direct lake water access at Canyon Lake",
      reversed: false,
    },
    {
      id: "two-decks",
      badge: "Outdoor Living & Sunset Views",
      icon: Sun,
      title: "Two Scenic Decks Framed by Endless Horizons",
      subtitle: "Multi-tiered outdoor spaces designed for gathering",
      description: "Cliff House features two expansive wooden decks overlooking the water. The upper deck offers an outdoor dining table for al fresco breakfasts and golden hour dinners, while the lower deck hosts plush seating and the cliffside hot tub.",
      bullets: [
        "Upper deck with teak dining table seating 8+",
        "Unobstructed 180-degree sunset horizons",
        "Lounge armchairs & coffee table for quiet mornings",
        "Covered shade areas for comfortable afternoon lounging"
      ],
      image: "https://lh3.googleusercontent.com/pw/AP1GczO_KkzDH1ir-bZ_E5BsMHLZ6yPT1-_TcWtU74XkzhKS0qP3XyMHBDZYOBM0-nq18L5ee4zDPHGLKamuDwMexn88051BuKHiIrfn1PxBlc-3a7--Uus=w1600",
      imageAlt: "Upper deck at Cliff House overlooking Canyon Lake sunset",
      reversed: true,
    },
    {
      id: "hot-tub",
      badge: "Private Cliffside Spa",
      icon: Sparkles,
      title: "Stargazing Hot Tub Perched Over the Lake",
      subtitle: "Unwind under the Texas Hill Country stars",
      description: "After a day on the lake, sink into the soothing warm waters of the private hot tub. Situated on the lower deck with unobstructed lake views, festoon string lights, and quiet breezes, it’s the ultimate place to relax year-round.",
      bullets: [
        "Seats up to 6 guests comfortably",
        "Hydrotherapy massage jets & ambient LED lighting",
        "Surrounded by cedar trees and panoramic lake views",
        "Privately positioned on the lower secluded deck"
      ],
      image: "https://lh3.googleusercontent.com/pw/AP1GczNlEWpJDnDAft8suKPW24x5sOAq3rWJK5J4R6oYKs1LBQ3J2TdjywSmNH2heupJftiFvcUl6nuE90PjPpXRE5xQGzMJFeYjM9KuwSZxg5cDgtz44mo=w1600",
      imageAlt: "Private hot tub at Cliff House with lake view",
      reversed: false,
    },
    {
      id: "firepit-grill",
      badge: "Firepit & Barbecue Station",
      icon: Flame,
      title: "Waterfront Firepit & Outdoor Grill Station",
      subtitle: "Memorable evenings around the fire",
      description: "As twilight settles over Canyon Lake, gather around the dedicated lakeside firepit. Roast s'mores, share stories, and listen to the gentle lap of water against the rocks. The outdoor grill station is ready for your summer barbecues.",
      bullets: [
        "Dedicated stone firepit with Adirondack seating",
        "Propane BBQ grill station with grilling utensils",
        "Outdoor string lights creating a magical night vibe",
        "Complementary fire wood starter kit provided"
      ],
      image: "https://lh3.googleusercontent.com/pw/AP1GczPyxq_KEYCUIMnT4ho-rJZ6Mm9oiHAieb-Qm0YbF5yFAMVwH9G50mibQUMUB-iT9KvwG4tN8d1aMVK9-GQ_-T3FZxyzKRbawFBXtkxk9AMvSb2Fc8s=w1600",
      imageAlt: "Waterfront firepit and outdoor grill area",
      reversed: true,
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#f8f6f0] text-[#0d2238] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2238]/10 text-[#0d2238] font-semibold text-xs tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-600" /> The Cliff House Experience
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-[#0d2238] mb-6">
            Designed for Unforgettable <span className="italic text-amber-700">Waterfront Moments</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
            Every corner of Cliff House is crafted to connect you with the beauty of Canyon Lake—from morning coffee watching the mist rise to late-night stargazing from the hot tub.
          </p>
        </div>

        {/* Story Blocks */}
        {stories.map((story) => {
          const Icon = story.icon;
          return (
            <div
              key={story.id}
              id={story.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                story.reversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`lg:col-span-6 space-y-6 ${story.reversed ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 font-semibold text-xs tracking-wider uppercase">
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span>{story.badge}</span>
                </div>

                <h3 className="font-serif-heading text-2xl sm:text-4xl font-normal text-[#0d2238] leading-tight">
                  {story.title}
                </h3>

                <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
                  {story.description}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {story.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Star className="w-3 h-3 fill-amber-600 text-amber-600" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`lg:col-span-6 ${story.reversed ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#0d2238]/10 group">
                  <img
                    src={imageFor(story.image)}
                    alt={story.imageAlt}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2238]/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">{story.badge}</span>
                    <p className="font-serif-heading text-lg text-white mt-1">{story.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
