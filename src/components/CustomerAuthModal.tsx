import React, { useState } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  MapPin, 
  Building, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight,
  KeyRound,
  ShieldCheck
} from 'lucide-react';
import { BANGLADESH_DISTRICTS } from '../data/bangladeshDistricts';
import { apiCustomerRegister, apiCustomerLogin, apiCustomerForgotPassword } from '../utils/customerAuth';
import { CustomerUser } from '../types';

interface CustomerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register' | 'forgot';
  onSuccess: (customer: CustomerUser) => void;
}

export const CustomerAuthModal: React.FC<CustomerAuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'register',
  onSuccess
}) => {
  const [mode, setMode] = useState<'register' | 'login' | 'forgot'>(initialMode);
  
  // Registration Form State (matching user exact specs)
  const [fullName, setFullName] = useState('');
  const [identifier, setIdentifier] = useState(''); // Mobile number OR Gmail
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('রংপুর (Rangpur)');
  const [upazilaThana, setUpazilaThana] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);

  // Login Form State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Forgot Password State
  const [forgotIdentifier, setForgotIdentifier] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // UI helpers
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // 1. Handle Registration
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!fullName.trim()) {
      setErrorMessage('১. আপনার পূর্ণ নাম লিখুন');
      return;
    }
    if (!identifier.trim()) {
      setErrorMessage('২. মোবাইল নম্বর অথবা Gmail প্রদান করুন');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('৩. Password কমপক্ষে ৬ অক্ষরের হতে হবে');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('৪. Confirm Password মেলেনি! আবার একই Password লিখুন');
      return;
    }
    if (!address.trim()) {
      setErrorMessage('৫. আপনার সম্পূর্ণ ঠিকানা লিখুন');
      return;
    }
    if (!district) {
      setErrorMessage('৬. আপনার জেলা নির্বাচন করুন');
      return;
    }
    if (!upazilaThana.trim()) {
      setErrorMessage('৭. আপনার উপজেলা বা থানা লিখুন');
      return;
    }
    if (!agreeTerms) {
      setErrorMessage('I agree to the Terms & Conditions-এ টিক চিহ্ন দিন');
      return;
    }

    setLoading(true);
    const res = await apiCustomerRegister({
      fullName: fullName.trim(),
      identifier: identifier.trim(),
      password,
      confirmPassword,
      address: address.trim(),
      district,
      upazilaThana: upazilaThana.trim(),
      agreeTerms
    });
    setLoading(false);

    if (res.success && res.customer) {
      setSuccessMessage(res.message || 'রেজিস্ট্রেশন সম্পন্ন হয়েছে!');
      setTimeout(() => {
        onSuccess(res.customer!);
        onClose();
      }, 1000);
    } else {
      setErrorMessage(res.error || 'রেজিস্ট্রেশন সম্পন্ন করা সম্ভব হয়নি');
    }
  };

  // 2. Handle Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!loginIdentifier.trim()) {
      setErrorMessage('মোবাইল নম্বর অথবা Gmail লিখুন');
      return;
    }
    if (!loginPassword) {
      setErrorMessage('Password লিখুন');
      return;
    }

    setLoading(true);
    const res = await apiCustomerLogin({
      identifier: loginIdentifier.trim(),
      password: loginPassword
    });
    setLoading(false);

    if (res.success && res.customer) {
      setSuccessMessage(res.message || 'লগইন সফল হয়েছে!');
      setTimeout(() => {
        onSuccess(res.customer!);
        onClose();
      }, 800);
    } else {
      setErrorMessage(res.error || 'লগইন করতে সমস্যা হয়েছে');
    }
  };

  // 3. Handle Forgot Password
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!forgotIdentifier.trim()) {
      setErrorMessage('আপনার রেজিস্টার্ড মোবাইল নম্বর অথবা Gmail লিখুন');
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setErrorMessage('নতুন Password কমপক্ষে ৬ অক্ষরের হতে হবে');
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrorMessage('Confirm Password মেলেনি! আবার একই Password লিখুন');
      return;
    }

    setLoading(true);
    const res = await apiCustomerForgotPassword({
      identifier: forgotIdentifier.trim(),
      newPassword,
      confirmPassword: confirmNewPassword
    });
    setLoading(false);

    if (res.success && res.customer) {
      setSuccessMessage(res.message || 'পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!');
      setTimeout(() => {
        onSuccess(res.customer!);
        onClose();
      }, 1200);
    } else {
      setErrorMessage(res.error || 'পাসওয়ার্ড রিসেট করতে সমস্যা হয়েছে');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F2937]/65 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-[calc(100%-1.75rem)] sm:w-full max-w-md max-h-[85vh] bg-white border border-[#DCE7F2] rounded-2xl shadow-xl overflow-hidden my-auto transition-all text-[#1F2937] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#123A70]" />

        {/* Top Header Banner */}
        <div className="relative bg-[#F7FAFC] p-3 sm:p-4 border-b border-[#DCE7F2]">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-[#EFF5FB] border border-[#DCE7F2] flex items-center justify-center text-[#123A70] shrink-0 shadow-xs">
                <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm sm:text-base font-bold text-[#1F2937] tracking-wide truncate">
                  SHAMIM <span className="text-[#147A43]">TECH</span> SOLUTION
                </h2>
                <p className="text-[10px] sm:text-[11px] text-[#4B5563] truncate">
                  {mode === 'register' && '📝 Create Account / কাস্টমার রেজিস্ট্রেশন'}
                  {mode === 'login' && '🔐 Customer Login / কাস্টমার লগইন'}
                  {mode === 'forgot' && '🔑 Forgot Password / পাসওয়ার্ড রিসেট'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white text-[#1F2937] hover:bg-[#EFF5FB] transition text-xs font-bold cursor-pointer border border-[#DCE7F2] shadow-xs shrink-0"
              aria-label="Cancel and Close"
              title="বাতিল করুন / Cancel"
            >
              <X className="w-3.5 h-3.5" />
              <span className="text-[11px]">Cancel</span>
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1.5 mt-3 p-1 bg-[#EFF5FB] rounded-xl border border-[#DCE7F2] text-xs">
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition text-xs ${
                mode === 'register'
                  ? 'bg-[#123A70] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1F2937]'
              }`}
            >
              📝 Create Account
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-1.5 px-2 rounded-lg font-bold transition text-xs ${
                mode === 'login'
                  ? 'bg-[#123A70] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1F2937]'
              }`}
            >
              🔐 Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('forgot');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`py-1.5 px-2.5 rounded-lg font-bold transition text-xs ${
                mode === 'forgot'
                  ? 'bg-[#123A70] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1F2937]'
              }`}
            >
              🔑 Reset Pass
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-5 max-h-[75vh] overflow-y-auto space-y-3 bg-white text-[#1F2937]">
          {/* Status Messages */}
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3 bg-rose-50 border border-rose-300 rounded-xl text-rose-800 text-xs sm:text-sm animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-start gap-2.5 p-3 bg-[#EAF6EF] border border-[#DCE7F2] rounded-xl text-[#147A43] text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#147A43] shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* ============================================================ */}
          {/* 1. REGISTER VIEW */}
          {/* ============================================================ */}
          {mode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-2.5 sm:space-y-3">
              {/* ১. আপনার নাম */}
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#123A70]" />
                  <span>১. আপনার নাম</span>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="পূর্ণ নাম লিখুন (যেমন: মোঃ শামীম ইসলাম)"
                  required
                  className="w-full px-3 py-1.5 sm:py-2 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                />
              </div>

              {/* ২. মোবাইল নম্বর অথবা Gmail */}
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>২. মোবাইল নম্বর অথবা Gmail</span>
                    <span className="text-rose-500">*</span>
                  </span>
                  <span className="text-[10px] text-[#123A70] font-semibold bg-[#EFF5FB] px-1.5 py-0.2 rounded">যেকোনো একটি দিয়ে হবে</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="01XXXXXXXXX অথবা example@gmail.com"
                    required
                    className="w-full px-3 py-1.5 sm:py-2 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                  />
                  <div className="absolute right-3 top-2 text-[#64748B] flex items-center gap-1 text-xs">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5">
                  💡 মোবাইল নম্বর **অথবা** Gmail — যেকোনো একটি দিয়ে Register করতে পারবেন।
                </p>
              </div>

              {/* ৩. Password & ৪. Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>৩. Password</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
                      required
                      className="w-full px-3 py-1.5 sm:py-2 pr-9 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1.5 sm:top-2 p-0.5 text-[#64748B] hover:text-[#1F2937] cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>৪. Confirm Password</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="একই Password আবার লিখুন"
                      required
                      className="w-full px-3 py-1.5 sm:py-2 pr-9 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-1.5 sm:top-2 p-0.5 text-[#64748B] hover:text-[#1F2937] cursor-pointer"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* ৫. ঠিকানা (Address) */}
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#123A70]" />
                  <span>৫. ঠিকানা (Address)</span>
                  <span className="text-rose-500">*</span>
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন (যেমন: বাড়ি/দোকান নং, রাস্তা, বাজার বা গ্রামের নাম)"
                  rows={2}
                  required
                  className="w-full px-3 py-1.5 sm:py-2 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 resize-none shadow-xs"
                />
              </div>

              {/* ৬. জেলা & ৭. উপজেলা / থানা */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>৬. জেলা</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                    className="w-full px-3 py-1.5 sm:py-2 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                  >
                    {BANGLADESH_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist} className="bg-white text-[#1F2937]">
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>৭. উপজেলা / থানা</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={upazilaThana}
                    onChange={(e) => setUpazilaThana(e.target.value)}
                    placeholder="উপজেলা বা থানা (যেমন: হারাগাছ / কোতয়ালী)"
                    required
                    className="w-full px-3 py-1.5 sm:py-2 bg-white text-[#1F2937] border border-[#DCE7F2] rounded-lg placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                  />
                </div>
              </div>

              {/* ☑️ Terms and conditions */}
              <div className="pt-0.5">
                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-3.5 h-3.5 mt-0.5 rounded border-[#DCE7F2] text-[#123A70] focus:ring-[#123A70]"
                  />
                  <span className="text-[11px] text-[#4B5563]">
                    ☑️ <strong className="text-[#1F2937]">I agree to the Terms & Conditions</strong> (সেবামূলক নিয়মাবলীতে সম্মতি দিচ্ছি)
                  </span>
                </label>
              </div>

              {/* Submit & Cancel Buttons */}
              <div className="pt-1.5 space-y-1.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 bg-[#147A43] hover:bg-[#106637] text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm transition disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Account তৈরি হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>🔐 Registration সম্পন্ন করুন</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#1F2937] font-bold rounded-xl text-xs sm:text-sm border border-[#DCE7F2] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <X className="w-3.5 h-3.5 text-[#4B5563]" />
                  <span>বাতিল / মূল ওয়েবসাইটে ফিরে যান (Cancel)</span>
                </button>
              </div>

              <div className="text-center pt-1.5">
                <p className="text-xs text-[#4B5563]">
                  ইতিমধ্যে একাউন্ট আছে?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMessage(null);
                    }}
                    className="text-[#123A70] hover:underline font-bold"
                  >
                    সরাসরি Login করুন
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* ============================================================ */}
          {/* 2. LOGIN VIEW */}
          {/* ============================================================ */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-[#1F2937] mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#123A70]" />
                  <span>মোবাইল নম্বর অথবা Gmail</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  placeholder="আপনার মোবাইল নম্বর অথবা Gmail লিখুন"
                  required
                  className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#DCE7F2] rounded-xl text-[#1F2937] placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-[#1F2937] flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>Password</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setErrorMessage(null);
                    }}
                    className="text-xs text-[#123A70] hover:underline font-bold flex items-center gap-1"
                  >
                    <KeyRound className="w-3 h-3" />
                    <span>Forgot Password?</span>
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="আপনার পাসওয়ার্ড দিন"
                    required
                    className="w-full px-3 py-1.5 sm:py-2 pr-9 bg-white border border-[#DCE7F2] rounded-xl text-[#1F2937] placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1.5 sm:top-2 p-0.5 text-[#64748B] hover:text-[#1F2937]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2 space-y-1.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm transition disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>লগইন হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-3.5 h-3.5" />
                      <span>🔐 Login করুন</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#1F2937] font-bold rounded-xl text-xs sm:text-sm border border-[#DCE7F2] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <X className="w-3.5 h-3.5 text-[#4B5563]" />
                  <span>বাতিল / মূল ওয়েবসাইটে ফিরে যান (Cancel)</span>
                </button>
              </div>

              <div className="text-center pt-2.5 border-t border-[#DCE7F2]">
                <p className="text-xs text-[#4B5563]">
                  নতুন গ্রাহক? একাউন্ট নেই?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setErrorMessage(null);
                    }}
                    className="text-[#123A70] hover:underline font-bold"
                  >
                    📝 Create Account / Register করুন
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* ============================================================ */}
          {/* 3. FORGOT PASSWORD VIEW */}
          {/* ============================================================ */}
          {mode === 'forgot' && (
            <form onSubmit={handleForgotSubmit} className="space-y-3 pt-1">
              <div className="p-2.5 bg-[#EFF5FB] border border-[#DCE7F2] rounded-xl text-[#1F2937] text-[11px] sm:text-xs leading-relaxed">
                💡 <strong>Password ভুলে গেছেন?</strong> আপনার একাউন্টের রেজিস্টার্ড মোবাইল নম্বর অথবা Gmail ব্যবহার করে সরাসরি নতুন Password সেট করে নিতে পারবেন।
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2937] mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#123A70]" />
                  <span>রেজিস্টার্ড মোবাইল নম্বর অথবা Gmail</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={forgotIdentifier}
                  onChange={(e) => setForgotIdentifier(e.target.value)}
                  placeholder="রেজিস্ট্রেশনের সময় ব্যবহৃত মোবাইল বা Gmail দিন"
                  required
                  className="w-full px-3 py-1.5 sm:py-2 bg-white border border-[#DCE7F2] rounded-xl text-[#1F2937] placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] focus:ring-1 focus:ring-[#123A70]/25 shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>নতুন Password</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="নতুন পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
                      required
                      className="w-full px-3 py-1.5 sm:py-2 pr-9 bg-white border border-[#DCE7F2] rounded-xl text-[#1F2937] placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1.5 sm:top-2 p-0.5 text-[#64748B] hover:text-[#1F2937]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2937] mb-1 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#123A70]" />
                    <span>Confirm Password</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="আবার একই পাসওয়ার্ড লিখুন"
                      required
                      className="w-full px-3 py-1.5 sm:py-2 pr-9 bg-white border border-[#DCE7F2] rounded-xl text-[#1F2937] placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#123A70] shadow-xs"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-1.5 sm:top-2 p-0.5 text-[#64748B] hover:text-[#1F2937]"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-1.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 text-xs sm:text-sm transition disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>রিসেট হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-3.5 h-3.5" />
                      <span>🔑 Password Reset করুন ও লগইন করুন</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 px-4 bg-[#F7FAFC] hover:bg-[#EFF5FB] text-[#1F2937] font-bold rounded-xl text-xs sm:text-sm border border-[#DCE7F2] transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <X className="w-3.5 h-3.5 text-[#4B5563]" />
                  <span>বাতিল / মূল ওয়েবসাইটে ফিরে যান (Cancel)</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMessage(null);
                  }}
                  className="text-xs text-[#4B5563] hover:text-[#123A70] font-bold"
                >
                  ← Login পেজে ফিরে যান
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
