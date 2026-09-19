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
  Package
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
    <section id="products" className="py-16 bg-[#040815] border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider font-tech">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct CCTV Hardware Store • Haragach, Rangpur</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-tech mt-1">
              Featured Security Products
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              100% Genuine surveillance equipment with official warranty and technician installation support.
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Box */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search camera, DVR, HDD..."
                className="w-full bg-slate-900 text-sm text-slate-100 placeholder-slate-400 rounded-xl pl-9 pr-3 py-2 border border-cyan-900/60 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-3 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-white px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 text-xs text-slate-300">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-200 focus:outline-none cursor-pointer text-xs"
              >
                <option value="featured" className="bg-slate-900">Featured</option>
                <option value="price-asc" className="bg-slate-900">Price: Low to High</option>
                <option value="price-desc" className="bg-slate-900">Price: High to Low</option>
              </select>
            </div>

            {/* Mobile Category Toggle */}
            <button
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-cyan-400"
            >
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Categories ({selectedCategory === 'All Products' ? 'All' : selectedCategory})</span>
            </button>
          </div>
        </div>

        {/* Layout with Sidebar Categories & Product Cards Grid (matching reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Category Sidebar (Desktop) */}
          <aside className={`lg:col-span-3 ${mobileCategoryOpen ? 'block mb-6' : 'hidden lg:block'}`}>
            <div className="sticky top-24 rounded-2xl bg-gradient-to-b from-slate-900 to-[#060c1d] border border-cyan-900/40 p-4 shadow-xl">
              
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-white font-bold font-tech text-base">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Categories</span>
              </div>

              <div className="space-y-1">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setMobileCategoryOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left cursor-pointer group ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.35)]'
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-slate-950 text-cyan-300 font-black' 
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Technician Installation Support Notice */}
              <div className="mt-6 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Free Setup Consultation</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Not sure how many cameras or DVR channels you need? We calculate storage & wiring for free.
                </p>
              </div>

            </div>
          </aside>

          {/* Right Product Grid */}
          <main className="lg:col-span-9">
            
            {/* Active filter summary tag */}
            <div className="flex items-center justify-between mb-4 text-xs text-slate-400 px-1">
              <span>
                Showing <strong className="text-white">{filteredProducts.length}</strong> items in{' '}
                <span className="text-cyan-400 font-semibold">{selectedCategory}</span>
              </span>
              {selectedCategory !== 'All Products' && (
                <button
                  onClick={() => setSelectedCategory('All Products')}
                  className="text-cyan-400 hover:underline cursor-pointer"
                >
                  Reset Category
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/50 border border-cyan-900/40 max-w-lg mx-auto">
                <Package className="w-14 h-14 text-cyan-400/80 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white font-tech">দোকানে কোনো প্রোডাক্ট নেই</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  সব পুরোনো ডামি প্রোডাক্ট সফলভাবে মুছে ফেলা হয়েছে। আপনি অ্যাডমিন প্যানেল থেকে আপনার নিজস্ব সিসিটিভি ক্যামেরা ও সিকিউরিটি প্রোডাক্ট যোগ করতে পারেন।
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="#admin"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    + নতুন প্রোডাক্ট যোগ করুন (Admin)
                  </a>
                  {(searchTerm || selectedCategory !== 'All Products') && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('All Products');
                      }}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors"
                    >
                      ফিল্টার ক্লিয়ার করুন
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#060b18] border border-cyan-950/80 hover:border-cyan-500/60 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.18)] group overflow-hidden"
                  >
                    <div>
                      {/* Product Image Container */}
                      <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                        />

                        {/* Brand Badge */}
                        <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm border border-slate-700 text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                          {product.brand}
                        </div>

                        {/* Stock Badge */}
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-semibold text-emerald-300">
                          ● {product.inStock ? 'In Stock' : 'Pre-order'}
                        </div>

                        {/* Quick View Overlay Button */}
                        <button
                          onClick={() => onViewDetails(product)}
                          className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-bold text-white cursor-pointer"
                        >
                          <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/50 flex items-center gap-1 text-cyan-300 hover:text-white">
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Details</span>
                          </div>
                        </button>
                      </div>

                      {/* Content details */}
                      <div className="p-4 space-y-2">
                        <div className="text-[11px] text-cyan-400 font-semibold font-tech uppercase">
                          {product.category}
                        </div>

                        <h3 
                          onClick={() => onViewDetails(product)}
                          className="text-base font-bold text-white font-tech leading-snug hover:text-cyan-300 transition-colors cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h3>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {product.specs}
                        </p>

                        {/* Price Display in Bangladeshi Taka ৳ */}
                        <div className="pt-2 flex items-baseline gap-2">
                          <span className="text-xl font-black text-cyan-400 font-tech">
                            ৳ {product.price.toLocaleString('en-US')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-slate-500 line-through">
                              ৳ {product.originalPrice.toLocaleString('en-US')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onAddToCart(product)}
                        id={`add-to-cart-${product.id}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>

                      <button
                        onClick={() => onBuyNow(product)}
                        id={`buy-now-${product.id}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-slate-700 text-xs font-bold transition-all active:scale-95 cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Buy Now</span>
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
