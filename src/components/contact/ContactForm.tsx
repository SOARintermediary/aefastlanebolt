import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactForm: FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-2">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-teal rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="mailto:contact@aefastlane.com"
            className="text-2xl font-semibold text-primary hover:text-primary-light transition-colors duration-300 underline decoration-2 underline-offset-4 hover:decoration-accent"
          >
            contact@aefastlane.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;