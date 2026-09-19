import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, ShieldCheck, AlertCircle, CheckCircle2, ArrowLeft, Globe } from 'lucide-react';
import { STSLogo } from './STSLogo';
import { CompanyInfo } from '../types';

interface AdminLoginPageProps {
  onLoginSuccess: (token: string, user: { username: string; email: string; role: string }) => void;
  onBackToSite: () => void;
  companyInfo?: CompanyInfo;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({
  onLoginSuccess,
  onBackToSite,
  companyInfo
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier, password })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Login failed. Please verify credentials.');
      }

      setSuccess(true);
      setTimeout(() => {
        onLoginSuccess(data.token, data.user);
      }, 500);
    } catch (err: any) {
      setError(err.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden font-sans">
      {/* Background Cybernetic Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header with Back to Website */}
      <header className="relative z-10 p-4 sm:p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <button
          onClick={onBackToSite}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm group"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Public Website (মূল ওয়েবসাইটে ফিরুন)</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="hidden sm:inline">Secure Endpoint:</span>
          <span className="text-cyan-400 font-bold">/admin</span>
        </div>
      </header>

      {/* Main Login Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#0b152d] to-[#040816] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.2)] text-slate-100 backdrop-blur-md">
          
          {/* Logo & Portal Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="p-2.5 rounded-2xl bg-slate-950 border border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.35)]">
                <STSLogo size="md" showText={false} />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold font-tech uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Dedicated Admin Portal</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-white font-tech tracking-wide">
              SHAMIM TECH SOLUTION
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Private Management System • Haragach, Rangpur
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-950/80 border border-red-500/60 text-red-200 text-xs font-semibold flex items-center gap-2.5 animate-shake">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-200 text-xs font-semibold flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Authenticated! Loading STS Admin Control Panel...</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Username or Email (ইউজারনেম বা ইমেইল)
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  placeholder="admin or shamimtech2020@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white text-sm outline-none transition-all placeholder:text-slate-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                Password (পাসওয়ার্ড)
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-white text-sm outline-none transition-all placeholder:text-slate-600 font-mono tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 cursor-pointer p-1"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  Verifying Credentials...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Login to Admin Control Panel
                </span>
              )}
            </button>
          </form>

          {/* Link back to public site */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <button
              type="button"
              onClick={onBackToSite}
              className="text-xs text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Return to Public Website (ভিজিটর পেজে ফিরে যান)</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="relative z-10 p-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Shamim Tech Solution. All rights reserved. Private Admin Access.</p>
      </footer>
    </div>
  );
};
