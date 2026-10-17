import React, { useState } from 'react';
import { 
  Camera, 
  MapPin, 
  Maximize2, 
  X, 
  Layers, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { WORK_GALLERY } from '../data/companyData';
import { GalleryItem } from '../types';

export const WorkGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'CCTV Installation',
    'DVR/NVR Setup',
    'IP Camera Installation',
    'Access Control',
    'Fingerprint Machine',
    'Networking',
    'Cable Installation'
  ];

  const filteredItems = selectedCategory === 'All'
    ? WORK_GALLERY
    : WORK_GALLERY.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-16 bg-gradient-to-b from-sky-50/90 via-blue-100/60 to-sky-100/70 border-b border-sky-300/80 overflow-hidden">
      {/* Soft ambient light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold font-tech uppercase tracking-wider">
              <Camera className="w-4 h-4 text-cyan-600" />
              <span>Real Field Projects • Haragach & Rangpur</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech mt-1">
              Our Work Gallery
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Inspect our high-standard CCTV installations, clean cable conduit routing, and biometric security projects.
            </p>
          </div>

          <div className="text-xs text-cyan-800 bg-white px-3 py-1.5 rounded-lg border border-sky-200 font-mono font-bold shadow-sm">
            {filteredItems.length} Project Showcase{filteredItems.length > 1 ? 's' : ''}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-cyan-800 border border-sky-200 hover:bg-sky-50 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (2-column on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-blue-50/20 border-2 border-sky-200/90 hover:border-cyan-500 transition-all hover:shadow-2xl hover:shadow-cyan-500/15 cursor-pointer shadow-md transform hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 text-[10px] font-bold text-white shadow-sm">
                  {item.category}
                </div>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white text-cyan-600 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-tech line-clamp-1 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="w-3 h-3 text-cyan-600 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            <div 
              className="relative max-w-3xl w-full rounded-2xl bg-gradient-to-b from-slate-900 to-[#050b18] border border-cyan-500/40 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-slate-950">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                    {activeItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {activeItem.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-tech">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span>Work done by SHAMIM TECH SOLUTION</span>
                  <span className="text-cyan-400 font-semibold">Haragach, Rangpur</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
