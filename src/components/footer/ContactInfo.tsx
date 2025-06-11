import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, Phone } from 'lucide-react';

const ContactInfo: FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
      <div className="space-y-2">
        <a href="mailto:contact@aefastlane.com" className="flex items-center text-gray-300 hover:text-accent">
          <Mail size={20} className="mr-2" />
          contact@aefastlane.com
        </a>
    
      </div>
    </div>
  );
};

export default ContactInfo; 