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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-slate-900 to-[#050b18] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Image & Badges */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-700 text-xs font-bold text-cyan-300">
                {product.brand}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>{product.warranty || '1 Year Official Warranty'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="w-4 h-4 text-cyan-400" />
                <span>Haragach / Rangpur Fast Delivery Available</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <RotateCcw className="w-4 h-4 text-cyan-400" />
                <span>Replacement Support for Defective Units</span>
              </div>
            </div>
          </div>

          {/* Details & Action Controls */}
          <div className="space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-tech">
                {product.category} {product.modelNumber ? `• ${product.modelNumber}` : ''}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-tech mt-1">
                {product.name}
              </h2>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Unit Price (BDT)</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-tech">
                    ৳ {product.price.toLocaleString('en-US')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">
                      ৳ {product.originalPrice.toLocaleString('en-US')}
                    </span>
                  )}
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                ● In Stock
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                Description
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features Checklist */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Key Specifications
              </h4>
              <div className="space-y-1.5">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => {
                    onBuyNow(product);
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-lg"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
              </div>

              {/* Direct WhatsApp Question for this Product */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I am inquiring about product: ${product.name} (Price: ৳${product.price}). Is it currently available for installation in Rangpur?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-600/80 border border-emerald-500/40 text-emerald-300 hover:text-white font-semibold text-xs transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Ask Technician on WhatsApp (01865321530)</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
