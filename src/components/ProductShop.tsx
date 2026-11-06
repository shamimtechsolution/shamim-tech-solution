import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Zap, 
  Eye, 
  Check, 
  Filter, 
  ChevronRight, 
  Layers,
  Sparkles,
  Package,
  ShieldCheck,
  ChevronDown,
  MessageSquare,
  Phone
} from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { matchesProductCategory, getProductCategory } from '../utils/categoryHelper';

interface ProductShopProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory?: ProductCategory;
  onSelectCategory?: (category: ProductCategory) => void;
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

export const ProductShop: React.FC<ProductShopProps> = ({
  products,
  onAddToCart,
  onBuyNow,
  onViewDetails,
  searchTerm,
  setSearchTerm,
  selectedCategory: passedCategory,
  onSelectCategory
}) => {
  const [internalCategory, setInternalCategory] = useState<ProductCategory>('All Products');
  const selectedCategory = passedCategory ?? internalCategory;

  const setSelectedCategory = (cat: ProductCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const [sortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter products by category and search keyword (intelligent multi-token search with requested keywords)
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = matchesProductCategory(item, selectedCategory);

      if (!matchesCategory) return false;
      if (!searchTerm.trim()) return true;

      const rawQuery = searchTerm.toLowerCase().trim();
      // Normalize common synonyms & misspellings (e.g. suply -> supply)
      const query = rawQuery
        .replace(/\bpower\s+suply\b/g, 'power supply')
        .replace(/\bsuply\b/g, 'supply');

      const productText = `${item.name} ${item.specs || ''} ${item.brand || ''} ${item.category || ''} ${item.description || ''} ${item.modelNumber || ''}`.toLowerCase();

      // Direct full query substring match
      if (productText.includes(query) || productText.includes(rawQuery)) return true;

      // Special semantic matching for requested search options:
      // 1. "cctv video balun", "video balun", "balun"
      if (query.includes('video balun') || query.includes('balun')) {
        if (productText.includes('balun') || productText.includes('transceiver') || item.category === 'Other Accessories') {
          return true;
        }
      }

      // 2. "cctv box adapter", "box adapter"
      if (query.includes('box adapter') || query.includes('cctv box adapter')) {
        if (productText.includes('box adapter') || productText.includes('fvl') || productText.includes('adapter')) {
          return true;
        }
      }

      // 3. "cctv adapter", "cctv power suply", "cctv power supply", "adapter"
      if (query.includes('adapter') || query.includes('cctv adapter') || query.includes('power supply') || query.includes('power suply')) {
        if (productText.includes('adapter') || item.category === 'Power Supply/Adapter' || productText.includes('power supply') || productText.includes('12v') || productText.includes('fvl')) {
          return true;
        }
      }

      // 4. IT store keywords ("startech", "star tech", "ryans", "datatech", "star tech rangpur", "cctv star tech")
      // These shoppers are looking for top IT/CCTV hardware in Rangpur
      const tokens = query.split(/\s+/).filter(Boolean);

      const locationBrandTokens = new Set([
        'rangpur', 'dinajpur', 'lalmonirhat', 'kurigram', 'nilphamari', 'gaibandha', 'thakurgaon', 'panchagarh',
        'রংপুর', 'দিনাজপুর', 'লালমনিরহাট', 'কুড়িগ্রাম', 'নীলফামারী', 'গাইবান্ধা', 'ঠাকুরগাঁও', 'পঞ্চগড়',
        'shamim', 'sts', 'bd', 'bangladesh', 'tech', 'solution', 'technology', 'শামীম',
        'startech', 'star', 'ryans', 'datatech'
      ]);

      const stopWords = new Set(['and', 'in', 'of', 'for', 'the', 'to', 'with', 'on', 'ও', 'এবং']);

      // Non-location / non-store tokens
      const productTokens = tokens.filter(t => !locationBrandTokens.has(t) && !stopWords.has(t));

      // If user typed only store/location keywords like "star tech", "startech", "ryans", "datatech", "star tech rangpur"
      if (productTokens.length === 0) return true;

      // Otherwise, all non-location tokens must match the product
      return productTokens.every(t => productText.includes(t));
    }).sort((a, b) => {
      const aIsContact = a.priceType === 'contact' || a.isContactForPrice;
      const bIsContact = b.priceType === 'contact' || b.isContactForPrice;
      if (sortBy === 'price-asc') {
        if (aIsContact && !bIsContact) return 1;
        if (!aIsContact && bIsContact) return -1;
        return a.price - b.price;
      }
      if (sortBy === 'price-desc') {
        if (aIsContact && !bIsContact) return 1;
        if (!aIsContact && bIsContact) return -1;
        return b.price - a.price;
      }
      return 0;
    });
  }, [products, selectedCategory, searchTerm, sortBy]);

  // Count per category with smart category matching
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Products': products.length };
    CATEGORIES.forEach(cat => {
      if (cat === 'All Products') return;
      counts[cat] = products.filter(p => matchesProductCategory(p, cat)).length;
    });
    return counts;
  }, [products]);

  return (
    <section id="products" className="relative py-4 sm:py-6 bg-gradient-to-b from-sky-50/90 via-blue-100/60 to-sky-100/70 border-b border-sky-300/80 overflow-hidden">
      {/* Soft ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* CCTV Camera & Security Store Long Horizontal Box (লম্বা পাতালি এক লাইনে সম্পূর্ণ ঘর) */}
        <div className="bg-white/95 border-2 border-sky-300 rounded-xl sm:rounded-2xl py-2 px-3 sm:px-4 mb-2.5 sm:mb-3 shadow-xs flex items-center justify-between gap-2 font-tech">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 animate-pulse shrink-0" />
            <h2 className="text-xs sm:text-base md:text-lg font-black text-slate-900 uppercase tracking-wide truncate">
              CCTV Camera & Security Store
            </h2>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-cyan-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200 shrink-0">
            100% Original Products
          </span>
        </div>

        {/* Search Box & Product Category (এক লাইনে পাশাপাশি - সার্চ ছোট ও ডান পাশে প্রোডাক্ট ক্যাটাগরি) */}
        <div className="flex items-center gap-2 mb-4">
          {/* Search Box (ছোট/কমপ্যাক্ট) */}
          <div className="relative flex-1 min-w-0">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search camera, DVR, brand..."
              className="w-full bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 rounded-xl pl-8 sm:pl-9 pr-7 py-2 border-2 border-sky-300 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 transition-all shadow-xs"
            />
            <Search className="w-3.5 h-3.5 text-cyan-600 absolute left-2.5 sm:left-3 top-2.5 pointer-events-none" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-2 text-xs text-slate-400 hover:text-slate-700 p-0.5 font-bold cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Product Category Dropdown (সার্চ অপশনের ঠিক ডান পাশে) */}
          <div className="relative shrink-0 w-[145px] sm:w-[220px]">
            <div className="relative flex items-center bg-white border-2 border-sky-300 hover:border-cyan-500 rounded-xl px-2 sm:px-2.5 py-2 shadow-xs transition-all">
              <Layers className="w-3.5 h-3.5 text-cyan-600 shrink-0 mr-1 sm:mr-1.5 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ProductCategory)}
                className="w-full bg-transparent text-[11px] sm:text-xs font-bold text-slate-800 focus:outline-none cursor-pointer truncate appearance-none pr-4"
                title="Product Category"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All Products' ? `All Products (${products.length})` : `${cat} (${categoryCounts[cat] || 0})`}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-cyan-700 absolute right-1.5 sm:right-2 pointer-events-none shrink-0" />
            </div>
          </div>
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
                  Not sure how many cameras or DVR channels you need? We calculate storage & wiring for free across Rangpur Division.
                </p>
              </div>

            </div>
          </aside>

          {/* Right Product Grid - 2 Columns on Phone Mobile, 3 on Tablet, 4 on Desktop (Star Tech Layout) */}
          <main className="lg:col-span-9 scroll-mt-24 sm:scroll-mt-20" id="product-items-grid">
            
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
              /* 3-COLUMN COMPACT GRID ON MOBILE PHONES (grid-cols-3), 2/3 on Tablets, 3/4 on Large Screens */
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-1.5 sm:gap-4 md:gap-4.5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-lg sm:rounded-2xl bg-white border border-sky-200/90 hover:border-cyan-500 transition-all shadow-xs hover:shadow-xl hover:shadow-cyan-500/10 group overflow-hidden"
                  >
                    <div>
                      {/* Top Colorful Accent Strip */}
                      <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 group-hover:h-1.5 transition-all" />

                      {/* Product Image Container */}
                      <div 
                        onClick={() => onViewDetails(product)}
                        className="relative aspect-square sm:aspect-[4/3] bg-white p-1 sm:p-3 flex items-center justify-center overflow-hidden border-b border-sky-100 cursor-pointer group-hover:bg-sky-50/20 transition-colors"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80';
                          }}
                        />

                        {/* Brand Badge */}
                        <div className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 px-1 sm:px-2 py-0.5 rounded bg-gradient-to-r from-cyan-700 to-blue-700 text-[7px] sm:text-[10px] font-bold text-white uppercase tracking-wider shadow-xs pointer-events-none">
                          {product.brand}
                        </div>

                        {/* Stock Badge */}
                        <div className="absolute top-1 right-1 sm:top-2.5 sm:right-2.5 px-1 sm:px-2 py-0.5 rounded bg-emerald-600 text-[7px] sm:text-[10px] font-bold text-white shadow-xs pointer-events-none">
                          <span className="hidden sm:inline">● </span>{product.inStock ? 'Stock' : 'Pre-order'}
                        </div>

                        {/* Quick View Overlay Button */}
                        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 pointer-events-none">
                          <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/95 border border-sky-300 flex items-center gap-1 text-slate-900 shadow-md text-[9px] sm:text-[11px] font-bold">
                            <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600" />
                            <span>View</span>
                          </div>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-1.5 sm:p-3.5 space-y-0.5 sm:space-y-1.5">
                        <div className="text-[8px] sm:text-[10px] text-cyan-700 font-bold font-tech uppercase tracking-wider truncate">
                          {getProductCategory(product)}
                        </div>

                        <h3 
                          onClick={() => onViewDetails(product)}
                          className="text-[10px] sm:text-sm font-bold text-slate-900 font-tech leading-snug hover:text-cyan-700 transition-colors cursor-pointer line-clamp-2 min-h-[26px] sm:min-h-[38px]"
                          title={product.name}
                        >
                          {product.name}
                        </h3>

                        {/* Key Specs Bullet Summary - hidden on 3-col mobile for sleek compactness */}
                        <p className="hidden sm:block text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {product.specs}
                        </p>

                        {/* Price Display in Bangladeshi Taka ৳ or Contact for Price */}
                        <div className="pt-0.5 sm:pt-1 flex flex-wrap items-baseline gap-0.5 sm:gap-2 min-h-[20px] sm:min-h-[26px]">
                          {(product.priceType === 'contact' || product.isContactForPrice) ? (
                            <span className="text-[10px] sm:text-xs font-bold text-amber-700 bg-amber-50 border border-amber-300/80 px-1.5 py-0.5 rounded font-tech tracking-wide inline-flex items-center">
                              Contact for Price
                            </span>
                          ) : (
                            <>
                              <span className="text-[11px] sm:text-xl font-black text-cyan-800 font-tech">
                                ৳ {product.price.toLocaleString('en-US')}
                              </span>
                              {(product.regularPrice || product.originalPrice) && (
                                <span className="text-[8px] sm:text-xs text-slate-400 line-through">
                                  ৳ {(product.regularPrice || product.originalPrice)?.toLocaleString('en-US')}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons (Card Bottom: Cart & Buy for fixed price; View Details & Inquire for Contact for Price) */}
                    <div className="p-1.5 sm:p-3.5 pt-0">
                      {(product.priceType === 'contact' || product.isContactForPrice) ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5">
                          <button
                            onClick={() => onViewDetails(product)}
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-[9px] sm:text-xs tracking-wide transition-all border border-slate-700 active:scale-95 cursor-pointer"
                            title="View Details"
                          >
                            <Eye className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
                            <span className="sm:hidden">বিস্তারিত</span>
                            <span className="hidden sm:inline truncate">Details</span>
                          </button>

                          <a
                            href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I want to know the price for: ${product.name} (Category: ${product.category}).`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-[9px] sm:text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer text-center"
                            title="Contact for Price on WhatsApp"
                          >
                            <MessageSquare className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
                            <span className="sm:hidden">দাম জানুন</span>
                            <span className="hidden sm:inline truncate">দাম জানুন</span>
                          </a>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5">
                          <button
                            onClick={() => onAddToCart(product)}
                            id={`add-to-cart-${product.id}`}
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-[9px] sm:text-xs tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer"
                            title="Add to Cart"
                          >
                            <ShoppingCart className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
                            <span className="sm:hidden">কার্ট</span>
                            <span className="hidden sm:inline truncate">Add to Cart</span>
                          </button>

                          <button
                            onClick={() => onBuyNow(product)}
                            id={`buy-now-${product.id}`}
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-[9px] sm:text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                            title="Buy Now"
                          >
                            <Zap className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
                            <span className="sm:hidden">কিনুন</span>
                            <span className="hidden sm:inline truncate">Buy Now</span>
                          </button>
                        </div>
                      )}
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
