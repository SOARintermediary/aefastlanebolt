import React from 'react';
import { FileText, Clock, Shield, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface VisaType {
  type: string;
  description: string;
  validity: string;
  benefits: string[];
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

interface DocumentCategory {
  category: string;
  documents: string[];
}

interface Challenge {
  challenge: string;
  solution: string;
  prevention: string;
}

const UAEResidenceVisaApplication = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const visaTypes = (t('blog.residenceVisa.types.items') || []) as VisaType[];
  const processSteps = (t('blog.residenceVisa.process.items') || []) as ProcessStep[];
  const documentCategories = (t('blog.residenceVisa.documents.items') || []) as DocumentCategory[];
  const challenges = (t('blog.residenceVisa.challenges.items') || []) as Challenge[];

  return (
    <BlogArticle
      icon={FileText}
      category="blog.residenceVisa.overview.category"
      titleKey="blog.residenceVisa.overview.title"
      descriptionKey="blog.residenceVisa.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Quick Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.residenceVisa.quickStats.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">
                {t('blog.residenceVisa.quickStats.timeline')}
              </h3>
              <p className="text-blue-600">
                {t('blog.residenceVisa.quickStats.timelineValue')}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">
                {t('blog.residenceVisa.quickStats.success')}
              </h3>
              <p className="text-green-600">
                {t('blog.residenceVisa.quickStats.successValue')}
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-purple-800">
                {t('blog.residenceVisa.quickStats.processing')}
              </h3>
              <p className="text-purple-600">
                {t('blog.residenceVisa.quickStats.processingValue')}
              </p>
            </div>
          </div>
        </div>

        {/* Visa Types */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.residenceVisa.types.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {visaTypes.map((visa, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{visa.type}</h3>
                <p className="text-gray-600 mb-3">{visa.description}</p>
                <div className="mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Clock className="w-3 h-3 mr-1" />
                    {visa.validity}
                  </span>
                </div>
                <ul className="space-y-1">
                  {visa.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className={`flex items-center text-sm text-gray-700 ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.residenceVisa.process.title')}
          </h2>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors duration-200">
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
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
                      {step.requirements.map((requirement, reqIndex) => (
                        <div key={reqIndex} className={`flex items-center text-sm text-gray-500 ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Checklist */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.residenceVisa.documents.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {documentCategories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.residenceVisa.challenges.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3 mb-3`}>
                  <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{item.challenge}</h3>
                </div>
                <div className="space-y-2">
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                    <span className="font-medium text-gray-700">Solution:</span>
                    <span className="text-gray-600">{item.solution}</span>
                  </div>
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                    <span className="font-medium text-gray-700">Prevention:</span>
                    <span className="text-gray-600">{item.prevention}</span>
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

export default UAEResidenceVisaApplication;