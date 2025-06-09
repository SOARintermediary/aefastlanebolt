import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const BusinessActivitiesLicensing = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={FileText}
      category="blog.businessActivities.overview.category"
      titleKey="blog.posts.businessActivities.title"
      descriptionKey="blog.posts.businessActivities.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default BusinessActivitiesLicensing;