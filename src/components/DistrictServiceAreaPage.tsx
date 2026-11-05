import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  ArrowLeft, 
  ShoppingCart, 
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Eye,
  Truck,
  Sparkles,
  Search,
  HardDrive,
  Cpu,
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import { DistrictSEOInfo, DISTRICT_SEO_DATA } from '../data/districtSEOData';
import { Product, CompanyInfo } from '../types';
import { STSLogo } from './STSLogo';

interface DistrictServiceAreaPageProps {
  districtSlug: string;
  products: Product[];
  companyInfo: CompanyInfo;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  onNavigateHome: () => void;
  onSelectDistrict: (slug: string) => void;
  onRequestService?: (serviceName: string) => void;
}

export const DistrictServiceAreaPage: React.FC<DistrictServiceAreaPageProps> = ({
  districtSlug,
  products,
  companyInfo,
  onAddToCart,
  onBuyNow,
  onViewProduct,
  onNavigateHome,
  onSelectDistrict,
  onRequestService
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const districtData: DistrictSEOInfo = DISTRICT_SEO_DATA[districtSlug] || DISTRICT_SEO_DATA['rangpur'];
  const allDistricts = Object.values(DISTRICT_SEO_DATA);

  // Update document title, meta tags and canonical link dynamically for search engines
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = districtData.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', districtData.metaDescription);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://www.shamimtechsolution.com/service-area/${districtData.slug}`;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD Schema (LocalBusiness, BreadcrumbList, FAQPage)
    const scriptId = 'district-seo-jsonld';
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
          "@type": "LocalBusiness",
          "@id": `https://www.shamimtechsolution.com/service-area/${districtData.slug}#localbusiness`,
          "name": `Shamim Tech Solution - CCTV Sales & Service ${districtData.enName}`,
          "alternateName": [
            `CCTV Camera Price in ${districtData.enName}`,
            `${districtData.enName} CCTV Camera Shop`,
            `${districtData.enName} CCTV Technician`,
            `CCTV Service ${districtData.enName}`,
            `CCTV Repair ${districtData.enName}`,
            `IP Camera ${districtData.enName}`,
            `Access Control ${districtData.enName}`
          ],
          "image": "https://www.shamimtechsolution.com/logo.png",
          "telephone": "+8801790139333",
          "url": canonicalUrl,
          "priceRange": "৳৳",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rangpur Jahaj Company Mor, and Haragach Bazar Road",
            "addressLocality": "Haragach, Rangpur",
            "addressRegion": "Rangpur Division",
            "postalCode": "5440",
            "addressCountry": "BD"
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": `${districtData.enName} District` },
            { "@type": "AdministrativeArea", "name": "Rangpur Division" }
          ],
          "description": districtData.metaDescription
        },
        {
          "@type": "BreadcrumbList",
          "@id": `https://www.shamimtechsolution.com/service-area/${districtData.slug}#breadcrumb`,
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
              "name": "Service Areas",
              "item": "https://www.shamimtechsolution.com/#district-coverage"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `${districtData.enName} (${districtData.bnName})`,
              "item": canonicalUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": `https://www.shamimtechsolution.com/service-area/${districtData.slug}#faq`,
          "mainEntity": districtData.faqs.map(faq => ({
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

    // Scroll to top upon district page mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      // Clean up script on unmount
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [districtData]);

  // Filter products by selected category
  const filteredProducts = (products || []).filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const categories = Array.from(new Set((products || []).map(p => p.category))).filter(Boolean);

  const primaryPhone = companyInfo.phone || '01790139333';
  const secondaryPhone = companyInfo.secondaryPhone || '01865321530';
  const whatsappNumber = companyInfo.whatsappInternational || '8801790139333';

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* Top Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-sky-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between flex-wrap gap-2 text-xs">
          <nav className="flex items-center gap-1.5 text-slate-500 font-medium">
            <button 
              onClick={onNavigateHome}
              className="hover:text-cyan-700 font-medium flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>হোমপেজ (Home)</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-slate-400">সার্ভিস এরিয়া</span>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
              {districtData.enName} ({districtData.bnName})
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 hidden sm:inline">সরাসরি কল করুন:</span>
            <a 
              href={`tel:${primaryPhone}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-600 hover:bg-cyan-700 text-white font-mono font-bold text-xs shadow-xs transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Rangpur Division Local Service Hub • {districtData.enName}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-tech tracking-tight leading-tight max-w-4xl">
            {districtData.h1}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-cyan-100/90 font-bangla max-w-3xl leading-relaxed">
            {districtData.bengaliTagline}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {districtData.aboutDistrict}
          </p>

          {/* Quick Action Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${primaryPhone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>টেকনিশিয়ান কল করুন: {primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I need CCTV / technical service in ${districtData.enName}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপ মেসেজ ({whatsappNumber})</span>
            </a>

            <a
              href={`tel:${secondaryPhone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all"
            >
              <span>হেল্পলাইন ২:</span>
              <span className="font-mono">{secondaryPhone}</span>
            </a>
          </div>

          {/* Delivery & Dispatch Note */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs pt-6 border-t border-white/10">
            <div className="flex items-center gap-2.5 text-cyan-200">
              <Truck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>ডেলিভারি:</strong> {districtData.deliveryTimeline}</span>
            </div>
            <div className="flex items-center gap-2.5 text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>অফিসিয়াল গ্যারান্টি:</strong> ১০০% জেনুইন ব্র্যান্ড প্রোডাক্টস</span>
            </div>
            <div className="flex items-center gap-2.5 text-amber-200">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>বেস লোকেশন:</strong> রংপুর জাহাজ কোম্পানি মোড় ও হারাগাছ</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8 Districts Navigation Pills */}
      <section className="bg-white border-b border-sky-200 py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <span className="text-xs font-bold text-slate-700 shrink-0 uppercase tracking-wider font-tech flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-600" />
              ৮টি জেলা:
            </span>
            {allDistricts.map((dist) => {
              const isActive = dist.slug === districtData.slug;
              return (
                <button
                  key={dist.slug}
                  onClick={() => onSelectDistrict(dist.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-600 text-white shadow-sm ring-2 ring-cyan-400'
                      : 'bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-800 border border-slate-200'
                  }`}
                >
                  <span className="font-bangla">{dist.bnName}</span>
                  <span className={`text-[10px] ${isActive ? 'text-cyan-100' : 'text-slate-500'}`}>({dist.enName})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* 1. Local Coverage & Upazilas */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-200 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-2 border-b border-sky-100 pb-4 mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 font-tech">
                Service Area Coverage in {districtData.enName} District (সেবা অঞ্চল ও উপজেলা)
              </h2>
              <p className="text-xs text-slate-500 font-bangla mt-1">
                {districtData.enName} জেলার নিচের সকল উপজেলা এবং সংলগ্ন বাণিজ্যিক অঞ্চলে আমাদের অন-সাইট টেকনিশিয়ান সার্ভিস চালু রয়েছে:
              </p>
            </div>
            <span className="text-[11px] font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
              {districtData.upazilas.length}টি প্রধান এলাকা / উপজেলা
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {districtData.upazilas.map((upazila, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-slate-50 hover:bg-cyan-50 border border-slate-200/80 hover:border-cyan-300 text-xs font-semibold text-slate-700 hover:text-cyan-900 transition-all flex items-center gap-2 shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span className="truncate">{upazila}</span>
              </div>
            ))}
          </div>

          {/* Key Landmarks */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-600">গুরুত্বপূর্ণ স্পট / ল্যান্ডমার্ক:</span>
            {districtData.keyLandmarks.map((landmark, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium border border-slate-200">
                {landmark}
              </span>
            ))}
          </div>
        </section>

        {/* 2. Technical Services Grid */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest font-tech bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Technical Services in {districtData.enName}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-tech mt-2">
              পেশাদার টেকনিক্যাল সার্ভিস ও ইনস্টলেশন সাপোর্ট
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-bangla mt-1">
              অভিজ্ঞ টেকনিশিয়ান দ্বারা দ্রুততম সময়ে অন-সাইট ফিটিং, ওয়্যারিং ও ত্রুটি সমাধান
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {districtData.servicesOffered.map((svc, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-sky-200 hover:border-cyan-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center font-bold text-base mb-4">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-tech leading-snug">
                    {svc.title}
                  </h3>
                  <h4 className="text-xs font-bold text-cyan-700 font-bangla mt-0.5">
                    {svc.bengaliTitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5 font-bangla">
                    {svc.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${primaryPhone}`}
                    className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Phone className="w-3 h-3" />
                    <span>সার্ভিস বুক করুন</span>
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I want to book "${svc.title}" in ${districtData.enName}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                    title="WhatsApp Consultation"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Real Product Catalog with Live Pricing in BDT */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-sky-100 pb-5">
            <div>
              <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-widest font-tech bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
                Genuine Products • Live Database
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-tech mt-1">
                CCTV Camera Price in {districtData.enName} & Available Products
              </h2>
              <p className="text-xs text-slate-500 font-bangla mt-0.5">
                {districtData.enName} জেলার গ্রাহকদের জন্য বিদ্যমান ডাটাবেসের অরিজিনাল প্রোডাক্ট, সঠিক মূল্য ও তাৎক্ষণিক ডেলিভারি
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                সব পণ্য ({products.length})
              </button>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.slice(0, 12).map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-xl border-2 border-slate-200 hover:border-cyan-400 p-4 transition-all hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div 
                    onClick={() => onViewProduct(item)}
                    className="relative aspect-square w-full rounded-lg bg-slate-100 overflow-hidden cursor-pointer border border-slate-200/80 mb-3"
                  >
                    <img 
                      src={item.image || '/logo.png'} 
                      alt={`${item.name} in ${districtData.enName}`}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {item.warranty && (
                      <span className="absolute top-2 left-2 bg-slate-900/90 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                        {item.warranty}
                      </span>
                    )}
                    {item.badge && (
                      <span className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Brand & Category */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono mb-1">
                    <span className="font-bold text-cyan-700">{item.brand || 'STS'}</span>
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded">{item.category}</span>
                  </div>

                  {/* Product Title */}
                  <h3 
                    onClick={() => onViewProduct(item)}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-cyan-700 line-clamp-2 cursor-pointer font-tech transition-colors leading-snug"
                    title={item.name}
                  >
                    {item.name}
                  </h3>

                  {/* Specs Snippet */}
                  {item.specs && (
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-bangla">
                      {item.specs}
                    </p>
                  )}
                </div>

                {/* Price and Actions */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-2.5">
                    <div>
                      <span className="text-base font-black text-slate-900 font-mono">
                        ৳{item.price.toLocaleString('en-BD')}
                      </span>
                      {item.regularPrice && item.regularPrice > item.price && (
                        <span className="text-xs text-slate-400 line-through font-mono ml-1.5">
                          ৳{item.regularPrice.toLocaleString('en-BD')}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      ইন স্টক
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 text-[11px] font-bold border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShoppingCart className="w-3 h-3 text-cyan-600" />
                      <span>কার্টে যোগ</span>
                    </button>
                    <button
                      onClick={() => onBuyNow(item)}
                      className="py-1.5 px-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer shadow-xs"
                    >
                      <span>এখনই কিনুন</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm cursor-pointer transition-colors"
            >
              <span>সকল ক্যাটাগরি ও পণ্য দেখুন (হোম শপ)</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </section>

        {/* 4. Search Intents & District Keywords (Rich SEO Context) */}
        <section className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-base sm:text-lg font-black text-slate-900 font-tech mb-2">
            Popular Searches in {districtData.enName} (সার্চ ইনটেন্ট ও সেবা সমূহ)
          </h2>
          <p className="text-xs text-slate-600 font-bangla mb-4">
            {districtData.enName} জেলা ও উপজেলা থেকে গ্রাহকরা গুগল সার্চে যেসব তথ্যের খোঁজ করেন:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-cyan-600" />
                <span>বাংলা সার্চ কিওয়ার্ডস ({districtData.bnName}):</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {districtData.popularSearchesBn.map((kw, idx) => (
                  <span key={idx} className="bg-white text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200 font-bangla">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span>English Search Queries ({districtData.enName}):</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {districtData.popularSearchesEn.map((kw, idx) => (
                  <span key={idx} className="bg-white text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Frequently Asked Questions (Accordion) */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-200 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-widest font-tech bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200">
                FAQs • {districtData.enName}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-tech mt-1">
                Frequently Asked Questions (সচরাচর জিজ্ঞাসিত প্রশ্ন)
              </h2>
              <p className="text-xs text-slate-500 font-bangla mt-0.5">
                {districtData.enName} জেলায় সিসিটিভি ক্যামেরা কেনা ও ইনস্টলেশন সংক্রান্ত সাধারণ প্রশ্ন ও উত্তর
              </p>
            </div>

            <div className="space-y-3">
              {districtData.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-cyan-700 flex items-center justify-between gap-3 bg-slate-50 hover:bg-cyan-50/50 cursor-pointer transition-colors"
                    >
                      <span className="font-bangla">{faq.question}</span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-cyan-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 font-bangla leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Direct Contact & Booking Banner */}
        <section className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-10 translate-y-10">
            <STSLogo size="lg" showText={false} theme="light" />
          </div>

          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold text-cyan-100 uppercase tracking-wider font-tech bg-white/20 px-3 py-1 rounded-full">
              Instant Dispatch & Support
            </span>
            <h2 className="text-xl sm:text-3xl font-black font-tech mt-2 leading-tight">
              {districtData.enName} জেলায় টেকনিশিয়ান বা পণ্যের জন্য যোগাযোগ করুন
            </h2>
            <p className="text-xs sm:text-sm text-cyan-100 font-bangla mt-2 leading-relaxed">
              সরাসরি কল বা হোয়াটসঅ্যাপে আপনার ঠিকানা ও প্রয়োজনীয়তা জানিয়ে বুকিং করুন। আমাদের টেকনিশিয়ান দ্রুত আপনার ঠিকানায় সেবা দিতে প্রস্তুত।
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>হটলাইন: {primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Shamim Tech Solution, I am from ${districtData.enName} and need technical service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {whatsappNumber}</span>
              </a>

              <a
                href={`tel:${secondaryPhone}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/30"
              >
                <span>বিকল্প ফোন:</span>
                <span className="font-mono">{secondaryPhone}</span>
              </a>
            </div>

            <p className="mt-4 text-[11px] text-cyan-100/80 font-mono">
              অফিস ঠিকানা: রংপুর জাহাজ কোম্পানি মোড় ও হারাগাছ বাজার রোড, রংপুর।
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
