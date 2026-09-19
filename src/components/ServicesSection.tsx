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
    <div id="services" className="relative py-16 bg-[#060c1d] border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Services Bar (Horizontal Cards as shown in reference) */}
        <div className="mb-16">
          <div className="text-center sm:text-left mb-6">
            <div className="inline-block text-xs uppercase font-bold tracking-widest text-cyan-400 font-tech">
              Fast Response • Certified Technician
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-tech mt-1">
              Our Quick Services
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
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
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-900/40 hover:border-cyan-400/80 transition-all group cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 group-hover:bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 transition-colors border border-cyan-500/30">
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-tech leading-tight mb-1">
                    {qs.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {qs.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Services Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-t border-slate-800/80 pt-12">
          <div>
            <span className="text-cyan-400 font-tech uppercase text-xs tracking-widest font-bold">
              Specialized Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-tech mt-1">
              Security & CCTV Services
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Every installation includes precision cable concealment, correct camera angles, and mobile remote live view demonstration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
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
                className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#040916] border border-cyan-900/40 hover:border-cyan-400/60 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.18)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-tech mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-1.5 mb-6 pt-2 border-t border-slate-800/60">
                    {service.keyFeatures.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Request Service Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onRequestService(service.name)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cyan-600/20 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/40 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I want to book the service: ${service.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-950/60 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-semibold transition-all"
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
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-cyan-950/80 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-tech">
              CCTV Camera Not Working Or Video Loss?
            </h4>
            <p className="text-slate-300 text-sm mt-0.5">
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
