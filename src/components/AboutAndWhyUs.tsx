import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { STSLogo } from './STSLogo';

interface AboutAndWhyUsProps {
  onContactClick: () => void;
  onRequestQuote: () => void;
}

export const AboutAndWhyUs: React.FC<AboutAndWhyUsProps> = ({
  onContactClick,
  onRequestQuote,
}) => {

  return (
    <div id="about" className="relative py-16 bg-gradient-to-b from-sky-100/70 via-blue-100/50 to-sky-50/80 border-b border-sky-300/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Badge Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-sky-50/70 border-2 border-sky-300 p-8 shadow-xl text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-white border border-sky-300 shadow-md">
                  <STSLogo size="lg" showText={false} />
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 font-tech">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-cyan-700 font-bold font-tech uppercase tracking-widest mt-0.5">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-xs text-slate-600 italic mt-1 font-bangla font-medium">
                "{COMPANY_INFO.bengaliSlogan}"
              </p>

              <div className="mt-6 pt-5 border-t border-sky-200 grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 block font-tech uppercase font-bold">Base Location</span>
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    Rangpur Division
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                  <span className="text-[10px] text-slate-500 block font-tech uppercase font-bold">Direct Helpline</span>
                  <span className="text-xs font-bold text-cyan-700 flex items-center gap-1 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                <span>About Our Business</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech leading-tight">
                Dedicated Security & Surveillance Partner in Rangpur Division
              </h2>
            </div>

            {/* Exact Required Text */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-sky-50/50 p-5 rounded-2xl border border-sky-200 shadow-sm">
              <strong className="text-slate-900 font-bold">SHAMIM TECH SOLUTION (STS)</strong> provides professional CCTV and security system solutions across all 8 districts of Rangpur Division (রংপুর বিভাগ). We provide CCTV camera installation, DVR/NVR configuration, IP camera setup, remote/online viewing setup, access control, fingerprint attendance, networking and electrical troubleshooting services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Rangpur Division All 8 Districts Coverage</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>100% Genuine Hikvision, Dahua, ZKTeco Stock</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Mobile Live View on Android & iPhone Included</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-sky-200 shadow-sm">
                <CheckCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Personal Warranty Support From Technician Shamim</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-cyan-600/20 cursor-pointer"
              >
                Contact Us
              </button>

              <button
                onClick={onRequestQuote}
                className="px-6 py-3 rounded-xl bg-white hover:bg-sky-50 text-slate-700 hover:text-cyan-800 border border-sky-300 text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                Request Technician Consultation
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
