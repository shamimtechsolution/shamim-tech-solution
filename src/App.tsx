import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProductShop } from './components/ProductShop';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderModal } from './components/OrderModal';
import { SoftwareDownloads } from './components/SoftwareDownloads';
import { WorkGallery } from './components/WorkGallery';
import { AboutAndWhyUs } from './components/AboutAndWhyUs';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLoginPage } from './components/AdminLoginPage';
import { CustomerAuthModal } from './components/CustomerAuthModal';
import { CustomerProfileModal } from './components/CustomerProfileModal';
import { 
  INITIAL_PRODUCTS as PRODUCTS_CATALOG, 
  SOFTWARE_DOWNLOADS, 
  COMPANY_INFO, 
  DEFAULT_SITE_CONTENT 
} from './data/companyData';
import { Product, CartItem, SavedOrder, CompanyInfo, SiteContent, DownloadItem, CustomerUser } from './types';
import { getStoredCustomerUser, apiGetCustomerProfile, clearCustomerSession } from './utils/customerAuth';

export default function App() {
  // Shopping Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('sts_cctv_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Dynamic Content States synchronized with backend database
  const [products, setProducts] = useState<Product[]>(PRODUCTS_CATALOG);
  const [downloads, setDownloads] = useState<DownloadItem[]>(SOFTWARE_DOWNLOADS);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(COMPANY_INFO);
  const [siteContent, setSiteContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);

  // Admin Control System state
  const checkIsAdminPath = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      path === '/admin' || 
      path.startsWith('/admin/') || 
      hash === '#admin' || 
      hash.startsWith('#admin') ||
      search.includes('admin=true') ||
      search.includes('admin=1') ||
      search.includes('admin')
    );
  };

  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(checkIsAdminPath);
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    return localStorage.getItem('sts_admin_token') || null;
  });
  const [adminUser, setAdminUser] = useState<{ username: string; email: string; role: string } | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);

  // UI state
  const [activeSection, setActiveSection] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Customer User Authentication states
  const [customer, setCustomer] = useState<CustomerUser | null>(getStoredCustomerUser);
  const [isCustomerAuthOpen, setIsCustomerAuthOpen] = useState(false);
  const [customerAuthMode, setCustomerAuthMode] = useState<'register' | 'login' | 'forgot'>('register');
  const [isCustomerProfileOpen, setIsCustomerProfileOpen] = useState(false);

  // Load public data from live Express backend
  const loadPublicData = useCallback(async () => {
    try {
      const res = await fetch('/api/public/data');
      if (res.ok) {
        const data = await res.json();
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        }
        if (data.downloads && Array.isArray(data.downloads)) {
          setDownloads(data.downloads);
        }
        if (data.companyInfo) {
          setCompanyInfo(data.companyInfo);
        }
        if (data.siteContent) {
          setSiteContent(data.siteContent);
        }
      }
    } catch (err) {
      console.warn('Backend public data fetch note: using local fallback defaults.', err);
    }
  }, []);

  // Verify Admin Session on mount or token change
  useEffect(() => {
    const checkAdminAuth = async () => {
      const token = localStorage.getItem('sts_admin_token');
      if (!token) {
        setIsAdminLoggedIn(false);
        setAdminUser(null);
        return;
      }

      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setIsAdminLoggedIn(true);
            setAdminUser(data.user);
            setAdminToken(token);
          } else {
            localStorage.removeItem('sts_admin_token');
            setIsAdminLoggedIn(false);
            setAdminUser(null);
            setAdminToken(null);
          }
        } else {
          localStorage.removeItem('sts_admin_token');
          setIsAdminLoggedIn(false);
          setAdminUser(null);
          setAdminToken(null);
        }
      } catch (err) {
        console.warn('Auth verification check offline/fallback.', err);
      }
    };

    checkAdminAuth();
    
    // Verify Customer Session
    apiGetCustomerProfile().then(res => {
      if (res.success && res.customer) {
        setCustomer(res.customer);
      } else {
        setCustomer(null);
      }
    });

    loadPublicData();
  }, [loadPublicData]);

  // Synchronize route between browser URL (/admin, #admin) and application state
  useEffect(() => {
    const handleRouteSync = () => {
      setIsAdminRoute(checkIsAdminPath());
    };
    window.addEventListener('popstate', handleRouteSync);
    window.addEventListener('hashchange', handleRouteSync);
    return () => {
      window.removeEventListener('popstate', handleRouteSync);
      window.removeEventListener('hashchange', handleRouteSync);
    };
  }, []);

  const navigateToAdmin = useCallback(() => {
    try {
      if (window.location.pathname !== '/admin') {
        window.history.pushState(null, '', '/admin');
      }
    } catch {
      window.location.hash = 'admin';
    }
    setIsAdminRoute(true);
    setIsAdminDashboardOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToPublicSite = useCallback(() => {
    try {
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
    } catch {
      window.location.hash = '';
    }
    setIsAdminRoute(false);
    setIsAdminDashboardOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Synchronize active section based on scroll position
  useEffect(() => {
    const sectionIds = ['home', 'services', 'products', 'downloads', 'gallery', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('sts_cctv_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Admin authentication handlers
  const handleOpenAdmin = () => {
    navigateToAdmin();
  };

  const handleLoginSuccess = (token: string, user: { username: string; email: string; role: string }) => {
    localStorage.setItem('sts_admin_token', token);
    setAdminToken(token);
    setAdminUser(user);
    setIsAdminLoggedIn(true);
    setIsAdminLoginOpen(false);
    setIsAdminDashboardOpen(true);
    setIsAdminRoute(true);
    if (window.location.pathname !== '/admin') {
      window.history.pushState(null, '', '/admin');
    }
    showToast(`Welcome back, ${user.username}! Admin session active.`);
  };

  const handleAdminLogout = async () => {
    const currentToken = adminToken || localStorage.getItem('sts_admin_token');
    if (currentToken) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${currentToken}`
          }
        });
      } catch (err) {
        console.warn('Logout API call note:', err);
      }
    }

    localStorage.removeItem('sts_admin_token');
    setAdminToken(null);
    setAdminUser(null);
    setIsAdminLoggedIn(false);
    setIsAdminDashboardOpen(false);
    showToast('Admin logged out successfully.');
  };

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(i => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevItems, { product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const handleBuyNow = (product: Product) => {
    // Add to cart and immediately open order checkout
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(i => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        return updated;
      }
      return [...prevItems, { product, quantity: 1 }];
    });
    setIsOrderModalOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(i => i.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderPlaced = async (order: SavedOrder) => {
    try {
      const savedOrders = JSON.parse(localStorage.getItem('sts_orders') || '[]');
      localStorage.setItem('sts_orders', JSON.stringify([order, ...savedOrders]));
      
      // Also notify backend server for admin dashboard orders list
      await fetch('/api/public/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });
    } catch (e) {
      console.error('Failed to persist order to server', e);
    }
    // Clear the cart
    setCartItems([]);
    showToast(`Order #${order.orderId} placed successfully!`);
  };

  // Scroll helpers
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelect = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    scrollToSection('contact');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Dedicated Separate Route: /admin (or #admin)
  if (isAdminRoute) {
    if (isAdminLoggedIn && adminToken) {
      return (
        <AdminDashboard
          token={adminToken}
          adminUser={adminUser || { username: 'admin', email: 'shamimtech2020@gmail.com', role: 'Super Admin' }}
          onLogout={handleAdminLogout}
          onClose={navigateToPublicSite}
          onDataUpdated={loadPublicData}
        />
      );
    }

    // If not logged in, render dedicated standalone Admin Login Portal
    return (
      <AdminLoginPage
        onLoginSuccess={handleLoginSuccess}
        onBackToSite={navigateToPublicSite}
        companyInfo={companyInfo}
      />
    );
  }

  const handleCustomerAuthSuccess = (loggedCustomer: CustomerUser) => {
    setCustomer(loggedCustomer);
    showToast(`স্বাগতম, ${loggedCustomer.fullName}! সফলভাবে লগইন হয়েছে।`);
  };

  const handleCustomerLogout = () => {
    clearCustomerSession();
    setCustomer(null);
    showToast('লগআউট সম্পন্ন হয়েছে।');
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cartCount={totalCartCount}
        cartItemCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        openSearch={() => scrollToSection('products')}
        openAuth={() => {
          if (customer) {
            setIsCustomerProfileOpen(true);
          } else {
            setCustomerAuthMode('register');
            setIsCustomerAuthOpen(true);
          }
        }}
        customer={customer}
        onOpenCustomerAuth={(mode) => {
          setCustomerAuthMode(mode || 'register');
          setIsCustomerAuthOpen(true);
        }}
        onOpenCustomerProfile={() => setIsCustomerProfileOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onOpenAdmin={handleOpenAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        companyInfo={companyInfo}
      />

      {/* Floating Action Buttons (WhatsApp & Direct Call) */}
      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        companyInfo={companyInfo}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-cyan-950/95 border border-cyan-400 text-cyan-200 px-4 py-3 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <Hero
          onViewProducts={() => scrollToSection('products')}
          onRequestQuote={() => scrollToSection('contact')}
          companyInfo={companyInfo}
          siteContent={siteContent}
        />

        {/* 2. Services Section (Quick services & 11 detailed services) */}
        <ServicesSection
          onRequestService={handleServiceSelect}
        />

        {/* 3. Product Shop with Categories, Search, Cart & BDT pricing */}
        <ProductShop
          products={products}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
          onViewDetails={(product) => setSelectedProduct(product)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* 4. Software & Tools Downloads + Profile Download + How to Order */}
        <SoftwareDownloads
          onOrderNow={() => scrollToSection('products')}
          downloads={downloads}
          companyInfo={companyInfo}
        />

        {/* 5. Work Gallery with Lightbox and Real Field Projects */}
        <WorkGallery />

        {/* 6. About Us & Why Choose Us */}
        <AboutAndWhyUs
          onContactClick={() => scrollToSection('contact')}
          onRequestQuote={() => scrollToSection('contact')}
        />

        {/* 7. Customer Testimonials & Reviews */}
        <CustomerReviews />

        {/* 8. Contact Section with Working Form & Haragach, Rangpur Google Map */}
        <ContactSection
          preselectedService={preselectedService}
          companyInfo={companyInfo}
        />

      </main>

      {/* Footer with Admin Portal link */}
      <Footer 
        companyInfo={companyInfo}
        onOpenAdmin={handleOpenAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToOrder={() => setIsOrderModalOpen(true)}
      />

      {/* Order Placement Form & WhatsApp Ordering Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        items={cartItems}
        onOrderPlaced={handleOrderPlaced}
        companyInfo={companyInfo}
        customer={customer}
      />

      {/* Customer Registration / Login / Forgot Password Modal */}
      <CustomerAuthModal
        isOpen={isCustomerAuthOpen}
        onClose={() => setIsCustomerAuthOpen(false)}
        initialMode={customerAuthMode}
        onSuccess={handleCustomerAuthSuccess}
      />

      {/* Customer Profile & Order History Modal */}
      {customer && (
        <CustomerProfileModal
          isOpen={isCustomerProfileOpen}
          onClose={() => setIsCustomerProfileOpen(false)}
          customer={customer}
          onUpdateCustomer={(updated) => {
            setCustomer(updated);
            showToast('প্রোফাইল তথ্য আপডেট সম্পন্ন হয়েছে!');
          }}
          onLogout={handleCustomerLogout}
        />
      )}

      {/* Admin Login Modal (if opened via fallback) */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Floating Session Badge (Visible ONLY when admin is actively logged in on this browser) */}
      {isAdminLoggedIn && (
        <div className="fixed bottom-4 left-4 z-40 bg-slate-950/95 border border-emerald-500/50 text-emerald-300 px-3 py-2 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-[11px] hidden sm:inline">Admin Active</span>
          <button 
            onClick={navigateToAdmin}
            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Open /admin
          </button>
          <button 
            onClick={handleAdminLogout}
            className="text-slate-400 hover:text-red-400 text-xs cursor-pointer ml-1"
            title="Logout"
          >
            Logout
          </button>
        </div>
      )}

    </div>
  );
}
