import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Monitor, 
  HelpCircle, 
  CheckCircle, 
  ExternalLink, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Share2,
  FileCheck
} from 'lucide-react';
import { SOFTWARE_DOWNLOADS, COMPANY_INFO } from '../data/companyData';
import { STSLogo } from './STSLogo';
import { DownloadItem, CompanyInfo } from '../types';

interface SoftwareDownloadsProps {
  onOrderNow: () => void;
  downloads?: DownloadItem[];
  companyInfo?: CompanyInfo;
}

export const SoftwareDownloads: React.FC<SoftwareDownloadsProps> = ({ 
  onOrderNow,
  downloads,
  companyInfo: passedCompanyInfo
}) => {
  const [downloadModalItem, setDownloadModalItem] = useState<DownloadItem | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const activeCompany = passedCompanyInfo || COMPANY_INFO;
  const activeDownloads = downloads && downloads.length > 0 
    ? downloads.filter(d => d.isActive !== false) 
    : SOFTWARE_DOWNLOADS;

  // Trigger download action: If downloadUrl exists, trigger download via anchor tag; else open helper dialog
  const handleDownloadClick = (item: DownloadItem) => {
    if (item.downloadUrl && !item.downloadUrl.startsWith('#') && item.downloadUrl.trim() !== '') {
      const a = document.createElement('a');
      a.href = item.downloadUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      const filename = item.originalFileName || item.storedFileName || `${item.title.replace(/\s+/g, '_')}.zip`;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (document.body.contains(a)) {
          document.body.removeChild(a);
        }
      }, 300);

      setDownloadNotice(`Starting download: ${item.title}`);
      setTimeout(() => setDownloadNotice(null), 4000);
    } else {
      setDownloadModalItem(item);
    }
  };

  // Helper to download the official STS Shamim Tech Solution Logo/Profile SVG file
  const handleDownloadProfilePicture = () => {
    // Generate clean SVG file blob of the official STS Logo
    const svgContent = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="stsBgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0a1936" />
          <stop offset="70%" stop-color="#040a18" />
          <stop offset="100%" stop-color="#02050e" />
        </radialGradient>
        <linearGradient id="stsCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#22d3ee" />
          <stop offset="50%" stop-color="#06b6d4" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#stsBgGrad)" stroke="#06b6d4" stroke-width="5" />
      <circle cx="200" cy="200" r="172" stroke="url(#stsCyanGrad)" stroke-width="3" />
      <path d="M200 95 L285 130 C285 240 200 295 200 295 C200 295 115 240 115 130 Z" fill="#08142c" stroke="url(#stsCyanGrad)" stroke-width="5" />
      <rect x="150" y="132" width="100" height="34" rx="17" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
      <text x="200" y="156" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="900" font-family="sans-serif" letter-spacing="3">STS</text>
      <text x="200" y="205" text-anchor="middle" fill="#ffffff" font-size="38" font-weight="900" font-family="sans-serif" letter-spacing="2">SHAMIM</text>
      <text x="200" y="232" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="800" font-family="sans-serif" letter-spacing="4">TECH SOLUTION</text>
      <path d="M75 325 Q200 365 325 325 L335 350 Q200 395 65 350 Z" fill="#0369a1" stroke="#06b6d4" stroke-width="2" />
      <text x="200" y="350" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="700" font-family="sans-serif" font-style="italic">Your Safety Our Priority</text>
    </svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'STS-SHAMIM-TECH-SOLUTION-OFFICIAL-PROFILE.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadNotice('Official STS Profile Logo downloaded successfully!');
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <section id="downloads" className="py-16 bg-[#050b18] border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-bold font-tech uppercase tracking-wider mb-2">
            <Download className="w-3.5 h-3.5" />
            <span>Tools, Utilities & Documents</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-tech">
            Software & Downloads
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Get the necessary software, device configuration tools, and official STS documentation for your CCTV cameras, DVR/NVR, and attendance machines.
          </p>
        </div>

        {/* 3-Column Grid matching Design Reference: Software list + Profile Download + How to Order */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Column 1: Software Downloads List (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#060c1d] border border-cyan-900/50 p-5 sm:p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white font-tech flex items-center gap-2">
                  <Download className="w-5 h-5 text-cyan-400" />
                  Software & Downloads
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Essential tools for PC/Laptop configuration
                </p>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                {activeDownloads.length} Files
              </span>
            </div>

            {/* List of Cards */}
            <div className="space-y-3">
              {activeDownloads.map((soft) => (
                <div
                  key={soft.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {soft.fileType.includes('PDF') ? (
                        <FileText className="w-5 h-5" />
                      ) : (
                        <Monitor className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-tech line-clamp-1">
                          {soft.title}
                        </h4>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-cyan-400 font-semibold">{soft.version || 'v1.0'}</span>
                        <span>•</span>
                        <span>{soft.fileSize || 'Software'}</span>
                        {soft.originalFileName && (
                          <>
                            <span>•</span>
                            <span className="font-mono text-slate-300 truncate max-w-[140px]">{soft.originalFileName}</span>
                          </>
                        )}
                        {soft.category && (
                          <>
                            <span>•</span>
                            <span className="text-cyan-400 font-semibold">{soft.category}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadClick(soft)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer shrink-0"
                    title={`Download ${soft.title}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{soft.buttonLabel || 'Download'}</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Need Help Center Card */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white font-tech">Need Help Setting Up Software?</div>
                <div className="text-[11px] text-slate-400">
                  Technician Shamim provides TeamViewer / AnyDesk remote setup.
                </div>
              </div>
              <a
                href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('Hello Shamim Tech Solution, I need help downloading/installing CCTV software.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Profile Download Card (lg:col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#060c1d] border border-cyan-900/50 p-6 shadow-xl flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>Official Identity & Branding</span>
              </div>
              <h3 className="text-xl font-bold text-white font-tech">
                Download Our Profile
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Download official STS Shamim Tech Solution logo and company credentials for your records or verification.
              </p>

              {/* Centered Large Emblem Logo */}
              <div className="my-8 flex justify-center">
                <div className="relative p-3 rounded-full bg-slate-950/80 border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)] group hover:scale-105 transition-transform">
                  <STSLogo size="xl" showText={false} />
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-300">
                <div className="font-bold text-white font-tech text-sm">{COMPANY_INFO.name}</div>
                <div className="text-cyan-400 font-semibold">{COMPANY_INFO.tagline}</div>
                <div className="text-[11px] text-slate-400 italic">"{COMPANY_INFO.slogan}"</div>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <button
                onClick={handleDownloadProfilePicture}
                id="download-profile-picture-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Profile Picture / Official Logo</span>
              </button>

              {downloadNotice && (
                <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-semibold animate-fadeIn">
                  {downloadNotice}
                </div>
              )}
            </div>
          </div>

          {/* Column 3: How to Order (lg:col-span-3) */}
          <div className="lg:col-span-3 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#060c1d] border border-cyan-900/50 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Simple 4-Step Process</span>
              </div>
              <h3 className="text-xl font-bold text-white font-tech mb-5">
                How to Order?
              </h3>

              {/* 4 Steps */}
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Browse Products",
                    desc: "Choose your required CCTV cameras, DVR/NVR or security items."
                  },
                  {
                    step: "2",
                    title: "Add to Cart",
                    desc: "Add products to your cart and adjust desired quantities."
                  },
                  {
                    step: "3",
                    title: "Fill Order Form",
                    desc: "Provide your delivery address, mobile, and WhatsApp number."
                  },
                  {
                    step: "4",
                    title: "Pay & Confirm",
                    desc: "Confirm via WhatsApp or Cash on Delivery upon inspection."
                  }
                ].map((st) => (
                  <div key={st.step} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 font-mono shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                      {st.step}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-tech">
                        {st.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOrderNow}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-600/20 hover:bg-cyan-500 border border-cyan-500/50 text-cyan-300 hover:text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Download Instruction Modal */}
        {downloadModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div 
              className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900 to-[#050b18] border border-cyan-500/40 p-6 shadow-2xl text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setDownloadModalItem(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-4">
                <Download className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white font-tech">
                {downloadModalItem.title}
              </h3>
              <p className="text-xs text-cyan-300 font-mono mt-0.5">
                Version: {downloadModalItem.version} • Size: {downloadModalItem.fileSize}
              </p>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {downloadModalItem.description}
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1 text-slate-400">
                <div><strong className="text-slate-200">Compatible:</strong> {downloadModalItem.compatibleDevice}</div>
                <div><strong className="text-slate-200">File Type:</strong> {downloadModalItem.fileType}</div>
              </div>

              <div className="mt-5 space-y-2">
                <a
                  href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent(`Hello Shamim Tech Solution, please send me the direct setup link/file for: ${downloadModalItem.title} (${downloadModalItem.version}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs"
                >
                  <Share2 className="w-4 h-4 fill-current" />
                  <span>Request File Directly on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    // Open a simulated direct download trigger or informative alert
                    alert(`Starting download for ${downloadModalItem.title} (${downloadModalItem.version}). For latest firmware, contact Shamim Tech Solution.`);
                    setDownloadModalItem(null);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs cursor-pointer"
                >
                  Download File Directly ({downloadModalItem.fileSize})
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
