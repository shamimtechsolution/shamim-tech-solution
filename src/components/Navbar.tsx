import React, { useState } from 'react';
import { 
  Phone, 
  ShoppingCart, 
  Search, 
  User, 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck,
  Download,
  Image as GalleryIcon,
  Wrench,
  Package,
  Home as HomeIcon,
  Info,
  ShieldAlert,
  SlidersHorizontal,
  Lock
} from 'lucide-react';
import { STSLogo } from './STSLogo';
import { COMPANY_INFO } from '../data/companyData';
import { CompanyInfo, CustomerUser } from '../types';

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
}) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeCompany = passedCompany || COMPANY_INFO;

  const displayCartCount = cartCount ?? cartItemCount ?? 0;

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
      try {
        setActiveSection(id);
      } catch (e) {
        console.warn('setActiveSection error', e);
      }
    }
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCartClick = () => {
    if (typeof openCart === 'function') {
      openCart();
    } else if (typeof onOpenCart === 'function') {
      onOpenCart();
    }
  };

  const handleSearchClick = () => {
    if (typeof openSearch === 'function') {
      openSearch();
    } else {
      setMobileMenuOpen(true);
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAuthClick = (mode: 'login' | 'register' = 'register') => {
    if (customer && onOpenCustomerProfile) {
      onOpenCustomerProfile();
    } else if (onOpenCustomerAuth) {
      onOpenCustomerAuth(mode);
    } else if (typeof openAuth === 'function') {
      openAuth();
    } else {
      handleNavClick('contact');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050b18]/95 backdrop-blur-md border-b border-cyan-950/80 shadow-lg shadow-black/40 overflow-x-clip">
      {/* Top micro contact bar */}
      <div className="bg-[#030712] border-b border-cyan-950/40 text-[12px] py-1.5 px-3 sm:px-6 hidden md:block text-slate-300">
        <div className="max-w-[1536px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {activeCompany.location}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Service Area: {activeCompany.serviceArea}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-bangla italic text-xs text-cyan-300/90">
              {activeCompany.bengaliSlogan}
            </span>
            <span className="text-slate-500">•</span>
            <a 
              href={`tel:${activeCompany.phone}`} 
              className="flex items-center gap-1 text-slate-200 hover:text-cyan-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              Call: {activeCompany.phone}
            </a>
            {isAdminLoggedIn && onOpenAdmin && (
              <>
                <span className="text-slate-500">•</span>
                <button
                  id="top-admin-trigger"
                  onClick={onOpenAdmin}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded transition-all cursor-pointer bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
                  title="STS Admin Control System (/admin)"
                >
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Admin Panel</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-[1536px] w-full mx-auto px-3 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-3">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer shrink-0"
            title={activeCompany.name}
          >
            <STSLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1 shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2 2xl:px-3 py-1.5 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-medium transition-all flex items-center gap-1 2xl:gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 hidden 2xl:inline-block ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Search Bar & Action Buttons (Pinned right, will never wrap or overflow) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Quick Search Input (Responsive & Expandable) */}
            <div className="relative hidden lg:block w-32 xl:w-40 2xl:w-52 transition-all duration-300 focus-within:w-48 2xl:focus-within:w-60">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (e.target.value && activeSection !== 'products') {
                    handleNavClick('products');
                  }
                }}
                placeholder="Search products..."
                className="w-full bg-slate-900/90 text-xs sm:text-sm text-slate-100 placeholder-slate-400 rounded-full pl-8 pr-3 py-1.5 border border-cyan-900/60 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-cyan-400 absolute left-2.5 top-2.5 pointer-events-none" />
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={handleSearchClick}
              className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-cyan-400 cursor-pointer shrink-0"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Admin Quick Action Button (Visible ONLY to authenticated admin) */}
            {isAdminLoggedIn && onOpenAdmin && (
              <button
                id="header-admin-btn"
                onClick={onOpenAdmin}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all bg-emerald-950/80 border-emerald-500/60 text-emerald-300 hover:bg-emerald-900/60 shadow-[0_0_12px_rgba(16,185,129,0.25)] shrink-0 whitespace-nowrap"
                title="Open Admin Control Panel"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden xl:inline">Admin Panel</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </button>
            )}

            {/* Customer Account / Login Button */}
            {customer ? (
              <button
                id="header-customer-account-btn"
                onClick={() => handleAuthClick()}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/60 hover:border-cyan-400 text-xs font-semibold cursor-pointer transition-all shadow-[0_0_12px_rgba(6,182,212,0.2)] shrink-0 whitespace-nowrap"
                title="View My Account & Orders"
              >
                <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-[10px] shrink-0">
                  {customer.fullName.charAt(0).toUpperCase()}
                </div>
                <span className="max-w-[75px] sm:max-w-[110px] truncate">{customer.fullName}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              </button>
            ) : (
              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                <button
                  id="header-register-btn"
                  onClick={() => handleAuthClick('register')}
                  className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 text-xs font-semibold cursor-pointer transition-all whitespace-nowrap shrink-0 shadow-sm"
                  title="Create Customer Account"
                >
                  <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="hidden sm:inline">Create Account</span>
                  <span className="sm:hidden">Register</span>
                </button>
                <button
                  id="header-login-btn"
                  onClick={() => handleAuthClick('login')}
                  className="px-2 sm:px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:text-white hover:border-cyan-400 text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap shrink-0"
                  title="Customer Login"
                >
                  <span>Login</span>
                </button>
              </div>
            )}

            {/* Cart Button with Counter - Always Visible, Never Cut Off */}
            <button
              id="header-cart-btn"
              onClick={handleCartClick}
              className="relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-cyan-600/25 hover:bg-cyan-600/35 border border-cyan-500/60 text-cyan-300 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.25)] shrink-0 whitespace-nowrap"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="hidden md:inline text-xs font-bold font-tech uppercase tracking-wider">Cart</span>
              <span className="flex items-center justify-center min-w-[18px] sm:min-w-[20px] h-4.5 sm:h-5 px-1 sm:px-1.5 text-[11px] sm:text-xs font-black bg-cyan-500 text-slate-950 rounded-full shadow">
                {displayCartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-200 hover:text-cyan-400 cursor-pointer shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070e20] border-b border-cyan-900/80 px-4 pt-3 pb-5 space-y-2 shadow-2xl">
          <div className="mb-3">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search cameras, DVR, cables..."
                className="w-full bg-slate-900 text-sm text-slate-100 placeholder-slate-400 rounded-lg pl-9 pr-3 py-2 border border-cyan-900/80 focus:border-cyan-400 focus:outline-none"
              />
              <Search className="w-4 h-4 text-cyan-400 absolute left-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                    isActive 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            {isAdminLoggedIn && onOpenAdmin && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-colors bg-emerald-950/80 border border-emerald-500/50 text-emerald-300"
              >
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>STS Admin Control Panel (Online)</span>
              </button>
            )}

            {customer ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCustomerProfile) onOpenCustomerProfile();
                }}
                className="flex items-center justify-between w-full p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/50 text-cyan-300 text-sm font-semibold cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-bold text-xs">
                    {customer.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="text-white text-xs font-bold leading-tight">{customer.fullName}</div>
                    <div className="text-[10px] text-cyan-400">My Account & Orders</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Active
                </span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenCustomerAuth) onOpenCustomerAuth('register');
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Create Account</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenCustomerAuth) onOpenCustomerAuth('login');
                  }}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700"
                >
                  <span>Login</span>
                </button>
              </div>
            )}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>Contact: {activeCompany.phone}</span>
              <span className="text-cyan-400">{activeCompany.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
