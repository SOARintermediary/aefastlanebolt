import { type FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroContent: FC = () => {
  const { t } = useLanguage();

  return (
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
        <span className="block">{t('hero.title1')}</span>
        <span className="block text-accent">{t('hero.title2')}</span>
      </h1>
      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        {t('hero.description')}
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#contact"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent-dark md:py-4 md:text-lg md:px-10"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent; 