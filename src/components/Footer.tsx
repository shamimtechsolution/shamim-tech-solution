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
    <footer className="bg-[#02050d] text-slate-400 border-t border-cyan-950/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Branding & Slogan (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <STSLogo size="md" showText={false} />
              <div>
                <h3 className="text-lg font-black text-white font-tech leading-tight">
                  {activeCompany.name}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold font-tech tracking-wider">
                  {activeCompany.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Certified CCTV technician & security system service provider in Haragach, Rangpur. Expert camera installation, DVR/NVR configuration, IP setups, and biometric systems.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-900/40 text-xs text-cyan-300 font-tech">
              <span className="block text-[11px] text-slate-400 uppercase font-mono">Company Motto:</span>
              <span className="text-sm font-bold text-white">"{activeCompany.slogan}"</span>
              <span className="block text-[11px] text-cyan-400/90 font-bangla mt-0.5">
                {activeCompany.bengaliSlogan}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-tech border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">Product Shop</a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-cyan-400 transition-colors">Software & Tools</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">Work Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-tech border-b border-slate-800 pb-2">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">CCTV Camera Installation</li>
              <li className="text-slate-300">DVR & NVR Hard Drive Setup</li>
              <li className="text-slate-300">IP Camera & Wi-Fi PTZ Setup</li>
              <li className="text-slate-300">Remote Mobile Live Viewing</li>
              <li className="text-slate-300">Access Control & Magnetic Lock</li>
              <li className="text-slate-300">Fingerprint Time Attendance</li>
              <li className="text-slate-300">CCTV Cable & Troubleshooting</li>
            </ul>
          </div>

          {/* Col 4: Official Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-tech border-b border-slate-800 pb-2">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-tech">Phone / Helpline:</span>
                <a href={`tel:${activeCompany.phone}`} className="font-mono text-cyan-400 font-bold hover:underline">
                  {activeCompany.phone}
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-tech">WhatsApp:</span>
                <a 
                  href={`https://wa.me/${activeCompany.whatsappInternational}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 font-bold hover:underline"
                >
                  {activeCompany.whatsapp}
                </a>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-tech">Base Address:</span>
                <p className="text-slate-200">
                  {activeCompany.location}
                </p>
                <p className="text-[11px] text-cyan-400/80">
                  Area: {activeCompany.serviceArea}
                </p>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block uppercase font-tech mb-1">Official Social:</span>
                <a
                  href={activeCompany.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-400 hover:text-white text-xs font-semibold transition-all"
                >
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                  <span>Facebook Profile</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div 
            onClick={handleSecretFooterClick}
            className="cursor-default select-none"
            title=""
          >
            <p>
              © {currentYear} <strong className="text-white">{activeCompany.name}</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Service location: Haragach, Rangpur, Bangladesh.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[11px] text-cyan-400 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Certified Security & CCTV Technician</span>
            </span>

            {isAdminLoggedIn && onOpenAdmin && (
              <button
                id="footer-admin-btn"
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium cursor-pointer transition-all bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                title="Open Dedicated Admin Portal (/admin)"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin Panel (Online)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors cursor-pointer"
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
