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
    <section id="contact" className="relative py-8 sm:py-10 bg-gradient-to-b from-sky-100/70 via-blue-100/50 to-sky-100/80 border-b border-sky-300/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[350px] bg-gradient-to-l from-cyan-400/25 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Rangpur Division Service Headquarters</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech">
            Contact Technician Shamim
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Call or send a message on WhatsApp for instant pricing, CCTV site visits, and hardware inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Embedded Google Map for Rangpur Division (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-sky-200/90 shadow-xl bg-white">
              <div className="p-3 bg-sky-50 border-b border-sky-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 text-cyan-800 font-bold font-tech">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Rangpur Division Service Area Map</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Bangladesh</span>
              </div>
              <div className="w-full h-64 sm:h-72 relative bg-slate-100">
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
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/20 border-2 border-sky-200/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Contact & Quotation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-tech">
                  Book CCTV Service / Contact Technician Shamim
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  নতুন সিসিটিভি ক্যামেরা ইনস্টলেশন, টেকনিশিয়ান সার্ভিসিং, অথবা সরাসরি হটলাইন ও ঠিকানার বিস্তারিত দেখতে নিচের বাটনে ক্লিক করুন।
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setFormModalState(true)}
                  id="open-cctv-booking-modal-btn"
                  className="w-full flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-cyan-600/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-cyan-200" />
                  <span>Direct Contact Information (কন্টাক্ট ও সরাসরি তথ্য দেখুন)</span>
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  🔒 <span>গোপনীয়তা সুরক্ষিত • কোনো স্প্যাম নেই</span>
                </span>
                <span className="text-cyan-700 font-bold font-tech">
                  হটলাইন: {activeCompany.phone || '01790139333'} / {activeCompany.secondaryPhone || '01865321530'}
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Contact & Direct Information Modal (Opens when Contact is clicked) */}
        {isFormModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn"
            onClick={() => setFormModalState(false)}
          >
            <div 
              className="relative w-[calc(100%-1.75rem)] sm:w-full max-w-xl max-h-[85vh] bg-white border-2 border-sky-300 rounded-2xl shadow-2xl overflow-hidden my-auto transition-all flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
              
              {/* Header with Back Button */}
              <div className="p-3.5 sm:p-4 pb-2.5 border-b border-sky-100 flex items-center justify-between bg-sky-50/70">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-tech leading-tight truncate">
                    Direct Contact Information
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 truncate">
                    Shamim Tech Solution • Rangpur Division Service HQ
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormModalState(false)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition text-xs font-bold cursor-pointer border border-slate-300 shrink-0 shadow-xs ml-2"
                  aria-label="Back to Website"
                  title="ব্যাকে যান / Back"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-cyan-700" />
                  <span>Back / ব্যাকে যান</span>
                </button>
              </div>

              {/* Modal Body: Direct Contact Info + Booking Form */}
              <div className="p-3.5 sm:p-5 max-h-[82vh] overflow-y-auto space-y-3.5">
                
                {/* 1. Direct Contact Details Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-sky-50/60 to-blue-50/40 border border-sky-200 space-y-3">
                  <div className="flex items-center justify-between border-b border-sky-200/80 pb-2">
                    <span className="text-xs font-bold text-slate-800 font-tech uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Direct Contact Helpline</span>
                    </span>
                    <span className="text-[10px] text-cyan-700 font-semibold bg-cyan-100 px-2 py-0.5 rounded-full">
                      24/7 Support
                    </span>
                  </div>

                  {/* 3 Hotlines Grid (Compact) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {/* Primary Hotline */}
                    <div className="p-2.5 rounded-lg bg-white border border-sky-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 uppercase">Helpline</span>
                          <span className="text-[9px] bg-cyan-100 text-cyan-800 font-bold px-1 rounded">Main</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-cyan-700 font-mono mt-0.5">
                          {activeCompany.phone || '01790139333'}
                        </div>
                      </div>
                      <a
                        href={`tel:${activeCompany.phone || '01790139333'}`}
                        className="mt-2 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-[11px] transition shadow-xs"
                      >
                        <Phone className="w-3 h-3 fill-current" />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* Secondary Hotline */}
                    <div className="p-2.5 rounded-lg bg-white border border-sky-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 uppercase">Technician</span>
                          <span className="text-[9px] bg-blue-100 text-blue-800 font-bold px-1 rounded">Direct</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-blue-700 font-mono mt-0.5">
                          {activeCompany.secondaryPhone || '01865321530'}
                        </div>
                      </div>
                      <a
                        href={`tel:${activeCompany.secondaryPhone || '01865321530'}`}
                        className="mt-2 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition shadow-xs"
                      >
                        <Phone className="w-3 h-3 fill-current" />
                        <span>Call</span>
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <div className="p-2.5 rounded-lg bg-white border border-emerald-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 uppercase">WhatsApp</span>
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1 rounded">Fast</span>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-600 font-mono mt-0.5 truncate">
                          +{activeCompany.whatsappInternational}
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/${activeCompany.whatsappInternational}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center justify-center gap-1 py-1 px-2 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] transition shadow-xs"
                      >
                        <MessageSquare className="w-3 h-3 fill-current" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Compact Address & Details */}
                  <div className="text-xs text-slate-700 space-y-1.5 pt-1 border-t border-sky-100">
                    <div className="flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Address:</strong> {activeCompany.location || 'Jahaj Company & Haragachh, Rangpur, Bangladesh'}
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Service Areas:</strong> {activeCompany.serviceArea || 'All 8 Districts of Rangpur Division, Bangladesh'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2 pt-1 text-[11px] text-slate-600">
                      <span>🛍️ <strong className="text-slate-800">Product Sales:</strong> Online Across Bangladesh</span>
                      <a
                        href={activeCompany.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold"
                      >
                        <Facebook className="w-3 h-3 fill-current" />
                        <span>Shamim Tech Solution (Facebook)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Quotation / Service Form */}
                <div className="border-t border-sky-100 pt-2">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Send className="w-3.5 h-3.5 text-cyan-600" />
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-tech uppercase tracking-wide">
                      Book CCTV Service / Request Quotation (ফর্ম)
                    </h4>
                  </div>

                  {submitted ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 font-tech">
                        Inquiry Forwarded to Technician Shamim!
                      </h4>
                      <p className="text-xs text-slate-600 max-w-sm mx-auto">
                        Your details have been pre-filled for WhatsApp. You can also call us directly at <span className="font-mono text-cyan-700 font-bold">01790139333</span> / <span className="font-mono text-cyan-700 font-bold">01865321530</span>.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center pt-1">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold cursor-pointer"
                        >
                          Send Another Message
                        </button>
                        <button
                          type="button"
                          onClick={() => { setSubmitted(false); setFormModalState(false); }}
                          className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer"
                        >
                          ব্যাকে যান (Back)
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5">
                      
                      {/* Name (Compact) */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Md. Shamim Hossain"
                          className="w-full bg-white text-xs sm:text-sm text-slate-900 rounded-lg px-3 py-1.5 border border-sky-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none placeholder-slate-400 shadow-xs"
                        />
                      </div>

                      {/* Phone & Location (Compact 2-col) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                            Mobile / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="018XXXXXXXX"
                            className="w-full bg-white text-xs sm:text-sm text-slate-900 rounded-lg px-3 py-1.5 border border-sky-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none placeholder-slate-400 shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                            Your Location *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g. Rangpur / Dinajpur / Lalmonirhat"
                            className="w-full bg-white text-xs sm:text-sm text-slate-900 rounded-lg px-3 py-1.5 border border-sky-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none placeholder-slate-400 shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Service Needed (Compact) */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                          Service Required *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white text-xs sm:text-sm text-slate-900 rounded-lg px-3 py-1.5 border border-sky-300 focus:border-cyan-500 focus:outline-none cursor-pointer shadow-xs"
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
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                          Message / Details
                        </label>
                        <textarea
                          rows={2}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="e.g. How many cameras do I need? Total cost estimate?"
                          className="w-full bg-white text-xs sm:text-sm text-slate-900 rounded-lg px-3 py-1.5 border border-sky-300 focus:border-cyan-500 focus:outline-none placeholder-slate-400 shadow-xs resize-none"
                        />
                      </div>

                      {/* Submit & Back Buttons */}
                      <div className="pt-1 space-y-2">
                        <button
                          type="submit"
                          id="contact-form-submit-btn"
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-cyan-600/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Inquiry to Technician Shamim (via WhatsApp)</span>
                        </button>

                        {/* Back Button to return to main web */}
                        <button
                          type="button"
                          onClick={() => setFormModalState(false)}
                          className="w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg text-xs sm:text-sm border border-slate-300 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 text-slate-600" />
                          <span>ব্যাকে যান / মূল ওয়েবসাইটে ফিরে যান (Back)</span>
                        </button>
                      </div>

                      <p className="text-[10px] text-slate-500 text-center">
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
