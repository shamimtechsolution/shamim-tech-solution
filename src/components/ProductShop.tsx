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
import { matchesProductSearch } from '../utils/searchHelper';

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

  // Filter products by category and search keyword (word-order independent, Bangla synonyms, 10 districts)
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = matchesProductCategory(item, selectedCategory);
      if (!matchesCategory) return false;
      if (!searchTerm.trim()) return true;
      return matchesProductSearch(item, searchTerm);
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
    <section id="products" className="relative py-4 sm:py-6 bg-[#F7FAFC] border-b border-[#DCE7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* CCTV Camera & Security Store Long Horizontal Box (লম্বা পাতালি এক লাইনে সম্পূর্ণ ঘর) */}
        <div className="bg-white border border-[#DCE7F2] rounded-xl sm:rounded-2xl py-2 px-3 sm:px-4 mb-2.5 sm:mb-3 shadow-xs flex items-center justify-between gap-2 font-tech">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#123A70] animate-pulse shrink-0" />
            <h2 className="text-xs sm:text-base md:text-lg font-black text-[#1F2937] uppercase tracking-wide truncate">
              CCTV Camera & Security Store
            </h2>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-[#123A70] bg-[#EFF5FB] px-2.5 py-0.5 rounded-full border border-[#DCE7F2] shrink-0">
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
              className="w-full bg-white text-xs sm:text-sm text-[#1F2937] placeholder-[#64748B] rounded-xl pl-8 sm:pl-9 pr-7 py-2 border border-[#DCE7F2] focus:border-[#123A70] focus:outline-none focus:ring-1 focus:ring-[#123A70]/25 transition-all shadow-xs"
            />
            <Search className="w-3.5 h-3.5 text-[#123A70] absolute left-2.5 sm:left-3 top-2.5 pointer-events-none" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-2 text-xs text-[#64748B] hover:text-[#1F2937] p-0.5 font-bold cursor-pointer"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Product Category Dropdown (সার্চ অপশনের ঠিক ডান পাশে) */}
          <div className="relative shrink-0 w-[145px] sm:w-[220px]">
            <div className="relative flex items-center bg-white border border-[#DCE7F2] hover:border-[#123A70]/50 rounded-xl px-2 sm:px-2.5 py-2 shadow-xs transition-all">
              <Layers className="w-3.5 h-3.5 text-[#123A70] shrink-0 mr-1 sm:mr-1.5 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ProductCategory)}
                className="w-full bg-transparent text-[11px] sm:text-xs font-bold text-[#1F2937] focus:outline-none cursor-pointer truncate appearance-none pr-4"
                title="Product Category"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All Products' ? `All Products (${products.length})` : `${cat} (${categoryCounts[cat] || 0})`}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#123A70] absolute right-1.5 sm:right-2 pointer-events-none shrink-0" />
            </div>
          </div>
        </div>

        {/* Layout with Sidebar Categories & 2-Column Responsive Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Category Sidebar (Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 rounded-2xl bg-white border border-[#DCE7F2] p-4 shadow-sm">
              
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#DCE7F2] text-[#1F2937] font-bold font-tech text-base">
                <Layers className="w-4 h-4 text-[#123A70]" />
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
                          ? 'bg-[#123A70] text-white font-bold shadow-xs'
                          : 'text-[#1F2937] hover:bg-[#EFF5FB] hover:text-[#123A70]'
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-white/20 text-white font-bold' 
                          : 'bg-[#EFF5FB] text-[#4B5563] group-hover:text-[#123A70]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Technician Installation Support Notice */}
              <div className="mt-6 p-3 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] text-xs text-[#1F2937] space-y-1.5 shadow-xs">
                <div className="font-bold text-[#123A70] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#147A43]" />
                  <span>Free Setup Consultation</span>
                </div>
                <p className="text-[11px] text-[#4B5563]">
                  Not sure how many cameras or DVR channels you need? We calculate storage & wiring for free across Rangpur Division.
                </p>
              </div>

            </div>
          </aside>

          {/* Right Product Grid - 2 Columns on Phone Mobile, 3 on Tablet, 4 on Desktop (Star Tech Layout) */}
          <main className="lg:col-span-9 scroll-mt-24 sm:scroll-mt-20" id="product-items-grid">
            
            {/* Active filter summary bar */}
            <div className="flex items-center justify-between mb-3 text-xs text-[#4B5563] px-1">
              <span>
                Showing <strong className="text-[#1F2937] font-bold">{filteredProducts.length}</strong> items in{' '}
                <span className="text-[#123A70] font-bold">{selectedCategory}</span>
                {searchTerm && <span> matching "<strong className="text-[#123A70]">{searchTerm}</strong>"</span>}
              </span>
              {(selectedCategory !== 'All Products' || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All Products');
                    setSearchTerm('');
                  }}
                  className="text-[#123A70] hover:underline cursor-pointer font-bold text-xs"
                >
                  Reset All
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 px-5 rounded-2xl bg-white border border-[#DCE7F2] max-w-lg mx-auto shadow-sm">
                <Package className="w-12 h-12 text-[#123A70] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#1F2937] font-tech">
                  {searchTerm ? `"${searchTerm}" এর জন্য প্রোডাক্ট পাওয়া যায়নি` : 'কোনো প্রোডাক্ট পাওয়া যায়নি'}
                </h3>
                <p className="text-[#4B5563] text-xs sm:text-sm mt-1.5 leading-relaxed font-bangla">
                  আপনি কি সিসিটিভি ক্যামেরা, PABX ইন্টারকম, ইলেকট্রিশিয়ান, অ্যাক্সেস কন্ট্রোল বা কোনো জেলার অন-সাইট সার্ভিস খুঁজছেন?
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] text-xs text-left space-y-1">
                  <span className="font-bold text-[#123A70] block">রংপুর বিভাগের ৮টি জেলায় আমাদের সেবা রয়েছে:</span>
                  <p className="text-[#4B5563] text-[11px]">
                    রংপুর (সিটি ও সদর), দিনাজপুর, লালমনিরহাট, কুড়িগ্রাম, নীলফামারী, গাইবান্ধা, ঠাকুরগাঁও ও পঞ্চগড়।
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                  <a
                    href="#district-coverage"
                    className="px-4 py-2 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-xs shadow-xs"
                  >
                    সার্ভিস ও এলাকা দেখুন
                  </a>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All Products');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#1F2937] font-bold text-xs border border-[#DCE7F2] cursor-pointer"
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
                    className="flex flex-col justify-between rounded-lg sm:rounded-2xl bg-white border border-[#DCE7F2] hover:border-[#123A70]/45 transition-all shadow-xs hover:shadow-md group overflow-hidden"
                  >
                    <div>
                      {/* Top Brand Accent Strip */}
                      <div className="h-1 bg-[#123A70] group-hover:h-1.5 transition-all" />

                      {/* Product Image Container */}
                      <div 
                        onClick={() => onViewDetails(product)}
                        className="relative aspect-square sm:aspect-[4/3] bg-white p-1 sm:p-3 flex items-center justify-center overflow-hidden border-b border-[#DCE7F2] cursor-pointer group-hover:bg-[#F7FAFC] transition-colors"
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
                        <div className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 px-1 sm:px-2 py-0.5 rounded bg-[#123A70] text-[7px] sm:text-[10px] font-bold text-white uppercase tracking-wider shadow-xs pointer-events-none">
                          {product.brand}
                        </div>

                        {/* Stock Badge */}
                        <div className="absolute top-1 right-1 sm:top-2.5 sm:right-2.5 px-1 sm:px-2 py-0.5 rounded bg-[#147A43] text-[7px] sm:text-[10px] font-bold text-white shadow-xs pointer-events-none">
                          <span className="hidden sm:inline">● </span>{product.inStock ? 'Stock' : 'Pre-order'}
                        </div>

                        {/* Quick View Overlay Button */}
                        <div className="absolute inset-0 bg-[#1F2937]/25 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 pointer-events-none">
                          <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/95 border border-[#DCE7F2] flex items-center gap-1 text-[#1F2937] shadow-sm text-[9px] sm:text-[11px] font-bold">
                            <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#123A70]" />
                            <span>View</span>
                          </div>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-1.5 sm:p-3.5 space-y-0.5 sm:space-y-1.5">
                        <div className="text-[8px] sm:text-[10px] text-[#123A70] font-bold font-tech uppercase tracking-wider truncate">
                          {getProductCategory(product)}
                        </div>

                        <h3 
                          onClick={() => onViewDetails(product)}
                          className="text-[10px] sm:text-sm font-bold text-[#1F2937] font-tech leading-snug hover:text-[#123A70] transition-colors cursor-pointer line-clamp-2 min-h-[26px] sm:min-h-[38px]"
                          title={product.name}
                        >
                          {product.name}
                        </h3>

                        {/* Key Specs Bullet Summary - hidden on 3-col mobile for sleek compactness */}
                        <p className="hidden sm:block text-[10px] sm:text-xs text-[#4B5563] line-clamp-2 leading-relaxed">
                          {product.specs}
                        </p>

                        {/* Price Display in Bangladeshi Taka ৳ or Contact for Price */}
                        <div className="pt-0.5 sm:pt-1 flex flex-wrap items-baseline gap-0.5 sm:gap-2 min-h-[20px] sm:min-h-[26px]">
                          {(product.priceType === 'contact' || product.isContactForPrice) ? (
                            <span className="text-[10px] sm:text-xs font-bold text-[#123A70] bg-[#EFF5FB] border border-[#DCE7F2] px-1.5 py-0.5 rounded font-tech tracking-wide inline-flex items-center">
                              Contact for Price
                            </span>
                          ) : (
                            <>
                              <span className="text-[11px] sm:text-xl font-black text-[#123A70] font-tech">
                                ৳ {product.price.toLocaleString('en-US')}
                              </span>
                              {(product.regularPrice || product.originalPrice) && (
                                <span className="text-[8px] sm:text-xs text-[#64748B] line-through">
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
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#123A70] font-bold text-[9px] sm:text-xs tracking-wide transition-all border border-[#DCE7F2] active:scale-95 cursor-pointer"
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
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-[#147A43] hover:bg-[#106637] text-white text-[9px] sm:text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer text-center"
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
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-[9px] sm:text-xs tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer"
                            title="Add to Cart"
                          >
                            <ShoppingCart className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0" />
                            <span className="sm:hidden">কার্ট</span>
                            <span className="hidden sm:inline truncate">Add to Cart</span>
                          </button>

                          <button
                            onClick={() => onBuyNow(product)}
                            id={`buy-now-${product.id}`}
                            className="flex items-center justify-center gap-0.5 sm:gap-1 py-1 sm:py-2 px-1 rounded-md sm:rounded-lg bg-[#147A43] hover:bg-[#106637] text-white text-[9px] sm:text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
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
