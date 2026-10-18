import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Zap, 
  Eye, 
  Check, 
  Filter, 
  ChevronRight, 
  SlidersHorizontal,
  Layers,
  Sparkles,
  Package,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { Product, ProductCategory } from '../types';

interface ProductShopProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CATEGORIES: ProductCategory[] = [
  'All Products',
  'CCTV Camera',
  'DVR',
  'NVR',
  'Hard Disk (HDD)',
  'Monitor',
  'Access Control',
  'Fingerprint Machine',
  'CCTV Cable',
  'Power Supply/Adapter',
  'Networking Products',
  'Other Accessories'
];

const POPULAR_SEARCH_TAGS = [
  'CCTV Rangpur',
  'WiFi Camera',
  'Night Vision',
  'IP Camera',
  'PABX Intercom',
  'Access Control',
  'Electrician',
  'Jovision',
  'EZVIZ',
  'Hikvision',
  'Dahua',
  'DVR / NVR',
  'PoE Switch'
];

export const ProductShop: React.FC<ProductShopProps> = ({
  products,
  onAddToCart,
  onBuyNow,
  onViewDetails,
  searchTerm,
  setSearchTerm,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All Products');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  // Filter products by category and search keyword
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = 
        selectedCategory === 'All Products' || item.category === selectedCategory;
      const matchesSearch = 
        searchTerm.trim() === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.specs.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [products, selectedCategory, searchTerm, sortBy]);

  // Count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Products': products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  return (
    <section id="products" className="relative py-12 sm:py-16 bg-gradient-to-b from-sky-50/90 via-blue-100/60 to-sky-100/70 border-b border-sky-300/80 overflow-hidden">
      {/* Soft ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider font-tech">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct CCTV Hardware Store • Haragach, Rangpur</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech mt-1">
              CCTV Camera & Security Store
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              100% Genuine surveillance equipment with official warranty and technician installation support.
            </p>
          </div>

          {/* Search & Sort Controls (Star Tech Style) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
            {/* Search Box */}
            <div className="relative flex-1 sm:w-64 md:w-72">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search camera, DVR, brand..."
                className="w-full bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 rounded-xl pl-9 pr-8 py-2.5 border border-sky-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-sm"
              />
              <Search className="w-4 h-4 text-cyan-600 absolute left-3 top-3 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-700 p-1 font-bold"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 bg-white px-3 py-2.5 rounded-xl border border-sky-200 text-xs text-slate-700 shadow-sm shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-700 focus:outline-none cursor-pointer text-xs font-medium"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quick Search Tags (Star Tech Style) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-none text-xs">
          <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1 shrink-0 mr-1">
            <Tag className="w-3 h-3 text-cyan-600" />
            <span>Popular:</span>
          </span>
          {POPULAR_SEARCH_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(searchTerm === tag ? '' : tag)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                searchTerm.toLowerCase() === tag.toLowerCase()
                  ? 'bg-cyan-600 text-white font-bold shadow-xs'
                  : 'bg-white/90 text-slate-600 hover:text-cyan-700 hover:bg-sky-50 border border-sky-200/80 shadow-2xs'
              }`}
            >
              {tag}
            </button>
          ))}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[11px] font-bold text-red-600 hover:underline shrink-0 ml-1 cursor-pointer"
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* Horizontal Category Carousel for Mobile & Tablets (Star Tech Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-500 shadow-sm font-bold'
                    : 'bg-white text-slate-700 hover:text-cyan-800 border-sky-200 hover:bg-sky-50 shadow-xs'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? 'bg-white/25 text-white' : 'bg-sky-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Layout with Sidebar Categories & 2-Column Responsive Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Category Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 rounded-2xl bg-white border border-sky-200 p-4 shadow-md">
              
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-sky-100 text-slate-900 font-bold font-tech text-base">
                <Layers className="w-4 h-4 text-cyan-600" />
                <span>Product Categories</span>
              </div>

              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left cursor-pointer group ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-sm'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-cyan-800'
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-white/20 text-white font-bold' 
                          : 'bg-sky-100 text-slate-600 group-hover:text-cyan-800'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Technician Installation Support Notice */}
              <div className="mt-6 p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs text-slate-700 space-y-1.5 shadow-sm">
                <div className="font-bold text-cyan-800 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Free Setup Consultation</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Not sure how many cameras or DVR channels you need? We calculate storage & wiring for free in Haragach & Rangpur.
                </p>
              </div>

            </div>
          </aside>

          {/* Right Product Grid - 2 Columns on Phone Mobile, 3 on Tablet, 4 on Desktop (Star Tech Layout) */}
          <main className="lg:col-span-9">
            
            {/* Active filter summary bar */}
            <div className="flex items-center justify-between mb-3 text-xs text-slate-600 px-1">
              <span>
                Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> items in{' '}
                <span className="text-cyan-700 font-bold">{selectedCategory}</span>
                {searchTerm && <span> matching "<strong className="text-cyan-800">{searchTerm}</strong>"</span>}
              </span>
              {(selectedCategory !== 'All Products' || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All Products');
                    setSearchTerm('');
                  }}
                  className="text-cyan-600 hover:underline cursor-pointer font-bold text-xs"
                >
                  Reset All
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 px-5 rounded-2xl bg-white border-2 border-sky-200 max-w-lg mx-auto shadow-sm">
                <Package className="w-12 h-12 text-cyan-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 font-tech">
                  {searchTerm ? `"${searchTerm}" এর জন্য প্রোডাক্ট পাওয়া যায়নি` : 'কোনো প্রোডাক্ট পাওয়া যায়নি'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed font-bangla">
                  আপনি কি সিসিটিভি ক্যামেরা, PABX ইন্টারকম, ইলেকট্রিশিয়ান, অ্যাক্সেস কন্ট্রোল বা কোনো জেলার অন-সাইট সার্ভিস খুঁজছেন?
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-left space-y-1">
                  <span className="font-bold text-cyan-800 block">রংপুর বিভাগের ৮টি জেলায় আমাদের সেবা রয়েছে:</span>
                  <p className="text-slate-600 text-[11px]">
                    রংপুর (সিটি ও সদর), দিনাজপুর, লালমনিরহাট, কুড়িগ্রাম, নীলফামারী, গাইবান্ধা, ঠাকুরগাঁও ও পঞ্চগড়।
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                  <a
                    href="#district-coverage"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs shadow-md shadow-cyan-600/20"
                  >
                    সার্ভিস ও এলাকা দেখুন
                  </a>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Products');
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 cursor-pointer"
                  >
                    সকল প্রোডাক্ট দেখুন
                  </button>
                </div>
              </div>
            ) : (
              /* STAR TECH 2-COLUMN GRID ON MOBILE PHONES (grid-cols-2), 3 on Tablets, 3/4 on Large Screens */
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2.5 sm:gap-4 md:gap-4.5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-xl sm:rounded-2xl bg-white border border-sky-200/90 hover:border-cyan-500 transition-all shadow-xs hover:shadow-xl hover:shadow-cyan-500/10 group overflow-hidden"
                  >
                    <div>
                      {/* Top Colorful Accent Strip */}
                      <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 group-hover:h-1.5 transition-all" />

                      {/* Product Image Container (Star Tech Style - Clean white, centered camera photo) */}
                      <div 
                        onClick={() => onViewDetails(product)}
                        className="relative aspect-square sm:aspect-[4/3] bg-white p-2.5 sm:p-3 flex items-center justify-center overflow-hidden border-b border-sky-100 cursor-pointer group-hover:bg-sky-50/20 transition-colors"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />

                        {/* Brand Badge */}
                        <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 px-1.5 sm:px-2 py-0.5 rounded bg-gradient-to-r from-cyan-700 to-blue-700 text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wider shadow-xs pointer-events-none">
                          {product.brand}
                        </div>

                        {/* Stock Badge */}
                        <div className="absolute top-1.5 right-1.5 sm:top-2.5 sm:right-2.5 px-1.5 sm:px-2 py-0.5 rounded bg-emerald-600 text-[9px] sm:text-[10px] font-bold text-white shadow-xs pointer-events-none">
                          ● {product.inStock ? 'In Stock' : 'Pre-order'}
                        </div>

                        {/* Quick View Overlay Button */}
                        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 pointer-events-none">
                          <div className="px-2.5 py-1 rounded-lg bg-white/95 border border-sky-300 flex items-center gap-1 text-slate-900 shadow-md text-[11px] font-bold">
                            <Eye className="w-3 h-3 text-cyan-600" />
                            <span>Quick View</span>
                          </div>
                        </div>
                      </div>

                      {/* Content details (Star Tech layout) */}
                      <div className="p-2 sm:p-3.5 space-y-1 sm:space-y-1.5">
                        <div className="text-[9px] sm:text-[10px] text-cyan-700 font-bold font-tech uppercase tracking-wider">
                          {product.category}
                        </div>

                        <h3 
                          onClick={() => onViewDetails(product)}
                          className="text-xs sm:text-sm font-bold text-slate-900 font-tech leading-snug hover:text-cyan-700 transition-colors cursor-pointer line-clamp-2 min-h-[30px] sm:min-h-[38px]"
                          title={product.name}
                        >
                          {product.name}
                        </h3>

                        {/* Star Tech Key Specs Bullet Summary */}
                        <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {product.specs}
                        </p>

                        {/* Price Display in Bangladeshi Taka ৳ */}
                        <div className="pt-1 flex flex-wrap items-baseline gap-1 sm:gap-2">
                          <span className="text-sm sm:text-xl font-black text-cyan-800 font-tech">
                            ৳ {product.price.toLocaleString('en-US')}
                          </span>
                          {(product.regularPrice || product.originalPrice) && (
                            <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                              ৳ {(product.regularPrice || product.originalPrice)?.toLocaleString('en-US')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons (2-Column Mobile Optimized - Star Tech Style) */}
                    <div className="p-2 sm:p-3.5 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      <button
                        onClick={() => onAddToCart(product)}
                        id={`add-to-cart-${product.id}`}
                        className="flex items-center justify-center gap-1 py-1.5 sm:py-2 px-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-[10px] sm:text-xs tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer"
                        title="Add to Cart"
                      >
                        <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                        <span className="truncate">Add to Cart</span>
                      </button>

                      <button
                        onClick={() => onBuyNow(product)}
                        id={`buy-now-${product.id}`}
                        className="flex items-center justify-center gap-1 py-1.5 sm:py-2 px-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-[10px] sm:text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                        title="Buy Now"
                      >
                        <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
                        <span className="truncate">Buy Now</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </main>
        </div>

      </div>
    </section>
  );
};
