import React from 'react';
import { FileCheck, Clock, DollarSign, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

interface Document {
  category: string;
  documents: string[];
}

interface Cost {
  service: string;
  government: number;
  serviceFee: number;
  total: number;
}

const UAEResidenceVisaApplication = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const steps: Step[] = [
    {
      step: 1,
      title: t('blog.familyVisa.process.steps.0.title'),
      description: t('blog.familyVisa.process.steps.0.description'),
      duration: t('blog.familyVisa.process.steps.0.duration'),
      requirements: t('blog.familyVisa.process.steps.0.requirements').split('|')
    },
    {
      step: 2,
      title: t('blog.familyVisa.process.steps.1.title'),
      description: t('blog.familyVisa.process.steps.1.description'),
      duration: t('blog.familyVisa.process.steps.1.duration'),
      requirements: t('blog.familyVisa.process.steps.1.requirements').split('|')
    },
    {
      step: 3,
      title: t('blog.familyVisa.process.steps.2.title'),
      description: t('blog.familyVisa.process.steps.2.description'),
      duration: t('blog.familyVisa.process.steps.2.duration'),
      requirements: t('blog.familyVisa.process.steps.2.requirements').split('|')
    },
    {
      step: 4,
      title: t('blog.familyVisa.process.steps.3.title'),
      description: t('blog.familyVisa.process.steps.3.description'),
      duration: t('blog.familyVisa.process.steps.3.duration'),
      requirements: t('blog.familyVisa.process.steps.3.requirements').split('|')
    },
    {
      step: 5,
      title: t('blog.familyVisa.process.steps.4.title'),
      description: t('blog.familyVisa.process.steps.4.description'),
      duration: t('blog.familyVisa.process.steps.4.duration'),
      requirements: t('blog.familyVisa.process.steps.4.requirements').split('|')
    },
    {
      step: 6,
      title: t('blog.familyVisa.process.steps.5.title'),
      description: t('blog.familyVisa.process.steps.5.description'),
      duration: t('blog.familyVisa.process.steps.5.duration'),
      requirements: t('blog.familyVisa.process.steps.5.requirements').split('|')
    }
  ];

  const documents: Document[] = [
    {
      category: t('blog.familyVisa.documents.categories.0.category'),
      documents: t('blog.familyVisa.documents.categories.0.documents').split('|')
    },
    {
      category: t('blog.familyVisa.documents.categories.1.category'),
      documents: t('blog.familyVisa.documents.categories.1.documents').split('|')
    },
    {
      category: t('blog.familyVisa.documents.categories.2.category'),
      documents: t('blog.familyVisa.documents.categories.2.documents').split('|')
    }
  ];

  const costs: Cost[] = [
    {
      service: t('blog.familyVisa.costs.items.0.service'),
      government: 1190,
      serviceFee: 500,
      total: 1690
    },
    {
      service: t('blog.familyVisa.costs.items.1.service'),
      government: 1190,
      serviceFee: 500,
      total: 1690
    },
    {
      service: t('blog.familyVisa.costs.items.2.service'),
      government: 310,
      serviceFee: 200,
      total: 510
    },
    {
      service: t('blog.familyVisa.costs.items.3.service'),
      government: 580,
      serviceFee: 300,
      total: 880
    },
    {
      service: t('blog.familyVisa.costs.items.4.service'),
      government: 380,
      serviceFee: 150,
      total: 530
    }
  ];

  const notes = t('blog.familyVisa.notes.items').split('|');
  const tips = t('blog.familyVisa.tips.items').split('|');

  return (
    <BlogArticle
      icon={FileCheck}
      category="blog.familyVisa.overview.category"
      titleKey="blog.posts.residenceVisa.title"
      descriptionKey="blog.posts.residenceVisa.excerpt"
    >
      {/* Application Process */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.process.title')}
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
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                {step.duration}
              </div>
              <ul className="space-y-2">
                {step.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.documents.title')}
        </h2>
        <div className="space-y-6">
          {documents.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.documents.map((doc, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.costs.title')}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Government Fee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Fee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {costs.map((cost, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cost.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    AED {cost.government}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    AED {cost.serviceFee}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    AED {cost.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.notes.title')}
        </h2>
        <ul className="space-y-3">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{note}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Success Tips */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.tips.title')}
        </h2>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </BlogArticle>
  );
};

export default UAEResidenceVisaApplication;