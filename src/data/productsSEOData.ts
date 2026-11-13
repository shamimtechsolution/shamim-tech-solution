import { NEW_PRODUCTS_SEO_DATA } from './newProductsData';

export interface ProductSEOInfo {
  slug: string;
  name: string;
  bnName: string;
  category: 'CCTV Cameras' | 'Recording Systems' | 'Storage & Power' | 'Cables & Connectors' | 'PABX & Intercom' | 'Access Control & Smart Locks' | 'Biometric Attendance' | 'LAN & Networking';
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  bengaliTagline: string;
  overview?: string;
  description?: string;
  priceNote: string;
  warranty: string;
  specifications: { label: string; value: string }[];
  keyFeatures: string[];
  buyingGuide: string[];
  filterCategory: string; // matches product category in INITIAL_PRODUCTS
  relatedProductSlugs: string[];
  relatedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS_SEO_DATA: Record<string, ProductSEOInfo> = {
  // 1. CCTV Cameras Group
  'cctv-camera': {
    slug: 'cctv-camera',
    name: 'CCTV Camera',
    bnName: 'সিসিটিভি ক্যামেরা (CCTV Camera)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • CCTV Camera Sales and Price',
    metaDescription: 'Hikvision, Dahua ও Imou সিসিটিভি ক্যামেরা সেরা দামে কিনুন। নাইট ভিশন, অডিও রেকর্ডিং ও ১-২ বছরের অফিশিয়াল ওয়ারেন্টি। হটলাইন: 01790139333।',
    h1: 'Original CCTV Cameras Price in Bangladesh',
    tagline: 'High-Resolution Surveillance Cameras for Homes, Stores & Offices',
    bengaliTagline: 'বাসা, দোকান ও অফিসের জন্য উচ্চ রেজ্যুলেশন অরিজিনাল সিসিটিভি ক্যামেরা',
    overview: 'শামীম টেক সলিউশন বাংলাদেশে বিশ্বখ্যাত Hikvision, Dahua, CP Plus ও Imou ব্র্যান্ডের ১০০% জেনুইন সিসিটিভি ক্যামেরা সরাসরি বিক্রয় ও পেশাদার ইনস্টলেশন সেবা প্রদান করে। ডে-নাইট ক্রিস্টাল ক্লিয়ার নজরদারির জন্য আমাদের ক্যামেরাগুলো সেরা পছন্দ।',
    priceNote: '৳১,৭৫০ থেকে শুরু (মডেল ও রেজ্যুলেশন অনুযায়ী)',
    warranty: '১ থেকে ২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'রেজ্যুলেশন', value: '2MP (1080p), 3MP, 5MP এবং 4K Ultra HD' },
      { label: 'লেন্স সাইজ', value: '2.8mm (ওয়াইড ভিউ) / 3.6mm / 6mm' },
      { label: 'নাইট ভিশন রেঞ্জ', value: '২০ মিটার থেকে ৬০ মিটার পর্যন্ত IR ও Smart Color' },
      { label: 'বডি মেটেরিয়াল', value: 'মেটাল ও হাই-কোয়ালিটি ওয়েদারপ্রুফ পলিকার্বনেট' },
      { label: 'সুরক্ষা রেটিং', value: 'IP66 / IP67 ওয়াটার ও ডাস্টপ্রুফ' }
    ],
    keyFeatures: [
      'দিন ও রাতের অন্ধকারে স্পষ্ট ছবি ও মানুষের মুখ চেনার ক্ষমতা',
      'বিল্ট-ইন মাইক্রোফোন সহ অডিও রেকর্ডিং প্রযুক্তি',
      'স্মার্ট মোশন ডিটেকশন ও মোবাইল ফোনে ইনস্ট্যান্ট অ্যালার্ম অ্যালার্ট',
      'রংপুর বিভাগ সহ সারা দেশে ক্যাশ অন ডেলিভারি ও দ্রুত কুরিয়ার সুবিধা'
    ],
    buyingGuide: [
      'ঘরের ভিতরের জন্য ডোম ক্যামেরা এবং বাইরের খোলামেলা জায়গার জন্য বুলেট ক্যামেরা নির্বাচন করুন।',
      'রাতের বেলা রঙিন ছবি চাইলে ColorVu বা Full-Color টেকনোলজির ক্যামেরা বেছে নিন।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['hd-cctv-camera', 'ip-camera', 'dvr', 'cctv-hard-disk'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-camera-fitting', 'cctv-technician'],
    faqs: [
      { question: 'ক্যামেরা কি বিদ্যুৎ চলে গেলেও চলবে?', answer: 'ক্যামেরার সাথে ডিসি ইউপিএস বা ইনভার্টার সংযোগ থাকলে বিদ্যুৎ ছাড়াও অবিরত চলবে।' },
      { question: 'ক্যামেরায় কি ওয়ারেন্টি আছে?', answer: 'হ্যাঁ, প্রতিটি সিসিটিভি ক্যামেরায় ১ থেকে ২ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি দেওয়া হয়।' }
    ]
  },
  'hd-cctv-camera': {
    slug: 'hd-cctv-camera',
    name: 'HD CCTV Camera',
    bnName: 'এইচডি সিসিটিভি ক্যামেরা (HD 1080p / 5MP)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • HD CCTV Camera Price in Bangladesh (1080p & 5MP)',
    metaDescription: '1080p ও 5MP ফুল এইচডি কোক্সিয়াল সিসিটিভি ক্যামেরা। Hikvision Turbo HD ও Dahua HDCVI ক্যামেরা সেরা রেটে কিনুন। কল: 01790139333।',
    h1: 'High-Definition HD CCTV Cameras (1080p, 3MP, 5MP)',
    tagline: 'Cost-Effective High Definition Over Coaxial Cable Technology',
    bengaliTagline: 'কোক্সিয়াল ক্যাবলে সাশ্রয়ী মূল্যে ফুল এইচডি ঝকঝকে নজরদারি',
    overview: 'অ্যানালগ ক্যাবলিংয়ের মাধ্যমে যারা কোনো ল্যাগ ছাড়া সাশ্রয়ী খরচে ১০৮০পি ও ৫ মেগাপিক্সেল ফুল এইচডি ছবি চান, তাদের জন্য এইচডি সিসিটিভি ক্যামেরা আদর্শ। এটি পুরোনো ক্যাবলিংয়েও সরাসরি সাপোর্ট করে।',
    priceNote: '৳১,৮৫০ থেকে শুরু',
    warranty: '১-২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'সিগন্যাল ফরম্যাট', value: 'TVI / AHD / CVI / CVBS 4-in-1 ইউনিভার্সাল' },
      { label: 'রেজ্যুলেশন', value: 'Full HD 1080p (2MP) / 5MP Super HD' },
      { label: 'ভিডিও ট্রান্সমিশন দূরত্ব', value: '৫০০ মিটার পর্যন্ত কোক্সিয়াল ক্যাবলে লসলেস' }
    ],
    keyFeatures: [
      'অত্যন্ত সাশ্রয়ী খরচে ফুল এইচডি ভিডিও আউটপুট',
      'একই তারে ভিডিও ও অডিও (Audio Over Coaxial) পাঠানোর সুবিধা',
      'যেকোনো আধুনিক ৪-ইন-১ ডিভিআর-এর সাথে শতভাগ কম্প্যাটিবল'
    ],
    buyingGuide: [
      'পুরোনো সিসিটিভি সিস্টেম আপগ্রেড করতে চাইলে এইচডি ক্যামেরা সবচেয়ে সাশ্রয়ী সমাধান।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['cctv-camera', 'dvr', 'cctv-cable', 'bnc-connector'],
    relatedServiceSlugs: ['cctv-installation', 'dvr-installation'],
    faqs: [
      { question: 'এইচডি ক্যামেরা কি পুরোনো ডিভিআরে চলবে?', answer: 'ডিভিআর যদি ১০৮০পি বা ৫ মেগাপিক্সেল সাপোর্ট করে তবে অনায়াসে চলবে।' }
    ]
  },
  'ip-camera': {
    slug: 'ip-camera',
    name: 'IP Camera',
    bnName: 'ডিজিটাল আইপি ক্যামেরা (Network IP Camera)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • IP Camera Sales and Price',
    metaDescription: 'PoE নেটওয়ার্ক আইপি ক্যামেরা সেরা দামে। 3MP, 5MP ও 4K Ultra HD রেজ্যুলেশন। লাইভ অনলাইন স্ট্রিমিং ও AI মোশন ডিটেকশন। হটলাইন: 01790139333।',
    h1: 'Professional Digital Network IP Cameras (PoE & 4K)',
    tagline: 'Next-Gen Digital Surveillance with Crystal-Clear Digital Clarity',
    bengaliTagline: 'ক্রিস্টাল ক্লিয়ার ডিজিটাল স্বচ্ছতা ও শক্তিশালী নেটওয়ার্ক আইপি নজরদারি',
    overview: 'সর্বাধুনিক ডিজিটাল প্রযুক্তির আইপি ক্যামেরা সরাসরি ল্যান নেটওয়ার্কের মাধ্যমে পরিচালিত হয়। এতে ছবির রেজ্যুলেশন অত্যন্ত নিখুঁত হয় এবং গাড়ির নাম্বার প্লেট, কারেন্সি নোট ও মানুষের মুখ নিখুঁতভাবে শনাক্ত করা যায়।',
    priceNote: '৳২,৪৫০ থেকে শুরু (মডেলভেদে)',
    warranty: '২ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'কানেক্টিভিটি', value: 'RJ45 10/100M Ethernet পোর্ট, PoE (802.3af)' },
      { label: 'কম্প্রেশন', value: 'H.265+ / H.265 / H.264 স্মার্ট এনকোডিং' },
      { label: 'ভিডিও বিটরেট', value: '32 Kbps থেকে 8 Mbps ডাইনামিক' },
      { label: 'অনভিফ সাপোর্ট', value: 'ONVIF Profile S/G/T কমপ্লায়েন্ট' }
    ],
    keyFeatures: [
      'PoE সুইচের মাধ্যমে এক ক্যাবলেই বিদ্যুৎ ও ডাটা ট্রান্সফার—অতিরিক্ত তারের প্রয়োজন নেই',
      'স্মার্ট এআই হিউম্যান ও ভেহিকল ডিটেকশন—মিথ্যা অ্যালার্ম শূন্যের কোঠায়',
      'সরাসরি কম্পিউটার ব্রাউজার ও এনভিআর থেকে পরিচালনাযোগ্য'
    ],
    buyingGuide: [
      'ব্যাংক, জুয়েলারি শপ, বহুতল কর্পোরেট অফিস ও ফ্যাক্টরির জন্য আইপি ক্যামেরা সেরা।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['nvr', 'cat6-cable', 'network-switch', 'outdoor-cctv-camera'],
    relatedServiceSlugs: ['ip-camera-installation', 'ip-camera-setup', 'nvr-installation'],
    faqs: [
      { question: 'আইপি ক্যামেরায় কি আলাদা পাওয়ার অ্যাডাপ্টার লাগে?', answer: 'PoE এনভিআর বা PoE সুইচ ব্যবহার করলে আলাদা পাওয়ার অ্যাডাপ্টার ছাড়াই ক্যাট৬ ক্যাবলে চলে।' }
    ]
  },
  'wifi-camera': {
    slug: 'wifi-camera',
    name: 'WiFi Camera',
    bnName: 'ওয়াইফাই ক্যামেরা (WiFi Smart Camera)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • WiFi Camera Sales and Price',
    metaDescription: 'স্মার্ট ওয়াইফাই সিসিটিভি ক্যামেরা। তার ছাড়া ৩৬০° রোটেটিং, টু-ওয়ে অডিও ও মোবাইলে লাইভ ভিউ। সেরা রেটে কিনুন। কল: 01790139333।',
    h1: 'Smart Wireless WiFi Security Cameras in Bangladesh',
    tagline: 'Wire-Free Convenience, Pan-Tilt Motion Tracking & Smartphone Control',
    bengaliTagline: 'তারহীন সুবিধা, ৩৬০ ডিগ্রি মোশন ট্র্যাকিং ও স্মার্টফোন দিয়ে পূর্ণ নিয়ন্ত্রণ',
    overview: 'তার টানার কোনো ঝামেলা ছাড়া শুধু ঘরের ওয়াইফাই ও বিদ্যুতের প্লাগে লাগিয়ে চালু করা যায় এই ওয়াইফাই ক্যামেরা। Imou Ranger 2, Bullet 2C, TP-Link Tapo ও V380 মডেলের অরিজিনাল ক্যামেরা সেরা দামে কিনুন।',
    priceNote: '৳১,৯৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'ওয়্যারলেস স্ট্যান্ডার্ড', value: 'Wi-Fi IEEE 802.11 b/g/n (2.4GHz)' },
      { label: 'স্টোরেজ', value: 'MicroSD কার্ড ২৫৬ জিবি পর্যন্ত ও ক্লাউড স্টোরেজ' },
      { label: 'প্যান ও টিল্ট', value: 'অনুভূমিক ৩৫৫° ও উল্লম্ব ৮৫° রোটেটিং' },
      { label: 'অডিও', value: 'বিল্ট-ইন মাইক ও হাই-পাওয়ার স্পিকার (Two-Way Talk)' }
    ],
    keyFeatures: [
      'মোবাইল অ্যাপ দিয়ে ক্যামেরাকে যেকোনো দিকে ঘুরিয়ে রুমের চারপাশ দেখা যায়',
      'ঘরে বসে বা বাইরে থেকে যেকোনো ব্যক্তির সাথে সরাসরি কথা বলার সুবিধা',
      'বাচ্চা বা বয়স্ক মানুষের তদারকির জন্য সেরা ইনডোর সলিউশন'
    ],
    buyingGuide: [
      'ফ্ল্যাট বাসা, পড়ার রুম ও ছোট দোকানের জন্য ওয়াইফাই ক্যামেরা সবচেয়ে সহজ ও বাজেট-বান্ধব।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['wireless-camera', 'indoor-cctv-camera', 'color-night-vision-camera'],
    relatedServiceSlugs: ['wifi-camera-installation', 'mobile-cctv-viewing'],
    faqs: [
      { question: 'ওয়াইফাই বন্ধ থাকলেও কি ক্যামেরা রেকর্ড করবে?', answer: 'হ্যাঁ! ক্যামেরার মেমোরি কার্ডে ২৪ ঘণ্টা নিরবচ্ছিন্ন রেকর্ডিং জমা হতে থাকবে।' }
    ]
  },
  'wireless-camera': {
    slug: 'wireless-camera',
    name: 'Wireless Camera',
    bnName: 'ওয়্যারলেস সিকিউরিটি ক্যামেরা',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Wireless Security Camera Price in Bangladesh',
    metaDescription: 'তার ছাড়া ওয়্যারলেস সিকিউরিটি ক্যামেরা। সহজ ইনস্টলেশন, রিমোট অ্যাক্সেস ও মোশন সেন্সর। অরিজিনাল প্রোডাক্টের জন্য কল: 01790139333।',
    h1: 'Next-Generation Wireless Surveillance Cameras',
    tagline: 'Tangle-Free Security Monitoring with Easy Smartphone Pairing',
    bengaliTagline: 'তারের জটলামুক্ত আধুনিক নিরাপত্তা ও স্মার্টফোন পেয়ারিং',
    overview: 'যেসব স্থানে ড্রিলিং বা দেয়াল কাটা সম্ভব নয়, সেখানে ওয়্যারলেস সিকিউরিটি ক্যামেরা সেরা। এটি দ্রুত পেয়ার হয় এবং যেকোনো টেবিল বা দেওয়ালে স্ক্রু করে কয়েক মিনিটেই চালু করা যায়।',
    priceNote: '৳২,২০০ থেকে শুরু',
    warranty: '১ বছরের ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'কানেকশন', value: 'Wi-Fi 2.4G & AP Hotspot ডিরেক্ট কানেক্ট' },
      { label: 'রেজ্যুলেশন', value: '1080p Full HD / 3MP' },
      { label: 'নাইট ভিশন', value: 'ইনফ্রারেড ব্ল্যাক অ্যান্ড হোয়াইট ও সফট এলইডি' }
    ],
    keyFeatures: [
      'প্লাগ অ্যান্ড প্লে ইনস্টলেশন—কোনো টেকনিক্যাল জটিলতা নেই',
      'স্মার্টফোনে লাইভ স্ট্রিম ও তাৎক্ষণিক স্ন্যাপশট ক্যাপচার',
      'মেমোরি কার্ড ফুল হয়ে গেলে পুরোনো ভিডিও নিজে থেকেই ওভাররাইট হওয়া'
    ],
    buyingGuide: [
      'ভাড়াবাসা বা অস্থায়ী শোরুমের জন্য ওয়্যারলেস ক্যামেরা স্থানান্তর করা অত্যন্ত সহজ।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['wifi-camera', 'indoor-cctv-camera'],
    relatedServiceSlugs: ['wifi-camera-installation', 'cctv-online-view-setup'],
    faqs: [
      { question: 'এক মোবাইল দিয়ে কি একাধিক ওয়্যারলেস ক্যামেরা দেখা যায়?', answer: 'হ্যাঁ, একটি অ্যাপেই ৪টি থেকে ১৬টি ক্যামেরা একসাথে স্ক্রিনে গ্রিড আকারে দেখা যায়।' }
    ]
  },
  'dome-cctv-camera': {
    slug: 'dome-cctv-camera',
    name: 'Dome CCTV Camera',
    bnName: 'ডোম সিসিটিভি ক্যামেরা (ইনডোর সিলিং ক্যামেরা)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Dome CCTV Camera Price in Bangladesh',
    metaDescription: 'বাসা, অফিস ও দোকানের ইনডোর সিলিংয়ের জন্য ডোম সিসিটিভি ক্যামেরা। Hikvision ও Dahua ডোম ক্যামেরা সেরা মূল্যে। কল: 01790139333।',
    h1: 'Indoor Dome CCTV Cameras for Homes & Offices',
    tagline: 'Discreet Dome Aesthetics, Wide-Angle Coverage & Ceiling Mount',
    bengaliTagline: 'নান্দনিক গোল ডোম ডিজাইন, ওয়াইড অ্যাঙ্গেল কভারেজ ও সিলিং ফিটিং',
    overview: 'গোলাকার গম্বুজ আকৃতির ডোম ক্যামেরা ইনডোর বা ঘরের ভেতরের সিলিংয়ে মাউন্টিং করার জন্য বিশেষভাবে তৈরি। এর আকর্ষণীয় ডিজাইন ঘরের বা অফিসের ইন্টেরিয়র ডেকোরেশনের সাথে চমৎকারভাবে মিশে যায়।',
    priceNote: '৳১,৭৫০ থেকে শুরু',
    warranty: '১-২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'মাউন্টিং টাইপ', value: 'সিলিং ও ওয়াল মাউন্ট' },
      { label: 'ভিউয়িং ফিল্ড', value: '১০৩ ডিগ্রি ওয়াইড অ্যাঙ্গেল লেন্স' },
      { label: 'বডি', value: 'ট্যাম্পার রেজিস্ট্যান্ট প্লাস্টিক / মেটাল' }
    ],
    keyFeatures: [
      'নান্দনিক লুক—কেউ সহজে বুঝতে পারে না ক্যামেরাটি কোন দিকে ফোকাস করা',
      'ইনডোরে ওয়াইড অ্যাঙ্গেলে ঘরের সম্পূর্ণ চারপাশ কভার করে',
      'স্মার্ট আইআর নাইট ভিশনে অন্ধকারেও স্পষ্ট দৃশ্যমানতা'
    ],
    buyingGuide: [
      'বেডরুম, ড্রয়িং রুম, অফিস ক্যাবিন, শোরুম কাউন্টারে ডোম ক্যামেরা ব্যবহার করুন।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['bullet-cctv-camera', 'indoor-cctv-camera', 'hd-cctv-camera'],
    relatedServiceSlugs: ['cctv-camera-fitting', 'cctv-installation'],
    faqs: [
      { question: 'ডোম ক্যামেরা কি বাইরে বৃষ্টিতে লাগানো যাবে?', answer: 'ডোম ক্যামেরা সাধারণত ঘরের ভিতরের জন্য। বাইরের বৃষ্টির জন্য মেটাল বুলেট ক্যামেরা সবচেয়ে উপযুক্ত।' }
    ]
  },
  'bullet-cctv-camera': {
    slug: 'bullet-cctv-camera',
    name: 'Bullet CCTV Camera',
    bnName: 'বুলেট সিসিটিভি ক্যামেরা (আউটডোর ওয়াটারপ্রুফ)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Outdoor Bullet CCTV Camera Price in Bangladesh',
    metaDescription: 'রোদ-বৃষ্টি সহনশীল মেটাল বডি আউটডোর বুলেট সিসিটিভি ক্যামেরা। Hikvision, Dahua অরিজিনাল ক্যামেরা সেরা দামে। কল: 01790139333।',
    h1: 'Heavy-Duty Outdoor Bullet CCTV Cameras',
    tagline: 'Weatherproof IP67 Metal Chassis, Long-Range IR & Street Deterrence',
    bengaliTagline: 'ওয়েদারপ্রুফ আইপি৬৭ মেটাল চেসিস ও দীর্ঘ দূরত্বের আউটডোর নজরদারি',
    description: 'লম্বাটে নলাকার মেটাল বডির বুলেট ক্যামেরা রোদে পুড়ে বা বৃষ্টিতে ভিজেও বছরের পর বছর অক্ষত থাকে। এটি বাইরের রাস্তা, মেইন গেট, কার পার্কিং ও বাউন্ডারি প্রাচীরে নিরাপত্তার প্রতীক হিসেবে কাজ করে।',
    priceNote: '৳১,৮৫০ থেকে শুরু',
    warranty: '১-২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'সুরক্ষা স্ট্যান্ডার্ড', value: 'IP67 ফুল ওয়াটারপ্রুফ ও ডাস্টপ্রুফ' },
      { label: 'কেসিং', value: 'হেভি-ডিউটি অ্যালুমিনিয়াম অ্যালয় মেটাল' },
      { label: 'আইআর দূরত্ব', value: '৩০ মিটার থেকে ৮০ মিটার পর্যন্ত শক্তিশালী নাইট ভিশন' }
    ],
    keyFeatures: [
      'ঝড়, বৃষ্টি ও তীব্র রোদেও নিরবচ্ছিন্ন ভিডিও ক্যাপচারিং',
      'দূরবর্তী বস্তু বা রাস্তার গাড়ি পরিষ্কার ফোকাস করার জন্য নিখুঁত লেন্স',
      'অপরাধীদের জন্য দৃশ্যমান সতর্কবার্তা (Deterrent Effect)'
    ],
    buyingGuide: [
      'বাড়ির ছাদ, প্রধান ফটক, ফ্যাক্টরি কম্পাউন্ড ও বাউন্ডারির জন্য বুলেট ক্যামেরা মাস্ট।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['dome-cctv-camera', 'outdoor-cctv-camera', 'ptz-camera'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-camera-fitting'],
    faqs: [
      { question: 'বৃষ্টির পানি ঢুকলে কি ক্যামেরা নষ্ট হবে?', answer: 'না, বুলেট ক্যামেরায় IP67 ওয়াটারপ্রুফ সিলিং থাকায় ভারী বৃষ্টিতেও পানি ঢোকে না।' }
    ]
  },
  'ptz-camera': {
    slug: 'ptz-camera',
    name: 'PTZ Camera',
    bnName: 'পিটিজেড ক্যামেরা (Pan-Tilt-Zoom Camera)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • PTZ Camera Sales and Price',
    metaDescription: '৩৬০ ডিগ্রি রোটেটিং ও অপটিক্যাল জুম পিটিজেড ক্যামেরা। বড় প্রজেক্ট ও ফ্যাক্টরির জন্য Hikvision ও Dahua স্পিড ডোম PTZ। কল: 01790139333।',
    h1: 'Commercial Grade PTZ (Pan-Tilt-Zoom) Speed Dome Cameras',
    tagline: '360° Endless Panning, Powerful Optical Zoom & Smart Auto-Tracking',
    bengaliTagline: '৩৬০ ডিগ্রি অবাধ ঘূর্ণন, শক্তিশালী অপটিক্যাল জুম ও অটো-ট্র্যাকিং সুবিধা',
    description: 'পিটিজেড (Pan-Tilt-Zoom) ক্যামেরা দূর থেকে জয়স্টিক বা মোবাইল দিয়ে যেকোনো দিকে ঘোরানো যায় এবং অপটিক্যাল জুমে বহুদূরের গাড়ির নাম্বার বা মানুষের মুখ এক ক্লিকেই বড় করে দেখা যায়।',
    priceNote: '৳৭,৫০০ থেকে শুরু (মডেল ও জুম ক্ষমতা অনুযায়ী)',
    warranty: '২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ঘূর্ণন পরিসর', value: 'Pan: 360° Endless, Tilt: -15° to 90° Auto Flip' },
      { label: 'অপটিক্যাল জুম', value: '4X, 15X, 25X, 32X অপটিক্যাল জুম' },
      { label: 'নাইট ভিশন', value: '১০০ মিটার থেকে ১৫০ মিটার পর্যন্ত লেজার আইআর' }
    ],
    keyFeatures: [
      'মোবাইল বা এনভিআর থেকে সরাসরি ক্যামেরা ডানে, বামে, উপরে ও নিচে ঘোরানো',
      'অটো-ট্র্যাকিং: কোনো ব্যক্তি প্রবেশ করলে ক্যামেরা একা একা তাকে ফলো করে',
      'প্রিসেট ক্রুজ প্যাট্রোলিং: একাধিক পয়েন্টে স্বয়ংক্রিয়ভাবে ঘুরে ঘুরে পাহারা দেওয়া'
    ],
    buyingGuide: [
      'বড় মাঠ, মিল-কারখানা, রাইস মিল, গরুর খামার ও ইটভাটার জন্য ১টি পিটিজেড ক্যামেরা ৪টি সাধারণ ক্যামেরার কাজ করে।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['outdoor-cctv-camera', 'ip-camera', 'nvr'],
    relatedServiceSlugs: ['cctv-installation', 'ip-camera-installation'],
    faqs: [
      { question: 'জুম করলে কি ছবির কোয়ালিটি ফেটে যায়?', answer: 'না, অপটিক্যাল জুমে লেন্স মেকানিক্যালি মুভ করে, তাই সর্বোচ্চ জুমেও ছবি ক্রিস্টাল ক্লিয়ার থাকে।' }
    ]
  },
  'outdoor-cctv-camera': {
    slug: 'outdoor-cctv-camera',
    name: 'Outdoor CCTV Camera',
    bnName: 'আউটডোর সিসিটিভি ক্যামেরা',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Weatherproof Outdoor CCTV Camera in Bangladesh',
    metaDescription: 'বাইরের পরিবেশের জন্য রোদ ও বৃষ্টি সহনশীল আউটডোর সিসিটিভি ক্যামেরা। শক্তিশালী মেটাল কেসিং ও নাইট ভিশন। কল: 01790139333।',
    h1: 'All-Weather Outdoor Surveillance Cameras',
    tagline: 'Built to Withstand Heavy Rain, Harsh Heat & Extreme Weather',
    bengaliTagline: 'ভারী বৃষ্টি, প্রখর রোদ ও প্রতিকূল আবহাওয়া প্রতিরোধী মজবুত ক্যামেরা',
    overview: 'বাংলাদেশের গ্রীষ্মের প্রখর রোদ ও বর্ষার একটানা বৃষ্টি সহ্য করার জন্য বিশেষভাবে সিল করা আউটডোর ক্যামেরা। এর লেন্সের ওপর সান-শিল্ড থাকে যা সরাসরি সূর্যের ক্ষতিকর রশ্মি থেকে ভিডিও সেন্সরকে রক্ষা করে।',
    priceNote: '৳১,৮৫০ থেকে শুরু',
    warranty: '১-২ বছরের ওয়ারেন্টি',
    specifications: [
      { label: 'ওয়েদারপ্রুফ রেটিং', value: 'IP66 / IP67 সার্টিফাইড' },
      { label: 'অপারেটিং টেম্পারেচার', value: '-৩০ ডিগ্রি থেকে +৬০ ডিগ্রি সেলসিয়াস' }
    ],
    keyFeatures: [
      'অতিরিক্ত তাপে ক্যামেরা গরম হয়ে হ্যাং বা রিস্টার্ট হওয়া প্রতিরোধক মেটাল চেসিস',
      'নাইট কালার ভিশনে রাতে বাইরের রাস্তায় স্পষ্ট রঙিন ফুটেজ',
      'ওয়াটারপ্রুফ কানেক্টর সুরক্ষা'
    ],
    buyingGuide: [
      'বাইরে ক্যামেরা লাগানোর সময় সবসময় পিভিসি ওয়াটারপ্রুফ জাংশন বক্স ব্যবহার করুন।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['bullet-cctv-camera', 'color-night-vision-camera'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-camera-fitting'],
    faqs: [
      { question: 'বজ্রপাতে ক্যামেরা কি নষ্ট হতে পারে?', answer: 'আমাদের পেশাদার ওয়্যারিংয়ে সার্জ প্রটেকশন ও গ্রাউন্ডিং থাকায় বজ্রপাতের ঝুঁকি অনেক কমে যায়।' }
    ]
  },
  'indoor-cctv-camera': {
    slug: 'indoor-cctv-camera',
    name: 'Indoor CCTV Camera',
    bnName: 'ইনডোর সিসিটিভি ক্যামেরা',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Indoor CCTV Camera Price in Bangladesh',
    metaDescription: 'বাসা, অফিস রুম ও শোকেসের জন্য আকর্ষণীয় ইনডোর সিসিটিভি ক্যামেরা। অডিও ও নাইট ভিশন সহ সেরা রেট। হটলাইন: 01790139333।',
    h1: 'Discreet & High-Quality Indoor Security Cameras',
    tagline: 'Compact, Elegant & Full-Coverage Surveillance for Interior Spaces',
    bengaliTagline: 'ঘরের ভেতরের জন্য কমপ্যাক্ট, মার্জিত ও পরিচ্ছন্ন নজরদারি ক্যামেরা',
    overview: 'ঘরের সিলিং বা ড্রয়িং রুমের দেওয়ালের সাথে চমৎকার মানিয়ে যায় এমন কমপ্যাক্ট ডিজাইনের ইনডোর ক্যামেরা। এটি ছোট আকারের হলেও অত্যন্ত স্পষ্ট অডিও ও ভিডিও রেকর্ড করতে পারে।',
    priceNote: '৳১,৭৫০ থেকে শুরু',
    warranty: '১-২ বছরের অফিশিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'রেজ্যুলেশন', value: '1080p Full HD / 3MP' },
      { label: 'লেন্স', value: '2.8mm আল্ট্রা-ওয়াইড ভিউ (১০৩° ফিল্ড অফ ভিউ)' }
    ],
    keyFeatures: [
      'ছোট আকৃতি—সহজে সবার চোখে পড়ে না',
      'ঘরের ভিতরের ফিসফিস কথার আওয়াজও পরিষ্কার রেকর্ড করার সেন্সিটিভ মাইক',
      'নাইট ভিশনে রাতে বাতি নেভানো থাকলেও স্পষ্ট ব্ল্যাক অ্যান্ড হোয়াইট ভিডিও'
    ],
    buyingGuide: [
      'দোকানের ক্যাশ কাউন্টার ও ড্রয়ার তদারকির জন্য ২.৮ মিমি ইনডোর ক্যামেরা সেরা।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['dome-cctv-camera', 'wifi-camera'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-camera-fitting'],
    faqs: [
      { question: 'ক্যাশ কাউন্টারে টাকার নোট কি স্পষ্ট চেনা যাবে?', answer: 'হ্যাঁ, ক্যাশ কাউন্টারের উপরে ফোকাস করা ৫ মেগাপিক্সেল ক্যামেরায় টাকার নোট স্পষ্টভাবে চেনা যায়।' }
    ]
  },
  'night-vision-camera': {
    slug: 'night-vision-camera',
    name: 'Night Vision Camera',
    bnName: 'নাইট ভিশন সিসিটিভি ক্যামেরা (IR Night Vision)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Night Vision CCTV Camera in Bangladesh',
    metaDescription: 'ঘুটঘুটে অন্ধকারেও স্পষ্ট দেখার ইনফ্রারেড নাইট ভিশন সিসিটিভি ক্যামেরা। Hikvision ও Dahua IR ক্যামেরা সেরা দামে। কল: 01790139333।',
    h1: 'Infrared (IR) Night Vision Surveillance Cameras',
    tagline: 'See in Total Darkness with High-Intensity Smart Infrared LEDs',
    bengaliTagline: 'উচ্চক্ষমতাসম্পন্ন ইনফ্রারেড প্রযুক্তির সাহায্যে ঘুটঘুটে অন্ধকারেও স্পষ্ট নজরদারি',
    overview: 'সম্পূর্ণ আলোহীন বা অন্ধকারেও নিরাপত্তা বজায় রাখতে ইনফ্রারেড (IR) নাইট ভিশন ক্যামেরা অপরিহার্য। আলো কমে যাওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে এর আইআর সেন্সর চালু হয়ে যায় এবং পরিষ্কার ভিডিও ফুটেজ উপহার দেয়।',
    priceNote: '৳১,৭৫০ থেকে শুরু',
    warranty: '১-২ বছরের অফিশিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'IR রেঞ্জ', value: '২০ মিটার থেকে ৬০ মিটার পর্যন্ত স্মার্ট ইনফ্রারেড' },
      { label: 'মিনিমাম ইলুমিনেশন', value: '0.01 Lux @ (F1.2, AGC ON), 0 Lux with IR' }
    ],
    keyFeatures: [
      'স্মার্ট আইআর প্রযুক্তি—কাছে এলে মানুষের মুখ অতিরিক্ত আলোয় সাদা হয়ে যাওয়ার সমস্যা নেই',
      'স্বয়ংক্রিয় ডে/নাইট মেকানিক্যাল আইসিআর (ICR) ফিল্টার সুইচিং',
      '২৪/৭ নিরবচ্ছিন্ন রাত্রিকালীন সুরক্ষা'
    ],
    buyingGuide: [
      'অন্ধকার রাস্তা বা রাতে লাইট বন্ধ থাকে এমন গুদামের জন্য নাইট ভিশন ক্যামেরা মাস্ট।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['color-night-vision-camera', 'outdoor-cctv-camera'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-troubleshooting'],
    faqs: [
      { question: 'রাতে কি ক্যামেরার লাল বাতি জ্বলে থাকে?', answer: 'হ্যাঁ, ইনফ্রারেড ক্যামেরায় রাতে ছোট লাল এলইডি পয়েন্ট দেখা যায়, যা অপরাধীদের দূরে থাকতে বাধ্য করে।' }
    ]
  },
  'color-night-vision-camera': {
    slug: 'color-night-vision-camera',
    name: 'Color Night Vision Camera',
    bnName: 'কালার নাইট ভিশন ক্যামেরা (ColorVu / Full-Color)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Color Night Vision CCTV Camera (Hikvision ColorVu)',
    metaDescription: 'ঘুটঘুটে অন্ধকারেও দিনের মতো রঙিন ছবি দেওয়ার কালার নাইট ভিশন ক্যামেরা। Hikvision ColorVu ও Dahua Full-Color। কল: 01790139333।',
    h1: '24/7 Full-Color Night Vision CCTV Cameras (Hikvision ColorVu)',
    tagline: 'Vivid Color Images Even in Pitch-Black Darkness 24 Hours a Day',
    bengaliTagline: 'দিনের মতো রঙিন ও জীবন্ত ছবি এবার গভীর রাতের অন্ধকারেও ২৪ ঘণ্টা',
    description: 'সাধারণ নাইট ভিশন ক্যামেরায় রাতে সাদা-কালো ছবি আসায় অপরাধীর কাপড়ের রং বা গাড়ির আসল রং বোঝা যায় না। Hikvision ColorVu ও Dahua Full-Color ক্যামেরা F1.0 সুপার অ্যাপারচার লেন্স ও সফট ওয়ার্ম লাইটের মাধ্যমে গভীর রাতেও দিনের মতো রঙিন ছবি রেকর্ড করে।',
    priceNote: '৳২,২০০ থেকে শুরু',
    warranty: '২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'অ্যাপারচার লেন্স', value: 'F1.0 সুপার লার্জ অ্যাপারচার (৪ গুণ বেশি আলো ধরে)' },
      { label: 'নাইট কালার প্রযুক্তি', value: 'সফট ওয়ার্ম লাইট সাপ্লিমেন্ট (২০-৪০ মিটার)' },
      { label: 'রেজ্যুলেশন', value: '2MP / 5MP Full HD Vivid Color' }
    ],
    keyFeatures: [
      '২৪ ঘণ্টা রাত ও দিন সার্বক্ষণিক উজ্জ্বল রঙিন ফুটেজ',
      'অপরাধীর গায়ের পোশাকের রং ও গাড়ির সঠিক রং শনাক্তকরণের শতভাগ নিশ্চয়তা',
      'রাতের বেলা কোমল আলো দিয়ে আশেপাশের পরিবেশ আলোকিত রাখা'
    ],
    buyingGuide: [
      'বাসার প্রধান গেট, পার্কিং ও প্রধান রাস্তার নিরাপত্তার জন্য কালার নাইট ভিশন ক্যামেরা সেরা বিনিয়োগ।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['cctv-camera', 'outdoor-cctv-camera', 'night-vision-camera'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-camera-fitting'],
    faqs: [
      { question: 'কালার নাইট ভিশন ক্যামেরায় কি রাতে লাইট জ্বলে?', answer: 'হ্যাঁ, ঘুটঘুটে অন্ধকার হলে ক্যামেরা থেকে সফট ওয়ার্ম লাইট জ্বলে ওঠে যা রঙিন ছবি তুলতে সাহায্য করে।' }
    ]
  },
  '4g-cctv-camera': {
    slug: '4g-cctv-camera',
    name: '4G CCTV Camera',
    bnName: '৪G সিম সাপোর্টেড সিসিটিভি ক্যামেরা',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • 4G SIM Card CCTV Camera Price in Bangladesh',
    metaDescription: 'ওয়াইফাই বা ব্রডব্যান্ড ছাড়াই সরাসরি ৪G সিমে চলা সিসিটিভি ক্যামেরা। খামার, পুকুর ও প্রত্যন্ত অঞ্চলের জন্য সেরা। কল: 01790139333।',
    h1: '4G Cellular SIM Card Outdoor Security Cameras',
    tagline: 'Surveillance Anywhere Without Broadband WiFi or Fixed Line Internet',
    bengaliTagline: 'ব্রডব্যান্ড ইন্টারনেট বা ওয়াইফাই ছাড়াই যেকোনো দূরবর্তী স্থানে লাইভ নজরদারি',
    description: 'যেসব জায়গায় ওয়াইফাই বা ব্রডব্যান্ড ইন্টারনেট লাইন নেই—যেমন মাছের ঘের, ডেইরি বা পোল্ট্রি ফার্ম, বাগানবাড়ি, কৃষি জমি বা দূরবর্তী নির্মাণ এলাকা—সেখানে ৪G সিম সাপোর্টেড ক্যামেরা সরাসরি গ্রামীণফোন, রবি বা বাংলালিংক সিম দিয়ে চলে।',
    priceNote: '৳৩,৪৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'নেটওয়ার্ক সমর্থন', value: '4G LTE / 3G ন্যানো সিম স্লট' },
      { label: 'স্টোরেজ', value: 'MicroSD কার্ড ২৫৬ জিবি পর্যন্ত' },
      { label: 'বডি', value: 'IP66 ওয়াটারপ্রুফ আউটডোর পিটিজেড বা বুলেট' }
    ],
    keyFeatures: [
      'সিম কার্ড ঢোকালেই চালু—মোবাইলে লাইভ দেখার জন্য ব্রডব্যান্ড লাগে না',
      '৩৬০ ডিগ্রি ঘুরিয়ে খামার বা ঘেরের চারপাশ মোবাইলে দেখার সুবিধা',
      'মোশন ডিটেকশন অ্যালার্ম ও টু-ওয়ে ভয়েস ইন্টারকম'
    ],
    buyingGuide: [
      'মাছের প্রজেক্ট ও খামারের জন্য ৪G সিম ক্যামেরা সেরা আধুনিক সমাধান।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['solar-cctv-camera', 'outdoor-cctv-camera', 'ptz-camera'],
    relatedServiceSlugs: ['cctv-online-view-setup', 'mobile-cctv-viewing'],
    faqs: [
      { question: '৪G ক্যামেরায় মাসে কত এমবি বা জিবি ডাটা লাগে?', answer: 'সারাদিনে কিছুক্ষণ লাইভ দেখলে মাসে মাত্র ৫-১০ জিবি ডাটা প্যাক কিনলেই যথেষ্ট।' }
    ]
  },
  'solar-cctv-camera': {
    slug: 'solar-cctv-camera',
    name: 'Solar CCTV Camera',
    bnName: 'সোলার পাওয়ার সিসিটিভি ক্যামেরা (সৌরশক্তি চালিত)',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Solar Camera Sales and Price',
    metaDescription: 'বিদ্যুৎ ও তার ছাড়াই সৌরশক্তিতে চলা সোলার ৪G সিসিটিভি ক্যামেরা। বিল্ট-ইন ব্যাটারি ও সোলার প্যানেল। কল: 01790139333।',
    h1: '100% Wire-Free Solar Powered 4G Security Cameras',
    tagline: 'Zero Electricity Bills, Zero Wiring & Non-Stop Solar Surveillance',
    bengaliTagline: 'শূন্য বিদ্যুৎ বিল ও কোনো তার ছাড়া সার্বক্ষণিক সৌরশক্তিচালিত নজরদারি',
    description: 'যেখানে বিদ্যুৎ লাইন ও ওয়াইফাই কোনোটিই নেই, সেখানে সোলার সিসিটিভি ক্যামেরা এক যুগান্তকারী সমাধান। এর সাথে থাকে শক্তিশালী সোলার প্যানেল, রিচার্জেবল লিথিয়াম ব্যাটারি এবং ৪G সিম কানেক্টিভিটি।',
    priceNote: '৳৬,৯৫০ থেকে শুরু',
    warranty: '১ বছরের পূর্ণাঙ্গ রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'সোলার প্যানেল', value: '6W / 10W হাই-এফিসিয়েন্সি মনোক্রিস্টালাইন' },
      { label: 'ব্যাটারি', value: '12000mAh - 20000mAh বিল্ট-ইন রিচার্জেবল' },
      { label: 'কানেক্টিভিটি', value: '4G LTE সিম কার্ড ও ওয়াইফাই অপশন' }
    ],
    keyFeatures: [
      'বিদ্যুৎ না থাকলেও সূর্যালোক থেকে চার্জ নিয়ে একটানা দিন-রাত চলে',
      'বৃষ্টিবাদলার দিনেও ব্যাটারি ব্যাকআপে ৩-৫ দিন নিরবচ্ছিন্ন সচল থাকার ক্ষমতা',
      'পিআইআর (PIR) হিউম্যান বডি সেন্সর—মানুষ এলেই রেকর্ড চালু ও অ্যালার্ট'
    ],
    buyingGuide: [
      'বিদ্যুৎবিহীন দূরবর্তী খামার, বিল এলাকা, ফিশারি ও আমবাগানের জন্য শতভাগ পারফেক্ট।'
    ],
    filterCategory: 'CCTV Cameras',
    relatedProductSlugs: ['4g-cctv-camera', 'ptz-camera', 'outdoor-cctv-camera'],
    relatedServiceSlugs: ['cctv-installation', 'mobile-cctv-viewing'],
    faqs: [
      { question: 'বর্ষায় আকাশ মেঘলা থাকলে কি ক্যামেরা বন্ধ হয়ে যাবে?', answer: 'না, এর বড় ধারণক্ষমতার লিথিয়াম ব্যাটারি ৩ থেকে ৫ দিন পর্যন্ত ব্যাকআপ দিতে সক্ষম।' }
    ]
  },

  // 2. Recording Systems (DVR & NVR)
  'dvr': {
    slug: 'dvr',
    name: 'DVR',
    bnName: 'ডিভিআর (Digital Video Recorder)',
    category: 'Recording Systems',
    title: 'Shamim Tech Solution • DVR Recorder Sales and Price',
    metaDescription: 'Hikvision ও Dahua ৪, ৮, ১৬ ও ৩২ চ্যানেল ডিভিআর অরিজিনাল দামে কিনুন। H.265+ কম্প্রেশন ও মোবাইল ক্লাউড লাইভ ভিউ। কল: 01790139333।',
    h1: 'Original CCTV Digital Video Recorders (4/8/16/32 Channel DVR)',
    tagline: 'High-Efficiency Surveillance Hub for HD-TVI, AHD, CVI & Analog Cameras',
    bengaliTagline: 'এইচডি ও অ্যানালগ সিসিটিভি ক্যামেরার জন্য উচ্চক্ষমতার মূল রেকর্ডিং হাব',
    overview: 'ডিভিআর আপনার সব সিসিটিভি ক্যামেরার ভিডিও সিগন্যাল গ্রহণ করে হার্ডডিস্কে রেকর্ড করে এবং মনিটর বা টিভিতে প্রদর্শন করে। Hikvision Turbo HD ও Dahua XVR ডিভিআর অরিজিনাল অফিশিয়াল ওয়ারেন্টি সহ সরবরাহ করে শামীম টেক সলিউশন।',
    priceNote: '৳৩,২০০ থেকে শুরু (৪ চ্যানেল)',
    warranty: '২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'চ্যানেল সংখ্যা', value: '4 Channel, 8 Channel, 16 Channel, 32 Channel' },
      { label: 'এনকোডিং', value: 'H.265 Pro+ / H.265 / H.264+' },
      { label: 'ডিসপ্লে আউটপুট', value: 'HDMI (1080p / 4K) & VGA প্যারালাল আউটপুট' },
      { label: 'হার্ডডিস্ক ইন্টারফেস', value: '1 to 2 SATA Port (up to 10TB per disk)' }
    ],
    keyFeatures: [
      'H.265+ কম্প্রেশন প্রযুক্তি ব্যবহারের ফলে হার্ডডিস্ক স্টোরেজ সাশ্রয়',
      'ফ্রি ক্লাউড পি২পি মোবাইল অ্যাপের মাধ্যমে যেকোনো দেশ থেকে লাইভ দেখা',
      'মোশন ডিটেকশন ও তারিখ/সময় অনুযায়ী সহজে পেছনের ভিডিও প্লেব্যাক'
    ],
    buyingGuide: [
      'ভবিষ্যতে ক্যামেরা বাড়ানোর সম্ভাবনা থাকলে ৪ চ্যানেলের জায়গায় ৮ চ্যানেল ডিভিআর নেওয়া বুদ্ধিমানের কাজ।'
    ],
    filterCategory: 'Recording Systems',
    relatedProductSlugs: ['cctv-dvr-system', 'nvr', 'cctv-hard-disk', 'cctv-camera'],
    relatedServiceSlugs: ['dvr-installation', 'dvr-nvr-technician', 'cctv-system-setup'],
    faqs: [
      { question: 'ডিভিআরের সাথে কি মনিটর দেওয়া হয়?', answer: 'মনিটর আলাদা কিনতে হয় অথবা আপনার বাসার টিভি বা কম্পিউটারের মনিটর এইচডিএমআই দিয়ে লাগানো যায়।' }
    ]
  },
  'nvr': {
    slug: 'nvr',
    name: 'NVR',
    bnName: 'এনভিআর (Network Video Recorder)',
    category: 'Recording Systems',
    title: 'Shamim Tech Solution • NVR Machine Sales and Price',
    metaDescription: 'আইপি ক্যামেরার জন্য 4K PoE এনভিআর। Hikvision ও Dahua ৪, ৮, ১৬ ও ৩২ চ্যানেল এনভিআর সেরা দামে। কল: 01790139333।',
    h1: 'Ultra HD 4K Network Video Recorders (NVR & PoE NVR)',
    tagline: 'High-Bandwidth Centralized Recording for 4K & Multi-Megapixel IP Cameras',
    bengaliTagline: '৪K ও হাই-মেগাপিক্সেল আইপি ক্যামেরার জন্য শক্তিশালী ডিজিটাল নেটওয়ার্ক রেকর্ডার',
    overview: 'এনভিআর ডিজিটাল আইপি ক্যামেরার সাথে নেটওয়ার্ক ক্যাবলের মাধ্যমে সংযুক্ত হয়। এটি সর্বোচ্চ ব্যান্ডউইথ হ্যান্ডেল করে ৪K আল্ট্রা এইচডি কোয়ালিটিতে ভিডিও সংরক্ষণ ও স্মার্ট এআই বিশ্লেষণ করতে পারে।',
    priceNote: '৳৪,৫০০ থেকে শুরু (৪ চ্যানেল PoE)',
    warranty: '২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ব্যান্ডউইথ থ্রুপুট', value: '40Mbps থেকে 320Mbps আল্ট্রা হাই-স্পিড' },
      { label: 'PoE পোর্ট', value: 'বিল্ট-ইন 4 / 8 / 16 PoE Plug-and-Play পোর্ট' },
      { label: 'ডিকোডিং ক্যাপাসিটি', value: '4K Ultra HD @ 30fps ও 5MP মাল্টি-চ্যানেল' }
    ],
    keyFeatures: [
      'PoE সুইচের দরকার পড়ে না—ক্যামেরার তার সরাসরি এনভিআরে প্লাগ করলেই চালু',
      'ফেস ডিটেকশন, লাইন ক্রসিং ও হিউম্যান বডি ট্র্যাকিং ফিচার',
      'ল্যান নেটওয়ার্কে যেকোনো ফ্লোরের আইপি ক্যামেরা সহজে যুক্ত করার সুবিধা'
    ],
    buyingGuide: [
      'কর্পোরেট অফিস বা ব্যাংকের জন্য PoE এনভিআর স্থাপন করলে খরচ ও তারের জটলা অনেক কমে যায়।'
    ],
    filterCategory: 'Recording Systems',
    relatedProductSlugs: ['cctv-nvr-system', 'dvr', 'ip-camera', 'cctv-hard-disk'],
    relatedServiceSlugs: ['nvr-installation', 'ip-camera-installation', 'dvr-nvr-technician'],
    faqs: [
      { question: 'ডিভিআর ও এনভিআরের মূল পার্থক্য কী?', answer: 'ডিভিআর অ্যানালগ বা কোক্সিয়াল ক্যামেরার জন্য এবং এনভিআর ডিজিটাল নেটওয়ার্ক আইপি ক্যামেরার জন্য ব্যবহৃত হয়।' }
    ]
  },
  'cctv-dvr-system': {
    slug: 'cctv-dvr-system',
    name: 'CCTV DVR System',
    bnName: 'সম্পূর্ণ সিসিটিভি ডিভিআর সিস্টেম সেটআপ',
    category: 'Recording Systems',
    title: 'Shamim Tech Solution • Complete CCTV DVR System Package in Bangladesh',
    metaDescription: '৪ ও ৮ ক্যামেরার ফুল সিসিটিভি ডিভিআর প্যাকেজ। ক্যামেরা, ডিভিআর, হার্ডডিস্ক ও পাওয়ার সাপ্লাই সহ রেডি সেটআপ। কল: 01790139333।',
    h1: 'All-in-One Turnkey CCTV DVR Surveillance Systems',
    tagline: 'Pre-Packaged Complete CCTV Kits for Instant Plug-and-Play Security',
    bengaliTagline: 'বাসা ও ব্যবসায়ের জন্য সম্পূর্ণ রেডিমেড সিসিটিভি ডিভিআর সিকিউরিটি প্যাকেজ',
    overview: 'আলাদা আলাদা যন্ত্রাংশ কেনার ঝামেলা ছাড়াই ক্যামেরা, ডিভিআর, সার্ভিলেন্স হার্ডডিস্ক, পাওয়ার সাপ্লাই ও ক্যাবলিং সহ সম্পূর্ণ রেডি প্যাকেজ। টেকনিশিয়ান এসে আপনার প্রতিষ্ঠানে ইনস্টল করে দেবে।',
    priceNote: '৳৯,৯৯০ থেকে শুরু (৪ ক্যামেরা প্যাকেজ)',
    warranty: '১-২ বছরের হার্ডওয়্যার ওয়ারেন্টি ও ফ্রি ইনস্টলেশন সার্ভিস',
    specifications: [
      { label: 'প্যাকেজ অন্তর্ভুক্ত', value: '4/8 CCTV Cameras + 1 DVR + 1TB HDD + Power + Cables' }
    ],
    keyFeatures: [
      'টোটাল সিকিউরিটি বান্ডেল—কোনো গোপন চার্জ ছাড়া সাশ্রয়ী রেট',
      'ইনস্টলেশন ও মোবাইল ভিউ সেটআপ ফ্রি অন্তর্ভুক্ত'
    ],
    buyingGuide: [
      'নতুন বাসা বা দোকানের জন্য কমপ্লিট প্যাকেজ নিলে সময় ও খরচ দুটোই বাঁচে।'
    ],
    filterCategory: 'Recording Systems',
    relatedProductSlugs: ['dvr', 'cctv-camera', 'cctv-hard-disk'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-system-setup'],
    faqs: [
      { question: 'প্যাকেজে কি তারের দাম ধরা থাকে?', answer: 'হ্যাঁ, প্যাকেজে নির্দিষ্ট পরিমাণ ক্যাবল ও সব ধরনের কানেক্টর বিনামূল্যে দেওয়া থাকে।' }
    ]
  },
  'cctv-nvr-system': {
    slug: 'cctv-nvr-system',
    name: 'CCTV NVR System',
    bnName: 'সম্পূর্ণ আইপি সিসিটিভি এনভিআর সিস্টেম',
    category: 'Recording Systems',
    title: 'Shamim Tech Solution • Complete IP CCTV NVR System Package in Bangladesh',
    metaDescription: 'হাই-এন্ড আইপি ক্যামেরা ও PoE এনভিআর সম্পূর্ণ সিকিউরিটি সিস্টেম প্যাকেজ। ক্রিস্টাল ক্লিয়ার ৪K নজরদারি। কল: 01790139333।',
    h1: 'Enterprise IP Camera & PoE NVR Complete Security Systems',
    tagline: 'Pure Digital IP Surveillance Bundles Engineered for Mission-Critical Sites',
    bengaliTagline: 'উচ্চ নিরাপত্তার জন্য প্রিমিয়াম ডিজিটাল আইপি এনভিআর সিকিউরিটি বান্ডেল',
    description: 'উচ্চমানের ডিজিটাল নজরদারির জন্য আইপি ক্যামেরা, PoE এনভিআর, সার্ভার হার্ডডিস্ক ও ক্যাট৬ নেটওয়ার্কিং ক্যাবলিং সহ সম্পূর্ণ টার্নকি প্যাকেজ সমাধান।',
    priceNote: '৳১৬,৫০০ থেকে শুরু (৪ ক্যামেরা আইপি প্যাকেজ)',
    warranty: '২ বছরের ফুল ওয়ারেন্টি',
    specifications: [
      { label: 'ক্যামেরা রেজ্যুলেশন', value: '3MP / 5MP Ultra Clear Digital IP' },
      { label: 'এনভিআর', value: 'PoE 4K Network Video Recorder' }
    ],
    keyFeatures: [
      'সবচেয়ে নিখুঁত ছবি ও আধুনিক এআই সিকিউরিটি ফিচার',
      'ভবিষ্যতে যেকোনো সময় নতুন ক্যামেরা যোগ করার সীমাহীন সুযোগ'
    ],
    buyingGuide: [
      'ফ্যাক্টরি, শপিং মল, বড় অফিস ও গুদামের জন্য এনভিআর সিস্টেমই আদর্শ।'
    ],
    filterCategory: 'Recording Systems',
    relatedProductSlugs: ['nvr', 'ip-camera', 'cat6-cable'],
    relatedServiceSlugs: ['ip-camera-installation', 'nvr-installation'],
    faqs: [
      { question: 'এনভিআর সিস্টেমে কি ক্যাবল আলাদা কিনতে হয়?', answer: 'প্যাকেজে প্রয়োজনীয় প্রিমিয়াম ক্যাট৬ ক্যাবল ও কানেক্টর অন্তর্ভুক্ত থাকে।' }
    ]
  },

  // 3. Storage & Power
  'cctv-hard-disk': {
    slug: 'cctv-hard-disk',
    name: 'CCTV Hard Disk',
    bnName: 'সিসিটিভি হার্ডডিস্ক (CCTV Surveillance Hard Disk)',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • CCTV Surveillance Hard Disk Sales and Price',
    metaDescription: 'Seagate SkyHawk ও WD Purple সিসিটিভি সার্ভিলেন্স হার্ডডিস্ক সেরা দামে। ২৪/৭ নিরবচ্ছিন্ন রেকর্ডিং ও ২-৩ বছরের ওয়ারেন্টি। কল: 01790139333।',
    h1: 'Genuine 24/7 CCTV Surveillance Hard Drives (1TB to 10TB)',
    tagline: 'Engineered for Heavy Continuous 24/7 Video Writing Without Dropouts',
    bengaliTagline: '২৪/৭ নিরবচ্ছিন্ন ভারী ভিডিও রেকর্ডিংয়ের জন্য বিশেষভাবে প্রস্তুত হার্ডডিস্ক',
    overview: 'সিসিটিভি ডিভিআর ও এনভিআরে দিন-রাত ২৪ ঘণ্টা ভিডিও রাইট হতে থাকে। সাধারণ পিসি হার্ডডিস্ক এই লোড নিতে না পেরে নষ্ট হয়ে যায়। Seagate SkyHawk ও Western Digital (WD) Purple সার্ভিলেন্স হার্ডডিস্ক অলওয়েজ-অন সিস্টেমের জন্য ১০০% নিরাপদ।',
    priceNote: '৳৩,৪০০ থেকে শুরু (1TB)',
    warranty: '২ থেকে ৩ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'ক্যাপাসিটি', value: '1TB, 2TB, 4TB, 6TB, 8TB, 10TB' },
      { label: 'ইন্টারফেস', value: 'SATA 6Gb/s' },
      { label: 'ক্যাশ মেমোরি', value: '64MB / 256MB হাই-স্পিড বাফার' },
      { label: 'ওয়ার্কলোড রেটিং', value: '180TB/year ভারী ডাটা রেকর্ডিং ক্ষমতা' }
    ],
    keyFeatures: [
      'ImagePerfect / AllFrame ফার্মওয়্যার—কোনো ফ্রেম ড্রপ বা ভিডিও মিসিং হয় না',
      'কম বিদ্যুৎ খরচ ও নিম্ন তাপমাত্রায় দীর্ঘস্থায়ী চলার ক্ষমতা',
      'একটানা ৩-৫ বছর কোনো এরর ছাড়া চলার নিশ্চয়তা'
    ],
    buyingGuide: [
      '৪ ক্যামেরায় ১৫-২০ দিনের রেকর্ডিংয়ের জন্য ১ টিবি এবং ৩০-৪৫ দিনের জন্য ২ টিবি হার্ডডিস্ক নিন।'
    ],
    filterCategory: 'Storage & Power',
    relatedProductSlugs: ['surveillance-hard-disk', 'dvr', 'nvr'],
    relatedServiceSlugs: ['dvr-installation', 'cctv-system-setup'],
    faqs: [
      { question: 'হার্ডডিস্ক ফুল হয়ে গেলে কি নিজে থেকেই পুরোনো ভিডিও ডিলিট হয়?', answer: 'হ্যাঁ, অটো-ওভাররাইট ফিচারের মাধ্যমে সবচেয়ে পুরোনো দিনের ভিডিও মুছে গিয়ে নতুন ভিডিও রেকর্ড হতে থাকে।' }
    ]
  },
  'surveillance-hard-disk': {
    slug: 'surveillance-hard-disk',
    name: 'Surveillance Hard Disk',
    bnName: 'সার্ভিলেন্স হার্ড ড্রাইভ (WD Purple / Seagate SkyHawk)',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • Surveillance Hard Drive Price in Bangladesh',
    metaDescription: 'Seagate SkyHawk ও WD Purple অরিজিনাল সার্ভিলেন্স হার্ডডিস্ক। ফ্রেম লস মুক্ত সর্বোচ্চ নির্ভরযোগ্যতা। কল: 01790139333।',
    h1: 'Enterprise Surveillance Hard Drives for Security Recorders',
    tagline: 'Zero Frame Drops, Robust Thermal Tolerance & High Workload Ratings',
    bengaliTagline: 'ফ্রেম লসমুক্ত নিরবচ্ছিন্ন পারফরম্যান্স ও উচ্চ তাপ সহনশীল ড্রাইভ',
    description: 'সার্ভিলেন্স গ্রেড হার্ডডিস্কে থাকে ভাইব্রেশন সেন্সর ও উন্নত ফার্মওয়্যার যা একসাথে ৩২ থেকে ৬৪টি হাই-ডেফিনিশন ক্যামেরার ভিডিও কোনো ল্যাগ ছাড়াই সংরক্ষণ করতে পারে।',
    priceNote: '৳৩,৪০০ থেকে শুরু',
    warranty: '২-৩ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ব্র্যান্ড', value: 'Seagate SkyHawk / Western Digital Purple' },
      { label: 'ক্যামেরা সাপোর্ট', value: 'সর্বোচ্চ ৬৪টি এইচডি ক্যামেরা একসাথে হ্যান্ডেলিং' }
    ],
    keyFeatures: [
      '২৪/৭ নিরবচ্ছিন্ন সার্ভিলেন্স অপারেশনের জন্য টেস্টেড ও সার্টিফাইড',
      'ভাইব্রেশন রেজিস্ট্যান্স ও শক-প্রুফ চেসিস'
    ],
    buyingGuide: [
      'সিসিটিভি রেকর্ডিংয়ের ক্ষেত্রে রিফারবিশড বা নকল ড্রাইভ এড়িয়ে অফিশিয়াল ড্রাইভ কিনুন।'
    ],
    filterCategory: 'Storage & Power',
    relatedProductSlugs: ['cctv-hard-disk', 'dvr', 'nvr'],
    relatedServiceSlugs: ['dvr-installation', 'cctv-technician'],
    faqs: [
      { question: 'আসল ও নকল হার্ডডিস্ক কীভাবে চিনব?', answer: 'আমাদের প্রতিটি হার্ডডিস্কে অফিশিয়াল বাংলাদেশ ডিস্ট্রিবিউটর হলোগ্রাম স্টিকার ও অফিসিয়াল সিরিয়াল নম্বর থাকে।' }
    ]
  },
  'cctv-power-supply': {
    slug: 'cctv-power-supply',
    name: 'CCTV Power Supply',
    bnName: 'সিসিটিভি সেন্ট্রাল পাওয়ার সাপ্লাই বক্স',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • CCTV Central Power Supply Box Price in Bangladesh',
    metaDescription: 'সিসিটিভি সেন্ট্রাল পাওয়ার সাপ্লাই বক্স (4/8/16 Channel, 12V 5A/10A/20A/30A)। শর্ট সার্কিট ও ভোল্টেজ প্রটেকশন। কল: 01790139333।',
    h1: 'CCTV Centralized Power Supply Units (12V 5A, 10A, 20A, 30A)',
    tagline: 'Clean Centralized Power Distribution with Individual Fuse Protection',
    bengaliTagline: 'পৃথক ফিউজ প্রটেকশন সহ সেন্ট্রালাইজড ১২ ভোল্ট পাওয়ার ডিস্ট্রিবিউশন',
    overview: 'প্রতিটি ক্যামেরার জন্য আলাদা আলাদা অ্যাডাপ্টার না লাগিয়ে একটি সেন্ট্রাল পাওয়ার সাপ্লাই বক্স ব্যবহার করলে ওয়্যারিং পরিপাটি থাকে এবং ভোল্টেজ ড্রপ হয় না। এতে প্রতিটি চ্যানেলে আলাদা পিটিসি ফিউজ সুরক্ষা থাকে।',
    priceNote: '৳৮৫০ থেকে শুরু (5A)',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ইনপুট ভোল্টেজ', value: 'AC 110V - 240V ইউনিভার্সাল' },
      { label: 'আউটপুট ভোল্টেজ', value: 'DC 12V স্ট্যাবিলাইজড (অ্যাডজাস্টেবল)' },
      { label: 'আউটপুট চ্যানেল', value: '4 Channel (5A), 9 Channel (10A), 18 Channel (20A/30A)' }
    ],
    keyFeatures: [
      'প্রতিটি ক্যামেরার জন্য আলাদা ফিউজ—একটি শর্ট হলেও বাকি ক্যামেরা বন্ধ হয় না',
      'ভোল্টেজ ড্রপ অ্যাডজাস্টার নব—দূরবর্তী ক্যামেরায় ভোল্টেজ বুস্ট করার সুবিধা',
      'কুলিং ফ্যান ও মেটাল লক-কি সহ সুরক্ষিত বক্স'
    ],
    buyingGuide: [
      '৪ ক্যামেরার জন্য ৫ অ্যাম্পিয়ার, ৮ ক্যামেরার জন্য ১০ অ্যাম্পিয়ার এবং ১৬ ক্যামেরার জন্য ২০ অ্যাম্পিয়ার বক্স নিন।'
    ],
    filterCategory: 'Storage & Power',
    relatedProductSlugs: ['cctv-adapter', 'cctv-cable', 'cctv-camera'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-troubleshooting'],
    faqs: [
      { question: 'সেন্ট্রাল পাওয়ার সাপ্লাই ব্যবহারের মূল সুবিধা কী?', answer: 'একটি মাত্র প্লাগ ব্যবহার করে সব ক্যামেরায় বিদ্যুৎ দেওয়া যায় এবং তারের বিশৃঙ্খলা এড়ানো যায়।' }
    ]
  },
  'cctv-adapter': {
    slug: 'cctv-adapter',
    name: 'CCTV Adapter',
    bnName: 'সিসিটিভি পাওয়ার অ্যাডাপ্টার (12V 1A / 2A / 2.5A)',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • 12V 2A CCTV Camera Power Adapter Price in Bangladesh',
    metaDescription: '১২ ভোল্ট ২ অ্যাম্পিয়ার সিসিটিভি ক্যামেরা ও ওয়াইফাই রাউটার পাওয়ার অ্যাডাপ্টার। কপার ট্রান্সফরমার ও ওভারলোড প্রটেকশন। কল: 01790139333।',
    h1: '12V CCTV Camera & Router Power Adapters (1A, 2A, 2.5A)',
    tagline: 'Pure Copper Coils, Surge Protection & Consistent DC Voltage Output',
    bengaliTagline: 'পিওর কপার কয়েল, সার্জ প্রটেকশন ও স্থিতিশীল ডিসি ১২ ভোল্ট বিদ্যুৎ প্রবাহ',
    overview: 'সিসিটিভি ক্যামেরা দীর্ঘস্থায়ী করতে এবং রাতের বেলায় নাইট ভিশনে ক্যামেরা রিস্টার্ট হওয়া বন্ধ করতে ভালো মানের ১২ ভোল্ট পাওয়ার অ্যাডাপ্টার অপরিহার্য।',
    priceNote: '৳২৫০ থেকে শুরু',
    warranty: '৬ মাসের রিপ্লেসমেন্ট গ্যারান্টি',
    specifications: [
      { label: 'আউটপুট', value: 'DC 12V 2.0A / 2.5A' },
      { label: 'কানেক্টর পিন', value: '5.5mm x 2.1mm স্ট্যান্ডার্ড ডিসি জ্যাক' }
    ],
    keyFeatures: [
      'স্মার্ট আইসি প্রটেকশন—হাই ভোল্টেজ বা বজ্রপাতে ক্যামেরা সুরক্ষিত রাখে',
      'হিট-প্রুফ ফায়ার রিটার্ড্যান্ট প্লাস্টিক বডি'
    ],
    buyingGuide: [
      'নাইট কালার বা ওয়াইফাই ক্যামেরার জন্য কমপক্ষে ২ অ্যাম্পিয়ারের অ্যাডাপ্টার ব্যবহার করুন।'
    ],
    filterCategory: 'Storage & Power',
    relatedProductSlugs: ['cctv-power-supply', 'cctv-camera', 'dc-connector'],
    relatedServiceSlugs: ['cctv-troubleshooting', 'cctv-technician'],
    faqs: [
      { question: 'খারাপ অ্যাডাপ্টার ব্যবহারের ফলে ক্যামেরার কী ক্ষতি হতে পারে?', answer: 'ভোল্টেজ ফ্ল্যাকচুয়েশনের কারণে ক্যামেরার সেন্সর নষ্ট হতে পারে অথবা রাতে ক্যামেরা নিজে নিজেই বন্ধ হয়ে যেতে পারে।' }
    ]
  },

  // 4. Cables & Connectors
  'cctv-video-balun': {
    slug: 'cctv-video-balun',
    name: 'CCTV Video Balun',
    bnName: 'সিসিটিভি প্যাসিভ ভিডিও ব্যালুন (Video Balun)',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • CCTV Passive Video Balun Pair Price in Bangladesh',
    metaDescription: 'ক্যাট৬ ইন্টারনেটের তার দিয়ে সিসিটিভি ক্যামেরা চালানোর প্যাসিভ ভিডিও ব্যালুন। ৩০০ মিটার কভারেজ ও ক্রিস্টাল ক্লিয়ার সিগন্যাল। কল: 01790139333।',
    h1: 'Passive HD CCTV Video Balun Transceivers',
    tagline: 'Run 4 CCTV Cameras Over a Single CAT6 Cable Over 300+ Meters',
    bengaliTagline: 'একটি ক্যাট৬ ক্যাবল দিয়ে ৪টি ক্যামেরা চালানোর সাশ্রয়ী ভিডিও ব্যালুন',
    overview: 'ভারী কোক্সিয়াল তারের বদলে সাশ্রয়ী ক্যাট৬ নেটওয়ার্ক ক্যাবল ব্যবহার করে দূর-দূরান্তে সিসিটিভি ক্যামেরা সংযোগের জন্য ভিডিও ব্যালুন অত্যন্ত জনপ্রিয়। এতে একই তারে ৪টি ক্যামেরার ভিডিও সিগন্যাল পাঠানো যায়।',
    priceNote: '৳১৮০ / জোড়া',
    warranty: 'টেস্টিং ওয়ারেন্টি',
    specifications: [
      { label: 'ট্রান্সমিশন দূরত্ব', value: 'TVI/CVI/AHD 720p/1080p ২৫০-৩০০ মিটার' },
      { label: 'কানেক্টর', value: 'Gold Plated BNC Male + Push Pin Terminal Block' }
    ],
    keyFeatures: [
      'অ্যান্টি-স্ট্যাটিক ও ৬০ ডিবি ক্রস-টক নয়েজ রিডাকশন ফিল্টার',
      'স্ক্রু ছাড়া পুশ-পিন টার্মিনালে কয়েক সেকেন্ডেই তার সংযোগ'
    ],
    buyingGuide: [
      'বড় বিল্ডিং বা ১০০ মিটারের বেশি দূরত্বের জন্য ভিডিও ব্যালুন ব্যবহার করলে তারের খরচ অর্ধেক কমে যায়।'
    ],
    filterCategory: 'Cables & Connectors',
    relatedProductSlugs: ['bnc-connector', 'cctv-cable', 'cat6-cable'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-technician'],
    faqs: [
      { question: 'একটি ক্যাট৬ তার দিয়ে কয়টি ক্যামেরা চালানো যায়?', answer: 'ক্যাট৬ তারে ৪ জোড়া (৮টি) তার থাকে, তাই ভিডিও ব্যালুন দিয়ে ৪টি ক্যামেরা অনায়াসে চালানো যায়।' }
    ]
  },
  'cctv-cable': {
    slug: 'cctv-cable',
    name: 'CCTV Cable',
    bnName: 'সিসিটিভি কোঅক্সিয়াল ও কম্বাইন্ড ক্যাবল (3+1 / RG6)',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • CCTV 3+1 & RG6 Coaxial Cable Price in Bangladesh',
    metaDescription: 'পিওর কপার ৩+১ কম্বাইন্ড সিসিটিভি ক্যাবল ও RG6 কোঅক্সিয়াল ক্যাবল। ৯০ ও ১৮০ মিটার রোল সেরা দামে। কল: 01790139333।',
    h1: 'Heavy-Duty 3+1 & RG6 CCTV Coaxial Cables',
    tagline: 'Zero-Signal Loss, Pure Copper Shielding & Weatherproof Insulation',
    bengaliTagline: 'জিরো সিগন্যাল লস, পিওর কপার শিল্ডিং ও ওয়েদারপ্রুফ শক্তিশালী তার',
    overview: 'ক্যামেরার ছবির স্বচ্ছতা ও স্থায়িত্ব নির্ভর করে ক্যাবলের মানের ওপর। আমাদের ৩+১ কম্বাইন্ড ক্যাবলে ভিডিও এবং পাওয়ার উভয় তার একসাথে থাকায় অতিরিক্ত তার টানার ঝামেলা থাকে না।',
    priceNote: '৳১৮ / মিটার (৯০ মিটার রোল শুরু ৳১,৬৫০ থেকে)',
    warranty: 'ক্যাবল কোয়ালিটি শতভাগ নিশ্চিত',
    specifications: [
      { label: 'টাইপ', value: '3+1 Composite (Video + 12V Power + Audio)' },
      { label: 'কন্ডাক্টর মেটেরিয়াল', value: 'পিওর কপার (Pure Copper / BC)' },
      { label: 'ইনসুলেশন', value: 'ভার্জিন পিভিসি ও অ্যালুমিনিয়াম ফয়েল শিল্ডিং' }
    ],
    keyFeatures: [
      'বাইরের কোনো ইলেক্ট্রোম্যাগনেটিক নয়েজ ভিডিওতে দাগ বা দাগাদাগি তৈরি করে না',
      'রোদ-বৃষ্টিতে সহজে তার শক্ত হয়ে ফেটে যায় না'
    ],
    buyingGuide: [
      'সিসিটিভির জন্য সবসময় পিওর কপার ৩+১ ক্যাবল ব্যবহার করুন।'
    ],
    filterCategory: 'Cables & Connectors',
    relatedProductSlugs: ['bnc-connector', 'dc-connector', 'cat6-cable'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-camera-fitting'],
    faqs: [
      { question: 'কপার ও সিসিএ তারের পার্থক্য কী?', answer: 'কপার তারে ভোল্টেজ ড্রপ হয় না ও ১০ বছর টেকে, যেখানে সিসিএ (তামা প্রলেপ) তারে ১-২ বছরে জং ধরে।' }
    ]
  },
  'cctv-connectors': {
    slug: 'cctv-connectors',
    name: 'CCTV Connectors',
    bnName: 'সিসিটিভি কানেক্টরস ও এক্সেসরিজ সেট',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • CCTV BNC & DC Connectors Price in Bangladesh',
    metaDescription: 'সিসিটিভি ক্যামেরার জন্য কপার বিএনসি (BNC) ও ডিসি (DC) মেল-ফিমেল কানেক্টর। লুজ কানেকশন ও নয়েজমুক্ত। কল: 01790139333।',
    h1: 'High-Conductivity CCTV BNC & DC Connectors',
    tagline: 'Corrosion-Resistant Gold Pins for Solid, Flicker-Free Video Connections',
    bengaliTagline: 'জংরোধী গোল্ড পিন ও ফ্লিকারিংমুক্ত মজবুত ভিডিও কানেকশন',
    description: 'সিসিটিভিতে ভিডিও কাঁপাকাঁপি বা ক্যামেরা অফলাইন হওয়ার অন্যতম প্রধান কারণ হলো নিম্নমানের কানেক্টর। আমাদের হেভি-ডিউটি কপার স্ক্রু-টাইপ কানেক্টরে সোল্ডারিং ছাড়াই দীর্ঘস্থায়ী সংযোগ নিশ্চিত হয়।',
    priceNote: '৳৩০ থেকে শুরু',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'কানেক্টর টাইপ', value: 'BNC Screw Type, DC Male & DC Female' }
    ],
    keyFeatures: [
      'স্ক্রু টাইপ—কোনো তাতাল বা সোল্ডারিং ছাড়াই স্ক্রু ড্রাইভার দিয়ে সহজে লাগানো যায়',
      'গোল্ড প্লেটেড সেন্টার পিন—সিগন্যাল লস শূন্যের কোঠায় রাখে'
    ],
    buyingGuide: [
      'প্রতিটি ক্যামেরার জন্য ২টি বিএনসি ও ১টি ডিসি মেল কানেক্টর প্রয়োজন হয়।'
    ],
    filterCategory: 'Cables & Connectors',
    relatedProductSlugs: ['bnc-connector', 'dc-connector', 'cctv-cable'],
    relatedServiceSlugs: ['cctv-troubleshooting', 'cctv-installation'],
    faqs: [
      { question: 'কানেক্টর খারাপ হলে ক্যামেরায় কী সমস্যা হয়?', answer: 'ছবিতে দাগ আসা, কালার নষ্ট হওয়া বা হাত দিলে ছবি চলে যাওয়া কানেক্টর সমস্যার লক্ষণ।' }
    ]
  },
  'bnc-connector': {
    slug: 'bnc-connector',
    name: 'BNC Connector',
    bnName: 'কপার বিএনসি কানেক্টর (BNC Video Connector)',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • Heavy Duty Copper BNC Connector for CCTV',
    metaDescription: 'সিসিটিভি ক্যামেরার জন্য গোল্ড-পিন কপার বিএনসি কানেক্টর। স্ক্রু টাইপ মজবুত গ্রিপ। সেরা দামে কিনুন। কল: 01790139333।',
    h1: 'Gold-Plated Screw Terminal CCTV BNC Connectors',
    tagline: 'Locking Bayonet Design for Secure, Vibration-Proof Video Transmission',
    bengaliTagline: 'নিরাপদ লকিং ডিজাইন ও ভাইব্রেশন-প্রুফ নিরবচ্ছিন্ন ভিডিও ট্রান্সমিশন',
    overview: 'ডিভিআর এবং সিসিটিভি ক্যামেরার ভিডিও পোর্টের সাথে তার সংযোগ করতে বিএনসি (Bayonet Neill–Concelman) কানেক্টর ব্যবহৃত হয়। এর টুইস্ট-লক মেকানিজম তারকে দুর্ঘটনাবশত খুলে যাওয়া থেকে রক্ষা করে।',
    priceNote: '৳৩৫ / পিস',
    warranty: 'টেস্টিং গ্যারান্টি',
    specifications: [
      { label: 'মেটেরিয়াল', value: 'জিংক অ্যালয় বডি ও পিওর কপার কোর পিন' },
      { label: 'টার্মিনেশন', value: 'স্ক্রু টাইপ ফিক্সেশন' }
    ],
    keyFeatures: [
      'টুইস্ট-লক মেকানিজম—টান লাগলেও খুলে যায় না',
      '১০৮০পি ও ৫ মেগাপিক্সেল হাই-ফ্রিকোয়েন্সি ভিডিও সিগন্যালে নয়েজমুক্ত পারফরম্যান্স'
    ],
    buyingGuide: [
      'লুজ কানেকশন এড়াতে সবসময় হেভি-মেটাল স্ক্রু বিএনসি ব্যবহার করুন।'
    ],
    filterCategory: 'Cables & Connectors',
    relatedProductSlugs: ['cctv-connectors', 'dc-connector', 'cctv-video-balun'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-technician'],
    faqs: [
      { question: 'একটি ক্যামেরায় কয়টি বিএনসি কানেক্টর লাগে?', answer: 'ক্যামেরার মাথায় ১টি এবং ডিভিআরের পিছনে ১টি—মোট ২টি বিএনসি কানেক্টর লাগে।' }
    ]
  },
  'dc-connector': {
    slug: 'dc-connector',
    name: 'DC Connector',
    bnName: 'ডিসি পাওয়ার কানেক্টর (12V DC Male / Female)',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • 12V DC Male & Female Power Connector for CCTV',
    metaDescription: '১২ ভোল্ট সিসিটিভি পাওয়ার ডিসি মেল ও ফিমেল কানেক্টর। স্ক্রু টার্মিনাল সহ সহজ সংযোগ। কল: 01790139333।',
    h1: 'Heavy-Duty 12V DC Power Jack Adapters (Male & Female)',
    tagline: 'Firm Clamp Terminals for Stable 12V Power Delivery Without Sparks',
    bengaliTagline: 'স্পার্কমুক্ত নিরবচ্ছিন্ন ১২ ভোল্ট বিদ্যুৎ সরবরাহের জন্য মজবুত ডিসি টার্মিনাল',
    overview: 'সিসিটিভি ক্যামেরায় ১২ ভোল্ট পাওয়ার সাপ্লাই বা অ্যাডাপ্টার থেকে বিদ্যুৎ দিতে ডিসি জ্যাক ব্যবহৃত হয়। স্ক্রু টার্মিনাল থাকায় তার পেঁচানোর ঝামেলা ও শর্ট সার্কিট ঝুঁকি থাকে না।',
    priceNote: '৳২৫ / পিস',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'ডায়ামিটার', value: 'Outer 5.5mm, Inner 2.1mm স্ট্যান্ডার্ড ডিসি প্লাগ' }
    ],
    keyFeatures: [
      'পজিটিভ (+) ও নেগেটিভ (-) স্পষ্ট মার্কিং করা স্ক্রু টার্মিনাল',
      'স্পার্ক ও ভোল্টেজ ড্রপ সম্পূর্ণ প্রতিরোধক'
    ],
    buyingGuide: [
      'তার টেপ দিয়ে জোড়াতালি না দিয়ে ডিসি কানেক্টর ব্যবহার করলে ক্যামেরা সুরক্ষিত থাকে।'
    ],
    filterCategory: 'Cables & Connectors',
    relatedProductSlugs: ['cctv-connectors', 'bnc-connector', 'cctv-adapter'],
    relatedServiceSlugs: ['cctv-installation', 'cctv-troubleshooting'],
    faqs: [
      { question: 'ডিসি কানেক্টরের প্লাস-মাইনাস উল্টো লাগালে কী হবে?', answer: 'ক্যামেরা চালু হবে না। তাই চিহ্নিত পজিটিভ ও নেগেটিভ দেখেই স্ক্রু টাইট দিতে হয়।' }
    ]
  },
  'cctv-accessories': {
    slug: 'cctv-accessories',
    name: 'CCTV Accessories',
    bnName: 'সিসিটিভি ক্যামেরা এক্সেসরিজ ও মাউন্টিং সরঞ্জাম',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • CCTV Accessories Sales and Price',
    metaDescription: 'সিসিটিভি ওয়াটারপ্রুফ জাংশন বক্স, মাইক্রোফোন, এইচডিএমআই কেবল ও মাউন্টিং ব্র্যাকেট। সেরা রেটে কিনুন। কল: 01790139333।',
    h1: 'Complete Range of Professional CCTV Accessories',
    tagline: 'Waterproof Junction Boxes, Audio Microphones, HDMI & Brackets',
    bengaliTagline: 'ওয়াটারপ্রুফ জাংশন বক্স, অডিও মাইক্রোফোন, এইচডিএমআই ও মাউন্টিং সরঞ্জাম',
    overview: 'একটি টেকসই ও পরিপাটি সিসিটিভি সিস্টেমের জন্য প্রয়োজন ওয়াটারপ্রুফ জাংশন বক্স, অডিও মাইক্রোফোন, এইচডিএমআই ক্যাবল ও মাউন্টিং ব্র্যাকেট। সকল প্রয়োজনীয় এক্সেসরিজ এক ছাদের নিচে সরবরাহ করে শামীম টেক সলিউশন।',
    priceNote: '৳৫০ থেকে শুরু',
    warranty: 'জেনুইন প্রোডাক্ট নিশ্চয়তা',
    specifications: [
      { label: 'আইটেমসমূহ', value: 'Junction Box 4x4, CCTV Audio Mic, 4K HDMI Cable, Pole Bracket' }
    ],
    keyFeatures: [
      'ওয়াটারপ্রুফ পিভিসি জাংশন বক্স—বৃষ্টির পানি থেকে কানেক্টরকে শতভাগ নিরাপদ রাখে',
      'সিসিটিভি স্পেশাল হাই-সেনসিটিভিটি অডিও মাইক্রোফোন—স্পষ্ট সাউন্ড রেকর্ডিং',
      '৪K আল্ট্রা এইচডি গোল্ড প্লেটেড এইচডিএমআই ক্যাবল'
    ],
    buyingGuide: [
      'বাইরের প্রতিটি ক্যামেরার জন্য একটি করে ওয়াটারপ্রুফ জাংশন বক্স ব্যবহার করা বাধ্যতামূলক।'
    ],
    filterCategory: 'Cables & Connectors',
    relatedProductSlugs: ['cctv-connectors', 'cctv-cable', 'cctv-power-supply'],
    relatedServiceSlugs: ['cctv-camera-fitting', 'cctv-installation'],
    faqs: [
      { question: 'ক্যামেরায় কি আলাদা মাইক্রোফোন লাগানো যায়?', answer: 'হ্যাঁ, ডিভিআরের অডিও-ইন পোর্টে এক্সটার্নাল মাইক্রোফোন লাগিয়ে কথা রেকর্ড করা যায়।' }
    ]
  },

  // 5. PABX & Intercom Products
  'pbx-system': {
    slug: 'pbx-system',
    name: 'PBX System',
    bnName: 'পিবিএক্স টেলিফোন সিস্টেম (PABX System)',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • PABX System Price in Bangladesh (Panasonic, IKE)',
    metaDescription: 'অফিস ও ফ্যাক্টরির জন্য প্যানাসনিক ও চায়না পিবিএক্স টেলিফোন সিস্টেম। অভ্যন্তরীণ ফ্রি কলিং ও ১-২ বছরের ওয়ারেন্টি। কল: 01790139333।',
    h1: 'Original PBX / PABX Business Telephone Systems',
    tagline: 'Efficient Internal Calling, Call Transfer & Auto-Attendant for Offices',
    bengaliTagline: 'অফিসের অভ্যন্তরীণ কলিং, কল ট্রান্সফার ও অটো-অ্যাটেনডেন্ট সিস্টেম',
    description: 'কর্মীদের মধ্যে তাৎক্ষণিক ফ্রি যোগাযোগ এবং গ্রাহকদের ফোন কল স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট কর্মকর্তার টেবিলে পৌঁছে দিতে পিবিএক্স সিস্টেম অপরিহার্য। Panasonic ও IKE ব্র্যান্ডের অরিজিনাল পিবিএক্স মেশিন সরবরাহ করে শামীম টেক সলিউশন।',
    priceNote: '৳৬,৫০০ থেকে শুরু (১ লাইন ইনপুট, ৮ এক্সটেনশন)',
    warranty: '১-২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ক্যাপাসিটি', value: '1 CO Line / 8 Extension, 2x16, 3x8, 8x24, up to 128 Ext' },
      { label: 'ফিচার', value: 'DISA Auto-Attendant, Call Transfer, Conference, Caller ID' }
    ],
    keyFeatures: [
      'অফিসের ভেতরে যত ইচ্ছা কথা বলুন—কোনো বিল বা চার্জ নেই',
      'বাইরের কল রিসিভ করে যেকোনো ডেস্কে ট্রান্সফার করার সহজ কোড',
      'অফিস বন্ধের সময় অটোমেটিক নাইট মোড ভয়েস মেসেজ'
    ],
    buyingGuide: [
      'ছোট অফিসের জন্য ৮ বা ১৬ লাইনের এবং বড় অফিসের জন্য ২৪ বা ৩২ লাইনের পিবিএক্স সেরা।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['pbx-machine', 'intercom-telephone', 'office-intercom-system'],
    relatedServiceSlugs: ['pbx-installation', 'pbx-system-setup'],
    faqs: [
      { question: 'পিবিএক্স মেশিনে কি কলার আইডি (Caller ID) দেখাবে?', answer: 'হ্যাঁ, আমাদের সব আধুনিক পিবিএক্স মেশিনে কল আসলে ডিসপ্লে ফোনে কলারের নাম্বার দেখা যায়।' }
    ]
  },
  'pbx-machine': {
    slug: 'pbx-machine',
    name: 'PBX Machine',
    bnName: 'পিবিএক্স এক্সচেঞ্জ মেশিন (PABX Main Unit)',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • PABX Machine Price in Bangladesh (8 to 64 Lines)',
    metaDescription: 'Panasonic KX-TES824 ও IKE পিবিএক্স মেইন মেশিন সেরা দামে। জেনুইন হার্ডওয়্যার ও টেকনিক্যাল সাপোর্ট। কল: 01790139333।',
    h1: 'PABX Main Exchange Units & Expansion Cards',
    tagline: 'Robust Telecom Control Units Engineered for 24/7 Enterprise Operation',
    bengaliTagline: '২৪/৭ নিরবচ্ছিন্ন টেলিযোগাযোগের জন্য শক্তিশালী পিবিএক্স কন্ট্রোল ইউনিট',
    overview: 'পিবিএক্স এক্সচেঞ্জ মেশিন হলো সমস্ত টেলিফোন লাইনের কেন্দ্রীয় প্রসেসর। এটি সব এক্সটেনশনের সুইচিং, ডায়াল টোন ও রিং নিয়ন্ত্রণ করে। আমরা ফুল মেটাল বডি ও বজ্রপাত সুরক্ষা সহ জেনুইন মেশিন বিক্রি করি।',
    priceNote: '৳৬,৯৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'মডেল', value: 'IKE TC-208, Panasonic KX-TES824, Grandstream IP-PBX' }
    ],
    keyFeatures: [
      'বিল্ট-ইন পাওয়ার সাপ্লাই ও সার্জ প্রোটেকশন সার্কিট',
      'ভবিষ্যতে অতিরিক্ত লাইন বাড়াতে এক্সপেনশন কার্ড লাগানোর স্লট'
    ],
    buyingGuide: [
      'অফিস অনুযায়ী সঠিক সংখ্যক পোর্ট সম্বলিত মেশিন বাছাই করতে আমাদের সাথে পরামর্শ করুন।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['pbx-system', 'intercom-telephone'],
    relatedServiceSlugs: ['pbx-installation', 'pbx-repair-service'],
    faqs: [
      { question: 'একটি মেশিনে ভবিষ্যতে কি আরও লাইন বাড়ানো যায়?', answer: 'হ্যাঁ, মডুলার মেশিনে এক্সপেনশন কার্ড যুক্ত করে সহজেই নতুন এক্সটেনশন বাড়ানো সম্ভব।' }
    ]
  },
  'intercom-machine': {
    slug: 'intercom-machine',
    name: 'Intercom Machine',
    bnName: 'ইন্টারকম মেশিন (বিল্ডিং ও অ্যাপার্টমেন্ট)',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Building Intercom Machine Price in Bangladesh',
    metaDescription: 'বহুতল ভবনের জন্য অ্যাপার্টমেন্ট ইন্টারকম মেশিন। ৮ থেকে ১০০ ফ্ল্যাট পর্যন্ত সাপোর্ট। দারোয়ান টু ফ্ল্যাট যোগাযোগ। কল: 01790139333।',
    h1: 'Multi-Apartment Intercom Control Exchange Units',
    tagline: 'Reliable Resident-to-Guard Communication for Residential Complexes',
    bengaliTagline: 'আবাসিক অ্যাপার্টমেন্ট ভবনের জন্য নির্ভরযোগ্য দারোয়ান-টু-ফ্ল্যাট ইন্টারকম মেশিন',
    description: 'অ্যাপার্টমেন্ট ভবনে দারোয়ান রুম থেকে বিভিন্ন ফ্ল্যাটে কথা বলা ও ফ্ল্যাট টু ফ্ল্যাট অভ্যন্তরীণ যোগাযোগের জন্য বিশেষায়িত ইন্টারকম মেইন ইউনিট।',
    priceNote: '৳৭,৫০০ থেকে শুরু (১২ লাইন)',
    warranty: '১ বছরের ওয়ারেন্টি',
    specifications: [
      { label: 'ক্যাপাসিটি', value: '12, 16, 24, 32, 48, 64, 96, 128 Flats' },
      { label: 'পাওয়ার ব্যাকআপ', value: 'বিল্ট-ইন ১২ ভোল্ট ব্যাটারি চার্জিং সার্কিট' }
    ],
    keyFeatures: [
      'ফ্ল্যাট নম্বর (1A, 2B, 301) অনুযায়ী ডায়ালিং সিস্টেম',
      'সিকিউরিটি গার্ড কনসোলে বড় ডিসপ্লে ও বাটন'
    ],
    buyingGuide: [
      'ভবনে যতগুলো ফ্ল্যাট আছে তার চেয়ে ২-৪টি অতিরিক্ত পোর্ট রেখে মেশিন কেনা ভালো।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['intercom-telephone', 'office-intercom-system'],
    relatedServiceSlugs: ['intercom-installation', 'intercom-system-setup'],
    faqs: [
      { question: 'ইন্টারকম মেশিনে কি বিদ্যুৎ গেলে ব্যাকআপ থাকে?', answer: 'হ্যাঁ, এতে ছোট ব্যাটারি সংযোগ দিলে বিদ্যুৎ ছাড়াও অনায়াসে ইন্টারকম সচল থাকে।' }
    ]
  },
  'intercom-telephone': {
    slug: 'intercom-telephone',
    name: 'Intercom Telephone',
    bnName: 'ইন্টারকম টেলিফোন সেট (Caller ID Phone)',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Intercom Telephone Set Price in Bangladesh',
    metaDescription: 'অফিস ও অ্যাপার্টমেন্টের জন্য ডিসপ্লে কলার আইডি ইন্টারকম টেলিফোন সেট। Panasonic, Beetel, IKE। কল: 01790139333।',
    h1: 'Durable Intercom & PABX Desktop/Wall Telephones',
    tagline: 'Crystal-Clear Audio, Illuminated Caller ID & Wall-Mountable Design',
    bengaliTagline: 'স্পষ্ট অডিও, আলোকিত কলার আইডি ও দেওয়ালে মাউন্টিং উপযোগী টেলিফোন',
    overview: 'টেবিলে রাখা বা দেওয়ালে ঝুলিয়ে ব্যবহার করার জন্য টেকসই ইন্টারকম টেলিফোন সেট। এর বড় বাটন, লাউড রিংগার ও স্বচ্ছ মাইক্রোফোন দীর্ঘস্থায়ী ব্যবহারের নিশ্চয়তা দেয়।',
    priceNote: '৳৭৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'ডিসপ্লে', value: 'LCD Caller ID Display with Date/Time' },
      { label: 'ফাংশন', value: 'Flash, Redial, Mute, Speakerphone, Ringer High/Low' }
    ],
    keyFeatures: [
      'দেওয়ালে ঝুলিয়ে রাখা বা ডেস্কে রাখার ডুয়েল অপশন',
      'কোনো ব্যাটারি ছাড়াই লাইন পাওয়ারে ডিসপ্লে ও কলার আইডি চলা'
    ],
    buyingGuide: [
      'অ্যাপার্টমেন্টের ফ্ল্যাটের দরজার পাশে ঝুলিয়ে রাখতে স্লিম ওয়াল-মাউন্ট ফোন সেরা।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['pbx-system', 'intercom-machine'],
    relatedServiceSlugs: ['intercom-installation', 'office-intercom-setup'],
    faqs: [
      { question: 'ফোনে কি ব্যাটারি লাগে?', answer: 'না, ইন্টারকম লাইনের বিদ্যুৎ দিয়েই ফোনটির ডিসপ্লে ও রিং সম্পূর্ণ সচল থাকে।' }
    ]
  },
  'office-intercom-system': {
    slug: 'office-intercom-system',
    name: 'Office Intercom System',
    bnName: 'অফিস ইন্টারকম সিস্টেম ও হ্যান্ডসেট সেটআপ',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Corporate Office Intercom System Package',
    metaDescription: 'অফিসের বিভিন্ন রুম ও ডেস্কে কথা বলার জন্য সম্পূর্ণ ইন্টারকম সিস্টেম প্যাকেজ। ক্যাবলিং সহ পূর্ণাঙ্গ সেটআপ। কল: 01790139333।',
    h1: 'Complete Corporate Office Desk Intercom Systems',
    tagline: 'Boost Team Productivity with Instant Internal Desk Calling',
    bengaliTagline: 'ডেস্ক-টু-ডেস্ক তাৎক্ষণিক যোগাযোগের মাধ্যমে অফিসের কাজের গতি বৃদ্ধি',
    description: 'অফিসের ম্যানেজার, একাউন্টস, রিসেপশন ও কর্মচারীদের ডেস্কে সরাসরি কথা বলার কমপ্লিট ইন্টারকম সিস্টেম বান্ডেল।',
    priceNote: '৳৮,৯৯০ থেকে শুরু (মেশিন + ৪টি ফোন + তার)',
    warranty: '১ বছরের ফুল সিস্টেম ওয়ারেন্টি',
    specifications: [
      { label: 'প্যাকেজ', value: 'PABX Machine + Master Phone + Extension Phones + Cabling' }
    ],
    keyFeatures: [
      'অফিস সাজানোর জন্য পরিপাটি লুক ও সহজ পরিচালনা',
      'ফ্রি ইনস্টলেশন ও এক্সটেনশন চার্ট বুকলেট প্রদান'
    ],
    buyingGuide: [
      'নতুন অফিসের জন্য বান্ডেল প্যাকেজ নিলে ক্যাবলিং ও টেলিফোন কেনায় বিশেষ ছাড় পাওয়া যায়।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['pbx-system', 'intercom-telephone'],
    relatedServiceSlugs: ['office-intercom-setup', 'pbx-installation'],
    faqs: [
      { question: 'অফিসের কম্পিউটার নেটওয়ার্কের তার দিয়ে কি ইন্টারকম চালানো যাবে?', answer: 'হ্যাঁ! ক্যাট৬ নেটওয়ার্ক ক্যাবলের বাড়তি পেয়ার ব্যবহার করেও ইন্টারকম চালানো যায়।' }
    ]
  },
  'video-door-phone': {
    slug: 'video-door-phone',
    name: 'Video Door Phone',
    bnName: 'ভিডিও ডোর ফোন (৭ ইঞ্চি কালার মনিটর + ক্যামেরা)',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Video Door Phone Sales and Price',
    metaDescription: 'দরজার বাইরে দেখে কথা বলার স্মার্ট ভিডিও ডোর ফোন (VDP)। ৭ ইঞ্চি কালার মনিটর, নাইট ভিশন ও ডোর আনলক। কল: 01790139333।',
    h1: 'Smart Video Door Phones (7" Color Monitor & Doorbell Camera)',
    tagline: 'Visual Security at Your Doorstep: See, Speak & Release Lock Safely',
    bengaliTagline: 'দরজার সামনে সর্বোচ্চ নিরাপত্তা: দেখে, কথা বলে নিরাপদে লক রিলিজ করুন',
    description: 'বাসা বা ফ্ল্যাটের প্রধান দরজায় কে এসেছে তা দরজার বাইরে না গিয়ে ঘরের ভেতর থাকা ৭ ইঞ্চি কালার স্ক্রিনে দেখে নিশ্চিত হওয়ার আধুনিক নিরাপত্তা ডিভাইস। স্ক্রিনে বাটন চেপে সরাসরি গেটের ইলেকট্রিক লক খুলে দেওয়া যায়।',
    priceNote: '৳৬,৫০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'স্ক্রিন সাইজ', value: '7 Inch TFT LCD Color Display' },
      { label: 'ক্যামেরা', value: 'Wide Angle HD Camera with IR Night Vision' },
      { label: 'ফিচার', value: 'Two-Way Audio, Electronic Lock Release, Snapshot Memory' }
    ],
    keyFeatures: [
      'রাতে ঘুটঘুটে অন্ধকারেও দরজার বাইরের মানুষের মুখ ক্রিস্টাল ক্লিয়ার দেখা যায়',
      'কলিং বেল চাপলে স্বয়ংক্রিয়ভাবে ভিজিটরের ছবি তুলে মেমোরিতে সংরক্ষণ',
      'দৃষ্টিনন্দন স্লিম ডিজাইন যা ঘরের আভিজাত্য বৃদ্ধি করে'
    ],
    buyingGuide: [
      'আধুনিক ফ্ল্যাট ও ডুপ্লেক্স বাড়ির জন্য ভিডিও ডোর ফোন অন্যতম প্রধান সিকিউরিটি গ্যাজেট।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['door-phone', 'electric-door-lock'],
    relatedServiceSlugs: ['video-door-phone-installation', 'electric-door-lock-installation'],
    faqs: [
      { question: 'ভিডিও ডোর ফোন থেকে কি সরাসরি গেট খোলা যায়?', answer: 'হ্যাঁ, গেটে ইলেকট্রিক লক লাগানো থাকলে মনিটরের বাটন চেপেই গেট খুলে দেওয়া যায়।' }
    ]
  },
  'door-phone': {
    slug: 'door-phone',
    name: 'Door Phone',
    bnName: 'অডিও ডোর ফোন ও কলিং বেল ইন্টারকম',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Audio Door Phone Price in Bangladesh',
    metaDescription: 'বাসা ও অফিসের দরজায় কথা বলার সাশ্রয়ী অডিও ডোর ফোন। বাইরে কল বেল ও ভেতরে রিসিভার। কল: 01790139333।',
    h1: 'Simple & Effective Audio Door Phones for Homes & Offices',
    tagline: 'Two-Way Voice Communication & Remote Gate Release at a Low Cost',
    bengaliTagline: 'কম খরচে দ্বিমুখী স্পষ্ট ভয়েস যোগাযোগ ও দূর থেকে গেট খোলার সুবিধা',
    overview: 'ভিডিও ক্যামেরা ছাড়া শুধু দরজায় কথা বলে পরিচয় নিশ্চিত হওয়ার সাশ্রয়ী ও কার্যকর অডিও ডোর ফোন সিস্টেম। বাইরে থাকা ব্যক্তি বেল বাজালে ঘরের ভেতরের হ্যান্ডসেটে মিষ্টি রিং বাজে।',
    priceNote: '৳১,৯৫০ থেকে শুরু',
    warranty: '১ বছরের ওয়ারেন্টি',
    specifications: [
      { label: 'আইটেম', value: '1 Outdoor Calling Unit + 1 Indoor Handset' },
      { label: 'দূরত্ব', value: '১০০ মিটার পর্যন্ত ক্যাবল সাপোর্ট' }
    ],
    keyFeatures: [
      'অত্যন্ত সাশ্রয়ী ও সহজ পরিচালনা ব্যবস্থা',
      'হ্যান্ডসেটে ডোর রিলিজ বাটন দিয়ে ইলেকট্রিক গেট খোলা'
    ],
    buyingGuide: [
      'কম বাজেটে গেট সিকিউরিটির জন্য অডিও ডোর ফোন চমৎকার সমাধান।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['video-door-phone', 'electric-door-lock'],
    relatedServiceSlugs: ['video-door-phone-installation', 'intercom-installation'],
    faqs: [
      { question: 'বাইরের ইউনিট কি বৃষ্টিতে নষ্ট হবে?', answer: 'না, বাইরের ইউনিটে ওয়াটার-রেজিস্ট্যান্ট রেইন কভার থাকে।' }
    ]
  },
  'intercom-accessories': {
    slug: 'intercom-accessories',
    name: 'Intercom Accessories',
    bnName: 'ইন্টারকম ও পিবিএক্স এক্সেসরিজ সরঞ্জাম',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Intercom Cable & PABX Accessories',
    metaDescription: '২-পেয়ার টেলিফোন ক্যাবল, রোজেট বক্স, আরজে১১ কানেক্টর ও এমডিএফ স্প্লিটার। সেরা রেটে কিনুন। কল: 01790139333।',
    h1: 'Complete Intercom & Telecom Cabling Accessories',
    tagline: 'Telephone Cables, Rosette Boxes, RJ11 Jacks & Distribution Blocks',
    bengaliTagline: 'টেলিফোন ক্যাবল, রোজেট বক্স, আরজে১১ জ্যাক ও ডিস্ট্রিবিউশন ব্লক',
    overview: 'ইন্টারকম ও টেলিফোন সংযোগে নয়েজমুক্ত সাউন্ড নিশ্চিত করতে উচ্চমানের ২-পেয়ার ও ৪-পেয়ার শিল্ডেড টেলিফোন ক্যাবল, রোজেট বক্স এবং কানেক্টর ব্যবহার করা জরুরি।',
    priceNote: '৳১০ থেকে শুরু',
    warranty: 'জেনুইন কোয়ালিটি',
    specifications: [
      { label: 'আইটেমসমূহ', value: '2-Pair Telephone Cable, RJ11 Jack, Rosette Box, Krone MDF Block' }
    ],
    keyFeatures: [
      'পিওর কপার টেলিফোন ওয়্যার—কথায় কোনো শোঁ-শোঁ নয়েজ থাকে না',
      'মজবুত গোল্ড পিন আরজে১১ ক্লিপ'
    ],
    buyingGuide: [
      'বহুতল ভবনে ইন্টারকম ওয়্যারিংয়ের জন্য সবসময় ডাবল-শিল্ডেড ক্যাবল ব্যবহার করুন।'
    ],
    filterCategory: 'PABX & Intercom',
    relatedProductSlugs: ['intercom-telephone', 'pbx-system'],
    relatedServiceSlugs: ['intercom-installation', 'pbx-technician'],
    faqs: [
      { question: 'রোজেট বক্স ব্যবহারের সুবিধা কী?', answer: 'দেওয়ালে রোজেট বক্স থাকলে টেলিফোনের তার টান লাগলেও মূল লাইনের কোনো ক্ষতি হয় না।' }
    ]
  },

  // 6. Access Control & Smart Locks
  'access-control-machine': {
    slug: 'access-control-machine',
    name: 'Access Control Machine',
    bnName: 'অ্যাক্সেস কন্ট্রোল মেশিন (Fingerprint & RFID)',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Access Control Machine Price in Bangladesh (ZKTeco)',
    metaDescription: 'ZKTeco ও Realand অ্যাক্সেস কন্ট্রোল মেশিন। ফিঙ্গারপ্রিন্ট, আরএফআইডি কার্ড ও পাসকোড সমর্থিত। ডোর লক সহ কমপ্লিট প্যাকেজ। কল: 01790139333।',
    h1: 'Biometric & RFID Access Control Machines (ZKTeco)',
    tagline: 'High-Security Door Access Terminals for Offices, Server Rooms & Labs',
    bengaliTagline: 'অফিস, সার্ভার রুম ও ল্যাবের জন্য উচ্চ নিরাপত্তার ডোর অ্যাক্সেস টার্মিনাল',
    overview: 'অফিসের দরজায় অননুমোদিত মানুষের প্রবেশ ঠেকাতে ZKTeco F18, K40, TF1700 ওয়াটারপ্রুফ অ্যাক্সেস কন্ট্রোল মেশিন সেরা পছন্দ। এতে ফিঙ্গারপ্রিন্ট বা কার্ড সোয়াইপ করলেই দরজার ম্যাগনেটিক লক স্বয়ংক্রিয়ভাবে খুলে যায়।',
    priceNote: '৳৫,৫০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'ইউজার ক্যাপাসিটি', value: '1,000 - 3,000 Fingerprints, 5,000 Cards' },
      { label: 'কানেকশন ইন্টারফেস', value: 'TCP/IP, USB, Wiegand In/Out, Door Lock Relay' },
      { label: 'ভেরিফিকেশন স্পিড', value: '0.5 সেকেন্ডেরও কম সময়' }
    ],
    keyFeatures: [
      'ডোর লক রিলে কন্ট্রোল সরাসরি মেশিনের ভেতর বিল্ট-ইন',
      'জরুরি অ্যালার্ম ও ডোর আনলক সেন্সর ইন্টিগ্রেশন',
      'প্রবেশ ও প্রস্থান সময় মেমোরিতে স্বয়ংক্রিয় সংরক্ষণ'
    ],
    buyingGuide: [
      'আউটডোরে বা খোলা জায়গায় লাগাতে চাইলে ওয়াটারপ্রুফ মেটাল বডি TF1700 মডেলটি বেছে নিন।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['access-control-system', 'magnetic-door-lock', 'rfid-access-control'],
    relatedServiceSlugs: ['access-control-installation', 'access-control-system-setup'],
    faqs: [
      { question: 'মেশিন দিয়ে কি দরজার লক নিয়ন্ত্রণ করা যাবে?', answer: 'হ্যাঁ, মেশিনের রিলে সরাসরি ম্যাগনেটিক বা ইলেকট্রিক ডোর লকের সাথে সংযুক্ত থাকে।' }
    ]
  },
  'access-control-system': {
    slug: 'access-control-system',
    name: 'Access Control System',
    bnName: 'সম্পূর্ণ অ্যাক্সেস কন্ট্রোল সিস্টেম প্যাকেজ',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Complete Access Control System Package',
    metaDescription: 'মেশিন, ম্যাগনেটিক লক, ব্র্যাকেট, এক্সিট বাটন ও পাওয়ার সাপ্লাই সহ সম্পূর্ণ অ্যাক্সেস কন্ট্রোল প্যাকেজ। ইনস্টলেশন সহ। কল: 01790139333।',
    h1: 'All-Inclusive Access Control Security System Bundles',
    tagline: 'Ready-to-Install Bundles: Machine + 280KG Lock + Bracket + Push Button',
    bengaliTagline: 'মেশিন + ২৮০ কেজি লক + ব্র্যাকেট + এক্সিট বাটন সহ ফুল প্যাকেজ',
    description: 'কাঁচের দরজা বা কাঠের দরজায় অ্যাক্সেস কন্ট্রোল লাগানোর জন্য সব যন্ত্রপাতি সহ সাশ্রয়ী অল-ইন-ওয়ান প্যাকেজ। আমাদের ইঞ্জিনিয়ার এসে সম্পূর্ণ রেডি করে দেবে।',
    priceNote: '৳১১,৫০০ থেকে শুরু (ফুল ডোর প্যাকেজ)',
    warranty: '১ বছরের সম্পূর্ণ ইনস্টলেশন ও পার্টস ওয়ারেন্টি',
    specifications: [
      { label: 'প্যাকেজে অন্তর্ভুক্ত', value: 'ZKTeco Device + EM Lock 280kg + U/ZL Bracket + Exit Button + 12V 3A UPS' }
    ],
    keyFeatures: [
      'বিদ্যুৎ চলে গেলেও ৩-৫ ঘণ্টা দরজা লক ও সচল থাকার জন্য ব্যাকআপ ব্যাটারি',
      'ভেতর থেকে বের হতে নো-টাচ বা পুশ-টু-এক্সিট বাটন'
    ],
    buyingGuide: [
      'আলাদা আলাদা না কিনে ফুল প্যাকেজ নিলে দাম অনেক কম পড়ে।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['access-control-machine', 'magnetic-door-lock'],
    relatedServiceSlugs: ['access-control-installation', 'access-control-door-lock'],
    faqs: [
      { question: 'কাঁচের দরজায় কি ড্রিল করতে হবে?', answer: 'না, কাঁচের দরজার জন্য বিশেষ ইউ-ব্র্যাকেট আছে, কাঁচ কাটা বা ড্রিল করার প্রয়োজন হয় না।' }
    ]
  },
  'access-control-door-lock': {
    slug: 'access-control-door-lock',
    name: 'Access Control Door Lock',
    bnName: 'অ্যাক্সেস কন্ট্রোল ডোর লক হার্ডওয়্যার',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Access Control Sales and Price',
    metaDescription: 'গ্লাস ও মেটাল দরজার জন্য অ্যাক্সেস কন্ট্রোল ডোর লক। ২৮০ কেজি ম্যাগনেটিক লক ও ড্রপবোল্ট। কল: 01790139333।',
    h1: 'Heavy-Duty Access Control Door Lock Hardware Units',
    tagline: 'Engineered for Over 1 Million Door Cycles Without Mechanical Failure',
    bengaliTagline: 'যান্ত্রিক ত্রুটিহীনভাবে ১০ লক্ষাধিক বার ডোর সাইকেল সহনশীল হেভি-ডিউটি লক',
    overview: 'অ্যাক্সেস কন্ট্রোল সিস্টেমের মূল শক্তি হলো ডোর লক। সঠিক লক না বসালে ধাক্কা দিলে দরজা খুলে যেতে পারে। আমাদের হাই-গ্রেড লক ২৮০ থেকে ৫০০ কেজি পর্যন্ত টানা বল প্রতিরোধ করতে সক্ষম।',
    priceNote: '৳২,২০০ থেকে শুরু',
    warranty: '১ বছরের অফিশিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'লক টাইপ', value: 'Electromagnetic (EM Lock) / Electric Dropbolt' },
      { label: 'হোল্ডিং ফোর্স', value: '280KG (600 lbs) / 500KG (1200 lbs)' }
    ],
    keyFeatures: [
      'ফেইল-সেফ ডিজাইন—বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলে অগ্নিকাণ্ডে স্বয়ংক্রিয় আনলক',
      'অ্যালুমিনিয়াম অ্যালয় ও রাবার শক-শোষণ ব্যবস্থা'
    ],
    buyingGuide: [
      'গ্লাস ডোরের জন্য ২৮০ কেজি ম্যাগনেটিক লক এবং কাঠের ফ্রেমের জন্য ড্রপবোল্ট সেরা।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['magnetic-door-lock', 'electric-door-lock'],
    relatedServiceSlugs: ['access-control-door-lock', 'magnetic-door-lock-installation'],
    faqs: [
      { question: 'লকে কি মরিচা ধরবে?', answer: 'আমাদের প্রতিটি লক অ্যানোডাইজড অ্যালুমিনিয়াম বডির হওয়ায় জং ও মরিচারোধী।' }
    ]
  },
  'magnetic-door-lock': {
    slug: 'magnetic-door-lock',
    name: 'Magnetic Door Lock',
    bnName: 'ম্যাগনেটিক ডোর লক (280kg / 600lbs EM Lock)',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • 280kg Magnetic Door Lock (EM Lock) Price in Bangladesh',
    metaDescription: '২৮০ কেজি হোল্ডিং ফোর্স ইলেক্ট্রোম্যাগনেটিক ডোর লক (EM Lock)। অফিস ও সার্ভার রুমের জন্য সেরা। কল: 01790139333।',
    h1: '280KG (600 Lbs) Single Door Electromagnetic Lock (EM Lock)',
    tagline: 'Reliable Magnetic Force Locking with Dual Color LED Status Indication',
    bengaliTagline: 'দ্বৈত রঙের এলইডি স্ট্যাটাস ইন্ডিকেটর সহ শক্তিশালী ম্যাগনেটিক লক',
    description: 'অফিসের গ্লাস ও কাঠের দরজার জন্য সবচেয়ে বেশি ব্যবহৃত লক। বিদ্যুৎ প্রবাহের মাধ্যমে এটি শক্তিশালী চৌম্বকীয় ক্ষেত্র তৈরি করে দরজা শক্তভাবে আটকে রাখে।',
    priceNote: '৳২,৩৫০ থেকে শুরু',
    warranty: '১ বছরের ওয়ারেন্টি',
    specifications: [
      { label: 'ধারণক্ষমতা', value: '280kg (600lbs) Holding Force' },
      { label: 'অপারেটিং ভোল্টেজ', value: 'DC 12V / 500mA' }
    ],
    keyFeatures: [
      'জিরো রেসিডুয়াল ম্যাগনেটিজম—আনলক করার সাথে সাথে সহজে দরজা খোলা যায়',
      'লাল ও সবুজ এলইডি বাতি দিয়ে লক বা আনলক স্ট্যাটাস প্রদর্শন'
    ],
    buyingGuide: [
      'গ্লাস ডোরের জন্য ইউ-ব্র্যাকেট এবং মেটাল দরজার জন্য এল-ব্র্যাকেট প্রয়োজন হয়।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['electric-door-lock', 'access-control-machine'],
    relatedServiceSlugs: ['magnetic-door-lock-installation', 'access-control-installation'],
    faqs: [
      { question: 'ধাক্কা দিলে কি লক খুলে যেতে পারে?', answer: 'না, ২৮০ কেজি বল প্রয়োগ না করা পর্যন্ত কোনো মানুষই ধাক্কা দিয়ে এটি খুলতে পারে না।' }
    ]
  },
  'electric-door-lock': {
    slug: 'electric-door-lock',
    name: 'Electric Door Lock',
    bnName: 'ইলেকট্রিক ডোর লক ও ড্রপবোল্ট',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Electric Dropbolt & Rim Door Lock Price in Bangladesh',
    metaDescription: 'ড্রপবোল্ট ও মোটর ড্রাইভেন ইলেকট্রিক ডোর লক। কাঁচ ও কাঠের দরজার জন্য নিখুঁত সমাধান। কল: 01790139333।',
    h1: 'Electric Dropbolt & Motorized Rim Door Locks',
    tagline: 'Robust Steel Bolt Mechanism for Double-Action Swing Doors & Gates',
    bengaliTagline: 'উভয় দিকে দোলা দরজা ও গেটের জন্য শক্তিশালী স্টিল বোল্ট মেকানিজম',
    overview: 'ড্রপবোল্ট ইলেকট্রিক লকের স্টিল পিন দরজার ফ্রেমের ভেতর নেমে গিয়ে দরজাকে পুরোপুরি লক করে। এটি উভয় দিকে খোলে এমন দরজার জন্য আদর্শ।',
    priceNote: '৳২,৪৫০ থেকে শুরু',
    warranty: '১ বছরের রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'লক পিন', value: 'সলিড স্টেইনলেস স্টিল পিন (১৬ মিমি ডায়ামিটার)' },
      { label: 'টাইম ডিলে', value: '0s, 3s, 6s, 9s অটো-লকিং অ্যাডজাস্টেবল' }
    ],
    keyFeatures: [
      'দরজা বন্ধ হওয়ার সময় মেপে নিয়ে নিখুঁতভাবে বোল্ট নেমে লক হওয়া',
      'কমপ্যাক্ট ও কনসিল্ড লুক—দরজার ভিতরে লুকানো থাকে'
    ],
    buyingGuide: [
      'সুইং দরজার জন্য ড্রপবোল্ট লক এবং মেইন গেটের জন্য ইলেকট্রিক রিম লক নিন।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['magnetic-door-lock', 'access-control-door-lock'],
    relatedServiceSlugs: ['electric-door-lock-installation', 'access-control-installation'],
    faqs: [
      { question: 'বিদ্যুৎ গেলে ড্রপবোল্ট লক কি খোলা যায়?', answer: 'ফেইল-সেফ মডেলে বিদ্যুৎ চলে গেলে স্বয়ংক্রিয়ভাবে পিন উঠে দরজা খুলে যায়।' }
    ]
  },
  'fingerprint-door-lock': {
    slug: 'fingerprint-door-lock',
    name: 'Fingerprint Door Lock',
    bnName: 'স্মার্ট ফিঙ্গারপ্রিন্ট ডোর লক (হ্যান্ডেল লক)',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Smart Fingerprint Digital Door Handle Lock Price',
    metaDescription: 'বাসা ও অফিসের দরজার জন্য বিলাসবহুল ফিঙ্গারপ্রিন্ট স্মার্ট ডোর লক। পাসওয়ার্ড, আরএফআইডি ও মোবাইল অ্যাপ। কল: 01790139333।',
    h1: 'Luxury Smart Fingerprint & Keyless Digital Door Handle Locks',
    tagline: '5-in-1 Unlocking: Fingerprint, Passcode, RFID Card, App & Mechanical Key',
    bengaliTagline: '৫-ইন-১ আনলকিং: ফিঙ্গারপ্রিন্ট, পাসকোড, আরএফআইডি কার্ড, অ্যাপ ও মেকানিক্যাল চাবি',
    description: 'চাবির ঝামেলা চিরতরে বিদায় জানাতে আপনার প্রধান দরজায় স্থাপন করুন স্মার্ট ফিঙ্গারপ্রিন্ট ডিজিটাল হ্যান্ডেল লক। আঙুলের ছোঁয়া দিলেই মাত্র ০.৩ সেকেন্ডে দরজা খুলে যাবে।',
    priceNote: '৳৭,৫০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'আনলক অপশন', value: 'ফিঙ্গারপ্রিন্ট, পাসকোড, কার্ড, মোবাইল অ্যাপ (Tuya) ও ম্যানুয়াল কি' },
      { label: 'ব্যাটারি', value: '৪টি AA ব্যাটারি (৮-১০ মাস ব্যাকআপ) + ইউএসবি ইমার্জেন্সি পোর্ট' }
    ],
    keyFeatures: [
      'লুকানো অ্যান্টি-পিপিং পাসকোড ফিচার—পাশে কেউ দাঁড়িয়ে থাকলেও পাসওয়ার্ড বুঝতে পারে না',
      'দরজা টেনে দিলে স্বয়ংক্রিয়ভাবে লক হয়ে যাওয়া মেকানিজম',
      'ব্যাটারি শেষ হওয়ার পূর্বে লো-ব্যাটারি অ্যালার্ম ওয়ার্নিং'
    ],
    buyingGuide: [
      'বাসার প্রধান কাঠের দরজা বা ফ্ল্যাট এন্ট্রান্সের জন্য স্মার্ট হ্যান্ডেল লক আভিজাত্যের প্রতীক।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['access-control-machine', 'rfid-access-control'],
    relatedServiceSlugs: ['access-control-installation', 'access-control-door-lock'],
    faqs: [
      { question: 'ব্যাটারি শেষ হয়ে গেলে দরজা কীভাবে খুলব?', answer: 'জরুরি মেকানিক্যাল চাবি দিয়ে অথবা পাওয়ার ব্যাংক সংযোগ করে তাৎক্ষণিক খোলা যায়।' }
    ]
  },
  'rfid-access-control': {
    slug: 'rfid-access-control',
    name: 'RFID Access Control',
    bnName: 'আরএফআইডি কার্ড ডোর লক ডিভাইস',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • RFID Card Access Control System Price in Bangladesh',
    metaDescription: 'স্পর্শহীন আরএফআইডি কার্ড ও পাসকোড এক্সেস কন্ট্রোল রিডার। সাশ্রয়ী ও দ্রুত প্রবেশাধিকার। কল: 01790139333।',
    h1: 'Contactless RFID Card & Keyfob Door Access Readers',
    tagline: 'Ultra-Fast 0.2s Verification for Heavy Traffic Employee Entrances',
    bengaliTagline: 'অফিসের প্রবেশদ্বারে অতি দ্রুত ০.২ সেকেন্ডে কার্ড সোয়াইপ ডোর আনলক',
    overview: 'অফিস ও আবাসিক বিল্ডিংয়ের প্রবেশদ্বারে আরএফআইডি কার্ড বা চাবির রিংয়ের মতো কী-ফব ছুঁইয়ে দরজা খোলার সাশ্রয়ী ও জনপ্রিয় ডিভাইস। এটি ব্যবহারে কোনো ঝামেলা নেই।',
    priceNote: '৳১,৪৫০ থেকে শুরু',
    warranty: '১ বছরের ওয়ারেন্টি',
    specifications: [
      { label: 'কার্ড ফ্রিকোয়েন্সি', value: '125KHz EM Card / 13.56MHz Mifare' },
      { label: 'রিডিং দূরত্ব', value: '৩ থেকে ৬ সেমি স্পর্শহীন সোয়াইপ' }
    ],
    keyFeatures: [
      'পাসকোড ও কার্ড উভয় অপশন সমর্থিত কিবোর্ড',
      'ওয়াটারপ্রুফ ব্লু ব্যাকলিট টাচ প্যানেল'
    ],
    buyingGuide: [
      'কম বাজেটে ডোর অ্যাক্সেস কন্ট্রোলের জন্য আরএফআইডি রিডার সেরা।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['access-control-machine', 'access-control-accessories'],
    relatedServiceSlugs: ['rfid-access-control-setup', 'access-control-installation'],
    faqs: [
      { question: 'একটি মেশিনে কতগুলো কার্ড যুক্ত করা যায়?', answer: 'সাধারণত ১০০০ থেকে ২০০০টি আরএফআইডি কার্ড যুক্ত করা যায়।' }
    ]
  },
  'access-control-accessories': {
    slug: 'access-control-accessories',
    name: 'Access Control Accessories',
    bnName: 'অ্যাক্সেস কন্ট্রোল এক্সেসরিজ সরঞ্জাম',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Access Control Power Supply, Exit Button & Brackets',
    metaDescription: 'অ্যাক্সেস কন্ট্রোল ইউপিএস পাওয়ার সাপ্লাই, ইউ/জেডএল ব্র্যাকেট, পুশ এক্সিট বাটন ও কার্ড। কল: 01790139333।',
    h1: 'Essential Access Control Installation & Mounting Accessories',
    tagline: 'Dedicated 12V 3A UPS Units, No-Touch Exit Sensors & Stainless Steel Brackets',
    bengaliTagline: '১২ ভোল্ট ৩ অ্যাম্পিয়ার ইউপিএস ইউনিট, নো-টাচ সেন্সর ও স্টেইনলেস স্টিল ব্র্যাকেট',
    overview: 'অ্যাক্সেস কন্ট্রোল সম্পূর্ণ কার্যকর করতে পাওয়ার সাপ্লাই, ব্যাকআপ ব্যাটারি, ইউ-ব্র্যাকেট, পুশ বাটন ও আরএফআইডি কার্ড অত্যন্ত জরুরি। আমরা অরিজিনাল এক্সেসরিজ সরবরাহ করি।',
    priceNote: '৳৪০ থেকে শুরু',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'আইটেমসমূহ', value: '12V 3A/5A Access UPS, U-Bracket for Glass, ZL Bracket, Infrared Exit Sensor, RFID 125kHz Card' }
    ],
    keyFeatures: [
      'ইনফ্রারেড নো-টাচ সেন্সর—হাত না ছুঁইয়ে কাছে হাত নিলেই দরজা খুলে যায়',
      'হেভি-ডিউটি মেটাল ইউ-ব্র্যাকেট ও জেডএল ব্র্যাকেট'
    ],
    buyingGuide: [
      'কাঁচের দরজার জন্য ইউ-ব্র্যাকেট এবং কাঠের দরজার জন্য জেডএল ব্র্যাকেট অবশ্যই প্রয়োজন।'
    ],
    filterCategory: 'Access Control & Smart Locks',
    relatedProductSlugs: ['magnetic-door-lock', 'access-control-machine'],
    relatedServiceSlugs: ['access-control-installation'],
    faqs: [
      { question: 'নো-টাচ এক্সিট সেন্সরের সুবিধা কী?', answer: 'হাত স্পর্শ না করেই দরজা খোলা যায়, ফলে রোগজীবাণু ছড়ায় না এবং দেখতে অত্যন্ত আধুনিক লাগে।' }
    ]
  },

  // 7. Biometric Attendance Products
  'biometric-attendance-machine': {
    slug: 'biometric-attendance-machine',
    name: 'Biometric Attendance Machine',
    bnName: 'বায়োমেট্রিক হাজিরা মেশিন (ZKTeco Biometric)',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • Biometric Machine Sales and Price',
    metaDescription: 'অফিস ও ফ্যাক্টরির জন্য ZKTeco ফিঙ্গারপ্রিন্ট ও ফেস হাজিরা মেশিন। ফ্রি সফটওয়্যার ও পেরোল সাপোর্ট। সেরা রেটে কিনুন। কল: 01790139333।',
    h1: 'Enterprise Biometric Time Attendance Terminals (ZKTeco)',
    tagline: 'Automate Payroll, Prevent Proxy Attendance & Generate One-Click Reports',
    bengaliTagline: 'প্রক্সি হাজিরা রোধ, স্বয়ংক্রিয় পেরোল হিসাব ও এক ক্লিকে হাজিরা রিপোর্ট জেনারেশন',
    overview: 'কর্মীদের প্রতিদিনের আগমন-প্রস্থান, দেরি ও ওভারটাইম নিখুঁতভাবে সংরক্ষণ করতে ZKTeco বায়োমেট্রিক হাজিরা মেশিন সেরা ব্র্যান্ড। আমরা সফটওয়্যার ইনস্টলেশন ও পূর্ণ প্রশিক্ষণ সহ অরিজিনাল মেশিন সরবরাহ করি।',
    priceNote: '৳৪,৯৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি',
    specifications: [
      { label: 'ক্যাপাসিটি', value: '1,000 - 3,000 Fingerprints, 50,000 - 100,000 Logs' },
      { label: 'কানেক্টিভিটি', value: 'TCP/IP (LAN), USB Host/Client, Wi-Fi (মডেলভেদে)' },
      { label: 'ডিসপ্লে', value: '2.8 Inch Color TFT Screen' },
      { label: 'ব্যাটারি ব্যাকআপ', value: '৩-৫ ঘণ্টার রিচার্জেবল বিল্ট-ইন ব্যাটারি' }
    ],
    keyFeatures: [
      'স্বয়ংক্রিয়ভাবে লেইট প্রেজেন্ট, আর্লি এক্সিট ও অ্যাবসেন্ট হিসাব করে',
      'এক ক্লিকে এক্সেল শিটে মাসিক স্যালারি ও হাজিরা রিপোর্ট প্রিন্ট',
      'লোডশেডিং হলেও বিল্ট-ইন ব্যাটারিতে টানা সচল থাকার নিশ্চয়তা'
    ],
    buyingGuide: [
      '২০ থেকে ১০০ কর্মীর জন্য ZKTeco K40 এবং বড় ফ্যাক্টরির জন্য ফেস ও ফিঙ্গার মেশিন নিন।'
    ],
    filterCategory: 'Biometric Attendance',
    relatedProductSlugs: ['fingerprint-machine', 'face-recognition-attendance-machine'],
    relatedServiceSlugs: ['biometric-machine-setup', 'biometric-technician'],
    faqs: [
      { question: 'সফটওয়্যার কি বিনামূল্যে দেওয়া হয়?', answer: 'হ্যাঁ! মেশিনের সাথে অফিসিয়াল ZKTime5.0 বা BioTime লাইসেন্স ফ্রি দেওয়া হয়।' }
    ]
  },
  'fingerprint-machine': {
    slug: 'fingerprint-machine',
    name: 'Fingerprint Machine',
    bnName: 'ফিঙ্গারপ্রিন্ট হাজিরা মেশিন (ZKTeco K40 / D200)',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • Fingerprint Attendance Machine Price in Bangladesh',
    metaDescription: 'ZKTeco K40 ফিঙ্গারপ্রিন্ট হাজিরা মেশিন সেরা দামে। ১০০০ ফিঙ্গার, বিল্ট-ইন ব্যাটারি ও ফ্রি সফটওয়্যার। কল: 01790139333।',
    h1: 'High-Precision Optical Fingerprint Attendance Devices',
    tagline: 'Instant 0.5s Fingerprint Recognition, Battery Backup & Network Sync',
    bengaliTagline: '০.৫ সেকেন্ডে দ্রুত ফিঙ্গারপ্রিন্ট রিড, ব্যাটারি ব্যাকআপ ও নেটওয়ার্ক সিঙ্ক',
    description: 'বাংলাদেশে সবচেয়ে জনপ্রিয় ফিঙ্গারপ্রিন্ট হাজিরা মেশিন ZKTeco K40। এর সাথে রয়েছে রিচার্জেবল ব্যাটারি, নেটওয়ার্ক ল্যান পোর্ট ও আরএফআইডি কার্ড সাপোর্ট।',
    priceNote: '৳৫,২০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'মডেল', value: 'ZKTeco K40 Pro / Realand A-F261' },
      { label: 'ফিঙ্গারপ্রিন্ট ধারণক্ষমতা', value: '1,000 / 3,000' }
    ],
    keyFeatures: [
      'ভেজা বা শুকনো আঙুলেও উচ্চ রিডিং অ্যাকুরেসি',
      'পেনড্রাইভ দিয়ে অথবা সরাসরি ল্যান ক্যাবলে ডাটা ডাউনলোড'
    ],
    buyingGuide: [
      'ছোট ও মাঝারি অফিসের জন্য K40 সবচেয়ে টেকসই ও নির্ভরযোগ্য মডেল।'
    ],
    filterCategory: 'Biometric Attendance',
    relatedProductSlugs: ['biometric-attendance-machine', 'attendance-machine-accessories'],
    relatedServiceSlugs: ['fingerprint-machine-setup', 'biometric-machine-setup'],
    faqs: [
      { question: 'একজনের আঙুল অন্যজন দিয়ে প্রক্সি দিতে পারবে?', answer: 'একদমই অসম্ভব! বায়োমেট্রিক ফিঙ্গারপ্রিন্ট সিস্টেমে প্রক্সি হাজিরা দেওয়ার কোনো সুযোগ নেই।' }
    ]
  },
  'face-recognition-attendance-machine': {
    slug: 'face-recognition-attendance-machine',
    name: 'Face Recognition Attendance Machine',
    bnName: 'ফেস রিকগনিশন হাজিরা মেশিন (Face Attendance)',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • Face Recognition Attendance Machine Price in Bangladesh',
    metaDescription: 'স্পর্শহীন ফেস রিকগনিশন মুখ চেনা হাজিরা মেশিন। ZKTeco MB20, uFace302। মাস্ক পরিহিত অবস্থাতেও রিড করে। কল: 01790139333।',
    h1: 'Touchless AI Face Recognition Time Attendance Terminals',
    tagline: 'Hygienic, High-Speed Facial Verification Even with Face Masks',
    bengaliTagline: 'মুখের মাস্ক পরা অবস্থাতেও দ্রুত ও স্বাস্থ্যসম্মত ফেস রিকগনিশন হাজিরা',
    overview: 'আঙুল স্পর্শ করার ঝামেলা ছাড়া ক্যামেরার সামনে দাঁড়ালেই এক নিমিষে মুখ চিনে হাজিরা রেকর্ড করে নেয় ফেস রিকগনিশন মেশিন। ZKTeco MB20 ও EFace মডেল করোনা বা ফ্লু ছড়ানো রোধে সর্বোচ্চ স্বাস্থ্যসম্মত।',
    priceNote: '৳৭,৯৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ফেস ক্যাপাসিটি', value: '500 - 3,000 Faces, Dual IR & Visible Light Cameras' },
      { label: 'ভেরিফিকেশন দূরত্ব', value: '0.3m থেকে 1.5m পর্যন্ত ওয়াইড রেঞ্জ' }
    ],
    keyFeatures: [
      'ডুয়েল ক্যামেরা ও থ্রি-ডি ফেস স্ক্যান—ছবি বা ভিডিও দেখিয়ে ফাঁকি দেওয়া অসম্ভব',
      'মুখের মাস্ক পরা অবস্থাতেও নিখুঁতভাবে মুখ শনাক্ত করার ক্ষমতা',
      'ফেস, ফিঙ্গারপ্রিন্ট ও কার্ড—৩-ইন-১ মাল্টিপল ভেরিফিকেশন'
    ],
    buyingGuide: [
      'গার্মেন্টস, হাসপাতাল, ক্লিনিক ও আধুনিক কর্পোরেট অফিসের জন্য ফেস মেশিন সেরা।'
    ],
    filterCategory: 'Biometric Attendance',
    relatedProductSlugs: ['biometric-attendance-machine', 'fingerprint-machine'],
    relatedServiceSlugs: ['attendance-machine-installation', 'biometric-machine-setup'],
    faqs: [
      { question: 'ছবি বা মোবাইলে ছবি দেখালে কি হাজিরা হবে?', answer: 'না! এতে লাইভনেস ডিটেকশন ও ইনফ্রারেড থ্রি-ডি সেন্সর থাকে, তাই কোনো ছবি বা স্ক্রিনে হাজিরা হয় না।' }
    ]
  },
  'attendance-machine-accessories': {
    slug: 'attendance-machine-accessories',
    name: 'Attendance Machine Accessories',
    bnName: 'হাজিরা মেশিন পাওয়ার অ্যাডাপ্টার ও এক্সেসরিজ',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • Biometric Attendance Accessories & Battery',
    metaDescription: 'ZKTeco হাজিরা মেশিনের ব্যাকআপ ব্যাটারি, ৫V/১২V অ্যাডাপ্টার ও কেবল। কল: 01790139333।',
    h1: 'Genuine Biometric Attendance Parts & Power Adapters',
    tagline: 'Keep Attendance Machines Running Smoothly Without Power Failures',
    bengaliTagline: 'হাজিরা মেশিন সার্বক্ষণিক সচল রাখতে জেনুইন পার্টস ও পাওয়ার অ্যাডাপ্টার',
    overview: 'হাজিরা মেশিনের পাওয়ার অ্যাডাপ্টার নষ্ট হলে বা বিল্ট-ইন ব্যাটারি ব্যাকআপ কমে গেলে মেশিন বন্ধ হয়ে যায়। আমরা ZKTeco ও Realand মেশিনের অরিজিনাল পার্টস ও ব্যাকআপ ব্যাটারি সরবরাহ করি।',
    priceNote: '৳৩৫০ থেকে শুরু',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'আইটেমসমূহ', value: '5V 2A / 12V 1.5A Adapters, ZKTeco Backup Battery Pack, Wall Mount Brackets' }
    ],
    keyFeatures: [
      'স্মার্ট ভোল্টেজ রেগুলেশন—মেশিন গরম হওয়া প্রতিরোধ করে',
      'অরিজিনাল ৩.৭V লিথিয়াম পলিমার ব্যাটারি প্যাক'
    ],
    buyingGuide: [
      'হাজিরা মেশিনের ভোল্টেজ (৫ ভোল্ট বা ১২ ভোল্ট) ঠিক রেখে অ্যাডাপ্টার নির্বাচন করুন।'
    ],
    filterCategory: 'Biometric Attendance',
    relatedProductSlugs: ['biometric-attendance-machine', 'fingerprint-machine'],
    relatedServiceSlugs: ['biometric-machine-service', 'biometric-technician'],
    faqs: [
      { question: 'অ্যাডাপ্টার নষ্ট হলে কি অন্য অ্যাডাপ্টার লাগানো যাবে?', answer: 'সঠিক ভোল্টেজ ও অ্যাম্পিয়ার মিলিয়ে অ্যাডাপ্টার লাগাতে হবে, না হলে মেশিনের মাদারবোর্ড পুড়ে যেতে পারে।' }
    ]
  },

  // 8. LAN & Networking Products
  'lan-cable': {
    slug: 'lan-cable',
    name: 'LAN Cable',
    bnName: 'ল্যান ইন্টারনেট ক্যাবল (CAT5e / CAT6 LAN Cable)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • LAN Network Internet Cable Price in Bangladesh',
    metaDescription: 'ক্যাট৫ ও ক্যাট৬ ল্যান ইন্টারনেট ক্যাবল। পিওর কপার ৩০৫ মিটার ফুল বক্স ও মিটার হিসেবে কিনুন। কল: 01790139333।',
    h1: 'High-Performance Gigabit LAN Network Internet Cables',
    tagline: 'Zero Packet Loss, Heavy Shielding & 1000Mbps Gigabit Speed',
    bengaliTagline: 'জিরো প্যাকেট লস, মজবুত ইনসুলেশন ও ১০০০ এমবিপিএস ফুল গিগাবিট স্পিড',
    overview: 'কম্পিউটার, ওয়াইফাই রাউটার ও আইপি সিসিটিভি ক্যামেরা সংযোগের মূল প্রাণ হলো ল্যান ক্যাবল। D-Link, Schneider ও CommScope ব্যান্ডের পিওর কপার ক্যাবল সর্বোচ্চ ডাটা স্পিড ও দীর্ঘস্থায়িত্ব নিশ্চিত করে।',
    priceNote: '৳২২ / মিটার (৩০৫ মিটার ফুল বক্স শুরু ৳৫,৫০০ থেকে)',
    warranty: '১০০% পিওর কপার গ্যারান্টি',
    specifications: [
      { label: 'ক্যাটাগরি', value: 'CAT5e (100Mbps) / CAT6 (1000Mbps Gigabit)' },
      { label: 'কন্ডাক্টর', value: '23 AWG Solid Bare Pure Copper' },
      { label: 'রোল সাইজ', value: '305 Meters (1000 Feet) ড্রপ বক্স' }
    ],
    keyFeatures: [
      '১০০০ এমবিপিএস ফুল গিগাবিট স্পিড নিরবচ্ছিন্নভাবে পার করার নিশ্চয়তা',
      'মাঝখানে পিভিসি স্প্লাইন ক্রস-ডিভাইডার—তারের নিজেদের মাঝে নয়েজ দূর করে'
    ],
    buyingGuide: [
      'আইপি ক্যামেরা ও আধুনিক গিগাবিট ল্যানের জন্য সবসময় ক্যাট৬ ক্যাবল কেনা উচিত।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['cat6-cable', 'cat5-cable', 'rj45-connector', 'network-switch'],
    relatedServiceSlugs: ['computer-lan-networking', 'lan-network-installation'],
    faqs: [
      { question: 'ল্যান তার দিয়ে কি টানা ১০০ মিটার দূরত্বে ইন্টারনেট যাবে?', answer: 'হ্যাঁ, ক্যাট৬ কপার তার দিয়ে ১০০ মিটার পর্যন্ত কোনো স্পিড ড্রপ ছাড়াই চালানো যায়।' }
    ]
  },
  'cat5-cable': {
    slug: 'cat5-cable',
    name: 'CAT5 Cable',
    bnName: 'ক্যাট৫ই নেটওয়ার্ক ক্যাবল (CAT5e Network Cable)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • CAT5e UTP Network Cable Price in Bangladesh',
    metaDescription: 'ক্যাট৫ই ইউটিপি নেটওয়ার্ক ক্যাবল। ১০০ এমবিপিএস ইন্টারনেট ও সিসিটিভির জন্য সাশ্রয়ী। কল: 01790139333।',
    h1: 'Standard CAT5e UTP Ethernet Network Cables',
    tagline: 'Affordable 100Mbps Networking for Budget-Friendly Installations',
    bengaliTagline: 'বাজেট ফ্রেন্ডলি ইনস্টলেশনের জন্য সাশ্রয়ী ১০০ এমবিপিএস নেটওয়ার্কিং তার',
    description: 'ছোট দূরত্বে সাধারণ কম্পিউটার সংযোগ বা ভিডিও ব্যালুন দিয়ে সিসিটিভি ক্যামেরা চালানোর জন্য সাশ্রয়ী সমাধান ক্যাট৫ই তার।',
    priceNote: '৳১৪ / মিটার',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'স্পিড', value: 'Up to 100Mbps Fast Ethernet (100MHz Bandwidth)' },
      { label: 'তার', value: '4 Pairs Twisted UTP Cable' }
    ],
    keyFeatures: [
      'নমনীয় ও সহজে পাইপের ভেতর দিয়ে বাঁকানো যায়',
      'ইন্টারকম ও অডিও ভিডিও লাইনের জন্য অত্যন্ত সাশ্রয়ী'
    ],
    buyingGuide: [
      'সাধারণ ছোট প্রজেক্টের জন্য ক্যাট৫ই যথেষ্ট।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['cat6-cable', 'lan-cable', 'rj45-connector'],
    relatedServiceSlugs: ['computer-lan-networking', 'intercom-installation'],
    faqs: [
      { question: 'ক্যাট৫ দিয়ে কি গিগাবিট স্পিড পাওয়া যায়?', answer: 'কম দূরত্বে ক্যাট৫ই দিয়ে গিগাবিট পাওয়া গেলেও বড় দূরত্বের জন্য ক্যাট৬ নেওয়া উচিত।' }
    ]
  },
  'cat6-cable': {
    slug: 'cat6-cable',
    name: 'CAT6 Cable',
    bnName: 'ক্যাট৬ গিগাবিট নেটওয়ার্ক ক্যাবল (CAT6 Gigabit UTP/STP)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • CAT6 Pure Copper Gigabit LAN Cable Price',
    metaDescription: 'D-Link ও Schneider অরিজিনাল ক্যাট৬ গিগাবিট কপার ক্যাবল। ১০০০ এমবিপিএস স্পিড ও ৩০৫ মিটার ড্রপ বক্স। কল: 01790139333।',
    h1: 'High-Speed CAT6 Gigabit Ethernet LAN Cables (305m Box)',
    tagline: '1000Mbps Gigabit Standard for Modern Data Centers & IP CCTV',
    bengaliTagline: 'আধুনিক ডেটা সেন্টার ও আইপি সিসিটিভির জন্য ১০০০ এমবিপিএস গিগাবিট স্ট্যান্ডার্ড',
    overview: 'ক্যাট৬ ক্যাবল আধুনিক কম্পিউটার নেটওয়ার্কিং ও আইপি সিসিটিভি ক্যামেরার প্রধান মেরুদণ্ড। এতে ২৫০ মেগাহার্টজ ব্যান্ডউইথ থাকায় একসাথে ভারী ফাইল ট্রান্সফার ও ৪K ভিডিও স্ট্রিমিং অনায়াসে চলে।',
    priceNote: '৳২৪ / মিটার (৩০৫ মিটার রোল শুরু ৳৬,২০০ থেকে)',
    warranty: '১০০% অরিজিনাল কপার সার্টিফিকেশন',
    specifications: [
      { label: 'ব্যান্ডউইথ', value: '250MHz (1000Mbps / 1Gbps Gigabit Ethernet)' },
      { label: 'কন্ডাক্টর সাইজ', value: '0.57mm 23AWG Solid Pure Copper' }
    ],
    keyFeatures: [
      'হেভি ইন্টারনাল ক্রস-ফ্রেম (Spline)—তারগুলোর মাঝে নয়েজ আইসোলেট করে',
      'PoE+ (Power over Ethernet) সাপোর্টে কোনো ভোল্টেজ লস ছাড়া ক্যামেরা ও এপি চালানো'
    ],
    buyingGuide: [
      'অফিসের পার্মানেন্ট নেটওয়ার্কিং ও আইপি ক্যামেরায় সবসময় ক্যাট৬ ব্যবহার করুন।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['lan-cable', 'network-switch', 'rj45-connector', 'ip-camera'],
    relatedServiceSlugs: ['lan-network-installation', 'ip-camera-installation', 'computer-lan-networking'],
    faqs: [
      { question: 'ক্যাট৬ কি PoE ক্যামেরার পাওয়ার টানতে পারে?', answer: 'হ্যাঁ, ক্যাট৬ কপার ক্যাবল হাই-ভোল্টেজ PoE+ পাওয়ার কোনো তার গরম হওয়া ছাড়াই বহন করতে পারে।' }
    ]
  },
  'network-switch': {
    slug: 'network-switch',
    name: 'Network Switch',
    bnName: 'নেটওয়ার্ক সুইচ ও PoE সুইচ (Ethernet & PoE Switch)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • Network Switch & PoE Switch Price in Bangladesh',
    metaDescription: '৫, ৮, ১৬ ও ২৪ পোর্ট গিগাবিট ও PoE নেটওয়ার্ক সুইচ। D-Link, TP-Link, Hikvision। কল: 01790139333।',
    h1: 'Fast Ethernet & Gigabit PoE Network Switches (5/8/16/24 Port)',
    tagline: 'High-Throughput Packet Switching with Zero Congestion & Full PoE Power',
    bengaliTagline: 'জিরো ট্রাফিক জটলা ও ফুল PoE পাওয়ার সহ হাই-থ্রুপুট নেটওয়ার্ক সুইচ',
    overview: 'অফিসের কম্পিউটার ও আইপি ক্যামেরার মাঝে ট্রাফিক জটলা ছাড়া হাই-স্পিড ডাটা আদান-প্রদান করতে নেটওয়ার্ক সুইচ প্রয়োজন। আমাদের কাছে গিগাবিট ও সিসিটিভি স্পেশাল PoE সুইচ সেরা দামে পাওয়া যায়।',
    priceNote: '৳৮৫০ থেকে শুরু (৫ পোর্ট)',
    warranty: '১ থেকে ২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'পোর্ট ভ্যারিয়েন্ট', value: '5, 8, 16, 24 Port 10/100/1000Mbps' },
      { label: 'PoE বাজেট', value: '65W, 120W, 250W (PoE মডেলগুলোতে)' }
    ],
    keyFeatures: [
      'প্লাগ অ্যান্ড প্লে—কোনো কনফিগারেশন ছাড়াই তার লাগালেই সরাসরি চালু',
      'PoE এক্সটেন্ড মোড—২৫০ মিটার দূরত্বের ক্যামেরাতেও এক তারে পাওয়ার পাঠানো'
    ],
    buyingGuide: [
      'আইপি ক্যামেরার জন্য PoE সুইচ এবং সাধারণ কম্পিউটারের জন্য গিগাবিট ডেক্সটপ সুইচ নিন।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['router', 'lan-cable', 'cat6-cable', 'ip-camera'],
    relatedServiceSlugs: ['lan-network-installation', 'router-switch-configuration', 'computer-lan-networking'],
    faqs: [
      { question: 'PoE সুইচে কি সাধারণ কম্পিউটার লাগানো যাবে?', answer: 'হ্যাঁ! আধুনিক স্মার্ট PoE সুইচ নিজে থেকেই ডিভাইস ডিটেক্ট করে, সাধারণ কম্পিউটারে শুধু ডাটা পাঠায়।' }
    ]
  },
  'router': {
    slug: 'router',
    name: 'Router',
    bnName: 'ওয়াইফাই ও গিগাবিট রাউটার (WiFi & Gigabit Router)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • WiFi Router Price in Bangladesh (TP-Link, Tenda, MikroTik)',
    metaDescription: 'ডুয়েল ব্যান্ড গিগাবিট ওয়াইফাই রাউটার ও মাইক্রোটিক রাউটার সেরা দামে। হাই স্পিড ও বড় কভারেজ। কল: 01790139333।',
    h1: 'Dual-Band Gigabit Wi-Fi Routers & MikroTik Core Routers',
    tagline: 'Ultra-Fast 1200Mbps/1900Mbps Speeds, Multi-Antenna Beamforming & No Lags',
    bengaliTagline: '১২০০/১৯০০ এমবিপিএস আল্ট্রা স্পিড, বিমফর্মিং বড় কভারেজ ও কোনো ল্যাগ ছাড়া নেট',
    overview: 'বাসা ও অফিসে পুরো বাড়ি জুড়ে স্ট্রং ওয়াইফাই সিগন্যাল ও দ্রুতগতির ইন্টারনেট উপভোগ করতে TP-Link Archer, Tenda, Netgear ও MikroTik রাউটার কিনুন শামীম টেক সলিউশন থেকে।',
    priceNote: '৳১,৪৫০ থেকে শুরু',
    warranty: '১ থেকে ২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [
      { label: 'স্পিড ব্যান্ড', value: 'Dual Band 2.4GHz (300Mbps) + 5GHz (867Mbps/1300Mbps)' },
      { label: 'অ্যান্টেনা', value: '4 to 6 High-Gain External Antennas' },
      { label: 'পোর্ট', value: 'Gigabit WAN + 4 Gigabit LAN Ports' }
    ],
    keyFeatures: [
      'ডুয়েল ব্যান্ড প্রযুক্তি—ভারী গেমিং ও ৪K ভিডিও স্ট্রিমিংয়ে কোনো বাফারিং হয় না',
      'বিমফর্মিং টেকনোলজি—সরাসরি মোবাইলের দিকে সিগন্যাল ফোকাস করে দেয়াল ভেদ করে পৌঁছায়',
      'প্যারেন্টাল কন্ট্রোল ও গেস্ট নেটওয়ার্ক সিকিউরিটি'
    ],
    buyingGuide: [
      'বহুতল বাসা বা বড় ফ্ল্যাটের জন্য ডুয়েল ব্যান্ড ৪-অ্যান্টেনা গিগাবিট রাউটার সেরা।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['network-switch', 'lan-cable', 'wifi-camera'],
    relatedServiceSlugs: ['router-switch-configuration', 'office-network-setup', 'network-troubleshooting'],
    faqs: [
      { question: '৫ গিগাহার্টজ ব্যান্ডের সুবিধা কী?', answer: '৫GHz ব্যান্ডে কোনো সিগন্যাল ইন্টারফেয়ারেন্স থাকে না, ফলে ইন্টারনেট সুপারফাস্ট গতিতে চলে।' }
    ]
  },
  'ethernet-cable': {
    slug: 'ethernet-cable',
    name: 'Ethernet Cable',
    bnName: 'ইথারনেট প্যাচ কর্ড ক্যাবল (RJ45 Patch Cord)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • Ready RJ45 Ethernet Patch Cord Cable (1m, 3m, 5m, 10m)',
    metaDescription: 'ফ্যাক্টরি ক্রিম্পড গোল্ড-প্লেটেড আরজে৪৫ ইথারনেট প্যাচ কর্ড তার। ১, ৩, ৫, ১০, ১৫ ও ২০ মিটার রেডি কেবল। কল: 01790139333।',
    h1: 'Factory-Molded Gold-Plated RJ45 Ethernet Patch Cables',
    tagline: 'Durable Snagless Boots, 100% Tested Gigabit Performance',
    bengaliTagline: 'ফ্যাক্টরি মোল্ডেড আরজে৪৫ কানেক্টর ও শতভাগ পরীক্ষিত গিগাবিট প্যাচ কর্ড',
    description: 'কম্পিউটার থেকে ওয়াল জ্যাক, রাউটার থেকে ডিভিআর বা সুইচে সহজে সংযোগ দেওয়ার জন্য ফ্যাক্টরি মোল্ডেড রেডিমেড ইথারনেট ক্যাবল। হাতে লাগানো তারের চেয়ে এটি বহুগুণ মজবুত ও টেকসই।',
    priceNote: '৳৬০ থেকে শুরু (১ মিটার)',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'সাইজ ভ্যারিয়েন্ট', value: '1M, 2M, 3M, 5M, 10M, 15M, 20M, 30M' },
      { label: 'কানেক্টর', value: 'RJ45 Male to Male Gold Plated Contacts with Boot' }
    ],
    keyFeatures: [
      'ফ্যাক্টরি ক্রিম্পড—টান লাগলেও তারের মাথা খুলে বা লুজ হয়ে যায় না',
      'স্ন্যাগলেস বুট কভার—কানেক্টরের প্লাস্টিক লক ভেঙে যাওয়া রোধ করে'
    ],
    buyingGuide: [
      'পিসির সাথে রাউটার সংযোগ দিতে ৩ মিটার বা ৫ মিটারের রেডি প্যাচ কর্ড নিন।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['lan-cable', 'rj45-connector', 'router'],
    relatedServiceSlugs: ['computer-lan-networking', 'network-technician'],
    faqs: [
      { question: 'হাতে বানানো তারের চেয়ে রেডি প্যাচ কর্ড কেন ভালো?', answer: 'ফ্যাক্টরি প্রেসড কানেক্টরে লুজ কানেকশন বা প্যাকেট লস হওয়ার ঝুঁকি থাকে না।' }
    ]
  },
  'rj45-connector': {
    slug: 'rj45-connector',
    name: 'RJ45 Connector',
    bnName: 'আরজে৪৫ কানেক্টর (CAT6 RJ45 Modular Jack)',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • CAT6 Gold Plated RJ45 Connector Price in Bangladesh',
    metaDescription: 'ক্যাট৬ গোল্ড প্লেটেড ৮-পিন আরজে৪৫ কানেক্টর। ল্যান ও আইপি ক্যামেরার জন্য ১০০ পিস বক্স ও খুচরা কিনুন। কল: 01790139333।',
    h1: 'CAT6 Gold-Plated 8P8C Modular RJ45 Connectors',
    tagline: '50-Micron Gold Plated Pins for Superior Conductivity & Corrosion Immunity',
    bengaliTagline: '৫০-মাইক্রন গোল্ড প্লেটেড পিন ও জংরোধী সেরা পরিবাহিতা',
    overview: 'ক্যাট৬ ল্যান ক্যাবলের মাথায় পাঞ্চ করার জন্য আরজে৪৫ (8P8C) কানেক্টর ব্যবহৃত হয়। আমাদের হাই-গ্রেড কানেক্টরের খাঁটি তামা ও গোল্ড প্লেটিংয়ের কারণে দীর্ঘ বছর ধরে ইন্টারনেট স্পিড অটুট থাকে।',
    priceNote: '৳১০ / পিস (১০০ পিসের বক্স শুরু ৳৭৫০ থেকে)',
    warranty: 'কোয়ালিটি গ্যারান্টি',
    specifications: [
      { label: 'টাইপ', value: 'CAT6 8P8C UTP Modular Plug' },
      { label: 'পিন মেটেরিয়াল', value: 'Phosphor Bronze with 50u" Gold Plating' }
    ],
    keyFeatures: [
      'ক্যাট৬ তারের মোটা গেজের কপার সহজে ঢোকানোর জন্য ওয়াইড ওয়্যার গাইড স্লট',
      'ক্রিম্প করার সময় ভেঙে না যাওয়ার মতো ফ্লেক্সিবল স্বচ্ছ পলিকার্বনেট ক্লিপ'
    ],
    buyingGuide: [
      'আইপি ক্যামেরা ও সার্ভার লাইনের জন্য সবসময় অরিজিনাল ক্যাট৬ আরজে৪৫ কানেক্টর ব্যবহার করুন।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['lan-cable', 'cat6-cable', 'networking-accessories'],
    relatedServiceSlugs: ['lan-network-installation', 'network-technician'],
    faqs: [
      { question: 'ক্যাট৫ ও ক্যাট৬ আরজে৪৫ কানেক্টরের পার্থক্য কী?', answer: 'ক্যাট৬ তারের ভেতরের তার মোটা হওয়ায় এর কানেক্টরের পিন বিন্যাস বিশেষ ডিজাইনের হয়।' }
    ]
  },
  'networking-accessories': {
    slug: 'networking-accessories',
    name: 'Networking Accessories',
    bnName: 'নেটওয়ার্কিং টুলস ও এক্সেসরিজ সরঞ্জাম',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • Networking Tools, RJ45 Crimper & Tester',
    metaDescription: 'ল্যান ক্যাবল ক্রিম্পিং প্লায়ার্স, আরজে৪৫ নেটওয়ার্ক টেস্টার, পাঞ্চ ডাউন টুল ও প্যাচ প্যানেল। কল: 01790139333।',
    h1: 'Professional Networking Toolkits, Crimpers & Testers',
    tagline: 'Heavy-Duty RJ45/RJ11 Crimping Tools, Wire Strippers & Cable Testers',
    bengaliTagline: 'পেশাদার আরজে৪৫ ক্রিম্পার, তার কাটার স্ট্রিপার ও ডিজিটাল ক্যাবল টেস্টার',
    overview: 'নেটওয়ার্কিং ও সিসিটিভি টেকনিশিয়ানদের কাজের জন্য প্রয়োজনীয় সব ধরনের আরজে৪৫ ক্রিম্পিং টুল, ক্যাবল টেস্টার, পাঞ্চ ডাউন টুল, ফেসপ্লেট ও কি-স্টোন জ্যাক সরবরাহ করে শামীম টেক সলিউশন।',
    priceNote: '৳১২০ থেকে শুরু',
    warranty: 'টুলসের টেকসই স্থায়িত্ব গ্যারান্টি',
    specifications: [
      { label: 'টুলস রেঞ্জ', value: 'RJ45/RJ11 Crimping Plier, Master Network Cable Tester, Krone Punch Tool, Keystones' }
    ],
    keyFeatures: [
      'হেভি কার্বন স্টিল মেটেরিয়াল—হাজার হাজার কানেক্টর নিখুঁতভাবে ক্রিম্প করার নিশ্চয়তা',
      'এলইডি লাইট ইন্ডিকেটর সহ ৮টি তারের সংযোগ পরীক্ষা করার ডিজিটাল ল্যান টেস্টার'
    ],
    buyingGuide: [
      'যেকোনো আইটি টেকনিশিয়ান বা প্রতিষ্ঠানের জন্য একটি কমপ্লিট নেটওয়ার্কিং টুলকিট থাকা জরুরি।'
    ],
    filterCategory: 'LAN & Networking',
    relatedProductSlugs: ['rj45-connector', 'lan-cable', 'network-switch'],
    relatedServiceSlugs: ['lan-network-installation', 'computer-lan-networking'],
    faqs: [
      { question: 'ক্যাবল টেস্টার দিয়ে কী কাজ করা হয়?', answer: 'তারের ৮টি পিন ঠিকমতো লেগেছে কি না এবং তার কাটা আছে কি না তা সহজেই পরীক্ষা করা যায়।' }
    ]
  }
};

// Merge 117 proposed product SEO entries seamlessly
Object.assign(PRODUCTS_SEO_DATA, NEW_PRODUCTS_SEO_DATA);
