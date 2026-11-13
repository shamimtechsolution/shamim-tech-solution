// Shared search normalization, district aliases, and Bangla-to-English synonym expansion
// Ensures consistent search behavior across Navbar & ProductShop in any word order

export const LOCATION_AND_BRAND_TOKENS = new Set<string>([
  // 10 Covered Districts (English + spelling variants + Bangla variants)
  'rangpur', 'রংপুর', 'haragachh', 'হারাগাছ',
  'dinajpur', 'দিনাজপুর',
  'gaibandha', 'গাইবান্ধা',
  'kurigram', 'কুড়িগ্রাম', 'কুড়িগ্রাম',
  'nilphamari', 'নীলফামারী',
  'lalmonirhat', 'লালমনিরহাট',
  'panchagarh', 'পঞ্চগড়', 'পঞ্চগড়',
  'thakurgaon', 'ঠাকুরগাঁও',
  'bogura', 'bogra', 'বগুড়া', 'বগুড়া',
  'dhaka', 'ঢাকা',
  // Brand / Store tokens
  'shamim', 'sts', 'bd', 'bangladesh', 'tech', 'solution', 'technology',
  'শামীম', 'শামিম', 'টেক', 'সলিউশন', 'সার্ভিস', 'এরিয়া',
  'startech', 'star', 'ryans', 'datatech'
]);

export const SEARCH_STOP_WORDS = new Set<string>([
  'and', 'in', 'of', 'for', 'the', 'to', 'with', 'on', 'at', 'near', 'me',
  'ও', 'এবং', 'এর', 'তে', 'এ', 'জন্য'
]);

export const DISTRICT_SYNONYMS: Record<string, string[]> = {
  'rangpur': ['rangpur', 'রংপুর'],
  'রংপুর': ['rangpur', 'রংপুর'],
  'dinajpur': ['dinajpur', 'দিনাজপুর'],
  'দিনাজপুর': ['dinajpur', 'দিনাজপুর'],
  'gaibandha': ['gaibandha', 'গাইবান্ধা'],
  'গাইবান্ধা': ['gaibandha', 'গাইবান্ধা'],
  'kurigram': ['kurigram', 'কুড়িগ্রাম', 'কুড়িগ্রাম'],
  'কুড়িগ্রাম': ['kurigram', 'কুড়িগ্রাম', 'কুড়িগ্রাম'],
  'কুড়িগ্রাম': ['kurigram', 'কুড়িগ্রাম', 'কুড়িগ্রাম'],
  'nilphamari': ['nilphamari', 'নীলফামারী'],
  'নীলফামারী': ['nilphamari', 'নীলফামারী'],
  'lalmonirhat': ['lalmonirhat', 'লালমনিরহাট'],
  'লালমনিরহাট': ['lalmonirhat', 'লালমনিরহাট'],
  'panchagarh': ['panchagarh', 'পঞ্চগড়', 'পঞ্চগড়'],
  'পঞ্চগড়': ['panchagarh', 'পঞ্চগড়', 'পঞ্চগড়'],
  'পঞ্চগড়': ['panchagarh', 'পঞ্চগড়', 'পঞ্চগড়'],
  'thakurgaon': ['thakurgaon', 'ঠাকুরগাঁও'],
  'ঠাকুরগাঁও': ['thakurgaon', 'ঠাকুরগাঁও'],
  'bogura': ['bogura', 'bogra', 'বগুড়া', 'বগুড়া'],
  'bogra': ['bogura', 'bogra', 'বগুড়া', 'বগুড়া'],
  'বগুড়া': ['bogura', 'bogra', 'বগুড়া', 'বগুড়া'],
  'বগুড়া': ['bogura', 'bogra', 'বগুড়া', 'বগুড়া'],
  'dhaka': ['dhaka', 'ঢাকা'],
  'ঢাকা': ['dhaka', 'ঢাকা']
};

// Multi-word Bangla phrase replacements -> space-delimited English equivalents
const PHRASE_REPLACEMENTS: Array<[RegExp, string]> = [
  [/power\s+suply/gi, 'power supply'],
  [/\bsuply\b/gi, 'supply'],
  [/\bbogra\b/gi, 'bogura'],
  [/সিসি\s*টিভি/g, 'সিসিটিভি cctv'],
  [/সিসিটিভি/g, 'cctv'],
  [/ক্যামেরা/g, 'camera'],
  [/আইপি\s*ক্যামেরা/g, 'ip camera'],
  [/ওয়াইফাই|ওয়াইফাই|ওয়াই-ফাই|ওয়াই-ফাই/g, 'wifi'],
  [/ওয়্যারলেস|ওয়্যারলেস/g, 'wifi wireless'],
  [/টেকনিশিয়ান|টেকনিশিয়ান|মেকানিক|মিস্ত্রি/g, 'technician'],
  [/অ্যাক্সেস\s*কন্ট্রোল|এক্সেস\s*কন্ট্রোল|অ্যাক্সেস|এক্সেস/g, 'access control'],
  [/ডোর\s*লক|দরজার\s*লক|দরজা\s*লক|ম্যাগনেটিক\s*লক/g, 'door lock'],
  [/ভিডিও\s*ডোর\s*ফোন/g, 'video door phone'],
  [/ইন্টার\s*কম|ইন্টারকম/g, 'intercom'],
  [/পিএবিএক্স|পিবিএক্স/g, 'pbx'],
  [/ইলেকট্রিশিয়ান|ইলেকট্রিশিয়ান|ইলেকট্রিক্যাল|বিদ্যুৎ/g, 'electrician electrical'],
  [/হাউজ\s*ওয়্যারিং|হাউজ\s*ওয়্যারিং|হাউস\s*ওয়্যারিং|হাউস\s*ওয়্যারিং|ওয়্যারিং|ওয়্যারিং/g, 'wiring electrician'],
  [/বায়োমেট্রিক|বায়োমেট্রিক/g, 'biometric'],
  [/ফিঙ্গার\s*প্রিন্ট|ফিঙ্গারপ্রিন্ট/g, 'fingerprint'],
  [/হাজিরা\s*মেশিন|হাজিরা|উপস্থিতি/g, 'attendance biometric'],
  [/নেটওয়ার্কিং|নেটওয়ার্কিং|নেটওয়ার্ক|নেটওয়ার্ক/g, 'network'],
  [/ল্যান/g, 'lan'],
  [/কম্পিউটার/g, 'computer'],
  [/ডিভিআর/g, 'dvr'],
  [/এনভিআর/g, 'nvr'],
  [/এক্সভিআর/g, 'xvr'],
  [/হার্ড\s*ডিস্ক|হার্ডডিস্ক/g, 'hard disk hdd'],
  [/পাওয়ার\s*সাপ্লাই|পাওয়ার\s*সাপ্লাই/g, 'power supply'],
  [/অ্যাডাপ্টার|এডাপ্টার/g, 'adapter'],
  [/ভিডিও\s*ব্যালুন|ব্যালুন/g, 'balun'],
  [/কানেক্টর/g, 'connector'],
  [/ক্যাবল|কেবল|তার/g, 'cable'],
  [/মনিটর/g, 'monitor'],
  [/রাউটার/g, 'router'],
  [/সুইচ/g, 'switch'],
  [/ইনস্টলেশন|ফিটিং|সেটআপ/g, 'installation'],
  [/রিপেয়ার|রিপেয়ার|মেরামত|সার্ভিসিং/g, 'repair'],
  [/দাম|মূল্য|প্রাইস|বিক্রয়|বিক্রয়|বিক্রি/g, 'price sales']
];

const SINGLE_TOKEN_SYNONYMS: Record<string, string[]> = {
  'network': ['network', 'networking', 'lan'],
  'networking': ['networking', 'network', 'lan'],
  'intercom': ['intercom', 'pbx', 'pabx'],
  'pbx': ['pbx', 'pabx', 'intercom'],
  'pabx': ['pabx', 'pbx', 'intercom'],
  'biometric': ['biometric', 'fingerprint', 'attendance'],
  'fingerprint': ['fingerprint', 'biometric', 'attendance'],
  'attendance': ['attendance', 'biometric', 'fingerprint'],
  'electrician': ['electrician', 'electrical', 'wiring'],
  'electrical': ['electrical', 'electrician', 'wiring'],
  'wiring': ['wiring', 'electrician', 'electrical'],
  'balun': ['balun', 'transceiver'],
  'adapter': ['adapter', 'power', 'supply'],
  'dvr': ['dvr', 'xvr'],
  'xvr': ['xvr', 'dvr'],
  'hdd': ['hdd', 'hard', 'disk'],
  'bogura': ['bogura', 'bogra'],
  'bogra': ['bogra', 'bogura']
};

/**
 * Normalize Unicode Bangla variants (য়->য়, ড়->ড়, ঢ়->ঢ়) and whitespace.
 */
export function normalizeSearchText(input: string): string {
  return (input || '')
    .replace(/\u09AF\u09BC/g, '\u09DF')
    .replace(/\u09A1\u09BC/g, '\u09DC')
    .replace(/\u09A2\u09BC/g, '\u09DD')
    .replace(/\u09B0\u09BC/g, '\u09B0')
    .toLowerCase()
    .replace(/[•|,/+&()[\]{}:;'"!?]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export interface ParsedSearchQuery {
  rawNormalized: string;
  expandedQuery: string;
  allTokens: string[];
  districtTokens: string[];
  topicTokens: string[];
}

export function parseSearchQuery(searchTerm: string): ParsedSearchQuery {
  const rawNormalized = normalizeSearchText(searchTerm);
  if (!rawNormalized) {
    return {
      rawNormalized: '',
      expandedQuery: '',
      allTokens: [],
      districtTokens: [],
      topicTokens: []
    };
  }

  let expanded = rawNormalized;
  for (const [pattern, replacement] of PHRASE_REPLACEMENTS) {
    expanded = expanded.replace(pattern, ` ${replacement} `);
  }
  expanded = expanded.replace(/\s+/g, ' ').trim();

  const rawTokens = rawNormalized.split(/\s+/).filter(Boolean);
  const districtTokens: string[] = [];
  for (const t of rawTokens) {
    if (DISTRICT_SYNONYMS[t]) {
      districtTokens.push(DISTRICT_SYNONYMS[t][0]);
    }
  }

  const expandedTokens = Array.from(new Set(expanded.split(/\s+/).filter(Boolean)));
  const topicTokens = expandedTokens.filter(
    (t) =>
      !LOCATION_AND_BRAND_TOKENS.has(t) &&
      !SEARCH_STOP_WORDS.has(t) &&
      // exclude pure Bangla tokens when an English synonym already replaced them, unless no English token was added
      !/^[\u0980-\u09FF]+$/.test(t)
  );

  // Any Bangla tokens still remaining inside `expanded` (i.e. NOT replaced by PHRASE_REPLACEMENTS and NOT a location/stop-word)
  const unmappedBangla = expandedTokens.filter((t) => {
    if (!/^[\u0980-\u09FF]+$/.test(t)) return false;
    if (LOCATION_AND_BRAND_TOKENS.has(t) || SEARCH_STOP_WORDS.has(t) || DISTRICT_SYNONYMS[t]) return false;
    return true;
  });

  const finalTopicTokens = Array.from(new Set([...topicTokens, ...unmappedBangla]));

  return {
    rawNormalized,
    expandedQuery: expanded,
    allTokens: expandedTokens,
    districtTokens: Array.from(new Set(districtTokens)),
    topicTokens: finalTopicTokens
  };
}

/**
 * Checks whether a single token (or any of its known synonyms) appears in normalized target text.
 */
export function tokenMatchesText(token: string, normalizedTarget: string): boolean {
  if (normalizedTarget.includes(token)) return true;
  const syns = SINGLE_TOKEN_SYNONYMS[token] || DISTRICT_SYNONYMS[token];
  if (syns) {
    return syns.some((s) => normalizedTarget.includes(normalizeSearchText(s)));
  }
  return false;
}

/**
 * Word-order-independent matcher against searchable text.
 * Supports Bangla-to-English synonyms and all 10 districts (before or after).
 */
export function matchesProductSearch(
  searchableFields: {
    name?: string;
    specs?: string;
    brand?: string;
    category?: string;
    description?: string;
    modelNumber?: string;
  },
  searchTerm: string
): boolean {
  const parsed = parseSearchQuery(searchTerm);
  if (!parsed.rawNormalized) return true;

  const productText = normalizeSearchText(
    `${searchableFields.name || ''} ${searchableFields.specs || ''} ${searchableFields.brand || ''} ${searchableFields.category || ''} ${searchableFields.description || ''} ${searchableFields.modelNumber || ''}`
  );

  if (productText.includes(parsed.rawNormalized) || productText.includes(parsed.expandedQuery)) {
    return true;
  }

  // Domain-specific accessory/power matches (preserved behavior)
  if (parsed.expandedQuery.includes('balun')) {
    if (
      productText.includes('balun') ||
      productText.includes('transceiver') ||
      searchableFields.category === 'Other Accessories'
    ) {
      return true;
    }
  }
  if (parsed.expandedQuery.includes('box adapter')) {
    if (
      productText.includes('box adapter') ||
      productText.includes('fvl') ||
      productText.includes('adapter')
    ) {
      return true;
    }
  }
  if (
    parsed.expandedQuery.includes('adapter') ||
    parsed.expandedQuery.includes('power supply')
  ) {
    if (
      productText.includes('adapter') ||
      searchableFields.category === 'Power Supply/Adapter' ||
      productText.includes('power supply') ||
      productText.includes('12v') ||
      productText.includes('fvl')
    ) {
      return true;
    }
  }

  // If user typed only location/district/brand keywords (e.g. "Rangpur", "Bogura", "বগুড়া", "ঢাকা")
  if (parsed.topicTokens.length === 0) return true;

  // Strip generic commercial intent words like "price"/"sales" when checking hardware catalog items
  const hardwareTokens = parsed.topicTokens.filter((t) => t !== 'price' && t !== 'sales');
  const tokensToCheck = hardwareTokens.length > 0 ? hardwareTokens : parsed.topicTokens;

  return tokensToCheck.every((t) => tokenMatchesText(t, productText));
}

/**
 * Matches a service or SEO service entry in ANY word order (District before or after),
 * supporting English and Bangla queries. Returns a relevance score (0 = no match).
 */
export function scoreServiceOrDistrictMatch(
  targetTextRaw: string,
  searchTerm: string,
  primaryHeadingRaw?: string
): number {
  const parsed = parseSearchQuery(searchTerm);
  if (!parsed.rawNormalized) return 0;

  const targetText = normalizeSearchText(targetTextRaw);
  const headingText = primaryHeadingRaw ? normalizeSearchText(primaryHeadingRaw) : '';

  const requiredTokens = Array.from(new Set([...parsed.districtTokens, ...parsed.topicTokens]));
  if (requiredTokens.length === 0) {
    return parsed.allTokens.some((t) => tokenMatchesText(t, targetText)) ? 1 : 0;
  }

  const matchedCount = requiredTokens.filter((t) => tokenMatchesText(t, targetText)).length;

  if (matchedCount === requiredTokens.length) {
    let score = matchedCount * 10;
    if (targetText.includes(parsed.rawNormalized)) score += 20;
    if (targetText.includes(parsed.expandedQuery)) score += 15;
    if (headingText) {
      const headingMatches = requiredTokens.filter((t) => tokenMatchesText(t, headingText)).length;
      score += headingMatches * 25;
      if (headingMatches === requiredTokens.length) score += 30;
    }
    return score;
  }

  return 0;
}
