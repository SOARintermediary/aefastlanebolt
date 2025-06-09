import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceForm from '../components/ServiceForm';

const HrSolutions = () => {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {t('services.hr.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          {t('services.hr.comingSoon')}
        </p>
        <ServiceForm service="hr-solutions" />
      </div>
    </div>
  );
};

export default HrSolutions;