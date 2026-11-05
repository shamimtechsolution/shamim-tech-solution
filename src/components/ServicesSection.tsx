import React, { useState } from 'react';
import { 
  Camera, 
  HardDrive, 
  Server, 
  Wifi, 
  Smartphone, 
  Wrench, 
  Cable, 
  KeyRound, 
  Fingerprint, 
  Network, 
  ShieldCheck, 
  Zap, 
  Phone, 
  Laptop, 
  Cpu, 
  MapPin, 
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  CalendarCheck,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO, DIVISION_DISTRICTS } from '../data/companyData';

interface ServicesSectionProps {
  onRequestService: (serviceName?: string) => void;
  onSelectDistrict?: (slug: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService, onSelectDistrict }) => {
  const [selectedFilter, setSelectedFilter] = useState('সকল');
  // Default to 3 columns on mobile as requested ('দরকার হলে ৩ কলাম করেন')
  const [mobileCols, setMobileCols] = useState<3 | 2>(3);

  const categories = [
    { label: 'সকল সার্ভিস (৮টি)', value: 'সকল' },
    { label: 'CCTV ক্যামেরা', value: 'CCTV' },
    { label: 'IP ক্যামেরা', value: 'IP Camera' },
    { label: 'অনলাইন ভিউ', value: 'Online' },
    { label: 'ইলেকট্রিশিয়ান', value: 'Electrician' },
    { label: 'PBX ইন্টারকম', value: 'PBX' },
    { label: 'অ্যাক্সেস কন্ট্রোল', value: 'Access' },
    { label: 'ল্যান নেটওয়ার্ক', value: 'Networking' },
    { label: 'বায়োমেট্রিক হাজিরা', value: 'Biometric' },
  ];

  const filteredServices = selectedFilter === 'সকল'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s: any) => {
        const target = selectedFilter.toLowerCase();
        return (
          (s.serviceType && s.serviceType.toLowerCase().includes(target)) ||
          (s.name && s.name.toLowerCase().includes(target)) ||
          (s.bnName && s.bnName.toLowerCase().includes(target)) ||
          (s.description && s.description.toLowerCase().includes(target)) ||
          (s.popularKeywords && s.popularKeywords.some((k: string) => k.toLowerCase().includes(target)))
        );
      });

  return (
    <section id="services" className="relative pt-4 pb-10 sm:pt-6 sm:pb-14 bg-gradient-to-b from-sky-50 via-blue-50/40 to-sky-100/60 border-b border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Category Filter Pills */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((c) => {
              const isSelected = selectedFilter === c.value;
              return (
                <button
                  key={c.value}
                  onClick={() => setSelectedFilter(c.value)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shadow-sm ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-600/25'
                      : 'bg-white hover:bg-sky-50 text-slate-700 border border-sky-200 hover:border-cyan-400'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Services Grid Header & Responsive View Controls */}
        <div className="flex items-center justify-between mb-3 px-0.5">
          <div className="flex items-center gap-2">
            <h3 className="text-xs sm:text-base font-bold text-slate-900">
              মূল সার্ভিসসমূহ ({filteredServices.length}টি)
            </h3>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold hidden sm:inline-block">
              ✓ ডেক্সটপ / বড় স্ক্রিন ভিউ
            </span>
            <span className="text-[10px] text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full font-bold sm:hidden">
              {mobileCols === 3 ? '৩ কলাম ভিউ' : '২ কলাম ভিউ'}
            </span>
          </div>

          {/* Quick Toggle for Mobile Phones: 3 Columns or 2 Columns */}
          <div className="flex items-center bg-sky-100 p-0.5 rounded-lg border border-sky-200 text-[10px] sm:hidden">
            <button
              onClick={() => setMobileCols(3)}
              className={`px-2 py-1 rounded-md font-bold transition-all cursor-pointer ${
                mobileCols === 3
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ৩ কলাম
            </button>
            <button
              onClick={() => setMobileCols(2)}
              className={`px-2 py-1 rounded-md font-bold transition-all cursor-pointer ${
                mobileCols === 2
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ২ কলাম
            </button>
          </div>
        </div>

        {/* 3. Main Services Grid:
            - On Mobile: 3 Columns by default (clear full names like 'অ্যাক্সেস কন্ট্রোল ডোর লক') or 2 columns
            - On Tablet (sm/md): 3 to 4 Columns
            - On Desktop/PC: 4 to 8 Columns
        */}
        <div className={`grid ${mobileCols === 3 ? 'grid-cols-3 gap-2 sm:gap-3' : 'grid-cols-2 gap-3 sm:gap-4'} sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 lg:gap-3.5`}>
          {filteredServices.map((service: any) => {
            return (
              <div
                key={service.id}
                className="bg-white border-2 border-sky-200/90 hover:border-cyan-500 rounded-xl sm:rounded-2xl p-2 sm:p-3 flex flex-col justify-between transition-all shadow-xs sm:shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div>
                  {/* Real Hardware Photo - Enlarged to fit card nicely */}
                  <div className={`w-full ${mobileCols === 3 ? 'h-24 sm:h-32 md:h-36' : 'h-32 sm:h-40'} rounded-lg sm:rounded-xl bg-white border border-sky-100 p-0.5 sm:p-1 flex items-center justify-center mb-2 overflow-hidden shadow-xs group-hover:border-cyan-400 transition-all`}>
                    <img
                      src={service.image || '/assets/aistudio/image_4e9a7e85.png'}
                      alt={service.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Full Bengali Name - e.g. অ্যাক্সেস কন্ট্রোল ডোর লক */}
                  <div className="min-h-[2.8rem] sm:min-h-[3.2rem] flex flex-col justify-start">
                    <h3 className="font-extrabold text-slate-900 group-hover:text-cyan-700 text-[11px] sm:text-xs md:text-sm leading-tight">
                      {service.bnName}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] text-cyan-700 font-semibold truncate block mt-0.5">
                      {service.name}
                    </span>
                  </div>

                  {service.description && (
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed hidden md:block">
                      {service.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1 mt-2 pt-1.5 border-t border-sky-100">
                  <button
                    onClick={() => onRequestService(service.name)}
                    className="flex-1 py-1.5 sm:py-2 px-1 rounded-md sm:rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-xs transition-all cursor-pointer active:scale-95"
                    title="সার্ভিস বুক করুন"
                  >
                    <CalendarCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>{mobileCols === 3 ? 'বুক' : 'বুক করুন'}</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`আসসালামু আলাইকুম, আমি "${service.bnName} (${service.name})" সার্ভিস সম্পর্কে জানতে আগ্রহী।`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-1.5 sm:py-2 sm:px-2.5 rounded-md sm:rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[10px] sm:text-xs flex items-center justify-center gap-1 shadow-xs transition-all text-center shrink-0 cursor-pointer active:scale-95"
                    title="WhatsApp এ যোগাযোগ করুন"
                  >
                    <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
                    <span>{mobileCols === 3 ? 'WA' : 'WhatsApp'}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Coverage Areas: Rangpur Division 8 Districts + Bogura + Dhaka (Image 1 এর মতো লম্বা পাতালি ঘর ও ২-কলাম গ্রিড) */}
        <div id="district-coverage" className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-sky-200">
          {/* Coverage Area Long Horizontal Box (লম্বা পাতালি ঘর - লেখা ঘরের ভেতরে) */}
          <div className="bg-white/95 border-2 border-sky-300 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 mb-3 sm:mb-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10.5px] sm:text-xs font-bold mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                <span>সার্ভিস এলাকা (Coverage Area)</span>
              </div>
              <h3 className="text-sm sm:text-lg font-black text-slate-900 font-tech leading-snug">
                অন-সাইট সার্ভিস এলাকা (রংপুর বিভাগ, বগুড়া ও ঢাকা)
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed font-bangla">
                রংপুর বিভাগের ৮টি জেলা, বগুড়া ও ঢাকাসহ যেকোনো প্রান্তে আমাদের দক্ষ টেকনিশিয়ান অন-সাইটে গিয়ে সিসিটিভি ইনস্টলেশন ও ইলেকট্রিক্যাল সার্ভিস প্রদান করে।
              </p>
            </div>
            <div className="shrink-0 flex items-center">
              <span className="text-[10px] sm:text-xs font-bold text-cyan-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>১০ জেলা কাভারেজ</span>
              </span>
            </div>
          </div>

          {/* Unified District Coverage Container Card (Image 1 এর মতো ২-কলাম ও লম্বা পাতালি অনুভূমিক ঘর) */}
          <div className="bg-white/95 border-2 border-cyan-400 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-lg shadow-sky-950/5 backdrop-blur-md font-bangla">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 md:grid-cols-2 lg:grid-cols-5">
              {DIVISION_DISTRICTS.map((district: any) => {
                const slug = district.enName.toLowerCase();
                return (
                  <div
                    key={district.id}
                    className="flex items-center justify-between gap-1.5 sm:gap-2 px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-lg sm:rounded-xl bg-sky-50/90 hover:bg-sky-100/90 border border-sky-200/80 hover:border-cyan-400 transition-all shadow-2xs group"
                  >
                    <a
                      href={`/service-area/${slug}`}
                      onClick={(e) => {
                        if (onSelectDistrict) {
                          e.preventDefault();
                          onSelectDistrict(slug);
                        }
                      }}
                      className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 cursor-pointer"
                      title={`${district.bnName} (${district.enName}) সার্ভিস পেজ দেখুন`}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white text-cyan-600 flex items-center justify-center shrink-0 border border-sky-200 group-hover:bg-cyan-600 group-hover:text-white transition-colors shadow-2xs">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col justify-center">
                        <span className="font-extrabold text-slate-900 group-hover:text-cyan-900 text-[11px] sm:text-xs md:text-sm leading-tight truncate">
                          {district.bnName}
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-cyan-700 font-semibold truncate leading-none mt-0.5">
                          {district.enName}
                        </span>
                      </div>
                    </a>

                    <div className="flex items-center gap-1 shrink-0">
                      <a
                        href={`/service-area/${slug}`}
                        onClick={(e) => {
                          if (onSelectDistrict) {
                            e.preventDefault();
                            onSelectDistrict(slug);
                          }
                        }}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center gap-0.5 shadow-2xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
                        title={`${district.bnName} পেজ দেখুন`}
                      >
                        <span>পেজ</span>
                        <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="p-1 rounded-md bg-white hover:bg-cyan-50 border border-sky-200 text-cyan-700 hover:text-cyan-900 transition-all text-center shrink-0 cursor-pointer shadow-2xs"
                        title="সরাসরি কল দিন"
                      >
                        <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-700" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};