import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const blogPosts = [];

const categories = [];

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const getPostsByCategory = (categoryKey: string) => {
    return blogPosts.filter(post => post.categoryKey === categoryKey);
  };

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
            {t('blog.title')}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Articles by Category */}
        {categories.map((categoryKey, categoryIndex) => (
          <div key={categoryKey} className="mb-16">
            <h2 className="text-2xl font-bold text-primary mb-8 flex items-center">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-lg mr-3">
                {categoryIndex + 1}
              </span>
              {t(categoryKey)}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPostsByCategory(categoryKey).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                  onClick={() => {
                    navigate(post.path);
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <post.icon className="h-6 w-6 text-primary" />
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {t(post.categoryKey)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.readTime} {t('blog.readTime')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                      {t(post.titleKey)}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {t(post.excerptKey)}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium group-hover:text-primary-light transition-colors duration-200">
                      {t('blog.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Coming Soon Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">{t('blog.comingSoon.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('blog.comingSoon.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('blog.comingSoon.advanced.title')}</h4>
              <ul className="space-y-1">
                {['vat', 'banking', 'ip', 'tax'].map(topic => (
                  <li key={topic}>• {t(`blog.comingSoon.advanced.${topic}`)}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('blog.comingSoon.industry.title')}</h4>
              <ul className="space-y-1">
                {['tech', 'ecommerce', 'professional', 'healthcare'].map(topic => (
                  <li key={topic}>• {t(`blog.comingSoon.industry.${topic}`)}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('blog.comingSoon.strategy.title')}</h4>
              <ul className="space-y-1">
                {['entry', 'cost', 'scaling', 'exit'].map(topic => (
                  <li key={topic}>• {t(`blog.comingSoon.strategy.${topic}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('blog.cta.title')}</h3>
            <p className="text-gray-300 mb-6">
              {t('blog.cta.description')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent-dark transition-colors duration-200"
            >
              {t('blog.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;