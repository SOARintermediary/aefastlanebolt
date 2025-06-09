import React from 'react';
import { Briefcase, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface VisaType {
  title: string;
  duration: string;
  eligibility: string;
  benefits: string[];
  requirements: string[];
  cost: string;
}

interface ProcessStep {
  title: string;
  description: string;
  duration: string;
}

interface ChoosingPoint {
  title: string;
  points: string[];
}

const VisaTypesBusinessOwners = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const visaTypes: VisaType[] = [
    {
      title: t('blog.visaTypes.types.investor.title'),
      duration: t('blog.visaTypes.types.investor.duration'),
      eligibility: t('blog.visaTypes.types.investor.eligibility'),
      benefits: t('blog.visaTypes.types.investor.benefits').split('|'),
      requirements: t('blog.visaTypes.types.investor.requirements').split('|'),
      cost: t('blog.visaTypes.types.investor.cost')
    },
    {
      title: t('blog.visaTypes.types.employment.title'),
      duration: t('blog.visaTypes.types.employment.duration'),
      eligibility: t('blog.visaTypes.types.employment.eligibility'),
      benefits: t('blog.visaTypes.types.employment.benefits').split('|'),
      requirements: t('blog.visaTypes.types.employment.requirements').split('|'),
      cost: t('blog.visaTypes.types.employment.cost')
    },
    {
      title: t('blog.visaTypes.types.golden.title'),
      duration: t('blog.visaTypes.types.golden.duration'),
      eligibility: t('blog.visaTypes.types.golden.eligibility'),
      benefits: t('blog.visaTypes.types.golden.benefits').split('|'),
      requirements: t('blog.visaTypes.types.golden.requirements').split('|'),
      cost: t('blog.visaTypes.types.golden.cost')
    },
    {
      title: t('blog.visaTypes.types.family.title'),
      duration: t('blog.visaTypes.types.family.duration'),
      eligibility: t('blog.visaTypes.types.family.eligibility'),
      benefits: t('blog.visaTypes.types.family.benefits').split('|'),
      requirements: t('blog.visaTypes.types.family.requirements').split('|'),
      cost: t('blog.visaTypes.types.family.cost')
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      title: t('blog.visaTypes.process.step1.title'),
      description: t('blog.visaTypes.process.step1.description'),
      duration: t('blog.visaTypes.process.step1.duration')
    },
    {
      title: t('blog.visaTypes.process.step2.title'),
      description: t('blog.visaTypes.process.step2.description'),
      duration: t('blog.visaTypes.process.step2.duration')
    },
    {
      title: t('blog.visaTypes.process.step3.title'),
      description: t('blog.visaTypes.process.step3.description'),
      duration: t('blog.visaTypes.process.step3.duration')
    },
    {
      title: t('blog.visaTypes.process.step4.title'),
      description: t('blog.visaTypes.process.step4.description'),
      duration: t('blog.visaTypes.process.step4.duration')
    },
    {
      title: t('blog.visaTypes.process.step5.title'),
      description: t('blog.visaTypes.process.step5.description'),
      duration: t('blog.visaTypes.process.step5.duration')
    },
    {
      title: t('blog.visaTypes.process.step6.title'),
      description: t('blog.visaTypes.process.step6.description'),
      duration: t('blog.visaTypes.process.step6.duration')
    }
  ];

  const choosingPoints: ChoosingPoint[] = [
    {
      title: t('blog.visaTypes.choosing.investor.title'),
      points: t('blog.visaTypes.choosing.investor.points').split('|')
    },
    {
      title: t('blog.visaTypes.choosing.golden.title'),
      points: t('blog.visaTypes.choosing.golden.points').split('|')
    },
    {
      title: t('blog.visaTypes.choosing.employment.title'),
      points: t('blog.visaTypes.choosing.employment.points').split('|')
    }
  ];

  return (
    <BlogArticle
      icon={Briefcase}
      category="blog.visaTypes.overview.category"
      titleKey="blog.posts.visaTypes.title"
      descriptionKey="blog.posts.visaTypes.excerpt"
    >
      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.visaTypes.quickStats.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">
              {t('blog.visaTypes.quickStats.processing')}
            </h3>
            <p className="text-blue-600">
              {t('blog.visaTypes.quickStats.processingValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">
              {t('blog.visaTypes.quickStats.validity')}
            </h3>
            <p className="text-green-600">
              {t('blog.visaTypes.quickStats.validityValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">
              {t('blog.visaTypes.quickStats.sponsorship')}
            </h3>
            <p className="text-purple-600">
              {t('blog.visaTypes.quickStats.sponsorshipValue')}
            </p>
          </div>
        </div>
      </div>

      {/* Visa Types */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.visaTypes.types.title')}
        </h2>
        <div className="space-y-6">
          {visaTypes.map((visa, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{visa.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium mb-4">{visa.duration}</p>
                  <p className="text-sm text-gray-500">Eligibility</p>
                  <p className="font-medium mb-4">{visa.eligibility}</p>
                  <p className="text-sm text-gray-500">Cost</p>
                  <p className="font-medium">{visa.cost}</p>
                </div>
                <div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Benefits</p>
                    <ul className="space-y-2">
                      {visa.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Requirements</p>
                    <ul className="space-y-2">
                      {visa.requirements.map((requirement, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.visaTypes.process.title')}
        </h2>
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Choose */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.visaTypes.choosing.title')}
        </h2>
        <div className="space-y-6">
          {choosingPoints.map((point, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{point.title}</h3>
              <ul className="space-y-2">
                {point.points.map((item, i) => (
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
    </BlogArticle>
  );
};

export default VisaTypesBusinessOwners;