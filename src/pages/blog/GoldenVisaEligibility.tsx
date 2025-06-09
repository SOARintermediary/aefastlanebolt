import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const GoldenVisaEligibility = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Star}
      category="blog.visaTypes.overview.category"
      titleKey="blog.posts.goldenVisa.title"
      descriptionKey="blog.posts.goldenVisa.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default GoldenVisaEligibility;