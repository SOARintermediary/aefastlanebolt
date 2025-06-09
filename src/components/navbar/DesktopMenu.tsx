import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitch from '../LanguageSwitch';
import BlogDropdown from './BlogDropdown';

interface DesktopMenuProps {
  isBlogOpen: boolean;
  setIsBlogOpen: (isOpen: boolean) => void;
}

const DesktopMenu: FC<DesktopMenuProps> = ({ isBlogOpen, setIsBlogOpen }) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
      <a href="#services" className="text-primary hover:text-primary-light transition-colors duration-200">
        {t('nav.services')}
      </a>
      <a href="#pricing" className="text-primary hover:text-primary-light transition-colors duration-200">
        {t('nav.pricing')}
      </a>
      
      <BlogDropdown isOpen={isBlogOpen} setIsOpen={setIsBlogOpen} />
      
      <a href="#hr-services" className="text-primary hover:text-primary-light transition-colors duration-200">
        {t('nav.hrServices')}
      </a>
      <LanguageSwitch />
      <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors duration-200">
        {t('nav.contactUs')}
      </a>
    </div>
  );
};

export default DesktopMenu; 