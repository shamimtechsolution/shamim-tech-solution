const fs = require('fs');
const path = require('path');
const { entries, products, services } = require('./parse242Entries.cjs');

// Helper to determine district name in Bengali and English
const DISTRICT_MAP = {
  rangpur: { bn: 'রংপুর', en: 'Rangpur' },
  dinajpur: { bn: 'দিনাজপুর', en: 'Dinajpur' },
  gaibandha: { bn: 'গাইবান্ধা', en: 'Gaibandha' },
  kurigram: { bn: 'কুড়িগ্রাম', en: 'Kurigram' },
  nilphamari: { bn: 'নীলফামারী', en: 'Nilphamari' },
  lalmonirhat: { bn: 'লালমনিরহাট', en: 'Lalmonirhat' },
  panchagarh: { bn: 'পঞ্চগড়', en: 'Panchagarh' },
  thakurgaon: { bn: 'ঠাকুরগাঁও', en: 'Thakurgaon' },
  bogura: { bn: 'বগুড়া', en: 'Bogura' },
  dhaka: { bn: 'ঢাকা', en: 'Dhaka' },
  haragachh: { bn: 'হারাগাছ (রংপুর)', en: 'Haragachh, Rangpur' },
  'jahaj-company-mor': { bn: 'জাহাজ কোম্পানি মোড় (রংপুর)', en: 'Jahaj Company Mor, Rangpur' }
};

function detectLocation(slug) {
  for (const [key, val] of Object.entries(DISTRICT_MAP)) {
    if (slug.startsWith(key)) {
      return { key, ...val };
    }
  }
  return { key: 'bd', bn: 'বাংলাদেশ', en: 'Bangladesh' };
}

// ----------------------------------------------------
// GENERATE 117 PRODUCTS
// ----------------------------------------------------
function buildProductItem(item) {
  const slug = item.url.replace('/products/', '');
  const title = item.title;
  const loc = detectLocation(slug);

  // Determine Product Category and sub-type
  let category = 'CCTV Cameras';
  let filterCategory = 'CCTV Cameras';
  let defaultPrice = '৳১,৮৫০ থেকে শুরু (মডেল ও রেজ্যুলেশন অনুযায়ী)';
  let bnName = '';
  let name = '';
  let specs = [
    { label: 'রেজ্যুলেশন', value: '2MP / 3MP / 5MP / 4K Ultra HD' },
    { label: 'নাইট ভিশন', value: '২০-৬০ মিটার নাইট কালার ও ইনফ্রারেড ভিশন' },
    { label: 'ওয়ারেন্টি', value: '১ থেকে ২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি' },
    { label: 'ব্র্যান্ড সমূহ', value: 'Hikvision, Dahua, Imou, CP Plus, Uniview' }
  ];

  if (slug.includes('ip-wifi') || slug.includes('wifi-camera') || slug.includes('ip-camera') || slug.includes('wireless')) {
    category = 'CCTV Cameras';
    filterCategory = 'WiFi Camera';
    name = `${loc.en} IP & WiFi Camera Sales`;
    bnName = `${loc.bn} আইপি ও ওয়াইফাই ক্যামেরা বিক্রয়`;
    defaultPrice = '৳২,২০০ থেকে শুরু';
    specs = [
      { label: 'কানেক্টিভিটি', value: '2.4GHz WiFi / LAN পোর্ট / 4G SIM সাপোর্ট' },
      { label: 'ভিডিও কোয়ালিটি', value: '1080p Full HD / 2K / 4K রেজ্যুলেশন' },
      { label: 'অডিও ফিচার', value: 'টু-ওয়ে রিয়েল-টাইম অডিও ও লাউডস্পিকার' },
      { label: 'স্মার্ট নোটিফিকেশন', value: 'AI হিউম্যান ডিটেকশন ও মোবাইল অ্যাপ অ্যালার্ট' }
    ];
  } else if (slug.includes('dvr-nvr') || slug.includes('dvr-recorder') || slug.includes('nvr-recorder') || slug.includes('dvr') || slug.includes('nvr')) {
    category = 'Recording Systems';
    filterCategory = 'DVR / XVR';
    name = `${loc.en} DVR & NVR System Sales`;
    bnName = `${loc.bn} ডিভিআর ও এনভিআর রেকর্ডার বিক্রয়`;
    defaultPrice = '৳৩,৫০০ থেকে শুরু (চ্যানেল সংখ্যা অনুযায়ী)';
    specs = [
      { label: 'চ্যানেল সাপোর্ট', value: '4 / 8 / 16 / 32 চ্যানেল ইনপুট' },
      { label: 'কম্প্রেশন টেকনোলজি', value: 'H.265+ আল্ট্রা স্টোরেজ সেভিং' },
      { label: 'আউটপুট ইন্টারফেস', value: 'HDMI 4K ও VGA ডুয়েল ডিসপ্লে সাপোর্ট' },
      { label: 'নেটওয়ার্কিং', value: 'P2P ক্লাউড ও মোবাইল লাইভ ভিউ' }
    ];
  } else if (slug.includes('pbx') || slug.includes('intercom')) {
    category = 'PABX & Intercom';
    filterCategory = 'Access Control';
    name = `${loc.en} PBX & Intercom Sales`;
    bnName = `${loc.bn} পিবিএক্স মেশিন ও ইন্টারকম বিক্রয়`;
    defaultPrice = '৳৪,২০০ থেকে শুরু';
    specs = [
      { label: 'লাইন ক্যাপাসিটি', value: '২x৮, ৪x১৬, ৮x২৪ থেকে ৩২ লাইন এক্সপ্যানশন' },
      { label: 'কল ফিচার', value: 'অটো অ্যাটেনডেন্ট, কল ট্রান্সফার ও কনফারেন্স' },
      { label: 'সামঞ্জস্যপূর্ণ ব্র্যান্ড', value: 'Panasonic, IKE, Excelltel, Grandstream' }
    ];
  } else if (slug.includes('access-control') || slug.includes('biometric') || slug.includes('fingerprint') || slug.includes('door-lock')) {
    category = 'Access Control & Smart Locks';
    filterCategory = 'Access Control';
    name = `${loc.en} Access Control & Biometric Sales`;
    bnName = `${loc.bn} অ্যাক্সেস কন্ট্রোল ও বায়োমেট্রিক মেশিন বিক্রয়`;
    defaultPrice = '৳৪,৮০০ থেকে শুরু';
    specs = [
      { label: 'আইডেন্টিফিকেশন', value: 'ফিঙ্গারপ্রিন্ট, RFID কার্ড, ফেস রিকগনিশন ও পাসওয়ার্ড' },
      { label: 'ক্যাপাসিটি', value: '১,০০০ - ৫,০০০ ইউজার মেমোরি ও ১ লাখ লগ রেকর্ড' },
      { label: 'লক টাইপ', value: 'ইলেকট্রোম্যাগনেটিক লক (EM Lock), ড্রপবোল্ট ও রিভার্সিবল' }
    ];
  } else if (slug.includes('hard-disk') || slug.includes('storage') || slug.includes('hdd')) {
    category = 'Storage & Power';
    filterCategory = 'Hard Disk';
    name = `${loc.en} CCTV Surveillance HDD Sales`;
    bnName = `${loc.bn} সিসিটিভি সার্ভেইল্যান্স হার্ডডিস্ক বিক্রয়`;
    defaultPrice = '৳২,৪৫০ থেকে শুরু (1TB / 2TB / 4TB / 6TB)';
    specs = [
      { label: 'ক্যাপাসিটি', value: '500GB, 1TB, 2TB, 4TB, 6TB, 8TB' },
      { label: 'ব্র্যান্ড', value: 'Western Digital (Purple), Seagate (SkyHawk), Toshiba' },
      { label: 'ওয়ার্কলোড রেটিং', value: '24/7 অবিরাম সার্ভেইল্যান্স রেকর্ডিং ক্ষমতা' }
    ];
  } else if (slug.includes('power-adapter') || slug.includes('cable') || slug.includes('video-balun') || slug.includes('connector')) {
    category = 'Cables & Connectors';
    filterCategory = 'Power Adapter';
    name = `${loc.en} CCTV Accessories & Power Supply`;
    bnName = `${loc.bn} সিসিটিভি ক্যাবল, অ্যাডাপ্টার ও এক্সেসরিজ`;
    defaultPrice = '৳১৫০ থেকে শুরু';
  } else if (slug.includes('monitor')) {
    category = 'Storage & Power';
    filterCategory = 'All Categories';
    name = `${loc.en} CCTV Security Monitor Sales`;
    bnName = `${loc.bn} সিসিটিভি সিকিউরিটি মনিটর বিক্রয়`;
    defaultPrice = '৳৩,৮০০ থেকে শুরু';
  } else {
    name = `${loc.en} CCTV Camera Price & Sales`;
    bnName = `${loc.bn} সিসিটিভি ক্যামেরা ও সিকিউরিটি সামগ্রী বিক্রয়`;
  }

  // Address description compliance:
  const addressMention = loc.key === 'haragachh'
    ? 'শামীম টেক সলিউশন-এর প্রধান অফিস জাহাজ কোম্পানি মোড়, রংপুর। হারাগাছ সহ রংপুর বিভাগের যেকোনো স্থানে অন-সাইট ডেলিভারি ও দ্রুত সার্ভিস প্রদান করা হয়।'
    : loc.key === 'jahaj-company-mor'
    ? 'আমাদের মূল শোরুম ও প্রধান অফিস জাহাজ কোম্পানি মোড়, রংপুর। এখান থেকে সরাসরি জেনুইন প্রোডাক্ট সংগ্রহ ও অন-সাইট সার্ভিসের বুকিং দেওয়া যায়।'
    : loc.key === 'dhaka' || loc.key === 'bogura'
    ? `শামীম টেক সলিউশন জাহাজ কোম্পানি মোড় রংপুর থেকে পরিচালিত হলেও ${loc.bn}-এ আমাদের সক্রিয় সার্ভিস টিম ও সারা দেশে কুরিয়ারে দ্রুত প্রোডাক্ট ডেলিভারি সুবিধা রয়েছে।`
    : `শামীম টেক সলিউশন জাহাজ কোম্পানি মোড়, রংপুর থেকে পরিচালিত বিশ্বস্ত প্রতিষ্ঠান। ${loc.bn} এলাকায় আসল ব্র্যান্ডের সিসিটিভি সামগ্রী বিক্রয় ও হোম ডেলিভারি করা হয়।`;

  const metaDescription = `${bnName} সেরা মূল্যে। ১০০% আসল Hikvision, Dahua, ZKTeco সামগ্রী ও ওয়ারেন্টি। হটলাইন: 01790139333। প্রধান অফিস: জাহাজ কোম্পানি মোড়, রংপুর।`;

  const overview = `${name}: শামীম টেক সলিউশন (STS) দিচ্ছে ১০০% আসল ও ওয়ারেন্টিযুক্ত সিকিউরিটি ডিভাইস। ${addressMention} আপনি পাবেন বিশ্বখ্যাত ব্র্যান্ডের জেনুইন ক্যামেরা, ডিভিআর, এনভিআর এবং টেকনিক্যাল সলিউশন। অনলাইনে অর্ডার করুন অথবা আমাদের শোরুম পরিদর্শন করুন।`;

  return {
    slug,
    name,
    bnName,
    category,
    title,
    metaDescription,
    h1: `${name} | Shamim Tech Solution`,
    tagline: `Genuine Security Hardware, Transparent Pricing & Fast Support in ${loc.en}`,
    bengaliTagline: `${loc.bn}-এ ১০০% আসল সিকিউরিটি হার্ডওয়্যার, সাশ্রয়ী মূল্য ও দ্রুত সাপোর্ট`,
    overview,
    description: overview,
    priceNote: defaultPrice,
    warranty: '১ থেকে ২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি ও সার্ভিস সাপোর্ট',
    specifications: specs,
    keyFeatures: [
      '১০০% জেনুইন ব্র্যান্ড প্রোডাক্ট (Hikvision, Dahua, ZKTeco, Imou, Uniview)',
      'ক্যাশ অন ডেলিভারি ও সারা দেশে দ্রুত কুরিয়ার সুবিধা',
      'প্রফেশনাল টেকনিশিয়ান দ্বারা অন-সাইট ফিটিং ও কনফিগারেশন সাপোর্ট',
      'অফিসিয়াল সার্ভিস ওয়ারেন্টি ও বিক্রয়োত্তর সার্বক্ষণিক হেল্পলাইন (01790139333)'
    ],
    buyingGuide: [
      'প্রয়োজন অনুযায়ী সঠিক রেজ্যুলেশন (2MP, 5MP বা IP) নির্ধারণ করুন।',
      'ঘরের ভিতরের জন্য ডোম ক্যামেরা এবং বাইরের জন্য ওয়াটারপ্রুফ মেটাল বুলেট ক্যামেরা বেছে নিন।',
      '২৪/৭ অবিরাম রেকর্ডিংয়ের জন্য সার্ভেইল্যান্স গ্রেড পার্পল বা স্কাইহক হার্ডডিস্ক ব্যবহার করুন।'
    ],
    filterCategory,
    relatedProductSlugs: ['cctv-camera', 'ip-camera', 'dvr', 'cctv-hard-disk'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-technician', 'cctv-repair-maintenance'],
    faqs: [
      {
        question: `${loc.bn}-এ প্রোডাক্ট কীভাবে ডেলিভারি পাব?`,
        answer: `রংপুর সিটিতে সরাসরি অন-সাইট ডেলিভারি এবং অন্যান্য জেলা বা উপজেলায় বিশ্বস্ত কুরিয়ার সার্ভিসের মাধ্যমে ক্যাশ অন ডেলিভারিতে দ্রুত প্রোডাক্ট পৌঁছানো হয়।`
      },
      {
        question: `প্রোডাক্টের সাথে কি ইনস্টলেশন সার্ভিস দেওয়া হয়?`,
        answer: `হ্যাঁ, রংপুর বিভাগ, বগুড়া ও ঢাকায় আমাদের দক্ষ টেকনিশিয়ান অন-সাইটে গিয়ে ক্যামেরা ও ডিভাইস ফিটিং সার্ভিস প্রদান করেন।`
      },
      {
        question: `ওয়ারেন্টি সাপোর্ট পেতে কোথায় যোগাযোগ করতে হবে?`,
        answer: `যেকোনো ওয়ারেন্টি ক্লেইমের জন্য সরাসরি আমাদের জাহাজ কোম্পানি মোড়, রংপুর অফিসে যোগাযোগ করতে পারেন অথবা হটলাইন 01790139333 নম্বরে কল করতে পারেন।`
      }
    ]
  };
}

// ----------------------------------------------------
// GENERATE 125 SERVICES
// ----------------------------------------------------
function buildServiceItem(item) {
  const slug = item.url.replace('/services/', '');
  const title = item.title;
  const loc = detectLocation(slug);

  let category = 'CCTV & Surveillance';
  let name = '';
  let bnName = '';
  let pricingStartingFrom = '৳৫০০ / ক্যামেরা (প্রজেক্ট সাইজ অনুযায়ী সাশ্রয়ী প্যাকেজ)';
  let keyFeatures = [
    'দক্ষ ও অভিজ্ঞ টেকনিশিয়ান শামীম দ্বারা সরাসরি কাজ পরিচালনা',
    'নিখুঁত ক্যামেরা অ্যাঙ্গেল ক্যালিব্রেশন ও ওয়্যারিংয়ে জিরো ব্লাইন্ড স্পট',
    'ওয়াটারপ্রুফ ক্যাবলিং, কন্ডুইট পাইপিং ও ওয়াটার সিলিং',
    'মোবাইল ফোন ও কম্পিউটারে ইন্টারনেট লাইভ ভিউ অ্যাক্টিভেশন'
  ];

  if (slug.includes('electrician') || slug.includes('electrical') || slug.includes('wiring') || slug.includes('switchboard') || slug.includes('lighting')) {
    category = 'Electrical Wiring';
    name = `${loc.en} Professional Electrician & Electrical Wiring`;
    bnName = `${loc.bn} ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস`;
    pricingStartingFrom = '৳৩০০ থেকে শুরু (কাজের ধরন ও পরিধি অনুযায়ী)';
    keyFeatures = [
      'বাসা-বাড়ি, দোকান ও বাণিজ্যিক প্রতিষ্ঠানের আধুনিক সার্কিট ও ওয়্যারিং',
      'শর্ট সার্কিট ফল্ট ফাইন্ডিং, সার্কিট ব্রেকার ও ডিবি বক্স মেইনটেইন্যান্স',
      'সুইচবোর্ড ইনস্টলেশন, গ্যাং সুইচ ও লাইটিং ফিক্সিং',
      'রংপুর বিভাগ সহ সার্ভিস এরিয়ায় দ্রুত অন-কল টেকনিশিয়ান পরিদর্শন'
    ];
  } else if (slug.includes('lan') || slug.includes('networking') || slug.includes('network')) {
    category = 'Computer & LAN Networking';
    name = `${loc.en} Computer LAN & Networking Service`;
    bnName = `${loc.bn} কম্পিউটার ল্যান ও নেটওয়ার্কিং সার্ভিস`;
    pricingStartingFrom = '৳১,৫০০ থেকে শুরু';
    keyFeatures = [
      'অফিস ও বাসার হাই-স্পিড ক্যাট৬ (Cat6) ক্যাবলিং ও স্ট্রাকচার্ড নেটওয়ার্কিং',
      'রাউটার কনফিগারেশন, ব্যান্ডউইথ ম্যানেজমেন্ট ও ওয়াইফাই এক্সটেনশন',
      'সুইচ, প্যাচ প্যানেল ও সার্ভার রেক ইন্সটলেশন',
      'সিসকো, মিক্রোটিক ও টিপিলিংক নেটওয়ার্ক ডিভাইসের পেশাদার সেটআপ'
    ];
  } else if (slug.includes('pbx') || slug.includes('intercom') || slug.includes('door-phone')) {
    category = 'PABX & Intercom';
    name = `${loc.en} PBX & Intercom Installation Service`;
    bnName = `${loc.bn} পিবিএক্স ও ইন্টারকম ইনস্টলেশন সার্ভিস`;
    pricingStartingFrom = '৳২,০০০ থেকে শুরু';
    keyFeatures = [
      'অফিস, ফ্যাক্টরি ও মাল্টি-স্টোরি অ্যাপার্টমেন্টে ইন্টারকম কানেক্টিভিটি',
      'প্যানাসনিক ও ডিজিটাল পিবিএক্স এক্সটেনশন প্রোগ্রামিং',
      'ভিডিও ডোর ফোন ও অডিও কল সিস্টেম টেস্ট',
      'লাইনের নয়েজ দূরীকরণ ও দীর্ঘমেয়াদী রক্ষণাবেক্ষণ চুক্তি'
    ];
  } else if (slug.includes('access-control') || slug.includes('door-lock') || slug.includes('biometric') || slug.includes('attendance') || slug.includes('fingerprint')) {
    category = 'Access Control';
    name = `${loc.en} Access Control & Biometric Service`;
    bnName = `${loc.bn} অ্যাক্সেস কন্ট্রোল ও বায়োমেট্রিক ইনস্টলেশন সার্ভিস`;
    pricingStartingFrom = '৳১,৫০০ থেকে শুরু';
    keyFeatures = [
      'গ্লাস ডোর, কাঠের ডোর ও মেটাল ডোরে ইলেক্ট্রোম্যাগনেটিক লক ফিটিং',
      'ফিঙ্গারপ্রিন্ট ও ফেস রিকগনিশন মেশিন কনফিগারেশন',
      'অ্যাটেনডেন্স সফটওয়্যার ইন্সটলেশন ও অফিস স্টাফ ডাটাবেস সেটআপ',
      'এক্সিট পুশ বাটন ও পাওয়ার ব্যাকআপ ইউপিএস সংযোগ'
    ];
  } else if (slug.includes('repair') || slug.includes('maintenance')) {
    category = 'CCTV & Surveillance';
    name = `${loc.en} CCTV Camera Repair & Maintenance`;
    bnName = `${loc.bn} সিসিটিভি ক্যামেরা মেরামত ও সার্ভিসিং`;
    pricingStartingFrom = '৳৩৫০ থেকে শুরু (সমস্যা অনুযায়ী)';
    keyFeatures = [
      'ক্যামেরা অফলাইন, ব্ল্যাক স্ক্রিন ও নো সিগন্যাল ফল্ট ডায়াগনোসিস',
      'ডিভিআর/এনভিআর বুট লুপ, বিপিং এরর ও হার্ডডিস্ক নো ডিটেক্ট ফিক্স',
      'পাওয়ার সাপ্লাই ভোল্টেজ ড্রপ ও বিএমসি কানেক্টর রিপ্লেসমেন্ট',
      'নাইট ভিশন ব্লার দূরীকরণ ও লেন্স পরিষ্কারকরণ'
    ];
  } else {
    name = `${loc.en} CCTV Installation & Service`;
    bnName = `${loc.bn} সিসিটিভি ক্যামেরা ইনস্টলেশন ও টেকনিক্যাল সার্ভিস`;
  }

  // Address description compliance:
  const addressMention = loc.key === 'haragachh'
    ? 'শামীম টেক সলিউশন-এর প্রধান কার্যালয় জাহাজ কোম্পানি মোড়, রংপুর। হারাগাছ পৌরসভা ও আশপাশের অঞ্চলে আমাদের টেকনিশিয়ান অন-সাইটে গিয়ে দ্রুত সিসিটিভি ও ইলেকট্রিক্যাল সেবা প্রদান করেন।'
    : loc.key === 'jahaj-company-mor'
    ? 'জাহাজ কোম্পানি মোড়, রংপুর আমাদের প্রধান অফিস ও সেন্ট্রাল সার্ভিস হাব। এখান থেকে পুরো রংপুর সিটিতে দ্রুততম সময়ে সার্ভিস পৌঁছে দেওয়া হয়।'
    : loc.key === 'dhaka' || loc.key === 'bogura'
    ? `শামীম টেক সলিউশন জাহাজ কোম্পানি মোড়, রংপুর থেকে পরিচালিত হলেও ${loc.bn}-এ আমাদের দক্ষ টেকনিশিয়ান টিম রয়েছে যারা অন-সাইটে গিয়ে নিখুঁত ইনস্টলেশন ও রক্ষণাবেক্ষণ কাজ সম্পন্ন করেন।`
    : `শামীম টেক সলিউশন রংপুর বিভাগ জুড়ে পেশাদার অন-সাইট টেকনিক্যাল সেবা দেয়। ${loc.bn} এলাকায় বাড়ি, দোকান বা অফিসের সিকিউরিটি সিস্টেম ইনস্টলেশন ও মেরামতের জন্য আমাদের সার্ভিস টিম সার্বক্ষণিক প্রস্তুত।`;

  const metaDescription = `${bnName} পেশাদার টেকনিশিয়ান দ্বারা। নিখুঁত ওয়্যারিং, ক্যামেরা ফিটিং ও ১ বছরের সার্ভিস ওয়ারেন্টি। কল: 01790139333। প্রধান অফিস: জাহাজ কোম্পানি মোড়, রংপুর।`;

  const description = `${name}: শামীম টেক সলিউশন (STS) প্রদান করছে নির্ভরযোগ্য ও আন্তর্জাতিক মানের সিকিউরিটি ইনস্টলেশন সেবা। ${addressMention} আমরা বিশ্বখ্যাত ব্র্যান্ডের ক্যামেরা সেটআপ, ক্যাবল ড্রেসিং এবং মোবাইল ফোনে অনলাইন ভিউ কনফিগারেশনের সম্পূর্ণ সমাধান দিয়ে থাকি।`;

  return {
    slug,
    name,
    bnName,
    category,
    title,
    metaDescription,
    h1: `${name} | Shamim Tech Solution`,
    tagline: `Professional Engineering, Precision Wiring & 24/7 Support in ${loc.en}`,
    bengaliTagline: `${loc.bn}-এ পেশাদার টেকনিশিয়ান, নিখুঁত ওয়্যারিং ও সার্বক্ষণিক সাপোর্ট`,
    description,
    keyFeatures,
    processSteps: [
      { title: '১. সাইট পরিদর্শন ও প্ল্যানিং', desc: `${loc.bn} এলাকায় ক্যামেরা পজিশন ও ব্লাইন্ড স্পট দূরীকরণে ফ্রি পরামর্শ প্রদান।` },
      { title: '২. প্রফেশনাল ক্যাবলিং ও পাইপিং', desc: 'দেওয়াল সুরক্ষিত রেখে পিভিসি কেসিং বা কন্ডুইট পাইপের ভেতর দিয়ে টেকসই ওয়্যারিং।' },
      { title: '৩. হার্ডওয়্যার মাউন্টিং ও টেস্ট', desc: 'ডিভাইস ফিক্স করে নিখুঁত অ্যাঙ্গেল ক্যালিব্রেশন ও সিস্টেম চালুকরণ।' },
      { title: '৪. হ্যান্ডওভার ও মোবাইল অ্যাপ ভিউ', desc: 'কাস্টমারের স্মার্টফোনে ফ্রি লাইভ স্ট্রিমিং অ্যাপ সেটআপ ও বুঝিয়ে দেওয়া।' }
    ],
    pricingStartingFrom,
    warrantyInfo: '১ বছরের পূর্ণাঙ্গ সার্ভিস ওয়ারেন্টি ও ফ্রি টেকনিক্যাল হেল্পলাইন',
    popularSearchKeywords: [
      `${loc.key} cctv installation`,
      `${loc.key} cctv technician`,
      `${loc.key} cctv repair`,
      'cctv service bangladesh',
      'shamim tech solution'
    ],
    relatedServices: ['cctv-installation', 'cctv-technician', 'cctv-repair-maintenance'],
    relatedProductSlugs: ['cctv-camera', 'ip-camera', 'dvr', 'cctv-hard-disk'],
    faqs: [
      {
        question: `${loc.bn} এলাকায় সার্ভিস বুকিং দিলে কতক্ষণে টেকনিশিয়ান পৌঁছাবে?`,
        answer: `সাধারণত কল কনফার্ম করার ২ থেকে ৪ ঘণ্টার মধ্যে অথবা আপনার সুবিধাজনক নির্দিষ্ট সময়ে আমাদের দক্ষ টেকনিশিয়ান অন-সাইটে পৌঁছে যাবে।`
      },
      {
        question: `কাজের পর কোনো সমস্যা হলে কি সার্ভিস ওয়ারেন্টি পাব?`,
        answer: `হ্যাঁ, শামীম টেক সলিউশন থেকে যেকোনো ইনস্টলেশন বা রিপেয়ারিংয়ের সাথে ১ বছরের সার্ভিস ওয়ারেন্টি প্রদান করা হয়।`
      },
      {
        question: `সার্ভিসের পেমেন্ট কীভাবে করতে হবে?`,
        answer: `কাজ সম্পন্ন হওয়ার পর এবং কাস্টমার সন্তুষ্ট হওয়ার পর সরাসরি ক্যাশ বা বিকাশ/নগদের মাধ্যমে পেমেন্ট করতে পারবেন।`
      }
    ]
  };
}

console.log('Generating 117 Product SEO objects...');
const productObjects = products.map(buildProductItem);

console.log('Generating 125 Service SEO objects...');
const serviceObjects = services.map(buildServiceItem);

// Write output files
const newProductsFile = path.join(__dirname, '../src/data/newProductsData.ts');
const newServicesFile = path.join(__dirname, '../src/data/newServicesData.ts');

const newProductsContent = `// Auto-generated 117 Proposed Product SEO entries
import type { ProductSEOInfo } from './productsSEOData';

export const NEW_PRODUCTS_SEO_DATA: Record<string, ProductSEOInfo> = ${JSON.stringify(
  Object.fromEntries(productObjects.map(p => [p.slug, p])),
  null,
  2
)};
`;

const newServicesContent = `// Auto-generated 125 Proposed Service SEO entries
import type { ServiceSEOInfo } from './servicesSEOData';

export const NEW_SERVICES_SEO_DATA: Record<string, ServiceSEOInfo> = ${JSON.stringify(
  Object.fromEntries(serviceObjects.map(s => [s.slug, s])),
  null,
  2
)};
`;

fs.writeFileSync(newProductsFile, newProductsContent, 'utf8');
fs.writeFileSync(newServicesFile, newServicesContent, 'utf8');

console.log(`Successfully generated:\n- ${newProductsFile} (${productObjects.length} products)\n- ${newServicesFile} (${serviceObjects.length} services)`);
