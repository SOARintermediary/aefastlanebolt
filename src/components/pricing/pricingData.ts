export interface PriceCategory {
  title: string;
  items: {
    service: string;
    price: number;
  }[];
}

export const priceData: PriceCategory[] = [
  {
    title: 'New Employment Visa (Inside Country)',
    items: [
      { service: 'Initial Processing (Offer Letter, Labor Contract)', price: 310 },
      { service: 'Labor Insurance', price: 220 },
      { service: 'Labor Payment', price: 3590 },
      { service: 'Entry Permit Inside', price: 1190 },
      { service: 'Change Status', price: 700 },
      { service: 'Medical - DHA', price: 310 },
      { service: 'Emirates ID (2 Years)', price: 380 },
      { service: 'Visa Stamping', price: 580 },
      { service: 'Labor Contract Submission', price: 190 }
    ]
  },
  {
    title: 'Visa Renewal',
    items: [
      { service: 'Contract Renewal Processing', price: 120 },
      { service: 'Labor Insurance', price: 220 },
      { service: 'Labor Payment & Contract Submission', price: 3750 },
      { service: 'Medical - DHA', price: 310 },
      { service: 'Emirates ID (2 Years)', price: 380 },
      { service: 'Visa Stamping', price: 580 }
    ]
  },
  {
    title: 'Visa Cancellation',
    items: [
      { service: 'Labor Cancellation Processing', price: 240 },
      { service: 'Immigration Cancellation', price: 260 }
    ]
  },
  {
    title: 'Translation Services',
    items: [
      { service: 'Normal Translation (Per Page)', price: 40 },
      { service: 'Legal Translation (Per Page)', price: 60 }
    ]
  },
  {
    title: 'Certificate Attestation',
    items: [
      { service: 'India', price: 590 },
      { service: 'UK', price: 1050 },
      { service: 'Pakistan', price: 1250 },
      { service: 'Philippines', price: 1550 },
      { service: 'Australia', price: 1700 },
      { service: 'Switzerland', price: 1850 },
      { service: 'Russia', price: 2100 },
      { service: 'France', price: 2200 },
      { service: 'Canada', price: 2000 }
    ]
  }
]; 