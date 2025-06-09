import React from 'react';
import { FileText, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
}

interface CostItem {
  item: string;
  cost: string;
}

const MainlandBusinessLicense = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const steps = (t('blog.mainlandLicense.steps.items') || []) as unknown as Step[];
  const individualDocs = (t('blog.mainlandLicense.documents.individual.items') || []) as unknown as string[];
  const corporateDocs = (t('blog.mainlandLicense.documents.corporate.items') || []) as unknown as string[];
  const costItems = (t('blog.mainlandLicense.costs.items') || []) as unknown as CostItem[];

  return (
    <BlogArticle
      icon={FileText}
      category="blog.mainlandLicense.overview.category"
      titleKey="blog.mainlandLicense.overview.title"
      descriptionKey="blog.mainlandLicense.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.mainlandLicense.quickOverview.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">
                {t('blog.mainlandLicense.quickOverview.timeline.title')}
              </h3>
              <p className="text-blue-600">
                {t('blog.mainlandLicense.quickOverview.timeline.value')}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">
                {t('blog.mainlandLicense.quickOverview.cost.title')}
              </h3>
              <p className="text-green-600">
                {t('blog.mainlandLicense.quickOverview.cost.value')}
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">
                {t('blog.mainlandLicense.quickOverview.ownership.title')}
              </h3>
              <p className="text-purple-600">
                {t('blog.mainlandLicense.quickOverview.ownership.value')}
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.mainlandLicense.steps.title')}
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200`}>
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.mainlandLicense.documents.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('blog.mainlandLicense.documents.individual.title')}
              </h3>
              <ul className="space-y-2">
                {individualDocs.map((doc, index) => (
                  <li key={index} className={`flex items-center ${isRTL ? 'space-x-reverse' : ''}`}>
                    <CheckCircle className={`h-5 w-5 text-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('blog.mainlandLicense.documents.corporate.title')}
              </h3>
              <ul className="space-y-2">
                {corporateDocs.map((doc, index) => (
                  <li key={index} className={`flex items-center ${isRTL ? 'space-x-reverse' : ''}`}>
                    <CheckCircle className={`h-5 w-5 text-green-500 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.mainlandLicense.costs.title')}
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.mainlandLicense.costs.headers.item')}
                  </th>
                  <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('blog.mainlandLicense.costs.headers.cost')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.item}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default MainlandBusinessLicense;