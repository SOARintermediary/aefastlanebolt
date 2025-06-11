import React from 'react';
import { Building, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const MainlandBusinessLicense = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const whyChooseBenefits = t('blog.mainlandLicense.whyChoose.benefits').split('|');
  const legalStructureTypes = t('blog.mainlandLicense.stepByStep.step2.types').split('|');
  const requiredDocuments = t('blog.mainlandLicense.documents.list').split('|');
  const aefastlaneBenefits = t('blog.mainlandLicense.whyAEFastLane.benefits').split('|');

  const steps = [
    {
      title: t('blog.mainlandLicense.stepByStep.step1.title'),
      description: t('blog.mainlandLicense.stepByStep.step1.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step2.title'),
      description: t('blog.mainlandLicense.stepByStep.step2.description'),
      types: legalStructureTypes,
      note: t('blog.mainlandLicense.stepByStep.step2.note')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step3.title'),
      description: t('blog.mainlandLicense.stepByStep.step3.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step4.title'),
      description: t('blog.mainlandLicense.stepByStep.step4.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step5.title'),
      description: t('blog.mainlandLicense.stepByStep.step5.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step6.title'),
      description: t('blog.mainlandLicense.stepByStep.step6.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step7.title'),
      description: t('blog.mainlandLicense.stepByStep.step7.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step8.title'),
      description: t('blog.mainlandLicense.stepByStep.step8.description')
    },
    {
      title: t('blog.mainlandLicense.stepByStep.step9.title'),
      description: t('blog.mainlandLicense.stepByStep.step9.description')
    }
  ];

  return (
    <BlogArticle
      icon={Building}
      category="blog.mainlandLicense.overview.category"
      titleKey="blog.posts.mainlandLicense.title"
      descriptionKey="blog.posts.mainlandLicense.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('blog.mainlandLicense.intro')}
          </p>
        </div>

        {/* Why Choose a Mainland License */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.mainlandLicense.whyChoose.title')}
          </h2>
          
          <p className="text-gray-700 mb-6">
            {t('blog.mainlandLicense.whyChoose.description')}
          </p>
          
          <ul className="space-y-3 mb-6">
            {whyChooseBenefits.map((benefit, index) => (
              <li key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-gray-600 italic">
            {t('blog.mainlandLicense.whyChoose.conclusion')}
          </p>
        </div>

        {/* Step-by-Step Guide */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-8">
            {t('blog.mainlandLicense.stepByStep.title')}
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {step.description}
                </p>
                
                {step.types && (
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {step.types.map((type, typeIndex) => (
                        <li key={typeIndex} className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          <span className="text-gray-700">{type}</span>
                        </li>
                      ))}
                    </ul>
                    {step.note && (
                      <p className="text-sm text-gray-600 mt-3 italic">
                        {step.note}
                      </p>
                    )}
                  </div>
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
          
          <div className="grid md:grid-cols-2 gap-4">
            {requiredDocuments.map((document, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3 p-3 bg-gray-50 rounded-lg`}>
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{document}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work with AEFastLane */}
        <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            {t('blog.mainlandLicense.whyAEFastLane.title')}
          </h2>
          
          <p className="text-white/90 mb-6 text-lg">
            {t('blog.mainlandLicense.whyAEFastLane.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {aefastlaneBenefits.map((benefit, index) => (
              <div key={index} className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm`}>
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <p className="text-white/90 mb-6">
            {t('blog.mainlandLicense.whyAEFastLane.conclusion')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200 font-semibold"
            >
              <Building className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('common.contactUs')}
            </a>
            <a
              href="tel:+971-XXX-XXX-XXX"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200 font-semibold"
            >
              📞 {t('blog.mainlandLicense.whyAEFastLane.cta')}
            </a>
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default MainlandBusinessLicense;