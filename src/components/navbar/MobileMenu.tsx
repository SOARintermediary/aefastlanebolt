import { type FC } from 'react';
import LanguageSwitch from '../LanguageSwitch';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#services" className="block px-3 py-2 text-primary hover:text-primary-light">
          {t('nav.services')}
        </a>
        <a href="#pricing" className="block px-3 py-2 text-primary hover:text-primary-light">
          {t('nav.pricing')}
        </a>
        <a href="/blog" className="block px-3 py-2 text-primary hover:text-primary-light">
          {t('nav.blog')}
        </a>
        <a href="#hr-services" className="block px-3 py-2 text-primary hover:text-primary-light">
          {t('nav.hrServices')}
        </a>
        <a href="#contact" className="block px-3 py-2 text-primary hover:text-primary-light">
          {t('nav.contactUs')}
        </a>
        <div className="px-3 py-2">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 