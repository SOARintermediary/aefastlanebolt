export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const serviceOptions = [
  { value: '', label: 'Choose Service' },
  { value: 'companyFormation', label: 'Company Formation' },
  { value: 'visa', label: 'Visa Services' },
  { value: 'pro', label: 'PRO Services' },
  { value: 'hr', label: 'HR Solutions' }
];