import type { ProductSEOInfo } from './productsSEOData';

interface WifiBrandSpec {
  slug: string;
  displayName: string;
}

const WIFI_CAMERA_BRANDS: WifiBrandSpec[] = [
  { slug: 'ezviz', displayName: 'EZVIZ' },
  { slug: 'imou', displayName: 'Imou' },
  { slug: 'hikvision', displayName: 'Hikvision' },
  { slug: 'dahua', displayName: 'Dahua' },
  { slug: 'uniview', displayName: 'Uniview' },
  { slug: 'unv', displayName: 'UNV' },
  { slug: 'hilook', displayName: 'HiLook' },
  { slug: 'jovision', displayName: 'Jovision' }
];

interface MegapixelSpec {
  slug: string;
  label: string;
  resolutionNote: string;
}

const MEGAPIXELS: MegapixelSpec[] = [
  { slug: '2mp', label: '2MP', resolutionNote: 'Full HD 1080p (2 Megapixel)' },
  { slug: '3mp', label: '3MP', resolutionNote: '2K Super HD (3 Megapixel)' },
  { slug: '4mp', label: '4MP', resolutionNote: '2K QHD (4 Megapixel)' },
  { slug: '5mp', label: '5MP', resolutionNote: '3K Ultra Clear (5 Megapixel)' },
  { slug: '8mp', label: '8MP', resolutionNote: '4K Ultra HD (8 Megapixel)' }
];

function buildWifiVariantSlugs(brandSlug: string, mpSlug: string): string[] {
  return [
    `${brandSlug}-${mpSlug}-wifi-camera`, // Primary canonical URL
    `${mpSlug}-${brandSlug}-wifi-camera`,
    `${brandSlug}-wifi-camera-${mpSlug}`,
    `wifi-camera-${brandSlug}-${mpSlug}`,
    `${brandSlug}-${mpSlug}-camera-wifi`,
    `${mpSlug}-wifi-camera-${brandSlug}`,
    `${brandSlug}-wifi-${mpSlug}-camera`,
    `wifi-${brandSlug}-${mpSlug}-camera`
  ];
}

export function buildWifiCameraSEOData(): {
  entries: Record<string, ProductSEOInfo>;
  primarySlugs: string[];
  allSlugs: string[];
} {
  const entries: Record<string, ProductSEOInfo> = {};
  const primarySlugs: string[] = [];
  const allSlugs: string[] = [];

  for (const brand of WIFI_CAMERA_BRANDS) {
    for (const mp of MEGAPIXELS) {
      const variants = buildWifiVariantSlugs(brand.slug, mp.slug);
      const primarySlug = variants[0];
      primarySlugs.push(primarySlug);

      const productLabel = `${brand.displayName} ${mp.label} WiFi Camera`;
      const title = `${productLabel} Price in Bangladesh | Shamim Tech Solution`;
      const h1 = `${productLabel} Price in Bangladesh`;
      const metaDescription = `${productLabel} (${mp.resolutionNote}) price inquiry in Bangladesh. Check smart wireless monitoring, mobile app setup, warranty & model availability at Shamim Tech Solution. Call: 01790139333.`;

      const overview = `${productLabel} (${mp.resolutionNote}) সম্পর্কে সঠিক মডেল, বর্তমান দাম ও প্রাপ্যতা জানতে শামীম টেক সলিউশনের সাথে যোগাযোগ করুন। বাসা, অফিস ও দোকানে তারহীন ওয়াইফাই নজরদারি, মোবাইল লাইভ ভিউ সেটআপ এবং অফিসিয়াল ওয়ারেন্টি যাচাই করে সঠিক ${brand.displayName} ${mp.label} ওয়াইফাই ক্যামেরা নির্বাচনে আমরা সহায়তা করি।`;

      for (let idx = 0; idx < variants.length; idx++) {
        const slug = variants[idx];
        const isPrimary = idx === 0;
        allSlugs.push(slug);

        entries[slug] = {
          slug,
          ...(isPrimary ? {} : { canonicalSlug: primarySlug, noindex: true }),
          isInquiryOnly: true,
          name: productLabel,
          bnName: `${brand.displayName} ${mp.label} ওয়াইফাই ক্যামেরা`,
          category: 'CCTV Cameras',
          title,
          metaDescription,
          h1,
          tagline: `${productLabel} • ${mp.resolutionNote} Smart Wireless Security`,
          bengaliTagline: `বাংলাদেশে ${productLabel}-এর দাম, মডেল ও প্রাপ্যতা যাচাই করুন`,
          overview,
          description: overview,
          priceNote: 'দাম ও মজুত জানতে কল / WhatsApp করুন (01790139333)',
          warranty: 'অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি (মডেল অনুযায়ী)',
          specifications: [
            { label: 'ব্র্যান্ড (Brand)', value: brand.displayName },
            { label: 'রেজ্যুলেশন (Megapixel)', value: `${mp.label} (${mp.resolutionNote})` },
            { label: 'ক্যামেরার ধরন', value: 'Smart WiFi Wireless CCTV Camera' },
            { label: 'সংযোগ ও অ্যাপ সাপোর্ট', value: 'Wi-Fi নেটওয়ার্ক ও স্মার্টফোন রিমোট লাইভ ভিউ' },
            { label: 'সার্ভিস এলাকা', value: 'বাংলাদেশ (সারা দেশে ডেলিভারি ও টেকনিক্যাল সাপোর্ট)' },
            { label: 'মূল্য ও স্টক যাচাই', value: 'সরাসরি কল বা WhatsApp-এ নিশ্চিত করুন (01790139333)' }
          ],
          keyFeatures: [
            `${brand.displayName} ${mp.label} ওয়াইফাই ক্যামেরার মডেল অনুযায়ী বর্তমান দাম ও প্রাপ্যতা যাচাই`,
            `${mp.resolutionNote} স্বচ্ছ ভিডিও কোয়ালিটি ও মোবাইল অ্যাপের মাধ্যমে রিমোট মনিটরিং সুবিধা`,
            `সহজ ইনস্টলেশন গাইডলাইন, মেমোরি কার্ড/ক্লাউড রেকর্ডিং ও টেকনিক্যাল সাপোর্ট`,
            `ভুয়া দাম ছাড়াই হটলাইন (01790139333)-এ সরাসরি সঠিক কোটেশন জানার সুযোগ`
          ],
          buyingGuide: [
            `ইনডোর (যেমন রুম/অফিস) নাকি আউটডোর (বাইরের আবহাওয়া) কোথায় ব্যবহার করবেন, তা জানিয়ে ${brand.displayName} ${mp.label}-এর উপযুক্ত মডেল জেনে নিন।`,
            `বর্তমান বাজারদর ও স্টকের অবস্থা জানতে কল বা WhatsApp করুন: 01790139333।`
          ],
          filterCategory: 'CCTV Cameras',
          relatedProductSlugs: ['wifi-camera', 'wireless-camera', 'ip-camera', 'cctv-camera'],
          relatedServiceSlugs: ['wifi-camera-installation', 'mobile-cctv-viewing', 'cctv-installation'],
          faqs: [
            {
              question: `${productLabel}-এর বর্তমান দাম ও মজুত কীভাবে জানব?`,
              answer: `ইনডোর বা আউটডোর মডেল ভেদে ${productLabel}-এর দাম ভিন্ন হতে পারে। সঠিক বর্তমান দাম ও প্রাপ্যতা জানতে সরাসরি কল বা WhatsApp করুন: 01790139333।`
            },
            {
              question: `${productLabel} কি মোবাইলে লাইভ দেখা যাবে?`,
              answer: `হ্যাঁ, ইন্টারনেট ও ওয়াইফাই সংযোগের মাধ্যমে নির্দিষ্ট ব্র্যান্ডের অফিশিয়াল মোবাইল অ্যাপ দিয়ে যেকোনো স্থান থেকে লাইভ ও রেকর্ড করা ভিডিও দেখা যায়।`
            }
          ]
        };
      }
    }
  }

  return { entries, primarySlugs, allSlugs };
}

const builtWifi = buildWifiCameraSEOData();
export const WIFI_CAMERA_SEO_DATA: Record<string, ProductSEOInfo> = builtWifi.entries;
export const WIFI_CAMERA_PRIMARY_SLUGS: string[] = builtWifi.primarySlugs;
export const WIFI_CAMERA_ALL_SLUGS: string[] = builtWifi.allSlugs;
