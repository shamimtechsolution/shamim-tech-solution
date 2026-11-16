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
    'Cable Installation',
    'PBX Intercom'
  ];

  const filteredItems = selectedCategory === 'All'
    ? WORK_GALLERY
    : WORK_GALLERY.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-8 sm:py-10 bg-[#F7FAFC] border-b border-[#DCE7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#123A70] text-xs font-bold font-tech uppercase tracking-wider">
              <Camera className="w-4 h-4 text-[#123A70]" />
              <span>Real Field Projects • Rangpur Division</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F2937] font-tech mt-1">
              Our Work Gallery
            </h2>
            <p className="text-[#4B5563] text-sm mt-1 max-w-xl font-bangla">
              আমাদের সকল বাস্তব প্রজেক্ট, সিসিটিভি ক্যামেরা ইনস্টলেশন, ক্যাবলিং, বায়োমেট্রিক হাজিরা ও সিকিউরিটি সলিউশন গ্যালারি।
            </p>
          </div>

          <div className="text-xs text-[#123A70] bg-white px-3 py-1.5 rounded-lg border border-[#DCE7F2] font-mono font-bold shadow-xs">
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
                  ? 'bg-[#123A70] text-white shadow-xs'
                  : 'bg-white text-[#1F2937] hover:text-[#123A70] border border-[#DCE7F2] hover:bg-[#EFF5FB] shadow-xs'
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
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#DCE7F2] hover:border-[#123A70]/45 transition-all hover:shadow-md cursor-pointer shadow-xs transform hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-white flex items-center justify-center overflow-hidden border-b border-[#DCE7F2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    item.image.includes('69e03957') || item.image.includes('a72619c9') 
                      ? 'object-cover object-top' 
                      : 'object-contain p-2'
                  }`}
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#123A70] text-[10px] font-bold text-white shadow-xs">
                  {item.category}
                </div>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-[#1F2937]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white text-[#123A70] shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#1F2937] font-tech line-clamp-1 group-hover:text-[#123A70] transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#4B5563]">
                  <MapPin className="w-3 h-3 text-[#147A43] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2937]/75 backdrop-blur-sm animate-fadeIn"
            onClick={() => setActiveItem(null)}
          >
            <div 
              className="relative max-w-3xl w-full rounded-2xl bg-white border border-[#DCE7F2] overflow-hidden shadow-xl text-[#1F2937]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-[#4B5563] hover:text-[#1F2937] border border-[#DCE7F2] shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-[#F7FAFC] flex items-center justify-center p-3 border-b border-[#DCE7F2]">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#EFF5FB] text-[#123A70] border border-[#DCE7F2]">
                    {activeItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#4B5563]">
                    <MapPin className="w-3.5 h-3.5 text-[#147A43]" />
                    {activeItem.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1F2937] font-tech">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-[#64748B] border-t border-[#DCE7F2]">
                  <span>Work done by SHAMIM TECH SOLUTION</span>
                  <span className="text-[#123A70] font-semibold">Rangpur Division</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
