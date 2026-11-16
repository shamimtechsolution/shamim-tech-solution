import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Facebook,
  X,
  ArrowLeft
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { CompanyInfo } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  companyInfo?: CompanyInfo;
  isContactModalOpen?: boolean;
  onOpenContactModal?: () => void;
  onCloseContactModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preselectedService = '',
  companyInfo: passedCompany,
  isContactModalOpen,
  onOpenContactModal,
  onCloseContactModal
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;

  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const isFormModalOpen = isContactModalOpen !== undefined ? isContactModalOpen : internalModalOpen;
  
  const setFormModalState = (open: boolean) => {
    setInternalModalOpen(open);
    if (open && onOpenContactModal) onOpenContactModal();
    if (!open && onCloseContactModal) onCloseContactModal();
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'CCTV Camera Installation',
    location: '',
    message: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        service: preselectedService
      }));
      setFormModalState(true);
    }
  }, [preselectedService]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted message straight to technician Shamim on WhatsApp
    const text = [
      `*NEW INQUIRY - SHAMIM TECH SOLUTION*`,
      `--------------------------------------`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Service Needed:* ${formData.service}`,
      `*Location:* ${formData.location || activeCompany.location}`,
      `*Client Note:* ${formData.message || 'I would like an installation quotation and site survey.'}`,
      `--------------------------------------`
    ].join('\n');

    const waUrl = `https://wa.me/${activeCompany.whatsappInternational}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-8 sm:py-10 bg-[#F7FAFC] border-b border-[#DCE7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FB] border border-[#DCE7F2] text-[#123A70] text-xs font-bold font-tech uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Rangpur Division Service Headquarters</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F2937] font-tech">
            Contact Technician Shamim
          </h2>
          <p className="text-[#4B5563] text-sm mt-2">
            Call or send a message on WhatsApp for instant pricing, CCTV site visits, and hardware inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Embedded Google Map for Rangpur Division (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-[#DCE7F2] shadow-sm bg-white">
              <div className="p-3 bg-[#F7FAFC] border-b border-[#DCE7F2] flex items-center justify-between text-xs text-[#4B5563]">
                <div className="flex items-center gap-1.5 text-[#123A70] font-bold font-tech">
                  <MapPin className="w-3.5 h-3.5 text-[#123A70]" />
                  <span>Rangpur Division Service Area Map</span>
                </div>
                <span className="text-[11px] text-[#64748B] font-medium">Bangladesh</span>
              </div>
              <div className="w-full h-64 sm:h-72 relative bg-[#F7FAFC]">
                <iframe
                  title="Rangpur Division Map"
                  src="https://maps.google.com/maps?q=Rangpur%20Division,%20Bangladesh&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right: Contact & Service Booking Card (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE7F2] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#123A70]" />
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF5FB] border border-[#DCE7F2] text-[#123A70] text-xs font-bold font-tech uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Contact & Quotation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937] font-tech">
                  Book CCTV Service / Contact Technician Shamim
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-2">
                  নতুন সিসিটিভি ক্যামেরা ইনস্টলেশন, টেকনিশিয়ান সার্ভিসিং, অথবা সরাসরি হটলাইন ও ঠিকানার বিস্তারিত দেখতে নিচের বাটনে ক্লিক করুন।
                </p>
              </div>

              {/* WhatsApp Direct Link (Original Logo + 01790139333 in single clickable link) */}
              <div className="pt-2 pb-3">
                <a
                  href="https://wa.me/8801790139333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EAF6EF] border border-[#DCE7F2] hover:border-[#147A43]/45 text-[#1F2937] transition-all shadow-xs cursor-pointer group active:scale-[0.99]"
                  title="WhatsApp: 01790139333"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#147A43] shrink-0 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider font-tech">Official WhatsApp</span>
                      <span className="text-base sm:text-lg font-black text-[#1F2937] group-hover:text-[#147A43] font-mono tracking-wide leading-tight transition-colors">
                        01790139333
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white bg-[#12733D] group-hover:bg-[#106637] group-active:bg-[#106637] px-3 py-1.5 rounded-lg font-tech uppercase tracking-wide transition-all shrink-0">
                    Chat Now
                  </span>
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setFormModalState(true)}
                  id="open-cctv-booking-modal-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-sm sm:text-base tracking-wide shadow-sm transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white/90" />
                  <span>Direct Contact Information (কন্টাক্ট ও সরাসরি তথ্য দেখুন)</span>
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE7F2] flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
                <span className="flex items-center gap-1">
                  🔒 <span>গোপনীয়তা সুরক্ষিত • কোনো স্প্যাম নেই</span>
                </span>
                <span className="text-[#123A70] font-bold font-tech">
                  হটলাইন: {activeCompany.phone || '01790139333'} / {activeCompany.secondaryPhone || '01865321530'}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Contact & Direct Information Modal (Opens when Contact is clicked) */}
        {isFormModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F2937]/65 backdrop-blur-sm overflow-y-auto animate-fadeIn"
            onClick={() => setFormModalState(false)}
          >
            <div 
              className="relative w-[calc(100%-1.75rem)] sm:w-full max-w-xl max-h-[85vh] bg-white border border-[#DCE7F2] rounded-2xl shadow-xl overflow-hidden my-auto transition-all flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#123A70]" />
              
              {/* Header with Back Button */}
              <div className="p-3.5 sm:p-4 pb-2.5 border-b border-[#DCE7F2] flex items-center justify-between bg-[#F7FAFC]">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#1F2937] font-tech leading-tight truncate">
                    Direct Contact Information
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#4B5563] mt-0.5 truncate">
                    Shamim Tech Solution • Rangpur Division Service HQ
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormModalState(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#EFF5FB] text-[#1F2937] transition text-xs font-bold cursor-pointer border border-[#DCE7F2] shrink-0 shadow-xs ml-2"
                  aria-label="Back to Website"
                  title="ব্যাকে যান / Back"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#123A70]" />
                  <span>Back / ব্যাকে যান</span>
                </button>
              </div>

              {/* Modal Body: Direct Contact Info + Booking Form */}
              <div className="p-3.5 sm:p-5 max-h-[82vh] overflow-y-auto space-y-3.5">
                
                {/* 1. Direct Contact Details Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#DCE7F2] pb-2">
                    <span className="text-xs font-bold text-[#1F2937] font-tech uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#123A70]" />
                      <span>Direct Contact Helpline</span>
                    </span>
                    <span className="text-[10px] text-[#123A70] font-semibold bg-[#EFF5FB] border border-[#DCE7F2] px-2 py-0.5 rounded-full">
                      24/7 Support
                    </span>
                  </div>

                  {/* 3 Hotlines Grid (Compact) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {/* Primary Hotline */}
                    <div className="p-2.5 rounded-lg bg-white border border-[#DCE7F2] shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#64748B] uppercase">Helpline</span>
                          <span className="text-[9px] bg-[#EFF5FB] text-[#123A70] font-bold px-1 rounded">Main</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#123A70] font-mono mt-0.5">
                          {activeCompany.phone || '01790139333'}
                        </div>
                      </div>
                      <a
                        href={`tel:${activeCompany.phone || '01790139333'}`}
                        className="mt-2 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-[11px] transition shadow-xs"
                      >
                        <Phone className="w-3 h-3 fill-current" />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* Secondary Hotline */}
                    <div className="p-2.5 rounded-lg bg-white border border-[#DCE7F2] shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-[#64748B] uppercase">Technician</span>
                          <span className="text-[9px] bg-[#EFF5FB] text-[#123A70] font-bold px-1 rounded">Direct</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#123A70] font-mono mt-0.5">
                          {activeCompany.secondaryPhone || '01865321530'}
                        </div>
                      </div>
                      <a
                        href={`tel:${activeCompany.secondaryPhone || '01865321530'}`}
                        className="mt-2 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-[11px] transition shadow-xs"
                      >
                        <Phone className="w-3 h-3 fill-current" />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/8801790139333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white hover:bg-[#EAF6EF] border border-[#DCE7F2] hover:border-[#147A43]/45 shadow-xs flex flex-col justify-between transition group cursor-pointer"
                      title="WhatsApp: 01790139333"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-[#64748B] uppercase">WhatsApp</span>
                        <span className="text-[9px] bg-[#EAF6EF] text-[#147A43] font-bold px-1 rounded">Fast Chat</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <svg className="w-5 h-5 text-[#147A43] shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span className="text-xs sm:text-sm font-bold text-[#1F2937] group-hover:text-[#147A43] font-mono tracking-wide">
                          01790139333
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Compact Address & Details */}
                  <div className="text-xs text-[#4B5563] space-y-1.5 pt-1 border-t border-[#DCE7F2]">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#123A70] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1F2937]">Address:</strong> {activeCompany.location || 'Jahaj Company & Haragachh, Rangpur, Bangladesh'}
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#147A43] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1F2937]">Service Areas:</strong> {activeCompany.serviceArea || 'All 8 Districts of Rangpur Division, Bangladesh'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11px] text-[#4B5563]">
                      <span>🛍️ <strong className="text-[#1F2937]">Product Sales:</strong> Online Across Bangladesh</span>
                      <a
                        href={activeCompany.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#123A70] hover:text-[#1A4B8C] font-bold"
                      >
                        <Facebook className="w-3 h-3 fill-current" />
                        <span>Shamim Tech Solution (Facebook)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Quotation / Service Form */}
                <div className="border-t border-[#DCE7F2] pt-2">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Send className="w-3.5 h-3.5 text-[#123A70]" />
                    <h4 className="text-xs sm:text-sm font-bold text-[#1F2937] font-tech uppercase tracking-wide">
                      Book CCTV Service / Request Quotation (ফর্ম)
                    </h4>
                  </div>

                  {submitted ? (
                    <div className="p-4 rounded-xl bg-[#EAF6EF] border border-[#DCE7F2] text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-[#147A43] mx-auto" />
                      <h4 className="text-sm sm:text-base font-bold text-[#1F2937] font-tech">
                        Inquiry Forwarded to Technician Shamim!
                      </h4>
                      <p className="text-xs text-[#4B5563] max-w-sm mx-auto">
                        Your details have been pre-filled for WhatsApp. You can also call us directly at <span className="font-mono text-[#123A70] font-bold">01790139333</span> / <span className="font-mono text-[#123A70] font-bold">01865321530</span>.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center pt-1">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="px-3 py-1.5 rounded-lg bg-[#123A70] hover:bg-[#1A4B8C] text-white text-xs font-semibold cursor-pointer"
                        >
                          Send Another Message
                        </button>
                        <button
                          type="button"
                          onClick={() => { setSubmitted(false); setFormModalState(false); }}
                          className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#EFF5FB] border border-[#DCE7F2] text-[#1F2937] text-xs font-semibold cursor-pointer"
                        >
                          ব্যাকে যান (Back)
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5">
                      
                      {/* Name (Compact) */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Md. Shamim Hossain"
                          className="w-full bg-white text-xs sm:text-sm text-[#1F2937] rounded-lg px-3 py-1.5 border border-[#DCE7F2] focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 focus:outline-none placeholder-[#64748B] shadow-xs"
                        />
                      </div>

                      {/* Phone & Location (Compact 2-col) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                            Mobile / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="018XXXXXXXX"
                            className="w-full bg-white text-xs sm:text-sm text-[#1F2937] rounded-lg px-3 py-1.5 border border-[#DCE7F2] focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 focus:outline-none placeholder-[#64748B] shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                            Your Location *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g. Rangpur / Dinajpur / Lalmonirhat"
                            className="w-full bg-white text-xs sm:text-sm text-[#1F2937] rounded-lg px-3 py-1.5 border border-[#DCE7F2] focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 focus:outline-none placeholder-[#64748B] shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Service Needed (Compact) */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                          Service Required *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white text-xs sm:text-sm text-[#1F2937] rounded-lg px-3 py-1.5 border border-[#DCE7F2] focus:border-[#123A70] focus:outline-none cursor-pointer shadow-xs"
                        >
                          {SERVICES_LIST.map((serv) => (
                            <option key={serv.id} value={serv.name}>
                              {serv.name}
                            </option>
                          ))}
                          <option value="Complete Security Package Consultation">
                            Complete Security Package Consultation
                          </option>
                        </select>
                      </div>

                      {/* Message / Details (Compact) */}
                      <div>
                        <label className="block text-[11px] font-bold text-[#1F2937] uppercase tracking-wider mb-0.5">
                          Message / Details
                        </label>
                        <textarea
                          rows={2}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="e.g. How many cameras do I need? Total cost estimate?"
                          className="w-full bg-white text-xs sm:text-sm text-[#1F2937] rounded-lg px-3 py-1.5 border border-[#DCE7F2] focus:border-[#123A70] focus:outline-none placeholder-[#64748B] shadow-xs resize-none"
                        />
                      </div>

                      {/* Submit & Back Buttons */}
                      <div className="pt-1 space-y-2">
                        <button
                          type="submit"
                          id="contact-form-submit-btn"
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs transition-all cursor-pointer transform hover:-translate-y-0.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Inquiry to Technician Shamim (via WhatsApp)</span>
                        </button>

                        {/* Back Button to return to main web */}
                        <button
                          type="button"
                          onClick={() => setFormModalState(false)}
                          className="w-full py-2 px-3 bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#1F2937] font-bold rounded-lg text-xs sm:text-sm border border-[#DCE7F2] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 text-[#123A70]" />
                          <span>ব্যাকে যান / মূল ওয়েবসাইটে ফিরে যান (Back)</span>
                        </button>
                      </div>

                      <p className="text-[10px] text-[#64748B] text-center">
                        🔒 No spam. Your phone number is strictly kept confidential for your security quotation.
                      </p>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
