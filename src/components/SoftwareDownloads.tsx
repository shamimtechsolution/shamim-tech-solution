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

  // Trigger download action
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

      setDownloadNotice(`ডাউনলোড শুরু হচ্ছে: ${item.title}`);
      setTimeout(() => setDownloadNotice(null), 4000);
    } else {
      setDownloadModalItem(item);
    }
  };

  // Helper to download the official STS Shamim Tech Solution Logo/Profile SVG file
  const handleDownloadProfilePicture = () => {
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

    setDownloadNotice('অফিসিয়াল STS লোগো সফলভাবে ডাউনলোড হয়েছে!');
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <section id="downloads" className="relative py-12 sm:py-16 bg-gradient-to-b from-sky-100/70 via-blue-100/50 to-sky-50/80 border-b border-sky-300/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-sky-400/25 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider mb-2">
            <Download className="w-3.5 h-3.5 text-cyan-600" />
            <span>টুলস, সফটওয়্যার ও ডকুমেন্টস</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-tech">
            Software & Downloads (সফটওয়্যার ডাউনলোড)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            সিসিটিভি ক্যামেরা, DVR/NVR, আইপি ক্যামেরা ও বায়োমেট্রিক হাজিরা মেশিনের পিসি/ল্যাপটপ কনফিগারেশন সফটওয়্যার এবং ইউজার গাইড ডাউনলোড করুন।
          </p>
        </div>

        {/* 3-Column Grid: Software list + Profile Download + How to Order */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Column 1: Software Downloads List (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30 border-2 border-sky-200/90 p-4 sm:p-6 shadow-md space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
            <div className="flex items-center justify-between border-b border-sky-200/80 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-tech flex items-center gap-2">
                  <Download className="w-5 h-5 text-cyan-600" />
                  <span>সফটওয়্যার ও টুলস তালিকা</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  পিসি ও ল্যাপটপের প্রয়োজনীয় কনফিগারেশন ফাইল
                </p>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm shrink-0">
                {activeDownloads.length} টি ফাইল
              </span>
            </div>

            {/* List of Cards - Fully mobile responsive without cut-off titles */}
            <div className="space-y-3">
              {activeDownloads.map((soft) => (
                <div
                  key={soft.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl bg-white border-2 border-sky-200/80 hover:border-cyan-500 transition-all shadow-sm hover:shadow-md hover:shadow-cyan-500/10 group"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm mt-0.5 sm:mt-0">
                      {soft.fileType.includes('PDF') ? (
                        <FileText className="w-5 h-5" />
                      ) : (
                        <Monitor className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors font-tech leading-snug break-words">
                        {soft.title}
                      </h4>
                      <div className="text-[11px] text-slate-500 flex items-center gap-2 flex-wrap mt-1">
                        <span className="font-mono text-cyan-700 font-bold bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">{soft.version || 'v1.0'}</span>
                        <span>•</span>
                        <span className="font-medium text-slate-600">{soft.fileSize || 'Software'}</span>
                        {soft.category && (
                          <>
                            <span>•</span>
                            <span className="text-cyan-700 font-semibold">{soft.category}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDownloadClick(soft)}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all cursor-pointer shrink-0 shadow-md shadow-emerald-500/20"
                    title={`ডাউনলোড ${soft.title}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{soft.buttonLabel || 'Download'}</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Need Help Center Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border-2 border-sky-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <div className="text-xs font-bold text-slate-900 font-tech">সফটওয়্যার সেটআপে সাহায্য চান?</div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  টেকনিশিয়ান শামীম TeamViewer / AnyDesk এর মাধ্যমে রিমোট কনফিগারেশন সাপোর্ট দেয়।
                </div>
              </div>
              <a
                href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent('আসসালামু আলাইকুম শামীম টেক সলিউশন, আমার সিসিটিভি সফটওয়্যার সেটআপে সাহায্য প্রয়োজন।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shrink-0 shadow-md shadow-cyan-600/20"
              >
                WhatsApp এ মেসেজ দিন
              </a>
            </div>
          </div>

          {/* Column 2: Profile Download Card (lg:col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30 border-2 border-sky-200/90 p-5 sm:p-6 shadow-md flex flex-col justify-between text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-center gap-2 text-cyan-700 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4 text-cyan-600" />
                <span>অফিসিয়াল পরিচিতি ও ব্র্যান্ডিং</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-tech">
                Download Our Profile (লোগো ডাউনলোড)
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                আপনার অফিসিয়াল রেকর্ড ও ভেরিফিকেশনের জন্য STS শামীম টেক সলিউশনের অফিসিয়াল লোগো ডাউনলোড করুন।
              </p>

              {/* Centered Large Emblem Logo */}
              <div className="my-6 sm:my-8 flex justify-center">
                <div className="relative p-3 rounded-full bg-sky-50 border-2 border-sky-200 shadow-md group hover:scale-105 transition-transform">
                  <STSLogo size="xl" showText={false} />
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-600">
                <div className="font-bold text-slate-900 font-tech text-sm">{COMPANY_INFO.name}</div>
                <div className="text-cyan-700 font-semibold">{COMPANY_INFO.tagline}</div>
                <div className="text-[11px] text-slate-500 italic">"{COMPANY_INFO.bengaliSlogan}"</div>
              </div>
            </div>

            <div className="pt-5 space-y-2">
              <button
                onClick={handleDownloadProfilePicture}
                id="download-profile-picture-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-cyan-600/20 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>অফিসিয়াল লোগো ডাউনলোড করুন</span>
              </button>

              {downloadNotice && (
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-400 text-emerald-800 text-xs font-semibold animate-fadeIn">
                  {downloadNotice}
                </div>
              )}
            </div>
          </div>

          {/* Column 3: How to Order (lg:col-span-3) */}
          <div className="lg:col-span-3 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30 border-2 border-sky-200/90 p-5 sm:p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
            <div>
              <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>সহজ ৪ ধাপের প্রক্রিয়া</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-tech mb-4 sm:mb-5">
                কীভাবে অর্ডার করবেন? (How to Order)
              </h3>

              {/* 4 Steps */}
              <div className="space-y-3.5 sm:space-y-4">
                {[
                  {
                    step: "১",
                    title: "প্রোডাক্ট সিলেক্ট করুন",
                    desc: "আপনার প্রয়োজনীয় সিসিটিভি ক্যামেরা, DVR/NVR বা সিকিউরিটি আইটেম পছন্দ করুন।"
                  },
                  {
                    step: "২",
                    title: "কার্টে যুক্ত করুন",
                    desc: "প্রোডাক্ট কার্টে যোগ করে পরিমাণ (Quantity) নির্বাচন করুন।"
                  },
                  {
                    step: "৩",
                    title: "অর্ডার ফর্ম পূরণ করুন",
                    desc: "আপনার ডেলিভারি ঠিকানা, মোবাইল নম্বর ও হোয়াটসঅ্যাপ দিন।"
                  },
                  {
                    step: "৪",
                    title: "নিশ্চিত ও পেমেন্ট",
                    desc: "হোয়াটসঅ্যাপে কনফার্ম করুন বা পণ্য দেখে ক্যাশ অন ডেলিভারি নিন।"
                  }
                ].map((st) => (
                  <div key={st.step} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 font-mono shadow-sm">
                      {st.step}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-bangla">
                        {st.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={onOrderNow}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-50 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 text-cyan-900 hover:text-white border border-sky-200 hover:border-transparent font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-sm"
              >
                <span>অর্ডার করতে প্রোডাক্ট দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Download Instruction Modal */}
        {downloadModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div 
              className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900 to-[#050b18] border border-cyan-500/40 p-5 sm:p-6 shadow-2xl text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setDownloadModalItem(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
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
                <div><strong className="text-slate-200">সাপোর্টেড ডিভাইস:</strong> {downloadModalItem.compatibleDevice}</div>
                <div><strong className="text-slate-200">ফাইলের ধরন:</strong> {downloadModalItem.fileType}</div>
              </div>

              <div className="mt-5 space-y-2">
                <a
                  href={`https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent(`আসসালামু আলাইকুম শামীম টেক সলিউশন, অনুগ্রহ করে আমাকে "${downloadModalItem.title} (${downloadModalItem.version})" ফাইলটি বা ডাউনলোড লিংকটি দিন।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs"
                >
                  <Share2 className="w-4 h-4 fill-current" />
                  <span>WhatsApp এ সরাসরি ফাইল রিকোয়েস্ট করুন</span>
                </a>

                <button
                  onClick={() => {
                    setDownloadModalItem(null);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
