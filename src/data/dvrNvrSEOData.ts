import type { ProductSEOInfo } from './productsSEOData';

interface BrandSpec {
  slug: string;
  displayName: string;
}

const DVR_NVR_BRANDS: BrandSpec[] = [
  { slug: 'hikvision', displayName: 'Hikvision' },
  { slug: 'dahua', displayName: 'Dahua' },
  { slug: 'uniview', displayName: 'Uniview' },
  { slug: 'unv', displayName: 'UNV' },
  { slug: 'hilook', displayName: 'HiLook' },
  { slug: 'jovision', displayName: 'Jovision' },
  { slug: 'imou', displayName: 'Imou' },
  { slug: 'ezviz', displayName: 'EZVIZ' }
];

const CHANNELS = [4, 8, 16, 32, 64] as const;

interface TypeSpec {
  slug: 'dvr' | 'nvr';
  upper: 'DVR' | 'NVR';
  fullName: string;
  bnName: string;
  compatibleCameras: string;
}

const RECORDER_TYPES: TypeSpec[] = [
  {
    slug: 'dvr',
    upper: 'DVR',
    fullName: 'Digital Video Recorder',
    bnName: 'ডিভিআর (Digital Video Recorder)',
    compatibleCameras: 'HD / Turbo HD / HDCVI / AHD / Analog CCTV Cameras'
  },
  {
    slug: 'nvr',
    upper: 'NVR',
    fullName: 'Network Video Recorder',
    bnName: 'এনভিআর (Network Video Recorder)',
    compatibleCameras: 'IP / PoE / Network CCTV Cameras'
  }
];

interface RegionSpec {
  key: 'rangpur' | 'dhaka' | 'general';
  districtSlug?: 'rangpur' | 'dhaka';
  locationTitle: string;
  locationBn: string;
  hubNote: string;
}

const REGIONS: RegionSpec[] = [
  {
    key: 'rangpur',
    districtSlug: 'rangpur',
    locationTitle: 'Rangpur, Bangladesh',
    locationBn: 'রংপুর, বাংলাদেশ',
    hubNote: 'রংপুর অফিস (জাহাজ কোম্পানি মোড়) থেকে সরাসরি সাপোর্ট, ইনস্টলেশন ও ওয়ারেন্টি সহায়তা।'
  },
  {
    key: 'dhaka',
    districtSlug: 'dhaka',
    locationTitle: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    hubNote: 'ঢাকা ও সমগ্র বাংলাদেশে অর্ডার, ডেলিভারি এবং টেকনিক্যাল পরামর্শ সুবিধা।'
  },
  {
    key: 'general',
    locationTitle: 'Bangladesh',
    locationBn: 'বাংলাদেশ',
    hubNote: 'বাংলাদেশের যেকোনো জেলায় দ্রুত ডেলিভারি, জেনুইন ব্র্যান্ড ওয়ারেন্টি ও টেকনিক্যাল সাপোর্ট।'
  }
];

function buildVariantSlugs(
  region: RegionSpec,
  brandSlug: string,
  ch: number,
  typeSlug: 'dvr' | 'nvr'
): string[] {
  if (region.districtSlug) {
    const d = region.districtSlug;
    return [
      `${d}-${brandSlug}-${ch}-${typeSlug}`, // Primary canonical URL
      `${brandSlug}-${d}-${ch}-${typeSlug}`,
      `${d}-${ch}-${brandSlug}-${typeSlug}`,
      `${ch}-${brandSlug}-${d}-${typeSlug}`,
      `${d}-${brandSlug}-${typeSlug}-${ch}`,
      `${d}-${typeSlug}-${brandSlug}-${ch}`,
      `${d}-${brandSlug}-${ch}-channel-${typeSlug}`,
      `${d}-${ch}-channel-${brandSlug}-${typeSlug}`
    ];
  }

  return [
    `${brandSlug}-${ch}-${typeSlug}`, // Primary canonical URL
    `${ch}-${brandSlug}-${typeSlug}`,
    `${brandSlug}-${typeSlug}-${ch}`,
    `${typeSlug}-${brandSlug}-${ch}`,
    `${typeSlug}-${ch}-${brandSlug}`,
    `${ch}-${typeSlug}-${brandSlug}`,
    `${brandSlug}-${ch}-channel-${typeSlug}`,
    `${ch}-channel-${brandSlug}-${typeSlug}`
  ];
}

export function buildDvrNvrSEOData(): {
  entries: Record<string, ProductSEOInfo>;
  primarySlugs: string[];
  allSlugs: string[];
} {
  const entries: Record<string, ProductSEOInfo> = {};
  const primarySlugs: string[] = [];
  const allSlugs: string[] = [];

  for (const region of REGIONS) {
    for (const brand of DVR_NVR_BRANDS) {
      for (const ch of CHANNELS) {
        for (const recType of RECORDER_TYPES) {
          const variants = buildVariantSlugs(region, brand.slug, ch, recType.slug);
          const primarySlug = variants[0];
          primarySlugs.push(primarySlug);

          const productLabel = `${brand.displayName} ${ch} Channel ${recType.upper}`;
          const title = `${recType.upper} Price in ${region.locationTitle} | ${productLabel} | Shamim Tech Solution`;
          const h1 = `${productLabel} Price in ${region.locationTitle}`;
          const metaDescription = `${productLabel} (${recType.fullName}) price inquiry in ${region.locationTitle}. Check model availability, official warranty & setup support at Shamim Tech Solution. Call: 01790139333.`;

          const overview = `${productLabel} (${recType.bnName}) সম্পর্কে সঠিক মডেল, বর্তমান বাজারদর ও প্রাপ্যতা জানতে শামীম টেক সলিউশনের সাথে যোগাযোগ করুন। ${region.hubNote} প্রকৃত মডেল ও অফিসিয়াল ওয়ারেন্টি যাচাই করে আপনার প্রয়োজন অনুযায়ী সঠিক ${ch} চ্যানেল ${recType.upper} নির্বাচনে আমাদের টিম সহায়তা করে।`;

          for (let idx = 0; idx < variants.length; idx++) {
            const slug = variants[idx];
            const isPrimary = idx === 0;
            allSlugs.push(slug);

            entries[slug] = {
              slug,
              ...(isPrimary ? {} : { canonicalSlug: primarySlug, noindex: true }),
              isInquiryOnly: true,
              name: productLabel,
              bnName: `${brand.displayName} ${ch} চ্যানেল ${recType.bnName}`,
              category: 'Recording Systems',
              title,
              metaDescription,
              h1,
              tagline: `${productLabel} • ${recType.fullName} in ${region.locationTitle}`,
              bengaliTagline: `${region.locationBn}-এ ${productLabel} মূল্য ও প্রাপ্যতা যাচাই করুন`,
              overview,
              description: overview,
              priceNote: 'দাম ও মজুত জানতে কল / WhatsApp করুন (01790139333)',
              warranty: 'অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি (মডেল অনুযায়ী)',
              specifications: [
                { label: 'ব্র্যান্ড (Brand)', value: brand.displayName },
                { label: 'চ্যানেল ক্ষমতা (Channels)', value: `${ch} Channel` },
                { label: 'ডিভাইসের ধরন (Type)', value: `${recType.upper} (${recType.fullName})` },
                { label: 'সমর্থিত ক্যামেরা', value: recType.compatibleCameras },
                { label: 'সার্ভিস এলাকা (Region)', value: region.locationTitle },
                { label: 'মূল্য ও স্টক যাচাই', value: 'সরাসরি কল বা WhatsApp-এ নিশ্চিত করুন (01790139333)' }
              ],
              keyFeatures: [
                `${brand.displayName} ${ch} Channel ${recType.upper} মডেল অনুযায়ী বর্তমান দাম ও প্রাপ্যতা যাচাই সুবিধা`,
                `${region.locationBn}-এ টেকনিক্যাল পরামর্শ ও প্রফেশনাল ${recType.upper} কনফিগারেশন সাপোর্ট`,
                `মোবাইল অনলাইন ভিউ, হার্ডডিস্ক সেটআপ ও সিস্টেম ইন্টিগ্রেশন গাইডলাইন`,
                `ভুয়া বা আনভেরিফায়েড তথ্য ছাড়াই সরাসরি হটলাইন (01790139333)-এ রিয়েল-টাইম কোটেশন`
              ],
              buyingGuide: [
                `অর্ডার করার আগে আপনার ক্যামেরার ধরন (${recType.compatibleCameras}) ও প্রয়োজনীয় চ্যানেল সংখ্যা (${ch} Channel) নিশ্চিত করে নিন।`,
                `${brand.displayName}-এর কোন নির্দিষ্ট মডেলটি আপনার প্রকল্পের জন্য উপযুক্ত এবং বর্তমান মজুত ও দাম কত, তা জানতে কল বা WhatsApp করুন: 01790139333।`
              ],
              filterCategory: 'Recording Systems',
              relatedProductSlugs:
                recType.slug === 'dvr'
                  ? ['dvr', 'cctv-dvr-system', 'nvr', 'cctv-hard-disk']
                  : ['nvr', 'cctv-nvr-system', 'dvr', 'ip-camera'],
              relatedServiceSlugs:
                recType.slug === 'dvr'
                  ? ['dvr-installation', 'dvr-nvr-technician', 'cctv-system-setup']
                  : ['nvr-installation', 'ip-camera-installation', 'dvr-nvr-technician'],
              faqs: [
                {
                  question: `${productLabel}-এর বর্তমান দাম ও স্টক কীভাবে জানব?`,
                  answer: `মডেল ও হার্ডডিস্ক কনফিগারেশন অনুযায়ী ${productLabel}-এর দাম ভিন্ন হয়। সঠিক বর্তমান দাম ও প্রাপ্যতা জানতে সরাসরি কল বা WhatsApp করুন: 01790139333।`
                },
                {
                  question: `${region.locationBn}-এ কি ইনস্টলেশন ও সেটআপ সুবিধা পাওয়া যাবে?`,
                  answer: `হ্যাঁ, ${region.locationBn}-এ ${recType.upper} ইনস্টলেশন, ক্যাবলিং ও মোবাইল অনলাইন ভিউ সেটআপের জন্য শামীম টেক সলিউশনের টেকনিক্যাল সাপোর্ট রয়েছে।`
                }
              ]
            };
          }
        }
      }
    }
  }

  return { entries, primarySlugs, allSlugs };
}

const builtDvrNvr = buildDvrNvrSEOData();
export const DVR_NVR_SEO_DATA: Record<string, ProductSEOInfo> = builtDvrNvr.entries;
export const DVR_NVR_PRIMARY_SLUGS: string[] = builtDvrNvr.primarySlugs;
export const DVR_NVR_ALL_SLUGS: string[] = builtDvrNvr.allSlugs;
