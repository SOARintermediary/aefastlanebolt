import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Building2, FileText, Globe, BarChart3, Settings, RefreshCw, Plane, Star, Users, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const blogPosts = [
  // Getting Started
  {
    id: 'free-zone-vs-mainland',
    titleKey: 'blog.posts.freeZoneVsMainland.title',
    excerptKey: 'blog.posts.freeZoneVsMainland.excerpt',
    icon: Building2,
    readTime: 8,
    categoryKey: 'blog.categories.gettingStarted',
    path: '/blog/free-zone-vs-mainland'
  },
  {
    id: 'starting-business-uae-foreigner',
    titleKey: 'blog.posts.startingBusiness.title',
    excerptKey: 'blog.posts.startingBusiness.excerpt',
    icon: Globe,
    readTime: 12,
    categoryKey: 'blog.categories.gettingStarted',
    path: '/blog/starting-business-uae-foreigner'
  },
  {
    id: 'business-activities-licensing',
    titleKey: 'blog.posts.businessActivities.title',
    excerptKey: 'blog.posts.businessActivities.excerpt',
    icon: BarChart3,
    readTime: 10,
    categoryKey: 'blog.categories.gettingStarted',
    path: '/blog/business-activities-licensing'
  },
  
  // Setup Guides
  {
    id: 'mainland-business-license-dubai',
    titleKey: 'blog.posts.mainlandLicense.title',
    excerptKey: 'blog.posts.mainlandLicense.excerpt',
    icon: FileText,
    readTime: 10,
    categoryKey: 'blog.categories.setupGuides',
    path: '/blog/mainland-business-license-dubai'
  },
  {
    id: 'free-zone-company-setup',
    titleKey: 'blog.posts.freeZoneSetup.title',
    excerptKey: 'blog.posts.freeZoneSetup.excerpt',
    icon: Building2,
    readTime: 9,
    categoryKey: 'blog.categories.setupGuides',
    path: '/blog/free-zone-company-setup'
  },
  
  // Visa & Immigration
  {
    id: 'visa-types-business-owners',
    titleKey: 'blog.posts.visaTypes.title',
    excerptKey: 'blog.posts.visaTypes.excerpt',
    icon: Plane,
    readTime: 11,
    categoryKey: 'blog.categories.visaImmigration',
    path: '/blog/visa-types-business-owners'
  },
  {
    id: 'uae-residence-visa-application',
    titleKey: 'blog.posts.residenceVisa.title',
    excerptKey: 'blog.posts.residenceVisa.excerpt',
    icon: FileText,
    readTime: 9,
    categoryKey: 'blog.categories.visaImmigration',
    path: '/blog/uae-residence-visa-application'
  },
  {
    id: 'golden-visa-eligibility',
    titleKey: 'blog.posts.goldenVisa.title',
    excerptKey: 'blog.posts.goldenVisa.excerpt',
    icon: Star,
    readTime: 13,
    categoryKey: 'blog.categories.visaImmigration',
    path: '/blog/golden-visa-eligibility'
  },
  {
    id: 'family-dependents-visa',
    titleKey: 'blog.posts.familyVisa.title',
    excerptKey: 'blog.posts.familyVisa.excerpt',
    icon: Heart,
    readTime: 10,
    categoryKey: 'blog.categories.visaImmigration',
    path: '/blog/family-dependents-visa'
  },
  
  // Operations & Compliance
  {
    id: 'government-approvals-streamlined',
    titleKey: 'blog.posts.govApprovals.title',
    excerptKey: 'blog.posts.govApprovals.excerpt',
    icon: Settings,
    readTime: 7,
    categoryKey: 'blog.categories.operations',
    path: '/blog/government-approvals-streamlined'
  },
  {
    id: 'company-renewals-closures',
    titleKey: 'blog.posts.renewals.title',
    excerptKey: 'blog.posts.renewals.excerpt',
    icon: RefreshCw,
    readTime: 11,
    categoryKey: 'blog.categories.operations',
    path: '/blog/company-renewals-closures'
  }
];

const categories = [
  'blog.categories.gettingStarted',
  'blog.categories.setupGuides',
  'blog.categories.visaImmigration',
  'blog.categories.operations'
];

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const getPostsByCategory = (categoryKey: string) => {
    return blogPosts.filter(post => post.categoryKey === categoryKey);
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
            {t('blog.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Articles by Category */}
        {categories.map((categoryKey, categoryIndex) => (
          <div key={categoryKey} className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-lg mr-3">
                {categoryIndex + 1}
              </span>
              {t(categoryKey)}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPostsByCategory(categoryKey).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                  onClick={() => navigate(post.path)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <post.icon className="h-6 w-6 text-primary" />
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {t(post.categoryKey)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.readTime} {t('blog.readTime')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                      {t(post.titleKey)}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {t(post.excerptKey)}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium group-hover:text-primary-light transition-colors duration-200">
                      {t('blog.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Coming Soon Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">{t('blog.comingSoon.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('blog.comingSoon.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('blog.comingSoon.advanced.title')}</h4>
              <ul className="space-y-1">
                {['vat', 'banking', 'ip', 'tax'].map(topic => (
                  <li key={topic}>• {t(`blog.comingSoon.advanced.${topic}`)}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('blog.comingSoon.industry.title')}</h4>
              <ul className="space-y-1">
                {['tech', 'ecommerce', 'professional', 'healthcare'].map(topic => (
                  <li key={topic}>• {t(`blog.comingSoon.industry.${topic}`)}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('blog.comingSoon.strategy.title')}</h4>
              <ul className="space-y-1">
                {['entry', 'cost', 'scaling', 'exit'].map(topic => (
                  <li key={topic}>• {t(`blog.comingSoon.strategy.${topic}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('blog.cta.title')}</h3>
            <p className="text-gray-300 mb-6">
              {t('blog.cta.description')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent-dark transition-colors duration-200"
            >
              {t('blog.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;