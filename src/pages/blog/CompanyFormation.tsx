import React from 'react';
import { Building } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const CompanyFormation = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Building}
      category="blog.company.overview.category"
      titleKey="blog.posts.company.title"
      descriptionKey="blog.posts.company.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default CompanyFormation; 