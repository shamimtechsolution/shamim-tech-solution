import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Award, 
  Zap, 
  DollarSign, 
  Headphones, 
  Layers
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
  const whyChooseUsPoints = [
    {
      title: "Professional Installation",
      desc: "Certified CCTV technician standard installation with laser-sharp camera angle calibration and zero blind spots.",
      icon: Award
    },
    {
      title: "Reliable Service",
      desc: "Dependable 24/7 continuous surveillance recording with industry-grade Hikvision, Dahua, and Seagate components.",
      icon: ShieldCheck
    },
    {
      title: "Clean Cable Management",
      desc: "Strict adherence to aesthetic casing, conduit piping, and secure routing with no tangled or exposed wires.",
      icon: Layers
    },
    {
      title: "Fast Troubleshooting",
      desc: "Rapid diagnostic response for video signal loss, black screen, forgotten passwords, and network issues.",
      icon: Zap
    },
    {
      title: "Affordable Pricing",
      desc: "Direct-to-consumer transparent rates in Bangladeshi Taka (৳) with no hidden surcharges or surprise fees.",
      icon: DollarSign
    },
    {
      title: "Customer Support",
      desc: "Friendly post-installation assistance, warranty backing, and free remote phone/WhatsApp guidance anytime.",
      icon: Headphones
    }
  ];

  return (
    <div id="about" className="py-16 bg-[#060c1e] border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Badge Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#040a18] border-2 border-cyan-500/40 p-8 shadow-2xl text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-slate-950/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                  <STSLogo size="lg" showText={false} />
                </div>
              </div>

              <h3 className="text-xl font-black text-white font-tech">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs text-cyan-400 font-semibold font-tech uppercase tracking-widest mt-0.5">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-xs text-slate-400 italic mt-1 font-bangla text-cyan-200/90">
                "{COMPANY_INFO.bengaliSlogan}"
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-tech uppercase">Base Location</span>
                  <span className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Haragach, Rangpur
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-tech uppercase">Direct Helpline</span>
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    {COMPANY_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>About Our Business</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-tech leading-tight">
                Dedicated Security & Surveillance Partner in Rangpur
              </h2>
            </div>

            {/* Exact Required Text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal bg-slate-900/40 p-5 rounded-2xl border border-cyan-950">
              <strong className="text-white">SHAMIM TECH SOLUTION (STS)</strong> provides professional CCTV and security system solutions in Haragach, Rangpur and nearby areas. We provide CCTV camera installation, DVR/NVR configuration, IP camera setup, remote/online viewing setup, access control, fingerprint attendance, networking and CCTV troubleshooting services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Haragach, Rangpur Sadar, Sarai, Satmata Coverage</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Genuine Hikvision, Dahua, ZKTeco Stock</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mobile Live View on Android & iPhone Included</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Personal Warranty Support From Technician Shamim</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
              >
                Contact Us
              </button>

              <button
                onClick={onRequestQuote}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition-all cursor-pointer"
              >
                Request Technician Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 font-tech">
              Quality That Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-tech mt-1">
              Why Choose Us?
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Here is why homeowners, retailers, and corporate offices trust Shamim Tech Solution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#040915] border border-cyan-950 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white font-tech mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
