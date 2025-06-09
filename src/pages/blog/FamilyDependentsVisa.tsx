import React from 'react';
import { Users, Clock, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Eligibility {
  category: string;
  requirements: string[];
  salary: string;
  documents: string[];
}

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

interface Cost {
  service: string;
  amount: string;
  notes: string[];
}

const FamilyDependentsVisa = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const eligibilityCategories: Eligibility[] = [
    {
      category: t('blog.familyVisa.eligibility.spouse.category'),
      requirements: t('blog.familyVisa.eligibility.spouse.requirements').split('|'),
      salary: t('blog.familyVisa.eligibility.spouse.salary'),
      documents: t('blog.familyVisa.eligibility.spouse.documents').split('|')
    },
    {
      category: t('blog.familyVisa.eligibility.children.category'),
      requirements: t('blog.familyVisa.eligibility.children.requirements').split('|'),
      salary: t('blog.familyVisa.eligibility.children.salary'),
      documents: t('blog.familyVisa.eligibility.children.documents').split('|')
    },
    {
      category: t('blog.familyVisa.eligibility.parents.category'),
      requirements: t('blog.familyVisa.eligibility.parents.requirements').split('|'),
      salary: t('blog.familyVisa.eligibility.parents.salary'),
      documents: t('blog.familyVisa.eligibility.parents.documents').split('|')
    }
  ];

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
    }
  ];

  const costs: Cost[] = [
    {
      service: t('blog.familyVisa.costs.items.0.service'),
      amount: t('blog.familyVisa.costs.items.0.amount'),
      notes: t('blog.familyVisa.costs.items.0.notes').split('|')
    },
    {
      service: t('blog.familyVisa.costs.items.1.service'),
      amount: t('blog.familyVisa.costs.items.1.amount'),
      notes: t('blog.familyVisa.costs.items.1.notes').split('|')
    },
    {
      service: t('blog.familyVisa.costs.items.2.service'),
      amount: t('blog.familyVisa.costs.items.2.amount'),
      notes: t('blog.familyVisa.costs.items.2.notes').split('|')
    }
  ];

  const tips = t('blog.familyVisa.tips.items').split('|');
  const notes = t('blog.familyVisa.notes.items').split('|');

  return (
    <BlogArticle
      icon={Users}
      category="blog.familyVisa.overview.category"
      titleKey="blog.posts.familyVisa.title"
      descriptionKey="blog.posts.familyVisa.excerpt"
    >
      {/* Quick Overview */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.overview.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-semibold text-blue-800">
              {t('blog.familyVisa.overview.processing')}
            </h3>
            <p className="text-blue-600">
              {t('blog.familyVisa.overview.processingValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-800">
              {t('blog.familyVisa.overview.cost')}
            </h3>
            <p className="text-green-600">
              {t('blog.familyVisa.overview.costValue')}
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-semibold text-purple-800">
              {t('blog.familyVisa.overview.validity')}
            </h3>
            <p className="text-purple-600">
              {t('blog.familyVisa.overview.validityValue')}
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility Categories */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.eligibility.title')}
        </h2>
        <div className="space-y-8">
          {eligibilityCategories.map((category, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
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
                    <h4 className="font-medium text-gray-900 mb-2">Minimum Salary</h4>
                    <p className="text-gray-600">{category.salary}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Required Documents</h4>
                  <ul className="space-y-2">
                    {category.documents.map((doc, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Costs */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.familyVisa.costs.title')}
        </h2>
        <div className="space-y-6">
          {costs.map((cost, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{cost.service}</h3>
                <span className="text-lg font-bold text-primary">{cost.amount}</span>
              </div>
              <ul className="space-y-2">
                {cost.notes.map((note, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{note}</span>
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
        <div className="bg-white rounded-lg shadow-md p-8">
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
      </div>
    </BlogArticle>
  );
};

export default FamilyDependentsVisa;