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
  servicesOffered: {
    title: string;
    bengaliTitle: string;
    description: string;
    features: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  deliveryTimeline: string;
  onSiteSupportNote: string;
  productCategoriesHighlighted: string[];
}

export const DISTRICT_SEO_DATA: Record<string, DistrictSEOInfo> = {
  rangpur: {
    slug: 'rangpur',
    enName: 'Rangpur',
    bnName: 'রংপুর',
    title: 'CCTV Camera Price in Rangpur | CCTV Technician & Security Solutions | Shamim Tech Solution',
    metaDescription: 'Best CCTV Camera Price in Rangpur. Original IP cameras, DVR/NVR online view, access control, intercom & computer networking products. Expert technician in Rangpur City, Jahaj Company & Haragach.',
    h1: 'Rangpur CCTV Camera Sales, Installation & Technical Services (রংপুর সিসিটিভি ক্যামেরা ও টেকনিক্যাল সার্ভিস)',
    tagline: 'Premier CCTV Camera Shop & Certified Technical Service in Rangpur Division',
    bengaliTagline: 'রংপুর জেলা ও সিটি কর্পোরেশনে বিশ্বস্ত সিসিটিভি ক্যামেরা বিক্রয়, ফিটিং ও অন-সাইট টেকনিশিয়ান সেবা',
    aboutDistrict: 'রংপুর বিভাগীয় সদর ও বাণিজ্যিক কেন্দ্র হিসেবে রংপুর সিটি কর্পোরেশন, জাহাজ কোম্পানি মোড়, স্টেশন রোড, ধাপ, মডার্ন মোড় এবং হারাগাছ সহ পুরো জেলায় আমরা সর্বোচ্চ মানের সিকিউরিটি ইকুইপমেন্ট ও কম্পিউটার হার্ডওয়্যার সেবা প্রদান করছি। আমাদের মূল টেকনিক্যাল টিম রংপুরের জাহাজ কোম্পানি মোড় ও হারাগাছে অবস্থিত হওয়ায় রংপুর জেলার যেকোনো প্রান্ত থেকে কল পেলে দ্রুততম সময়ে অন-সাইট টেকনিশিয়ান পৌঁছে যায়।',
    upazilas: [
      'Rangpur City Corporation (রংপুর সিটি কর্পোরেশন)',
      'Jahaj Company Mor (জাহাজ কোম্পানি মোড়)',
      'Haragach (হারাগাছ)',
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
      'Jahaj Company Mor',
      'Haragach Bazar',
      'Dhap Medical Mor',
      'Station Road Market',
      'Modern Mor',
      'Payra Chottor',
      'Carmichael College Area'
    ],
    popularSearchesBn: [
      'রংপুর সিসিটিভি ক্যামেরা দাম',
      'রংপুর সিসিটিভি টেকনিশিয়ান',
      'রংপুর সিসিটিভি সার্ভিস',
      'রংপুরে সিসিটিভি ক্যামেরা দোকান',
      'আইপি ক্যামেরা রংপুর',
      'রংপুর ডিভিআর এনভিআর সেটআপ',
      'অ্যাক্সেস কন্ট্রোল রংপুর',
      'রংপুর ইলেকট্রিশিয়ান সার্ভিস',
      'কম্পিউটার মেরামত রংপুর'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Rangpur',
      'Rangpur CCTV Camera Shop',
      'CCTV Technician Rangpur',
      'Rangpur CCTV Installation',
      'CCTV Service Rangpur',
      'CCTV Repair Rangpur',
      'IP Camera in Rangpur',
      'Access Control Technician Rangpur',
      'Computer Repair Rangpur',
      'Electrician Rangpur',
      'CCTV Camera Rangpur City'
    ],
    servicesOffered: [
      {
        title: 'CCTV Camera Fitting & Service',
        bengaliTitle: 'সিসিটিভি ক্যামেরা ফিটিং ও সার্ভিসিং',
        description: 'রংপুর সিটি ও জেলার বাড়ি, দোকান, শপিং মল এবং গুদামে হাই-ডেফিনিশন অ্যানালগ ও আইপি সিসিটিভি ক্যামেরা নিখুঁতভাবে স্থাপন ও ওয়্যারিং।',
        features: ['অরিজিনাল ক্যামেরা ও কেবল', 'HD/2K/4K ক্লিয়ার নাইট ভিশন', 'ফ্রি প্রিভিউ ও টেস্ট']
      },
      {
        title: 'IP Camera & Wi-Fi Setup',
        bengaliTitle: 'আইপি ও ওয়াইফাই ক্যামেরা ইনস্টলেশন',
        description: 'মোবাইল ফোনে সার্বক্ষণিক লাইভ ভিউ এবং অডিও রেকর্ড সুবিধা সহ স্মার্ট ওয়াইফাই পিটিজেড ক্যামেরা সেটআপ।',
        features: ['360° রোটেশন ক্যামেরা', 'টু-ওয়ে অডিও ও সাইরেন', 'SD কার্ড ও ক্লাউড স্টোরেজ']
      },
      {
        title: 'DVR / NVR Online View Setup',
        bengaliTitle: 'ডিভিআর ও এনভিআর অনলাইন মোবাইল ভিউ',
        description: 'Hikvision, Dahua, Jovision ডিভিআর/এনভিআরের পাসওয়ার্ড রিসেট, হার্ড ডিস্ক রেকর্ডিং ও মোবাইল অ্যাপ কনফিগারেশন।',
        features: ['মোবাইলে দূর থেকে লাইভ দেখা', 'মোশন ডিটেকশন অ্যালার্ট', 'রেকর্ডিং প্লেব্যাক ব্যাকআপ']
      },
      {
        title: 'Biometric Attendance & Access Control',
        bengaliTitle: 'বায়োমেট্রিক হাজিরা ও অ্যাক্সেস কন্ট্রোল',
        description: 'রংপুরের অফিস, কারখানা ও প্রতিষ্ঠানে ফিঙ্গারপ্রিন্ট, ফেস রিকগনিশন এবং ম্যাগনেটিক ডোর লক ইন্সটলেশন।',
        features: ['এমপ্লয়ী টাইম ট্র্যাকিং সফটওয়্যার', 'ম্যাগনেটিক ও ইলেকট্রিক ড্রপবোল্ট', 'RFID কার্ড ও পাসকোড']
      },
      {
        title: 'PBX & Office Intercom Setup',
        bengaliTitle: 'পিবিএক্স ও ইন্টারকম সিস্টেম',
        description: 'মাল্টি-লাইন টেলিফোন ইন্টারকম এবং অফিস বা বহুতল ভবনের অভ্যন্তরীণ দ্রুত যোগাযোগ নেটওয়ার্কিং।',
        features: ['ক্লিয়ার ভয়েস কল', 'এক্সটেনশন প্রোগ্রামিং', 'মেইনটেন্যান্স ও মেরামত']
      },
      {
        title: 'House & Office Electrical Wiring',
        bengaliTitle: 'বাসাবাড়ি ও অফিস ইলেকট্রিক্যাল ওয়্যারিং',
        description: 'দক্ষ ইলেকট্রিশিয়ান দ্বারা নিরাপদ সার্কিট ব্রেকার, ডিবি বক্স ও ক্যাবল ওয়্যারিং সার্ভিস।',
        features: ['শর্ট সার্কিট সুরক্ষা', 'পেশাদার ফিনিশিং', 'জরুরি ফল্ট মেরামত']
      },
      {
        title: 'Computer LAN Network & Repair',
        bengaliTitle: 'কম্পিউটার ল্যান নেটওয়ার্ক ও মেরামত',
        description: 'Cat6 LAN ক্যাবলিং, গিগাবিট সুইচ, রাউটার কনফিগারেশন এবং ডেস্কটপ পিসি হার্ডওয়্যার ট্রাবলশুটিং।',
        features: ['উচ্চগতির লোকাল নেটওয়ার্ক', 'RJ45 ক্ল্যাম্পিং ও টেস্ট', 'উইন্ডোজ ও সফটওয়্যার সেটআপ']
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
    onSiteSupportNote: 'জাহাজ কোম্পানি মোড় ও হারাগাছ থেকে সরাসরি এক্সপার্ট টেকনিশিয়ান ভিজিট ব্যবস্থা রয়েছে।',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR/NVR/XVR', 'Other Accessories', 'Hard Drive', 'Tools & Testers']
  },

  dinajpur: {
    slug: 'dinajpur',
    enName: 'Dinajpur',
    bnName: 'দিনাজপুর',
    title: 'CCTV Camera Price in Dinajpur | CCTV Service & Security Camera Shop | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Price in Dinajpur. Security cameras, IP camera setup, DVR/NVR online view, access control & computer networking products with on-site technician service in Dinajpur.',
    h1: 'Dinajpur CCTV Camera Sales, Installation & Security Solutions (দিনাজপুর সিসিটিভি ক্যামেরা ও টেকনিক্যাল সার্ভিস)',
    tagline: 'Reliable Security Solutions, Computer Products & CCTV Technician for Dinajpur District',
    bengaliTagline: 'দিনাজপুর জেলায় অরিজিনাল সিসিটিভি ক্যামেরা বিক্রয়, রাইস মিল ও বাণিজ্যিক প্রতিষ্ঠানে সিকিউরিটি ক্যামেরা ফিটিং',
    aboutDistrict: 'দিনাজপুর সদর, পার্বতীপুর, ফুলবাড়ী এবং বীরগঞ্জ সহ সকল উপজেলায় অবস্থিত রাইস মিল, শিক্ষা প্রতিষ্ঠান, ব্যাংক, দোকান ও বাসাবাড়ির সুরক্ষায় শামীম টেক সলিউশন প্রদান করছে উন্নত প্রযুক্তি ও টেকনিক্যাল সার্ভিস। দিনাজপুরের গ্রাহকদের জন্য আমরা নিশ্চিত করি সাশ্রয়ী মূল্যে অরিজিনাল সিকিউরিটি হার্ডওয়্যার এবং সরাসরি অন-সাইট টেকনিশিয়ান সাপোর্ট।',
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
      'Nawabganj (নবাবগঞ্জ)'
    ],
    keyLandmarks: [
      'Dinajpur Sadar Hospital Mor',
      'Maldah Potti Market',
      'Parbatipur Railway Junction',
      'Fulbari Bazar',
      'Birganj Bus Stand',
      'Hili Land Port Area'
    ],
    popularSearchesBn: [
      'দিনাজপুর সিসিটিভি ক্যামেরা দাম',
      'দিনাজপুর সিসিটিভি টেকনিশিয়ান',
      'পার্বতীপুর সিসিটিভি ক্যামেরা',
      'দিনাজপুর আইপি ক্যামেরা ইনস্টলেশন',
      'দিনাজপুর ডিভিআর রিপেয়ার',
      'দিনাজপুরে সিসিটিভি ক্যামেরা দোকান',
      'ফুলবাড়ী সিসিটিভি সার্ভিস'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Dinajpur',
      'Dinajpur CCTV Camera Shop',
      'CCTV Technician Dinajpur',
      'Dinajpur CCTV Installation',
      'CCTV Repair Dinajpur',
      'IP Camera Dinajpur',
      'Parbatipur CCTV Service',
      'Fulbari Security Camera',
      'Access Control Dinajpur'
    ],
    servicesOffered: [
      {
        title: 'Commercial & Rice Mill CCTV Surveillance',
        bengaliTitle: 'রাইস মিল ও মিল-কারখানা সিসিটিভি সার্ভিলেন্স',
        description: 'দিনাজপুরের অটো রাইস মিল, গোডাউন ও কারখানার জন্য লং-রেঞ্জ নাইট ভিশন ক্যামেরা স্থাপন ও ক্যাবলিং।',
        features: ['ধুলোবালি ও বৃষ্টি প্রতিরোধী মেটাল বডি', 'দূরবর্তী স্থান পর্যবেক্ষণের জন্য জুম লেন্স', 'সরাসরি মোবাইলে লাইভ ভিউ']
      },
      {
        title: 'CCTV Camera Sales & Fast Dispatch',
        bengaliTitle: 'সিসিটিভি ক্যামেরা ও এক্সেসরিজ বিক্রয়',
        description: 'দিনাজপুরের যেকোনো উপজেলার জন্য হোম ডেলিভারি এবং পূর্ণাঙ্গ ইনস্টলেশন সামগ্রী সরবরাহ।',
        features: ['অরিজিনাল ভিডিও ব্যালুন ও বক্স এডাপ্টার', 'গ্যারান্টিযুক্ত কপার ক্যাবল', 'ব্র্যান্ডেড মনিটর ও হার্ডডিস্ক']
      },
      {
        title: 'DVR/NVR Online View & Networking',
        bengaliTitle: 'ডিভিআর/এনভিআর অনলাইন ভিউ ও মোবাইল কনফিগারেশন',
        description: 'দিনাজপুরে ব্রডব্যান্ড বা ওয়াইফাই সংযোগের সাথে ডিভিআর ইন্টিগ্রেশন করে দেশ-বিদেশের যেকোনো স্থান থেকে দেখা।',
        features: ['স্ট্যাটিক আইপি বা ক্লাউড পি২পি সেটআপ', 'পাসওয়ার্ড রিকভারি', 'মাল্টি-ইউজার পারমিশন']
      },
      {
        title: 'Biometric & Door Access Control',
        bengaliTitle: 'বায়োমেট্রিক হাজিরা মেশিন ও ডোর লক',
        description: 'দিনাজপুরের অফিস ও প্রতিষ্ঠানে কর্মচারী উপস্থিতি রেকর্ড ও নিরাপত্তা নিয়ন্ত্রণ ব্যবস্থা।',
        features: ['ফিঙ্গারপ্রিন্ট ও ফেস আইডি', 'অটোমেটিক রিপোর্ট জেনারেশন', 'ম্যাগনেটিক লক সমাধান']
      }
    ],
    faqs: [
      {
        question: 'দিনাজপুর সদরে কি হোম ডেলিভারি ও অন-সাইট ফিটিং পাওয়া যায়?',
        answer: 'হ্যাঁ, দিনাজপুর সদর, পার্বতীপুর, বীরগঞ্জ ও ফুলবাড়ী সহ সকল উপজেলায় আমাদের টেকনিশিয়ান টিম গিয়ে সম্পূর্ণ ইনস্টলেশন সম্পন্ন করে দিয়ে আসে।'
      },
      {
        question: 'দিনাজপুরের রাইস মিল বা বড় ব্যবসার জন্য কেমন ক্যামেরা ভালো?',
        answer: 'আমরা সাধারণত ফুল মেটাল বডি, IP67 ওয়াটারপ্রুফ এবং লং-ডিসট্যান্স নাইট ভিশন সম্পন্ন 3MP বা 5MP বুলেট ক্যামেরা এবং NVR নেটওয়ার্ক সমাধান সুপারিশ করি।'
      },
      {
        question: 'দিনাজপুর থেকে কীভাবে অর্ডার করব?',
        answer: 'ওয়েবসাইটে থাকা প্রোডাক্টটি সরাসরি কার্টে যোগ করে অথবা আমাদের হেল্পলাইন 01790139333 ও হোয়াটসঅ্যাপে যোগাযোগ করে সহজেই অর্ডার করা যায়।'
      }
    ],
    deliveryTimeline: 'দিনাজপুর সদরে ২৪ ঘণ্টার মধ্যে হোম ডেলিভারি ও টেকনিশিয়ান শিডিউল।',
    onSiteSupportNote: 'বৃহৎ প্রজেক্ট বা একাধিক ক্যামেরা ফিটিংয়ে পূর্বনির্ধারিত শিডিউলে অন-সাইট টিম উপস্থিত হয়।',
    productCategoriesHighlighted: ['CCTV Camera', 'DVR/NVR/XVR', 'Power Supply/Adapter', 'Hard Drive', 'Other Accessories']
  },

  gaibandha: {
    slug: 'gaibandha',
    enName: 'Gaibandha',
    bnName: 'গাইবান্ধা',
    title: 'CCTV Camera Price in Gaibandha | Security Camera & CCTV Technician | Shamim Tech Solution',
    metaDescription: 'Looking for CCTV Camera Price in Gaibandha? Get genuine IP cameras, DVR/NVR, biometric attendance machines & computer accessories with technician support across Gaibandha.',
    h1: 'Gaibandha CCTV Camera Sales, Installation & Technician Service (গাইবান্ধা সিসিটিভি ক্যামেরা ও সিকিউরিটি সলিউশন)',
    tagline: 'Complete Security Camera Solutions, Accessories & IT Networking in Gaibandha',
    bengaliTagline: 'গাইবান্ধা জেলা ও গোবিন্দগঞ্জ-পলাশবাড়ীতে পেশাদার সিসিটিভি ক্যামেরা ইনস্টলেশন ও অন-সাইট টেকনিক্যাল সার্ভিস',
    aboutDistrict: 'গাইবান্ধা সদর, গোবিন্দগঞ্জ, পলাশবাড়ী ও সুন্দরগঞ্জ অঞ্চলে ব্যবসা প্রতিষ্ঠান, সুপারশপ, কোল্ড স্টোরেজ, ব্যাংক এবং বাসাবাড়ির জন্য নির্ভরযোগ্য সিকিউরিটি ক্যামেরা ও আইটি সলিউশন প্রদান করছে শামীম টেক সলিউশন। আমাদের দক্ষ টেকনিশিয়ান টিম সহজে গাইবান্ধার যেকোনো প্রান্তে সেবা পৌঁছে দিতে প্রস্তুত।',
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
      'Old Hospital Mor',
      'Gobindaganj Choumatha Mor',
      'Palashbari Bus Stand',
      'Sundarganj Bazar'
    ],
    popularSearchesBn: [
      'গাইবান্ধা সিসিটিভি ক্যামেরা দাম',
      'গাইবান্ধা সিসিটিভি টেকনিশিয়ান',
      'গোবিন্দগঞ্জ সিসিটিভি ক্যামেরা দোকান',
      'পলাশবাড়ী সিসিটিভি সার্ভিস',
      'গাইবান্ধা আইপি ক্যামেরা ফিটিং',
      'গাইবান্ধা ডিভিআর অনলাইন ভিউ'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Gaibandha',
      'Gaibandha CCTV Camera Shop',
      'CCTV Technician Gaibandha',
      'Gaibandha CCTV Installation',
      'Gobindaganj CCTV Service',
      'Palashbari Security Camera',
      'IP Camera Gaibandha',
      'Access Control Gaibandha'
    ],
    servicesOffered: [
      {
        title: 'Full CCTV Setup & Cable Routing',
        bengaliTitle: 'পূর্ণাঙ্গ সিসিটিভি সেটআপ ও ওয়্যারিং',
        description: 'গাইবান্ধা জেলায় ক্লিন কেবলিং, কন্ডুইট পাইপিং ও সিকিউরিটি ক্যামেরার টেকসই স্থাপন।',
        features: ['অরিজিনাল ভিডিও ব্যালুন ও এডাপ্টার', 'শর্ট সার্কিট সেফটি ব্যবস্থা', 'পরিচ্ছন্ন লুক']
      },
      {
        title: 'IP Camera & Wi-Fi Dome Setup',
        bengaliTitle: 'আইপি ও ওয়াইফাই স্মার্ট ক্যামেরা ইনস্টলেশন',
        description: 'বাসাবাড়ি ও দোকানে সহজে লাগানোর উপযোগী পিটিজেড ওয়াইফাই ক্যামেরা কনফিগারেশন।',
        features: ['মোবাইলে ফুল এইচডি লাইভ ভিডিও', 'মোশন অ্যালার্ম নোটিফিকেশন', 'সহজ মেমোরি কার্ড ব্যাকআপ']
      },
      {
        title: 'Biometric Time Attendance Machine',
        bengaliTitle: 'বায়োমেট্রিক হাজিরা মেশিন স্থাপন',
        description: 'গাইবান্ধার স্কুল, কলেজ, মাদ্রাসা ও এনজিও অফিসে ফিঙ্গারপ্রিন্ট বা ফেস ডিটেকশন মেশিন।',
        features: ['হাজিরা সফটওয়্যার ট্রেনিং', 'কম্পিউটার সংযোগ ও এক্সেল রিপোর্ট', 'দীর্ঘস্থায়ী পারফরম্যান্স']
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
      }
    ],
    deliveryTimeline: 'গাইবান্ধা জেলায় ২৪ ঘণ্টার মধ্যে ডেলিভারি ও দ্রুত টেকনিশিয়ান শিডিউলিং।',
    onSiteSupportNote: 'রংপুর-বগুড়া মহাসড়ক সংলগ্ন গোবিন্দগঞ্জ ও পলাশবাড়ীতে দ্রুততম সময়ে সেবা প্রদান করা হয়।',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR/NVR/XVR', 'Other Accessories']
  },

  kurigram: {
    slug: 'kurigram',
    enName: 'Kurigram',
    bnName: 'কুড়িগ্রাম',
    title: 'CCTV Camera Price in Kurigram | CCTV Technician & IP Camera Fitting | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Price in Kurigram. Original security cameras, DVR/NVR recording setups, PABX intercom, access control door locks and electrical technician in Kurigram.',
    h1: 'Kurigram CCTV Camera Sales, Security Equipment & Technical Services (কুড়িগ্রাম সিসিটিভি ক্যামেরা ও আইটি সার্ভিস)',
    tagline: 'Trusted CCTV Camera Supplier & Expert Field Technician for Kurigram District',
    bengaliTagline: 'কুড়িগ্রাম জেলা, উলিপুর ও নাগেশ্বরীতে অরিজিনাল সিকিউরিটি ক্যামেরা, ডিভিআর অনলাইন ভিউ ও টেকনিক্যাল সার্ভিস',
    aboutDistrict: 'কুড়িগ্রাম সদর, উলিপুর, রাজারহাট, নাগেশ্বরী ও চিলমারী সহ পুরো জেলায় আমরা উন্নত মানের সিসিটিভি ক্যামেরা, আইপি ক্যামেরা ও সিকিউরিটি এক্সেসরিজ পৌঁছে দিচ্ছি। হারাগাছ ও রংপুরের অত্যন্ত নিকটে অবস্থিত হওয়ায় তিস্তা ব্রিজ সংলগ্ন কুড়িগ্রামের গ্রাহকরা আমাদের কাছ থেকে দ্রুততম অন-সাইট টেকনিশিয়ান সার্ভিস উপভোগ করতে পারেন।',
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
      'Zilla Parishad Market',
      'Ulipur Bazar',
      'Nageshwari Bus Stand',
      'Rajarhat Rail Station Area'
    ],
    popularSearchesBn: [
      'কুড়িগ্রাম সিসিটিভি ক্যামেরা দাম',
      'কুড়িগ্রাম সিসিটিভি টেকনিশিয়ান',
      'উলিপুর সিসিটিভি ক্যামেরা দোকান',
      'নাগেশ্বরী সিসিটিভি ক্যামেরা সার্ভিস',
      'কুড়িগ্রাম আইপি ক্যামেরা',
      'কুড়িগ্রাম ডিভিআর পাসওয়ার্ড রিসেট'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Kurigram',
      'Kurigram CCTV Camera Shop',
      'CCTV Technician Kurigram',
      'Kurigram CCTV Installation',
      'Ulipur CCTV Service',
      'Nageshwari Security Camera',
      'CCTV Repair Kurigram'
    ],
    servicesOffered: [
      {
        title: 'CCTV Camera Installation & Maintenance',
        bengaliTitle: 'সিসিটিভি ক্যামেরা ইনস্টলেশন ও রক্ষণাবেক্ষণ',
        description: 'কুড়িগ্রামের ব্যবসা প্রতিষ্ঠান, গোডাউন ও গৃহস্থালির জন্য দীর্ঘস্থায়ী ক্যামেরা ওয়্যারিং।',
        features: ['অরিজিনাল ব্র্যান্ড ক্যামেরা', 'নাইট ভিশন ও কালার ভিশন', 'ফ্রি ট্রাবলশুটিং সাপোর্ট']
      },
      {
        title: 'DVR/NVR Mobile Online Setup',
        bengaliTitle: 'ডিভিআর/এনভিআর মোবাইল অনলাইন সেটআপ',
        description: 'যেকোনো মোবাইল নেটওয়ার্ক বা ব্রডব্যান্ডে ডিভিআর কানেক্ট করে বিশ্বের যেকোনো প্রান্ত থেকে লাইভ দেখা।',
        features: ['মোবাইলে নোটিফিকেশন', 'হার্ডডিস্ক স্টোরেজ ক্যালকুলেশন', 'হাই-রেজোলিউশন প্লেব্যাক']
      },
      {
        title: 'Intercom & PABX Networking',
        bengaliTitle: 'ইন্টারকম ও পিবিএক্স সিস্টেম',
        description: 'কুড়িগ্রামের বিভিন্ন ক্লিনিক, হোটেল, অফিস ও বহুতল ভবনে ইন্টারকম সংযোগ।',
        features: ['ক্লিয়ার ভয়েস কমিউনিকেশন', 'সাশ্রয়ী ক্যাবলিং', 'এক্সটেনশন হ্যান্ডসেট']
      }
    ],
    faqs: [
      {
        question: 'কুড়িগ্রাম সদরে টেকনিশিয়ান পৌঁছাতে কত সময় লাগে?',
        answer: 'হারাগাছ থেকে তিস্তা নদীর ওপারে কুড়িগ্রামের রাজারহাট ও সদর এলাকা অত্যন্ত কাছে হওয়ায় কয়েক ঘণ্টার মধ্যেই টেকনিশিয়ান টিম পৌঁছানো সম্ভব।'
      },
      {
        question: 'কুড়িগ্রামে কি হোম ডেলিভারিতে পণ্য পাওয়ার পর টাকা দেওয়ার সুবিধা আছে?',
        answer: 'হ্যাঁ, কন্ডিশন কুরিয়ারের মাধ্যমে অথবা সরাসরি টেকনিশিয়ান ভিজিটের মাধ্যমে পণ্য দেখে মূল্য পরিশোধের সুবিধা রয়েছে।'
      }
    ],
    deliveryTimeline: 'কুড়িগ্রাম সদর ও রাজারহাটে একই দিনে; অন্যান্য উপজেলায় ২৪ ঘণ্টার মধ্যে ডেলিভারি।',
    onSiteSupportNote: 'হারাগাছ টেকনিক্যাল হাব থেকে কুড়িগ্রাম সদর ও রাজারহাটে দ্রুততম রেসপন্স প্রদান করা হয়।',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR/NVR/XVR', 'Other Accessories']
  },

  nilphamari: {
    slug: 'nilphamari',
    enName: 'Nilphamari',
    bnName: 'নীলফামারী',
    title: 'CCTV Camera Price in Nilphamari & Saidpur | CCTV Installation & Repair | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Price in Nilphamari & Saidpur. Security cameras, IP CCTV systems, computer LAN network, intercom & door access control with fast on-site technician service.',
    h1: 'Nilphamari & Saidpur CCTV Camera Sales, Installation & IT Networking (নীলফামারী ও সৈয়দপুর সিসিটিভি সার্ভিস)',
    tagline: 'Leading Security Camera Supplier & Commercial Automation Hub for Nilphamari & Saidpur',
    bengaliTagline: 'নীলফামারী জেলা ও বাণিজ্যিক শহর সৈয়দপুরে আধুনিক সিসিটিভি ক্যামেরা, আইপি ক্যামেরা ও সিকিউরিটি সার্ভিস',
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
      'Saidpur Rail Gate Bazar',
      'Nilphamari Chourangi Mor',
      'Jaldhaka Zero Point',
      'Domar Bazar'
    ],
    popularSearchesBn: [
      'সৈয়দপুর সিসিটিভি ক্যামেরা দাম',
      'নীলফামারী সিসিটিভি ক্যামেরা দোকান',
      'সৈয়দপুর সিসিটিভি টেকনিশিয়ান',
      'নীলফামারী সিসিটিভি সার্ভিস',
      'জলঢাকা সিসিটিভি ক্যামেরা',
      'সৈয়দপুর আইপি ক্যামেরা ইনস্টলেশন'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Nilphamari',
      'Saidpur CCTV Camera Price',
      'Saidpur CCTV Technician',
      'CCTV Camera Shop Saidpur',
      'Nilphamari CCTV Installation',
      'CCTV Repair Saidpur',
      'IP Camera Nilphamari'
    ],
    servicesOffered: [
      {
        title: 'Industrial & Factory Surveillance in Saidpur',
        bengaliTitle: 'সৈয়দপুরের কারখানা ও বাণিজ্যিক কমপ্লেক্স সিসিটিভি',
        description: 'বৃহৎ পরিসরের গোডাউন ও কারখানার জন্য সেন্ট্রালাইজড এনভিআর ও মাল্টি-ক্যামেরা নেটওয়ার্কিং।',
        features: ['PoE গিগাবিট সুইচ নেটওয়ার্ক', 'অপটিক্যাল ফাইবার এক্সটেনশন', 'কন্ট্রোল রুম মনিটরিং সেটআপ']
      },
      {
        title: 'CCTV Camera Sales with Official Warranty',
        bengaliTitle: 'অফিসিয়াল ওয়ারেন্টি সহ সিসিটিভি ক্যামেরা বিক্রয়',
        description: 'Jovision, Dahua, Hikvision, EZVIZ, Imou ব্র্যান্ডের অরিজিনাল ক্যামেরা সরাসরি নীলফামারীতে ডেলিভারি।',
        features: ['১০০% জেনুইন প্রডাক্ট', 'ওয়ারেন্টি সুরক্ষা', 'টেকনিক্যাল কনফিগারেশন সাপোর্ট']
      },
      {
        title: 'Office LAN & Access Control',
        bengaliTitle: 'অফিস ল্যান নেটওয়ার্ক ও ডোর অ্যাক্সেস কন্ট্রোল',
        description: 'সৈয়দপুর ও নীলফামারীর বাণিজ্যিক প্রতিষ্ঠানে নিরাপদ নেটওয়ার্ক ওয়্যারিং এবং ইলেকট্রিক লক।',
        features: ['স্ট্রাকচার্ড Cat6 কেবলিং', 'ফিঙ্গারপ্রিন্ট অ্যাক্সেস ডোর', 'রাউটার ও সার্ভার র্যাক সেটআপ']
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
      }
    ],
    deliveryTimeline: 'সৈয়দপুর ও নীলফামারী সদরে ২৪ ঘণ্টার মধ্যে ডেলিভারি ও অন-সাইট সেবা।',
    onSiteSupportNote: 'সৈয়দপুরের বাণিজ্যিক অঞ্চলে নিয়মিত টেকনিক্যাল ভিজিট সম্পন্ন করা হয়।',
    productCategoriesHighlighted: ['CCTV Camera', 'DVR/NVR/XVR', 'Power Supply/Adapter', 'Hard Drive', 'Other Accessories']
  },

  lalmonirhat: {
    slug: 'lalmonirhat',
    enName: 'Lalmonirhat',
    bnName: 'লালমনিরহাট',
    title: 'CCTV Camera Price in Lalmonirhat | CCTV Technician & Security Camera Shop | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Price in Lalmonirhat & Patgram. High definition security cameras, DVR/NVR online view, PBX intercom & electrical wiring services in Lalmonirhat.',
    h1: 'Lalmonirhat CCTV Camera Sales, Installation & Technician Service (লালমনিরহাট সিসিটিভি ক্যামেরা ও টেকনিক্যাল সলিউশন)',
    tagline: 'Authentic Security Cameras, Border Port Surveillance & Electrical Technical Services',
    bengaliTagline: 'লালমনিরহাট জেলা, পাটগ্রাম ও বুড়িমারী স্থলবন্দর অঞ্চলে নির্ভরযোগ্য সিসিটিভি ক্যামেরা বিক্রয় ও অন-সাইট টেকনিশিয়ান',
    aboutDistrict: 'লালমনিরহাট সদর, আদিতমারী, কালীগঞ্জ, হাতীবান্ধা, পাটগ্রাম ও বুড়িমারী স্থলবন্দর সংলগ্ন ব্যবসা ও বাসাবাড়ির সুরক্ষায় আমরা সার্বক্ষণিক টেকনিক্যাল সাপোর্ট দিয়ে আসছি। রংপুর ও হারাগাছ সংলগ্ন লালমনিরহাটের যেকোনো প্রান্তে ক্যামেরা বিক্রি ও তাৎক্ষণিক ফিটিং সেবা নিশ্চিত করে শামীম টেক সলিউশন।',
    upazilas: [
      'Lalmonirhat Sadar (লালমনিরহাট সদর)',
      'Aditmari (আদিতমারী)',
      'Kaliganj (কালীগঞ্জ)',
      'Hatibandha (হাতীবান্ধা)',
      'Patgram (পাটগ্রাম)',
      'Burimari Land Port Area (বুড়িমারী স্থলবন্দর অঞ্চল)'
    ],
    keyLandmarks: [
      'Lalmonirhat Mission Mor',
      'BDR Gate Area',
      'Kaliganj Tushbhander',
      'Hatibandha Zero Point',
      'Burimari Land Port Market'
    ],
    popularSearchesBn: [
      'লালমনিরহাট সিসিটিভি ক্যামেরা দাম',
      'লালমনিরহাট সিসিটিভি টেকনিশিয়ান',
      'পাটগ্রাম সিসিটিভি ক্যামেরা দোকান',
      'কালীগঞ্জ সিসিটিভি সার্ভিস',
      'বুড়িমারী সিসিটিভি ক্যামেরা ইনস্টলেশন',
      'লালমনিরহাট ডিভিআর অনলাইন ভিউ'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Lalmonirhat',
      'Lalmonirhat CCTV Camera Shop',
      'CCTV Technician Lalmonirhat',
      'Lalmonirhat CCTV Installation',
      'Patgram CCTV Camera Price',
      'Burimari Security Camera',
      'CCTV Service Lalmonirhat'
    ],
    servicesOffered: [
      {
        title: 'Land Port & Warehouse CCTV Setup',
        bengaliTitle: 'স্থলবন্দর ও গুদামঘরের জন্য হেভি-ডিউটি সিসিটিভি',
        description: 'বুড়িমারী ও লালমনিরহাটের গুদাম, ট্রাক পার্কিং ও ইয়ার্ডের জন্য লং নাইট ভিশন ক্যামেরা ও র্যাক মাউন্টিং।',
        features: ['ওয়াটারপ্রুফ মেটাল কেসিং', 'ধুলোবালি ও আলো প্রতিরোধী WDR টেকনোলজি', 'লাইভ মোবাইল পর্যবেক্ষণ']
      },
      {
        title: 'Original CCTV Camera & Accessories Sales',
        bengaliTitle: 'আসল সিসিটিভি ক্যামেরা ও এক্সেসরিজ বিক্রয়',
        description: 'ভিডিও ব্যালুন, বক্স এডাপ্টার, কপার ক্যাবল ও পাওয়ার সাপ্লাই সরাসরি লালমনিরহাটে সরবরাহ।',
        features: ['১০০% জেনুইন কোয়ালিটি', 'অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি', 'সাশ্রয়ী প্যাকেজ রেট']
      },
      {
        title: 'Electrician & Short Circuit Protection',
        bengaliTitle: 'ইলেকট্রিশিয়ান সার্ভিস ও প্রটেকশন ওয়্যারিং',
        description: 'লালমনিরহাটের বাড়ি ও অফিসে শর্ট সার্কিট এড়াতে পেশাদার ইলেকট্রিক্যাল ক্যাবলিং।',
        features: ['ভোল্টেজ ড্রপ প্রতিরোধ', 'আর্থিং ও নিউট্রাল চেকিং', 'সুরক্ষিত ডিস্ট্রিবিউশন বক্স']
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
      }
    ],
    deliveryTimeline: 'লালমনিরহাট সদর ও কালীগঞ্জে দ্রুততম ডেলিভারি; বুড়িমারী/পাটগ্রামে ২৪ ঘণ্টার মধ্যে সাপোর্ট।',
    onSiteSupportNote: 'হারাগাছ টেকনিক্যাল হাব থেকে লালমনিরহাটে বিশেষ দ্রুতগতিতে টেকনিশিয়ান প্রেরণের ব্যবস্থা রয়েছে।',
    productCategoriesHighlighted: ['CCTV Camera', 'Power Supply/Adapter', 'DVR/NVR/XVR', 'Other Accessories']
  },

  panchagarh: {
    slug: 'panchagarh',
    enName: 'Panchagarh',
    bnName: 'পঞ্চগড়',
    title: 'CCTV Camera Price in Panchagarh & Tetulia | Security Camera Sales & Service | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Price in Panchagarh & Tetulia. Reliable IP security cameras, DVR/NVR, computer accessories & biometric door lock setups by Shamim Tech Solution.',
    h1: 'Panchagarh CCTV Camera Sales, Security Solutions & Technician Service (পঞ্চগড় সিসিটিভি ক্যামেরা ও অন-সাইট সার্ভিস)',
    tagline: 'Surveillance for Tea Estates, Cold Climate Security & Residential Camera Solutions',
    bengaliTagline: 'পঞ্চগড় জেলা, বোদা ও তেঁতুলিয়ায় উন্নত প্রযুক্তির সিসিটিভি ক্যামেরা, আইপি ক্যামেরা ও টেকনিক্যাল সার্ভিস',
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
      'Boda Bus Stand',
      'Tetulia Kazi Mor',
      'Banglabandha Zero Point'
    ],
    popularSearchesBn: [
      'পঞ্চগড় সিসিটিভি ক্যামেরা দাম',
      'তেঁতুলিয়া সিসিটিভি ক্যামেরা দোকান',
      'বোদা সিসিটিভি টেকনিশিয়ান',
      'পঞ্চগড় সিসিটিভি সার্ভিস',
      'পঞ্চগড় আইপি ক্যামেরা',
      'পঞ্চগড় সিকিউরিটি ক্যামেরা ইনস্টলেশন'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Panchagarh',
      'Panchagarh CCTV Camera Shop',
      'Tetulia CCTV Service',
      'CCTV Technician Panchagarh',
      'Panchagarh CCTV Installation',
      'IP Camera Panchagarh',
      'Access Control Panchagarh'
    ],
    servicesOffered: [
      {
        title: 'Fog-Resistant Night Vision Camera Setup',
        bengaliTitle: 'কুয়াশা ও শীত সহনশীল নাইট ভিশন ক্যামেরা',
        description: 'পঞ্চগড় ও তেঁতুলিয়ার ঘন কুয়াশায় কার্যকরী স্মার্ট ডুয়াল ইলুমিনেটর ও কালার নাইট ভিশন ক্যামেরা।',
        features: ['অ্যান্টি-ফগ ইমেজ সেন্সর', 'স্মার্ট হোয়াইট লাইট ও আইআর মোড', 'IP67 মেটাল ওয়াটারপ্রুফ']
      },
      {
        title: 'Tea Estate & Resort Surveillance',
        bengaliTitle: 'চা বাগান ও রিসোর্ট সিকিউরিটি সার্ভিলেন্স',
        description: 'তেঁতুলিয়া ও পঞ্চগড়ের চা বাগান, রিসোর্ট ও কমার্শিয়াল স্পেসের জন্য দীর্ঘ দূরত্বের ওয়্যারিং ও নেটওয়ার্কিং।',
        features: ['লং ডিস্ট্যান্স সিগন্যাল ব্যালুন', 'সেন্ট্রাল মনিটরিং ও ব্যাকআপ', 'স্মার্টফোন নোটিফিকেশন']
      },
      {
        title: 'CCTV Camera Sales with Secure Delivery',
        bengaliTitle: 'নিরাপদ ডেলিভারি সহ সিসিটিভি ক্যামেরা বিক্রয়',
        description: 'পঞ্চগড়ের যেকোনো প্রান্তে ১০০% সুরক্ষিত প্যাকেজিংয়ে হোম ডেলিভারি ও অন-সাইট ইনস্টলেশন সহায়তা।',
        features: ['জেনুইন ব্র্যান্ড ওয়ারেন্টি', 'টেস্টিং সম্পন্ন প্রোডাক্ট', '২৪/৭ ফোন ও হোয়াটসঅ্যাপ গাইডেন্স']
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
      }
    ],
    deliveryTimeline: 'পঞ্চগড় জেলায় ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি ও টেকনিশিয়ান শিডিউল।',
    onSiteSupportNote: 'বৃহত্তর প্রজেক্টের ক্ষেত্রে পূর্ব শিডিউল অনুসারে অভিজ্ঞ টেকনিশিয়ান ভিজিট নিশ্চিত করা হয়।',
    productCategoriesHighlighted: ['CCTV Camera', 'DVR/NVR/XVR', 'Power Supply/Adapter', 'Hard Drive']
  },

  thakurgaon: {
    slug: 'thakurgaon',
    enName: 'Thakurgaon',
    bnName: 'ঠাকুরগাঁও',
    title: 'CCTV Camera Price in Thakurgaon | CCTV Technician & Camera Installation | Shamim Tech Solution',
    metaDescription: 'CCTV Camera Price in Thakurgaon. Security cameras, IP CCTV systems, access control, intercom PBX & computer repair services with warranty in Thakurgaon.',
    h1: 'Thakurgaon CCTV Camera Sales, Installation & Security Systems (ঠাকুরগাঁও সিসিটিভি ক্যামেরা ও কম্পিউটার সার্ভিস)',
    tagline: 'Agro-Business Surveillance, Retail Security & Technical Services in Thakurgaon',
    bengaliTagline: 'ঠাকুরগাঁও জেলা, পীরগঞ্জ ও রানীশংকৈলে অরিজিনাল সিসিটিভি ক্যামেরা বিক্রয় ও দক্ষ টেকনিশিয়ান সেবা',
    aboutDistrict: 'ঠাকুরগাঁও সদর, পীরগঞ্জ, রানীশংকৈল এবং বালিয়াডাঙ্গীতে কোল্ড স্টোরেজ, কৃষিভিত্তিক শিল্পপ্রতিষ্ঠান, স্কুল-কলেজ, শোরুম ও বাসাবাড়ির জন্য নির্ভরযোগ্য সিকিউরিটি সিস্টেম প্রদান করছে শামীম টেক সলিউশন। অরিজিনাল ইকুইপমেন্ট ও পেশাদার টেকনিশিয়ানের মাধ্যমে আমরা নিশ্চিত করি টেকসই নিরাপত্তা।',
    upazilas: [
      'Thakurgaon Sadar (ঠাকুরগাঁও সদর)',
      'Pirganj (পীরগঞ্জ)',
      'Ranisankhail (রানীশংকৈল)',
      'Baliadangi (বালিয়াডাঙ্গী)',
      'Haripur (হরিপুর)'
    ],
    keyLandmarks: [
      'Thakurgaon Chourangi Mor',
      'Old Bus Stand Market',
      'Pirganj Rail Station Road',
      'Ranisankhail College Mor',
      'Baliadangi Bazar'
    ],
    popularSearchesBn: [
      'ঠাকুরগাঁও সিসিটিভি ক্যামেরা দাম',
      'ঠাকুরগাঁও সিসিটিভি টেকনিশিয়ান',
      'পীরগঞ্জ সিসিটিভি ক্যামেরা দোকান',
      'ঠাকুরগাঁও সিসিটিভি সার্ভিস',
      'ঠাকুরগাঁও আইপি ক্যামেরা',
      'ঠাকুরগাঁও ডিভিআর এনভিআর রিপেয়ার'
    ],
    popularSearchesEn: [
      'CCTV Camera Price in Thakurgaon',
      'Thakurgaon CCTV Camera Shop',
      'CCTV Technician Thakurgaon',
      'Thakurgaon CCTV Installation',
      'Pirganj CCTV Camera Service',
      'IP Camera Thakurgaon',
      'Access Control Thakurgaon'
    ],
    servicesOffered: [
      {
        title: 'Cold Storage & Agro-Farm CCTV Solutions',
        bengaliTitle: 'কোল্ড স্টোরেজ ও এগ্রো-ফার্ম সিসিটিভি সলিউশন',
        description: 'ঠাকুরগাঁওয়ের কোল্ড স্টোরেজ, অটো মিল ও এগ্রো খামারের জন্য লো-টেম্পারেচার ও ভেজা আবহাওয়ায় টেকসই নজরদারি।',
        features: ['অ্যান্টি-ময়েসচার মেটাল বডি', '২৪ ঘণ্টা একটানা রেকর্ডিং সেটআপ', 'দূরবর্তী স্থান থেকে মোবাইল ভিউ']
      },
      {
        title: 'CCTV Camera Sales with Official Warranty',
        bengaliTitle: 'অফিসিয়াল ওয়ারেন্টি সহ সিসিটিভি ক্যামেরা বিক্রয়',
        description: 'ঠাকুরগাঁওয়ের যেকোনো উপজেলার জন্য সরাসরি ব্র্যান্ডেড সিকিউরিটি ক্যামেরা ও এক্সেসরিজ ডেলিভারি।',
        features: ['১০০% অরিজিনাল গ্যাজেট', 'কোম্পানি ওয়ারেন্টি কার্ড', 'সাশ্রয়ী প্যাকেজ অফার']
      },
      {
        title: 'Access Control & Biometric Setup',
        bengaliTitle: 'বায়োমেট্রিক হাজিরা মেশিন ও ডোর লক',
        description: 'অফিস ও শিক্ষাপ্রতিষ্ঠানের স্টাফ উপস্থিতি নিশ্চিত করতে আধুনিক ফিঙ্গারপ্রিন্ট ও ফেস মেশিন।',
        features: ['সহজ বাংলা সফটওয়্যার সাপোর্ট', 'এক্সেল ডেটা ব্যাকআপ', 'সুরক্ষিত অ্যাক্সেস কার্ড']
      }
    ],
    faqs: [
      {
        question: 'ঠাকুরগাঁও সদরে কি অন-সাইট ফিটিং পাওয়া যায়?',
        answer: 'হ্যাঁ, ঠাকুরগাঁও সদর, পীরগঞ্জ এবং রানীশংকৈল সহ পুরো জেলায় আমাদের টেকনিশিয়ান অন-সাইটে গিয়ে ক্যামেরা ফিটিং ও কনফিগারেশন কাজ সম্পন্ন করে দিয়ে আসে।'
      },
      {
        question: 'ঠাকুরগাঁওয়ে ক্যামেরা নষ্ট হলে সার্ভিসিংয়ের কী ব্যবস্থা?',
        answer: 'যেকোনো কারিগরি সমস্যায় আমাদের হটলাইনে (01790139333) কল করলে তাৎক্ষণিক ট্রাবলশুটিং গাইড অথবা প্রয়োজনে টেকনিশিয়ান পাঠিয়ে মেরামত নিশ্চিত করা হয়।'
      }
    ],
    deliveryTimeline: 'ঠাকুরগাঁও সদর ও পীরগঞ্জে ২৪ ঘণ্টার মধ্যে ডেলিভারি ও অন-সাইট সার্ভিস।',
    onSiteSupportNote: 'কোল্ড স্টোরেজ ও বাণিজ্যিক প্রজেক্টের জন্য পূর্ব শিডিউলে অন-সাইট টিম পাঠানো হয়।',
    productCategoriesHighlighted: ['CCTV Camera', 'DVR/NVR/XVR', 'Power Supply/Adapter', 'Hard Drive', 'Other Accessories']
  }
};
