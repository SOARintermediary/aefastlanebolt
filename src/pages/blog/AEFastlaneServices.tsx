import React from 'react';
import { Briefcase, Clock, DollarSign, Users, CheckCircle, Star, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import BlogArticle from '../../components/blog/BlogArticle';

interface Service {
  title: string;
  description: string;
  features: string[];
  timeline: string;
  cost: string;
}

interface Benefit {
  icon: typeof Star;
  title: string;
  description: string;
}

interface Process {
  step: number;
  title: string;
  description: string;
  duration: string;
}

const AEFastlaneServices = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const services: Service[] = [
    {
      title: t('blog.services.items.0.title'),
      description: t('blog.services.items.0.description'),
      features: t('blog.services.items.0.features').split('|'),
      timeline: t('blog.services.items.0.timeline'),
      cost: t('blog.services.items.0.cost')
    },
    {
      title: t('blog.services.items.1.title'),
      description: t('blog.services.items.1.description'),
      features: t('blog.services.items.1.features').split('|'),
      timeline: t('blog.services.items.1.timeline'),
      cost: t('blog.services.items.1.cost')
    },
    {
      title: t('blog.services.items.2.title'),
      description: t('blog.services.items.2.description'),
      features: t('blog.services.items.2.features').split('|'),
      timeline: t('blog.services.items.2.timeline'),
      cost: t('blog.services.items.2.cost')
    },
    {
      title: t('blog.services.items.3.title'),
      description: t('blog.services.items.3.description'),
      features: t('blog.services.items.3.features').split('|'),
      timeline: t('blog.services.items.3.timeline'),
      cost: t('blog.services.items.3.cost')
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: Clock,
      title: t('blog.services.benefits.0.title'),
      description: t('blog.services.benefits.0.description')
    },
    {
      icon: Shield,
      title: t('blog.services.benefits.1.title'),
      description: t('blog.services.benefits.1.description')
    },
    {
      icon: Users,
      title: t('blog.services.benefits.2.title'),
      description: t('blog.services.benefits.2.description')
    }
  ];

  const process: Process[] = [
    {
      step: 1,
      title: t('blog.services.process.0.title'),
      description: t('blog.services.process.0.description'),
      duration: t('blog.services.process.0.duration')
    },
    {
      step: 2,
      title: t('blog.services.process.1.title'),
      description: t('blog.services.process.1.description'),
      duration: t('blog.services.process.1.duration')
    },
    {
      step: 3,
      title: t('blog.services.process.2.title'),
      description: t('blog.services.process.2.description'),
      duration: t('blog.services.process.2.duration')
    },
    {
      step: 4,
      title: t('blog.services.process.3.title'),
      description: t('blog.services.process.3.description'),
      duration: t('blog.services.process.3.duration')
    }
  ];

  return (
    <BlogArticle
      icon={Briefcase}
      category="blog.services.overview.category"
      titleKey="blog.posts.services.title"
      descriptionKey="blog.posts.services.excerpt"
    >
      {/* Key Benefits */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.services.benefits.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-primary/5 rounded-lg">
              <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.services.title')}
        </h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features & Benefits</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      {service.timeline}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Starting Cost</h4>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 text-primary mr-2" />
                      {service.cost}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t('blog.services.process.title')}
        </h2>
        <div className="space-y-6">
          {process.map((step) => (
            <div key={step.step} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-2" />
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlogArticle>
  );
};

export default AEFastlaneServices; 