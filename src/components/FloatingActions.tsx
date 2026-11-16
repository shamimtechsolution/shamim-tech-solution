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
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
      
      {/* Quick Cart Floating Bubble (if cart has items) */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#123A70] border border-[#DCE7F2]/50 text-white font-tech font-bold text-xs shadow-md hover:bg-[#1A4B8C] transition-all cursor-pointer group animate-bounce"
          title="Open Shopping Cart"
        >
          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          <span>Cart: {cartCount} items</span>
          <span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-ping" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${activeCompany.phone || '01790139333'}`}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#123A70] hover:bg-[#1A4B8C] text-white shadow-md shadow-[#123A70]/25 border border-white/25 transition-all transform hover:scale-110 active:scale-95"
        title={`Call ${activeCompany.phone || '01790139333'} / ${activeCompany.secondaryPhone || '01865321530'}`}
      >
        <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" />
        {/* Tooltip on hover (desktop only) */}
        <span className="hidden sm:block absolute right-14 bg-[#1F2937] text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-[#DCE7F2]/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          Call: {activeCompany.phone || '01790139333'} / {activeCompany.secondaryPhone || '01865321530'}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('Hello Shamim Tech Solution, I want to consult about CCTV camera installation.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#147A43] hover:bg-[#106637] text-white shadow-md shadow-[#147A43]/25 border border-white/25 transition-all transform hover:scale-110 active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        {/* Tooltip on hover (desktop only) */}
        <span className="hidden sm:block absolute right-16 bg-[#1F2937] text-white text-xs font-bold py-1.5 px-3 rounded-lg border border-[#DCE7F2]/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
          Chat on WhatsApp ({activeCompany.phoneFormatted || activeCompany.whatsapp || '01790-139333'})
        </span>
      </a>

    </div>
  );
};
