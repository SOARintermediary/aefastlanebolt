import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface BlogArticleProps {
  children: React.ReactNode;
  icon: React.ElementType;
  category: string;
  titleKey: string;
  descriptionKey: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  children,
  icon: Icon,
  category,
  titleKey,
  descriptionKey
}) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="py-24 bg-gray-50 min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className={`flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <ArrowLeft className={isRTL ? 'ml-2 h-5 w-5 transform rotate-180' : 'mr-2 h-5 w-5'} />
          {t('blog.backToBlog')}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Icon className={`h-8 w-8 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t(category)}
            </span>
          </div>
          
          <h1 className={`text-4xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t(titleKey)}
          </h1>
          
          <p className={`text-xl text-gray-600 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
            {t(descriptionKey)}
          </p>
        </div>

        {/* Article Content */}
        <div className={`bg-white rounded-lg shadow-md p-8 mb-8 ${isRTL ? 'font-arabic' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle; 