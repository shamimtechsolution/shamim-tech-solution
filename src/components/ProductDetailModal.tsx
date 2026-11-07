import React from 'react';
import { 
  X, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  Check, 
  MessageSquare, 
  Phone, 
  Truck, 
  RotateCcw
} from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-slate-900 to-[#050b18] border border-cyan-500/40 p-4 sm:p-6 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close / Back Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/95 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 text-xs font-semibold cursor-pointer shadow-md"
          aria-label="Back and Cancel"
          title="বাতিল / ব্যাকে যান (Cancel)"
        >
          <X className="w-4 h-4 text-cyan-400" />
          <span>Cancel / ব্যাকে যান</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start pt-6 md:pt-0">
          
          {/* Image & Badges */}
          <div className="space-y-2.5">
            <div className="relative h-44 sm:h-52 md:h-56 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700 text-[11px] font-bold text-cyan-300">
                {product.brand}
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] sm:text-xs space-y-1.5">
              {product.warranty && product.warranty.trim() && (
                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{product.warranty}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Rangpur Division Fast Delivery Available</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Replacement Support for Defective Units</span>
              </div>
            </div>
          </div>

          {/* Details & Action Controls */}
          <div className="space-y-3 sm:space-y-3.5">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 font-tech">
                {product.category} {product.modelNumber ? `• ${product.modelNumber}` : ''}
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white font-tech mt-0.5">
                {product.name}
              </h2>
            </div>

            {/* Price Box */}
            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-baseline justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Unit Price (BDT)</span>
                <div className="flex items-baseline gap-2">
                  {(product.priceType === 'contact' || product.isContactForPrice) ? (
                    <span className="text-lg sm:text-xl font-black text-amber-400 font-tech">
                      Contact for Price
                    </span>
                  ) : (
                    <>
                      <span className="text-xl sm:text-2xl font-black text-cyan-400 font-tech">
                        ৳ {product.price.toLocaleString('en-US')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-500 line-through">
                          ৳ {product.originalPrice.toLocaleString('en-US')}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                ● In Stock
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-0.5">
                Description
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {product.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div>
              <h4 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                Key Specifications
              </h4>
              <div className="space-y-1">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2 pt-1">
              {(product.priceType === 'contact' || product.isContactForPrice) ? (
                <>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I am inquiring about price and details for: ${product.name} (Category: ${product.category}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp-এ দাম ও বিস্তারিত জানুন ({COMPANY_INFO.phoneFormatted})</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs transition-all border border-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>সরাসরি কল করে দাম জানুন: {COMPANY_INFO.phoneFormatted}</span>
                  </a>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onClose();
                      }}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={() => {
                        onBuyNow(product);
                        onClose();
                      }}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Buy Now</span>
                    </button>
                  </div>

                  {/* Direct WhatsApp Question for this Product */}
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I am inquiring about product: ${product.name} (Price: ৳${product.price}). Is it currently available for installation in Rangpur?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-600/80 border border-emerald-500/40 text-emerald-300 hover:text-white font-semibold text-xs transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Ask Technician on WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
                  </a>
                </>
              )}

              {/* Bottom Cancel / Back Button for Mobile & PC */}
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer shadow-sm mt-1"
              >
                <X className="w-3.5 h-3.5 text-slate-400" />
                <span>বাতিল / মূল ওয়েবসাইটে ফিরে যান (Cancel)</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
