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
  Check,
  ArrowRight,
  MessageSquare,
  Phone,
  MapPin,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO, DIVISION_DISTRICTS } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onRequestService: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');

  // Mapping icon names to Lucide icons
  const iconComponents: Record<string, React.ElementType> = {
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
    Phone
  };

  // Quick service highlights
  const quickServices = [
    { title: "CCTV Installation", icon: Camera, desc: "Professional camera mounting & wiring" },
    { title: "Electrician & Wiring", icon: Zap, desc: "House, office & industrial electrical solutions" },
    { title: "PABX & Intercom", icon: Phone, desc: "Office intercom & telephone exchange setup" },
    { title: "Access Control", icon: KeyRound, desc: "Magnetic locks & biometric fingerprint" },
    { title: "DVR/NVR Setup", icon: HardDrive, desc: "Surveillance recording & storage configuration" },
    { title: "IT & Networking", icon: Network, desc: "LAN cables, router & switch configuration" },
  ];

  const categories = [
    'All',
    'Installation',
    'Electrician',
    'PABX & Intercom',
    'Access Control',
    'Technician',
    'Networking',
    'Accessories'
  ];

  const filteredServices = selectedFilter === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.serviceType.toLowerCase().includes(selectedFilter.toLowerCase()) || s.name.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div id="services" className="relative py-16 bg-gradient-to-b from-sky-100/70 via-blue-100/50 to-sky-50/80 border-b border-sky-300/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Quick Services Bar (Horizontal Cards as shown in reference) */}
        <div className="mb-16">
          <div className="text-center sm:text-left mb-6">
            <div className="inline-block text-xs uppercase font-bold tracking-widest text-cyan-700 font-tech">
              Fast Response • Certified Technician
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-tech mt-1">
              Our Quick Services
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Complete security solutions for your home, office, shop & business in Haragach, Rangpur.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickServices.map((qs, i) => {
              const Icon = qs.icon;
              return (
                <button
                  key={i}
                  onClick={() => onRequestService(qs.title)}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-b from-sky-50 via-white to-blue-50/60 hover:from-cyan-50 hover:to-sky-100/90 border-2 border-sky-200 hover:border-cyan-500 transition-all group cursor-pointer shadow-sm hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center mb-3 transition-transform group-hover:scale-110 shadow-md shadow-cyan-500/25">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-tech leading-tight mb-1 group-hover:text-cyan-700">
                    {qs.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {qs.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Services Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-t border-sky-200/80 pt-12">
          <div>
            <span className="text-cyan-700 font-tech uppercase text-xs tracking-widest font-bold">
              Specialized Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech mt-1">
              Security & CCTV Services
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Every installation includes precision cable concealment, correct camera angles, and mobile remote live view demonstration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 text-white shadow-md shadow-cyan-600/30'
                    : 'bg-white text-slate-700 hover:text-cyan-800 border-2 border-sky-200 hover:border-cyan-400 hover:bg-sky-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = iconComponents[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30 border-2 border-sky-200/90 hover:border-cyan-500 transition-all shadow-md hover:shadow-2xl hover:shadow-cyan-500/15 group relative overflow-hidden"
              >
                {/* Top Colorful Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 group-hover:h-2 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-md shadow-cyan-500/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-tech mb-2 group-hover:text-cyan-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-sky-200/60">
                    {service.keyFeatures.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Request Service Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-sky-200/60">
                  <button
                    onClick={() => onRequestService(service.name)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-cyan-600/20 transform hover:-translate-y-0.5"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I want to book the service: ${service.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-md shadow-emerald-500/20 transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Service Banner Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-cyan-50 border border-sky-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 font-tech">
              CCTV Camera Not Working Or Video Loss?
            </h4>
            <p className="text-slate-600 text-sm mt-0.5">
              Call technician Shamim for immediate troubleshooting in Haragach, Rangpur and surrounding areas.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 8 Districts Service Coverage in Rangpur Division (User Requested Feature) */}
        <div id="district-coverage" className="mt-16 pt-12 border-t-2 border-sky-200/90">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider border border-cyan-300 shadow-sm mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                <span>Rangpur Division Service Area • রংপুর বিভাগ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-tech">
                রংপুর বিভাগের ৮টি জেলায় আমাদের সার্ভিসসমূহ
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl font-bangla">
                রংপুর সিটি ও সদর, দিনাজপুর, লালমনিরহাট, কুড়িগ্রাম, নীলফামারী, গাইবান্ধা, ঠাকুরগাঁও ও পঞ্চগড় — সব জেলাতেই দক্ষ টেকনিশিয়ান দ্বারা সিসিটিভি ক্যামেরা, ইলেকট্রিশিয়ান, PABX ইন্টারকম, অ্যাক্সেস কন্ট্রোল ও আইটি সার্ভিস প্রদান করা হয়।
              </p>
            </div>

            {/* Quick District Filter Buttons */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedDistrict('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedDistrict === 'all'
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'bg-white text-slate-700 hover:text-cyan-800 border border-sky-200 hover:bg-sky-50'
                }`}
              >
                সব জেলা (All)
              </button>
              {DIVISION_DISTRICTS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDistrict(d.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedDistrict === d.id
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'bg-white text-slate-700 hover:text-cyan-800 border border-sky-200 hover:bg-sky-50'
                  }`}
                >
                  {d.bnName}
                </button>
              ))}
            </div>
          </div>

          {/* 8 Districts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIVISION_DISTRICTS
              .filter(d => selectedDistrict === 'all' || d.id === selectedDistrict)
              .map((district) => (
                <div
                  key={district.id}
                  className="p-5 rounded-2xl bg-white border-2 border-sky-200/90 hover:border-cyan-500 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-sky-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base font-bangla group-hover:text-cyan-700 transition-colors">
                            {district.bnName} — <span className="font-tech text-xs text-slate-500">{district.enName}</span>
                          </h3>
                          <div className="text-[11px] font-bold text-cyan-700 font-tech">
                            Technician {district.enName} • টেকনিশিয়ান সার্ভিস
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        অন-সাইট
                      </span>
                    </div>

                    {/* Services Included */}
                    <div className="mt-3 space-y-1.5">
                      <p className="text-[11px] font-bold text-cyan-800 uppercase font-tech tracking-wider">
                        উপলব্ধ সার্ভিসসমূহ:
                      </p>
                      {district.services.map((srv, sidx) => (
                        <div key={sidx} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                          <span className="font-medium text-[11px] sm:text-xs">{srv}</span>
                        </div>
                      ))}
                    </div>

                    {/* Popular Search Keywords */}
                    <div className="mt-3.5 pt-2.5 border-t border-sky-100">
                      <p className="text-[10px] text-slate-400 uppercase font-mono font-bold mb-1">
                        জনপ্রিয় সার্চ কীওয়ার্ড:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {district.popularKeywords.slice(0, 6).map((kw, kwIdx) => (
                          <span
                            key={kwIdx}
                            className="text-[10px] bg-sky-50 text-sky-800 px-2 py-0.5 rounded border border-sky-200 font-medium"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-sky-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onRequestService(`CCTV Service in ${district.enName} (${district.bnName})`)}
                      className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-bold transition-all shadow-sm"
                    >
                      <span>সার্ভিস বুক</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-slate-100 hover:bg-sky-100 text-slate-800 text-[11px] font-bold border border-sky-200 transition-all"
                    >
                      <PhoneCall className="w-3 h-3 text-cyan-600" />
                      <span>কল দিন</span>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};
