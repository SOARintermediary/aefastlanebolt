import React, { createContext, useContext, useState, useEffect } from 'react';
import { blogTranslations } from '../translations/blog';
import { blogTranslations } from '../translations/blog';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Features Section
    'features.title': 'AEFastLane – Your Trusted UAE Business Setup Partner',
    'features.subtitle': 'Empowering Enterprises to Thrive in the Emirates',
    'features.service.title': 'All-in-One Business Services',
    'features.service.description': 'Complete support from company formation to bank account opening',
    'features.plans.title': 'Tailored & Affordable Plans',
    'features.plans.description': 'Budget-friendly solutions designed around your business needs',
    'features.track.title': 'Global Track Record',
    'features.track.description': 'Trusted by clients worldwide',
    'features.client.title': 'Client-First Approach',
    'features.client.description': 'Personalized service focused on your success and peace of mind',
    'features.onboarding.title': 'Effortless Onboarding',
    'features.onboarding.description': 'Easy adaptation to UAE\'s legal and operational landscape',
    'features.network.title': 'Extensive Network Advantage',
    'features.network.description': 'Accelerated setup through deep regional and international ties',

    // Navigation
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.hrServices': 'HR Services',
    'nav.contactUs': 'Contact Us',
    'nav.blog': 'Blog',
    
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
    'services.companyFormation.comingSoon': 'Service coming soon',
    'services.visa.title': 'Visa Services',
    'services.visa.description': 'Comprehensive visa solutions including Golden Visa, Family Visa, and Work Permits.',
    'services.visa.comingSoon': 'Service coming soon',
    'services.pro.title': 'PRO Services',
    'services.pro.description': 'Handle all government-related procedures with full pricing transparency.',
    'services.pro.comingSoon': 'Service coming soon',
    'services.hr.title': 'HR Solutions',
    'services.hr.description': 'Complete HR support including recruitment, payroll, and employee management.',
    'services.hr.comingSoon': 'Service coming soon',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Clear pricing for all your business setup needs',
    'pricing.note': '* All fees are in AED and subject to change based on government regulations',
    'pricing.getStarted': 'Get Started Today',
    'pricing.table.service': 'Service',
    'pricing.table.fee': 'Fee (AED)',
    'pricing.table.total': 'Total',
    'pricing.categories.employment': 'New Employment Visa (Inside Country)',
    'pricing.categories.renewal': 'Visa Renewal',
    'pricing.categories.cancellation': 'Visa Cancellation',
    'pricing.categories.translation': 'Translation Services',
    'pricing.categories.attestation': 'Certificate Attestation',
    
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
  },
  ar: {
    // Features Section
    'features.title': 'AEFastLane - شريكك الموثوق في تأسيس الأعمال في الإمارات',
    'features.subtitle': 'تمكين المؤسسات من الازدهار في الإمارات',
    'features.service.title': 'خدمات الأعمال الشاملة',
    'features.service.description': 'دعم كامل من تأسيس الشركة إلى فتح الحساب المصرفي',
    'features.plans.title': 'خطط مخصصة وبأسعار معقولة',
    'features.plans.description': 'حلول اقتصادية مصممة حسب احتياجات عملك',
    'features.track.title': 'سجل عالمي',
    'features.track.description': 'موثوق به من قبل العملاء في جميع أنحاء العالم',
    'features.client.title': 'نهج العميل أولاً',
    'features.client.description': 'خدمة شخصية تركز على نجاحك وراحة بالك',
    'features.onboarding.title': 'انضمام سهل',
    'features.onboarding.description': 'تكيف سهل مع المشهد القانوني والتشغيلي في الإمارات',
    'features.network.title': 'ميزة الشبكة الواسعة',
    'features.network.description': 'إعداد سريع من خلال علاقات إقليمية ودولية عميقة',

    // Navigation
    'nav.services': 'الخدمات',
    'nav.pricing': 'الأسعار',
    'nav.hrServices': 'خدمات الموارد البشرية',
    'nav.contactUs': 'اتصل بنا',
    'nav.blog': 'المدونة',
    
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
    'services.companyFormation.comingSoon': 'الخدمة قريباً',
    'services.visa.title': 'خدمات التأشيرات',
    'services.visa.description': 'حلول شاملة للتأشيرات تشمل الإقامة الذهبية وتأشيرات العائلة وتصاريح العمل.',
    'services.visa.comingSoon': 'الخدمة قريباً',
    'services.pro.title': 'خدمات العلاقات الحكومية',
    'services.pro.description': 'إدارة جميع الإجراءات الحكومية بشفافية تامة في الأسعار.',
    'services.pro.comingSoon': 'الخدمة قريباً',
    'services.hr.title': 'حلول الموارد البشرية',
    'services.hr.description': 'دعم كامل للموارد البشرية يشمل التوظيف والرواتب وإدارة الموظفين.',
    'services.hr.comingSoon': 'الخدمة قريباً',
    
    // Pricing
    'pricing.title': 'أسعار شفافة',
    'pricing.subtitle': 'أسعار واضحة لجميع احتياجات تأسيس أعمالك',
    'pricing.note': '* جميع الرسوم بالدرهم الإماراتي وقابلة للتغيير حسب اللوائح الحكومية',
    'pricing.getStarted': 'ابدأ اليوم',
    'pricing.table.service': 'الخدمة',
    'pricing.table.fee': 'الرسوم (درهم)',
    'pricing.table.total': 'المجموع',
    'pricing.categories.employment': 'تأشيرة عمل جديدة (داخل الدولة)',
    'pricing.categories.renewal': 'تجديد التأشيرة',
    'pricing.categories.cancellation': 'إلغاء التأشيرة',
    'pricing.categories.translation': 'خدمات الترجمة',
    'pricing.categories.attestation': 'تصديق الشهادات',
    
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
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'ar' || savedLanguage === 'en') ? savedLanguage : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Force reload styles for RTL/LTR switch
    const links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (link.rel === 'stylesheet') {
        link.href = link.href.split('?')[0] + '?v=' + new Date().getTime();
      }
    }
  };

  useEffect(() => {
    // Set initial direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Add CSS variables for RTL support
    document.documentElement.style.setProperty('--direction', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.style.setProperty('--reverse-direction', language === 'ar' ? 'ltr' : 'rtl');
    document.documentElement.style.setProperty('--start', language === 'ar' ? 'right' : 'left');
    document.documentElement.style.setProperty('--end', language === 'ar' ? 'left' : 'right');
  }, [language]);

  const t = (key: string): string => {
    // First check blog translations
    const blogTranslation = blogTranslations[language]?.[key as keyof typeof blogTranslations[typeof language]];
    if (blogTranslation) {
      return blogTranslation;
    }
    
    // Then check main translations
    const mainTranslation = translations[language]?.[key as keyof typeof translations[typeof language]];
    if (mainTranslation) {
      return mainTranslation;
    }
    
    // Return key if no translation found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};