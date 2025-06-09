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
          <h2 className={`text-3xl font-bold text-gray-900 sm:text-4xl ${isRTL ? 'font-arabic' : ''}`}>
            {t('features.title')}
          </h2>
          <p className={`mt-4 text-xl text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 rounded-lg blur transition duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(feature.titleKey)}
                  </h3>
                  <p className={`text-gray-600 ${isRTL ? 'font-arabic' : ''}`}>
                    {t(feature.descriptionKey)}
                  </p>
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