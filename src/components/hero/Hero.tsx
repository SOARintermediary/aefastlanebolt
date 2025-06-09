import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero: FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="relative bg-primary overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto">
        <div className={`relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 ${
          isRTL ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
        } lg:max-w-2xl`}>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <HeroContent />
          </main>
        </div>
      </div>
      <HeroImage />
    </div>
  );
};

export default Hero; 