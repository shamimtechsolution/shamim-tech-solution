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
  Activity,
  Tv
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
    "CCTV Installation",
    "Expert Technician",
    "Electrician & Wiring",
    "DVR/NVR Setup",
    "Access Control",
    "Networking & LAN"
  ];

  const trustBadges = [
    { label: "24/7 Support", icon: Headphones },
    { label: "Trusted Service", icon: Award },
    { label: "Affordable Price", icon: Tag },
    { label: "Professional Team", icon: Users },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-200/70 via-blue-100/50 to-sky-100/60 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-sky-300/80 tech-grid-bg">
      {/* Background Decorative Soft Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-r from-cyan-400/25 via-sky-400/25 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 right-0 w-[450px] h-[450px] bg-gradient-to-br from-blue-500/20 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-88 h-88 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Security Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-sky-300 text-cyan-800 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600"></span>
              </span>
              <span>{activeCompany.name} • {activeCompany.location}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-tech">
              {activeContent?.heroTitle ? (
                <span>{activeContent.heroTitle}</span>
              ) : (
                <>
                  Professional{' '}
                  <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
                    CCTV & Security
                  </span>{' '}
                  System Solutions
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {activeContent?.heroSubtitle || "Professional CCTV Installation, Skilled Technician Support, Electrical Wiring & Security Systems for homes, commercial shops, factories, and offices across Rangpur."}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* Call Now Button - Dual Phone with 01790139333 in front of 01865321530 */}
              <div className="flex items-stretch rounded-xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 p-0.5 shadow-lg shadow-cyan-600/25 transition-all transform hover:-translate-y-0.5">
                <a
                  href={`tel:${activeCompany.phone || '01790139333'}`}
                  id="hero-call-now-btn"
                  className="flex items-center gap-2 px-5 py-3 rounded-l-[10px] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm tracking-wide transition-all"
                  title="Call Primary: 01790139333"
                >
                  <Phone className="w-4 h-4 fill-current animate-pulse text-cyan-200" />
                  <span>Call: {activeCompany.phone || '01790-139333'}</span>
                </a>
                <div className="w-[1px] bg-cyan-400/40 my-1" />
                <a
                  href={`tel:${activeCompany.secondaryPhone || '01865321530'}`}
                  className="flex items-center px-3 py-3 rounded-r-[10px] bg-blue-700/60 hover:bg-blue-600/80 text-xs font-mono font-bold text-cyan-100 hover:text-white transition-colors"
                  title="Call Secondary: 01865321530"
                >
                  <span>{activeCompany.secondaryPhone || '01865-321530'}</span>
                </a>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('Hello Shamim Tech Solution, I am interested in CCTV and security system services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm tracking-wide shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp ({activeCompany.phoneFormatted || activeCompany.whatsapp || '01790-139333'})</span>
              </a>

              {/* View Products Button */}
              <button
                onClick={onViewProducts}
                id="hero-view-products-btn"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-cyan-800 hover:text-cyan-900 border border-sky-300 hover:border-cyan-500 text-sm font-bold transition-all shadow-sm cursor-pointer"
              >
                <Package className="w-4 h-4 text-cyan-600" />
                <span>View Products</span>
              </button>
            </div>

            {/* 4 Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/90 border border-sky-200 text-xs text-slate-700 shadow-sm"
                  >
                    <div className="p-1.5 rounded-md bg-sky-100 text-cyan-700">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-[11px] sm:text-xs">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Bengali Slogan Card */}
            <div className="mb-4 bg-white/95 border-2 border-cyan-400 rounded-2xl p-4 sm:p-5 shadow-lg shadow-sky-950/10 backdrop-blur-md">
              <div className="flex items-start justify-between gap-2 border-b border-sky-100 pb-3 mb-3">
                <div>
                  <h3 className="text-cyan-800 font-bold text-lg sm:text-xl font-bangla tracking-wide">
                    {COMPANY_INFO.bengaliSlogan}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-tech uppercase tracking-wider font-semibold">
                    Official STS Security Assurance
                  </p>
                </div>
                <div className="p-2 rounded-full bg-sky-100 text-cyan-700 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              {/* Service Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {highlightPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span className="font-semibold">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Mockup Display */}
            <div className="relative rounded-2xl bg-white border border-sky-200 p-4 shadow-xl overflow-hidden group">
              {/* Surveillance Live Monitor Simulation */}
              <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-2 shadow-inner">
                {/* Monitor Top bar */}
                <div className="flex items-center justify-between pb-1.5 px-1 text-[10px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>STS SURVEILLANCE MATRIX • LIVE [REC]</span>
                  </div>
                  <span className="text-red-400 font-bold animate-pulse">● 24 FPS</span>
                </div>

                {/* 4-Camera Live Grid View */}
                <div className="grid grid-cols-2 gap-1.5 rounded-lg overflow-hidden bg-slate-900">
                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 01 Entrance"
                      className="w-full h-full object-cover opacity-85 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 01 - MAIN GATE
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 02 Server Rack"
                      className="w-full h-full object-cover opacity-85 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 02 - DVR RACK
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 03 Perimeter"
                      className="w-full h-full object-cover opacity-85 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 03 - STORE FRONT
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 04 LAN Hub"
                      className="w-full h-full object-cover opacity-85 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 04 - HARAGACH HUB
                    </div>
                  </div>
                </div>

                {/* DVR Console Bar Underneath Monitor */}
                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="font-semibold text-slate-200">NVR/DVR 16-CH READY</span>
                  </div>
                  <button 
                    onClick={onRequestQuote}
                    className="text-cyan-400 hover:text-cyan-300 underline font-semibold cursor-pointer"
                  >
                    Request Installation Quote →
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
