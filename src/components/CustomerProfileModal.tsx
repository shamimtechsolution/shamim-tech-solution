import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  Package, 
  LogOut, 
  Edit2, 
  Save, 
  Lock, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { CustomerUser, SavedOrder } from '../types';
import { BANGLADESH_DISTRICTS } from '../data/bangladeshDistricts';
import { apiGetCustomerOrders, apiUpdateCustomerProfile, apiCustomerLogout } from '../utils/customerAuth';

interface CustomerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer: CustomerUser;
  onUpdateCustomer: (updated: CustomerUser) => void;
  onLogout: () => void;
}

export const CustomerProfileModal: React.FC<CustomerProfileModalProps> = ({
  isOpen,
  onClose,
  customer,
  onUpdateCustomer,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders'>('profile');
  const [orders, setOrders] = useState<SavedOrder[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // Edit Mode state
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(customer.fullName || '');
  const [phone, setPhone] = useState(customer.phone || '');
  const [email, setEmail] = useState(customer.email || '');
  const [address, setAddress] = useState(customer.address || '');
  const [district, setDistrict] = useState(customer.district || 'রংপুর (Rangpur)');
  const [upazilaThana, setUpazilaThana] = useState(customer.upazilaThana || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFullName(customer.fullName || '');
      setPhone(customer.phone || '');
      setEmail(customer.email || '');
      setAddress(customer.address || '');
      setDistrict(customer.district || 'রংপুর (Rangpur)');
      setUpazilaThana(customer.upazilaThana || '');
      setIsEditing(false);
      setMessage(null);

      // Load orders
      setLoadingOrders(true);
      apiGetCustomerOrders().then(res => {
        setLoadingOrders(false);
        if (res.success && res.orders) {
          setOrders(res.orders);
        }
      });
    }
  }, [isOpen, customer]);

  if (!isOpen) return null;

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSaving(true);

    const res = await apiUpdateCustomerProfile({
      fullName,
      phone,
      email,
      address,
      district,
      upazilaThana,
      currentPassword: currentPassword || undefined,
      newPassword: newPassword || undefined
    });

    setSaving(false);
    if (res.success && res.customer) {
      setMessage({ type: 'success', text: res.message || 'প্রোফাইল সফলভাবে আপডেট হয়েছে!' });
      onUpdateCustomer(res.customer);
      setIsEditing(false);
      setCurrentPassword('');
      setNewPassword('');
    } else {
      setMessage({ type: 'error', text: res.error || 'আপডেট করতে সমস্যা হয়েছে' });
    }
  };

  const handleLogoutClick = async () => {
    await apiCustomerLogout();
    onLogout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-[calc(100%-1.75rem)] sm:w-full max-w-xl max-h-[85vh] bg-white border-2 border-[#05b802]/65 rounded-2xl shadow-2xl overflow-hidden my-auto transition-all text-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600" />

        {/* Header */}
        <div className="relative bg-sky-50/80 p-3.5 sm:p-4 border-b border-[#05b802]/25">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition text-xs font-bold border border-slate-300 shadow-xs cursor-pointer z-10"
            aria-label="Close"
            title="বাতিল / Cancel"
          >
            <X className="w-3.5 h-3.5 text-slate-600" />
            <span>Cancel</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-100 border border-[#05b802]/45 flex items-center justify-center text-cyan-700 font-bold text-lg shadow-xs shrink-0">
              {customer.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 pr-16 sm:pr-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-wide truncate">
                  {customer.fullName}
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-100 border border-[#05b802]/45 text-cyan-800 shrink-0">
                  Customer
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 flex items-center gap-1.5 truncate">
                <span>{customer.phone || customer.email || customer.loginIdentifier}</span>
                <span>•</span>
                <span>{customer.district}</span>
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-between gap-1.5 mt-3 p-1 bg-sky-100/70 rounded-xl border border-[#05b802]/40 text-xs">
            <div className="flex items-center gap-1.5 flex-1">
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`py-1.5 px-3 rounded-lg font-bold transition text-xs flex items-center gap-1.5 ${
                  activeTab === 'profile'
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>My Profile (প্রোফাইল)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('orders')}
                className={`py-1.5 px-3 rounded-lg font-bold transition text-xs flex items-center gap-1.5 ${
                  activeTab === 'orders'
                    ? 'bg-cyan-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>My Orders ({orders.length})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleLogoutClick}
              className="py-1 px-2.5 rounded-lg text-rose-700 hover:text-rose-900 hover:bg-rose-50 border border-rose-200 transition text-xs font-semibold flex items-center gap-1 cursor-pointer shrink-0"
            >
              <LogOut className="w-3 h-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-5 max-h-[70vh] overflow-y-auto">
          {message && (
            <div className={`p-3 mb-3.5 rounded-xl text-xs flex items-center gap-2 ${
              message.type === 'success' 
                ? 'bg-emerald-50 border border-emerald-300 text-emerald-800 font-medium' 
                : 'bg-rose-50 border border-rose-300 text-rose-800 font-medium'
            }`}>
              {message.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
              <span>{message.text}</span>
            </div>
          )}

          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div>
              {!isEditing ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="p-3 bg-sky-50/70 border border-[#05b802]/40 rounded-xl">
                      <span className="text-[11px] text-slate-500 block mb-0.5">পূর্ণ নাম</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-cyan-600" />
                        {customer.fullName}
                      </span>
                    </div>

                    <div className="p-3 bg-sky-50/70 border border-[#05b802]/40 rounded-xl">
                      <span className="text-[11px] text-slate-500 block mb-0.5">লগইন আইডি / মোবাইল / Gmail</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-cyan-600" />
                        {customer.phone || customer.email || customer.loginIdentifier}
                      </span>
                    </div>

                    <div className="p-3 bg-sky-50/70 border border-[#05b802]/40 rounded-xl">
                      <span className="text-[11px] text-slate-500 block mb-0.5">জেলা</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-cyan-600" />
                        {customer.district}
                      </span>
                    </div>

                    <div className="p-3 bg-sky-50/70 border border-[#05b802]/40 rounded-xl">
                      <span className="text-[11px] text-slate-500 block mb-0.5">উপজেলা / থানা</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                        {customer.upazilaThana}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-sky-50/70 border border-[#05b802]/40 rounded-xl">
                    <span className="text-[11px] text-slate-500 block mb-0.5">সম্পূর্ণ ঠিকানা</span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      {customer.address}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="py-2 px-3.5 bg-sky-100 hover:bg-sky-200 text-cyan-800 border border-[#05b802]/50 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                    >
                      <Edit2 className="w-3.5 h-3.5 text-cyan-700" />
                      <span>প্রোফাইল তথ্য বা পাসওয়ার্ড এডিট করুন</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveProfile} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">পূর্ণ নাম</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#05b802]/50 rounded-xl text-slate-900 text-xs sm:text-sm focus:border-[#05b802] shadow-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">মোবাইল নম্বর</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#05b802]/50 rounded-xl text-slate-900 text-xs sm:text-sm focus:border-[#05b802] shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Gmail / ইমেইল</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#05b802]/50 rounded-xl text-slate-900 text-xs sm:text-sm focus:border-[#05b802] shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">জেলা</label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#05b802]/50 rounded-xl text-slate-900 text-xs sm:text-sm focus:border-[#05b802] shadow-xs"
                      >
                        {BANGLADESH_DISTRICTS.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">উপজেলা / থানা</label>
                      <input
                        type="text"
                        value={upazilaThana}
                        onChange={(e) => setUpazilaThana(e.target.value)}
                        className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#05b802]/50 rounded-xl text-slate-900 text-xs sm:text-sm focus:border-[#05b802] shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">সম্পূর্ণ ঠিকানা</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#05b802]/50 rounded-xl text-slate-900 text-xs sm:text-sm focus:border-[#05b802] resize-none shadow-xs"
                    />
                  </div>

                  {/* Password Change Box (Optional) */}
                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2.5">
                    <span className="text-xs font-bold text-amber-800 block">পাসওয়ার্ড পরিবর্তন করতে চাইলে (ঐচ্ছিক):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] text-slate-600 mb-1">বর্তমান পাসওয়ার্ড</label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="বর্তমান পাসওয়ার্ড লিখুন"
                          className="w-full px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-slate-900 text-xs shadow-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-600 mb-1">নতুন পাসওয়ার্ড</label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="কমপক্ষে ৬ অক্ষর"
                          className="w-full px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-slate-900 text-xs shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold cursor-pointer"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="px-4 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                    >
                      {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                      <span>পরিবর্তন সংরক্ষণ করুন</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: MY ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-3">
              {loadingOrders ? (
                <div className="py-10 flex flex-col items-center justify-center text-slate-500 gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-cyan-600" />
                  <span className="text-xs">অর্ডার হিস্টোরি লোড হচ্ছে...</span>
                </div>
              ) : orders.length === 0 ? (
                <div className="py-10 text-center text-slate-500 space-y-2">
                  <Package className="w-10 h-10 mx-auto text-slate-400" />
                  <p className="text-xs sm:text-sm font-bold text-slate-800">আপনার এখনও কোনো অর্ডার নেই</p>
                  <p className="text-xs text-slate-500">
                    আমাদের শপ থেকে সিসিটিভি ক্যামেরা বা প্রয়োজনীয় যন্ত্রপাতি অর্ডার করতে পারেন!
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {orders.map((ord) => (
                    <div
                      key={ord.orderId}
                      className="p-3.5 bg-sky-50/70 border border-[#05b802]/45 hover:border-[#05b802] rounded-xl transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#05b802]/25 pb-2 mb-2">
                        <div>
                          <span className="font-mono text-xs font-bold text-cyan-700">{ord.orderId}</span>
                          <span className="text-xs text-slate-500 ml-2">
                            {new Date(ord.orderDate).toLocaleDateString('bn-BD', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                          ord.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : ord.status === 'Confirmed'
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}>
                          {ord.status}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-1 mb-2">
                        {ord.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs">
                            <span className="text-slate-700">
                              {item.product.name} × <strong className="text-slate-900">{item.quantity}</strong>
                            </span>
                            <span className="text-slate-600 font-mono">
                              ৳ {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Total and address */}
                      <div className="flex flex-wrap justify-between items-center text-xs pt-1.5 border-t border-[#05b802]/25">
                        <span className="text-slate-500">
                          ডেলিভারি: <span className="text-slate-800 font-medium">{ord.deliveryOption}</span>
                        </span>
                        <div className="text-right">
                          <span className="text-slate-500 mr-1.5">সর্বমোট:</span>
                          <span className="text-xs sm:text-sm font-bold text-cyan-800 font-mono">
                            ৳ {ord.totalAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
