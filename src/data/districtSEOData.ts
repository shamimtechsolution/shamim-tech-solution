export interface DistrictProductSalesItem {
  id: string;
  searchQuery: string;
  title: string;
  bnTitle: string;
  description: string;
  priceRange: string;
  categoryFilter: string;
  highlights: string[];
}

export interface DistrictTechnicianServiceItem {
  id: string;
  searchQuery: string;
  title: string;
  bnTitle: string;
  description: string;
  serviceType: string;
  features: string[];
}

export interface DistrictServiceOffer {
  title: string;
  bengaliTitle: string;
  description: string;
  features: string[];
}

export interface DistrictFAQ {
  question: string;
  answer: string;
}

export interface DistrictSEOInfo {
  slug: string;
  enName: string;
  bnName: string;
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  bengaliTagline: string;
  aboutDistrict: string;
  upazilas: string[];
  keyLandmarks: string[];
  popularSearchesBn: string[];
  popularSearchesEn: string[];
  productSalesItems: DistrictProductSalesItem[];
  technicianServiceItems: DistrictTechnicianServiceItem[];
  servicesOffered: DistrictServiceOffer[];
  faqs: DistrictFAQ[];
  deliveryTimeline: string;
  onSiteSupportNote: string;
  productCategoriesHighlighted: string[];
}

// 19 Standard Product Sales Topics defined for all 8 districts
interface ProductSalesMeta {
  querySuffix: string;
  titleSuffix: string;
  bnTitleSuffix: string;
  descriptionTemplate: (distEn: string, distBn: string, context: string) => string;
  priceRange: string;
  categoryFilter: string;
  highlights: string[];
}

const PRODUCT_SALES_TEMPLATES: ProductSalesMeta[] = [
  {
    querySuffix: 'CCTV Camera Price',
    titleSuffix: 'CCTV Camera Sales & Price',
    bnTitleSuffix: 'সিসিটিভি ক্যামেরা বিক্রয় ও মূল্য তালিকা',
    descriptionTemplate: (en, bn, ctx) => `${en} (${bn}) জেলায় আধুনিক এইচডি ও আইপি সিসিটিভি ক্যামেরা অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি সহ সাশ্রয়ী মূল্যে বিক্রয় করা হয়। ${ctx} বাসাবাড়ি ও ব্যবসা প্রতিষ্ঠানের সার্বক্ষণিক নজরদারিতে জেনুইন ক্যামেরা সরাসরি সরবরাহ করা হয়।`,
    priceRange: '৳১,৯৫০ - ৳১২,৫০০',
    categoryFilter: 'CCTV Camera',
    highlights: ['১০০% জেনুইন ব্র্যান্ড', '১-৩ বছর অফিসিয়াল ওয়ারেন্টি', 'ডে/নাইট কালার ভিশন']
  },
  {
    querySuffix: 'CCTV Products',
    titleSuffix: 'CCTV Products Sales',
    bnTitleSuffix: 'সিসিটিভি প্রোডাক্টস ও ইকুইপমেন্ট বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলায় সিসিটিভি ক্যামেরা, কানেক্টর, ভিডিও ব্যালুন, বক্স এডাপ্টার, ক্যাবল ও ডিসপ্লে মনিটর সহ সম্পূর্ণ সিকিউরিটি সামগ্রীর জেনুইন কালেকশন বিক্রয় করা হয়।`,
    priceRange: '৳১২০ - ৳৪৫,০০০',
    categoryFilter: 'All Products',
    highlights: ['সম্পূর্ণ সিসিটিভি প্যাকেজ', 'টেস্টিং সুবিধা', 'হোম ডেলিভারি']
  },
  {
    querySuffix: 'DVR',
    titleSuffix: 'DVR Sales & Price',
    bnTitleSuffix: 'ডিভিআর বিক্রয় ও মূল্য তালিকা',
    descriptionTemplate: (en, bn) => `${en} জেলার জন্য ৪, ৮, ১৬ ও ৩২ চ্যানেলের হাইব্রিড ডিভিআর (XVR/DVR) সুলভ মূল্যে বিক্রয় ও দ্রুত ডেলিভারি। Hikvision, Dahua ও Jovision ব্র্যান্ডের অরিজিনাল ডিভাইস।`,
    priceRange: '৳৩,২০০ - ৳১৬,৫০০',
    categoryFilter: 'DVR',
    highlights: ['৪/৮/১৬ চ্যানেল সাপোর্ট', 'H.265+ কম্প্রেশন', 'রিমোট মোবাইল ভিউ']
  },
  {
    querySuffix: 'NVR',
    titleSuffix: 'NVR Sales & Price',
    bnTitleSuffix: 'এনভিআর নেটওয়ার্ক রেকর্ডার বিক্রয় ও মূল্য',
    descriptionTemplate: (en, bn) => `${en} জেলার বৃহৎ কারখানা, অটো মিল, কোল্ড স্টোরেজ ও শোরুমের জন্য আল্ট্রা এইচডি PoE NVR নেটওয়ার্ক ভিডিও রেকর্ডার বিক্রয়।`,
    priceRange: '৳৪,৮০০ - ৳২৮,০০০',
    categoryFilter: 'NVR',
    highlights: ['4K আল্ট্রা এইচডি ডিকোডিং', 'PoE ডিরেক্ট পোর্ট', 'সেন্ট্রালাইজড আইপি মনিটরিং']
  },
  {
    querySuffix: 'IP Camera',
    titleSuffix: 'IP Camera Sales',
    bnTitleSuffix: 'আইপি ক্যামেরা বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলায় হাই-রেজোলিউশন মেগাপিক্সেল আইপি ক্যামেরা বিক্রয়। ক্রিস্টাল ক্লিয়ার পিকচার ও ইন্টারনেট ছাড়াই লোকাল নেটওয়ার্কে রেকর্ডিংয়ের পূর্ণ সুবিধা।`,
    priceRange: '৳২,৪৫০ - ৳১৮,০০০',
    categoryFilter: 'CCTV Camera',
    highlights: ['2MP/3MP/4MP/5MP লেন্স', 'PoE পাওয়ার সাপোর্ট', 'অনভিফ (ONVIF) কম্প্যাটিবল']
  },
  {
    querySuffix: 'WiFi Camera',
    titleSuffix: 'WiFi Camera Sales',
    bnTitleSuffix: 'স্মার্ট ওয়াইফাই ক্যামেরা বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার দোকান ও গৃহস্থালির জন্য ৩৬০ ডিগ্রি রোটেটিং স্মার্ট ওয়াইফাই ক্যামেরা। ক্যাবলিং ছাড়াই মোবাইল অ্যাপ দিয়ে সরাসরি লাইভ ভিডিও দেখা ও কথা বলা যায়।`,
    priceRange: '৳১,৯৫০ - ৳৪,৫০০',
    categoryFilter: 'CCTV Camera',
    highlights: ['৩৬০° রোটেশন ও প্যান-টিল্ট', 'টু-ওয়ে অডিও স্পিকার', 'মেমোরি কার্ড ব্যাকআপ']
  },
  {
    querySuffix: 'Security Camera',
    titleSuffix: 'Security Camera Sales',
    bnTitleSuffix: 'সিকিউরিটি ক্যামেরা বিক্রয় ও সমাধান',
    descriptionTemplate: (en, bn) => `${en} জেলায় চুরিরোধ ও সুরক্ষায় ওয়াটারপ্রুফ আউটডোর বুলেট এবং ইনডোর ডোম সিকিউরিটি ক্যামেরা সাশ্রয়ী মূল্যে সরবরাহ করা হয়।`,
    priceRange: '৳১,৯৫০ - ৳৯,৮০০',
    categoryFilter: 'CCTV Camera',
    highlights: ['IP67 ওয়াটারপ্রুফ মেটাল বডি', 'স্মার্ট মোশন সাইরেন', 'দীর্ঘস্থায়ী সুরক্ষা']
  },
  {
    querySuffix: 'HD Camera',
    titleSuffix: 'HD CCTV Camera Sales',
    bnTitleSuffix: 'এইচডি সিসিটিভি ক্যামেরা বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার জন্য ১০৮০পি ফুল এইচডি ও ২কে রেজোলিউশনের এনালগ এইচডি ক্যামেরা বিক্রয়। পরিস্কার মুখমণ্ডল ও গাড়ির নাম্বার প্লেট সনাক্তকরণের জন্য উপযোগী।`,
    priceRange: '৳১,৬৫০ - ৳৫,২০০',
    categoryFilter: 'CCTV Camera',
    highlights: ['১০৮০p / ২কে রেজোলিউশন', 'স্মার্ট আইআর নাইট ভিশন', 'কোএক্সিয়াল ও ব্যালুন সাপোর্ট']
  },
  {
    querySuffix: 'Video Door Phone',
    titleSuffix: 'Video Door Phone Sales',
    bnTitleSuffix: 'ভিডিও ডোর ফোন বিক্রয় ও ডিসপ্লে সেটআপ',
    descriptionTemplate: (en, bn) => `${en} জেলার আধুনিক বাড়ি, ভিলা ও ফ্ল্যাটের প্রধান দরজায় দর্শনার্থী দেখে কথা বলে লক খোলার ভিডিও ডোর বেল ও মনিটর সিস্টেম বিক্রয়।`,
    priceRange: '৳৬,৫০০ - ৳২২,০০০',
    categoryFilter: 'Access Control',
    highlights: ['৭ ইঞ্চি রঙিন এলসিডি মনিটর', 'নাইট ভিশন ডোর ক্যামেরা', 'ইলেকট্রিক লক রিমোট ওপেন']
  },
  {
    querySuffix: 'Intercom Machine',
    titleSuffix: 'Intercom Products Sales',
    bnTitleSuffix: 'ইন্টারকম মেশিন ও হ্যান্ডসেট বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার বহুতল আবাসিক ভবন, ক্লিনিক, হাসপাতাল ও বাণিজ্যিক অফিসের জন্য নির্ভরযোগ্য ইন্টারকম সেট ও ক্যাবলিং সামগ্রী বিক্রয়।`,
    priceRange: '৳৮৫০ - ৳১৮,০০০',
    categoryFilter: 'Other Accessories',
    highlights: ['ক্লিয়ার নয়েজ-ফ্রি সাউন্ড', 'এক্সটেনশন হ্যান্ডসেট', 'মেইন এক্সচেঞ্জ ইউনিট']
  },
  {
    querySuffix: 'PBX System',
    titleSuffix: 'PBX System Sales',
    bnTitleSuffix: 'পিবিএক্স টেলিফোন সিস্টেম বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার করপোরেট প্রতিষ্ঠান ও কল সেন্টারের জন্য মাল্টি-লাইন এনালগ ও আইপি পিবিএক্স (PABX) মেশিন ও এক্সচেঞ্জ বিক্রয়।`,
    priceRange: '৳৫,৫০০ - ৳৪৫,০০০',
    categoryFilter: 'Other Accessories',
    highlights: ['অটো অ্যাটেনডেন্ট ভয়েস', 'কল ট্রান্সফার ও কনফারেন্স', 'স্কেলেবল লাইন সাপোর্ট']
  },
  {
    querySuffix: 'Access Control Machine',
    titleSuffix: 'Access Control Products Sales',
    bnTitleSuffix: 'এক্সেস কন্ট্রোল মেশিন বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার অফিস ও সার্ভার রুমের প্রবেশাধিকার নিয়ন্ত্রণে ফিঙ্গারপ্রিন্ট, পাসওয়ার্ড ও স্মার্ট কার্ড এক্সেস কন্ট্রোল ডিভাইস বিক্রয়।`,
    priceRange: '৳৪,২০০ - ৳১৬,৫০০',
    categoryFilter: 'Access Control',
    highlights: ['RFID কার্ড ও বায়োমেট্রিক', 'টাইম এক্সেস রুলস', 'ইলেকট্রিক লক ড্রাইভার']
  },
  {
    querySuffix: 'Door Lock',
    titleSuffix: 'Access Control Door Lock Sales',
    bnTitleSuffix: 'এক্সেস কন্ট্রোল ইলেকট্রিক ডোর লক বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলায় কাঠের দরজা, গ্লাস ডোর ও মেটাল সিকিউরিটি গেটের জন্য শক্তিশালী ম্যাগনেটিক ইএম লক ও ড্রপবোল্ট বিক্রয়।`,
    priceRange: '৳২,২০০ - ৳৭,৮০০',
    categoryFilter: 'Access Control',
    highlights: ['২৮০ কেজি ম্যাগনেটিক ফোর্স', 'পুশ এক্সিট সুইচ', 'জরুরি কি আনলক']
  },
  {
    querySuffix: 'Biometric Machine',
    titleSuffix: 'Biometric Attendance Machine Sales',
    bnTitleSuffix: 'বায়োমেট্রিক হাজিরা মেশিন বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার স্কুল, কলেজ, মাদ্রাসা ও বাণিজ্যিক প্রতিষ্ঠানে শিক্ষক ও কর্মচারীদের ডিজিটাল হাজিরা ট্র্যাকিং মেশিন বিক্রয়।`,
    priceRange: '৳৪,৫০০ - ৳১৮,৫০০',
    categoryFilter: 'Fingerprint Machine',
    highlights: ['সহজ বাংলা সফটওয়্যার', 'পেনড্রাইভ ও ওয়াইফাই ডেটা ডাউনলোড', 'অটো এক্সেল রিপোর্ট']
  },
  {
    querySuffix: 'Fingerprint Machine',
    titleSuffix: 'Fingerprint Attendance Machine Sales',
    bnTitleSuffix: 'ফিঙ্গারপ্রিন্ট এটেন্ডেন্স মেশিন বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলায় হাই-স্পিড অপটিক্যাল সেন্সরযুক্ত ফিঙ্গারপ্রিন্ট হাজিরা মেশিন বিক্রয়। ভেজা বা ফাটা আঙুলের ছাপেও নির্ভুল রিকগনিশন।`,
    priceRange: '৳৩,৮০০ - ৳১৪,০০০',
    categoryFilter: 'Fingerprint Machine',
    highlights: ['১০০০+ আঙুলের ছাপ ধারণ', '১ লক্ষ লগ স্টোরেজ', '১ বছরের ওয়ারেন্টি']
  },
  {
    querySuffix: 'CCTV Hard Disk',
    titleSuffix: 'CCTV Hard Disk Sales',
    bnTitleSuffix: 'সিসিটিভি নজরদারি হার্ড ডিস্ক বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার ডিভিআর/এনভিআরে ২৪/৭ একটানা রেকর্ডিংয়ের জন্য আসল Western Digital Purple ও Seagate SkyHawk সার্ভিলেন্স হার্ডডিস্ক বিক্রয়।`,
    priceRange: '৳৩,৫০০ - ৳১২,৫০০',
    categoryFilter: 'Hard Disk (HDD)',
    highlights: ['1TB, 2TB, 4TB অপশন', '২৪/৭ অল-ওয়েজ অন রেকর্ডিং', '২ বছরের অফিসিয়াল রিপ্লেসমেন্ট']
  },
  {
    querySuffix: 'CCTV Accessories',
    titleSuffix: 'CCTV Accessories Sales',
    bnTitleSuffix: 'সিসিটিভি এক্সেসরিজ ও কানেক্টর বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলায় 8MP 4K ভিডিও ব্যালুন, কপার বিএনসি, ডিসি কানেক্টর, ওয়াটারপ্রুফ জয়েন্ট বক্স ও ক্যামেরা ক্লিপ সহ সকল এক্সেসরিজ বিক্রয়।`,
    priceRange: '৳৫০ - ৳৮৫০',
    categoryFilter: 'Other Accessories',
    highlights: ['৮ মেগাপিক্সেল আল্ট্রা সিগন্যাল', 'শুদ্ধ কপার পিন', 'লং-ডিসট্যান্স ট্রান্সমিশন']
  },
  {
    querySuffix: 'LAN Cable',
    titleSuffix: 'LAN Cable & Networking Products Sales',
    bnTitleSuffix: 'ল্যান ক্যাবল ও নেটওয়ার্কিং সামগ্রী বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলার অফিস ও ব্রডব্যান্ড নেটওয়ার্কিংয়ের জন্য Cat6 UTP/SFTP ১০০% কপার নেটওয়ার্ক ক্যাবল, গিগাবিট সুইচ ও আরজে৪৫ কানেক্টর বিক্রয়।`,
    priceRange: '৳২৫/মিটার - ৳১২,০০০/রোল',
    categoryFilter: 'Networking Products',
    highlights: ['Cat6 হাই-স্পিড ডাটা কপার', 'PoE সাপোর্টেড', 'ফ্লুক টেস্ট পাস ক্যাবল']
  },
  {
    querySuffix: 'Power Supply',
    titleSuffix: 'CCTV Power Supply Sales',
    bnTitleSuffix: 'সিসিটিভি পাওয়ার সাপ্লাই ও এডাপ্টার বিক্রয়',
    descriptionTemplate: (en, bn) => `${en} জেলায় ১২ ভোল্ট FVL সেন্ট্রাল বক্স এডাপ্টার, ৫ অ্যাম্পিয়ার, ১০ অ্যাম্পিয়ার ও ২০ অ্যাম্পিয়ার শর্ট-সার্কিট প্রটেক্টেড সিসিটিভি পাওয়ার সাপ্লাই বিক্রয়।`,
    priceRange: '৳৪৫০ - ৳৩,৫০০',
    categoryFilter: 'Power Supply/Adapter',
    highlights: ['ওভারলোড ও শর্ট-সার্কিট সেফটি', 'মেটাল কেসিং কুলিং ফ্যান', 'স্টেবল ১২ ভোল্ট আউটপুট']
  }
];

// 12 Standard Technician & Service Topics defined for all 8 districts
interface TechnicianServiceMeta {
  querySuffix: string;
  titleSuffix: string;
  bnTitleSuffix: string;
  serviceType: string;
  descriptionTemplate: (distEn: string, distBn: string, ctx: string) => string;
  features: string[];
}

const TECHNICIAN_SERVICE_TEMPLATES: TechnicianServiceMeta[] = [
  {
    querySuffix: 'CCTV Technician',
    titleSuffix: 'CCTV Technician & CCTV Security Solution',
    bnTitleSuffix: 'সিসিটিভি টেকনিশিয়ান ও সিকিউরিটি সলিউশন',
    serviceType: 'CCTV Technician',
    descriptionTemplate: (en, bn, ctx) => `${en} (${bn}) জেলায় অভিজ্ঞ ও সার্টিফাইড সিসিটিভি টেকনিশিয়ান দ্বারা অন-সাইট ক্যামেরা স্থাপন, ক্যাবল ওয়্যারিং, ডিভিআর কনফিগারেশন ও ত্রুটি সমাধান। ${ctx}`,
    features: ['জরুরি অন-সাইট টেকনিশিয়ান ভিজিট', 'HD ও আইপি ক্যামেরা ট্রাবলশুটিং', 'সাশ্রয়ী সার্ভিস চার্জ']
  },
  {
    querySuffix: 'CCTV Camera Installation',
    titleSuffix: 'CCTV Camera Installation & Sales',
    bnTitleSuffix: 'সিসিটিভি ক্যামেরা ইনস্টলেশন ও বিক্রয় সেবা',
    serviceType: 'CCTV Installation',
    descriptionTemplate: (en, bn) => `${en} জেলার বাড়ি, দোকান, কারখানা ও প্রাতিষ্ঠানিক ভবনে আধুনিক সরঞ্জাম দিয়ে পরিচ্ছন্ন পাইপিং ও সুরক্ষিত ক্যামেরা ইনস্টলেশন।`,
    features: ['সঠিক অ্যাঙ্গেল সিলেকশন ও ব্লাইন্ড স্পট দূরীকরণ', 'কন্ডুইট পাইপিং ও ক্লিপিং', 'ইনস্টলেশন পরবর্তী ফ্রি ডেমো']
  },
  {
    querySuffix: 'CCTV Camera Service',
    titleSuffix: 'CCTV Camera Installation, Maintenance & Repair',
    bnTitleSuffix: 'সিসিটিভি ক্যামেরা সার্ভিসিং ও মেরামত',
    serviceType: 'CCTV Repair & Maintenance',
    descriptionTemplate: (en, bn) => `${en} জেলায় পুরোনো ক্যামেরা ঘোলা হওয়া, ডিসপ্লে না আসা, ভিডিও কাঁপাকাঁপি বা লাইন ড্রপের সমস্যায় তাৎক্ষণিক মেরামত ও মেইনটেন্যান্স সেবা।`,
    features: ['ক্যামেরা লেন্স ক্লিনিং ও ফোকাসিং', 'পাওয়ার ড্রপ ও কানেক্টর ফিক্স', 'বার্ষিক মেইনটেন্যান্স চুক্তি (AMC)']
  },
  {
    querySuffix: 'Intercom',
    titleSuffix: 'Intercom Installation, Service & Sales',
    bnTitleSuffix: 'ইন্টারকম ইনস্টলেশন, সার্ভিস ও মেরামত',
    serviceType: 'Intercom Service',
    descriptionTemplate: (en, bn) => `${en} জেলার বহুতল অ্যাপার্টমেন্ট, বাণিজ্যিক অফিস ও হাসপাতালে ক্লিয়ার ভয়েস ইন্টারকম ক্যাবলিং, হ্যান্ডসেট ফিটিং ও মেরামত।`,
    features: ['রুম টু রুম ডায়ালিং', 'নয়েজ-ফ্রি ক্লিয়ার কমিউনিকেশন', 'দ্রুত তার ও পয়েন্ট মেরামত']
  },
  {
    querySuffix: 'Electrician',
    titleSuffix: 'Electrician & Electrical Services',
    bnTitleSuffix: 'ইলেকট্রিশিয়ান ও নিরাপদ ইলেকট্রিক্যাল ওয়্যারিং',
    serviceType: 'Electrical Service',
    descriptionTemplate: (en, bn) => `${en} জেলায় পেশাদার ইলেকট্রিশিয়ান দ্বারা নতুন ও পুরোনো ভবনের ওয়্যারিং, ডিবি বক্স স্থাপন, সার্কিট ব্রেকার, শর্ট সার্কিট ফল্ট ও আর্থিং সমাধান।`,
    features: ['শর্ট সার্কিট সেফটি চেকিং', 'আর্থিং ও ফেজ লোড ব্যালেন্স', 'জরুরি ইলেকট্রিক্যাল ট্রাবলশুটিং']
  },
  {
    querySuffix: 'Access Control',
    titleSuffix: 'Access Control Installation & Service',
    bnTitleSuffix: 'এক্সেস কন্ট্রোল ইনস্টলেশন ও সার্ভিস',
    serviceType: 'Access Control Service',
    descriptionTemplate: (en, bn) => `${en} জেলার অফিস, ব্যাংক, আইটি ল্যাব ও গোডাউনের প্রবেশদ্বারে কার্ড, পাসকোড ও ফিঙ্গারপ্রিন্ট এক্সেস কন্ট্রোল সিস্টেম স্থাপন ও মেইনটেন্যান্স।`,
    features: ['টাইম লক ও পারমিশন রুলস', 'ইমার্জেন্সি পুশ বাটন', 'সফটওয়্যার ইন্টিগ্রেশন ও রিপোর্ট']
  },
  {
    querySuffix: 'IP Camera',
    titleSuffix: 'IP Camera Installation & Service',
    bnTitleSuffix: 'আইপি ক্যামেরা ইনস্টলেশন ও নেটওয়ার্কিং',
    serviceType: 'IP Camera Setup',
    descriptionTemplate: (en, bn) => `${en} জেলায় PoE সুইচ নেটওয়ার্ক ভিত্তিক আল্ট্রা এইচডি আইপি ক্যামেরা ক্যাবলিং, আইপি কনফ্লিক্ট সমাধান ও সেন্ট্রাল NVR কনফিগারেশন।`,
    features: ['গিগাবিট PoE ক্যাবলিং', 'স্ট্যাটিক আইপি ও সাবনেট কনফিগ', 'হাই-রেট ফ্রেম পারফরম্যান্স']
  },
  {
    querySuffix: 'Biometric Machine',
    titleSuffix: 'Biometric Attendance Machine Sales & Service',
    bnTitleSuffix: 'বায়োমেট্রিক হাজিরা মেশিন স্থাপন ও সার্ভিস',
    serviceType: 'Biometric Service',
    descriptionTemplate: (en, bn) => `${en} জেলার স্কুল, কলেজ, মাদ্রাসা ও করপোরেট অফিসে ডিজিটাল হাজিরা মেশিন সেটআপ, বায়োমেট্রিক ডেটা এন্ট্রি ও বাংলা সফটওয়্যার ট্রেনিং।`,
    features: ['স্টাফ রেজিস্ট্রেশন ও ব্যাকআপ', 'হাজিরা রিপোর্ট জেনারেশন ট্রেনিং', 'অন-সাইট ও রিমোট সফটওয়্যার সাপোর্ট']
  },
  {
    querySuffix: 'Networking',
    titleSuffix: 'Computer LAN & Networking Services',
    bnTitleSuffix: 'কম্পিউটার ল্যান নেটওয়ার্কিং ও আইটি সাপোর্ট',
    serviceType: 'IT Networking',
    descriptionTemplate: (en, bn) => `${en} জেলায় হাই-স্পিড Cat6 লোকাল এরিয়া নেটওয়ার্ক (LAN) ক্যাবলিং, ওয়াইফাই রাউটার অপটিমাইজেশন, ফাইল শেয়ারিং ও প্রিন্টার শেয়ারিং সেটআপ।`,
    features: ['সার্ভার র্যাক ও প্যাচ প্যানেল ড্রেসিং', 'রাউটার ও গিগাবিট সুইচ কনফিগ', 'পিসি হার্ডওয়্যার ও উইন্ডোজ সাপোর্ট']
  },
  {
    querySuffix: 'DVR NVR',
    titleSuffix: 'DVR & NVR Installation, Setup & Service',
    bnTitleSuffix: 'ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ ও সেটআপ',
    serviceType: 'DVR/NVR Service',
    descriptionTemplate: (en, bn) => `${en} জেলায় ডিভিআর/এনভিআরে ইন্টারনেট সংযুক্ত করে স্মার্টফোনে লাইভ দেখা, রেকর্ডিং ব্যাকআপ এবং ভুলে যাওয়া পাসওয়ার্ড তাৎক্ষণিক আনলক।`,
    features: ['ক্লাউড P2P ও স্ট্যাটিক আইপি সেটআপ', 'মোবাইল লাইভ ভিউ ও মোশন পুশ', 'ভুলে যাওয়া পাসওয়ার্ড তাৎক্ষণিক রিসেট']
  },
  {
    querySuffix: 'PBX Technician',
    titleSuffix: 'PBX Installation, Setup & Service',
    bnTitleSuffix: 'পিবিএক্স টেলিফোন এক্সচেঞ্জ টেকনিশিয়ান সার্ভিস',
    serviceType: 'PBX Service',
    descriptionTemplate: (en, bn) => `${en} জেলার বড় প্রতিষ্ঠান ও হোটেলের জন্য পিবিএক্স এক্সচেঞ্জ ওয়্যারিং, মাল্টিপল এক্সটেনশন প্রোগ্রামিং ও তারের জটিল ফল্ট মেরামত।`,
    features: ['এক্সটেনশন প্রোগ্রামিং ও কল ফরওয়ার্ড', 'ডিস্ট্রিবিউশন ফ্রেম (MDF) ওয়্যারিং', 'নিয়মিত কারিগরি রক্ষণাবেক্ষণ']
  },
  {
    querySuffix: 'Door Lock Technician',
    titleSuffix: 'Access Control Door Lock Installation & Service',
    bnTitleSuffix: 'ডোর লক টেকনিশিয়ান ও ম্যাগনেটিক লক সার্ভিস',
    serviceType: 'Door Lock Service',
    descriptionTemplate: (en, bn) => `${en} জেলায় কাচের দরজা, মেটাল বা কাঠের দরজায় হেভি ডিউটি ম্যাগনেটিক লক, ইলেকট্রিক স্ট্রাইক ও অটো ডোর ক্লোজার ফিটিং ও মেরামত।`,
    features: ['ম্যাগনেটিক হোল্ডিং ফোর্স ক্যালিব্রেশন', 'এক্সিট সেন্সর ও সুইচ ওয়্যারিং', 'পাওয়ার ব্যাকআপ ফল্ট ডায়াগনসিস']
  }
];

// Helper to generate 19 product sales items for a specific district
function buildDistrictProductSales(distSlug: string, distEn: string, distBn: string, context: string): DistrictProductSalesItem[] {
  return PRODUCT_SALES_TEMPLATES.map((tmpl, idx) => ({
    id: `${distSlug}-prod-${idx + 1}`,
    searchQuery: `${distEn} ${tmpl.querySuffix}`,
    title: `${distEn} ${tmpl.titleSuffix}`,
    bnTitle: `${distBn} ${tmpl.bnTitleSuffix}`,
    description: tmpl.descriptionTemplate(distEn, distBn, context),
    priceRange: tmpl.priceRange,
    categoryFilter: tmpl.categoryFilter,
    highlights: tmpl.highlights
  }));
}

// Helper to generate 12 technician & service items for a specific district
function buildDistrictTechnicianServices(distSlug: string, distEn: string, distBn: string, context: string): DistrictTechnicianServiceItem[] {
  return TECHNICIAN_SERVICE_TEMPLATES.map((tmpl, idx) => ({
    id: `${distSlug}-tech-${idx + 1}`,
    searchQuery: `${distEn} ${tmpl.querySuffix}`,
    title: `${distEn} ${tmpl.titleSuffix}`,
    bnTitle: `${distBn} ${tmpl.bnTitleSuffix}`,
    serviceType: tmpl.serviceType,
    description: tmpl.descriptionTemplate(distEn, distBn, context),
    features: tmpl.features
  }));
}

export const DISTRICT_SEO_DATA: Record<string, DistrictSEOInfo> = {
  rangpur: {
    slug: 'rangpur',
    enName: 'Rangpur',
    bnName: 'রংপুর',
    title: 'Rangpur CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'Expert CCTV Camera Installation and Maintenance in Rangpur. Best CCTV camera price, IP camera setup, DVR/NVR online view, intercom, access control & electrician in Rangpur City & Rangpur Division.',
    h1: 'Rangpur CCTV Camera Sales, Installation & Technical Services (রংপুর সিসিটিভি ক্যামেরা ও টেকনিক্যাল সার্ভিস)',
    tagline: 'Premier CCTV Camera Shop & Certified Technical Service in Rangpur Division',
    bengaliTagline: 'রংপুর জেলা ও সিটি কর্পোরেশনে বিশ্বস্ত সিসিটিভি ক্যামেরা বিক্রয়, ফিটিং, মেরামত ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'রংপুর বিভাগীয় সদর ও বাণিজ্যিক কেন্দ্র হিসেবে রংপুর সিটি কর্পোরেশন, জাহাজ কোম্পানি মোড়, স্টেশন রোড, ধাপ, মডার্ন মোড় সহ পুরো জেলায় আমরা সর্বোচ্চ মানের সিকিউরিটি ইকুইপমেন্ট ও কম্পিউটার হার্ডওয়্যার সেবা প্রদান করছি। আমাদের মূল টেকনিক্যাল টিম রংপুরের সেন্ট্রাল টেকনিক্যাল হাবে অবস্থিত হওয়ায় রংপুর জেলার যেকোনো প্রান্ত থেকে কল পেলে দ্রুততম সময়ে অন-সাইট টেকনিশিয়ান পৌঁছে যায়।',
    upazilas: [
      'Rangpur City Corporation (রংপুর সিটি কর্পোরেশন)',
      'Jahaj Company Mor (জাহাজ কোম্পানি মোড়)',
      'Rangpur Sadar (রংপুর সদর)',
      'Mithapukur (মিঠাপুকুর)',
      'Pirgachha (পীরগাছা)',
      'Badarganj (বদরগঞ্জ)',
      'Gangachhara (গঙ্গাচড়া)',
      'Kaunia (কাউনিয়া)',
      'Pirganj (পীরগঞ্জ)',
      'Taraganj (তারাগঞ্জ)'
    ],
    keyLandmarks: [
      'Jahaj Company Mor Market',
      'Lalbagh Commercial Area',
      'Dhap Medical College Mor',
      'Station Road Supermarket',
      'Modern Mor & Lalbagh',
      'Payra Chottor Commercial Zone',
      'Carmichael College Area'
    ],
    popularSearchesBn: [
      'রংপুর সিসিটিভি টেকনিশিয়ান',
      'রংপুর সিসিটিভি ক্যামেরা দাম',
      'রংপুরে সিসিটিভি ক্যামেরা দোকান',
      'রংপুর সিসিটিভি ক্যামেরা ফিটিং ও মেরামত',
      'আইপি ক্যামেরা রংপুর',
      'রংপুর ডিভিআর এনভিআর অনলাইন মোবাইল ভিউ',
      'রংপুর ইন্টারকম টেকনিশিয়ান',
      'রংপুর পিবিএক্স সেটআপ',
      'রংপুর এক্সেস কন্ট্রোল ও ডোর লক',
      'রংপুর বায়োমেট্রিক হাজিরা মেশিন',
      'রংপুর ইলেকট্রিশিয়ান সার্ভিস',
      'রংপুর কম্পিউটার টেকনিশিয়ান ও নেটওয়ার্কিং'
    ],
    popularSearchesEn: [
      'CCTV Camera Installation and Maintenance in Rangpur',
      'CCTV Technician Rangpur',
      'Rangpur CCTV Technician',
      'CCTV Camera Price in Rangpur',
      'Rangpur CCTV Camera Shop',
      'CCTV Camera Fitting Rangpur',
      'CCTV Repair Rangpur',
      'IP Camera Rangpur',
      'DVR NVR Online Setup Rangpur',
      'Rangpur Intercom Technician',
      'PBX Setup Rangpur',
      'Access Control Rangpur',
      'Biometric Machine Rangpur',
      'Rangpur Electrician',
      'Computer Repair Rangpur',
      'Networking Service Rangpur'
    ],
    productSalesItems: buildDistrictProductSales(
      'rangpur', 
      'Rangpur', 
      'রংপুর', 
      'রংপুর সিটি কর্পোরেশন ও জাহাজ কোম্পানি মোড় সহ পুরো রংপুর জেলায়'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'rangpur', 
      'Rangpur', 
      'রংপুর', 
      'রংপুর সেন্ট্রাল টেকনিক্যাল হাব থেকে দ্রুততম সময়ে অন-সাইট সার্ভিস নিশ্চিত করা হয়।'
    ),
    servicesOffered: [
      {
        title: 'CCTV Camera Installation & Maintenance',
        bengaliTitle: 'রংপুর সিসিটিভি ক্যামেরা ফিটিং, মেরামত ও টেকনিশিয়ান সার্ভিস',
        description: 'রংপুর সিটি ও জেলার বাড়ি, দোকান, শপিং মল, গুদাম ও কারখানায় হাই-ডেফিনিশন অ্যানালগ ও আইপি সিসিটিভি ক্যামেরা নিখুঁতভাবে স্থাপন, ক্যাবলিং ও মেরামত সেবা।',
        features: ['অরিজিনাল ক্যামেরা ও কেবল', 'HD/2K/4K ক্লিয়ার নাইট ভিশন', 'ঝামেলামুক্ত ওয়্যারিং ও লাইভ ডেমো']
      },
      {
        title: 'IP Camera & Wi-Fi Camera Setup',
        bengaliTitle: 'রংপুর আইপি ক্যামেরা ও ওয়াইফাই ক্যামেরা ইনস্টলেশন',
        description: 'মোবাইল ফোনে সার্বক্ষণিক লাইভ ভিউ এবং অডিও রেকর্ড সুবিধা সহ স্মার্ট ওয়াইফাই পিটিজেড এবং PoE আইপি ক্যামেরা সেটআপ।',
        features: ['৩৬০ ডিগ্রি রোটেশন ক্যামেরা', 'টু-ওয়ে অডিও ও মোশন সাইরেন', 'SD কার্ড ও ক্লাউড স্টোরেজ ব্যাকআপ']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'রংপুর ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ ও পাসওয়ার্ড রিসেট',
        description: 'Hikvision, Dahua, Jovision ডিভিআর/এনভিআরের পাসওয়ার্ড রিসেট, হার্ড ডিস্ক রেকর্ডিং ও মোবাইল অ্যাপে রিমোট ভিউ কনফিগারেশন।',
        features: ['মোবাইলে দূর থেকে লাইভ দেখা', 'মোশন ডিটেকশন অ্যালার্ট', 'রেকর্ডিং প্লেব্যাক ব্যাকআপ']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'রংপুর পিবিএক্স ও ইন্টারকম টেকনিশিয়ান সার্ভিস',
        description: 'রংপুরের বহুতল ভবন, ক্লিনিক, অফিস ও শপিং সেন্টারের অভ্যন্তরীণ দ্রুত যোগাযোগের জন্য নির্ভরযোগ্য ইন্টারকম ও পিবিএক্স নেটওয়ার্কিং।',
        features: ['ক্লিয়ার ভয়েস কল', 'মাল্টি-এক্সটেনশন হ্যান্ডসেট', 'নিয়মিত মেইনটেন্যান্স ও ফল্ট মেরামত']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'রংপুর এক্সেস কন্ট্রোল ও ম্যাগনেটিক ডোর লক ইনস্টলেশন',
        description: 'অফিস, সার্ভার রুম ও বাসাবাড়ির প্রবেশদ্বারে ফিঙ্গারপ্রিন্ট, RFID কার্ড ও রিমোট কন্ট্রোল ডোর লক সমাধান।',
        features: ['ম্যাগনেটিক ও ড্রপবোল্ট লক', 'এক্সিট পুশ বাটন', 'জরুরি ব্যাকআপ ব্যাটারি ব্যবস্থা']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'রংপুর বায়োমেট্রিক হাজিরা মেশিন স্থাপন ও সফটওয়্যার',
        description: 'কর্মচারী ও কর্মকর্তাদের উপস্থিতি ট্র্যাকিংয়ের জন্য ফিঙ্গারপ্রিন্ট ও ফেস রিকগনিশন মেশিন এবং বাংলা রিপোর্ট সফটওয়্যার সেটআপ।',
        features: ['অটো এক্সেল হাজিরা রিপোর্ট', 'লেভেল ওয়াইজ পারমিশন', 'কম্পিউটার ও ওয়াইফাই ইন্টিগ্রেশন']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'রংপুর ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'অভিজ্ঞ ইলেকট্রিশিয়ান দ্বারা বাসাবাড়ি, কারখানা ও কমার্শিয়াল ভবনের নিরাপদ সার্কিট ব্রেকার, ডিবি বক্স ও ক্যাবল ওয়্যারিং।',
        features: ['শর্ট সার্কিট ফল্ট ডায়াগনসিস', 'আর্থিং ও লোড ব্যালেন্সিং', 'সার্টিফাইড সেফটি স্ট্যান্ডার্ড']
      },
      {
        title: 'Computer LAN Networking & PC Repair',
        bengaliTitle: 'রংপুর কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং সার্ভিস',
        description: 'Cat6 LAN ক্যাবলিং, গিগাবিট সুইচ, রাউটার কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ ইনস্টলেশন।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 পাঞ্চ ও ক্যাবল টেস্টিং', 'হার্ডওয়্যার আপগ্রেড ও ভাইরাস রিমুভাল']
      }
    ],
    faqs: [
      {
        question: 'রংপুরে সিসিটিভি ক্যামেরা কিনতে ও ইনস্টল করতে কত টাকা খরচ হয়?',
        answer: 'ক্যামেরার ধরন (অ্যানালগ, আইপি বা ওয়াইফাই), মেগাপিক্সেল এবং চ্যানেলের সংখ্যার ওপর দাম নির্ভর করে। আমাদের কাছে সাধারণ ওয়াইফাই স্মার্ট ক্যামেরা ১,৯৫০ টাকা থেকে শুরু এবং ফুল ৪-ক্যামেরা সেটআপ প্যাকেজ মানসম্মত ব্র্যান্ড ও অফিসিয়াল ওয়ারেন্টি সহ সাশ্রয়ী মূল্যে পাওয়া যায়।'
      },
      {
        question: 'রংপুর সিটি ও এর আশেপাশে কত দ্রুত টেকনিশিয়ান পাওয়া যায়?',
        answer: 'যেহেতু আমাদের টেকনিক্যাল টিম রংপুরের জাহাজ কোম্পানি মোড় ও হারাগাছে সরাসরি অবস্থান করছে, তাই রংপুর সিটি কর্পোরেশনের ভিতরে কল পাওয়ার সাথে সাথে বা একই দিনে দ্রুততম সময়ে অন-সাইট টেকনিশিয়ান সার্ভিস নিশ্চিত করা হয়।'
      },
      {
        question: 'পুরোনো বা নষ্ট সিসিটিভি ক্যামেরার অনলাইন ভিউ বা রিপেয়ার কি করা হয়?',
        answer: 'হ্যাঁ, যেকোনো ব্রান্ডের (যেমন Hikvision, Dahua, Jovision, CP Plus) ডিভিআর পাসওয়ার্ড ভুলে যাওয়া, হার্ডডিস্ক না পাওয়া, বা মোবাইলে অনলাইন ভিউ বন্ধ হয়ে গেলে আমাদের টেকনিশিয়ান মেরামত করে দেন।'
      },
      {
        question: 'পণ্য কেনার পর কি অফিসিয়াল ওয়ারেন্টি পাওয়া যাবে?',
        answer: 'অবশ্যই। শামীম টেক সলিউশন থেকে বিক্রিত প্রতিটি জেনুইন ক্যামেরা, ডিভিআর, এডাপ্টার ও হার্ডওয়্যারে কোম্পানি নির্ধারিত অফিসিয়াল ওয়ারেন্টি প্রদান করা হয়।'
      }
    ],
    deliveryTimeline: 'রংপুর সিটিতে সেম-ডে অন-সাইট ডেলিভারি ও সার্ভিস; উপজেলায় ২৪ ঘণ্টার মধ্যে ডেলিভারি।',
    onSiteSupportNote: 'জাহাজ কোম্পানি মোড় ও হারাগাছ থেকে সরাসরি এক্সপার্ট টেকনিশিয়ান ভিজিট ব্যবস্থা রয়েছে। সরাসরি যোগাযোগ: 01790139333 এবং 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Other Accessories', 'Hard Disk (HDD)', 'Monitor']
  },

  dinajpur: {
    slug: 'dinajpur',
    enName: 'Dinajpur',
    bnName: 'দিনাজপুর',
    title: 'Dinajpur CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'Expert CCTV Camera Services in Dinajpur. Installation, maintenance & certified CCTV technician for Dinajpur Sadar, Parbatipur & Fulbari. Best CCTV camera price, IP camera, intercom & access control.',
    h1: 'Dinajpur CCTV Camera Sales, Installation & Technical Services (দিনাজপুর সিসিটিভি ক্যামেরা ও টেকনিক্যাল সার্ভিস)',
    tagline: 'Reliable Security Solutions, Computer Products & CCTV Technician for Dinajpur District',
    bengaliTagline: 'দিনাজপুর জেলায় অরিজিনাল সিসিটিভি ক্যামেরা বিক্রয়, রাইস মিল ও প্রতিষ্ঠানে সিকিউরিটি ক্যামেরা ফিটিং ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'দিনাজপুর সদর, পার্বতীপুর, ফুলবাড়ী, বীরগঞ্জ এবং বিরামপুর সহ সকল উপজেলার অটো রাইস মিল, শিক্ষা প্রতিষ্ঠান, ব্যাংক, দোকান, কোল্ড স্টোরেজ ও বাসাবাড়ির সুরক্ষায় শামীম টেক সলিউশন প্রদান করছে উন্নত প্রযুক্তি ও নির্ভরযোগ্য টেকনিক্যাল সার্ভিস। দিনাজপুরের গ্রাহকদের জন্য আমরা নিশ্চিত করি সাশ্রয়ী মূল্যে অরিজিনাল সিকিউরিটি হার্ডওয়্যার এবং সরাসরি অন-সাইট টেকনিশিয়ান সাপোর্ট।',
    upazilas: [
      'Dinajpur Sadar (দিনাজপুর সদর)',
      'Parbatipur (পার্বতীপুর)',
      'Fulbari (ফুলবাড়ী)',
      'Birganj (বীরগঞ্জ)',
      'Birol (বিরল)',
      'Bochaganj (বোচাগঞ্জ)',
      'Chirirbandar (চিরিরবন্দর)',
      'Ghoraghat (ঘোড়াঘাট)',
      'Hakimpur / Hili (হাকিমপুর / হিলি)',
      'Kaharole (কাহারোল)',
      'Khansama (খানসামা)',
      'Nawabganj (নবাবগঞ্জ)',
      'Birampur (বিরামপুর)'
    ],
    keyLandmarks: [
      'Dinajpur Sadar Hospital Mor',
      'Maldah Potti Market',
      'Parbatipur Railway Junction',
      'Fulbari Bazar Commercial Hub',
      'Birganj Bus Stand',
      'Hili Land Port Area',
      'Dinajpur Rajbari Area'
    ],
    popularSearchesBn: [
      'দিনাজপুর সিসিটিভি টেকনিশিয়ান',
      'দিনাজপুর সিসিটিভি ক্যামেরা দাম',
      'দিনাজপুরে সিসিটিভি ক্যামেরা দোকান',
      'দিনাজপুর সিসিটিভি ক্যামেরা ফিটিং ও মেরামত',
      'পার্বতীপুর সিসিটিভি ক্যামেরা ও টেকনিশিয়ান',
      'ফুলবাড়ী সিসিটিভি ক্যামেরা সার্ভিস',
      'দিনাজপুর আইপি ক্যামেরা ইনস্টলেশন',
      'দিনাজপুর ডিভিআর এনভিআর অনলাইন ভিউ',
      'দিনাজপুর ইন্টারকম টেকনিশিয়ান',
      'দিনাজপুর এক্সেস কন্ট্রোল ও ডোর লক',
      'দিনাজপুর বায়োমেট্রিক হাজিরা মেশিন',
      'দিনাজপুর ইলেকট্রিশিয়ান',
      'দিনাজপুর কম্পিউটার মেরামত ও নেটওয়ার্কিং'
    ],
    popularSearchesEn: [
      'dinagpur cctv technician',
      'Dinajpur CCTV Technician',
      'CCTV Camera Services in Dinajpur',
      'CCTV Camera Services in Dinajpur - Installation & Support',
      'CCTV Camera Price in Dinajpur',
      'Dinajpur CCTV Camera Shop',
      'CCTV Installation Dinajpur',
      'CCTV Repair Dinajpur',
      'Parbatipur CCTV Technician',
      'Fulbari CCTV Service',
      'IP Camera Dinajpur',
      'DVR NVR Online Setup Dinajpur',
      'Dinajpur Intercom Technician',
      'Access Control Dinajpur',
      'Biometric Machine Dinajpur',
      'Dinajpur Electrician',
      'Computer Technician Dinajpur'
    ],
    productSalesItems: buildDistrictProductSales(
      'dinajpur', 
      'Dinajpur', 
      'দিনাজপুর', 
      'দিনাজপুর সদর, পার্বতীপুর, ফুলবাড়ী ও বীরগঞ্জের রাইস মিল, ব্যবসা প্রতিষ্ঠান ও বাসাবাড়ির জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'dinajpur', 
      'Dinajpur', 
      'দিনাজপুর', 
      'দিনাজপুর জেলার অটো রাইস মিল, কোল্ড স্টোরেজ ও অফিসে অভিজ্ঞ টেকনিশিয়ান দ্বারা সরাসরি অন-সাইট সেবা প্রদান করা হয়।'
    ),
    servicesOffered: [
      {
        title: 'CCTV Camera Installation & Repair',
        bengaliTitle: 'দিনাজপুর সিসিটিভি টেকনিশিয়ান, ক্যামেরা ফিটিং ও মেরামত',
        description: 'দিনাজপুর সদর, পার্বতীপুর, ফুলবাড়ী ও বীরগঞ্জের বাসাবাড়ি, অটো রাইস মিল, দোকান ও গোডাউনে উন্নত মানের সিসিটিভি ক্যামেরা স্থাপন ও টেকনিশিয়ান মেরামত সার্ভিস।',
        features: ['ধুলোবালি ও বৃষ্টি প্রতিরোধী মেটাল বডি ক্যামেরা', 'লং-ডিসট্যান্স নাইট ভিশন', 'দক্ষ টেকনিশিয়ান দ্বারা ওয়্যারিং']
      },
      {
        title: 'IP Camera & Smart WiFi Setup',
        bengaliTitle: 'দিনাজপুর আইপি ক্যামেরা ও ওয়াইফাই সিকিউরিটি সেটআপ',
        description: 'উচ্চ রেজোলিউশনের ফুল এইচডি ও ৪কে আইপি ক্যামেরা, পিটিজেড ওয়াইফাই ক্যামেরা ইনস্টলেশন এবং মোবাইল অ্যাপ লাইভ স্ট্রিমিং কনফিগারেশন।',
        features: ['মোবাইলে ৩৬০ ডিগ্রি রোটেটিং ভিউ', 'মেমোরি কার্ড ও NVR সেন্ট্রাল রেকর্ডিং', 'স্মার্ট মোশন ট্র্যাকিং']
      },
      {
        title: 'DVR / NVR Mobile View & Password Reset',
        bengaliTitle: 'দিনাজপুর ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ সেটআপ',
        description: 'Hikvision, Dahua, Jovision ডিভিআরে ইন্টারনেট সংযুক্ত করে দেশ-বিদেশের যেকোনো স্থান থেকে লাইভ মনিটরিং এবং ভুলে যাওয়া পাসওয়ার্ড রিসেট।',
        features: ['ক্লাউড P2P ও স্ট্যাটিক আইপি সেটআপ', 'মোবাইলে নোটিফিকেশন অ্যালার্ট', 'হার্ডডিস্ক রেকর্ডিং অপটিমাইজেশন']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'দিনাজপুর ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সেটআপ',
        description: 'দিনাজপুরের হাসপাতাল, ক্লিনিক, বহুতল আবাসিক ভবন ও বাণিজ্যিক অফিসের জন্য নির্ভরযোগ্য ইন্টারকম ও টেলিফোন পিবিএক্স নেটওয়ার্কিং।',
        features: ['স্পষ্ট ভয়েস কমিউনিকেশন', 'মাল্টি-লাইন সুইচিং', 'ক্যাবল লে-আউট ও রক্ষণাবেক্ষণ']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'দিনাজপুর এক্সেস কন্ট্রোল ও সিকিউরিটি ডোর লক',
        description: 'অফিস, ল্যাব ও প্রতিষ্ঠানে অননুমোদিত প্রবেশ ঠেকাতে ফিঙ্গারপ্রিন্ট, RFID কার্ড এবং ম্যাগনেটিক ইলেকট্রিক ডোর লক সলিউশন।',
        features: ['স্ট্রং ম্যাগনেটিক হোল্ডিং ফোর্স', 'পুশ এক্সিট বাটন', 'পাওয়ার ব্যাকআপ সাপোর্ট']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'দিনাজপুর বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার',
        description: 'দিনাজপুরের স্কুল, কলেজ, মাদ্রাসা, মিল ও কারখানার কর্মচারী উপস্থিতি ট্র্যাক করতে আধুনিক ফিঙ্গারপ্রিন্ট ও ফেস ডিটেকশন মেশিন স্থাপন।',
        features: ['স্বয়ংক্রিয় টাইম ট্র্যাকিং', 'বাংলা এক্সেল রিপোর্ট তৈরি', 'ব্যবহারকারী ট্রেনিং ও ইনস্টলেশন']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'দিনাজপুর ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা বাসা, কারখানা ও রাইস মিলের নিরাপদ বিদ্যুৎ ওয়্যারিং, সার্কিট ব্রেকার, ডিবি বক্স ও ফল্ট মেরামত।',
        features: ['শর্ট সার্কিট প্রটেকশন', 'আর্থিং ও ফেজ ব্যালেন্স', 'জরুরি ইলেকট্রিক্যাল ফল্ট সমাধান']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'দিনাজপুর কম্পিউটার টেকনিশিয়ান ও নেটওয়ার্কিং সার্ভিস',
        description: 'অফিস ও প্রতিষ্ঠানে দ্রুতগতির Cat6 লোকাল এরিয়া নেটওয়ার্ক (LAN), রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার মেরামত।',
        features: ['হাই-স্পিড LAN নেটওয়ার্ক', 'RJ45 ক্যাবল ক্ল্যাম্পিং ও টেস্ট', 'উইন্ডোজ ও হার্ডওয়্যার পার্টস রিপ্লেসমেন্ট']
      }
    ],
    faqs: [
      {
        question: 'দিনাজপুর সদরে কি হোম ডেলিভারি ও অন-সাইট টেকনিশিয়ান পাওয়া যায়?',
        answer: 'হ্যাঁ, দিনাজপুর সদর, পার্বতীপুর, বীরগঞ্জ ও ফুলবাড়ী সহ সকল উপজেলায় আমাদের টেকনিশিয়ান টিম গিয়ে সম্পূর্ণ ইনস্টলেশন ও ফিটিং সম্পন্ন করে দিয়ে আসে।'
      },
      {
        question: 'দিনাজপুরের রাইস মিল বা বড় ব্যবসার জন্য কেমন ক্যামেরা ভালো?',
        answer: 'আমরা সাধারণত ফুল মেটাল বডি, IP67 ওয়াটারপ্রুফ এবং লং-ডিসট্যান্স নাইট ভিশন সম্পন্ন 3MP বা 5MP বুলেট ক্যামেরা এবং NVR নেটওয়ার্ক সমাধান সুপারিশ করি।'
      },
      {
        question: 'দিনাজপুর থেকে কীভাবে অর্ডার ও টেকনিশিয়ান বুক করব?',
        answer: 'ওয়েবসাইটে থাকা প্রোডাক্টটি সরাসরি কার্টে যোগ করে অথবা আমাদের হেল্পলাইন 01790139333 ও 01865321530 নম্বরে সরাসরি কল বা হোয়াটসঅ্যাপে যোগাযোগ করে সহজেই বুক করা যায়।'
      },
      {
        question: 'পুরোনো ক্যামেরার অনলাইন ভিউ কি চালু করে দেওয়া সম্ভব?',
        answer: 'হ্যাঁ, ডিভিআর যে ব্র্যান্ডেরই হোক না কেন, পাসওয়ার্ড রিসেট করে মোবাইলে সার্বক্ষণিক লাইভ ভিউ চালু করে দেওয়া আমাদের নিয়মিত সেবা।'
      }
    ],
    deliveryTimeline: 'দিনাজপুর সদরে ২৪ ঘণ্টার মধ্যে হোম ডেলিভারি ও টেকনিশিয়ান শিডিউল।',
    onSiteSupportNote: 'বৃহৎ প্রজেক্ট বা একাধিক ক্যামেরা ফিটিংয়ে পূর্বনির্ধারিত শিডিউলে অন-সাইট টিম উপস্থিত হয়। হেল্পলাইন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Hard Disk (HDD)', 'Other Accessories']
  },

  gaibandha: {
    slug: 'gaibandha',
    enName: 'Gaibandha',
    bnName: 'গাইবান্ধা',
    title: 'Gaibandha CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & certified CCTV technician in Gaibandha, Gobindaganj & Palashbari. IP camera installation, DVR/NVR online view, access control, intercom & electrician across Gaibandha.',
    h1: 'Gaibandha CCTV Camera Sales, Installation & Technician Service (গাইবান্ধা সিসিটিভি ক্যামেরা ও সিকিউরিটি সলিউশন)',
    tagline: 'Complete Security Camera Solutions, Accessories & IT Networking in Gaibandha',
    bengaliTagline: 'গাইবান্ধা জেলা ও গোবিন্দগঞ্জ-পলাশবাড়ীতে পেশাদার সিসিটিভি ক্যামেরা ইনস্টলেশন, মেরামত ও অন-সাইট টেকনিক্যাল সার্ভিস',
    aboutDistrict: 'গাইবান্ধা সদর, গোবিন্দগঞ্জ, পলাশবাড়ী ও সুন্দরগঞ্জ অঞ্চলে ব্যবসা প্রতিষ্ঠান, সুপারশপ, কোল্ড স্টোরেজ, ব্যাংক, এনজিও ও বাসাবাড়ির জন্য নির্ভরযোগ্য সিকিউরিটি ক্যামেরা ও আইটি সলিউশন প্রদান করছে শামীম টেক সলিউশন। আমাদের দক্ষ টেকনিশিয়ান টিম সহজে গাইবান্ধার যেকোনো প্রান্তে সেবা পৌঁছে দিতে প্রস্তুত।',
    upazilas: [
      'Gaibandha Sadar (গাইবান্ধা সদর)',
      'Gobindaganj (গোবিন্দগঞ্জ)',
      'Palashbari (পলাশবাড়ী)',
      'Sundarganj (সুন্দরগঞ্জ)',
      'Sadullapur (সাদুল্লাপুর)',
      'Saghata (সাঘাটা)',
      'Phulchhari (ফুলছড়ি)'
    ],
    keyLandmarks: [
      'Gaibandha D-B Road Market',
      'Old Hospital Mor Area',
      'Gobindaganj Choumatha Mor',
      'Palashbari Bus Stand Commercial Area',
      'Sundarganj Bazar',
      'Sadullapur Rail Gate'
    ],
    popularSearchesBn: [
      'গাইবান্ধা সিসিটিভি টেকনিশিয়ান',
      'গাইবান্ধা সিসিটিভি ক্যামেরা দাম',
      'গোবিন্দগঞ্জ সিসিটিভি ক্যামেরা দোকান',
      'পলাশবাড়ী সিসিটিভি সার্ভিস',
      'গাইবান্ধা সিসিটিভি ক্যামেরা ফিটিং ও মেরামত',
      'গাইবান্ধা আইপি ক্যামেরা ফিটিং',
      'গাইবান্ধা ডিভিআর অনলাইন ভিউ',
      'গাইবান্ধা ইন্টারকম টেকনিশিয়ান',
      'গাইবান্ধা এক্সেস কন্ট্রোল',
      'গাইবান্ধা বায়োমেট্রিক মেশিন',
      'গাইবান্ধা ইলেকট্রিশিয়ান',
      'গাইবান্ধা কম্পিউটার টেকনিশিয়ান'
    ],
    popularSearchesEn: [
      'Gaibandha CCTV Technician',
      'CCTV Camera Services in Gaibandha',
      'CCTV Camera Price in Gaibandha',
      'Gaibandha CCTV Camera Shop',
      'Gobindaganj CCTV Service',
      'Palashbari CCTV Technician',
      'Gaibandha CCTV Installation',
      'IP Camera Gaibandha',
      'DVR NVR Online Setup Gaibandha',
      'Gaibandha Intercom Technician',
      'Access Control Gaibandha',
      'Biometric Machine Gaibandha',
      'Gaibandha Electrician',
      'Computer Repair Gaibandha'
    ],
    productSalesItems: buildDistrictProductSales(
      'gaibandha', 
      'Gaibandha', 
      'গাইবান্ধা', 
      'গাইবান্ধা সদর, গোবিন্দগঞ্জ ও পলাশবাড়ীর কোল্ড স্টোরেজ, দোকান ও গৃহস্থালির জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'gaibandha', 
      'Gaibandha', 
      'গাইবান্ধা', 
      'রংপুর-বগুড়া মহাসড়ক সংলগ্ন গাইবান্ধা সদর, গোবিন্দগঞ্জ ও পলাশবাড়ীতে সরাসরি টেকনিশিয়ান টিম উপস্থিত হয়।'
    ),
    servicesOffered: [
      {
        title: 'CCTV Camera Installation & Maintenance',
        bengaliTitle: 'গাইবান্ধা সিসিটিভি টেকনিশিয়ান ও ক্যামেরা ফিটিং সার্ভিস',
        description: 'গাইবান্ধা সদর, গোবিন্দগঞ্জ ও পলাশবাড়ীতে বাড়ি, দোকান, শপিং মল ও গুদামে পরিচ্ছন্ন ওয়্যারিং সহ সিসিটিভি ক্যামেরা স্থাপন ও টেকনিশিয়ান মেরামত।',
        features: ['অরিজিনাল ভিডিও ব্যালুন ও এডাপ্টার', 'শর্ট সার্কিট সেফটি ব্যবস্থা', 'পরিপাটি পাইপিং ও ক্যাবলিং']
      },
      {
        title: 'IP Camera & Wi-Fi Dome Setup',
        bengaliTitle: 'গাইবান্ধা আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা সেটআপ',
        description: 'বাসাবাড়ি ও দোকানে সহজে লাগানোর উপযোগী পিটিজেড ওয়াইফাই ক্যামেরা ও এনভিআর ভিত্তিক সেন্ট্রাল আইপি ক্যামেরা কনফিগারেশন।',
        features: ['মোবাইলে ফুল এইচডি লাইভ ভিডিও', 'মোশন অ্যালার্ম নোটিফিকেশন', 'সহজ মেমোরি কার্ড ব্যাকআপ']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'গাইবান্ধা ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ সেটআপ',
        description: 'ডিভিআর/এনভিআর ইন্টারনেটে কানেক্ট করে বিশ্বের যেকোনো প্রান্ত থেকে মোবাইলে লাইভ দেখার ব্যবস্থা এবং লক হওয়া ডিভিআর পাসওয়ার্ড আনলক।',
        features: ['মোবাইলে ফুল টাইম লাইভ ভিউ', 'হার্ডডিস্ক হেলথ চেক', 'মাল্টি-ক্যামেরা স্প্লিট ডিসপ্লে']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'গাইবান্ধা ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সিস্টেম',
        description: 'গাইবান্ধার ক্লিনিক, হাসপাতাল, অফিস ও বহুতল ভবনে স্পষ্ট ভয়েস যোগাযোগের জন্য ইন্টারকম ওয়্যারিং ও হ্যান্ডসেট ইনস্টলেশন।',
        features: ['ক্রিস্টাল ক্লিয়ার অডিও', 'রুম-টু-রুম ইন্টারকম কলিং', 'দ্রুত ট্রাবলশুটিং']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'গাইবান্ধা এক্সেস কন্ট্রোল ও ম্যাগনেটিক ডোর লক',
        description: 'অফিস ও গুরুত্বপূর্ণ কক্ষের দরজায় বায়োমেট্রিক ফিঙ্গারপ্রিন্ট, পাসকোড বা আরএফআইডি কার্ড নিয়ন্ত্রিত লক স্থাপন।',
        features: ['ম্যাগনেটিক লক সুরক্ষা', 'অটো লকিং ফিচার', 'ইমার্জেন্সি ম্যানুয়াল কি']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'গাইবান্ধা বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার',
        description: 'গাইবান্ধার স্কুল, কলেজ, মাদ্রাসা ও এনজিও অফিসে কর্মকর্তা-কর্মচারীদের ডিজিটাল উপস্থিতি নথিভুক্ত করার ব্যবস্থা।',
        features: ['হাজিরা সফটওয়্যার ট্রেনিং', 'কম্পিউটার সংযোগ ও এক্সেল রিপোর্ট', 'দীর্ঘস্থায়ী পারফরম্যান্স']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'গাইবান্ধা ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'পেশাদার ইলেকট্রিশিয়ান দ্বারা নতুন ভবনের ওয়্যারিং, শর্ট সার্কিট সমাধান, সার্কিট ব্রেকার ও লাইটিং ইন্সটলেশন।',
        features: ['সুরক্ষিত আর্থিং সংযোগ', 'ভোল্টেজ চেক ও লোড ডিস্ট্রিবিউশন', 'জরুরি মেরামতি সেবা']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'গাইবান্ধা কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'গাইবান্ধা জেলায় অফিস নেটওয়ার্ক ক্যাবলিং, রাউটার সেটআপ ও ডেস্কটপ পিসি মেরামত সার্ভিস।',
        features: ['গিগাবিট লোকাল নেটওয়ার্ক', 'Cat6 ক্যাবলিং', 'পিসি হার্ডওয়্যার আপগ্রেড ও উইন্ডোজ ইনস্টল']
      }
    ],
    faqs: [
      {
        question: 'গোবিন্দগঞ্জ বা পলাশবাড়ীতে কি অন-সাইট টেকনিশিয়ান এসে কাজ করে দেয়?',
        answer: 'হ্যাঁ, গোবিন্দগঞ্জ, পলাশবাড়ী ও গাইবান্ধা সদরে আমাদের টেকনিশিয়ান টিম সরেজমিনে গিয়ে ক্যামেরা ফিটিং, ওয়্যারিং এবং ডিভিআর সেটআপের কাজ সম্পন্ন করে দেয়।'
      },
      {
        question: 'বিদ্যুৎ চলে গেলে কি সিসিটিভি ক্যামেরা সচল রাখা সম্ভব?',
        answer: 'হ্যাঁ, আমরা সিসিটিভি ক্যামেরার জন্য স্পেশাল মিনি ইউপিএস বা ইনভার্টার ব্যাকআপ সরবরাহ করি, যার ফলে লোডশেডিংয়ের সময়ও একটানা ৩-৬ ঘণ্টা রেকর্ডিং অব্যাহত থাকে।'
      },
      {
        question: 'গাইবান্ধা থেকে টেকনিশিয়ানের সাথে কীভাবে যোগাযোগ করব?',
        answer: 'আমাদের হটলাইন 01790139333 অথবা 01865321530 নম্বরে সরাসরি কল দিলে আমাদের টেকনিক্যাল টিম তাৎক্ষণিক শিডিউল নিশ্চিত করে।'
      }
    ],
    deliveryTimeline: 'গাইবান্ধা জেলায় ২৪ ঘণ্টার মধ্যে ডেলিভারি ও দ্রুত টেকনিশিয়ান শিডিউলিং।',
    onSiteSupportNote: 'রংপুর-বগুড়া মহাসড়ক সংলগ্ন গোবিন্দগঞ্জ ও পলাশবাড়ীতে দ্রুততম সময়ে সেবা প্রদান করা হয়। হেল্পলাইন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Other Accessories']
  },

  kurigram: {
    slug: 'kurigram',
    enName: 'Kurigram',
    bnName: 'কুড়িগ্রাম',
    title: 'Kurigram CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & expert CCTV technician in Kurigram, Ulipur & Nageshwari. Original security cameras, DVR/NVR online view, PABX intercom, access control door locks and electrical technician.',
    h1: 'Kurigram CCTV Camera Sales, Security Equipment & Technical Services (কুড়িগ্রাম সিসিটিভি ক্যামেরা ও আইটি সার্ভিস)',
    tagline: 'Trusted CCTV Camera Supplier & Expert Field Technician for Kurigram District',
    bengaliTagline: 'কুড়িগ্রাম জেলা, উলিপুর ও নাগেশ্বরীতে অরিজিনাল সিকিউরিটি ক্যামেরা, ডিভিআর অনলাইন ভিউ ও দক্ষ অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'কুড়িগ্রাম সদর, উলিপুর, রাজারহাট, নাগেশ্বরী ও চিলমারী সহ পুরো জেলায় আমরা উন্নত মানের সিসিটিভি ক্যামেরা, আইপি ক্যামেরা ও সিকিউরিটি এক্সেসরিজ পৌঁছে দিচ্ছি। রংপুর বিভাগীয় সেন্ট্রাল হাবের অত্যন্ত নিকটে অবস্থিত হওয়ায় তিস্তা ব্রিজ সংলগ্ন কুড়িগ্রামের গ্রাহকরা আমাদের কাছ থেকে দ্রুততম অন-সাইট টেকনিশিয়ান সার্ভিস উপভোগ করতে পারেন।',
    upazilas: [
      'Kurigram Sadar (কুড়িগ্রাম সদর)',
      'Ulipur (উলিপুর)',
      'Nageshwari (নাগেশ্বরী)',
      'Rajarhat (রাজারহাট)',
      'Chilmari (চিলমারী)',
      'Bhurungamari (ভুরুঙ্গামারী)',
      'Phulbari (ফুলবাড়ী)',
      'Rowmari (রৌমারী)',
      'Char Rajibpur (চর রাজিবপুর)'
    ],
    keyLandmarks: [
      'Kurigram Ghoshpara Mor',
      'Zilla Parishad Market Area',
      'Ulipur Bazar Central Mor',
      'Nageshwari Bus Stand',
      'Rajarhat Rail Station Area',
      'Teesta Bridge Approach'
    ],
    popularSearchesBn: [
      'কুড়িগ্রাম সিসিটিভি টেকনিশিয়ান',
      'কুড়িগ্রাম সিসিটিভি ক্যামেরা দাম',
      'উলিপুর সিসিটিভি ক্যামেরা দোকান',
      'নাগেশ্বরী সিসিটিভি ক্যামেরা সার্ভিস',
      'কুড়িগ্রাম সিসিটিভি ক্যামেরা ফিটিং ও মেরামত',
      'কুড়িগ্রাম আইপি ক্যামেরা ইনস্টলেশন',
      'কুড়িগ্রাম ডিভিআর পাসওয়ার্ড রিসেট ও অনলাইন ভিউ',
      'কুড়িগ্রাম ইন্টারকম টেকনিশিয়ান',
      'কুড়িগ্রাম এক্সেস কন্ট্রোল',
      'কুড়িগ্রাম বায়োমেট্রিক হাজিরা মেশিন',
      'কুড়িগ্রাম ইলেকট্রিশিয়ান',
      'কুড়িগ্রাম কম্পিউটার মেরামত'
    ],
    popularSearchesEn: [
      'Kurigram CCTV Technician',
      'CCTV Camera Services in Kurigram',
      'CCTV Camera Price in Kurigram',
      'Kurigram CCTV Camera Shop',
      'Ulipur CCTV Service',
      'Nageshwari CCTV Technician',
      'Kurigram CCTV Installation',
      'CCTV Repair Kurigram',
      'IP Camera Kurigram',
      'DVR NVR Online Setup Kurigram',
      'Kurigram Intercom Technician',
      'Access Control Kurigram',
      'Biometric Machine Kurigram',
      'Kurigram Electrician',
      'Computer Technician Kurigram'
    ],
    productSalesItems: buildDistrictProductSales(
      'kurigram', 
      'Kurigram', 
      'কুড়িগ্রাম', 
      'কুড়িগ্রাম সদর, উলিপুর, রাজারহাট ও নাগেশ্বরীর দোকান, এনজিও ও বাসাবাড়ির জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'kurigram', 
      'Kurigram', 
      'কুড়িগ্রাম', 
      'হারাগাছ টেকনিক্যাল হাব থেকে তিস্তা নদীর ওপারে কুড়িগ্রামের যেকোনো স্পটে দ্রুততম টেকনিশিয়ান সার্ভিস পৌঁছে দেওয়া হয়।'
    ),
    servicesOffered: [
      {
        title: 'CCTV Camera Installation & Maintenance',
        bengaliTitle: 'কুড়িগ্রাম সিসিটিভি টেকনিশিয়ান ও ক্যামেরা ফিটিং সার্ভিস',
        description: 'কুড়িগ্রাম সদর, উলিপুর ও নাগেশ্বরীর ব্যবসা প্রতিষ্ঠান, গোডাউন ও বাসাবাড়ির জন্য দীর্ঘস্থায়ী ক্যামেরা ওয়্যারিং ও মেরামত।',
        features: ['অরিজিনাল ব্র্যান্ড ক্যামেরা', 'নাইট ভিশন ও কালার ভিশন', 'ফ্রি ট্রাবলশুটিং সাপোর্ট']
      },
      {
        title: 'IP Camera & Smart WiFi Setup',
        bengaliTitle: 'কুড়িগ্রাম আইপি ক্যামেরা ও ওয়াইফাই ক্যামেরা ইনস্টলেশন',
        description: 'মোবাইল থেকে সরাসরি ভয়েস ও ভিডিও নিয়ন্ত্রণের জন্য স্মার্ট ওয়াইফাই এবং PoE আইপি ক্যামেরা সিস্টেম।',
        features: ['৩৬০ ডিগ্রি প্যান ও টিল্ট', 'মোবাইল অ্যাপ নোটিফিকেশন', 'স্মার্ট মোশন ট্র্যাকিং']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'কুড়িগ্রাম ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ সেটআপ',
        description: 'যেকোনো ব্রডব্যান্ড বা মোবাইল হটস্পটে ডিভিআর কানেক্ট করে মোবাইলে লাইভ দেখার ব্যবস্থা এবং পাসওয়ার্ড রিসেট।',
        features: ['মোবাইলে দূর থেকে লাইভ দেখা', 'হার্ডডিস্ক স্টোরেজ অপটিমাইজেশন', 'হাই-রেজোলিউশন প্লেব্যাক']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'কুড়িগ্রাম ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সিস্টেম',
        description: 'কুড়িগ্রামের বিভিন্ন ক্লিনিক, হোটেল, অফিস ও বহুতল ভবনে ইন্টারকম সংযোগ এবং এক্সটেনশন প্রোগ্রামিং।',
        features: ['ক্লিয়ার ভয়েস কমিউনিকেশন', 'সাশ্রয়ী ক্যাবলিং', 'এক্সটেনশন হ্যান্ডসেট']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'কুড়িগ্রাম এক্সেস কন্ট্রোল ও ডোর লক ইনস্টলেশন',
        description: 'কার্যালয়, দোকান ও গুরুত্বপূর্ণ স্থানে ফিঙ্গারপ্রিন্ট ও ম্যাগনেটিক ডোর লক সিস্টেম স্থাপন।',
        features: ['শক্তিশালী ম্যাগনেটিক লক', 'RFID কার্ড ও পাসওয়ার্ড এক্সেস', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'কুড়িগ্রাম বায়োমেট্রিক হাজিরা মেশিন স্থাপন',
        description: 'কুড়িগ্রামের শিক্ষা প্রতিষ্ঠান ও বাণিজ্যিক অফিসে কর্মকর্তা-কর্মচারীদের ডিজিটাল হাজিরা ট্র্যাকিং।',
        features: ['অটোমেটিক টাইম স্ট্যাম্প', 'এক্সেল ডেটা ব্যাকআপ', 'সহজ সফটওয়্যার অপারেটিং']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'কুড়িগ্রাম ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা বাড়ি ও দোকানের নিরাপদ বিদ্যুৎ ওয়্যারিং, মেইন সুইচ, সার্কিট ব্রেকার ও ফল্ট ফিক্সিং।',
        features: ['শর্ট সার্কিট সেফটি ব্যবস্থা', 'প্রফেশনাল ফিনিশিং', 'জরুরি ইলেকট্রিক্যাল সাপোর্ট']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'কুড়িগ্রাম কম্পিউটার টেকনিশিয়ান ও নেটওয়ার্কিং সার্ভিস',
        description: 'Cat6 LAN ক্যাবলিং, রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ ইনস্টল।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 পাঞ্চিং ও টেস্ট', 'কম্পিউটার হার্ডওয়্যার মেরামত']
      }
    ],
    faqs: [
      {
        question: 'কুড়িগ্রাম সদরে টেকনিশিয়ান পৌঁছাতে কত সময় লাগে?',
        answer: 'হারাগাছ থেকে তিস্তা সড়ক সেতুর ওপারে কুড়িগ্রামের রাজারহাট ও সদর এলাকা অত্যন্ত কাছে হওয়ায় কয়েক ঘণ্টার মধ্যেই টেকনিশিয়ান টিম পৌঁছানো সম্ভব।'
      },
      {
        question: 'কুড়িগ্রামে কি হোম ডেলিভারিতে পণ্য পাওয়ার পর টাকা দেওয়ার সুবিধা আছে?',
        answer: 'হ্যাঁ, কন্ডিশন কুরিয়ারের মাধ্যমে অথবা সরাসরি টেকনিশিয়ান ভিজিটের মাধ্যমে পণ্য দেখে মূল্য পরিশোধের সুবিধা রয়েছে।'
      },
      {
        question: 'কুড়িগ্রামে সার্ভিস পেতে কোন নম্বরে কল করব?',
        answer: 'সরাসরি আমাদের প্রধান হেল্পলাইন 01790139333 অথবা টেকনিশিয়ান হটলাইন 01865321530 নম্বরে কল করে বুক করতে পারেন।'
      }
    ],
    deliveryTimeline: 'কুড়িগ্রাম সদর ও রাজারহাটে একই দিনে; অন্যান্য উপজেলায় ২৪ ঘণ্টার মধ্যে ডেলিভারি।',
    onSiteSupportNote: 'হারাগাছ টেকনিক্যাল হাব থেকে কুড়িগ্রাম সদর ও রাজারহাটে দ্রুততম রেসপন্স প্রদান করা হয়। কল করুন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Other Accessories']
  },

  nilphamari: {
    slug: 'nilphamari',
    enName: 'Nilphamari',
    bnName: 'নীলফামারী',
    title: 'Nilphamari CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & expert CCTV technician in Nilphamari & Saidpur. Best CCTV camera price, IP camera setup, computer LAN network, intercom & door access control with fast on-site technician service.',
    h1: 'Nilphamari & Saidpur CCTV Camera Sales, Installation & IT Networking (নীলফামারী ও সৈয়দপুর সিসিটিভি সার্ভিস)',
    tagline: 'Leading Security Camera Supplier & Commercial Automation Hub for Nilphamari & Saidpur',
    bengaliTagline: 'নীলফামারী জেলা ও বাণিজ্যিক শহর সৈয়দপুরে আধুনিক সিসিটিভি ক্যামেরা, আইপি ক্যামেরা ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'নীলফামারী সদর এবং বাণিজ্যিক নগরী সৈয়দপুরের বৃহৎ কল-কারখানা, শপিং কমপ্লেক্স, এয়ারপোর্ট সংলগ্ন প্রতিষ্ঠান, জলঢাকা ও ডোমারে আধুনিক নজরদারি ব্যবস্থা স্থাপন করছে শামীম টেক সলিউশন। ইন্ডাস্ট্রিয়াল প্রজেক্ট থেকে শুরু করে গৃহস্থালির স্মার্ট ক্যামেরা—সবই পাবেন অফিসিয়াল ওয়ারেন্টি সহ।',
    upazilas: [
      'Saidpur Commercial City (সৈয়দপুর বাণিজ্যিক শহর)',
      'Nilphamari Sadar (নীলফামারী সদর)',
      'Jaldhaka (জলঢাকা)',
      'Domar (ডোমার)',
      'Dimla (ডিমলা)',
      'Kishoreganj (কিশোরগঞ্জ)'
    ],
    keyLandmarks: [
      'Saidpur Shahid Dr. Zikrul Haque Road',
      'Saidpur Rail Gate Commercial Market',
      'Nilphamari Chourangi Mor',
      'Jaldhaka Zero Point Market',
      'Domar Central Bazar',
      'Saidpur Airport Commercial Area'
    ],
    popularSearchesBn: [
      'সৈয়দপুর সিসিটিভি টেকনিশিয়ান',
      'নীলফামারী সিসিটিভি টেকনিশিয়ান',
      'সৈয়দপুর সিসিটিভি ক্যামেরা দাম',
      'নীলফামারী সিসিটিভি ক্যামেরা দোকান',
      'নীলফামারী সিসিটিভি সার্ভিস ও মেরামত',
      'জলঢাকা সিসিটিভি ক্যামেরা',
      'সৈয়দপুর আইপি ক্যামেরা ইনস্টলেশন',
      'নীলফামারী ডিভিআর অনলাইন মোবাইল ভিউ',
      'সৈয়দপুর ইন্টারকম টেকনিশিয়ান',
      'নীলফামারী এক্সেস কন্ট্রোল ও ডোর লক',
      'সৈয়দপুর বায়োমেট্রিক মেশিন',
      'নীলফামারী ইলেকট্রিশিয়ান',
      'সৈয়দপুর কম্পিউটার টেকনিশিয়ান'
    ],
    popularSearchesEn: [
      'Saidpur CCTV Technician',
      'Nilphamari CCTV Technician',
      'CCTV Camera Services in Nilphamari & Saidpur',
      'CCTV Camera Price in Nilphamari',
      'Saidpur CCTV Camera Price',
      'CCTV Camera Shop Saidpur',
      'Nilphamari CCTV Installation',
      'CCTV Repair Saidpur',
      'IP Camera Nilphamari',
      'DVR NVR Online Setup Saidpur',
      'Saidpur Intercom Technician',
      'Access Control Saidpur',
      'Biometric Machine Nilphamari',
      'Saidpur Electrician',
      'Computer Repair Saidpur'
    ],
    productSalesItems: buildDistrictProductSales(
      'nilphamari', 
      'Nilphamari', 
      'নীলফামারী ও সৈয়দপুর', 
      'সৈয়দপুর বাণিজ্যিক শহর, রেলওয়ে এলাকা ও নীলফামারীর কল-কারখানা ও শপিং মলের জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'nilphamari', 
      'Nilphamari', 
      'নীলফামারী ও সৈয়দপুর', 
      'সৈয়দপুর বাণিজ্যিক হাব ও নীলফামারীর যেকোনো শিল্প প্রতিষ্ঠানে অন-সাইট অভিজ্ঞ টিম পাঠানো হয়।'
    ),
    servicesOffered: [
      {
        title: 'Industrial & Factory Surveillance in Saidpur',
        bengaliTitle: 'নীলফামারী ও সৈয়দপুর সিসিটিভি টেকনিশিয়ান ও কারখানা সার্ভিলেন্স',
        description: 'সৈয়দপুর বাণিজ্যিক শহর ও নীলফামারীর কল-কারখানা, শপিং মল ও গুদামের জন্য সেন্ট্রালাইজড এনভিআর ও মাল্টি-ক্যামেরা ক্যাবলিং ও মেরামত সেবা।',
        features: ['PoE গিগাবিট সুইচ নেটওয়ার্ক', 'মেটাল বডি হেভি-ডিউটি ক্যামেরা', 'কন্ট্রোল রুম মনিটরিং সেটআপ']
      },
      {
        title: 'IP Camera & Wi-Fi CCTV Solutions',
        bengaliTitle: 'নীলফামারী আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'বাসাবাড়ি, দোকান ও কর্পোরেট অফিসের জন্য উচ্চ রেজোলিউশনের আইপি ক্যামেরা এবং ওয়াইফাই রোটেটিং ক্যামেরা সেটআপ।',
        features: ['ফুল এইচডি ক্লিয়ার নাইট ভিশন', 'মোবাইল লাইভ স্ট্রিমিং', 'স্মার্ট টু-ওয়ে অডিও ইন্টারকম']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'সৈয়দপুর ও নীলফামারী ডিভিআর/এনভিআর অনলাইন মোবাইল ভিউ',
        description: 'ডিভিআর/এনভিআর অনলাইনে যুক্ত করে মোবাইল বা কম্পিউটারে দূর থেকে লাইভ দেখা ও পাসওয়ার্ড রিসেট।',
        features: ['মোবাইলে লাইভ ভিডিও', 'রেকর্ডিং হার্ডডিস্ক হেলথ চেক', 'মোশন অ্যালার্ম পুশ']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'সৈয়দপুর ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সিস্টেম',
        description: 'সৈয়দপুর ও নীলফামারীর হাসপাতাল, আবাসিক অ্যাপার্টমেন্ট ও বাণিজ্যিক অফিসে পূর্ণাঙ্গ ইন্টারকম ওয়্যারিং।',
        features: ['স্পষ্ট ভয়েস লাইন', 'এক্সটেনশন ডায়ালিং', 'জরুরি ফল্ট মেরামত']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'নীলফামারী এক্সেস কন্ট্রোল ও ম্যাগনেটিক ডোর লক',
        description: 'ব্যাংক, শোরুম ও কারখানার সার্ভার রুমে ফিঙ্গারপ্রিন্ট বা আরএফআইডি নিয়ন্ত্রিত স্বয়ংক্রিয় লক স্থাপন।',
        features: ['হেভি-ডিউটি ম্যাগনেটিক লক', 'অটো ক্লোজিং ব্যবস্থা', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'নীলফামারী বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার',
        description: 'সৈয়দপুরের মিল-কারখানা ও নীলফামারীর শিক্ষা প্রতিষ্ঠানে কর্মকর্তাদের ডিজিটাল উপস্থিতি ও টাইম ট্র্যাকিং।',
        features: ['ফিঙ্গারপ্রিন্ট ও ফেস আইডি', 'এক্সেল হাজিরা রিপোর্ট', 'সহজ বাংলা ট্রেনিং']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'নীলফামারী ও সৈয়দপুর ইলেকট্রিশিয়ান ওয়্যারিং সার্ভিস',
        description: 'পেশাদার ইলেকট্রিশিয়ান দ্বারা কারখানা, দোকান ও বাসাবাড়ির নিরাপদ বিদ্যুৎ সংযোগ, ডিবি বক্স ও সার্কিট ব্রেকার ওয়্যারিং।',
        features: ['শর্ট সার্কিট প্রতিরোধ', 'আর্থিং ও নিউট্রাল টেস্ট', 'ইলেকট্রিক্যাল সেফটি অডিট']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'সৈয়দপুর কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'স্ট্রাকচার্ড Cat6 কেবলিং, রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'রাউটার ও সার্ভার র্যাক সেটআপ', 'কম্পিউটার হার্ডওয়্যার মেরামত']
      }
    ],
    faqs: [
      {
        question: 'সৈয়দপুর বাণিজ্যিক শহরে কি বড় প্রজেক্টের কাজ করা হয়?',
        answer: 'হ্যাঁ, সৈয়দপুরের বিভিন্ন কারখানা, শোরুম ও বহুতল ভবনে আমরা প্রফেশনাল ক্যাবলিং, PoE NVR এবং একাধিক মনিটর সেটআপের প্রজেক্ট সফলভাবে সম্পন্ন করে আসছি।'
      },
      {
        question: 'নীলফামারী সদরে পণ্য কীভাবে পাওয়া যাবে?',
        answer: 'ওয়েবসাইটে অর্ডার প্লেস করলে অথবা আমাদের সাথে ফোনে কথা বলে সরাসরি কুরিয়ার বা আমাদের টেকনিশিয়ান মারফত নীলফামারীর যেকোনো স্থানে হোম ডেলিভারি পাওয়া যায়।'
      },
      {
        question: 'টেকনিশিয়ানকে সরাসরি কল করার নম্বর কী?',
        answer: 'আমাদের প্রধান অফিসিয়াল নম্বর 01790139333 এবং সরাসরি টেকনিশিয়ান নম্বর 01865321530 এ যেকোনো সময় কল করতে পারেন।'
      }
    ],
    deliveryTimeline: 'সৈয়দপুর ও নীলফামারী সদরে ২৪ ঘণ্টার মধ্যে ডেলিভারি ও অন-সাইট সেবা।',
    onSiteSupportNote: 'সৈয়দপুরের বাণিজ্যিক অঞ্চলে নিয়মিত টেকনিক্যাল ভিজিট সম্পন্ন করা হয়। হেল্পলাইন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Hard Disk (HDD)', 'Other Accessories']
  },

  lalmonirhat: {
    slug: 'lalmonirhat',
    enName: 'Lalmonirhat',
    bnName: 'লালমনিরহাট',
    title: 'Lalmonirhat CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services in Lalmonirhat | Installation & Support. Professional CCTV technician in Lalmonirhat, Patgram & Burimari. High-definition security cameras, IP cameras, DVR/NVR online view & intercom.',
    h1: 'Lalmonirhat CCTV Camera Sales, Installation & Technician Service (লালমনিরহাট সিসিটিভি ক্যামেরা ও টেকনিক্যাল সলিউশন)',
    tagline: 'Authentic Security Cameras, Border Port Surveillance & Electrical Technical Services',
    bengaliTagline: 'লালমনিরহাট জেলা, পাটগ্রাম ও বুড়িমারী স্থলবন্দর অঞ্চলে নির্ভরযোগ্য সিসিটিভি ক্যামেরা বিক্রয়, ইনস্টলেশন ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'লালমনিরহাট সদর, আদিতমারী, কালীগঞ্জ, হাতীবান্ধা, পাটগ্রাম ও বুড়িমারী স্থলবন্দর সংলগ্ন ব্যবসা ও বাসাবাড়ির সুরক্ষায় আমরা সার্বক্ষণিক টেকনিক্যাল সাপোর্ট দিয়ে আসছি। রংপুর বিভাগীয় সেন্ট্রাল হাব থেকে লালমনিরহাট জেলার যেকোনো প্রান্তে ক্যামেরা বিক্রি ও তাৎক্ষণিক ফিটিং সেবা নিশ্চিত করে শামীম টেক সলিউশন।',
    upazilas: [
      'Lalmonirhat Sadar (লালমনিরহাট সদর)',
      'Aditmari (আদিতমারী)',
      'Kaliganj (কালীগঞ্জ)',
      'Hatibandha (হাতীবান্ধা)',
      'Patgram (পাটগ্রাম)',
      'Burimari Land Port Area (বুড়িমারী স্থলবন্দর অঞ্চল)'
    ],
    keyLandmarks: [
      'Lalmonirhat Mission Mor Commercial Area',
      'BDR Gate Area',
      'Kaliganj Tushbhander Bazar',
      'Hatibandha Zero Point',
      'Burimari Land Port Market',
      'Teesta Road Bridge Junction'
    ],
    popularSearchesBn: [
      'লালমনিরহাট সিসিটিভি টেকনিশিয়ান',
      'লালমনিরহাট সিসিটিভি ক্যামেরা দাম',
      'পাটগ্রাম সিসিটিভি ক্যামেরা দোকান ও টেকনিশিয়ান',
      'কালীগঞ্জ সিসিটিভি সার্ভিস',
      'বুড়িমারী সিসিটিভি ক্যামেরা ইনস্টলেশন',
      'লালমনিরহাট সিসিটিভি ক্যামেরা ফিটিং ও মেরামত',
      'লালমনিরহাট আইপি ক্যামেরা',
      'লালমনিরহাট ডিভিআর অনলাইন ভিউ',
      'লালমনিরহাট ইন্টারকম টেকনিশিয়ান',
      'লালমনিরহাট এক্সেস কন্ট্রোল ও ডোর লক',
      'লালমনিরহাট বায়োমেট্রিক হাজিরা মেশিন',
      'লালমনিরহাট ইলেকট্রিশিয়ান',
      'লালমণি ইলেকট্রিশিয়ান',
      'লালমনিরহাট ইলেকট্রিক্যাল ওয়্যারিং ও টেকনিশিয়ান',
      'লালমনিরহাট কম্পিউটার মেরামত'
    ],
    popularSearchesEn: [
      'CCTV Camera Services in Lalmonirhat',
      'CCTV Camera Services in Lalmonirhat | Installation & Support',
      'Lalmonirhat CCTV Technician',
      'CCTV Technician Lalmonirhat',
      'CCTV Camera Price in Lalmonirhat',
      'Lalmonirhat CCTV Camera Shop',
      'Lalmonirhat CCTV Installation',
      'Patgram CCTV Camera Price',
      'Burimari Security Camera',
      'CCTV Service Lalmonirhat',
      'IP Camera Lalmonirhat',
      'DVR NVR Online Setup Lalmonirhat',
      'Lalmonirhat Intercom Technician',
      'Access Control Lalmonirhat',
      'Biometric Machine Lalmonirhat',
      'Lalmonirhat Electrician',
      'Electrician Lalmonirhat',
      'Lalmoni Electrician',
      'Electrician Lalmoni',
      'Computer Technician Lalmonirhat'
    ],
    productSalesItems: buildDistrictProductSales(
      'lalmonirhat', 
      'Lalmonirhat', 
      'লালমনিরহাট', 
      'লালমনিরহাট সদর, পাটগ্রাম ও বুড়িমারী স্থলবন্দরের গোডাউন ও কমার্শিয়াল স্পেসের জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'lalmonirhat', 
      'Lalmonirhat', 
      'লালমনিরহাট', 
      'তিস্তা সড়ক সেতু দিয়ে লালমনিরহাট সদর, কালীগঞ্জ, পাটগ্রাম ও বুড়িমারীতে দ্রুততম টেকনিশিয়ান সেবা দেওয়া হয়।'
    ),
    servicesOffered: [
      {
        title: 'Land Port & Warehouse CCTV Setup',
        bengaliTitle: 'লালমনিরহাট সিসিটিভি টেকনিশিয়ান ও স্থলবন্দর গুদাম সার্ভিলেন্স',
        description: 'বুড়িমারী স্থলবন্দর ও লালমনিরহাটের গুদাম, ট্রাক পার্কিং ও ব্যবসা প্রতিষ্ঠানের জন্য লং নাইট ভিশন ক্যামেরা স্থাপন ও মেরামত সেবা।',
        features: ['ওয়াটারপ্রুফ মেটাল কেসিং', 'ধুলোবালি ও আলো প্রতিরোধী WDR টেকনোলজি', 'লাইভ মোবাইল পর্যবেক্ষণ']
      },
      {
        title: 'IP Camera & Smart WiFi Setup',
        bengaliTitle: 'লালমনিরহাট আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'দোকান ও বাসাবাড়ির সার্বক্ষণিক নজরদারির জন্য ৩৬০ ডিগ্রি রোটেটিং স্মার্ট ওয়াইফাই ও PoE আইপি ক্যামেরা সেটআপ।',
        features: ['স্মার্টফোন লাইভ স্ট্রিমিং', 'টু-ওয়ে অডিও কথোপকথন', 'মেমোরি কার্ড ব্যাকআপ']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'লালমনিরহাট ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ সেটআপ',
        description: 'ডিভিআর/এনভিআরে মোবাইল ভিউ কনফিগারেশন এবং ভুলে যাওয়া যেকোনো মডেলের ডিভিআরের পাসওয়ার্ড তাৎক্ষণিক রিসেট।',
        features: ['মোবাইলে লাইভ দেখার সুবিধা', 'হার্ডডিস্ক রেকর্ডিং অপটিমাইজেশন', 'প্লেব্যাক ব্যাকআপ']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'লালমনিরহাট ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সিস্টেম',
        description: 'লালমনিরহাটের বহুতল ভবন, ক্লিনিক, হোটেল ও বাণিজ্যিক প্রতিষ্ঠানে অভ্যন্তরীণ দ্রুত যোগাযোগের জন্য ইন্টারকম সংযোগ।',
        features: ['ক্লিয়ার ভয়েস কলিং', 'এক্সটেনশন হ্যান্ডসেট সেটআপ', 'নিয়মিত মেইনটেন্যান্স']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'লালমনিরহাট এক্সেস কন্ট্রোল ও সিকিউরিটি ডোর লক',
        description: 'অফিস ও গুরুত্বপূর্ণ কক্ষে ফিঙ্গারপ্রিন্ট ও আরএফআইডি নিয়ন্ত্রিত ম্যাগনেটিক লক স্থাপন।',
        features: ['শক্তিশালী ম্যাগনেটিক লক', 'স্মার্ট এক্সেস কার্ড', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'লালমনিরহাট বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার',
        description: 'কর্মচারী উপস্থিতি নির্ভুলভাবে হিসাব করতে আধুনিক ফিঙ্গারপ্রিন্ট ও ফেস ডিটেকশন মেশিন।',
        features: ['স্বয়ংক্রিয় টাইম ট্র্যাকিং', 'বাংলা এক্সেল রিপোর্ট তৈরি', 'ব্যবহারকারী ট্রেনিং']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'লালমনিরহাট ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'লালমনিরহাটের বাড়ি ও অফিসে শর্ট সার্কিট এড়াতে পেশাদার ইলেকট্রিক্যাল ক্যাবলিং ও বিদ্যুৎ মেরামত।',
        features: ['ভোল্টেজ ড্রপ প্রতিরোধ', 'আর্থিং ও নিউট্রাল চেকিং', 'সুরক্ষিত ডিস্ট্রিবিউশন বক্স']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'লালমনিরহাট কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'অফিস লোকাল নেটওয়ার্ক ওয়্যারিং, রাউটার-সুইচ কনফিগারেশন এবং কম্পিউটার মেরামত সার্ভিস।',
        features: ['Cat6 LAN কেবলিং', 'RJ45 টেস্ট', 'পিসি হার্ডওয়্যার ট্রাবলশুটিং']
      }
    ],
    faqs: [
      {
        question: 'লালমনিরহাটের কালীগঞ্জ বা পাটগ্রামে কি ক্যামেরা লাগিয়ে দেওয়া হয়?',
        answer: 'হ্যাঁ, আমাদের টেকনিশিয়ান টিম লালমনিরহাট সদর সহ কালীগঞ্জ, হাতীবান্ধা, পাটগ্রাম ও বুড়িমারী এলাকায় গিয়ে সরঞ্জাম স্থাপন ও ওয়্যারিং সম্পন্ন করে থাকে।'
      },
      {
        question: 'হারাগাছ থেকে লালমনিরহাটের দূরত্ব কেমন?',
        answer: 'হারাগাছ এবং লালমনিরহাট পাশাপাশি হওয়ায় তিস্তা সড়ক সেতু দিয়ে অত্যন্ত দ্রুততম সময়ে আমাদের টেকনিশিয়ান লালমনিরহাটের যেকোনো স্পটে পৌঁছে যেতে পারে।'
      },
      {
        question: 'টেকনিশিয়ানকে দ্রুত পাওয়ার নম্বর কোনটি?',
        answer: 'আমাদের প্রধান অফিসিয়াল নম্বর 01790139333 অথবা সরাসরি টেকনিশিয়ান নম্বর 01865321530 এ কল করতে পারেন।'
      }
    ],
    deliveryTimeline: 'লালমনিরহাট সদর ও কালীগঞ্জে দ্রুততম ডেলিভারি; বুড়িমারী/পাটগ্রামে ২৪ ঘণ্টার মধ্যে সাপোর্ট।',
    onSiteSupportNote: 'হারাগাছ টেকনিক্যাল হাব থেকে লালমনিরহাটে বিশেষ দ্রুতগতিতে টেকনিশিয়ান প্রেরণের ব্যবস্থা রয়েছে। ফোন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Other Accessories']
  },

  panchagarh: {
    slug: 'panchagarh',
    enName: 'Panchagarh',
    bnName: 'পঞ্চগড়',
    title: 'Panchagarh CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & expert CCTV technician in Panchagarh & Tetulia. Reliable IP security cameras, DVR/NVR online view, access control, intercom & electrician by Shamim Tech Solution.',
    h1: 'Panchagarh CCTV Camera Sales, Security Solutions & Technician Service (পঞ্চগড় সিসিটিভি ক্যামেরা ও অন-সাইট সার্ভিস)',
    tagline: 'Surveillance for Tea Estates, Cold Climate Security & Residential Camera Solutions',
    bengaliTagline: 'পঞ্চগড় জেলা, বোদা ও তেঁতুলিয়ায় উন্নত প্রযুক্তির সিসিটিভি ক্যামেরা, আইপি ক্যামেরা ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'বাংলাদেশের সর্বউত্তরের জেলা পঞ্চগড়, তেঁতুলিয়া, বোদা ও দেবীগঞ্জে চা বাগান, হোটেল-রিসোর্ট, ব্যবসা প্রতিষ্ঠান ও বাসাবাড়ির সুরক্ষায় আমরা সরবরাহ করছি বিশ্বস্ত সিসিটিভি ক্যামেরা। শীতকালীন ঘন কুয়াশা ও বৈরী আবহাওয়াতেও যাতে পরিষ্কার ও ঝকঝকে ফুটেজ পাওয়া যায়, সেজন্য আমাদের কাছে রয়েছে অ্যাডভান্সড স্মার্ট নাইট ভিশন ক্যামেরা।',
    upazilas: [
      'Panchagarh Sadar (পঞ্চগড় সদর)',
      'Boda (বোদা)',
      'Debiganj (দেবীগঞ্জ)',
      'Atwari (আটোয়ারী)',
      'Tetulia Tourist Area (তেঁতুলিয়া পর্যটন অঞ্চল)',
      'Banglabandha Land Port (বাংলাবান্ধা স্থলবন্দর)'
    ],
    keyLandmarks: [
      'Panchagarh Dhakkamara Mor',
      'Cinema Hall Road Market',
      'Boda Bus Stand Commercial Area',
      'Tetulia Kazi Mor Tourist Area',
      'Banglabandha Zero Point Port',
      'Karatoa River Bridge Area'
    ],
    popularSearchesBn: [
      'পঞ্চগড় সিসিটিভি টেকনিশিয়ান',
      'পঞ্চগড় সিসিটিভি ক্যামেরা দাম',
      'তেঁতুলিয়া সিসিটিভি ক্যামেরা দোকান ও টেকনিশিয়ান',
      'বোদা সিসিটিভি টেকনিশিয়ান',
      'পঞ্চগড় সিসিটিভি সার্ভিস ও মেরামত',
      'পঞ্চগড় সিসিটিভি ক্যামেরা ফিটিং',
      'পঞ্চগড় আইপি ক্যামেরা',
      'পঞ্চগড় ডিভিআর অনলাইন ভিউ',
      'পঞ্চগড় ইন্টারকম টেকনিশিয়ান',
      'পঞ্চগড় এক্সেস কন্ট্রোল',
      'পঞ্চগড় বায়োমেট্রিক মেশিন',
      'পঞ্চগড় ইলেকট্রিশিয়ান',
      'পঞ্চগড় কম্পিউটার টেকনিশিয়ান'
    ],
    popularSearchesEn: [
      'Panchagarh CCTV Technician',
      'CCTV Camera Services in Panchagarh & Tetulia',
      'CCTV Camera Price in Panchagarh',
      'Panchagarh CCTV Camera Shop',
      'Tetulia CCTV Service',
      'Boda CCTV Technician',
      'Panchagarh CCTV Installation',
      'IP Camera Panchagarh',
      'DVR NVR Online Setup Panchagarh',
      'Panchagarh Intercom Technician',
      'Access Control Panchagarh',
      'Biometric Machine Panchagarh',
      'Panchagarh Electrician',
      'Computer Repair Panchagarh'
    ],
    productSalesItems: buildDistrictProductSales(
      'panchagarh', 
      'Panchagarh', 
      'পঞ্চগড় ও তেঁতুলিয়া', 
      'পঞ্চগড়, বোদা ও তেঁতুলিয়ার চা বাগান, রিসোর্ট, হোটেল ও ঠান্ডা আবহাওয়ায় নির্ভরযোগ্য নজরদারির জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'panchagarh', 
      'Panchagarh', 
      'পঞ্চগড় ও তেঁতুলিয়া', 
      'চা বাগান, বাংলাবান্ধা স্থলবন্দর ও রিসোর্টের বড় প্রজেক্টে পূর্ব শিডিউলে অন-সাইট অভিজ্ঞ টেকনিশিয়ান পাঠানো হয়।'
    ),
    servicesOffered: [
      {
        title: 'Fog-Resistant Night Vision Camera Setup',
        bengaliTitle: 'পঞ্চগড় সিসিটিভি টেকনিশিয়ান ও কুয়াশা সহনশীল নাইট ভিশন ক্যামেরা',
        description: 'পঞ্চগড় ও তেঁতুলিয়ার ঘন কুয়াশায় কার্যকরী স্মার্ট ডুয়াল ইলুমিনেটর ও কালার নাইট ভিশন ক্যামেরা স্থাপন ও মেরামত সেবা।',
        features: ['অ্যান্টি-ফগ ইমেজ সেন্সর', 'স্মার্ট হোয়াইট লাইট ও আইআর মোড', 'IP67 মেটাল ওয়াটারপ্রুফ']
      },
      {
        title: 'IP Camera & Smart WiFi Setup',
        bengaliTitle: 'পঞ্চগড় আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'চা বাগান, রিসোর্ট, হোটেল ও বাসাবাড়ির সার্বক্ষণিক মোবাইল পর্যবেক্ষণের জন্য স্মার্ট ওয়াইফাই ও আইপি ক্যামেরা সিস্টেম।',
        features: ['মোবাইলে ফুল এইচডি লাইভ ভিডিও', 'টু-ওয়ে অডিও ও সাইরেন', 'SD কার্ড ও NVR ক্লাউড ব্যাকআপ']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'পঞ্চগড় ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ সেটআপ',
        description: 'ডিভিআর/এনভিআরে মোবাইল ভিউ কনফিগারেশন এবং ভুলে যাওয়া যেকোনো মডেলের ডিভিআরের পাসওয়ার্ড দ্রুত রিসেট।',
        features: ['দূর থেকে মোবাইলে লাইভ পর্যবেক্ষণ', 'মোশন ডিটেকশন পুশ অ্যালার্ট', 'হার্ডডিস্ক হেলথ চেক']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'পঞ্চগড় ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সিস্টেম',
        description: 'তেঁতুলিয়ার হোটেল, রিসোর্ট ও পঞ্চগড়ের আবাসিক বা অফিস ভবনে নির্ভরযোগ্য ইন্টারকম টেলিফোন ওয়্যারিং।',
        features: ['ক্লিয়ার ভয়েস কমিউনিকেশন', 'মাল্টি-এক্সটেনশন লাইন', 'টেকনিক্যাল মেইনটেন্যান্স']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'পঞ্চগড় এক্সেস কন্ট্রোল ও ম্যাগনেটিক ডোর লক',
        description: 'অফিস ও গুরুত্বপূর্ণ কক্ষে অননুমোদিত প্রবেশ ঠেকাতে ফিঙ্গারপ্রিন্ট, কার্ড ও রিমোট কন্ট্রোল ডোর লক।',
        features: ['ম্যাগনেটিক ও ড্রপবোল্ট লক', 'এক্সিট বাটন', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'পঞ্চগড় বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার',
        description: 'চা বাগান কারখানা ও শিক্ষা প্রতিষ্ঠানে স্টাফদের উপস্থিতি নিশ্চিত করতে আধুনিক বায়োমেট্রিক ফিঙ্গারপ্রিন্ট মেশিন।',
        features: ['অটো এক্সেল হাজিরা রিপোর্ট', 'সহজ সফটওয়্যার অপারেটিং', 'অন-সাইট ইনস্টলেশন']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'পঞ্চগড় ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা বাসা, কারখানা ও হোটেলের নিরাপদ বিদ্যুৎ ওয়্যারিং, সার্কিট ব্রেকার ও ফল্ট ফিক্সিং।',
        features: ['শর্ট সার্কিট সেফটি ব্যবস্থা', 'সুরক্ষিত আর্থিং সংযোগ', 'জরুরি ইলেকট্রিক্যাল সাপোর্ট']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'পঞ্চগড় কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'Cat6 LAN ক্যাবলিং, রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ ইনস্টল।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 পাঞ্চিং ও টেস্ট', 'কম্পিউটার হার্ডওয়্যার মেরামত']
      }
    ],
    faqs: [
      {
        question: 'পঞ্চগড়ের শীতকালীন কুয়াশায় ক্যামেরা কি পরিষ্কার দেখতে পারে?',
        answer: 'হ্যাঁ, আমরা পঞ্চগড় ও তেঁতুলিয়ার জন্য বিশেষ কালার নাইট ভিশন এবং স্মার্ট ইনফ্রারেড প্রযুক্তিযুক্ত ক্যামেরা সরবরাহ করি, যা ঘন কুয়াশার মাঝেও স্পষ্ট ফুটেজ ধারণ করে।'
      },
      {
        question: 'তেঁতুলিয়া বা বাংলাবান্ধায় পণ্য কীভাবে পৌঁছানো হয়?',
        answer: 'আমরা বিশ্বস্ত কুরিয়ার সার্ভিস এবং প্রজেক্টের প্রয়োজন অনুযায়ী নিজস্ব টেকনিশিয়ান পাঠিয়ে তেঁতুলিয়া ও বাংলাবান্ধায় কাজ সম্পন্ন করে থাকি।'
      },
      {
        question: 'পঞ্চগড়ে টেকনিশিয়ানের সাথে যোগাযোগের নম্বর কোনটি?',
        answer: 'আমাদের হটলাইন 01790139333 এবং সরাসরি টেকনিশিয়ান নম্বর 01865321530 এ কল করে বুক করতে পারেন।'
      }
    ],
    deliveryTimeline: 'পঞ্চগড় জেলায় ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি ও টেকনিশিয়ান শিডিউল।',
    onSiteSupportNote: 'বৃহত্তর প্রজেক্টের ক্ষেত্রে পূর্ব শিডিউল অনুসারে অভিজ্ঞ টেকনিশিয়ান ভিজিট নিশ্চিত করা হয়। ফোন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Hard Disk (HDD)']
  },

  thakurgaon: {
    slug: 'thakurgaon',
    enName: 'Thakurgaon',
    bnName: 'ঠাকুরগাঁও',
    title: 'Thakurgaon CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & certified CCTV technician in Thakurgaon & Pirganj. Best CCTV camera price, IP CCTV systems, DVR/NVR online view, access control, intercom & electrician in Thakurgaon.',
    h1: 'Thakurgaon CCTV Camera Sales, Installation & Security Systems (ঠাকুরগাঁও সিসিটিভি ক্যামেরা ও কম্পিউটার সার্ভিস)',
    tagline: 'Agro-Business Surveillance, Retail Security & Technical Services in Thakurgaon',
    bengaliTagline: 'ঠাকুরগাঁও জেলা, পীরগঞ্জ ও রানীশংকৈলে অরিজিনাল সিসিটিভি ক্যামেরা বিক্রয়, ইনস্টলেশন ও দক্ষ অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'ঠাকুরগাঁও সদর, পীরগঞ্জ, রানীশংকৈল এবং বালিয়াডাঙ্গীতে কোল্ড স্টোরেজ, কৃষিভিত্তিক শিল্পপ্রতিষ্ঠান, স্কুল-কলেজ, শোরুম ও বাসাবাড়ির জন্য নির্ভরযোগ্য সিকিউরিটি সিস্টেম প্রদান করছে শামীম টেক সলিউশন। অরিজিনাল ইকুইপমেন্ট ও পেশাদার টেকনিশিয়ানের মাধ্যমে আমরা নিশ্চিত করি টেকসই নিরাপত্তা।',
    upazilas: [
      'Thakurgaon Sadar (ঠাকুরগাঁও সদর)',
      'Pirganj (পীরগঞ্জ)',
      'Ranisankhail (রানীশংকৈল)',
      'Baliadangi (বালিয়াডাঙ্গী)',
      'Haripur (হরিপুর)'
    ],
    keyLandmarks: [
      'Thakurgaon Chourangi Mor Commercial Hub',
      'Old Bus Stand Market Area',
      'Pirganj Rail Station Road Market',
      'Ranisankhail College Mor',
      'Baliadangi Central Bazar',
      'Thakurgaon Sugar Mill Area'
    ],
    popularSearchesBn: [
      'ঠাকুরগাঁও সিসিটিভি টেকনিশিয়ান',
      'ঠাকুরগাঁও সিসিটিভি ক্যামেরা দাম',
      'পীরগঞ্জ সিসিটিভি ক্যামেরা দোকান ও টেকনিশিয়ান',
      'ঠাকুরগাঁও সিসিটিভি সার্ভিস ও মেরামত',
      'ঠাকুরগাঁও সিসিটিভি ক্যামেরা ফিটিং',
      'ঠাকুরগাঁও আইপি ক্যামেরা',
      'ঠাকুরগাঁও ডিভিআর এনভিআর রিপেয়ার ও অনলাইন ভিউ',
      'ঠাকুরগাঁও ইন্টারকম টেকনিশিয়ান',
      'ঠাকুরগাঁও এক্সেস কন্ট্রোল ও ডোর লক',
      'ঠাকুরগাঁও বায়োমেট্রিক হাজিরা মেশিন',
      'ঠাকুরগাঁও ইলেকট্রিশিয়ান',
      'ঠাকুরগাঁও কম্পিউটার মেরামত'
    ],
    popularSearchesEn: [
      'Thakurgaon CCTV Technician',
      'CCTV Camera Services in Thakurgaon',
      'CCTV Camera Price in Thakurgaon',
      'Thakurgaon CCTV Camera Shop',
      'Pirganj CCTV Camera Service',
      'Ranisankhail CCTV Technician',
      'Thakurgaon CCTV Installation',
      'CCTV Repair Thakurgaon',
      'IP Camera Thakurgaon',
      'DVR NVR Online Setup Thakurgaon',
      'Thakurgaon Intercom Technician',
      'Access Control Thakurgaon',
      'Biometric Machine Thakurgaon',
      'Thakurgaon Electrician',
      'Computer Technician Thakurgaon'
    ],
    productSalesItems: buildDistrictProductSales(
      'thakurgaon', 
      'Thakurgaon', 
      'ঠাকুরগাঁও', 
      'ঠাকুরগাঁও সদর, পীরগঞ্জ ও রানীশংকৈলের কোল্ড স্টোরেজ, অটো মিল ও এগ্রো ফার্মের জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'thakurgaon', 
      'Thakurgaon', 
      'ঠাকুরগাঁও', 
      'ঠাকুরগাঁও জেলা সদর ও উপজেলাগুলোতে কোল্ড স্টোরেজ ও বাণিজ্যিক প্রজেক্টে অভিজ্ঞ টেকনিশিয়ান অন-সাইটে উপস্থিত হয়।'
    ),
    servicesOffered: [
      {
        title: 'Cold Storage & Agro-Farm CCTV Solutions',
        bengaliTitle: 'ঠাকুরগাঁও সিসিটিভি টেকনিশিয়ান ও কোল্ড স্টোরেজ সার্ভিলেন্স',
        description: 'ঠাকুরগাঁওয়ের কোল্ড স্টোরেজ, অটো রাইস মিল ও এগ্রো খামারের জন্য লো-টেম্পারেচার ও ভেজা আবহাওয়ায় টেকসই নজরদারি ও টেকনিশিয়ান মেরামত।',
        features: ['অ্যান্টি-ময়েসচার মেটাল বডি', '২৪ ঘণ্টা একটানা রেকর্ডিং সেটআপ', 'দূরবর্তী স্থান থেকে মোবাইল ভিউ']
      },
      {
        title: 'IP Camera & Smart WiFi Setup',
        bengaliTitle: 'ঠাকুরগাঁও আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'শোরুম, দোকান ও বাসাবাড়ির সার্বক্ষণিক মোবাইল পর্যবেক্ষণের জন্য স্মার্ট ওয়াইফাই ও আইপি ক্যামেরা সিস্টেম।',
        features: ['মোবাইলে ফুল এইচডি লাইভ ভিডিও', 'টু-ওয়ে অডিও ও সাইরেন', 'SD কার্ড ও NVR ক্লাউড ব্যাকআপ']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'ঠাকুরগাঁও ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ সেটআপ',
        description: 'ডিভিআর/এনভিআরে মোবাইল ভিউ কনফিগারেশন এবং ভুলে যাওয়া যেকোনো মডেলের ডিভিআরের পাসওয়ার্ড দ্রুত রিসেট।',
        features: ['দূর থেকে মোবাইলে লাইভ পর্যবেক্ষণ', 'মোশন ডিটেকশন পুশ অ্যালার্ট', 'হার্ডডিস্ক হেলথ চেক']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'ঠাকুরগাঁও ইন্টারকম টেকনিশিয়ান ও পিবিএক্স সিস্টেম',
        description: 'ঠাকুরগাঁওয়ের ক্লিনিক, হাসপাতাল, হোটেল ও বাণিজ্যিক প্রতিষ্ঠানে অভ্যন্তরীণ দ্রুত যোগাযোগের জন্য ইন্টারকম সংযোগ।',
        features: ['ক্লিয়ার ভয়েস কলিং', 'এক্সটেনশন হ্যান্ডসেট সেটআপ', 'নিয়মিত মেইনটেন্যান্স']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'ঠাকুরগাঁও এক্সেস কন্ট্রোল ও ম্যাগনেটিক ডোর লক',
        description: 'অফিস ও গুরুত্বপূর্ণ কক্ষে অননুমোদিত প্রবেশ ঠেকাতে ফিঙ্গারপ্রিন্ট, কার্ড ও রিমোট কন্ট্রোল ডোর লক।',
        features: ['ম্যাগনেটিক ও ড্রপবোল্ট লক', 'এক্সিট বাটন', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'ঠাকুরগাঁও বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার',
        description: 'অফিস ও শিক্ষাপ্রতিষ্ঠানের স্টাফ উপস্থিতি নিশ্চিত করতে আধুনিক ফিঙ্গারপ্রিন্ট ও ফেস মেশিন স্থাপন।',
        features: ['সহজ বাংলা সফটওয়্যার সাপোর্ট', 'এক্সেল ডেটা ব্যাকআপ', 'সুরক্ষিত অ্যাক্সেস কার্ড']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'ঠাকুরগাঁও ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা বাসা, কারখানা ও খামারের নিরাপদ বিদ্যুৎ ওয়্যারিং, সার্কিট ব্রেকার ও ফল্ট ফিক্সিং।',
        features: ['শর্ট সার্কিট সেফটি ব্যবস্থা', 'সুরক্ষিত আর্থিং সংযোগ', 'জরুরি ইলেকট্রিক্যাল সাপোর্ট']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'ঠাকুরগাঁও কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'Cat6 LAN ক্যাবলিং, রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ ইনস্টল।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 পাঞ্চিং ও টেস্ট', 'কম্পিউটার হার্ডওয়্যার মেরামত']
      }
    ],
    faqs: [
      {
        question: 'ঠাকুরগাঁও সদরে কি অন-সাইট ফিটিং পাওয়া যায়?',
        answer: 'হ্যাঁ, ঠাকুরগাঁও সদর, পীরগঞ্জ এবং রানীশংকৈল সহ পুরো জেলায় আমাদের টেকনিশিয়ান অন-সাইটে গিয়ে ক্যামেরা ফিটিং ও কনফিগারেশন কাজ সম্পন্ন করে দিয়ে আসে।'
      },
      {
        question: 'ঠাকুরগাঁওয়ে ক্যামেরা নষ্ট হলে সার্ভিসিংয়ের কী ব্যবস্থা?',
        answer: 'যেকোনো কারিগরি সমস্যায় আমাদের হটলাইনে (01790139333 / 01865321530) কল করলে তাৎক্ষণিক ট্রাবলশুটিং গাইড অথবা প্রয়োজনে টেকনিশিয়ান পাঠিয়ে মেরামত নিশ্চিত করা হয়।'
      },
      {
        question: 'ঠাকুরগাঁও থেকে অর্ডার দেওয়ার প্রক্রিয়া কী?',
        answer: 'ওয়েবসাইটে থাকা প্রোডাক্ট সিলেক্ট করে অর্ডার প্লেস করুন অথবা সরাসরি ফোনে কথা বলে পণ্যের স্পেসিফিকেশন ও ওয়ারেন্টি জেনে অর্ডার করতে পারেন।'
      }
    ],
    deliveryTimeline: 'ঠাকুরগাঁও সদর ও পীরগঞ্জে ২৪ ঘণ্টার মধ্যে ডেলিভারি ও অন-সাইট সার্ভিস।',
    onSiteSupportNote: 'কোল্ড স্টোরেজ ও বাণিজ্যিক প্রজেক্টের জন্য পূর্ব শিডিউলে অন-সাইট টিম পাঠানো হয়। হটলাইন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Hard Disk (HDD)', 'Other Accessories']
  },

  bogura: {
    slug: 'bogura',
    enName: 'Bogura',
    bnName: 'বগুড়া',
    title: 'Bogura CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & expert CCTV technician in Bogura (Bogra). Best CCTV camera price, IP camera setup, DVR/NVR online view, PBX intercom, access control & electrician services with fast on-site support.',
    h1: 'Bogura CCTV Camera Sales, Installation, Electrician & Technical Service (বগুড়া সিসিটিভি ক্যামেরা ও টেকনিক্যাল সলিউশন)',
    tagline: 'Premier Security System Supplier, Commercial Surveillance & Automation Hub for Bogura (Bogra)',
    bengaliTagline: 'উত্তরবঙ্গের প্রাণকেন্দ্র বগুড়া জেলা ও শিল্পাঞ্চলে আধুনিক সিসিটিভি ক্যামেরা বিক্রয়, ইনস্টলেশন, ইলেকট্রিশিয়ান ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'উত্তরবঙ্গের প্রবেশদ্বার ও প্রধান বাণিজ্যিক শিল্পনগরী বগুড়া (সাতমাথা, বড়গোলা, শেরপুর, শিবগঞ্জ, বিসিক শিল্পনগরী ও সান্তাহার)-এর বাণিজ্যিক ভবন, অটোমোবাইল ও মেটাল কারখানা, কোল্ড স্টোরেজ, শপিং মল এবং বাসাবাড়ির নিরবচ্ছিন্ন সুরক্ষায় বিশ্বমানের সিসিটিভি ক্যামেরা, আইপি ক্যামেরা, পিবিএক্স ইন্টারকম, এক্সেস কন্ট্রোল ও ইলেকট্রিক্যাল সার্ভিস দিচ্ছে শামীম টেক সলিউশন।',
    upazilas: [
      'Bogura Sadar (বগুড়া সদর ও সাতমাথা)',
      'Sherpur (শেরপুর)',
      'Shibganj (শিবগঞ্জ)',
      'Shajahanpur (শাজাহানপুর)',
      'Gabtali (গাবতলী)',
      'Sonatola (সোনাতলা)',
      'Sariakandi (সারিয়াকান্দি)',
      'Dhunat (ধুনট)',
      'Nandigram (নন্দীগ্রাম)',
      'Kahaloo (কাহালু)',
      'Dupchanchia (দুপচাঁচিয়া)',
      'Adamdighi & Santahar (আদমদীঘি ও সান্তাহার)'
    ],
    keyLandmarks: [
      'Bogura Satmatha Commercial Circle (সাতমাথা)',
      'Borogola Commercial Market (বড়গোলা)',
      'Thonthonia Bus Terminal Area (ঠনঠনিয়া)',
      'Tinmatha Railgate (তিনমাথা রেলগেট)',
      'BSCIC Industrial Area (বিসিক শিল্পনগরী)',
      'Sherpur Road & Jahangirabad Cantonment Area',
      'Santahar Railway Junction & Commercial Hub'
    ],
    popularSearchesBn: [
      'বগুড়া সিসিটিভি টেকনিশিয়ান',
      'বগুড়া সিসিটিভি ক্যামেরা দাম',
      'বগুড়া সিসিটিভি ক্যামেরা দোকান',
      'বগুড়া সিসিটিভি ক্যামেরা সার্ভিস ও মেরামত',
      'বগুড়া আইপি ক্যামেরা ইনস্টলেশন',
      'শেরপুর বগুড়া সিসিটিভি টেকনিশিয়ান',
      'শিবগঞ্জ সিসিটিভি ক্যামেরা',
      'বগুড়া ডিভিআর অনলাইন মোবাইল ভিউ',
      'বগুড়া ইন্টারকম টেকনিশিয়ান',
      'বগুড়া এক্সেস কন্ট্রোল ও ডোর লক',
      'বগুড়া বায়োমেট্রিক হাজিরা মেশিন',
      'বগুড়া ইলেকট্রিশিয়ান',
      'বগুড়া ইলেকট্রিক্যাল ওয়্যারিং ও টেকনিশিয়ান',
      'বগুড়া পিবিএক্স সিস্টেম',
      'বগুড়া কম্পিউটার মেরামত ও ল্যান নেটওয়ার্কিং'
    ],
    popularSearchesEn: [
      'CCTV Camera Services in Bogura',
      'Bogura CCTV Technician',
      'Bogra CCTV Technician',
      'CCTV Technician Bogura',
      'Bogura CCTV Camera Price',
      'Bogra CCTV Camera Price',
      'CCTV Camera Shop Bogura',
      'Bogura CCTV Installation',
      'CCTV Service Bogura',
      'IP Camera Bogura',
      'DVR NVR Online Setup Bogura',
      'Bogura Intercom Technician',
      'Access Control Bogura',
      'Biometric Machine Bogura',
      'Bogura Electrician',
      'Bogra Electrician',
      'Electrician Bogura',
      'Electrician Bogra',
      'Sherpur Bogura CCTV Technician',
      'Computer Technician Bogura'
    ],
    productSalesItems: buildDistrictProductSales(
      'bogura',
      'Bogura',
      'বগুড়া',
      'বগুড়া সদর, সাতমাথা, শেরপুর ও বিসিক শিল্পাঞ্চলের কারখানা, কোল্ড স্টোরেজ ও শোরুমের জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'bogura',
      'Bogura',
      'বগুড়া',
      'বগুড়ার সাতমাথা, শেরপুর, শিবগঞ্জ ও সান্তাহারের যেকোনো ব্যবসা ও বাসাবাড়িতে দ্রুততম অন-সাইট টেকনিশিয়ান ও ইলেকট্রিশিয়ান সাপোর্ট দেওয়া হয়।'
    ),
    servicesOffered: [
      {
        title: 'Industrial & Factory Surveillance in Bogura BSCIC',
        bengaliTitle: 'বগুড়া বিসিক শিল্পাঞ্চল ও কারখানা সিসিটিভি টেকনিশিয়ান সার্ভিস',
        description: 'বগুড়া বিসিক শিল্পাঞ্চল, মেটাল ফ্যাক্টরি, রাইস মিল ও কোল্ড স্টোরেজের জন্য হেভি-ডিউটি সেন্ট্রালাইজড এনভিআর ও ক্যামেরা স্থাপন সেবা।',
        features: ['PoE গিগাবিট সুইচ নেটওয়ার্ক', 'মেটাল বডি হেভি-ডিউটি ক্যামেরা', 'কন্ট্রোল রুম মনিটরিং সেটআপ']
      },
      {
        title: 'IP Camera & Wi-Fi CCTV Solutions in Bogura',
        bengaliTitle: 'বগুড়া আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'বাসাবাড়ি, দোকান, শপিং মল ও কর্পোরেট অফিসের জন্য উচ্চ রেজোলিউশনের আইপি ক্যামেরা এবং ওয়াইফাই রোটেটিং ক্যামেরা সেটআপ।',
        features: ['ফুল এইচডি ক্লিয়ার নাইট ভিশন', 'মোবাইল লাইভ স্ট্রিমিং', 'স্মার্ট টু-ওয়ে অডিও ইন্টারকম']
      },
      {
        title: 'DVR / NVR Online View & Password Reset',
        bengaliTitle: 'বগুড়া ডিভিআর/এনভিআর অনলাইন মোবাইল ভিউ ও পাসওয়ার্ড রিসেট',
        description: 'ডিভিআর/এনভিআর ইন্টারনেটের সাথে যুক্ত করে দেশ-বিদেশের যেকোনো স্থান থেকে লাইভ ক্যামেরা দেখা ও ভুলে যাওয়া পাসওয়ার্ড তাৎক্ষণিক আনলক।',
        features: ['মোবাইলে লাইভ ভিডিও', 'হার্ডডিস্ক স্টোরেজ হেলথ টেস্ট', 'মোশন ডিটেকশন পুশ অ্যালার্ট']
      },
      {
        title: 'PBX & Intercom System Setup',
        bengaliTitle: 'বগুড়া পিবিএক্স সিস্টেম ও ইন্টারকম টেকনিশিয়ান',
        description: 'বগুড়ার বহুতল আবাসিক ভবন, ক্লিনিক, হাসপাতাল, হোটেল ও বাণিজ্যিক প্রতিষ্ঠানে রুম টু রুম ক্লিয়ার অডিও ইন্টারকম ও এক্সচেঞ্জ সার্ভিস।',
        features: ['ক্লিয়ার ভয়েস কলিং', 'এক্সটেনশন হ্যান্ডসেট সেটআপ', 'নিয়মিত মেইনটেন্যান্স']
      },
      {
        title: 'Access Control & Electric Door Lock',
        bengaliTitle: 'বগুড়া এক্সেস কন্ট্রোল ও ডিজিটাল ডোর লক',
        description: 'অফিস ও গুরুত্বপূর্ণ কক্ষে অননুমোদিত প্রবেশ ঠেকাতে ফিঙ্গারপ্রিন্ট, কার্ড ও রিমোট কন্ট্রোল ডোর লক স্থাপন।',
        features: ['ম্যাগনেটিক ও ড্রপবোল্ট লক', 'এক্সিট বাটন', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine',
        bengaliTitle: 'বগুড়া বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার সাপোর্ট',
        description: 'অফিস, কারখানা ও শিক্ষাপ্রতিষ্ঠানের স্টাফ উপস্থিতি নিশ্চিত করতে আধুনিক ফিঙ্গারপ্রিন্ট ও ফেস মেশিন স্থাপন ও বাংলা সফটওয়্যার ট্রেনিং।',
        features: ['সহজ বাংলা সফটওয়্যার সাপোর্ট', 'এক্সেল ডেটা ব্যাকআপ', 'সুরক্ষিত অ্যাক্সেস কার্ড']
      },
      {
        title: 'House & Commercial Electrician Service',
        bengaliTitle: 'বগুড়া ইলেকট্রিশিয়ান ও নিরাপদ ইলেকট্রিক্যাল ওয়্যারিং',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা বাসা, কারখানা, খামার ও শোরুমের নিরাপদ বিদ্যুৎ ওয়্যারিং, সার্কিট ব্রেকার, ডিবি বক্স ও ফল্ট ফিক্সিং।',
        features: ['শর্ট সার্কিট সেফটি ব্যবস্থা', 'সুরক্ষিত আর্থিং সংযোগ', 'জরুরি ইলেকট্রিক্যাল সাপোর্ট']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'বগুড়া কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'Cat6 LAN ক্যাবলিং, রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ ইনস্টল।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 পাঞ্চিং ও টেস্ট', 'কম্পিউটার হার্ডওয়্যার মেরামত']
      }
    ],
    faqs: [
      {
        question: 'বগুড়া সদরে কি অন-সাইট টেকনিশিয়ান ও ফিটিং পাওয়া যায়?',
        answer: 'হ্যাঁ, বগুড়া সদর, সাতমাথা, শেরপুর, শিবগঞ্জ এবং সান্তাহার সহ পুরো বগুড়া জেলায় আমাদের দক্ষ টেকনিশিয়ান ও ইলেকট্রিশিয়ান অন-সাইটে গিয়ে ক্যামেরা ফিটিং ও সার্ভিস কাজ সম্পন্ন করে।'
      },
      {
        question: 'বগুড়ায় ক্যামেরা বা ইলেকট্রিক্যাল সমস্যা হলে কীভাবে সার্ভিস পাব?',
        answer: 'যেকোনো কারিগরি সমস্যায় আমাদের হটলাইনে (01790139333 / 01865321530) কল করলে তাৎক্ষণিক ট্রাবলশুটিং সমাধান অথবা দ্রুত টেকনিশিয়ান পাঠিয়ে মেরামত নিশ্চিত করা হয়।'
      },
      {
        question: 'বগুড়া থেকে পণ্য অর্ডারে কত সময় লাগে?',
        answer: 'বগুড়া সদর ও শেরপুরে একই দিনে বা ২৪ ঘণ্টার মধ্যে সরাসরি অন-সাইট টিম বা দ্রুততম কুরিয়ারের মাধ্যমে পণ্য ও টেকনিশিয়ান পৌঁছে যায়।'
      }
    ],
    deliveryTimeline: 'বগুড়া সদর ও শেরপুরে ২৪ ঘণ্টার মধ্যে ডেলিভারি ও অন-সাইট সার্ভিস।',
    onSiteSupportNote: 'বগুড়ার বাণিজ্যিক হাব ও শিল্পাঞ্চলের জন্য সার্বক্ষণিক টেকনিক্যাল সাপোর্ট। হটলাইন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Hard Disk (HDD)', 'Other Accessories']
  },

  dhaka: {
    slug: 'dhaka',
    enName: 'Dhaka',
    bnName: 'ঢাকা',
    title: 'Dhaka CCTV Camera Sales, Installation & Technician | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Services & expert CCTV technician in Dhaka. Best CCTV camera price, IP camera installation, DVR/NVR online view, access control, intercom & electrician services across Dhaka.',
    h1: 'Dhaka CCTV Camera Sales, Installation, Electrician & Technical Service (ঢাকা সিসিটিভি ক্যামেরা ও টেকনিক্যাল সলিউশন)',
    tagline: 'Premier Security System Supplier, Corporate Surveillance & Automation Hub in Dhaka Mega City',
    bengaliTagline: 'রাজধানী ঢাকা ও আশপাশের অঞ্চলে আধুনিক সিসিটিভি ক্যামেরা বিক্রয়, ইনস্টলেশন, ইলেকট্রিশিয়ান ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'রাজধানী ঢাকার মতিঝিল, ধানমন্ডি, গুলশান, বনানী, উত্তরা, মিরপুর, তেজগাঁও শিল্পাঞ্চল, বাড্ডা, পুরান ঢাকা, সাভার ও কেরানীগঞ্জের কর্পোরেট অফিস, বহুতল বাণিজ্যিক ভবন, গার্মেন্টস ও কলকারখানা, ব্যাংকিং প্রতিষ্ঠান এবং বাসাবাড়ির সামগ্রিক ডিজিটাল সুরক্ষায় আসল সিসিটিভি ক্যামেরা, আইপি ক্যামেরা, পিবিএক্স ইন্টারকম, এক্সেস কন্ট্রোল ও পেশাদার ইলেকট্রিক্যাল সার্ভিস সরবরাহ করছে শামীম টেক সলিউশন।',
    upazilas: [
      'Gulshan & Banani (গুলশান ও বনানী)',
      'Uttara Model Town (উত্তরা)',
      'Dhanmondi (ধানমন্ডি)',
      'Mirpur (মিরপুর)',
      'Motijheel & Dilkusha (মতিঝিল ও দিলকুশা)',
      'Mohammadpur (মোহাম্মদপুর)',
      'Tejgaon Industrial Area (তেজগাঁও শিল্পাঞ্চল)',
      'Badda & Rampura (বাড্ডা ও রামপুরা)',
      'Old Dhaka & Sadarghat (পুরান ঢাকা ও সদরঘাট)',
      'Jatrabari (যাত্রাবাড়ী)',
      'Savar & Ashulia (সাভার ও আশুলিয়া)',
      'Keraniganj (কেরানীগঞ্জ)'
    ],
    keyLandmarks: [
      'Motijheel Commercial Zone',
      'BCS Computer City (IDB Bhaban Agargaon)',
      'Multiplan Center (Elephant Road)',
      'Gulshan 1 & 2 Circle',
      'Kawran Bazar Commercial Area',
      'Uttara House Building Circle',
      'Mirpur 10 Circle'
    ],
    popularSearchesBn: [
      'ঢাকা সিসিটিভি টেকনিশিয়ান',
      'ঢাকা সিসিটিভি ক্যামেরা দাম',
      'ঢাকা সিসিটিভি ক্যামেরা মার্কেট ও দোকান',
      'ঢাকা সিসিটিভি সার্ভিস ও মেরামত',
      'ঢাকা আইপি ক্যামেরা ইনস্টলেশন',
      'উত্তরা সিসিটিভি টেকনিশিয়ান',
      'গুলশান সিসিটিভি ক্যামেরা ইনস্টলেশন',
      'মিরপুর সিসিটিভি ক্যামেরা ফিটিং',
      'ঢাকা ডিভিআর অনলাইন মোবাইল ভিউ',
      'ঢাকা ইন্টারকম টেকনিশিয়ান',
      'ঢাকা এক্সেস কন্ট্রোল ও ডোর লক',
      'ঢাকা বায়োমেট্রিক হাজিরা মেশিন',
      'ঢাকা ইলেকট্রিশিয়ান',
      'ঢাকা ইলেকট্রিক্যাল ওয়্যারিং ও টেকনিশিয়ান',
      'ঢাকা কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং'
    ],
    popularSearchesEn: [
      'CCTV Camera Services in Dhaka',
      'Dhaka CCTV Technician',
      'CCTV Technician Dhaka',
      'CCTV Camera Price in Dhaka',
      'CCTV Camera Shop Dhaka',
      'Dhaka CCTV Installation',
      'CCTV Repair Dhaka',
      'IP Camera Dhaka',
      'DVR NVR Online Setup Dhaka',
      'Dhaka Intercom Technician',
      'Access Control Dhaka',
      'Biometric Machine Dhaka',
      'Dhaka Electrician',
      'Electrician Dhaka',
      'Electrician in Dhaka',
      'Technician in Dhaka',
      'Uttara CCTV Technician',
      'Mirpur CCTV Camera',
      'Computer Technician Dhaka'
    ],
    productSalesItems: buildDistrictProductSales(
      'dhaka',
      'Dhaka',
      'ঢাকা',
      'ঢাকার মতিঝিল, গুলশান, উত্তরা, মিরপুর ও ধানমন্ডির কর্পোরেট অফিস, শোরুম ও আবাসিক ভবনের জন্য'
    ),
    technicianServiceItems: buildDistrictTechnicianServices(
      'dhaka',
      'Dhaka',
      'ঢাকা',
      'ঢাকার যেকোনো থানা ও বাণিজ্যিক জোনে অভিজ্ঞ অন-সাইট টেকনিশিয়ান ও ইলেকট্রিশিয়ান সাপোর্ট সরবরাহ করা হয়।'
    ),
    servicesOffered: [
      {
        title: 'Corporate & Commercial Surveillance in Dhaka',
        bengaliTitle: 'ঢাকা কর্পোরেট অফিস ও বাণিজ্যিক ভবন সিসিটিভি টেকনিশিয়ান সার্ভিস',
        description: 'মতিঝিল, গুলশান, বনানী ও ধানমন্ডির হেড অফিস, ব্যাংক ও মাল্টি-স্টোরি বাণিজ্যিক ভবনে হাই-এন্ড আইপি ক্যামেরা ও সেন্ট্রালাইজড এনভিআর মনিটরিং সেটআপ।',
        features: ['গিগাবিট PoE নেটওয়ার্ক', 'ফেস রিকগনিশন ও AI ক্যামেরা', 'কন্ট্রোল রুম ওয়াল স্ক্রিন ইন্টিগ্রেশন']
      },
      {
        title: 'IP Camera & Wi-Fi CCTV Solutions in Dhaka',
        bengaliTitle: 'ঢাকা আইপি ক্যামেরা ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'বাসাবাড়ি, ফ্ল্যাট, দোকান ও বুটিক শোরুমের জন্য উচ্চ রেজোলিউশনের ওয়্যারলেস আইপি ক্যামেরা এবং ৩৬০ ডিগ্রি রোটেটিং ক্যামেরা সেটআপ।',
        features: ['ফুল এইচডি ক্লিয়ার নাইট ভিশন', 'মোবাইল অ্যাপ লাইভ ভিউ', 'স্মার্ট টু-ওয়ে অডিও ইন্টারকম']
      },
      {
        title: 'DVR / NVR Online View & Remote Mobile Monitoring',
        bengaliTitle: 'ঢাকা ডিভিআর/এনভিআর অনলাইন মোবাইল ভিউ ও পাসওয়ার্ড রিকভারি',
        description: 'ডিভিআর/এনভিআর দ্রুত ইন্টারনেটে যুক্ত করে দেশে বা বিদেশ থেকে মোবাইলে লাইভ নজরদারি ও ভুলে যাওয়া পাসওয়ার্ড তাৎক্ষণিক আনলক।',
        features: ['মোবাইলে হাই-স্পিড লাইভ ভিডিও', 'রেকর্ডিং ড্রাইভ হেলথ টেস্ট', 'রিয়েল-টাইম মোশন নোটিফিকেশন']
      },
      {
        title: 'PBX & Intercom System Setup for High-Rise Buildings',
        bengaliTitle: 'ঢাকা পিবিএক্স সিস্টেম ও ইন্টারকম টেকনিশিয়ান সার্ভিস',
        description: 'ঢাকার বহুতল আবাসিক অ্যাপার্টমেন্ট, কল সেন্টার ও কর্পোরেট অফিসে মাল্টি-লাইন পিবিএক্স টেলিফোন এক্সচেঞ্জ ও রুম টু রুম ইন্টারকম সংযোগ।',
        features: ['ক্লিয়ার ভয়েস কলিং', 'এক্সটেনশন প্রোগ্রামিং', 'জরুরি ফল্ট মেরামত']
      },
      {
        title: 'Access Control & Smart Door Lock Solutions',
        bengaliTitle: 'ঢাকা এক্সেস কন্ট্রোল ও ম্যাগনেটিক ডোর লক ইনস্টলেশন',
        description: 'সার্ভার রুম ও অফিসের মূল প্রবেশদ্বারে ফিঙ্গারপ্রিন্ট, RFID কার্ড, ফেস ডিটেকশন ও রিমোট ম্যাগনেটিক লক স্থাপন।',
        features: ['ম্যাগনেটিক ও ড্রপবোল্ট লক', 'এক্সিট সেন্সর সুইচ', 'জরুরি ব্যাটারি ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance Machine & HR Integration',
        bengaliTitle: 'ঢাকা বায়োমেট্রিক হাজিরা মেশিন ও সফটওয়্যার সাপোর্ট',
        description: 'অফিস ও শিক্ষাপ্রতিষ্ঠানের স্টাফ উপস্থিতি নিয়ন্ত্রণে আধুনিক ফিঙ্গারপ্রিন্ট ও ফেস এটেন্ডেন্স মেশিন স্থাপন ও বাংলা সফটওয়্যার ট্রেনিং।',
        features: ['সহজ বাংলা সফটওয়্যার সাপোর্ট', 'এক্সেল শিট রিপোর্ট অটো-জেনারেশন', 'সুরক্ষিত বায়োমেট্রিক ডেটা']
      },
      {
        title: 'House & Commercial Electrician Service in Dhaka',
        bengaliTitle: 'ঢাকা ইলেকট্রিশিয়ান ও নিরাপদ ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা বাসা, ফ্ল্যাট, কারখানা ও শোরুমের নিরাপদ বিদ্যুৎ ওয়্যারিং, সার্কিট ব্রেকার, ডিবি বক্স ও ফল্ট ফিক্সিং।',
        features: ['শর্ট সার্কিট সেফটি ব্যবস্থা', 'সুরক্ষিত আর্থিং সংযোগ', 'জরুরি ইলেকট্রিক্যাল সাপোর্ট']
      },
      {
        title: 'Computer LAN Networking & Hardware Repair',
        bengaliTitle: 'ঢাকা কম্পিউটার টেকনিশিয়ান ও লোকাল নেটওয়ার্কিং',
        description: 'Cat6 LAN ক্যাবলিং, রাউটার-সুইচ কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং ও উইন্ডোজ ইনস্টল।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 পাঞ্চিং ও টেস্ট', 'কম্পিউটার হার্ডওয়্যার মেরামত']
      }
    ],
    faqs: [
      {
        question: 'ঢাকায় কি অন-সাইট টেকনিশিয়ান ও ক্যামেরা ফিটিং পাওয়া যায়?',
        answer: 'হ্যাঁ, ধানমন্ডি, গুলশান, উত্তরা, মিরপুর, মতিঝিল ও সাভার সহ ঢাকার যেকোনো এলাকায় আমাদের পেশাদার টেকনিশিয়ান টিম অন-সাইটে গিয়ে কাজ সম্পন্ন করে।'
      },
      {
        question: 'ঢাকায় জরুরি সিসিটিভি বা ইলেকট্রিক্যাল সার্ভিসের জন্য কীভাবে যোগাযোগ করব?',
        answer: 'আমাদের হটলাইন 01790139333 অথবা টেকনিশিয়ান নম্বর 01865321530-এ কল বা হোয়াটসঅ্যাপ মেসেজ দিয়ে তাৎক্ষণিক বুক করতে পারেন।'
      },
      {
        question: 'ঢাকায় পণ্য ডেলিভারি ও পেমেন্ট পদ্ধতি কী?',
        answer: 'ঢাকায় দ্রুততম হোম ডেলিভারি দেওয়া হয় এবং পণ্য বুঝে পেয়ে মূল্য পরিশোধের সুবিধা রয়েছে।'
      }
    ],
    deliveryTimeline: 'ঢাকায় ২৪ ঘণ্টার মধ্যে দ্রুততম হোম ডেলিভারি ও অন-সাইট টেকনিক্যাল সার্ভিস।',
    onSiteSupportNote: 'কর্পোরেট অফিস ও বাণিজ্যিক প্রজেক্টের জন্য ডেডিকেটেড টেকনিক্যাল টিম। হটলাইন: 01790139333, 01865321530',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR', 'NVR', 'Hard Disk (HDD)', 'Other Accessories']
  }
};

// Aliases for alternate spellings
DISTRICT_SEO_DATA['bogra'] = DISTRICT_SEO_DATA['bogura'];

