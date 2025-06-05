import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="text-primary hover:text-primary-light transition-colors duration-200"
    >
      {language === 'en' ? 'عربي' : 'English'}
    </button>
  );
};

export default LanguageSwitch;