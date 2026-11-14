import React, { useEffect, useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
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
  Package,
  ShoppingCart,
  Wrench,
  RotateCcw
} from 'lucide-react';
import { ProductSEOInfo, PRODUCTS_SEO_DATA } from '../data/productsSEOData';
import { SERVICES_SEO_DATA } from '../data/servicesSEOData';
import { DISTRICT_SEO_DATA } from '../data/districtSEOData';
import { Product, CompanyInfo } from '../types';

interface ProductDetailPageProps {
  productSlug: string;
  products: Product[];
  companyInfo: CompanyInfo;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
  onViewProduct: (product: Product) => void;
  onNavigateHome: () => void;
  onNavigateService?: (slug: string) => void;
  onNavigateProduct?: (slug: string) => void;
  onSelectService?: (slug: string) => void;
  onSelectProduct?: (slug: string) => void;
  onSelectDistrict: (slug: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productSlug,
  products,
  companyInfo,
  onAddToCart,
  onBuyNow,
  onViewProduct,
  onNavigateHome,
  onNavigateService,
  onNavigateProduct,
  onSelectService,
  onSelectProduct,
  onSelectDistrict,
  onRequestQuote
}) => {
  const handleServiceNav = onNavigateService || onSelectService || (() => {});
  const handleProductNav = onNavigateProduct || onSelectProduct || (() => {});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const productData: ProductSEOInfo = PRODUCTS_SEO_DATA[productSlug] || PRODUCTS_SEO_DATA['cctv-camera'];
  const allDistricts = Array.from(new Map(Object.values(DISTRICT_SEO_DATA).map(d => [d.slug, d])).values());

  // Find products in live catalog matching this product category
  const matchingCatalogItems = products.filter(p => {
    if (productData.category === 'CCTV Cameras') {
      return p.category === 'CCTV Cameras';
    }
    if (productData.category === 'Recording Systems') {
      return p.category === 'Recording Systems';
    }
    if (productData.category === 'Storage & Power') {
      return p.category === 'Storage & Power';
    }
    if (productData.category === 'PABX & Intercom') {
      return p.category === 'PABX & Intercom';
    }
    if (productData.category === 'Access Control & Smart Locks') {
      return p.category === 'Access Control & Smart Locks';
    }
    if (productData.category === 'Biometric Attendance') {
      return p.category === 'Biometric Attendance';
    }
    return p.category === 'Cables & Connectors' || p.category === 'LAN & Networking';
  });

  // Top representative catalog product for image (never fall back to unrelated items on inquiry-only SEO pages)
  const primaryCatalogItem = matchingCatalogItems[0] || (productData.isInquiryOnly ? null : products[0]);

  // Update document title, meta tags, and JSON-LD schema
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = productData.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', productData.metaDescription);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const canonicalSlug = productData.canonicalSlug || productData.slug;
    const canonicalUrl = `https://www.shamimtechsolution.com/products/${canonicalSlug}`;
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

    // Robots meta tag for non-canonical duplicate variants
    let dynamicRobots = document.querySelector('meta[name="robots"][data-dynamic-robots="true"]');
    if (productData.noindex) {
      if (!dynamicRobots) {
        dynamicRobots = document.createElement('meta');
        dynamicRobots.setAttribute('name', 'robots');
        dynamicRobots.setAttribute('data-dynamic-robots', 'true');
        document.head.appendChild(dynamicRobots);
      }
      dynamicRobots.setAttribute('content', 'noindex, follow');
    } else if (dynamicRobots) {
      dynamicRobots.remove();
    }

    // Dynamic JSON-LD Schema
    const scriptId = 'product-seo-jsonld';
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
          "@type": "Product",
          "@id": `${canonicalUrl}#product`,
          "name": productData.name,
          "alternateName": productData.bnName,
          "image": primaryCatalogItem?.image || "https://www.shamimtechsolution.com/images/default-cctv.png",
          "description": productData.metaDescription,
          "category": productData.category,
          "brand": {
            "@type": "Brand",
            "name": "Hikvision / Dahua / ZKTeco / Imou"
          },
          "offers": primaryCatalogItem || !productData.isInquiryOnly ? {
            "@type": "Offer",
            "priceCurrency": "BDT",
            "price": primaryCatalogItem?.price || 1850,
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "LocalBusiness",
              "name": "Shamim Tech Solution",
              "telephone": companyInfo.phone || "01790139333",
              "url": "https://www.shamimtechsolution.com/"
            }
          } : {
            "@type": "Offer",
            "url": canonicalUrl,
            "seller": {
              "@type": "LocalBusiness",
              "name": "Shamim Tech Solution",
              "telephone": companyInfo.phone || "01790139333",
              "url": "https://www.shamimtechsolution.com/"
            }
          }
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
              "name": "Products",
              "item": "https://www.shamimtechsolution.com/#products"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": productData.name,
              "item": canonicalUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": productData.faqs.map(faq => ({
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

    return () => {
      const staleRobots = document.querySelector('meta[name="robots"][data-dynamic-robots="true"]');
      if (staleRobots) {
        staleRobots.remove();
      }
    };
  }, [productData, primaryCatalogItem, companyInfo]);

  // WhatsApp click handler
  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Technician Shamim,\nI want to purchase / inquire about product: "${productData.name} (${productData.bnName})".\nEstimated Price: ${productData.priceNote}.\nPlease share availability and order process.`
    );
    window.open(`https://wa.me/${companyInfo.whatsappInternational || '8801790139333'}?text=${text}`, '_blank');
  };

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
              Products
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-cyan-700 font-bold truncate max-w-[200px] sm:max-w-none">
              {productData.name}
            </span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-cyan-800 border border-sky-300 font-bold transition cursor-pointer text-xs shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>মূল শপে ফিরুন</span>
          </button>
        </div>
      </div>

      {/* Hero Product Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border-2 border-sky-300 p-5 sm:p-8 lg:p-10 shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Product Image & Badges */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative h-64 sm:h-80 rounded-2xl bg-white border-2 border-sky-200 p-4 flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  src={primaryCatalogItem?.image || '/placeholder-cctv.png'}
                  alt={productData.name}
                  className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-[11px] font-bold text-cyan-800 shadow-xs">
                  {primaryCatalogItem?.brand || (productData.isInquiryOnly ? productData.name.split(' ')[0] : 'Hikvision / Dahua')}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[11px] font-bold text-emerald-800 flex items-center gap-1 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{productData.isInquiryOnly && !primaryCatalogItem ? 'মূল্য যাচাই করুন' : 'In Stock'}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-sky-200 flex items-center gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">১-২ বছর ওয়ারেন্টি</span>
                    <span className="text-[10px] text-slate-500">অফিসিয়াল রিপ্লেসমেন্ট</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-sky-200 flex items-center gap-2 shadow-2xs">
                  <Truck className="w-4 h-4 text-cyan-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">সারা দেশে ডেলিভারি</span>
                    <span className="text-[10px] text-slate-500">ক্যাশ অন ডেলিভারি</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Order Actions */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-cyan-800 text-xs font-bold font-tech uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                <span>{productData.category} • Original Hardware</span>
              </div>

              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-tech tracking-tight leading-snug">
                {productData.h1}
              </h1>

              <p className="text-sm sm:text-base text-cyan-800 font-semibold font-tech">
                {productData.bengaliTagline}
              </p>

              {/* Price Banner */}
              <div className="p-3.5 rounded-xl bg-sky-100/80 border-2 border-sky-300 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-[11px] text-slate-600 block uppercase font-bold tracking-wider">
                    সেরা বিক্রয় মূল্য (Special Rate)
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-cyan-900 font-mono">
                    {productData.priceNote}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                  অরিজিনাল ব্র্যান্ড ওয়ারেন্টি
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {productData.overview || productData.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                {primaryCatalogItem && (
                  <>
                    <button
                      type="button"
                      onClick={() => onBuyNow(primaryCatalogItem)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>সরাসরি অর্ডার করুন (Buy Now)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToCart(primaryCatalogItem)}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-sky-50 text-slate-800 border-2 border-sky-300 font-bold text-xs sm:text-sm shadow-xs flex items-center gap-2 transition cursor-pointer"
                    >
                      <span>কার্টে যোগ করুন</span>
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 transition cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp এ অর্ডার</span>
                </button>

                <a
                  href={`tel:${companyInfo.phone || '01790139333'}`}
                  className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{companyInfo.phone || '01790139333'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Key Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Tech Specs */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-3">
            <div className="flex items-center gap-2 text-cyan-700">
              <Layers className="w-5 h-5 text-cyan-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 font-tech">
                প্রযুক্তিগত স্পেসিফিকেশন (Technical Specs)
              </h2>
            </div>
            <div className="divide-y divide-sky-100 text-xs sm:text-sm">
              {productData.specifications.map((spec, idx) => (
                <div key={idx} className="py-2.5 flex justify-between items-center gap-4">
                  <span className="font-bold text-slate-600">{spec.label}</span>
                  <span className="font-medium text-slate-900 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features & Buying Guide */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-700 mb-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-tech">
                  মূল বৈশিষ্ট্য ও সুবিধাসমূহ (Key Highlights)
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {productData.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-sky-100">
              <h4 className="text-xs font-bold text-slate-800 font-tech uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-cyan-600" />
                <span>ক্রয় নির্দেশিকা (Buying Advice)</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {productData.buyingGuide.map((guide, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>{guide}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Available Models in Stock */}
      {matchingCatalogItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold text-cyan-700 font-tech uppercase tracking-wider block">
                  Available in Stock
                </span>
                <h3 className="text-base sm:text-xl font-bold text-slate-900 font-tech">
                  স্টকে থাকা সংশ্লিষ্ট মডেলসমূহ ({matchingCatalogItems.length} Products)
                </h3>
              </div>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300 font-bold">
                ১০০% অরিজিনাল ব্র্যান্ড ওয়ারেন্টি
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {matchingCatalogItems.map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200 hover:border-sky-300 transition flex flex-col justify-between">
                  <div>
                    <div className="h-36 rounded-lg bg-white border border-sky-100 flex items-center justify-center p-2 overflow-hidden mb-2.5 shadow-2xs">
                      <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-100 font-bold text-cyan-800">
                      {p.brand}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 font-tech line-clamp-2 mt-1">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-sky-200 mt-2.5 flex items-center justify-between gap-1">
                    <span className="font-mono text-sm font-black text-cyan-900">
                      {(p.priceType === 'contact' || p.isContactForPrice) ? 'Contact' : `৳ ${p.price.toLocaleString()}`}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onViewProduct(p)}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                        title="বিস্তারিত দেখুন"
                      >
                        ডিটেইলস
                      </button>
                      <button
                        type="button"
                        onClick={() => onBuyNow(p)}
                        className="px-2.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold cursor-pointer"
                      >
                        অর্ডার
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products & Related Services (Internal Linking) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-700">
              <Package className="w-4 h-4 text-cyan-600" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-tech">
                সম্পর্কিত অন্যান্য প্রোডাক্ট ও ক্যাটাগরি (Related Products)
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {productData.relatedProductSlugs.map((pSlug) => {
                const prod = PRODUCTS_SEO_DATA[pSlug];
                if (!prod) return null;
                return (
                  <button
                    key={pSlug}
                    type="button"
                    onClick={() => handleProductNav(pSlug)}
                    className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-xs font-semibold text-cyan-900 hover:text-cyan-700 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Tag className="w-3 h-3 text-cyan-600" />
                    <span>{prod.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Related Services Links */}
          <div className="pt-3 border-t border-sky-100 space-y-2">
            <div className="flex items-center gap-2 text-slate-700">
              <Wrench className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-bold uppercase tracking-wider font-tech">
                এই প্রোডাক্টের ইনস্টলেশন ও টেকনিক্যাল সার্ভিসেস (Related Services)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {productData.relatedServiceSlugs.map((sSlug) => {
                const srv = SERVICES_SEO_DATA[sSlug];
                if (!srv) return null;
                return (
                  <button
                    key={sSlug}
                    type="button"
                    onClick={() => handleServiceNav(sSlug)}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-xs font-medium text-slate-800 hover:text-cyan-800 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <Wrench className="w-3 h-3 text-cyan-600" />
                    <span>{srv.name}</span>
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
                সার্ভিস ও পণ্য ডেলিভারি এলাকা (Delivery & On-Site Areas)
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              রংপুর বিভাগ সহ সারা বাংলাদেশে কুরিয়ার সার্ভিস
            </span>
          </div>

          <p className="text-xs text-slate-600">
            আমরা নিচের জেলাগুলোতে সরাসরি টেকনিশিয়ান দ্বারা অন-সাইট ফিটিং ও হোম ডেলিভারি প্রদান করি:
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

      {/* Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-sky-300 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-cyan-700">
            <HelpCircle className="w-5 h-5 text-cyan-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-tech">
              সাধারণ জিজ্ঞাসা ও উত্তর (Frequently Asked Questions)
            </h2>
          </div>

          <div className="space-y-2.5">
            {productData.faqs.map((faq, idx) => (
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
        {primaryCatalogItem ? (
          <button
            type="button"
            onClick={() => onBuyNow(primaryCatalogItem)}
            className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>সরাসরি অর্ডার</span>
          </button>
        ) : (
          <a
            href={`tel:${companyInfo.phone || '01790139333'}`}
            className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call: {companyInfo.phone || '01790139333'}</span>
          </a>
        )}

        <button
          type="button"
          onClick={handleWhatsAppOrder}
          className="flex-1 py-2 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp অর্ডার</span>
        </button>
      </div>

    </div>
  );
};
