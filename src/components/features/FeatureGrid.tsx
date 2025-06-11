import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Building2, 
  Briefcase, 
  Globe2, 
  Users, 
  ArrowUpRight, 
  Network
} from 'lucide-react';

interface Feature {
  icon: typeof Building2;
  titleKey: string;
  descriptionKey: string;
}

const features: Feature[] = [
  {
    icon: Building2,
    titleKey: 'features.service.title',
    descriptionKey: 'features.service.description'
  },
  {
    icon: Briefcase,
    titleKey: 'features.plans.title',
    descriptionKey: 'features.plans.description'
  },
  {
    icon: Globe2,
    titleKey: 'features.track.title',
    descriptionKey: 'features.track.description'
  },
  {
    icon: Users,
    titleKey: 'features.client.title',
    descriptionKey: 'features.client.description'
  },
  {
    icon: ArrowUpRight,
    titleKey: 'features.onboarding.title',
    descriptionKey: 'features.onboarding.description'
  },
  {
    icon: Network,
    titleKey: 'features.network.title',
    descriptionKey: 'features.network.description'
  }
];

const FeatureGrid: FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold text-primary sm:text-4xl mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('features.title')}
          </h2>
          <p className={`mt-4 text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('features.subtitle')}
          </p>
          <div className="mt-8 flex justify-center space-x-3">
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-4 h-4 bg-teal rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-primary/20"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-teal opacity-0 group-hover:opacity-30 rounded-2xl blur-sm transition duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-accent/10 to-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:via-accent/20 group-hover:to-teal/20 transition-all duration-500">
                    <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(feature.titleKey)}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(feature.descriptionKey)}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid; 