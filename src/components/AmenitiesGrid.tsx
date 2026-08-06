import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AMENITIES_DATA } from '../data/propertyData';
import { 
  Sun, Sparkles, Flame, Utensils, Waves, ChefHat, Coffee, UtensilsCrossed, Table,
  Wifi, Tv, Thermometer, Shirt, KeyRound, Car, Award, ShieldCheck, BellRing, LifeBuoy, Check, Search
} from 'lucide-react';

export const AmenitiesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-500" />;
      case 'Waves': return <Waves className="w-5 h-5 text-amber-500" />;
      case 'ChefHat': return <ChefHat className="w-5 h-5 text-amber-500" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-500" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-amber-500" />;
      case 'Table': return <Table className="w-5 h-5 text-amber-500" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-amber-500" />;
      case 'Tv': return <Tv className="w-5 h-5 text-amber-500" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-amber-500" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-amber-500" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5 text-amber-500" />;
      case 'Car': return <Car className="w-5 h-5 text-amber-500" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'BellRing': return <BellRing className="w-5 h-5 text-amber-500" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5 text-amber-500" />;
      default: return <Check className="w-5 h-5 text-amber-500" />;
    }
  };

  const filteredCategories = AMENITIES_DATA.map((cat) => {
    const items = cat.items.filter((item) => {
      const matchesTab = activeTab === 'all' || cat.id === activeTab;
      const matchesSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
    return { ...cat, items };
  }).filter((cat) => cat.items.length > 0);

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#f8f6f0] text-[#0d2238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d2238]/10 text-[#0d2238] font-semibold text-xs tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Premium Living Comforts
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-normal tracking-tight text-[#0d2238] mb-6">
            Everything You Need for a <span className="italic text-amber-700">5-Star Vacation</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
            From the gourmet kitchen and coffee bar to the stargazing hot tub and high-speed Wi-Fi, Cliff House is fully outfitted for effortless luxury.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0d2238] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Amenities
            </button>
            {AMENITIES_DATA.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#0d2238] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search amenities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d2238]"
            />
          </div>
        </div>

        {/* Categorized Amenities Grids */}
        <div className="space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
              No amenities found matching "{searchQuery}".
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <h3 className="font-serif-heading text-2xl font-normal text-[#0d2238] border-b border-slate-200 pb-3">
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className={`p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                        item.highlight
                          ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-400/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                        {getIconComponent(item.icon)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-900 text-base">{item.name}</h4>
                          {item.highlight && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                              Highlight
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
