import React, { useState, useMemo, useEffect } from 'react';
import { 
  Phone, 
  ShoppingCart, 
  Search, 
  User, 
  Menu, 
  X, 
  MapPin,
  Wrench,
  Package,
  Home as HomeIcon,
  SlidersHorizontal,
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { STSLogo } from './STSLogo';
import { COMPANY_INFO, SERVICES_LIST, DIVISION_DISTRICTS } from '../data/companyData';
import { loadAllServicesSEO } from '../seo/seoLoader';
import type { ServiceSEOInfo } from '../seo/servicesSEOData';
import { matchesProductSearch, scoreServiceOrDistrictMatch } from '../utils/searchHelper';
import { CompanyInfo, CustomerUser, Product } from '../types';

interface NavbarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
  cartCount?: number;
  cartItemCount?: number;
  openCart?: () => void;
  onOpenCart?: () => void;
  openSearch?: () => void;
  openAuth?: () => void;
  customer?: CustomerUser | null;
  onOpenCustomerAuth?: (mode?: 'login' | 'register') => void;
  onOpenCustomerProfile?: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onOpenAdmin?: () => void;
  isAdminLoggedIn?: boolean;
  companyInfo?: CompanyInfo;
  products?: Product[];
  onViewProduct?: (product: Product) => void;
  onSelectDistrict?: (slug: string) => void;
  onSelectService?: (slug: string) => void;
  onSelectProduct?: (slug: string) => void;
  onNavigateHome?: () => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = 'home',
  setActiveSection,
  cartCount,
  cartItemCount,
  openCart,
  onOpenCart,
  openSearch,
  openAuth,
  customer,
  onOpenCustomerAuth,
  onOpenCustomerProfile,
  searchTerm,
  setSearchTerm,
  onOpenAdmin,
  isAdminLoggedIn = false,
  companyInfo: passedCompany,
  products = [],
  onViewProduct,
  onSelectDistrict,
  onSelectService,
  onNavigateHome,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [seoServicesMap, setSeoServicesMap] = useState<Record<string, ServiceSEOInfo> | null>(null);
  const activeCompany = passedCompany || COMPANY_INFO;
  const displayCartCount = cartCount ?? cartItemCount ?? 0;

  useEffect(() => {
    if (!searchTerm.trim() || seoServicesMap !== null) return;
    let cancelled = false;
    loadAllServicesSEO()
      .then((data) => {
        if (!cancelled) setSeoServicesMap(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [searchTerm, seoServicesMap]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return { products: [], services: [], districts: [], totalMatches: 0 };
    }

    const matchedProducts = (products || [])
      .filter((item) => matchesProductSearch(item, searchTerm))
      .slice(0, 6);

    // Search canonical dedicated service & technician SEO pages plus core SERVICES_LIST
    const seoServiceMatches = (seoServicesMap ? (Object.values(seoServicesMap) as ServiceSEOInfo[]) : ([] as ServiceSEOInfo[]))
      .filter((srv) => !srv.canonicalSlug)
      .map((srv) => {
        const kwText = (srv.popularSearchKeywords || []).join(' ');
        const heading = `${srv.slug.replace(/-/g, ' ')} ${srv.name} ${srv.bnName} ${srv.title}`;
        const target = `${heading} ${srv.category} ${srv.description} ${kwText}`;
        const score = scoreServiceOrDistrictMatch(target, searchTerm, heading);
        return {
          id: `seo-${srv.slug}`,
          slug: srv.slug,
          name: srv.name,
          serviceType: srv.category,
          description: srv.bnName || srv.description,
          score
        };
      })
      .filter((m) => m.score > 0);

    const listServiceMatches = SERVICES_LIST
      .map((srv) => {
        const srvKw = (srv.popularKeywords || []).join(' ');
        const heading = `${srv.name} ${srv.bnName || ''} ${srv.serviceType}`;
        const target = `${heading} ${srv.description} ${srvKw}`;
        const score = scoreServiceOrDistrictMatch(target, searchTerm, heading);
        return {
          id: srv.id,
          slug: undefined as string | undefined,
          name: srv.name,
          serviceType: srv.serviceType,
          description: srv.description,
          score
        };
      })
      .filter((m) => m.score > 0);

    const combinedServices = [...seoServiceMatches, ...listServiceMatches]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    const matchedDistricts = DIVISION_DISTRICTS
      .map((dist) => {
        const distKw = dist.popularKeywords.join(' ');
        const distSrv = dist.services.join(' ');
        const heading = `${dist.enName} ${dist.bnName}`;
        const target = `${heading} ${distKw} ${distSrv}`;
        const score = scoreServiceOrDistrictMatch(target, searchTerm, heading);
        return { dist, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map((item) => item.dist);

    return {
      products: matchedProducts,
      services: combinedServices,
      districts: matchedDistricts,
      totalMatches: matchedProducts.length + combinedServices.length + matchedDistricts.length
    };
  }, [searchTerm, products, seoServicesMap]);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'service-areas', label: 'Service Areas', icon: MapPin },
    { id: 'technician', label: 'Technician', icon: User },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'contact' && onOpenContact) {
      setMobileMenuOpen(false);
      setMobileSearchOpen(false);
      onOpenContact();
      return;
    }
    if (onNavigateHome) onNavigateHome();
    if (typeof setActiveSection === 'function') {
      try { setActiveSection(id); } catch (e) { console.warn('setActiveSection error', e); }
    }
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
    setTimeout(() => {
      const targetId = id === 'service-areas' ? 'district-coverage' : id === 'technician' ? 'services' : id;
      const element = document.getElementById(targetId) || document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const handleCartClick = () => {
    if (typeof openCart === 'function') openCart();
    else if (typeof onOpenCart === 'function') onOpenCart();
  };

  const handleSearchToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    if (!mobileSearchOpen) {
      const element = document.getElementById('products');
      if (element && activeSection !== 'products') element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthClick = (mode: 'login' | 'register' = 'register') => {
    if (customer && onOpenCustomerProfile) onOpenCustomerProfile();
    else if (onOpenCustomerAuth) onOpenCustomerAuth(mode);
    else if (typeof openAuth === 'function') openAuth();
    else handleNavClick('contact');
  };

  return (
    <header className="sticky top-0 z-40 w-full lg:bg-[#123A70] lg:border-b lg:border-[#DCE7F2]/30 lg:shadow-md lg:shadow-[#123A70]/15 lg:backdrop-blur-md overflow-visible">

      <div className="w-full bg-[#123A70] border-b border-[#DCE7F2]/30 shadow-sm shadow-[#123A70]/15 lg:bg-transparent lg:border-b-0 lg:shadow-none">
      <div className="max-w-[1536px] w-full mx-auto px-3 sm:px-4 lg:px-6 box-border">
        <div className="flex items-center justify-between h-[72px] sm:h-20 gap-2 w-full">
          
          <button 
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              handleNavClick('home');
            }}
            className="flex items-center text-left focus:outline-none group cursor-pointer min-w-0 flex-1 sm:flex-initial sm:shrink-0"
            title={activeCompany.name}
          >
            <STSLogo size="md" theme="dark" />
          </button>

          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 flex-1 min-w-0 justify-center overflow-hidden mx-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 px-1.5 xl:px-2 2xl:px-2.5 py-2 bg-transparent border-0 focus:outline-none text-sm 2xl:text-[15px] font-tech font-black tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-[#BBF7D0]' : 'text-white/95 hover:text-[#BBF7D0]'
                  }`}>
                  <Icon className={`w-4 h-4 hidden 2xl:inline-block ${isActive ? 'text-[#BBF7D0]' : 'text-white/90'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-auto pl-1 pr-1 bg-transparent">
            
            <div className="relative hidden lg:block w-32 xl:w-40 2xl:w-56 transition-all duration-300 shrink-0">
              <input type="text" value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); if (e.target.value && activeSection !== 'products') handleNavClick('products'); }}
                placeholder="Search camera, DVR..."
                className="w-full bg-[#1A4B8C]/80 text-xs sm:text-sm text-white placeholder-blue-100/75 rounded-full pl-8 pr-7 py-1.5 border border-white/25 focus:border-white/60 focus:bg-[#1A4B8C] focus:outline-none focus:ring-1 focus:ring-white/40 transition-all shadow-inner" />
              <Search className="w-3.5 h-3.5 text-blue-200 absolute left-2.5 top-2.5 pointer-events-none" />
              {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-2.5 top-2 text-xs text-blue-200 hover:text-white px-1">✕</button>}
              {searchTerm.trim().length > 0 && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-[#DCE7F2] rounded-xl shadow-lg overflow-hidden z-50 divide-y divide-[#DCE7F2] animate-fadeIn w-[320px] sm:w-[380px] max-w-[90vw] max-h-[460px] overflow-y-auto">
                  {searchResults.totalMatches > 0 ? (
                    <>
                      {searchResults.products.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-[#F7FAFC] flex items-center justify-between text-[11px] font-bold text-[#123A70]">
                            <span>Cameras & Hardware ({searchResults.products.length})</span>
                            <button onClick={() => handleNavClick('products')} className="text-[#123A70] hover:underline cursor-pointer">View All →</button>
                          </div>
                          {searchResults.products.map((prod) => (
                            <div key={prod.id} onClick={() => { if (onViewProduct) onViewProduct(prod); handleNavClick('products'); }}
                              className="flex items-center gap-2.5 p-2 hover:bg-[#F7FAFC] cursor-pointer transition-colors">
                              <div className="w-9 h-9 rounded bg-white p-1 shrink-0 flex items-center justify-center border border-[#DCE7F2]">
                                <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[9px] text-[#147A43] font-bold uppercase">{prod.brand}</div>
                                <div className="text-xs font-semibold text-[#1F2937] truncate">{prod.name}</div>
                                <div className="text-xs font-black text-[#123A70]">৳ {prod.price.toLocaleString('en-US')}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {searchResults.services.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-[#F7FAFC] flex items-center justify-between text-[11px] font-bold text-[#123A70]">
                            <span>Services & Technicians ({searchResults.services.length})</span>
                            <button onClick={() => handleNavClick('services')} className="text-[#123A70] hover:underline cursor-pointer">All Services →</button>
                          </div>
                          {searchResults.services.map((srv) => (
                            <div
                              key={srv.id}
                              onClick={() => {
                                if (srv.slug && onSelectService) {
                                  onSelectService(srv.slug);
                                  setSearchTerm('');
                                } else {
                                  handleNavClick('services');
                                }
                              }}
                              className="p-2.5 hover:bg-[#F7FAFC] cursor-pointer transition-colors border-b border-[#DCE7F2] last:border-0">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-bold text-[#123A70] truncate">{srv.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EFF5FB] text-[#123A70] border border-[#DCE7F2] font-semibold shrink-0">{srv.serviceType}</span>
                              </div>
                              <p className="text-[11px] text-[#4B5563] line-clamp-1 mt-0.5">{srv.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {searchResults.districts.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-[#F7FAFC] flex items-center justify-between text-[11px] font-bold text-[#147A43]">
                            <span>District Service Coverage ({searchResults.districts.length})</span>
                            <button onClick={() => handleNavClick('services')} className="text-[#147A43] hover:underline cursor-pointer">View Coverage →</button>
                          </div>
                          {searchResults.districts.map((dist) => {
                            const distSlug = dist.enName.toLowerCase();
                            return (
                              <div 
                                key={dist.id} 
                                onClick={() => {
                                  if (onSelectDistrict) {
                                    onSelectDistrict(distSlug);
                                    setSearchTerm('');
                                  } else {
                                    handleNavClick('services');
                                  }
                                }} 
                                className="p-2 hover:bg-[#F7FAFC] cursor-pointer transition-colors"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#1F2937] flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3 text-[#123A70] shrink-0" />
                                    <span>{dist.bnName} ({dist.enName})</span>
                                  </span>
                                  <span className="text-[10px] text-[#147A43] font-medium">View Service Area →</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-3 text-center text-xs text-[#4B5563] space-y-2">
                      <p>"{searchTerm}" এর সাথে প্রোডাক্ট বা সার্ভিস খুঁজছেন?</p>
                      <button onClick={() => handleNavClick('services')} className="w-full py-1.5 px-2 rounded-lg bg-[#EFF5FB] text-[#123A70] font-bold text-[11px] border border-[#DCE7F2]">রংপুর বিভাগের ৮টি জেলার সার্ভিসসমূহ দেখুন →</button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button onClick={handleSearchToggle} className={`lg:hidden p-1.5 sm:p-2 rounded-lg border cursor-pointer shrink-0 transition-colors ${mobileSearchOpen ? 'bg-[#12733D] text-white border-[#12733D] font-bold hover:bg-[#106637] active:bg-[#106637]' : 'bg-[#1A4B8C]/75 border-white/25 text-white hover:border-white/50 hover:text-[#BBF7D0]'}`}>
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {isAdminLoggedIn && onOpenAdmin && (
              <button id="header-admin-btn" onClick={onOpenAdmin} className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer bg-[#147A43]/30 border-white/30 text-white hover:bg-[#147A43]/45 shadow-sm shrink-0 whitespace-nowrap">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#BBF7D0]" /><span className="hidden xl:inline">Admin Panel</span><span className="w-2 h-2 rounded-full bg-[#86EFAC] animate-pulse" />
              </button>
            )}

            {customer ? (
              <button id="header-customer-account-btn" onClick={() => handleAuthClick()} className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-1.5 rounded-lg bg-[#1A4B8C]/80 border border-white/25 text-white hover:bg-[#1A4B8C] text-xs font-semibold cursor-pointer shadow-sm shrink-0 whitespace-nowrap">
                <div className="w-5 h-5 rounded-full bg-[#147A43] text-white flex items-center justify-center font-bold text-[10px] shrink-0">{customer.fullName.charAt(0).toUpperCase()}</div>
                <span className="max-w-[50px] xs:max-w-[75px] sm:max-w-[110px] truncate text-white">{customer.fullName}</span>
              </button>
            ) : (
              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                <button id="header-register-btn" onClick={() => handleAuthClick('register')} className="hidden sm:flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-[#12733D] border border-white/25 text-white hover:bg-[#106637] active:bg-[#106637] text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0 shadow-sm transition-colors">
                  <User className="w-3.5 h-3.5 text-[#DCFCE7] shrink-0" /><span>Create Account</span>
                </button>
                <button id="header-login-btn" onClick={() => handleAuthClick('login')} className="flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-[#1A4B8C]/75 border border-white/25 text-white hover:bg-[#1A4B8C] hover:border-white/45 text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0 shadow-sm transition-colors">
                  <User className="w-4 h-4 text-[#BBF7D0] sm:hidden" /><span className="hidden xs:inline">Login</span>
                </button>
              </div>
            )}

            <button id="header-cart-btn" onClick={handleCartClick} className="relative flex items-center mr-1 sm:mr-0 gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] border border-white/25 text-white transition-all cursor-pointer shadow-sm shrink-0 whitespace-nowrap">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-wider">Cart</span>
              <span className="flex items-center justify-center min-w-[17px] sm:min-w-[20px] h-4 sm:h-5 px-1 sm:px-1.5 text-[10px] sm:text-xs font-black bg-white text-[#147A43] rounded-full shadow-xs">{displayCartCount}</span>
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-1.5 sm:p-2 rounded-lg bg-[#1A4B8C]/75 border border-white/25 text-white hover:border-white/50 hover:text-[#BBF7D0] cursor-pointer shrink-0 transition-colors">
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#BBF7D0]" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Quick Action Sub-bar */}
      <div className="lg:hidden w-full bg-[#F7FAFC] border-b border-[#DCE7F2] px-2 pt-2 pb-1.5">
        <div className="flex items-center justify-center gap-1.5 flex-nowrap max-w-lg mx-auto">
          <button
            onClick={() => handleNavClick('products')}
            className={`flex items-center justify-center gap-1 py-1 px-2 xs:px-2.5 rounded-lg border border-[#106637]/25 text-[11px] xs:text-xs font-semibold text-white active:scale-95 transition-colors cursor-pointer whitespace-nowrap ${
              activeSection === 'products' ? 'bg-[#106637]' : 'bg-[#12733D] hover:bg-[#106637] active:bg-[#106637]'
            }`}
          >
            <Package className="w-3 h-3 shrink-0 text-white" />
            <span>প্রোডাক্ট</span>
          </button>

          <button
            onClick={() => handleNavClick('technician')}
            className={`flex items-center justify-center gap-1 py-1 px-2 xs:px-2.5 rounded-lg border border-[#106637]/25 text-[11px] xs:text-xs font-semibold text-white active:scale-95 transition-colors cursor-pointer whitespace-nowrap ${
              activeSection === 'technician' ? 'bg-[#106637]' : 'bg-[#12733D] hover:bg-[#106637] active:bg-[#106637]'
            }`}
          >
            <User className="w-3 h-3 shrink-0 text-white" />
            <span>টেকনিশিয়ান</span>
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`flex items-center justify-center gap-1 py-1 px-2 xs:px-2.5 rounded-lg border border-[#106637]/25 text-[11px] xs:text-xs font-semibold text-white active:scale-95 transition-colors cursor-pointer whitespace-nowrap ${
              activeSection === 'services' ? 'bg-[#106637]' : 'bg-[#12733D] hover:bg-[#106637] active:bg-[#106637]'
            }`}
          >
            <Wrench className="w-3 h-3 shrink-0 text-white" />
            <span>সার্ভিস</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`flex items-center justify-center gap-1 py-1 px-2 xs:px-2.5 rounded-lg border border-[#106637]/25 text-[11px] xs:text-xs font-semibold text-white active:scale-95 transition-colors cursor-pointer whitespace-nowrap ${
              activeSection === 'contact' ? 'bg-[#106637]' : 'bg-[#12733D] hover:bg-[#106637] active:bg-[#106637]'
            }`}
          >
            <Phone className="w-3 h-3 shrink-0 text-white" />
            <span>কন্টাক্ট</span>
          </button>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE7F2] px-3 py-2.5 shadow-md animate-fadeIn">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#123A70] absolute left-3 pointer-events-none" />
            <input type="text" autoFocus value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); }}
              placeholder="Search cameras, Jovision, EZVIZ, DVR..."
              className="w-full bg-[#F7FAFC] text-xs sm:text-sm text-[#1F2937] placeholder-slate-400 rounded-lg pl-9 pr-8 py-2 border border-[#DCE7F2] focus:border-[#123A70] focus:outline-none focus:ring-1 focus:ring-[#123A70]" />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-2.5 text-xs text-slate-500 hover:text-[#1F2937] px-1">✕</button>
            )}
          </div>
          {searchTerm.trim().length > 0 && (searchResults.services.length > 0 || searchResults.districts.length > 0) && (
            <div className="mt-2 max-h-60 overflow-y-auto rounded-lg border border-[#DCE7F2] bg-white divide-y divide-[#DCE7F2]">
              {searchResults.services.slice(0, 3).map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => {
                    setMobileSearchOpen(false);
                    if (srv.slug && onSelectService) {
                      onSelectService(srv.slug);
                      setSearchTerm('');
                    } else {
                      handleNavClick('services');
                    }
                  }}
                  className="px-3 py-2 flex items-center justify-between gap-2 text-xs text-[#123A70] hover:bg-[#F7FAFC] cursor-pointer"
                >
                  <span className="font-bold truncate">{srv.name}</span>
                  <span className="text-[10px] text-[#4B5563] shrink-0">{srv.serviceType}</span>
                </div>
              ))}
              {searchResults.districts.slice(0, 3).map((dist) => (
                <div
                  key={dist.id}
                  onClick={() => {
                    setMobileSearchOpen(false);
                    if (onSelectDistrict) {
                      onSelectDistrict(dist.enName.toLowerCase());
                      setSearchTerm('');
                    } else {
                      handleNavClick('services');
                    }
                  }}
                  className="px-3 py-2 flex items-center justify-between text-xs text-[#147A43] hover:bg-[#F7FAFC] cursor-pointer"
                >
                  <span className="font-bold flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#123A70]" />
                    <span>{dist.bnName} ({dist.enName})</span>
                  </span>
                  <span className="text-[10px]">Service Area →</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {mobileMenuOpen && (
        <div className="xl:hidden bg-white backdrop-blur-md border-b border-[#DCE7F2] px-4 pt-3 pb-5 space-y-2 shadow-md">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left cursor-pointer ${isActive ? 'bg-[#EFF5FB] text-[#123A70] border border-[#DCE7F2]' : 'text-[#1F2937] hover:bg-[#F7FAFC] hover:text-[#123A70]'}`}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#123A70]' : 'text-[#4B5563]'}`} />{item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-[#DCE7F2] flex flex-col gap-2">
            {isAdminLoggedIn && onOpenAdmin && (
              <button onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold cursor-pointer bg-[#EAF6EF] border border-[#DCE7F2] text-[#147A43]">
                <Lock className="w-4 h-4 text-[#147A43]" /><span>STS Admin Control Panel (Online)</span>
              </button>
            )}
            {customer ? (
              <button onClick={() => { setMobileMenuOpen(false); if (onOpenCustomerProfile) onOpenCustomerProfile(); }}
                className="flex items-center justify-between w-full p-3 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] text-[#1F2937] text-sm font-semibold cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#123A70] text-white flex items-center justify-center font-bold text-xs">{customer.fullName.charAt(0).toUpperCase()}</div>
                  <div className="text-left"><div className="text-[#1F2937] text-xs font-bold leading-tight">{customer.fullName}</div><div className="text-[10px] text-[#123A70]">My Account & Orders</div></div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#EAF6EF] text-[#147A43] border border-[#DCE7F2]">Active</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { setMobileMenuOpen(false); if (onOpenCustomerAuth) onOpenCustomerAuth('register'); }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] border border-[#12733D] text-xs font-semibold text-white">Create Account</button>
                <button onClick={() => { setMobileMenuOpen(false); if (onOpenCustomerAuth) onOpenCustomerAuth('login'); }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#F7FAFC] hover:bg-[#EFF5FB] border border-[#DCE7F2] text-xs font-semibold text-[#1F2937]">Login</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
