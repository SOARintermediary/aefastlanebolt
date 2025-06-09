import { type FC } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroContent: FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`${isRTL ? 'text-right' : 'text-left'} lg:text-left`}>
      <h1 className={`text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl ${
        isRTL ? 'font-arabic' : ''
      }`}>
        <span className="block transform transition-transform duration-700 hover:scale-105">
          {t('hero.title1')}
        </span>
        <span className="block text-accent transform transition-transform duration-700 hover:scale-105">
          {t('hero.title2')}
        </span>
      </h1>
      <p className={`mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl ${
        isRTL ? 'font-arabic lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'
      }`}>
        {t('hero.description')}
      </p>
      <div className={`mt-5 sm:mt-8 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
        <div className="rounded-md shadow">
          <button
            onClick={scrollToContact}
            className={`flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 md:py-4 md:text-lg md:px-10 ${
              isRTL ? 'font-arabic flex-row-reverse' : ''
            }`}
          >
            {t('hero.cta')}
            {isRTL ? (
              <ArrowLeft className="mr-2" size={20} />
            ) : (
              <ArrowRight className="ml-2" size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent; 