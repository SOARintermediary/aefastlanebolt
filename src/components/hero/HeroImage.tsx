import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroImage: FC = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`lg:absolute lg:inset-y-0 ${isRTL ? 'lg:left-0' : 'lg:right-0'} lg:w-1/2`}>
      <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-10" />
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-2xl opacity-50" />
        
        {/* Image container with sophisticated frame */}
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl transform lg:scale-105">
          <div className="absolute inset-0 border-4 border-accent/20 rounded-lg z-20" />
          <img
            className="h-full w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            src="https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg"
            alt="Happy business traveler walking through airport"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage; 