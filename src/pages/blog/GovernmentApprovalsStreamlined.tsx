import React from 'react';
import { FileCheck, Clock, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface ApprovalType {
  title: string;
  description: string;
  requirements: string[];
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

interface Challenge {
  challenge: string;
  solution: string;
  impact: string;
}

const GovernmentApprovalsStreamlined = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const approvalTypes = (t('blog.govApprovals.types.items') || []) as ApprovalType[];
  const processSteps = (t('blog.govApprovals.process.items') || []) as ProcessStep[];
  const bestPractices = (t('blog.govApprovals.tips.items') || []) as string[];
  const challenges = (t('blog.govApprovals.common.items') || []) as Challenge[];

  return (
    <BlogArticle
      icon={FileCheck}
      category="blog.govApprovals.overview.category"
      titleKey="blog.govApprovals.overview.title"
      descriptionKey="blog.govApprovals.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.govApprovals.quickStats.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">
                {t('blog.govApprovals.quickStats.processing')}
              </h3>
              <p className="text-blue-600">
                {t('blog.govApprovals.quickStats.processingValue')}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">
                {t('blog.govApprovals.quickStats.validity')}
              </h3>
              <p className="text-green-600">
                {t('blog.govApprovals.quickStats.validityValue')}
              </p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-semibold text-yellow-800">
                {t('blog.govApprovals.quickStats.cost')}
              </h3>
              <p className="text-yellow-600">
                {t('blog.govApprovals.quickStats.costValue')}
              </p>
            </div>
          </div>
        </div>

        {/* Types of Approvals */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.govApprovals.types.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {approvalTypes.map((type, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Approval Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.govApprovals.process.title')}
          </h2>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200`}>
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.govApprovals.tips.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{practice}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.govApprovals.common.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.challenge}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="font-medium text-gray-700">Solution:</span>
                    <span className="text-gray-600">{challenge.solution}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="font-medium text-gray-700">Impact:</span>
                    <span className="text-gray-600">{challenge.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default GovernmentApprovalsStreamlined;