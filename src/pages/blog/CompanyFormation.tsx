import React from 'react';
import { Building2, Clock, DollarSign, Users, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface CompanyType {
  title: string;
  description: string;
  features: string[];
  requirements: string[];
  cost: string;
  timeline: string;
}

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

interface Document {
  category: string;
  items: string[];
}

const CompanyFormation = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const companyTypes: CompanyType[] = [
    {
      title: t('blog.companyFormation.types.llc.title'),
      description: t('blog.companyFormation.types.llc.description'),
      features: t('blog.companyFormation.types.llc.features').split('|'),
      requirements: t('blog.companyFormation.types.llc.requirements').split('|'),
      cost: t('blog.companyFormation.types.llc.cost'),
      timeline: t('blog.companyFormation.types.llc.timeline')
    },
    {
      title: t('blog.companyFormation.types.fz.title'),
      description: t('blog.companyFormation.types.fz.description'),
      features: t('blog.companyFormation.types.fz.features').split('|'),
      requirements: t('blog.companyFormation.types.fz.requirements').split('|'),
      cost: t('blog.companyFormation.types.fz.cost'),
      timeline: t('blog.companyFormation.types.fz.timeline')
    },
    {
      title: t('blog.companyFormation.types.branch.title'),
      description: t('blog.companyFormation.types.branch.description'),
      features: t('blog.companyFormation.types.branch.features').split('|'),
      requirements: t('blog.companyFormation.types.branch.requirements').split('|'),
      cost: t('blog.companyFormation.types.branch.cost'),
      timeline: t('blog.companyFormation.types.branch.timeline')
    }
  ];

  const steps: Step[] = [
    {
      step: 1,
      title: t('blog.companyFormation.process.steps.0.title'),
      description: t('blog.companyFormation.process.steps.0.description'),
      duration: t('blog.companyFormation.process.steps.0.duration'),
      requirements: t('blog.companyFormation.process.steps.0.requirements').split('|')
    },
    {
      step: 2,
      title: t('blog.companyFormation.process.steps.1.title'),
      description: t('blog.companyFormation.process.steps.1.description'),
      duration: t('blog.companyFormation.process.steps.1.duration'),
      requirements: t('blog.companyFormation.process.steps.1.requirements').split('|')
    },
    {
      step: 3,
      title: t('blog.companyFormation.process.steps.2.title'),
      description: t('blog.companyFormation.process.steps.2.description'),
      duration: t('blog.companyFormation.process.steps.2.duration'),
      requirements: t('blog.companyFormation.process.steps.2.requirements').split('|')
    },
    {
      step: 4,
      title: t('blog.companyFormation.process.steps.3.title'),
      description: t('blog.companyFormation.process.steps.3.description'),
      duration: t('blog.companyFormation.process.steps.3.duration'),
      requirements: t('blog.companyFormation.process.steps.3.requirements').split('|')
    },
    {
      step: 5,
      title: t('blog.companyFormation.process.steps.4.title'),
      description: t('blog.companyFormation.process.steps.4.description'),
      duration: t('blog.companyFormation.process.steps.4.duration'),
      requirements: t('blog.companyFormation.process.steps.4.requirements').split('|')
    }
  ];

  const documents: Document[] = [
    {
      category: t('blog.companyFormation.documents.categories.0.title'),
      items: t('blog.companyFormation.documents.categories.0.items').split('|')
    },
    {
      category: t('blog.companyFormation.documents.categories.1.title'),
      items: t('blog.companyFormation.documents.categories.1.items').split('|')
    },
    {
      category: t('blog.companyFormation.documents.categories.2.title'),
      items: t('blog.companyFormation.documents.categories.2.items').split('|')
    }
  ];

  const tips = t('blog.companyFormation.tips.items').split('|');
  const notes = t('blog.companyFormation.notes.items').split('|');

  return (
    <BlogArticle
      icon={Building2}
      category="blog.companyFormation.overview.category"
      titleKey="blog.posts.companyFormation.title"
      descriptionKey="blog.posts.companyFormation.excerpt"
    >
      {/* Quick Overview */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.companyFormation.overview.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">
              {t('blog.companyFormation.overview.timeline')}
            </h3>
            <p className="text-blue-600">
              {t('blog.companyFormation.overview.timelineValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">
              {t('blog.companyFormation.overview.cost')}
            </h3>
            <p className="text-green-600">
              {t('blog.companyFormation.overview.costValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">
              {t('blog.companyFormation.overview.ownership')}
            </h3>
            <p className="text-purple-600">
              {t('blog.companyFormation.overview.ownershipValue')}
            </p>
          </div>
        </div>
      </div>

      {/* Company Types */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.companyFormation.types.title')}
        </h2>
        <div className="space-y-8">
          {companyTypes.map((type, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((req, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Setup Timeline</h4>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      {type.timeline}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Starting Cost</h4>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 text-primary mr-2" />
                      {type.cost}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Process */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.companyFormation.process.title')}
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
          {t('blog.companyFormation.documents.title')}
        </h2>
        <div className="space-y-6">
          {documents.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
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

      {/* Tips & Notes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.companyFormation.tips.title')}
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
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.companyFormation.notes.title')}
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
      </div>
    </BlogArticle>
  );
};

export default CompanyFormation; 