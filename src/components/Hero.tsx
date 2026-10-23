import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Package, 
  CheckCircle2, 
  Headphones, 
  Award, 
  Tag, 
  Users,
  Shield,
  Activity
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyInfo, SiteContent } from '../types';

interface HeroProps {
  onViewProducts: () => void;
  onRequestQuote: () => void;
  companyInfo?: CompanyInfo;
  siteContent?: SiteContent;
}

export const Hero: React.FC<HeroProps> = ({ 
  onViewProducts, 
  onRequestQuote,
  companyInfo: passedCompany,
  siteContent: passedSiteContent
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;
  const activeContent = passedSiteContent;

  const highlightPoints = [
    "সিসিটিভি ক্যামেরা ফিটিং",
    "বায়োমেট্রিক হাজিরা মেশিন",
    "PBX ও ইন্টারকম সেটআপ",
    "হাউস ও অফিস ওয়্যারিং",
    "DVR / NVR অনলাইন ভিউ",
    "অ্যাক্সেস কন্ট্রোল ও লক",
    "কম্পিউটার LAN নেটওয়ার্ক",
    "দক্ষ টেকনিশিয়ান সার্ভিস"
  ];

  const trustBadges = [
    { label: "২৪/৭ জরুরি সাপোর্ট", icon: Headphones },
    { label: "বিশ্বাসযোগ্য সেবা", icon: Award },
    { label: "সুলভ ও সাশ্রয়ী মূল্য", icon: Tag },
    { label: "প্রফেশনাল টিম", icon: Users },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-200/70 via-blue-100/50 to-sky-100/60 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 font-bangla">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/25 via-sky-400/25 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-300 text-cyan-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600"></span>
              </span>
              <span>{activeCompany.name} • {activeCompany.location}</span>
            </div>

            {/* Main Headline & Description Inside a Clean Styled Box (ঘর) */}
            <div className="bg-white/95 border-2 border-sky-300 hover:border-cyan-400 rounded-2xl p-4 sm:p-5 shadow-lg shadow-sky-950/5 backdrop-blur-sm space-y-2.5 transition-all">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-normal font-bangla">
                প্রফেশনাল <span className="text-cyan-700 font-extrabold">CCTV, টেকনিশিয়ান, ইলেকট্রিশিয়ান ও সিকিউরিটি</span> সলিউশন
              </h1>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                রংপুর বিভাগজুড়ে বাসা, দোকান, ফ্যাক্টরি ও অফিসে সিসিটিভি ক্যামেরা ইনস্টলেশন ও মেরামত, দক্ষ টেকনিশিয়ান সার্ভিস, ইলেকট্রিশিয়ান ও হাউজ ওয়্যারিং, মোবাইলের মাধ্যমে অনলাইন লাইভ ভিউ এবং অরিজিনাল প্রোডাক্ট ও এক্সেসরিজ বিক্রয় করা হয়।
              </p>

              {/* Quick Compact Highlights inside the Ghor without truncation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-2 border-t border-sky-100 text-[11px] font-bold text-slate-800">
                <div className="flex items-center gap-1 bg-sky-50 px-2 py-1.5 rounded-lg border border-sky-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="whitespace-nowrap">ক্যামেরা ফিটিং</span>
                </div>
                <div className="flex items-center gap-1 bg-sky-50 px-2 py-1.5 rounded-lg border border-sky-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="whitespace-nowrap">ইলেকট্রিশিয়ান সার্ভিস</span>
                </div>
                <div className="flex items-center gap-1 bg-sky-50 px-2 py-1.5 rounded-lg border border-sky-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="whitespace-nowrap">অনলাইন মোবাইল ভিউ</span>
                </div>
                <div className="flex items-center gap-1 bg-sky-50 px-2 py-1.5 rounded-lg border border-sky-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span className="whitespace-nowrap">অন-সাইট সাপোর্ট</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile responsive */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <div className="flex items-stretch rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 p-0.5 shadow-lg shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5">
                <a
                  href={`tel:${activeCompany.phone || '01790139333'}`}
                  id="hero-call-now-btn"
                  className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-l-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide transition-all"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse text-cyan-200" />
                  <span>কল: {activeCompany.phone || '01790-139333'}</span>
                </a>
                <div className="w-px bg-cyan-400/40 my-1" />
                <a
                  href={`tel:${activeCompany.secondaryPhone || '01865321530'}`}
                  className="flex items-center px-3 py-3 rounded-r-xl bg-blue-700/60 hover:bg-blue-600/80 text-xs font-mono font-bold text-cyan-100 hover:text-white transition-colors"
                >
                  <span>{activeCompany.secondaryPhone || '01865-321530'}</span>
                </a>
              </div>

              <a
                href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('আসসালামু আলাইকুম, আমি সিসিটিভি ও সিকিউরিটি সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই।')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp ({activeCompany.phoneFormatted || activeCompany.whatsapp || '01790-139333'})</span>
              </a>

              <button
                onClick={onViewProducts}
                id="hero-view-products-btn"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white hover:bg-sky-50 text-cyan-800 hover:text-cyan-900 border border-sky-300 hover:border-cyan-500 text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer"
              >
                <Package className="w-4 h-4 text-cyan-600" />
                <span>প্রোডাক্ট দেখুন</span>
              </button>
            </div>

            {/* Trust Badges: 2 on mobile, 4 on desktop */}
            <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/95 border border-sky-200 text-slate-800 shadow-sm">
                    <div className="p-1.5 rounded-lg bg-sky-100 text-cyan-700 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs leading-tight">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual - 2 Columns in ONE line (grid-cols-2) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-2 sm:gap-3.5 items-stretch">
              
              {/* Column 1: Official STS Security Assurance Box */}
              <div className="bg-white/95 border-2 border-cyan-400 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-lg shadow-sky-950/10 backdrop-blur-md flex flex-col justify-between font-bangla">
                <div>
                  <div className="flex items-start justify-between gap-1 border-b border-sky-100 pb-1.5 sm:pb-2.5 mb-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-cyan-950 font-bold text-xs sm:text-base leading-snug">
                        আপনার নিরাপত্তাই আমাদের অগ্রাধিকার
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-cyan-700 font-semibold mt-0.5">
                        অফিসিয়াল সিকিউরিটি সার্ভিস
                      </p>
                    </div>
                    <div className="p-1 sm:p-1.5 rounded-lg bg-sky-100 text-cyan-700 shrink-0">
                      <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 text-[9px] sm:text-xs text-slate-800 font-medium">
                    {highlightPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-1 sm:gap-1.5">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-600 shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2.5 pt-1.5 border-t border-sky-100 text-[9px] sm:text-[10px] font-bold text-cyan-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="leading-tight">১০০% আসল পার্টস ও সাপোর্ট</span>
                </div>
              </div>

              {/* Column 2: User's Authentic Workstation Photo (Clean without STS Control Lab text) */}
              <div className="relative rounded-xl sm:rounded-2xl bg-white border-2 border-cyan-400 p-1 sm:p-2.5 shadow-lg flex flex-col justify-between overflow-hidden group">
                <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex-1 flex flex-col">
                  {/* Real User Photo */}
                  <div className="relative flex-1 min-h-[160px] sm:min-h-[240px] bg-slate-900 overflow-hidden">
                    <img 
                      src="/assets/aistudio/image_69e03957.png" 
                      alt="Shamim Tech Solution - CCTV, PBX, Networking Workstation" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    
                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-1.5 sm:p-2.5 pt-6 text-white">
                      <div className="text-[11px] sm:text-xs font-bold text-white font-bangla leading-tight">
                        নাম: শামীম ইসলাম
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Quote Button */}
                <div className="mt-1 sm:mt-1.5 pt-1 border-t border-sky-100">
                  <button 
                    onClick={onRequestQuote} 
                    className="w-full py-1 sm:py-1.5 px-1 rounded-md sm:rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-[9px] sm:text-xs flex items-center justify-center gap-0.5 shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    <span>কোটেশন নিন →</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};