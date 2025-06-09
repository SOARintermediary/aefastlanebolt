import { type FC } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button
          onClick={() => scrollToSection('services')}
          className="w-full text-left px-3 py-2 text-primary hover:text-primary-light transition-all duration-300 hover:bg-gray-50 rounded-md focus:outline-none"
        >
          {t('nav.services')}
        </button>
        
        <Link 
          to="/blog"
          className="block px-3 py-2 text-primary hover:text-primary-light transition-all duration-300 hover:bg-gray-50 rounded-md"
        >
          {t('nav.blog')}
        </Link>
        
        <button
          onClick={() => scrollToSection('contact')}
          className="w-full text-left px-3 py-2 text-primary hover:text-primary-light transition-all duration-300 hover:bg-gray-50 rounded-md focus:outline-none"
        >
          {t('nav.contactUs')}
        </button>
        
        <div className="px-3 py-2">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 