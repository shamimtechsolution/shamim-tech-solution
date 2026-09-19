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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/80 p-5 sm:p-6 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                SHAMIM <span className="text-cyan-400">TECH</span> SOLUTION
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {mode === 'register' && '📝 Create Account / কাস্টমার রেজিস্ট্রেশন'}
                {mode === 'login' && '🔐 Customer Login / কাস্টমার লগইন'}
                {mode === 'forgot' && '🔑 Forgot Password / পাসওয়ার্ড রিসেট'}
              </p>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 mt-5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-sm">
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-2 rounded-lg font-medium transition text-xs sm:text-sm ${
                mode === 'register'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
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
              className={`flex-1 py-2 rounded-lg font-medium transition text-xs sm:text-sm ${
                mode === 'login'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
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
              className={`py-2 px-3 rounded-lg font-medium transition text-xs sm:text-sm ${
                mode === 'forgot'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🔑 Reset Pass
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-4">
          {/* Status Messages */}
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-950/60 border border-red-500/40 rounded-xl text-red-200 text-xs sm:text-sm animate-shake">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-start gap-2.5 p-3.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-200 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* ============================================================ */}
          {/* 1. REGISTER VIEW */}
          {/* ============================================================ */}
          {mode === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              {/* ১. আপনার নাম */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>১. আপনার নাম</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="পূর্ণ নাম লিখুন (যেমন: মোঃ শামীম ইসলাম)"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {/* ২. মোবাইল নম্বর অথবা Gmail */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>২. মোবাইল নম্বর অথবা Gmail</span>
                    <span className="text-red-400">*</span>
                  </span>
                  <span className="text-[10px] text-cyan-400/90 font-normal">যেকোনো একটি দিয়ে হবে</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="01XXXXXXXXX অথবা example@gmail.com"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <div className="absolute right-3 top-2.5 text-slate-400 flex items-center gap-1 text-xs">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  💡 মোবাইল নম্বর **অথবা** Gmail — যেকোনো একটি দিয়ে Register করতে পারবেন।
                </p>
              </div>

              {/* ৩. Password & ৪. Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>৩. Password</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="পাসওয়ার্ড দিন (কমপক্ষে ৬ অক্ষর)"
                      required
                      className="w-full px-3.5 py-2.5 pr-10 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>৪. Confirm Password</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="আবার একই Password লিখুন"
                      required
                      className="w-full px-3.5 py-2.5 pr-10 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* ৫. ঠিকানা (Address) */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>৫. ঠিকানা (Address)</span>
                  <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন (যেমন: বাড়ি/দোকান নং, রাস্তা, বাজার বা গ্রামের নাম)"
                  rows={2}
                  required
                  className="w-full px-3.5 py-2 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              {/* ৬. জেলা & ৭. উপজেলা / থানা */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-400" />
                    <span>৬. জেলা</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    {BANGLADESH_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist} className="bg-slate-900 text-white">
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>৭. উপজেলা / থানা</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={upazilaThana}
                    onChange={(e) => setUpazilaThana(e.target.value)}
                    placeholder="উপজেলা বা থানা লিখুন (যেমন: হারাগাছ / কোতয়ালী)"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* ☑️ Terms and conditions */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-400"
                  />
                  <span className="text-xs text-slate-300">
                    ☑️ <strong className="text-white">I agree to the Terms & Conditions</strong> (শামিম টেক সলিউশনের সেবামূলক নিয়মাবলীতে সম্মতি দিচ্ছি)
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-sm transition disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Account তৈরি হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>🔐 Registration সম্পন্ন করুন</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-400">
                  ইতিমধ্যে একাউন্ট আছে?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setErrorMessage(null);
                    }}
                    className="text-cyan-400 hover:underline font-semibold"
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
            <form onSubmit={handleLoginSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>মোবাইল নম্বর অথবা Gmail</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  placeholder="আপনার মোবাইল নম্বর অথবা Gmail লিখুন"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Password</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setErrorMessage(null);
                    }}
                    className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
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
                    className="w-full px-3.5 py-2.5 pr-10 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 text-sm transition disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>লগইন হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      <span>🔐 Login করুন</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-3 border-t border-slate-800">
                <p className="text-xs text-slate-400">
                  নতুন গ্রাহক? একাউন্ট নেই?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setErrorMessage(null);
                    }}
                    className="text-cyan-400 hover:underline font-semibold"
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
            <form onSubmit={handleForgotSubmit} className="space-y-4 pt-2">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-200 text-xs leading-relaxed">
                💡 <strong>Password ভুলে গেছেন?</strong> আপনার একাউন্টের রেজিস্টার্ড মোবাইল নম্বর অথবা Gmail ব্যবহার করে সরাসরি নতুন Password সেট করে নিতে পারবেন।
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>রেজিস্টার্ড মোবাইল নম্বর অথবা Gmail</span>
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={forgotIdentifier}
                  onChange={(e) => setForgotIdentifier(e.target.value)}
                  placeholder="রেজিস্ট্রেশনের সময় ব্যবহৃত মোবাইল বা Gmail দিন"
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>নতুন Password</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="নতুন পাসওয়ার্ড (কমপক্ষে ৬ অক্ষর)"
                      required
                      className="w-full px-3.5 py-2.5 pr-10 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Confirm Password</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="আবার একই পাসওয়ার্ড লিখুন"
                      required
                      className="w-full px-3.5 py-2.5 pr-10 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 text-sm transition disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>রিসেট হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <KeyRound className="w-4 h-4" />
                      <span>🔑 Password Reset করুন ও লগইন করুন</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMessage(null);
                  }}
                  className="text-xs text-slate-400 hover:text-white"
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
