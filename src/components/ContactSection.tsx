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
  Facebook
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/companyData';
import { CompanyInfo } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  companyInfo?: CompanyInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  preselectedService = '',
  companyInfo: passedCompany 
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;

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
    <section id="contact" className="relative py-16 bg-gradient-to-b from-sky-100/70 via-blue-100/50 to-sky-100/80 border-b border-sky-300/80 overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[350px] bg-gradient-to-l from-cyan-400/25 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Haragach & Rangpur Headquarters</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-tech">
            Contact Technician Shamim
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Call or send a message on WhatsApp for instant pricing, CCTV site visits, and hardware inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Map (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/20 border-2 border-sky-200/90 shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
              <h3 className="text-lg font-bold text-slate-900 font-tech border-b border-sky-200/80 pb-3">
                Direct Contact Information
              </h3>

              {/* Primary Phone (01790139333 - In front of 530) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 fill-current animate-pulse text-cyan-200" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 font-tech uppercase font-bold block">Primary Helpline</span>
                    <span className="text-[10px] bg-cyan-100 text-cyan-800 font-bold px-1.5 py-0.2 rounded border border-cyan-300">Main</span>
                  </div>
                  <a
                    href={`tel:${activeCompany.phone || '01790139333'}`}
                    className="text-base font-bold text-cyan-700 hover:text-cyan-800 font-tech"
                  >
                    {activeCompany.phone || '01790139333'}
                  </a>
                  <p className="text-[11px] text-slate-500">Available daily for urgent support & orders</p>
                </div>
              </div>

              {/* Secondary Phone (01865321530) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 fill-current text-blue-200" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 font-tech uppercase font-bold block">Technician Direct</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded border border-blue-300">Direct</span>
                  </div>
                  <a
                    href={`tel:${activeCompany.secondaryPhone || '01865321530'}`}
                    className="text-base font-bold text-blue-700 hover:text-blue-800 font-tech"
                  >
                    {activeCompany.secondaryPhone || '01865321530'}
                  </a>
                  <p className="text-[11px] text-slate-500">On-field technician contact & backup</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-tech uppercase font-bold block">Official WhatsApp</span>
                  <a
                    href={`https://wa.me/${activeCompany.whatsappInternational}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-600 hover:text-emerald-700 font-tech"
                  >
                    +{activeCompany.whatsappInternational}
                  </a>
                  <p className="text-[11px] text-slate-500">Fast response via chat & location sharing</p>
                </div>
              </div>

              {/* Service Base Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-tech uppercase font-bold block">Service Base</span>
                  <p className="text-sm font-semibold text-slate-800">
                    {activeCompany.location}
                  </p>
                  <p className="text-xs text-slate-500">
                    Serving: {activeCompany.serviceArea}
                  </p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Facebook className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-tech uppercase font-bold block">Official Facebook</span>
                  <a
                    href={activeCompany.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-blue-600 hover:text-blue-700 font-tech truncate block max-w-[200px]"
                  >
                    Shamim Tech Solution
                  </a>
                  <p className="text-[11px] text-slate-500">Facebook page for project updates</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-3 gap-2 border-t border-sky-200/80">
                <a
                  href={`tel:${activeCompany.phone || '01790139333'}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-[11px] shadow-md shadow-cyan-600/20 transition-all transform hover:-translate-y-0.5"
                  title="Call Primary: 01790139333"
                >
                  <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span className="truncate">01790...</span>
                </a>

                <a
                  href={`tel:${activeCompany.secondaryPhone || '01865321530'}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-[11px] shadow-md shadow-blue-700/20 transition-all transform hover:-translate-y-0.5"
                  title="Call Secondary: 01865321530"
                >
                  <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span className="truncate">01865...</span>
                </a>

                <a
                  href={`https://wa.me/${activeCompany.whatsappInternational}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] shadow-md shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map for Haragach, Rangpur */}
            <div className="rounded-2xl overflow-hidden border-2 border-sky-200/90 shadow-xl bg-white">
              <div className="p-3 bg-sky-50 border-b border-sky-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 text-cyan-800 font-bold font-tech">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Haragach, Rangpur Base Location</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Bangladesh</span>
              </div>
              <div className="w-full h-56 relative bg-slate-100">
                <iframe
                  title="Haragach Rangpur Map"
                  src="https://maps.google.com/maps?q=Haragach,%20Rangpur,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right: Contact / Service Booking Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white via-sky-50/40 to-blue-50/20 border-2 border-sky-200/90 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 font-tech">
                  Book CCTV Service / Request Quotation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below. Technician Shamim will get back to you immediately with transparent rates.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900 font-tech">
                    Inquiry Forwarded to Technician Shamim!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Your details have been pre-filled for WhatsApp. You can also call us directly at <span className="font-mono text-cyan-700 font-bold">01865321530</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Md. Shamim Hossain"
                      className="w-full bg-white text-sm text-slate-900 rounded-xl px-4 py-2.5 border-2 border-sky-200 focus:border-cyan-500 focus:outline-none placeholder-slate-400 shadow-sm"
                    />
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="018XXXXXXXX"
                        className="w-full bg-white text-sm text-slate-900 rounded-xl px-4 py-2.5 border-2 border-sky-200 focus:border-cyan-500 focus:outline-none placeholder-slate-400 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Location (Area / Union) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Haragach Bazar / Rangpur Sadar"
                        className="w-full bg-white text-sm text-slate-900 rounded-xl px-4 py-2.5 border-2 border-sky-200 focus:border-cyan-500 focus:outline-none placeholder-slate-400 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white text-sm text-slate-900 rounded-xl px-4 py-2.5 border-2 border-sky-200 focus:border-cyan-500 focus:outline-none cursor-pointer shadow-sm"
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

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. How many cameras do I need for a 2-story shop? What will be the total cost including DVR and wiring?"
                      className="w-full bg-white text-sm text-slate-900 rounded-xl px-4 py-2.5 border-2 border-sky-200 focus:border-cyan-500 focus:outline-none placeholder-slate-400 shadow-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-md shadow-cyan-600/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to Technician Shamim (via WhatsApp)</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 No spam. Your phone number is strictly kept confidential for your security quotation.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
