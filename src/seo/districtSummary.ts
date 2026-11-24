export interface DistrictSummary {
  slug: string;
  enName: string;
  bnName: string;
}

export const DISTRICT_SUMMARY_DATA: Record<string, DistrictSummary> = {
  rangpur: { slug: 'rangpur', enName: 'Rangpur', bnName: 'রংপুর' },
  dinajpur: { slug: 'dinajpur', enName: 'Dinajpur', bnName: 'দিনাজপুর' },
  gaibandha: { slug: 'gaibandha', enName: 'Gaibandha', bnName: 'গাইবান্ধা' },
  kurigram: { slug: 'kurigram', enName: 'Kurigram', bnName: 'কুড়িগ্রাম' },
  nilphamari: { slug: 'nilphamari', enName: 'Nilphamari', bnName: 'নীলফামারী' },
  lalmonirhat: { slug: 'lalmonirhat', enName: 'Lalmonirhat', bnName: 'লালমনিরহাট' },
  panchagarh: { slug: 'panchagarh', enName: 'Panchagarh', bnName: 'পঞ্চগড়' },
  thakurgaon: { slug: 'thakurgaon', enName: 'Thakurgaon', bnName: 'ঠাকুরগাঁও' },
  bogura: { slug: 'bogura', enName: 'Bogura', bnName: 'বগুড়া' },
  bogra: { slug: 'bogura', enName: 'Bogura', bnName: 'বগুড়া' },
  dhaka: { slug: 'dhaka', enName: 'Dhaka', bnName: 'ঢাকা' }
};

export const DISTRICT_SLUG_SET = new Set(Object.keys(DISTRICT_SUMMARY_DATA));
