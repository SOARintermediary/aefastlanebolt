import React from 'react';
import { Building } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const MainlandBusinessLicense = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Building}
      category="blog.mainlandLicense.overview.category"
      titleKey="blog.posts.mainlandLicense.title"
      descriptionKey="blog.posts.mainlandLicense.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default MainlandBusinessLicense;