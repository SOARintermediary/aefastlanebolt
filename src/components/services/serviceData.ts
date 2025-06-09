import { Building2, Plane, FileCheck, Users } from 'lucide-react';

export const services = [
  {
    key: 'companyFormation',
    title: 'UAE Company Formation',
    description: 'Setup Mainland LLC, Free Zone Companies (RAKEZ, DMCC, IFZA), and Offshore Entities.',
    icon: Building2,
    path: '/company-formation'
  },
  {
    key: 'visa',
    title: 'Visa Services',
    description: 'Comprehensive visa solutions including Golden Visa, Family Visa, and Work Permits.',
    icon: Plane,
    path: '/visa-services'
  },
  {
    key: 'pro',
    title: 'PRO Services',
    description: 'Handle all government-related procedures with full pricing transparency.',
    icon: FileCheck,
    path: '/pro-services'
  },
  {
    key: 'hr',
    title: 'HR Solutions',
    description: 'Complete HR support including recruitment, payroll, and employee management.',
    icon: Users,
    path: '/hr-solutions'
  },
]; 