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
  ShieldCheck,
  Activity,
  Facebook,
  Camera,
  Video,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  Zap,
  Lock,
  Fingerprint,
  Cable,
  Network,
  Monitor,
  SlidersHorizontal,
  Layers,
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyInfo, SiteContent, ProductCategory } from '../types';

interface HeroProps {
  onViewProducts: () => void;
  onRequestQuote: () => void;
  companyInfo?: CompanyInfo;
  siteContent?: SiteContent;
  onSelectCategory?: (category: ProductCategory, searchTag?: string) => void;
}

interface StarTechCategory {
  id: string;
  name: string;
  bnName: string;
  category: ProductCategory;
  icon: React.FC<{ className?: string }>;
  searchQuery?: string;
  badge?: string;
}

const STAR_TECH_CATEGORIES: StarTechCategory[] = [
  {
    id: 'all-products',
    name: 'All Categories',
    bnName: 'সব প্রোডাক্ট',
    category: 'All Products',
    icon: Layers,
    badge: 'All'
  },
  {
    id: 'wifi-cam',
    name: 'WiFi Camera',
    bnName: 'ওয়াইফাই ক্যামেরা',
    category: 'CCTV Camera',
    icon: Wifi,
    badge: 'Popular'
  },
  {
    id: 'cctv-cam',
    name: 'CCTV Camera',
    bnName: 'সিসিটিভি ক্যামেরা',
    category: 'CCTV Camera',
    icon: Video
  },
  {
    id: 'dvr',
    name: 'DVR / XVR',
    bnName: 'ডিভিআর রেকর্ডার',
    category: 'DVR',
    icon: Server
  },
  {
    id: 'nvr',
    name: 'NVR',
    bnName: 'এনভিআর মেশিন',
    category: 'NVR',
    icon: Cpu
  },
  {
    id: 'hdd',
    name: 'Hard Disk',
    bnName: 'সার্ভিলেন্স হার্ডডিস্ক',
    category: 'Hard Disk (HDD)',
    icon: HardDrive
  },
  {
    id: 'power',
    name: 'Power Adapter',
    bnName: 'এডাপ্টার ও পাওয়ার',
    category: 'Power Supply/Adapter',
    icon: Zap
  },
  {
    id: 'access-control',
    name: 'Access Control',
    bnName: 'ডোর লক সিস্টেম',
    category: 'Access Control',
    icon: Lock
  },
  {
    id: 'biometric',
    name: 'Fingerprint Machine',
    bnName: 'হাজিরা মেশিন',
    category: 'Fingerprint Machine',
    icon: Fingerprint
  },
  {
    id: 'cable',
    name: 'CCTV Cable',
    bnName: 'ক্যাবল',
    category: 'CCTV Cable',
    icon: Cable
  },
  {
    id: 'networking',
    name: 'Networking',
    bnName: 'রাউটার ও সুইচ',
    category: 'Networking Products',
    icon: Network
  },
  {
    id: 'monitor',
    name: 'Monitor',
    bnName: 'সিসিটিভি মনিটর',
    category: 'Monitor',
    icon: Monitor
  },
  {
    id: 'other-acc',
    name: 'Accessories',
    bnName: 'অন্যান্য এক্সেসরিজ',
    category: 'Other Accessories',
    icon: SlidersHorizontal
  }
];

export const Hero: React.FC<HeroProps> = ({ 
  onViewProducts, 
  onRequestQuote,
  companyInfo: passedCompany,
  siteContent: passedSiteContent,
  onSelectCategory
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;
  const activeContent = passedSiteContent;

  const handleCategoryClick = (category: ProductCategory, searchTag?: string) => {
    if (onSelectCategory) {
      onSelectCategory(category, searchTag);
    } else {
      onViewProducts();
    }
  };

  const highlightPoints = [
    "CCTV Camera Fitting & Service",
    "IP Camera Fitting & Service",
    "Biometric Attendance Machine",
    "PBX & Intercom Setup",
    "House & Office Electrical Wiring",
    "DVR / NVR Online View",
    "Access Control Door Lock",
    "Computer LAN Network"
  ];

  const trustBadges = [
    { label: "২৪/৭ জরুরি সাপোর্ট", icon: Headphones },
    { label: "বিশ্বাসযোগ্য সেবা", icon: Award },
    { label: "সুলভ ও সাশ্রয়ী মূল্য", icon: Tag },
    { label: "প্রফেশনাল টিম", icon: Users },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#F7FAFC] pt-2 pb-5 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-10 font-bangla">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-2.5 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DCE7F2] text-[#1F2937] text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#147A43] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#147A43]"></span>
              </span>
              <span>SHAMIM TECH SOLUTION • Sales and Service , Technician and Electrician, Rangpur</span>
            </div>

            {/* Original Product Sales Slim Long Horizontal Button (Star Tech Style Direct Product Jump) */}
            <button
              onClick={() => handleCategoryClick('All Products')}
              className="w-full bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] text-white rounded-xl py-1.5 sm:py-2 px-3 shadow-xs border border-[#12733D] flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 active:scale-[0.99] group"
              title="Click to view original products directly"
            >
              <ShieldCheck className="w-4 h-4 text-[#DCFCE7] shrink-0 group-hover:scale-110 transition-transform" />
              <h2 className="text-xs sm:text-sm font-extrabold text-white font-tech tracking-wide text-center uppercase">
                Original Product Sales
              </h2>
              <ChevronRight className="w-3.5 h-3.5 text-[#DCFCE7] opacity-85 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Star Tech Style Featured Categories Grid (মোবাইলে পারফেক্ট সাইজ ও অল ক্যাটাগরি সামনে) */}
            <div className="bg-white border border-[#DCE7F2] hover:border-[#123A70]/40 rounded-2xl p-2.5 sm:p-3.5 shadow-sm transition-all space-y-2">
              
              {/* Category Box Header */}
              <div className="flex items-center justify-between border-b border-[#DCE7F2] pb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#147A43]" />
                  <h2 className="text-[11px] sm:text-xs font-black text-[#1F2937] font-tech uppercase tracking-wide">
                    Featured Product Categories
                  </h2>
                </div>
                <button
                  onClick={() => handleCategoryClick('All Products')}
                  className="text-[10.5px] font-bold text-[#123A70] hover:text-[#1A4B8C] flex items-center gap-0.5 cursor-pointer font-tech uppercase tracking-wider"
                >
                  <span>View All</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Star Tech Graphic Logo Grid - Clean English Only (Star Tech Style) */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1.5 sm:gap-2">
                {STAR_TECH_CATEGORIES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleCategoryClick(item.category, item.searchQuery)}
                      className="group relative flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#F7FAFC] hover:bg-[#EFF5FB] border border-[#DCE7F2] hover:border-[#123A70]/45 hover:shadow-2xs transition-all duration-200 cursor-pointer text-center"
                      title={item.name}
                    >
                      {item.badge && (
                        <span className="absolute -top-1 right-1 bg-[#147A43] text-white text-[7.5px] sm:text-[8px] font-bold px-1.5 py-0.2 rounded-full shadow-2xs">
                          {item.badge}
                        </span>
                      )}

                      {/* Graphic Icon like Star Tech - Compact size */}
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white group-hover:bg-[#EAF6EF] border border-[#DCE7F2] group-hover:border-[#147A43]/40 flex items-center justify-center text-[#123A70] group-hover:text-[#147A43] group-hover:scale-105 transition-all shadow-2xs mb-1">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.8]" />
                      </div>

                      {/* Category English Name (Only English - Star Tech Style) */}
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#1F2937] group-hover:text-[#123A70] leading-tight transition-colors line-clamp-1 font-tech">
                        {item.name}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* CTA Buttons - 2 Clean Lines: Line 1 (Call + WhatsApp), Line 2 (Products + Facebook) */}
            <div className="space-y-2 sm:space-y-2.5 pt-2 max-w-xl">
              {/* Line 1: Call and WhatsApp in One Line */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-stretch rounded-xl bg-[#123A70] p-0.5 shadow-sm transition-all transform hover:-translate-y-0.5">
                  <a
                    href={`tel:${activeCompany.phone || '01790139333'}`}
                    id="hero-call-now-btn"
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-l-lg sm:rounded-l-xl text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-blue-100 shrink-0" />
                    <div className="text-left flex flex-col justify-center leading-tight">
                      <span className="text-[9px] sm:text-[10px] text-blue-100 font-bold uppercase tracking-wider">কল করুন</span>
                      <span className="font-extrabold text-sm sm:text-base md:text-lg font-mono tracking-tight text-white">
                        {activeCompany.phoneFormatted || activeCompany.phone || '01790-139333'}
                      </span>
                    </div>
                  </a>
                  {activeCompany.secondaryPhone && (
                    <a
                      href={`tel:${activeCompany.secondaryPhone}`}
                      className="px-2 py-2 sm:py-2.5 bg-[#1A4B8C] hover:bg-[#123A70] text-[10px] sm:text-xs font-mono font-bold text-blue-100 hover:text-white transition-colors border-l border-white/25 flex items-center justify-center rounded-r-lg sm:rounded-r-xl"
                      title={`Secondary: ${activeCompany.secondaryPhone}`}
                    >
                      <span>২য়</span>
                    </a>
                  )}
                </div>

                <a
                  href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('আসসালামু আলাইকুম, আমি সিসিটিভি ও সিকিউরিটি সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-btn"
                  className="flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] text-white shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0 text-[#DCFCE7]" />
                  <div className="text-left flex flex-col justify-center leading-tight">
                    <span className="text-[9px] sm:text-[10px] text-[#DCFCE7] font-bold uppercase tracking-wider">WhatsApp</span>
                    <span className="font-extrabold text-sm sm:text-base md:text-lg font-mono tracking-tight text-white">
                      {activeCompany.phoneFormatted || activeCompany.phone || '01790-139333'}
                    </span>
                  </div>
                </a>
              </div>

              {/* Line 2: Facebook Page (compact left) + Location: Jahaj Company Mor, Rangpur (expanded right) */}
              <div className="flex items-stretch gap-1.5 sm:gap-2.5">
                <a
                  href={activeCompany.facebook || "https://www.facebook.com/profile.php?id=100014153359472"}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-facebook-btn"
                  className="shrink-0 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  title="Facebook Page"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
                  <span className="whitespace-nowrap font-bangla text-xs sm:text-sm">ফেসবুক পেজ</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Jahaj+Company+Mor,+Rangpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-location-btn"
                  className="flex-1 min-w-0 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-2 sm:px-3 rounded-xl bg-white hover:bg-[#EFF5FB] border border-[#DCE7F2] hover:border-[#123A70]/45 text-[#1F2937] shadow-xs transition-all transform hover:-translate-y-0.5 group cursor-pointer"
                  title="Jahaj Company Mor, Rangpur"
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#147A43] group-hover:scale-110 shrink-0 transition-transform" />
                  <span className="whitespace-nowrap font-bold text-[11px] sm:text-xs md:text-sm text-[#1F2937] group-hover:text-[#123A70]">
                    Jahaj Company Mor, Rangpur
                  </span>
                </a>
              </div>
            </div>

            {/* Trust Badges - Single Slim Horizontal Box (একক ঘর, পাতালি, ছোট ও চিকন) */}
            <div className="pt-2">
              <div className="bg-white border border-[#DCE7F2] rounded-xl py-1 sm:py-1.5 px-2 sm:px-3 shadow-2xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 items-center">
                  {trustBadges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center justify-center gap-1.5 py-0.5 px-1 text-[#1F2937] text-center"
                      >
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#147A43] shrink-0" />
                        <span className="font-bold text-[9.5px] sm:text-[11px] leading-tight truncate">
                          {badge.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Service Technician & Electrician Unified Services Card (বাম পাশের Featured Categories ঘরের সমান বরাবর অ্যালাইন) */}
          <div className="lg:col-span-5 relative space-y-2 sm:space-y-2.5 lg:pt-[86px]">
            
            {/* Top Header Box - Ultra-slim Long Horizontal Bar (লম্বা, পাতালি ও চিকন) */}
            <div className="bg-white border border-[#DCE7F2] rounded-xl py-1 sm:py-1.5 px-2.5 sm:px-3 shadow-2xs flex items-center justify-between gap-2 font-bangla">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <div className="p-1 rounded-lg bg-[#EAF6EF] text-[#147A43] shrink-0 border border-[#DCE7F2]">
                  <Shield className="w-3.5 h-3.5 text-[#147A43]" />
                </div>
                <div className="min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-1.5 leading-tight">
                  <h3 className="text-[#1F2937] font-black text-xs sm:text-[13px] font-bangla leading-tight truncate">
                    সার্ভিস টেকনিশিয়ান ও ইলেকট্রিশিয়ান
                  </h3>
                  <span className="text-[9px] sm:text-[10px] text-[#123A70] font-bold font-tech leading-none">
                    <span className="hidden sm:inline">• </span>Service Technician & Electrician
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-[#EAF6EF] text-[#147A43] text-[9px] sm:text-[10px] font-bold shrink-0 border border-[#DCE7F2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#147A43]" />
                <span className="whitespace-nowrap">ভেরিফাইড সার্ভিস</span>
              </div>
            </div>

            {/* Main Unified Services Box (পাতালি/হরাইজন্টাল ২-কলাম গ্রিড, কোনো ছবি নেই, বাড়তি লেখা নেই) */}
            <div className="bg-white border border-[#DCE7F2] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-sm font-bangla">
              
              {/* 8 Services Checklist - 2 Columns Grid on both Mobile and Desktop (পাতালি/হরাইজন্টাল) */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {highlightPoints.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-[#F7FAFC] hover:bg-[#EFF5FB] border border-[#DCE7F2] hover:border-[#123A70]/45 transition-all shadow-2xs group"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-white text-[#147A43] flex items-center justify-center shrink-0 border border-[#DCE7F2] group-hover:bg-[#147A43] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-[#1F2937] group-hover:text-[#123A70] leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};