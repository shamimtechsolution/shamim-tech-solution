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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 p-5 sm:p-6 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-lg">
              {customer.fullName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {customer.fullName}
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                  Customer
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <span>{customer.phone || customer.email || customer.loginIdentifier}</span>
                <span>•</span>
                <span>{customer.district}</span>
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-between gap-2 mt-5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-sm">
            <div className="flex items-center gap-2 flex-1">
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`py-2 px-4 rounded-lg font-medium transition text-xs sm:text-sm flex items-center gap-2 ${
                  activeTab === 'profile'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>My Profile (প্রোফাইল)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('orders')}
                className={`py-2 px-4 rounded-lg font-medium transition text-xs sm:text-sm flex items-center gap-2 ${
                  activeTab === 'orders'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>My Orders ({orders.length})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleLogoutClick}
              className="py-1.5 px-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/40 border border-transparent hover:border-red-500/30 transition text-xs flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto">
          {message && (
            <div className={`p-3.5 mb-4 rounded-xl text-xs sm:text-sm flex items-center gap-2.5 ${
              message.type === 'success' 
                ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-200' 
                : 'bg-red-950/60 border border-red-500/40 text-red-200'
            }`}>
              {message.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />}
              <span>{message.text}</span>
            </div>
          )}

          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div>
              {!isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                      <span className="text-xs text-slate-400 block mb-1">পূর্ণ নাম</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <User className="w-4 h-4 text-cyan-400" />
                        {customer.fullName}
                      </span>
                    </div>

                    <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                      <span className="text-xs text-slate-400 block mb-1">লগইন আইডি / মোবাইল / Gmail</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        {customer.phone || customer.email || customer.loginIdentifier}
                      </span>
                    </div>

                    <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                      <span className="text-xs text-slate-400 block mb-1">জেলা</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <Building className="w-4 h-4 text-cyan-400" />
                        {customer.district}
                      </span>
                    </div>

                    <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                      <span className="text-xs text-slate-400 block mb-1">উপজেলা / থানা</span>
                      <span className="text-sm font-semibold text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        {customer.upazilaThana}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
                    <span className="text-xs text-slate-400 block mb-1">সম্পূর্ণ ঠিকানা</span>
                    <span className="text-sm font-medium text-slate-200">
                      {customer.address}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>প্রোফাইল তথ্য বা পাসওয়ার্ড এডিট করুন</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">পূর্ণ নাম</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">মোবাইল নম্বর</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Gmail / ইমেইল</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">জেলা</label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-cyan-400"
                      >
                        {BANGLADESH_DISTRICTS.map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">উপজেলা / থানা</label>
                      <input
                        type="text"
                        value={upazilaThana}
                        onChange={(e) => setUpazilaThana(e.target.value)}
                        className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">সম্পূর্ণ ঠিকানা</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-cyan-400 resize-none"
                    />
                  </div>

                  {/* Password Change Box (Optional) */}
                  <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-3">
                    <span className="text-xs font-semibold text-cyan-400 block">পাসওয়ার্ড পরিবর্তন করতে চাইলে (ঐচ্ছিক):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">বর্তমান পাসওয়ার্ড</label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="বর্তমান পাসওয়ার্ড লিখুন"
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">নতুন পাসওয়ার্ড</label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="কমপক্ষে ৬ অক্ষর"
                          className="w-full px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
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
            <div className="space-y-4">
              {loadingOrders ? (
                <div className="py-12 flex flex-col items-center justify-center text-slate-400 gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
                  <span className="text-xs">অর্ডার হিস্টোরি লোড হচ্ছে...</span>
                </div>
              ) : orders.length === 0 ? (
                <div className="py-12 text-center text-slate-400 space-y-3">
                  <Package className="w-12 h-12 mx-auto text-slate-600" />
                  <p className="text-sm font-medium">আপনার এখনও কোনো অর্ডার নেই</p>
                  <p className="text-xs text-slate-500">
                    আমাদের শপ থেকে সিসিটিভি ক্যামেরা বা প্রয়োজনীয় যন্ত্রপাতি অর্ডার করতে পারেন!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {orders.map((ord) => (
                    <div
                      key={ord.orderId}
                      className="p-4 bg-slate-950/80 border border-slate-800 hover:border-slate-700 rounded-xl transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-3">
                        <div>
                          <span className="font-mono text-xs font-bold text-cyan-400">{ord.orderId}</span>
                          <span className="text-xs text-slate-400 ml-2">
                            {new Date(ord.orderDate).toLocaleDateString('bn-BD', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                          ord.status === 'Completed'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : ord.status === 'Confirmed'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}>
                          {ord.status}
                        </span>
                      </div>

                      {/* Items */}
                      <div className="space-y-1.5 mb-3">
                        {ord.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs">
                            <span className="text-slate-300">
                              {item.product.name} × <strong className="text-white">{item.quantity}</strong>
                            </span>
                            <span className="text-slate-400 font-mono">
                              ৳ {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Total and address */}
                      <div className="flex flex-wrap justify-between items-center text-xs pt-2 border-t border-slate-800/80">
                        <span className="text-slate-400">
                          ডেলিভারি: <span className="text-slate-300">{ord.deliveryOption}</span>
                        </span>
                        <div className="text-right">
                          <span className="text-slate-400 mr-2">সর্বমোট:</span>
                          <span className="text-sm font-bold text-cyan-400 font-mono">
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
