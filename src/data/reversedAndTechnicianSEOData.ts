import type { ProductSEOInfo } from './productsSEOData';
import type { ServiceSEOInfo } from './servicesSEOData';

interface DistrictDescriptor {
  slug: string;
  en: string;
  bn: string;
  hubNote: string;
  visitEta: string;
}

const DISTRICTS_10: DistrictDescriptor[] = [
  {
    slug: 'rangpur',
    en: 'Rangpur',
    bn: 'রংপুর',
    hubNote: 'প্রধান অফিস: জাহাজ কোম্পানি মোড়, রংপুর (বিশেষ সার্ভিস হাব: হারাগাছ ও রংপুর সিটি)',
    visitEta: '২-৪ ঘণ্টার মধ্যে দ্রুত অন-সাইট ভিজিট'
  },
  {
    slug: 'dinajpur',
    en: 'Dinajpur',
    bn: 'দিনাজপুর',
    hubNote: 'দিনাজপুর সদর, বিরামপুর, পার্বতীপুর ও সমগ্র দিনাজপুর জেলায় অন-সাইট সার্ভিস',
    visitEta: 'একই দিনে দ্রুত টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'gaibandha',
    en: 'Gaibandha',
    bn: 'গাইবান্ধা',
    hubNote: 'গাইবান্ধা সদর, গোবিন্দগঞ্জ, পলাশবাড়ী ও সমগ্র গাইবান্ধা জেলায় অন-সাইট সার্ভিস',
    visitEta: 'একই দিনে দ্রুত টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'kurigram',
    en: 'Kurigram',
    bn: 'কুড়িগ্রাম',
    hubNote: 'কুড়িগ্রাম সদর, উলিপুর, নাগেশ্বরী ও সমগ্র কুড়িগ্রাম জেলায় অন-সাইট সার্ভিস',
    visitEta: 'একই দিনে দ্রুত টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'nilphamari',
    en: 'Nilphamari',
    bn: 'নীলফামারী',
    hubNote: 'নীলফামারী সদর, সৈয়দপুর, ডোমার ও সমগ্র নীলফামারী জেলায় অন-সাইট সার্ভিস',
    visitEta: 'একই দিনে দ্রুত টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'lalmonirhat',
    en: 'Lalmonirhat',
    bn: 'লালমনিরহাট',
    hubNote: 'লালমনিরহাট সদর, পাটগ্রাম, হাতীবান্ধা ও সমগ্র লালমনিরহাট জেলায় অন-সাইট সার্ভিস',
    visitEta: 'একই দিনে দ্রুত টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'panchagarh',
    en: 'Panchagarh',
    bn: 'পঞ্চগড়',
    hubNote: 'পঞ্চগড় সদর, বোদা, দেবীগঞ্জ, তেঁতুলিয়া ও সমগ্র পঞ্চগড় জেলায় অন-সাইট সার্ভিস',
    visitEta: 'দ্রুত সময়ে অন-সাইট টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'thakurgaon',
    en: 'Thakurgaon',
    bn: 'ঠাকুরগাঁও',
    hubNote: 'ঠাকুরগাঁও সদর, পীরগঞ্জ, রানীশংকৈল ও সমগ্র ঠাকুরগাঁও জেলায় অন-সাইট সার্ভিস',
    visitEta: 'দ্রুত সময়ে অন-সাইট টেকনিশিয়ান ভিজিট'
  },
  {
    slug: 'bogura',
    en: 'Bogura',
    bn: 'বগুড়া',
    hubNote: 'বগুড়া সদর, শেরপুর, সান্তাহার ও সমগ্র বগুড়া জেলায় ডেডিকেটেড অন-সাইট সার্ভিস',
    visitEta: 'দ্রুত অন-সাইট টেকনিশিয়ান ভিজিট ও সাপোর্ট'
  },
  {
    slug: 'dhaka',
    en: 'Dhaka',
    bn: 'ঢাকা',
    hubNote: 'ঢাকা সিটি ও আশপাশের বাণিজ্যিক/আবাসিক এলাকায় ২৪ ঘণ্টার মধ্যে অন-সাইট সার্ভিস',
    visitEta: '২৪ ঘণ্টার মধ্যে প্রফেশনাল টেকনিশিয়ান ভিজিট'
  }
];

const REVERSED_PRODUCT_TOPICS = [
  'cctv-camera-sales-price',
  'ip-wifi-camera-sales',
  'dvr-nvr-system-sales',
  'pbx-intercom-products',
  'access-control-biometric-products'
] as const;

const REVERSED_SERVICE_TOPICS = [
  'cctv-installation-fitting',
  'cctv-repair-maintenance',
  'pbx-intercom-installation',
  'electrician-electrical-wiring',
  'computer-lan-networking'
] as const;

interface TechnicianTopicSpec {
  slugPart: string;
  enName: string;
  bnName: string;
  category: ServiceSEOInfo['category'];
  descriptionSuffix: string;
  keyFeatures: string[];
  pricingStartingFrom: string;
  relatedServices: string[];
  relatedProductSlugs: string[];
}

const TECHNICIAN_TOPICS_13: TechnicianTopicSpec[] = [
  {
    slugPart: 'cctv-technician',
    enName: 'CCTV Technician',
    bnName: 'সিসিটিভি টেকনিশিয়ান',
    category: 'CCTV & Surveillance',
    descriptionSuffix: 'সিসিটিভি ক্যামেরা ইনস্টলেশন, নো সিগন্যাল ও ব্ল্যাক স্ক্রিন সমাধান, ক্যাবল মেরামত, ডিভিআর কনফিগারেশন এবং মোবাইল ফোনে অনলাইন লাইভ ভিউ সেটআপ।',
    keyFeatures: [
      'অভিজ্ঞ ও দক্ষ সিসিটিভি টেকনিশিয়ান দ্বারা সরাসরি অন-সাইট সার্ভিস',
      'ক্যামেরা অফলাইন, ঝাপসা ছবি, পাওয়ার সাপ্লাই ও কানেক্টর ত্রুটি সমাধান',
      'Hikvision, Dahua, Imou ও Jovision ক্যামেরা সেটআপ ও মোবাইল ভিউ',
      '১ বছরের সার্ভিস ওয়ারেন্টি ও সার্বক্ষণিক হোয়াটসঅ্যাপ সাপোর্ট'
    ],
    pricingStartingFrom: '৳৩৫০ থেকে শুরু (ভিজিট ও সমস্যার ধরন অনুযায়ী)',
    relatedServices: ['cctv-technician', 'cctv-installation', 'cctv-repair-maintenance'],
    relatedProductSlugs: ['cctv-camera', 'hd-cctv-camera', 'dvr', 'cctv-power-supply']
  },
  {
    slugPart: 'dvr-technician',
    enName: 'DVR Technician',
    bnName: 'ডিভিআর (DVR) টেকনিশিয়ান',
    category: 'CCTV & Surveillance',
    descriptionSuffix: 'ডিভিআর সেটআপ, পাসওয়ার্ড রিসেট, হার্ডডিস্ক নো ডিটেক্ট সমস্যা, বিপিং সাউন্ড ফিক্সিং, ফার্মওয়্যার আপডেট ও মোবাইল অনলাইন ভিউ কনফিগারেশন।',
    keyFeatures: [
      'Hikvision, Dahua, Xiongmai ও Jovision DVR পাসওয়ার্ড রিকভারি',
      'হার্ডডিস্ক রেকর্ডিং এরর ও প্লেব্যাক সমস্যা দ্রুত সমাধান',
      'HDMI/VGA ডিসপ্লে আউটপুট ও অডিও চ্যানেল কনফিগারেশন',
      'ফোনে রিমোট প্লেব্যাক ও লাইভ মনিটরিং সেটআপ'
    ],
    pricingStartingFrom: '৳৪০০ থেকে শুরু',
    relatedServices: ['dvr-installation', 'dvr-nvr-technician', 'cctv-online-view-setup'],
    relatedProductSlugs: ['dvr', 'cctv-hard-disk', 'cctv-power-supply']
  },
  {
    slugPart: 'nvr-technician',
    enName: 'NVR Technician',
    bnName: 'এনভিআর (NVR) টেকনিশিয়ান',
    category: 'CCTV & Surveillance',
    descriptionSuffix: 'PoE NVR কনফিগারেশন, আইপি অ্যাড্রেস ম্যাপিং, চ্যানেল অ্যাডিং, ব্যান্ডউইথ অপটিমাইজেশন, 4K মনিটর ডিসপ্লে এবং রিমোট ক্লাউড অ্যাক্সেস সেটআপ।',
    keyFeatures: [
      '4K Ultra HD PoE NVR ও মাল্টি-চ্যানেল নেটওয়ার্ক রেকর্ডার সেটআপ',
      'আইপি কনফ্লিক্ট ও অফলাইন আইপি ক্যামেরা পুনঃসংযোগ',
      'বড় স্টোরেজ HDD/RAID কনফিগারেশন ও ব্যাকআপ প্ল্যানিং',
      'মোবাইল ও পিসি CMS/iVMS-4200 রিমোট মনিটরিং'
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    relatedServices: ['nvr-installation', 'dvr-nvr-technician', 'ip-camera-installation'],
    relatedProductSlugs: ['nvr', 'ip-camera', 'cctv-hard-disk', 'network-switch']
  },
  {
    slugPart: 'ip-camera-technician',
    enName: 'IP Camera Technician',
    bnName: 'আইপি ক্যামেরা টেকনিশিয়ান',
    category: 'CCTV & Surveillance',
    descriptionSuffix: 'PoE ও নেটওয়ার্ক আইপি ক্যামেরা মাউন্টিং, Cat6 ক্যাবলিং ও RJ45 টার্মিনেশন, আইপি অ্যাসাইনমেন্ট, ONVIF লিংকিং এবং মোবাইল লাইভ ভিউ।',
    keyFeatures: [
      'PoE সুইচ ও ইনজেক্টর ভিত্তিক আইপি ক্যামেরা প্রফেশনাল ইনস্টলেশন',
      'SADP Tool / ConfigTool দিয়ে আইপি অ্যাড্রেস ও পাসওয়ার্ড সেটআপ',
      'লং ডিসট্যান্স Cat6 ও ফাইবার লিংক ট্রাবলশুটিং',
      'AI মোশন ডিটেকশন ও ২-ওয়ে অডিও কনফিগারেশন'
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    relatedServices: ['ip-camera-installation', 'cctv-installation', 'lan-network-installation'],
    relatedProductSlugs: ['ip-camera', 'nvr', 'lan-cable', 'rj45-connector']
  },
  {
    slugPart: 'wifi-camera-technician',
    enName: 'WiFi Camera Technician',
    bnName: 'ওয়াইফাই ক্যামেরা টেকনিশিয়ান',
    category: 'CCTV & Surveillance',
    descriptionSuffix: 'EZVIZ, Imou, Jovision ও স্মার্ট ৩৬০° ওয়াইফাই পিটিজেড ক্যামেরা সেটআপ, রাউটার পেয়ারিং, মেমোরি কার্ড রেকর্ডিং ও অফলাইন ওয়াইফাই সমস্যা সমাধান।',
    keyFeatures: [
      '৩৬০° প্যান-টিল্ট ওয়াইফাই ও সোলার/সিম ক্যামেরা দ্রুত সেটআপ',
      'রাউটার সিগন্যাল অপটিমাইজেশন ও অফলাইন রিকানেকশন',
      'টু-ওয়ে টক, হিউম্যান ট্র্যাকিং ও নাইট ভিশন কনফিগারেশন',
      'স্মার্টফোনে পরিবার বা টিম মেম্বারদের সাথে শেয়ার্ড ভিউ'
    ],
    pricingStartingFrom: '৳৪০০ থেকে শুরু',
    relatedServices: ['wifi-camera-setup', 'ip-camera-installation', 'cctv-online-view-setup'],
    relatedProductSlugs: ['ip-camera', 'cctv-camera', 'router']
  },
  {
    slugPart: 'access-control-technician',
    enName: 'Access Control Technician',
    bnName: 'অ্যাক্সেস কন্ট্রোল টেকনিশিয়ান',
    category: 'Access Control',
    descriptionSuffix: 'ডোর অ্যাক্সেস কন্ট্রোল, ম্যাগনেটিক EM ডোর লক, RFID কার্ড, পাসওয়ার্ড কিপ্যাড, এক্সিট বাটন ও পাওয়ার ব্যাকআপ কন্ট্রোলার ইনস্টলেশন এবং মেরামত।',
    keyFeatures: [
      'হেভি ডিউটি ম্যাগনেটিক ইএম লক ও ড্রপবোল্ট ডোর ফিটিং',
      'RFID কার্ড, পিন কোড ও ফিঙ্গারপ্রিন্ট ডোর এক্সেস প্রোগ্রামিং',
      'পুশ-টু-এক্সিট সেন্সর ও ফায়ার অ্যালার্ম রিলিজ কানেকশন',
      'লক নড়বড়ে হওয়া, পাওয়ার ফেইলুর ও রিলে ত্রুটি মেরামত'
    ],
    pricingStartingFrom: '৳৮০০ থেকে শুরু',
    relatedServices: ['access-control-installation', 'door-lock-installation', 'biometric-attendance-setup'],
    relatedProductSlugs: ['access-control-system', 'magnetic-door-lock', 'cctv-power-supply']
  },
  {
    slugPart: 'pbx-technician',
    enName: 'PBX Technician',
    bnName: 'পিবিএক্স (PBX) টেকনিশিয়ান',
    category: 'PABX & Intercom',
    descriptionSuffix: 'অফিস ও প্রতিষ্ঠানের অ্যানালগ/আইপি PABX টেলিফোন এক্সচেঞ্জ ইনস্টলেশন, এক্সটেনশন প্রোগ্রামিং, ট্রাঙ্ক লাইন সেটআপ ও নয়েজ/লাইন ডাউন মেরামত।',
    keyFeatures: [
      'Panasonic, Grandstream ও মাল্টি-লাইন PABX সিস্টেম কনফিগারেশন',
      'এক্সটেনশন নাম্বারিং, কল ট্রান্সফার ও অটো-অ্যাটেনডেন্ট সেটআপ',
      'ক্রস-কানেকশন, জ্যাক বক্স ও ফোনের লাইন ফল্ট ট্রাবলশুটিং',
      'অফিস রিলোকেশন ও নতুন এক্সটেনশন ক্যাবলিং সার্ভিস'
    ],
    pricingStartingFrom: '৳৭০০ থেকে শুরু',
    relatedServices: ['pbx-installation', 'intercom-installation', 'pbx-repair'],
    relatedProductSlugs: ['pbx-system', 'intercom-system', 'telephone-cable']
  },
  {
    slugPart: 'intercom-technician',
    enName: 'Intercom Technician',
    bnName: 'ইন্টারকম টেকনিশিয়ান',
    category: 'PABX & Intercom',
    descriptionSuffix: 'অ্যাপার্টমেন্ট ভবন, হাসপাতাল, হোটেল ও অফিসের জন্য অডিও ও ভিডিও ডোর ইন্টারকম সিস্টেম ওয়্যারিং, এক্সটেনশন হ্যান্ডসেট সেটআপ ও দ্রুত মেরামত।',
    keyFeatures: [
      'মাল্টি-ফ্ল্যাট বিল্ডিং ও ক্লিনিক ইন্টারকম নেটওয়ার্কিং',
      'ভিডিও ডোর ফোন ও ডোর ওপেনার সুইচ সংযোগ',
      'হ্যান্ডসেট রিং না হওয়া, নয়েজ বা কথা না শোনার সমস্যা সমাধান',
      'সুশৃঙ্খল কনসিল্ড ও এক্সটার্নাল টেলিফোন ক্যাবলিং'
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    relatedServices: ['intercom-installation', 'pbx-installation', 'intercom-repair'],
    relatedProductSlugs: ['intercom-system', 'video-door-phone', 'pbx-system']
  },
  {
    slugPart: 'biometric-machine-technician',
    enName: 'Biometric Machine Technician',
    bnName: 'বায়োমেট্রিক হাজিরা মেশিন টেকনিশিয়ান',
    category: 'Biometrics & Attendance',
    descriptionSuffix: 'ZKTeco ও অন্যান্য ব্র্যান্ডের ফিঙ্গারপ্রিন্ট ও ফেস রিকগনিশন হাজিরা মেশিন সেটআপ, পিসি সফটওয়্যার সিঙ্ক, শিফট রুল ও এক্সেল রিপোর্ট কনফিগারেশন।',
    keyFeatures: [
      'ZKTeco / ZEP ফিঙ্গারপ্রিন্ট ও ফেস ডিভাইস ওয়াল মাউন্টিং',
      'হাজিরা সফটওয়্যার ইনস্টলেশন, কর্মী ডাটা ও শিফট টাইমটেবিল সেটআপ',
      'ল্যান, ওয়াইফাই বা পেনড্রাইভের মাধ্যমে ডেটা সিঙ্ক ট্রাবলশুটিং',
      'মাসিক উপস্থিতি, লেট ও ওভারটাইম এক্সেল রিপোর্ট ট্রেনিং'
    ],
    pricingStartingFrom: '৳৮০০ থেকে শুরু',
    relatedServices: ['biometric-attendance-setup', 'fingerprint-machine-installation', 'access-control-installation'],
    relatedProductSlugs: ['biometric-attendance-machine', 'fingerprint-machine', 'access-control-system']
  },
  {
    slugPart: 'electrician',
    enName: 'Electrician',
    bnName: 'ইলেকট্রিশিয়ান',
    category: 'Electrical Wiring',
    descriptionSuffix: 'বাসা-বাড়ি, অফিস ও দোকানের সম্পূর্ণ ইলেকট্রিক্যাল হাউস ওয়্যারিং, শর্ট সার্কিট সমাধান, সার্কিট ব্রেকার (MCB/RCCB), আইপিএস সংযোগ ও সুইচবোর্ড ফিটিং।',
    keyFeatures: [
      'নতুন ও পুরোনো বাড়ি-অফিসে নিরাপদ সিঙ্গেল ও থ্রি-ফেজ ওয়্যারিং',
      'জরুরি শর্ট সার্কিট, ফল্টি কেবল ও ব্রেকার ট্রিপ দ্রুত সমাধান',
      'সার্কিট ব্রেকার ডিস্ট্রিবিউশন বোর্ড (DB) ও আর্থিং স্থাপন',
      'সিসিটিভি, আইপিএস ও হেভি লোড এসি-র ডেডিকেটেড পাওয়ার লাইন'
    ],
    pricingStartingFrom: '৳৩০০ থেকে শুরু',
    relatedServices: ['house-wiring-service', 'electrician-service', 'electrical-troubleshooting'],
    relatedProductSlugs: ['cctv-power-supply', 'cctv-cable']
  },
  {
    slugPart: 'electrical-technician',
    enName: 'Electrical Technician',
    bnName: 'ইলেকট্রিক্যাল টেকনিশিয়ান',
    category: 'Electrical Wiring',
    descriptionSuffix: 'কমার্শিয়াল ও ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল ওয়্যারিং, লোড ব্যালেন্সিং, সার্জ প্রোটেকশন, সাব-মিটার, ডিবি বক্স ড্রেসিং ও পাওয়ার ফল্ট ডায়াগনস্টিকস।',
    keyFeatures: [
      'মাল্টিমিটার ও ক্ল্যাম্প-মিটার ব্যবহার করে নিখুঁত লোড ও ভোল্টেজ চেক',
      'অফিস ও শোরুমের আধুনিক লাইটিং, পাওয়ার সকেট ও ডিবি বক্স সেটআপ',
      'সার্জ অ্যারেস্টার, ভোল্টেজ স্ট্যাবিলাইজার ও নিরাপদ গ্রাউন্ডিং',
      'ভোল্টেজ ফ্লাকচুয়েশন ও ওভারহিটিং সমস্যার স্থায়ী সমাধান'
    ],
    pricingStartingFrom: '৳৪০০ থেকে শুরু',
    relatedServices: ['electrician-service', 'house-wiring-service', 'electrical-troubleshooting'],
    relatedProductSlugs: ['cctv-power-supply', 'cctv-cable']
  },
  {
    slugPart: 'lan-network-technician',
    enName: 'LAN Network Technician',
    bnName: 'ল্যান (LAN) নেটওয়ার্ক টেকনিশিয়ান',
    category: 'Computer & LAN Networking',
    descriptionSuffix: 'অফিস, ব্যাংক, শপিং মল ও প্রতিষ্ঠানের জন্য Cat6 গিগাবিট ল্যান ক্যাবলিং, RJ45 ক্রিম্পিং, প্যাচ প্যানেল টার্মিনেশন, সুইচ কনফিগারেশন ও পিসি শেয়ারিং।',
    keyFeatures: [
      'Cat6/Cat6A হাই-স্পিড গিগাবিট ওয়্যারিং ও ল্যান টেস্টার ভেরিফিকেশন',
      'নষ্ট RJ45 জ্যাক, ওয়াল সকেট ও পোর্ট ড্রপ মেরামত',
      'রাউটার, গিগাবিট সুইচ, অ্যাক্সেস পয়েন্ট ও আইপি কনফিগারেশন',
      'ফোল্ডার, প্রিন্টার ও সার্ভার লোকাল নেটওয়ার্ক শেয়ারিং'
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    relatedServices: ['lan-network-installation', 'computer-lan-networking', 'network-troubleshooting'],
    relatedProductSlugs: ['lan-cable', 'rj45-connector', 'network-switch', 'router']
  },
  {
    slugPart: 'computer-networking-technician',
    enName: 'Computer Networking Technician',
    bnName: 'কম্পিউটার নেটওয়ার্কিং টেকনিশিয়ান',
    category: 'Computer & LAN Networking',
    descriptionSuffix: 'অফিস ও কর্পোরেট কম্পিউটার নেটওয়ার্ক আর্কিটেকচার, ওয়াইফাই মেশ, মাইক্রোটিক ও গিগাবিট রাউটার সেটআপ, ব্যান্ডউইথ ম্যানেজমেন্ট ও ল্যান ট্রাবলশুটিং।',
    keyFeatures: [
      'কমপ্লিট অফিস মাল্টি-পিসি নেটওয়ার্ক ডিজাইন ও কেবল ড্রেসিং',
      'স্লো ইন্টারনেট, পিং ল্যাগ ও ওয়াইফাই ডেড জোন দূরীকরণ',
      'মাইক্রোটিক/টিপি-লিংক রাউটার সিকিউরিটি ও গেস্ট ওয়াইফাই সেটআপ',
      'দক্ষ কম্পিউটার ও নেটওয়ার্ক ইঞ্জিনিয়ার দ্বারা অন-সাইট সাপোর্ট'
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    relatedServices: ['computer-lan-networking', 'office-network-setup', 'network-troubleshooting'],
    relatedProductSlugs: ['router', 'network-switch', 'lan-cable', 'networking-accessories']
  }
];

/**
 * Builds the 50 reversed product entries using the exact existing SEO Title
 * of their paired primary URLs (Option A) and canonicalSlug pointing to the primary URL.
 */
export function buildReversedProductsSEOData(
  baseProducts: Record<string, ProductSEOInfo>
): Record<string, ProductSEOInfo> {
  const result: Record<string, ProductSEOInfo> = {};
  for (const dist of DISTRICTS_10) {
    for (const topic of REVERSED_PRODUCT_TOPICS) {
      const primarySlug = `${dist.slug}-${topic}`;
      const reversedSlug = `${topic}-${dist.slug}`;
      const base = baseProducts[primarySlug];
      if (!base) continue;

      result[reversedSlug] = {
        ...base,
        slug: reversedSlug,
        canonicalSlug: primarySlug
      };
    }
  }
  return result;
}

/**
 * Builds the 50 reversed service entries (Option A exact paired title + canonicalSlug)
 * AND all 260 new District Technician entries (130 pairs across 10 districts).
 */
export function buildReversedAndTechnicianServicesSEOData(
  baseServices: Record<string, ServiceSEOInfo>
): Record<string, ServiceSEOInfo> {
  const result: Record<string, ServiceSEOInfo> = {};

  // 1) 50 Reversed Service URLs (paired with existing 50 URLs)
  for (const dist of DISTRICTS_10) {
    for (const topic of REVERSED_SERVICE_TOPICS) {
      const primarySlug = `${dist.slug}-${topic}`;
      const reversedSlug = `${topic}-${dist.slug}`;
      const base = baseServices[primarySlug];
      if (!base) continue;

      result[reversedSlug] = {
        ...base,
        slug: reversedSlug,
        canonicalSlug: primarySlug
      };
    }
  }

  // 2) 260 New District Technician URLs (130 pairs x 2 URLs)
  for (const dist of DISTRICTS_10) {
    for (const tech of TECHNICIAN_TOPICS_13) {
      const primarySlug = `${dist.slug}-${tech.slugPart}`;
      const reversedSlug = `${tech.slugPart}-${dist.slug}`;
      const seoTitle = `Shamim Tech Solution • ${tech.enName} ${dist.en}`;
      const metaDesc = `${dist.bn} (${dist.en}) জেলায় দক্ষ ${tech.bnName} সার্ভিস। ${tech.descriptionSuffix} ${dist.visitEta}। হটলাইন: 01790139333।`;

      const primaryEntry: ServiceSEOInfo = {
        slug: primarySlug,
        name: `${tech.enName} in ${dist.en}`,
        bnName: `${dist.bn} ${tech.bnName} সার্ভিস`,
        category: tech.category,
        title: seoTitle,
        metaDescription: metaDesc,
        h1: `${tech.enName} ${dist.en} (${dist.bn}) | Shamim Tech Solution`,
        tagline: `Certified On-Site ${tech.enName} & Fast Troubleshooting in ${dist.en}`,
        bengaliTagline: `${dist.bn}-এ দক্ষ ও অভিজ্ঞ ${tech.bnName} দিয়ে নিখুঁত অন-সাইট সেবা ও দ্রুত সমাধান`,
        description: `${dist.bn} (${dist.en}) জেলার বাসা-বাড়ি, অফিস, দোকান ও কারখানায় বিশ্বস্ত ও দক্ষ ${tech.bnName} সেবা প্রদান করছে শামীম টেক সলিউশন (STS)। ${tech.descriptionSuffix} ${dist.hubNote}। সরাসরি অন-সাইট ভিজিট ও ওয়ারেন্টি সহ কাজ করতে কল করুন 01790139333 অথবা 01865321530 নম্বরে।`,
        keyFeatures: [
          ...tech.keyFeatures,
          dist.visitEta
        ],
        processSteps: [
          {
            title: '১. কল ও সমস্যা শনাক্তকরণ',
            desc: `${dist.bn} এলাকা থেকে কল করে আপনার সমস্যার বিবরণ জানালে প্রাথমিক সমাধান ও ভিজিট শিডিউল দেওয়া হয়।`
          },
          {
            title: '২. অন-সাইট টেকনিশিয়ান ভিজিট',
            desc: `${dist.visitEta} ও প্রফেশনাল টেস্টিং টুলস সহ সরাসরি উপস্থিতি।`
          },
          {
            title: '৩. নিখুঁত কাজ ও কনফিগারেশন',
            desc: 'পরিচ্ছন্ন ক্যাবল ড্রেসিং, সঠিক কনফিগারেশন ও মূল ত্রুটির স্থায়ী সমাধান।'
          },
          {
            title: '৪. ফাইনাল চেক ও সার্ভিস ওয়ারেন্টি',
            desc: 'সম্পূর্ণ সিস্টেম পরীক্ষা করে বুঝিয়ে দেওয়া এবং ওয়ারেন্টি সাপোর্ট প্রদান।'
          }
        ],
        pricingStartingFrom: tech.pricingStartingFrom,
        warrantyInfo: 'সার্ভিস ওয়ারেন্টি ও সার্বক্ষণিক ফ্রি টেকনিক্যাল হেল্পলাইন (01790139333)',
        popularSearchKeywords: [
          `${dist.en.toLowerCase()} ${tech.enName.toLowerCase()}`,
          `${tech.enName.toLowerCase()} ${dist.en.toLowerCase()}`,
          `${dist.bn} ${tech.bnName}`,
          `${tech.bnName} ${dist.bn}`,
          `shamim tech solution ${dist.en.toLowerCase()}`
        ],
        relatedServices: tech.relatedServices,
        relatedProductSlugs: tech.relatedProductSlugs,
        faqs: [
          {
            question: `${dist.bn}-এ ${tech.bnName} সার্ভিস বুকিং দিলে কত সময়ের মধ্যে পাওয়া যাবে?`,
            answer: `${dist.bn} জেলায় আমাদের সার্ভিস টিম নিয়মিত কাজ করে (${dist.visitEta})। জরুরি সাপোর্টের জন্য 01790139333 নম্বরে কল করুন।`
          },
          {
            question: 'কাজ সম্পন্ন করার পর কোনো সার্ভিস ওয়ারেন্টি দেওয়া হয় কি?',
            answer: 'হ্যাঁ, শামীম টেক সলিউশন থেকে করা প্রতিটি ইনস্টলেশন ও সার্ভিসিংয়ের সাথে নির্ভরযোগ্য সার্ভিস ওয়ারেন্টি এবং পরবর্তী সাপোর্ট দেওয়া হয়।'
          },
          {
            question: 'নতুন যন্ত্রাংশ লাগলে কি টেকনিশিয়ান সাথে করে আনতে পারবেন?',
            answer: 'হ্যাঁ, Hikvision, Dahua, Imou, ZKTeco সহ অরিজিনাল ক্যামেরা, হার্ডডিস্ক, পাওয়ার অ্যাডাপ্টার, কানেক্টর ও ক্যাবল অফিসিয়াল ওয়ারেন্টিসহ সরবরাহ করা হয়।'
          }
        ]
      };

      result[primarySlug] = primaryEntry;
      result[reversedSlug] = {
        ...primaryEntry,
        slug: reversedSlug,
        canonicalSlug: primarySlug
      };
    }
  }

  return result;
}
