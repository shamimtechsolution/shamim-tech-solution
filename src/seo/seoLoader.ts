import type { DistrictSEOInfo } from './districtSEOData';
import type { ServiceSEOInfo } from './servicesSEOData';
import type { ProductSEOInfo } from './productsSEOData';

let cachedServicesPromise: Promise<Record<string, ServiceSEOInfo>> | null = null;
let cachedProductsPromise: Promise<Record<string, ProductSEOInfo>> | null = null;
let cachedDistrictsPromise: Promise<Record<string, DistrictSEOInfo>> | null = null;

export function loadAllServicesSEO(): Promise<Record<string, ServiceSEOInfo>> {
  if (!cachedServicesPromise) {
    cachedServicesPromise = import('./servicesSEOData').then((m) => m.SERVICES_SEO_DATA);
  }
  return cachedServicesPromise;
}

export function loadAllProductsSEO(): Promise<Record<string, ProductSEOInfo>> {
  if (!cachedProductsPromise) {
    cachedProductsPromise = import('./productsSEOData').then((m) => m.PRODUCTS_SEO_DATA);
  }
  return cachedProductsPromise;
}

export function loadAllDistrictsSEO(): Promise<Record<string, DistrictSEOInfo>> {
  if (!cachedDistrictsPromise) {
    cachedDistrictsPromise = import('./districtSEOData').then((m) => m.DISTRICT_SEO_DATA);
  }
  return cachedDistrictsPromise;
}

export async function loadServiceSEOBySlug(slug: string): Promise<ServiceSEOInfo | null> {
  const map = await loadAllServicesSEO();
  return map[slug.toLowerCase()] || null;
}

export async function loadProductSEOBySlug(slug: string): Promise<ProductSEOInfo | null> {
  const map = await loadAllProductsSEO();
  return map[slug.toLowerCase()] || null;
}

export async function loadDistrictSEOBySlug(slug: string): Promise<DistrictSEOInfo | null> {
  const map = await loadAllDistrictsSEO();
  return map[slug.toLowerCase()] || null;
}
