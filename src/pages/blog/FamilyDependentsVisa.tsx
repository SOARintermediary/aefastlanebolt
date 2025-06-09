import React from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const FamilyDependentsVisa = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Users}
      category="blog.visaTypes.overview.category"
      titleKey="blog.posts.familyVisa.title"
      descriptionKey="blog.posts.familyVisa.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default FamilyDependentsVisa;