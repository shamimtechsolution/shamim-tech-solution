import { CustomerUser, CustomerAuthPayload, SavedOrder } from '../types';

const TOKEN_KEY = 'sts_customer_token';
const USER_KEY = 'sts_customer_user';

export function getStoredCustomerToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredCustomerUser(): CustomerUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setCustomerSession(token: string, customer: CustomerUser) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(customer));
}

export function clearCustomerSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export async function apiCustomerRegister(payload: {
  fullName: string;
  identifier: string;
  password: string;
  confirmPassword: string;
  address: string;
  district: string;
  upazilaThana: string;
  agreeTerms: boolean;
}): Promise<{ success: boolean; customer?: CustomerUser; token?: string; error?: string; message?: string }> {
  try {
    const res = await fetch('/api/customer/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে' };
    }
    if (data.token && data.customer) {
      setCustomerSession(data.token, data.customer);
    }
    return data;
  } catch (err: any) {
    return { success: false, error: 'সার্ভারের সাথে সংযোগ ব্যর্থ হয়েছে' };
  }
}

export async function apiCustomerLogin(payload: {
  identifier: string;
  password: string;
}): Promise<{ success: boolean; customer?: CustomerUser; token?: string; error?: string; message?: string }> {
  try {
    const res = await fetch('/api/customer/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'লগইন ব্যর্থ হয়েছে' };
    }
    if (data.token && data.customer) {
      setCustomerSession(data.token, data.customer);
    }
    return data;
  } catch (err: any) {
    return { success: false, error: 'সার্ভারের সাথে সংযোগ ব্যর্থ হয়েছে' };
  }
}

export async function apiCustomerForgotPassword(payload: {
  identifier: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<{ success: boolean; customer?: CustomerUser; token?: string; error?: string; message?: string }> {
  try {
    const res = await fetch('/api/customer/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      return { success: false, error: data.error || 'পাসওয়ার্ড পরিবর্তন ব্যর্থ হয়েছে' };
    }
    if (data.token && data.customer) {
      setCustomerSession(data.token, data.customer);
    }
    return data;
  } catch (err: any) {
    return { success: false, error: 'সার্ভারের সাথে সংযোগ ব্যর্থ হয়েছে' };
  }
}

export async function apiGetCustomerProfile(): Promise<{ success: boolean; customer?: CustomerUser; error?: string }> {
  const token = getStoredCustomerToken();
  if (!token) return { success: false };

  try {
    const res = await fetch('/api/customer/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success && data.customer) {
      localStorage.setItem(USER_KEY, JSON.stringify(data.customer));
      return { success: true, customer: data.customer };
    } else {
      clearCustomerSession();
      return { success: false };
    }
  } catch {
    return { success: false };
  }
}

export async function apiUpdateCustomerProfile(payload: Partial<CustomerUser> & { currentPassword?: string; newPassword?: string }): Promise<{ success: boolean; customer?: CustomerUser; error?: string; message?: string }> {
  const token = getStoredCustomerToken();
  if (!token) return { success: false, error: 'অনুগ্রহ করে পুনরায় লগইন করুন' };

  try {
    const res = await fetch('/api/customer/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success && data.customer) {
      localStorage.setItem(USER_KEY, JSON.stringify(data.customer));
      return { success: true, customer: data.customer, message: data.message };
    }
    return { success: false, error: data.error || 'প্রোফাইল আপডেট করতে সমস্যা হয়েছে' };
  } catch {
    return { success: false, error: 'সার্ভার সংযোগ সমস্যা' };
  }
}

export async function apiGetCustomerOrders(): Promise<{ success: boolean; orders?: SavedOrder[]; error?: string }> {
  const token = getStoredCustomerToken();
  if (!token) return { success: false, orders: [] };

  try {
    const res = await fetch('/api/customer/orders', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success && Array.isArray(data.orders)) {
      return { success: true, orders: data.orders };
    }
    return { success: false, orders: [] };
  } catch {
    return { success: false, orders: [] };
  }
}

export async function apiCustomerLogout(): Promise<void> {
  const token = getStoredCustomerToken();
  if (token) {
    try {
      await fetch('/api/customer/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch {
      // ignore
    }
  }
  clearCustomerSession();
}
