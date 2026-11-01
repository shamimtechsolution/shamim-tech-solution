import { ProductCategory, Product } from '../types';

export interface CategoryDetail {
  category: ProductCategory;
  bnName: string;
  icon: string;
}

export const CATEGORY_DETAILS: CategoryDetail[] = [
  { category: 'CCTV Camera', bnName: 'সিসিটিভি ক্যামেরা', icon: '📹' },
  { category: 'DVR', bnName: 'ডিভিআর (DVR)', icon: '📼' },
  { category: 'NVR', bnName: 'এনভিআর (NVR)', icon: '🖥️' },
  { category: 'Hard Disk (HDD)', bnName: 'হার্ডডিস্ক (HDD)', icon: '💾' },
  { category: 'Monitor', bnName: 'মনিটর (Monitor)', icon: '🖥️' },
  { category: 'Power Supply/Adapter', bnName: 'পাওয়ার সাপ্লাই / এডাপ্টার', icon: '⚡' },
  { category: 'CCTV Cable', bnName: 'সিসিটিভি ক্যাবল', icon: '🔌' },
  { category: 'Networking Products', bnName: 'নেটওয়ার্কিং / সুইচ', icon: '🌐' },
  { category: 'Access Control', bnName: 'এক্সেস কন্ট্রোল', icon: '🚪' },
  { category: 'Fingerprint Machine', bnName: 'ফিঙ্গারপ্রিন্ট হাজিরা মেশিন', icon: '👆' },
  { category: 'Other Accessories', bnName: 'অন্যান্য এক্সেসরিজ / ব্যালুন', icon: '📦' }
];

/**
 * Automatically detects category from product name, model number, or text
 */
export function detectCategoryFromText(text: string): ProductCategory | null {
  if (!text) return null;
  const q = text.toLowerCase().trim();

  // NVR detection
  if (/\bnvr\b/i.test(q) || q.includes('network video recorder') || q.includes('এনভিআর')) {
    return 'NVR';
  }
  // DVR / XVR detection
  if (/\bdvr\b/i.test(q) || /\bxvr\b/i.test(q) || q.includes('digital video recorder') || q.includes('ডিভিআর')) {
    return 'DVR';
  }
  // Power Supply / Adapter detection
  if (
    q.includes('power supply') || 
    q.includes('power suplay') || 
    q.includes('power suply') ||
    q.includes('adapter') || 
    q.includes('adaptor') || 
    q.includes('12v') || 
    q.includes('power box') ||
    q.includes('পাওয়ার সাপ্লাই') ||
    q.includes('এডাপ্টার')
  ) {
    if (q.includes('balun') || q.includes('video balun')) {
      return 'Other Accessories';
    }
    return 'Power Supply/Adapter';
  }
  // Hard Disk (HDD)
  if (
    q.includes('hard disk') || 
    /\bhdd\b/i.test(q) || 
    q.includes('surveillance hard') || 
    q.includes('হার্ডডিস্ক') || 
    q.includes('terabyte') || 
    /\b\d+tb\b/i.test(q)
  ) {
    return 'Hard Disk (HDD)';
  }
  // CCTV Cable
  if (
    q.includes('cctv cable') || 
    q.includes('cat6') || 
    q.includes('cat5') || 
    q.includes('coaxial') || 
    q.includes('ক্যাবল') || 
    q.includes('তার')
  ) {
    return 'CCTV Cable';
  }
  // Fingerprint Machine
  if (
    q.includes('fingerprint') || 
    q.includes('attendance') || 
    q.includes('zkteco') || 
    q.includes('biometric') || 
    q.includes('হাজিরা')
  ) {
    return 'Fingerprint Machine';
  }
  // Access Control
  if (
    q.includes('access control') || 
    q.includes('magnetic lock') || 
    q.includes('exit button') || 
    q.includes('এক্সেস কন্ট্রোল')
  ) {
    return 'Access Control';
  }
  // Monitor
  if ((q.includes('monitor') || q.includes('মনিটর') || q.includes('led display')) && !q.includes('monitoring')) {
    return 'Monitor';
  }
  // Networking Products (Switch, Router, PoE)
  if (
    q.includes('poe switch') || 
    q.includes('desktop switch') || 
    q.includes('network switch') || 
    q.includes('switch') || 
    q.includes('router') || 
    q.includes('ethernet') || 
    q.includes('রাউটার') || 
    q.includes('সুইচ')
  ) {
    return 'Networking Products';
  }
  // Balun, connectors, brackets, etc.
  if (q.includes('balun') || q.includes('video balun') || q.includes('bnc') || q.includes('dc connector') || q.includes('bracket') || q.includes('ব্যালুন')) {
    return 'Other Accessories';
  }
  // CCTV Camera
  if (q.includes('camera') || q.includes('ip camera') || q.includes('dome') || q.includes('bullet') || q.includes('ptz') || q.includes('ক্যামেরা')) {
    return 'CCTV Camera';
  }

  return null;
}

/**
 * Normalizes any category string into the official ProductCategory enum
 */
export function normalizeCategory(cat?: string): ProductCategory {
  if (!cat) return 'Other Accessories';
  const c = cat.toLowerCase().trim();
  if (c === 'all' || c === 'all products' || c === 'সকল পণ্য') return 'All Products';
  if (c === 'nvr' || c.includes('nvr') || c.includes('network video recorder')) return 'NVR';
  if (c === 'dvr' || c.includes('dvr') || c.includes('digital video recorder') || c.includes('xvr')) return 'DVR';
  if (
    c.includes('power supply') || 
    c.includes('power suplay') || 
    c.includes('power suply') || 
    c.includes('power') || 
    c.includes('adapter') || 
    c.includes('adaptor') || 
    c.includes('পাওয়ার')
  ) {
    return 'Power Supply/Adapter';
  }
  if (c.includes('hard disk') || c.includes('hdd') || c.includes('হার্ড')) return 'Hard Disk (HDD)';
  if (c.includes('cable') || c.includes('ক্যাবল') || c.includes('তার')) return 'CCTV Cable';
  if (c.includes('fingerprint') || c.includes('biometric') || c.includes('হাজিরা')) return 'Fingerprint Machine';
  if (c.includes('access control') || c.includes('এক্সেস')) return 'Access Control';
  if (c.includes('monitor') || c.includes('মনিটর')) return 'Monitor';
  if (c.includes('networking') || c.includes('network') || c.includes('switch') || c.includes('router') || c.includes('সুইচ')) {
    return 'Networking Products';
  }
  if (c.includes('cctv camera') || c.includes('camera') || c.includes('ক্যামেরা')) return 'CCTV Camera';
  return 'Other Accessories';
}

/**
 * Gets the effective category for a product, honoring the assigned category.
 */
export function getProductCategory(product: Product): ProductCategory {
  if (product && product.category) {
    return normalizeCategory(product.category);
  }
  return 'Other Accessories';
}

/**
 * Category matcher for storefront and filtering
 */
export function matchesProductCategory(product: Product, selectedCategory: ProductCategory): boolean {
  if (selectedCategory === 'All Products') return true;
  const productCat = getProductCategory(product);
  return productCat === selectedCategory;
}
