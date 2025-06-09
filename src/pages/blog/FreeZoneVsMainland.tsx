import React from 'react';
import { Building2, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

const FreeZoneVsMainland = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <BlogArticle
      icon={Building2}
      category="blog.categories.setupGuides"
      titleKey="blog.posts.freeZoneVsMainland.title"
      descriptionKey="blog.posts.freeZoneVsMainland.excerpt"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        <h2 className="text-2xl font-bold text-primary mb-4">
          {t('blog.freeZoneVsMainland.basics.title')}
        </h2>
        
        <p className="mb-6">
          {t('blog.freeZoneVsMainland.basics.description')}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-green-200 rounded-lg p-6 bg-green-50">
            <h3 className={`text-xl font-semibold text-green-800 mb-3 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <CheckCircle className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('blog.freeZoneVsMainland.freeZone.title')}
            </h3>
            <ul className="space-y-2 text-green-700">
              {t('blog.freeZoneVsMainland.freeZone.benefits').split('|').map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
            <h3 className={`text-xl font-semibold text-blue-800 mb-3 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Building2 className={`h-6 w-6 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('blog.freeZoneVsMainland.mainland.title')}
            </h3>
            <ul className="space-y-2 text-blue-700">
              {t('blog.freeZoneVsMainland.mainland.benefits').split('|').map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-4">
          {t('blog.freeZoneVsMainland.differences.title')}
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.aspect')}
                </th>
                <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.freeZone')}
                </th>
                <th className={`px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.mainland')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.ownership')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-green-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.ownershipFreeZone')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.ownershipMainland')}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.marketAccess')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-red-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.marketAccessFreeZone')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-green-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.marketAccessMainland')}
                </td>
              </tr>
              <tr>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.location')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-red-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.locationFreeZone')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-green-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.locationMainland')}
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.visa')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.visaFreeZone')}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm text-blue-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('blog.freeZoneVsMainland.differences.visaMainland')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
            <AlertCircle className={`h-6 w-6 text-yellow-600 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                {t('blog.freeZoneVsMainland.consideration.title')}
              </h3>
              <p className="text-yellow-700">
                {t('blog.freeZoneVsMainland.consideration.description')}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-4">
          {t('blog.freeZoneVsMainland.choose.title')}
        </h2>

        <div className="space-y-6 mb-8">
          <div className={`border-l-4 border-green-500 pl-6 ${isRTL ? 'border-l-0 border-r-4 pr-6 pl-0' : ''}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('blog.freeZoneVsMainland.chooseFreeZone.title')}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {t('blog.freeZoneVsMainland.chooseFreeZone.points').split('|').map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>

          <div className={`border-l-4 border-blue-500 pl-6 ${isRTL ? 'border-l-0 border-r-4 pr-6 pl-0' : ''}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('blog.freeZoneVsMainland.chooseMainland.title')}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {t('blog.freeZoneVsMainland.chooseMainland.points').split('|').map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-4">
          {t('blog.freeZoneVsMainland.freeZones.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {t('blog.freeZoneVsMainland.freeZones.dmcc')}
            </h4>
            <p className="text-sm text-gray-600">
              {t('blog.freeZoneVsMainland.freeZones.dmccDesc')}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {t('blog.freeZoneVsMainland.freeZones.difc')}
            </h4>
            <p className="text-sm text-gray-600">
              {t('blog.freeZoneVsMainland.freeZones.difcDesc')}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {t('blog.freeZoneVsMainland.freeZones.rakez')}
            </h4>
            <p className="text-sm text-gray-600">
              {t('blog.freeZoneVsMainland.freeZones.rakezDesc')}
            </p>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            {t('blog.freeZoneVsMainland.needHelp.title')}
          </h3>
          <p className="mb-4">
            {t('blog.freeZoneVsMainland.needHelp.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 bg-accent text-primary rounded-md hover:bg-accent-dark transition-colors duration-200"
          >
            {t('blog.freeZoneVsMainland.needHelp.cta')}
          </a>
        </div>
      </div>
    </BlogArticle>
  );
};

export default FreeZoneVsMainland;