import React from 'react';
import { Building, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

interface Document {
  title: string;
  items: string[];
}

interface Cost {
  item: string;
  cost: string;
}

const MainlandBusinessLicense = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const steps: Step[] = [
    {
      step: 1,
      title: t('blog.mainlandLicense.steps.items.0.title'),
      description: t('blog.mainlandLicense.steps.items.0.description'),
      duration: t('blog.mainlandLicense.steps.items.0.duration'),
      details: t('blog.mainlandLicense.steps.items.0.details').split('|')
    },
    {
      step: 2,
      title: t('blog.mainlandLicense.steps.items.1.title'),
      description: t('blog.mainlandLicense.steps.items.1.description'),
      duration: t('blog.mainlandLicense.steps.items.1.duration'),
      details: t('blog.mainlandLicense.steps.items.1.details').split('|')
    },
    {
      step: 3,
      title: t('blog.mainlandLicense.steps.items.2.title'),
      description: t('blog.mainlandLicense.steps.items.2.description'),
      duration: t('blog.mainlandLicense.steps.items.2.duration'),
      details: t('blog.mainlandLicense.steps.items.2.details').split('|')
    },
    {
      step: 4,
      title: t('blog.mainlandLicense.steps.items.3.title'),
      description: t('blog.mainlandLicense.steps.items.3.description'),
      duration: t('blog.mainlandLicense.steps.items.3.duration'),
      details: t('blog.mainlandLicense.steps.items.3.details').split('|')
    },
    {
      step: 5,
      title: t('blog.mainlandLicense.steps.items.4.title'),
      description: t('blog.mainlandLicense.steps.items.4.description'),
      duration: t('blog.mainlandLicense.steps.items.4.duration'),
      details: t('blog.mainlandLicense.steps.items.4.details').split('|')
    },
    {
      step: 6,
      title: t('blog.mainlandLicense.steps.items.5.title'),
      description: t('blog.mainlandLicense.steps.items.5.description'),
      duration: t('blog.mainlandLicense.steps.items.5.duration'),
      details: t('blog.mainlandLicense.steps.items.5.details').split('|')
    }
  ];

  const documents: Document[] = [
    {
      title: t('blog.mainlandLicense.documents.individual.title'),
      items: t('blog.mainlandLicense.documents.individual.items').split('|')
    },
    {
      title: t('blog.mainlandLicense.documents.corporate.title'),
      items: t('blog.mainlandLicense.documents.corporate.items').split('|')
    }
  ];

  const costs: Cost[] = [
    {
      item: t('blog.mainlandLicense.costs.items.0.item'),
      cost: t('blog.mainlandLicense.costs.items.0.cost')
    },
    {
      item: t('blog.mainlandLicense.costs.items.1.item'),
      cost: t('blog.mainlandLicense.costs.items.1.cost')
    },
    {
      item: t('blog.mainlandLicense.costs.items.2.item'),
      cost: t('blog.mainlandLicense.costs.items.2.cost')
    },
    {
      item: t('blog.mainlandLicense.costs.items.3.item'),
      cost: t('blog.mainlandLicense.costs.items.3.cost')
    },
    {
      item: t('blog.mainlandLicense.costs.items.4.item'),
      cost: t('blog.mainlandLicense.costs.items.4.cost')
    }
  ];

  return (
    <BlogArticle
      icon={Building}
      category="blog.mainlandLicense.overview.category"
      titleKey="blog.posts.mainlandLicense.title"
      descriptionKey="blog.posts.mainlandLicense.excerpt"
    >
      {/* Quick Overview */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.mainlandLicense.quickOverview.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
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
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">
              {t('blog.mainlandLicense.quickOverview.ownership.title')}
            </h3>
            <p className="text-purple-600">
              {t('blog.mainlandLicense.quickOverview.ownership.value')}
            </p>
          </div>
        </div>
      </div>

      {/* Step by Step Process */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.mainlandLicense.steps.title')}
        </h2>
        
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.step} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                {step.duration}
              </div>
              {step.details && (
                <ul className="mt-4 space-y-2">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
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
          {documents.map((doc, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{doc.title}</h3>
              <ul className="space-y-3">
                {doc.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.mainlandLicense.costs.title')}
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('blog.mainlandLicense.costs.headers.item')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('blog.mainlandLicense.costs.headers.cost')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {costs.map((cost, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cost.item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    AED {cost.cost}
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

export default MainlandBusinessLicense;