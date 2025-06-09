import React from 'react';
import { Plane } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const VisaTypesBusinessOwners = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Plane}
      category="blog.visaTypes.overview.category"
      titleKey="blog.posts.visaTypes.title"
      descriptionKey="blog.posts.visaTypes.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default VisaTypesBusinessOwners;