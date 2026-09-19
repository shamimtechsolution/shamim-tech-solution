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
    <section id="contact" className="py-16 bg-[#040815] border-b border-cyan-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-bold font-tech uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Haragach & Rangpur Headquarters</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-tech">
            Contact Technician Shamim
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Call or send a message on WhatsApp for instant pricing, CCTV site visits, and hardware inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Map (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#060c1d] border border-cyan-900/60 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white font-tech border-b border-slate-800 pb-3">
                Direct Contact Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-tech uppercase block">Direct Call</span>
                  <a
                    href={`tel:${activeCompany.phone}`}
                    className="text-base font-bold text-cyan-400 hover:text-cyan-300 font-tech"
                  >
                    {activeCompany.phone}
                  </a>
                  <p className="text-[11px] text-slate-400">Available daily for urgent support</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-tech uppercase block">Official WhatsApp</span>
                  <a
                    href={`https://wa.me/${activeCompany.whatsappInternational}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-400 hover:text-emerald-300 font-tech"
                  >
                    {activeCompany.whatsapp}
                  </a>
                  <p className="text-[11px] text-slate-400">Send camera photos / video loss clips</p>
                </div>
              </div>

              {/* Service Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-tech uppercase block">Service Location</span>
                  <p className="text-sm font-bold text-white">
                    {activeCompany.location}
                  </p>
                  <p className="text-xs text-cyan-300 font-semibold mt-0.5">
                    Coverage: {activeCompany.serviceArea}
                  </p>
                </div>
              </div>

              {/* Facebook Page (Official User Link) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                  <Facebook className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-tech uppercase block">Facebook Page</span>
                  <a
                    href={activeCompany.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5"
                  >
                    <span>Visit STS Facebook Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <p className="text-[11px] text-slate-400">Official project updates and announcements</p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3 border-t border-slate-800">
                <a
                  href={`tel:${activeCompany.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${activeCompany.whatsappInternational}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs shadow-md transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map for Haragach, Rangpur */}
            <div className="rounded-2xl overflow-hidden border border-cyan-900/60 shadow-xl bg-slate-900">
              <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-cyan-400 font-bold font-tech">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Haragach, Rangpur Base Location</span>
                </div>
                <span className="text-[11px] text-slate-400">Bangladesh</span>
              </div>
              <div className="w-full h-56 relative bg-slate-950">
                <iframe
                  title="Haragach Rangpur Map"
                  src="https://maps.google.com/maps?q=Haragach,%20Rangpur,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right: Contact / Service Booking Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#050c1e] border border-cyan-500/40 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-tech">
                  Book CCTV Service / Request Quotation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Fill out the form below. Technician Shamim will get back to you immediately with transparent rates.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-tech">
                    Inquiry Forwarded to Technician Shamim!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Your details have been pre-filled for WhatsApp. You can also call us directly at <span className="font-mono text-cyan-300 font-bold">01865321530</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Md. Shamim Hossain"
                      className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="018XXXXXXXX"
                        className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Your Location (Area / Union) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Haragach Bazar / Rangpur Sadar"
                        className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:border-cyan-400 focus:outline-none cursor-pointer"
                    >
                      {SERVICES_LIST.map((serv) => (
                        <option key={serv.id} value={serv.name} className="bg-slate-900 text-white">
                          {serv.name}
                        </option>
                      ))}
                      <option value="Complete Security Package Consultation" className="bg-slate-900 text-white">
                        Complete Security Package Consultation
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. How many cameras do I need for a 2-story shop? What will be the total cost including DVR and wiring?"
                      className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to Technician Shamim (via WhatsApp)</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
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
