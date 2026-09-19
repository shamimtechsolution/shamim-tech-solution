import React, { useState, useEffect, useRef } from 'react';
import { 
  Package, 
  Download, 
  Phone, 
  Globe, 
  ShieldCheck, 
  ShoppingCart, 
  Plus, 
  Trash2, 
  Edit, 
  Save, 
  X, 
  Check, 
  Upload, 
  ExternalLink, 
  Eye, 
  EyeOff, 
  FileText, 
  LogOut, 
  RefreshCw, 
  AlertCircle,
  Search,
  CheckCircle2,
  Lock,
  UserCheck,
  Building,
  Radio,
  HardDrive,
  FolderArchive,
  FileCode,
  Copy,
  ArrowUpCircle,
  FileCheck,
  Folder,
  Layers
} from 'lucide-react';
import { STSLogo } from './STSLogo';
import { Product, DownloadItem, CompanyInfo, SiteContent, SavedOrder, ProductCategory, UploadedFileRecord, CustomerRecord } from '../types';

interface AdminDashboardProps {
  token: string;
  adminUser: { username: string; email: string; role: string };
  onLogout: () => void;
  onClose: () => void;
  onDataUpdated: () => void;
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  'CCTV Camera',
  'DVR',
  'NVR',
  'Hard Disk (HDD)',
  'Monitor',
  'Access Control',
  'Fingerprint Machine',
  'CCTV Cable',
  'Power Supply/Adapter',
  'Networking Products',
  'Other Accessories'
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  token,
  adminUser,
  onLogout,
  onClose,
  onDataUpdated
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'downloads' | 'contact' | 'content' | 'security' | 'orders' | 'customers'>('products');
  
  // Data states
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [orders, setOrders] = useState<SavedOrder[]>([]);
  const [customers, setCustomers] = useState<CustomerRecord[]>([]);
  const [customerSearch, setCustomerSearch] = useState('');
  const [selectedCustomerForOrders, setSelectedCustomerForOrders] = useState<CustomerRecord | null>(null);

  // Search filter inside admin
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('All');

  // Product Add/Edit Modal
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productForm, setProductForm] = useState<Partial<Product>>({});
  const [imagePreview, setImagePreview] = useState<string>('');

  // Download Add/Edit Modal
  const [editingDownload, setEditingDownload] = useState<DownloadItem | null>(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [downloadForm, setDownloadForm] = useState<Partial<DownloadItem>>({});

  // Software / File Upload System states
  const [selectedUploadFile, setSelectedUploadFile] = useState<File | null>(null);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState<{ success: boolean; text: string; fileInfo?: any } | null>(null);
  const [uploadedFilesList, setUploadedFilesList] = useState<UploadedFileRecord[]>([]);
  const [downloadsViewMode, setDownloadsViewMode] = useState<'software' | 'storage'>('software');
  const [downloadCategoryFilter, setDownloadCategoryFilter] = useState('All');
  const [downloadSearch, setDownloadSearch] = useState('');
  const [isReplaceFileModalOpen, setIsReplaceFileModalOpen] = useState(false);
  const [targetReplaceItem, setTargetReplaceItem] = useState<DownloadItem | null>(null);
  const [replaceUploadProgress, setReplaceUploadProgress] = useState(0);
  const [isReplacingFile, setIsReplacingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceFileInputRef = useRef<HTMLInputElement>(null);

  // Security Form
  const [securityForm, setSecurityForm] = useState({
    currentPassword: '',
    newUsername: adminUser.username,
    newEmail: adminUser.email,
    newPassword: '',
    confirmPassword: ''
  });

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Fetch full admin data
  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/data', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.status === 401) {
        showNotification('error', 'Session expired. Please log in again.');
        onLogout();
        return;
      }
      const data = await res.json();
      if (data.success) {
        setProducts(data.products || []);
        setDownloads(data.downloads || []);
        setCompanyInfo(data.companyInfo);
        setSiteContent(data.siteContent);
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
      showNotification('error', 'Failed to connect to backend server');
    } finally {
      setLoading(false);
    }
  };

  const fetchCustomers = async () => {
    try {
      const res = await fetch('/api/admin/customers', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.customers)) {
          setCustomers(data.customers);
        }
      }
    } catch (err) {
      console.error('Failed to fetch customers:', err);
    }
  };

  useEffect(() => {
    fetchAdminData();
    fetchCustomers();
  }, [token]);

  // Handle Product Image Upload (Converts file to Base64 data URL)
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      showNotification('error', 'Image size must be less than 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64Url = reader.result as string;
      setImagePreview(base64Url);
      setProductForm(prev => ({ ...prev, image: base64Url }));
    };
    reader.readAsDataURL(file);
  };

  // --- PRODUCTS CRUD ---
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      category: 'CCTV Camera',
      brand: 'Hikvision',
      price: 2500,
      originalPrice: 2800,
      specs: '1080p Full HD • Night Vision',
      description: 'High performance security equipment with official warranty.',
      inStock: true,
      isActive: true,
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
      features: ['Full HD Resolution', 'Official Warranty', 'Reliable Performance'],
      warranty: '1 Year Official Warranty',
      modelNumber: ''
    });
    setImagePreview('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80');
    setIsProductModalOpen(true);
  };

  const handleOpenEditProduct = (p: Product) => {
    setEditingProduct(p);
    setProductForm({ ...p });
    setImagePreview(p.image || '');
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price || !productForm.category) {
      showNotification('error', 'Please fill in Name, Category, and Price');
      return;
    }

    setSaving(true);
    try {
      const isEdit = !!editingProduct;
      const url = isEdit ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productForm)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save product');
      }

      showNotification('success', isEdit ? 'Product updated successfully!' : 'Product added successfully!');
      setIsProductModalOpen(false);
      await fetchAdminData();
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to save product');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete product');
      }
      showNotification('success', 'Product deleted successfully');
      await fetchAdminData();
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to delete product');
    }
  };

  const handleToggleProductActive = async (p: Product) => {
    try {
      const newStatus = !p.isActive;
      const res = await fetch(`/api/admin/products/${p.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isActive: newStatus })
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setProducts(prev => prev.map(item => item.id === p.id ? { ...item, isActive: newStatus } : item));
      showNotification('success', `Product ${newStatus ? 'Activated' : 'Inactivated'}`);
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to update status');
    }
  };

  // --- SOFTWARE & FILE UPLOAD HANDLERS ---

  // Fetch list of all stored files on the server
  const fetchUploadedFiles = async () => {
    try {
      const res = await fetch('/api/admin/uploaded-files', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setUploadedFilesList(data.files || []);
      }
    } catch (err) {
      console.error('Failed to load uploaded files:', err);
    }
  };

  useEffect(() => {
    fetchAdminData();
    fetchUploadedFiles();
  }, [token]);

  // Handle selecting a file from PC
  const handleSelectUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedUploadFile(file);
      setUploadMessage(null);
      setUploadProgress(0);

      // Auto-suggest name and details if empty
      const rawExt = file.name.split('.').pop()?.toUpperCase() || 'ZIP';
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[_\-]+/g, ' ');
      
      setDownloadForm(prev => ({
        ...prev,
        title: prev.title || cleanName,
        fileSize: formatFileSize(file.size),
        fileType: `${rawExt} Archive / File`,
        buttonLabel: prev.buttonLabel || `Download ${rawExt}`
      }));
    }
  };

  // Helper to format file size in bytes
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Upload file to server with live progress percentage
  const handleExecuteUpload = (fileToUpload?: File) => {
    const file = fileToUpload || selectedUploadFile;
    if (!file) {
      showNotification('error', 'Please select a software file from your computer first.');
      return;
    }

    setIsUploadingFile(true);
    setUploadProgress(5);
    setUploadMessage(null);

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/admin/upload-file');
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      setIsUploadingFile(false);
      try {
        const data = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && data.success) {
          setUploadProgress(100);
          setUploadMessage({
            success: true,
            text: `File "${data.file.originalName}" (${data.file.sizeFormatted}) uploaded successfully to server storage!`,
            fileInfo: data.file
          });
          showNotification('success', `File uploaded successfully to server storage!`);

          // Auto-fill download form fields
          setDownloadForm(prev => {
            const rawExt = data.file.fileType || 'ZIP';
            const cleanTitle = prev.title && prev.title.trim() !== '' 
              ? prev.title 
              : data.file.originalName.replace(/\.[^/.]+$/, '').replace(/[_\-]+/g, ' ');

            return {
              ...prev,
              title: cleanTitle,
              downloadUrl: data.file.downloadUrl,
              fileSize: data.file.sizeFormatted,
              fileType: `${rawExt} Package`,
              storedFileName: data.file.storedName,
              originalFileName: data.file.originalName,
              uploadedAt: data.file.uploadedAt,
              buttonLabel: prev.buttonLabel || `Download ${rawExt}`
            };
          });

          fetchUploadedFiles();
        } else {
          setUploadMessage({
            success: false,
            text: data.error || 'Upload failed. Please try again.'
          });
          showNotification('error', data.error || 'Upload failed');
        }
      } catch {
        setUploadMessage({ success: false, text: 'Server response parsing error.' });
        showNotification('error', 'Error reading server response');
      }
    };

    xhr.onerror = () => {
      setIsUploadingFile(false);
      setUploadMessage({ success: false, text: 'Network communication error during upload.' });
      showNotification('error', 'Upload failed due to network error');
    };

    xhr.send(formData);
  };

  // Replace file on existing software item
  const handleOpenReplaceModal = (item: DownloadItem) => {
    setTargetReplaceItem(item);
    setReplaceUploadProgress(0);
    setIsReplaceFileModalOpen(true);
  };

  const handleExecuteReplaceFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !targetReplaceItem) return;

    setIsReplacingFile(true);
    setReplaceUploadProgress(5);

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/admin/upload-file');
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setReplaceUploadProgress(percent);
      }
    };

    xhr.onload = async () => {
      setIsReplacingFile(false);
      try {
        const data = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300 && data.success) {
          setReplaceUploadProgress(100);

          // Update the software record in database
          const updatePayload: Partial<DownloadItem> = {
            downloadUrl: data.file.downloadUrl,
            fileSize: data.file.sizeFormatted,
            fileType: `${data.file.fileType} Package`,
            storedFileName: data.file.storedName,
            originalFileName: data.file.originalName,
            uploadedAt: data.file.uploadedAt
          };

          const putRes = await fetch(`/api/admin/downloads/${targetReplaceItem.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updatePayload)
          });
          const putData = await putRes.json();

          if (putData.success) {
            showNotification('success', `File replaced with "${data.file.originalName}" successfully!`);
            setIsReplaceFileModalOpen(false);
            setTargetReplaceItem(null);
            await fetchAdminData();
            await fetchUploadedFiles();
            onDataUpdated();
          } else {
            showNotification('error', putData.error || 'Failed to update software record');
          }
        } else {
          showNotification('error', data.error || 'Failed to upload replacement file');
        }
      } catch {
        showNotification('error', 'Failed to process file replacement');
      }
    };

    xhr.onerror = () => {
      setIsReplacingFile(false);
      showNotification('error', 'Network error during file replacement');
    };

    xhr.send(formData);
  };

  // Permanently delete an uploaded file from server storage
  const handleDeleteUploadedFile = async (storedName: string, displayName: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete "${displayName}" from the server storage?`)) return;

    try {
      const res = await fetch(`/api/admin/uploaded-files/${encodeURIComponent(storedName)}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete file');
      }

      showNotification('success', `File "${displayName}" deleted from server storage.`);
      await fetchUploadedFiles();
      await fetchAdminData();
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to delete file');
    }
  };

  // Copy URL to clipboard helper
  const handleCopyUrl = (url: string) => {
    const fullUrl = url.startsWith('/') ? `${window.location.origin}${url}` : url;
    navigator.clipboard.writeText(fullUrl);
    showNotification('success', 'Download link copied to clipboard!');
  };

  // Test Download
  const handleTestDownload = (url?: string, fileName?: string) => {
    if (!url || url === '#' || url.trim() === '') {
      showNotification('error', 'No download URL configured for this item.');
      return;
    }
    const a = document.createElement('a');
    a.href = url;
    if (fileName) {
      a.download = fileName;
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showNotification('success', 'Initiated test download in browser');
  };

  // --- DOWNLOADS CRUD ---
  const handleOpenAddDownload = () => {
    setEditingDownload(null);
    setSelectedUploadFile(null);
    setUploadProgress(0);
    setUploadMessage(null);
    setDownloadForm({
      title: '',
      version: '1.0',
      description: 'Official software package for attendance and security devices.',
      compatibleDevice: 'Windows 10/11 • ZKTeco / Universal',
      fileType: 'ZIP Archive',
      fileSize: '',
      downloadUrl: '',
      buttonLabel: 'Download Software',
      category: 'Software',
      isActive: true
    });
    setIsDownloadModalOpen(true);
  };

  const handleOpenEditDownload = (d: DownloadItem) => {
    setEditingDownload(d);
    setSelectedUploadFile(null);
    setUploadProgress(0);
    setUploadMessage(null);
    setDownloadForm({ ...d });
    setIsDownloadModalOpen(true);
  };

  const handleSaveDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadForm.title) {
      showNotification('error', 'Please enter a software title');
      return;
    }

    setSaving(true);
    try {
      const isEdit = !!editingDownload;
      const url = isEdit ? `/api/admin/downloads/${editingDownload.id}` : '/api/admin/downloads';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(downloadForm)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save software item');
      }

      showNotification('success', isEdit ? 'Software details updated!' : 'New software / downloadable file added!');
      setIsDownloadModalOpen(false);
      await fetchAdminData();
      await fetchUploadedFiles();
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to save software item');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteDownload = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"? This will also remove the uploaded file from the server.`)) return;

    try {
      const res = await fetch(`/api/admin/downloads/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to delete software');
      }
      showNotification('success', 'Software item and stored file deleted successfully');
      await fetchAdminData();
      await fetchUploadedFiles();
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to delete software');
    }
  };

  const handleToggleDownloadActive = async (d: DownloadItem) => {
    try {
      const newStatus = !d.isActive;
      const res = await fetch(`/api/admin/downloads/${d.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isActive: newStatus })
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setDownloads(prev => prev.map(item => item.id === d.id ? { ...item, isActive: newStatus } : item));
      showNotification('success', `Software ${newStatus ? 'Activated' : 'Inactivated'}`);
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to update status');
    }
  };

  // --- SAVE COMPANY INFO ---
  const handleSaveCompanyInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyInfo) return;

    setSaving(true);
    try {
      const res = await fetch('/api/admin/company-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(companyInfo)
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to update company info');

      showNotification('success', 'Company contact details updated and live!');
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to update company info');
    } finally {
      setSaving(false);
    }
  };

  // --- SAVE SITE CONTENT ---
  const handleSaveSiteContent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteContent) return;

    setSaving(true);
    try {
      const res = await fetch('/api/admin/site-content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(siteContent)
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to update site content');

      showNotification('success', 'Website headlines and banner content saved!');
      onDataUpdated();
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to update site content');
    } finally {
      setSaving(false);
    }
  };

  // --- SAVE SECURITY CREDENTIALS ---
  const handleSaveSecurity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!securityForm.currentPassword) {
      showNotification('error', 'Please enter your current password to confirm changes');
      return;
    }

    if (securityForm.newPassword) {
      if (securityForm.newPassword.length < 6) {
        showNotification('error', 'New password must be at least 6 characters long');
        return;
      }
      if (securityForm.newPassword !== securityForm.confirmPassword) {
        showNotification('error', 'New password and confirm password do not match');
        return;
      }
    }

    setSaving(true);
    try {
      const res = await fetch('/api/auth/change-credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: securityForm.currentPassword,
          newUsername: securityForm.newUsername,
          newEmail: securityForm.newEmail,
          newPassword: securityForm.newPassword || undefined
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to update security credentials');

      showNotification('success', 'Admin credentials updated successfully! Keep your new password safe.');
      setSecurityForm(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    } catch (err: any) {
      showNotification('error', err.message || 'Failed to update security credentials');
    } finally {
      setSaving(false);
    }
  };

  // Filter products in admin view
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
      (p.modelNumber && p.modelNumber.toLowerCase().includes(productSearch.toLowerCase()));
    const matchesCat = productCategoryFilter === 'All' || p.category === productCategoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#040814] text-slate-100 flex flex-col font-sans">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-30 bg-[#060e22] border-b border-cyan-900/80 px-4 sm:px-6 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-full bg-slate-950 border border-cyan-500/40">
            <STSLogo size="sm" showText={false} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-black text-white font-tech tracking-wide">
                SHAMIM TECH SOLUTION
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                Admin Panel
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Haragach, Rangpur • Official Security & CCTV Control Center
            </p>
          </div>
        </div>

        {/* Right Admin Profile & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs font-bold text-white font-mono">{adminUser.username}</span>
            <span className="text-[10px] text-cyan-400">{adminUser.email}</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-colors cursor-pointer border border-slate-700"
            title="View Live Website"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">View Website</span>
          </button>

          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 text-red-300 hover:text-white text-xs font-bold transition-colors cursor-pointer border border-red-500/40"
            title="Logout"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-16 right-4 z-50 max-w-md p-4 rounded-xl shadow-2xl flex items-center gap-3 border transition-all animate-bounce ${
          notification.type === 'success' 
            ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200' 
            : 'bg-red-950/90 border-red-500 text-red-200'
        }`}>
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          )}
          <span className="text-xs sm:text-sm font-semibold">{notification.message}</span>
        </div>
      )}

      {/* Main Admin Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 bg-[#050b1a] border-r border-cyan-950/80 p-3 sm:p-4 flex md:flex-col gap-1.5 overflow-x-auto md:overflow-x-visible shrink-0">
          <div className="hidden md:block text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
            Control Navigation
          </div>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'products'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>Products (পণ্য)</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'products' ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-300'
            }`}>
              {products.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('downloads')}
            className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'downloads'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Downloads & ZKT/ZEP</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'downloads' ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-300'
            }`}>
              {downloads.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Contact & Social Info</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'content'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Site Texts & Banners</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'orders'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Orders (অর্ডার)</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'orders' ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-300'
            }`}>
              {orders.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('customers')}
            className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'customers'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>Customers (গ্রাহক)</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              activeTab === 'customers' ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-300'
            }`}>
              {customers.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'security'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Admin Password</span>
          </button>

          <div className="hidden md:block mt-auto pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
            <div className="text-cyan-400 font-semibold">STS Security Core v2.0</div>
            <div>PBKDF2 Salted Auth</div>
            <div>Haragach, Rangpur</div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#040815]">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {/* ======================================================== */}
              {/* TAB 1: PRODUCTS MANAGEMENT */}
              {/* ======================================================== */}
              {activeTab === 'products' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white font-tech flex items-center gap-2">
                        <Package className="w-6 h-6 text-cyan-400" />
                        Product Management (পণ্য ব্যবস্থাপনা)
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Add, edit, delete products, upload images, update prices, and toggle active status.
                      </p>
                    </div>

                    <button
                      onClick={handleOpenAddProduct}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer shrink-0"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>Add New Product</span>
                    </button>
                  </div>

                  {/* Search and Filters */}
                  <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search product by name, brand, model..."
                        value={productSearch}
                        onChange={(e) => setProductSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <select
                      value={productCategoryFilter}
                      onChange={(e) => setProductCategoryFilter(e.target.value)}
                      className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:border-cyan-500 outline-none cursor-pointer"
                    >
                      <option value="All">All Categories ({products.length})</option>
                      {PRODUCT_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Products Table / Cards */}
                  <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                      <thead className="bg-slate-900/90 text-slate-400 uppercase text-[11px] font-mono border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4">Image</th>
                          <th className="py-3 px-4">Product Details</th>
                          <th className="py-3 px-4">Category</th>
                          <th className="py-3 px-4">Price (৳)</th>
                          <th className="py-3 px-4 text-center">Status</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        {filteredProducts.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="py-8 text-center text-slate-500">
                              No products found matching criteria.
                            </td>
                          </tr>
                        ) : (
                          filteredProducts.map((p) => (
                            <tr key={p.id} className="hover:bg-slate-900/40 transition-colors">
                              <td className="py-3 px-4">
                                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden flex items-center justify-center shrink-0">
                                  <img 
                                    src={p.image} 
                                    alt={p.name} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80';
                                    }}
                                  />
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-bold text-white text-sm font-tech">{p.name}</div>
                                <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                                  <span className="text-cyan-400 font-semibold">{p.brand}</span>
                                  {p.modelNumber && <span>• {p.modelNumber}</span>}
                                  {p.warranty && <span>• {p.warranty}</span>}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-700">
                                  {p.category}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-bold text-cyan-300 font-mono text-sm">৳{p.price.toLocaleString()}</div>
                                {p.originalPrice && (
                                  <div className="text-[11px] text-slate-500 line-through">৳{p.originalPrice.toLocaleString()}</div>
                                )}
                              </td>
                              <td className="py-3 px-4 text-center">
                                <button
                                  onClick={() => handleToggleProductActive(p)}
                                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold cursor-pointer transition-all ${
                                    p.isActive !== false
                                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900'
                                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700'
                                  }`}
                                  title="Click to toggle Active/Inactive"
                                >
                                  {p.isActive !== false ? '● Active' : '○ Inactive'}
                                </button>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button
                                    onClick={() => handleOpenEditProduct(p)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 cursor-pointer"
                                    title="Edit Product"
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteProduct(p.id, p.name)}
                                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 border border-slate-700 cursor-pointer"
                                    title="Delete Product"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TAB 2: DOWNLOADS & ZKT/ZEP SOFTWARE */}
              {/* ======================================================== */}
              {/* TAB 2: SOFTWARE / DOWNLOADS & FILE MANAGEMENT */}
              {/* ======================================================== */}
              {activeTab === 'downloads' && (
                <div className="space-y-6">
                  {/* Section Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-white font-tech flex items-center gap-2">
                        <Download className="w-6 h-6 text-cyan-400" />
                        Software / Downloads (সফটওয়্যার ও ফাইল কন্ট্রোল)
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Upload PC files (ZIP, EXE, MSI, PDF), attach to software packages like ZKT/ZEP, update versions, and configure download buttons.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 flex-wrap">
                      <button
                        onClick={handleOpenAddDownload}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4 stroke-[3]" />
                        <span>Add Software</span>
                      </button>
                    </div>
                  </div>

                  {/* Sub Tabs: Software List vs Server Storage Files */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setDownloadsViewMode('software')}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          downloadsViewMode === 'software'
                            ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Software Packages ({downloads.length})</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setDownloadsViewMode('storage');
                          fetchUploadedFiles();
                        }}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          downloadsViewMode === 'storage'
                            ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        <HardDrive className="w-3.5 h-3.5" />
                        <span>Server Storage Files ({uploadedFilesList.length})</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Visitors cannot view admin links; only customized download buttons are displayed.</span>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* VIEW 1: SOFTWARE PACKAGES */}
                  {/* ======================================================== */}
                  {downloadsViewMode === 'software' && (
                    <div className="space-y-4">
                      {/* Search and Category Filter */}
                      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <div className="relative w-full sm:w-80">
                          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Search software by name or version..."
                            value={downloadSearch}
                            onChange={(e) => setDownloadSearch(e.target.value)}
                            className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-cyan-500 outline-none"
                          />
                        </div>

                        {/* Category filter pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1">
                          {['All', 'Time Attendance', 'Access Control', 'CCTV Tools', 'Software', 'Manual', 'Other'].map(cat => (
                            <button
                              key={cat}
                              onClick={() => setDownloadCategoryFilter(cat)}
                              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                                downloadCategoryFilter === cat
                                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50'
                                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Software Cards List */}
                      {downloads.length === 0 ? (
                        <div className="p-8 rounded-2xl bg-slate-950/60 border border-dashed border-slate-800 text-center space-y-3">
                          <FolderArchive className="w-12 h-12 text-slate-600 mx-auto" />
                          <div className="text-white font-tech font-bold text-sm">No Software Packages Added Yet</div>
                          <p className="text-xs text-slate-400 max-w-md mx-auto">
                            Click "Add Software" to upload your ZKT/ZEP ZIP or CCTV tools directly from your computer.
                          </p>
                          <button
                            onClick={handleOpenAddDownload}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Add First Software Package</span>
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-3.5">
                          {downloads
                            .filter(d => {
                              const matchSearch = downloadSearch === '' || 
                                d.title.toLowerCase().includes(downloadSearch.toLowerCase()) ||
                                (d.version && d.version.toLowerCase().includes(downloadSearch.toLowerCase())) ||
                                (d.description && d.description.toLowerCase().includes(downloadSearch.toLowerCase()));
                              const matchCat = downloadCategoryFilter === 'All' || d.category === downloadCategoryFilter;
                              return matchSearch && matchCat;
                            })
                            .map((d) => (
                              <div
                                key={d.id}
                                className={`p-4 rounded-2xl border transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4 ${
                                  d.isActive !== false
                                    ? 'bg-slate-950/90 border-slate-800 hover:border-cyan-500/50 shadow-lg'
                                    : 'bg-slate-950/40 border-slate-900 opacity-60'
                                }`}
                              >
                                <div className="flex items-start gap-3.5">
                                  <div className="w-11 h-11 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 shadow-inner">
                                    {d.fileType?.includes('PDF') ? (
                                      <FileText className="w-5 h-5" />
                                    ) : (
                                      <FolderArchive className="w-5 h-5" />
                                    )}
                                  </div>

                                  <div className="space-y-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <h3 className="text-sm sm:text-base font-bold text-white font-tech">
                                        {d.title}
                                      </h3>

                                      {/* Version Badge */}
                                      <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-[10px] font-bold text-cyan-300 border border-cyan-500/40 font-mono">
                                        v{d.version || '1.0'}
                                      </span>

                                      {/* Category Badge */}
                                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-300 border border-slate-700">
                                        {d.category || 'Software'}
                                      </span>

                                      {/* Status Badge */}
                                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${
                                        d.isActive !== false
                                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                                          : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                                      }`}>
                                        Status: {d.isActive !== false ? 'Active' : 'Inactive'}
                                      </span>
                                    </div>

                                    {/* Uploaded File Details */}
                                    <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                                      <div className="flex items-center gap-1 text-slate-200">
                                        <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                                        <span className="font-semibold">File:</span>
                                        <span className="font-mono text-cyan-300">
                                          {d.originalFileName || d.storedFileName || (d.downloadUrl?.split('/').pop()) || 'No file attached'}
                                        </span>
                                        {d.fileSize && (
                                          <span className="text-[11px] text-slate-400 font-mono">({d.fileSize})</span>
                                        )}
                                      </div>

                                      {d.compatibleDevice && (
                                        <span className="text-[11px] text-slate-400">
                                          • Compatible: <strong className="text-slate-300 font-normal">{d.compatibleDevice}</strong>
                                        </span>
                                      )}
                                    </div>

                                    <p className="text-xs text-slate-400 line-clamp-1">
                                      {d.description}
                                    </p>

                                    {/* Direct Download URL info */}
                                    <div className="flex items-center gap-2 pt-0.5">
                                      <span className="text-[11px] text-slate-500 font-mono">URL:</span>
                                      <span className="font-mono text-[11px] text-slate-400 max-w-xs sm:max-w-md truncate">
                                        {d.downloadUrl || 'No download URL'}
                                      </span>
                                      {d.downloadUrl && (
                                        <button
                                          type="button"
                                          onClick={() => handleCopyUrl(d.downloadUrl!)}
                                          className="text-[10px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                                          title="Copy Download URL"
                                        >
                                          <Copy className="w-3 h-3" />
                                          <span>Copy</span>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Action Buttons Panel */}
                                <div className="flex items-center gap-2 self-end lg:self-center shrink-0 flex-wrap">
                                  {/* Visitor Download Button Preview / Test */}
                                  <button
                                    onClick={() => handleTestDownload(d.downloadUrl, d.originalFileName || `${d.title}.zip`)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/90 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-bold transition-all cursor-pointer shadow-sm"
                                    title="Click to test downloading this file"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Download: {d.buttonLabel || 'Download Software'}</span>
                                  </button>

                                  {/* Replace File Button */}
                                  <button
                                    onClick={() => handleOpenReplaceModal(d)}
                                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 text-xs font-semibold cursor-pointer transition-colors"
                                    title="Upload and replace file with new version from PC"
                                  >
                                    <Upload className="w-3.5 h-3.5" />
                                    <span>Replace File</span>
                                  </button>

                                  {/* Edit Details */}
                                  <button
                                    onClick={() => handleOpenEditDownload(d)}
                                    className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 cursor-pointer transition-colors"
                                    title="Edit Software Details"
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>

                                  {/* Toggle Active / Inactive */}
                                  <button
                                    onClick={() => handleToggleDownloadActive(d)}
                                    className={`px-2.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                                      d.isActive !== false
                                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900'
                                        : 'bg-slate-800 text-slate-400 border border-slate-700 hover:text-white'
                                    }`}
                                    title={d.isActive !== false ? 'Click to Inactivate' : 'Click to Activate'}
                                  >
                                    {d.isActive !== false ? 'Active' : 'Inactive'}
                                  </button>

                                  {/* Delete */}
                                  <button
                                    onClick={() => handleDeleteDownload(d.id, d.title)}
                                    className="p-2 rounded-xl bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 border border-slate-700 cursor-pointer transition-colors"
                                    title="Delete Software & Stored File"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ======================================================== */}
                  {/* VIEW 2: SERVER STORAGE & UPLOADED FILES INVENTORY */}
                  {/* ======================================================== */}
                  {downloadsViewMode === 'storage' && (
                    <div className="space-y-6">
                      {/* Direct Upload Card */}
                      <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070f23] border border-cyan-500/40 shadow-xl space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                              <ArrowUpCircle className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-black text-white font-tech">
                                Upload Software / File from PC to Server Storage
                              </h3>
                              <p className="text-xs text-slate-400">
                                Upload any ZIP, EXE, MSI, PDF, or tool file. Files will be stored permanently on the server storage.
                              </p>
                            </div>
                          </div>

                          <span className="text-[11px] font-mono text-cyan-400 px-2 py-1 rounded bg-cyan-950/60 border border-cyan-800">
                            Storage: /server_data/uploads/
                          </span>
                        </div>

                        {/* File Chooser and Upload Action */}
                        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                          <div className="flex flex-col sm:flex-row items-center gap-3">
                            <input
                              type="file"
                              ref={fileInputRef}
                              accept=".zip,.rar,.7z,.exe,.msi,.pdf,.apk,.bin,.iso,.tar,.gz,*"
                              onChange={handleSelectUploadFile}
                              className="hidden"
                              id="server-storage-file-input"
                            />

                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
                            >
                              <Folder className="w-4 h-4 text-cyan-400" />
                              <span>{selectedUploadFile ? 'Change Selected File' : 'Select File from Computer (PC)'}</span>
                            </button>

                            {selectedUploadFile && (
                              <div className="flex-1 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs w-full">
                                <div className="flex items-center gap-2 truncate">
                                  <FileCode className="w-4 h-4 text-cyan-400 shrink-0" />
                                  <span className="text-white font-medium truncate">{selectedUploadFile.name}</span>
                                  <span className="text-slate-400 font-mono shrink-0">({formatFileSize(selectedUploadFile.size)})</span>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => setSelectedUploadFile(null)}
                                  className="text-slate-400 hover:text-red-400 p-1 cursor-pointer"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            )}

                            <button
                              type="button"
                              disabled={!selectedUploadFile || isUploadingFile}
                              onClick={() => handleExecuteUpload()}
                              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer shadow-lg"
                            >
                              <Upload className="w-4 h-4" />
                              <span>{isUploadingFile ? `Uploading (${uploadProgress}%)` : 'Upload File to Server'}</span>
                            </button>
                          </div>

                          {/* Live Upload Progress Bar */}
                          {isUploadingFile && (
                            <div className="space-y-1.5 pt-2 animate-fadeIn">
                              <div className="flex justify-between text-xs text-slate-300">
                                <span>Uploading to server disk...</span>
                                <span className="font-mono text-cyan-400 font-bold">{uploadProgress}%</span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-700">
                                <div
                                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200"
                                  style={{ width: `${uploadProgress}%` }}
                                />
                              </div>
                            </div>
                          )}

                          {/* Upload Result Notification */}
                          {uploadMessage && (
                            <div className={`p-3 rounded-xl text-xs font-semibold flex items-center justify-between gap-2 ${
                              uploadMessage.success
                                ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                                : 'bg-red-950/80 border border-red-500/40 text-red-300'
                            }`}>
                              <div className="flex items-center gap-2">
                                {uploadMessage.success ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                                <span>{uploadMessage.text}</span>
                              </div>
                              {uploadMessage.fileInfo && (
                                <button
                                  type="button"
                                  onClick={() => handleCopyUrl(uploadMessage.fileInfo.downloadUrl)}
                                  className="px-2.5 py-1 rounded-lg bg-emerald-900 text-emerald-200 hover:bg-emerald-800 text-[11px] font-bold cursor-pointer shrink-0 flex items-center gap-1"
                                >
                                  <Copy className="w-3 h-3" />
                                  <span>Copy URL</span>
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Stored Files Inventory Table */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white font-tech flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-cyan-400" />
                            <span>Files Stored on Server ({uploadedFilesList.length})</span>
                          </h4>

                          <button
                            type="button"
                            onClick={fetchUploadedFiles}
                            className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Refresh File List</span>
                          </button>
                        </div>

                        {uploadedFilesList.length === 0 ? (
                          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 text-center text-slate-400 text-xs">
                            No files uploaded to server storage yet. Use the upload box above to upload files.
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-2.5">
                            {uploadedFilesList.map((file) => {
                              // Find if this stored file is connected to any software download item
                              const connectedSoftware = downloads.find(
                                d => d.storedFileName === file.storedName || d.downloadUrl?.includes(file.storedName)
                              );

                              return (
                                <div
                                  key={file.storedName}
                                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">
                                      <FileCode className="w-4 h-4" />
                                    </div>

                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-bold text-white text-xs sm:text-sm truncate font-tech">
                                          {file.originalName}
                                        </span>
                                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">
                                          {file.sizeFormatted}
                                        </span>
                                        <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-[10px] text-cyan-300 font-mono">
                                          {file.fileType}
                                        </span>
                                        {connectedSoftware && (
                                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-[10px] text-emerald-300 border border-emerald-500/30">
                                            Linked to: {connectedSoftware.title}
                                          </span>
                                        )}
                                      </div>

                                      <div className="text-[11px] text-slate-400 flex items-center gap-3 mt-1">
                                        <span>Uploaded: {new Date(file.uploadedAt).toLocaleString()}</span>
                                        <span>•</span>
                                        <span className="font-mono text-slate-500 truncate max-w-xs">{file.storedName}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                    <button
                                      type="button"
                                      onClick={() => handleTestDownload(file.downloadUrl, file.originalName)}
                                      className="px-2.5 py-1.5 rounded-lg bg-cyan-950 text-cyan-300 hover:bg-cyan-900 border border-cyan-500/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                                      title="Download file"
                                    >
                                      <Download className="w-3.5 h-3.5" />
                                      <span>Download</span>
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => handleCopyUrl(file.downloadUrl)}
                                      className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
                                      title="Copy Direct Download Link"
                                    >
                                      <Copy className="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() => handleDeleteUploadedFile(file.storedName, file.originalName)}
                                      className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-red-400 hover:bg-red-950/60 border border-slate-700 cursor-pointer"
                                      title="Permanently Delete File from Server Disk"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ======================================================== */}
              {/* TAB 3: CONTACT & SOCIAL INFO */}
              {/* ======================================================== */}
              {activeTab === 'contact' && companyInfo && (
                <form onSubmit={handleSaveCompanyInfo} className="space-y-6 max-w-4xl">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-tech flex items-center gap-2">
                      <Phone className="w-6 h-6 text-cyan-400" />
                      Contact & Social Information (যোগাযোগ ও সোশ্যাল মিডিয়া)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Update official phone numbers, WhatsApp, Facebook links, and Haragach/Rangpur location.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Primary Phone Number (মোবাইল নম্বর)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.phone}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Formatted Phone Display (প্রদর্শনের জন্য)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.phoneFormatted}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, phoneFormatted: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        WhatsApp Number (হোয়াটসঅ্যাপ নম্বর)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.whatsapp}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, whatsapp: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        WhatsApp International Format (e.g. 8801865321530)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.whatsappInternational}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, whatsappInternational: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Official Facebook Page / Profile Link (ফেসবুক লিংক)
                      </label>
                      <input
                        type="url"
                        value={companyInfo.facebook}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, facebook: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-cyan-300 focus:border-cyan-500 outline-none"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Business Location (ঠিকানা)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.location}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, location: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Service Area (কভারেজ এলাকা)
                      </label>
                      <textarea
                        rows={2}
                        value={companyInfo.serviceArea}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, serviceArea: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address or Placeholder
                      </label>
                      <input
                        type="text"
                        value={companyInfo.emailPlaceholder}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, emailPlaceholder: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Google Maps Location Query
                      </label>
                      <input
                        type="text"
                        value={companyInfo.mapQuery}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, mapQuery: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? 'Saving...' : 'Save Contact Information'}</span>
                  </button>
                </form>
              )}

              {/* ======================================================== */}
              {/* TAB 4: SITE TEXTS & BANNERS */}
              {/* ======================================================== */}
              {activeTab === 'content' && companyInfo && siteContent && (
                <form onSubmit={handleSaveSiteContent} className="space-y-6 max-w-4xl">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-tech flex items-center gap-2">
                      <FileText className="w-6 h-6 text-cyan-400" />
                      Website Texts & Headlines (ওয়েবসাইট টেক্সট ও ব্যানার)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Customize company slogans, hero headlines, top banner notices, and promotional text.
                    </p>
                  </div>

                  <div className="space-y-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        English Slogan (অফিসিয়াল স্লোগান)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.slogan}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, slogan: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Bengali Slogan (বাংলা স্লোগান)
                      </label>
                      <input
                        type="text"
                        value={companyInfo.bengaliSlogan}
                        onChange={(e) => setCompanyInfo({ ...companyInfo, bengaliSlogan: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-cyan-300 focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Hero Main Headline (প্রধান শিরোনাম)
                      </label>
                      <input
                        type="text"
                        value={siteContent.heroHeadline}
                        onChange={(e) => setSiteContent({ ...siteContent, heroHeadline: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Hero Subheadline / Description (বর্ণনা)
                      </label>
                      <textarea
                        rows={3}
                        value={siteContent.heroSubheadline}
                        onChange={(e) => setSiteContent({ ...siteContent, heroSubheadline: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Notice Ticker / Announcement Bar (উপরের নোটিশ বার)
                      </label>
                      <input
                        type="text"
                        value={siteContent.noticeTicker}
                        onChange={(e) => setSiteContent({ ...siteContent, noticeTicker: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-yellow-300 focus:border-cyan-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Emergency Support Notice (জরুরি সাপোর্ট মেসেজ)
                      </label>
                      <input
                        type="text"
                        value={siteContent.emergencySupportText}
                        onChange={(e) => setSiteContent({ ...siteContent, emergencySupportText: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? 'Saving...' : 'Save Site Content'}</span>
                  </button>
                </form>
              )}

              {/* ======================================================== */}
              {/* TAB 5: ADMIN SECURITY & PASSWORD */}
              {/* ======================================================== */}
              {activeTab === 'security' && (
                <form onSubmit={handleSaveSecurity} className="space-y-6 max-w-xl">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-tech flex items-center gap-2">
                      <Lock className="w-6 h-6 text-cyan-400" />
                      Admin Security & Password (সিকিউরিটি ও পাসওয়ার্ড)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Change admin username, email, and password. Password is encrypted using PBKDF2 with unique salts.
                    </p>
                  </div>

                  <div className="space-y-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Admin Username
                      </label>
                      <input
                        type="text"
                        value={securityForm.newUsername}
                        onChange={(e) => setSecurityForm({ ...securityForm, newUsername: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Admin Email
                      </label>
                      <input
                        type="email"
                        value={securityForm.newEmail}
                        onChange={(e) => setSecurityForm({ ...securityForm, newEmail: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                      <label className="block text-xs font-bold text-yellow-400 mb-1">
                        Current Password (বর্তমান পাসওয়ার্ড - ভেরিফিকেশনের জন্য প্রয়োজন)
                      </label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        value={securityForm.currentPassword}
                        onChange={(e) => setSecurityForm({ ...securityForm, currentPassword: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        New Password (নতুন পাসওয়ার্ড - পরিবর্তন করতে চাইলে লিখুন)
                      </label>
                      <input
                        type="password"
                        placeholder="Leave blank to keep unchanged"
                        value={securityForm.newPassword}
                        onChange={(e) => setSecurityForm({ ...securityForm, newPassword: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                      />
                    </div>

                    {securityForm.newPassword && (
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Confirm New Password (নতুন পাসওয়ার্ড নিশ্চিত করুন)
                        </label>
                        <input
                          type="password"
                          placeholder="Re-type new password"
                          value={securityForm.confirmPassword}
                          onChange={(e) => setSecurityForm({ ...securityForm, confirmPassword: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? 'Updating Security...' : 'Update Admin Credentials'}</span>
                  </button>
                </form>
              )}

              {/* ======================================================== */}
              {/* TAB 6: CUSTOMER ORDERS */}
              {/* ======================================================== */}
              {activeTab === 'orders' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-white font-tech flex items-center gap-2">
                      <ShoppingCart className="w-6 h-6 text-cyan-400" />
                      Customer Orders (গ্রাহকদের অর্ডার)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      View all orders placed through the website with delivery details and total BDT.
                    </p>
                  </div>

                  {orders.length === 0 ? (
                    <div className="p-12 rounded-2xl bg-slate-950/60 border border-slate-800 text-center">
                      <ShoppingCart className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                      <h3 className="text-base font-bold text-slate-300">No orders placed yet</h3>
                      <p className="text-xs text-slate-500 mt-1">When customers order from the website, orders will appear here.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((o) => (
                        <div key={o.orderId} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-cyan-400 text-sm">{o.orderId}</span>
                                <span className="text-xs text-slate-400">• {new Date(o.orderDate).toLocaleString()}</span>
                              </div>
                              <h3 className="text-base font-bold text-white mt-0.5">{o.customerName}</h3>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-base font-black text-emerald-400 font-mono">
                                ৳{o.totalAmount.toLocaleString()}
                              </span>
                              <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                o.status === 'Completed'
                                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                                  : o.status === 'Confirmed'
                                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                                  : 'bg-yellow-950 text-yellow-300 border border-yellow-500/40'
                              }`}>
                                {o.status}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                            <div>
                              <span className="text-slate-500">Phone: </span>
                              <a href={`tel:${o.mobileNumber}`} className="text-cyan-400 font-mono font-bold hover:underline">
                                {o.mobileNumber}
                              </a>
                            </div>
                            <div>
                              <span className="text-slate-500">Delivery: </span>
                              <span className="font-medium text-white">{o.deliveryOption}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Payment: </span>
                              <span className="font-medium text-white">{o.paymentMethod}</span>
                            </div>
                          </div>

                          <div className="text-xs text-slate-300">
                            <span className="text-slate-500">Address: </span>
                            <span>{o.fullAddress}, {o.district}</span>
                          </div>

                          <div className="pt-2 border-t border-slate-900">
                            <div className="text-[11px] font-bold text-slate-400 uppercase mb-1">Ordered Items:</div>
                            <div className="space-y-1">
                              {o.items?.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-xs text-slate-300">
                                  <span>{item.product.name} × {item.quantity}</span>
                                  <span className="font-mono text-cyan-400">৳{(item.product.price * item.quantity).toLocaleString()}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ======================================================== */}
              {/* TAB 7: CUSTOMERS (গ্রাহক ব্যবস্থাপনা) */}
              {/* ======================================================== */}
              {activeTab === 'customers' && (
                <div className="space-y-6">
                  {/* Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                    <div>
                      <h2 className="text-lg font-black text-white font-tech flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-cyan-400" />
                        <span>Registered Customers (নিবন্ধিত গ্রাহকগণ)</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Total: {customers.length}
                        </span>
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        ওয়েবসাইট থেকে Create Account / Register করা সকল কাস্টমারের পূর্ণ বিবরণ ও অর্ডার হিস্টোরি
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search by name, phone, district..."
                          value={customerSearch}
                          onChange={(e) => setCustomerSearch(e.target.value)}
                          className="px-3.5 py-2 pl-9 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:border-cyan-400 outline-none w-56 sm:w-64"
                        />
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                      </div>
                      <button
                        type="button"
                        onClick={fetchCustomers}
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition"
                        title="Reload Customers"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Customer Cards List */}
                  {customers.length === 0 ? (
                    <div className="py-16 text-center text-slate-400 space-y-3 bg-slate-900/40 rounded-2xl border border-slate-800">
                      <UserCheck className="w-12 h-12 mx-auto text-slate-600" />
                      <p className="text-base font-semibold text-slate-300">এখনও কোনো গ্রাহক রেজিস্টার করেনি</p>
                      <p className="text-xs text-slate-500 max-w-md mx-auto">
                        গ্রাহকরা ওয়েবসাইটে "Create Account" ফরম পূরণ করে রেজিস্টার করলে তাদের তথ্য স্বয়ংক্রিয়ভাবে এখানে দৃশ্যমান হবে।
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {customers
                        .filter(c => {
                          const q = customerSearch.toLowerCase();
                          return (
                            c.fullName.toLowerCase().includes(q) ||
                            (c.phone && c.phone.includes(q)) ||
                            (c.email && c.email.toLowerCase().includes(q)) ||
                            (c.district && c.district.toLowerCase().includes(q)) ||
                            (c.upazilaThana && c.upazilaThana.toLowerCase().includes(q)) ||
                            (c.loginIdentifier && c.loginIdentifier.toLowerCase().includes(q))
                          );
                        })
                        .map(cust => {
                          const customerOrders = orders.filter(
                            o => o.customerId === cust.id || (cust.phone && o.mobileNumber === cust.phone)
                          );

                          return (
                            <div
                              key={cust.id}
                              className="p-5 rounded-2xl bg-gradient-to-b from-[#091124] to-[#050b18] border border-slate-800 hover:border-cyan-500/50 transition shadow-lg flex flex-col justify-between"
                            >
                              <div className="space-y-3">
                                <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-base flex items-center justify-center">
                                      {cust.fullName.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                      <h3 className="text-sm font-bold text-white leading-tight">
                                        {cust.fullName}
                                      </h3>
                                      <span className="text-[11px] text-cyan-400 font-mono">
                                        ID: {cust.id}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                    Verified
                                  </span>
                                </div>

                                <div className="space-y-2 text-xs">
                                  <div className="flex items-center gap-2 text-slate-300">
                                    <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                    <span>{cust.phone || cust.loginIdentifier || 'N/A'}</span>
                                  </div>

                                  {cust.email && (
                                    <div className="flex items-center gap-2 text-slate-300">
                                      <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                      <span className="truncate">{cust.email}</span>
                                    </div>
                                  )}

                                  <div className="flex items-center gap-2 text-slate-300">
                                    <Building className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                    <span>{cust.district} • {cust.upazilaThana}</span>
                                  </div>

                                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-slate-400 text-[11px] leading-relaxed">
                                    <strong className="text-slate-300 block mb-0.5">ঠিকানা:</strong>
                                    {cust.address}
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                                <span className="text-slate-400 text-[11px]">
                                  রেজিস্ট্রেশন: {new Date(cust.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                                <span className="px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[11px] font-bold">
                                  {customerOrders.length} টি অর্ডার
                                </span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* ======================================================== */}
      {/* PRODUCT ADD / EDIT MODAL */}
      {/* ======================================================== */}
      {isProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-b from-[#0b152d] to-[#050b18] border border-cyan-500/40 p-6 shadow-2xl my-8">
            <button
              onClick={() => setIsProductModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-white font-tech mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-cyan-400" />
              {editingProduct ? 'Edit Product (পণ্য এডিট করুন)' : 'Add New Product (নতুন পণ্য যোগ করুন)'}
            </h3>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hikvision 2MP Dome Camera"
                    value={productForm.name || ''}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Category *</label>
                  <select
                    value={productForm.category || 'CCTV Camera'}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value as ProductCategory })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none cursor-pointer"
                  >
                    {PRODUCT_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Brand</label>
                  <input
                    type="text"
                    placeholder="e.g. Hikvision, Dahua, ZKTeco"
                    value={productForm.brand || ''}
                    onChange={(e) => setProductForm({ ...productForm, brand: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Selling Price (৳) *</label>
                  <input
                    type="number"
                    required
                    placeholder="2500"
                    value={productForm.price || ''}
                    onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-cyan-300 font-mono font-bold focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Original Price (৳) (Optional)</label>
                  <input
                    type="number"
                    placeholder="2900"
                    value={productForm.originalPrice || ''}
                    onChange={(e) => setProductForm({ ...productForm, originalPrice: e.target.value ? Number(e.target.value) : undefined })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-300 font-mono focus:border-cyan-500 outline-none"
                  />
                </div>

                {/* Product Image File Upload & Preview */}
                <div className="sm:col-span-2 p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <label className="block text-xs font-bold text-cyan-300">
                    Product Image (ছবি আপলোড বা URL)
                  </label>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Preview Box */}
                    <div className="w-20 h-20 rounded-xl bg-slate-900 border border-cyan-500/40 overflow-hidden flex items-center justify-center shrink-0">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <Package className="w-8 h-8 text-slate-600" />
                      )}
                    </div>

                    <div className="flex-1 space-y-2 w-full">
                      {/* File upload input */}
                      <label className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-bold cursor-pointer transition-colors">
                        <Upload className="w-4 h-4" />
                        <span>Upload Image File from Computer/Phone</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileUpload}
                          className="hidden"
                        />
                      </label>

                      {/* Or direct URL */}
                      <input
                        type="url"
                        placeholder="Or paste direct image URL (https://...)"
                        value={productForm.image || ''}
                        onChange={(e) => {
                          setProductForm({ ...productForm, image: e.target.value });
                          setImagePreview(e.target.value);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 focus:border-cyan-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Model Number</label>
                  <input
                    type="text"
                    placeholder="e.g. DS-2CE56D0T-IRPF"
                    value={productForm.modelNumber || ''}
                    onChange={(e) => setProductForm({ ...productForm, modelNumber: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Warranty</label>
                  <input
                    type="text"
                    placeholder="e.g. 1 Year Official Warranty"
                    value={productForm.warranty || ''}
                    onChange={(e) => setProductForm({ ...productForm, warranty: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Specifications (সংক্ষিপ্ত স্পেক্স)</label>
                  <input
                    type="text"
                    placeholder="e.g. 2MP (1080p) • 20m IR Night Vision • 2.8mm Lens • Smart IR"
                    value={productForm.specs || ''}
                    onChange={(e) => setProductForm({ ...productForm, specs: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Description (বিস্তারিত বিবরণ)</label>
                  <textarea
                    rows={3}
                    placeholder="Detailed information about the product..."
                    value={productForm.description || ''}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                <div className="flex items-center gap-6 sm:col-span-2 pt-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.inStock !== false}
                      onChange={(e) => setProductForm({ ...productForm, inStock: e.target.checked })}
                      className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0 w-4 h-4"
                    />
                    <span>In Stock (স্টকে আছে)</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.isActive !== false}
                      onChange={(e) => setProductForm({ ...productForm, isActive: e.target.checked })}
                      className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0 w-4 h-4"
                    />
                    <span>Active on Website (ওয়েবসাইটে দৃশ্যমান)</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{saving ? 'Saving...' : 'Save Product'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* DOWNLOAD ADD / EDIT MODAL */}
      {/* ======================================================== */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#0b152d] to-[#050b18] border border-cyan-500/40 p-6 shadow-2xl my-8">
            <button
              onClick={() => setIsDownloadModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-white font-tech mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-cyan-400" />
              {editingDownload ? 'Edit Software Package (সফটওয়্যার এডিট করুন)' : 'Add Software Package (নতুন সফটওয়্যার যোগ করুন)'}
            </h3>

            <form onSubmit={handleSaveDownload} className="space-y-4">
              {/* Software Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Software Name (যেমন: ZKT ZEP অথবা ZKTeco Attendance Management) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ZKT ZEP"
                  value={downloadForm.title || ''}
                  onChange={(e) => setDownloadForm({ ...downloadForm, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Version */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Version (যেমন: 1.0)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1.0"
                    value={downloadForm.version || ''}
                    onChange={(e) => setDownloadForm({ ...downloadForm, version: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Category (ক্যাটাগরি)
                  </label>
                  <select
                    value={downloadForm.category || 'Time Attendance'}
                    onChange={(e) => setDownloadForm({ ...downloadForm, category: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none cursor-pointer"
                  >
                    <option value="Time Attendance">Time Attendance (ZKT/ZEP)</option>
                    <option value="Access Control">Access Control</option>
                    <option value="CCTV Tools">CCTV Tools (SADP / ConfigTool)</option>
                    <option value="Software">Software</option>
                    <option value="VMS Client">VMS Client (iVMS / SmartPSS)</option>
                    <option value="Driver / Firmware">Driver / Firmware</option>
                    <option value="Manual">Manual & Guide</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* PC FILE SELECTION & UPLOAD SYSTEM */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white font-tech">
                      File Upload System (PC থেকে ফাইল আপলোড)
                    </span>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono">ZIP, EXE, MSI, PDF</span>
                </div>

                {/* Show currently attached file if editing */}
                {downloadForm.storedFileName && (
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-300">Attached:</span>
                      <span className="text-cyan-300 font-mono font-semibold truncate">
                        {downloadForm.originalFileName || downloadForm.storedFileName}
                      </span>
                      {downloadForm.fileSize && (
                        <span className="text-slate-400 font-mono text-[11px]">({downloadForm.fileSize})</span>
                      )}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 shrink-0">
                      Uploaded
                    </span>
                  </div>
                )}

                {/* File picker button and action */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".zip,.rar,.7z,.exe,.msi,.pdf,.apk,.bin,.iso,.tar,.gz,*"
                    onChange={handleSelectUploadFile}
                    className="hidden"
                    id="modal-software-file-input"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
                  >
                    <Folder className="w-4 h-4 text-cyan-400" />
                    <span>{selectedUploadFile ? 'Change Selected File' : 'Select File from PC (ZIP, EXE, MSI, PDF)'}</span>
                  </button>

                  {selectedUploadFile && (
                    <div className="flex-1 flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-cyan-500/40 text-xs w-full">
                      <span className="text-cyan-300 font-mono truncate">{selectedUploadFile.name}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedUploadFile(null)}
                        className="text-slate-400 hover:text-red-400 p-0.5 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={!selectedUploadFile || isUploadingFile}
                    onClick={() => handleExecuteUpload()}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer shadow-md"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{isUploadingFile ? `Uploading (${uploadProgress}%)` : 'Upload File'}</span>
                  </button>
                </div>

                {/* Progress bar */}
                {isUploadingFile && (
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] text-slate-300">
                      <span>Uploading software package to server...</span>
                      <span className="font-mono text-cyan-400 font-bold">{uploadProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden border border-slate-700">
                      <div
                        className="h-full bg-cyan-400 transition-all duration-200"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Upload status message */}
                {uploadMessage && (
                  <div className={`p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                    uploadMessage.success
                      ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/80 border border-red-500/40 text-red-300'
                  }`}>
                    {uploadMessage.success ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                    <span>{uploadMessage.text}</span>
                  </div>
                )}
              </div>

              {/* DOWNLOAD URL */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Download URL (সার্ভার লিংক অথবা গুগল ড্রাইভ/মেগা লিংক) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Auto-filled after upload or enter external URL: https://..."
                  value={downloadForm.downloadUrl || ''}
                  onChange={(e) => setDownloadForm({ ...downloadForm, downloadUrl: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-cyan-300 font-mono focus:border-cyan-500 outline-none"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  * ফাইল আপলোড করলে এই ফিল্ডটি স্বয়ংক্রিয়ভাবে পূরণ হবে। অথবা চাইলে গুগল ড্রাইভ / মেগা ইত্যাদির লিংকও দিতে পারেন।
                </p>
              </div>

              {/* BUTTON LABEL & FILE SIZE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Download Button Label (ডাউনলোড বাটন নাম)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Download Software or Download ZIP"
                    value={downloadForm.buttonLabel || ''}
                    onChange={(e) => setDownloadForm({ ...downloadForm, buttonLabel: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    File Size (সাইজ)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 85.4 MB"
                    value={downloadForm.fileSize || ''}
                    onChange={(e) => setDownloadForm({ ...downloadForm, fileSize: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Compatible Devices */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Compatible Devices / OS</label>
                <input
                  type="text"
                  placeholder="e.g. Windows 10/11 • ZKTeco K40, F18, uFace, MB20, Universal"
                  value={downloadForm.compatibleDevice || ''}
                  onChange={(e) => setDownloadForm({ ...downloadForm, compatibleDevice: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Description (বিবরণ)</label>
                <textarea
                  rows={2}
                  placeholder="Brief description of the software utility, setup notes..."
                  value={downloadForm.description || ''}
                  onChange={(e) => setDownloadForm({ ...downloadForm, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:border-cyan-500 outline-none"
                />
              </div>

              {/* Active / Inactive Switch */}
              <div className="pt-1">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-300 cursor-pointer p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <input
                    type="checkbox"
                    checked={downloadForm.isActive !== false}
                    onChange={(e) => setDownloadForm({ ...downloadForm, isActive: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-0 w-4 h-4 cursor-pointer"
                  />
                  <span>Active on Website (ওয়েবসাইটে দৃশ্যমান থাকবে)</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsDownloadModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs uppercase tracking-wider cursor-pointer disabled:opacity-50 shadow-lg shadow-cyan-500/25"
                >
                  <Save className="w-4 h-4" />
                  <span>{saving ? 'Saving...' : 'Save Software'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* REPLACE FILE MODAL (FOR EXISTING SOFTWARE) */}
      {/* ======================================================== */}
      {isReplaceFileModalOpen && targetReplaceItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#0b152d] to-[#050b18] border border-cyan-500/40 p-6 shadow-2xl my-8 space-y-4">
            <button
              onClick={() => {
                setIsReplaceFileModalOpen(false);
                setTargetReplaceItem(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-white font-tech">
                  Replace Software File (ফাইল আপডেট করুন)
                </h3>
                <p className="text-xs text-slate-400">
                  Upload a newer version from your PC to replace the existing file.
                </p>
              </div>
            </div>

            {/* Target Software Information */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Software:</span>
                <span className="text-white font-bold font-tech">{targetReplaceItem.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Version:</span>
                <span className="text-cyan-400 font-mono font-bold">{targetReplaceItem.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Current File:</span>
                <span className="text-slate-300 font-mono truncate max-w-[220px]">
                  {targetReplaceItem.originalFileName || targetReplaceItem.storedFileName || targetReplaceItem.downloadUrl?.split('/').pop()}
                </span>
              </div>
              {targetReplaceItem.fileSize && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Size:</span>
                  <span className="text-slate-300 font-mono">{targetReplaceItem.fileSize}</span>
                </div>
              )}
            </div>

            {/* Upload New Version */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
              <label className="block text-xs font-bold text-white">
                Select New Version File from PC (ZIP, EXE, MSI, PDF)
              </label>

              <input
                type="file"
                ref={replaceFileInputRef}
                accept=".zip,.rar,.7z,.exe,.msi,.pdf,.apk,.bin,.iso,.tar,.gz,*"
                onChange={handleExecuteReplaceFile}
                className="hidden"
                id="replace-file-input"
              />

              <button
                type="button"
                disabled={isReplacingFile}
                onClick={() => replaceFileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                <Folder className="w-4 h-4" />
                <span>{isReplacingFile ? `Uploading New Version (${replaceUploadProgress}%)` : 'Choose New File & Upload'}</span>
              </button>

              {/* Progress Bar */}
              {isReplacingFile && (
                <div className="space-y-1.5 pt-2 animate-fadeIn">
                  <div className="flex justify-between text-xs text-slate-300">
                    <span>Uploading new file and replacing old version...</span>
                    <span className="font-mono text-cyan-400 font-bold">{replaceUploadProgress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-700">
                    <div
                      className="h-full bg-cyan-400 transition-all duration-200"
                      style={{ width: `${replaceUploadProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsReplaceFileModalOpen(false);
                  setTargetReplaceItem(null);
                }}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
