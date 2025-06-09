import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitch from '../LanguageSwitch';
import BlogDropdown from './BlogDropdown';

interface DesktopMenuProps {
  isBlogOpen: boolean;
  setIsBlogOpen: (isOpen: boolean) => void;
}

const DesktopMenu: FC<DesktopMenuProps> = ({ isBlogOpen, setIsBlogOpen }) => {
  const { t } = useLanguage();

  return (
    <div className="hidden md:flex items-center space-x-8">
      <a href="#services" className="text-primary hover:text-primary-light">
        {t('nav.services')}
      </a>
      <a href="#pricing" className="text-primary hover:text-primary-light">
        {t('nav.pricing')}
      </a>
      
      <BlogDropdown isOpen={isBlogOpen} setIsOpen={setIsBlogOpen} />
      
      <a href="#hr-services" className="text-primary hover:text-primary-light">
        {t('nav.hrServices')}
      </a>
      <LanguageSwitch />
      <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light">
        {t('nav.contactUs')}
      </a>
    </div>
  );
};

export default DesktopMenu; 