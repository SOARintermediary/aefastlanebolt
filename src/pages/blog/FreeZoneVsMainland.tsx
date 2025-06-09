import React from 'react';
import { Building2, CheckCircle, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Advantage {
  icon: typeof Shield;
  title: string;
  description: string;
}

interface Comparison {
  aspect: string;
  freeZone: string[];
  mainland: string[];
}

const FreeZoneVsMainland = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const advantages: Advantage[] = [
    {
      icon: Shield,
      title: t('blog.freeZoneVsMainland.advantages.ownership.title'),
      description: t('blog.freeZoneVsMainland.advantages.ownership.description')
    },
    {
      icon: DollarSign,
      title: t('blog.freeZoneVsMainland.advantages.tax.title'),
      description: t('blog.freeZoneVsMainland.advantages.tax.description')
    },
    {
      icon: Users,
      title: t('blog.freeZoneVsMainland.advantages.visas.title'),
      description: t('blog.freeZoneVsMainland.advantages.visas.description')
    },
    {
      icon: Zap,
      title: t('blog.freeZoneVsMainland.advantages.setup.title'),
      description: t('blog.freeZoneVsMainland.advantages.setup.description')
    }
  ];

  const comparisons: Comparison[] = [
    {
      aspect: t('blog.freeZoneVsMainland.comparison.ownership.aspect'),
      freeZone: t('blog.freeZoneVsMainland.comparison.ownership.freeZone').split('|'),
      mainland: t('blog.freeZoneVsMainland.comparison.ownership.mainland').split('|')
    },
    {
      aspect: t('blog.freeZoneVsMainland.comparison.location.aspect'),
      freeZone: t('blog.freeZoneVsMainland.comparison.location.freeZone').split('|'),
      mainland: t('blog.freeZoneVsMainland.comparison.location.mainland').split('|')
    },
    {
      aspect: t('blog.freeZoneVsMainland.comparison.trading.aspect'),
      freeZone: t('blog.freeZoneVsMainland.comparison.trading.freeZone').split('|'),
      mainland: t('blog.freeZoneVsMainland.comparison.trading.mainland').split('|')
    },
    {
      aspect: t('blog.freeZoneVsMainland.comparison.visas.aspect'),
      freeZone: t('blog.freeZoneVsMainland.comparison.visas.freeZone').split('|'),
      mainland: t('blog.freeZoneVsMainland.comparison.visas.mainland').split('|')
    }
  ];

  return (
    <BlogArticle
      icon={Building2}
      category="blog.categories.setupGuides"
      titleKey="blog.posts.freeZoneVsMainland.title"
      descriptionKey="blog.posts.freeZoneVsMainland.excerpt"
    >
      {/* Quick Overview */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneVsMainland.overview.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">
              {t('blog.freeZoneVsMainland.overview.timeline')}
            </h3>
            <p className="text-blue-600">
              {t('blog.freeZoneVsMainland.overview.timelineValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">
              {t('blog.freeZoneVsMainland.overview.cost')}
            </h3>
            <p className="text-green-600">
              {t('blog.freeZoneVsMainland.overview.costValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">
              {t('blog.freeZoneVsMainland.overview.ownership')}
            </h3>
            <p className="text-purple-600">
              {t('blog.freeZoneVsMainland.overview.ownershipValue')}
            </p>
          </div>
        </div>
      </div>

      {/* Key Advantages */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneVsMainland.advantages.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
              <advantage.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Comparison */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneVsMainland.comparison.title')}
        </h2>
        
        <div className="space-y-6">
          {comparisons.map((comparison, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{comparison.aspect}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-primary mb-2">{t('blog.freeZoneVsMainland.comparison.freeZoneTitle')}</h4>
                  <ul className="space-y-2">
                    {comparison.freeZone.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">{t('blog.freeZoneVsMainland.comparison.mainlandTitle')}</h4>
                  <ul className="space-y-2">
                    {comparison.mainland.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-primary text-white rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">
          {t('blog.freeZoneVsMainland.conclusion.title')}
        </h2>
        <p className="mb-6">
          {t('blog.freeZoneVsMainland.conclusion.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
          >
            <Users className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('blog.freeZoneVsMainland.conclusion.cta1')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200"
          >
            <Building2 className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('blog.freeZoneVsMainland.conclusion.cta2')}
          </a>
        </div>
      </div>
    </BlogArticle>
  );
};

export default FreeZoneVsMainland;