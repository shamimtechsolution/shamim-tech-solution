export type ProductCategory = 
  | 'All Products'
  | 'CCTV Camera'
  | 'DVR'
  | 'NVR'
  | 'Hard Disk (HDD)'
  | 'Monitor'
  | 'Access Control'
  | 'Fingerprint Machine'
  | 'CCTV Cable'
  | 'Power Supply/Adapter'
  | 'Networking Products'
  | 'Other Accessories';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  price: number;
  regularPrice?: number;
  originalPrice?: number;
  specs: string;
  description: string;
  inStock: boolean;
  isActive?: boolean;
  isPopular?: boolean;
  badge?: string;
  image: string;
  features: string[];
  rating: number;
  reviewsCount?: number;
  warranty?: string;
  modelNumber?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ServiceItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
  keyFeatures: string[];
  serviceType: string;
}

export type DownloadCategory = 'Software' | 'Tool' | 'Manual' | 'Guide' | 'Time Attendance' | 'Access Control' | 'CCTV Tools' | 'Other';

export interface DownloadItem {
  id: string;
  title: string;
  version: string;
  description: string;
  compatibleDevice: string;
  fileType: string;
  fileSize: string;
  downloadUrl?: string;
  buttonLabel?: string;
  isActive?: boolean;
  category: DownloadCategory | string;
  originalFileName?: string;
  storedFileName?: string;
  uploadedAt?: string;
}

export interface UploadedFileRecord {
  originalName: string;
  storedName: string;
  sizeBytes: number;
  sizeFormatted: string;
  mimeType: string;
  fileType: string;
  downloadUrl: string;
  uploadedAt: string;
  usedInSoftwareTitle?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  slogan: string;
  bengaliSlogan: string;
  businessType: string;
  location: string;
  serviceArea: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappInternational: string;
  facebook: string;
  emailPlaceholder: string;
  mapQuery: string;
  mapDirectionsUrl: string;
}

export interface SiteContent {
  heroHeadline: string;
  heroSubheadline: string;
  noticeTicker: string;
  bannerBadge: string;
  emergencySupportText: string;
}

export interface AdminUser {
  username: string;
  email: string;
  role: string;
}

export interface AdminSession {
  token: string;
  user: AdminUser;
  lastLogin: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | 'CCTV Installation'
    | 'DVR/NVR Setup'
    | 'IP Camera Installation'
    | 'Access Control'
    | 'Fingerprint Machine'
    | 'Networking'
    | 'Cable Installation';
  image: string;
  location: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface OrderFormState {
  customerName: string;
  mobileNumber: string;
  whatsappNumber: string;
  fullAddress: string;
  district: string;
  deliveryOption: 'Haragach Local Delivery' | 'Rangpur City Express' | 'Courier Delivery (Bangladesh)';
  paymentMethod: 'Cash on Delivery (COD)' | 'bKash' | 'Nagad' | 'Bank Transfer';
  notes?: string;
}

export interface SavedOrder extends OrderFormState {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  totalAmount: number;
  orderDate: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  customerId?: string;
}

export interface CustomerUser {
  id: string;
  fullName: string;
  loginIdentifier: string; // Phone number or Gmail
  phone?: string;
  email?: string;
  address: string;
  district: string;
  upazilaThana: string;
  createdAt: string;
  lastLogin?: string;
}

export type CustomerRecord = CustomerUser;

export interface CustomerSession {
  token: string;
  customer: CustomerUser;
}

export interface CustomerAuthPayload {
  fullName?: string;
  identifier: string; // Phone or Gmail
  password?: string;
  confirmPassword?: string;
  address?: string;
  district?: string;
  upazilaThana?: string;
  agreeTerms?: boolean;
}

