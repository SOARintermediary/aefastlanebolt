import React from 'react';
import { Rocket } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const AEFastlaneServices = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Rocket}
      category="blog.services.overview.category"
      titleKey="blog.posts.services.title"
      descriptionKey="blog.posts.services.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Content will be added from translations */}
      </div>
    </BlogArticle>
  );
};

export default AEFastlaneServices; 