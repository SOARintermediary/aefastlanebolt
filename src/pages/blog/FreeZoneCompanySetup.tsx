import React from 'react';
import { Building2, Shield, DollarSign, Users, Zap, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Advantage {
  icon: typeof Shield;
  title: string;
  description: string;
}

interface Zone {
  name: string;
  fullName: string;
  specialty: string;
  minCost: string;
  benefits: string[];
  color: string;
}

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

const FreeZoneCompanySetup = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const stats = [
    {
      value: t('blog.freeZoneSetup.stats.items.0.value'),
      label: t('blog.freeZoneSetup.stats.items.0.label')
    },
    {
      value: t('blog.freeZoneSetup.stats.items.1.value'),
      label: t('blog.freeZoneSetup.stats.items.1.label')
    },
    {
      value: t('blog.freeZoneSetup.stats.items.2.value'),
      label: t('blog.freeZoneSetup.stats.items.2.label')
    }
  ];

  const advantages: Advantage[] = [
    {
      icon: Shield,
      title: t('blog.freeZoneSetup.why.advantages.0.title'),
      description: t('blog.freeZoneSetup.why.advantages.0.description')
    },
    {
      icon: DollarSign,
      title: t('blog.freeZoneSetup.why.advantages.1.title'),
      description: t('blog.freeZoneSetup.why.advantages.1.description')
    },
    {
      icon: Zap,
      title: t('blog.freeZoneSetup.why.advantages.2.title'),
      description: t('blog.freeZoneSetup.why.advantages.2.description')
    },
    {
      icon: Users,
      title: t('blog.freeZoneSetup.why.advantages.3.title'),
      description: t('blog.freeZoneSetup.why.advantages.3.description')
    }
  ];

  const zones: Zone[] = [
    {
      name: t('blog.freeZoneSetup.zones.items.0.name'),
      fullName: t('blog.freeZoneSetup.zones.items.0.fullName'),
      specialty: t('blog.freeZoneSetup.zones.items.0.specialty'),
      minCost: t('blog.freeZoneSetup.zones.items.0.minCost'),
      benefits: t('blog.freeZoneSetup.zones.items.0.benefits').split('|'),
      color: 'blue'
    },
    {
      name: t('blog.freeZoneSetup.zones.items.1.name'),
      fullName: t('blog.freeZoneSetup.zones.items.1.fullName'),
      specialty: t('blog.freeZoneSetup.zones.items.1.specialty'),
      minCost: t('blog.freeZoneSetup.zones.items.1.minCost'),
      benefits: t('blog.freeZoneSetup.zones.items.1.benefits').split('|'),
      color: 'green'
    },
    {
      name: t('blog.freeZoneSetup.zones.items.2.name'),
      fullName: t('blog.freeZoneSetup.zones.items.2.fullName'),
      specialty: t('blog.freeZoneSetup.zones.items.2.specialty'),
      minCost: t('blog.freeZoneSetup.zones.items.2.minCost'),
      benefits: t('blog.freeZoneSetup.zones.items.2.benefits').split('|'),
      color: 'purple'
    },
    {
      name: t('blog.freeZoneSetup.zones.items.3.name'),
      fullName: t('blog.freeZoneSetup.zones.items.3.fullName'),
      specialty: t('blog.freeZoneSetup.zones.items.3.specialty'),
      minCost: t('blog.freeZoneSetup.zones.items.3.minCost'),
      benefits: t('blog.freeZoneSetup.zones.items.3.benefits').split('|'),
      color: 'orange'
    }
  ];

  const steps: Step[] = [
    {
      step: 1,
      title: t('blog.freeZoneSetup.steps.items.0.title'),
      description: t('blog.freeZoneSetup.steps.items.0.description'),
      duration: t('blog.freeZoneSetup.steps.items.0.duration'),
      details: t('blog.freeZoneSetup.steps.items.0.details').split('|')
    },
    {
      step: 2,
      title: t('blog.freeZoneSetup.steps.items.1.title'),
      description: t('blog.freeZoneSetup.steps.items.1.description'),
      duration: t('blog.freeZoneSetup.steps.items.1.duration'),
      details: t('blog.freeZoneSetup.steps.items.1.details').split('|')
    },
    {
      step: 3,
      title: t('blog.freeZoneSetup.steps.items.2.title'),
      description: t('blog.freeZoneSetup.steps.items.2.description'),
      duration: t('blog.freeZoneSetup.steps.items.2.duration'),
      details: t('blog.freeZoneSetup.steps.items.2.details').split('|')
    },
    {
      step: 4,
      title: t('blog.freeZoneSetup.steps.items.3.title'),
      description: t('blog.freeZoneSetup.steps.items.3.description'),
      duration: t('blog.freeZoneSetup.steps.items.3.duration'),
      details: t('blog.freeZoneSetup.steps.items.3.details').split('|')
    },
    {
      step: 5,
      title: t('blog.freeZoneSetup.steps.items.4.title'),
      description: t('blog.freeZoneSetup.steps.items.4.description'),
      duration: t('blog.freeZoneSetup.steps.items.4.duration'),
      details: t('blog.freeZoneSetup.steps.items.4.details').split('|')
    },
    {
      step: 6,
      title: t('blog.freeZoneSetup.steps.items.5.title'),
      description: t('blog.freeZoneSetup.steps.items.5.description'),
      duration: t('blog.freeZoneSetup.steps.items.5.duration'),
      details: t('blog.freeZoneSetup.steps.items.5.details').split('|')
    }
  ];

  return (
    <BlogArticle
      icon={Building2}
      category="blog.freeZoneSetup.overview.category"
      titleKey="blog.posts.freeZoneSetup.title"
      descriptionKey="blog.posts.freeZoneSetup.excerpt"
    >
      {/* Key Statistics */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneSetup.stats.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Advantages */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneSetup.why.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
              <advantage.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Free Zones */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneSetup.zones.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {zones.map((zone, index) => (
            <div key={index} className={`border border-${zone.color}-200 rounded-lg p-6`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{zone.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{zone.fullName}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Specialty</p>
                  <p className="font-medium">{zone.specialty}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Starting Cost</p>
                  <p className="font-medium">{zone.minCost}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Key Benefits</p>
                  <ul className="space-y-2">
                    {zone.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className={`h-5 w-5 text-${zone.color}-500 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Setup Process */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.freeZoneSetup.steps.title')}
        </h2>
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.step} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                {step.duration}
              </div>
              <ul className="space-y-2">
                {step.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </BlogArticle>
  );
};

export default FreeZoneCompanySetup;