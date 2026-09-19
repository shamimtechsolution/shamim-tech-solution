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
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#060c1d] via-[#081229] to-[#040814] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-cyan-950/60 tech-grid-bg">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Security Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{activeCompany.name} • {activeCompany.location}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl xl:text-5xl font-black text-white tracking-tight leading-[1.15] font-tech">
              {activeContent?.heroTitle ? (
                <span>{activeContent.heroTitle}</span>
              ) : (
                <>
                  Professional{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    CCTV & Security
                  </span>{' '}
                  System Solutions
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {activeContent?.heroSubtitle || "Professional CCTV Installation, Skilled Technician Support, Electrical Wiring & Security Systems for homes, commercial shops, factories, and offices across Rangpur."}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* Call Now Button */}
              <a
                href={`tel:${activeCompany.phone}`}
                id="hero-call-now-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Now: {activeCompany.phone}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('Hello Shamim Tech Solution, I am interested in CCTV and security system services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp ({activeCompany.phone})</span>
              </a>

              {/* View Products Button */}
              <button
                onClick={onViewProducts}
                id="hero-view-products-btn"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 text-sm font-semibold transition-all cursor-pointer"
              >
                <Package className="w-4 h-4 text-cyan-400" />
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
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <div className="p-1.5 rounded-md bg-cyan-950/80 text-cyan-400">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-[11px] sm:text-xs">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Hero Visual Showcase (CCTV Cameras, DVR, Live Monitor & Bengali Slogan Card) */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Bengali Slogan Card (matching top right of image) */}
            <div className="mb-4 bg-gradient-to-br from-[#0a1835]/95 to-[#040c1f]/95 border-2 border-cyan-500/60 rounded-2xl p-4 sm:p-5 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-md">
              <div className="flex items-start justify-between gap-2 border-b border-cyan-900/60 pb-3 mb-3">
                <div>
                  <h3 className="text-cyan-300 font-bold text-lg sm:text-xl font-bangla tracking-wide">
                    {COMPANY_INFO.bengaliSlogan}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-tech uppercase tracking-wider">
                    Official STS Security Assurance
                  </p>
                </div>
                <div className="p-2 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
              </div>

              {/* Service Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {highlightPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Mockup Display (CCTV Cameras, DVR, LED Monitor with Live Feeds) */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#030814] border border-cyan-500/30 p-4 shadow-2xl overflow-hidden group">
              {/* Surveillance Live Monitor Simulation */}
              <div className="relative rounded-xl bg-slate-950 border border-slate-700 p-2 shadow-inner">
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
                      className="w-full h-full object-cover opacity-80 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 01 - MAIN GATE
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 02 Server Rack"
                      className="w-full h-full object-cover opacity-80 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 02 - DVR RACK
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 03 Perimeter"
                      className="w-full h-full object-cover opacity-80 group-hover/cam:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-1 left-1.5 text-[9px] font-mono bg-black/70 px-1 py-0.5 rounded text-cyan-300">
                      CAM 03 - STORE FRONT
                    </div>
                  </div>

                  <div className="relative aspect-video bg-slate-900 overflow-hidden group/cam">
                    <img
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80"
                      alt="CAM 04 LAN Hub"
                      className="w-full h-full object-cover opacity-80 group-hover/cam:scale-105 transition-transform"
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
                    <span className="font-semibold">NVR/DVR 16-CH READY</span>
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
