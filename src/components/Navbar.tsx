import React, { useState, useMemo } from 'react';
import { 
  Phone, 
  ShoppingCart, 
  Search, 
  User, 
  Menu, 
  X, 
  MapPin, 
  Download,
  Image as GalleryIcon,
  Wrench,
  Package,
  Home as HomeIcon,
  Info,
  SlidersHorizontal,
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { STSLogo } from './STSLogo';
import { COMPANY_INFO, SERVICES_LIST, DIVISION_DISTRICTS } from '../data/companyData';
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
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const activeCompany = passedCompany || COMPANY_INFO;
  const displayCartCount = cartCount ?? cartItemCount ?? 0;

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return { products: [], services: [], districts: [], totalMatches: 0 };
    }
    const query = searchTerm.toLowerCase().trim();
    const tokens = query.split(/\s+/).filter(Boolean);
    const locationBrandTokens = new Set([
      'rangpur', 'dinajpur', 'lalmonirhat', 'kurigram', 'nilphamari', 'gaibandha', 'thakurgaon', 'panchagarh',
      'রংপুর', 'দিনাজপুর', 'লালমনিরহাট', 'কুড়িগ্রাম', 'নীলফামারী', 'গাইবান্ধা', 'ঠাকুরগাঁও', 'পঞ্চগড়',
      'shamim', 'sts', 'bd', 'bangladesh', 'tech', 'solution', 'technology', 'শামীম'
    ]);
    const stopWords = new Set(['and', 'in', 'of', 'for', 'the', 'to', 'ও', 'এবং']);
    const productTokens = tokens.filter(t => !locationBrandTokens.has(t) && !stopWords.has(t));
    const matchedProducts = (products || []).filter((item) => {
      const text = `${item.name} ${item.specs} ${item.brand} ${item.category}`.toLowerCase();
      if (text.includes(query)) return true;
      if (productTokens.length === 0) return true;
      return productTokens.every(t => text.includes(t));
    }).slice(0, 6);
    const matchedServices = SERVICES_LIST.filter((srv) => {
      const srvKw = (srv.popularKeywords || []).map(k => k.toLowerCase()).join(' ');
      const text = `${srv.name} ${srv.description} ${srv.serviceType} ${srvKw}`.toLowerCase();
      if (text.includes(query)) return true;
      return tokens.some(t => !stopWords.has(t) && text.includes(t));
    }).slice(0, 4);
    const matchedDistricts = DIVISION_DISTRICTS.filter((dist) => {
      const distKw = dist.popularKeywords.map(k => k.toLowerCase()).join(' ');
      const distSrv = dist.services.map(s => s.toLowerCase()).join(' ');
      const text = `${dist.enName} ${dist.bnName} ${distKw} ${distSrv}`.toLowerCase();
      if (text.includes(query)) return true;
      return tokens.some(t => !stopWords.has(t) && (
        dist.enName.toLowerCase().includes(t) ||
        dist.bnName.toLowerCase().includes(t) ||
        distKw.includes(t)
      ));
    }).slice(0, 4);
    return {
      products: matchedProducts,
      services: matchedServices,
      districts: matchedDistricts,
      totalMatches: matchedProducts.length + matchedServices.length + matchedDistricts.length
    };
  }, [searchTerm, products]);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'gallery', label: 'Gallery', icon: GalleryIcon },
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: MapPin },
  ];

  const handleNavClick = (id: string) => {
    if (typeof setActiveSection === 'function') {
      try { setActiveSection(id); } catch (e) { console.warn('setActiveSection error', e); }
    }
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
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
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-[#00234f] via-[#0b3c78] to-[#00234f] border-b-2 border-cyan-400/60 shadow-xl shadow-blue-950/40 backdrop-blur-md overflow-visible">

      <div className="max-w-[1536px] w-full mx-auto px-3 sm:px-4 lg:px-6 box-border">
        <div className="flex items-center justify-between h-[72px] sm:h-20 gap-2 w-full">
          
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer shrink-0 min-w-0 max-w-[150px] sm:max-w-none"
            title={activeCompany.name}
          >
            <STSLogo size="md" theme="dark" />
          </button>

          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 flex-1 min-w-0 justify-center overflow-hidden mx-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-[11px] 2xl:text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'text-sky-100 hover:text-white hover:bg-white/15'
                  }`}>
                  <Icon className={`w-3.5 h-3.5 hidden 2xl:inline-block ${isActive ? 'text-slate-950' : 'text-cyan-300'}`} />
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
                className="w-full bg-slate-900/90 text-xs sm:text-sm text-white placeholder-slate-400 rounded-full pl-8 pr-7 py-1.5 border border-cyan-800/60 focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner" />
              <Search className="w-3.5 h-3.5 text-cyan-400 absolute left-2.5 top-2.5 pointer-events-none" />
              {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-white px-1">✕</button>}
              {searchTerm.trim().length > 0 && (
                <div className="absolute top-full right-0 mt-2 bg-slate-950/98 backdrop-blur-md border border-cyan-500/50 rounded-xl shadow-2xl overflow-hidden z-50 divide-y divide-slate-800 animate-fadeIn w-[320px] sm:w-[380px] max-w-[90vw] max-h-[460px] overflow-y-auto">
                  {searchResults.totalMatches > 0 ? (
                    <>
                      {searchResults.products.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-slate-900/90 flex items-center justify-between text-[11px] font-bold text-cyan-300">
                            <span>Cameras & Hardware ({searchResults.products.length})</span>
                            <button onClick={() => handleNavClick('products')} className="text-cyan-400 hover:underline cursor-pointer">View All →</button>
                          </div>
                          {searchResults.products.map((prod) => (
                            <div key={prod.id} onClick={() => { if (onViewProduct) onViewProduct(prod); handleNavClick('products'); }}
                              className="flex items-center gap-2.5 p-2 hover:bg-cyan-950/60 cursor-pointer transition-colors">
                              <div className="w-9 h-9 rounded bg-white p-1 shrink-0 flex items-center justify-center border border-slate-200">
                                <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-[9px] text-cyan-400 font-bold uppercase">{prod.brand}</div>
                                <div className="text-xs font-semibold text-white truncate">{prod.name}</div>
                                <div className="text-xs font-black text-cyan-300">৳ {prod.price.toLocaleString('en-US')}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {searchResults.services.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-sky-950/90 flex items-center justify-between text-[11px] font-bold text-sky-300">
                            <span>Services & Technicians ({searchResults.services.length})</span>
                            <button onClick={() => handleNavClick('services')} className="text-sky-300 hover:underline cursor-pointer">All Services →</button>
                          </div>
                          {searchResults.services.map((srv) => (
                            <div key={srv.id} onClick={() => handleNavClick('services')}
                              className="p-2.5 hover:bg-cyan-950/50 cursor-pointer transition-colors border-b border-slate-800/60 last:border-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-cyan-300">{srv.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">{srv.serviceType}</span>
                              </div>
                              <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">{srv.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {searchResults.districts.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-cyan-950/90 flex items-center justify-between text-[11px] font-bold text-emerald-300">
                            <span>8 Districts Service Coverage ({searchResults.districts.length})</span>
                            <button onClick={() => handleNavClick('services')} className="text-emerald-400 hover:underline cursor-pointer">View Coverage →</button>
                          </div>
                          {searchResults.districts.map((dist) => (
                            <div key={dist.id} onClick={() => handleNavClick('services')} className="p-2 hover:bg-emerald-950/40 cursor-pointer transition-colors">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white flex items-center gap-1.5"><MapPin className="w-3 h-3 text-cyan-400 shrink-0" /><span>{dist.bnName} ({dist.enName})</span></span>
                                <span className="text-[10px] text-emerald-300 font-medium">On-site Support</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-3 text-center text-xs text-slate-300 space-y-2">
                      <p>"{searchTerm}" এর সাথে প্রোডাক্ট বা সার্ভিস খুঁজছেন?</p>
                      <button onClick={() => handleNavClick('services')} className="w-full py-1.5 px-2 rounded-lg bg-cyan-600/30 text-cyan-300 font-bold text-[11px] border border-cyan-500/30">রংপুর বিভাগের ৮টি জেলার সার্ভিসসমূহ দেখুন →</button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button onClick={handleSearchToggle} className={`lg:hidden p-1.5 sm:p-2 rounded-lg border text-slate-200 cursor-pointer shrink-0 transition-colors ${mobileSearchOpen ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold' : 'bg-slate-900/80 border-cyan-800/60 hover:text-cyan-300'}`}>
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {isAdminLoggedIn && onOpenAdmin && (
              <button id="header-admin-btn" onClick={onOpenAdmin} className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 shadow-sm shrink-0 whitespace-nowrap">
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" /><span className="hidden xl:inline">Admin Panel</span><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </button>
            )}

            {customer ? (
              <button id="header-customer-account-btn" onClick={() => handleAuthClick()} className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-1.5 rounded-lg bg-blue-950/80 border border-cyan-500/40 text-cyan-200 hover:bg-blue-900 text-xs font-semibold cursor-pointer shadow-sm shrink-0 whitespace-nowrap">
                <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shrink-0">{customer.fullName.charAt(0).toUpperCase()}</div>
                <span className="max-w-[50px] xs:max-w-[75px] sm:max-w-[110px] truncate text-white">{customer.fullName}</span>
              </button>
            ) : (
              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                <button id="header-register-btn" onClick={() => handleAuthClick('register')} className="hidden sm:flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0 shadow-sm">
                  <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" /><span>Create Account</span>
                </button>
                <button id="header-login-btn" onClick={() => handleAuthClick('login')} className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-400 text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0 shadow-sm">
                  <User className="w-3.5 h-3.5 text-cyan-400 sm:hidden" /><span className="hidden xs:inline">Login</span>
                </button>
              </div>
            )}

            <button id="header-cart-btn" onClick={handleCartClick} className="relative flex items-center mr-1 sm:mr-0 gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all cursor-pointer shadow-md shadow-cyan-600/30 shrink-0 whitespace-nowrap">
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-wider">Cart</span>
              <span className="flex items-center justify-center min-w-[17px] sm:min-w-[20px] h-4 sm:h-5 px-1 sm:px-1.5 text-[10px] sm:text-xs font-black bg-white text-cyan-700 rounded-full shadow">{displayCartCount}</span>
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-cyan-800/60 text-slate-200 hover:text-cyan-300 cursor-pointer shrink-0">
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Quick Action Sub-bar (লাল দাগের অংশ - এক লাইনে: প্রোডাক্ট, এক্সেসরিজ, সার্ভিস, কন্টাক্ট) */}
      <div className="lg:hidden w-full bg-gradient-to-r from-[#001736] via-[#092e5c] to-[#001736] border-t border-cyan-400/35 px-2 py-1.5 shadow-md">
        <div className="grid grid-cols-4 gap-1.5 max-w-lg mx-auto">
          <button
            onClick={() => handleNavClick('products')}
            className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg border text-[11px] font-bold active:scale-95 transition-all cursor-pointer shadow-xs ${
              activeSection === 'products'
                ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-extrabold shadow-cyan-500/30'
                : 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-400/40 text-cyan-100 hover:text-white'
            }`}
          >
            <Package className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">প্রোডাক্ট</span>
          </button>

          <button
            onClick={() => {
              setSearchTerm('Accessories');
              handleNavClick('products');
            }}
            className="flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-100 hover:text-white text-[11px] font-bold active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">এক্সেসরিজ</span>
          </button>

          <button
            onClick={() => handleNavClick('services')}
            className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg border text-[11px] font-bold active:scale-95 transition-all cursor-pointer shadow-xs ${
              activeSection === 'services'
                ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-extrabold shadow-cyan-500/30'
                : 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-400/40 text-cyan-100 hover:text-white'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">সার্ভিস</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg border text-[11px] font-bold active:scale-95 transition-all cursor-pointer shadow-xs ${
              activeSection === 'contact'
                ? 'bg-cyan-500 text-slate-950 border-cyan-300 font-extrabold shadow-cyan-500/30'
                : 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-400/40 text-cyan-100 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">কন্টাক্ট</span>
          </button>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="lg:hidden bg-slate-950/98 border-t border-cyan-500/40 px-3 py-2.5 shadow-2xl animate-fadeIn">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3 pointer-events-none" />
            <input type="text" autoFocus value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); }}
              placeholder="Search cameras, Jovision, EZVIZ, DVR..."
              className="w-full bg-slate-900 text-xs sm:text-sm text-white placeholder-slate-400 rounded-lg pl-9 pr-8 py-2 border border-cyan-400/80 focus:border-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-400" />
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 backdrop-blur-md border-b border-cyan-500/30 px-4 pt-3 pb-5 space-y-2 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-left cursor-pointer ${isActive ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-400/50' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />{item.label}
                </button>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            {isAdminLoggedIn && onOpenAdmin && (
              <button onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold cursor-pointer bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                <Lock className="w-4 h-4 text-emerald-400" /><span>STS Admin Control Panel (Online)</span>
              </button>
            )}
            {customer ? (
              <button onClick={() => { setMobileMenuOpen(false); if (onOpenCustomerProfile) onOpenCustomerProfile(); }}
                className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-200 text-sm font-semibold cursor-pointer">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-xs">{customer.fullName.charAt(0).toUpperCase()}</div>
                  <div className="text-left"><div className="text-white text-xs font-bold leading-tight">{customer.fullName}</div><div className="text-[10px] text-cyan-400">My Account & Orders</div></div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Active</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => { setMobileMenuOpen(false); if (onOpenCustomerAuth) onOpenCustomerAuth('register'); }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-xs font-semibold text-cyan-300">Create Account</button>
                <button onClick={() => { setMobileMenuOpen(false); if (onOpenCustomerAuth) onOpenCustomerAuth('login'); }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200">Login</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
