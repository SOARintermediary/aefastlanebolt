import React from 'react';
import { Globe, Building, MapPin, Users, FileText, CheckCircle, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Statistic {
  icon: typeof Globe;
  value: string;
  label: string;
  color: string;
}

interface BusinessType {
  title: string;
  ownership: string;
  capital: string;
  liability: string;
  suitability: string;
}

const StartingBusinessForeigner = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const statistics: Statistic[] = [
    {
      icon: Globe,
      value: '200+',
      label: t('blog.startingBusiness.stats.nationalities'),
      color: 'blue'
    },
    {
      icon: Building,
      value: '45+',
      label: t('blog.startingBusiness.stats.freezones'),
      color: 'green'
    },
    {
      icon: DollarSign,
      value: '0%',
      label: t('blog.startingBusiness.stats.tax'),
      color: 'purple'
    }
  ];

  const whyUAE = [
    {
      icon: Building,
      title: t('blog.startingBusiness.why.stability.title'),
      description: t('blog.startingBusiness.why.stability.description')
    },
    {
      icon: MapPin,
      title: t('blog.startingBusiness.why.location.title'),
      description: t('blog.startingBusiness.why.location.description')
    },
    {
      icon: Users,
      title: t('blog.startingBusiness.why.workforce.title'),
      description: t('blog.startingBusiness.why.workforce.description')
    },
    {
      icon: FileText,
      title: t('blog.startingBusiness.why.policies.title'),
      description: t('blog.startingBusiness.why.policies.description')
    }
  ];

  const businessTypes: BusinessType[] = [
    {
      title: t('blog.startingBusiness.types.sole.title'),
      ownership: t('blog.startingBusiness.types.sole.ownership'),
      capital: t('blog.startingBusiness.types.sole.capital'),
      liability: t('blog.startingBusiness.types.sole.liability'),
      suitability: t('blog.startingBusiness.types.sole.suitability')
    },
    {
      title: t('blog.startingBusiness.types.llc.title'),
      ownership: t('blog.startingBusiness.types.llc.ownership'),
      capital: t('blog.startingBusiness.types.llc.capital'),
      liability: t('blog.startingBusiness.types.llc.liability'),
      suitability: t('blog.startingBusiness.types.llc.suitability')
    },
    {
      title: t('blog.startingBusiness.types.freezone.title'),
      ownership: t('blog.startingBusiness.types.freezone.ownership'),
      capital: t('blog.startingBusiness.types.freezone.capital'),
      liability: t('blog.startingBusiness.types.freezone.liability'),
      suitability: t('blog.startingBusiness.types.freezone.suitability')
    },
    {
      title: t('blog.startingBusiness.types.branch.title'),
      ownership: t('blog.startingBusiness.types.branch.ownership'),
      capital: t('blog.startingBusiness.types.branch.capital'),
      liability: t('blog.startingBusiness.types.branch.liability'),
      suitability: t('blog.startingBusiness.types.branch.suitability')
    }
  ];

  const legalRequirements = t('blog.startingBusiness.legal.requirements').split('|');

  return (
    <BlogArticle
      icon={Globe}
      category="blog.startingBusiness.overview.category"
      titleKey="blog.posts.startingBusiness.title"
      descriptionKey="blog.posts.startingBusiness.excerpt"
    >
      {/* Key Statistics */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.startingBusiness.stats.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {statistics.map((stat, index) => (
            <div key={index} className={`text-center p-6 bg-${stat.color}-50 rounded-lg`}>
              <stat.icon className={`h-10 w-10 text-${stat.color}-600 mx-auto mb-3`} />
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-1`}>{stat.value}</div>
              <div className={`text-${stat.color}-800`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose UAE */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.startingBusiness.why.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {whyUAE.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
              <reason.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Structure Options */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.startingBusiness.structure.title')}
        </h2>
        <div className="space-y-6">
          {businessTypes.map((type, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">{type.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">{t('blog.startingBusiness.structure.ownership')}</p>
                  <p className="font-medium">{type.ownership}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('blog.startingBusiness.structure.capital')}</p>
                  <p className="font-medium">{type.capital}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('blog.startingBusiness.structure.liability')}</p>
                  <p className="font-medium">{type.liability}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t('blog.startingBusiness.structure.suitability')}</p>
                  <p className="font-medium">{type.suitability}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Requirements */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.startingBusiness.legal.title')}
        </h2>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('blog.startingBusiness.legal.eligibility')}
          </h3>
          <ul className="space-y-3">
            {legalRequirements.map((requirement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BlogArticle>
  );
};

export default StartingBusinessForeigner;