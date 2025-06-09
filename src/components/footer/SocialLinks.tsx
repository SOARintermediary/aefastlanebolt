import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Facebook, Instagram } from 'lucide-react';

const SocialLinks: FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
      <div className="flex space-x-4">
        <a
          href="https://facebook.com/aefastlane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-accent"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://instagram.com/aefastlane"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-accent"
        >
          <Instagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks; 