import type { ServiceSEOInfo } from './servicesSEOData';
import type { ProductSEOInfo } from './productsSEOData';

interface DistrictMeta {
  slug: string;
  en: string;
  bn: string;
}

const RANGPUR_DIVISION_DISTRICTS: DistrictMeta[] = [
  { slug: 'rangpur', en: 'Rangpur', bn: 'রংপুর' },
  { slug: 'dinajpur', en: 'Dinajpur', bn: 'দিনাজপুর' },
  { slug: 'gaibandha', en: 'Gaibandha', bn: 'গাইবান্ধা' },
  { slug: 'kurigram', en: 'Kurigram', bn: 'কুড়িগ্রাম' },
  { slug: 'nilphamari', en: 'Nilphamari', bn: 'নীলফামারী' },
  { slug: 'lalmonirhat', en: 'Lalmonirhat', bn: 'লালমনিরহাট' },
  { slug: 'panchagarh', en: 'Panchagarh', bn: 'পঞ্চগড়' },
  { slug: 'thakurgaon', en: 'Thakurgaon', bn: 'ঠাকুরগাঁও' }
];

interface ElectricalTemplate {
  prefix: string;
  enTitle: string;
  bnTitle: string;
  metaSuffix: string;
  descSuffix: string;
  price: string;
  keywords: string[];
}

const ELECTRICAL_TEMPLATES: ElectricalTemplate[] = [
  {
    prefix: 'house-wiring',
    enTitle: 'House Wiring Electrician',
    bnTitle: 'বাসাবাড়ির ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস',
    metaSuffix: 'বাসা ও ফ্ল্যাটের নিরাপদ ইলেকট্রিক্যাল ওয়্যারিং, মেইন লাইন, সুইচবোর্ড ও লাইটিং ইনস্টলেশন। অভিজ্ঞ ইলেকট্রিশিয়ান। কল: 01790139333।',
    descSuffix: 'বাসাবাড়ি ও ফ্ল্যাটের সম্পূর্ণ নিরাপদ ইলেকট্রিক্যাল ওয়্যারিং, মেইন কেবল, সুইচবোর্ড, সকেট, ফ্যান ও লাইট ইনস্টলেশন সেবা প্রদান করা হয়।',
    price: '৳৪০০ থেকে শুরু (কাজ অনুযায়ী)',
    keywords: ['house wiring', 'home electrician', 'bashar wiring']
  },
  {
    prefix: 'office-wiring',
    enTitle: 'Office Electrical Wiring Service',
    bnTitle: 'অফিস ও কর্পোরেট ইলেকট্রিক্যাল ওয়্যারিং',
    metaSuffix: 'অফিস ও প্রতিষ্ঠানের পেশাদার ইলেকট্রিক্যাল ওয়্যারিং, ডিস্ট্রিবিউশন বোর্ড, ল্যান ও পাওয়ার সকেট সেটআপ। কল: 01790139333।',
    descSuffix: 'সরকারি-বেসরকারি অফিস ও বাণিজ্যিক স্পেসের জন্য নিখুঁত লোড ব্যালেন্সিংসহ ইলেকট্রিক্যাল ওয়্যারিং, ওয়ার্কস্টেশন সকেট ও সুইচবোর্ড সেটআপ করা হয়।',
    price: '৳৫০০ থেকে শুরু',
    keywords: ['office wiring', 'office electrician', 'commercial electrical wiring']
  },
  {
    prefix: 'shop-wiring',
    enTitle: 'Shop & Store Electrical Wiring',
    bnTitle: 'দোকান ও ব্যবসা প্রতিষ্ঠানের ওয়্যারিং',
    metaSuffix: 'দোকান ও ব্যবসা প্রতিষ্ঠানের ডিসপ্লে লাইটিং, সুইচবোর্ড, সাইনবোর্ড লাইন ও নিরাপদ ওয়্যারিং সার্ভিস। কল: 01790139333।',
    descSuffix: 'দোকান ও ব্যবসা প্রতিষ্ঠানের ডেকোরেটিভ লাইটিং, ডিসপ্লে স্পটলাইট, সিসিটিভি পাওয়ার লাইন এবং নিরাপদ মেইন সুইচ ওয়্যারিং দ্রুত সম্পন্ন করা হয়।',
    price: '৳৪৫০ থেকে শুরু',
    keywords: ['shop wiring', 'dokan wiring', 'store electrician']
  },
  {
    prefix: 'shopping-mall-wiring',
    enTitle: 'Shopping Mall & Showroom Wiring',
    bnTitle: 'শপিং মল ও শোরুম ইলেকট্রিক্যাল ওয়্যারিং',
    metaSuffix: 'শপিং মল, মার্কেট দোকান ও শোরুমের আধুনিক লাইটিং ও ইলেকট্রিক্যাল ওয়্যারিং সার্ভিস। কল: 01790139333।',
    descSuffix: 'শপিং কমপ্লেক্স, মার্কেট ও আধুনিক শোরুমের ট্র্যাক লাইট, এলইডি সিলিং লাইটিং, এসি লাইন এবং ব্র্যান্ডেড সার্কিট ব্রেকারসহ সম্পূর্ণ ওয়্যারিং করা হয়।',
    price: '৳৬০০ থেকে শুরু',
    keywords: ['shopping mall wiring', 'showroom lighting wiring', 'market electrician']
  },
  {
    prefix: 'switchboard-installation',
    enTitle: 'Switchboard Installation & Repair',
    bnTitle: 'সুইচবোর্ড ইনস্টলেশন ও মেরামত',
    metaSuffix: 'নতুন সুইচবোর্ড ফিটিং, সকেট, রেগুলেটর, পুড়ে যাওয়া সুইচ পরিবর্তন ও শর্ট-সার্কিট মেরামত। কল: 01790139333।',
    descSuffix: 'বাসা, অফিস ও দোকানের নতুন গ্যাং সুইচবোর্ড লাগানো, ফ্যান রেগুলেটর, পাওয়ার সকেট স্থাপন ও পুরনো সুইচবোর্ড দ্রুত মেরামত করা হয়।',
    price: '৳৩০০ থেকে শুরু',
    keywords: ['switchboard installation', 'switchboard repair', 'gang switch fitting']
  },
  {
    prefix: 'lighting-installation',
    enTitle: 'Lighting & Fan Installation Service',
    bnTitle: 'লাইটিং, এলইডি প্যানেল ও ফ্যান সেটআপ',
    metaSuffix: 'এলইডি লাইট, টিউবলাইট, শোরুম লাইটিং, ফ্যান ফিটিং ও সাইনবোর্ড লাইট সংযোগ সার্ভিস। কল: 01790139333।',
    descSuffix: 'বাসা, দোকান, শোরুম ও অফিসের জন্য প্যানেল লাইট, ডেকোরেটিভ লাইটিং, ফ্লাডলাইট এবং সিলিং/এক্সস্ট ফ্যান প্রফেশনালভাবে লাগানো হয়।',
    price: '৳৩০০ থেকে শুরু',
    keywords: ['lighting installation', 'led light fitting', 'fan installation electrician']
  },
  {
    prefix: 'ips-wiring-installation',
    enTitle: 'IPS & Inverter Wiring Setup',
    bnTitle: 'আইপিএস ও ইনভার্টার ওয়্যারিং সেটআপ',
    metaSuffix: 'নিরাপদ আইপিএস ও ইনভার্টার ওয়্যারিং, ব্যাকআপ লাইন ভাগ করা ও ব্যাটারি কানেকশন সার্ভিস। কল: 01790139333।',
    descSuffix: 'বাসা, অফিস ও দোকানের নির্দিষ্ট লাইট, ফ্যান, রাউটার ও সিসিটিভি ক্যামেরার জন্য সম্পূর্ণ আলাদা ও নিরাপদ আইপিএস ব্যাকআপ লাইন ওয়্যারিং করা হয়।',
    price: '৳৫০০ থেকে শুরু',
    keywords: ['ips wiring', 'ips installation', 'inverter wiring service']
  },
  {
    prefix: 'circuit-breaker-mcb-installation',
    enTitle: 'Circuit Breaker (MCB) & SDB Setup',
    bnTitle: 'সার্কিট ব্রেকার ও ডিস্ট্রিবিউশন বোর্ড সেটআপ',
    metaSuffix: 'অরিজিনাল সার্কিট ব্রেকার (MCB/RCCB), মেইন সুইচ ও শর্ট-সার্কিট সুরক্ষা সেটআপ সার্ভিস। কল: 01790139333।',
    descSuffix: 'শর্ট-সার্কিট ও আগুনের ঝুঁকি কমাতে প্রতিটি রুম ও ভারী লাইনের জন্য অরিজিনাল MCB/RCCB সার্কিট ব্রেকার ও ডিস্ট্রিবিউশন বোর্ড সেটআপ করা হয়।',
    price: '৳৪৫০ থেকে শুরু',
    keywords: ['circuit breaker installation', 'mcb setup', 'short circuit protection']
  }
];

function buildDistrictElectricalServices(): Record<string, ServiceSEOInfo> {
  const result: Record<string, ServiceSEOInfo> = {};

  for (const dist of RANGPUR_DIVISION_DISTRICTS) {
    for (const tpl of ELECTRICAL_TEMPLATES) {
      const slug = `${tpl.prefix}-${dist.slug}`;
      result[slug] = {
        slug,
        name: `${tpl.enTitle} in ${dist.en}`,
        bnName: `${dist.bn} ${tpl.bnTitle}`,
        category: 'Electrical Wiring',
        title: `Shamim Tech Solution • ${tpl.enTitle} ${dist.en} (${dist.bn})`,
        metaDescription: `${dist.bn} (${dist.en}) এলাকায় ${tpl.metaSuffix}`,
        h1: `${tpl.enTitle} in ${dist.en} (${dist.bn})`,
        tagline: `Safe, Neat & Certified Electrical Service in ${dist.en}, Rangpur Division`,
        bengaliTagline: `${dist.bn} জেলায় অভিজ্ঞ ইলেকট্রিশিয়ান দ্বারা নিরাপদ ও পরিচ্ছন্ন ইলেকট্রিক্যাল সেবা`,
        description: `শামীম টেক সলিউশন ${dist.bn} (${dist.en}) ও আশপাশের এলাকায় অভিজ্ঞ ও বিশ্বস্ত ইলেকট্রিশিয়ানের মাধ্যমে ${tpl.descSuffix} আমরা উন্নতমানের কেবল ও ব্র্যান্ডেড সার্কিট ব্রেকার ব্যবহার করে শতভাগ নিরাপদ সংযোগ নিশ্চিত করি।`,
        keyFeatures: [
          `${dist.bn} জেলার বাসা, দোকান, অফিস ও শোরুমে দ্রুত অন-সাইট টেকনিশিয়ান সার্ভিস`,
          'সঠিক কেবল গেজ ও লোড হিসাব অনুযায়ী নিরাপদ ওয়্যারিং ও পিভিসি কেসিং',
          'শর্ট-সার্কিট মুক্ত সুরক্ষিত সুইচবোর্ড ও সার্কিট ব্রেকার সংযোগ',
          'স্বচ্ছ খরচ ও কাজ শেষে পরিপূর্ণ লোড চেকিং সুবিধা'
        ],
        processSteps: [
          { title: '১. কল ও কাজের বিবরণ', desc: `${dist.bn} থেকে 01790139333 নম্বরে কল করে কাজের ধরন জানান।` },
          { title: '২. পরিদর্শন ও হিসাব', desc: 'টেকনিশিয়ান প্রয়োজনীয় পয়েন্ট, তার ও মালামালের সঠিক তালিকা দেবেন।' },
          { title: '৩. নিখুঁত ওয়্যারিং ও ফিটিং', desc: 'পরিচ্ছন্নভাবে কেসিং, বোর্ড, ব্রেকার ও লাইট/সকেট স্থাপন।' },
          { title: '৪. সেফটি টেস্ট ও হস্তান্তর', desc: 'ভোল্টেজ ও লোড পরীক্ষা করে নিরাপদ সংযোগ বুঝিয়ে দেওয়া।' }
        ],
        pricingStartingFrom: tpl.price,
        warrantyInfo: 'কাজের স্থায়িত্ব ও সংযোগ নিরাপত্তার নির্ভরযোগ্য সার্ভিস নিশ্চয়তা',
        popularSearchKeywords: [
          ...tpl.keywords.map((k) => `${k} ${dist.slug}`),
          `${dist.slug} electrician`,
          `${dist.bn} ইলেকট্রিশিয়ান`
        ],
        relatedServices: [
          `${dist.slug}-electrician`,
          `house-wiring-${dist.slug}`,
          `switchboard-installation-${dist.slug}`,
          `${dist.slug}-cctv-installation`
        ],
        relatedProductSlugs: ['cctv-cable', 'cctv-power-supply', 'ips-inverter-ups-cctv-backup-bd'],
        faqs: [
          {
            question: `${dist.bn} জেলায় এই ইলেকট্রিক্যাল কাজ করাতে কীভাবে যোগাযোগ করব?`,
            answer: `সরাসরি 01790139333 অথবা 01865321530 নম্বরে কল বা WhatsApp করলেই আমাদের অভিজ্ঞ টেকনিশিয়ান দ্রুত সার্ভিস দেবেন।`
          },
          {
            question: 'পুরনো লাইন বা সুইচবোর্ড মেরামতের কাজও কি করা হয়?',
            answer: 'হ্যাঁ, নতুন লাইন করার পাশাপাশি শর্ট-সার্কিট ঠিক করা, পুরনো বোর্ড পরিবর্তন ও আইপিএস লাইন আলাদা করার কাজও করা হয়।'
          }
        ]
      };
    }
  }

  return result;
}

const EXTRA_SERVICES: Record<string, ServiceSEOInfo> = {
  'single-floor-house-concealed-wiring-rangpur': {
    slug: 'single-floor-house-concealed-wiring-rangpur',
    name: '1-Story House Concealed Wiring Rangpur',
    bnName: 'রংপুর ১ তলা বাসা কনসিল ওয়্যারিং সার্ভিস',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • 1-Story House Concealed Wiring Rangpur',
    metaDescription: 'রংপুরে ১ তলা বাসার ছাদ পাইপ ও দেয়াল কাটা কনসিলড ইলেকট্রিক্যাল ওয়্যারিং, সুইচবোর্ড ও ব্রেকার সেটআপ। কল: 01790139333।',
    h1: 'Single-Floor (1-Story) House Concealed Electrical Wiring in Rangpur',
    tagline: 'Clean Conduit Pipe Routing & Safe Concealed Wiring for Single-Story Homes',
    bengaliTagline: '১ তলা নতুন বা নির্মীয়মাণ বাসার পরিচ্ছন্ন কনসিলড পাইপ ওয়্যারিং সমাধান',
    description: 'রংপুর ও আশপাশের এলাকায় ১ তলা বাসাবাড়ির জন্য সম্পূর্ণ কনসিলড ইলেকট্রিক্যাল ওয়্যারিং, কন্ডুইট পাইপ ফিটিং, মেইন বোর্ড, রুম সুইচবোর্ড এবং আইপিএস ব্যাকআপ লাইন অভিজ্ঞ টেকনিশিয়ান দিয়ে যত্নসহকারে করা হয়।',
    keyFeatures: [
      '১ তলা বাসার জন্য উপযোগী পিভিসি কনসিলড পাইপ ও সার্কিট বক্স ফিটিং',
      'রুম অনুযায়ী আলাদা ব্রেকার (MCB) ও আইপিএস/মেইন লাইন সেপারেশন',
      'ফ্যান, লাইট, এসি/ফ্রিজ ও সিসিটিভি পয়েন্ট আগে থেকেই প্ল্যানিং সুবিধা',
      'নিরাপদ আর্থিং ও শর্ট-সার্কিট মুক্ত তার সংযোগ'
    ],
    processSteps: [
      { title: '১. বাসার রুম ও পয়েন্ট প্ল্যানিং', desc: 'কোথায় লাইট, ফ্যান, সকেট ও সুইচবোর্ড হবে তা নির্ধারণ।' },
      { title: '২. পাইপ ও বক্স সেটআপ', desc: 'দেয়াল ও ছাদে নিখুঁতভাবে কনসিলড পাইপ ও গ্যাং বক্স স্থাপন।' },
      { title: '৩. কেবল টানা ও বোর্ড ফিটিং', desc: 'সঠিক গেজের তার টেনে সুইচবোর্ড ও ব্রেকার সংযোগ।' },
      { title: '৪. পূর্ণাঙ্গ টেস্টিং', desc: 'প্রতিটি সুইচ, সকেট ও লোড চেক করে বাসার কাজ বুঝিয়ে দেওয়া।' }
    ],
    pricingStartingFrom: 'আলোচনা সাপেক্ষে সাশ্রয়ী রেট',
    warrantyInfo: 'শতভাগ নিরাপদ ও মানসম্মত কাজের নিশ্চয়তা',
    popularSearchKeywords: ['single floor concealed wiring rangpur', '1 tala bashar concealed wiring rangpur', 'house concealed wiring rangpur'],
    relatedServices: ['house-wiring-rangpur', 'switchboard-installation-rangpur', 'ips-wiring-installation-rangpur'],
    relatedProductSlugs: ['ips-inverter-ups-cctv-backup-bd', 'cctv-cable'],
    faqs: [
      { question: '১ তলা বাসার কনসিল ওয়্যারিংয়ে কি সিসিটিভি ক্যামেরার পাইপও দেওয়া যাবে?', answer: 'হ্যাঁ, বাসার কনসিল ওয়্যারিং করার সময়ই সিসিটিভি ও ইন্টারনেট কেবলের আলাদা কনসিল লাইন করে দেওয়া যায়।' }
    ]
  },
  'haragachh-single-floor-concealed-wiring': {
    slug: 'haragachh-single-floor-concealed-wiring',
    name: 'Haragachh 1-Story House Concealed Wiring',
    bnName: 'হারাগাছ ১ তলা বাসা কনসিল ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Haragachh 1-Story House Concealed Wiring',
    metaDescription: 'হারাগাছে ১ তলা বাসাবাড়ির কনসিলড ইলেকট্রিক্যাল ওয়্যারিং, পাইপ ফিটিং, সুইচবোর্ড ও আইপিএস লাইন সেটআপ। কল: 01790139333।',
    h1: '1-Story House Concealed Wiring Service in Haragachh, Rangpur',
    tagline: 'Trusted Local Electrician for Single-Story Concealed Wiring in Haragachh',
    bengaliTagline: 'হারাগাছ ও কাউনিয়া এলাকায় ১ তলা বাসার নির্ভরযোগ্য কনসিলড ওয়্যারিং সার্ভিস',
    description: 'হারাগাছ এলাকায় নতুন বা ১ তলা পাকা বাসার জন্য পরিচ্ছন্ন কনসিলড ওয়্যারিং, ছাদ/দেয়াল পাইপিং, সুইচবোর্ড, সার্কিট ব্রেকার ও আইপিএস ব্যাকআপ ওয়্যারিংয়ের বিশ্বস্ত সেবা দেয় শামীম টেক সলিউশন।',
    keyFeatures: [
      'হারাগাছ এলাকায় সরাসরি সাইট ভিজিট ও পয়েন্ট নির্ধারণ',
      '১ তলা বাসার প্রতিটি রুমের নিরাপদ কেবল সাইজ নির্বাচন',
      'সিসিটিভি, ওয়াইফাই রাউটার ও আইপিএস-এর আলাদা লাইন সুবিধা'
    ],
    processSteps: [
      { title: '১. সাইট ভিজিট', desc: 'হারাগাছে আপনার বাসায় গিয়ে রুম ও পয়েন্ট দেখা।' },
      { title: '২. পাইপ ও বোর্ড স্থাপন', desc: 'দেয়াল ও সিলিংয়ে নিরাপদ কনসিল পাইপ ও বক্স লাগানো।' },
      { title: '৩. ওয়্যারিং ও ব্রেকার সেটআপ', desc: 'তার টেনে সুইচবোর্ড ও MCB সংযোগ সম্পন্ন।' },
      { title: '৪. টেস্ট ও ডেলিভারি', desc: 'সব লাইন চালু করে পরীক্ষা সম্পন্ন করা।' }
    ],
    pricingStartingFrom: 'আলোচনা সাপেক্ষে সাশ্রয়ী রেট',
    warrantyInfo: 'সঠিক সংযোগ ও নিরাপত্তার নিশ্চয়তা',
    popularSearchKeywords: ['haragachh concealed wiring', 'haragach 1 story house wiring', 'haragachh house electrician'],
    relatedServices: ['haragachh-house-wiring', 'haragachh-electrician', 'haragachh-switchboard-installation'],
    relatedProductSlugs: ['ips-inverter-ups-cctv-backup-bd'],
    faqs: [
      { question: 'হারাগাছের বাইরে আশপাশেও কি ১ তলা বাসার কনসিল ওয়্যারিং করেন?', answer: 'হ্যাঁ, হারাগাছ, কাউনিয়া ও রংপুর শহর এলাকায় এই সার্ভিস দেওয়া হয়।' }
    ]
  },
  'haragachh-shop-wiring': {
    slug: 'haragachh-shop-wiring',
    name: 'Haragachh Shop & Store Electrical Wiring',
    bnName: 'হারাগাছ দোকান ও ব্যবসা প্রতিষ্ঠানের ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Haragachh Shop Electrical Wiring Service',
    metaDescription: 'হারাগাছ বাজারের দোকান, ফার্মেসি ও ব্যবসা প্রতিষ্ঠানের নিরাপদ ইলেকট্রিক্যাল ওয়্যারিং, লাইটিং ও সুইচবোর্ড সার্ভিস। কল: 01790139333।',
    h1: 'Shop Electrical Wiring Service in Haragachh, Rangpur',
    tagline: 'Reliable Shop Lighting, Switchboards & Power Setup in Haragachh',
    bengaliTagline: 'হারাগাছের দোকান, ফার্মেসি ও বাণিজ্যিক প্রতিষ্ঠানের দ্রুত ও নিরাপদ ওয়্যারিং',
    description: 'হারাগাছ বাজার ও আশপাশের দোকান, ফার্মেসি, টেইলার্স ও অফিসের জন্য নতুন ইলেকট্রিক্যাল ওয়্যারিং, এলইডি লাইটিং, সিসিটিভি পাওয়ার লাইন ও সুইচবোর্ড মেরামত সেবা।',
    keyFeatures: [
      'দোকানের ডিসপ্লে লাইট, সাইনবোর্ড ও কাউন্টার সকেট সেটআপ',
      'হারাগাছে জরুরি শর্ট-সার্কিট ও মেইন সুইচ মেরামত',
      'কম খরচে ও দ্রুত সময়ে দোকানের সম্পূর্ণ ওয়্যারিং'
    ],
    processSteps: [
      { title: '১. কল ও পরিদর্শন', desc: 'হারাগাছে দোকানের লোড ও লাইটিং চাহিদা দেখা।' },
      { title: '২. কেবল ও বোর্ড ফিটিং', desc: 'কেসিংসহ নিরাপদ তার, সুইচবোর্ড ও ব্রেকার স্থাপন।' },
      { title: '৩. লাইট ও ফ্যান সংযোগ', desc: 'সব লাইট, ফ্যান ও সাইনবোর্ড চালু করে পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳৪০০ থেকে শুরু',
    warrantyInfo: 'নির্ভরযোগ্য সার্ভিস ও নিরাপদ সংযোগ',
    popularSearchKeywords: ['haragachh shop wiring', 'haragach dokan wiring', 'haragachh electrician'],
    relatedServices: ['haragachh-electrician', 'haragachh-shopping-mall-wiring', 'haragachh-cctv-installation'],
    relatedProductSlugs: ['shop-cctv-package-rangpur'],
    faqs: [
      { question: 'দোকানের পুরনো শর্ট-সার্কিট সমস্যাও কি ঠিক করেন?', answer: 'হ্যাঁ, হারাগাছে দোকানের যেকোনো শর্ট-সার্কিট, সুইচবোর্ড বা লাইটিং সমস্যা দ্রুত ঠিক করা হয়।' }
    ]
  },
  'haragachh-shopping-mall-wiring': {
    slug: 'haragachh-shopping-mall-wiring',
    name: 'Haragachh Shopping Mall & Showroom Wiring',
    bnName: 'হারাগাছ শপিং ও শোরুম ইলেকট্রিক্যাল ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Haragachh Shopping & Showroom Wiring',
    metaDescription: 'হারাগাছে শপিং মল দোকান, বস্ত্রালয় ও শোরুমের আধুনিক এলইডি লাইটিং, সুইচবোর্ড ও ইলেকট্রিক্যাল ওয়্যারিং। কল: 01790139333।',
    h1: 'Shopping Complex & Showroom Electrical Wiring in Haragachh',
    tagline: 'Bright Display Lighting & Safe Power Distribution for Showrooms in Haragachh',
    bengaliTagline: 'হারাগাছের শোরুম, বস্ত্রালয় ও শপিং দোকানের আধুনিক লাইটিং ও ওয়্যারিং',
    description: 'হারাগাছ বাজারের কাপড়ের দোকান, কসমেটিকস, মোবাইল শোরুম ও শপিং মার্কেটের জন্য আকর্ষণীয় ডিসপ্লে লাইটিং, প্যানেল লাইট, এসি লাইন এবং নিরাপদ সার্কিট ব্রেকার ওয়্যারিং করা হয়।',
    keyFeatures: [
      'শোরুমের পণ্য উজ্জ্বল দেখাতে এলইডি স্পট ও প্রোফাইল লাইটিং সেটআপ',
      'ভারী লোডের জন্য আলাদা ব্রেকার ও নিরাপদ সুইচবোর্ড',
      'সিসিটিভি ও ক্যাশ কাউন্টারের জন্য নিরবচ্ছিন্ন পাওয়ার লাইন'
    ],
    processSteps: [
      { title: '১. ডেকোরেশন প্ল্যান অনুযায়ী পরিদর্শন', desc: 'সেলিং ও র‍্যাক অনুযায়ী লাইটিং পয়েন্ট ঠিক করা।' },
      { title: '২. ওয়্যারিং ও ব্রেকার স্থাপন', desc: 'নিরাপদ কেবল ও ডিস্ট্রিবিউশন বোর্ড ফিটিং।' },
      { title: '৩. লাইট ও ডিসপ্লে টেস্ট', desc: 'সব স্পটলাইট, প্যানেল ও সকেট চালু করে হস্তান্তর।' }
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    warrantyInfo: 'সুরক্ষিত ওয়্যারিং ও দ্রুত সার্ভিস সাপোর্ট',
    popularSearchKeywords: ['haragachh showroom wiring', 'haragachh shopping mall wiring', 'haragach showroom lighting'],
    relatedServices: ['haragachh-shop-wiring', 'haragachh-lighting-installation', 'haragachh-electrician'],
    relatedProductSlugs: ['4-camera-cctv-package-price-bd'],
    faqs: [
      { question: 'নতুন শোরুম ডেকোরেশনের সাথে লাইটিং ও ওয়্যারিং করে দেন?', answer: 'হ্যাঁ, শোরুম বা দোকানের ডেকোরেশন বোর্ডের সাথে সমন্বয় করে সম্পূর্ণ ওয়্যারিং ও লাইটিং করা হয়।' }
    ]
  },
  'haragachh-lighting-installation': {
    slug: 'haragachh-lighting-installation',
    name: 'Haragachh Lighting Installation Service',
    bnName: 'হারাগাছ লাইটিং ও ফ্যান ইনস্টলেশন',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Haragachh Lighting & Fan Installation',
    metaDescription: 'হারাগাছে বাসা, দোকান ও শোরুমের এলইডি লাইট, ফ্লাডলাইট, ঝাড়বাতি ও ফ্যান ফিটিং সার্ভিস। কল: 01790139333।',
    h1: 'Lighting & Ceiling Fan Installation in Haragachh, Rangpur',
    tagline: 'Clean Indoor & Outdoor Lighting Setup in Haragachh',
    bengaliTagline: 'হারাগাছে ইনডোর-আউটডোর লাইট, সাইনবোর্ড লাইটিং ও ফ্যান ইনস্টলেশন',
    description: 'হারাগাছ এলাকায় বাসা, দোকান, শোরুম ও প্রতিষ্ঠানের জন্য এলইডি প্যানেল লাইট, টিউবলাইট, বাগানের/গেটের ফ্লাডলাইট, সাইনবোর্ড লাইটিং এবং সিলিং ফ্যান দ্রুত ও নিরাপদভাবে ইনস্টল করা হয়।',
    keyFeatures: [
      'সিলিং প্যানেল লাইট, স্ট্রিপ লাইট ও ফ্লাডলাইট ফিটিং',
      'সিলিং ও ওয়াল ফ্যান এবং রেগুলেটর সংযোগ',
      'নিরাপদ জয়েন্ট ও ইনসুলেশন ব্যবস্থা'
    ],
    processSteps: [
      { title: '১. কাজের স্থান নির্ধারণ', desc: 'লাইট ও ফ্যানের সঠিক পজিশন ঠিক করা।' },
      { title: '২. ফিটিং ও তার সংযোগ', desc: 'সুরক্ষিতভাবে লাইট ও ফ্যান স্থাপন।' },
      { title: '৩. টেস্ট', desc: 'প্রতিটি লাইট ও ফ্যানের গতি পরীক্ষা করে বুঝিয়ে দেওয়া।' }
    ],
    pricingStartingFrom: '৳৩০০ থেকে শুরু',
    warrantyInfo: 'সঠিক সংযোগ নিশ্চয়তা',
    popularSearchKeywords: ['haragachh lighting installation', 'haragachh light fitting', 'haragachh fan technician'],
    relatedServices: ['haragachh-electrician', 'haragachh-switchboard-installation'],
    relatedProductSlugs: ['ips-inverter-ups-cctv-backup-bd'],
    faqs: [
      { question: 'বাসায় কয়েকটি লাইট বা ফ্যান লাগাতে চাইলে কি আসেন?', answer: 'হ্যাঁ, হারাগাছে ছোট বা বড় যেকোনো কাজের জন্যই আমাদের টেকনিশিয়ান সার্ভিস দেন।' }
    ]
  },
  'haragachh-ips-wiring-installation': {
    slug: 'haragachh-ips-wiring-installation',
    name: 'Haragachh IPS & Inverter Wiring Setup',
    bnName: 'হারাগাছ আইপিএস ও ইনভার্টার ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Haragachh IPS Wiring Installation',
    metaDescription: 'হারাগাছে বাসা ও দোকানের নিরাপদ আইপিএস ওয়্যারিং, ব্যাকআপ লাইন ভাগ করা ও সিসিটিভি আইপিএস সংযোগ। কল: 01790139333।',
    h1: 'IPS & Inverter Wiring Service in Haragachh, Rangpur',
    tagline: 'Safe IPS Backup Line Separation for Homes & Shops in Haragachh',
    bengaliTagline: 'হারাগাছে বাসা, দোকান ও সিসিটিভি সিস্টেমের নিরাপদ আইপিএস ওয়্যারিং',
    description: 'হারাগাছে নতুন বা পুরনো বাসা ও দোকানে আইপিএস লাগানোর সময় কোন কোন লাইট, ফ্যান, ওয়াইফাই রাউটার ও সিসিটিভি ক্যামেরা ব্যাকআপে চলবে, তা নিরাপদভাবে আলাদা ওয়্যারিং করে দেওয়া হয়।',
    keyFeatures: [
      'সিঙ্গেল ওয়ার বা টু-ওয়ার নিরাপদ আইপিএস লাইন সেটআপ',
      'ভারী লোড বাদ দিয়ে শুধু প্রয়োজনীয় লাইন আইপিএস-এ যুক্ত করা',
      'সিসিটিভি DVR/NVR ও WiFi রাউটার আইপিএস ব্যাকআপ সংযোগ'
    ],
    processSteps: [
      { title: '১. লোড ও রুম লিস্ট', desc: 'কয়টি লাইট ও ফ্যান চলবে তা নির্ধারণ।' },
      { title: '২. আইপিএস ওয়্যারিং', desc: 'সুইচবোর্ডে নিরাপদভাবে ব্যাকআপ লাইন ভাগ করা।' },
      { title: '৩. লোড ও ব্যাকআপ টেস্ট', desc: 'মেইন বিদ্যুৎ বন্ধ করে আইপিএস ব্যাকআপ পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    warrantyInfo: 'সুরক্ষিত রিভার্স-ভোল্টেজ মুক্ত সংযোগ',
    popularSearchKeywords: ['haragachh ips wiring', 'haragach ips installation', 'haragachh inverter setup'],
    relatedServices: ['haragachh-electrician', 'ips-wiring-installation-rangpur'],
    relatedProductSlugs: ['ips-inverter-ups-cctv-backup-bd'],
    faqs: [
      { question: 'আমার পুরনো বাসায় কি আলাদা করে আইপিএস লাইন টানা যাবে?', answer: 'হ্যাঁ, দেয়াল না ভেঙে সুন্দর পিভিসি কেসিং বা বিদ্যমান পাইপ ব্যবহার করেই আইপিএস লাইন করে দেওয়া যায়।' }
    ]
  },
  'haragachh-circuit-breaker-installation': {
    slug: 'haragachh-circuit-breaker-installation',
    name: 'Haragachh Circuit Breaker & Distribution Box Setup',
    bnName: 'হারাগাছ সার্কিট ব্রেকার ও ডিবি বক্স সেটআপ',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Haragachh Circuit Breaker Setup',
    metaDescription: 'হারাগাছে বাসা ও দোকানের শর্ট-সার্কিট সুরক্ষায় MCB/RCCB সার্কিট ব্রেকার ও ডিবি বক্স ইনস্টলেশন। কল: 01790139333।',
    h1: 'Circuit Breaker (MCB) & Safety Box Installation in Haragachh',
    tagline: 'Protect Homes & Shops from Short Circuits in Haragachh',
    bengaliTagline: 'হারাগাছে শর্ট-সার্কিট ও ওভারলোড সুরক্ষায় অরিজিনাল সার্কিট ব্রেকার স্থাপন',
    description: 'হারাগাছে বাসাবাড়ি, দোকান ও প্রতিষ্ঠানের আগুনের ঝুঁকি ও শর্ট-সার্কিট প্রতিরোধে মূল লাইন, এসি/মোটর লাইন এবং রুম লাইনের জন্য উপযুক্ত অ্যাম্পিয়ারের সার্কিট ব্রেকার স্থাপন করা হয়।',
    keyFeatures: [
      'রুম ও লোড অনুযায়ী সঠিক অ্যাম্পিয়ার (6A–63A) MCB ব্রেকার নির্ধারণ',
      'পুরনো ফিউজ বাদ দিয়ে আধুনিক ব্রেকার ডিস্ট্রিবিউশন বক্স ফিটিং',
      'বারবার ব্রেকার ট্রিপ করার সমস্যার সমাধান'
    ],
    processSteps: [
      { title: '১. লোড পরীক্ষা', desc: 'মোট ব্যবহৃত লোড ও লাইন সংখ্যা যাচাই।' },
      { title: '২. ডিবি বক্স ও ব্রেকার ফিটিং', desc: 'সুরক্ষিতভাবে ব্রেকারগুলো বসিয়ে তার টাইট সংযোগ।' },
      { title: '৩. টেস্ট', desc: 'প্রতিটি লাইন আলাদাভাবে চালু করে পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳৪৫০ থেকে শুরু',
    warrantyInfo: 'সঠিক লোড ব্যালেন্সিং ও নিরাপত্তা নিশ্চয়তা',
    popularSearchKeywords: ['haragachh circuit breaker', 'haragachh mcb installation', 'haragachh db box setup'],
    relatedServices: ['haragachh-switchboard-installation', 'haragachh-electrician'],
    relatedProductSlugs: ['ips-inverter-ups-cctv-backup-bd'],
    faqs: [
      { question: 'ঘরের লাইন বারবার ট্রিপ করলে কি সমাধান করে দেন?', answer: 'হ্যাঁ, শর্ট-সার্কিট বা ফল্টি ব্রেকার খুঁজে বের করে স্থায়ী সমাধান দেওয়া হয়।' }
    ]
  },
  'rangpur-ac-line-electrical-wiring': {
    slug: 'rangpur-ac-line-electrical-wiring',
    name: 'Rangpur AC Power Line & Heavy Socket Wiring',
    bnName: 'রংপুর এসি লাইন ও পাওয়ার সকেট ওয়্যারিং',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Rangpur AC Power Line Wiring Service',
    metaDescription: 'রংপুরে এসি (AC) চালানোর জন্য আলাদা হেভি কেবল লাইন, সার্কিট ব্রেকার ও পাওয়ার সকেট ইনস্টলেশন। কল: 01790139333।',
    h1: 'Dedicated AC Power Line Electrical Wiring in Rangpur',
    tagline: 'Heavy-Gauge Cable, Dedicated MCB & Power Socket for Air Conditioners',
    bengaliTagline: 'রংপুরে বাসা, অফিস ও শোরুমের এসির জন্য নিরাপদ আলাদা হেভি পাওয়ার লাইন',
    description: 'রংপুরে ১ টন, ১.৫ টন ও ২ টন এসির জন্য মেইন বোর্ড থেকে সরাসরি হেভি কেবল দিয়ে আলাদা সার্কিট ব্রেকার ও পাওয়ার সকেট ওয়্যারিং করা হয়, যাতে তার গরম হওয়া বা শর্ট-সার্কিট না হয়।',
    keyFeatures: [
      '১/১.৫/২ টন এসির লোড উপযোগী হেভি গেজ কেবল ব্যবহার',
      'আলাদা 20A/32A MCB সার্কিট ব্রেকার ও হেভি পাওয়ার সকেট',
      'তার না পুড়ে নিরাপদ ও নিরবচ্ছিন্ন এসি চালানোর নিশ্চয়তা'
    ],
    processSteps: [
      { title: '১. এসি লোড ও দূরত্ব দেখা', desc: 'মেইন বোর্ড থেকে এসি পর্যন্ত মাপ ও কেবল নির্ধারণ।' },
      { title: '২. কেসিং ও কেবল টানা', desc: 'দেয়ালের পাশ দিয়ে পরিচ্ছন্নভাবে কেবল স্থাপন।' },
      { title: '৩. ব্রেকার ও সকেট সংযোগ', desc: 'পাওয়ার চেক করে এসি লাইন প্রস্তুত করা।' }
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু (মজুরি)',
    warrantyInfo: 'সুরক্ষিত ওভারলোড মুক্ত সংযোগ',
    popularSearchKeywords: ['ac line wiring rangpur', 'ac power socket setup rangpur', 'ac circuit breaker electrician rangpur'],
    relatedServices: ['circuit-breaker-mcb-installation-rangpur', 'house-wiring-rangpur'],
    relatedProductSlugs: ['ips-inverter-ups-cctv-backup-bd'],
    faqs: [
      { question: 'এসি লাগানোর আগে কি আলাদা পাওয়ার লাইন করে নিতে হয়?', answer: 'হ্যাঁ, এসির অতিরিক্ত লোডের জন্য সাধারণ সকেটের বদলে আলাদা ব্রেকারসহ হেভি লাইন নেওয়া নিরাপদ।' }
    ]
  },
  'rangpur-sound-pa-system-setup': {
    slug: 'rangpur-sound-pa-system-setup',
    name: 'Rangpur Mosque, School & Office Sound / PA System Setup',
    bnName: 'রংপুর মসজিদ, স্কুল ও অফিস সাউন্ড (PA) সিস্টেম সেটআপ',
    category: 'Electrical Wiring',
    title: 'Shamim Tech Solution • Rangpur Sound & PA System Setup Service',
    metaDescription: 'রংপুরে মসজিদ, মাদ্রাসা, স্কুল, অফিস ও মার্কেটের মাইক, অ্যামপ্লিফায়ার, স্পিকার ওয়্যারিং ও সাউন্ড সিস্টেম সেটআপ। কল: 01790139333।',
    h1: 'Mosque, School & Office Sound / PA System Installation in Rangpur',
    tagline: 'Crystal Clear Audio Distribution, Speaker Wiring & Amplifier Tuning',
    bengaliTagline: 'রংপুরে মসজিদ, স্কুল, অফিস ও শোরুমের পরিচ্ছন্ন সাউন্ড সিস্টেম ও স্পিকার ওয়্যারিং',
    description: 'রংপুর বিভাগ জুড়ে মসজিদ, মাদ্রাসা, স্কুল-কলেজ, অফিস ও শপিং মলের জন্য ওয়াল স্পিকার, সিলিং স্পিকার, মাইক ও অ্যামপ্লিফায়ার ওয়্যারিং এবং সাউন্ড সেটআপ সেবা দেওয়া হয়।',
    keyFeatures: [
      'ইকো ও শোঁ-শোঁ শব্দ মুক্ত স্পষ্ট সাউন্ড টিউনিং',
      'নিরাপদ ও পরিচ্ছন্ন স্পিকার কেবল কেসিং ও কানেকশন',
      'মসজিদের ভেতর-বাইরে সমান ভলিউম ব্যালেন্সিং'
    ],
    processSteps: [
      { title: '১. স্পিকার পজিশন নির্ধারণ', desc: 'ভবনের ভেতর ও বাইরে স্পিকারের সঠিক স্থান নির্বাচন।' },
      { title: '২. স্পিকার ও মাইক ওয়্যারিং', desc: 'কেসিংসহ তার টেনে অ্যামপ্লিফায়ারের সাথে সংযোগ।' },
      { title: '৩. সাউন্ড টিউনিং', desc: 'ফিডব্যাক মুক্ত স্পষ্ট অডিও সেট করে হস্তান্তর।' }
    ],
    pricingStartingFrom: '৳৮০০ থেকে শুরু',
    warrantyInfo: 'স্পষ্ট সাউন্ড ও নিরাপদ ওয়্যারিং নিশ্চয়তা',
    popularSearchKeywords: ['sound system setup rangpur', 'mosque sound wiring rangpur', 'pa system technician rangpur'],
    relatedServices: ['rangpur-electrician', 'pbx-installation'],
    relatedProductSlugs: ['panasonic-pabx-intercom-machine-price-bd'],
    faqs: [
      { question: 'পুরনো মসজিদ বা অফিসের মাইক/স্পিকার লাইনে শব্দ কম বা কিচকিচ করলে কি ঠিক করেন?', answer: 'হ্যাঁ, পুরনো তার পরিবর্তন, স্পিকার ম্যাচিং ও অ্যামপ্লিফায়ার সেটিংস ঠিক করে দেওয়া হয়।' }
    ]
  },

  // Group 2: ZKTeco, Anviz, PBX, Smart Lock, Tiandy & CCTV Package Services (16 URLs)
  'zkteco-attendance-machine-setup-rangpur': {
    slug: 'zkteco-attendance-machine-setup-rangpur',
    name: 'ZKTeco Attendance Machine Setup in Rangpur',
    bnName: 'রংপুর ZKTeco ফিঙ্গারপ্রিন্ট ও অ্যাটেনডেন্স মেশিন সেটআপ',
    category: 'Biometrics & Attendance',
    title: 'Shamim Tech Solution • ZKTeco Attendance Machine Setup Rangpur',
    metaDescription: 'রংপুরে ZKTeco ফিঙ্গারপ্রিন্ট ও ফেস অ্যাটেনডেন্স মেশিন ইনস্টলেশন, সফটওয়্যার সেটআপ ও রিপোর্ট ট্রেনিং। কল: 01790139333।',
    h1: 'ZKTeco Biometric Attendance Machine Installation in Rangpur',
    tagline: 'Official ZKTeco Hardware, ZKTeco Software Setup & Payroll Export',
    bengaliTagline: 'রংপুরে ZKTeco ফিঙ্গারপ্রিন্ট ও ফেস মেশিন বিক্রয়, ইনস্টলেশন ও সফটওয়্যার সেটআপ',
    description: 'অফিস, স্কুল, কলেজ, হাসপাতাল ও ফ্যাক্টরির জন্য অরিজিনাল ZKTeco K40, F18, SpeedFace ও ইনজিনিয়াস মডেল বিক্রয়, দেয়ালে স্থাপন, ল্যান/ওয়াইফাই সংযোগ এবং কম্পিউটারে ZKTeco অ্যাটেনডেন্স সফটওয়্যার কনফিগারেশন।',
    keyFeatures: [
      'ZKTeco K40, F18, WL20 ও SpeedFace সিরিজ ফুল সেটআপ',
      'কম্পিউটারে ZKTeco Attendance সফটওয়্যার ও Excel/PDF রিপোর্ট সেটআপ',
      'স্টাফ ফিঙ্গারপ্রিন্ট/কার্ড এনরোলমেন্ট ও ব্যবহার ট্রেনিং'
    ],
    processSteps: [
      { title: '১. মডেল ও অবস্থান নির্বাচন', desc: 'অফিসের গেট বা দেয়ালে মেশিন লাগানোর স্থান নির্ধারণ।' },
      { title: '২. মাউন্টিং ও নেটওয়ার্ক সংযোগ', desc: 'পাওয়ার ও LAN/WiFi দিয়ে মেশিন চালু করা।' },
      { title: '৩. সফটওয়্যার ও ট্রেনিং', desc: 'পিসিতে সফটওয়্যার বসিয়ে ডেইলি/মান্থলি রিপোর্ট বের করা শেখানো।' }
    ],
    pricingStartingFrom: '৳১,০০০ থেকে শুরু (ইনস্টলেশন)',
    warrantyInfo: '১ বছরের অফিসিয়াল ওয়ারেন্টি ও ফ্রি সফটওয়্যার সাপোর্ট',
    popularSearchKeywords: ['zkteco attendance setup rangpur', 'zkteco technician rangpur', 'zkteco k40 setup'],
    relatedServices: ['zkteco-access-control-installation-rangpur', 'zkteco-fingerprint-machine-service-bd'],
    relatedProductSlugs: ['zkteco-fingerprint-attendance-machine', 'zkteco-k40-attendance-machine-price-bd'],
    faqs: [
      { question: 'ZKTeco মেশিন থেকে কি সরাসরি এক্সেলে হাজিরা রিপোর্ট পাওয়া যাবে?', answer: 'হ্যাঁ, আমরা পিসিতে ZKTeco সফটওয়্যার সেটআপ করে দেব যাতে এক ক্লিকেই Excel/PDF হাজিরা রিপোর্ট পান।' }
    ]
  },
  'zkteco-access-control-installation-rangpur': {
    slug: 'zkteco-access-control-installation-rangpur',
    name: 'ZKTeco Door Access Control Installation Rangpur',
    bnName: 'রংপুর ZKTeco ডোর এক্সেস কন্ট্রোল ইনস্টলেশন',
    category: 'Access Control',
    title: 'Shamim Tech Solution • ZKTeco Access Control Setup Rangpur',
    metaDescription: 'রংপুরে ZKTeco ফিঙ্গারপ্রিন্ট ও RFID কার্ড ডোর লক (EM Lock / Drop Bolt) ইনস্টলেশন সার্ভিস। কল: 01790139333।',
    h1: 'ZKTeco Biometric Door Access Control Installation in Rangpur',
    tagline: 'Secure Glass, Wooden & Steel Doors with ZKTeco F18 & EM Locks',
    bengaliTagline: 'রংপুরে গ্লাস ও কাঠের দরজায় ZKTeco এক্সেস কন্ট্রোল ও ম্যাগনেটিক লক ফিটিং',
    description: 'অফিস, ব্যাংক, ক্লিনিক ও সার্ভার রুমের দরজা নিরাপদ রাখতে ZKTeco F18, SC403 ও ম্যাগনেটিক EM Lock/Drop Bolt এবং Exit Push Button প্রফেশনালভাবে ইনস্টল করা হয়।',
    keyFeatures: [
      'কাঠ, থাই গ্লাস ও অ্যালুমিনিয়াম দরজায় নিখুঁত লক ফিটিং',
      'ZKTeco কন্ট্রোলার + পাওয়ার সাপ্লাই + ব্যাকআপ ব্যাটারি সেটআপ',
      'RFID কার্ড, ফিঙ্গারপ্রিন্ট ও পিন কোড দিয়ে দরজা খোলার সুবিধা'
    ],
    processSteps: [
      { title: '১. দরজার ধরন পরীক্ষা', desc: 'গ্লাস না কাঠের দরজা সেই অনুযায়ী ব্র্যাকেট ও লক নির্বাচন।' },
      { title: '২. লক ও ডিভাইস ফিটিং', desc: 'ম্যাগনেটিক লক, ডিভাইস ও এক্সিট বাটন সংযোগ।' },
      { title: '৩. টেস্ট ও কার্ড প্রোগ্রামিং', desc: 'ফিঙ্গারপ্রিন্ট ও কার্ড দিয়ে লক-আনলক পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳১,৫০০ থেকে শুরু',
    warrantyInfo: '১ বছরের সার্ভিস ও হার্ডওয়্যার ওয়ারেন্টি',
    popularSearchKeywords: ['zkteco access control rangpur', 'zkteco f18 installation', 'door access lock rangpur'],
    relatedServices: ['zkteco-attendance-machine-setup-rangpur', 'access-control-installation'],
    relatedProductSlugs: ['zkteco-f18-access-control-price-bd', 'zkteco-biometric-machine-rangpur'],
    faqs: [
      { question: 'কারেন্ট না থাকলে কি এক্সেস কন্ট্রোল দরজা কাজ করবে?', answer: 'হ্যাঁ, আমাদের সেটআপে ১২ ভোল্ট ব্যাকআপ ব্যাটারি থাকে, তাই বিদ্যুৎ না থাকলেও কয়েক ঘণ্টা দরজা সচল থাকে।' }
    ]
  },
  'zkteco-fingerprint-machine-service-bd': {
    slug: 'zkteco-fingerprint-machine-service-bd',
    name: 'ZKTeco Fingerprint Machine Repair & Software Support BD',
    bnName: 'ZKTeco ফিঙ্গারপ্রিন্ট মেশিন মেরামত ও সফটওয়্যার সাপোর্ট',
    category: 'Biometrics & Attendance',
    title: 'Shamim Tech Solution • ZKTeco Fingerprint Machine Service & Repair',
    metaDescription: 'ZKTeco ফিঙ্গারপ্রিন্ট মেশিন কানেকশন এরর, ডেটা না আসা, টাইম নষ্ট ও সফটওয়্যার সেটআপ সার্ভিস। কল: 01790139333।',
    h1: 'ZKTeco Fingerprint & Attendance Software Troubleshooting Service',
    tagline: 'Fix Device Connection Errors, Sync Delays & Reinstall ZKTeco Software',
    bengaliTagline: 'ZKTeco মেশিনের সফটওয়্যার, আইপি কানেকশন ও হাজিরা ডেটা সমস্যার দ্রুত সমাধান',
    description: 'আপনার ZKTeco মেশিন কি পিসিতে কানেক্ট হচ্ছে না, নতুন উইন্ডোজ দেওয়ায় সফটওয়্যার হারিয়েছে, বা রিপোর্ট ঠিকমতো আসছে না? অন-সাইট ও রিমোট (AnyDesk) সাপোর্টে দ্রুত সমাধান দিচ্ছে শামীম টেক সলিউশন।',
    keyFeatures: [
      'ZKTeco / ZKBioTime সফটওয়্যার রি-ইনস্টল ও পুরনো ডেটাবেস ব্যাকআপ',
      'LAN/WiFi আইপি কনফ্লিক্ট ও ডাউনলোড এরর সমাধান',
      'শিফট, লেট ও ওভারটাইম রুলস কাস্টমাইজেশন'
    ],
    processSteps: [
      { title: '১. সমস্যার ধরন জানা', desc: 'মেশিন ডিসপ্লে, নেটওয়ার্ক বা সফটওয়্যারের ত্রুটি চিহ্নিত করা।' },
      { title: '২. ফিক্স ও কনফিগারেশন', desc: 'আইপি ও সফটওয়্যার ঠিক করে সিঙ্ক চালু করা।' },
      { title: '৩. টেস্ট রিপোর্ট', desc: 'সঠিক হাজিরা ডাউনলোড করে নিশ্চিত করা।' }
    ],
    pricingStartingFrom: '৳৫০০ থেকে শুরু',
    warrantyInfo: 'সঠিক রিপোর্ট সিঙ্কিং নিশ্চয়তা',
    popularSearchKeywords: ['zkteco software support', 'zkteco machine repair bd', 'zkteco connection fix'],
    relatedServices: ['zkteco-attendance-machine-setup-rangpur', 'biometric-machine-service'],
    relatedProductSlugs: ['zkteco-fingerprint-attendance-machine', 'zkteco-k40-attendance-machine-price-bd'],
    faqs: [
      { question: 'কম্পিউটার পরিবর্তন করলে কি মেশিনের আগের হাজিরা ডেটা পাওয়া যাবে?', answer: 'হ্যাঁ, মেশিনের মেমোরি ও পুরনো পিসির ডেটাবেস থেকে সব হাজিরা ডেটা নতুন পিসিতে নিয়ে আসা যায়।' }
    ]
  },
  'anviz-biometric-machine-setup-rangpur': {
    slug: 'anviz-biometric-machine-setup-rangpur',
    name: 'Anviz Biometric Attendance Machine Setup Rangpur',
    bnName: 'রংপুর Anviz বায়োমেট্রিক অ্যাটেনডেন্স মেশিন সেটআপ',
    category: 'Biometrics & Attendance',
    title: 'Shamim Tech Solution • Anviz Biometric Machine Setup Rangpur',
    metaDescription: 'রংপুরে Anviz ফিঙ্গারপ্রিন্ট ও ফেস অ্যাটেনডেন্স মেশিন ইনস্টলেশন, CrossChex সফটওয়্যার সেটআপ ও সার্ভিস। কল: 01790139333।',
    h1: 'Anviz Biometric Attendance & CrossChex Setup in Rangpur',
    tagline: 'Authorized Anviz Installation, CrossChex Cloud/Standard Software & Support',
    bengaliTagline: 'রংপুরে Anviz বায়োমেট্রিক অ্যাটেনডেন্স মেশিন ও CrossChex সফটওয়্যার সেটআপ',
    description: 'রংপুর বিভাগে কর্পোরেট অফিস, গার্মেন্টস, হাসপাতাল ও শিক্ষাপ্রতিষ্ঠানের জন্য Anviz (C2, W1, FacePass ইত্যাদি) ফিঙ্গারপ্রিন্ট ও ফেস রিকগনিশন মেশিন বিক্রয়, মাউন্টিং ও CrossChex সফটওয়্যার ইনস্টলেশন।',
    keyFeatures: [
      'Anviz CrossChex সফটওয়্যার ইনস্টলেশন ও অটো-সিঙ্ক সেটআপ',
      'হাই-স্পিড বায়োমেট্রিক ও RFID কার্ড এনরোলমেন্ট',
      'রংপুর বিভাগে অন-সাইট টেকনিশিয়ান ও অনলাইন সাপোর্ট'
    ],
    processSteps: [
      { title: '১. ডিভাইস স্থাপন', desc: 'অফিসের প্রবেশপথে Anviz মেশিন মাউন্টিং।' },
      { title: '২. CrossChex সেটআপ', desc: 'পিসিতে সফটওয়্যার ও নেটওয়ার্ক লিংক কনফিগার।' },
      { title: '৩. টেস্ট ও ট্রেনিং', desc: 'স্টাফ রেজিস্ট্রেশন ও রিপোর্ট প্রিন্টিং শেখানো।' }
    ],
    pricingStartingFrom: '৳১,০০০ থেকে শুরু',
    warrantyInfo: 'অরিজিনাল প্রোডাক্ট ও ১ বছরের সার্ভিস সাপোর্ট',
    popularSearchKeywords: ['anviz setup rangpur', 'anviz biometric machine', 'crosschex software setup'],
    relatedServices: ['anviz-access-control-installation-bd', 'zkteco-attendance-machine-setup-rangpur'],
    relatedProductSlugs: ['anviz-fingerprint-attendance-machine', 'anviz-facepass-biometric-price-bd'],
    faqs: [
      { question: 'Anviz মেশিনের সফটওয়্যার কি ফ্রি পাওয়া যায়?', answer: 'হ্যাঁ, Anviz-এর অফিশিয়াল CrossChex সফটওয়্যার সম্পূর্ণ ফ্রি এবং আমরাই তা সেটআপ করে দিই।' }
    ]
  },
  'anviz-access-control-installation-bd': {
    slug: 'anviz-access-control-installation-bd',
    name: 'Anviz Access Control Installation Bangladesh',
    bnName: 'Anviz ডোর এক্সেস কন্ট্রোল ইনস্টলেশন সার্ভিস',
    category: 'Access Control',
    title: 'Shamim Tech Solution • Anviz Access Control Installation BD',
    metaDescription: 'অফিস ও সার্ভার রুমের জন্য Anviz বায়োমেট্রিক ও RFID ডোর এক্সেস কন্ট্রোল সিস্টেম ইনস্টলেশন। কল: 01790139333।',
    h1: 'Anviz Biometric Door Access Control Installation Service',
    tagline: 'Enterprise Door Security with Anviz Controllers & Magnetic Locks',
    bengaliTagline: 'অফিস, ল্যাব ও বাণিজ্যিক প্রতিষ্ঠানের জন্য Anviz স্মার্ট ডোর এক্সেস সেটআপ',
    description: 'Anviz ডোর কন্ট্রোলার, ইলেকট্রিক ম্যাগনেটিক লক ও এক্সিট সুইচ সমন্বয়ে সুরক্ষিত অ্যাক্সেস কন্ট্রোল সিস্টেম ইনস্টলেশন, যাতে অনুমোদিত ব্যক্তি ছাড়া কেউ প্রবেশ করতে না পারে।',
    keyFeatures: [
      'ফায়ার-সেফ ফেইল-সেফ ম্যাগনেটিক ডোর লক সেটআপ',
      'হাজিরা ও ডোর অ্যাক্সেস একসাথে লগ রাখার সুবিধা',
      'রংপুর বিভাগ ও বাংলাদেশে প্রফেশনাল ইনস্টলেশন'
    ],
    processSteps: [
      { title: '১. ডোর মেজারমেন্ট', desc: 'দরজার ধরন অনুযায়ী ব্র্যাকেট ও লক সেট নির্বাচন।' },
      { title: '২. ক্যাবলিং ও ইনস্টলেশন', desc: 'ডিভাইস, পাওয়ার বক্স ও লক স্থাপন।' },
      { title: '৩. টেস্ট', desc: 'ফিঙ্গারপ্রিন্ট ও কার্ড ভেরিফিকেশন পরীক্ষা।' }
    ],
    pricingStartingFrom: '৳১,৫০০ থেকে শুরু',
    warrantyInfo: '১ বছরের সার্ভিস সাপোর্ট',
    popularSearchKeywords: ['anviz access control', 'anviz door lock installation', 'biometric door lock bd'],
    relatedServices: ['anviz-biometric-machine-setup-rangpur', 'access-control-installation'],
    relatedProductSlugs: ['anviz-access-control-machine-rangpur', 'smart-fingerprint-door-lock-price-bd'],
    faqs: [
      { question: 'Anviz ও ZKTeco কোনটি অফিসের জন্য ভালো?', answer: 'দুটোই বিশ্বমানের ব্র্যান্ড; বাজেট ও প্রয়োজনীয় ফিচার অনুযায়ী আমরা আপনাকে সেরা মডেলটি নির্বাচন করতে সাহায্য করব।' }
    ]
  },
  'panasonic-pbx-intercom-setup-rangpur': {
    slug: 'panasonic-pbx-intercom-setup-rangpur',
    name: 'Panasonic PBX & Intercom Setup in Rangpur',
    bnName: 'রংপুর Panasonic পিএবিএক্স ও ইন্টারকম সেটআপ',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Panasonic PBX Intercom Setup Rangpur',
    metaDescription: 'রংপুরে Panasonic (TES824/HTS32) পিএবিএক্স ইন্টারকম মেশিন সেটআপ, এক্সটেনশন প্রোগ্রামিং ও ক্যাবলিং। কল: 01790139333।',
    h1: 'Panasonic PABX & Office Intercom Setup Service in Rangpur',
    tagline: 'Genuine Panasonic KX-TES824 & IP-PBX Configuration by Expert Technicians',
    bengaliTagline: 'রংপুরে অফিস, হাসপাতাল ও ক্লিনিকের জন্য Panasonic ইন্টারকম ও পিএবিএক্স সমাধান',
    description: 'অফিস, হাসপাতাল, ডায়াগনস্টিক সেন্টার, ব্যাংক ও হোটেলে Panasonic KX-TES824 বা KX-NS300 পিএবিএক্স সিস্টেম স্থাপন, ইন্টারকম ক্যাবলিং, টিঅ্যান্ডটি/মাস্টার সেট প্রোগ্রামিং ও ট্রাবলশুটিং সেবা।',
    keyFeatures: [
      '৮ থেকে ৬৪+ এক্সটেনশন লাইন নিখুঁতভাবে স্থাপন ও নাম্বারিং',
      'অটো-অ্যাটেনডেন্ট ভয়েস গাইড (DISA) ও কল ট্রান্সফার প্রোগ্রামিং',
      'পুরনো ইন্টারকম লাইনের ক্রস-কানেকশন ও নয়েজ দূর করা'
    ],
    processSteps: [
      { title: '১. লাইন ম্যাপ প্ল্যানিং', desc: 'কোন রুমে কোন এক্সটেনশন নম্বর থাকবে তা নির্ধারণ।' },
      { title: '২. রোসেট ও তার টানা', desc: 'CAT3/CAT6 কেবল ও আরজে১১ রোসেট বক্স ফিটিং।' },
      { title: '৩. পিএবিএক্স প্রোগ্রামিং', desc: 'মাস্টার ফোন দিয়ে কলিং ও রিং সেটিংস সম্পন্ন করা।' }
    ],
    pricingStartingFrom: '৳১,৫০০ থেকে শুরু',
    warrantyInfo: '৬ মাস থেকে ১ বছরের সার্ভিস ওয়ারেন্টি',
    popularSearchKeywords: ['panasonic pbx rangpur', 'panasonic intercom setup', 'kx-tes824 programming'],
    relatedServices: ['karel-pbx-intercom-installation-rangpur', 'pbx-installation'],
    relatedProductSlugs: ['panasonic-pabx-intercom-machine-price-bd', 'grandstream-ip-phone-pbx-price-bd'],
    faqs: [
      { question: 'প্যানাসনিক পিএবিএক্স-এর একটি এক্সটেনশন ডেড হয়ে গেলে কি শুধু সেটাই ঠিক করা যায়?', answer: 'হ্যাঁ, সম্পূর্ণ সিস্টেম বন্ধ না করেই নির্দিষ্ট ফল্টি লাইন বা কার্ড দ্রুত মেরামত করা যায়।' }
    ]
  },
  'karel-pbx-intercom-installation-rangpur': {
    slug: 'karel-pbx-intercom-installation-rangpur',
    name: 'Karel PBX & Intercom Installation in Rangpur',
    bnName: 'রংপুর Karel পিএবিএক্স ইন্টারকম ইনস্টলেশন',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Karel PBX Intercom Installation Rangpur',
    metaDescription: 'রংপুরে Karel পিএবিএক্স ইন্টারকম সিস্টেম ইনস্টলেশন, এক্সটেনশন ক্যাবলিং ও কল রাউটিং সেটআপ। কল: 01790139333।',
    h1: 'Karel PABX Intercom Installation & Programming in Rangpur',
    tagline: 'Cost-Effective Karel MS26 / MS38 Intercom Setup for Clinics & Offices',
    bengaliTagline: 'রংপুরে ক্লিনিক, হোটেল ও অফিসের জন্য Karel ইন্টারকম সিস্টেম সেটআপ ও মেরামত',
    description: 'সাশ্রয়ী ও টেকসই Karel MS26, MS38 ও MS48 ইন্টারকম সিস্টেম ইনস্টলেশন, লাইন মেরামত, কল ফরোয়ার্ডিং এবং কলার আইডি সেটআপ সেবা প্রদান করে শামীম টেক সলিউশন।',
    keyFeatures: [
      'Karel কলার-আইডি ও ভয়েস অটো-রিসেপশনিস্ট কনফিগারেশন',
      'হোটেল ও ক্লিনিকের প্রতিটি রুমে স্পষ্ট ইন্টারকম লাইন',
      'নতুন ইনস্টলেশন ও পুরনো Karel বোর্ড রিপেয়ার সাপোর্ট'
    ],
    processSteps: [
      { title: '১. রুম ও এক্সটেনশন গণনা', desc: 'মোট পোর্ট চাহিদা অনুযায়ী মেশিন ও কার্ড নির্ধারণ।' },
      { title: '২. ক্যাবলিং ও ফোন সংযোগ', desc: 'টেলিফোন তার ও ডেস্কটপ সেট যুক্ত করা।' },
      { title: '৩. প্রোগ্রামিং ও টেস্ট', desc: 'প্রতিটি এক্সটেনশনে কল টেস্ট করে বুঝিয়ে দেওয়া।' }
    ],
    pricingStartingFrom: '৳১,২০০ থেকে শুরু',
    warrantyInfo: 'সার্ভিস ওয়ারেন্টিসহ দক্ষ টেকনিশিয়ান সাপোর্ট',
    popularSearchKeywords: ['karel pbx rangpur', 'karel intercom setup', 'karel pabx technician'],
    relatedServices: ['panasonic-pbx-intercom-setup-rangpur', 'intercom-installation'],
    relatedProductSlugs: ['karel-pabx-system-price-bd', 'panasonic-pabx-intercom-machine-price-bd'],
    faqs: [
      { question: 'Karel ইন্টারকম কি ক্লিনিক বা ছাত্রাবাসের জন্য ভালো?', answer: 'হ্যাঁ, কম খরচে বেশি এক্সটেনশন সুবিধার জন্য ক্লিনিক, হাসপাতাল ও আবাসিক হোটেলে Karel খুবই জনপ্রিয়।' }
    ]
  },
  'smart-door-lock-installation-rangpur': {
    slug: 'smart-door-lock-installation-rangpur',
    name: 'Smart Fingerprint Door Lock Installation Rangpur',
    bnName: 'রংপুর স্মার্ট ফিঙ্গারপ্রিন্ট ডোর লক ইনস্টলেশন',
    category: 'Access Control',
    title: 'Shamim Tech Solution • Smart Door Lock Installation Rangpur',
    metaDescription: 'রংপুরে কাঠ ও গ্লাস দরজায় স্মার্ট ফিঙ্গারপ্রিন্ট, পাসওয়ার্ড ও কার্ড ডোর লক ইনস্টলেশন। কল: 01790139333।',
    h1: 'Smart Fingerprint & Digital Door Lock Installation in Rangpur',
    tagline: 'Keyless Biometric, PIN, RFID & Mobile App Door Locks for Homes & Offices',
    bengaliTagline: 'চাবি ছাড়াই ফিঙ্গারপ্রিন্ট, পাসওয়ার্ড ও কার্ডে দরজা খোলার স্মার্ট লক ইনস্টলেশন',
    description: 'আধুনিক ফ্ল্যাট, অফিস ক্যাবিন ও গ্লাস ডোরের জন্য ফিঙ্গারপ্রিন্ট, পিন পাসওয়ার্ড, RFID কার্ড ও মোবাইল অ্যাপ (Tuya/TTLock) নিয়ন্ত্রিত স্মার্ট ডোর লক নিখুঁতভাবে কাঠ বা গ্লাস দরজায় ফিটিং করা হয়।',
    keyFeatures: [
      'ফিঙ্গারপ্রিন্ট, পাসকোড, কার্ড ও ইমার্জেন্সি মেকানিক্যাল চাবি সুবিধা',
      'কাঠের দরজা ও ফ্রেমলেস গ্লাস ডোরের জন্য আলাদা উপযোগী লক ফিটিং',
      'দরজার মাপ অনুযায়ী নিখুঁত কাটিং ও অ্যালাইনমেন্ট'
    ],
    processSteps: [
      { title: '১. দরজার থিকনেস যাচাই', desc: 'কাঠ বা গ্লাস দরজার পুরুত্ব অনুযায়ী উপযুক্ত লক নির্বাচন।' },
      { title: '২. মর্টাইজ ও লক ফিটিং', desc: 'নিখুঁত মাপে লক বডি ও সেন্সর স্থাপন।' },
      { title: '৩. অ্যাডমিন ফিঙ্গারপ্রিন্ট সেটআপ', desc: 'মালিকের ফিঙ্গার, পাসওয়ার্ড ও মোবাইল অ্যাপ যুক্ত করা।' }
    ],
    pricingStartingFrom: '৳১,২০০ থেকে শুরু (ফিটিং চার্জ)',
    warrantyInfo: 'অরিজিনাল লক ওয়ারেন্টি ও ফিটিং গ্যারান্টি',
    popularSearchKeywords: ['smart door lock rangpur', 'fingerprint door lock installation', 'digital lock technician'],
    relatedServices: ['access-control-installation', 'zkteco-access-control-installation-rangpur'],
    relatedProductSlugs: ['smart-fingerprint-door-lock-price-bd', 'glass-door-biometric-lock-bd'],
    faqs: [
      { question: 'ব্যাটারি শেষ হয়ে গেলে স্মার্ট লক কীভাবে খুলবেন?', answer: 'ব্যাটারি লো হওয়ার আগেই অ্যালার্ট দেয়; আর শেষ হয়ে গেলে বাইরে থেকে USB পাওয়ার ব্যাংক বা ইমার্জেন্সি চাবি দিয়ে খোলা যায়।' }
    ]
  },
  'tiandy-cctv-camera-installation-rangpur': {
    slug: 'tiandy-cctv-camera-installation-rangpur',
    name: 'Tiandy CCTV & IP Camera Installation Rangpur',
    bnName: 'রংপুর Tiandy সিসিটিভি ও আইপি ক্যামেরা ইনস্টলেশন',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • Tiandy CCTV Camera Installation Rangpur',
    metaDescription: 'রংপুরে Tiandy কালার মেকার আইপি ক্যামেরা ও এনভিআর বিক্রয় এবং ইনস্টলেশন সার্ভিস। কল: 01790139333।',
    h1: 'Tiandy Color Maker IP Camera & NVR Installation in Rangpur',
    tagline: 'Starlight Night Vision & Smart Analytics Surveillance by Tiandy',
    bengaliTagline: 'রংপুরে Tiandy Color Maker নাইট ভিশন আইপি ক্যামেরা বিক্রয় ও ইনস্টলেশন',
    description: 'রাতের অন্ধকারেও ঝকঝকে রঙিন ছবি ও কম ব্যান্ডউইথে হাই-কোয়ালিটি ভিডিও রেকর্ডিংয়ের জন্য বিশ্বমানের Tiandy IP Camera এবং PoE NVR সিস্টেম রংপুর বিভাগে সরবরাহ ও ইনস্টল করা হয়।',
    keyFeatures: [
      'Tiandy Color Maker / Super Starlight কম আলোয় রঙিন ছবি',
      'H.265+ স্মার্ট কম্প্রেশনে কম হার্ডডিস্কে দীর্ঘদিন রেকর্ডিং',
      'বিল্ট-ইন মাইক ও PoE সিঙ্গেল-কেবল সাপোর্ট'
    ],
    processSteps: [
      { title: '১. সাইট ও লাইটিং চেক', desc: 'কভার করার এলাকা অনুযায়ী Tiandy ক্যামেরা নির্ধারণ।' },
      { title: '২. CAT6 নেটওয়ার্কিং ও মাউন্টিং', desc: 'PoE সুইচ বা NVR থেকে পরিচ্ছন্ন কেবলিং ও ফিটিং।' },
      { title: '৩. EasyLive অ্যাপ সেটআপ', desc: 'ফোনে লাইভ ও প্লেব্যাক ভিউ চালু করা।' }
    ],
    pricingStartingFrom: '৳৫০০ / ক্যামেরা (ফিটিং)',
    warrantyInfo: 'অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি ও সার্ভিস সাপোর্ট',
    popularSearchKeywords: ['tiandy cctv rangpur', 'tiandy ip camera installation', 'tiandy camera technician'],
    relatedServices: ['ip-camera-installation', 'cctv-installation'],
    relatedProductSlugs: ['tiandy-cctv-camera-price-bd', 'tiandy-ip-camera-rangpur'],
    faqs: [
      { question: 'Tiandy ক্যামেরার নাইট ভিশন কেমন?', answer: 'Tiandy-এর Color Maker ও Starlight টেকনোলজিতে রাতের বেলাতেও দিনের মতো পরিষ্কার রঙিন ছবি দেখা যায়।' }
    ]
  },
  '2-camera-cctv-package-rangpur': {
    slug: '2-camera-cctv-package-rangpur',
    name: '2 Camera CCTV Package Setup Rangpur',
    bnName: 'রংপুর ২ ক্যামেরা সিসিটিভি প্যাকেজ ও ইনস্টলেশন',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • 2 Camera CCTV Package Price & Setup Rangpur',
    metaDescription: 'রংপুরে ছোট দোকান ও বাসার জন্য কম খরচে ২ ক্যামেরা সম্পূর্ণ সিসিটিভি প্যাকেজ ও ইনস্টলেশন সার্ভিস। কল: 01790139333।',
    h1: 'Complete 2-Camera CCTV Package & Installation in Rangpur',
    tagline: 'Ideal Starter Security Pack for Small Shops, Homes & Gates',
    bengaliTagline: 'ছোট দোকান, ফার্মেসি বা বাসার গেটের জন্য সেরা ২ ক্যামেরা কমপ্লিট সিসিটিভি প্যাকেজ',
    description: '২টি অরিজিনাল 2MP ক্যামেরা, ৪-চ্যানেল DVR/XVR, ৫০০GB/১TB সার্ভিলাইন্স হার্ডডিস্ক, পাওয়ার অ্যাডাপ্টার, ক্যাবল ও সম্পূর্ণ ইনস্টলেশনসহ রেডি-টু-ইউজ ২ ক্যামেরা সিসিটিভি প্যাকেজ।',
    keyFeatures: [
      'Hikvision / Dahua / Jovision ২টি অরিজিনাল নাইট ভিশন ক্যামেরা',
      '৪-চ্যানেল ডিভিআর (ভবিষ্যতে আরও ২টি ক্যামেরা বাড়ানোর সুযোগসহ)',
      'মোবাইল ফোনে সরাসরি লাইভ ভিউ ও ১৫–৩০ দিনের রেকর্ডিং ব্যাকআপ'
    ],
    processSteps: [
      { title: '১. প্যাকেজ বুকিং', desc: 'ফোন বা WhatsApp-এ ব্র্যান্ড ও হার্ডডিস্ক সাইজ নিশ্চিত করা।' },
      { title: '২. অন-সাইট ইনস্টলেশন', desc: 'একই দিনে ক্যামেরা, ক্যাবল ও ডিভিআর সেটআপ সম্পন্ন।' },
      { title: '৩. মোবাইল ভিউ সেটআপ', desc: 'আপনার ফোনে লাইভ দেখা চালু করে বুঝিয়ে দেওয়া।' }
    ],
    pricingStartingFrom: 'বাজেট অনুযায়ী সাশ্রয়ী কমপ্লিট প্যাকেজ',
    warrantyInfo: '১ বছরের অফিশিয়াল ওয়ারেন্টি',
    popularSearchKeywords: ['2 camera cctv package rangpur', '2 camera cctv setup price', 'shop 2 camera cctv'],
    relatedServices: ['4-camera-cctv-package-rangpur', 'shop-cctv-package-rangpur'],
    relatedProductSlugs: ['2-camera-cctv-package-price-bd', 'cctv-camera'],
    faqs: [
      { question: '২ ক্যামেরা প্যাকেজে পরে আরও ক্যামেরা যোগ করা যাবে?', answer: 'হ্যাঁ, যেহেতু ৪-চ্যানেল DVR দেওয়া হয়, তাই ভবিষ্যতে সহজেই আরও ২টি ক্যামেরা যুক্ত করা যাবে।' }
    ]
  },
  '4-camera-cctv-package-rangpur': {
    slug: '4-camera-cctv-package-rangpur',
    name: '4 Camera CCTV Package Setup Rangpur',
    bnName: 'রংপুর ৪ ক্যামেরা সিসিটিভি প্যাকেজ ও ইনস্টলেশন',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • 4 Camera CCTV Package Price & Setup Rangpur',
    metaDescription: 'রংপুরে বাসা, দোকান ও অফিসের জন্য সবচেয়ে জনপ্রিয় ৪ ক্যামেরা কমপ্লিট সিসিটিভি প্যাকেজ ও ফিটিং সার্ভিস। কল: 01790139333।',
    h1: 'Complete 4-Camera CCTV Package & Installation in Rangpur',
    tagline: 'Most Popular Full-Coverage Security Package for Homes & Offices',
    bengaliTagline: 'বাসা, অফিস ও দোকানের চারদিক নিরাপত্তায় সবচেয়ে জনপ্রিয় ৪ ক্যামেরা প্যাকেজ',
    description: 'বাসাবাড়ি, দোকান ও অফিসের ভেতরে-বাইরে পূর্ণ নিরাপত্তার জন্য ৪টি ক্যামেরা, ৪-চ্যানেল DVR/NVR, হার্ডডিস্ক, পাওয়ার বক্স, BNC/Balun কানেক্টর, ক্যাবল ও ফিটিংসহ কমপ্লিট ৪ ক্যামেরা সিসিটিভি প্যাকেজ।',
    keyFeatures: [
      '৪টি ইনডোর/আউটডোর 2MP/4MP ওয়াটারপ্রুফ ক্যামেরা',
      'অডিও রেকর্ডিং ও কালার নাইট ভিশন অপশন',
      'মোবাইল, ল্যাপটপ ও টিভিতে একসাথে দেখার সুবিধা'
    ],
    processSteps: [
      { title: '১. লোকেশন প্ল্যানিং', desc: 'গেট, বারান্দা ও ঘরের/দোকানের সেরা ৪টি পয়েন্ট নির্বাচন।' },
      { title: '২. প্রফেশনাল ফিটিং', desc: 'কেসিংসহ তার টেনে ৪টি ক্যামেরা ও ডিভিআর সেটআপ।' },
      { title: '৩. টেস্ট ও মোবাইল অ্যাপ', desc: 'দিন-রাতের অ্যাঙ্গেল ঠিক করে ফোনে লাইভ চালু।' }
    ],
    pricingStartingFrom: 'সব মালামাল ও ফিটিংসহ সাশ্রয়ী প্যাকেজ',
    warrantyInfo: '১ থেকে ২ বছরের অফিসিয়াল ওয়ারেন্টি',
    popularSearchKeywords: ['4 camera cctv package rangpur', '4 camera cctv price bd', 'home 4 camera package'],
    relatedServices: ['2-camera-cctv-package-rangpur', '8-camera-cctv-package-rangpur'],
    relatedProductSlugs: ['4-camera-cctv-package-price-bd', 'dvr'],
    faqs: [
      { question: '৪টি ক্যামেরা লাগাতে কতক্ষণ লাগে?', answer: 'সাধারণত ৩ থেকে ৫ ঘণ্টার মধ্যেই ৪ ক্যামেরার সম্পূর্ণ সেটআপ শেষ হয়ে যায়।' }
    ]
  },
  '8-camera-cctv-package-rangpur': {
    slug: '8-camera-cctv-package-rangpur',
    name: '8 Camera CCTV Package Setup Rangpur',
    bnName: 'রংপুর ৮ ক্যামেরা সিসিটিভি প্যাকেজ ও ইনস্টলেশন',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • 8 Camera CCTV Package Price & Setup Rangpur',
    metaDescription: 'রংপুরে বড় বাড়ি, শোরুম, স্কুল ও প্রতিষ্ঠানের জন্য ৮ ক্যামেরা সম্পূর্ণ সিসিটিভি প্যাকেজ ও ইনস্টলেশন। কল: 01790139333।',
    h1: 'Complete 8-Camera CCTV Security Package in Rangpur',
    tagline: 'Full Perimeter Coverage for Large Homes, Showrooms & Schools',
    bengaliTagline: 'বড় বাড়ি, মার্কেট, শোরুম ও স্কুলের জন্য সম্পূর্ণ ৮ ক্যামেরা সিসিটিভি প্যাকেজ',
    description: 'বড় পরিসরের এলাকা কভার করতে ৮টি ক্যামেরা, ৮-চ্যানেল DVR/NVR, ১TB/২TB সার্ভিলাইন্স হার্ডডিস্ক, হেভি পাওয়ার বক্স ও পিভিসি পাইপিংসহ প্রফেশনাল ৮ ক্যামেরা সিসিটিভি প্যাকেজ।',
    keyFeatures: [
      '৮টি হাই-ডেফিনিশন ওয়াটারপ্রুফ ও নাইট ভিশন ক্যামেরা',
      'Seagate SkyHawk / WD Purple ১TB বা ২TB সার্ভিলাইন্স স্টোরেজ',
      'ব্লাইন্ড স্পট মুক্ত ৩৬০-ডিগ্রি কাভারেজ প্ল্যানিং'
    ],
    processSteps: [
      { title: '১. সাইট সার্ভে', desc: 'ভবনের চারপাশ ও ভেতরের ৮টি কৌশলগত পয়েন্ট নির্ধারণ।' },
      { title: '২. ক্যাবল কেসিং ও মাউন্টিং', desc: 'মজবুতভাবে ক্যামেরা বসিয়ে পরিচ্ছন্ন ক্যাবল ম্যানেজমেন্ট।' },
      { title: '৩. কনফিগার ও হস্তান্তর', desc: 'মাল্টি-ইউজার মোবাইল এক্সেস চালু করে বুঝিয়ে দেওয়া।' }
    ],
    pricingStartingFrom: 'প্রজেক্ট অনুযায়ী বিশেষ হোলসেল রেট',
    warrantyInfo: '১ থেকে ২ বছরের অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি',
    popularSearchKeywords: ['8 camera cctv package rangpur', '8 camera cctv price bd', 'office 8 camera package'],
    relatedServices: ['4-camera-cctv-package-rangpur', '16-camera-cctv-package-rangpur'],
    relatedProductSlugs: ['8-camera-cctv-package-price-bd', 'seagate-skyhawk-1tb-2tb-hdd-price-bd'],
    faqs: [
      { question: '৮টি ক্যামেরায় কতদিন ভিডিও সেভ থাকবে?', answer: '১TB হার্ডডিস্কে প্রায় ১৫–২০ দিন এবং ২TB হার্ডডিস্কে প্রায় ১ মাস বা তার বেশি রেকর্ডিং সেভ থাকে।' }
    ]
  },
  '16-camera-cctv-package-rangpur': {
    slug: '16-camera-cctv-package-rangpur',
    name: '16 Camera CCTV Package Setup Rangpur',
    bnName: 'রংপুর ১৬ ক্যামেরা সিসিটিভি প্যাকেজ ও ইনস্টলেশন',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • 16 Camera CCTV Package Price & Setup Rangpur',
    metaDescription: 'রংপুরে হসপিটাল, কলেজ, ফ্যাক্টরি ও শপিং মলের জন্য ১৬ ক্যামেরা প্রফেশনাল সিসিটিভি প্যাকেজ ও ইনস্টলেশন। কল: 01790139333।',
    h1: 'Enterprise 16-Camera CCTV Surveillance Package in Rangpur',
    tagline: 'Industrial & Commercial Multi-Floor Security Package with 16 Channels',
    bengaliTagline: 'ফ্যাক্টরি, হাসপাতাল, কলেজ ও মার্কেটের জন্য ১৬ ক্যামেরা কমার্শিয়াল প্যাকেজ',
    description: 'বড় বাণিজ্যিক প্রতিষ্ঠান, হাসপাতাল, গোডাউন, হিমাগার ও শিক্ষাপ্রতিষ্ঠানের সম্পূর্ণ মনিটরিংয়ের জন্য ১৬টি ক্যামেরা, ১৬-চ্যানেল DVR/PoE NVR, ৪TB স্টোরেজ ও র‍্যাক-বক্সসহ এন্টারপ্রাইজ প্যাকেজ।',
    keyFeatures: [
      '১৬টি ক্যামেরা এবং ১৬-চ্যানেল NVR/DVR র‍্যাক ইনস্টলেশন',
      'দীর্ঘ সময় ব্যাকআপের জন্য ২TB/৪TB সার্ভিলাইন্স হার্ডডিস্ক',
      'একসাথে বড় মনিটর ও একাধিক ফোনে লাইভ মনিটরিং'
    ],
    processSteps: [
      { title: '১. আর্কিটেকচারাল সার্ভে', desc: '১৬টি ক্যামেরার ভিউ ও দীর্ঘ দূরত্বের ক্যাবল মাপ নেওয়া।' },
      { title: '২. কনডুইট ও র‍্যাক সেটআপ', desc: 'নিরাপদ পাইপিং, PoE/পাওয়ার সাপ্লাই ও বক্স স্থাপন।' },
      { title: '৩. টেস্ট ও ট্রেনিং', desc: 'প্লেব্যাক, ব্যাকআপ এক্সপোর্ট ও ক্লাউড ভিউ সেটআপ।' }
    ],
    pricingStartingFrom: 'কাস্টম প্রজেক্ট কোটেশন',
    warrantyInfo: 'অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি ও অগ্রাধিকার সার্ভিস সাপোর্ট',
    popularSearchKeywords: ['16 camera cctv package rangpur', '16 channel cctv setup bd', 'factory cctv package'],
    relatedServices: ['8-camera-cctv-package-rangpur', 'office-cctv-package-rangpur'],
    relatedProductSlugs: ['16-camera-cctv-package-price-bd', 'wd-purple-surveillance-hdd-price-bd'],
    faqs: [
      { question: '১৬ ক্যামেরার প্রজেক্টে কি অফিসিয়াল কোটেশন ও ইনভয়েস দেন?', answer: 'হ্যাঁ, স্কুল, হাসপাতাল ও প্রতিষ্ঠানের জন্য লিখিত কোটেশন, ওয়ারেন্টি কার্ড ও ইনভয়েস দেওয়া হয়।' }
    ]
  },
  'shop-cctv-package-rangpur': {
    slug: 'shop-cctv-package-rangpur',
    name: 'Shop & Pharmacy CCTV Package Rangpur',
    bnName: 'রংপুর দোকান ও ফার্মেসি সিসিটিভি প্যাকেজ',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • Shop & Pharmacy CCTV Package Rangpur',
    metaDescription: 'দোকান, জুয়েলারি, মোবাইল শপ ও ফার্মেসির জন্য ক্যাশ কাউন্টার অডিওসহ সিসিটিভি প্যাকেজ। কল: 01790139333।',
    h1: 'Special Shop, Showroom & Pharmacy CCTV Package in Rangpur',
    tagline: 'Crystal Clear Cash Counter Monitoring with Audio Recording',
    bengaliTagline: 'দোকানের ক্যাশ কাউন্টার, স্টক ও ক্রেতা মনিটরিংয়ে অডিও-সহ সিসিটিভি প্যাকেজ',
    description: 'দোকান, ফার্মেসি, মুদি/ডিপার্টমেন্টাল স্টোর ও জুয়েলারি দোকানের ক্যাশ কাউন্টার স্পষ্টভাবে দেখার জন্য অডিও মাইক ও হাই-ক্ল্যারিটি লেন্সসহ বিশেষ সিসিটিভি ক্যামেরা প্যাকেজ।',
    keyFeatures: [
      'ক্যাশ কাউন্টারে টাকার লেনদেন স্পষ্ট দেখার ফোকাস সেটআপ',
      'বিল্ট-ইন অডিও মাইক্রোফোন (কথোপকথন রেকর্ডিং সুবিধা)',
      'দোকানের বাইরে থাকলেও মোবাইলে লাইভ দেখা'
    ],
    processSteps: [
      { title: '১. কাউন্টার ও গেট লোকেশন দেখা', desc: 'ক্যাশ বাক্স ও দোকানের প্রবেশপথ কভার করা।' },
      { title: '২. দ্রুত ইনস্টলেশন', desc: 'দোকানের কাজে বিঘ্ন না ঘটিয়ে স্বল্প সময়ে সেটআপ।' },
      { title: '৩. ফোন সংযোগ', desc: 'দোকান মালিকের ফোনে সরাসরি লাইভ ভিউ চালু।' }
    ],
    pricingStartingFrom: 'দোকানের সাইজ অনুযায়ী ২/৪ ক্যামেরা প্যাকেজ',
    warrantyInfo: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    popularSearchKeywords: ['shop cctv package rangpur', 'dokan cctv camera package', 'pharmacy cctv rangpur'],
    relatedServices: ['2-camera-cctv-package-rangpur', '4-camera-cctv-package-rangpur', 'shop-wiring-rangpur'],
    relatedProductSlugs: ['2-camera-cctv-package-price-bd', '4-camera-cctv-package-price-bd'],
    faqs: [
      { question: 'দোকানে ওয়াইফাই ছাড়া শুধু মেমোরি কার্ড ক্যামেরা নেওয়া যাবে?', answer: 'হ্যাঁ, ছোট দোকানের জন্য মেমোরি কার্ড চালিত অডিও ওয়াইফাই ক্যামেরা প্যাকেজও রয়েছে।' }
    ]
  },
  'home-cctv-package-rangpur': {
    slug: 'home-cctv-package-rangpur',
    name: 'Home & Apartment CCTV Security Package Rangpur',
    bnName: 'রংপুর বাসাবাড়ি ও ফ্ল্যাট সিসিটিভি প্যাকেজ',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • Home & Apartment CCTV Package Rangpur',
    metaDescription: 'বাসাবাড়ি, গেট, গ্যারেজ ও ফ্ল্যাটের নিরাপত্তায় নাইট ভিশন ও মোবাইল ভিউসহ হোম সিসিটিভি প্যাকেজ। কল: 01790139333।',
    h1: 'Home, Gate & Garage CCTV Security Package in Rangpur',
    tagline: '24/7 Peace of Mind for Families with Color Night Vision & Mobile Alerts',
    bengaliTagline: 'বাসার গেট, ছাদ ও আঙিনার ২৪ ঘণ্টা নিরাপত্তায় সাশ্রয়ী হোম সিসিটিভি প্যাকেজ',
    description: 'পরিবারের নিরাপত্তা নিশ্চিত করতে বাসার মূল গেট, সিঁড়ি, গ্যারেজ ও চারপাশের জন্য বৃষ্টি-ধুলো নিরোধক ওয়াটারপ্রুফ নাইট ভিশন হোম সিসিটিভি প্যাকেজ।',
    keyFeatures: [
      'IP67 ওয়াটারপ্রুফ মেটাল/ফাইবার আউটডোর ক্যামেরা',
      'রাতের অন্ধকারে স্পষ্ট কালার/IR নাইট ভিশন',
      'মোশন অ্যালার্টসহ পরিবারের সবার ফোনে দেখার সুবিধা'
    ],
    processSteps: [
      { title: '১. বাসার নিরাপত্তা পয়েন্ট দেখা', desc: 'গেট, প্যাসেজ ও ছাদের নিরাপদ অ্যাঙ্গেল ঠিক করা।' },
      { title: '২. সুরক্ষিত ক্যাবলিং', desc: 'দেওয়াল ও গেটের তার নিরাপদ পাইপের ভেতর দিয়ে টানা।' },
      { title: '৩. টেস্ট ও টিভি/ফোন সংযোগ', desc: 'টিভি এবং মোবাইলে লাইভ ভিউ চালু।' }
    ],
    pricingStartingFrom: 'সাশ্রয়ী হোম সিকিউরিটি প্যাকেজ',
    warrantyInfo: '১ থেকে ২ বছরের অফিসিয়াল ওয়ারেন্টি',
    popularSearchKeywords: ['home cctv package rangpur', 'bashar cctv camera package', 'house cctv setup rangpur'],
    relatedServices: ['4-camera-cctv-package-rangpur', 'house-wiring-rangpur'],
    relatedProductSlugs: ['4-camera-cctv-package-price-bd', 'cctv-camera'],
    faqs: [
      { question: 'রাতের বেলা সম্পূর্ণ অন্ধকারে কি গেটের মানুষ চেনা যাবে?', answer: 'হ্যাঁ, স্মার্ট IR ও কালার নাইট ভিশন ক্যামেরায় অন্ধকারের মধ্যেও মানুষের মুখ ও গাড়ির নম্বর স্পষ্ট দেখা যায়।' }
    ]
  },
  'office-cctv-package-rangpur': {
    slug: 'office-cctv-package-rangpur',
    name: 'Office & Corporate CCTV Package Rangpur',
    bnName: 'রংপুর অফিস ও প্রতিষ্ঠান সিসিটিভি প্যাকেজ',
    category: 'CCTV & Surveillance',
    title: 'Shamim Tech Solution • Office CCTV Package Rangpur',
    metaDescription: 'অফিস, ক্লিনিক, এনজিও ও কর্পোরেট চেম্বারের জন্য অডিও আইপি ও এইচডি সিসিটিভি প্যাকেজ। কল: 01790139333।',
    h1: 'Corporate Office, Clinic & Institution CCTV Package in Rangpur',
    tagline: 'Clean Aesthetic Cabling, Audio IP Cameras & Centralized Monitoring',
    bengaliTagline: 'অফিস রুম, রিসেপশন ও করিডোরের জন্য পরিচ্ছন্ন অডিও-আইপি সিসিটিভি প্যাকেজ',
    description: 'অফিসের ডেকোরেশন অক্ষুণ্ণ রেখে পরিচ্ছন্ন ডোম/বুলেট ক্যামেরা, রিসেপশন অডিও রেকর্ডিং, NVR/DVR সেন্ট্রাল মনিটরিং এবং দীর্ঘমেয়াদী স্টোরেজ ব্যাকআপসহ অফিস প্যাকেজ।',
    keyFeatures: [
      'অফিসের সিলিংয়ে মানানসই স্লিম ডোম ও আইপি ক্যামেরা',
      'রিসেপশন ও মিটিং এরিয়ায় স্পষ্ট অডিও সাপোর্ট',
      'রিমোট মনিটরিং ও কম্পিউটারে ব্রাউজার/সফটওয়্যার এক্সেস'
    ],
    processSteps: [
      { title: '১. অফিস লেআউট প্ল্যানিং', desc: 'রিসেপশন, ওয়ার্কস্পেস ও স্টোর রুম কভার করা।' },
      { title: '২. নিট কেবলিং ও র‍্যাক বক্স', desc: 'সুন্দরভাবে ডেকোরেশনের সাথে মিলিয়ে ইনস্টলেশন।' },
      { title: '৩. ইউজার অ্যাক্সেস কনফিগার', desc: 'ম্যানেজমেন্টের পিসি ও মোবাইলে এক্সেস দেওয়া।' }
    ],
    pricingStartingFrom: 'অফিসের আয়তন অনুযায়ী কাস্টম প্যাকেজ',
    warrantyInfo: 'অফিসিয়াল ওয়ারেন্টি ও প্রাতিষ্ঠানিক সাপোর্ট',
    popularSearchKeywords: ['office cctv package rangpur', 'corporate cctv setup rangpur', 'clinic cctv package'],
    relatedServices: ['8-camera-cctv-package-rangpur', 'office-wiring-rangpur', 'zkteco-attendance-machine-setup-rangpur'],
    relatedProductSlugs: ['8-camera-cctv-package-price-bd', 'nvr'],
    faqs: [
      { question: 'ম্যানেজার কি নিজের কেবিন বা বাড়ি থেকে অফিসের সব ক্যামেরা দেখতে পারবেন?', answer: 'হ্যাঁ, পিসি বা মোবাইল অ্যাপে পাসওয়ার্ড-প্রটেক্টেড লাইভ ভিউ সেটআপ করে দেওয়া হয়।' }
    ]
  }
};

export const RANGPUR_EXPANSION_SERVICES_SEO: Record<string, ServiceSEOInfo> = {
  ...buildDistrictElectricalServices(),
  ...EXTRA_SERVICES
};

export const RANGPUR_EXPANSION_PRODUCTS_SEO: Record<string, ProductSEOInfo> = {
  'zkteco-fingerprint-attendance-machine': {
    slug: 'zkteco-fingerprint-attendance-machine',
    name: 'ZKTeco Fingerprint Attendance Machine',
    bnName: 'ZKTeco ফিঙ্গারপ্রিন্ট ও অ্যাটেনডেন্স মেশিন',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • ZKTeco Fingerprint Attendance Machine Price BD',
    metaDescription: 'অরিজিনাল ZKTeco ফিঙ্গারপ্রিন্ট, RFID কার্ড ও ফেস অ্যাটেনডেন্স মেশিন সেরা দামে কিনুন। ইনস্টলেশন ও ১ বছর ওয়ারেন্টি। কল: 01790139333।',
    h1: 'Original ZKTeco Fingerprint & Time Attendance Machine in Bangladesh',
    tagline: 'Accurate Biometric Employee Attendance with Free Software & Reporting',
    bengaliTagline: 'অফিস, স্কুল ও প্রতিষ্ঠানের জন্য অরিজিনাল ZKTeco ফিঙ্গারপ্রিন্ট হাজিরা মেশিন',
    overview: 'শামীম টেক সলিউশন অরিজিনাল ZKTeco ব্র্যান্ডের K40, F18, WL20, MB20 ও SpeedFace সিরিজের সব বায়োমেট্রিক হাজিরা মেশিন সাশ্রয়ী দামে বিক্রয়, ইনস্টলেশন ও সফটওয়্যার সাপোর্ট প্রদান করে।',
    priceNote: '৳৫,৮০০ থেকে শুরু (মডেল অনুযায়ী)',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ভেরিফিকেশন মোড', value: 'Fingerprint, RFID Card, PIN / Face Recognition' },
      { label: 'কানেক্টিভিটি', value: 'TCP/IP LAN, USB Host, Wi-Fi (মডেলভেদে)' },
      { label: 'সফটওয়্যার', value: 'ZKTime.Net / ZKBioTime (Excel ও PDF রিপোর্ট)' }
    ],
    keyFeatures: [
      '০.৫ সেকেন্ডের কম সময়ে নির্ভুল ফিঙ্গারপ্রিন্ট শনাক্তকরণ',
      'বিল্ট-ইন ব্যাটারি ব্যাকআপ (মডেলভেদে) — লোডশেডিংয়েও সচল',
      'অটোমেটিক দৈনিক ও মাসিক হাজিরা, লেট ও ওভারটাইম রিপোর্ট'
    ],
    buyingGuide: ['ছোট-মাঝারি অফিসের জন্য K40 ও ডোর লকের জন্য F18 সবচেয়ে বেশি ব্যবহৃত হয়।'],
    filterCategory: 'Fingerprint Machine',
    relatedProductSlugs: ['zkteco-k40-attendance-machine-price-bd', 'zkteco-f18-access-control-price-bd'],
    relatedServiceSlugs: ['zkteco-attendance-machine-setup-rangpur', 'zkteco-fingerprint-machine-service-bd'],
    faqs: [{ question: 'ইনস্টলেশন ও সফটওয়্যার ট্রেনিং কি সাথে দেওয়া হয়?', answer: 'হ্যাঁ, আমাদের টেকনিশিয়ান মেশিন লাগিয়ে কম্পিউটারে সফটওয়্যার সেটআপ ও ট্রেনিং দিয়ে দেন।' }]
  },
  'zkteco-k40-attendance-machine-price-bd': {
    slug: 'zkteco-k40-attendance-machine-price-bd',
    name: 'ZKTeco K40 Attendance Machine Price BD',
    bnName: 'ZKTeco K40 ফিঙ্গারপ্রিন্ট অ্যাটেনডেন্স মেশিন',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • ZKTeco K40 Attendance Machine Price in BD',
    metaDescription: 'ZKTeco K40 ২.৮-ইঞ্চি কালার ডিসপ্লে ও বিল্ট-ইন ব্যাটারিসহ ফিঙ্গারপ্রিন্ট অ্যাটেনডেন্স মেশিনের দাম ও ইনস্টলেশন। কল: 01790139333।',
    h1: 'ZKTeco K40 Time Attendance Terminal Price in Bangladesh',
    tagline: '1,000 Fingerprints, Built-in Backup Battery & Easy USB/LAN Export',
    bengaliTagline: 'বিল্ট-ইন ব্যাটারিসহ সবচেয়ে জনপ্রিয় ZKTeco K40 অফিস হাজিরা মেশিন',
    overview: 'ZKTeco K40 বাংলাদেশে অফিস, স্কুল, মাদ্রাসা ও দোকানের জন্য সবচেয়ে জনপ্রিয় এবং নির্ভরযোগ্য ফিঙ্গারপ্রিন্ট হাজিরা মেশিন। এতে বিল্ট-ইন ব্যাটারি থাকায় কারেন্ট চলে গেলেও ২–৩ ঘণ্টা চলে।',
    priceNote: '৳৬,২০০ থেকে শুরু (যোগাযোগ করুন আপডেট দামের জন্য)',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ইউজার ও ফিঙ্গার ক্যাপাসিটি', value: '১,০০০ ফিঙ্গারপ্রিন্ট + ১,০০০ কার্ড / ১,০০,০০০ লগ' },
      { label: 'ডিসপ্লে ও ব্যাকআপ', value: '২.৮" TFT কালার স্ক্রিন ও বিল্ট-ইন ব্যাটারি' },
      { label: 'রিপোর্ট ট্রান্সফার', value: 'LAN (TCP/IP) ও পেনড্রাইভ (USB)' }
    ],
    keyFeatures: ['লোডশেডিংয়েও চলার জন্য বিল্ট-ইন ব্যাটারি', 'পেনড্রাইভ দিয়েই সরাসরি Excel রিপোর্ট বের করার সুবিধা', 'সিম্পল ডোর বেল ও অ্যাক্সেস কন্ট্রোল সাপোর্ট'],
    buyingGuide: ['১০ থেকে ১০০ জন স্টাফের অফিস বা প্রতিষ্ঠানের জন্য K40 সেরা বাজেট পছন্দ।'],
    filterCategory: 'Fingerprint Machine',
    relatedProductSlugs: ['zkteco-fingerprint-attendance-machine', 'zkteco-f18-access-control-price-bd'],
    relatedServiceSlugs: ['zkteco-attendance-machine-setup-rangpur'],
    faqs: [{ question: 'ইন্টারনেট বা কম্পিউটার ছাড়া কি পেনড্রাইভে রিপোর্ট নেওয়া যায়?', answer: 'হ্যাঁ, সরাসরি পেনড্রাইভ লাগিয়ে হাজিরা রিপোর্ট ডাউনলোড করা যায়।' }]
  },
  'zkteco-f18-access-control-price-bd': {
    slug: 'zkteco-f18-access-control-price-bd',
    name: 'ZKTeco F18 Access Control Price BD',
    bnName: 'ZKTeco F18 এক্সেস কন্ট্রোল ও অ্যাটেনডেন্স মেশিন',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • ZKTeco F18 Access Control Machine Price BD',
    metaDescription: 'ZKTeco F18 ফিঙ্গারপ্রিন্ট ডোর এক্সেস কন্ট্রোল ও অ্যাটেনডেন্স টার্মিনাল। ব্যাংক, অফিস ও সার্ভার রুমের জন্য সেরা। কল: 01790139333।',
    h1: 'ZKTeco F18 Biometric Access Control Terminal Price in BD',
    tagline: '3,000 Fingerprints, Professional Door Lock Control & Attendance Logging',
    bengaliTagline: 'দরজার লক নিয়ন্ত্রণ ও স্টাফ হাজিরার জন্য প্রফেশনাল ZKTeco F18 ডিভাইস',
    overview: 'ZKTeco F18 একটি শক্তিশালী বায়োমেট্রিক অ্যাক্সেস কন্ট্রোল ও অ্যাটেনডেন্স ডিভাইস যা ম্যাগনেটিক লক বা ইলেকট্রিক ড্রপ বোল্টের সাথে যুক্ত হয়ে অফিস ও সার্ভার রুমের দরজা নিরাপদ রাখে।',
    priceNote: '৳৯,৫০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'ক্যাপাসিটি', value: '৩,০০০ ফিঙ্গারপ্রিন্ট ও ৫,০০০ কার্ড, ৩০,০০০ লগ' },
      { label: 'অ্যাক্সেস ইন্টারফেস', value: '3rd Party Electric Lock, Door Sensor, Exit Button, Alarm' },
      { label: 'কানেকশন', value: 'TCP/IP, RS485, USB-host' }
    ],
    keyFeatures: ['হাই-অ্যাকিউরেসি অপটিক্যাল সেন্সর', 'টাইম-জোন ও গ্রুপ এক্সেস কন্ট্রোল সুবিধা', 'এক্সেস কন্ট্রোল ও হাজিরা দুটো কাজই একসাথে'],
    buyingGuide: ['অফিসের দরজায় অটোমেটিক লক ও হাজিরা একসাথে চাইলে F18 বেছে নিন।'],
    filterCategory: 'Access Control',
    relatedProductSlugs: ['zkteco-fingerprint-attendance-machine', 'smart-fingerprint-door-lock-price-bd'],
    relatedServiceSlugs: ['zkteco-access-control-installation-rangpur'],
    faqs: [{ question: 'F18 দিয়ে কি গ্লাস ডোর ও কাঠের দরজা দুটোতেই লক লাগানো যাবে?', answer: 'হ্যাঁ, সঠিক EM Lock বা Drop Bolt ব্যবহার করে গ্লাস ও কাঠ উভয় দরজাতেই এটি কাজ করে।' }]
  },
  'zkteco-speedface-v4l-price-bd': {
    slug: 'zkteco-speedface-v4l-price-bd',
    name: 'ZKTeco SpeedFace V4L / Face Attendance Price BD',
    bnName: 'ZKTeco SpeedFace ফেস রিকগনিশন অ্যাটেনডেন্স মেশিন',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • ZKTeco SpeedFace Face Attendance Price BD',
    metaDescription: 'স্পর্শ ছাড়াই মুখ দেখিয়ে হাজিরা ও দরজা খোলার জন্য ZKTeco SpeedFace V4L / V5L মেশিন। কল: 01790139333।',
    h1: 'ZKTeco SpeedFace Touchless Face Recognition Terminal in BD',
    tagline: 'Visible Light Facial Recognition + Palm/Fingerprint & Mask Detection',
    bengaliTagline: 'স্পর্শ ছাড়াই দূর থেকে দ্রুত ফেস স্ক্যান করে হাজিরা দেওয়ার আধুনিক ZKTeco মেশিন',
    overview: 'ZKTeco SpeedFace সিরিজ ভিজিবল লাইট ফেসিয়াল রিকগনিশন টেকনোলজি ব্যবহার করে মাত্র ০.৩ সেকেন্ডে মুখ শনাক্ত করে—যা হাসপাতাল, অফিস ও বড় প্রতিষ্ঠানের জন্য সেরা।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'স্ক্রিন ও স্পিড', value: '৪–৫ ইঞ্চি টাচ ডিসপ্লে, <০.৩ সেকেন্ড ফেস ম্যাচিং' },
      { label: 'অ্যান্টি-স্পুফিং', value: 'ছবি বা ভিডিও দিয়ে নকল হাজিরা ঠেকানোর প্রযুক্তি' },
      { label: 'বিকল্প মোড', value: 'Face, Fingerprint (Pro), RFID Card, Password' }
    ],
    keyFeatures: ['অন্ধকার বা কম আলোতেও দ্রুত মুখ চিনে নেয়', 'স্পর্শ ছাড়া স্বাস্থ্যসম্মত হাজিরা', 'ডোর অ্যাক্সেস ও ZKBioTime সফটওয়্যার সাপোর্ট'],
    buyingGuide: ['যাদের হাতে কাজ করার কারণে ফিঙ্গারপ্রিন্ট ক্ষয়ে যায় বা আধুনিক অফিস, তাদের জন্য SpeedFace সেরা।'],
    filterCategory: 'Fingerprint Machine',
    relatedProductSlugs: ['zkteco-fingerprint-attendance-machine', 'anviz-facepass-biometric-price-bd'],
    relatedServiceSlugs: ['zkteco-attendance-machine-setup-rangpur'],
    faqs: [{ question: 'ছবি বা মোবাইলের ফটো দেখালে কি হাজিরা নেবে?', answer: 'না, এতে 3D অ্যান্টি-স্পুফিং অ্যালগরিদম থাকায় লাইভ মানুষ ছাড়া ছবি বা ভিডিওতে হাজিরা নেয় না।' }]
  },
  'zkteco-biometric-machine-rangpur': {
    slug: 'zkteco-biometric-machine-rangpur',
    name: 'ZKTeco Biometric Machine Rangpur',
    bnName: 'রংপুর ZKTeco বায়োমেট্রিক ও অ্যাক্সেস কন্ট্রোল শোরুম',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • ZKTeco Biometric Machine Price Rangpur',
    metaDescription: 'রংপুর ও হারাগাছে ZKTeco বায়োমেট্রিক হাজিরা ও এক্সেস কন্ট্রোল মেশিন সরাসরি বিক্রয় ও ইনস্টলেশন। কল: 01790139333।',
    h1: 'ZKTeco Biometric Attendance & Access Control Supplier in Rangpur',
    tagline: 'Genuine ZKTeco Stock, Same-Day Installation & Local Warranty in Rangpur',
    bengaliTagline: 'রংপুরে অরিজিনাল ZKTeco ডিভাইস বিক্রয়, ইনস্টলেশন ও লোকাল টেকনিশিয়ান সাপোর্ট',
    overview: 'রংপুর বিভাগে সরকারি-বেসরকারি অফিস, এনজিও, ক্লিনিক, স্কুল ও ব্যবসার জন্য ZKTeco-র সকল মডেল সরাসরি স্টক থেকে সরবরাহ ও ইনস্টল করে শামীম টেক সলিউশন।',
    priceNote: '৳৫,৮০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি ও রংপুরে লোকাল সাপোর্ট',
    specifications: [{ label: 'উপলব্ধ মডেল', value: 'ZKTeco K40, WL20, F18, MB20, SpeedFace-V4L/V5L' }],
    keyFeatures: ['রংপুর শহর ও ৮ জেলায় দ্রুত অন-সাইট সেটআপ', '১০০% অরিজিনাল সিল্ড প্রোডাক্ট ও সফটওয়্যার ট্রেনিং'],
    buyingGuide: ['আপনার স্টাফ সংখ্যা ও অফিসের ধরন জানালে আমরাই সেরা মডেলটি সাজেস্ট করব।'],
    filterCategory: 'Fingerprint Machine',
    relatedProductSlugs: ['zkteco-k40-attendance-machine-price-bd', 'zkteco-f18-access-control-price-bd'],
    relatedServiceSlugs: ['zkteco-attendance-machine-setup-rangpur', 'zkteco-access-control-installation-rangpur'],
    faqs: [{ question: 'রংপুরে কি একই দিনে মেশিন ইনস্টল করে দেওয়া হয়?', answer: 'হ্যাঁ, রংপুর শহর ও আশপাশের এলাকায় অর্ডার নিশ্চিত হওয়ার দিনেই সাধারণত ইনস্টলেশন করা হয়।' }]
  },
  'anviz-fingerprint-attendance-machine': {
    slug: 'anviz-fingerprint-attendance-machine',
    name: 'Anviz Fingerprint Attendance Machine',
    bnName: 'Anviz ফিঙ্গারপ্রিন্ট ও বায়োমেট্রিক মেশিন',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • Anviz Biometric Attendance Machine Price BD',
    metaDescription: 'Anviz ব্র্যান্ডের টেকসই ফিঙ্গারপ্রিন্ট অ্যাটেনডেন্স ও এক্সেস কন্ট্রোল মেশিন। CrossChex সফটওয়্যার সাপোর্ট। কল: 01790139333।',
    h1: 'Original Anviz Biometric Fingerprint & Attendance Machine BD',
    tagline: 'BioNANO Algorithm, Waterproof Optical Sensor & CrossChex Software',
    bengaliTagline: 'দ্রুতগতির BioNANO সেন্সরযুক্ত অরিজিনাল Anviz বায়োমেট্রিক হাজিরা মেশিন',
    overview: 'Anviz একটি বিশ্বখ্যাত আমেরিকান বায়োমেট্রিক ব্র্যান্ড, যা শুকনো, ভেজা বা হালকা আঁচড় লাগা আঙুলেও নির্ভুলভাবে ফিঙ্গারপ্রিন্ট শনাক্ত করতে পারে।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [
      { label: 'সেন্সর প্রযুক্তি', value: 'Anviz BioNANO AFOS Waterproof/Scratchproof Sensor' },
      { label: 'কানেক্টিভিটি', value: 'LAN, Wi-Fi, USB ও Cloud CrossChex' }
    ],
    keyFeatures: ['ভেজা বা ধুলোযুক্ত আঙুলেও দ্রুত রিডিং', 'ফ্রি Anviz CrossChex ডেক্সটপ ও ক্লাউড সফটওয়্যার', 'টেকসই হার্ডওয়্যার'],
    buyingGuide: ['কারখানা, ওয়ার্কশপ বা দীর্ঘমেয়াদী টেকসই ব্যবহারের জন্য Anviz অত্যন্ত নির্ভরযোগ্য।'],
    filterCategory: 'Fingerprint Machine',
    relatedProductSlugs: ['anviz-facepass-biometric-price-bd', 'anviz-access-control-machine-rangpur'],
    relatedServiceSlugs: ['anviz-biometric-machine-setup-rangpur'],
    faqs: [{ question: 'Anviz মেশিন কি পুরনো নেটওয়ার্কে সহজে যুক্ত করা যায়?', answer: 'হ্যাঁ, LAN বা USB উভয়ভাবেই পিসির সাথে যুক্ত করে ব্যবহার করা যায়।' }]
  },
  'anviz-facepass-biometric-price-bd': {
    slug: 'anviz-facepass-biometric-price-bd',
    name: 'Anviz FacePass Face Recognition Terminal Price BD',
    bnName: 'Anviz FacePass ফেস ও বায়োমেট্রিক অ্যাটেনডেন্স মেশিন',
    category: 'Biometric Attendance',
    title: 'Shamim Tech Solution • Anviz FacePass Biometric Price BD',
    metaDescription: 'Anviz FacePass ইনফ্রারেড ফেস রিকগনিশন অ্যাটেনডেন্স ও অ্যাক্সেস কন্ট্রোল টার্মিনাল। কল: 01790139333।',
    h1: 'Anviz FacePass Facial Recognition Terminal in Bangladesh',
    tagline: 'Dual-Camera Infrared Face Recognition & Live Detection Security',
    bengaliTagline: 'দিন-রাতে যেকোনো আলোতে নির্ভুল ফেস শনাক্তকারী Anviz FacePass ডিভাইস',
    overview: 'Anviz FacePass ডুয়াল ইনফ্রারেড ক্যামেরা দিয়ে কম আলোতেও মুহূর্তের মধ্যে কর্মীর চেহারা শনাক্ত করে এবং অ্যাক্সেস কন্ট্রোল ও হাজিরা রেকর্ড রাখে।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'মোড', value: 'Face, RFID Card, PIN + CrossChex Cloud' }],
    keyFeatures: ['ডুয়াল ক্যামেরা লাইভ ফেস ডিটেকশন', 'ডোর লক কন্ট্রোল ও রিপোর্টিং'],
    buyingGuide: ['স্পর্শবিহীন হাই-সিকিউরিটি অফিসের জন্য আদর্শ।'],
    filterCategory: 'Fingerprint Machine',
    relatedProductSlugs: ['anviz-fingerprint-attendance-machine', 'zkteco-speedface-v4l-price-bd'],
    relatedServiceSlugs: ['anviz-biometric-machine-setup-rangpur', 'anviz-access-control-installation-bd'],
    faqs: [{ question: 'চশমা পরলে কি FacePass মুখ চিনতে পারে?', answer: 'হ্যাঁ, চশমা পরা অবস্থাতেও এটি সহজেই মুখ শনাক্ত করে।' }]
  },
  'anviz-access-control-machine-rangpur': {
    slug: 'anviz-access-control-machine-rangpur',
    name: 'Anviz Access Control Machine Rangpur',
    bnName: 'রংপুর Anviz এক্সেস কন্ট্রোল মেশিন ও লক সেট',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Anviz Access Control Machine Rangpur',
    metaDescription: 'রংপুরে অফিসের দরজায় Anviz বায়োমেট্রিক ও RFID অ্যাক্সেস কন্ট্রোল মেশিন বিক্রয় ও ইনস্টলেশন। কল: 01790139333।',
    h1: 'Anviz Door Access Control & Attendance Terminal in Rangpur',
    tagline: 'Secure Office Entry with Anviz Controllers & Magnetic Locks',
    bengaliTagline: 'রংপুরে Anviz ডোর এক্সেস কন্ট্রোল মেশিন বিক্রয়, লক ফিটিং ও টেকনিশিয়ান সেবা',
    overview: 'রংপুর বিভাগে অফিস, ডায়াগনস্টিক ও প্রতিষ্ঠানের প্রবেশ নিয়ন্ত্রণে Anviz অ্যাক্সেস কন্ট্রোল ডিভাইস, ম্যাগনেটিক লক ও এক্সিট সুইচ প্যাকেজ।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'কম্পোনেন্ট', value: 'Anviz Terminal + 280KG EM Lock + 12V PSU + Exit Button' }],
    keyFeatures: ['পূর্ণাঙ্গ এক্সেস কন্ট্রোল কিট', 'অভিজ্ঞ টেকনিশিয়ান দিয়ে গ্লাস/কাঠের দরজায় ফিটিং'],
    buyingGuide: ['অফিস ও সংরক্ষিত কক্ষের নিরাপত্তার জন্য সেরা।'],
    filterCategory: 'Access Control',
    relatedProductSlugs: ['anviz-fingerprint-attendance-machine', 'zkteco-f18-access-control-price-bd'],
    relatedServiceSlugs: ['anviz-access-control-installation-bd'],
    faqs: [{ question: 'রংপুরে কি লকসহ সম্পূর্ণ সেট পাওয়া যায়?', answer: 'হ্যাঁ, ডিভাইস, লক, ব্র্যাকেট, পাওয়ার সাপ্লাই ও ফিটিং সব একসাথে পাওয়া যায়।' }]
  },
  'smart-fingerprint-door-lock-price-bd': {
    slug: 'smart-fingerprint-door-lock-price-bd',
    name: 'Smart Fingerprint Door Lock Price BD',
    bnName: 'স্মার্ট ফিঙ্গারপ্রিন্ট ও ডিজিটাল ডোর লক',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Smart Fingerprint Door Lock Price in BD',
    metaDescription: 'কাঠের ও স্টিল দরজার জন্য ফিঙ্গারপ্রিন্ট, পাসকোড, কার্ড ও মোবাইল অ্যাপ চালিত স্মার্ট ডোর লক। কল: 01790139333।',
    h1: 'Smart Biometric Fingerprint & WiFi Door Lock Price in Bangladesh',
    tagline: '5-in-1 Unlock: Fingerprint, PIN Code, RFID Card, App & Mechanical Key',
    bengaliTagline: 'ফ্ল্যাট, বাসা ও অফিসের কাঠের দরজার জন্য আধুনিক স্মার্ট ফিঙ্গারপ্রিন্ট তালা',
    overview: 'বাসাবাড়ির মূল দরজা ও অফিস ক্যাবিনের জন্য প্রিমিয়াম অ্যালুমিনিয়াম-অ্যালয় বডির ৫-ইন-১ স্মার্ট ফিঙ্গারপ্রিন্ট ডোর লক বিক্রয় ও ইনস্টলেশন।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের ওয়ারেন্টি',
    specifications: [{ label: 'আনলক পদ্ধতি', value: 'Fingerprint, Passcode, IC Card, TTLock/Tuya App, Key' }],
    keyFeatures: ['দরজা বন্ধ করলেই অটো-লক সুবিধা', 'ট্যাম্পার অ্যালার্ম ও পিন-হাইড পাসওয়ার্ড', 'জরুরি ইউএসবি চার্জ পোর্ট'],
    buyingGuide: ['আবাসিক ফ্ল্যাট ও অফিস চেম্বারের চাবি ঝামেলা মুক্ত নিরাপত্তায় এটি দারুণ জনপ্রিয়।'],
    filterCategory: 'Access Control',
    relatedProductSlugs: ['glass-door-biometric-lock-bd', 'zkteco-f18-access-control-price-bd'],
    relatedServiceSlugs: ['smart-door-lock-installation-rangpur'],
    faqs: [{ question: 'কাঠের দরজায় লাগাতে কি নতুন দরজা কিনতে হয়?', answer: 'না, আপনার বাসার বা অফিসের বর্তমান কাঠের দরজাতেই মাপ অনুযায়ী বসিয়ে দেওয়া যায়।' }]
  },
  'glass-door-biometric-lock-bd': {
    slug: 'glass-door-biometric-lock-bd',
    name: 'Glass Door Biometric Smart Lock BD',
    bnName: 'গ্লাস ডোর স্মার্ট ফিঙ্গারপ্রিন্ট লক',
    category: 'Access Control & Smart Locks',
    title: 'Shamim Tech Solution • Glass Door Biometric Smart Lock Price BD',
    metaDescription: 'কাঁচ না কেটেই থাই গ্লাস ও টেম্পার্ড গ্লাস দরজায় লাগানোর স্মার্ট ফিঙ্গারপ্রিন্ট ও রিমোট লক। কল: 01790139333।',
    h1: 'Drill-Free Frameless Glass Door Smart Biometric Lock in BD',
    tagline: 'Easy U-Bracket Clamp Installation for 10mm–12mm Tempered Glass Doors',
    bengaliTagline: 'গ্লাস না কেটেই অফিস ও শোরুমের থাই গ্লাস দরজায় লাগানোর স্মার্ট লক',
    overview: 'অফিস ও শোরুমের ১০–১২ মিমি টেম্পার্ড গ্লাস ডোর ছিদ্র না করেই U-ক্ল্যাম্প প্রযুক্তিতে সহজে ফিটিংযোগ্য স্মার্ট ফিঙ্গারপ্রিন্ট, পাসওয়ার্ড ও কার্ড ডোর লক।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের সার্ভিস ওয়ারেন্টি',
    specifications: [{ label: 'দরজার ধরন', value: '10mm–12mm Frameless / Thai Glass Door (No Drilling)' }],
    keyFeatures: ['গ্লাস ড্রিল করার ঝুঁকি ছাড়াই ফিটিং', 'ফিঙ্গারপ্রিন্ট, কার্ড, পিন ও রিমোট সাপোর্ট'],
    buyingGuide: ['শোরুম বা অফিসের গ্লাস দরজার জন্য নিরাপদ ও স্টাইলিশ সমাধান।'],
    filterCategory: 'Access Control',
    relatedProductSlugs: ['smart-fingerprint-door-lock-price-bd', 'zkteco-f18-access-control-price-bd'],
    relatedServiceSlugs: ['smart-door-lock-installation-rangpur'],
    faqs: [{ question: 'দোকান বন্ধ করে যাওয়ার সময় বাইরে থেকে কি চাবি ছাড়া লক হবে?', answer: 'হ্যাঁ, দরজা ভিজিয়ে দিলেই অটোমেটিক লক হয়ে যাবে।' }]
  },
  'tiandy-cctv-camera-price-bd': {
    slug: 'tiandy-cctv-camera-price-bd',
    name: 'Tiandy CCTV Camera Price BD',
    bnName: 'Tiandy সিসিটিভি ও আইপি ক্যামেরা দাম',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Tiandy CCTV & IP Camera Price in BD',
    metaDescription: 'অরিজিনাল Tiandy 2MP/4MP কালার মেকার নাইট ভিশন আইপি ক্যামেরা ও এনভিআর সেরা দামে কিনুন। কল: 01790139333।',
    h1: 'Original Tiandy Color Maker IP Camera Price in Bangladesh',
    tagline: 'Super Starlight Full-Color Night Vision with Built-in Mic & PoE',
    bengaliTagline: 'অরিজিনাল Tiandy কালার মেকার ও সুপার স্টারলাইট আইপি ক্যামেরা',
    overview: 'Tiandy বিশ্বজুড়ে শীর্ষস্থানীয় একটি আইপি সারভেইল্যান্স ব্র্যান্ড, যার ক্যামেরাগুলো অল্প আলোতেও নয়েজ-ফ্রি ঝকঝকে কালার ভিডিও এবং অডিও রেকর্ড করতে সক্ষম।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১–২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'রেজ্যুলেশন ও ফিচার', value: '2MP / 3MP / 4MP Color Maker IP, PoE, Built-in Mic, IP67' }],
    keyFeatures: ['রাতে স্পষ্ট কালার ভিশন', 'কম ডাটা ও হার্ডডিস্ক স্পেস খরচ (S+265)', 'ইনডোর ও আউটডোর মডেল'],
    buyingGuide: ['কম দামে ভালো মানের আইপি ক্যামেরা প্রজেক্টের জন্য Tiandy খুবই চমৎকার।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['tiandy-ip-camera-rangpur', 'cctv-camera'],
    relatedServiceSlugs: ['tiandy-cctv-camera-installation-rangpur'],
    faqs: [{ question: 'Tiandy ক্যামেরা কি মোবাইলে দেখা যায়?', answer: 'হ্যাঁ, অফিশিয়াল EasyLive Plus অ্যাপে সহজেই লাইভ দেখা যায়।' }]
  },
  'tiandy-ip-camera-rangpur': {
    slug: 'tiandy-ip-camera-rangpur',
    name: 'Tiandy IP Camera Rangpur',
    bnName: 'রংপুর Tiandy আইপি ক্যামেরা বিক্রয় ও সার্ভিস',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • Tiandy IP Camera Showroom Rangpur',
    metaDescription: 'রংপুরে Tiandy কালার আইপি ক্যামেরা, PoE NVR ও অফিসিয়াল ওয়ারেন্টিসহ ইনস্টলেশন। কল: 01790139333।',
    h1: 'Tiandy IP Surveillance Cameras & NVR in Rangpur',
    tagline: 'Official Tiandy Cameras with Expert On-Site Setup in Rangpur Division',
    bengaliTagline: 'রংপুর বিভাগে Tiandy আইপি ক্যামেরা বিক্রয় ও প্রফেশনাল ইনস্টলেশন',
    overview: 'রংপুর শহর, হারাগাছ ও আশপাশের এলাকায় Tiandy 2MP/4MP বুলেট ও ডোম আইপি ক্যামেরা এবং NVR সরাসরি ইনস্টলেশন সুবিধা।',
    priceNote: 'সেরা বাজার দামে পাওয়া যাচ্ছে — কল করুন',
    warranty: 'অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [{ label: 'ধরন', value: 'Tiandy Bullet & Dome PoE IP Camera' }],
    keyFeatures: ['অডিও রেকর্ডিং ও ওয়েদারপ্রুফ বডি', 'অভিজ্ঞ টেকনিশিয়ান দ্বারা ফিটিং'],
    buyingGuide: ['বড় দোকান, অফিস ও বাড়ির জন্য Tiandy PoE NVR প্যাকেজ বেছে নিতে পারেন।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['tiandy-cctv-camera-price-bd', 'gigalink-poe-switch-price-bd'],
    relatedServiceSlugs: ['tiandy-cctv-camera-installation-rangpur'],
    faqs: [{ question: 'অন্য ব্র্যান্ডের NVR-এ কি Tiandy আইপি ক্যামেরা সাপোর্ট করবে?', answer: 'হ্যাঁ, ONVIF প্রোটোকল থাকায় বেশিরভাগ NVR-এ Tiandy আইপি ক্যামেরা সাপোর্ট করে।' }]
  },
  'cp-plus-cctv-camera-price-bd': {
    slug: 'cp-plus-cctv-camera-price-bd',
    name: 'CP Plus CCTV Camera & DVR Price BD',
    bnName: 'CP Plus সিসিটিভি ক্যামেরা ও ডিভিআর দাম',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • CP Plus CCTV Camera & DVR Price BD',
    metaDescription: 'অরিজিনাল CP Plus 2MP/5MP গার্ড প্লাস সিসিটিভি ক্যামেরা ও DVR সেরা দামে কিনুন। কল: 01790139333।',
    h1: 'Original CP Plus CCTV Camera & Guard+ DVR in Bangladesh',
    tagline: 'Reliable Everyday Security Cameras & Mobile View with gCMOB',
    bengaliTagline: 'দোকান ও বাসাবাড়ির জন্য সাশ্রয়ী মূল্যের অরিজিনাল CP Plus সিসিটিভি ক্যামেরা',
    overview: 'CP Plus সিসিটিভি ক্যামেরা ও DVR বাংলাদেশের ঘরে ঘরে পরিচিত একটি নির্ভরযোগ্য ব্র্যান্ড, যা কম বাজেটে পরিষ্কার ভিডিও ও সহজ মোবাইল মনিটরিং দেয়।',
    priceNote: '৳১,৭৫০ থেকে শুরু',
    warranty: '১ থেকে ২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'রেজ্যুলেশন', value: '2.4MP Full HD / 5MP Guard+ & IP Cameras' }],
    keyFeatures: ['IR ও ফুল কালার নাইট ভিশন', 'gCMOB / iCMOB ফ্রি মোবাইল অ্যাপ', 'সহজ রিপ্লেসমেন্ট ওয়ারেন্টি'],
    buyingGuide: ['বাজেট সাশ্রয়ী ৪ বা ৮ ক্যামেরা সেটআপের জন্য CP Plus দারুণ অপশন।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['cctv-camera', 'dvr'],
    relatedServiceSlugs: ['cctv-installation'],
    faqs: [{ question: 'CP Plus-এর পুরনো সিস্টেমে কি নতুন ক্যামেরা লাগানো যাবে?', answer: 'হ্যাঁ, আপনার পুরনো DVR সচল থাকলে নতুন HDCVI/Analog HD ক্যামেরা লাগানো যাবে।' }]
  },
  'panasonic-pabx-intercom-machine-price-bd': {
    slug: 'panasonic-pabx-intercom-machine-price-bd',
    name: 'Panasonic PABX Intercom Machine Price BD',
    bnName: 'Panasonic পিএবিএক্স ও ইন্টারকম মেশিনের দাম',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Panasonic PABX Intercom Machine Price BD',
    metaDescription: 'অরিজিনাল Panasonic KX-TES824 (3×8 থেকে 8×24 লাইন) এবং IP-PBX ইন্টারকম মেশিন সেরা দামে কিনুন। কল: 01790139333।',
    h1: 'Original Panasonic PABX & Office Intercom System Price in BD',
    tagline: 'Expandable Analog & IP PABX Exchanges for Offices, Hospitals & Hotels',
    bengaliTagline: 'অফিস ও প্রতিষ্ঠানের অভ্যন্তরীণ যোগাযোগে অরিজিনাল Panasonic পিএবিএক্স মেশিন',
    overview: 'Panasonic KX-TES824 (3 CO / 8 Extension থেকে 8 CO / 24 Extension পর্যন্ত) বাংলাদেশের সবচেয়ে টেকসই ও দীর্ঘস্থায়ী পিএবিএক্স ইন্টারকম মেশিন।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের সার্ভিস ওয়ারেন্টি',
    specifications: [{ label: 'ক্যাপাসিটি', value: '3×8, 6×16, 8×24 Extensions + Auto Attendant (DISA)' }],
    keyFeatures: ['১০+ বছর নিশ্চিন্তে চালানোর মতো টেকসই হার্ডওয়্যার', 'কল ট্রান্সফার, হোল্ড ও কনফারেন্স সুবিধা'],
    buyingGuide: ['অফিস ও হাসপাতালের নির্ভরযোগ্য দীর্ঘমেয়াদী ব্যবহারের জন্য Panasonic সবার প্রথম পছন্দ।'],
    filterCategory: 'Other Accessories',
    relatedProductSlugs: ['karel-pabx-system-price-bd', 'grandstream-ip-phone-pbx-price-bd'],
    relatedServiceSlugs: ['panasonic-pbx-intercom-setup-rangpur'],
    faqs: [{ question: 'ভবিষ্যতে স্টাফ বাড়লে কি Panasonic এক্সটেনশন বাড়ানো যায়?', answer: 'হ্যাঁ, TES824 মেশিনে অতিরিক্ত এক্সপ্যানশন কার্ড লাগিয়ে ২৪ লাইন পর্যন্ত বাড়ানো যায়।' }]
  },
  'karel-pabx-system-price-bd': {
    slug: 'karel-pabx-system-price-bd',
    name: 'Karel PABX System Price BD',
    bnName: 'Karel পিএবিএক্স ইন্টারকম সিস্টেম দাম',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Karel PABX Intercom Price in BD',
    metaDescription: 'Karel MS26 / MS38 / MS48 (৮ থেকে ৪৮ পোর্ট) পিএবিএক্স ইন্টারকম মেশিন ও টেলিফোন সেট। কল: 01790139333।',
    h1: 'Karel PABX & Intercom Exchange Price in Bangladesh',
    tagline: 'Affordable & Feature-Rich PABX for Clinics, Diagnostic Centers & Hotels',
    bengaliTagline: 'সাশ্রয়ী দামে বেশি এক্সটেনশন সুবিধার Karel ইন্টারকম ও পিএবিএক্স সিস্টেম',
    overview: 'তুরস্কের জনপ্রিয় Karel ব্র্যান্ডের MS26, MS38 ও MS48 মডেলগুলো কম বাজেটে ১৬ থেকে ৪৮টি পর্যন্ত এক্সটেনশন লাইন দেওয়ার জন্য অত্যন্ত কার্যকর।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের ওয়ারেন্টি',
    specifications: [{ label: 'পোর্ট অপশন', value: '8, 12, 16, 24, 32, 48 Extensions + Caller ID' }],
    keyFeatures: ['বিল্ট-ইন কলার আইডি ও অটো-রিসেপশনিস্ট অপশন', 'সাশ্রয়ী মূল্য ও সহজ মেইনটেন্যান্স'],
    buyingGuide: ['ক্লিনিক, আবাসিক হোটেল ও বড় অফিসে সাশ্রয়ী ইন্টারকমের জন্য Karel সেরা।'],
    filterCategory: 'Other Accessories',
    relatedProductSlugs: ['panasonic-pabx-intercom-machine-price-bd', 'grandstream-ip-phone-pbx-price-bd'],
    relatedServiceSlugs: ['karel-pbx-intercom-installation-rangpur'],
    faqs: [{ question: 'Karel-এর সাথে কি যেকোনো সাধারণ টেলিফোন সেট কাজ করে?', answer: 'হ্যাঁ, যেকোনো সাধারণ বা কলার-আইডিযুক্ত টেলিফোন সেট ব্যবহার করা যায়।' }]
  },
  'grandstream-ip-phone-pbx-price-bd': {
    slug: 'grandstream-ip-phone-pbx-price-bd',
    name: 'Grandstream IP Phone & IP-PBX Price BD',
    bnName: 'Grandstream আইপি ফোন ও IP-PBX সিস্টেম',
    category: 'PABX & Intercom',
    title: 'Shamim Tech Solution • Grandstream IP Phone & UCM IP-PBX Price BD',
    metaDescription: 'আধুনিক অফিসের জন্য Grandstream IP Phone ও UCM6300 সিরিজ IP-PBX কলিং সিস্টেম। কল: 01790139333।',
    h1: 'Grandstream IP Phones & UCM IP-PBX Systems in Bangladesh',
    tagline: 'Crystal Clear HD VoIP Calling, Multi-Branch Intercom & Call Recording',
    bengaliTagline: 'ল্যান নেটওয়ার্কের মাধ্যমে আধুনিক HD ভয়েস কলিং ও কল রেকর্ডিং সিস্টেম',
    overview: 'আধুনিক কর্পোরেট অফিস ও কল সেন্টারের জন্য Grandstream GXP/GRP IP Phone এবং UCM সিরিজের IP-PBX সিস্টেম বিক্রয় ও কনফিগারেশন সেবা।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'ফিচার', value: 'SIP VoIP HD Audio, PoE Support, Built-in Call Recording' }],
    keyFeatures: ['অতিরিক্ত টেলিফোন তার ছাড়াই অফিস LAN নেটওয়ার্কে কাজ করে', 'অফিসের কল রেকর্ডিং ও IVR মেনু সুবিধা'],
    buyingGuide: ['যাদের অফিসে আগে থেকেই LAN ক্যাবলিং করা আছে, তাদের জন্য IP Phone সেরা।'],
    filterCategory: 'Networking Products',
    relatedProductSlugs: ['panasonic-pabx-intercom-machine-price-bd', 'tp-link-network-switch-router-price-bd'],
    relatedServiceSlugs: ['pbx-installation', 'lan-network-installation'],
    faqs: [{ question: 'ইন্টারনেট না থাকলেও কি অফিসের ভেতরে IP ফোন কাজ করবে?', answer: 'হ্যাঁ, অফিসের লোকাল LAN সুইচের মাধ্যমে ইন্টারনেট ছাড়াই অভ্যন্তরীণ ইন্টারকম কল সম্পূর্ণ ফ্রি কাজ করে।' }]
  },
  'tp-link-network-switch-router-price-bd': {
    slug: 'tp-link-network-switch-router-price-bd',
    name: 'TP-Link Network Switch & Router Price BD',
    bnName: 'TP-Link নেটওয়ার্ক সুইচ ও ওয়াইফাই রাউটার',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • TP-Link Switch & WiFi Router Price BD',
    metaDescription: 'অরিজিনাল TP-Link TL-SF1005D, Gigabit Switch এবং ডুয়াল-ব্যান্ড ওয়াইফাই রাউটার সেরা দামে কিনুন। কল: 01790139333।',
    h1: 'Original TP-Link Ethernet Switch & WiFi Routers in Bangladesh',
    tagline: 'Reliable 5/8/16-Port Switches & High-Speed Routers for CCTV & Offices',
    bengaliTagline: 'অরিজিনাল TP-Link ইথারনেট সুইচ ও হাই-স্পিড ওয়াইফাই রাউটার শপ',
    overview: 'শামীম টেক সলিউশনে অরিজিনাল TP-Link TL-SF1005D (5-Port), TL-SF1008D, গিগাবিট সুইচ এবং Wi-Fi রাউটার অফিসিয়াল ওয়ারেন্টিসহ পাওয়া যায়।',
    priceNote: '৳৭৫৯ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'মডেল', value: '5-Port / 8-Port / 16-Port Fast & Gigabit Ethernet Switches, Dual-Band Routers' }],
    keyFeatures: ['প্লাগ অ্যান্ড প্লে স্থিতিশীল ডাটা ট্রান্সফার', 'কম বিদ্যুৎ খরচ ও দীর্ঘস্থায়ী ডিজাইন'],
    buyingGuide: ['বাসা বা ছোট অফিসের ইন্টারনেট ও আইপি ক্যামেরা নেটওয়ার্ক ভাগ করার জন্য TP-Link খুবই নির্ভরযোগ্য।'],
    filterCategory: 'Networking Products',
    relatedProductSlugs: ['d-link-ethernet-switch-price-bd', 'gigalink-poe-switch-price-bd'],
    relatedServiceSlugs: ['router-switch-configuration', 'lan-network-installation'],
    faqs: [{ question: '৫ পোর্ট TP-Link সুইচ দিয়ে কি সিসিটিভি ও কম্পিউটার একসাথে চালানো যাবে?', answer: 'হ্যাঁ, আপনার রাউটার থেকে একটি লাইন সুইচে দিয়ে বাকি পোর্টগুলোতে NVR ও পিসি চালাতে পারবেন।' }]
  },
  'd-link-ethernet-switch-price-bd': {
    slug: 'd-link-ethernet-switch-price-bd',
    name: 'D-Link Ethernet Switch Price BD',
    bnName: 'D-Link ইথারনেট ও নেটওয়ার্ক সুইচ দাম',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • D-Link DES-1005C / Gigabit Switch Price BD',
    metaDescription: 'অরিজিনাল D-Link DES-1005C (5-Port), 8-Port ও PoE নেটওয়ার্ক সুইচ সেরা দামে কিনুন। কল: 01790139333।',
    h1: 'Original D-Link Desktop & Rackmount Network Switches in BD',
    tagline: 'High-Speed Auto-Negotiation Ports for Smooth Data & CCTV Streaming',
    bengaliTagline: 'অফিস ল্যান ও হাই-স্পিড ইন্টারনেট কানেকশনের জন্য অরিজিনাল D-Link সুইচ',
    overview: 'আমাদের শপে অরিজিনাল D-Link DES-1005C ৫-পোর্ট ও ৮-পোর্ট সুইচ এবং গিগাবিট সুইচ সরাসরি স্টক থেকে সরবরাহ করা হয়।',
    priceNote: '৳৭০০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'স্পিড ও পোর্ট', value: '5/8/16/24-Port 10/100 & 10/100/1000 Mbps Auto MDI/MDIX' }],
    keyFeatures: ['দ্রুত ও ল্যাগ-ফ্রি নেটওয়ার্ক ট্রান্সফার', 'ফ্যানলেস নীরব অপারেশন'],
    buyingGuide: ['অফিস কম্পিউটার নেটওয়ার্ক ও সিসিটিভি ব্রিজিংয়ের জন্য নির্ভরযোগ্য সুইচ।'],
    filterCategory: 'Networking Products',
    relatedProductSlugs: ['tp-link-network-switch-router-price-bd', 'gigalink-poe-switch-price-bd'],
    relatedServiceSlugs: ['lan-network-installation'],
    faqs: [{ question: 'D-Link DES-1005C কি বাসায় বা অফিসে ব্যবহার করা সহজ?', answer: 'হ্যাঁ, কোনো সেটিংস ছাড়াই তার লাগালে সাথে সাথেই কাজ শুরু করে।' }]
  },
  'gigalink-poe-switch-price-bd': {
    slug: 'gigalink-poe-switch-price-bd',
    name: 'Gigalink PoE Switch Price BD',
    bnName: 'Gigalink PoE সুইচ (আইপি ক্যামেরার জন্য) দাম',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • Gigalink 8-Port PoE Switch Price BD',
    metaDescription: 'আইপি ক্যামেরার জন্য Gigalink RR-GV82P 8-Port PoE সুইচ (250m Extend ও 2 Uplink সহ) সেরা দামে। কল: 01790139333।',
    h1: 'Gigalink 8-Port & 16-Port CCTV PoE Switch Price in Bangladesh',
    tagline: '250m Long-Range Extend Mode, Lightning Protection & Dual Uplink Ports',
    bengaliTagline: 'আইপি ক্যামেরার জন্য আলাদা অ্যাডাপ্টার ছাড়াই পাওয়ার ও ডাটা দেওয়া Gigalink PoE সুইচ',
    overview: 'Gigalink RR-GV82P ৮-পোর্ট PoE সুইচে ২টি আলাদা আপলিংক পোর্ট ও ২৫০ মিটার Extend মোড রয়েছে—যা IP ক্যামেরা সিস্টেমকে করে আরও টেকসই ও পরিচ্ছন্ন।',
    priceNote: '৳২,২৫০ থেকে শুরু',
    warranty: '১ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'পোর্ট ও রেঞ্জ', value: '8 PoE Ports + 2 Uplink, 250m CCTV Extend Mode, Surge Protection' }],
    keyFeatures: ['ক্যামেরার পাশে আলাদা কারেন্ট সকেটের দরকার হয় না', 'বজ্রপাত ও ভোল্টেজ সার্জ সুরক্ষা', '২৫০ মিটার পর্যন্ত ক্যাবল রেঞ্জ সুবিধা'],
    buyingGuide: ['একাধিক আইপি ক্যামেরা লাগালে সাধারণ সুইচের বদলে অবশ্যই PoE সুইচ ব্যবহার করুন।'],
    filterCategory: 'Networking Products',
    relatedProductSlugs: ['tiandy-ip-camera-rangpur', 'tp-link-network-switch-router-price-bd'],
    relatedServiceSlugs: ['ip-camera-installation', 'tiandy-cctv-camera-installation-rangpur'],
    faqs: [{ question: 'একটি PoE সুইচ দিয়ে সর্বাধিক কত মিটার দূরের আইপি ক্যামেরা চালানো যায়?', answer: 'Extend Mode চালু করলে ভালো মানের CAT6 কেবল দিয়ে ২৫০ মিটার পর্যন্ত চালানো যায়।' }]
  },
  'mikrotik-router-setup-price-bd': {
    slug: 'mikrotik-router-setup-price-bd',
    name: 'MikroTik Router Price & Office Setup BD',
    bnName: 'MikroTik রাউটার বিক্রয় ও অফিস ব্যান্ডউইথ সেটআপ',
    category: 'LAN & Networking',
    title: 'Shamim Tech Solution • MikroTik Router Price & Configuration BD',
    metaDescription: 'অফিস, কলেজ ও হটস্পটের জন্য MikroTik রাউটার বিক্রয়, লোড ব্যালেন্সিং ও ব্যান্ডউইথ কন্ট্রোল কনফিগারেশন। কল: 01790139333।',
    h1: 'MikroTik RouterBOARD Hardware & Professional Configuration in BD',
    tagline: 'Dual-ISP Failover, Bandwidth Management, Hotspot & Secure Office VPN',
    bengaliTagline: 'অফিস ও বড় প্রতিষ্ঠানের জন্য MikroTik রাউটার, ডুয়াল-আইএসপি ও স্পিড কন্ট্রোল',
    overview: 'অফিসের ইন্টারনেট স্পিড ঠিকমতো ভাগ করা, অপ্রয়োজনীয় সাইট ব্লক করা কিংবা ২টি আইএসপি লাইন একসাথে চালানোর জন্য MikroTik রাউটার ও প্রফেশনাল কনফিগারেশন সেবা।',
    priceNote: 'দাম ও কনফিগার চার্জ জানতে কল করুন: 01790139333',
    warranty: 'অরিজিনাল ডিভাইস ও কনফিগারেশন সাপোর্ট',
    specifications: [{ label: 'সক্ষমতা', value: 'Bandwidth Queue, Dual-WAN Load Balance, Firewall & Hotspot' }],
    keyFeatures: ['সব কর্মীর পিসিতে নির্দিষ্ট ব্যান্ডউইথ নির্ধারণ', 'এক লাইন কাটলে অটোমেটিক দ্বিতীয় আইএসপিতে সুইচ'],
    buyingGuide: ['১০+ কম্পিউটার বা স্টাফ থাকলে অফিস নেটওয়ার্ক নিয়ন্ত্রণে MikroTik সেরা সমাধান।'],
    filterCategory: 'Networking Products',
    relatedProductSlugs: ['tp-link-network-switch-router-price-bd', 'd-link-ethernet-switch-price-bd'],
    relatedServiceSlugs: ['router-switch-configuration', 'network-technician'],
    faqs: [{ question: 'আমার বর্তমান MikroTik রাউটার কি নতুন করে সেটআপ করে দেবেন?', answer: 'হ্যাঁ, নতুন রাউটার বিক্রয়ের পাশাপাশি পুরনো রাউটারের কনফিগারেশন ও ব্যাকআপও করে দেওয়া হয়।' }]
  },
  'seagate-skyhawk-1tb-2tb-hdd-price-bd': {
    slug: 'seagate-skyhawk-1tb-2tb-hdd-price-bd',
    name: 'Seagate SkyHawk 1TB / 2TB / 4TB Surveillance HDD Price BD',
    bnName: 'Seagate SkyHawk 1TB/2TB সিসিটিভি হার্ডডিস্ক',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • Seagate SkyHawk Surveillance HDD Price BD',
    metaDescription: 'অরিজিনাল Seagate SkyHawk 1TB, 2TB ও 4TB ২৪/৭ সিসিটিভি সারভেইল্যান্স হার্ডডিস্ক। কল: 01790139333।',
    h1: 'Original Seagate SkyHawk 1TB / 2TB / 4TB Surveillance Hard Drive BD',
    tagline: 'Built for 24/7 DVR/NVR Recording — ImagePerfect Firmware & Low Heat',
    bengaliTagline: 'দিনরাত ২৪ ঘণ্টা সিসিটিভি ভিডিও রেকর্ডিংয়ের জন্য অরিজিনাল Seagate SkyHawk হার্ডডিস্ক',
    overview: 'সাধারণ পিসির হার্ডডিস্ক DVR/NVR-এ লাগালে দ্রুত নষ্ট হয়ে যায়। তাই ২৪/৭ নন-স্টপ সিসিটিভি রেকর্ডিংয়ের জন্য তৈরি Seagate SkyHawk 1TB, 2TB ও 4TB সার্ভিলাইন্স হার্ডডিস্ক আমাদের স্টকে রয়েছে।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: 'অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি (২–৩ বছর)',
    specifications: [{ label: 'সক্ষমতা', value: '1TB / 2TB / 4TB SATA III, Up to 64 HD Cameras, 180TB/year Workload' }],
    keyFeatures: ['ফ্রেম ড্রপ ছাড়া স্মুথ রেকর্ডিং (ImagePerfect)', 'কম গরম হওয়া ও দীর্ঘায়ু সার্ভিলাইন্স বিল্ড'],
    buyingGuide: ['৪–৮ ক্যামেরায় ১৫–৩০ দিন রেকর্ডিং রাখতে ১TB বা ২TB SkyHawk হার্ডডিস্ক নিন।'],
    filterCategory: 'Hard Disk (HDD)',
    relatedProductSlugs: ['wd-purple-surveillance-hdd-price-bd', 'dvr'],
    relatedServiceSlugs: ['dvr-installation', '8-camera-cctv-package-rangpur'],
    faqs: [{ question: 'DVR-এ হার্ডডিস্ক লাগানো ও ফরম্যাট করার কাজ কি টেকনিশিয়ান করে দেবেন?', answer: 'হ্যাঁ, শপে নিয়ে এলে বা হোম সার্ভিসে আমরা হার্ডডিস্ক লাগিয়ে রেকর্ডিং চালু করে দেব।' }]
  },
  'wd-purple-surveillance-hdd-price-bd': {
    slug: 'wd-purple-surveillance-hdd-price-bd',
    name: 'Western Digital WD Purple Surveillance HDD Price BD',
    bnName: 'WD Purple 1TB/2TB/4TB সিসিটিভি হার্ডডিস্ক',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • WD Purple 1TB / 2TB / 4TB HDD Price BD',
    metaDescription: 'অরিজিনাল Western Digital WD Purple 1TB, 2TB ও 4TB সিসিটিভি সার্ভিলাইন্স হার্ডডিস্ক। কল: 01790139333।',
    h1: 'Original WD Purple Surveillance Internal Hard Drive Price in BD',
    tagline: 'AllFrame 4K Technology for Continuous 24/7 CCTV DVR & NVR Systems',
    bengaliTagline: 'সিসিটিভি ডিভিআর ও এনভিআর-এর জন্য বিশ্বস্ত WD Purple সার্ভিলাইন্স হার্ডডিস্ক',
    overview: 'Western Digital WD Purple হার্ডডিস্কে AllFrame প্রযুক্তি রয়েছে যা ভিডিও পিক্সেল ফাটা বা ফ্রেম মিস হওয়া রোধ করে এবং ২৪ ঘণ্টা নিরবচ্ছিন্ন সিসিটিভি রেকর্ডিং দেয়।',
    priceNote: 'দাম জানতে কল করুন: 01790139333',
    warranty: 'অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি',
    specifications: [{ label: 'ক্যাপাসিটি', value: '1TB, 2TB, 4TB SATA 6Gb/s Surveillance Grade' }],
    keyFeatures: ['AllFrame টেকনোলজিতে নির্ভুল ভিডিও প্লেব্যাক', 'সকল ব্র্যান্ডের DVR ও NVR-এ ১০০% সাপোর্ট'],
    buyingGuide: ['৮–১৬ ক্যামেরার বড় প্রজেক্টে ২TB বা ৪TB WD Purple সেরা পারফরম্যান্স দেয়।'],
    filterCategory: 'Hard Disk (HDD)',
    relatedProductSlugs: ['seagate-skyhawk-1tb-2tb-hdd-price-bd', 'nvr'],
    relatedServiceSlugs: ['nvr-installation', '16-camera-cctv-package-rangpur'],
    faqs: [{ question: 'আসল WD Purple হার্ডডিস্ক কীভাবে চিনবেন?', answer: 'আমরা অরিজিনাল সিরিয়াল নাম্বার ও অফিশিয়াল হলোগ্রামসহ যাচাই করে প্রোডাক্ট দিই।' }]
  },
  'fvl-12v-power-adapter-cctv-price-bd': {
    slug: 'fvl-12v-power-adapter-cctv-price-bd',
    name: 'FVL 12V Waterproof CCTV Power Adapter Price BD',
    bnName: 'FVL ১২ ভোল্ট ওয়াটারপ্রুফ সিসিটিভি পাওয়ার অ্যাডাপ্টার',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • FVL 12V CCTV Power Adapter Price BD',
    metaDescription: 'আউটডোর সিসিটিভি ক্যামেরার জন্য FVL 12V 2A / 2.5A ওয়াটারপ্রুফ ও সার্জ প্রটেক্টেড বক্স অ্যাডাপ্টার। কল: 01790139333।',
    h1: 'FVL 12V Waterproof Outdoor CCTV Power Adapter in Bangladesh',
    tagline: 'Thunder, Over-Voltage & Short-Circuit Protected 12V DC Power Supply',
    bengaliTagline: 'ঝড়-বৃষ্টি ও ভোল্টেজ ওঠানামা থেকে ক্যামেরা রক্ষায় FVL ওয়াটারপ্রুফ অ্যাডাপ্টার',
    overview: 'আমাদের শপে FVL-1225 (12V 2.5A) ওয়াটারপ্রুফ বক্স অ্যাডাপ্টার পাওয়া যায়, যাতে বজ্রপাত ও ওভার-ভোল্টেজ সুরক্ষা থাকায় আউটডোর সিসিটিভি ক্যামেরা অনেক দিন টিকে থাকে।',
    priceNote: 'পাইকারি ও খুচরা দামে স্টকে আছে — কল করুন',
    warranty: 'রিপ্লেসমেন্ট/ওয়ারেন্টি সুবিধা',
    specifications: [{ label: 'ইনপুট ও আউটপুট', value: 'AC 100–260V -> DC 12V 2A/2.5A Waterproof Case' }],
    keyFeatures: ['বৃষ্টি ও রোদ প্রতিরোধী সিল্ড বক্স', 'অভারলোড ও শর্ট-সার্কিট প্রোটেকশন', 'নাইট ভিশনে ঝিরঝিরি ভাব দূর করে'],
    buyingGuide: ['আউটডোর ক্যামেরা বারবার বন্ধ হওয়া বা রাতে ছবি নষ্ট হওয়া ঠেকাতে ভালো অ্যাডাপ্টার ব্যবহার করুন।'],
    filterCategory: 'Power Supply/Adapter',
    relatedProductSlugs: ['nexekey-8mp-video-balun-price-bd', 'cctv-power-supply'],
    relatedServiceSlugs: ['cctv-repair-maintenance', 'cctv-camera-fitting'],
    faqs: [{ question: 'রাতে ক্যামেরার ইনফ্রারেড চালু হলে ছবি চলে গেলে কি অ্যাডাপ্টার বদলাতে হয়?', answer: 'হ্যাঁ, দুর্বল অ্যাডাপ্টারের অ্যাম্পিয়ার কমে গেলে রাতে ক্যামেরা বন্ধ হয়ে যায়—FVL 2.5A অ্যাডাপ্টারে এই সমস্যা হয় না।' }]
  },
  'nexekey-8mp-video-balun-price-bd': {
    slug: 'nexekey-8mp-video-balun-price-bd',
    name: 'Nexekey 8MP 4K HD Video Balun Price BD',
    bnName: 'Nexekey 8MP 4K HD ভিডিও বেলুন (Video Balun)',
    category: 'Cables & Connectors',
    title: 'Shamim Tech Solution • Nexekey 8MP HD Video Balun Price BD',
    metaDescription: 'CAT5e/CAT6 তার দিয়ে ক্রিস্টাল ক্লিয়ার HD সিসিটিভি ভিডিও পাঠাতে Nexekey 8MP প্যাসিভ ভিডিও বেলুন। কল: 01790139333।',
    h1: 'Nexekey 8MP 4K Passive HD Video Balun Transceiver Pair',
    tagline: 'Zero Video Loss over UTP CAT6 Cable — Supports HDCVI, HDTVI & AHD up to 4K',
    bengaliTagline: 'ক্যাট-৬ তার দিয়ে দূর থেকে স্পষ্ট সিসিটিভি ভিডিও আনতে Nexekey 8MP ভিডিও বেলুন',
    overview: 'CAT5e/CAT6 নেটওয়ার্ক কেবল ব্যবহার করে সিসিটিভি ক্যামেরা লাগালে BNC কানেক্টরের বদলে Nexekey 8MP Push-Pin Video Balun ব্যবহার করলে ভিডিও কোয়ালিটি একদম ঝকঝকে থাকে এবং ঝিরঝিরি হয় না।',
    priceNote: 'সেরা মূল্যে জোড়া ও পিস হিসেবে পাওয়া যাচ্ছে',
    warranty: '১০০% পরীক্ষিত অরিজিনাল কোয়ালিটি',
    specifications: [{ label: 'সাপোর্ট', value: '2MP, 5MP, 8MP (4K) HDCVI / HDTVI / AHD / CVBS' }],
    keyFeatures: ['গোল্ড-প্লেটেড কপার BNC পিন', 'পুশ-ব্লক ডিজাইনে দ্রুত সংযোগ', 'নয়েজ ও ঢেউ খেলা সমস্যা প্রতিরোধ'],
    buyingGuide: ['দূরত্ব বেশি হলে বা ক্যাট-৬ তার দিয়ে অ্যানালগ HD ক্যামেরা চালালে ভালো মানের 8MP বেলুন অপরিহার্য।'],
    filterCategory: 'Other Accessories',
    relatedProductSlugs: ['fvl-12v-power-adapter-cctv-price-bd', 'cctv-video-balun'],
    relatedServiceSlugs: ['cctv-repair-maintenance', 'cctv-installation'],
    faqs: [{ question: 'ভিডিও বেলুন লাগালে কি সিসিটিভি ছবির ঢেউ খেলা বন্ধ হয়?', answer: 'হ্যাঁ, ভালো মানের UTP বেলুন ইলেকট্রিক্যাল নয়েজ কমিয়ে ছবি স্পষ্ট করে।' }]
  },
  'jovision-64gb-microsd-memory-card-price-bd': {
    slug: 'jovision-64gb-microsd-memory-card-price-bd',
    name: 'Jovision JVS-MicroSD-64G Memory Card Price BD',
    bnName: 'Jovision 64GB ওয়াইফাই সিসিটিভি মেমোরি কার্ড',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • Jovision 64GB MicroSD Memory Card Price BD',
    metaDescription: 'ওয়াইফাই স্মার্ট সিসিটিভি ক্যামেরা ও মোবাইলের জন্য উচ্চ-গতির Jovision JVS-MicroSD-64G Class-10 U3 মেমোরি কার্ড। কল: 01790139333।',
    h1: 'Original Jovision JVS-MicroSD-64G (Class 10 / U3 V30) Memory Card BD',
    tagline: 'Continuous Loop Recording for WiFi PTZ Cameras with 3-Year Support',
    bengaliTagline: 'ওয়াইফাই সিসিটিভি ক্যামেরায় ২৪/৭ রেকর্ডিংয়ের জন্য অরিজিনাল Jovision 64GB কার্ড',
    overview: 'সাধারণ মেমোরি কার্ড ওয়াইফাই সিসিটিভি ক্যামেরায় লাগালে কিছুদিন পর হ্যাং বা করাপ্ট হয়ে যায়। Jovision 64GB Class-10 U3 V30 কার্ড বিশেষভাবে হাই-স্পিড সারভেইল্যান্স রেকর্ডিংয়ের জন্য তৈরি।',
    priceNote: '৳১,৪৫০ (বর্তমান শপ মূল্য অনুযায়ী)',
    warranty: 'অফিশিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'ক্যাপাসিটি ও ক্লাস', value: '64GB MicroSDXC, U3 / V30 / C10, Read up to 79.5MB/s' }],
    keyFeatures: ['EZVIZ, Imou, Jovision সব ওয়াইফাই ক্যামেরায় সাপোর্ট', 'নন-স্টপ লুপ রেকর্ডিংয়ে হ্যাং হয় না', 'তাপমাত্রা সহনশীল ও টেকসই'],
    buyingGuide: ['২MP বা ৩MP ওয়াইফাই ক্যামেরায় ৭–১৫ দিনের রেকর্ডিংয়ের জন্য ৬৪GB কার্ড সেরা।'],
    filterCategory: 'Other Accessories',
    relatedProductSlugs: ['wifi-camera', 'seagate-skyhawk-1tb-2tb-hdd-price-bd'],
    relatedServiceSlugs: ['wifi-camera-installation'],
    faqs: [{ question: '৬৪GB মেমোরি কার্ডে কতদিন ভিডিও থাকে?', answer: 'মোশন রেকর্ডিং চালু থাকলে সাধারণত ১৫ থেকে ২৫ দিন এবং ২৪/৭ কন্টিনিউয়াস মোডে ৫–৮ দিন থাকে।' }]
  },
  'ips-inverter-ups-cctv-backup-bd': {
    slug: 'ips-inverter-ups-cctv-backup-bd',
    name: 'IPS, Inverter & Mini UPS for CCTV Backup BD',
    bnName: 'আইপিএস ও সিসিটিভি/রাউটার মিনি ইউপিএস ব্যাকআপ',
    category: 'Storage & Power',
    title: 'Shamim Tech Solution • IPS & Mini UPS for CCTV & WiFi Backup BD',
    metaDescription: 'কারেন্ট না থাকলেও সিসিটিভি ক্যামেরা, DVR ও ওয়াইফাই রাউটার সচল রাখতে IPS ও Mini DC UPS সলিউশন। কল: 01790139333।',
    h1: 'IPS, Offline UPS & 12V Mini UPS Backup for CCTV & WiFi Routers',
    tagline: 'Keep Surveillance Recording & Online Live View Running During Load-Shedding',
    bengaliTagline: 'বিদ্যুৎ চলে গেলেও সিসিটিভি ক্যামেরা ও রাউটার চালু রাখার আইপিএস ও মিনি ইউপিএস সমাধান',
    overview: 'লোডশেডিংয়ের সময় নিরাপত্তা সবচেয়ে বেশি ঝুঁকিতে থাকে। আমাদের কাছ থেকে পাচ্ছেন ওয়াইফাই রাউটার ও ক্যামেরার জন্য ১২V Mini UPS এবং বাসা-দোকানের জন্য সম্পূর্ণ আইপিএস ওয়্যারিং সাপোর্ট।',
    priceNote: 'মডেল অনুযায়ী সাশ্রয়ী মূল্যে পাওয়া যাচ্ছে — কল করুন',
    warranty: 'অফিশিয়াল ওয়ারেন্টি ও ওয়্যারিং সাপোর্ট',
    specifications: [{ label: 'ব্যাকআপ রেঞ্জ', value: '12V Router/Camera Mini UPS (4–8h) & 650VA–1500VA Home IPS/UPS' }],
    keyFeatures: ['বিদ্যুৎ যাওয়ার সাথে সাথেই জিরো-ল্যাগে অটো ব্যাকআপ', 'ডিভিআর হার্ডডিস্ক ভোল্টেজ ওঠানামা থেকে সুরক্ষা'],
    buyingGuide: ['কারেন্ট গেলে অনলাইন ভিউ চালু রাখতে রাউটার ও DVR-এ অবশ্যই মিনি UPS বা IPS যুক্ত করুন।'],
    filterCategory: 'Power Supply/Adapter',
    relatedProductSlugs: ['fvl-12v-power-adapter-cctv-price-bd', 'dvr'],
    relatedServiceSlugs: ['ips-wiring-installation-rangpur', 'haragachh-ips-wiring-installation'],
    faqs: [{ question: '৪ ক্যামেরার সিসিটিভি ও রাউটার কতক্ষণ ব্যাকআপে চালানো যাবে?', answer: 'উপযুক্ত ব্যাটারিসহ একটি ৬৫০VA–৮৫০VA UPS/IPS দিয়ে ৪–৮ ঘণ্টা পর্যন্ত ব্যাকআপ পাওয়া যায়।' }]
  },
  '2-camera-cctv-package-price-bd': {
    slug: '2-camera-cctv-package-price-bd',
    name: '2 Camera CCTV Full Package Price BD',
    bnName: '২ ক্যামেরা কমপ্লিট সিসিটিভি প্যাকেজের দাম',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • 2 Camera Full CCTV Package Price in BD',
    metaDescription: '২টি অরিজিনাল ক্যামেরা, ৪-চ্যানেল DVR, হার্ডডিস্ক, ক্যাবল ও অ্যাডাপ্টারসহ ২ ক্যামেরা সিসিটিভি প্যাকেজ দাম। কল: 01790139333।',
    h1: 'Complete 2-Camera Full HD CCTV Package Price in Bangladesh',
    tagline: 'All-in-One Ready Security Bundle with Official Brand Hardware & Mobile View',
    bengaliTagline: 'দোকান ও ছোট বাসার জন্য ২টি ক্যামেরা ও ডিভিআর-সহ রেডি সিসিটিভি ফুল প্যাকেজ',
    overview: 'যারা কম বাজেটে অফিসিয়াল ওয়ারেন্টিসহ আসল ব্র্যান্ডের (Hikvision / Dahua / Jovision) ২টি সিসিটিভি ক্যামেরা লাগাতে চান, তাদের জন্য সব সরঞ্জামসহ ফুল প্যাকেজ।',
    priceNote: 'আপডেট প্যাকেজ দাম জানতে কল/WhatsApp করুন: 01790139333',
    warranty: '১–২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'প্যাকেজে যা থাকে', value: '2× 2MP Camera, 1× 4Ch DVR, 500GB/1TB HDD, Power Supply, Cable, Connectors' }],
    keyFeatures: ['সব সরঞ্জাম একসাথে — আলাদা কিছু কিনতে হবে না', 'মোবাইলে ফ্রি অনলাইন ভিউ সেটআপ'],
    buyingGuide: ['ছোট দোকান, ফার্মেসি বা বাসার প্রধান গেট দেখার জন্য সেরা প্যাকেজ।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['4-camera-cctv-package-price-bd', 'cctv-camera'],
    relatedServiceSlugs: ['2-camera-cctv-package-rangpur'],
    faqs: [{ question: 'প্যাকেজের সাথে মনিটর কি আলাদা নিতে হয়?', answer: 'জি, আপনার বাসা বা দোকানের যেকোনো টিভি/মনিটরের সাথে যুক্ত করা যায়, অথবা আমাদের শপ থেকে আলাদা মনিটর নিতে পারবেন।' }]
  },
  '4-camera-cctv-package-price-bd': {
    slug: '4-camera-cctv-package-price-bd',
    name: '4 Camera CCTV Full Package Price BD',
    bnName: '৪ ক্যামেরা কমপ্লিট সিসিটিভি প্যাকেজের দাম',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • 4 Camera Full CCTV Package Price in BD',
    metaDescription: 'Hikvision/Dahua ৪টি ক্যামেরা, ৪-চ্যানেল DVR, হার্ডডিস্ক ও কেবলসহ ৪ ক্যামেরা সিসিটিভি প্যাকেজ দাম। কল: 01790139333।',
    h1: 'Complete 4-Camera Full HD CCTV Package Price in Bangladesh',
    tagline: 'Complete 4-Camera Home & Shop Security Kit with Recording & Mobile View',
    bengaliTagline: 'বাসা, অফিস ও শোরুমের জন্য সেরা বিক্রিত ৪ ক্যামেরা সম্পূর্ণ সিসিটিভি প্যাকেজ',
    overview: 'আমাদের সবচেয়ে বেশি বিক্রিত ৪ ক্যামেরা কমপ্লিট প্যাকেজ—যাতে থাকছে ৪টি ইনডোর/আউটডোর Full HD ক্যামেরা, ৪-চ্যানেল DVR, হার্ডডিস্ক, পাওয়ার বক্স, কেবল ও কানেক্টর।',
    priceNote: 'বর্তমান অফার দাম জানতে কল/WhatsApp করুন: 01790139333',
    warranty: '১–২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'প্যাকেজে যা থাকে', value: '4× 2MP/4MP Camera, 1× 4Ch DVR/NVR, 1TB HDD, Power Supply, Cable & Jacks' }],
    keyFeatures: ['নাইট ভিশন ও অডিও রেকর্ডিং অপশন', 'দোকান ও বাসা সব দিক থেকে নিরাপদ', 'রংপুর বিভাগে হোম ইনস্টলেশন'],
    buyingGuide: ['একটি পূর্ণাঙ্গ বাসা, দোকান বা ছোট অফিসের সম্পূর্ণ কাভারেজের জন্য ৪ ক্যামেরা প্যাকেজ আদর্শ।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['2-camera-cctv-package-price-bd', '8-camera-cctv-package-price-bd'],
    relatedServiceSlugs: ['4-camera-cctv-package-rangpur'],
    faqs: [{ question: 'প্যাকেজে ইনডোর ও আউটডোর ক্যামেরা মিশিয়ে নেওয়া যাবে?', answer: 'হ্যাঁ, আপনার প্রয়োজন অনুযায়ী ডোম ও বুলেট ক্যামেরা মিলিয়ে দেওয়া হবে।' }]
  },
  '8-camera-cctv-package-price-bd': {
    slug: '8-camera-cctv-package-price-bd',
    name: '8 Camera CCTV Full Package Price BD',
    bnName: '৮ ক্যামেরা কমপ্লিট সিসিটিভি প্যাকেজের দাম',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • 8 Camera Full CCTV Package Price in BD',
    metaDescription: 'Hikvision/Dahua ৮টি ক্যামেরা, ৮-চ্যানেল DVR/NVR, ১TB/২TB হার্ডডিস্ক ও কেবলসহ ৮ ক্যামেরা প্যাকেজের দাম। কল: 01790139333।',
    h1: 'Complete 8-Camera Commercial & Home CCTV Package Price in BD',
    tagline: '8 Full HD/IP Cameras, 8Ch Recorder & 1TB/2TB Surveillance Storage Bundle',
    bengaliTagline: 'বড় বাসা, অফিস, স্কুল ও মার্কেটের জন্য অরিজিনাল ৮ ক্যামেরা সিসিটিভি প্যাকেজ',
    overview: 'বড় পরিসরের ভবন, গ্যারেজ, গুদাম ও বাণিজ্যিক অফিসের জন্য ৮টি ক্যামেরা, ৮-চ্যানেল DVR/NVR ও সার্ভিলাইন্স হার্ডডিস্কসহ সম্পূর্ণ প্যাকেজ।',
    priceNote: 'সেরা হোলসেল প্যাকেজ রেট জানতে কল করুন: 01790139333',
    warranty: '১–২ বছরের অফিসিয়াল ওয়ারেন্টি',
    specifications: [{ label: 'প্যাকেজে যা থাকে', value: '8× Cameras, 1× 8Ch DVR/NVR, 1TB/2TB HDD, 12V 10A PSU, Cable & Connectors' }],
    keyFeatures: ['দীর্ঘদিন রেকর্ডিং ব্যাকআপ', 'হেভি পাওয়ার সাপ্লাই বক্স', 'মাল্টি-ডিভাইস রিমোট এক্সেস'],
    buyingGuide: ['২-৩ তলা বা বড় সীমানাযুক্ত বাড়ি ও অফিসের জন্য ৮ ক্যামেরা প্যাকেজ নিন।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['4-camera-cctv-package-price-bd', '16-camera-cctv-package-price-bd'],
    relatedServiceSlugs: ['8-camera-cctv-package-rangpur'],
    faqs: [{ question: 'বাংলাদেশের অন্য জেলায় কি কুরিয়ারে প্যাকেজ নেওয়া যাবে?', answer: 'হ্যাঁ, সারা বাংলাদেশে নিরাপদ কুরিয়ার/ক্যাশ অন ডেলিভারিতে ফুল প্যাকেজ পাঠানো হয়।' }]
  },
  '16-camera-cctv-package-price-bd': {
    slug: '16-camera-cctv-package-price-bd',
    name: '16 Camera CCTV Full Package Price BD',
    bnName: '১৬ ক্যামেরা কমপ্লিট সিসিটিভি প্যাকেজের দাম',
    category: 'CCTV Cameras',
    title: 'Shamim Tech Solution • 16 Camera Full CCTV Package Price in BD',
    metaDescription: 'ফ্যাক্টরি, হসপিটাল, কলেজ ও শপিং মলের জন্য ১৬ ক্যামেরা HD/IP কমপ্লিট সিসিটিভি প্যাকেজের দাম। কল: 01790139333।',
    h1: 'Enterprise 16-Camera HD & IP CCTV Package Price in Bangladesh',
    tagline: '16 Cameras, 16Ch NVR/DVR, 2TB/4TB HDD & Heavy Industrial Power Supply',
    bengaliTagline: 'বড় প্রতিষ্ঠান, হাসপাতাল, কলেজ ও মার্কেটের জন্য ১৬ ক্যামেরা কমার্শিয়াল প্যাকেজ',
    overview: 'বৃহৎ প্রতিষ্ঠানের জন্য ১৬-চ্যানেল DVR বা PoE NVR সিস্টেমসহ সম্পূর্ণ ১৬ ক্যামেরা সিসিটিভি প্যাকেজ, যা নিরবচ্ছিন্ন ২৪/৭ নিরাপত্তা ও বড় স্টোরেজ দেয়।',
    priceNote: 'কর্পোরেট প্রজেক্ট কোটেশনের জন্য কল করুন: 01790139333',
    warranty: '১–২ বছরের অফিসিয়াল ওয়ারেন্টি ও প্রাতিষ্ঠানিক সেবা',
    specifications: [{ label: 'প্যাকেজে যা থাকে', value: '16× Cameras, 1× 16Ch Recorder, 2TB/4TB HDD, 12V 20A/PoE Switch, Roll Cable' }],
    keyFeatures: ['হাই-ক্যাপাসিটি সার্ভিলাইন্স স্টোরেজ', 'প্রফেশনাল র‍্যাক বক্স ও ক্যাবলিং সাপোর্ট'],
    buyingGuide: ['প্রতিষ্ঠানের কোটেশন ও বিস্তারিত সাইট সার্ভের জন্য সরাসরি হটলাইনে কল করুন।'],
    filterCategory: 'CCTV Camera',
    relatedProductSlugs: ['8-camera-cctv-package-price-bd', 'wd-purple-surveillance-hdd-price-bd'],
    relatedServiceSlugs: ['16-camera-cctv-package-rangpur'],
    faqs: [{ question: '১৬ ক্যামেরা কি অ্যানালগ HD নেব নাকি IP ক্যামেরা?', answer: 'দীর্ঘমেয়াদী সেরা ছবির মান ও কম তারের ঝামেলার জন্য IP ক্যামেরা ও PoE NVR বেশি ভালো; বাজেট কম থাকলে অ্যানালগ HD নেওয়া যায়।' }]
  }
};
