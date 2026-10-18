import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Facebook, 
  Shield, 
  ArrowUp,
  Award,
  Clock,
  Heart,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { STSLogo } from './STSLogo';
import { CompanyInfo } from '../types';

interface FooterProps {
  companyInfo?: CompanyInfo;
  onOpenAdmin?: () => void;
  isAdminLoggedIn?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ 
  companyInfo: passedCompany,
  onOpenAdmin,
  isAdminLoggedIn 
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Secret Admin trigger: 3 quick taps on copyright secretly opens admin portal
  const clickCountRef = React.useRef(0);
  const clickTimerRef = React.useRef<any>(null);

  const handleSecretFooterClick = () => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 1500);

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      if (onOpenAdmin) onOpenAdmin();
    }
  };

  return (
    <footer className="bg-gradient-to-b from-sky-100 via-blue-100/60 to-sky-100 text-slate-700 border-t-2 border-sky-300 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-200/80">
          
          {/* Col 1: Branding & Slogan (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <STSLogo size="md" showText={false} theme="light" />
              <div>
                <h3 className="text-lg font-black text-slate-900 font-tech leading-tight">
                  {activeCompany.name}
                </h3>
                <p className="text-xs text-cyan-700 font-bold font-tech tracking-wider">
                  {activeCompany.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Certified CCTV technician & security system service provider in Haragach, Rangpur. Expert camera installation, DVR/NVR configuration, IP setups, and biometric systems.
            </p>

            <div className="p-3.5 rounded-xl bg-white border-2 border-sky-200 text-xs text-slate-700 font-tech shadow-sm">
              <span className="block text-[11px] text-slate-500 uppercase font-mono font-bold">Company Motto:</span>
              <span className="text-sm font-bold text-slate-900">"{activeCompany.slogan}"</span>
              <span className="block text-[11px] text-cyan-700 font-bangla font-semibold mt-0.5">
                {activeCompany.bengaliSlogan}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-tech border-b border-sky-200/80 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-cyan-700 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-700 transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-700 transition-colors">Product Shop</a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-cyan-700 transition-colors">Software & Tools</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-700 transition-colors">Work Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-700 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-700 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-tech border-b border-sky-200/80 pb-2">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li className="hover:text-cyan-700 transition-colors">CCTV Camera Sales & Service</li>
              <li className="hover:text-cyan-700 transition-colors">DVR, NVR & XVR Hard Drive Setup</li>
              <li className="hover:text-cyan-700 transition-colors">IP Camera & Wi-Fi PTZ Setup</li>
              <li className="hover:text-cyan-700 transition-colors">PABX & Office Intercom System</li>
              <li className="hover:text-cyan-700 transition-colors">Access Control & Biometric Attendance</li>
              <li className="hover:text-cyan-700 transition-colors">House & Office Electrical Wiring</li>
              <li className="hover:text-cyan-700 transition-colors">IT Support & LAN Network Setup</li>
              <li className="hover:text-cyan-700 transition-colors">CCTV Cable, Connectors & Power Supply</li>
            </ul>
          </div>

          {/* Col 4: Official Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-tech border-b border-sky-200/80 pb-2">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[11px] text-slate-500 block uppercase font-tech font-bold mb-1">Helpline & Direct Phone:</span>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${activeCompany.phone || '01790139333'}`} className="font-mono text-cyan-700 font-bold hover:underline flex items-center gap-1.5">
                    <span className="text-[9px] bg-cyan-100 text-cyan-800 font-bold px-1 rounded border border-cyan-300">Main</span>
                    <span>{activeCompany.phone || '01790139333'}</span>
                  </a>
                  <a href={`tel:${activeCompany.secondaryPhone || '01865321530'}`} className="font-mono text-blue-700 font-bold hover:underline flex items-center gap-1.5">
                    <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1 rounded border border-blue-300">Direct</span>
                    <span>{activeCompany.secondaryPhone || '01865321530'}</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block uppercase font-tech font-bold">WhatsApp:</span>
                <a 
                  href={`https://wa.me/${activeCompany.whatsappInternational}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-600 font-bold hover:underline"
                >
                  +{activeCompany.whatsappInternational}
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block uppercase font-tech font-bold">Base Address:</span>
                <p className="text-slate-800 font-medium">
                  {activeCompany.location}
                </p>
                <p className="text-[11px] text-cyan-700 font-semibold">
                  Area: {activeCompany.serviceArea}
                </p>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 block uppercase font-tech font-bold mb-1">Official Social:</span>
                <a
                  href={activeCompany.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-700 text-xs font-semibold shadow-sm transition-all"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Facebook Profile</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 8 Districts Service Area Band */}
        <div className="py-6 border-b border-sky-200/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-slate-900 font-tech uppercase tracking-wider block">
                রংপুর বিভাগের ৮টি জেলায় অন-সাইট সার্ভিস এরিয়া (Service Coverage)
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">
                CCTV Camera, Electrician, PABX Intercom, Access Control & IT Services available in all 8 districts:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {[
                { bn: "রংপুর", en: "Rangpur" },
                { bn: "দিনাজপুর", en: "Dinajpur" },
                { bn: "লালমনিরহাট", en: "Lalmonirhat" },
                { bn: "কুড়িগ্রাম", en: "Kurigram" },
                { bn: "নীলফামারী", en: "Nilphamari" },
                { bn: "গাইবান্ধা", en: "Gaibandha" },
                { bn: "ঠাকুরগাঁও", en: "Thakurgaon" },
                { bn: "পঞ্চগড়", en: "Panchagarh" }
              ].map((dist, idx) => (
                <a
                  key={idx}
                  href="#district-coverage"
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-cyan-50 border border-sky-200 hover:border-cyan-400 text-xs text-slate-700 hover:text-cyan-800 font-medium transition-all shadow-sm flex items-center gap-1"
                >
                  <span className="font-bangla font-semibold text-cyan-800">{dist.bn}</span>
                  <span className="text-[10px] text-slate-400">({dist.en})</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
          <div 
            onClick={handleSecretFooterClick}
            className="cursor-default select-none"
            title=""
          >
            <p>
              © {currentYear} <strong className="text-slate-900">{activeCompany.name}</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Service location: Haragach, Rangpur, Bangladesh.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[11px] text-cyan-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-300 font-bold flex items-center gap-1 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-cyan-600" />
              <span>Certified Security & CCTV Technician</span>
            </span>

            {isAdminLoggedIn && onOpenAdmin && (
              <button
                id="footer-admin-btn"
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium cursor-pointer transition-all bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 shadow-sm"
                title="Open Dedicated Admin Portal (/admin)"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Admin Panel (Online)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-sky-50 text-slate-600 hover:text-cyan-700 border-2 border-sky-200 transition-colors cursor-pointer shadow-sm"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
