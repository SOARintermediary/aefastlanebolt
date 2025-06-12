import React, { createContext, useContext, useState, useEffect } from 'react';
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
    'hero.title1': 'Your UAE Partner for',
    'hero.title2': 'Business, Visas & Beyond',
    'hero.description': 'Business formation, visas, HR & PRO — fast-tracked for success.',
    'hero.cta': 'Book a Free Consultation',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We consult and give guidance on the following services in UAE',
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
    

    
    // Footer
    'footer.description': 'From company setup to HR and PRO — we can advise on it all.',
    'footer.contactUs': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Blog
    'blog.title': 'UAE Business Insights & Guides',
    'blog.subtitle': 'Expert insights, practical guides, and answers to your most important questions about doing business in the UAE.',
    'blog.readMore': 'Read Article',
    'blog.backToBlog': 'Back to Blog',
    'blog.categories.gettingStarted': 'Getting Started',
    'blog.categories.setupGuides': 'Setup Guides',
    'blog.categories.visaImmigration': 'Visa & Immigration',
    'blog.categories.operations': 'Operations & Compliance',
    'blog.readTime': 'min read',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
    'common.contactUs': 'Contact Us',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    
    // Blog Coming Soon
    'blog.comingSoon.title': 'More Expert Content Coming Soon',
    'blog.comingSoon.description': 'We\'re constantly expanding our knowledge base with new insights and guides to help you navigate the UAE business landscape. Stay tuned for more expert content covering advanced topics and industry-specific guidance.',
    
    'blog.comingSoon.advanced.title': 'Advanced Topics',
    'blog.comingSoon.advanced.vat': 'VAT Registration & Compliance',
    'blog.comingSoon.advanced.banking': 'Banking Setup & Requirements',
    'blog.comingSoon.advanced.ip': 'Intellectual Property Protection',
    'blog.comingSoon.advanced.tax': 'Corporate Tax Implications',
    
    'blog.comingSoon.industry.title': 'Industry Insights',
    'blog.comingSoon.industry.tech': 'Tech Startups in UAE',
    'blog.comingSoon.industry.ecommerce': 'E-commerce Licensing Guide',
    'blog.comingSoon.industry.professional': 'Professional Services Setup',
    'blog.comingSoon.industry.healthcare': 'Healthcare Business Licensing',
    
    'blog.comingSoon.strategy.title': 'Strategic Guidance',
    'blog.comingSoon.strategy.entry': 'Market Entry Strategies',
    'blog.comingSoon.strategy.cost': 'Cost Optimization Tips',
    'blog.comingSoon.strategy.scaling': 'Scaling Your UAE Business',
    'blog.comingSoon.strategy.exit': 'Exit Strategies & Procedures',
    
    // Blog CTA
    'blog.cta.title': 'Need Personalized Guidance?',
    'blog.cta.description': 'While our articles provide comprehensive information, every business situation is unique. Get personalized advice from our UAE business setup experts who have helped hundreds of companies succeed.',
    'blog.cta.button': 'Schedule Free Consultation',
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
    

    
    // Footer
    'footer.description': 'شريكك الشامل في تأسيس الأعمال في الإمارات',
    'footer.contactUs': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Blog
    'blog.title': 'رؤى وأدلة الأعمال في الإمارات',
    'blog.subtitle': 'رؤى الخبراء والأدلة العملية وإجابات لأهم أسئلتك حول ممارسة الأعمال في الإمارات.',
    'blog.readMore': 'اقرأ المقال',
    'blog.backToBlog': 'العودة إلى المدونة',
    'blog.categories.gettingStarted': 'البداية',
    'blog.categories.setupGuides': 'أدلة التأسيس',
    'blog.categories.visaImmigration': 'التأشيرات والهجرة',
    'blog.categories.operations': 'العمليات والامتثال',
    'blog.readTime': 'دقائق للقراءة',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.viewAll': 'عرض الكل',
    'common.readMore': 'اقرأ المزيد',
    'common.contactUs': 'اتصل بنا',
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'تم بنجاح',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    
    
    // Blog Coming Soon
    'blog.comingSoon.title': 'المزيد من المحتوى المتخصص قريباً',
    'blog.comingSoon.description': 'نحن نوسع باستمرار قاعدة معرفتنا برؤى وأدلة جديدة لمساعدتك في التنقل في بيئة الأعمال الإماراتية. ترقب المزيد من المحتوى المتخصص الذي يغطي مواضيع متقدمة وتوجيهات خاصة بالصناعة.',
    
    'blog.comingSoon.advanced.title': 'مواضيع متقدمة',
    'blog.comingSoon.advanced.vat': 'تسجيل وامتثال ضريبة القيمة المضافة',
    'blog.comingSoon.advanced.banking': 'إعداد ومتطلبات البنوك',
    'blog.comingSoon.advanced.ip': 'حماية الملكية الفكرية',
    'blog.comingSoon.advanced.tax': 'آثار الضريبة على الشركات',
    
    'blog.comingSoon.industry.title': 'رؤى الصناعة',
    'blog.comingSoon.industry.tech': 'الشركات الناشئة التقنية في الإمارات',
    'blog.comingSoon.industry.ecommerce': 'دليل ترخيص التجارة الإلكترونية',
    'blog.comingSoon.industry.professional': 'إعداد الخدمات المهنية',
    'blog.comingSoon.industry.healthcare': 'ترخيص الأعمال الصحية',
    
    'blog.comingSoon.strategy.title': 'التوجيه الاستراتيجي',
    'blog.comingSoon.strategy.entry': 'استراتيجيات دخول السوق',
    'blog.comingSoon.strategy.cost': 'نصائح تحسين التكلفة',
    'blog.comingSoon.strategy.scaling': 'توسيع عملك في الإمارات',
    'blog.comingSoon.strategy.exit': 'استراتيجيات وإجراءات الخروج',
    
    // Blog CTA
    'blog.cta.title': 'هل تحتاج إلى توجيه شخصي؟',
    'blog.cta.description': 'بينما توفر مقالاتنا معلومات شاملة، كل حالة عمل فريدة من نوعها. احصل على نصائح شخصية من خبراء تأسيس الأعمال في الإمارات الذين ساعدوا مئات الشركات على النجاح.',
    'blog.cta.button': 'جدول استشارة مجانية',
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