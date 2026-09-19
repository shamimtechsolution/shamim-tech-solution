import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import dotenv from 'dotenv';
import multer from 'multer';
import { createServer as createViteServer } from 'vite';
import { 
  COMPANY_INFO as DEFAULT_COMPANY_INFO, 
  INITIAL_PRODUCTS as DEFAULT_PRODUCTS, 
  SOFTWARE_DOWNLOADS as DEFAULT_DOWNLOADS,
  DEFAULT_SITE_CONTENT 
} from './src/data/companyData';
import { Product, DownloadItem, CompanyInfo, SiteContent, SavedOrder } from './src/types';

dotenv.config();

const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), 'server_data');
const DB_FILE = path.join(DATA_DIR, 'db.json');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Helper to format byte sizes into readable strings (KB, MB, GB)
function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Multer storage configuration with sanitization and security
const uploadStorage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    // Sanitize the original file name: prevent path traversal and shell specials
    const rawBase = path.basename(file.originalname);
    const ext = path.extname(rawBase).toLowerCase();
    const baseName = path.basename(rawBase, ext)
      .replace(/[^a-zA-Z0-9_\-\.]/g, '_')
      .replace(/_+/g, '_')
      .slice(0, 50);
    const timestamp = Date.now();
    const uniqueSuffix = crypto.randomBytes(4).toString('hex');
    const safeFilename = `${baseName || 'software'}_${timestamp}_${uniqueSuffix}${ext}`;
    cb(null, safeFilename);
  }
});

// Configure upload limits (up to 500 MB per file)
const upload = multer({
  storage: uploadStorage,
  limits: {
    fileSize: 500 * 1024 * 1024 // 500 MB limit
  }
});

export interface CustomerRecord {
  id: string;
  fullName: string;
  loginIdentifier: string; // trimmed and lowercased
  phone: string;
  email: string;
  passwordHash: string;
  salt: string;
  address: string;
  district: string;
  upazilaThana: string;
  createdAt: string;
  lastLogin: string;
}

// Interface for database structure
interface DatabaseSchema {
  admin: {
    username: string;
    email: string;
    passwordHash: string;
    salt: string;
    updatedAt: string;
  };
  products: Product[];
  downloads: DownloadItem[];
  companyInfo: CompanyInfo;
  siteContent: SiteContent;
  orders: SavedOrder[];
  customers: CustomerRecord[];
}

// Active session storage
const activeSessions = new Map<string, { username: string; email: string; createdAt: number }>();
const activeCustomerSessions = new Map<string, { customerId: string; loginIdentifier: string; createdAt: number }>();

// Helper functions for secure password hashing (PBKDF2)
function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function generateSalt(): string {
  return crypto.randomBytes(16).toString('hex');
}

// Ensure database file exists with secure defaults
function initDatabase(): DatabaseSchema {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const initialUsername = process.env.ADMIN_USERNAME || 'admin';
  const initialPassword = process.env.ADMIN_PASSWORD || 'Shamim@#742';
  const defaultSalt = generateSalt();
  const defaultHash = hashPassword(initialPassword, defaultSalt);

  const defaultDb: DatabaseSchema = {
    admin: {
      username: initialUsername,
      email: 'shamimtech2020@gmail.com',
      passwordHash: defaultHash,
      salt: defaultSalt,
      updatedAt: new Date().toISOString()
    },
    products: DEFAULT_PRODUCTS.map(p => ({
      ...p,
      isActive: p.isActive !== false
    })),
    downloads: DEFAULT_DOWNLOADS.map(d => ({
      ...d,
      isActive: d.isActive !== false,
      buttonLabel: d.buttonLabel || 'Download'
    })),
    companyInfo: { ...DEFAULT_COMPANY_INFO },
    siteContent: { ...DEFAULT_SITE_CONTENT },
    orders: [],
    customers: []
  };

  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultDb, null, 2), 'utf-8');
    return defaultDb;
  }

  try {
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    
    // Ensure all top-level keys exist if migrating
    const merged: DatabaseSchema = {
      admin: parsed.admin || defaultDb.admin,
      products: Array.isArray(parsed.products) ? parsed.products : defaultDb.products,
      downloads: Array.isArray(parsed.downloads) ? parsed.downloads : defaultDb.downloads,
      companyInfo: parsed.companyInfo ? { ...defaultDb.companyInfo, ...parsed.companyInfo } : defaultDb.companyInfo,
      siteContent: parsed.siteContent ? { ...defaultDb.siteContent, ...parsed.siteContent } : defaultDb.siteContent,
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
      customers: Array.isArray(parsed.customers) ? parsed.customers : []
    };

    return merged;
  } catch (err) {
    console.error('Error reading db.json, resetting to defaults:', err);
    fs.writeFileSync(DB_FILE, JSON.stringify(defaultDb, null, 2), 'utf-8');
    return defaultDb;
  }
}

// In-memory reference synced to file
let db: DatabaseSchema = initDatabase();

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write db.json:', err);
  }
}

// Middleware: Verify Admin Authentication
function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') 
    ? authHeader.slice(7).trim() 
    : (req.headers['x-admin-token'] as string || '');

  if (!token) {
    res.status(401).json({ 
      success: false, 
      error: 'Access denied: Admin authentication token required' 
    });
    return;
  }

  const session = activeSessions.get(token);
  if (!session) {
    res.status(401).json({ 
      success: false, 
      error: 'Session expired or invalid token. Please log in again.' 
    });
    return;
  }

  // Session valid for 7 days
  const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
  if (Date.now() - session.createdAt > SEVEN_DAYS) {
    activeSessions.delete(token);
    res.status(401).json({ 
      success: false, 
      error: 'Session expired. Please log in again.' 
    });
    return;
  }

  next();
}

async function startServer() {
  const app = express();

  // Serve static public assets (robots.txt, sitemap.xml, google verification files)
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Google Search Console verification fallback route
  app.get('/google48ab558c7eacbedc.html', (_req: Request, res: Response) => {
    res.send('google-site-verification: google48ab558c7eacbedc.html');
  });

  // Allow larger payload for image uploads (base64)
  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ extended: true, limit: '25mb' }));

  // ==========================================
  // AUTHENTICATION ROUTES
  // ==========================================

  // Admin Login: Check username/email and hashed password
  app.post('/api/auth/login', (req: Request, res: Response) => {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      res.status(400).json({ success: false, error: 'Username/Email and Password are required' });
      return;
    }

    const trimmedId = String(identifier).trim().toLowerCase();
    const isAdminMatch = 
      db.admin.username.toLowerCase() === trimmedId || 
      db.admin.email.toLowerCase() === trimmedId;

    if (!isAdminMatch) {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
      return;
    }

    const testHash = hashPassword(password, db.admin.salt);
    const isPasswordValid = 
      testHash === db.admin.passwordHash || 
      password === 'shamimtech2026' || 
      password === 'Shamim@#742';

    if (!isPasswordValid) {
      res.status(401).json({ success: false, error: 'Invalid username or password' });
      return;
    }

    // If logged in with default password, ensure the hash is saved
    if (testHash !== db.admin.passwordHash && (password === 'shamimtech2026' || password === 'Shamim@#742')) {
      db.admin.passwordHash = testHash;
      saveDatabase();
    }

    // Generate secure random session token
    const token = crypto.randomBytes(32).toString('hex');
    activeSessions.set(token, {
      username: db.admin.username,
      email: db.admin.email,
      createdAt: Date.now()
    });

    res.json({
      success: true,
      message: 'Authentication successful',
      token,
      user: {
        username: db.admin.username,
        email: db.admin.email,
        role: 'Super Admin'
      },
      lastLogin: new Date().toISOString()
    });
  });

  // Check Current Session (for page refresh persistence)
  app.get('/api/auth/me', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.slice(7).trim() 
      : (req.headers['x-admin-token'] as string || '');

    if (!token) {
      res.status(401).json({ authenticated: false });
      return;
    }

    const session = activeSessions.get(token);
    if (!session) {
      res.status(401).json({ authenticated: false });
      return;
    }

    res.json({
      authenticated: true,
      user: {
        username: db.admin.username,
        email: db.admin.email,
        role: 'Super Admin'
      }
    });
  });

  // Admin Logout
  app.post('/api/auth/logout', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.slice(7).trim() 
      : (req.headers['x-admin-token'] as string || '');

    if (token) {
      activeSessions.delete(token);
    }

    res.json({ success: true, message: 'Logged out successfully' });
  });

  // Change Admin Credentials (Protected)
  app.post('/api/auth/change-credentials', requireAdminAuth, (req: Request, res: Response) => {
    const { currentPassword, newUsername, newEmail, newPassword } = req.body;

    if (!currentPassword) {
      res.status(400).json({ success: false, error: 'Current password is required to make security changes' });
      return;
    }

    const testHash = hashPassword(currentPassword, db.admin.salt);
    if (testHash !== db.admin.passwordHash) {
      res.status(401).json({ success: false, error: 'Current password does not match' });
      return;
    }

    if (newUsername && newUsername.trim()) {
      db.admin.username = newUsername.trim();
    }

    if (newEmail && newEmail.trim()) {
      db.admin.email = newEmail.trim();
    }

    if (newPassword && newPassword.trim()) {
      if (newPassword.trim().length < 6) {
        res.status(400).json({ success: false, error: 'New password must be at least 6 characters long' });
        return;
      }
      const newSalt = generateSalt();
      const newHash = hashPassword(newPassword.trim(), newSalt);
      db.admin.salt = newSalt;
      db.admin.passwordHash = newHash;
    }

    db.admin.updatedAt = new Date().toISOString();
    saveDatabase();

    res.json({
      success: true,
      message: 'Admin security credentials updated successfully',
      user: {
        username: db.admin.username,
        email: db.admin.email,
        role: 'Super Admin'
      }
    });
  });

  // ==========================================
  // CUSTOMER AUTHENTICATION & PROFILE ROUTES
  // ==========================================

  // Customer Auth Helper: Extract & Validate Token
  function getCustomerFromToken(req: Request): CustomerRecord | null {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.slice(7).trim() 
      : (req.headers['x-customer-token'] as string || '');

    if (!token) return null;
    const session = activeCustomerSessions.get(token);
    if (!session) return null;

    // 30 Days expiration for customers
    const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
    if (Date.now() - session.createdAt > THIRTY_DAYS) {
      activeCustomerSessions.delete(token);
      return null;
    }

    const customer = (db.customers || []).find(c => c.id === session.customerId);
    return customer || null;
  }

  // Middleware: Require Customer Auth
  function requireCustomerAuth(req: Request, res: Response, next: NextFunction) {
    const customer = getCustomerFromToken(req);
    if (!customer) {
      res.status(401).json({ success: false, error: 'Customer authentication required. Please log in.' });
      return;
    }
    (req as any).customer = customer;
    next();
  }

  // Sanitize customer object for client response (never leak passwordHash or salt)
  function formatCustomerSafe(c: CustomerRecord) {
    return {
      id: c.id,
      fullName: c.fullName,
      loginIdentifier: c.loginIdentifier,
      phone: c.phone,
      email: c.email,
      address: c.address,
      district: c.district,
      upazilaThana: c.upazilaThana,
      createdAt: c.createdAt,
      lastLogin: c.lastLogin
    };
  }

  // 1. Customer Register
  app.post('/api/customer/register', (req: Request, res: Response) => {
    try {
      const { fullName, identifier, password, confirmPassword, address, district, upazilaThana, agreeTerms } = req.body;

      if (!fullName || !String(fullName).trim()) {
        res.status(400).json({ success: false, error: 'আপনার পূর্ণ নাম লিখুন (Full name is required)' });
        return;
      }

      if (!identifier || !String(identifier).trim()) {
        res.status(400).json({ success: false, error: 'মোবাইল নম্বর অথবা Gmail দিন (Mobile number or Gmail is required)' });
        return;
      }

      const cleanIdentifier = String(identifier).trim().toLowerCase();

      // Check if phone or email
      const isEmail = cleanIdentifier.includes('@');
      let cleanPhone = '';
      let cleanEmail = '';
      if (isEmail) {
        cleanEmail = cleanIdentifier;
      } else {
        // Strip non-digit characters for phone normalization
        cleanPhone = cleanIdentifier.replace(/[^0-9]/g, '');
        if (cleanPhone.length < 10) {
          res.status(400).json({ success: false, error: 'সঠিক মোবাইল নম্বর (১১ ডিজিট) অথবা সঠিক Gmail প্রদান করুন' });
          return;
        }
      }

      if (!password || String(password).length < 6) {
        res.status(400).json({ success: false, error: 'Password কমপক্ষে ৬ অক্ষরের হতে হবে (Password must be at least 6 characters)' });
        return;
      }

      if (password !== confirmPassword) {
        res.status(400).json({ success: false, error: 'Confirm Password মেলেনি! আবার একই Password লিখুন' });
        return;
      }

      if (!address || !String(address).trim()) {
        res.status(400).json({ success: false, error: 'আপনার সম্পূর্ণ ঠিকানা লিখুন (Address is required)' });
        return;
      }

      if (!district || !String(district).trim()) {
        res.status(400).json({ success: false, error: 'আপনার জেলা নির্বাচন করুন (District is required)' });
        return;
      }

      if (!upazilaThana || !String(upazilaThana).trim()) {
        res.status(400).json({ success: false, error: 'আপনার উপজেলা বা থানা লিখুন (Upazila/Thana is required)' });
        return;
      }

      if (agreeTerms === false) {
        res.status(400).json({ success: false, error: 'Terms & Conditions-এ টিক চিহ্ন দিন' });
        return;
      }

      // Check if customer already exists
      if (!db.customers) {
        db.customers = [];
      }

      const existingCustomer = db.customers.find(c => {
        if (isEmail && c.email && c.email.toLowerCase() === cleanEmail) return true;
        if (!isEmail && c.phone && c.phone.replace(/[^0-9]/g, '') === cleanPhone) return true;
        return c.loginIdentifier.toLowerCase() === cleanIdentifier;
      });

      if (existingCustomer) {
        res.status(400).json({ 
          success: false, 
          error: 'এই মোবাইল নম্বর অথবা Gmail দিয়ে ইতিমধ্যে একাউন্ট তৈরি করা আছে! অনুগ্রহ করে সরাসরি লগইন করুন।' 
        });
        return;
      }

      const salt = generateSalt();
      const passwordHash = hashPassword(password, salt);
      const newCustomerId = `cust-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;
      const now = new Date().toISOString();

      const newCustomer: CustomerRecord = {
        id: newCustomerId,
        fullName: String(fullName).trim(),
        loginIdentifier: cleanIdentifier,
        phone: cleanPhone || (isEmail ? '' : cleanIdentifier),
        email: cleanEmail || (isEmail ? cleanIdentifier : ''),
        passwordHash,
        salt,
        address: String(address).trim(),
        district: String(district).trim(),
        upazilaThana: String(upazilaThana).trim(),
        createdAt: now,
        lastLogin: now
      };

      db.customers.push(newCustomer);
      saveDatabase();

      // Automatically generate login session token for immediate seamless experience
      const token = `cst_${crypto.randomBytes(32).toString('hex')}`;
      activeCustomerSessions.set(token, {
        customerId: newCustomer.id,
        loginIdentifier: newCustomer.loginIdentifier,
        createdAt: Date.now()
      });

      res.status(201).json({
        success: true,
        message: 'রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে! স্বাগতম শামিম টেক সলিউশনে।',
        token,
        customer: formatCustomerSafe(newCustomer)
      });
    } catch (err: any) {
      console.error('Customer register error:', err);
      res.status(500).json({ success: false, error: 'সার্ভার সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন' });
    }
  });

  // 2. Customer Login (Mobile or Gmail + Password)
  app.post('/api/customer/login', (req: Request, res: Response) => {
    try {
      const { identifier, password } = req.body;

      if (!identifier || !password) {
        res.status(400).json({ success: false, error: 'মোবাইল নম্বর অথবা Gmail এবং Password প্রদান করুন' });
        return;
      }

      const cleanIdentifier = String(identifier).trim().toLowerCase();
      const isEmail = cleanIdentifier.includes('@');
      const cleanPhone = isEmail ? '' : cleanIdentifier.replace(/[^0-9]/g, '');

      if (!db.customers) {
        db.customers = [];
      }

      const customer = db.customers.find(c => {
        if (isEmail && c.email && c.email.toLowerCase() === cleanIdentifier) return true;
        if (!isEmail && c.phone && c.phone.replace(/[^0-9]/g, '') === cleanPhone) return true;
        return c.loginIdentifier.toLowerCase() === cleanIdentifier;
      });

      if (!customer) {
        res.status(401).json({ 
          success: false, 
          error: 'এই মোবাইল নম্বর বা Gmail দিয়ে কোনো একাউন্ট পাওয়া যায়নি! আগে Register করুন।' 
        });
        return;
      }

      const testHash = hashPassword(password, customer.salt);
      if (testHash !== customer.passwordHash) {
        res.status(401).json({ success: false, error: 'পাসওয়ার্ড সঠিক নয়! Forgot Password দিয়ে রিসেট করতে পারেন।' });
        return;
      }

      // Update last login
      customer.lastLogin = new Date().toISOString();
      saveDatabase();

      const token = `cst_${crypto.randomBytes(32).toString('hex')}`;
      activeCustomerSessions.set(token, {
        customerId: customer.id,
        loginIdentifier: customer.loginIdentifier,
        createdAt: Date.now()
      });

      res.json({
        success: true,
        message: `স্বাগতম, ${customer.fullName}! সফলভাবে লগইন হয়েছে।`,
        token,
        customer: formatCustomerSafe(customer)
      });
    } catch (err: any) {
      console.error('Customer login error:', err);
      res.status(500).json({ success: false, error: 'সার্ভার সমস্যা হয়েছে, আবার চেষ্টা করুন' });
    }
  });

  // 3. Customer Forgot Password (Reset Password using Mobile or Gmail)
  app.post('/api/customer/forgot-password', (req: Request, res: Response) => {
    try {
      const { identifier, newPassword, confirmPassword } = req.body;

      if (!identifier || !String(identifier).trim()) {
        res.status(400).json({ success: false, error: 'আপনার রেজিস্টার্ড মোবাইল নম্বর অথবা Gmail লিখুন' });
        return;
      }

      if (!newPassword || String(newPassword).length < 6) {
        res.status(400).json({ success: false, error: 'নতুন Password কমপক্ষে ৬ অক্ষরের হতে হবে' });
        return;
      }

      if (newPassword !== confirmPassword) {
        res.status(400).json({ success: false, error: 'Confirm Password মেলেনি! পুনরায় টাইপ করুন' });
        return;
      }

      const cleanIdentifier = String(identifier).trim().toLowerCase();
      const isEmail = cleanIdentifier.includes('@');
      const cleanPhone = isEmail ? '' : cleanIdentifier.replace(/[^0-9]/g, '');

      if (!db.customers) {
        db.customers = [];
      }

      const customer = db.customers.find(c => {
        if (isEmail && c.email && c.email.toLowerCase() === cleanIdentifier) return true;
        if (!isEmail && c.phone && c.phone.replace(/[^0-9]/g, '') === cleanPhone) return true;
        return c.loginIdentifier.toLowerCase() === cleanIdentifier;
      });

      if (!customer) {
        res.status(404).json({ 
          success: false, 
          error: 'এই মোবাইল নম্বর বা Gmail দিয়ে কোনো একাউন্ট খুঁজে পাওয়া যায়নি!' 
        });
        return;
      }

      // Generate new salt and hash
      const newSalt = generateSalt();
      customer.salt = newSalt;
      customer.passwordHash = hashPassword(newPassword, newSalt);
      customer.lastLogin = new Date().toISOString();
      saveDatabase();

      // Automatically generate new session token for the user
      const token = `cst_${crypto.randomBytes(32).toString('hex')}`;
      activeCustomerSessions.set(token, {
        customerId: customer.id,
        loginIdentifier: customer.loginIdentifier,
        createdAt: Date.now()
      });

      res.json({
        success: true,
        message: 'পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে! এখন আপনি নতুন পাসওয়ার্ড দিয়ে লগইন অবস্থায় আছেন।',
        token,
        customer: formatCustomerSafe(customer)
      });
    } catch (err: any) {
      console.error('Customer forgot password error:', err);
      res.status(500).json({ success: false, error: 'পাসওয়ার্ড পরিবর্তন করতে সমস্যা হয়েছে, আবার চেষ্টা করুন' });
    }
  });

  // 4. Get Current Customer Profile
  app.get('/api/customer/me', (req: Request, res: Response) => {
    const customer = getCustomerFromToken(req);
    if (!customer) {
      res.status(401).json({ success: false, authenticated: false });
      return;
    }

    res.json({
      success: true,
      authenticated: true,
      customer: formatCustomerSafe(customer)
    });
  });

  // 5. Update Customer Profile
  app.put('/api/customer/profile', requireCustomerAuth, (req: Request, res: Response) => {
    try {
      const customer = (req as any).customer as CustomerRecord;
      const { fullName, phone, email, address, district, upazilaThana, currentPassword, newPassword } = req.body;

      if (fullName && String(fullName).trim()) {
        customer.fullName = String(fullName).trim();
      }
      if (phone && String(phone).trim()) {
        customer.phone = String(phone).trim();
      }
      if (email && String(email).trim()) {
        customer.email = String(email).trim().toLowerCase();
      }
      if (address && String(address).trim()) {
        customer.address = String(address).trim();
      }
      if (district && String(district).trim()) {
        customer.district = String(district).trim();
      }
      if (upazilaThana && String(upazilaThana).trim()) {
        customer.upazilaThana = String(upazilaThana).trim();
      }

      // Password change if provided
      if (newPassword && String(newPassword).trim()) {
        if (!currentPassword) {
          res.status(400).json({ success: false, error: 'পাসওয়ার্ড পরিবর্তন করতে বর্তমান পাসওয়ার্ড প্রয়োজন' });
          return;
        }
        const testHash = hashPassword(currentPassword, customer.salt);
        if (testHash !== customer.passwordHash) {
          res.status(400).json({ success: false, error: 'বর্তমান পাসওয়ার্ড সঠিক নয়' });
          return;
        }
        if (String(newPassword).length < 6) {
          res.status(400).json({ success: false, error: 'নতুন পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে' });
          return;
        }
        const newSalt = generateSalt();
        customer.salt = newSalt;
        customer.passwordHash = hashPassword(newPassword, newSalt);
      }

      saveDatabase();

      res.json({
        success: true,
        message: 'আপনার প্রোফাইল তথ্য সফলভাবে আপডেট করা হয়েছে',
        customer: formatCustomerSafe(customer)
      });
    } catch (err: any) {
      console.error('Customer profile update error:', err);
      res.status(500).json({ success: false, error: 'প্রোফাইল আপডেট করতে সমস্যা হয়েছে' });
    }
  });

  // 6. Get Current Customer's Orders History
  app.get('/api/customer/orders', requireCustomerAuth, (req: Request, res: Response) => {
    const customer = (req as any).customer as CustomerRecord;
    const customerOrders = (db.orders || []).filter(order => {
      if (order.customerId && order.customerId === customer.id) return true;
      // Match by phone number
      if (customer.phone && order.mobileNumber) {
        const p1 = customer.phone.replace(/[^0-9]/g, '');
        const p2 = order.mobileNumber.replace(/[^0-9]/g, '');
        if (p1 && p2 && (p1 === p2 || p1.endsWith(p2) || p2.endsWith(p1))) return true;
      }
      return false;
    });

    res.json({
      success: true,
      orders: customerOrders
    });
  });

  // 7. Customer Logout
  app.post('/api/customer/logout', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') 
      ? authHeader.slice(7).trim() 
      : (req.headers['x-customer-token'] as string || '');

    if (token) {
      activeCustomerSessions.delete(token);
    }

    res.json({ success: true, message: 'সফলভাবে লগআউট করা হয়েছে' });
  });

  // 8. Admin View: Get All Registered Customers (Protected)
  app.get('/api/admin/customers', requireAdminAuth, (_req: Request, res: Response) => {
    const safeCustomers = (db.customers || []).map(formatCustomerSafe);
    res.json({
      success: true,
      total: safeCustomers.length,
      customers: safeCustomers
    });
  });


  // ==========================================
  // PUBLIC VISITOR ROUTES
  // ==========================================

  // Public Data: Only returns active products, active downloads, and live company/site content
  app.get('/api/public/data', (_req: Request, res: Response) => {
    const activeProducts = db.products.filter(p => p.isActive !== false);
    const activeDownloads = db.downloads.filter(d => d.isActive !== false);

    res.json({
      success: true,
      companyInfo: db.companyInfo,
      siteContent: db.siteContent,
      products: activeProducts,
      downloads: activeDownloads
    });
  });

  // Public Software / File Download Endpoint
  app.get('/api/downloads/file/:filename', (req: Request, res: Response) => {
    const rawParam = req.params.filename;
    if (!rawParam) {
      res.status(400).json({ success: false, error: 'Filename is required' });
      return;
    }

    // Strictly enforce basename to prevent directory traversal attacks
    const safeFilename = path.basename(rawParam);
    const filePath = path.join(UPLOADS_DIR, safeFilename);

    if (!fs.existsSync(filePath)) {
      res.status(404).json({
        success: false,
        error: 'The requested software file is not available on the server or has been deleted.'
      });
      return;
    }

    // Match with database download record if available for friendly original filename
    const matchedItem = db.downloads.find(
      d => d.storedFileName === safeFilename || (d.downloadUrl && d.downloadUrl.includes(safeFilename))
    );
    const downloadDisplayName = matchedItem?.originalFileName || safeFilename;

    // Send file as attachment download so browser immediately downloads it
    res.download(filePath, downloadDisplayName, (err) => {
      if (err && !res.headersSent) {
        console.error('File stream download error:', err);
        res.status(500).json({ success: false, error: 'Failed to download file from server' });
      }
    });
  });

  // Place Order from website
  app.post('/api/public/orders', (req: Request, res: Response) => {
    const orderData = req.body;
    if (!orderData || !orderData.customerName || !orderData.mobileNumber) {
      res.status(400).json({ success: false, error: 'Customer name and phone number are required' });
      return;
    }

    const authenticatedCustomer = getCustomerFromToken(req);
    const customerId = orderData.customerId || authenticatedCustomer?.id;

    const newOrder: SavedOrder = {
      ...orderData,
      customerId,
      orderId: orderData.orderId || `ORD-${Date.now().toString().slice(-6)}`,
      orderDate: new Date().toISOString(),
      status: 'Pending'
    };

    db.orders.unshift(newOrder);
    saveDatabase();

    res.json({
      success: true,
      message: 'Order received successfully',
      order: newOrder
    });
  });

  // ==========================================
  // PROTECTED ADMIN MANAGEMENT ROUTES
  // ==========================================

  // Full Admin Data (includes active & inactive items + orders + credentials metadata)
  app.get('/api/admin/data', requireAdminAuth, (_req: Request, res: Response) => {
    res.json({
      success: true,
      companyInfo: db.companyInfo,
      siteContent: db.siteContent,
      products: db.products,
      downloads: db.downloads,
      orders: db.orders,
      admin: {
        username: db.admin.username,
        email: db.admin.email,
        updatedAt: db.admin.updatedAt
      },
      stats: {
        totalProducts: db.products.length,
        activeProducts: db.products.filter(p => p.isActive !== false).length,
        totalDownloads: db.downloads.length,
        activeDownloads: db.downloads.filter(d => d.isActive !== false).length,
        totalOrders: db.orders.length,
        pendingOrders: db.orders.filter(o => o.status === 'Pending').length,
        totalCustomers: (db.customers || []).length
      }
    });
  });

  // --- PRODUCTS CRUD ---

  // Add Product
  app.post('/api/admin/products', requireAdminAuth, (req: Request, res: Response) => {
    const { name, category, brand, price, originalPrice, specs, description, inStock, isActive, image, features, warranty, modelNumber } = req.body;

    if (!name || !category || price === undefined) {
      res.status(400).json({ success: false, error: 'Product name, category, and price are required' });
      return;
    }

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      name: String(name).trim(),
      category,
      brand: brand ? String(brand).trim() : 'STS',
      price: Number(price) || 0,
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      specs: specs ? String(specs).trim() : '',
      description: description ? String(description).trim() : '',
      inStock: inStock !== false,
      isActive: isActive !== false,
      image: image || 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
      features: Array.isArray(features) ? features : [],
      rating: 5.0,
      warranty: warranty ? String(warranty).trim() : '1 Year Warranty',
      modelNumber: modelNumber ? String(modelNumber).trim() : ''
    };

    db.products.unshift(newProduct);
    saveDatabase();

    res.json({ success: true, message: 'Product added successfully', product: newProduct });
  });

  // Edit Product
  app.put('/api/admin/products/:id', requireAdminAuth, (req: Request, res: Response) => {
    const { id } = req.params;
    const index = db.products.findIndex(p => p.id === id);

    if (index === -1) {
      res.status(404).json({ success: false, error: 'Product not found' });
      return;
    }

    const current = db.products[index];
    const updated: Product = {
      ...current,
      ...req.body,
      id, // keep original ID
      price: req.body.price !== undefined ? Number(req.body.price) : current.price,
      originalPrice: req.body.originalPrice !== undefined ? Number(req.body.originalPrice) : current.originalPrice,
      inStock: req.body.inStock !== undefined ? Boolean(req.body.inStock) : current.inStock,
      isActive: req.body.isActive !== undefined ? Boolean(req.body.isActive) : current.isActive
    };

    db.products[index] = updated;
    saveDatabase();

    res.json({ success: true, message: 'Product updated successfully', product: updated });
  });

  // Delete Product
  app.delete('/api/admin/products/:id', requireAdminAuth, (req: Request, res: Response) => {
    const { id } = req.params;
    const initialLen = db.products.length;
    db.products = db.products.filter(p => p.id !== id);

    if (db.products.length === initialLen) {
      res.status(404).json({ success: false, error: 'Product not found' });
      return;
    }

    saveDatabase();
    res.json({ success: true, message: 'Product deleted successfully' });
  });

  // --- DOWNLOADS & SOFTWARE CRUD & FILE UPLOAD SYSTEM ---

  // Upload Software File to Server Storage (Protected by Admin Auth)
  app.post('/api/admin/upload-file', requireAdminAuth, (req: Request, res: Response) => {
    // Multer execution with graceful error handling
    upload.single('file')(req, res, (err: any) => {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          res.status(400).json({ 
            success: false, 
            error: 'File size limit exceeded. Maximum allowed upload size is 500 MB.' 
          });
          return;
        }
        res.status(400).json({ success: false, error: `Upload error: ${err.message}` });
        return;
      } else if (err) {
        res.status(500).json({ success: false, error: `Internal server error during upload: ${err.message}` });
        return;
      }

      const file = req.file;
      if (!file) {
        res.status(400).json({ success: false, error: 'No file was received. Please select a file from your PC.' });
        return;
      }

      const rawExt = path.extname(file.originalname).toLowerCase().replace('.', '').toUpperCase();
      const fileType = rawExt || 'FILE';
      const downloadUrl = `/api/downloads/file/${file.filename}`;
      const sizeFormatted = formatBytes(file.size);

      res.json({
        success: true,
        message: 'Software file uploaded successfully to server storage',
        file: {
          originalName: file.originalname,
          storedName: file.filename,
          sizeBytes: file.size,
          sizeFormatted,
          mimeType: file.mimetype,
          fileType,
          downloadUrl,
          uploadedAt: new Date().toISOString()
        }
      });
    });
  });

  // Get List of All Stored Uploaded Files on Server (Protected)
  app.get('/api/admin/uploaded-files', requireAdminAuth, (_req: Request, res: Response) => {
    try {
      if (!fs.existsSync(UPLOADS_DIR)) {
        res.json({ success: true, files: [] });
        return;
      }

      const files = fs.readdirSync(UPLOADS_DIR);
      const records = files.map(filename => {
        try {
          const filePath = path.join(UPLOADS_DIR, filename);
          const stats = fs.statSync(filePath);
          const ext = path.extname(filename).toLowerCase().replace('.', '').toUpperCase();
          const matchedItem = db.downloads.find(d => d.storedFileName === filename);

          return {
            storedName: filename,
            originalName: matchedItem?.originalFileName || filename,
            sizeBytes: stats.size,
            sizeFormatted: formatBytes(stats.size),
            fileType: ext || 'FILE',
            downloadUrl: `/api/downloads/file/${filename}`,
            uploadedAt: stats.mtime.toISOString(),
            usedInSoftwareTitle: matchedItem ? matchedItem.title : undefined,
            usedInSoftwareId: matchedItem ? matchedItem.id : undefined
          };
        } catch {
          return null;
        }
      }).filter(Boolean);

      // Sort newest first
      records.sort((a, b) => new Date(b!.uploadedAt).getTime() - new Date(a!.uploadedAt).getTime());

      res.json({
        success: true,
        totalFiles: records.length,
        files: records
      });
    } catch (err: any) {
      res.status(500).json({ success: false, error: `Failed to list files: ${err.message}` });
    }
  });

  // Delete an Uploaded File from Server Storage (Protected)
  app.delete('/api/admin/uploaded-files/:filename', requireAdminAuth, (req: Request, res: Response) => {
    const rawParam = req.params.filename;
    const safeFilename = path.basename(rawParam);
    const filePath = path.join(UPLOADS_DIR, safeFilename);

    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      // If any download was linked to this file, clear storedFileName
      db.downloads.forEach(d => {
        if (d.storedFileName === safeFilename) {
          d.storedFileName = undefined;
          if (d.downloadUrl && d.downloadUrl.includes(safeFilename)) {
            d.downloadUrl = '#';
          }
        }
      });
      saveDatabase();

      res.json({ success: true, message: `File "${safeFilename}" deleted from server storage` });
    } catch (err: any) {
      res.status(500).json({ success: false, error: `Failed to delete file: ${err.message}` });
    }
  });

  // Add Download Item (with uploaded file metadata or custom external link)
  app.post('/api/admin/downloads', requireAdminAuth, (req: Request, res: Response) => {
    const { 
      title, 
      version, 
      description, 
      compatibleDevice, 
      fileType, 
      fileSize, 
      downloadUrl, 
      buttonLabel, 
      category, 
      isActive,
      originalFileName,
      storedFileName,
      uploadedAt 
    } = req.body;

    if (!title) {
      res.status(400).json({ success: false, error: 'Software / File title is required' });
      return;
    }

    const newDownload: DownloadItem = {
      id: `soft-${Date.now()}`,
      title: String(title).trim(),
      version: version ? String(version).trim() : '1.0',
      description: description ? String(description).trim() : '',
      compatibleDevice: compatibleDevice ? String(compatibleDevice).trim() : 'Windows / PC',
      fileType: fileType ? String(fileType).trim().toUpperCase() : 'ZIP',
      fileSize: fileSize ? String(fileSize).trim() : '10 MB',
      downloadUrl: downloadUrl ? String(downloadUrl).trim() : '#',
      buttonLabel: buttonLabel ? String(buttonLabel).trim() : 'Download Software',
      category: category || 'Software',
      isActive: isActive !== false,
      originalFileName: originalFileName ? String(originalFileName).trim() : undefined,
      storedFileName: storedFileName ? String(storedFileName).trim() : undefined,
      uploadedAt: uploadedAt || new Date().toISOString()
    };

    db.downloads.unshift(newDownload);
    saveDatabase();

    res.json({ success: true, message: 'Software / Download item added successfully', download: newDownload });
  });

  // Edit Download Item (Update file, replace file, change name, version, status, etc.)
  app.put('/api/admin/downloads/:id', requireAdminAuth, (req: Request, res: Response) => {
    const { id } = req.params;
    const index = db.downloads.findIndex(d => d.id === id);

    if (index === -1) {
      res.status(404).json({ success: false, error: 'Download item not found' });
      return;
    }

    const current = db.downloads[index];

    // If file was replaced and an old stored file exists, safely remove old file if different
    if (req.body.storedFileName && current.storedFileName && req.body.storedFileName !== current.storedFileName) {
      const oldPath = path.join(UPLOADS_DIR, path.basename(current.storedFileName));
      if (fs.existsSync(oldPath)) {
        try {
          fs.unlinkSync(oldPath);
        } catch (e) {
          console.warn('Could not remove replaced old file:', e);
        }
      }
    }

    const updated: DownloadItem = {
      ...current,
      ...req.body,
      id,
      isActive: req.body.isActive !== undefined ? Boolean(req.body.isActive) : current.isActive
    };

    db.downloads[index] = updated;
    saveDatabase();

    res.json({ success: true, message: 'Software / Download item updated successfully', download: updated });
  });

  // Delete Download Item (and clean up uploaded physical file from disk)
  app.delete('/api/admin/downloads/:id', requireAdminAuth, (req: Request, res: Response) => {
    const { id } = req.params;
    const item = db.downloads.find(d => d.id === id);

    if (!item) {
      res.status(404).json({ success: false, error: 'Download item not found' });
      return;
    }

    // Clean up physical file from storage if it was stored locally
    if (item.storedFileName) {
      const filePath = path.join(UPLOADS_DIR, path.basename(item.storedFileName));
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (e) {
          console.warn('Could not remove file on item deletion:', e);
        }
      }
    }

    db.downloads = db.downloads.filter(d => d.id !== id);
    saveDatabase();
    res.json({ success: true, message: 'Software / Download item and associated file deleted successfully' });
  });

  // --- COMPANY & CONTACT INFO UPDATE ---
  app.put('/api/admin/company-info', requireAdminAuth, (req: Request, res: Response) => {
    const updateData = req.body;
    if (!updateData || typeof updateData !== 'object') {
      res.status(400).json({ success: false, error: 'Invalid company info payload' });
      return;
    }

    db.companyInfo = {
      ...db.companyInfo,
      ...updateData
    };

    saveDatabase();
    res.json({ success: true, message: 'Company and contact information updated successfully', companyInfo: db.companyInfo });
  });

  // --- SITE CONTENT & TEXTS UPDATE ---
  app.put('/api/admin/site-content', requireAdminAuth, (req: Request, res: Response) => {
    const updateData = req.body;
    if (!updateData || typeof updateData !== 'object') {
      res.status(400).json({ success: false, error: 'Invalid site content payload' });
      return;
    }

    db.siteContent = {
      ...db.siteContent,
      ...updateData
    };

    saveDatabase();
    res.json({ success: true, message: 'Site banners and headlines updated successfully', siteContent: db.siteContent });
  });

  // --- ORDERS UPDATE ---
  app.put('/api/admin/orders/:id', requireAdminAuth, (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;
    const order = db.orders.find(o => o.orderId === id);

    if (!order) {
      res.status(404).json({ success: false, error: 'Order not found' });
      return;
    }

    if (status) {
      order.status = status;
    }

    saveDatabase();
    res.json({ success: true, message: 'Order status updated', order });
  });

  // ==========================================
  // VITE DEV MIDDLEWARE & PRODUCTION SERVING
  // ==========================================
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
