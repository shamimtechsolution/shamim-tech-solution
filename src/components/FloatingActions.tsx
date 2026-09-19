import React from 'react';
import { MessageSquare, Phone, ShoppingBag } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyInfo } from '../types';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
  companyInfo?: CompanyInfo;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ 
  cartCount, 
  onOpenCart,
  companyInfo: passedCompany 
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Quick Cart Floating Bubble (if cart has items) */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 border border-cyan-400 text-cyan-300 font-tech font-bold text-xs shadow-2xl hover:bg-slate-800 transition-all cursor-pointer group animate-bounce"
          title="Open Shopping Cart"
        >
          <ShoppingBag className="w-4 h-4 text-cyan-400" />
          <span>Cart: {cartCount} items</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${activeCompany.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:scale-110 active:scale-95"
        title={`Call ${activeCompany.phone}`}
      >
        <Phone className="w-5 h-5 fill-current" />
        {/* Tooltip on hover */}
        <span className="absolute right-14 bg-slate-950 text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          Call: {activeCompany.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('Hello Shamim Tech Solution, I want to consult about CCTV camera installation.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-[0_0_25px_rgba(37,211,102,0.45)] transition-all transform hover:scale-110 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        {/* Tooltip on hover */}
        <span className="absolute right-16 bg-slate-950 text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          Chat on WhatsApp ({activeCompany.phone})
        </span>
      </a>

    </div>
  );
};
