import React from 'react';
import { Building2, CheckCircle, Clock, DollarSign, Users, Shield, Zap, LucideIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

interface FreeZone {
  name: string;
  fullName: string;
  specialty: string;
  minCost: string;
  benefits: string[];
  color: string;
}

interface TranslatedAdvantage {
  icon: string;
  title: string;
  description: string;
}

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Statistic {
  value: string;
  label: string;
}

const iconMap: Record<string, LucideIcon> = {
  'Shield': Shield,
  'DollarSign': DollarSign,
  'Zap': Zap,
  'Users': Users
};

const FreeZoneCompanySetup = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const translatedAdvantages = (t('blog.freeZoneSetup.why.advantages') || []) as TranslatedAdvantage[];
  const advantages = translatedAdvantages.map((adv) => ({
    ...adv,
    icon: iconMap[adv.icon]
  })) as Advantage[];

  const stats = (t('blog.freeZoneSetup.stats.items') || []) as Statistic[];
  const freeZones = (t('blog.freeZoneSetup.zones.items') || []) as FreeZone[];
  const setupSteps = (t('blog.freeZoneSetup.steps.items') || []) as Step[];

  return (
    <BlogArticle
      icon={Building2}
      category="blog.freeZoneSetup.overview.category"
      titleKey="blog.freeZoneSetup.overview.title"
      descriptionKey="blog.freeZoneSetup.overview.description"
    >
      <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Why Choose Free Zone Setup */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.freeZoneSetup.why.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {advantages.map((advantage, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 p-4 border border-gray-200 rounded-lg`}>
                <advantage.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              {t('blog.freeZoneSetup.stats.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-blue-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Free Zones */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.freeZoneSetup.zones.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {freeZones.map((zone, index) => (
              <div key={index} className={`border-l-4 border-${zone.color}-500 bg-${zone.color}-50 p-6 rounded-r-lg`}>
                <h3 className={`text-xl font-semibold text-${zone.color}-800 mb-1`}>{zone.name}</h3>
                <p className={`text-sm text-${zone.color}-600 mb-2`}>{zone.fullName}</p>
                <p className={`text-${zone.color}-700 mb-3`}>
                  <strong>Specialty:</strong> {zone.specialty}
                </p>
                <p className={`text-${zone.color}-700 mb-3`}>
                  <strong>Starting from:</strong> {zone.minCost}
                </p>
                <div className="space-y-1">
                  {zone.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className={`flex items-center text-${zone.color}-700`}>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {t('blog.freeZoneSetup.steps.title')}
          </h2>
          
          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <div key={index} className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors duration-200`}>
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </span>
                  <ul className="mt-3 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={`flex items-center text-gray-600 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <CheckCircle className={`h-4 w-4 text-primary ${isRTL ? 'ml-2' : 'mr-2'}`} />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlogArticle>
  );
};

export default FreeZoneCompanySetup;