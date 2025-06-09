import React from 'react';
import { Plane, CheckCircle, Users, Building2, Star, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface VisaType {
  type: string;
  duration: string;
  eligibility: string;
  benefits: string[];
  requirements: string[];
  cost: string;
  color: string;
}

interface BusinessBenefit {
  icon: typeof Building2;
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

const VisaTypesBusinessOwners = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const visaTypes = [
    {
      type: t('blog.visaTypes.types.investor.title'),
      duration: t('blog.visaTypes.types.investor.duration'),
      eligibility: t('blog.visaTypes.types.investor.eligibility'),
      benefits: t('blog.visaTypes.types.investor.benefits').split('|'),
      requirements: t('blog.visaTypes.types.investor.requirements').split('|'),
      cost: t('blog.visaTypes.types.investor.cost'),
      color: 'blue'
    },
    {
      type: t('blog.visaTypes.types.employment.title'),
      duration: t('blog.visaTypes.types.employment.duration'),
      eligibility: t('blog.visaTypes.types.employment.eligibility'),
      benefits: t('blog.visaTypes.types.employment.benefits').split('|'),
      requirements: t('blog.visaTypes.types.employment.requirements').split('|'),
      cost: t('blog.visaTypes.types.employment.cost'),
      color: 'green'
    },
    {
      type: t('blog.visaTypes.types.golden.title'),
      duration: t('blog.visaTypes.types.golden.duration'),
      eligibility: t('blog.visaTypes.types.golden.eligibility'),
      benefits: t('blog.visaTypes.types.golden.benefits').split('|'),
      requirements: t('blog.visaTypes.types.golden.requirements').split('|'),
      cost: t('blog.visaTypes.types.golden.cost'),
      color: 'yellow'
    },
    {
      type: t('blog.visaTypes.types.family.title'),
      duration: t('blog.visaTypes.types.family.duration'),
      eligibility: t('blog.visaTypes.types.family.eligibility'),
      benefits: t('blog.visaTypes.types.family.benefits').split('|'),
      requirements: t('blog.visaTypes.types.family.requirements').split('|'),
      cost: t('blog.visaTypes.types.family.cost'),
      color: 'purple'
    }
  ];

  const businessBenefits = [
    {
      icon: Building2,
      title: t('blog.visaTypes.benefits.flexibility.title'),
      description: t('blog.visaTypes.benefits.flexibility.description')
    },
    {
      icon: Users,
      title: t('blog.visaTypes.benefits.team.title'),
      description: t('blog.visaTypes.benefits.team.description')
    },
    {
      icon: Star,
      title: t('blog.visaTypes.benefits.quality.title'),
      description: t('blog.visaTypes.benefits.quality.description')
    },
    {
      icon: Plane,
      title: t('blog.visaTypes.benefits.mobility.title'),
      description: t('blog.visaTypes.benefits.mobility.description')
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: t('blog.visaTypes.process.step1.title'),
      description: t('blog.visaTypes.process.step1.description'),
      duration: t('blog.visaTypes.process.step1.duration')
    },
    {
      step: 2,
      title: t('blog.visaTypes.process.step2.title'),
      description: t('blog.visaTypes.process.step2.description'),
      duration: t('blog.visaTypes.process.step2.duration')
    },
    {
      step: 3,
      title: t('blog.visaTypes.process.step3.title'),
      description: t('blog.visaTypes.process.step3.description'),
      duration: t('blog.visaTypes.process.step3.duration')
    },
    {
      step: 4,
      title: t('blog.visaTypes.process.step4.title'),
      description: t('blog.visaTypes.process.step4.description'),
      duration: t('blog.visaTypes.process.step4.duration')
    },
    {
      step: 5,
      title: t('blog.visaTypes.process.step5.title'),
      description: t('blog.visaTypes.process.step5.description'),
      duration: t('blog.visaTypes.process.step5.duration')
    },
    {
      step: 6,
      title: t('blog.visaTypes.process.step6.title'),
      description: t('blog.visaTypes.process.step6.description'),
      duration: t('blog.visaTypes.process.step6.duration')
    }
  ];

  return (
    <BlogArticle
      icon={Plane}
      category="blog.visaTypes.overview.category"
      titleKey="blog.visaTypes.overview.title"
      descriptionKey="blog.visaTypes.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Quick Overview */}
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
          
          <div className="grid md:grid-cols-2 gap-6">
            {visaTypes.map((visa, index) => (
              <div key={index} className={`border-l-4 border-${visa.color}-500 bg-${visa.color}-50 p-6 rounded-r-lg`}>
                <h3 className={`text-xl font-semibold text-${visa.color}-800 mb-2`}>{visa.type}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-${visa.color}-700 font-medium`}>{visa.duration}</span>
                    <span className={`text-${visa.color}-700`}>{visa.cost}</span>
                  </div>
                  
                  <p className={`text-${visa.color}-600`}>{visa.eligibility}</p>
                  
                  <div>
                    <h4 className={`font-semibold text-${visa.color}-800 mb-2`}>Benefits</h4>
                    <ul className="space-y-1">
                      {visa.benefits.map((benefit, benIndex) => (
                        <li key={benIndex} className={`flex items-center text-${visa.color}-700 text-sm`}>
                          <CheckCircle className="h-3 w-3 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-${visa.color}-800 mb-2`}>Requirements</h4>
                    <ul className="space-y-1">
                      {visa.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className={`flex items-center text-${visa.color}-700 text-sm`}>
                          <CheckCircle className="h-3 w-3 mr-2" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.visaTypes.benefits.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
            {applicationProcess.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200">
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
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Choosing the Right Visa */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.visaTypes.choosing.title')}
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('blog.visaTypes.choosing.investor.title')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {t('blog.visaTypes.choosing.investor.points').split('|').map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('blog.visaTypes.choosing.golden.title')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {t('blog.visaTypes.choosing.golden.points').split('|').map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('blog.visaTypes.choosing.employment.title')}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {t('blog.visaTypes.choosing.employment.points').split('|').map((point, index) => (
                  <li key={index}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default VisaTypesBusinessOwners;