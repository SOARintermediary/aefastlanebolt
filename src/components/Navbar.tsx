import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <nav className="bg-white shadow-lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src="/aefastlanetransp copy.png" alt="AEFastLane Logo" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-primary hover:text-primary-light">{t('nav.services')}</a>
            <a href="#pricing" className="text-primary hover:text-primary-light">{t('nav.pricing')}</a>
            <a href="#hr-services" className="text-primary hover:text-primary-light">{t('nav.hrServices')}</a>
            <LanguageSwitch />
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light">
              {t('nav.contactUs')}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-primary-light"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.services')}</a>
            <a href="#pricing" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.pricing')}</a>
            <a href="#hr-services" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.hrServices')}</a>
            <a href="#contact" className="block px-3 py-2 text-primary hover:text-primary-light">{t('nav.contactUs')}</a>
            <div className="px-3 py-2">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;