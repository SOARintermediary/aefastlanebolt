import React from 'react';
import { FileText, Building, Briefcase, Store, Factory, Plane, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface License {
  title: string;
  description: string;
  activities: string[];
  icon: typeof Building;
}

interface PopularActivity {
  activity: string;
  code: string;
  description: string;
}

const BusinessActivitiesLicensing = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const affects = t('blog.businessActivities.affects.items').split('|');
  const considerations = t('blog.businessActivities.considerations.items').split('|');

  const licenses: License[] = [
    {
      title: t('blog.businessActivities.licenses.commercial.title'),
      description: t('blog.businessActivities.licenses.commercial.description'),
      activities: t('blog.businessActivities.licenses.commercial.activities').split('|'),
      icon: Store
    },
    {
      title: t('blog.businessActivities.licenses.professional.title'),
      description: t('blog.businessActivities.licenses.professional.description'),
      activities: t('blog.businessActivities.licenses.professional.activities').split('|'),
      icon: Briefcase
    },
    {
      title: t('blog.businessActivities.licenses.industrial.title'),
      description: t('blog.businessActivities.licenses.industrial.description'),
      activities: t('blog.businessActivities.licenses.industrial.activities').split('|'),
      icon: Factory
    },
    {
      title: t('blog.businessActivities.licenses.tourism.title'),
      description: t('blog.businessActivities.licenses.tourism.description'),
      activities: t('blog.businessActivities.licenses.tourism.activities').split('|'),
      icon: Plane
    }
  ];

  const popularActivities: PopularActivity[] = [
    {
      activity: t('blog.businessActivities.popular.items.0.activity'),
      code: t('blog.businessActivities.popular.items.0.code'),
      description: t('blog.businessActivities.popular.items.0.description')
    },
    {
      activity: t('blog.businessActivities.popular.items.1.activity'),
      code: t('blog.businessActivities.popular.items.1.code'),
      description: t('blog.businessActivities.popular.items.1.description')
    },
    {
      activity: t('blog.businessActivities.popular.items.2.activity'),
      code: t('blog.businessActivities.popular.items.2.code'),
      description: t('blog.businessActivities.popular.items.2.description')
    },
    {
      activity: t('blog.businessActivities.popular.items.3.activity'),
      code: t('blog.businessActivities.popular.items.3.code'),
      description: t('blog.businessActivities.popular.items.3.description')
    },
    {
      activity: t('blog.businessActivities.popular.items.4.activity'),
      code: t('blog.businessActivities.popular.items.4.code'),
      description: t('blog.businessActivities.popular.items.4.description')
    },
    {
      activity: t('blog.businessActivities.popular.items.5.activity'),
      code: t('blog.businessActivities.popular.items.5.code'),
      description: t('blog.businessActivities.popular.items.5.description')
    }
  ];

  return (
    <BlogArticle
      icon={FileText}
      category="blog.businessActivities.overview.category"
      titleKey="blog.posts.businessActivities.title"
      descriptionKey="blog.posts.businessActivities.excerpt"
    >
      {/* Understanding Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {t('blog.businessActivities.understanding.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('blog.businessActivities.understanding.description')}
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {t('blog.businessActivities.affects.title')}
        </h3>
        <ul className="space-y-3">
          {affects.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Considerations */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {t('blog.businessActivities.considerations.title')}
        </h2>
        <ul className="space-y-3">
          {considerations.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* License Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.businessActivities.licenses.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {licenses.map((license, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <license.icon className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{license.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{license.description}</p>
              <ul className="space-y-2">
                {license.activities.map((activity, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Activities */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.businessActivities.popular.title')}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('blog.businessActivities.popular.activity')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('blog.businessActivities.popular.code')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('blog.businessActivities.popular.description')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {popularActivities.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.activity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.code}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BlogArticle>
  );
};

export default BusinessActivitiesLicensing;