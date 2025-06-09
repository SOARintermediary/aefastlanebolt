export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'company-formation', label: 'Company Formation' },
  { value: 'visa-services', label: 'Visa Services' },
  { value: 'pro-services', label: 'PRO Services' },
  { value: 'hr-solutions', label: 'HR Solutions' }
]; 