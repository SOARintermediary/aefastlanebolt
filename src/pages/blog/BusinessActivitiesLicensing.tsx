import React from 'react';
import { BarChart3, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface PopularActivity {
  activity: string;
  code: string;
  description: string;
}

const BusinessActivitiesLicensing = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const licenseTypes = [
    {
      type: t('blog.businessActivities.licenses.commercial.title'),
      description: t('blog.businessActivities.licenses.commercial.description'),
      activities: t('blog.businessActivities.licenses.commercial.activities').split('|'),
      color: 'blue'
    },
    {
      type: t('blog.businessActivities.licenses.professional.title'),
      description: t('blog.businessActivities.licenses.professional.description'),
      activities: t('blog.businessActivities.licenses.professional.activities').split('|'),
      color: 'green'
    },
    {
      type: t('blog.businessActivities.licenses.industrial.title'),
      description: t('blog.businessActivities.licenses.industrial.description'),
      activities: t('blog.businessActivities.licenses.industrial.activities').split('|'),
      color: 'purple'
    },
    {
      type: t('blog.businessActivities.licenses.tourism.title'),
      description: t('blog.businessActivities.licenses.tourism.description'),
      activities: t('blog.businessActivities.licenses.tourism.activities').split('|'),
      color: 'orange'
    }
  ];

  const popularActivities = (t('blog.businessActivities.popular.items') || []) as unknown as PopularActivity[];

  const affectItems = t('blog.businessActivities.affects.items').split('|');
  const considerationItems = t('blog.businessActivities.considerations.items').split('|');

  return (
    <BlogArticle
      icon={BarChart3}
      category="blog.businessActivities.overview.category"
      titleKey="blog.businessActivities.overview.title"
      descriptionKey="blog.businessActivities.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Understanding Business Activities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.businessActivities.understanding.title')}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              {t('blog.businessActivities.understanding.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  {t('blog.businessActivities.affects.title')}
                </h3>
                <ul className="space-y-2 text-blue-700">
                  {affectItems.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  {t('blog.businessActivities.considerations.title')}
                </h3>
                <ul className="space-y-2 text-green-700">
                  {considerationItems.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* License Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.businessActivities.licenses.title')}
          </h2>
          
          <div className="space-y-6">
            {licenseTypes.map((license, index) => (
              <div key={index} className={`border-l-4 border-${license.color}-500 bg-${license.color}-50 p-6 rounded-r-lg`}>
                <h3 className={`text-xl font-semibold text-${license.color}-800 mb-2`}>{license.type}</h3>
                <p className={`text-${license.color}-700 mb-4`}>{license.description}</p>
                <div className="flex flex-wrap gap-2">
                  {license.activities.map((activity, actIndex) => (
                    <span key={actIndex} className={`px-3 py-1 bg-${license.color}-100 text-${license.color}-800 rounded-full text-sm`}>
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Activities */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.businessActivities.popular.title')}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.businessActivities.popular.activity')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.businessActivities.popular.code')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.businessActivities.popular.description')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {popularActivities.map((item: PopularActivity, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.activity}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.code}
                    </td>
                    <td className={`px-6 py-4 text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.businessActivities.selection.title')}
          </h2>
          
          <div className="space-y-6">
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('blog.businessActivities.selection.step1.title')}
                </h3>
                <p className="text-gray-600">
                  {t('blog.businessActivities.selection.step1.description')}
                </p>
              </div>
            </div>
            
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('blog.businessActivities.selection.step2.title')}
                </h3>
                <p className="text-gray-600">
                  {t('blog.businessActivities.selection.step2.description')}
                </p>
              </div>
            </div>
            
            <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('blog.businessActivities.selection.step3.title')}
                </h3>
                <p className="text-gray-600">
                  {t('blog.businessActivities.selection.step3.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default BusinessActivitiesLicensing;