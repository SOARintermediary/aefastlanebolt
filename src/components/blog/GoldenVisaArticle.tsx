import React from 'react';
import { Star, CheckCircle, DollarSign, Users, Building2, GraduationCap, Award, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from './BlogArticle';

const GoldenVisaArticle = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const eligibilityCategories = [
    {
      category: t('blog.goldenVisa.categories.investors.title'),
      icon: DollarSign,
      duration: t('blog.goldenVisa.categories.investors.duration'),
      requirements: t('blog.goldenVisa.categories.investors.requirements').split('|'),
      benefits: t('blog.goldenVisa.categories.investors.benefits').split('|'),
      color: "green"
    },
    {
      category: t('blog.goldenVisa.categories.entrepreneurs.title'),
      icon: Building2,
      duration: t('blog.goldenVisa.categories.entrepreneurs.duration'),
      requirements: t('blog.goldenVisa.categories.entrepreneurs.requirements').split('|'),
      benefits: t('blog.goldenVisa.categories.entrepreneurs.benefits').split('|'),
      color: "blue"
    },
    {
      category: t('blog.goldenVisa.categories.talents.title'),
      icon: Award,
      duration: t('blog.goldenVisa.categories.talents.duration'),
      requirements: t('blog.goldenVisa.categories.talents.requirements').split('|'),
      benefits: t('blog.goldenVisa.categories.talents.benefits').split('|'),
      color: "purple"
    },
    {
      category: t('blog.goldenVisa.categories.students.title'),
      icon: GraduationCap,
      duration: t('blog.goldenVisa.categories.students.duration'),
      requirements: t('blog.goldenVisa.categories.students.requirements').split('|'),
      benefits: t('blog.goldenVisa.categories.students.benefits').split('|'),
      color: "orange"
    }
  ];

  return (
    <BlogArticle
      icon={Star}
      category="blog.categories.visaImmigration"
      titleKey="blog.posts.goldenVisa.title"
      descriptionKey="blog.posts.goldenVisa.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.goldenVisa.overview.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-semibold text-yellow-800">
                {t('blog.goldenVisa.overview.duration')}
              </h3>
              <p className="text-yellow-600">
                {t('blog.goldenVisa.overview.durationValue')}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-green-800">
                {t('blog.goldenVisa.overview.family')}
              </h3>
              <p className="text-green-600">
                {t('blog.goldenVisa.overview.familyValue')}
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-blue-800">
                {t('blog.goldenVisa.overview.renewable')}
              </h3>
              <p className="text-blue-600">
                {t('blog.goldenVisa.overview.renewableValue')}
              </p>
            </div>
          </div>

          {/* Eligibility Categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {eligibilityCategories.map((category, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 ${
                  category.color === 'green'
                    ? 'border-green-200 bg-green-50'
                    : category.color === 'blue'
                    ? 'border-blue-200 bg-blue-50'
                    : category.color === 'purple'
                    ? 'border-purple-200 bg-purple-50'
                    : 'border-orange-200 bg-orange-50'
                }`}
              >
                <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <category.icon className={`h-6 w-6 ${
                    category.color === 'green'
                      ? 'text-green-600'
                      : category.color === 'blue'
                      ? 'text-blue-600'
                      : category.color === 'purple'
                      ? 'text-purple-600'
                      : 'text-orange-600'
                  } ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <h3 className={`text-xl font-semibold ${
                    category.color === 'green'
                      ? 'text-green-800'
                      : category.color === 'blue'
                      ? 'text-blue-800'
                      : category.color === 'purple'
                      ? 'text-purple-800'
                      : 'text-orange-800'
                  }`}>
                    {category.category}
                  </h3>
                </div>

                <div className={`mb-4 ${
                  category.color === 'green'
                    ? 'text-green-600'
                    : category.color === 'blue'
                    ? 'text-blue-600'
                    : category.color === 'purple'
                    ? 'text-purple-600'
                    : 'text-orange-600'
                }`}>
                  <Clock className={`inline-block h-4 w-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {category.duration}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      category.color === 'green'
                        ? 'text-green-800'
                        : category.color === 'blue'
                        ? 'text-blue-800'
                        : category.color === 'purple'
                        ? 'text-purple-800'
                        : 'text-orange-800'
                    }`}>
                      {t('blog.goldenVisa.requirements.title')}:
                    </h4>
                    <ul className="space-y-1">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <CheckCircle className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} ${
                            category.color === 'green'
                              ? 'text-green-600'
                              : category.color === 'blue'
                              ? 'text-blue-600'
                              : category.color === 'purple'
                              ? 'text-purple-600'
                              : 'text-orange-600'
                          }`} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      category.color === 'green'
                        ? 'text-green-800'
                        : category.color === 'blue'
                        ? 'text-blue-800'
                        : category.color === 'purple'
                        ? 'text-purple-800'
                        : 'text-orange-800'
                    }`}>
                      {t('blog.goldenVisa.benefits.title')}:
                    </h4>
                    <ul className="space-y-1">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Star className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'} ${
                            category.color === 'green'
                              ? 'text-green-600'
                              : category.color === 'blue'
                              ? 'text-blue-600'
                              : category.color === 'purple'
                              ? 'text-purple-600'
                              : 'text-orange-600'
                          }`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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

export default GoldenVisaArticle; 