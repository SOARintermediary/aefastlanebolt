import React from 'react';
import { Globe, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const StartingBusinessForeigner = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const advantages = [
    {
      icon: Shield,
      title: t('blog.startingBusiness.why.stability.title'),
      description: t('blog.startingBusiness.why.stability.description')
    },
    {
      icon: TrendingUp,
      title: t('blog.startingBusiness.why.location.title'),
      description: t('blog.startingBusiness.why.location.description')
    },
    {
      icon: Users,
      title: t('blog.startingBusiness.why.workforce.title'),
      description: t('blog.startingBusiness.why.workforce.description')
    },
    {
      icon: Globe,
      title: t('blog.startingBusiness.why.policies.title'),
      description: t('blog.startingBusiness.why.policies.description')
    }
  ];

  const businessTypes = [
    {
      type: t('blog.startingBusiness.types.sole.title'),
      ownership: t('blog.startingBusiness.types.sole.ownership'),
      minCapital: t('blog.startingBusiness.types.sole.capital'),
      liability: t('blog.startingBusiness.types.sole.liability'),
      suitability: t('blog.startingBusiness.types.sole.suitability')
    },
    {
      type: t('blog.startingBusiness.types.llc.title'),
      ownership: t('blog.startingBusiness.types.llc.ownership'),
      minCapital: t('blog.startingBusiness.types.llc.capital'),
      liability: t('blog.startingBusiness.types.llc.liability'),
      suitability: t('blog.startingBusiness.types.llc.suitability')
    },
    {
      type: t('blog.startingBusiness.types.freezone.title'),
      ownership: t('blog.startingBusiness.types.freezone.ownership'),
      minCapital: t('blog.startingBusiness.types.freezone.capital'),
      liability: t('blog.startingBusiness.types.freezone.liability'),
      suitability: t('blog.startingBusiness.types.freezone.suitability')
    },
    {
      type: t('blog.startingBusiness.types.branch.title'),
      ownership: t('blog.startingBusiness.types.branch.ownership'),
      minCapital: t('blog.startingBusiness.types.branch.capital'),
      liability: t('blog.startingBusiness.types.branch.liability'),
      suitability: t('blog.startingBusiness.types.branch.suitability')
    }
  ];

  return (
    <BlogArticle
      icon={Globe}
      category="blog.startingBusiness.overview.category"
      titleKey="blog.startingBusiness.overview.title"
      descriptionKey="blog.startingBusiness.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Why Choose UAE */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.startingBusiness.why.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className={`flex items-start space-x-4 p-4 border border-gray-200 rounded-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <advantage.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              {t('blog.startingBusiness.stats.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-blue-700">{t('blog.startingBusiness.stats.nationalities')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-blue-700">{t('blog.startingBusiness.stats.freezones')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">0%</div>
                <div className="text-sm text-blue-700">{t('blog.startingBusiness.stats.tax')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Structure Options */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.startingBusiness.structure.title')}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.startingBusiness.structure.type')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.startingBusiness.structure.ownership')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.startingBusiness.structure.capital')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.startingBusiness.structure.liability')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.startingBusiness.structure.suitability')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {businessTypes.map((business, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {business.type}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {business.ownership}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {business.minCapital}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {business.liability}
                    </td>
                    <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {business.suitability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legal Requirements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.startingBusiness.legal.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('blog.startingBusiness.legal.eligibility')}
              </h3>
              <ul className="space-y-3">
                {t('blog.startingBusiness.legal.requirements').split('|').map((requirement, index) => (
                  <li key={index} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle className={`h-5 w-5 text-green-500 ${isRTL ? 'ml-2' : 'mr-2'} mt-0.5`} />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default StartingBusinessForeigner;