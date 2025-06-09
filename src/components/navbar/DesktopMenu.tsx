import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch';
import BlogDropdown from './BlogDropdown';

interface DesktopMenuProps {
  isBlogOpen: boolean;
  setIsBlogOpen: (isOpen: boolean) => void;
}

const DesktopMenu: FC<DesktopMenuProps> = ({ isBlogOpen, setIsBlogOpen }) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
      <button 
        onClick={() => scrollToSection('services')}
        className="text-primary hover:text-primary-light transition-all duration-300 hover:scale-105 focus:outline-none"
      >
        {t('nav.services')}
      </button>
      
      <BlogDropdown isOpen={isBlogOpen} setIsOpen={setIsBlogOpen} />
      
      <LanguageSwitch />
      
      <button
        onClick={() => scrollToSection('contact')}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none active:scale-95"
      >
        {t('nav.contactUs')}
      </button>
    </div>
  );
};

export default DesktopMenu; 