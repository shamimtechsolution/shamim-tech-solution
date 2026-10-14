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
  Phone
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onRequestService: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

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
    Zap
  };

  // Quick service highlights
  const quickServices = [
    { title: "CCTV Installation", icon: Camera, desc: "Professional camera mounting & wiring" },
    { title: "Electrician & Wiring", icon: Zap, desc: "House, office & industrial electrical solutions" },
    { title: "Expert Technician", icon: Wrench, desc: "Fast hardware diagnostic & repair" },
    { title: "DVR/NVR Setup", icon: HardDrive, desc: "Surveillance recording & storage configuration" },
    { title: "IP Camera", icon: Wifi, desc: "High-definition PoE & PTZ digital cameras" },
    { title: "Access Control", icon: KeyRound, desc: "Magnetic locks & biometric security" },
  ];

  const categories = ['All', 'Installation', 'Electrician', 'Technician', 'Repair & Support', 'Biometrics', 'Networking'];

  const filteredServices = selectedFilter === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.serviceType.toLowerCase().includes(selectedFilter.toLowerCase()));

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

      </div>
    </div>
  );
};
