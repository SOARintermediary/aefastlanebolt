import React from 'react';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface BlogArticleProps {
  icon: LucideIcon;
  category: string;
  titleKey: string;
  descriptionKey: string;
  children?: React.ReactNode;
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  icon: Icon,
  category,
  titleKey,
  descriptionKey,
  children
}) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`py-24 bg-gray-50 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200"
        >
          <ArrowLeft className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {isRTL ? 'العودة إلى المدونة' : 'Back to Blog'}
        </button>

        {/* Article Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <Icon className={`h-8 w-8 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {t(category)}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t(titleKey)}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {t(descriptionKey)}
          </p>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle; 