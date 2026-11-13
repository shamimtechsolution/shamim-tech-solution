import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  ArrowLeft, 
  ChevronRight, 
  Truck, 
  Sparkles, 
  Tag, 
  HelpCircle,
  ChevronDown,
  Layers,
  MapPin,
  Clock,
  Send,
  Star,
  Package
} from 'lucide-react';
import { ServiceSEOInfo, SERVICES_SEO_DATA } from '../data/servicesSEOData';
import { PRODUCTS_SEO_DATA } from '../data/productsSEOData';
import { DISTRICT_SEO_DATA } from '../data/districtSEOData';
import { Product, CompanyInfo } from '../types';

interface ServiceDetailPageProps {
  serviceSlug: string;
  products: Product[];
  companyInfo: CompanyInfo;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  onNavigateHome: () => void;
  onNavigateService: (slug: string) => void;
  onNavigateProduct: (slug: string) => void;
  onSelectDistrict: (slug: string) => void;
  onRequestQuote: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceSlug,
  products,
  companyInfo,
  onAddToCart,
  onBuyNow,
  onViewProduct,
  onNavigateHome,
  onNavigateService,
  onNavigateProduct,
  onSelectDistrict,
  onRequestQuote
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const serviceData: ServiceSEOInfo = SERVICES_SEO_DATA[serviceSlug] || SERVICES_SEO_DATA['cctv-installation'];
  const allDistricts = Array.from(new Map(Object.values(DISTRICT_SEO_DATA).map(d => [d.slug, d])).values());

  // Update document title, meta tags, and JSON-LD schema
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = serviceData.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', serviceData.metaDescription);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalSlug = serviceData.canonicalSlug || serviceData.slug;
    const canonicalUrl = `https://www.shamimtechsolution.com/services/${canonicalSlug}`;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Dynamic JSON-LD Schema
    const scriptId = 'service-seo-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "name": serviceData.name,
          "alternateName": serviceData.bnName,
          "serviceType": serviceData.category,
          "description": serviceData.metaDescription,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Shamim Tech Solution",
            "telephone": companyInfo.phone || "01790139333",
            "url": "https://www.shamimtechsolution.com/",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jahaj Company Mor",
              "addressLocality": "Rangpur",
              "addressRegion": "Rangpur Division",
              "addressCountry": "BD"
            }
          },
          "areaServed": [
            "Rangpur", "Haragachh", "Dinajpur", "Bogura", "Dhaka", "Gaibandha", "Kurigram", "Nilphamari", "Lalmonirhat", "Panchagarh", "Thakurgaon"
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.shamimtechsolution.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://www.shamimtechsolution.com/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": serviceData.name,
              "item": canonicalUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": serviceData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    script.textContent = JSON.stringify(jsonLdData);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceData, companyInfo]);

  // WhatsApp click handler
  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Technician Shamim,\nI am interested in your service: "${serviceData.name} (${serviceData.bnName})".\nStarting from: ${serviceData.pricingStartingFrom}.\nPlease share quotation and visit availability.`
    );
    window.open(`https://wa.me/${companyInfo.whatsappInternational || '8801790139333'}?text=${text}`, '_blank');
  };

  // Find matching catalog products for this service
  const matchedProducts = products.filter(p => {
    if (serviceData.category === 'CCTV & Surveillance') {
      return p.category === 'CCTV Cameras' || p.category === 'Recording Systems' || p.category === 'Storage & Power';
    }
    if (serviceData.category === 'Access Control') {
      return p.category === 'Access Control & Smart Locks' || p.category === 'Storage & Power';
    }
    if (serviceData.category === 'PABX & Intercom') {
      return p.category === 'PABX & Intercom';
    }
    if (serviceData.category === 'Biometrics & Attendance') {
      return p.category === 'Biometric Attendance';
    }
    return p.category === 'Cables & Connectors' || p.category === 'LAN & Networking';
  }).slice(0, 4);

  return (
    <div className="w-full max-w-full overflow-x-hidden pt-2 pb-16">
      
      {/* Top Breadcrumb & Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 bg-white/90 backdrop-blur-md rounded-xl border border-sky-200 shadow-xs text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-slate-600 flex-wrap">
            <button 
              onClick={onNavigateHome}
              className="hover:text-cyan-700 font-medium transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button 
              onClick={onNavigateHome}
              className="hover:text-cyan-700 font-medium transition cursor-pointer"
            >
              Services
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-cyan-700 font-bold truncate max-w-[200px] sm:max-w-none">
              {serviceData.name}
            </span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-cyan-800 border border-sky-300 font-bold transition cursor-pointer text-xs shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>মূল ওয়েবসাইটে ফিরুন</span>
          </button>
        </div>
      </div>

      {/* Hero Service Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border-2 border-sky-300 p-5 sm:p-8 lg:p-10 shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>{serviceData.category} • Professional Service</span>
              </div>

              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-tech tracking-tight leading-snug">
                {serviceData.h1}
              </h1>

              <p className="text-sm sm:text-base text-cyan-800 font-semibold font-tech">
                {serviceData.bengaliTagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {serviceData.description}
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-sky-200 flex items-center gap-2 shadow-2xs">
                  <Wrench className="w-4 h-4 text-cyan-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">লেবার চার্জ</span>
                    <span className="text-[11px] text-slate-500">{serviceData.pricingStartingFrom}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-sky-200 flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">সার্ভিস ওয়ারেন্টি</span>
                    <span className="text-[11px] text-slate-500">{serviceData.warrantyInfo}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-sky-200 flex items-center gap-2 shadow-2xs col-span-2 sm:col-span-1">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">অন-সাইট সাপোর্ট</span>
                    <span className="text-[11px] text-slate-500">রংপুর বিভাগ ও সারা দেশে</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp বুকিং ({companyInfo.whatsapp || '01790139333'})</span>
                </button>

                <a
                  href={`tel:${companyInfo.phone || '01790139333'}`}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>কল করুন: {companyInfo.phone || '01790139333'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => onRequestQuote(serviceData.name)}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50 text-slate-800 border-2 border-sky-300 font-bold text-xs sm:text-sm shadow-xs flex items-center gap-2 transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-600" />
                  <span>কোটেশন / ভিজিট রিকুয়েস্ট</span>
                </button>
              </div>
            </div>

            {/* Technician Profile Card */}
            <div className="lg:col-span-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
                    STS
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-tech">
                      Technician Shamim Hossain
                    </h3>
                    <p className="text-xs text-cyan-700 font-medium">
                      Chief Surveillance & Security Specialist
                    </p>
                    <div className="flex items-center gap-1 text-amber-500 text-xs mt-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[11px] text-slate-600 font-bold ml-1">(4.9/5 • 850+ Projects)</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 border-t border-sky-100 pt-3">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>৮+ বছরের বাস্তব কাজের অভিজ্ঞতা</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>Hikvision, Dahua & ZKTeco স্ট্যান্ডার্ড সার্টিফাইড</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span>লেজার অ্যাঙ্গেল ক্যালিব্রেশন ও কন্ডুইট পাইপিং ওয়্যারিং</span>
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-center">
                  <span className="text-[11px] text-slate-600 block">সরাসরি টেকনিশিয়ান হটলাইন</span>
                  <span className="text-sm font-mono font-bold text-cyan-800">01790139333 / 01865321530</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Execution Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Key Features Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-cyan-700">
              <ShieldCheck className="w-5 h-5 text-cyan-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-tech">
                এই সার্ভিসের বিশেষ সুবিধাসমূহ (Key Features)
              </h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {serviceData.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Steps */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-cyan-700">
              <Wrench className="w-5 h-5 text-cyan-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-tech">
                কাজের সুবিন্যস্ত ধাপ (Working Process)
              </h2>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              {serviceData.processSteps.map((step, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-sky-50/70 border border-sky-200">
                  <h4 className="font-bold text-slate-900 font-tech text-xs sm:text-sm">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products for this Service */}
      {matchedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold text-cyan-700 font-tech uppercase tracking-wider block">
                  Recommended Hardware
                </span>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 font-tech">
                  এই সার্ভিসের জন্য প্রয়োজনীয় হার্ডওয়্যার ও যন্ত্রপাতি
                </h3>
              </div>
              <button
                type="button"
                onClick={onNavigateHome}
                className="text-xs text-cyan-700 hover:underline font-bold flex items-center gap-1"
              >
                <span>সব পণ্য দেখুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {matchedProducts.map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-sky-50/60 border border-sky-200 hover:border-sky-300 transition flex flex-col justify-between">
                  <div>
                    <div className="h-32 rounded-lg bg-white border border-sky-100 flex items-center justify-center p-2 overflow-hidden mb-2">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 font-bold text-cyan-800">
                      {p.brand}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 font-tech line-clamp-2 mt-1">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-sky-200/80 mt-2 flex items-center justify-between gap-1">
                    <span className="font-mono text-xs font-bold text-cyan-800">
                      {(p.priceType === 'contact' || p.isContactForPrice) ? 'Contact' : `৳ ${p.price.toLocaleString()}`}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => onViewProduct(p)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                        title="বিস্তারিত দেখুন"
                      >
                        বিস্তারিত
                      </button>
                      <button
                        type="button"
                        onClick={() => onAddToCart(p)}
                        className="px-2 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold cursor-pointer"
                      >
                        কার্ট
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services & Internal Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-3">
          <div className="flex items-center gap-2 text-cyan-700">
            <Layers className="w-4 h-4 text-cyan-600" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-tech">
              সম্পর্কিত অন্যান্য সার্ভিস ও প্রযুক্তি (Related Services)
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceData.relatedServices.map((relSlug) => {
              const rel = SERVICES_SEO_DATA[relSlug];
              if (!rel) return null;
              return (
                <button
                  key={relSlug}
                  type="button"
                  onClick={() => onNavigateService(relSlug)}
                  className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-semibold text-cyan-900 hover:text-cyan-700 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Wrench className="w-3 h-3 text-cyan-600" />
                  <span>{rel.name}</span>
                </button>
              );
            })}
          </div>

          {/* Related Products links */}
          <div className="pt-2 border-t border-sky-100">
            <div className="flex items-center gap-2 text-slate-700 mb-2">
              <Package className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-wider font-tech">
                সম্পর্কিত প্রোডাক্ট ক্যাটাগরি (Related Products)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceData.relatedProductSlugs.map((pSlug) => {
                const prod = PRODUCTS_SEO_DATA[pSlug];
                if (!prod) return null;
                return (
                  <button
                    key={pSlug}
                    type="button"
                    onClick={() => onNavigateProduct(pSlug)}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-xs font-medium text-slate-800 hover:text-cyan-800 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Tag className="w-3 h-3 text-cyan-600" />
                    <span>{prod.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* District Service Coverage Area (10 Districts Internal Linking) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-tech">
                অন-সাইট সার্ভিস এলাকা (Service Coverage Areas)
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              রংপুর বিভাগের ৮টি জেলা সহ ঢাকা ও বগুড়া
            </span>
          </div>

          <p className="text-xs text-slate-600">
            আমাদের টেকনিশিয়ান টিম নিচের জেলাগুলোতে সরাসরি উপস্থিত হয়ে সাইট পরিদর্শন, ইনস্টলেশন ও অন-সাইট কারিগরি সেবা দিয়ে থাকে:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
            {allDistricts.map((dist) => (
              <button
                key={dist.slug}
                type="button"
                onClick={() => onSelectDistrict(dist.slug)}
                className="p-2 rounded-xl bg-sky-50/70 hover:bg-sky-100 border border-sky-200 text-xs font-bold text-cyan-900 text-center transition cursor-pointer"
              >
                <span>{dist.bnName} ({dist.enName})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ Section with Collapsible Accordion) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-cyan-700">
            <HelpCircle className="w-5 h-5 text-cyan-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-tech">
              সাধারণ জিজ্ঞাসা ও উত্তর (Frequently Asked Questions)
            </h2>
          </div>

          <div className="space-y-2.5">
            {serviceData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-sky-200 bg-sky-50/50 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-3.5 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:bg-sky-100/60 transition cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-600 shrink-0 transition-transform ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === idx && (
                  <div className="p-3.5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100 bg-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Sticky Action Banner on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-sky-200 shadow-lg sm:hidden flex items-center justify-between gap-2">
        <a
          href={`tel:${companyInfo.phone || '01790139333'}`}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call: {companyInfo.phone || '01790139333'}</span>
        </a>

        <button
          type="button"
          onClick={handleWhatsAppInquiry}
          className="flex-1 py-2 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp বুকিং</span>
        </button>
      </div>

    </div>
  );
};
