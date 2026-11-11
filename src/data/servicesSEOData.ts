import { NEW_SERVICES_SEO_DATA } from './newServicesData';

export interface ServiceSEOInfo {
  slug: string;
  name: string;
  bnName: string;
  category: 'CCTV & Surveillance' | 'Access Control' | 'PABX & Intercom' | 'Biometrics & Attendance' | 'Electrical Wiring' | 'Computer & LAN Networking';
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  bengaliTagline: string;
  description: string;
  keyFeatures: string[];
  processSteps: { title: string; desc: string }[];
  pricingStartingFrom: string;
  warrantyInfo: string;
  popularSearchKeywords: string[];
  relatedServices: string[]; // slugs
  relatedProductSlugs: string[]; // slugs
  faqs: { question: string; answer: string }[];
}

export const SERVICES_SEO_DATA: Record<string, ServiceSEOInfo> = {
  // 1. CCTV & Surveillance Services
  'cctv-installation': {
    slug: 'cctv-installation',
    name: 'CCTV Installation',
    bnName: 'সিসিটিভি ক্যামেরা ইনস্টলেশন ও সেটআপ',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • CCTV Installation, Repair & Technician',
    metaDescription: 'পেশাদার সিসিটিভি ক্যামেরা ইনস্টলেশন সার্ভিস। রংপুর বিভাগ সহ সারা দেশে বাসা, দোকান ও অফিসের জন্য নিখুঁত অ্যাঙ্গেল ক্যালিব্রেশন ও ওয়্যারিং। কল: 01790139333',
    h1: 'Professional CCTV Installation Service in Bangladesh',
    tagline: 'Precision Camera Placement, Zero Blind Spots & 24/7 Security Assurance',
    bengaliTagline: 'নিখুঁত ক্যামেরা স্থাপন, ব্লাইন্ড স্পট মুক্ত কাভারেজ ও ২৪/৭ নির্ভরযোগ্য নিরাপত্তা',
    description: 'শামীম টেক সলিউশন রংপুর বিভাগ ও সারা বাংলাদেশে পেশাদার সিসিটিভি ক্যামেরা ইনস্টলেশন সেবা প্রদান করে। আমরা বাড়ি, শপিং মল, গুদাম, ব্যাংক ও কর্পোরেট অফিসের জন্য উচ্চমানের Hikvision, Dahua, ও Uniview ক্যামেরা লেজার-শার্প অ্যাঙ্গেল ক্যালিব্রেশন এবং টেকসই ক্যাবল কেসিং ও পাইপিং সহকারে স্থাপন করি।',
    keyFeatures: [
      'লেজার-শার্প ক্যামেরা ভিউ অ্যাঙ্গেল ক্যালিব্রেশন ও জিরো ব্লাইন্ড স্পট প্ল্যানিং',
      'উন্নত ক্যাবল কেসিং, কন্ডুইট পাইপিং ও ওয়াটারপ্রুফ জাংশন বক্স ব্যবহার',
      'Hikvision, Dahua, CP Plus ও Uniview ব্যান্ডের অফিসিয়াল হার্ডওয়্যার',
      'রংপুর সিটি ও ৮ জেলায় দ্রুত অন-সাইট টেকনিশিয়ান পরিদর্শন ও ইনস্টলেশন',
      'মোবাইল ফোন ও কম্পিউটারে লাইভ অনলাইন ভিউ কনফিগারেশন সম্পন্ন'
    ],
    processSteps: [
      { title: '১. সাইট পরিদর্শন ও প্ল্যানিং', desc: 'ক্যামেরা পজিশন, তারের দূরত্ব ও ব্লাইন্ড স্পট নির্ধারণে ফ্রি পরামর্শ।' },
      { title: '২. প্রফেশনাল ক্যাবলিং', desc: 'দেওয়াল সুরক্ষিত রেখে পিভিসি কেসিং বা কন্ডুইট পাইপের ভেতর দিয়ে ক্যাবল টানা।' },
      { title: '৩. ক্যামেরা মাউন্টিং ও DVR/NVR সেটআপ', desc: 'ক্যামেরা সঠিক স্থানে ফিক্স করে রেকর্ডিং সিস্টেম সংযোগ।' },
      { title: '৪. ফাইনাল টেস্ট ও মোবাইল ভিউ', desc: 'নাইট ভিশন টেস্ট ও কাস্টমারের ফোনে লাইভ স্ট্রিমিং অ্যাক্টিভেশন।' }
    ],
    pricingStartingFrom: '৳৫০০ / ক্যামেরা (প্রজেক্ট সাইজ অনুযায়ী সাশ্রয়ী প্যাকেজ)',
    warrantyInfo: '১ বছরের সার্ভিস ওয়ারেন্টি ও অফিসিয়াল হার্ডওয়্যার রিপ্লেসমেন্ট সাপোর্ট',
    popularSearchKeywords: ['cctv installation service', 'cctv camera fitting rangpur', 'cctv setup bangladesh', 'home cctv installation'],
    relatedServices: ['cctv-technician', 'cctv-camera-fitting', 'cctv-online-view-setup', 'dvr-installation'],
    relatedProductSlugs: ['cctv-camera', 'hd-cctv-camera', 'dvr', 'cctv-cable'],
    faqs: [
      { question: 'একটি সাধারণ বাড়িতে সিসিটিভি ইনস্টল করতে কত সময় লাগে?', answer: 'সাধারণত ৪-৮ ক্যামেরার একটি হোম সিসিটিভি সিস্টেম সেটআপ করতে ১ কর্মদিবস সময় লাগে।' },
      { question: 'ইনস্টলেশনের পর কি ফোনে সরাসরি লাইভ দেখা যাবে?', answer: 'হ্যাঁ, টেকনিশিয়ান শামীম সরাসরি আপনার মোবাইল ফোনে ফ্রি অ্যাপ ইনস্টল করে লাইভ ভিউ সেটআপ করে দেবেন।' },
      { question: 'রংপুর বিভাগের বাইরে কি সার্ভিস দেন?', answer: 'হ্যাঁ, বড় প্রজেক্ট ও বাণিজ্যিক প্রতিষ্ঠানের জন্য ঢাকা, বগুড়া সহ সারা বাংলাদেশে সার্ভিস দেওয়া হয়।' }
    ]
  },
  'cctv-technician': {
    slug: 'cctv-technician',
    name: 'CCTV Technician',
    bnName: 'দক্ষ সিসিটিভি টেকনিশিয়ান সার্ভিস',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • CCTV Technician Service',
    metaDescription: 'অভিজ্ঞ সার্টিফাইড সিসিটিভি টেকনিশিয়ান সার্ভিস। ক্যামেরা অফলাইন, ডিসপ্লে সমস্যা বা পাসওয়ার্ড রিসেট সমাধান করতে সরাসরি যোগাযোগ করুন 01790139333।',
    h1: 'Certified CCTV Technician Support in Rangpur & Beyond',
    tagline: '8+ Years Field Expertise in CCTV Diagnostics, Wiring & Network Integration',
    bengaliTagline: '৮+ বছরের বাস্তব অভিজ্ঞতাসম্পন্ন দক্ষ টেকনিশিয়ান দিয়ে দ্রুত সার্ভিসিং ও ডায়াগনস্টিক',
    description: 'যেকোনো ব্র্যান্ডের সিসিটিভি ক্যামেরার ত্রুটি দ্রুত সমাধান করতে টেকনিশিয়ান শামীম সরাসরি উপস্থিত হয়ে সার্ভিস প্রদান করেন। সিগন্যাল লস, নো ভিডিও, হার্ডডিস্ক ফেইলুর কিংবা ডিভিআর পাসওয়ার্ড ভুলে যাওয়ার মতো জটিল সমস্যার সমাধান পাওয়া যায় মুহূর্তেই।',
    keyFeatures: [
      'ফিল্ড-সার্টিফাইড ৮+ বছরের বাস্তব কাজের অভিজ্ঞতাসম্পন্ন টেকনিশিয়ান',
      'Hikvision, Dahua, Jovision ডিভিআর/এনভিআর মাস্টার পাসওয়ার্ড রিকভারি',
      'ভিডিও নয়েজ, ফ্লিকারিং ও ব্ল্যাক স্ক্রিন সমস্যার তাৎক্ষণিক সমাধান',
      'জরুরি অন-কল ভিজিট ও হোয়াটসঅ্যাপ রিমোট ডায়াগনস্টিক সাপোর্ট'
    ],
    processSteps: [
      { title: '১. সমস্যা রিপোর্ট ও ডায়াগনসিস', desc: 'ফোনে সমস্যার বিবরণ শুনে প্রাথমিক ট্রাবলশুটিং গাইড।' },
      { title: '২. অন-ফিল্ড ভিজিট', desc: 'টেস্টিং ইকুইপমেন্ট সহ সরাসরি গ্রাহকের সাইটে উপস্থিতি।' },
      { title: '৩. সমস্যা সমাধান ও হার্ডওয়্যার চেক', desc: 'কানেক্টর, পাওয়ার সাপ্লাই ও ক্যাবলিং ড্রপ টেস্ট ও মেরামত।' },
      { title: '৪. ভেরিফিকেশন', desc: 'সিস্টেম ফুল ফাংশনাল হওয়া নিশ্চিত করে ডেলিভারি।' }
    ],
    pricingStartingFrom: '৳৩০০ (ভিজিট ও প্রাথমিক ডায়াগনস্টিক চার্জ)',
    warrantyInfo: 'সার্ভিস করা পার্টসের উপর তাৎক্ষণিক কার্যকারিতা গ্যারান্টি',
    popularSearchKeywords: ['cctv technician near me', 'cctv mechanic rangpur', 'cctv repair technician', 'dvr password reset'],
    relatedServices: ['cctv-troubleshooting', 'cctv-repair-maintenance', 'dvr-nvr-technician'],
    relatedProductSlugs: ['cctv-power-supply', 'cctv-adapter', 'bnc-connector', 'cctv-video-balun'],
    faqs: [
      { question: 'ডিভিআর-এর পাসওয়ার্ড ভুলে গেলে কি রিসেট করা সম্ভব?', answer: 'হ্যাঁ, অফিসিয়াল এসএডিটি ও কিউআর কোড ভেরিফিকেশনের মাধ্যমে আমরা নিরাপদে পাসওয়ার্ড রিসেট করে থাকি।' },
      { question: 'টেকনিশিয়ান ভিজিট করতে কত সময় নেয়?', answer: 'রংপুর সদরে ২-৪ ঘণ্টার মধ্যে এবং অন্যান্য জেলায় একই দিনে ভিজিট করা হয়।' }
    ]
  },
  'cctv-repair-maintenance': {
    slug: 'cctv-repair-maintenance',
    name: 'CCTV Repair & Maintenance',
    bnName: 'সিসিটিভি মেরামত ও নিয়মিত রক্ষণাবেক্ষণ',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • CCTV Camera Repair and Maintenance',
    metaDescription: 'সিসিটিভি ক্যামেরা মেরামত ও এএমসি রক্ষণাবেক্ষণ। ক্যামেরা ঝাপসা, অ্যাডাপ্টার সমস্যা ও হার্ডডিস্ক রিকভারি সার্ভিস। হটলাইন: 01790139333।',
    h1: 'Reliable CCTV Repair & Preventative Maintenance',
    tagline: 'Restore Clear Footage & Extend CCTV Equipment Longevity',
    bengaliTagline: 'স্পষ্ট ফুটেজ পুনরুদ্ধার ও সিসিটিভি যন্ত্রাংশের দীর্ঘস্থায়ী স্থায়িত্ব',
    description: 'পুরোনো বা নষ্ট সিসিটিভি ক্যামেরা ফেলে না দিয়ে সাশ্রয়ী খরচে মেরামত করিয়ে নিন। লেন্স পরিবর্তন, আইআর নাইটভিশন বোর্ড ফিক্সিং, পাওয়ার অ্যাডাপ্টার প্রতিস্থাপন ও নিয়মিত বার্ষিক মেইনটেন্যান্স (AMC) সেবার মাধ্যমে নিরাপত্তা ব্যবস্থা সার্বক্ষণিক সক্রিয় রাখা যায়।',
    keyFeatures: [
      'ব্লার বা ঝাপসা লেন্স ও আইআর ফিল্টার ক্লিনিং এবং রিপেয়ার',
      'ক্যামেরা বক্সে পানি ঢোকা ও শর্ট সার্কিট ড্যামেজ ফিক্সিং',
      'ডিভিআর/এনভিআর মাদারবোর্ড চিপসেট ও পোর্ট সোল্ডারিং সমাধান',
      'মাসিক ও বার্ষিক কর্পোরেট মেইনটেন্যান্স চুক্তি (AMC) সুবিধা'
    ],
    processSteps: [
      { title: '১. হার্ডওয়্যার টেস্টিং', desc: 'মাল্টিমিটার ও টেস্ট মনিটরে ভোল্টেজ ও সিগন্যাল যাচাই।' },
      { title: '২. কম্পোনেন্ট রিপেয়ার', desc: 'খারাপ পার্টস শনাক্ত করে পরিবর্তন বা মেরামত।' },
      { title: '৩. লেন্স ও বডি ক্লিনিং', desc: 'ওয়াটারপ্রুফ সিলিং পুনরায় নিশ্চিত করা।' },
      { title: '৪. বার্ন-ইন টেস্টিং', desc: '১২ ঘণ্টার নিরবচ্ছিন্ন রেকর্ডিং টেস্ট।' }
    ],
    pricingStartingFrom: '৳৪০০ (মেরামতের ধরনভেদে)',
    warrantyInfo: 'মেরামতকৃত যন্ত্রাংশে ৩০ দিনের রিপেয়ার ওয়ারেন্টি',
    popularSearchKeywords: ['cctv repair service', 'cctv maintenance bangladesh', 'security camera servicing'],
    relatedServices: ['cctv-troubleshooting', 'cctv-maintenance', 'cctv-technician'],
    relatedProductSlugs: ['cctv-power-supply', 'cctv-adapter', 'cctv-hard-disk'],
    faqs: [
      { question: 'ক্যামেরায় রাতে ছবি কালো আসে কেন?', answer: 'এটি সাধারণত আইআর এলইডি বোর্ড অথবা ১২ ভোল্ট পাওয়ার সাপ্লাই ভোল্টেজ ড্রপ করার কারণে ঘটে। আমরা পার্টস পরিবর্তন করে সমাধান করি।' }
    ]
  },
  'cctv-camera-fitting': {
    slug: 'cctv-camera-fitting',
    name: 'CCTV Camera Fitting',
    bnName: 'সিসিটিভি ক্যামেরা ফিটিং ও মাউন্টিং সার্ভিস',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • Professional CCTV Camera Fitting & Relocation',
    metaDescription: 'দক্ষ টেকনিশিয়ান দিয়ে বাড়ি ও দোকানের সিসিটিভি ক্যামেরা সুন্দরভাবে ফিটিং ও স্থানান্তর সেবা। ক্যাবল কেসিং সহ নিখুঁত কাজ। কল: 01790139333।',
    h1: 'Clean CCTV Camera Fitting & Wall Mounting Services',
    tagline: 'Clean Finish, Tamper-Proof Screwing & Optimal Field-of-View',
    bengaliTagline: 'পরিপাটি ওয়্যারিং, নিরাপদ মাউন্টিং এবং সেরা ফিল্ড অফ ভিউ',
    description: 'বাসা পরিবর্তন বা নতুন দোকানে পুরোনো সিসিটিভি ক্যামেরা খুলে নতুন জায়গায় ফিটিং করতে চান? শামীম টেক সলিউশন কোনো ক্যাবল নষ্ট না করে নিখুঁতভাবে ক্যামেরা খুলে রি-ফিটিং ও অ্যাঙ্গেল সেট করে দেয়।',
    keyFeatures: [
      'ওয়াল ড্রিলিং, সিলিং মাউন্টিং ও মেটাল পোল ফিটিং',
      'বাইরের ক্যামেরার জন্য ওয়াটারপ্রুফ জাংশন বক্স ফিটিং',
      'ক্যামেরা এক স্থান থেকে অন্য স্থানে নিরাপদে স্থানান্তর (Relocation)',
      'ক্যাবল লুকিয়ে পরিপাটি লুক নিশ্চিতকরণ'
    ],
    processSteps: [
      { title: '১. মেজারমেন্ট', desc: 'ভিউ অ্যাঙ্গেল ও দেওয়ালের স্থায়িত্ব মেপে নেওয়া।' },
      { title: '২. সিকিউর মাউন্টিং', desc: 'রয়েল প্লাগ ও স্ক্রু দিয়ে মজবুতভাবে ড্রিলিং ও মাউন্টিং।' },
      { title: '৩. ওয়াটারপ্রুফিং', desc: 'কানেক্টরে টেপিং ও সিলিকন ওয়াটার সিলিং।' },
      { title: '৪. অ্যাঙ্গেল ফাইনাল', desc: 'মনিটরে দেখে গ্রাহকের পছন্দসই ফোকাস লক করা।' }
    ],
    pricingStartingFrom: '৳৩৫০ / ক্যামেরা',
    warrantyInfo: 'ফিটিং ও মাউন্টিং মজবুত থাকার ১০০% নিশ্চয়তা',
    popularSearchKeywords: ['cctv fitting service', 'camera mounting service', 'cctv shifting rangpur'],
    relatedServices: ['cctv-installation', 'cctv-technician', 'dvr-installation'],
    relatedProductSlugs: ['dome-cctv-camera', 'bullet-cctv-camera', 'cctv-accessories'],
    faqs: [
      { question: 'অন্য দোকান থেকে কেনা ক্যামেরা কি আপনারা ফিটিং করে দেন?', answer: 'হ্যাঁ! আপনার কাছে ক্যামেরা থাকলে আমরা শুধু লেবার চার্জ নিয়ে প্রফেশনাল ফিটিং করে দেই।' }
    ]
  },
  'cctv-security-solution': {
    slug: 'cctv-security-solution',
    name: 'CCTV Security Solution',
    bnName: 'সম্পূর্ণ সিসিটিভি সিকিউরিটি সলিউশন',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • Complete CCTV Security Solution for Home & Business',
    metaDescription: 'বাসা, ফ্যাক্টরি ও প্রতিষ্ঠানের সম্পূর্ণ সিসিটিভি সিকিউরিটি সিস্টেম সলিউশন। অরিজিনাল হার্ডওয়্যার, লং-টার্ম রেকর্ডিং ও লাইভ অ্যালার্ট। কল: 01790139333।',
    h1: 'Enterprise & Residential CCTV Security Solutions',
    tagline: 'Integrated Surveillance Ecosystems Tailored for High-Risk Protection',
    bengaliTagline: 'উচ্চ নিরাপত্তার জন্য সমন্বিত ও নির্ভরযোগ্য ডিজিটাল নজরদারি সমাধান',
    description: 'শুধু ক্যামেরা লাগানোই যথেষ্ট নয়, প্রয়োজন একটি সমন্বিত নিরাপত্তা ব্যবস্থা। আমরা অডিও রেকর্ডিং, মোশন অ্যালার্ট, নাইট কালার ভিশন, পাওয়ার ব্যাকআপ (UPS/Solar) ও ক্লাউড স্টোরেজ সহ সম্পূর্ণ সিকিউরিটি সলিউশন ডিজাইন ও বাস্তবায়ন করি।',
    keyFeatures: [
      'এন্ড-টু-এন্ড সিকিউরিটি আর্কিটেকচার ডিজাইন ও প্রজেক্ট কনসাল্টেন্সি',
      '২৪/৭ কন্টিনিউয়াস রিয়েল-টাইম কালার নাইট ভিশন ও অডিও রেকর্ডিং',
      'আইআই (AI) হিউম্যান ও ভেহিকল ডিটেকশন ফলস-অ্যালার্ম মুক্ত ফিল্টার',
      'বিদ্যুৎ চলে গেলেও ৩-৬ ঘণ্টা সিসিটিভি চালু রাখার স্মার্ট পাওয়ার ব্যাকআপ'
    ],
    processSteps: [
      { title: '১. সিকিউরিটি অডিট', desc: 'সাইটের দুর্বল পয়েন্ট ও সম্ভাব্য ঝুঁকি চিহ্নিতকরণ।' },
      { title: '২. কাস্টম ডিজাইন', desc: 'সঠিক ক্যামেরা ও স্টোরেজ ক্ষমতার স্পেসিফিকেশন তৈরি।' },
      { title: '৩. এক্সিকিউশন', desc: 'পেশাদার স্ট্যান্ডার্ড অনুযায়ী সম্পূর্ণ হার্ডওয়্যার স্থাপন।' },
      { title: '৪. হ্যান্ডওভার ও ট্রেনিং', desc: 'ব্যবহারকারীকে সিস্টেম চালানো ও ব্যাকআপ নেওয়ার পূর্ণ প্রশিক্ষণ।' }
    ],
    pricingStartingFrom: 'প্যাকেজ শুরু ৳৯,৯৯০ থেকে (৪ ক্যামেরা ফুল সেটআপ)',
    warrantyInfo: '২ বছরের ব্র্যান্ড ওয়ারেন্টি ও আজীবন কারিগরি সাপোর্ট',
    popularSearchKeywords: ['cctv security solution', 'complete cctv package bangladesh', 'factory security cameras'],
    relatedServices: ['cctv-system-setup', 'cctv-installation', 'ip-camera-installation'],
    relatedProductSlugs: ['cctv-camera', 'cctv-dvr-system', 'cctv-hard-disk'],
    faqs: [
      { question: 'বিদ্যুৎ না থাকলেও কি ক্যামেরা রেকর্ডিং চালিয়ে যাবে?', answer: 'হ্যাঁ, আমাদের দেওয়া সিকিউরিটি প্যাকেজে ডিসি ইউপিএস বা ইনভার্টার সংযোগ করে বিদ্যুৎ ছাড়াও ক্যামেরা চালু রাখা যায়।' }
    ]
  },
  'cctv-system-setup': {
    slug: 'cctv-system-setup',
    name: 'CCTV System Setup',
    bnName: 'সিসিটিভি সিস্টেম সেটআপ ও কনফিগারেশন',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • CCTV System Setup & Configuration Service',
    metaDescription: 'সিসিটিভি সিস্টেম হার্ডডিস্ক ফরম্যাট, রেকর্ডিং মোড ও নেটওয়ার্ক কনফিগারেশন। দক্ষ ইঞ্জিনিয়ার দিয়ে দ্রুত কাজ। হটলাইন: 01790139333।',
    h1: 'Complete CCTV System Setup & Parameter Configuration',
    tagline: 'Expert DVR/NVR Optimization, Storage Calibration & Remote Viewing',
    bengaliTagline: 'ডিভিআর/এনভিআর অপটিমাইজেশন, স্টোরেজ ক্যালিব্রেশন ও রিমোট ভিউ কনফিগারেশন',
    description: 'নতুন ডিভিআর বা এনভিআর বসালেই কাজ শেষ নয়; হার্ডডিস্ক পার্টিশন, মোশন রেকর্ডিং মোড সিলেকশন, এইচ.২৬৫+ ভিডিও কম্প্রেশন এবং নেটওয়ার্ক পোর্ট ফরওয়ার্ডিং সঠিকভাবে না করলে স্টোরেজ দ্রুত শেষ হয়ে যায়। শামীম টেক সলিউশন প্রতিটি প্যারামিটার অপটিমাইজ করে দেয়।',
    keyFeatures: [
      'H.265+ কম্প্রেশন সক্রিয় করে হার্ডডিস্ক স্পেস ৫০% পর্যন্ত সাশ্রয়',
      'মোশন ডিটেকশন ও এরিয়া ইনট্রুশন রেকর্ডিং কনফিগারেশন',
      'ইমেইল ও মোবাইল নোটিফিকেশন পুশ অ্যালার্ট সেটআপ',
      'মাল্টি-ইউজার পাসওয়ার্ড ও অথরাইজেশন প্রিভিলেজ ম্যানেজমেন্ট'
    ],
    processSteps: [
      { title: '১. ফার্মওয়্যার আপডেট', desc: 'ডিভাইসের অফিসিয়াল লেটেস্ট ফার্মওয়্যার ইনস্টল।' },
      { title: '২. স্টোরেজ কনফিগারেশন', desc: 'হার্ডডিস্ক ইনিশিয়ালাইজ ও সাইক্লিক ওভাররাইট সেট।' },
      { title: '৩. নেটওয়ার্ক প্যারামিটার', desc: 'আইপি অ্যাসাইন, ডিএনএস ও ক্লাউড পি২পি বাইন্ডিং।' },
      { title: '৪. ইউজার ট্রেনিং', desc: 'মোবাইল থেকে প্লেব্যাক দেখা ও ভিডিও ক্লিপ সেভ করা শেখানো।' }
    ],
    pricingStartingFrom: '৳৫০০ / সিস্টেম',
    warrantyInfo: 'সেটিংস ব্যাকআপ সহ ফুল কনফিগারেশন গ্যারান্টি',
    popularSearchKeywords: ['cctv system setup', 'dvr configuration', 'nvr system setup'],
    relatedServices: ['dvr-installation', 'nvr-installation', 'cctv-online-view-setup'],
    relatedProductSlugs: ['dvr', 'nvr', 'cctv-hard-disk'],
    faqs: [
      { question: 'আমার ১ টিবি হার্ডডিস্কে কতদিন রেকর্ডিং থাকবে?', answer: 'H.265+ কম্প্রেশন ও মোশন সেটিংস অপটিমাইজ করলে ৪টি ক্যামেরায় প্রায় ২০-২৫ দিন পর্যন্ত ব্যাকআপ পাওয়া সম্ভব।' }
    ]
  },
  'ip-camera-installation': {
    slug: 'ip-camera-installation',
    name: 'IP Camera Installation',
    bnName: 'আইপি ক্যামেরা ইনস্টলেশন ও নেটওয়ার্কিং',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • IP Camera Setup & Installation',
    metaDescription: 'হাই-ডেফিনিশন আইপি ক্যামেরা ইনস্টলেশন ও PoE সুইচ ক্যাবলিং সার্ভিস। ক্রিস্টাল ক্লিয়ার ৪K/৫MP ভিডিও কোয়ালিটি। কল: 01790139333।',
    h1: 'High-Definition IP Camera Installation & PoE Setup',
    tagline: 'Ultra-Clear 3MP to 8K Digital Surveillance Over Structured Ethernet',
    bengaliTagline: 'ইথারনেট নেটওয়ার্কের মাধ্যমে আল্ট্রা-ক্লিয়ার ডিজিটাল আইপি নজরদারি',
    description: 'অ্যানালগ ক্যামেরার চেয়ে বহুগুণ স্পষ্ট ও দীর্ঘ দূরত্বের নজরদারির জন্য আইপি ক্যামেরা সেরা পছন্দ। আমরা CAT6 ক্যাবল, গিগাবিট PoE সুইচ ও NVR সহযোগে কর্পোরেট অফিস, শোরুম ও বহুতল ভবনে প্রফেশনাল আইপি ক্যামেরা নেটওয়ার্ক বাস্তবায়ন করি।',
    keyFeatures: [
      'PoE (Power over Ethernet) প্রযুক্তির মাধ্যমে একক ক্যাবলে পাওয়ার ও ডাটা ট্রান্সমিশন',
      '৩ মেগাপিক্সেল থেকে ৮ মেগাপিক্সেল (৪K) আল্ট্রা এইচডি ক্রিস্টাল ক্লিয়ার রেজ্যুলেশন',
      'টু-ওয়ে অডিও (Two-Way Audio) ইন্টারকম ও বিল্ট-ইন মাইক্রোফোন সাপোর্ট',
      'লং ডিসটেন্স ফাইবার অপটিক বা ক্যাট৬ ব্যাকবোন সহ বড় ক্যাম্পাসে ইনস্টলেশন'
    ],
    processSteps: [
      { title: '১. নেটওয়ার্ক ব্যান্ডউইথ প্ল্যান', desc: 'ক্যামেরা স্ট্রিমিং ও সুইচ ব্যান্ডউইথ গণনা।' },
      { title: '২. ক্যাট৬ ওয়্যারিং', desc: 'হাই-কোয়ালিটি কপার ক্যাট৬ ক্যাবলিং ও আরজে৪৫ পাঞ্চিং।' },
      { title: '৩. আইপি ক্যামেরা মাউন্টিং ও অ্যাড্রেসিং', desc: 'আইপি পুল কনফিগার করে এনভিআর-এ ম্যাপ করা।' },
      { title: '৪. ব্যান্ডউইথ টেস্ট ও ভিউ', desc: 'ল্যাগ ছাড়া রিয়েলটাইম ৩০ এফপিএস স্ট্রিমিং নিশ্চিতকরণ।' }
    ],
    pricingStartingFrom: '৳৭০০ / ক্যামেরা',
    warrantyInfo: '১ বছরের সার্ভিস ওয়ারেন্টি ও হার্ডওয়্যার গ্যারান্টি',
    popularSearchKeywords: ['ip camera installation', 'poe camera setup', 'hikvision ip camera fitting'],
    relatedServices: ['ip-camera-technician', 'ip-camera-setup', 'nvr-installation', 'lan-network-installation'],
    relatedProductSlugs: ['ip-camera', 'nvr', 'cat6-cable', 'network-switch'],
    faqs: [
      { question: 'অ্যানালগ ক্যামেরার তুলনায় আইপি ক্যামেরার সুবিধা কী?', answer: 'আইপি ক্যামেরায় ভিডিও ডিজিটালভাবে রেকর্ড হয়, গাড়ির নাম্বার প্লেট ও মানুষের চেহারা অত্যন্ত নিখুঁতভাবে চিহ্নিত করা যায়।' }
    ]
  },
  'ip-camera-technician': {
    slug: 'ip-camera-technician',
    name: 'IP Camera Technician',
    bnName: 'আইপি ক্যামেরা টেকনিশিয়ান ও ট্রাবলশুটিং',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • Expert IP Camera Technician Support',
    metaDescription: 'আইপি ক্যামেরা আইপি কনফ্লিক্ট, PoE ভোল্টেজ ড্রপ ও এনভিআর ডিসকানেক্ট সমস্যার দ্রুত সমাধান। অভিজ্ঞ আইপি টেকনিশিয়ান শামীম: 01790139333।',
    h1: 'Certified IP Camera Network Diagnostics & Repair',
    tagline: 'Fix IP Address Conflicts, PoE Voltage Drops & Stream Lag Issues',
    bengaliTagline: 'আইপি অ্যাড্রেস কনফ্লিক্ট, PoE পাওয়ার ড্রপ ও ভিডিও ল্যাগ সমস্যার স্থায়ী সমাধান',
    description: 'আইপি ক্যামেরায় নেটওয়ার্ক ড্রপ, পিং ফেইলুর, আইপি কনফ্লিক্ট বা পাসওয়ার্ড লক হয়ে গেলে অভিজ্ঞ আইপি টেকনিশিয়ান ছাড়া সমাধান করা অসম্ভব। টেকনিশিয়ান শামীম বিশেষ সফটওয়্যার টুলস দিয়ে যেকোনো ব্র্যান্ডের আইপি ক্যামেরা ডায়াগনসিস ও মেরামত করেন।',
    keyFeatures: [
      'ক্যামেরা আইপি অ্যাড্রেস সাবনেট কনফ্লিক্ট নিরসন ও স্ট্যাটিক আইপি অ্যাসাইন',
      'PoE সুইচের পোর্ট পাওয়ার ফ্ল্যাকচুয়েশন ও ক্যাবল টেস্ট',
      'অনভিফ (ONVIF) প্রোটোকল কনফিগার করে ভিন্ন ভিন্ন ব্র্যান্ড এক এনভিআর-এ যুক্ত করা',
      'আইপি ক্যামেরা ফার্মওয়্যার ব্রিক রিকভারি ও হার্ড রিসেট'
    ],
    processSteps: [
      { title: '১. নেটওয়ার্ক স্ক্যান', desc: 'এসএডিটি বা আইপি স্ক্যানার দিয়ে ডিভাইস স্ট্যাটাস ট্র্যাকিং।' },
      { title: '২. ক্যাবলিং টেস্টার চেক', desc: '৮টি তারের কন্টিনিউইটি ও লস টেস্ট।' },
      { title: '৩. প্রোটোকল কনফ্লিক্ট ফিক্স', desc: 'RTSP/ONVIF স্ট্রিমিং প্যারামিটার সংশোধন।' },
      { title: '৪. স্টেবিলিটি টেস্ট', desc: '২৪ ঘণ্টা প্যাকেট লস বিহীন স্ট্রিমিং ভেরিফিকেশন।' }
    ],
    pricingStartingFrom: '৳৫০০ (ভিজিট ও ডায়াগনস্টিক)',
    warrantyInfo: 'আইপি নেটওয়ার্ক স্ট্যাবিলিটি নিশ্চয়তা',
    popularSearchKeywords: ['ip camera technician', 'poe camera troubleshooting', 'ip camera repair rangpur'],
    relatedServices: ['ip-camera-installation', 'ip-camera-setup', 'nvr-installation'],
    relatedProductSlugs: ['ip-camera', 'network-switch', 'cat6-cable', 'rj45-connector'],
    faqs: [
      { question: 'আমার আইপি ক্যামেরা এনভিআর-এ দেখাচ্ছে কিন্তু ফোনে দেখাচ্ছে না কেন?', answer: 'এটি এনভিআর-এর গেটওয়ে বা পি২পি ক্লাউড অফলাইন হওয়ার কারণে ঘটে। আমরা রাউটার ডিএনএস ও গেটওয়ে ফিক্স করে সমাধান করে দিই।' }
    ]
  },
  'ip-camera-setup': {
    slug: 'ip-camera-setup',
    name: 'IP Camera Setup & Configuration',
    bnName: 'আইপি ক্যামেরা সেটআপ ও কনফিগারেশন',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • IP Camera Setup & Configuration',
    metaDescription: 'আইপি ক্যামেরা আরটিএসপি স্ট্রিমিং, ক্লাউড পি২পি ও মোশন ডিটেকশন সেটআপ। দ্রুত সার্ভিসের জন্য কল করুন: 01790139333।',
    h1: 'Professional IP Camera Network & Cloud Configuration',
    tagline: 'Secure Subnets, RTSP Streaming & AI Analytics Setup',
    bengaliTagline: 'নিরাপদ সাবনেট, আরটিএসপি স্ট্রিমিং ও এআই অ্যালগরিদম সেটআপ',
    description: 'আইপি ক্যামেরার নিরাপত্তা নিশ্চিত করতে ডিফল্ট পোর্ট পরিবর্তন, স্ট্রং পাসওয়ার্ড তৈরি, আইপি হোয়াইটলিস্টিং এবং স্মার্ট ফোন অ্যাপে শেয়ারিং প্রিভিলেজ সেটআপ অত্যন্ত জরুরি। শামীম টেক সলিউশন আপনার আইপি ক্যামেরা সিস্টেমকে হ্যাকিং ঝুঁকিমুক্ত করে কনফিগার করে।',
    keyFeatures: [
      'সাইবার সিকিউরিটি প্রিভেনশন: ডিফল্ট পাসওয়ার্ড ও পোর্ট চেঞ্জ',
      'স্মার্ট এআই হিউম্যান ও ভেহিকল ট্র্যাকিং প্যারামিটার টিউনিং',
      'হিক-কানেক্ট (Hik-Connect), ডিএমএসএস (DMSS) বা ভিথ্রিএইটি (V380) ক্লাউড সিঙ্ক',
      'এসডি কার্ড ও এনভিআর ডুয়েল রেকর্ডিং মোড অ্যাক্টিভেশন'
    ],
    processSteps: [
      { title: '১. ইনিশিয়ালাইজেশন', desc: 'নতুন আইপি ক্যামেরা অ্যাক্টিভেশন ও স্ট্রং পাসওয়ার্ড পলিসি।' },
      { title: '২. নেটওয়ার্ক বাইন্ডিং', desc: 'রাউটারের সাথে স্ট্যাটিক আইপি রিজার্ভেশন।' },
      { title: '৩. অ্যাপ কানেক্টিভিটি', desc: 'গ্রাহকের প্রাইমারি মোবাইলে কিউআর কোড স্ক্যান করে পেয়ারিং।' },
      { title: '৪. পারমিশন শেয়ার', desc: 'পরিবারের অন্য সদস্যদের ফোনে ভিউ-অনলি পারমিশন প্রদান।' }
    ],
    pricingStartingFrom: '৳৪০০ / ক্যামেরা',
    warrantyInfo: 'লাইভ স্ট্রিমিং স্ট্যাবিলিটি নিশ্চয়তা',
    popularSearchKeywords: ['ip camera setup', 'configure ip camera on nvr', 'hik-connect setup'],
    relatedServices: ['ip-camera-installation', 'mobile-cctv-viewing', 'cctv-online-view-setup'],
    relatedProductSlugs: ['ip-camera', 'nvr', 'router'],
    faqs: [
      { question: 'রাউটার চেঞ্জ করলে কি আইপি ক্যামেরা নতুন করে সেট করতে হবে?', answer: 'হ্যাঁ, রাউটার পরিবর্তন করলে নতুন আইপি সাবনেট অনুযায়ী ক্যামেরা রিকনফিগার করতে হয়।' }
    ]
  },
  'wifi-camera-installation': {
    slug: 'wifi-camera-installation',
    name: 'WiFi Camera Installation',
    bnName: 'ওয়াইফাই ক্যামেরা ইনস্টলেশন ও মোবাইল কানেক্ট',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • WiFi Camera Installation & Mobile Setup',
    metaDescription: 'বাসা ও দোকানের জন্য ওয়্যারলেস ওয়াইফাই ক্যামেরা ইনস্টলেশন ও মোবাইল কানেক্ট সার্ভিস। Imou, V380, TP-Link Tapo ক্যামেরা সেটআপ। কল: 01790139333।',
    h1: 'Wireless WiFi Camera Setup & Mobile Integration',
    tagline: 'Wire-Free Flexibility, 360° Pan-Tilt & Mobile App Live Streaming',
    bengaliTagline: 'তারের ঝামেলামুক্ত ৩৬০ ডিগ্রি প্যান-টিল্ট ওয়াইফাই ক্যামেরা ও মোবাইল লাইভ ভিউ',
    description: 'তার টানার ঝামেলা ছাড়া বাসা, ফ্ল্যাট বা ছোট দোকানের নিরাপত্তা নিশ্চিত করতে ওয়াইফাই ক্যামেরা অত্যন্ত জনপ্রিয়। Imou Ranger, TP-Link Tapo, Mi, Jovision ও V380 ওয়াইফাই ক্যামেরা দেওয়াল বা সিলিংয়ে সুন্দরভাবে স্থাপন এবং মোবাইল ফোনে লাইভ ভিউ কানেক্ট করে দেয় শামীম টেক সলিউশন।',
    keyFeatures: [
      'তারহীন ও পরিচ্ছন্ন মাউন্টিং—ঘরের সৌন্দর্যে কোনো দাগ পড়ে না',
      '৩৬০ ডিগ্রি রোটেটিং (Pan-Tilt) ও টু-ওয়ে ভয়েস ইন্টারকম সুবিধা',
      'স্মার্ট মোশন ট্র্যাকিং ও মোবাইলে ইনস্ট্যান্ট পুশ অ্যালার্ম নোটিফিকেশন',
      'মেমোরি কার্ড (MicroSD) ও ক্লাউড স্টোরেজে ভিডিও সংরক্ষণ ব্যবস্থা'
    ],
    processSteps: [
      { title: '১. সিগন্যাল টেস্টিং', desc: 'ক্যামেরা স্থাপনের স্থানে ওয়াইফাই সিগন্যাল শক্তি পরিমাপ।' },
      { title: '২. পাওয়ার কানেকশন ও মাউন্টিং', desc: 'সিলিং বা দেওয়ালে সিকিউর মাউন্টিং ও অ্যাডাপ্টার সংযোগ।' },
      { title: '৩. অ্যাপ পেয়ারিং', desc: '২.৪ গিগাহার্টজ ওয়াইফাই নেটওয়ার্কে কিউআর কোডে পেয়ার করা।' },
      { title: '৪. মেমোরি কার্ড ফরম্যাট', desc: 'কার্ড ফরম্যাট করে কন্টিনিউয়াস ও মোশন রেকর্ডিং টেস্ট।' }
    ],
    pricingStartingFrom: '৳৩৫০ / ক্যামেরা',
    warrantyInfo: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি সহ ইনস্টলেশন সহায়তা',
    popularSearchKeywords: ['wifi camera installation', 'imou camera setup', 'wireless cctv camera fitting'],
    relatedServices: ['mobile-cctv-viewing', 'cctv-online-view-setup'],
    relatedProductSlugs: ['wifi-camera', 'wireless-camera', 'indoor-cctv-camera'],
    faqs: [
      { question: 'ওয়াইফাই না থাকলে কি ওয়াইফাই ক্যামেরা রেকর্ড করতে পারে?', answer: 'হ্যাঁ, ওয়াইফাই না থাকলেও মেমোরি কার্ডে অবিরত রেকর্ডিং চলতে থাকে এবং হটস্পটের মাধ্যমে কাছে গিয়ে ভিডিও দেখা যায়।' }
    ]
  },
  'dvr-installation': {
    slug: 'dvr-installation',
    name: 'DVR Installation & Setup',
    bnName: 'ডিভিআর ইনস্টলেশন ও হার্ডডিস্ক সেটআপ',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • DVR Installation & Setup Service in Bangladesh',
    metaDescription: '৪, ৮, ১৬ ও ৩২ চ্যানেল ডিভিআর ইনস্টলেশন ও রেকর্ডিং সেটআপ। Hikvision, Dahua অরিজিনাল DVR। হটলাইন: 01790139333।',
    h1: 'Professional DVR Installation, Hard Drive Mounting & Setup',
    tagline: 'Reliable 4/8/16/32 Channel Digital Video Recorders for Surveillance',
    bengaliTagline: '৪/৮/১৬/৩২ চ্যানেল ডিজিটাল ভিডিও রেকর্ডার স্থাপন ও অপটিমাইজেশন',
    description: 'ডিভিআর (Digital Video Recorder) হলো অ্যানালগ ও এইচডি সিসিটিভি ক্যামেরার মূল মস্তিষ্ক। শামীম টেক সলিউশন ৪ চ্যানেল থেকে ৩২ চ্যানেল পর্যন্ত সব ব্র্যান্ডের ডিভিআরে সার্ভিলেন্স গ্রেড হার্ডডিস্ক ফিটিং, কুলিং ভেন্টিলেশন ও পাওয়ার অ্যাডাপ্টার সহকারে নিরাপদ স্থানে স্থাপন করে।',
    keyFeatures: [
      'Hikvision, Dahua, Jovision ৪/৮/১৬/৩২ চ্যানেল অরিজিনাল ডিভিআর সাপোর্ট',
      'Seagate SkyHawk / WD Purple সার্ভিলেন্স হার্ডডিস্ক মাউন্টিং',
      'এইচডিএমআই ও ভিজিএ মনিটর ডিসপ্লে আউটপুট কনফিগারেশন',
      'ল্যান পোর্টে ইন্টারনেট সংযোগ দিয়ে ফ্রি পি২পি ক্লাউড লাইভ স্ট্রিমিং'
    ],
    processSteps: [
      { title: '১. হার্ডডিস্ক মাউন্টিং', desc: 'শক-প্রুফ স্ক্রু দিয়ে ডিভিআর চেসিসে হার্ডডিস্ক স্থাপন ও সাটা ক্যাবলিং।' },
      { title: '২. ক্যামেরা কানেকশন', desc: 'পিছনে বিএনসি পোর্ট অনুযায়ী ক্যামেরা চ্যানেল গ্রুপিং।' },
      { title: '৩. রেজ্যুলেশন ম্যাচিং', desc: '১০৮০পি ও ৫ মেগাপিক্সেল এনকোডিং প্যারামিটার ফিক্সিং।' },
      { title: '৪. ড্রাইভ ইনিশিয়ালাইজেশন', desc: 'হার্ডডিস্ক এরর ফ্রি ফরম্যাট করে অটো-রেকর্ডিং চালু করা।' }
    ],
    pricingStartingFrom: '৳৬০০ / ইউনিট',
    warrantyInfo: 'ডিভিআর হার্ডওয়্যারে ২ বছরের অফিসিয়াল ওয়ারেন্টি সাপোর্ট',
    popularSearchKeywords: ['dvr installation', 'cctv dvr setup', 'hikvision dvr installation'],
    relatedServices: ['dvr-nvr-technician', 'cctv-system-setup', 'cctv-online-view-setup'],
    relatedProductSlugs: ['dvr', 'cctv-dvr-system', 'cctv-hard-disk'],
    faqs: [
      { question: 'ডিভিআর-এ সাধারণ কম্পিউটারের হার্ডডিস্ক লাগানো যাবে কি?', answer: 'সাধারণ পিসি হার্ডডিস্ক ২৪/৭ রেকর্ডিংয়ের লোড নিতে পারে না এবং দ্রুত নষ্ট হয়ে যায়। আমরা সবসময় স্পেশাল সার্ভিলেন্স হার্ডডিস্ক ব্যবহারের পরামর্শ দেই।' }
    ]
  },
  'nvr-installation': {
    slug: 'nvr-installation',
    name: 'NVR Installation & Setup',
    bnName: 'এনভিআর ইনস্টলেশন ও নেটওয়ার্ক কনফিগারেশন',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • NVR Installation & Setup Service in Bangladesh',
    metaDescription: 'PoE এনভিআর ইনস্টলেশন, আইপি ক্যামেরা ম্যাপিং ও ৪K রেকর্ডিং সেটআপ। নির্ভরযোগ্য সার্ভিসের জন্য কল: 01790139333।',
    h1: 'Enterprise NVR Installation & IP Camera Network Mapping',
    tagline: 'High-Throughput Network Video Recorders for 4K IP Camera Systems',
    bengaliTagline: '৪K আল্ট্রা এইচডি আইপি নজরদারির জন্য হাই-থ্রুপুট নেটওয়ার্ক ভিডিও রেকর্ডার স্থাপন',
    description: 'আইপি ক্যামেরার জন্য এনভিআর (Network Video Recorder) অপরিহার্য। এটি সর্বোচ্চ ব্যান্ডউইথে ৪K ও ৫ মেগাপিক্সেল ক্যামেরার ডেটা প্রসেস করে। আমরা বিল্ট-ইন PoE এবং এক্সটার্নাল গিগাবিট সুইচ ভিত্তিক সব ধরনের এনভিআর সফলভাবে স্থাপন করে থাকি।',
    keyFeatures: [
      'PoE এনভিআর ও স্ট্যান্ডার্ড আইপি এনভিআর সেটআপ ও ক্যাবলিং',
      'মাল্টি-চ্যানেল সাইমুলটেনিয়াস ৪K আল্ট্রা এইচডি প্লেব্যাক সাপোর্ট',
      'রেইড (RAID) ও মাল্টিপল হার্ডডিস্ক বে ব্যাকআপ কনফিগারেশন',
      'হিউম্যান বডি ও ফেস রিকগনিশন এআই এনভিআর ফিচার এনাবলমেন্ট'
    ],
    processSteps: [
      { title: '১. ব্যান্ডউইথ ক্যালকুলেশন', desc: 'ক্যামেরার বিটরেট অনুযায়ী এনভিআর থ্রুপুট ব্যালেন্স করা।' },
      { title: '২. সার্ভিলেন্স ড্রাইভ সেটআপ', desc: 'মাল্টিপল হার্ডডিস্ক ইনস্টল ও ফরম্যাটিং।' },
      { title: '৩. আইপি ক্যামেরা পেয়ারিং', desc: 'PoE প্লাগ-অ্যান্ড-প্লে অথবা সাবনেট আইপি ম্যাপিং।' },
      { title: '৪. ক্লাউড রিমোট ভিউ', desc: 'মোবাইল ও পিসির জন্য লাইভ ভিউ চালু করা।' }
    ],
    pricingStartingFrom: '৳৮০০ / ইউনিট',
    warrantyInfo: '২ বছরের ব্র্যান্ড ওয়ারেন্টি ও প্রিমিয়াম ইনস্টলেশন সার্ভিস',
    popularSearchKeywords: ['nvr installation', 'poe nvr setup', 'hikvision nvr installation'],
    relatedServices: ['ip-camera-installation', 'dvr-nvr-technician', 'cctv-system-setup'],
    relatedProductSlugs: ['nvr', 'cctv-nvr-system', 'cctv-hard-disk', 'network-switch'],
    faqs: [
      { question: 'একটি এনভিআর-এ সর্বোচ্চ কতগুলো ক্যামেরা যুক্ত করা যায়?', answer: 'মডেলভেদে ৪, ৮, ১৬, ৩২, ৬৪ থেকে ১২৮ চ্যানেল পর্যন্ত ক্যামেরা এনভিআর-এ যুক্ত করা যায়।' }
    ]
  },
  'dvr-nvr-technician': {
    slug: 'dvr-nvr-technician',
    name: 'DVR & NVR Technician',
    bnName: 'ডিভিআর ও এনভিআর টেকনিশিয়ান সার্ভিস',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • DVR & NVR Repair & Technical Support',
    metaDescription: 'ডিভিআর/এনভিআর বিপিং সাউন্ড, রিবুট সমস্যা, পাসওয়ার্ড ভুলে যাওয়া বা হার্ডডিস্ক না পাওয়ার সমাধান। কল করুন টেকনিশিয়ান শামীম: 01790139333।',
    h1: 'Certified DVR & NVR Troubleshooting & Motherboard Diagnostics',
    tagline: 'Fix Continuous Beeping, Reboot Loops, Password Locks & Storage Failures',
    bengaliTagline: 'একটানা বিপ শব্দ, অটো রিবুট, পাসওয়ার্ড লক ও হার্ডডিস্ক এরর সমস্যার দ্রুত সমাধান',
    description: 'ডিভিআর বা এনভিআরে একটানা বিপ শব্দ হওয়া, বারবার রিস্টার্ট নেওয়া, ডিসপ্লেতে ছবি না আসা কিংবা মাস্টার পাসওয়ার্ড হারিয়ে যাওয়ার মতো যেকোনো কারিগরি ত্রুটিতে টেকনিশিয়ান শামীম দ্রুত সার্ভিস দিয়ে থাকেন।',
    keyFeatures: [
      'অফিসিয়াল টুলস দিয়ে ডিভিআর ও এনভিআর সিকিউর পাসওয়ার্ড রিসেট',
      'অটো-রিস্টার্ট ও পাওয়ার আইসি (IC) ফ্ল্যাকচুয়েশন সার্কিট মেরামত',
      'হার্ডডিস্ক আন-ইনিশিয়ালাইজড ও ব্যাড সেক্টর ডায়াগনসিস',
      'ফার্মওয়্যার ক্র্যাশ রিকভারি ও ফ্ল্যাশ প্রোগ্রামিং সাপোর্ট'
    ],
    processSteps: [
      { title: '১. এরর কোড চেক', desc: 'ডিভিআর স্ক্রিনে নোটিফিকেশন কোড ও লগ ফাইল এনালাইসিস।' },
      { title: '২. হার্ডওয়্যার ডায়াগনসিস', desc: 'পাওয়ার অ্যাডাপ্টার অ্যাম্পিয়ার ও মাদারবোর্ড ভোল্টেজ পরীক্ষা।' },
      { title: '৩. কম্পোনেন্ট রিপেয়ার', desc: 'খারাপ ক্যাপাসিটর বা কানেক্টর পরিবর্তন।' },
      { title: '৪. স্ট্রেস টেস্টিং', desc: 'ক্যামেরা লোড দিয়ে টানা টেস্ট রান সম্পন্ন করা।' }
    ],
    pricingStartingFrom: '৳৫০০ (ভিজিট ও মেরামত)',
    warrantyInfo: 'মেরামতকৃত অংশে বিশেষ সার্ভিস নিশ্চয়তা',
    popularSearchKeywords: ['dvr technician', 'nvr repair', 'dvr beeping sound fix', 'cctv password reset'],
    relatedServices: ['dvr-installation', 'nvr-installation', 'cctv-technician'],
    relatedProductSlugs: ['dvr', 'nvr', 'cctv-power-supply', 'cctv-hard-disk'],
    faqs: [
      { question: 'ডিভিআরে একটানা বিপ বিপ আওয়াজ হওয়ার কারণ কী?', answer: 'বেশিরভাগ ক্ষেত্রে এটি হার্ডডিস্ক নষ্ট হওয়া, কানেকশন লুজ হওয়া অথবা ভিডিও লসের কারণে ঘটে। আমরা চেক করে দ্রুত সমাধান করি।' }
    ]
  },
  'cctv-online-view-setup': {
    slug: 'cctv-online-view-setup',
    name: 'CCTV Online View Setup',
    bnName: 'সিসিটিভি অনলাইন ভিউ ও ক্লাউড কনফিগারেশন',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • CCTV Online View & Remote Live Stream Setup',
    metaDescription: 'ইন্টারনেটের মাধ্যমে যেকোনো স্থান থেকে সিসিটিভি ক্যামেরা লাইভ দেখার অনলাইন ভিউ সেটআপ। মোবাইল ও কম্পিউটার কনফিগারেশন। হটলাইন: 01790139333।',
    h1: 'Seamless CCTV Online View & Cloud Streaming Setup',
    tagline: 'Watch Your Home & Business Live from Anywhere in the World',
    bengaliTagline: 'বিশ্বের যেকোনো প্রান্ত থেকে বাড়ি ও ব্যবসার লাইভ নজরদারি',
    description: 'অফিস বা দোকানে কী হচ্ছে তা দূরে থেকেও দেখতে চান? আপনার সিসিটিভি সিস্টেমকে ইন্টারনেটের সাথে যুক্ত করে ক্লাউড পি২পি (P2P) প্রযুক্তির মাধ্যমে বিশ্বস্তভাবে যেকোনো স্থান থেকে ফোনে লাইভ ভিউ ও অডিও শোনার ব্যবস্থা করে দেয় শামীম টেক সলিউশন।',
    keyFeatures: [
      'Hik-Connect, gDMSS, iDMSS, XMeye, V380 প্রো ক্লাউড সার্ভার সংযোগ',
      'কোনো স্ট্যাটিক রিয়েল আইপি ছাড়াই ফ্রি পি২পি কানেকশন কনফিগারেশন',
      'মোবাইল ওয়াইফাই ও ৪G/৫G সিমে বাফার ছাড়া হাই-স্পিড ভিডিও স্ট্রিমিং',
      'ল্যাপটপ ও ডেক্সটপ পিসির জন্য ফ্রি আইভিএমএস (iVMS/SmartPSS) সফটওয়্যার সেটআপ'
    ],
    processSteps: [
      { title: '১. নেটওয়ার্ক কানেকশন', desc: 'ডিভিআর/এনভিআর-এ ব্রডব্যান্ড ল্যান ক্যাবল সংযোগ ও স্ট্যাটাস চেক।' },
      { title: '২. ক্লাউড এনেবলমেন্ট', desc: 'ডিভাইস মেন্যু থেকে ক্লাউড পি২পি স্ট্যাটাস অনলাইন করা।' },
      { title: '৩. অ্যাপ ইনস্টলেশন ও অ্যাকাউন্ট', desc: 'গ্রাহকের ফোনে অফিসিয়াল সিকিউর অ্যাকাউন্ট ক্রিয়েশন।' },
      { title: '৪. ভেরিফিকেশন কোড সেটআপ', desc: 'সিকিউরিটি ভেরিফিকেশন কোড দিয়ে ক্যামেরা লাইভ প্লে করা।' }
    ],
    pricingStartingFrom: '৳৩৫০ / ডিভিআর বা সিস্টেম',
    warrantyInfo: 'অনলাইন লাইভ স্ট্রিমিং গ্যারান্টি',
    popularSearchKeywords: ['cctv online view setup', 'watch cctv on mobile', 'hik-connect online setup'],
    relatedServices: ['mobile-cctv-viewing', 'cctv-system-setup', 'cctv-technician'],
    relatedProductSlugs: ['router', 'dvr', 'nvr'],
    faqs: [
      { question: 'মোবাইলে সিসিটিভি দেখতে কি রিয়েল আইপি প্রয়োজন?', answer: 'না! আধুনিক ক্লাউড পি২পি প্রযুক্তির মাধ্যমে কোনো রিয়েল আইপি ছাড়াই সম্পূর্ণ বিনামূল্যে মোবাইলে দেখা যায়।' }
    ]
  },
  'mobile-cctv-viewing': {
    slug: 'mobile-cctv-viewing',
    name: 'Mobile CCTV Viewing Setup',
    bnName: 'মোবাইলে সিসিটিভি ক্যামেরা দেখার সেটআপ',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • Mobile CCTV Viewing & Smartphone App Setup',
    metaDescription: 'অ্যান্ড্রয়েড ও আইফোনে সিসিটিভি ক্যামেরা দেখার সঠিক সেটআপ। লাইভ ভিডিও, প্লেব্যাক ও অডিও সাপোর্ট। কল: 01790139333।',
    h1: 'Mobile CCTV Viewing Configuration for Android & iOS',
    tagline: 'Instant Smartphone Access to Live Feeds, Playback & Motion Alerts',
    bengaliTagline: 'স্মার্টফোনে লাইভ ক্যামেরা ফুটেজ, পুরোনো রেকর্ডিং প্লেব্যাক ও অ্যালার্ট সাপোর্ট',
    description: 'আপনার হাতে থাকা অ্যান্ড্রয়েড বা আইফোনে সিসিটিভি লাইভ দেখার পাশাপাশি পেছনের দিনের রেকর্ডিং প্লেব্যাক দেখা, স্ক্রিনশট নেওয়া এবং প্রয়োজনীয় ফুটেজ ডাউনলোড করার পূর্ণাঙ্গ মোবাইল সেটআপ ও প্রশিক্ষণ সেবা।',
    keyFeatures: [
      'অ্যান্ড্রয়েড ও অ্যাপল আইওএস (iPhone/iPad) উভয় ডিভাইসে পারফেক্ট সাপোর্ট',
      'তারিখ ও সময় নির্বাচন করে পেছনের দিনের ফুটেজ মোবাইলে প্লেব্যাক করার সুবিধা',
      'মোবাইলে জরুরি ভিডিও ক্লিপ সরাসরি ডাউনলোড করে হোয়াটসঅ্যাপে শেয়ারিং',
      'মোবাইল স্ক্রিন অফ থাকলেও মোশন ডিটেকশনে শব্দ সহ পুশ নোটিফিকেশন'
    ],
    processSteps: [
      { title: '১. অ্যাপ ইন্সটল', desc: 'অফিসিয়াল অ্যাপ প্লে স্টোর বা অ্যাপল স্টোর থেকে ডাউনলোড।' },
      { title: '২. অ্যাকাউন্ট ও বাইন্ডিং', desc: 'সিকিউর পাসওয়ার্ড দিয়ে ডিভাইস অ্যাড করা।' },
      { title: '৩. প্লেব্যাক কনফিগারেশন', desc: 'ক্যালেন্ডার ও টাইমলাইন থেকে ভিডিও দেখা শেখানো।' },
      { title: '৪. হ্যান্ডস-অন প্র্যাকটিস', desc: 'গ্রাহককে নিজে থেকে পরিচালনা করতে দিয়ে নিশ্চিত হওয়া।' }
    ],
    pricingStartingFrom: '৳৩০০ / মোবাইল ডিভাইস',
    warrantyInfo: 'লাইফটাইম রিমোট অ্যাপ সাপোর্ট',
    popularSearchKeywords: ['mobile cctv viewing', 'cctv app setup', 'watch cctv on phone'],
    relatedServices: ['cctv-online-view-setup', 'cctv-troubleshooting'],
    relatedProductSlugs: ['wifi-camera', 'dvr', 'nvr'],
    faqs: [
      { question: 'একটি সিসিটিভি সিস্টেম কি পরিবারের একাধিক মোবাইলে দেখা যায়?', answer: 'হ্যাঁ, মূল এডমিন অ্যাকাউন্ট থেকে পরিবারের বাকি সদস্যদের ফোনে অনায়াসে শেয়ার করা যায়।' }
    ]
  },
  'cctv-troubleshooting': {
    slug: 'cctv-troubleshooting',
    name: 'CCTV Troubleshooting',
    bnName: 'সিসিটিভি ট্রাবলশুটিং ও দ্রুত সমস্যা সমাধান',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • Emergency CCTV Troubleshooting Service',
    metaDescription: 'সিসিটিভি ক্যামেরা ব্ল্যাক স্ক্রিন, নো ভিডিও, সিগন্যাল লস বা নো সিগন্যাল সমস্যার জরুরি ট্রাবলশুটিং সেবা। কল করুন: 01790139333।',
    h1: 'Rapid CCTV Troubleshooting & Signal Recovery',
    tagline: 'Diagnose & Resolve Black Screens, Signal Losses & Video Distortions',
    bengaliTagline: 'কালো স্ক্রিন, সিগন্যাল ড্রপ ও ভিডিও বিকৃতির দ্রুত ডায়াগনসিস ও প্রতিকার',
    description: 'হঠাৎ ক্যামেরা বন্ধ হয়ে যাওয়া, স্ক্রিনে নো ভিডিও সিগন্যাল আসা, তার ছিঁড়ে যাওয়া বা ভিডিও লাইনে নয়েজ দেখা দিলে শামীম টেক সলিউশন দ্রুত স্পটে উপস্থিত হয়ে উন্নত টেস্টিং ডিভাইস দিয়ে সমস্যা শনাক্ত ও নিরাময় করে।',
    keyFeatures: [
      'ভিডিও সিগন্যাল ড্রপ ও ফল্টি বিএনসি/ডিসি কানেক্টর তাৎক্ষণিক প্রতিস্থাপন',
      '১২ ভোল্ট অ্যাডাপ্টার ও সেন্ট্রাল পাওয়ার সাপ্লাই ভোল্টেজ ট্রাবলশুটিং',
      'ইন্টারনেট রাউটার ও ডিভিআর ল্যান কেবল ফল্ট ট্র্যাকিং',
      'গ্রাউন্ড লুপ ও ইলেকট্রিক্যাল নয়েজ ফিল্টারিং'
    ],
    processSteps: [
      { title: '১. টেস্ট মনিটর সংযোগ', desc: 'ক্যামেরার মুখে সরাসরি পোর্টেবল মনিটর দিয়ে চেক করা।' },
      { title: '২. ভোল্টেজ টেস্ট', desc: 'মাল্টিমিটারে লোড ভোল্টেজ ড্রপ টেস্ট।' },
      { title: '৩. ক্যাবল কন্টিনিউইটি', desc: 'ক্যাবল ট্র্যাকার দিয়ে তারের কোথাও কাটা আছে কি না শনাক্ত করা।' },
      { title: '৪. ফিক্স ও ভেরিফাই', desc: 'নষ্ট পার্টস মেরামত বা পরিবর্তন করে রিকভার করা।' }
    ],
    pricingStartingFrom: '৳৩০০ থেকে শুরু',
    warrantyInfo: 'সমস্যার দ্রুত সমাধান নিশ্চয়তা',
    popularSearchKeywords: ['cctv troubleshooting', 'cctv no video fix', 'cctv camera black screen'],
    relatedServices: ['cctv-technician', 'cctv-repair-maintenance'],
    relatedProductSlugs: ['cctv-connectors', 'cctv-adapter', 'cctv-power-supply'],
    faqs: [
      { question: 'ক্যামেরা ডিসপ্লেতে হঠাৎ নো ভিডিও দেখালে কী করণীয়?', answer: 'প্রথমে ক্যামেরার পাওয়ার অ্যাডাপ্টার সকেটে ঠিকমতো লাগানো আছে কি না দেখুন। ঠিক না হলে আমাদের কল করুন, আমরা এসে ঠিক করে দেব।' }
    ]
  },
  'cctv-maintenance': {
    slug: 'cctv-maintenance',
    name: 'CCTV Maintenance Service',
    bnName: 'সিসিটিভি মেইনটেন্যান্স ও নিয়মিত সার্ভিসিং',
    category: 'CCTV & Surveillance',
    title: 'SHAMIM TECH SOLUTION • Routine CCTV Maintenance & AMC Contracts',
    metaDescription: 'বাসা, ফ্যাক্টরি ও প্রতিষ্ঠানের জন্য নিয়মিত সিসিটিভি ক্যামেরা মেইনটেন্যান্স ও বাৎসরিক এএমসি (AMC) সার্ভিস। কল: 01790139333।',
    h1: 'Comprehensive CCTV Preventative Maintenance & AMC',
    tagline: 'Guaranteed 99.9% Surveillance Uptime with Scheduled Inspections',
    bengaliTagline: 'নির্ধারিত নিয়মিত পরিদর্শনের মাধ্যমে ৯৯.৯% নিরবচ্ছিন্ন নজরদারির নিশ্চয়তা',
    description: 'সিসিটিভি ক্যামেরা বছরের পর বছর ধূলাবালি ও রোদে থাকায় লেন্স ঘোলা হয় এবং কানেক্টর জং ধরে। নিয়মিত মেইনটেন্যান্সের মাধ্যমে ক্যামেরার ফুটেজ ক্রিস্টাল ক্লিয়ার রাখা যায় এবং হার্ডডিস্ক নষ্ট হওয়ার পূর্বেই ব্যাকআপ নিশ্চিত করা যায়।',
    keyFeatures: [
      'ক্যামেরা গ্লাস ও লেন্স থেকে ধূলাবালি, মাকড়শার জাল ও দাগ পরিষ্কারকরণ',
      'কানেক্টর ও পাওয়ার পয়েন্টে কার্বন ও জং দূরীকরণ এবং টাইটনিং',
      'হার্ডডিস্কের স্বাস্থ্য (SMART Health) ও রেকর্ডিং হিস্টোরি অডিট',
      'বাৎসরিক রক্ষণাবেক্ষণ চুক্তি (Annual Maintenance Contract - AMC) সুবিধা'
    ],
    processSteps: [
      { title: '১. ফিজিক্যাল ইন্সপেকশন', desc: 'প্রতিটি ক্যামেরা বডি ও ক্যাবল কন্ডিশন পরীক্ষা।' },
      { title: '২. ডিপ ক্লিনিং', desc: 'অ্যালকোহল ওয়াইপ ও অপটিক্যাল ক্লিনার দিয়ে লেন্স পরিষ্কার।' },
      { title: '৩. স্টোরেজ হেলথ চেক', desc: 'হার্ডডিস্কের ব্যাড সেক্টর স্ক্যান।' },
      { title: '৪. অডিট রিপোর্ট', desc: 'গ্রাহককে মেইনটেন্যান্স রিপোর্ট ও পরামর্শ প্রদান।' }
    ],
    pricingStartingFrom: 'মাসিক বা বাৎসরিক চুক্তি সাপেক্ষে সাশ্রয়ী রেট',
    warrantyInfo: 'নিরবচ্ছিন্ন সিকিউরিটি সিস্টেম আপটাইম সাপোর্ট',
    popularSearchKeywords: ['cctv maintenance', 'cctv amc bangladesh', 'security camera servicing contract'],
    relatedServices: ['cctv-repair-maintenance', 'cctv-system-setup'],
    relatedProductSlugs: ['cctv-accessories', 'cctv-power-supply', 'cctv-hard-disk'],
    faqs: [
      { question: 'সিসিটিভি ক্যামেরা কত দিন পর পর মেইনটেন্যান্স করা উচিত?', answer: 'সাধারণত প্রতি ৩ থেকে ৬ মাস পর পর লেন্স ও কানেক্টর মেইনটেন্যান্স করানো বুদ্ধিমানের কাজ।' }
    ]
  },

  // 2. Access Control Services
  'access-control-installation': {
    slug: 'access-control-installation',
    name: 'Access Control Installation',
    bnName: 'অ্যাক্সেস কন্ট্রোল ইনস্টলেশন ও সেটআপ',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • Access Control Installation & Service',
    metaDescription: 'অফিস ও বাসার দরজার জন্য সিকিউর অ্যাক্সেস কন্ট্রোল সিস্টেম ইনস্টলেশন। ফিঙ্গারপ্রিন্ট, আরএফআইডি কার্ড ও পাসকোড লক। কল: 01790139333।',
    h1: 'Enterprise Access Control Installation & Door Security',
    tagline: 'Authorized Entry Protection with Biometrics, RFID & Smart Locks',
    bengaliTagline: 'বায়োমেট্রিক, আরএফআইডি কার্ড ও স্মার্ট লকের মাধ্যমে নিরাপদ প্রবেশাধিকার',
    description: 'অননুমোদিত প্রবেশ রুখতে অফিস, ব্যাংক ভল্ট, সার্ভার রুম ও বাড়ির প্রবেশপথে আধুনিক অ্যাক্সেস কন্ট্রোল সিস্টেম স্থাপন করে শামীম টেক সলিউশন। ZKTeco ও Realand ব্র্যান্ডের ফিঙ্গারপ্রিন্ট, ফেস রিডার ও কার্ড রিডারের মাধ্যমে সর্বোচ্চ প্রবেশ নিরাপত্তা নিশ্চিত করা হয়।',
    keyFeatures: [
      'ফিঙ্গারপ্রিন্ট, আরএফআইডি কার্ড, ফেস ডিটেকশন ও পিনকোড ভেরিফিকেশন',
      'গ্লাস ডোর, কাঠের দরজা ও মেটাল সিকিউরিটি ডোরে মজবুত ইনস্টলেশন',
      'জরুরি পুশ-টু-এক্সিট (Push-to-Exit) বাটন ও রিমোট রিলিজ সুবিধা',
      'প্রবেশ ও প্রস্থান সময় ট্র্যাকিং সফটওয়্যার ইন্টিগ্রেশন'
    ],
    processSteps: [
      { title: '১. দরজা ও ফ্রেম অডিট', desc: 'দরজার ধরন (গ্লাস, কাঠ বা মেটাল) অনুযায়ী লক নির্বাচন।' },
      { title: '২. লক ও রিডার মাউন্টিং', desc: 'ম্যাগনেটিক বা বোল্ট লক এবং বাইরে রিডার স্থাপন।' },
      { title: '৩. পাওয়ার ও কন্ট্রোলার কানেকশন', desc: '১২ ভোল্ট ৩ অ্যাম্পিয়ার ইউপিএস পাওয়ার সংযোগ।' },
      { title: '৪. ইউজার রেজিস্ট্রেশন', desc: 'কর্মীদের ফিঙ্গারপ্রিন্ট ও কার্ড ডাটাবেজে যুক্ত করা।' }
    ],
    pricingStartingFrom: '৳১,৫০০ / ডোর ইনস্টলেশন',
    warrantyInfo: '১ বছরের পূর্ণাঙ্গ ইনস্টলেশন ও হার্ডওয়্যার ওয়ারেন্টি',
    popularSearchKeywords: ['access control installation', 'fingerprint door lock setup', 'zkteco access control'],
    relatedServices: ['access-control-technician', 'magnetic-door-lock-installation', 'electric-door-lock-installation', 'rfid-access-control-setup'],
    relatedProductSlugs: ['access-control-machine', 'magnetic-door-lock', 'electric-door-lock', 'rfid-access-control'],
    faqs: [
      { question: 'বিদ্যুৎ চলে গেলে কি দরজা খোলা যাবে?', answer: 'অ্যাক্সেস কন্ট্রোল সিস্টেমে সাধারণত পাওয়ার ব্যাকআপ ব্যাটারি থাকে। এছাড়া ফেইল-সেফ মোডে চাবি দিয়েও খোলা যায়।' }
    ]
  },
  'access-control-technician': {
    slug: 'access-control-technician',
    name: 'Access Control Technician',
    bnName: 'অ্যাক্সেস কন্ট্রোল টেকনিশিয়ান ও সার্ভিসিং',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • Access Control Technician & Repair',
    metaDescription: 'অ্যাক্সেস কন্ট্রোল ডোর লক না খোলা, রিমোট কাজ না করা বা রিডার ত্রুটির দ্রুত মেরামত। দক্ষ টেকনিশিয়ান: 01790139333।',
    h1: 'Certified Access Control Technician & Door Lock Repairs',
    tagline: 'Resolve Latch Malfunctions, Reader Failures & Access Software Glitches',
    bengaliTagline: 'ডোর লকিং ফল্ট, কার্ড রিডার এরর ও সফটওয়্যার সমস্যার দ্রুত সমাধান',
    description: 'অ্যাক্সেস কন্ট্রোল সিস্টেমে কার্ড সোয়াইপ করলে দরজা না খোলা, পুশ বাটন কাজ না করা, লক অতিরিক্ত গরম হওয়া বা মেশিনে ফিঙ্গারপ্রিন্ট রিড না করার মতো যেকোনো সমস্যা দক্ষ টেকনিশিয়ান দ্বারা মেরামত করা হয়।',
    keyFeatures: [
      'ইলেকট্রোম্যাগনেটিক লক কয়েল ডায়াগনসিস ও রি-অ্যালাইনমেন্ট',
      'ড্রপবোল্ট সেন্সর ও মেকানিক্যাল ল্যাচ রিপেয়ার',
      'পাওয়ার সাপ্লাই ব্যাকআপ ব্যাটারি পরিবর্তন',
      'অ্যাক্সেস কন্ট্রোল ম্যানেজমেন্ট সফটওয়্যার ডেটাবেজ ব্যাকআপ ও রিকভারি'
    ],
    processSteps: [
      { title: '১. লক মেকানিজম চেক', desc: 'দরজার ফ্রেম ও ম্যাগনেটের আকর্ষণ ক্ষমতা টেস্ট।' },
      { title: '২. রিলে সিগন্যাল ট্র্যাকিং', desc: 'মেশিন থেকে রিলে সিগন্যাল লকে পৌঁছাচ্ছে কি না যাচাই।' },
      { title: '৩. রিপেয়ার ও পার্টস চেঞ্জ', desc: 'প্রয়োজনে কানেক্টর বা সুইচ পরিবর্তন।' },
      { title: '৪. মাল্টিপল ইউজার টেস্ট', desc: 'কার্ড ও ফিঙ্গারপ্রিন্টে সফল ডোর রিলিজ পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳৬০০ (ভিজিট ও ডায়াগনসিস)',
    warrantyInfo: 'সার্ভিস নিশ্চয়তা ও অরিজিনাল স্পেয়ার পার্টস',
    popularSearchKeywords: ['access control technician', 'magnetic lock repair', 'door lock repair service'],
    relatedServices: ['access-control-installation', 'access-control-door-lock'],
    relatedProductSlugs: ['access-control-machine', 'magnetic-door-lock', 'access-control-accessories'],
    faqs: [
      { question: 'ম্যাগনেটিক লকটি দরজাকে ঠিকমতো ধরে রাখছে না কেন?', answer: 'এটি সাধারণত ১২ ভোল্ট পাওয়ার সাপ্লাই ভোল্টেজ কমে যাওয়া বা ম্যাগনেট ও আর্মেচার প্লেটের মাঝে ফাঁকা থাকার কারণে হয়।' }
    ]
  },
  'access-control-system-setup': {
    slug: 'access-control-system-setup',
    name: 'Access Control System Setup',
    bnName: 'অ্যাক্সেস কন্ট্রোল সিস্টেম কনফিগারেশন',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • Access Control System Setup & Software Configuration',
    metaDescription: 'অ্যাক্সেস কন্ট্রোল টাইম জোন, ইউজার এক্সেস পারমিশন ও সফটওয়্যার সেটআপ। প্রফেশনাল সেবা পেতে কল: 01790139333।',
    h1: 'Advanced Access Control System & Time-Zone Configuration',
    tagline: 'Granular Departmental Privileges, Automated Schedules & Audit Logs',
    bengaliTagline: 'বিভাগভিত্তিক প্রবেশাধিকার, অটোমেটেড শিডিউল ও এন্ট্রি-এক্সিট অডিট লগ',
    description: 'অফিসে কে কোন দরজায় কখন প্রবেশ করতে পারবে তা নিয়ন্ত্রণ করতে চাই টাইম জোন এবং ইউজার রোল কনফিগারেশন। শামীম টেক সলিউশন সেন্ট্রাল সফটওয়্যারে ডিপার্টমেন্ট অনুযায়ী প্রবেশাধিকার শিডিউল করে দেয়।',
    keyFeatures: [
      'টাইম জোন কনফিগারেশন: ছুটির দিন ও অফিস সময়ের বাইরে দরজা লক রাখা',
      'ডিভিশনাল এক্সেস: নির্দিষ্ট রুমে শুধু অনুমোদিত কর্মকর্তাদের প্রবেশের অনুমতি',
      'রিয়েলটাইম এন্ট্রি লগ মনিটরিং ও এক্সেল শিটে হিস্টোরি এক্সপোর্ট',
      'জরুরি ফায়ার অ্যালার্ম ট্র্রিগারে স্বয়ংক্রিয় ডোর আনলক ইন্টিগ্রেশন'
    ],
    processSteps: [
      { title: '১. আইপি কনফিগারেশন', desc: 'অ্যাক্সেস কন্ট্রোলার লোকাল ল্যানে যুক্ত করা।' },
      { title: '২. সফটওয়্যার ইনস্টল', desc: 'সার্ভার বা পিসিতে ZKAccess/BioAccess সফটওয়্যার ইনস্টলেশন।' },
      { title: '৩. ডিপার্টমেন্ট ম্যাপিং', desc: 'কর্মী তালিকা ও কার্ড নাম্বার অ্যাসাইন করা।' },
      { title: '৪. রিপোর্ট জেনারেশন টেস্ট', desc: 'দৈনিক এন্ট্রি-এক্সিট রিপোর্ট বের করে যাচাই।' }
    ],
    pricingStartingFrom: '৳১,০০০ / সিস্টেম',
    warrantyInfo: 'সফটওয়্যার ডাটাবেজ ব্যাকআপ নিশ্চয়তা',
    popularSearchKeywords: ['access control setup', 'zkteco software setup', 'door access configuration'],
    relatedServices: ['access-control-installation', 'biometric-machine-setup'],
    relatedProductSlugs: ['access-control-machine', 'access-control-system'],
    faqs: [
      { question: 'কোনো কর্মী চাকরি ছেড়ে দিলে তার কার্ড কীভাবে বাতিল করব?', answer: 'সফটওয়্যার থেকে তার আইডি ডিঅ্যাক্টিভেট করলেই তিনি আর দরজা খুলতে পারবেন না।' }
    ]
  },
  'access-control-door-lock': {
    slug: 'access-control-door-lock',
    name: 'Access Control Door Lock',
    bnName: 'অ্যাক্সেস কন্ট্রোল ডোর লক ফিটিং সার্ভিস',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • Access Control Door Lock Fitting & Upgrades',
    metaDescription: 'গ্লাস ও কাঠের দরজার জন্য অ্যাক্সেস কন্ট্রোল লক ফিটিং। ম্যাগনেটিক ও বোল্ট লক সংযোগ। কল: 01790139333।',
    h1: 'Access Control Door Lock Fitting & Hardware Integration',
    tagline: 'Heavy-Duty 280KG/500KG Locks for Glass, Wooden & Aluminum Doors',
    bengaliTagline: 'গ্লাস, কাঠ ও অ্যালুমিনিয়াম দরজার জন্য শক্তিশালী ডোর লক ফিটিং',
    description: 'সাধারণ দরজাকে হাই-সিকিউরিটি ইলেকট্রনিক দরজায় রূপান্তর করতে অ্যাক্সেস কন্ট্রোল ডোর লক স্থাপন অপরিহার্য। আমরা ফ্রেমলেস গ্লাস দরজার জন্য ইউ-ব্র্যাকেট ও কাঠের দরজার জন্য জেডএল ব্র্যাকেট সহকারে নিখুঁত ফিটিং করি।',
    keyFeatures: [
      '২৮০ কেজি (৬০০ পাউন্ড) এবং ৫০০ কেজি হোল্ডিং ফোর্স ম্যাগনেটিক লক',
      'ফ্রেমলেস গ্লাস ডোরের জন্য স্পেশাল ইউ-ব্র্যাকেট (U-Bracket) অ্যাসেম্বলি',
      'কাঠ ও অ্যালুমিনিয়াম দরজার জন্য এল ও জেডএল (ZL Bracket) সাপোর্ট',
      'ইমার্জেন্সি পুশ-বাটন ও ইনফ্রারেড নো-টাচ এক্সিট সেন্সর'
    ],
    processSteps: [
      { title: '১. ডোর অ্যালাইনমেন্ট', desc: 'দরজা বন্ধের সময় শূন্যস্থান ও ভারসাম্যের মাপ।' },
      { title: '২. ব্র্যাকেট ফিটিং', desc: 'শক্তিশালী মেটাল স্ক্রু দিয়ে ব্র্যাকেট স্থাপন।' },
      { title: '৩. লক প্লেট সংযোগ', desc: 'ম্যাগনেটিক আর্মেচার প্লেট রাবার ওয়াশার সহ ফিট করা।' },
      { title: '৪. হোল্ডিং টেস্ট', desc: 'সর্বোচ্চ শক্তিতে টান দিয়ে লকের স্থায়িত্ব পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳১,০০০ / ডোর',
    warrantyInfo: 'লক মেকানিজমে ১ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি',
    popularSearchKeywords: ['access control door lock', 'electronic door lock fitting', 'glass door magnetic lock'],
    relatedServices: ['magnetic-door-lock-installation', 'electric-door-lock-installation'],
    relatedProductSlugs: ['access-control-door-lock', 'magnetic-door-lock', 'electric-door-lock'],
    faqs: [
      { question: 'ফ্রেম ছাড়া কাঁচের দরজায় কি ম্যাগনেটিক লক লাগানো যায়?', answer: 'হ্যাঁ, কাঁচের দরজার জন্য বিশেষ ইউ-ব্র্যাকেট (U-bracket) ব্যবহার করে কোনো ড্রিল ছাড়া নিরাপদে লাগানো যায়।' }
    ]
  },
  'magnetic-door-lock-installation': {
    slug: 'magnetic-door-lock-installation',
    name: 'Magnetic Door Lock Installation',
    bnName: 'ম্যাগনেটিক ডোর লক ইনস্টলেশন (EM Lock)',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • Magnetic Door Lock Installation (EM Lock 280kg)',
    metaDescription: 'ইএম ম্যাগনেটিক ডোর লক ইনস্টলেশন ও ওয়্যারিং সার্ভিস। অফিস ও সার্ভার রুমের জন্য ২৮০ কেজি হোল্ডিং পাওয়ার। কল: 01790139333।',
    h1: 'Commercial Grade Magnetic Door Lock (EM Lock) Installation',
    tagline: 'Zero-Wear Electromagnetic Locking for High-Traffic Office Doors',
    bengaliTagline: 'অফিসের দরজায় দীর্ঘস্থায়ী ইলেক্ট্রোম্যাগনেটিক লকিং সলিউশন',
    description: 'ম্যাগনেটিক লকে কোনো চলমান মেকানিক্যাল পার্টস না থাকায় এটি বছরের পর বছর নষ্ট না হয়ে সেবা দেয়। ২৮০ কেজি ধারণক্ষমতাসম্পন্ন ইএম লক অফিস ও বাণিজ্যিক প্রতিষ্ঠানে সর্বোচ্চ নির্ভরযোগ্যতা প্রদান করে।',
    keyFeatures: [
      '২৮০ কেজি (৬০০ পাউন্ড) সুপার স্ট্রং ইলেক্ট্রোম্যাগনেটিক হোল্ডিং ফোর্স',
      'ফেইল-সেফ (Fail-Safe) ডিজাইন: অগ্নিকাণ্ড বা জরুরি অবস্থায় স্বয়ংক্রিয় রিলিজ',
      'অ্যালুমিনিয়াম অ্যালয় বডি—জংরোধী ও দীর্ঘস্থায়ী স্থায়িত্ব',
      'এলইডি ইন্ডিকেটর (লাল/সবুজ) দিয়ে লকের রিয়েল-টাইম স্ট্যাটাস ডিসপ্লে'
    ],
    processSteps: [
      { title: '১. ফ্রেম মার্কিং', desc: 'দরজার উপরের ফ্রেমে সঠিক ড্রিলিং পয়েন্ট নির্ধারণ।' },
      { title: '২. ইএম লক বডি মাউন্টিং', desc: 'হেভি-ডিউটি স্ক্রু দিয়ে লক ফ্রেম ফিক্স করা।' },
      { title: '৩. আর্মেচার প্লেট অ্যালাইন', desc: 'দরজার সাথে আর্মেচার প্লেট সমান্তরালে ফিট করা।' },
      { title: '৪. ১২ ভোল্ট পাওয়ার কানেকশন', desc: 'পাওয়ার সাপ্লাই সংযোগ ও এলইডি স্ট্যাটাস টেস্টিং।' }
    ],
    pricingStartingFrom: '৳১,২০০ / লক',
    warrantyInfo: '১ বছরের ব্র্যান্ড ওয়ারেন্টি ও ফ্রি টেকনিক্যাল সাপোর্ট',
    popularSearchKeywords: ['magnetic door lock installation', 'em lock 280kg fitting', 'glass door electromagnetic lock'],
    relatedServices: ['access-control-installation', 'electric-door-lock-installation'],
    relatedProductSlugs: ['magnetic-door-lock', 'access-control-machine'],
    faqs: [
      { question: 'ম্যাগনেটিক লক কি অনেক বেশি বিদ্যুৎ খরচ করে?', answer: 'না, এটি মাত্র ১২ ভোল্ট ডিসি এবং প্রায় ৫০০ মিলি-অ্যাম্পিয়ার বিদ্যুৎ টানে, যা খুবই নগণ্য।' }
    ]
  },
  'electric-door-lock-installation': {
    slug: 'electric-door-lock-installation',
    name: 'Electric Door Lock Installation',
    bnName: 'ইলেকট্রিক ডোর লক ও ড্রপবোল্ট ইনস্টলেশন',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • Electric Dropbolt & Strike Door Lock Installation',
    metaDescription: 'ইলেকট্রিক ড্রপবোল্ট ও মোটর ড্রাইভেন ইলেকট্রিক ডোর লক ইনস্টলেশন সার্ভিস। টু-ওয়ে সুইং দরজার জন্য উপযুক্ত। কল: 01790139333।',
    h1: 'Precision Electric Dropbolt & Rim Lock Installation',
    tagline: 'Concealed Heavy-Bolt Locking for Modern Swing Doors & Main Gates',
    bengaliTagline: 'সুইং দরজা ও প্রধান ফটকের জন্য নিখুঁত কনসিল্ড ইলেকট্রিক ড্রপবোল্ট লক',
    description: 'উভয় দিকে খোলে এমন কাঁচের দরজার জন্য ড্রপবোল্ট ইলেকট্রিক লক সেরা সমাধান। এছাড়া বাড়ির মেইন গেটের জন্য রিম লক (Electric Rim Lock) স্থাপন করে ইন্টারকম বা রিমোট বাটন দিয়ে দূর থেকেই গেট খোলার ব্যবস্থা করা যায়।',
    keyFeatures: [
      'দরজা বন্ধ হওয়ার সাথে সাথে স্টিলের শক্ত পিন নেমে লক হয়ে যাওয়া মেকানিজম',
      'টাইম ডিলে (০, ৩, ৬, ৯ সেকেন্ড) অটো-লকিং অ্যাডজাস্টমেন্ট',
      'টু-ওয়ে সুইং ডোরের জন্য ১৮০ ডিগ্রি মুভমেন্ট কমপ্যাটিবিলিটি',
      'ইন্টারকম ও ভিডিও ডোর ফোনের সাথে সরাসরি সংযোগ সুবিধা'
    ],
    processSteps: [
      { title: '১. লক চেম্বার কাটিং', desc: 'দরজা ও ফ্রেমে নিখুঁত খাঁজ তৈরি।' },
      { title: '২. ড্রপবোল্ট মাউন্টিং', desc: 'কনসিল্ড মাউন্টিং করে তারের সংযোগ লুকানো।' },
      { title: '৩. সেন্সর পেয়ারিং', desc: 'ম্যাগনেটিক সেন্সরের সাথে বোল্ট ড্রপের টাইমিং টিউনিং।' },
      { title: '৪. এক্সিট বাটন টেস্ট', desc: 'পুশ বাটন টিপে বোল্ট রিট্র্যাকশন নিশ্চিত করা।' }
    ],
    pricingStartingFrom: '৳১,২০০ / লক',
    warrantyInfo: '১ বছরের অফিসিয়াল গ্যারান্টি',
    popularSearchKeywords: ['electric door lock installation', 'dropbolt lock fitting', 'electric rim lock bangladesh'],
    relatedServices: ['magnetic-door-lock-installation', 'access-control-installation'],
    relatedProductSlugs: ['electric-door-lock', 'access-control-door-lock'],
    faqs: [
      { question: 'ড্রপবোল্ট লক কোন ধরণের দরজার জন্য সবচেয়ে ভালো?', answer: 'যেসব কাঁচের দরজা সামনে ও পেছনে উভয় দিকেই সুইং করে, সেগুলোতে ড্রপবোল্ট লক সবচেয়ে নিখুঁত কাজ করে।' }
    ]
  },
  'rfid-access-control-setup': {
    slug: 'rfid-access-control-setup',
    name: 'RFID Access Control Setup',
    bnName: 'আরএফআইডি কার্ড অ্যাক্সেস কন্ট্রোল সেটআপ',
    category: 'Access Control',
    title: 'SHAMIM TECH SOLUTION • RFID Card Access Control System Setup',
    metaDescription: 'আরএফআইডি কার্ড ও কী-ফব অ্যাক্সেস কন্ট্রোল সেটআপ। কর্মীদের স্পর্শহীন নিরাপদ প্রবেশাধিকার। কল: 01790139333।',
    h1: 'Contactless RFID Card & Keyfob Access Control Solutions',
    tagline: 'Fast, Hygienic & Durable Smart Card Verification for High Volumes',
    bengaliTagline: 'স্পর্শহীন, দ্রুত ও টেকসই স্মার্ট কার্ড অ্যাক্সেস কন্ট্রোল সিস্টেম',
    description: 'হাজারো কর্মীর দ্রুত প্রবেশ নিশ্চিত করতে আরএফআইডি (RFID 125kHz / 13.56MHz Mifare) কার্ড রিডার সবচেয়ে জনপ্রিয় ও সাশ্রয়ী সমাধান। শামীম টেক সলিউশন কার্ড প্রিন্টিং, রিডার মাউন্টিং ও সফটওয়্যার কনফিগারেশন এক ছাদের নিচে প্রদান করে।',
    keyFeatures: [
      '১২৫ কিলোজাহাটজ ইএম ও ১৩.৫৬ মেগাহার্টজ মাইফেয়ার স্মার্ট কার্ড সাপোর্ট',
      '০.২ সেকেন্ডে আল্ট্রা-ফাস্ট ভেরিফিকেশন—লাইনে ভিড় জমে না',
      'পানি ও ধূলাবালি রোধী আউটডোর ওয়েদারপ্রুফ আরএফআইডি রিডার',
      'একই কার্ড আইডি কার্ড এবং দরজার পাস হিসেবে ব্যবহারের সুযোগ'
    ],
    processSteps: [
      { title: '১. রিডার ইন্সটল', desc: 'প্রবেশদ্বারের পাশে সুবিধাজনক উচ্চতায় রিডার স্থাপন।' },
      { title: '২. উইগ্যান্ড ওয়্যারিং', desc: 'Wiegand 26/34 প্রোটোকলে কন্ট্রোলারের সাথে তার সংযোগ।' },
      { title: '৩. কার্ড এনরোলমেন্ট', desc: 'কার্ড রিডারে সোয়াইপ করে কর্মচারীদের নামে ট্যাগ করা।' },
      { title: '৪. ভেরিফিকেশন টেস্ট', desc: 'কার্ড সোয়াইপে সঠিক ডোর আনলক ভেরিফাই করা।' }
    ],
    pricingStartingFrom: '৳১,০০০ / ডোর',
    warrantyInfo: '১ বছরের সার্ভিস ওয়ারেন্টি ও কার্ড রিপ্লেসমেন্ট সাপোর্ট',
    popularSearchKeywords: ['rfid access control setup', 'smart card door lock', 'rfid reader fitting'],
    relatedServices: ['access-control-installation', 'biometric-machine-setup'],
    relatedProductSlugs: ['rfid-access-control', 'access-control-machine'],
    faqs: [
      { question: 'কার্ড হারিয়ে গেলে কি অন্য কেউ সেটি দিয়ে ঢুকতে পারবে?', answer: 'সফটওয়্যার থেকে সেই কার্ডটি ব্লক করে নতুন কার্ড ইস্যু করলেই পুরোনো কার্ড অকেজো হয়ে যাবে।' }
    ]
  },

  // 3. PABX & Intercom Services
  'pbx-installation': {
    slug: 'pbx-installation',
    name: 'PBX System Installation',
    bnName: 'পিবিএক্স টেলিফোন এক্সচেঞ্জ ইনস্টলেশন',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • PBX Installation & Service',
    metaDescription: 'অফিস ও কারখানার জন্য এনালগ ও আইপি পিবিএক্স (PABX/PBX) সিস্টেম ইনস্টলেশন। Panasonic, IKE এক্সচেঞ্জ সেটআপ। কল: 01790139333।',
    h1: 'Enterprise PBX Telephone Exchange System Installation',
    tagline: 'Seamless Multi-Line Internal Calling & Automated Attendant (IVR)',
    bengaliTagline: 'মাল্টি-লাইন অভ্যন্তরীণ ফ্রি কলিং ও স্বয়ংক্রিয় ভয়েস মেন্যু সমাধান',
    description: 'অফিসের বিভিন্ন রুম ও ডিপার্টমেন্টের মাঝে সম্পূর্ণ বিনামূল্যে কথা বলতে পিবিএক্স সিস্টেমের বিকল্প নেই। শামীম টেক সলিউশন প্যানাসনিক (Panasonic), গ্র্যান্ডস্ট্রিম (Grandstream) ও আইকে (IKE) ব্যান্ডের ৮ লাইন থেকে শুরু করে ১২৮ লাইনের পিবিএক্স সফলভাবে স্থাপন করে।',
    keyFeatures: [
      'অভ্যন্তরীণ সব এক্সটেনশনে আনলিমিটেড ১০০% ফ্রি কথা বলার সুবিধা',
      'বাইরের টিঅ্যান্ডটি / বিটিসিএল ল্যান্ডলাইন বা জিএসএম গেটওয়ে সংযোগ',
      'অটো-অ্যাটেনডেন্ট (আইভিআর): কল আসলে স্বয়ংক্রিয় ভয়েস মেন্যু প্লে হওয়া',
      'কল ট্রান্সফার, কল হোল্ড, কনফারেন্স কল ও নাইট মোড সেটিংস'
    ],
    processSteps: [
      { title: '১. এক্সটেনশন প্ল্যান', desc: 'অফিসের প্রতিটি রুম অনুযায়ী এক্সটেনশন নাম্বার (১০১, ১০২...) ছক।' },
      { title: '২. টেলিফোন ক্যাবলিং', desc: '২-পেয়ার টেলিফোন ক্যাবল ও রোজেট বক্স মাউন্টিং।' },
      { title: '৩. পিবিএক্স বক্স টার্মিনেশন', desc: 'মেইন এক্সচেঞ্জে ডিস্ট্রিবিউশন ফ্রেম (MDF) পাঞ্চিং।' },
      { title: '৪. সাউন্ড টেস্ট', desc: 'প্রতিটি রুমে রিং ও ক্রিস্টাল ক্লিয়ার অডিও টেস্ট।' }
    ],
    pricingStartingFrom: '৳১,৫০০ (মেশিন সেটআপ) + ক্যাবলিং চার্জ',
    warrantyInfo: '১ বছরের পূর্ণাঙ্গ সিস্টেম ইনস্টলেশন ও মেইনটেন্যান্স ওয়ারেন্টি',
    popularSearchKeywords: ['pbx installation bangladesh', 'pabx setup service', 'panasonic pabx installation'],
    relatedServices: ['pbx-technician', 'pbx-system-setup', 'intercom-installation', 'office-intercom-setup'],
    relatedProductSlugs: ['pbx-system', 'pbx-machine', 'intercom-telephone'],
    faqs: [
      { question: 'পিবিএক্স দিয়ে কথা বলতে কি কোনো মাসিক বিল দিতে হয়?', answer: 'না! অফিসের ভেতরে এক্সটেনশন টু এক্সটেনশন যত খুশি কথা বলবেন, কোনো মাসিক বিল বা রিচার্জ লাগবে না।' }
    ]
  },
  'pbx-technician': {
    slug: 'pbx-technician',
    name: 'PBX Technician',
    bnName: 'পিবিএক্স টেকনিশিয়ান ও লাইন মেরামত',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Certified PBX / PABX Technician & Line Repair',
    metaDescription: 'পিবিএক্স লাইনে নয়েজ, ডায়াল টোন না পাওয়া বা ইন্টারকম কল না যাওয়ার সমস্যার সমাধান। কল করুন টেকনিশিয়ান শামীম: 01790139333।',
    h1: 'Certified PBX Technician & Extension Line Diagnostics',
    tagline: 'Fix Cross-Talk, Dial Tone Dropouts, Ringing Failures & MDF Jumper Issues',
    bengaliTagline: 'ক্রস-টক নয়েজ, ডায়াল টোন না থাকা ও এমডিএফ জাম্পার লাইনের দ্রুত মেরামত',
    description: 'পিবিএক্স লাইনে শোঁ-শোঁ শব্দ হওয়া, টেলিফোনে ডায়াল টোন না পাওয়া, ইন্টারকম রিং না বাজা বা পাওয়ার অন না হওয়ার মতো যেকোনো জটিল কারিগরি সমস্যা টেকনিশিয়ান শামীম সরাসরি সাইটে এসে সমাধান করে দেন।',
    keyFeatures: [
      'টেলিফোন লাইনে শর্ট-সার্কিট ও আর্থিং নয়েজ আইসোলেশন',
      'এমডিএফ বক্সে ক্যাবল জাম্পারিং ও নতুন এক্সটেনশন সংযোজন',
      'প্যানাসনিক ও চায়না পিবিএক্স মাদারবোর্ড পাওয়ার সাপ্লাই মেরামত',
      'টেলিফোন সেট ও হ্যান্ডসেট কর্ড টেস্টিং এবং রিপ্লেসমেন্ট'
    ],
    processSteps: [
      { title: '১. লাইন টেস্টার চেক', desc: 'টেলিফোন টেস্টার দিয়ে ডায়াল টোন ও রেজিস্ট্যান্স পরিমাপ।' },
      { title: '২. পোর্ট ভেরিফিকেশন', desc: 'পিবিএক্স মেইনবোর্ডের পোর্ট আউটপুট সিগন্যাল যাচাই।' },
      { title: '৩. ক্যাবল জাম্পার ফিক্স', desc: 'ফাটা বা ক্ষয়ে যাওয়া টেলিফোন ক্যাবল জয়েন্ট মেরামত।' },
      { title: '৪. টু-ওয়ে টেস্ট কল', desc: 'ক্রিস্টাল ক্লিয়ার কথা নিশ্চিত করে রিলিজ।' }
    ],
    pricingStartingFrom: '৳৫০০ (ভিজিট ও লাইন ডায়াগনসিস)',
    warrantyInfo: 'মেরামতকৃত লাইনে বিশেষ কার্যকারিতা নিশ্চয়তা',
    popularSearchKeywords: ['pbx technician', 'pabx repair rangpur', 'telephone line repair service'],
    relatedServices: ['pbx-installation', 'pbx-repair-service', 'intercom-technician'],
    relatedProductSlugs: ['pbx-machine', 'intercom-telephone', 'intercom-accessories'],
    faqs: [
      { question: 'ফোনে কথা বললে প্রচণ্ড নয়েজ বা অন্য লাইনের কথা শোনা যায় কেন?', answer: 'এটি ক্যাবল লিকেজ বা ক্রস্টক (Cross-talk) সমস্যার জন্য হয়। লাইন ট্র্যাকিং করে ফ্রেশ পেয়ার ব্যবহার করলে এটি ঠিক হয়ে যায়।' }
    ]
  },
  'pbx-system-setup': {
    slug: 'pbx-system-setup',
    name: 'PBX System Setup',
    bnName: 'পিবিএক্স সিস্টেম প্রোগ্রামিং ও কনফিগারেশন',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • PBX System Programming & Extension Setup',
    metaDescription: 'প্যানাসনিক ও আইপি পিবিএক্স এক্সটেনশন প্রোগ্রামিং, কল ব্যারিং ও গ্রুপ কলিং কনফিগারেশন। কল: 01790139333।',
    h1: 'Complete PBX System Programming & Call Management Setup',
    tagline: 'Custom Extension Plan, Call Barring, Ring Groups & Voicemail Integration',
    bengaliTagline: 'কাস্টম এক্সটেনশন প্ল্যান, আউটগোয়িং কল ব্যারিং ও রিং গ্রুপ কনফিগারেশন',
    description: 'মাস্টার টেলিফোন সেট দিয়ে কোড ডায়াল করে পিবিএক্স সিস্টেমে বিভিন্ন এক্সটেনশন কনফিগার করা একটি বিশেষায়িত কাজ। আমরা আউটগোয়িং কল বন্ধ করা, নির্দিষ্ট ফোনে বাইরের কল রিসিভ করা এবং অটো-অ্যাটেনডেন্ট সাউন্ড মেসেজ সেট করে থাকি।',
    keyFeatures: [
      'এক্সটেনশন গ্রুপিং ও স্পেসিফিক রিং প্যাটার্ন প্রোগ্রামিং',
      'ক্লাস অব সার্ভিস (COS): নির্দিষ্ট রুম থেকে বাইরের কল ব্যারিং (ব্লক) করা',
      'কোম্পানির নিজস্ব ভয়েস ডিরেক্টরি ("শামীম টেক সলিউশনে আপনাকে স্বাগতম...") আপলোড',
      'কল পিক-আপ ও কল ফরোয়ার্ডিং শর্টকোড কনফিগারেশন'
    ],
    processSteps: [
      { title: '১. রিকোয়ারমেন্ট শিট', desc: 'কোন রুমে কোন এক্সটেনশন থাকবে তার ছক প্রস্তুত।' },
      { title: '২. মাস্টার সেট প্রোগ্রামিং', desc: 'সুপারভাইজার কোড দিয়ে পিবিএক্স মেমোরি কনফিগার করা।' },
      { title: '৩. ট্রাঙ্ক লাইন ম্যাপিং', desc: 'ল্যান্ডলাইন কল আসলে কোন রুমে বাজবে তা নির্ধারণ।' },
      { title: '৪. ইউজার গাইড বুকলেট', desc: 'গ্রাহককে সহজে ডায়াল করার প্রিন্টেড এক্সটেনশন তালিকা প্রদান।' }
    ],
    pricingStartingFrom: '৳৮০০ / সেটআপ',
    warrantyInfo: 'প্রোগ্রামিং ব্যাকআপ ফাইল নিশ্চয়তা',
    popularSearchKeywords: ['pbx programming', 'panasonic pabx setup code', 'intercom extension setup'],
    relatedServices: ['pbx-installation', 'intercom-system-setup'],
    relatedProductSlugs: ['pbx-system', 'intercom-telephone'],
    faqs: [
      { question: 'নির্দিষ্ট এক্সটেনশন থেকে কি বাইরের কল বন্ধ করা যায়?', answer: 'হ্যাঁ, ক্লাস অব সার্ভিস (COS) কোডের মাধ্যমে পিবিএক্সে বাইরের কল বন্ধ রাখা যায়।' }
    ]
  },
  'pbx-repair-service': {
    slug: 'pbx-repair-service',
    name: 'PBX Repair & Service',
    bnName: 'পিবিএক্স মেশিন মেরামত ও মাদারবোর্ড সার্ভিস',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • PBX Exchange Machine Repair & Servicing',
    metaDescription: 'নষ্ট পিবিএক্স মেশিন মেরামত, পাওয়ার সাপ্লাই ও এক্সটেনশন কার্ড রিপ্লেসমেন্ট। অভিজ্ঞ টেকনিশিয়ান: 01790139333।',
    h1: 'Expert PBX Hardware Repair & Power Supply Servicing',
    tagline: 'Component-Level Motherboard Diagnostics & Line Card Replacements',
    bengaliTagline: 'কম্পোনেন্ট লেভেল মাদারবোর্ড ডায়াগনসিস ও এক্সটেনশন কার্ড মেরামত',
    description: 'বজ্রপাত, ভোল্টেজ ওঠানামা বা শর্ট সার্কিটের কারণে পিবিএক্স মেশিন নষ্ট হয়ে গেলে নতুন মেশিন না কিনে সাশ্রয়ী খরচে মেরামত করিয়ে নিন। আমরা প্যানাসনিক ও চায়না ব্যান্ডের সব মডেলের এক্সটেনশন কার্ড ও ট্রাঙ্ক কার্ড মেরামত করি।',
    keyFeatures: [
      'বজ্রপাতে পুড়ে যাওয়া পিবিএক্স পাওয়ার সাপ্লাই ও প্রটেকশন সার্কিট মেরামত',
      'এক্সটেনশন কার্ডের ডেড পোর্ট (Dead Port) রিপেয়ার ও আইসি প্রতিস্থাপন',
      'রিং জেনারেটর ফেইলিউর (রিং না বাজা) সমস্যার সমাধান',
      'অরিজিনাল ইলেকট্রনিক কম্পোনেন্ট দিয়ে টেকসই মেরামত'
    ],
    processSteps: [
      { title: '১. বেঞ্চ টেস্টিং', desc: 'ল্যাবে পাওয়ার সাপ্লাই ভোল্টেজ ও এম্পিয়ার মেপে ত্রুটি শনাক্ত।' },
      { title: '২. আইসি সোল্ডারিং', desc: 'নষ্ট ক্যাপাসিটর, ভ্যারিস্টর বা রিলে পরিবর্তন।' },
      { title: '৩. লাইন কার্ড ভেরিফিকেশন', desc: 'প্রতিটি পোর্টে ডায়াল ও রিং টেস্ট।' },
      { title: '৪. ইনস্টলেশন অন-সাইট', desc: 'সাইটে গিয়ে মেশিনে পুনরায় লাইন লাগিয়ে চালু করা।' }
    ],
    pricingStartingFrom: '৳৮০০ (মেরামতের ধরনভেদে)',
    warrantyInfo: 'মেরামতকৃত অংশে ৩০ দিনের রিপেয়ার ওয়ারেন্টি',
    popularSearchKeywords: ['pbx repair service', 'panasonic pabx repair', 'telephone exchange machine servicing'],
    relatedServices: ['pbx-technician', 'intercom-repair-maintenance'],
    relatedProductSlugs: ['pbx-machine', 'pbx-system'],
    faqs: [
      { question: 'বজ্রপাতে পিবিএক্স বন্ধ হয়ে গেলে কি ঠিক করা সম্ভব?', answer: 'হ্যাঁ, সাধারণত প্রটেকশন ফিউজ, ভ্যারিস্টর বা পাওয়ার আইসি পুড়ে যায়, যা পরিবর্তন করলে মেশিন আবার সচল হয়।' }
    ]
  },
  'intercom-installation': {
    slug: 'intercom-installation',
    name: 'Intercom Installation',
    bnName: 'ইন্টারকম সিস্টেম ইনস্টলেশন (বাসা ও অফিস)',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Intercom Installation & Technician',
    metaDescription: 'অ্যাপার্টমেন্ট, ফ্ল্যাট ও ভবনের জন্য অডিও এবং ভিডিও ইন্টারকম ইনস্টলেশন। দারোয়ান থেকে ফ্ল্যাটে ফ্রি কল। কল: 01790139333।',
    h1: 'Apartment Building & Office Intercom Installation',
    tagline: 'Reliable Guard-to-Flat Audio/Video Communication for Apartment Buildings',
    bengaliTagline: 'অ্যাপার্টমেন্ট ভবনে দারোয়ান ও ফ্ল্যাটের মাঝে নিরাপদ অডিও/ভিডিও ইন্টারকম যোগাযোগ',
    description: 'বহুতল আবাসিক ভবন ও বাণিজ্যিক ভবনে দারোয়ান রুম (Guard Room) থেকে প্রতিটি ফ্ল্যাটে সরাসরি কথা বলার ইন্টারকম সিস্টেম স্থাপন করে শামীম টেক সলিউশন। কোনো বহিরাগত ব্যক্তি আসলে ফ্ল্যাট মালিকের অনুমতি ছাড়া ভবনে প্রবেশ করতে পারে না।',
    keyFeatures: [
      'দারোয়ান রুম থেকে সব ফ্ল্যাটে সরাসরি অডিও ও ভিডিও ইন্টারকম কল',
      'ফ্ল্যাট থেকে ফ্ল্যাটে সরাসরি প্রাইভেট কলিং সুবিধা',
      'ইলেকট্রিক মেইন গেটের লক ইন্টারকম সেট থেকে দূর থেকেই খোলার অপশন',
      'বিল্ডিং ওয়্যারিংয়ের জন্য উন্নত ডাবল-শিল্ডেড ইন্টারকম ক্যাবলিং'
    ],
    processSteps: [
      { title: '১. রাইজার ক্যাবলিং', desc: 'ভবনের ডাক্ট দিয়ে গ্রাউন্ড ফ্লোর থেকে ছাদ পর্যন্ত ক্যাবলিং।' },
      { title: '২. ডিস্ট্রিবিউশন বক্স', desc: 'প্রতি ফ্লোরে জাংশন বক্স বসিয়ে ফ্ল্যাটে স্প্লিট করা।' },
      { title: '৩. হ্যান্ডসেট মাউন্টিং', desc: 'প্রতি ফ্ল্যাটের দরজার পাশে ও গার্ড রুমে ইন্টারকম ফোন মাউন্টিং।' },
      { title: '৪. টেস্টিং ও ট্রেনিং', desc: 'সব ফ্ল্যাটে ডায়াল করে সাউন্ড কোয়ালিটি যাচাই।' }
    ],
    pricingStartingFrom: '৳৩০০ / ফ্ল্যাট (প্রজেক্ট সাইজ অনুযায়ী)',
    warrantyInfo: '১ বছরের সম্পূর্ণ ওয়্যারিং ও সিস্টেম ওয়ারেন্টি',
    popularSearchKeywords: ['intercom installation', 'apartment intercom system bangladesh', 'building intercom setup'],
    relatedServices: ['intercom-technician', 'office-intercom-setup', 'video-door-phone-installation'],
    relatedProductSlugs: ['intercom-machine', 'intercom-telephone', 'office-intercom-system'],
    faqs: [
      { question: '১০ তলা ভবনে কি ইন্টারকম সংযোগ দেওয়া সম্ভব?', answer: 'হ্যাঁ, আমরা ৫০ থেকে ১০০ ফ্ল্যাটের বড় অ্যাপার্টমেন্টেও ইন্টারকম সিস্টেম সফলভাবে স্থাপন করি।' }
    ]
  },
  'intercom-technician': {
    slug: 'intercom-technician',
    name: 'Intercom Technician',
    bnName: 'ইন্টারকম টেকনিশিয়ান ও সার্ভিস',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Intercom Technician & Building Line Repair',
    metaDescription: 'ইন্টারকমে আওয়াজ না শোনা, রিং না হওয়া বা লাইনে সমস্যা? অভিজ্ঞ টেকনিশিয়ান দিয়ে সমাধান করান। কল: 01790139333।',
    h1: 'Certified Intercom System Diagnostics & Repair Technician',
    tagline: 'Resolve Apartment Intercom Dead Lines, Buzzer Failures & Wiring Breaks',
    bengaliTagline: 'অ্যাপার্টমেন্ট ইন্টারকম ডেড লাইন, বাযার সমস্যা ও ক্যাবল ব্রেক দ্রুত মেরামত',
    description: 'ফ্ল্যাটের ইন্টারকমে রিং না হওয়া, কথা কেটে কেটে আসা বা কোনো নির্দিষ্ট ফ্লোরের লাইন সম্পূর্ণ বন্ধ হয়ে গেলে ইন্টারকম টেকনিশিয়ান শামীম ভবনে উপস্থিত হয়ে দ্রুত ফল্ট শনাক্ত করে সার্ভিস প্রদান করেন।',
    keyFeatures: [
      'রাইজার পাইপে ছিঁড়ে যাওয়া বা নষ্ট হওয়া ক্যাবল শনাক্ত ও মেরামত',
      'ইন্টারকম হ্যান্ডসেটের স্পিকার ও মাইক্রোফোন রিপ্লেসমেন্ট',
      'গার্ড রুমের মাস্টার কনসোল কিবোর্ড ও পাওয়ার অ্যাডাপ্টার সার্ভিস',
      'ফ্লোর স্প্লিটার ও জাংশন কানেক্টর রি-টার্মিনেশন'
    ],
    processSteps: [
      { title: '১. মাস্টার কনসোল টেস্ট', desc: 'মেইন মেশিনের আউটপুট ভোল্টেজ পরীক্ষা।' },
      { title: '২. ফ্লোর বাই ফ্লোর ট্র্যাকিং', desc: 'যে ফ্লোরে সমস্যা সেখানে টেস্ট টেলিফোন দিয়ে লাইন চেক।' },
      { title: '৩. ত্রুটি মেরামত', desc: 'কানেকশন পরিষ্কার করে নতুন রোজেট স্থাপন।' },
      { title: '৪. গার্ড টু ফ্ল্যাট রিং টেস্ট', desc: 'সফল কল নিশ্চিতকরণ।' }
    ],
    pricingStartingFrom: '৳৫০০ (ভিজিট ও লাইন ডায়াগনসিস)',
    warrantyInfo: 'তাৎক্ষণিক সার্ভিস গ্যারান্টি',
    popularSearchKeywords: ['intercom technician', 'apartment intercom repair', 'intercom mechanic rangpur'],
    relatedServices: ['intercom-installation', 'intercom-repair-maintenance'],
    relatedProductSlugs: ['intercom-machine', 'intercom-telephone'],
    faqs: [
      { question: 'গার্ড রুম থেকে ফোন দিলে আমার ফ্ল্যাটে রিং বাজে না কেন?', answer: 'এটি সাধারণত ইন্টারকম হ্যান্ডসেটের কয়েল কর্ড লুজ হওয়া বা ফ্লোর স্প্লিটারে তারের কানেকশন বিচ্ছিন্ন হওয়ার কারণে ঘটে।' }
    ]
  },
  'intercom-system-setup': {
    slug: 'intercom-system-setup',
    name: 'Intercom System Setup',
    bnName: 'ইন্টারকম সিস্টেম সেটআপ ও নাম্বারিং',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Intercom System Setup & Flat Numbering',
    metaDescription: 'ভবন ও অফিসের জন্য ইন্টারকম সিস্টেম সেটআপ। ফ্ল্যাট নম্বর (1A, 2B, 301) অনুযায়ী ডায়াল কোড কনফিগারেশন। কল: 01790139333।',
    h1: 'Apartment Intercom System Setup & Flat Mapping',
    tagline: 'Intuitive Room Numbering, Direct Guard Dialing & Clear Voice Tuning',
    bengaliTagline: 'সহজ ফ্ল্যাট নাম্বারিং, দারোয়ান রুমে ওয়ান-টাচ ডায়াল ও স্বচ্ছ ভয়েস টিউনিং',
    description: 'ইন্টারকম মেশিনে ফ্ল্যাট নাম্বার অনুযায়ী এক্সটেনশন কোড সেটআপ না করলে দারোয়ান বা প্রতিবেশীর জন্য ডায়াল করা কঠিন হয়ে পড়ে। আমরা ফ্ল্যাট ১এ (1A), ২বি (2B) বা ১০১, ১০২ অনুযায়ী সহজ নাম্বারিং কনফিগার করে দিই।',
    keyFeatures: [
      'ফ্ল্যাট নম্বর অনুযায়ী সহজ ও মনে রাখার মতো ডায়াল কোড ম্যাপিং',
      'গার্ড রুমে ওয়ান-টাচ ‘০’ (Zero) ডায়াল করলেই কল পৌঁছানোর ব্যবস্থা',
      'অতিরিক্ত আওয়াজ বা ইকো নিরোধক মাইক্রোফোন গেইন টিউনিং',
      'জরুরি ব্রডকাস্ট: সব ফ্ল্যাটে একসাথে জরুরি ঘোষণা দেওয়ার সুবিধা'
    ],
    processSteps: [
      { title: '১. ফ্ল্যাট ম্যাপিং ছক', desc: 'ভবন কমিটির সাথে বসে নাম্বারিং চূড়ান্ত করা।' },
      { title: '২. মেশিন মেমোরি রাইটিং', desc: 'ইন্টারকম মেশিনে এক্সটেনশন আইডি ইনপুট।' },
      { title: '৩. সাউন্ড গেইন টিউনিং', desc: 'ভয়েস ক্ল্যারিটি ফাইনাল অ্যাডজাস্টমেন্ট।' },
      { title: '৪. ইউজার চার্ট স্টিকার', desc: 'প্রতিটি হ্যান্ডসেটে ডায়াল কোডের স্টিকার লাগানো।' }
    ],
    pricingStartingFrom: '৳১,০০০ / সিস্টেম সেটআপ',
    warrantyInfo: 'কনফিগারেশন ব্যাকআপ নিশ্চয়তা',
    popularSearchKeywords: ['intercom system setup', 'building intercom numbering', 'intercom configuration'],
    relatedServices: ['intercom-installation', 'pbx-system-setup'],
    relatedProductSlugs: ['intercom-machine', 'office-intercom-system'],
    faqs: [
      { question: 'ফ্ল্যাটে ১ টিপে কি দারোয়ানের সাথে কথা বলা যাবে?', answer: 'হ্যাঁ! সিস্টেম কনফিগার করে দেওয়া হয় যাতে শুধু ‘০’ বা ‘১’ চাপলেই দারোয়ান রুমে রিং বাজে।' }
    ]
  },
  'intercom-repair-maintenance': {
    slug: 'intercom-repair-maintenance',
    name: 'Intercom Repair & Maintenance',
    bnName: 'ইন্টারকম মেরামত ও বাৎসরিক রক্ষণাবেক্ষণ',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Intercom Repair & Building AMC Maintenance',
    metaDescription: 'আবাসিক ভবনের ইন্টারকম মেরামত ও নিয়মিত মেইনটেন্যান্স সার্ভিস। সাশ্রয়ী প্যাকেজ। হটলাইন: 01790139333।',
    h1: 'Comprehensive Intercom Repair & Building AMC Services',
    tagline: 'Restore Clear Audio, Repair Damaged Wiring & Full Building Upkeep',
    bengaliTagline: 'স্পষ্ট অডিও পুনরুদ্ধার, ক্ষতিগ্রস্ত ক্যাবল মেরামত ও ভবনের সার্বিক যত্ন',
    description: 'পুরোনো ভবনে ইন্টারকমের তারে ইঁদুর কাটা, আর্দ্রতায় জং ধরা বা হ্যান্ডসেটের স্পিকার নষ্ট হওয়া খুব সাধারণ সমস্যা। শামীম টেক সলিউশন পুরো ভবনের ইন্টারকম সিস্টেম ওভারহলিং ও মেরামত করে সম্পূর্ণ নতুনের মতো সচল করে দেয়।',
    keyFeatures: [
      'পুরোনো জং ধরা ডিস্ট্রিবিউশন বক্স ও ক্যাবল পরিবর্তন',
      'হ্যান্ডসেট স্পিকার, রিংগার বাজার ও মাইক্রোফোন সার্ভিসিং',
      'মাস্টার ইন্টারকম পাওয়ার অ্যাডাপ্টার ও প্রটেকশন সার্কিট মেরামত',
      'ভবন ম্যানেজমেন্ট কমিটির জন্য সাশ্রয়ী বাৎসরিক রক্ষণাবেক্ষণ চুক্তি (AMC)'
    ],
    processSteps: [
      { title: '১. বিল্ডিং অডিট', desc: 'কোন কোন ফ্ল্যাটের লাইন ডেড তা অডিট তালিকা প্রস্তুত।' },
      { title: '২. মেইন ডিস্ট্রিবিউশন ক্লিনিং', desc: 'এমডিএফ বক্স থেকে ধুলোবালি ও জং পরিষ্কার।' },
      { title: '৩. ফ্ল্যাট হ্যান্ডসেট রিপ্লেসমেন্ট', desc: 'অকেজো হ্যান্ডসেট ঠিক বা পরিবর্তন।' },
      { title: '৪. ফাইনাল টেস্ট সাইন-অফ', desc: 'কমিটির উপস্থিতিতে সফল রিং টেস্ট সম্পন্ন।' }
    ],
    pricingStartingFrom: '৳৮০০ থেকে শুরু (কাজের পরিধি অনুযায়ী)',
    warrantyInfo: 'সার্ভিস করা পার্টসে ওয়ারেন্টি সাপোর্ট',
    popularSearchKeywords: ['intercom repair', 'apartment intercom servicing', 'building intercom maintenance'],
    relatedServices: ['intercom-technician', 'intercom-installation'],
    relatedProductSlugs: ['intercom-telephone', 'intercom-accessories'],
    faqs: [
      { question: 'আমাদের ভবনের ইন্টারকম অনেক পুরোনো, এটা কি মেরামত করা সম্ভব?', answer: 'হ্যাঁ! পুরোনো সিস্টেম ফেলে না দিয়ে ক্যাবল ও হ্যান্ডসেট মেরামত করে নতুনের মতো চালু করা সম্ভব।' }
    ]
  },
  'office-intercom-setup': {
    slug: 'office-intercom-setup',
    name: 'Office Intercom Setup',
    bnName: 'অফিস ইন্টারকম সিস্টেম সেটআপ',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Office Intercom System Setup & Desk Extension',
    metaDescription: 'কর্পোরেট অফিস ও শোরুমের ডেস্কে ডেস্কে ইন্টারকম কানেকশন সেটআপ। দ্রুত যোগাযোগ ও কাজের গতি বৃদ্ধি। কল: 01790139333।',
    h1: 'Corporate Office Intercom & Multi-Desk Communication Setup',
    tagline: 'Instant Desk-to-Desk Calling, Manager Priority & Conference Capabilities',
    bengaliTagline: 'ইনস্ট্যান্ট ডেস্ক-টু-ডেস্ক ফ্রি কলিং, ম্যানেজার প্রায়োরিটি ও কনফারেন্স সুবিধা',
    description: 'কর্পোরেট অফিসে কর্মীদের কাজের গতি বাড়াতে এবং রুম থেকে রুমে না গিয়ে মুহূর্তেই কথা বলতে আধুনিক ডেস্কটপ ইন্টারকম সিস্টেম স্থাপন করে শামীম টেক সলিউশন। পরিপাটি ক্যাবলিং সহ আপনার অফিসের আধুনিক লুক বজায় রাখা হয়।',
    keyFeatures: [
      'ম্যানেজার ও বসের রুমের জন্য প্রিমিয়াম ডিসপ্লে ডিসিশন হ্যান্ডসেট',
      'কর্মীদের ডেস্কে পরিপাটি ক্যাবলিং সহ কমপ্যাক্ট ইন্টারকম টেলিফোন সেট',
      'ডাইরেক্ট ইন্টারকম ডায়ালিং, স্পিকারফোন ও মিউট অপশন',
      'ল্যান কেবল বা ডেডিকেটেড ইন্টারকম ক্যাবলিং সাপোর্ট'
    ],
    processSteps: [
      { title: '১. ডেস্ক লেআউট অডিট', desc: 'অফিস কিউবিকল ও রুম অনুযায়ী সংযোগ পয়েন্ট চিহ্নিতকরণ।' },
      { title: '২. আন্ডার-টেবিল ক্যাবলিং', desc: 'টেবিলের নিচ দিয়ে কেসিং বা কন্ডুইটের মাধ্যমে গোপন ক্যাবলিং।' },
      { title: '৩. পিবিএক্স টার্মিনেশন', desc: 'সার্ভার র‍্যাকে পিবিএক্স এক্সচেঞ্জ মাউন্টিং।' },
      { title: '৪. এক্সটেনশন টেস্ট', desc: 'ডেস্ক টু ডেস্ক ইনস্ট্যান্ট কানেকশন টেস্ট।' }
    ],
    pricingStartingFrom: '৳৪০০ / ডেস্ক পয়েন্ট',
    warrantyInfo: '১ বছরের সার্ভিস ওয়ারেন্টি ও অফিস টেকনিক্যাল সাপোর্ট',
    popularSearchKeywords: ['office intercom setup', 'corporate desk intercom', 'business telephone system'],
    relatedServices: ['pbx-installation', 'office-network-setup'],
    relatedProductSlugs: ['office-intercom-system', 'intercom-telephone'],
    faqs: [
      { question: 'অফিসের ইন্টেরিয়র ডিজাইনের কোনো ক্ষতি না করে কি তার টানা সম্ভব?', answer: 'হ্যাঁ, আমরা ফ্লোর ডাক্ট, ফলস সিলিং বা পরিপাটি পিভিসি কেসিং ব্যবহার করে সম্পূর্ণ অদৃশ্যভাবে ওয়্যারিং করি।' }
    ]
  },
  'video-door-phone-installation': {
    slug: 'video-door-phone-installation',
    name: 'Video Door Phone Installation',
    bnName: 'ভিডিও ডোর ফোন ইনস্টলেশন (VDP)',
    category: 'PABX & Intercom',
    title: 'SHAMIM TECH SOLUTION • Smart Video Door Phone (VDP) Installation',
    metaDescription: 'বাসা ও ফ্ল্যাটের দরজার বাইরে দর্শনার্থীকে দেখে কথা বলা ও দরজা খোলার ভিডিও ডোর ফোন ইনস্টলেশন। HD ক্যামেরা ও ডিসপ্লে। কল: 01790139333।',
    h1: 'High-Definition Smart Video Door Phone (VDP) Installation',
    tagline: 'See, Speak & Unlock Remotely Before Opening Your Main Door',
    bengaliTagline: 'দরজা খোলার পূর্বেই দর্শনার্থীকে দেখুন, কথা বলুন এবং রিমোটলি লক খুলুন',
    description: 'দরজায় কে কড়া নাড়ছে তা ঘরের ভেতর থাকা ৭ ইঞ্চি কালার স্ক্রিনে বা সরাসরি মোবাইল ফোনে লাইভ দেখে নিশ্চিত হয়ে তবেই দরজা খুলুন। Hikvision ও Panasonic ভিডিও ডোর ফোন নাইট ভিশন ক্যামেরা ও ইলেকট্রিক লক সংযোগ সহ পেশাদারভাবে ইনস্টল করে শামীম টেক সলিউশন।',
    keyFeatures: [
      '৭ ইঞ্চি ক্রিস্টাল ক্লিয়ার এলসিডি/এলইডি ইনডোর কালার মনিটর স্ক্রিন',
      'আউটডোর বেল ইউনিটে ওয়াইড অ্যাঙ্গেল এইচডি ক্যামেরা ও নাইট ভিশন',
      'টু-ওয়ে অডিও টক-ব্যাক (Talk-Back) সিস্টেম—দরজার ওপাশ থেকে কথা শোনা',
      'স্ক্রিনে একটি বাটন টিপেই মেইন গেটের ইলেকট্রিক লক খুলে দেওয়ার সুবিধা'
    ],
    processSteps: [
      { title: '১. আউটডোর বেল মাউন্টিং', desc: 'দরজার বাইরে সুবিধাজনক উচ্চতায় ক্যামেরা বেল স্থাপন।' },
      { title: '২. ইনডোর স্ক্রিন ওয়াল হ্যাং', desc: 'ড্রয়িং রুম বা বেডরুমে ডিসপ্লে স্ক্রিন মাউন্টিং।' },
      { title: '৩. ইলেকট্রিক লক ওয়্যারিং', desc: 'দরজার লকের সাথে সিগন্যাল রিলে কেবলিং।' },
      { title: '৪. বেল ও ভিডিও টেস্ট', desc: 'কল বেল বাজালে দ্রুত ছবি ও সাউন্ড ভেরিফাই করা।' }
    ],
    pricingStartingFrom: '৳১,৫০০ / সেট ইনস্টলেশন',
    warrantyInfo: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি ও ফ্রি অন-সাইট সাপোর্ট',
    popularSearchKeywords: ['video door phone installation', 'vdp setup bangladesh', 'hikvision video door bell'],
    relatedServices: ['electric-door-lock-installation', 'intercom-installation', 'access-control-installation'],
    relatedProductSlugs: ['video-door-phone', 'door-phone', 'electric-door-lock'],
    faqs: [
      { question: 'রাতে কি দরজার বাইরের মানুষের মুখ পরিষ্কার দেখা যায়?', answer: 'হ্যাঁ! আউটডোর ইউনিটে পাওয়ারফুল নাইট ভিশন আইআর লাইট থাকে, ফলে অন্ধকারেও মুখ পরিষ্কার দেখা যায়।' }
    ]
  },

  // 4. Biometrics & Attendance Services
  'biometric-machine-setup': {
    slug: 'biometric-machine-setup',
    name: 'Biometric Machine Setup',
    bnName: 'বায়োমেট্রিক হাজিরা মেশিন সেটআপ',
    category: 'Biometrics & Attendance',
    title: 'SHAMIM TECH SOLUTION • Biometric Machine Setup & Service',
    metaDescription: 'অফিস ও কারখানার বায়োমেট্রিক হাজিরা মেশিন সেটআপ, ল্যান কানেকশন ও পেরোল সফটওয়্যার ইন্টিগ্রেশন। ZKTeco অরিজিনাল। কল: 01790139333।',
    h1: 'Enterprise Biometric Attendance Machine Setup & Payroll Integration',
    tagline: 'Automate Attendance Tracking, Overtime & Monthly Payroll Reports',
    bengaliTagline: 'স্বয়ংক্রিয় ডিজিটাল হাজিরা ট্র্যাকিং, ওভারটাইম হিসাব ও মাসিক পেরোল রিপোর্ট',
    description: 'খাতায় সই করার ঝামেলা ও প্রক্সি হাজিরা দূর করতে বায়োমেট্রিক মেশিন অত্যন্ত কার্যকরী। শামীম টেক সলিউশন ZKTeco, Realand ও Virdi মেশিনের ফিঙ্গারপ্রিন্ট, ফেস রিডার এবং কার্ড সেটআপ সহ মাসিক হাজিরা ও স্যালারি সফটওয়্যার কনফিগার করে দেয়।',
    keyFeatures: [
      'ফিঙ্গারপ্রিন্ট, ফেস রিকগনিশন (Face Recognition) ও আরএফআইডি কার্ড সমর্থন',
      'লেট প্রেজেন্ট (Late), আর্লি লিভ (Early Leave), ওভারটাইম (OT) ও অ্যাবসেন্ট ক্যালকুলেশন',
      'এক ক্লিকে এক্সেল বা পিডিএফ ফরম্যাটে মাসিক স্যালারি ও হাজিরা রিপোর্ট জেনারেশন',
      'ল্যান ক্যাবল বা ওয়াইফাইয়ের মাধ্যমে পিসির সফটওয়্যারে স্বয়ংক্রিয় ডাটা ডাউনলোড'
    ],
    processSteps: [
      { title: '১. মেশিন মাউন্টিং', desc: 'প্রবেশদ্বারে চোখে পড়ার মতো সঠিক উচ্চতায় দেওয়ালে মাউন্টিং।' },
      { title: '২. নেটওয়ার্ক আইপি অ্যাসাইন', desc: 'অফিস ল্যানে মেশিন যুক্ত করে স্ট্যাটিক আইপি সেট করা।' },
      { title: '৩. পেরোল সফটওয়্যার ইন্সটল', desc: 'ZKTime5.0 বা BioTime সফটওয়্যারে অফিস শিফট ও ছুটির দিন সেট করা।' },
      { title: '৪. কর্মী ডাটা এন্ট্রি ও ট্রেনিং', desc: 'কর্মীদের ফিঙ্গার রেজিস্টার করা ও এইচআর অফিসারকে প্রশিক্ষণ দেওয়া।' }
    ],
    pricingStartingFrom: '৳১,২০০ / সেটআপ',
    warrantyInfo: '১ বছরের ফুল হার্ডওয়্যার ওয়ারেন্টি ও সফটওয়্যার সাপোর্ট',
    popularSearchKeywords: ['biometric machine setup', 'zkteco attendance setup', 'fingerprint attendance software'],
    relatedServices: ['biometric-machine-service', 'biometric-technician', 'fingerprint-machine-setup', 'attendance-machine-installation'],
    relatedProductSlugs: ['biometric-attendance-machine', 'fingerprint-machine', 'face-recognition-attendance-machine'],
    faqs: [
      { question: 'বিদ্যুৎ চলে গেলে কি হাজিরা দেওয়া যাবে?', answer: 'আমাদের বেশিরভাগ বায়োমেট্রিক মেশিনে ৩-৫ ঘণ্টার রিচার্জেবল বিল্ট-ইন ব্যাকআপ ব্যাটারি থাকে।' }
    ]
  },
  'biometric-machine-service': {
    slug: 'biometric-machine-service',
    name: 'Biometric Machine Service',
    bnName: 'বায়োমেট্রিক মেশিন সার্ভিসিং ও ডেটা রিকভারি',
    category: 'Biometrics & Attendance',
    title: 'SHAMIM TECH SOLUTION • Biometric Machine Servicing & Data Recovery',
    metaDescription: 'হাজিরা মেশিনে ফিঙ্গার না পাওয়া, ডাটা ডাউনলোড না হওয়া বা সফটওয়্যার এরর সমাধান। কল করুন: 01790139333।',
    h1: 'Professional Biometric Machine Servicing & Sensor Recalibration',
    tagline: 'Fix Sensor Errors, Communication Failures & Corrupted Attendance Logs',
    bengaliTagline: 'সেন্সর এরর, কমিউনিকেশন ফেইলিউর ও করাপ্টেড হাজিরা লগ সমস্যার দ্রুত সমাধান',
    description: 'বায়োমেট্রিক মেশিনে আঙুল দিলে ফিঙ্গার ম্যাচ না করা, সফটওয়্যার থেকে ডাটা ডাউনলোড আটকে যাওয়া বা এডমিন পাসওয়ার্ড লক হয়ে যাওয়ার মতো জটিলতায় টেকনিশিয়ান শামীম সরাসরি উপস্থিত হয়ে সার্ভিস প্রদান করেন।',
    keyFeatures: [
      'অপটিক্যাল ফিঙ্গারপ্রিন্ট গ্লাস সেন্সর ক্লিনিং ও ক্যালিব্রেশন',
      'মেশিনের মাস্টার অ্যাডমিন পাসওয়ার্ড রিসেট ও আনলকিং',
      'হাজিরা লগ ডেটাবেজ ব্যাকআপ ও করাপ্টেড ডেটা রিকভারি',
      'মাদারবোর্ড পাওয়ার সার্কিট ও রিবুট লুপ সমস্যার সমাধান'
    ],
    processSteps: [
      { title: '১. সেন্সর টেস্ট', desc: 'ফিঙ্গারপ্রিন্ট রিডিং স্পিড ও অ্যাকুরেসি পরীক্ষা।' },
      { title: '২. ল্যান কানেক্টিভিটি চেক', desc: 'পিসি টু মেশিন পিং টেস্ট।' },
      { title: '৩. ডেটা ব্যাকআপ এক্সপোর্ট', desc: 'পেন্ড্রাইভ দিয়ে নিরাপদে পুরোনো হাজিরা লগ সেভ করা।' },
      { title: '৪. ফার্মওয়্যার রিসেট', desc: 'প্রয়োজনে রিসেট দিয়ে ডাটা রি-আপলোড করা।' }
    ],
    pricingStartingFrom: '৳৫০০ (ভিজিট ও ডায়াগনসিস)',
    warrantyInfo: 'সার্ভিস নিশ্চয়তা ও ডেটা সুরক্ষার গ্যারান্টি',
    popularSearchKeywords: ['biometric machine service', 'attendance machine repair', 'zkteco admin password reset'],
    relatedServices: ['biometric-machine-setup', 'biometric-technician'],
    relatedProductSlugs: ['biometric-attendance-machine', 'attendance-machine-accessories'],
    faqs: [
      { question: 'এডমিন লোক চাকরি ছেড়ে দিলে মেশিন আনলক করা যাবে?', answer: 'হ্যাঁ, আমরা স্পেশাল অ্যালগরিদম মাস্টার কোড দিয়ে মেশিনের এডমিন লক নিরাপদে খুলে দেই।' }
    ]
  },
  'biometric-technician': {
    slug: 'biometric-technician',
    name: 'Biometric Technician',
    bnName: 'বায়োমেট্রিক ডিভাইস টেকনিশিয়ান',
    category: 'Biometrics & Attendance',
    title: 'SHAMIM TECH SOLUTION • Certified Biometric Attendance Technician',
    metaDescription: 'সার্টিফাইড বায়োমেট্রিক হাজিরা মেশিন টেকনিশিয়ান সাপোর্ট রংপুর ও বাংলাদেশ। অন-সাইট সেবা। হটলাইন: 01790139333।',
    h1: 'Certified Biometric Attendance Technician & On-Site Diagnostics',
    tagline: 'Expert Hardware Diagnostics, Shift Reconfiguration & Network Troubleshooting',
    bengaliTagline: 'দক্ষ হার্ডওয়্যার ডায়াগনসিস, শিফট রিকনফিগারেশন ও নেটওয়ার্ক ট্রাবলশুটিং',
    description: 'অফিস বা ফ্যাক্টরির বায়োমেট্রিক হাজিরা মেশিন নিয়মিত সঠিক রাখা এইচআর বিভাগের জন্য অত্যন্ত জরুরি। আমাদের দক্ষ টেকনিশিয়ান নতুন শিফট তৈরি, নতুন কর্মী অ্যাড করা, নষ্ট পাওয়ার অ্যাডাপ্টার পরিবর্তন এবং সফটওয়্যার ত্রুটি দূর করে দেন।',
    keyFeatures: [
      'অন-সাইট দ্রুত হাজিরা মেশিন পরিদর্শন ও ত্রুটি নিরসন',
      'মাল্টিপল শিফট (Day, Night, Roster) কনফিগারেশন সাপোর্ট',
      'ইউএসবি পেনড্রাইভ ও টিসিপি/আইপি কমিউনিকেশন ট্রাবলশুটিং',
      'মেশিন ব্যাটারি ও চার্জিং অ্যাডাপ্টার প্রতিস্থাপন'
    ],
    processSteps: [
      { title: '১. সাইট ডায়াগনসিস', desc: 'মেশিন হার্ডওয়্যার ও সফটওয়্যার স্ট্যাটাস পর্যবেক্ষণ।' },
      { title: '২. হার্ডওয়্যার মেরামত', desc: 'পাওয়ার ও সেন্সর অংশ মেরামত।' },
      { title: '৩. সফটওয়্যার সিঙ্ক', desc: 'পিসির সাথে সফল ডাটা সিঙ্ক নিশ্চিত করা।' },
      { title: '৪. টেস্ট পাঞ্চ', desc: 'সফল হাজিরা পাঞ্চ ও রিপোর্ট ভেরিফাই করা।' }
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    warrantyInfo: '১০০% কারিগরি সন্তুষ্টির নিশ্চয়তা',
    popularSearchKeywords: ['biometric technician', 'zkteco mechanic', 'attendance machine technician rangpur'],
    relatedServices: ['biometric-machine-setup', 'biometric-machine-service'],
    relatedProductSlugs: ['biometric-attendance-machine', 'fingerprint-machine'],
    faqs: [
      { question: 'টেকনিশিয়ান কি আমাদের এইচআর কর্মকর্তাকে সফটওয়্যার চালানো শিখিয়ে দেবেন?', answer: 'হ্যাঁ, রিপোর্ট দেখা, ছুটি অ্যাড করা ও মাসিক শীট তৈরি করা হাতে-কলমে শিখিয়ে দেওয়া হয়।' }
    ]
  },
  'fingerprint-machine-setup': {
    slug: 'fingerprint-machine-setup',
    name: 'Fingerprint Machine Setup',
    bnName: 'ফিঙ্গারপ্রিন্ট হাজিরা মেশিন সেটআপ',
    category: 'Biometrics & Attendance',
    title: 'SHAMIM TECH SOLUTION • Fingerprint Attendance Machine Setup',
    metaDescription: 'ফিঙ্গারপ্রিন্ট হাজিরা মেশিন সেটআপ ও সফটওয়্যার ট্রেনিং। ZKTeco K40, D200, F18 মডেল। কল: 01790139333।',
    h1: 'Accurate Fingerprint Attendance Machine Setup & Enrollment',
    tagline: 'High-Speed Fingerprint Matching, Zero False Acceptance & Auto-Sync',
    bengaliTagline: 'উচ্চগতির ফিঙ্গারপ্রিন্ট ম্যাচিং ও স্বয়ংক্রিয় মাসিক হাজিরা হিসাব',
    description: 'ছোট-বড় যেকোনো প্রতিষ্ঠানের কর্মীদের প্রতিদিনের হাজিরা নির্ভুলভাবে ট্র্যাকিং করতে ফিঙ্গারপ্রিন্ট মেশিন সবচেয়ে জনপ্রিয়। ZKTeco K40, F18 সহ জনপ্রিয় সব মডেল দেওয়াল মাউন্টিং এবং কর্মীদের আঙুলের ছাপ নিখুঁতভাবে রেজিস্টার করে দেয় শামীম টেক সলিউশন।',
    keyFeatures: [
      'অরিজিনাল অপটিক্যাল ফিঙ্গারপ্রিন্ট সেন্সর—শুকনো ও ভেজা আঙুল দ্রুত রিড করার ক্ষমতা',
      'প্রতি কর্মীর একাধিক আঙুলের ছাপ সংরক্ষণের সুবিধা',
      'টিসিপি/আইপি (ল্যান) এবং ইউএসবি পেনড্রাইভ ব্যাকআপ সুবিধা',
      'বিল্ট-ইন ব্যাকআপ ব্যাটারি সহ লোডশেডিংয়েও সচল থাকার নিশ্চয়তা'
    ],
    processSteps: [
      { title: '১. দেয়াল মাউন্টিং', desc: 'সবাই সহজে হাত দিতে পারে এমন লেভেলে ফিটিং।' },
      { title: '২. আইপি সেটআপ', desc: 'রাউটারের সাথে সংযোগ স্থাপন।' },
      { title: '৩. কর্মীদের আঙুলের ছাপ গ্রহণ', desc: 'প্রতিটি কর্মীর ২টি করে আঙুলের ছাপ নিবন্ধন।' },
      { title: '৪. রিপোর্ট টেস্টিং', desc: 'সফটওয়্যারে লাইভ পাঞ্চ ডাটা যাচাই করা।' }
    ],
    pricingStartingFrom: '৳১,০০০ / সেটআপ',
    warrantyInfo: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি সাপোর্ট',
    popularSearchKeywords: ['fingerprint machine setup', 'zkteco k40 setup', 'fingerprint attendance installation'],
    relatedServices: ['biometric-machine-setup', 'attendance-machine-installation'],
    relatedProductSlugs: ['fingerprint-machine', 'biometric-attendance-machine'],
    faqs: [
      { question: 'কারো আঙুলে কাটা বা দাগ থাকলে কি হাজিরা দেওয়া যাবে?', answer: 'হ্যাঁ, মেশিনে প্রতি ব্যক্তির জন্য একাধিক আঙুলের ছাপ বা ব্যাকআপ হিসেবে পিনকোড ও আরএফআইডি কার্ড ব্যবহার করা যায়।' }
    ]
  },
  'attendance-machine-installation': {
    slug: 'attendance-machine-installation',
    name: 'Attendance Machine Installation',
    bnName: 'ডিজিটাল হাজিরা মেশিন ইনস্টলেশন',
    category: 'Biometrics & Attendance',
    title: 'SHAMIM TECH SOLUTION • Digital Attendance Machine Installation',
    metaDescription: 'স্কুল, কলেজ, মাদ্রাসা ও ফ্যাক্টরির জন্য ডিজিটাল হাজিরা মেশিন ইনস্টলেশন ও এসএমএস এলার্ট সার্ভিস। কল: 01790139333।',
    h1: 'Institutional & Factory Attendance Machine Installation',
    tagline: 'Automated Student & Employee Attendance with Parent SMS Alerts',
    bengaliTagline: 'শিক্ষার্থী ও কর্মীদের স্বয়ংক্রিয় ডিজিটাল হাজিরা ও অভিভাবকদের ফোনে এসএমএস অ্যালার্ট',
    description: 'স্কুল, কলেজ, মাদ্রাসা এবং গার্মেন্টসে হাজারো শিক্ষার্থীর উপস্থিতির হিসাব রাখতে এবং হাজিরা দেওয়ার সাথে সাথে অভিভাবকের ফোনে স্বয়ংক্রিয় এসএমএস পাঠাতে ডিজিটাল হাজিরা মেশিন অপরিহার্য। আমরা হাই-ক্যাপাসিটি মেশিন স্থাপন করে থাকি।',
    keyFeatures: [
      'হাজিরা পাঞ্চ করার সাথে সাথে স্বয়ংক্রিয় এসএমএস নোটিফিকেশন সিস্টেম ইন্টিগ্রেশন',
      'হাজারো শিক্ষার্থীর ডাটাবেজ ধারণক্ষমতাসম্পন্ন হাই-স্পিড মেমোরি',
      'শিক্ষক ও স্টাফদের জন্য আলাদা ডিপার্টমেন্ট ও শিফট শিডিউলিং',
      'মাস শেষে এক ক্লিকে পারসেন্টেজ হাজিরা শীট প্রিন্ট করার সুবিধা'
    ],
    processSteps: [
      { title: '১. প্রবেশদ্বার নির্বাচন', desc: 'শিক্ষার্থীদের জটলা না হওয়ার মতো স্থানে মেশিন বসানো।' },
      { title: '২. নেটওয়ার্ক ওয়্যারিং', desc: 'অফিস রুম থেকে গেট পর্যন্ত ল্যান ক্যাবল টানা।' },
      { title: '৩. এসএমএস গেটওয়ে সেটআপ', desc: 'বাল্ক এসএমএস এপিআই কনফিগার করা।' },
      { title: '৪. ড্রিল টেস্ট', desc: 'টেস্ট পাঞ্চ করে অভিভাবকের মোবাইলে এসএমএস পৌঁছানো নিশ্চিত করা।' }
    ],
    pricingStartingFrom: '৳১,৫০০ / ইউনিট ইনস্টলেশন',
    warrantyInfo: '১ বছরের পূর্ণাঙ্গ সিস্টেম ইনস্টলেশন ওয়ারেন্টি',
    popularSearchKeywords: ['attendance machine installation', 'school attendance machine bangladesh', 'biometric attendance machine fitting'],
    relatedServices: ['biometric-machine-setup', 'fingerprint-machine-setup'],
    relatedProductSlugs: ['biometric-attendance-machine', 'face-recognition-attendance-machine'],
    faqs: [
      { question: 'ছাত্র-ছাত্রী কার্ড সোয়াইপ করলে কি অভিভাবকের মোবাইলে মেসেজ যাবে?', answer: 'হ্যাঁ! আমাদের স্পেশাল এসএমএস মডিউল যুক্ত করলে হাজিরা পাঞ্চের সাথে সাথে মেসেজ চলে যাবে।' }
    ]
  },

  // 5. Electrical Wiring & Technician Services
  'electrician': {
    slug: 'electrician',
    name: 'Electrician Service',
    bnName: 'অভিজ্ঞ ইলেকট্রিশিয়ান সার্ভিস (বাসা ও অফিস)',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Electrician & Electrical Service',
    metaDescription: 'বাসা ও অফিসের শর্ট সার্কিট, ওয়্যারিং ত্রুটি, ফ্যান ও লাইট ফিটিংয়ের জন্য অভিজ্ঞ ইলেকট্রিশিয়ান। জরুরি সেবায় কল: 01790139333।',
    h1: 'Reliable Certified Electrician Services in Rangpur & Beyond',
    tagline: 'Fast Response for Short Circuits, Electrical Repairs & Safety Upgrades',
    bengaliTagline: 'শর্ট সার্কিট, বিদ্যুৎ বিভ্রাট ও ওয়্যারিং সুরক্ষায় দ্রুত অভিজ্ঞ ইলেকট্রিশিয়ান সেবা',
    description: 'বাড়ির মেইন সুইচ ট্রিপ করা, সার্কিট ব্রেকার পুড়ে যাওয়া, ওয়্যারিংয়ে বিদ্যুৎ স্পার্ক হওয়া বা নতুন ফ্যান-লাইট ফিটিং করার জন্য শামীম টেক সলিউশন দেয় দক্ষ ও সার্টিফাইড ইলেকট্রিশিয়ান সেবা। নিরাপত্তা ও নিখুঁত কাজ আমাদের অঙ্গীকার।',
    keyFeatures: [
      '২৪/৭ জরুরি শর্ট সার্কিট ফল্ট ট্রেসিং ও বিদ্যুৎ সংযোগ পুনরুদ্ধার',
      'সার্কিট ব্রেকার (MCB/MCCB) ও আরসিবিও (RCBO) লিকেজ প্রটেকশন স্থাপন',
      'সিলিং ফ্যান, ঝাড়বাতি, এলইডি লাইট ও গিজার নিরাপদ ফিটিং',
      'সঠিক লোড ক্যালকুলেশন করে উপযুক্ত গেজের কপার ক্যাবল নির্বাচন'
    ],
    processSteps: [
      { title: '১. ফল্ট ট্রেসিং', desc: 'টেস্টার ও ক্ল্যাম্প মিটারে শর্ট সার্কিট ও আর্দিং পরীক্ষা।' },
      { title: '২. নিরাপদ আইসোলেশন', desc: 'মেইন ব্রেকার বন্ধ করে ঝুঁকিমুক্ত কাজের প্রস্তুতি।' },
      { title: '৩. পার্টস মেরামত বা পরিবর্তন', desc: 'বিআরবি / বিবিএস প্রিমিয়াম ক্যাবল ও সুইচে রিপ্লেস।' },
      { title: '৪. লোড টেস্ট', desc: 'লোড অন করে ভোল্টেজ ও হিটিং চেক করা।' }
    ],
    pricingStartingFrom: '৳৩০০ (ভিজিট ও প্রাথমিক কাজ)',
    warrantyInfo: 'কাজে সর্বোচ্চ নিরাপত্তা ও বিদ্যুৎ সাশ্রয়ের নিশ্চয়তা',
    popularSearchKeywords: ['electrician service rangpur', 'electrician near me', 'emergency electrician bangladesh'],
    relatedServices: ['electrical-technician', 'house-electrical-wiring', 'electrical-repair-maintenance', 'switchboard-installation'],
    relatedProductSlugs: ['cctv-power-supply', 'cctv-adapter'],
    faqs: [
      { question: 'হঠাৎ মেইন ব্রেকার ট্রিপ করে বিদ্যুৎ চলে গেলে কী করব?', answer: 'অতিরিক্ত লোড বা শর্ট সার্কিট হলে ব্রেকার ট্রিপ করে। নিজে হাত না দিয়ে আমাদের কল করুন, আমরা এসে নিরাপদ করব।' }
    ]
  },
  'electrical-technician': {
    slug: 'electrical-technician',
    name: 'Electrical Technician',
    bnName: 'দক্ষ ইলেকট্রিক্যাল টেকনিশিয়ান সার্ভিস',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Certified Electrical Technician & Industrial Support',
    metaDescription: 'ডিস্ট্রিবিউশন বোর্ড (DB), সাবস্টেশন ও থ্রি-ফেজ লোড ব্যালেন্সিংয়ে দক্ষ ইলেকট্রিক্যাল টেকনিশিয়ান। কল: 01790139333।',
    h1: 'Expert Industrial & Residential Electrical Technician',
    tagline: 'Three-Phase Power Balancing, DB Board Dressing & Substation Troubleshooting',
    bengaliTagline: 'থ্রি-ফেজ পাওয়ার ব্যালেন্সিং, ডিবি বোর্ড ড্রেসিং ও নিরবচ্ছিন্ন বিদ্যুৎ নিরাপত্তা',
    description: 'বাড়ি, মার্কেট ও ছোট কলকারখানার থ্রি-ফেজ (3-Phase) বিদ্যুৎ লাইন, চেঞ্জওভার সুইচ, আইপিএস/ইউপিএস লাইন এবং ডিস্ট্রিবিউশন বোর্ড প্রফেশনাল টেকনিশিয়ান দ্বারা ড্রেসিং ও ব্যালেন্সিং করা হয় যাতে বিদ্যুৎ অপচয় ও অগ্নিকাণ্ডের ঝুঁকি শূন্য থাকে।',
    keyFeatures: [
      'থ্রি-ফেজ ব্যালেন্সিং: প্রতিটি ফেজে সমান লোড ভাগ করে ভোল্টেজ ড্রপ রোধ',
      'সাব ডিস্ট্রিবিউশন বোর্ড (SDB/MDB) ড্রেসিং ও পরিষ্কার ওয়্যারিং',
      'আইপিএস (IPS) ও অনলাইন ইউপিএস এর জন্য আলাদা সেপারেট লাইন ওয়্যারিং',
      'প্রোপার আর্থিং (Earth Pit) মেগারিং ও রেজিস্ট্যান্স ১ ওহমের নিচে রাখা'
    ],
    processSteps: [
      { title: '১. লোড মেজারমেন্ট', desc: 'ক্ল্যাম্প মিটার দিয়ে প্রতিটি ফেজের লাইভ অ্যাম্পিয়ার মাপা।' },
      { title: '২. ক্যাবল সাইজিং', desc: 'মোটর ও এসির লোড অনুযায়ী তারের সাইজ রি-ভেরিফাই করা।' },
      { title: '৩. বোর্ড টার্মিনেশন', desc: 'বাসবার ও লাক্স দিয়ে মজবুত টার্মিনেশন।' },
      { title: '৪. আর্থিং টেস্ট', desc: 'আর্থ টেস্টার দিয়ে গ্রাউন্ড লিকেজ সুরক্ষা নিশ্চিতকরণ।' }
    ],
    pricingStartingFrom: '৳৬০০ থেকে শুরু',
    warrantyInfo: '১০০% কারিগরি মান ও নিরাপত্তা সার্টিফিকেশন',
    popularSearchKeywords: ['electrical technician', 'db board wiring rangpur', 'three phase electrician'],
    relatedServices: ['electrician', 'electrical-installation', 'office-electrical-wiring'],
    relatedProductSlugs: ['cctv-power-supply'],
    faqs: [
      { question: 'বাড়িতে ঘন ঘন এসি বা মোটর চালালে কি ভোল্টেজ ডাউন হতে পারে?', answer: 'হ্যাঁ, ফেজ আনব্যালেন্স বা চিকন তারের জন্য ভোল্টেজ ড্রপ হয়। আমরা ফেজ ব্যালেন্স করে সমস্যার সমাধান করি।' }
    ]
  },
  'house-electrical-wiring': {
    slug: 'house-electrical-wiring',
    name: 'House Electrical Wiring',
    bnName: 'বাড়ির কনসিল্ড ইলেকট্রিক ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Complete House Electrical Wiring Service',
    metaDescription: 'নতুন বাড়ির সম্পূর্ণ কনসিল্ড পাইপিং ও ইলেকট্রিক ওয়্যারিং সার্ভিস। বিআরবি ক্যাবল ও আধুনিক গ্যাং সুইচ। কল: 01790139333।',
    h1: 'Turnkey House Electrical Wiring & Concealed Conduit Conduit Solutions',
    tagline: 'Fire-Resistant Cables, Concealed Piping & Lifetime Electrical Safety',
    bengaliTagline: 'অগ্নিনিরোধক ক্যাবল, কনসিল্ড পাইপিং ও আজীবন বৈদ্যুতিক সুরক্ষা',
    description: 'নতুন বাড়ি তৈরির সময় ছাদ ঢালাইয়ের পাইপ ফেলা থেকে শুরু করে দেওয়াল কেটে খাঁজ কাটা, বোর্ড বসানো এবং বিআরবি (BRB), ইস্টার্ন (Eastern) বা বিবিএস (BBS) প্রিমিয়াম ক্যাবল দিয়ে সম্পূর্ণ ওয়্যারিং সম্পন্ন করে শামীম টেক সলিউশন।',
    keyFeatures: [
      'ছাদে ও দেওয়ালে নিখুঁত কন্ডুইট পাইপিং—দেওয়াল দুর্বল না করে কাটাকুটি',
      'ফায়ার রিটার্ড্যান্ট (FR) হাই-গ্রেড কপার ক্যাবল ব্যবহার',
      'প্রতিটি রুমে এসি, গিজার, রেফ্রিজারেটর ও সাধারণ লাইটের আলাদা সার্কিট',
      'আধুনিক মডুলার গ্যাং সুইচ ও সকেট বোর্ড সুবিন্যস্ত মাউন্টিং'
    ],
    processSteps: [
      { title: '১. ড্রয়িং ও প্ল্যানিং', desc: 'আর্কিটেকচারাল ড্রয়িং দেখে লাইট, ফ্যান ও এসির পয়েন্ট নির্ধারণ।' },
      { title: '২. পাইপিং ও চিপিং', desc: 'দেওয়াল কেটে ড্রপ পাইপ ও মেটাল বোর্ড বসানো।' },
      { title: '৩. ক্যাবল টানা', desc: 'রং মিলিয়ে ফেজ, নিউট্রাল ও আর্থিং তার টানা।' },
      { title: '৪. ফিটিংস ও ফাইনাল টেস্টিং', desc: 'রং করার পর গ্যাং সুইচ বোর্ড লাগানো ও টেস্টিং।' }
    ],
    pricingStartingFrom: 'পয়েন্ট বা স্কয়ার ফিট চুক্তি অনুযায়ী সাশ্রয়ী রেট',
    warrantyInfo: 'ওয়্যারিংয়ের লাইফটাইম নিরাপত্তা ও কারিগরি সহায়তা',
    popularSearchKeywords: ['house electrical wiring', 'concealed wiring bangladesh', 'home electrician contractor'],
    relatedServices: ['electrician', 'switchboard-installation', 'lighting-installation'],
    relatedProductSlugs: ['cctv-cable', 'cctv-power-supply'],
    faqs: [
      { question: 'একটি ৩ তলা বাড়ির সম্পূর্ণ ওয়্যারিং করতে কতদিন সময় লাগে?', answer: 'নির্মাণ কাজের অগ্রগতির সাথে সমন্বয় করে সাধারণত ১৫ থেকে ২৫ কর্মদিবস সময় লাগে।' }
    ]
  },
  'office-electrical-wiring': {
    slug: 'office-electrical-wiring',
    name: 'Office Electrical Wiring',
    bnName: 'অফিস ও শোরুম ইলেকট্রিক্যাল ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Corporate Office Electrical Wiring & Fit-Out',
    metaDescription: 'কর্পোরেট অফিস, শোরুম ও ব্যাংকের জন্য সুবিন্যস্ত ইলেকট্রিক ওয়্যারিং ও পাওয়ার ব্যাকআপ লাইন। কল: 01790139333।',
    h1: 'Commercial & Office Interior Electrical Wiring Solutions',
    tagline: 'Reliable Workstation Power, Server UPS Line & Clean Cable Aesthetics',
    bengaliTagline: 'ওয়ার্কস্টেশন পাওয়ার, সার্ভার ইউপিএস ব্যাকআপ ও দৃষ্টিনন্দন পরিপাটি ওয়্যারিং',
    description: 'কর্পোরেট অফিসে কম্পিউটার, প্রিন্টার ও সার্ভারের জন্য নিরবচ্ছিন্ন ও ভোল্টেজ ওঠানামামুক্ত বিদ্যুৎ সরবরাহ জরুরি। আমরা জেনারেটর ও অনলাইন ইউপিএস সিঙ্ক সহ প্রতিটি কর্মীর ওয়ার্কস্টেশনে নিরাপদ পাওয়ার ডিস্ট্রিবিউশন নিশ্চিত করি।',
    keyFeatures: [
      'ওয়ার্কস্টেশনে কম্পিউটার ও মনিটরের জন্য ডেডিকেটেড র পাওয়ার ও ইউপিএস পাওয়ার',
      'ফ্লোর রেসওয়ে (Floor Raceway) ও ফলস সিলিং কন্ডুইট দিয়ে অদৃশ্য ওয়্যারিং',
      'সার্ভার রুমের জন্য থ্রি-ফেজ আইসোলেটেড পাওয়ার ও এসি অটো-কুলিং সুইচিং',
      'জরুরি বিদ্যুৎ বিভ্রাটে তাৎক্ষণিক জেনারেটর ও ইউপিএস ব্যাকআপ সাপোর্ট'
    ],
    processSteps: [
      { title: '১. অফিসের লোড এনালাইসিস', desc: 'পিসি, সার্ভার ও এসির মেগাওয়াট লোড হিসাব।' },
      { title: '২. ক্যাবল ট্রে ও পাইপ স্থাপন', desc: 'ফলস সিলিংয়ের ভেতর ক্যাবল ট্রে বসানো।' },
      { title: '৩. ডেস্ক কানেক্টিভিটি', desc: 'প্রতিটি ডেস্কে ৪-প্লাগ সকেট ও ডেটা পোর্ট ফিটিং।' },
      { title: '৪. ইউপিএস ইন্টিগ্রেশন', desc: 'মেইন ডিবিতে ব্যাকআপ লাইন সেগ্রিগেশন।' }
    ],
    pricingStartingFrom: 'প্রজেক্ট ও ডেস্ক সংখ্যা সাপেক্ষে কাস্টম কোটেশন',
    warrantyInfo: '১ বছরের পূর্ণাঙ্গ কর্পোরেট মেইনটেন্যান্স ওয়ারেন্টি',
    popularSearchKeywords: ['office electrical wiring', 'commercial wiring bangladesh', 'corporate office fitout electrical'],
    relatedServices: ['office-network-setup', 'electrical-technician', 'lighting-installation'],
    relatedProductSlugs: ['cctv-power-supply', 'network-switch'],
    faqs: [
      { question: 'অফিসে ইউপিএস পাওয়ার ও জেনারেটর পাওয়ার আলাদা করা যায়?', answer: 'হ্যাঁ, কম্পিউটারের জন্য পিওর ইউপিএস লাইন ও লাইট-ফ্যানের জন্য সাধারণ জেনারেটর লাইন আলাদা করে দেওয়া হয়।' }
    ]
  },
  'shop-electrical-wiring': {
    slug: 'shop-electrical-wiring',
    name: 'Shop Electrical Wiring',
    bnName: 'দোকান ও শপিং মল ইলেকট্রিক ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Shop & Commercial Showroom Electrical Wiring',
    metaDescription: 'দোকান, রেস্তোরাঁ ও শোরুমের আকর্ষণীয় স্পটলাইট ও ইলেকট্রিক ওয়্যারিং সার্ভিস। সাশ্রয়ী খরচ। কল: 01790139333।',
    h1: 'Retail Shop & Commercial Outlet Electrical Wiring',
    tagline: 'High-Impact Display Lighting, Safety Breakers & Energy-Efficient Wiring',
    bengaliTagline: 'পণ্য প্রদর্শনী স্পটলাইট, নিরাপদ ব্রেকার ও বিদ্যুৎসাশ্রয়ী আধুনিক ওয়্যারিং',
    description: 'দোকান বা শোরুমের সৌন্দর্য নির্ভর করে লাইটিং ও পাওয়ার ডিস্ট্রিবিউশনের ওপর। জামাকাপড়ের দোকান, জুয়েলারি বা সুপারশপের স্পটলাইট, ট্র্যাক লাইট, সাইনবোর্ড লাইট ও বিলিং কাউন্টারের জন্য নিরাপদ ও আকর্ষণীয় ওয়্যারিং করে শামীম টেক সলিউশন।',
    keyFeatures: [
      'শোকেস ও ডিসপ্লে তাকের জন্য ট্র্যাক লাইট (Track Light) ও কোভ লাইটিং',
      'বহিরাঙ্গন নিয়ন সাইনবোর্ড ও এলইডি ফ্লাড লাইটের জন্য অটোমেটিক টাইমার সুইচ',
      'বিলিং কাউন্টারে পস (POS) মেশিন ও কম্পিউটারের জন্য নিরবচ্ছিন্ন পাওয়ার',
      'শর্ট সার্কিট ও অগ্নিকাণ্ড রোধে উচ্চমানের সার্কিট ব্রেকার প্রটেকশন'
    ],
    processSteps: [
      { title: '১. লাইটিং প্ল্যান', desc: 'পণ্য ডিসপ্লে আকর্ষণীয় করতে আলোর অ্যাঙ্গেল নির্ধারণ।' },
      { title: '২. কন্ডুইট ওয়্যারিং', desc: 'কাঠের তাক বা ডেকোরেশনের ফাঁক দিয়ে ক্যাবলিং।' },
      { title: '৩. লাইট ও সুইচ মাউন্টিং', desc: 'ওয়ার্ম-হোয়াইট স্পটলাইট ও গ্যাং সুইচ বসানো।' },
      { title: '৪. সেফটি টেস্ট', desc: 'সারারাত জ্বলে থাকার সহনশীলতা পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳২,০০০ থেকে শুরু (দোকানের সাইজ অনুযায়ী)',
    warrantyInfo: '১ বছরের সার্ভিস ওয়ারেন্টি সাপোর্ট',
    popularSearchKeywords: ['shop electrical wiring', 'showroom lighting setup', 'store electrician rangpur'],
    relatedServices: ['lighting-installation', 'switchboard-installation', 'electrician'],
    relatedProductSlugs: ['cctv-adapter', 'cctv-power-supply'],
    faqs: [
      { question: 'দোকানের সাইনবোর্ড কি সন্ধ্যায় নিজে নিজে জ্বলতে পারে?', answer: 'হ্যাঁ, আমরা ফটোসেল সেন্সর বা ডিজিটাল টাইমার সুইচ লাগিয়ে দেই যা সন্ধ্যা হলে একা জ্বলে এবং সকালে নিভে যায়।' }
    ]
  },
  'electrical-installation': {
    slug: 'electrical-installation',
    name: 'Electrical Installation',
    bnName: 'ইলেকট্রিক্যাল যন্ত্রপাতি ইনস্টলেশন',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Electrical Appliance & Equipment Installation',
    metaDescription: 'সার্কিট ব্রেকার, ডিবি বক্স, ওয়াটার হিটার গিজার ও হেভি অ্যাপ্লায়েন্স ইনস্টলেশন। অভিজ্ঞ ইঞ্জিনিয়ার: 01790139333।',
    h1: 'Precision Electrical Appliance & Power Equipment Installation',
    tagline: 'Safe, Compliant & Certified Setup for Heavy Home & Office Equipment',
    bengaliTagline: 'ভারী যন্ত্রপাতি ও ইলেকট্রিক্যাল পাওয়ার ইকুইপমেন্টের নিরাপদ ইনস্টলেশন',
    description: 'ওয়াটার পাম্প মোটর, গিজার, এসি আউটডোর পয়েন্ট, মেইন ডিস্ট্রিবিউশন বক্স বা চেঞ্জওভার সুইচ ভুলভাবে লাগালে বড় ধরনের বিপদ হতে পারে। শামীম টেক সলিউশন প্রতিটি যন্ত্র সঠিক গেজের তার ও সেফটি ব্রেকার সহকারে ইনস্টল করে।',
    keyFeatures: [
      'ওয়াটার হিটার (Geyser) এর জন্য শকবিক্ষোভ রোধক সেফটি প্লাগ সংযোগ',
      'পানি তোলার মোটর ও সাবমার্সিবল পাম্পের ম্যাগনেটিক স্টার্টার কন্ট্রোল বক্স ফিটিং',
      'জেনারেটর টু মেইন পাওয়ার ম্যানুয়াল ও অটোমেটিক চেঞ্জওভার সুইচ সেটআপ',
      'এসি (AC) এর জন্য ডেডিকেটেড ২০/৩২ অ্যাম্পিয়ার পাওয়ার পয়েন্ট ও ব্রেকার'
    ],
    processSteps: [
      { title: '১. পাওয়ার ক্যাপাসিটি চেক', desc: 'যন্ত্রের ওয়াট মেপে সঠিক তারের সাইজ নিশ্চিত করা।' },
      { title: '২. হেভি ডিউটি মাউন্টিং', desc: 'দেওয়ালে মজবুত রয়্যাল বোল্ট দিয়ে ফিক্সিং।' },
      { title: '৩. আর্থিং কানেকশন', desc: 'শক প্রতিরোধে কার্যকর আর্থিং তার লাগানো।' },
      { title: '৪. ফুল লোড রান', desc: 'যন্ত্রটি পূর্ণ গতিতে চালিয়ে তার গরম হচ্ছে কি না পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳৫০০ / যন্ত্র ইনস্টলেশন',
    warrantyInfo: 'কাজে শতভাগ নিরাপত্তা ও স্থায়িত্বের নিশ্চয়তা',
    popularSearchKeywords: ['electrical installation service', 'geyser installation', 'ac power point setup'],
    relatedServices: ['electrician', 'electrical-technician', 'electrical-repair-maintenance'],
    relatedProductSlugs: ['cctv-power-supply'],
    faqs: [
      { question: 'গিজার লাগালে কি গায়ে বিদ্যুৎ লাগার ভয় থাকে?', answer: 'আমরা প্রোপার আর্থিং ও আরসিবিডি (RCBD) লিকেজ ব্রেকার সহকারে সংযোগ করি, ফলে শক লাগার কোনো সম্ভাবনা থাকে না।' }
    ]
  },
  'electrical-repair-maintenance': {
    slug: 'electrical-repair-maintenance',
    name: 'Electrical Repair & Maintenance',
    bnName: 'বৈদ্যুতিক লাইন মেরামত ও সেফটি চেক',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Electrical Repair & Preventative Safety Maintenance',
    metaDescription: 'পোড়া সুইচবোর্ড মেরামত, সার্কিট ব্রেকার রিপ্লেসমেন্ট ও ফল্ট লাইন রিকভারি। তাৎক্ষণিক সার্ভিসে কল: 01790139333।',
    h1: 'Electrical Fault Diagnostics, Repair & Safety Maintenance',
    tagline: 'Eliminate Fire Hazards, Voltage Fluctuation & Power Outages',
    bengaliTagline: 'অগ্নিকাণ্ডের ঝুঁকি, ভোল্টেজ ওঠানামা ও বিদ্যুৎ বিভ্রাট দূরীকরণ',
    description: 'বৈদ্যুতিক লাইনে কোনো অংশ গরম হওয়া, প্লাগ গলে যাওয়া বা ঘন ঘন লাইট কেটে যাওয়া বড় বিপদের পূর্বাভাস। আমাদের দক্ষ দল সম্পূর্ণ বাড়ির ওয়্যারিং অডিট করে খারাপ সংযোগ ঠিক করে এবং নিরাপদ বিদ্যুৎ সরবরাহ নিশ্চিত করে।',
    keyFeatures: [
      'গলে যাওয়া বা পোড়া প্লাগ সকেট ও সুইচবোর্ড তাৎক্ষণিক পরিবর্তন',
      'লুজ কানেকশন ও স্পার্কিং পয়েন্ট শনাক্ত করে টাইট ও সুরক্ষিত করা',
      'অতিরিক্ত লোডের কারণে গরম হওয়া তার পরিবর্তন করে হাই-গেজ তার লাগানো',
      'বিল্ডিংয়ের সামগ্রিক আর্থিং ও নিউট্রাল ভোল্টেজ লিকেজ নিরসন'
    ],
    processSteps: [
      { title: '১. থার্মাল ও ভোল্টেজ ইন্সপেকশন', desc: 'বোর্ড গরম হচ্ছে কি না তা স্পর্শহীন মিটারে চেক।' },
      { title: '২. ফল্টি পার্টস রিমুভাল', desc: 'নষ্ট সুইচ বা তার অপসারণ।' },
      { title: '৩. ব্র্যান্ডেড পার্টস রিপ্লেস', desc: 'অরিজিনাল প্রিমিয়াম পার্টস দিয়ে পুনঃস্থাপন।' },
      { title: '৪. নিরাপত্তা সার্টিফিকেট', desc: 'নিরাপদ পাওয়ার ফ্লোগুলো নিশ্চিত করে ডেলিভারি।' }
    ],
    pricingStartingFrom: '৳৩৫০ থেকে শুরু',
    warrantyInfo: 'মেরামতকৃত অংশে বিশেষ সার্ভিস নিশ্চয়তা',
    popularSearchKeywords: ['electrical repair service', 'switchboard repair', 'home electrical maintenance'],
    relatedServices: ['electrician', 'switchboard-installation', 'electrical-installation'],
    relatedProductSlugs: ['cctv-adapter', 'cctv-power-supply'],
    faqs: [
      { question: 'সকেটে প্লাগ লাগালে স্পার্ক বা পট পট শব্দ হয় কেন?', answer: 'এটি সকেটের ভিতরের মেটাল পিন ঢিলা হয়ে যাওয়ার কারণে ঘটে। দ্রুত সকেট পরিবর্তন না করলে আগুন লাগার ঝুঁকি থাকে।' }
    ]
  },
  'switchboard-installation': {
    slug: 'switchboard-installation',
    name: 'Switchboard Installation',
    bnName: 'আধুনিক সুইচবোর্ড ও গ্যাং সুইচ ফিটিং',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Modern Modular Gang Switchboard Installation',
    metaDescription: 'আধুনিক মডুলার গ্যাং সুইচ, পিয়ানো বোর্ড ও মাল্টি-প্লাগ সকেট ফিটিং সার্ভিস। নিখুঁত ফিনিশিং। কল: 01790139333।',
    h1: 'Modern Modular Gang Switchboard & Socket Installation',
    tagline: 'Sleek Aesthetic Design, Child-Safe Sockets & Precision Wiring',
    bengaliTagline: 'আধুনিক দৃষ্টিনন্দন গ্যাং সুইচ, শিশু-নিরাপদ সকেট ও নিখুঁত ওয়্যারিং',
    description: 'পুরোনো আমলের পিয়ানো সুইচবোর্ড পরিবর্তন করে আধুনিক বিলাসবহুল মডুলার গ্যাং সুইচ (Super Star, Click, Havells) স্থাপন করে ঘরের সৌন্দর্য বহুগুণ বাড়িয়ে নিন। শামীম টেক সলিউশন কোনো দেওয়াল না ভেঙে পরিপাটি সুইচবোর্ড ফিটিং করে দেয়।',
    keyFeatures: [
      '১ থেকে ৮ গ্যাং সুইচ, ফ্যান রেগুলেটর ও ইন্ডিকেটর কম্বিনেশন ফিটিং',
      'শিশুদের আঙুল ঢোকানো রোধে চাইল্ড-প্রটেক্টেড শাটার সকেট ব্যবহার',
      'স্মার্ট টাচ ও ওয়াইফাই সুইচবোর্ড সেটআপ—মোবাইল দিয়ে লাইট অন/অফ',
      'আন্তর্জাতিক মানের সিলভার কন্টাক্ট সুইচ—শব্দহীন ও স্পার্কমুক্ত'
    ],
    processSteps: [
      { title: '১. পুরোনো বোর্ড রিমুভাল', desc: 'নিরাপদে বিদ্যুৎ বন্ধ করে পুরোনো বোর্ড খুলে নেওয়া।' },
      { title: '২. ওয়্যারিং ড্রেসিং', desc: 'তারের মাথা নতুন করে ইনসুলেশন ছুলে কানেক্টরে সেট করা।' },
      { title: '৩. লেভেলিং ও স্ক্রুয়িং', desc: 'স্পিরিট লেভেলার দিয়ে সোজা করে মেটাল বক্সে ফিক্সিং।' },
      { title: '৪. অপারেশনাল টেস্ট', desc: 'প্রতিটি সুইচ ও ফ্যান স্পিড কন্ট্রোল টেস্ট।' }
    ],
    pricingStartingFrom: '৳১৫০ / বোর্ড ফিটিং',
    warrantyInfo: '১ বছরের ফিটিং ও ওয়্যারিং ওয়ারেন্টি',
    popularSearchKeywords: ['switchboard installation', 'gang switch fitting bangladesh', 'super star switchboard setup'],
    relatedServices: ['electrician', 'house-electrical-wiring', 'lighting-installation'],
    relatedProductSlugs: ['cctv-accessories'],
    faqs: [
      { question: 'পুরোনো কাঠের বোর্ডে কি নতুন গ্যাং সুইচ বসানো যাবে?', answer: 'হ্যাঁ, বিশেষ অ্যাডাপ্টার প্লেট ব্যবহার করে পুরোনো কাঠের বাক্সেও নতুন গ্যাং সুইচ ফিট করা যায়।' }
    ]
  },
  'lighting-installation': {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    bnName: 'লাইটিং ইনস্টলেশন ও ডেকোরেটিভ লাইট ফিটিং',
    category: 'Electrical Wiring',
    title: 'SHAMIM TECH SOLUTION • Decorative Lighting & LED Spot Light Installation',
    metaDescription: 'ফলস সিলিং স্পটলাইট, ঝাড়বাতি, এলইডি প্যানেল লাইট ও ড্রয়িং রুম লাইটিং সেটআপ। কল: 01790139333।',
    h1: 'Architectural LED & Decorative Lighting Installation',
    tagline: 'Transform Interior Ambiance with Energy-Efficient LED Systems',
    bengaliTagline: 'আধুনিক এলইডি ও নান্দনিক আলোর ছোঁয়ায় ঘরের পরিবেশ রূপান্তর',
    description: 'ঘরের সৌন্দর্য ও আভিজাত্য বাড়াতে সঠিক আলোর বিন্যাস অত্যন্ত জরুরি। আমরা জিপসাম ফলস সিলিং স্পটলাইট, কোভ লাইট (Cove Light), সারফেস প্যানেল লাইট ও বিলাসবহুল ঝাড়বাতি নিখুঁত ড্রিলিং সহকারে স্থাপন করে থাকি।',
    keyFeatures: [
      'জিপসাম ফলস সিলিংয়ে নির্ভুল কাটিং সহ স্পটলাইট ও ডাউনলাইট মাউন্টিং',
      'ড্রয়িং রুমের জন্য ক্রিস্টাল ঝাড়বাতি (Chandelier) মজবুত সিলিং অ্যাঙ্করিং',
      'ওয়্যার্ম হোয়াইট, কুল হোয়াইট ও ডে-লাইট মাল্টি-কালার এলইডি স্ট্রিপ স্থাপন',
      'বিদ্যুৎসাশ্রয়ী ইনভার্টার এলইডি প্রযুক্তির মাধ্যমে বিদ্যুৎ বিল ৫০% কমানো'
    ],
    processSteps: [
      { title: '১. সিলিং মার্কিং', desc: 'আলোর সঠিক ছড়ানোর দূরত্বের জন্য সুষম লেআউট মার্কিং।' },
      { title: '২. হোল স কাটিং', desc: 'হোল স কাটার দিয়ে নিখুঁত গোল খাঁজ কাটা।' },
      { title: '৩. ড্রাইভার কানেকশন', desc: 'লেটেস্ট এলইডি ড্রাইভার ও পাওয়ার তার সংযোগ।' },
      { title: '৪. লাইট ব্যালেন্সিং', desc: 'সব লাইট একসাথে জ্বালিয়ে আলোর ভারসাম্য পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳১০০ / লাইট পয়েন্ট',
    warrantyInfo: 'ফিটিংয়ের শতভাগ স্থায়িত্ব নিশ্চয়তা',
    popularSearchKeywords: ['lighting installation', 'spot light fitting rangpur', 'ceiling chandelier installation'],
    relatedServices: ['electrician', 'house-electrical-wiring', 'shop-electrical-wiring'],
    relatedProductSlugs: ['cctv-accessories'],
    faqs: [
      { question: 'ভারী ঝাড়বাতি কি সিলিং ফ্যান হুকে ঝোলানো যাবে?', answer: 'আমরা স্পেশাল মেটাল এক্সপেনশন অ্যাঙ্কর দিয়ে সিলিংয়ে ড্রিল করে অতিরিক্ত নিরাপত্তা সহকারে ঝাড়বাতি লাগাই।' }
    ]
  },

  // 6. Computer & LAN Networking Services
  'computer-lan-networking': {
    slug: 'computer-lan-networking',
    name: 'Computer LAN Networking',
    bnName: 'কম্পিউটার ল্যান নেটওয়ার্কিং সার্ভিস',
    category: 'Computer & LAN Networking',
    title: 'SHAMIM TECH SOLUTION • Computer LAN Networking Services in Bangladesh',
    metaDescription: 'অফিস, ব্যাংক ও সাইবার ক্যাফের জন্য উচ্চগতির কম্পিউটার ল্যান নেটওয়ার্কিং। ক্যাট৬ ক্যাবলিং ও ফাইল শেয়ারিং। কল: 01790139333।',
    h1: 'Enterprise Computer LAN Networking & Infrastructure Solutions',
    tagline: 'High-Throughput Gigabit Local Area Networks for Offices & Institutions',
    bengaliTagline: 'অফিস ও প্রতিষ্ঠানের জন্য হাই-থ্রুপুট গিগাবিট লোকাল এরিয়া নেটওয়ার্কিং',
    description: 'অফিসের কম্পিউটারগুলোর মাঝে নিরবচ্ছিন্ন ফাইল শেয়ারিং, নেটওয়ার্ক প্রিন্টার শেয়ারিং ও হাই-স্পিড ব্রডব্যান্ড ইন্টারনেট ডিস্ট্রিবিউশন করতে পেশাদার ল্যান নেটওয়ার্কিং অপরিহার্য। শামীম টেক সলিউশন স্ট্রাকচার্ড ক্যাবলিংয়ের মাধ্যমে নেটওয়ার্ক বাস্তবায়ন করে।',
    keyFeatures: [
      '১০০০ এমবিপিএস (১ জিবিপিএস) ফুল ডুপ্লেক্স গিগাবিট ল্যান সংযোগ',
      'সেন্ট্রাল ফাইল সার্ভার, এনএএস (NAS) ও প্রিন্টার শেয়ারিং কনফিগারেশন',
      'ক্যাট৬ (CAT6) পিওর কপার ক্যাবলিং ও আরজে৪৫ মডিউলার জ্যাক পাঞ্চিং',
      'সার্ভার র‍্যাক ক্যাবিনেট, প্যাচ প্যানেল ও কেবল ম্যানেজমেন্ট ড্রেসিং'
    ],
    processSteps: [
      { title: '১. নেটওয়ার্ক আর্কিটেকচার', desc: 'ওয়ার্কস্টেশন সংখ্যা অনুযায়ী নোড ও সুইচিং লেআউট প্ল্যান।' },
      { title: '২. ক্যাট৬ ওয়্যারিং', desc: 'ডাক্টিং ও পিভিসি পাইপের ভেতর দিয়ে তার টানা।' },
      { title: '৩. প্যাচ প্যানেল পাঞ্চিং', desc: 'র‍্যাকে প্যাচ প্যানেল ও ফেসপ্লেট কি-স্টোনে পাঞ্চ করা।' },
      { title: '৪. ফ্লুক টেস্টার সার্টিফিকেশন', desc: '১ জিবিপিএস ব্যান্ডউইথ ও লো-লেটেন্সি টেস্ট।' }
    ],
    pricingStartingFrom: '৳৩০০ / ল্যান পয়েন্ট',
    warrantyInfo: '১ বছরের সম্পূর্ণ নেটওয়ার্কিং সার্ভিস ও রক্ষণাবেক্ষণ ওয়ারেন্টি',
    popularSearchKeywords: ['computer lan networking', 'office lan setup', 'structured cabling bangladesh'],
    relatedServices: ['lan-network-installation', 'network-technician', 'office-network-setup', 'router-switch-configuration'],
    relatedProductSlugs: ['lan-cable', 'cat6-cable', 'network-switch', 'rj45-connector'],
    faqs: [
      { question: 'একটি নেটওয়ার্ক প্রিন্টার কি সব কম্পিউটার থেকে শেয়ার করা যায়?', answer: 'হ্যাঁ! ল্যান নেটওয়ার্কে একটি প্রিন্টার সেট করলে অফিসের ৫০টি কম্পিউটার থেকেই এক ক্লিকে প্রিন্ট দেওয়া যায়।' }
    ]
  },
  'lan-network-installation': {
    slug: 'lan-network-installation',
    name: 'LAN Network Installation',
    bnName: 'লোকাল এরিয়া নেটওয়ার্ক (ল্যান) ইনস্টলেশন',
    category: 'Computer & LAN Networking',
    title: 'SHAMIM TECH SOLUTION • Structured LAN Network Installation & Cabling',
    metaDescription: 'ক্যাট৬ ক্যাবলিং, সার্ভার র‍্যাক মাউন্টিং ও সুইচ কনফিগারেশন সহ সম্পূর্ণ ল্যান নেটওয়ার্ক ইনস্টলেশন। কল: 01790139333।',
    h1: 'Structured LAN Network Installation & Server Rack Dressing',
    tagline: 'Clean Rack Aesthetics, Zero-Interference Data Lines & Fluke-Verified Speed',
    bengaliTagline: 'পরিপাটি সার্ভার র‍্যাক, নয়েজমুক্ত ডেটা লাইন ও পরীক্ষিত গিগাবিট গতি',
    description: 'তারের জটলা ছাড়া আন্তর্জাতিক TIA/EIA স্ট্যান্ডার্ড মেনে প্রফেশনাল ল্যান নেটওয়ার্ক তৈরি করে শামীম টেক সলিউশন।Schneider, D-Link ও CommScope ব্যান্ডের প্রিমিয়াম ক্যাট৬ ক্যাবল ও প্যাচ প্যানেল দিয়ে আমরা দীর্ঘমেয়াদী নেটওয়ার্ক গড়ে তুলি।',
    keyFeatures: [
      '৪U থেকে ৪২U পর্যন্ত সার্ভার র‍্যাক ও ওয়াল-মাউন্ট ক্যাবিনেট ইনস্টলেশন',
      'ম্যানেজড ও আনম্যানেজড ২৪/৪৮ পোর্ট গিগাবিট সুইচ টার্মিনেশন',
      'রুমের দেওয়াল ও কিউবিকলে আরজে৪৫ মডুলার ফেসপ্লেট ফিটিং',
      'রঙিন প্যাচ কর্ড ও কেবল টাই দিয়ে দৃষ্টিনন্দন ক্যাবল ড্রেসিং'
    ],
    processSteps: [
      { title: '১. রুট ম্যাপিং', desc: 'পাওয়ার লাইনের নয়েজ এড়িয়ে ডেটা ক্যাবলের রুট নির্ধারণ।' },
      { title: '২. ক্যাবল পুলিং', desc: 'ক্যাট৬ ক্যাবলিং টেনে র‍্যাক রুমে একত্রিত করা।' },
      { title: '৩. প্যাচ প্যানেল অ্যাসেম্বলি', desc: 'আইডি নম্বর অনুযায়ী তার পাঞ্চিং ও ট্যাগিং।' },
      { title: '৪. পোর্ট লেবেলিং', desc: 'কোন পোর্টের তার কোন রুমে গেছে তা প্রিন্টেড লেবেল লাগানো।' }
    ],
    pricingStartingFrom: '৳৩৫০ / পয়েন্ট',
    warrantyInfo: '২৫ বছরের স্ট্রাকচার্ড ক্যাবলিং স্থায়িত্ব নিশ্চয়তা',
    popularSearchKeywords: ['lan network installation', 'cat6 cable fitting', 'server rack setup'],
    relatedServices: ['computer-lan-networking', 'office-network-setup'],
    relatedProductSlugs: ['lan-cable', 'cat6-cable', 'network-switch'],
    faqs: [
      { question: 'ল্যান ক্যাবল কত মিটার পর্যন্ত সিগন্যাল লস ছাড়া কাজ করে?', answer: 'ক্যাট৬ ক্যাবল সর্বোচ্চ ১০০ মিটার (৩২৮ ফুট) পর্যন্ত কোনো ল্যাগ ছাড়াই ফুল গিগাবিট স্পিড দেয়।' }
    ]
  },
  'network-technician': {
    slug: 'network-technician',
    name: 'Network Technician',
    bnName: 'নেটওয়ার্ক টেকনিশিয়ান ও জরুরি সাপোর্ট',
    category: 'Computer & LAN Networking',
    title: 'SHAMIM TECH SOLUTION • Certified Network Technician & IT Support',
    metaDescription: 'ল্যান সংযোগ বিচ্ছিন্ন, ইন্টারনেট স্লো, আইপি কনফ্লিক্ট বা সুইচ ড্রপ সমস্যার দ্রুত সমাধানে অভিজ্ঞ নেটওয়ার্ক টেকনিশিয়ান। কল: 01790139333।',
    h1: 'Certified Network Technician & Corporate IT Troubleshooting',
    tagline: 'Rapid Diagnostics for Packet Loss, IP Clashes & Bandwidth Chokepoints',
    bengaliTagline: 'প্যাকেট লস, আইপি কনফ্লিক্ট ও ব্যান্ডউইথ ড্রপ সমস্যার দ্রুততম প্রতিকার',
    description: 'অফিসে হঠাৎ ইন্টারনেট বন্ধ হয়ে গেলে বা শেয়ার ফোল্ডার ওপেন না হলে পুরো প্রতিষ্ঠানের কাজ স্থবির হয়ে পড়ে। আমাদের অভিজ্ঞ নেটওয়ার্ক টেকনিশিয়ান বিশেষ ল্যান টেস্টার ও পিং ডায়াগনস্টিক টুলস দিয়ে মুহূর্তেই সমস্যা সমাধান করে ইন্টারনেট সচল করেন।',
    keyFeatures: [
      'ল্যান ক্যাবল ট্র্যাকার দিয়ে দেওয়ালে বা ফলস সিলিংয়ে তার ভাঙা শনাক্তকরণ',
      'আরজে৪৫ কানেক্টর নতুন করে ক্রিম্পিং ও পাঞ্চিং সার্ভিস',
      'সুইচ পোর্ট ফেইলিউর ও লুপব্যাক ব্রডকাস্ট স্টর্ম নিরসন',
      'ডিএইচসিপি (DHCP) আইপি কনফ্লিক্ট ও ডিএনএস (DNS) রেজ্যুলিউশন ফিক্স'
    ],
    processSteps: [
      { title: '১. পিং ও প্যাকেট লস টেস্ট', desc: 'গেটওয়ে ও ইন্টারনেটের সাথে লেটেন্সি পরীক্ষা।' },
      { title: '২. ফিজিক্যাল লেয়ার চেক', desc: 'কানেক্টর ও সুইচের আরজে৪৫ পিন পরীক্ষা।' },
      { title: '৩. রিকানেকশন ও ক্রিম্পিং', desc: 'নষ্ট কানেক্টর কেটে নতুন গোল্ড-প্লেটেড আরজে৪৫ লাগানো।' },
      { title: '৪. স্পিড টেস্ট ভেরিফিকেশন', desc: 'ব্যান্ডউইথ টেস্ট করে অফিস সচল ঘোষণা।' }
    ],
    pricingStartingFrom: '৳৫০০ (ভিজিট ও অন-সাইট ডায়াগনসিস)',
    warrantyInfo: 'তাৎক্ষণিক নেটওয়ার্ক আপটাইম সাপোর্ট',
    popularSearchKeywords: ['network technician', 'lan repair service', 'it technician rangpur'],
    relatedServices: ['network-troubleshooting', 'computer-lan-networking'],
    relatedProductSlugs: ['rj45-connector', 'network-switch', 'lan-cable'],
    faqs: [
      { question: 'কম্পিউটারে "Unidentified Network" বা হলুদ বিস্ময় চিহ্ন দেখালে কী করতে হবে?', answer: 'এটি সাধারণত আইপি অ্যাসাইন না হওয়া বা ডিএইচসিপি সার্ভার বন্ধ হয়ে যাওয়ার কারণে হয়। আমরা আইপি রিসেট করে ঠিক করি।' }
    ]
  },
  'office-network-setup': {
    slug: 'office-network-setup',
    name: 'Office Network Setup',
    bnName: 'সম্পূর্ণ অফিস নেটওয়ার্ক সেটআপ',
    category: 'Computer & LAN Networking',
    title: 'SHAMIM TECH SOLUTION • Complete Office IT & Network Infrastructure Setup',
    metaDescription: 'নতুন অফিসের জন্য কম্পিউটার নেটওয়ার্ক, ওয়াইফাই রাউটার ও শেয়ারিং সিস্টেম সেটআপ। টার্নকি আইটি সমাধান। কল: 01790139333।',
    h1: 'Turnkey Corporate Office IT & Networking Setup',
    tagline: 'High-Density Dual-Band WiFi, Gigabit LAN & Secure Firewall Setup',
    bengaliTagline: 'হাই-ডেনসিটি ডুয়েল-ব্যান্ড ওয়াইফাই, গিগাবিট ল্যান ও নিরাপদ ফায়ারওয়াল সেটআপ',
    description: 'নতুন অফিস শুরু করতে যাচ্ছেন? শামীম টেক সলিউশন কম্পিউটার ক্যাবলিং, ম্যানেজার ও কর্মীদের জন্য ডুয়েল ব্যান্ড ওয়াইফাই রাউটার, এক্সেস পয়েন্ট, প্রিন্টার শেয়ারিং ও ডেটা সিকিউরিটি সহ সম্পূর্ণ আইটি পরিকাঠামো বাস্তবায়ন করে দেয়।',
    keyFeatures: [
      'সারা অফিসে এক ওয়াইফাই নামে নিরবচ্ছিন্ন মেস (Mesh) নেটওয়ার্ক কভারেজ',
      'গেস্ট ওয়াইফাই নেটওয়ার্ক তৈরি—অফিস ডেটাবেজ নিরাপদ রাখতে আলাদা পাসওয়ার্ড',
      'ব্যান্ডউইথ কন্ট্রোল (QoS): গুরুত্বপূর্ণ কর্মকর্তাদের জন্য হাই-স্পিড ইন্টারনেট অগ্রাধিকার',
      'পিসি ও ম্যাক উভয় অপারেটিং সিস্টেমের জন্য ল্যান ও ফাইল শেয়ারিং কম্প্যাটিবিলিটি'
    ],
    processSteps: [
      { title: '১. আইটি অডিট ও ব্লুপ্রিন্ট', desc: 'কর্মী সংখ্যা ও ইন্টারনেট স্পিড অনুযায়ী রাউটার/সুইচ সিলেকশন।' },
      { title: '২. ফুল ক্যাবলিং ও এক্সেস পয়েন্ট', desc: 'সিলিংয়ে হাই-পাওয়ার ওয়াইফাই এপি মাউন্টিং।' },
      { title: '৩. নেটওয়ার্ক সিকিউরিটি কনফিগ', desc: 'ম্যাক ফিল্টারিং ও স্ট্রং এনক্রিপশন পাসওয়ার্ড সেটআপ।' },
      { title: '৪. ট্রেনিং ও হ্যান্ডওভার', desc: 'অফিস টিমকে ব্যবহারে পূর্ণ সহায়তা ও ইউজার গাইড দেওয়া।' }
    ],
    pricingStartingFrom: 'প্রজেক্ট সাপেক্ষে সাশ্রয়ী প্যাকেজ',
    warrantyInfo: '১ বছরের সম্পূর্ণ আইটি সাপোর্ট চুক্তি',
    popularSearchKeywords: ['office network setup', 'corporate wifi setup', 'office it infrastructure bangladesh'],
    relatedServices: ['computer-lan-networking', 'router-switch-configuration', 'office-electrical-wiring'],
    relatedProductSlugs: ['router', 'network-switch', 'lan-cable'],
    faqs: [
      { question: 'একই অফিসে ৪০-৫০ জন মানুষ একসাথে ওয়াইফাই ব্যবহার করতে পারবে?', answer: 'হ্যাঁ, সাধারণ রাউটার হ্যাং হয়ে যায়। আমরা হাই-ক্যাপাসিটি গিগাবিট অ্যাক্সেস পয়েন্ট বসাই যাতে ১০০+ ডিভাইস ল্যাগ ছাড়া চলে।' }
    ]
  },
  'router-switch-configuration': {
    slug: 'router-switch-configuration',
    name: 'Router & Switch Configuration',
    bnName: 'রাউটার ও নেটওয়ার্ক সুইচ কনফিগারেশন',
    category: 'Computer & LAN Networking',
    title: 'SHAMIM TECH SOLUTION • MikroTik, Cisco & TP-Link Router & Switch Configuration',
    metaDescription: 'মাইক্রোটিক রাউটার ব্যান্ডউইথ ম্যানেজমেন্ট, ভিল্যান (VLAN) ও সিসকো সুইচ কনফিগারেশন। দক্ষ নেটওয়ার্ক ইঞ্জিনিয়ার: 01790139333।',
    h1: 'Enterprise Router, Managed Switch & Firewall Configuration',
    tagline: 'Bandwidth Shaping, VLAN Segmentation & Dual-WAN Failover Support',
    bengaliTagline: 'ব্যান্ডউইথ কন্ট্রোল, ভিল্যান নেটওয়ার্ক বিভাজন ও ডুয়েল-আইএসপি ফেইলওভার',
    description: 'MikroTik, Cisco, Ruijie ও TP-Link রাউটার ও ম্যানেজড সুইচ কনফিগারেশন করে ইন্টারনেট স্পিড নিয়ন্ত্রণ, কর্মীদের সোশ্যাল মিডিয়া বা অপ্রয়োজনীয় সাইট ব্রাউজিং ব্লক এবং দুটি আইএসপির ইন্টারনেট একসাথে মার্জ (Load Balancing) করার সেবা।',
    keyFeatures: [
      'ব্যান্ডউইথ কিউইং (Simple Queues): পিসি ও মোবাইল অনুযায়ী স্পিড লিমিটেশন',
      'ডুয়েল ওয়্যান ফেইলওভার: এক লাইনের ইন্টারনেট গেলে স্বয়ংক্রিয়ভাবে দ্বিতীয় লাইনে সুইচ',
      'ভিল্যান (VLAN) কনফিগারেশন: সিসিটিভি ক্যামেরা ও সাধারণ কম্পিউটার ট্রাফিক পৃথক রাখা',
      'ফায়ারওয়াল সিকিউরিটি: হ্যাকিং আক্রমণ ও ডস (DoS) এটাক প্রতিরোধ'
    ],
    processSteps: [
      { title: '১. রিকোয়ারমেন্ট অ্যানালাইসিস', desc: 'ব্যান্ডউইথ স্পিড পলিসি ও ভিল্যান ছক প্রস্তুত।' },
      { title: '২. উইনবক্স প্রোগ্রামিং', desc: 'মাইক্রোটিক / সিসকো কনসোলে কোডিং ও রুলস সেট।' },
      { title: '৩. লোড ব্যালেন্সিং টেস্ট', desc: 'আইএসপি লাইন বিচ্ছিন্ন করে ব্যাকআপ লাইনে ট্রান্সফার টেস্ট।' },
      { title: '৪. ব্যাকআপ স্ক্রিপ্ট সেভ', desc: 'ভবিষ্যতের জন্য রাউটারের ব্যাকআপ ফাইল ক্লাউডে সংরক্ষণ।' }
    ],
    pricingStartingFrom: '৳১,০০০ / রাউটার কনফিগারেশন',
    warrantyInfo: 'কনফিগারেশন ব্যাকআপ ফাইল ও রিমোট সাপোর্ট নিশ্চয়তা',
    popularSearchKeywords: ['router switch configuration', 'mikrotik router setup bangladesh', 'vlan configuration service'],
    relatedServices: ['network-troubleshooting', 'office-network-setup'],
    relatedProductSlugs: ['router', 'network-switch'],
    faqs: [
      { question: 'অফিসে ইউটিউব বা ফেসবুক কি নির্দিষ্ট সময়ের জন্য ব্লক করা যায়?', answer: 'হ্যাঁ! মাইক্রোটিক রাউটারে ফায়ারওয়াল রুলস দিয়ে কাজের সময় সোশ্যাল মিডিয়া বন্ধ রাখা যায়।' }
    ]
  },
  'network-troubleshooting': {
    slug: 'network-troubleshooting',
    name: 'Network Troubleshooting',
    bnName: 'নেটওয়ার্ক ট্রাবলশুটিং ও স্পিড অপ্টিমাইজেশন',
    category: 'Computer & LAN Networking',
    title: 'SHAMIM TECH SOLUTION • Office Network Troubleshooting & Speed Optimization',
    metaDescription: 'ইন্টারনেট স্লো হওয়া, ওয়াইফাই ড্রপ, ল্যান কানেকশন ফেইলুর সমস্যার দ্রুত ট্রাবলশুটিং সমাধান। কল: 01790139333।',
    h1: 'Emergency Network Troubleshooting & Wi-Fi Optimization',
    tagline: 'Eliminate Dead Zones, High Ping Latency & Intermittent Disconnections',
    bengaliTagline: 'ওয়াইফাই ডেড জোন, হাই পিং লেটেন্সি ও ঘন ঘন লাইন কাটার স্থায়ী সমাধান',
    description: 'ওয়াইফাই ফুল সিগন্যাল দেখাচ্ছে কিন্তু নেট চলছে না, গেম বা জুম কলে হাই-পিং সমস্যা, অথবা ল্যান ফোল্ডার অ্যাক্সেস করা যাচ্ছে না? শামীম টেক সলিউশন অ্যাডভান্সড স্পেকট্রাম অ্যানালাইজার দিয়ে সমস্যা খুঁজে বের করে সুপারফাস্ট ইন্টারনেট নিশ্চিত করে।',
    keyFeatures: [
      'ওয়াইফাই সিগন্যাল ইন্টারফেয়ারেন্স বিশ্লেষণ ও সেরা চ্যানেল (Channel) নির্বাচন',
      'রাউটার ওভারহিটিং ও মেমোরি লিক ফিক্সিং',
      'লোকাল এরিয়া নেটওয়ার্কে ভাইরাস বা ব্রডকাস্ট ট্রাফিক বন্ধকরণ',
      'আইএসপি ফাইবার অপটিক অনু (ONU) সিগন্যাল ডিবি লেভেল অপটিমাইজেশন'
    ],
    processSteps: [
      { title: '১. স্পিড ও পিং পরীক্ষা', desc: 'আইএসপি র’ লাইনের গতি মেপে মূল সমস্যা শনাক্ত।' },
      { title: '২. ওয়াইফাই ফ্রিকোয়েন্সি স্ক্যান', desc: 'আশপাশের সিগন্যাল জটলা এড়িয়ে ফ্রেশ চ্যানেল সিলেকশন।' },
      { title: '৩. নেটওয়ার্ক অ্যাডাপ্টার টুইকিং', desc: 'পিসির ল্যান কার্ড ড্রাইভার আপডেট ও কনফিগ।' },
      { title: '৪. ভেরিফিকেশন', desc: 'ফুল স্পিডে ডাউনলোড ও ভিডিও কলিং টেস্ট।' }
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    warrantyInfo: 'ইন্টারনেট গতি ও স্থিতিশীলতার শতভাগ নিশ্চয়তা',
    popularSearchKeywords: ['network troubleshooting', 'slow internet fix', 'wifi disconnection problem solution'],
    relatedServices: ['network-technician', 'router-switch-configuration'],
    relatedProductSlugs: ['router', 'network-switch', 'lan-cable'],
    faqs: [
      { question: 'রাউটারের কাছে স্পিড ভালো কিন্তু পাশের রুমে গেলেই নেট থাকে না কেন?', answer: 'এটি কংক্রিট দেওয়াল সিগন্যাল ব্লক করার কারণে হয়। আমরা মেস ওয়াইফাই বা রেঞ্জ এক্সটেন্ডার লাগিয়ে সমাধান করি।' }
    ]
  }
};

// Merge 125 proposed service SEO entries seamlessly
Object.assign(SERVICES_SEO_DATA, NEW_SERVICES_SEO_DATA);
