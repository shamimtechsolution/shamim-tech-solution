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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F2937]/65 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-[calc(100%-1.75rem)] sm:w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white border border-[#DCE7F2] p-3.5 sm:p-5 shadow-xl text-[#1F2937] my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#123A70]" />

        {/* Close / Back Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#F7FAFC] text-[#1F2937] hover:bg-[#EFF5FB] transition-colors border border-[#DCE7F2] text-xs font-bold cursor-pointer shadow-xs"
          aria-label="Back and Cancel"
          title="বাতিল / ব্যাকে যান (Cancel)"
        >
          <X className="w-3.5 h-3.5 text-[#4B5563]" />
          <span>Cancel / ব্যাকে যান</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 items-start pt-6 md:pt-2">
          
          {/* Image & Badges */}
          <div className="space-y-2">
            <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden bg-[#F7FAFC] border border-[#DCE7F2] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#EFF5FB] border border-[#DCE7F2] text-[10px] font-bold text-[#123A70]">
                {product.brand}
              </div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] text-[11px] space-y-1 text-[#4B5563]">
              {product.warranty && product.warranty.trim() && (
                <div className="flex items-center gap-1.5 text-[#123A70] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#123A70] shrink-0" />
                  <span>{product.warranty}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-[#4B5563]">
                <Truck className="w-3.5 h-3.5 text-[#123A70] shrink-0" />
                <span>Rangpur Division Fast Delivery Available</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#4B5563]">
                <RotateCcw className="w-3.5 h-3.5 text-[#123A70] shrink-0" />
                <span>Replacement Support for Defective Units</span>
              </div>
            </div>
          </div>

          {/* Details & Action Controls */}
          <div className="space-y-2.5 sm:space-y-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#123A70] font-tech">
                {product.category} {product.modelNumber ? `• ${product.modelNumber}` : ''}
              </div>
              <h2 className="text-base sm:text-lg font-black text-[#1F2937] font-tech mt-0.5 leading-snug">
                {product.name}
              </h2>
            </div>

            {/* Price Box */}
            <div className="p-2.5 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] flex items-baseline justify-between">
              <div>
                <span className="text-[10px] text-[#64748B] font-semibold block">Unit Price (BDT)</span>
                <div className="flex items-baseline gap-2">
                  {(product.priceType === 'contact' || product.isContactForPrice) ? (
                    <span className="text-base sm:text-lg font-black text-[#123A70] font-tech">
                      Contact for Price
                    </span>
                  ) : (
                    <>
                      <span className="text-lg sm:text-xl font-black text-[#123A70] font-tech">
                        ৳ {product.price.toLocaleString('en-US')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#64748B] line-through">
                          ৳ {product.originalPrice.toLocaleString('en-US')}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EAF6EF] text-[#147A43] border border-[#DCE7F2]">
                ● In Stock
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-[10px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                Description
              </h4>
              <p className="text-xs text-[#4B5563] leading-relaxed line-clamp-3 sm:line-clamp-none">
                {product.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div>
              <h4 className="text-[10px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                Key Specifications
              </h4>
              <div className="space-y-0.5">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#4B5563]">
                    <Check className="w-3 h-3 text-[#147A43] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-1.5 pt-1">
              {(product.priceType === 'contact' || product.isContactForPrice) ? (
                <>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I am inquiring about price and details for: ${product.name} (Category: ${product.category}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] text-white font-bold text-xs transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp-এ দাম ও বিস্তারিত জানুন ({COMPANY_INFO.phoneFormatted})</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-1.5 px-3 rounded-xl bg-[#EFF5FB] hover:bg-white text-[#123A70] font-bold text-xs transition-all border border-[#DCE7F2]"
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
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Cart</span>
                    </button>

                    <button
                      onClick={() => {
                        onBuyNow(product);
                        onClose();
                      }}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
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
                    className="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-xl bg-[#EAF6EF] hover:bg-[#EFF5FB] border border-[#DCE7F2] text-[#147A43] font-semibold text-xs transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-[#147A43]" />
                    <span>Ask Technician on WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
                  </a>
                </>
              )}

              {/* Bottom Cancel / Back Button for Mobile & PC */}
              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#1F2937] font-bold text-xs border border-[#DCE7F2] transition-all cursor-pointer shadow-xs"
              >
                <X className="w-3.5 h-3.5 text-[#4B5563]" />
                <span>বাতিল / মূল ওয়েবসাইটে ফিরে যান (Cancel)</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
