import React from 'react';
import { Award, Star, DollarSign, Users, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Category {
  title: string;
  description: string;
  requirements: string[];
  investment: string;
  benefits: string[];
}

interface Benefit {
  icon: typeof Star;
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  documents: string[];
}

const GoldenVisaEligibility = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const categories: Category[] = [
    {
      title: t('blog.goldenVisa.categories.investor.title'),
      description: t('blog.goldenVisa.categories.investor.description'),
      requirements: t('blog.goldenVisa.categories.investor.requirements').split('|'),
      investment: t('blog.goldenVisa.categories.investor.investment'),
      benefits: t('blog.goldenVisa.categories.investor.benefits').split('|')
    },
    {
      title: t('blog.goldenVisa.categories.entrepreneur.title'),
      description: t('blog.goldenVisa.categories.entrepreneur.description'),
      requirements: t('blog.goldenVisa.categories.entrepreneur.requirements').split('|'),
      investment: t('blog.goldenVisa.categories.entrepreneur.investment'),
      benefits: t('blog.goldenVisa.categories.entrepreneur.benefits').split('|')
    },
    {
      title: t('blog.goldenVisa.categories.professional.title'),
      description: t('blog.goldenVisa.categories.professional.description'),
      requirements: t('blog.goldenVisa.categories.professional.requirements').split('|'),
      investment: t('blog.goldenVisa.categories.professional.investment'),
      benefits: t('blog.goldenVisa.categories.professional.benefits').split('|')
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: Star,
      title: t('blog.goldenVisa.benefits.items.0.title'),
      description: t('blog.goldenVisa.benefits.items.0.description')
    },
    {
      icon: Users,
      title: t('blog.goldenVisa.benefits.items.1.title'),
      description: t('blog.goldenVisa.benefits.items.1.description')
    },
    {
      icon: DollarSign,
      title: t('blog.goldenVisa.benefits.items.2.title'),
      description: t('blog.goldenVisa.benefits.items.2.description')
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      step: 1,
      title: t('blog.goldenVisa.process.steps.0.title'),
      description: t('blog.goldenVisa.process.steps.0.description'),
      duration: t('blog.goldenVisa.process.steps.0.duration'),
      documents: t('blog.goldenVisa.process.steps.0.documents').split('|')
    },
    {
      step: 2,
      title: t('blog.goldenVisa.process.steps.1.title'),
      description: t('blog.goldenVisa.process.steps.1.description'),
      duration: t('blog.goldenVisa.process.steps.1.duration'),
      documents: t('blog.goldenVisa.process.steps.1.documents').split('|')
    },
    {
      step: 3,
      title: t('blog.goldenVisa.process.steps.2.title'),
      description: t('blog.goldenVisa.process.steps.2.description'),
      duration: t('blog.goldenVisa.process.steps.2.duration'),
      documents: t('blog.goldenVisa.process.steps.2.documents').split('|')
    },
    {
      step: 4,
      title: t('blog.goldenVisa.process.steps.3.title'),
      description: t('blog.goldenVisa.process.steps.3.description'),
      duration: t('blog.goldenVisa.process.steps.3.duration'),
      documents: t('blog.goldenVisa.process.steps.3.documents').split('|')
    }
  ];

  return (
    <BlogArticle
      icon={Award}
      category="blog.goldenVisa.overview.category"
      titleKey="blog.posts.goldenVisa.title"
      descriptionKey="blog.posts.goldenVisa.excerpt"
    >
      {/* Key Benefits */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.goldenVisa.benefits.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-primary/5 rounded-lg">
              <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility Categories */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.goldenVisa.categories.title')}
        </h2>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {category.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Investment Requirement</h4>
                    <p className="text-gray-600">{category.investment}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
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
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.goldenVisa.process.title')}
        </h2>
        <div className="space-y-6">
          {processSteps.map((step) => (
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
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Required Documents</h4>
                <ul className="space-y-2">
                  {step.documents.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlogArticle>
  );
};

export default GoldenVisaEligibility;