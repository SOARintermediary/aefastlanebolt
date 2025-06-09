import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const Footer: FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/aefastlanetransp copy.png" alt="AEFastLane Logo" className="h-12 mb-4" />
            <p className="text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          
          <ContactInfo />
          <SocialLinks />
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} AEFastLane. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 