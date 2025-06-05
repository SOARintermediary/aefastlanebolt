import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.hrServices': 'HR Services',
    'nav.contactUs': 'Contact Us',
    
    // Hero
    'hero.title1': 'Your One-Stop Partner for',
    'hero.title2': 'Business Setup in UAE',
    'hero.description': 'Fast, reliable, and tailored solutions for company formation, Golden Visa assistance, and complete PRO services.',
    'hero.cta': 'Book a Free Consultation',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive business setup and support services in UAE',
    'services.companyFormation.title': 'UAE Company Formation',
    'services.companyFormation.description': 'Setup Mainland LLC, Free Zone Companies (RAKEZ, DMCC, IFZA), and Offshore Entities.',
    'services.visa.title': 'Visa Services',
    'services.visa.description': 'Comprehensive visa solutions including Golden Visa, Family Visa, and Work Permits.',
    'services.pro.title': 'PRO Services',
    'services.pro.description': 'Handle all government-related procedures with full pricing transparency.',
    'services.hr.title': 'HR Solutions',
    'services.hr.description': 'Complete HR support including recruitment, payroll, and employee management.',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Clear pricing for all your business setup needs',
    'pricing.note': '* All fees are in AED and subject to change based on government regulations',
    'pricing.getStarted': 'Get Started Today',
    
    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for a free consultation',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name (if applicable)',
    'contact.service': 'Service Interested In',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.required': 'is required',
    'contact.invalidEmail': 'Invalid email address',
    
    // Footer
    'footer.description': 'Your One-Stop Partner for Business Setup in UAE',
    'footer.contactUs': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Service Pages
    'services.comingSoon': 'Service coming soon',
    'services.submitInquiry': 'Submit Inquiry'
  },
  ar: {
    // Navigation
    'nav.services': 'الخدمات',
    'nav.pricing': 'الأسعار',
    'nav.hrServices': 'خدمات الموارد البشرية',
    'nav.contactUs': 'اتصل بنا',
    
    // Hero
    'hero.title1': 'شريكك الشامل في',
    'hero.title2': 'تأسيس الأعمال في الإمارات',
    'hero.description': 'حلول سريعة وموثوقة ومخصصة لتأسيس الشركات، والمساعدة في الإقامة الذهبية، وخدمات العلاقات الحكومية الكاملة.',
    'hero.cta': 'احجز استشارة مجانية',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'خدمات شاملة لتأسيس وإدارة الأعمال في الإمارات',
    'services.companyFormation.title': 'تأسيس الشركات في الإمارات',
    'services.companyFormation.description': 'تأسيس شركات البر الرئيسي والمناطق الحرة (راكز، دي إم سي سي، إفزا) والشركات الخارجية.',
    'services.visa.title': 'خدمات التأشيرات',
    'services.visa.description': 'حلول شاملة للتأشيرات تشمل الإقامة الذهبية وتأشيرات العائلة وتصاريح العمل.',
    'services.pro.title': 'خدمات العلاقات الحكومية',
    'services.pro.description': 'إدارة جميع الإجراءات الحكومية بشفافية تامة في الأسعار.',
    'services.hr.title': 'حلول الموارد البشرية',
    'services.hr.description': 'دعم كامل للموارد البشرية يشمل التوظيف والرواتب وإدارة الموظفين.',
    
    // Pricing
    'pricing.title': 'أسعار شفافة',
    'pricing.subtitle': 'أسعار واضحة لجميع احتياجات تأسيس أعمالك',
    'pricing.note': '* جميع الرسوم بالدرهم الإماراتي وقابلة للتغيير حسب اللوائح الحكومية',
    'pricing.getStarted': 'ابدأ اليوم',
    
    // Contact Form
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا للحصول على استشارة مجانية',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'اسم الشركة (إن وجد)',
    'contact.service': 'الخدمة المطلوبة',
    'contact.message': 'الرسالة',
    'contact.submit': 'إرسال الرسالة',
    'contact.required': 'مطلوب',
    'contact.invalidEmail': 'بريد إلكتروني غير صالح',
    
    // Footer
    'footer.description': 'شريكك الشامل في تأسيس الأعمال في الإمارات',
    'footer.contactUs': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Service Pages
    'services.comingSoon': 'الخدمة قريباً',
    'services.submitInquiry': 'إرسال استفسار'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};