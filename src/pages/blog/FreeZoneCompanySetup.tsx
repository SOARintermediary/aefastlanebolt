import React from 'react';
import { Building2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const FreeZoneCompanySetup = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Building2}
      category="blog.freeZoneSetup.overview.category"
      titleKey="blog.posts.freeZoneSetup.title"
      descriptionKey="blog.posts.freeZoneSetup.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default FreeZoneCompanySetup;